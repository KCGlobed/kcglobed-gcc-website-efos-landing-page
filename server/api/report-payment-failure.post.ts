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

    // ── CASHFREE fields ───────────────────────────────────────────────────────
    const { cf_order_id, cf_payment_id, error_code, error_description, error_source, error_step, error_reason } = body;

    // ── RAZORPAY fields (disabled) ────────────────────────────────────────────
    // const { razorpay_order_id, razorpay_payment_id } = body;

    if (!cf_order_id) {
        console.error("[PAYMENT][failure] FAILED — Missing cf_order_id in failure report", {
            event: "client_reported_failure",
            reason: "missing_order_id",
            timestamp: new Date().toISOString()
        });
        throw createError({ statusCode: 400, message: "Missing order ID" });
    }

    // --- LOG: Client Reported Failure (received) ---
    console.log("[PAYMENT][failure] Client reported a payment failure", {
        event: "client_reported_failure_received",
        gateway: "cashfree",
        cf_order_id,
        cf_payment_id: cf_payment_id || null,
        error_code: error_code || null,
        error_description: error_description || null,
        error_source: error_source || null,
        error_step: error_step || null,
        error_reason: error_reason || null,
        timestamp: new Date().toISOString()
    });

    const config = useRuntimeConfig(event);

    // ── CASHFREE: Initialize SDK ──────────────────────────────────────────────
    let cashfree: ReturnType<typeof createCashfreeInstance>["instance"] | null = null;
    try {
        const cf = createCashfreeInstance(config, event);
        cashfree = cf.instance;
    } catch (e: any) {
        console.warn("[PAYMENT][failure] Cashfree config error — will save failure without order context", {
            reason: e.message, cf_order_id
        });
        // Don't throw — we still want to save the failure record below
    }

    // ── Step 1: Try to fetch order context from Cashfree (best-effort) ────────
    // FIX: This is now SEPARATE from the savePayment call.
    // Even if PGFetchOrder fails, we still save the failure to DB with whatever we have.
    let userId: string | null = null;
    let formType: string | null = null;
    let formId: string | null = null;
    let userName = '';
    let userEmail = '';
    let userMobile = '';
    let amount = Number(config.cashfreePaymentAmount || process.env.CASHFREE_PAYMENT_AMOUNT || 2950);
    let currency = 'INR';

    if (cashfree) {
        try {
            const orderRes = await cashfree.PGFetchOrder(cf_order_id);
            const orderData = orderRes.data;

            amount = orderData.order_amount || amount;
            currency = orderData.order_currency || currency;

            // Parse user context from order_note (stored at order creation)
            if (orderData.order_note) {
                try {
                    const note = JSON.parse(orderData.order_note);
                    userId = note.user_id || null;
                    formType = note.form_type ? String(note.form_type) : null;
                    formId = note.form_id ? String(note.form_id) : null;
                    userName = note.name || '';
                    userEmail = note.email || '';
                    userMobile = note.mobile || '';
                } catch (_) {
                    console.warn("[PAYMENT][failure] Could not parse order_note JSON", { cf_order_id });
                }
            }

            // Fallback: extract form_id from order_id string
            if (!formId) {
                formId = extractFormIdFromOrderId(cf_order_id);
                if (formId) console.log("[PAYMENT][failure] Extracted form_id from order_id", { cf_order_id, form_id: formId });
            }

            // Fallback: use customer_details
            if (!userEmail && orderData.customer_details?.customer_email) userEmail = orderData.customer_details.customer_email;
            if (!userName && orderData.customer_details?.customer_name) userName = orderData.customer_details.customer_name;
            if (!userMobile && orderData.customer_details?.customer_phone) userMobile = orderData.customer_details.customer_phone;

        } catch (fetchError: any) {
            // Log the fetch failure but do NOT abort — we continue to save below
            console.warn("[PAYMENT][failure] Could not fetch Cashfree order (will still save failure record)", {
                cf_order_id,
                error_message: fetchError?.response?.data?.message || fetchError?.message,
                timestamp: new Date().toISOString()
            });
        }
    }

    // ── Step 2: Always save the failure record to DB ──────────────────────────
    // This runs regardless of whether order fetch succeeded or failed.
    try {
        await savePayment({
            student_id: userId || null,
            form_type: formType || 1,
            form_id: formId,
            razorpay_order_id: cf_order_id,
            razorpay_payment_id: cf_payment_id || 'N/A',
            razorpay_signature: 'N/A',
            amount,
            currency,
            status: "failed",
            response: JSON.stringify({ ...body, source: "client_report", gateway: "cashfree" })
        });

        // --- LOG: Failure Recorded Successfully ---
        console.log("[PAYMENT][failure] RECORDED — Client failure saved to DB", {
            event: "client_reported_failure",
            status: "failed",
            gateway: "cashfree",
            cf_order_id,
            cf_payment_id: cf_payment_id || 'N/A',
            amount, currency,
            user_id: userId, name: userName, email: userEmail, mobile: userMobile,
            form_type: formType, form_id: formId,
            error_code: error_code || null,
            error_description: error_description || null,
            error_source: error_source || null,
            error_step: error_step || null,
            error_reason: error_reason || null,
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
