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
                                <input v-model="form.phone" type="tel" class="form-control custom-input"
                                    placeholder="Enter 10-digit mobile number" maxlength="10" @keydown="enforceDigits"
                                    @paste.prevent>
                                <small class="text-danger" v-if="errors.phone">{{ errors.phone }}</small>
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-2">
                                <label class="form-label fw-bold small">State/UT*</label>
                                <select v-model="form.state" class="form-select custom-input" @change="onStateChange">
                                    <option value="" disabled>Select State</option>
                                    <option v-for="state in states" :key="state" :value="state">{{ state }}</option>
                                </select>
                                <small class="text-danger" v-if="errors.state">{{ errors.state }}</small>
                            </div>

                            <div class="col-md-6 mb-2">
                                <label class="form-label fw-bold small">City*</label>
                                <select v-model="form.city" class="form-select custom-input">
                                    <option value="" disabled>Select City</option>
                                    <option v-for="city in citiesList" :key="city" :value="city">{{ city }}</option>
                                </select>
                                <small class="text-danger" v-if="errors.city">{{ errors.city }}</small>
                            </div>
                        </div>

                        <div class="mb-2 position-relative">
                            <label class="form-label fw-bold small">Institution/University*</label>
                            <div class="searchable-select">
                                <input type="text" class="form-control custom-input" v-model="searchQuery"
                                    placeholder="Search University..." autocomplete="off"
                                    @focus="showUniDropdown = true"
                                    @input="showUniDropdown = true; form.university = searchQuery">
                                <div v-if="showUniDropdown && filteredUniversities.length > 0"
                                    class="dropdown-list shadow-sm">
                                    <div v-for="uni in filteredUniversities" :key="uni.id" class="dropdown-item"
                                        @click="selectUni(uni)">
                                        {{ uni.name }}
                                    </div>
                                </div>
                            </div>
                            <small class="text-danger" v-if="errors.university">{{ errors.university }}</small>
                        </div>

                        <!-- Apply mode: single PAY NOW submit button -->
                        <div v-if="mode === 'apply'">
                            <div class="mb-3">
                                <div
                                    class="form-check custom-checkbox d-flex align-items-center justify-content-start gap-2">
                                    <input class="form-check-input mt-0" type="checkbox"
                                        v-model="form.isCommerceGraduate" id="commerceCheckApply">
                                    <label class="form-check-label small text-muted mb-0" for="commerceCheckApply">
                                        By submitting, you agree to our
                                        <NuxtLink to="/terms-conditions"
                                            class="text-purple text-decoration-none fw-bold" @click="handleNavigation">
                                            Terms
                                        </NuxtLink>
                                        and
                                        <NuxtLink to="/privacy-policy" class="text-purple text-decoration-none fw-bold"
                                            @click="handleNavigation">
                                            Privacy Policy
                                        </NuxtLink>
                                    </label>
                                </div>
                                <div class="text-center">
                                    <small class="text-danger" v-if="errors.isCommerceGraduate">
                                        {{ errors.isCommerceGraduate }}
                                    </small>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-register w-100 py-3 fw-bold text-uppercase"
                                :disabled="isSubmitting">
                                <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                                {{ isSubmitting ? 'Processing...' : 'Apply Now' }}
                            </button>
                        </div>

                        <!-- Dossier mode: DOWNLOAD NOW first, then PAY NOW -->
                        <template v-else>
                            <div v-if="!isDownloaded">
                                <button type="submit" class="btn btn-register w-100 py-3 fw-bold text-uppercase"
                                    :disabled="isSubmitting">
                                    <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                                    {{ isSubmitting ? 'Processing...' : 'DOWNLOAD NOW' }}
                                </button>
                                <div class="text-center mt-3">
                                    <p class="small text-muted mb-0">
                                        By submitting, you agree to our
                                        <NuxtLink to="/terms-conditions"
                                            class="text-purple text-decoration-none fw-bold" @click="handleNavigation">
                                            Terms
                                        </NuxtLink>
                                        and
                                        <NuxtLink to="/privacy-policy" class="text-purple text-decoration-none fw-bold"
                                            @click="handleNavigation">
                                            Privacy Policy
                                        </NuxtLink>
                                    </p>
                                </div>
                            </div>

                            <div v-else>
                                <div class="mb-3">
                                    <div
                                        class="form-check custom-checkbox d-flex align-items-center justify-content-start gap-2">
                                        <input class="form-check-input mt-0" type="checkbox"
                                            v-model="form.isCommerceGraduate" id="commerceCheckPay">
                                        <label class="form-check-label small text-muted mb-0" for="commerceCheckPay">
                                            By submitting, you agree to our
                                            <NuxtLink to="/terms-conditions"
                                                class="text-purple text-decoration-none fw-bold"
                                                @click="handleNavigation">
                                                Terms
                                            </NuxtLink>
                                            and
                                            <NuxtLink to="/privacy-policy"
                                                class="text-purple text-decoration-none fw-bold"
                                                @click="handleNavigation">
                                                Privacy Policy
                                            </NuxtLink>
                                        </label>
                                    </div>
                                    <div class="text-center">
                                        <small class="text-danger" v-if="errors.isCommerceGraduate">
                                            {{ errors.isCommerceGraduate }}
                                        </small>
                                    </div>
                                </div>
                                <button type="button" @click="handlePayment"
                                    class="btn btn-register w-100 py-3 fw-bold text-uppercase"
                                    :disabled="isPaymentInProgress">
                                    <span v-if="isPaymentInProgress"
                                        class="spinner-border spinner-border-sm me-2"></span>
                                    {{ isPaymentInProgress ? 'Opening Payment...' : 'PAY NOW' }}
                                </button>
                            </div>
                        </template>

                        <div v-if="notification.message"
                            :class="['alert mt-3 mb-0 py-2 px-3 rounded-3 small', notification.type === 'success' ? 'alert-success' : 'alert-danger']"
                            role="alert">
                            <span v-if="notification.type === 'success'">✅</span>
                            <span v-else>❌</span>
                            {{ notification.message }}
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

    <!-- Fee Waiver Modal -->
    <FeeWaiverModal v-if="showFeeWaiverModal" :dossierId="formId!" :userData="form"
        @close="showFeeWaiverModal = false" />
