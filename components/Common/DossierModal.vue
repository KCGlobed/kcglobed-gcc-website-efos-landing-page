<template>
    <div class="modal fade dossier-modal" :id="modalId" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0 overflow-hidden">
                <div class="modal-body px-4 py-3 p-md-5 position-relative">
                    <button type="button" class="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal"
                        ref="closeModalBtn"></button>

                    <div class="text-center mb-4">
                        <h2 class="modal-title  mb-2">{{ modalTitle }}</h2>
                        <p class="text-muted">{{ subtitle }}</p>
                    </div>

                    <form @submit.prevent="submitForm" class="dossier-form">
                        <div class="mb-2">
                            <label class="form-label fw-bold small">Full Name*</label>
                            <input v-model="form.name" type="text" class="form-control custom-input"
                                placeholder="Enter your full name">
                            <small class="text-danger" v-if="errors.name">{{ errors.name }}</small>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-2">
                                <label class="form-label fw-bold small">Email Address*</label>
                                <input v-model="form.email" type="email" class="form-control custom-input"
                                    placeholder="Enter your email address">
                                <small class="text-danger" v-if="errors.email">{{ errors.email }}</small>
                            </div>

                            <div class="col-md-6 mb-2">
                                <label class="form-label fw-bold small">Phone Number*</label>
                                <input
                                    v-model="form.phone"
                                    type="tel"
                                    class="form-control custom-input"
                                    placeholder="Enter 10-digit mobile number"
                                    maxlength="10"
                                    @keydown="enforceDigits"
                                    @paste.prevent
                                >
                                <small class="text-danger" v-if="errors.phone">{{ errors.phone }}</small>
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-2">
                                <label class="form-label fw-bold small">State*</label>
                                <select v-model="form.state" class="form-select custom-input" @change="onStateChange">
                                    <option value="" disabled>Select State</option>
                                    <option v-for="state in states" :key="state.iso2" :value="state.iso2">{{ state.name
                                    }}</option>
                                </select>
                                <small class="text-danger" v-if="errors.state">{{ errors.state }}</small>
                            </div>

                            <div class="col-md-6 mb-2">
                                <label class="form-label fw-bold small">City*</label>
                                <select v-model="form.city" class="form-select custom-input">
                                    <option value="" disabled>Select City</option>
                                    <option v-for="city in citiesList" :key="city.id" :value="city.name">{{ city.name }}
                                    </option>
                                </select>
                                <small class="text-danger" v-if="errors.city">{{ errors.city }}</small>
                            </div>
                        </div>

                        <div class="mb-4">
                            <div class="form-check custom-checkbox">
                                <input class="form-check-input" type="checkbox" v-model="form.isCommerceGraduate"
                                    id="commerceCheck">
                                <label class="form-check-label small text-muted" for="commerceCheck">
                                    Yes , I am commerce graduate with first division.*
                                </label>
                            </div>
                            <small class="text-danger d-block mt-1" v-if="errors.isCommerceGraduate">{{
                                errors.isCommerceGraduate }}</small>
                        </div>

                        <!-- Apply mode: single PAY NOW submit button -->
                        <button v-if="mode === 'apply'" type="submit"
                            class="btn btn-register w-100 py-3 fw-bold text-uppercase" :disabled="isSubmitting">
                            <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                            {{ isSubmitting ? 'Processing...' : 'Apply Now' }}
                        </button>

                        <!-- Dossier mode: DOWNLOAD NOW first, then PAY NOW -->
                        <template v-else>
                            <button v-if="!isDownloaded" type="submit"
                                class="btn btn-register w-100 py-3 fw-bold text-uppercase" :disabled="isSubmitting">
                                <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                                {{ isSubmitting ? 'Processing...' : 'DOWNLOAD NOW' }}
                            </button>

                            <button v-else type="button" @click="handlePayment"
                                class="btn btn-register w-100 py-3 fw-bold text-uppercase"
                                :disabled="isPaymentInProgress">
                                <span v-if="isPaymentInProgress" class="spinner-border spinner-border-sm me-2"></span>
                                {{ isPaymentInProgress ? 'Opening Payment...' : 'PAY NOW' }}
                            </button>
                        </template>

                        <div v-if="notification.message"
                            :class="['alert mt-3 mb-0 py-2 px-3 rounded-3 small', notification.type === 'success' ? 'alert-success' : 'alert-danger']"
                            role="alert">
                            <span v-if="notification.type === 'success'">✅</span>
                            <span v-else>❌</span>
                            {{ notification.message }}
                        </div>

                        <div class="text-center mt-4">
                            <p class="small text-muted mb-0">
                                By submitting, you agree to our
                                <NuxtLink to="/terms-conditions" class="text-purple text-decoration-none fw-bold"
                                    @click="handleNavigation">
                                    Terms
                                </NuxtLink>
                                and
                                <NuxtLink to="/privacy-policy" class="text-purple text-decoration-none fw-bold"
                                    @click="handleNavigation">
                                    Privacy
                                    Policy</NuxtLink>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Payment Status Modal -->
    <PaymentStatusModal :modal-id="statusModalId" :status="paymentStatus" :payment-id="paymentId"
        :message="processingMessage" />

    <!-- Error/Success Alert Popup -->
    <CommonAlert :show="alertPopup.show" :title="alertPopup.title" :message="alertPopup.message" :type="alertPopup.type"
        @close="alertPopup.show = false" />
