// ── CASHFREE: active (cashfree-pg v5) ────────────────────────────────────────
import { createCashfreeInstance } from "../utils/cashfree";
import { savePayment } from "../services/payment.service";
import { sendPaymentFailureEmail } from "../services/email.service";

// Helper: extract form_id from order_id string (e.g. "cf_322_1772694830212" → "322")
function extractFormIdFromOrderId(orderId: string): string | null {
    const parts = orderId.split('_');
    if (parts.length >= 3) {
        const extracted = parts[1];
        if (extracted && extracted !== 'guest' && extracted !== 'null') return extracted;
    }
    return null;
}

// ── RAZORPAY: disabled (kept for reference) ───────────────────────────────────
// import Razorpay from "razorpay";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    // ── RAZORPAY & CASHFREE fields ───────────────────────────────────────────
    const { 
        cf_order_id, cf_payment_id, 
        razorpay_order_id, razorpay_payment_id,
        error_code, error_description, error_source, error_step, error_reason 
    } = body;

    const orderId = cf_order_id || razorpay_order_id;
    const paymentId = cf_payment_id || razorpay_payment_id || 'N/A';
    const gateway = razorpay_order_id ? 'razorpay' : 'cashfree';

    if (!orderId) {
        console.error("[PAYMENT][failure] FAILED — Missing order ID in failure report", {
            event: "client_reported_failure",
            reason: "missing_order_id",
            timestamp: new Date().toISOString()
        });
        throw createError({ statusCode: 400, message: "Missing order ID" });
    }

    // --- LOG: Client Reported Failure (received) ---
    console.log("[PAYMENT][failure] Client reported a payment failure", {
        event: "client_reported_failure_received",
        gateway,
        order_id: orderId,
        payment_id: paymentId,
        error_code: error_code || null,
        error_description: error_description || null,
        timestamp: new Date().toISOString()
    });

    const config = useRuntimeConfig(event);

    // Default context
    let userId: string | null = null;
    let formType: string | null = null;
    let formId: string | null = null;
    let userName = '';
    let userEmail = '';
    let userMobile = '';
    let amount = Number(
        process.env.RAZORPAY_PAYMENT_AMOUNT || 
        process.env.CASHFREE_PAYMENT_AMOUNT || 
        config.public?.paymentAmount || 
        2950
    );

    console.log(`[PAYMENT][failure][debug] Runtime Amount Resolution:`, {
        env_RAZORPAY_PAYMENT_AMOUNT: process.env.RAZORPAY_PAYMENT_AMOUNT,
        env_CASHFREE_PAYMENT_AMOUNT: process.env.CASHFREE_PAYMENT_AMOUNT,
        config_public_paymentAmount: config.public?.paymentAmount,
        resolved_amount: amount
    });
    let currency = process.env.RAZORPAY_CURRENCY || config.razorpayCurrency || 'INR';

    // ── Step 1: Try to fetch order context (best-effort) ────────
    if (gateway === 'cashfree') {
        try {
            const { instance: cashfree } = createCashfreeInstance(config, event);
            const orderRes = await cashfree.PGFetchOrder(orderId);
            const orderData = orderRes.data;

            amount = orderData.order_amount || amount;
            currency = orderData.order_currency || currency;

            if (orderData.order_note) {
                try {
                    const note = JSON.parse(orderData.order_note);
                    userId = note.user_id ? String(note.user_id) : null;
                    formType = note.form_type ? String(note.form_type) : null;
                    formId = note.form_id ? String(note.form_id) : null;
                    userName = note.name ? String(note.name) : '';
                    userEmail = note.email ? String(note.email) : '';
                    userMobile = note.mobile ? String(note.mobile) : '';
                } catch (_) {}
            }
            if (!userEmail && orderData.customer_details?.customer_email) userEmail = String(orderData.customer_details.customer_email);
            if (!userName && orderData.customer_details?.customer_name) userName = String(orderData.customer_details.customer_name);
            if (!userMobile && orderData.customer_details?.customer_phone) userMobile = String(orderData.customer_details.customer_phone);
        } catch (e: any) {
            console.warn("[PAYMENT][failure] Could not fetch Cashfree order context", { orderId, error: e.message });
        }
    } else {
        try {
            const { instance: razorpay } = createRazorpayInstance(config);
            const orderRes = await razorpay.orders.fetch(orderId);
            amount = Number(orderRes.amount) / 100;
            currency = orderRes.currency;
            if (orderRes.notes) {
                userId = orderRes.notes.user_id ? String(orderRes.notes.user_id) : null;
                formType = orderRes.notes.form_type ? String(orderRes.notes.form_type) : null;
                formId = orderRes.notes.form_id ? String(orderRes.notes.form_id) : null;
                userName = orderRes.notes.name ? String(orderRes.notes.name) : '';
                userEmail = orderRes.notes.email ? String(orderRes.notes.email) : '';
                userMobile = orderRes.notes.mobile ? String(orderRes.notes.mobile) : '';
            }
        } catch (e: any) {
            console.warn("[PAYMENT][failure] Could not fetch Razorpay order context", { orderId, error: e.message });
        }
    }

    // Fallback: extract form_id from order_id string
    if (!formId) {
        formId = extractFormIdFromOrderId(orderId);
    }

    // ── Step 2: Always save the failure record to DB ──────────────────────────
    try {
        await savePayment({
            student_id: userId || null,
            form_type: formType || 1,
            form_id: formId,
            razorpay_order_id: orderId,
            razorpay_payment_id: paymentId,
            razorpay_signature: 'N/A',
            amount,
            currency,
            status: "failed",
            response: JSON.stringify({ ...body, source: "client_report", gateway }),
            source:4
        });

        // --- LOG: Failure Recorded Successfully ---
        console.log(`[PAYMENT][failure] RECORDED — Client failure saved to DB (${gateway})`, {
            event: "client_reported_failure",
            status: "failed",
            gateway,
            order_id: orderId,
            payment_id: paymentId,
            amount, currency,
            user_id: userId, name: userName, email: userEmail, mobile: userMobile,
            form_type: formType, form_id: formId,
            error_code: error_code || null,
            error_description: error_description || null,
            timestamp: new Date().toISOString()
        });

        // ── Step 3: Send Failure Email ───────────────────────────────────────────
        if (userEmail) {
            try {
                // Determine payment link, could be the profile page or a direct checkout link
                const siteUrl = config.public?.siteUrl || "https://www.gccschool.com";
                const paymentLink = `${siteUrl}`;
                await sendPaymentFailureEmail({
                    to: userEmail,
                    name: userName || 'Candidate',
                    paymentLink: paymentLink,
                    emailHost: config.emailHost || process.env.EMAIL_HOST || '',
                    emailUser: config.emailUser || process.env.EMAIL_HOST_USER || '',
                    emailPassword: config.emailPassword || process.env.EMAIL_HOST_PASSWORD || '',
                    emailPort: process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 587,
                    emailSecure: process.env.EMAIL_USE_SSL === 'True' || process.env.EMAIL_USE_SSL === 'true',
                    fromEmail: process.env.DEFAULT_FROM_EMAIL || process.env.EMAIL_HOST_USER || ''
                });
                console.log("[PAYMENT][failure] Sent failure email to", userEmail);
            } catch (emailErr: any) {
                console.error("[PAYMENT][failure] Failed to send failure email", emailErr.message);
                // Do not throw, return success for recording the failure
            }
        }

        return { success: true, message: "Failure recorded" };

    } catch (saveError: any) {
        console.error("[PAYMENT][failure] ERROR — Could not save failure record to DB", {
            event: "client_report_save_error",
            gateway: "cashfree",
            cf_order_id,
            cf_payment_id: cf_payment_id || null,
            error_message: saveError?.message || saveError,
            timestamp: new Date().toISOString()
        });
        return { success: false, message: saveError?.message };
    }
});
