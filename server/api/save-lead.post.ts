import { savePayment } from "../services/payment.service";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { name, email, mobile, state, city, form_type, form_id, action } = body;

    const intentId = `intent_${form_id || Date.now()}`;
    console.log("[LEAD][click] CTA clicked — saving lead", {
        action, name, email, mobile, state, city, form_type, form_id,
        intent_id: intentId, timestamp: new Date().toISOString()
    });

    try {
        const config = useRuntimeConfig(event);
        const amount = Number(config.cashfreePaymentAmount || process.env.CASHFREE_PAYMENT_AMOUNT || 2950);

        const id = await savePayment({
            student_id: null,
            form_type: form_type || null,
            form_id: form_id || null,
            razorpay_order_id: intentId,
            razorpay_payment_id: 'N/A',
            razorpay_signature: 'N/A',
            amount,
            currency: 'INR',
            status: 'initiated',
            response: JSON.stringify({
                source: "cta_click", action,
                name, email, mobile, state, city,
                timestamp: new Date().toISOString()
            })
        });

        console.log("[LEAD][click] Lead saved to DB", {
            db_id: id, intent_id: intentId, form_id,
            action, email, timestamp: new Date().toISOString()
        });

        return { success: true };

    } catch (error: any) {
        console.error("[LEAD][click] ERROR — Failed to save lead", {
            intent_id: intentId, form_id,
            error_message: error?.message || error,
            timestamp: new Date().toISOString()
        });
        return { success: false };
    }
});
