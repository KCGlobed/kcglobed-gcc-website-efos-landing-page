/**
 * payment.js — Razorpay & Cashfree Payment Gateways integration
 */

import { api } from './api.js';
import { auth } from './utils.js';

// SDK loaders
function loadScript(src, checkVar) {
    return new Promise((resolve) => {
        if (window[checkVar]) {
            resolve(true);
            return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
}

const loadRazorpay = () => loadScript("https://checkout.razorpay.com/v1/checkout.js", "Razorpay");
const loadCashfree = () => loadScript("https://sdk.cashfree.com/js/v3/cashfree.js", "Cashfree");

export const payment = {
    // Post-payment success: create account, login, and redirect
    async handlePostPaymentSuccess(orderId, userData, updateStatusCallback) {
        console.log("[Payment] Post-payment success sequence starting for:", orderId);
        updateStatusCallback('success', 'Creating your student account...');

        try {
            // 1. Create student account on central admin backend
            const studentRes = await api.createStudentAccount({
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                city: userData.city,
                state: userData.state,
                referralCode: userData.referralCode
            });

            console.log("[Payment] Student account created:", studentRes);

            if (studentRes.success && studentRes.data?.password) {
                updateStatusCallback('success', 'Signing you in automatically...');
                
                // 2. Perform auto-login with email and received password
                const loginRes = await api.autoLogin(userData.email, studentRes.data.password);
                console.log("[Payment] Automated login response:", loginRes);

                if (loginRes.data?.token) {
                    const { access, refresh } = loginRes.data.token;
                    const user_role = loginRes.data.user_role ?? null;
                    const user_id = loginRes.data.user_id ?? null;

                    // Save session details to LocalStorage
                    auth.login({ access, refresh, user_role, user_id });
                    
                    updateStatusCallback('success', 'Successfully registered! Redirecting to profile...');
                } else {
                    console.error("[Payment] Auto-login failed: no token returned");
                    updateStatusCallback('success', 'Account created! Please log in manually.');
                }
            } else {
                console.warn("[Payment] Student registration did not return password. Redirecting to login.");
                updateStatusCallback('success', 'Account registered! Redirecting to login...');
                setTimeout(() => {
                    window.location.href = '/login';
                }, 3000);
            }
        } catch (err) {
            console.error("[Payment] Critical error during post-payment registration:", err);
            api.logClientError({
                context: 'payment - handlePostPaymentSuccess',
                errorMessage: err.message || 'Post-payment registration failed',
                errorData: err.data || String(err),
                userInfo: { email: userData.email }
            });
            
            updateStatusCallback('success', 'Registration completed');
        }
    },

    // Main checkout trigger
    async startCheckout(userData, updateStatusCallback) {
        try {
            updateStatusCallback('processing', 'Initializing payment session...');

            // 1. Check if email already exists
            try {
                const checkRes = await api.checkEmail(userData.email);
                if (checkRes.data?.isExist) {
                    updateStatusCallback('failed', 'An account with this email address already exists. Please log in or reset your password.');
                    return;
                }
            } catch (err) {
                // HTTP 404 is valid (email does not exist yet)
                if (err.status !== 404) {
                    console.error('[Payment] Email verification failed:', err);
                    updateStatusCallback('failed', 'Email verification failed. Please try again.');
                    return;
                }
            }

            // 2. Start payment session on local backend
            const res = await api.startPayment({
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                city: userData.city,
                state: userData.state,
                formId: userData.formId
            });

            if (!res.success) {
                updateStatusCallback('failed', res.message || 'Payment session initialization failed');
                return;
            }

            // 3. Select gateway (Razorpay or Cashfree)
            if (res.gateway === 'razorpay') {
                const sdkLoaded = await loadRazorpay();
                if (!sdkLoaded || !window.Razorpay) {
                    updateStatusCallback('failed', 'Razorpay checkout library failed to load');
                    return;
                }

                const options = {
                    key: res.key,
                    amount: res.amount * 100,
                    currency: res.currency,
                    name: "GCC School",
                    description: "Application Fee",
                    order_id: res.order_id,
                    handler: async (response) => {
                        updateStatusCallback('processing', 'Verifying payment status...');
                        try {
                            // Verify signature
                            await api.completePayment({
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature
                            });
                            
                            // Proceed to account creation
                            await this.handlePostPaymentSuccess(res.order_id, userData, updateStatusCallback);
                        } catch (err) {
                            console.error("[Payment] Razorpay verification error:", err);
                            api.logClientError({
                                context: 'payment - verify (Razorpay)',
                                errorMessage: err.message || 'Payment verification failed',
                                errorData: err.data || String(err),
                                userInfo: { email: userData.email }
                            });
                            updateStatusCallback('failed', 'Payment verification failed. Please contact support.');
                        }
                    },
                    prefill: {
                        name: userData.name,
                        email: userData.email,
                        contact: userData.phone
                    },
                    theme: {
                        color: "#8A2BE2"
                    },
                    modal: {
                        ondismiss: async () => {
                            console.log("[Payment] Razorpay checkout dismissed by user");
                            updateStatusCallback('failed', 'Payment cancelled by user');
                            await api.reportPaymentFailure({
                                razorpay_order_id: res.order_id,
                                error_description: "Payment cancelled by user"
                            });
                        }
                    }
                };

                const rzp = new window.Razorpay(options);
                rzp.on('payment.failed', async (response) => {
                    updateStatusCallback('failed', response.error.description || 'Payment transaction failed');
                    await api.reportPaymentFailure({
                        razorpay_order_id: res.order_id,
                        razorpay_payment_id: response.error.metadata.payment_id,
                        error_code: response.error.code,
                        error_description: response.error.description,
                        error_source: response.error.source,
                        error_step: response.error.step,
                        error_reason: response.error.reason
                    });
                });

                rzp.open();
                // Close status modal to let checkout occupy screen
                updateStatusCallback('dismiss', '');

            } else {
                // Default gateway: Cashfree
                const sdkLoaded = await loadCashfree();
                if (!sdkLoaded || !window.Cashfree) {
                    updateStatusCallback('failed', 'Cashfree checkout library failed to load');
                    return;
                }

                const cfMode = res.environment === 'PRODUCTION' ? 'production' : 'sandbox';
                const cashfree = window.Cashfree({ mode: cfMode });

                updateStatusCallback('dismiss', '');

                cashfree.checkout({
                    paymentSessionId: res.payment_session_id,
                    redirectTarget: "_modal"
                }).then(async (result) => {
                    // Restore body overflow just in case cf modal blocks scroll
                    document.body.style.overflow = '';

                    if (result.error) {
                        console.error("[Payment] Cashfree error:", result.error);
                        updateStatusCallback('failed', result.error.message || 'Payment transaction failed');
                        await api.reportPaymentFailure({
                            cf_order_id: res.cf_order_id,
                            cf_payment_id: result.error.payment_id || null,
                            re_attempt_status: false,
                            error_code: result.error.code,
                            error_description: result.error.message,
                            error_source: result.error.source,
                            source: 4
                        });
                    } else if (result.paymentDetails) {
                        updateStatusCallback('processing', 'Verifying payment status...');
                        try {
                            // Verify status
                            await api.completePayment({
                                cf_order_id: res.cf_order_id,
                                re_attempt_status: false
                            });

                            // Proceed to account creation
                            await this.handlePostPaymentSuccess(res.cf_order_id, userData, updateStatusCallback);
                        } catch (err) {
                            console.error("[Payment] Cashfree verification error:", err);
                            api.logClientError({
                                context: 'payment - verify (Cashfree)',
                                errorMessage: err.message || 'Payment verification failed',
                                errorData: err.data || String(err),
                                userInfo: { email: userData.email }
                            });
                            updateStatusCallback('failed', 'Payment verification failed. Please contact support.');
                        }
                    }
                });
            }

        } catch (err) {
            console.error("[Payment] Checkout error:", err);
            api.logClientError({
                context: 'payment - startCheckout',
                errorMessage: err.message || 'Payment initiation failed',
                errorData: err.data || String(err),
                userInfo: { email: userData.email, phone: userData.phone, name: userData.name }
            });
            updateStatusCallback('failed', err.message || 'Payment initiation failed. Please try again.');
        }
    }
};
