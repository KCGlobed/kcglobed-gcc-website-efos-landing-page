// ── CASHFREE: active (cashfree-pg v5) ────────────────────────────────────────
import { createCashfreeInstance } from "../utils/cashfree";
import { savePayment } from "../services/payment.service";
import { sendPaymentConfirmationEmail } from "../services/email.service";

// ── RAZORPAY: disabled (kept for reference) ───────────────────────────────────
// import Razorpay from "razorpay";
// import crypto from "crypto";

// Helper: try to extract form_id from the order_id string (e.g. "cf_322_1772694830212" → "322")
function extractFormIdFromOrderId(orderId: string): string | null {
    const parts = orderId.split('_');
    // order_id format: cf_{form_id}_{timestamp}  or  cf_{user_id}_{timestamp}
    if (parts.length >= 3) {
        const extracted = parts[1];
        if (extracted && extracted !== 'guest' && extracted !== 'null') return extracted;
    }
    return null;
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    // ── CASHFREE fields ───────────────────────────────────────────────────────
    // NOTE: The Cashfree JS SDK does NOT return a numeric cf_payment_id in the callback.
    // We only need cf_order_id — we fetch all payments server-side via PGOrderFetchPayments.
    const { cf_order_id } = body;

    // ── RAZORPAY fields (disabled) ────────────────────────────────────────────
    // const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    if (!cf_order_id) {
        console.error("[PAYMENT][complete] FAILED — Missing cf_order_id", {
            event: "complete_payment_failed",
            reason: "missing_cf_order_id",
            timestamp: new Date().toISOString()
        });
        throw createError({ statusCode: 400, message: "Missing required order ID" });
    }

    const config = useRuntimeConfig(event);

    // ── CASHFREE: Initialize SDK ──────────────────────────────────────────────
    let cashfree: ReturnType<typeof createCashfreeInstance>["instance"];
    let cfEnvironment: string;
    try {
        const cf = createCashfreeInstance(config, event);
        cashfree = cf.instance;
        cfEnvironment = cf.cfEnvironment;
    } catch (e: any) {
        console.error("[PAYMENT][complete] FAILED — Cashfree config error", { reason: e.message, cf_order_id });
        throw createError({ statusCode: 500, message: "Cashfree configuration missing on server" });
    }

    // Extract user metadata from order
    let userId: string | null = null;
    let formType: string | null = null;
    let formId: string | null = null;
    let userName = '';
    let userEmail = '';
    let userMobile = '';
    let amount = 0;
    let currency = 'INR';
    let state = "";
    let city = "";

    // ── CASHFREE: Fetch Order to get user context ─────────────────────────────
    try {
        const orderRes = await cashfree.PGFetchOrder(cf_order_id);
        const orderData = orderRes.data;

        amount = orderData.order_amount || 0;
        currency = orderData.order_currency || 'INR';

        // Try to parse order_note JSON (stored at order creation in start-payment)
        if (orderData.order_note) {
            try {
                console.log("Himanshu order_note", orderData.order_note);
                const note = JSON.parse(orderData.order_note);
                userId = note.user_id || null;
                formType = note.form_type ? String(note.form_type) : null;
                formId = note.form_id ? String(note.form_id) : null;
                userName = note.name || '';
                userEmail = note.email || '';
                userMobile = note.mobile || '';
                state = note.state || '';
                city = note.city || '';
            } catch (_) {
                console.warn("[PAYMENT][complete] Could not parse order_note JSON — using fallback", { cf_order_id });
            }
        }

        // Fallback: extract form_id from order_id string (e.g. "cf_322_..." → "322")
        if (!formId) {
            formId = extractFormIdFromOrderId(cf_order_id);
            if (formId) {
                console.log("[PAYMENT][complete] Extracted form_id from order_id", { cf_order_id, form_id: formId });
            }
        }

        // Fallback: use customer_details from Cashfree order
        if (!userEmail && orderData.customer_details?.customer_email) userEmail = orderData.customer_details.customer_email;
        if (!userName && orderData.customer_details?.customer_name) userName = orderData.customer_details.customer_name;
        if (!userMobile && orderData.customer_details?.customer_phone) userMobile = orderData.customer_details.customer_phone;

        console.log("[PAYMENT][complete] Cashfree order fetched", {
            event: "order_fetched",
            gateway: "cashfree",
            environment: cfEnvironment,
            cf_order_id, amount, currency,
            user_id: userId, name: userName, email: userEmail,
            form_type: formType, form_id: formId,
            timestamp: new Date().toISOString()
        });

    } catch (error: any) {
        console.error("[PAYMENT][complete] FAILED — Error fetching Cashfree order", {
            event: "order_fetch_failed",
            gateway: "cashfree",
            cf_order_id,
            error_message: error?.response?.data?.message || error?.message,
            timestamp: new Date().toISOString()
        });
        throw createError({
            statusCode: error.statusCode || 500,
            message: error?.response?.data?.message || error?.message || "Failed to fetch order details"
        });
    }

    // ── CASHFREE: Verify Payment via PGOrderFetchPayments ────────────────────
    // The Cashfree JS SDK does NOT return a numeric cf_payment_id — we fetch all
    // payments for this order and find the successful one server-side.
    //
    // ── RAZORPAY: Signature Verification (disabled) ───────────────────────────
    // const generated_signature = crypto.createHmac("sha256", keySecret)
    //     .update(razorpay_order_id + "|" + razorpay_payment_id).digest("hex");
    // if (generated_signature !== razorpay_signature) { ... }

    let actualPaymentId = 'N/A';

    try {
        // PGOrderFetchPayments (plural) — fetches all payment attempts for this order
        const paymentsRes = await cashfree.PGOrderFetchPayments(cf_order_id);
        const payments: any[] = Array.isArray(paymentsRes.data) ? paymentsRes.data : [paymentsRes.data];

        const successPayment = payments.find((p: any) => p.payment_status === 'SUCCESS');

        if (!successPayment) {
            const latestStatus = payments[0]?.payment_status || 'UNKNOWN';

            console.error("[PAYMENT][complete] FAILED — No successful payment found", {
                event: "payment_not_successful",
                status: "failed",
                gateway: "cashfree",
                cf_order_id,
                latest_status: latestStatus,
                payment_count: payments.length,
                user_id: userId, name: userName, email: userEmail, amount, currency,
                form_type: formType, form_id: formId,
                timestamp: new Date().toISOString()
            });

            await savePayment({
                student_id: userId,
                form_type: formType || 1,
                form_id: formId,
                razorpay_order_id: cf_order_id,
                razorpay_payment_id: payments[0]?.cf_payment_id || 'N/A',
                razorpay_signature: `cf_status:${latestStatus}`,
                amount, currency,
                status: "failed",
                response: JSON.stringify({ cf_order_id, payment_status: latestStatus, gateway: "cashfree", payments })
            });

            throw createError({ statusCode: 400, message: `Payment not successful. Status: ${latestStatus}` });
        }

        actualPaymentId = String(successPayment.cf_payment_id);

        console.log("[PAYMENT][complete] Cashfree payment verified — status SUCCESS", {
            event: "payment_verified",
            gateway: "cashfree",
            cf_order_id,
            cf_payment_id: actualPaymentId,
            payment_status: successPayment.payment_status,
            user_id: userId, name: userName, email: userEmail,
            form_type: formType, form_id: formId,
            timestamp: new Date().toISOString()
        });

        // API will call to send mail with email and password

    } catch (error: any) {
        if (error.statusCode) throw error;
        console.error("[PAYMENT][complete] FAILED — Error verifying Cashfree payment", {
            event: "payment_verify_failed",
            cf_order_id,
            error_message: error?.response?.data?.message || error?.message,
            timestamp: new Date().toISOString()
        });
        throw createError({ statusCode: 500, message: "Failed to verify payment" });
    }

    // ── Save success to DB ────────────────────────────────────────────────────
    try {
        const paymentId = await savePayment({
            student_id: userId,
            form_type: formType || 1,
            form_id: formId,
            razorpay_order_id: cf_order_id,
            razorpay_payment_id: actualPaymentId,
            razorpay_signature: `cf_verified`,
            amount, currency,
            status: "success",
            response: JSON.stringify({ cf_order_id, cf_payment_id: actualPaymentId, gateway: "cashfree" })
        });

        console.log("[PAYMENT][complete] SUCCESS — Payment saved to DB", {
            event: "payment_completed",
            status: "success",
            gateway: "cashfree",
            payment_db_id: paymentId,
            cf_order_id, cf_payment_id: actualPaymentId, amount, currency,
            user_id: userId, name: userName, email: userEmail, mobile: userMobile,
            form_type: formType, form_id: formId,
            timestamp: new Date().toISOString()
        });

        return { success: true, message: "Payment verified and saved successfully", payment_id: paymentId };

    } catch (error: any) {
        console.error("[PAYMENT][complete] FAILED — Error saving payment to DB", {
            event: "save_failed",
            gateway: "cashfree",
            cf_order_id, cf_payment_id: actualPaymentId,
            user_id: userId, error_message: error.message || error,
            timestamp: new Date().toISOString()
        });

        try {
            await savePayment({
                student_id: userId, form_type: formType || 1, form_id: formId,
                razorpay_order_id: cf_order_id, razorpay_payment_id: actualPaymentId,
                razorpay_signature: `cf_save_failed`,
                amount, currency, status: "failed",
                response: JSON.stringify({ cf_order_id, error: error.message, gateway: "cashfree" })
            });
        } catch (innerError: any) {
            console.error("[PAYMENT][complete] CRITICAL — Failed to save failure fallback to DB", {
                cf_order_id, error_message: innerError?.message,
                timestamp: new Date().toISOString()
            });
        }

        throw createError({ statusCode: 500, message: error.message || "Failed to save payment" });
    }
});