</template>

<script lang="ts">
import { defineComponent, ref, reactive, nextTick, defineAsyncComponent, onMounted, watch } from 'vue';

const headers = new Headers();
headers.append("X-CSCAPI-KEY", "Q3k5SXFtVjNubXRBZjdKRFJ1QVJLQkZqQ3lYT2JNVUhVZmhOYm5ESw==");

const requestOptions: RequestInit = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

export default defineComponent({
    name: 'DossierModal',
    components: {
        PaymentStatusModal: defineAsyncComponent(() => import('~/components/Common/PaymentStatusModal.vue')),
        CommonAlert: defineAsyncComponent(() => import('~/components/Common/CommonAlert.vue'))
    },
    props: {
        modalId: {
            type: String,
            default: 'dossierModal'
        },
        modalTitle: {
            type: String,
            default: 'Download Dossier'
        },
        subtitle: {
            type: String,
            default: 'Enter your details to receive the dossier instantly'
        },
        mode: {
            type: String,
            default: 'dossier' // 'dossier' | 'apply'
        }
    },
    setup(props) {
        const statusModalId = `paymentStatusModal_${props.modalId}`;
        const isSubmitting = ref(false);
        const isPaymentInProgress = ref(false);
        const isDownloaded = ref(false);
        const formId = ref<number | null>(null);
        const closeModalBtn = ref<HTMLButtonElement | null>(null);
        const notification = reactive({ type: '', message: '' });
        const paymentStatus = ref<'success' | 'failed' | 'processing' | ''>('');
        const paymentId = ref('');
        const isProcessing = ref(false);
        const processingMessage = ref('');
        const storedPassword = ref<string | null>(null);

        const alertPopup = reactive({
            show: false,
            title: '',
            message: '',
            type: 'error' as 'error' | 'success'
        });

        const showAlert = (title: string, message: string, type: 'error' | 'success' = 'error') => {
            alertPopup.title = title;
            alertPopup.message = message;
            alertPopup.type = type;
            alertPopup.show = true;
        };

        const auth = useAuth();

        const resetForm = () => {
            form.name = '';
            form.email = '';
            form.phone = '';
            form.state = '';
            form.city = '';
            form.isCommerceGraduate = false;
            citiesList.value = [];
            errors.name = '';
            errors.email = '';
            errors.phone = '';
            errors.state = '';
            errors.city = '';
            errors.isCommerceGraduate = '';
            isDownloaded.value = false;
            notification.type = '';
            notification.message = '';
        };

        const showNotification = (type: 'success' | 'error', message: string) => {
            notification.type = type;
            notification.message = message;
        };

        const openStatusModal = async (status: 'success' | 'failed' | 'processing', message: string = '', pid: string = '') => {
            paymentStatus.value = status;
            processingMessage.value = message;
            paymentId.value = pid;
            await nextTick();
            const el = document.getElementById(statusModalId);
            if (el) {
                const { Modal } = await import('bootstrap');
                const modal = Modal.getInstance(el) || new Modal(el);
                modal.show();
            }
        };

        const closeStatusModal = async () => {
            const el = document.getElementById(statusModalId);
            if (el) {
                const { Modal } = await import('bootstrap');
                const modal = Modal.getInstance(el);
                if (modal) {
                    modal.hide();
                }
            }
        };

        const form = reactive({
            name: '',
            email: '',
            phone: '',
            state: '',
            city: '',
            isCommerceGraduate: false
        });

        const errors = reactive({
            name: '',
            email: '',
            phone: '',
            state: '',
            city: '',
            isCommerceGraduate: ''
        });

        const states = ref<any[]>([]);
        const citiesList = ref<any[]>([]);

        const onStateChange = () => {
            form.city = '';
        };

        watch(() => form.state, async (newState) => {
            if (!newState) {
                citiesList.value = [];
                return;
            }
            try {
                const res = await fetch(
                    `https://api.countrystatecity.in/v1/countries/IN/states/${newState}/cities`,
                    requestOptions
                );
                citiesList.value = await res.json();
            } catch (error) {
                console.error("Failed to load cities", error);
            }
        });

        // Allow only digit keys; block everything else
        const enforceDigits = (e: KeyboardEvent) => {
            const allowedKeys = [
                'Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Home', 'End'
            ];
            if (allowedKeys.includes(e.key)) return;
            if (!/^[0-9]$/.test(e.key)) {
                e.preventDefault();
            }
        };

        const validateEmail = (email: string) => {
            return String(email)
                .toLowerCase()
                .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        };

        const validateForm = () => {
            let isValid = true;
            errors.name = '';
            errors.email = '';
            errors.phone = '';
            errors.state = '';
            errors.city = '';

            if (!form.name.trim()) {
                errors.name = 'Full name is required';
                isValid = false;
            }
            if (!form.email.trim()) {
                errors.email = 'Email address is required';
                isValid = false;
            } else if (!validateEmail(form.email)) {
                errors.email = 'Please enter a valid email';
                isValid = false;
            }
            if (!form.phone.trim()) {
                errors.phone = 'Phone number is required';
                isValid = false;
            } else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
                errors.phone = 'Enter a valid 10-digit Indian mobile number (starting with 6–9)';
                isValid = false;
            }
            if (!form.state) {
                errors.state = 'State is required';
                isValid = false;
            }
            if (!form.city) {
                errors.city = 'City is required';
                isValid = false;
            }
            if (!form.isCommerceGraduate) {
                errors.isCommerceGraduate = 'You must be a commerce graduate to proceed';
                isValid = false;
            }

            return isValid;
        };

        const submitForm = async () => {
            if (!validateForm()) return;

            isSubmitting.value = true;

            try {
                // Prepare payload for API
                const payload = {
                    full_name: form.name,
                    email: form.email,
                    phone: form.phone,
                    state: form.state,
                    city: form.city,
                    source: 2,
                    source_form: props.mode === 'apply' ? 1 : 2,
                };
                const config = useRuntimeConfig();

                // ── Pre-Dossier Email Validation ──
                try {
                    const checkRes: any = await $fetch(
                        `${config.public.apiBase}/api/users/check_email/`,
                        {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: { email: form.email },
                        }
                    );

                    // If email exists, only block IF we are in 'apply' mode.
                    // If in 'dossier' mode, we allow them to download the file anyway.
                    if (checkRes.data?.isExist && props.mode === 'apply') {
                        isSubmitting.value = false;
                        await closeDossierModal();
                        showAlert('', 'An account with this email address already exists. Please check your login details in your inbox.', 'error')
                        return;
                    }
                } catch (checkErr: any) {
                    // 404 means email NOT found, which is what we want for a new registration.
                    // If it's not a 404, then it's a real server error.
                    if (checkErr.status !== 404) {
                        console.error('[CheckEmail - submitForm] Error:', checkErr);
                        isSubmitting.value = false;
                        showNotification('error', 'Failed to validate email status. Please try again.');
                        return;
                    }
                    // If 404, we just continue normally.
                }

                const response: any = await $fetch(`${config.public.apiBase}/api/career/createdossierform`, {
                    method: "POST",
                    body: payload
                });

                if (response.success && response.data?.url) {
                    const fileUrl = response.data.url;
                    formId.value = response.data.id;
                    const fileName = fileUrl.split('/').pop() || 'Dossier.pdf';

                    // ── Save lead instantly with real form_id (fire-and-forget) ──
                    // Captures every case: not paid, payment failed, payment success.
                    $fetch("/api/save-lead", {
                        method: "POST",
                        body: {
                            name: form.name,
                            email: form.email,
                            mobile: form.phone,
                            state: form.state,
                            city: form.city,
                            form_type: 2,
                            form_id: formId.value,
                            action: props.mode === 'apply' ? 'pay_now_clicked' : 'download_dossier_clicked'
                        }
                    }).catch(() => { /* silent — never block user flow */ });

                    if (props.mode === 'apply') {
                        // In apply mode: skip download, go straight to payment
                        showNotification('success', 'Details submitted! Opening payment...');
                        isDownloaded.value = true;
                        // Trigger payment automatically
                        await handlePayment();
                    } else {
                        // In dossier mode: trigger download
                        window.location.href = `/api/download?url=${encodeURIComponent(fileUrl)}&filename=${encodeURIComponent(fileName)}`;
                        isDownloaded.value = true;
                        showNotification('success', 'Dossier downloaded! You can now proceed to pay the application fee.');
                    }

                } else {
                    showNotification('error', response.message || 'Something went wrong. Please try again.');
                }
            } catch (error: any) {
                console.error("Submission Error:", error);
                showNotification('error', error.data?.message || 'Server error. Please try again later.');
            } finally {
                isSubmitting.value = false;
            }
        };

        // ── CASHFREE: Load JS SDK ─────────────────────────────────────────────────
        const loadCashfreeScript = () => {
            return new Promise((resolve) => {
                if ((window as any).Cashfree) { resolve(true); return; }
                const script = document.createElement("script");
                script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
                script.onload = () => resolve(true);
                script.onerror = () => resolve(false);
                document.body.appendChild(script);
            });
        };

        // ── RAZORPAY: Load Script (disabled) ─────────────────────────────────────
        // const loadRazorpayScript = () => {
        //     return new Promise((resolve) => {
        //         if ((window as any).Razorpay) { resolve(true); return; }
        //         const script = document.createElement("script");
        //         script.src = "https://checkout.razorpay.com/v1/checkout.js";
        //         script.onload = () => resolve(true);
        //         script.onerror = () => resolve(false);
        //         document.body.appendChild(script);
        //     });
        // };

        // Helper to aggressively restore body scroll
        const restoreBodyScroll = () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            document.body.classList.remove('modal-open');
            // Remove all leftover modal backdrops
            document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
        };

        // Helper to properly close Bootstrap modal and wait for it to fully hide
        const closeDossierModal = (): Promise<void> => {
            return new Promise((resolve) => {
                const modalEl = document.getElementById(props.modalId);
                if (!modalEl || !modalEl.classList.contains('show')) {
                    resolve();
                    return;
                }

                let resolved = false;
                const finish = () => {
                    if (resolved) return;
                    resolved = true;
                    resolve();
                };

                const onHidden = () => {
                    modalEl.removeEventListener('hidden.bs.modal', onHidden);
                    finish();
                };
                modalEl.addEventListener('hidden.bs.modal', onHidden);

                // Fallback timeout in case the hide event doesn't fire
                setTimeout(finish, 400);

                if (closeModalBtn.value) {
                    closeModalBtn.value.click();
                } else {
                    import('bootstrap').then(({ Modal }) => {
                        const modalInstance = Modal.getInstance(modalEl) || new Modal(modalEl);
                        modalInstance.hide();
                    }).catch(finish);
                }
            });
        };

        const handleNavigation = () => {
            // Let the router go wherever it wants via NuxtLink
            // but force the modal to close locally to clear backdrops
            closeDossierModal().then(() => {
                setTimeout(() => {
                    restoreBodyScroll();
                }, 300); // 300ms accounts for standard bootstrap transition
            });
        };

        const autoLogin = async (email: string, password: string, pid: string = '') => {
            try {
                processingMessage.value = 'Signing you in...';
                const config = useRuntimeConfig();
                const response: any = await $fetch(
                    `${config.public.apiBase}/api/users/website_login/`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: {
                            email: email,
                            password: password,
                            role: 'student',
                        },
                    }
                );

                if (response.data?.token) {
                    const { access, refresh } = response.data.token;
                    const user_role = response.data.user_role ?? null;
                    const user_id = response.data.user_id ?? null;

                    auth.login({ access, refresh, user_role, user_id });

                    // Show final success state in the modal
                    paymentStatus.value = 'success';
                    paymentId.value = pid;
                    processingMessage.value = 'Successfully registered! Redirecting to profile...';

                    // setTimeout(() => {
                    //     window.location.href = '/profile';
                    // }, 3000);
                }
            } catch (err: any) {
                await closeStatusModal();
                console.error('[AutoLogin] Error:', err);
                showAlert('Login Failed', 'Account created but automatic login failed. Please login manually.', 'error');
            }
        };

        const handlePayment = async () => {
            if (!validateForm()) return;

            notification.message = '';
            notification.type = '';

            const config = useRuntimeConfig();

            // 1. Pre-Payment Email Validation (Checked BEFORE showing any modal)
            try {
                const checkRes: any = await $fetch(
                    `${config.public.apiBase}/api/users/check_email/`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: { email: form.email },
                    }
                );

                if (checkRes.data?.isExist) {
                    await closeDossierModal(); // Close dossier before showing error
                    showAlert('', 'An account with this email address already exists. Please <a href="/login" class="text-purple fw-bold">log in</a> or <a href="/forgot-password" class="text-purple fw-bold">reset your password</a> if you <a href="/forgot-password" class="text-purple fw-bold">forgot it</a>.', 'error');
                    return;
                }
            } catch (checkErr: any) {
                // If status is 404, it means email is NOT registered, so we proceed.
                if (checkErr.status !== 404) {
                    console.error('[CheckEmail] Error:', checkErr);
                    showAlert('Validation Error', 'Failed to validate email status. Please try again.', 'error');
                    return;
                }
                // If 404, email is available, so we continue to payment.
            }

            // Open the Status Modal in processing mode only AFTER validation passes
            await openStatusModal('processing', 'Initializing payment...');

            try {
                // 2. Initialize Payment
                const res: any = await $fetch("/api/start-payment", {
                    method: "POST",
                    body: {
                        user_id: null,
                        name: form.name,
                        email: form.email,
                        mobile: form.phone,
                        form_type: 2,
                        form_id: formId.value
                    }
                });

                if (!res.success) {
                    await closeStatusModal();
                    showNotification('error', res.message || 'Payment initiation failed');
                    return;
                }

                // Close DossierModal once we are moving to payment gateway
                await closeDossierModal();
                // Temporarily hide StatusModal while Cashfree is open to avoid overlay confusion
                await closeStatusModal();

                // 3. Load Cashfree JS SDK
                const loaded = await loadCashfreeScript();
                if (!loaded || !(window as any).Cashfree) {
                    alert("Cashfree SDK failed to load");
                    return;
                }

                // 4. Open Cashfree Checkout
                const cfMode = res.environment === 'PRODUCTION' ? 'production' : 'sandbox';
                const cashfree = (window as any).Cashfree({ mode: cfMode });

                cashfree.checkout({
                    paymentSessionId: res.payment_session_id,
                    redirectTarget: "_modal"
                }).then(async (result: any) => {
                    restoreBodyScroll();

                    if (result.error) {
                        console.error("[PAYMENT] Cashfree error:", result.error);
                        try {
                            await $fetch("/api/report-payment-failure", {
                                method: "POST",
                                body: {
                                    cf_order_id: res.cf_order_id,
                                    cf_payment_id: result.error?.payment_id || null,
                                    error_code: result.error?.code,
                                    error_description: result.error?.message,
                                    error_source: result.error?.source
                                }
                            });
                        } catch (e) { console.error("Failed to report failure:", e); }

                    } else if (result.paymentDetails) {
                        // RE-OPEN Status Modal to show progress
                        await openStatusModal('processing', 'Verifying payment...');

                        try {
                            // 5. Verify Payment
                            await $fetch("/api/complete-payment", {
                                method: "POST",
                                body: {
                                    cf_order_id: res.cf_order_id
                                }
                            });

                            // 6. Create Student Account after successful payment
                            processingMessage.value = 'Creating your account...';
                            try {
                                const studentRes: any = await $fetch(
                                    `${config.public.apiBase}/api/users/create_student/`,
                                    {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: {
                                            "full_name": form.name,
                                            "email": form.email,
                                            "city": form.city,
                                            "state": form.state,
                                            "country": "India",
                                            "phone1": form.phone
                                        },
                                    }
                                );

                                if (studentRes.success && studentRes.data?.password) {
                                    await autoLogin(form.email, studentRes.data.password, res.cf_order_id);
                                } else {
                                    // Fallback success state if registration fails but payment was done
                                    paymentStatus.value = 'success';
                                    paymentId.value = res.cf_order_id;
                                    processingMessage.value = 'Payment Successful! Redirecting to profile...';
                                    resetForm();
                                    // setTimeout(() => {
                                    //     window.location.href = '/profile';
                                    // }, 3000);
                                }
                            } catch (regErr: any) {
                                console.error("[PAYMENT] Registration error after payment:", regErr);
                                paymentStatus.value = 'success';
                                paymentId.value = res.cf_order_id;
                                processingMessage.value = 'Payment Successful! Redirecting to profile...';
                                // setTimeout(() => {
                                //     window.location.href = '/profile';
                                // }, 3000);
                            }

                        } catch (e) {
                            await closeStatusModal();
                            console.error("[PAYMENT] complete-payment error:", e);
                            showAlert('Payment Error', 'Payment verification failed. Please contact support.', 'error');
                        }
                    }
                });

            } catch (err) {
                await closeStatusModal();
                console.error(err);
                showNotification('error', 'Payment initiation failed');
            }
        };

        onMounted(async () => {
            const el = document.getElementById(props.modalId);
            if (el) {
                el.addEventListener('show.bs.modal', resetForm);
            }
            try {
                const res = await fetch(
                    "https://api.countrystatecity.in/v1/countries/IN/states",
                    requestOptions
                );
                states.value = await res.json();
            } catch (error) {
                console.error("Failed to load states", error);
            }
        });

        return {
            form,
            errors,
            states,
            citiesList,
            onStateChange,
            isSubmitting,
            isDownloaded,
            isPaymentInProgress,
            submitForm,
            handlePayment,
            closeModalBtn,
            notification,
            paymentStatus,
            paymentId,
            statusModalId,
            handleNavigation,
            alertPopup,
            isProcessing,
            processingMessage,
            enforceDigits
        };
    }
});
</script>

