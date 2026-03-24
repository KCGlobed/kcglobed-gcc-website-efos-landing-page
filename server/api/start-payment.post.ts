// ── Unified Payment Start ──────────────────────────────────────────────
import { createCashfreeInstance } from "../utils/cashfree";
import { createRazorpayInstance } from "../utils/razorpay";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { user_id, name, email, mobile, form_type, form_id, city, state } = body;
    const config = useRuntimeConfig(event);

    const activeGateway = config.paymentGateway || 'CASHFREE';

    console.log(`[PAYMENT][start] Initiating payment via ${activeGateway}`, {
        user_id, name, email, mobile, form_type, form_id,
        timestamp: new Date().toISOString()
    });

    const amount = activeGateway === 'RAZORPAY'
        ? Number(config.razorpayAmount || 2950)
        : Number(config.cashfreePaymentAmount || 2950);
    const currency = 'INR';

    if (activeGateway === 'RAZORPAY') {
        try {
            const { instance: razorpay, key_id } = createRazorpayInstance(config);
            const orderOptions = {
                amount: amount * 100, // Razorpay takes amount in paisa
                currency,
                receipt: `rcpt_${user_id || form_id || 'guest'}_${Date.now()}`,
                notes: { user_id, form_type, form_id, name, email, mobile, city, state }
            };

            const order = await razorpay.orders.create(orderOptions);

            return {
                success: true,
                gateway: "razorpay",
                key: key_id,
                order_id: order.id,
                amount: amount,
                currency: currency,
                notes: orderOptions.notes
            };
        } catch (error: any) {
            console.error("[PAYMENT][start] Razorpay order creation failed", error);
            return { success: false, message: error.message || "Failed to create Razorpay order" };
        }
    } else {
        // DEFAULT: CASHFREE
        let cashfree: ReturnType<typeof createCashfreeInstance>["instance"];
        let cfEnvironment: string;
        try {
            const cf = createCashfreeInstance(config, event);
            cashfree = cf.instance;
            cfEnvironment = cf.cfEnvironment;
        } catch (e: any) {
            return { success: false, message: "Cashfree configuration missing on server" };
        }

        try {
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
                order_tags: {
                    user_id: String(user_id || ''),
                    form_type: String(form_type || ''),
                    form_id: String(form_id || ''),
                    city: String(city || ''),
                    state: String(state || '')
                }
            };

            const response = await cashfree.PGCreateOrder(orderRequest);
            const orderData = response.data;

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
            return { success: false, message: errorMessage };
        }
    }
});
