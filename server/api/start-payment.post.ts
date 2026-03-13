// ── CASHFREE: active (cashfree-pg v5) ────────────────────────────────────────
import { createCashfreeInstance } from "../utils/cashfree";

// ── RAZORPAY: disabled (kept for reference) ───────────────────────────────────
// import Razorpay from "razorpay";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const { user_id, name, email, mobile, form_type, form_id, city, state } = body;

    const config = useRuntimeConfig(event);

    // ── CASHFREE: Initialize SDK ──────────────────────────────────────────────
    let cashfree: ReturnType<typeof createCashfreeInstance>["instance"];
    let cfEnvironment: string;
    try {
        const cf = createCashfreeInstance(config, event);
        cashfree = cf.instance;
        cfEnvironment = cf.cfEnvironment;
    } catch (e: any) {
        console.error("[PAYMENT][start] FAILED — Cashfree keys missing in ENV/Config", {
            event: "order_creation_failed",
            reason: "missing_keys",
            user_id, form_type, form_id
        });
        return { success: false, message: "Cashfree configuration missing on server" };
    }

    // ── RAZORPAY CONFIG (disabled) ────────────────────────────────────────────
    // const key_id = (config.razorpayKeyId || process.env.RAZORPAY_KEY_ID || "").replace(/['"]/g, '').trim();
    // const key_secret = (config.razorpayKeySecret || process.env.RAZORPAY_KEY_SECRET || "").replace(/['"]/g, '').trim();

    // --- LOG: Payment Initiated ---
    console.log("[PAYMENT][start] Payment initiated", {
        event: "payment_initiated",
        gateway: "cashfree",
        environment: cfEnvironment,
        user_id, name, email, mobile, form_type, form_id,
        timestamp: new Date().toISOString()
    });

    try {
        const amount = Number(config.cashfreePaymentAmount || process.env.CASHFREE_PAYMENT_AMOUNT || 2950); // INR
        const currency = 'INR';
        const cfOrderId = `cf_${user_id || form_id || 'guest'}_${Date.now()}`;
        const customerId = `cust_${user_id || form_id || 'guest'}`;

        const orderRequest = {
            order_id: cfOrderId,
            order_amount: amount,
            order_currency: currency,
            customer_details: {
                customer_id: customerId,
                customer_name: name || "Applicant",
                customer_email: email || "noemail@kcglobed.com",
                customer_phone: mobile || "9999999999"
            },
            order_note: JSON.stringify({ user_id, form_type, form_id, name, email, mobile, city, state })
        };

        console.log("[PAYMENT][start] Creating Cashfree order", {
            event: "order_creating",
            gateway: "cashfree",
            environment: cfEnvironment,
            cf_order_id: cfOrderId,
            amount, currency, user_id, form_type, form_id
        });

        // ── RAZORPAY: Create Order (disabled) ─────────────────────────────────
        // const razorpay = new Razorpay({ key_id, key_secret });
        // const orderOptions = { amount: amount * 100, currency, receipt: `receipt_...`, notes: {...} };
        // const order = await razorpay.orders.create(orderOptions);

        const response = await cashfree.PGCreateOrder(orderRequest);
        const orderData = response.data;

        console.log("[PAYMENT][start] SUCCESS — Cashfree order created", {
            event: "order_created",
            status: "success",
            gateway: "cashfree",
            environment: cfEnvironment,
            cf_order_id: orderData.order_id,
            payment_session_id: orderData.payment_session_id ? "[present]" : "[missing]",
            amount, currency,
            user_id, name, email, mobile, form_type, form_id,
            timestamp: new Date().toISOString()
        });

        return {
            success: true,
            gateway: "cashfree",
            cf_order_id: orderData.order_id,
            payment_session_id: orderData.payment_session_id,
            amount,
            currency,
            environment: cfEnvironment
        };

    } catch (error: any) {
        const errorMessage = error?.response?.data?.message || error?.message || "Failed to create Cashfree order";

        console.error("[PAYMENT][start] FAILED — Cashfree order creation error", {
            event: "order_creation_failed",
            status: "failed",
            gateway: "cashfree",
            error_message: errorMessage,
            error_detail: error?.response?.data || error?.message,
            user_id, name, email, mobile, form_type, form_id,
            timestamp: new Date().toISOString()
        });

        return { success: false, message: errorMessage };
    }
});