</template>

<script lang="ts">
import { defineComponent, ref, reactive, nextTick, defineAsyncComponent, onMounted, onUnmounted, watch, computed } from 'vue';
import { isValidMobile } from "~/utils/validators";
import stateCityData from '~/state_city.json';
import universitiesList from "~/universities.json";
import selectUniversityList from "~/select-university.json";

export default defineComponent({
    name: 'DossierModal',
    components: {
        PaymentStatusModal: defineAsyncComponent(() => import('~/components/Common/PaymentStatusModal.vue')),
        CommonAlert: defineAsyncComponent(() => import('~/components/Common/CommonAlert.vue')),
        FeeWaiverModal: defineAsyncComponent(() => import('~/components/university-fee-wavier/FeeWaiverModal.vue'))
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
        const showFeeWaiverModal = ref(false);
        const searchQuery = ref("");
        const showUniDropdown = ref(false);
        const formId = ref<number | null>(null);
        const closeModalBtn = ref<HTMLButtonElement | null>(null);
        const notification = reactive({ type: '', message: '' });
        const paymentStatus = ref<'success' | 'failed' | 'processing' | ''>('');
        const paymentId = ref('');
        const isProcessing = ref(false);
        const processingMessage = ref('');
        const storedPassword = ref<string | null>(null);

        const route = useRoute();
        const utm_source = computed(() => (route.query.utm_source as string) || (useCookie('utm_source').value) || '');
        const utm_medium = computed(() => (route.query.utm_medium as string) || (useCookie('utm_medium').value) || '');
        const utm_campaign = computed(() => (route.query.utm_campaign as string) || (useCookie('utm_campaign').value) || '');

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
            form.university = '';
            form.isCommerceGraduate = false;
            citiesList.value = [];
            errors.name = '';
            errors.email = '';
            errors.phone = '';
            errors.state = '';
            errors.city = '';
            errors.university = '';
            errors.isCommerceGraduate = '';
            isDownloaded.value = false;
            searchQuery.value = '';
            showUniDropdown.value = false;
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
            university: '',
            isCommerceGraduate: false
        });

        const errors = reactive({
            name: '',
            email: '',
            phone: '',
            state: '',
            city: '',
            university: '',
            isCommerceGraduate: ''
        });
        const abandonmentTriggered = ref(false);
        const triggerAbandonment = async () => {
            if (abandonmentTriggered.value) return;
            if (form.name && form.email && form.phone && validateEmail(form.email) && isValidMobile(form.phone)) {
                abandonmentTriggered.value = true;
                const config = useRuntimeConfig();
                try {
                    await $fetch(`${config.public.apiBase}/api/career/createabondantform`, {
                        method: 'POST',
                        body: {
                            full_name: form.name,
                            email: form.email,
                            phone: form.phone,
                            source: config.public.source,
                            source_form: props.mode === 'apply' ? 1 : 2,
                            utm_source: utm_source.value,
                            utm_medium: utm_medium.value,
                            utm_campaign: utm_campaign.value,
                        }
                    });
                } catch (err) {
                    console.error('[Abandonment] Error:', err);
                }
            }
        };

        // Watch these fields to trigger abandonment
        watch([() => form.name, () => form.email, () => form.phone], () => {
            triggerAbandonment();
        });

        const states = ref<string[]>([]);
        const citiesList = ref<string[]>([]);
        const universityList = ref([
            ...universitiesList
                .filter(name => !selectUniversityList.includes(name))
                .map((name, index) => ({ id: `u-${index}`, name, isHighlight: false })),
            ...selectUniversityList.map((name, index) => ({ id: `s-${index}`, name, isHighlight: true }))
        ]);
        const filteredUniversities = computed(() => {
            const query = searchQuery.value.trim().toLowerCase();
            if (!query) return universityList.value;
            // Provide manual option dynamically
            const filtered = universityList.value.filter(u => u.name.toLowerCase().includes(query));
            if (query.length > 0 && !filtered.some(u => u.name.toLowerCase() === query)) {
                return [{ id: 'manual-entry', name: searchQuery.value, isHighlight: false }, ...filtered];
            }
            return filtered;
        });

        const selectUni = (uni: any) => {
            form.university = uni.name;
            searchQuery.value = uni.name;
            showUniDropdown.value = false;
        };

        // Close dropdown when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.searchable-select')) {
                showUniDropdown.value = false;
            }
        };

        const onStateChange = () => {
            form.city = '';
        };

        watch(() => form.state, (newState) => {
            if (!newState) {
                citiesList.value = [];
                return;
            }
            // Populate cities from local JSON and sort alphabetically
            const cities = (stateCityData as any)[newState] || [];
            citiesList.value = [...cities].sort((a, b) => a.localeCompare(b));
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
            } else if (!isValidMobile(form.phone)) {
                errors.phone = 'Please enter a valid 10-digit mobile number';
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
            if (!form.university) {
                errors.university = 'University is required';
                isValid = false;
            }

            const isCheckboxRequired = props.mode === 'apply' || isDownloaded.value;
            if (isCheckboxRequired && !form.isCommerceGraduate) {
                errors.isCommerceGraduate = 'You must agree to the Terms and Privacy Policy to proceed';
                isValid = false;
            }

            return isValid;
        };

        const submitForm = async () => {
            if (!validateForm()) return;
            console.log(form, '---form');
            isSubmitting.value = true;
            const config = useRuntimeConfig();

            try {
                // Prepare payload for API
                const payload: any = {
                    full_name: form.name,
                    email: form.email,
                    phone: form.phone,
                    state: form.state,
                    city: form.city,
                    university: form.university,
                    source: config.public.source,
                    source_form: props.mode === 'apply' ? 1 : 2,
                    utm_source: utm_source.value,
                    utm_medium: utm_medium.value,
                    utm_campaign: utm_campaign.value,
                };

                const selectedUni = universityList.value.find(u => u.name === form.university);
                if (selectedUni && selectedUni.isHighlight) {
                    payload.fee_waiver_category = "Free of cost (FOC)";
                }


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
                            action: props.mode === 'apply' ? 'pay_now_clicked' : 'download_dossier_clicked',
                            utm_source: utm_source.value,
                            utm_medium: utm_medium.value,
                            utm_campaign: utm_campaign.value,
                        }
                    }).catch(() => { /* silent — never block user flow */ });

                    if (props.mode === 'apply') {
                        const selectedUni = universityList.value.find(u => u.name === form.university);
                        if (selectedUni && selectedUni.isHighlight) {
                            showNotification('success', 'Details submitted! Opening Fee Waiver...');
                            isDownloaded.value = true;
                            await closeDossierModal();
                            showFeeWaiverModal.value = true;
                        } else {
                            // In apply mode: skip download, go straight to payment
                            showNotification('success', 'Details submitted! Opening payment...');
                            isDownloaded.value = true;
                            // Trigger payment automatically
                            await handlePayment();
                        }
                    } else {
                        // In dossier mode: trigger download
                        window.location.href = `/api/download?url=${encodeURIComponent(fileUrl)}&filename=${encodeURIComponent(fileName)}`;

                        const selectedUni = universityList.value.find(u => u.name === form.university);
                        if (selectedUni && selectedUni.isHighlight) {
                            showNotification('success', 'Dossier downloaded! Opening Fee Waiver...');
                            // Do not change isDownloaded to true, avoiding the 'Pay Now' view
                            await closeDossierModal();
                            showFeeWaiverModal.value = true;
                        } else {
                            isDownloaded.value = true;
                            showNotification('success', 'Dossier downloaded! You can now proceed to pay the application fee.');
                        }
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

        // ── RAZORPAY: Load Script ─────────────────────────────────────
        const loadRazorpayScript = () => {
            return new Promise((resolve) => {
                if ((window as any).Razorpay) { resolve(true); return; }
                const script = document.createElement("script");
                script.src = "https://checkout.razorpay.com/v1/checkout.js";
                script.onload = () => resolve(true);
                script.onerror = () => resolve(false);
                document.body.appendChild(script);
            });
        };

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

        const postPaymentSuccess = async (pid: string) => {
            // 6. Create Student Account after successful payment
            const config = useRuntimeConfig();
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

                // if (studentRes.success && studentRes.data?.password) {
                // await autoLogin(form.email, studentRes.data.password, pid);
                // } else {
                // Redirect directly to thank you page
                await closeStatusModal();
                await closeDossierModal();
                return navigateTo({
                    path: '/thank-you',
                    query: { payment_id: pid }
                });
                // }
            } catch (regErr: any) {
                console.error("[PAYMENT] Registration error after payment:", regErr);
                paymentId.value = pid;
                processingMessage.value = 'Payment Successful!';
                await closeStatusModal();
                await closeDossierModal();
                return navigateTo({
                    path: '/thank-you',
                    query: { payment_id: pid }
                });
            }
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
                    processingMessage.value = 'Successfully registered!';
                    resetForm();
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
                        city: form.city,
                        state: form.state,
                        form_type: 2,
                        form_id: formId.value
                    }
                });

                if (!res.success) {
                    await closeStatusModal();
                    showNotification('error', res.message || 'Payment initiation failed');
                    return;
                }

                if (res.gateway === 'razorpay') {
                    // 3. Load Razorpay JS SDK
                    const loaded = await loadRazorpayScript();
                    if (!loaded || !(window as any).Razorpay) {
                        await closeStatusModal();
                        alert("Razorpay SDK failed to load");
                        return;
                    }

                    // 4. Open Razorpay Checkout
                    const options = {
                        key: res.key,
                        amount: res.amount * 100,
                        currency: res.currency,
                        name: "KCGlobed GCC",
                        description: "Application Fee",
                        order_id: res.order_id,
                        handler: async (response: any) => {
                            await openStatusModal('processing', 'Verifying payment...');
                            try {
                                await $fetch("/api/complete-payment", {
                                    method: "POST",
                                    body: {
                                        razorpay_order_id: response.razorpay_order_id,
                                        razorpay_payment_id: response.razorpay_payment_id,
                                        razorpay_signature: response.razorpay_signature
                                    }
                                });
                                await postPaymentSuccess(res.order_id);
                                await closeDossierModal();
                            } catch (e) {
                                await closeStatusModal();
                                showAlert('Payment Error', 'Payment verification failed. Please contact support.', 'error');
                            }
                        },
                        prefill: {
                            name: form.name,
                            email: form.email,
                            contact: form.phone
                        },
                        theme: {
                            color: "#8A2BE2"
                        },
                        modal: {
                            ondismiss: async () => {
                                console.log("Razorpay payment dismissed");
                                try {
                                    await $fetch("/api/report-payment-failure", {
                                        method: "POST",
                                        body: {
                                            razorpay_order_id: res.order_id,
                                            error_description: "Payment cancelled by user"
                                        }
                                    });
                                } catch (e) { console.error("Failed to report failure:", e); }
                            }
                        }
                    };

                    const rzp = new (window as any).Razorpay(options);
                    rzp.on('payment.failed', async (response: any) => {
                        try {
                            await $fetch("/api/report-payment-failure", {
                                method: "POST",
                                body: {
                                    razorpay_order_id: res.order_id,
                                    razorpay_payment_id: response.error.metadata.payment_id,
                                    error_code: response.error.code,
                                    error_description: response.error.description,
                                    error_source: response.error.source,
                                    error_step: response.error.step,
                                    error_reason: response.error.reason
                                }
                            });
                        } catch (e) { console.error("Failed to report failure:", e); }
                    });

                    rzp.open();
                    await closeDossierModal();
                    await closeStatusModal();

                } else {
                    // DEFAULT: CASHFREE
                    // 3. Load Cashfree JS SDK
                    const loaded = await loadCashfreeScript();
                    if (!loaded || !(window as any).Cashfree) {
                        await closeStatusModal();
                        alert("Cashfree SDK failed to load");
                        return;
                    }

                    // 4. Open Cashfree Checkout
                    const cfMode = res.environment === 'PRODUCTION' ? 'production' : 'sandbox';
                    const cashfree = (window as any).Cashfree({ mode: cfMode });

                    // Close Modals before Cashfree starts explicitly, like Razorpay
                    await closeDossierModal();
                    await closeStatusModal();

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
                                await postPaymentSuccess(res.cf_order_id);
                            } catch (e) {
                                await closeStatusModal();
                                console.error("[PAYMENT] complete-payment error:", e);
                                showAlert('Payment Error', 'Payment verification failed. Please contact support.', 'error');
                            }
                        }
                    });
                }

            } catch (err) {
                await closeStatusModal();
                console.error(err);
                showNotification('error', 'Payment initiation failed');
            }
        };

        onMounted(() => {
            const el = document.getElementById(props.modalId);
            if (el) {
                el.addEventListener('show.bs.modal', resetForm);
            }
            window.addEventListener('click', handleClickOutside);
            // Populate states from local JSON and sort alphabetically
            const statesArr = Object.keys(stateCityData);
            states.value = statesArr.sort((a, b) => a.localeCompare(b));
        });

        onUnmounted(() => {
            window.removeEventListener('click', handleClickOutside);
        });

        return {
            form,
            formId,
            errors,
            states,
            citiesList,
            universityList,
            searchQuery,
            showUniDropdown,
            showFeeWaiverModal,
            filteredUniversities,
            selectUni,
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

/* Searchable Select Styles */
.searchable-select {
    position: relative;
    width: 100%;
}

.dropdown-list {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 250px;
    overflow-y: auto;
    background: #fff;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    z-index: 9999;
    margin-top: 4px;
}

.dropdown-item {
    padding: 10px 16px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s ease;
    color: #4a4a68;
    white-space: normal;
    line-height: 1.4;
}

.dropdown-item:hover {
    background-color: #f8f0ff;
    color: #8A2BE2;
}

.dropdown-list::-webkit-scrollbar {
    width: 6px;
}

.dropdown-list::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.dropdown-list::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
}

.dropdown-list::-webkit-scrollbar-thumb:hover {
    background: #8A2BE2;
}
</style>