<style scoped>
.text-purple {
    color: #8A2BE2;
}

.modal-content {
    border-radius: 30px;
    box-shadow: 0 15px 50px rgba(138, 43, 226, 0.2);
}

.modal-title {
    color: #511970 !important;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -1px;
}

@media (min-width: 576px) {
    .modal-dialog {
        max-width: 650px;
    }
}

.custom-input {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 10px 16px;
    font-size: 14px;
    transition: all 0.3s ease;
}

@media (min-width: 768px) {
    .custom-input {
        padding: 12px 18px;
    }
}

.custom-input:focus {
    background-color: #fff;
    border-color: #8A2BE2;
    box-shadow: 0 0 0 4px rgba(138, 43, 226, 0.1);
    outline: none;
}

.custom-checkbox .form-check-input {
    width: 22px;
    height: 22px;
    border-radius: 6px;
    border: 2px solid #e9ecef;
    cursor: pointer;
}

.custom-checkbox .form-check-input:checked {
    background-color: #8A2BE2;
    border-color: #8A2BE2;
}

.custom-checkbox .form-check-label {
    padding-left: 8px;
    padding-top: 3px;
    cursor: pointer;
}

.btn-register {
    background: linear-gradient(90deg, #8A2BE2 0%, #A13E99 100%);
    color: white;
    border: none;
    border-radius: 12px;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(138, 43, 226, 0.3);
}

.btn-register:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 25px rgba(138, 43, 226, 0.4);
    filter: brightness(1.1);
}

.btn-register:active {
    transform: translateY(0);
}

.text-purple {
    color: #8A2BE2;
}

.form-label {
    color: #4a4a68;
}

@media (max-width: 576px) {
    .modal-content {
        border-radius: 20px;
    }

    .modal-body {
        padding: 35px 20px 25px !important;
    }

    .modal-title {
        font-size: 24px;
        line-height: 1.1;
    }

    .btn-close {
        padding: 0.5rem;
        margin: 0.5rem !important;
    }

    .btn-register {
        padding-top: 12px !important;
        padding-bottom: 12px !important;
        font-size: 14px;
    }
}
</style>
