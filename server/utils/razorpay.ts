import Razorpay from "razorpay";

export function createRazorpayInstance(config: any) {
    const key_id = (config.razorpayKeyId || process.env.RAZORPAY_KEY_ID || "").replace(/['"]/g, '').trim();
    const key_secret = (config.razorpayKeySecret || process.env.RAZORPAY_KEY_SECRET || "").replace(/['"]/g, '').trim();

    if (!key_id || !key_secret) {
        throw new Error("Razorpay keys missing in ENV/Config");
    }

    const instance = new Razorpay({
        key_id,
        key_secret,
    });

    console.log(`[PAYMENT] Razorpay initialized`);

    return { instance, key_id };
}
