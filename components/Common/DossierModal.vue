<template>
    <div class="modal fade dossier-modal" :id="modalId" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0">
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
                                    placeholder="Enter your phone number">
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
                                    @focus="showUniDropdown = true" @input="showUniDropdown = true">
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

                        <div class="mb-3">
                            <label class="form-label fw-bold small d-flex align-items-center gap-1">
                                Referral Code <span class="text-muted fw-normal">(Optional)</span>
                                <span class="custom-tooltip-wrapper ms-1">
                                    <i class="ti ti-info-circle text-muted" style="font-size: 16px;"></i>
                                    <span class="custom-tooltip-content">
                                        Enter a referral code to avail special discounts or offers on your application.
                                    </span>
                                </span>
                            </label>
                            <div class="referral-input-group">
                                <input v-model="form.referral_code" type="text" class="form-control custom-input referral-field"
                                    placeholder="Enter referral code"
                                    :class="{ 'referral-verified': referralApplied, 'is-invalid': errors.referral_code }"
                                    :readonly="referralApplied"
                                    @input="referralApplied = false; errors.referral_code = ''">
                                <button
                                    v-if="!referralApplied"
                                    type="button"
                                    class="btn-apply-coupon"
                                    :disabled="isVerifyingReferral || !form.referral_code.trim()"
                                    @click="verifyAndApplyReferral">
                                    <span v-if="isVerifyingReferral" class="spinner-border spinner-border-sm"></span>
                                    <span v-else>Apply</span>
                                </button>
                                <div v-else class="referral-applied-badge">
                                    <i class="ti ti-check"></i> Applied
                                </div>
                            </div>
                            <small class="text-danger" v-if="errors.referral_code">{{ errors.referral_code }}</small>
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

    <!-- 🎉 Referral Success Celebration Popup -->
    <Teleport to="body">
        <Transition name="celebration-fade">
            <div v-if="showCelebrationPopup" class="celebration-overlay" @click.self="showCelebrationPopup = false">
                <div class="celebration-card">
                    <!-- Confetti particles -->
                    <div class="confetti-container">
                        <span v-for="n in 40" :key="n" class="confetti-particle" :style="getConfettiStyle(n)"></span>
                    </div>

                    <!-- Close Button -->
                    <button class="celebration-close" @click="showCelebrationPopup = false">
                        <i class="ti ti-x"></i>
                    </button>

                    <!-- Content -->
                    <div class="celebration-content">
                        <div class="celebration-emoji">🎉</div>
                        <h2 class="celebration-title">Congratulations!</h2>

                        <div class="celebration-body">
                            <p>Your referral coupon has been applied successfully and your <strong>application fee has been waived off.</strong></p>

                            <div class="celebration-divider"></div>

                            <p>Your <strong>NFET login credentials and exam details</strong> have been sent to your registered <strong>Email ID.</strong></p>
                            <!-- <p class="text-sm-muted">Please check your Inbox/Spam folder along with WhatsApp/SMS for further instructions.</p> -->

                            <div class="celebration-divider"></div>

                            <p class="celebration-referral-note">✨ You can also <strong>refer your friends</strong> and earn cashback rewards.</p>
                            <p class="text-sm-muted">Your unique referral code will be shared with you via Email, SMS, and WhatsApp shortly.</p>

                            <div class="celebration-divider"></div>

                            <p class="celebration-welcome">🏫 Welcome to <strong>GCC School</strong> — Your Gateway to Global Finance Careers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, nextTick, defineAsyncComponent, onMounted, onUnmounted, watch, computed } from "vue";
import { isValidMobile } from "~/utils/validators";
import stateCityData from "~/state_city.json";
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

        const referralApplied = ref(false);
        const isVerifyingReferral = ref(false);
        const showCelebrationPopup = ref(false);

        const getConfettiStyle = (n: number) => {
            const colors = ['#8A2BE2', '#A13E99', '#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
            const color = colors[n % colors.length];
            const left = `${(n * 7.3 + 13) % 100}%`;
            const delay = `${(n * 0.13) % 3}s`;
            const duration = `${2.5 + (n * 0.11) % 2}s`;
            const size = `${6 + (n % 5) * 2}px`;
            return { left, animationDelay: delay, animationDuration: duration, background: color, width: size, height: size };
        };

        const verifyAndApplyReferral = async () => {
            if (!form.referral_code.trim()) return;
            isVerifyingReferral.value = true;
            errors.referral_code = '';
            try {
                const config = useRuntimeConfig();
                const verifyRes: any = await $fetch(`${config.public.apiBase}/api/users/verify_refferal_code/`, {
                    method: 'POST',
                    body: { refferal_code: form.referral_code }
                });
                if (verifyRes?.success === false || verifyRes?.data?.verified_status === false) {
                    errors.referral_code = verifyRes.message || 'Invalid referral code';
                } else {
                    referralApplied.value = true;
                    // Congratulations popup will be shown after form submission
                    showCelebrationPopup.value = false;
                }
            } catch (err: any) {
                // API returns HTTP 400 for invalid codes — $fetch throws, body is in err.data
                const apiMessage = err?.data?.message || err?.data?.data?.message;
                errors.referral_code = apiMessage || err?.message || 'Invalid referral code';
            } finally {
                isVerifyingReferral.value = false;
            }
        };

        const handleCelebrationCta = () => {
            showCelebrationPopup.value = false;
            // window.location.href = '/myaccount';
        };

        const auth = useAuth();

        const resetForm = () => {
            form.name = '';
            form.email = '';
            form.phone = '';
            form.state = '';
            form.city = '';
            form.university = '';
            form.referral_code = '';
            form.isCommerceGraduate = false;
            citiesList.value = [];
            errors.name = '';
            errors.email = '';
            errors.phone = '';
            errors.state = '';
            errors.city = '';
            errors.university = '';
            errors.isCommerceGraduate = '';
            errors.referral_code = '';
            isDownloaded.value = false;
            searchQuery.value = '';
            showUniDropdown.value = false;
            notification.type = '';
            notification.message = '';
            referralApplied.value = false;
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
            isCommerceGraduate: false,
            referral_code: ''
        });

        const route = useRoute();
        const utm_source = computed(() => (route.query.utm_source as string) || (useCookie('utm_source').value) || '');
        const utm_medium = computed(() => (route.query.utm_medium as string) || (useCookie('utm_medium').value) || '');
        const utm_campaign = computed(() => (route.query.utm_campaign as string) || (useCookie('utm_campaign').value) || '');

        const errors = reactive({
            name: '',
            email: '',
            phone: '',
            state: '',
            city: '',
            university: '',
            isCommerceGraduate: '',
            referral_code: ''
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
            return universityList.value
                .filter(u => u.name.toLowerCase().includes(query));
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

        const validateEmail = (email: string) => {
            return String(email)
                .toLowerCase()
                .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        };

        const lastAbandonmentData = ref('');
        const triggerAbandonment = async () => {
            if (form.name && form.email && form.phone && validateEmail(form.email) && isValidMobile(form.phone)) {
                // Prevent duplicate calls for the same value
                const currentData = `${form.name}-${form.email}-${form.phone}`;
                if (lastAbandonmentData.value === currentData) return;
                lastAbandonmentData.value = currentData;

                const config = useRuntimeConfig();
                try {
                    await $fetch(`${config.public.apiBase}/api/career/createabondantform`, {
                        method: 'POST',
                        body: {
                            full_name: form.name,
                            email: form.email,
                            phone: form.phone,
                            source: config.public.source || 3,
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

        watch([() => form.name, () => form.email, () => form.phone], () => {
            triggerAbandonment();
        });

        const validateForm = () => {
            let isValid = true;
            errors.name = '';
            errors.email = '';
            errors.phone = '';
            errors.state = '';
            errors.city = '';
            errors.referral_code = '';

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
            if ((props.mode === 'apply' || isDownloaded.value) && !form.isCommerceGraduate) {
                errors.isCommerceGraduate = 'You must agree to the Terms and Privacy Policy';
                isValid = false;
            }

            return isValid;
        };

        const submitForm = async () => {
            if (!validateForm()) return;

            isSubmitting.value = true;

            try {
                const config = useRuntimeConfig();

                // ── Referral Code Validation (use pre-verified state if already applied) ──
                let referralVerified = referralApplied.value;
                if (form.referral_code && !referralVerified) {
                    try {
                        const verifyRes: any = await $fetch(`${config.public.apiBase}/api/users/verify_refferal_code/`, {
                            method: 'POST',
                            body: { refferal_code: form.referral_code }
                        });
                        // Handle 200 with success:false in body
                        if (verifyRes?.success === false || verifyRes?.data?.verified_status === false) {
                            errors.referral_code = verifyRes.message || 'Invalid referral code';
                            isSubmitting.value = false;
                            return;
                        }
                        referralVerified = true;
                    } catch (verifyErr: any) {
                        // API returns HTTP 400 for invalid codes — body is in verifyErr.data
                        console.error('[Verify Referral Code] Error:', verifyErr);
                        const apiMsg = verifyErr?.data?.message || verifyErr?.data?.data?.message;
                        errors.referral_code = apiMsg || verifyErr?.message || 'Invalid referral code';
                        isSubmitting.value = false;
                        return;
                    }
                }

                // Prepare payload for API
                const payload: any = {
                    full_name: form.name,
                    email: form.email,
                    phone: form.phone,
                    state: form.state,
                    city: form.city,
                    university: form.university,
                    source: config.public.source || 3,
                    source_form: props.mode === 'apply' ? 1 : 2,
                    utm_source: utm_source.value,
                    utm_medium: utm_medium.value,
                    utm_campaign: utm_campaign.value,
                    referred_code: form.referral_code || ""
                };

                if (referralVerified) {
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
                        showAlert('', 'An account with this email address already exists. Please <a href="/login" class="text-purple fw-bold">log in</a> or <a href="/forgot-password" class="text-purple fw-bold">reset your password</a> if you <a href="/forgot-password" class="text-purple fw-bold">forgot it</a>.', 'error')
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

                    // ── Referral Code: Skip payment, create account first, then show congratulations popup ──
                    if (referralVerified) {
                        // Create account first in the background while keeping the modal's loading spinner visible
                        await postPaymentSuccess('REFERRAL_CODE');
                        
                        if (props.mode !== 'apply') {
                            window.location.href = `/api/download?url=${encodeURIComponent(fileUrl)}&filename=${encodeURIComponent(fileName)}`;
                        }
                        await closeDossierModal();
                        showCelebrationPopup.value = true;
                        isSubmitting.value = false;
                        return;
                    }

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
                $fetch('/api/log-client-error', { method: 'POST', body: { context: 'DossierModal - submitForm', errorMessage: error?.data?.message || error?.message || 'Server error', errorData: error?.data || error?.message || String(error), userInfo: { email: form.email, phone: form.phone, name: form.name } } }).catch(() => { });
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

        const handleNavigation = () => {
            // Let the router go wherever it wants via NuxtLink
            // but force the modal to close locally to clear backdrops
            closeDossierModal().then(() => {
                setTimeout(() => {
                    restoreBodyScroll();
                }, 300); // 300ms accounts for standard bootstrap transition
            });
        };

        const postPaymentSuccess = async (pid: string) => {
            console.log("[PAYMENT_SUCCESS] Initialization for order:", pid);
            // 6. Create Student Account after successful payment
            const config = useRuntimeConfig();
            processingMessage.value = 'Creating your account...';
            try {
                console.log("[PAYMENT_SUCCESS] Creating student account for:", form.email);
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
                            "phone1": form.phone,
                            "referred_code": form.referral_code || ""
                        }
                    }
                );

                console.log("[PAYMENT_SUCCESS] Student creation response:", studentRes);

                // Empty the coupon code field after creating student
                form.referral_code = '';
                referralApplied.value = false;

                if (studentRes.success && studentRes.data?.password) {
                    console.log("[PAYMENT_SUCCESS] Password received, triggering autoLogin");
                    await autoLogin(form.email, studentRes.data.password, pid);
                } else {
                    console.warn("[PAYMENT_SUCCESS] Student creation failed or no password returned. Redirecting to account page.");
                    if (pid === 'REFERRAL_CODE') {
                        // Referral code: do nothing, let submitForm show the popup
                    } else if (pid !== 'DIRECT_CREATE_CCS') {
                        paymentStatus.value = 'success';
                        paymentId.value = pid;
                        processingMessage.value = 'Payment Successful! Redirecting to profile...';
                        resetForm();
                    } else {
                        await closeStatusModal();
                        // window.location.href = '/myaccount';
                    }
                }
            } catch (regErr: any) {
                console.error("[PAYMENT_SUCCESS] Registration error after payment:", regErr);
                form.referral_code = '';
                referralApplied.value = false;
                if (pid === 'REFERRAL_CODE') {
                    // Referral code: do nothing, let submitForm show the popup
                } else if (pid !== 'DIRECT_CREATE_CCS') {
                    paymentStatus.value = 'success';
                    paymentId.value = pid;
                    processingMessage.value = 'Payment Successful! Redirecting to profile...';
                    // setTimeout(() => {
                    //     window.location.href = '/myaccount';
                    // }, 3000);
                } else {
                    await closeStatusModal();
                    // window.location.href = '/myaccount';
                }
            }
        };

        const autoLogin = async (email: string, password: string, pid: string = '') => {
            console.log("[AUTOLOGIN] Starting automated login for:", email);
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

                console.log("[AUTOLOGIN] Login API Response:", response);

                if (response.data?.token) {
                    console.log("[AUTOLOGIN] Login successful. Extracting tokens and user info.");
                    const { access, refresh } = response.data.token;
                    const user_role = response.data.user_role ?? null;
                    const user_id = response.data.user_id ?? null;

                    auth.login({ access, refresh, user_role, user_id });

                    // Show final success state in the modal
                    if (pid === 'REFERRAL_CODE') {
                        // Referral code: do nothing, let submitForm show the popup
                    } else if (pid !== 'DIRECT_CREATE_CCS') {
                        paymentStatus.value = 'success';
                        paymentId.value = pid;
                        processingMessage.value = 'Successfully registered! Redirecting to profile...';

                        // setTimeout(() => {
                        //     window.location.href = '/myaccount';
                        // }, 3000);
                    } else {
                        await closeStatusModal();
                        // window.location.href = '/myaccount';
                    }
                } else {
                    console.error("[AUTOLOGIN] Login failed - No token received");
                }
            } catch (err: any) {
                await closeStatusModal();
                console.error('[AUTOLOGIN] Critical Error:', err);
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
                        name: "GCC School",
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
                            } catch (e) {
                                await closeStatusModal();
                                $fetch('/api/log-client-error', { method: 'POST', body: { context: 'DossierModal - completePayment (Razorpay)', errorMessage: (e as any)?.message || 'Payment verification failed', errorData: (e as any)?.data || (e as any)?.message || String(e), userInfo: { email: form.email } } }).catch(() => { });
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
                                await openStatusModal('failed', 'Payment cancelled by user');
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
                        await openStatusModal('failed', response.error.description || 'Payment failed');
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

                    cashfree.checkout({
                        paymentSessionId: res.payment_session_id,
                        redirectTarget: "_modal"
                    }).then(async (result: any) => {
                        restoreBodyScroll();

                        if (result.error) {
                            console.error("[PAYMENT] Cashfree error:", result.error);
                            await closeDossierModal();
                            await openStatusModal('failed', result.error?.message || 'Payment failed');
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
                                $fetch('/api/log-client-error', { method: 'POST', body: { context: 'DossierModal - completePayment (Cashfree)', errorMessage: (e as any)?.message || 'Payment verification failed', errorData: (e as any)?.data || (e as any)?.message || String(e), userInfo: { email: form.email } } }).catch(() => { });
                                showAlert('Payment Error', 'Payment verification failed. Please contact support.', 'error');
                            }
                        }
                    });
                }

            } catch (err) {
                await closeStatusModal();
                console.error(err);
                $fetch('/api/log-client-error', { method: 'POST', body: { context: 'DossierModal - handlePayment', errorMessage: (err as any)?.message || 'Payment initiation failed', errorData: (err as any)?.data || (err as any)?.message || String(err), userInfo: { email: form.email, phone: form.phone, name: form.name } } }).catch(() => { });
                showNotification('error', 'Payment initiation failed');
            }
        };

        onMounted(() => {
            const el = document.getElementById(props.modalId);
            if (el) {
                el.addEventListener('show.bs.modal', resetForm);
                el.addEventListener('hidden.bs.modal', () => {
                    form.referral_code = '';
                    referralApplied.value = false;
                    errors.referral_code = '';
                });
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
            filteredUniversities,
            selectUni,
            onStateChange,
            isSubmitting,
            isDownloaded,
            showFeeWaiverModal,
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
            referralApplied,
            isVerifyingReferral,
            verifyAndApplyReferral,
            showCelebrationPopup,
            handleCelebrationCta,
            getConfettiStyle
        };
    }
});
</script>

<style scoped>
/* ─── Referral Input Group ─────────────────────────────────────────────── */
.referral-input-group {
    display: flex;
    align-items: center;
    gap: 8px;
}

.referral-field {
    flex: 1;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.referral-field.referral-verified {
    border-color: #28a745 !important;
    background-color: #f0fff4 !important;
    color: #155724;
}

.btn-apply-coupon {
    flex-shrink: 0;
    background: linear-gradient(135deg, #8A2BE2, #A13E99);
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 10px 18px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
    white-space: nowrap;
    letter-spacing: 0.5px;
}

.btn-apply-coupon:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 14px rgba(138, 43, 226, 0.4);
    filter: brightness(1.1);
}

.btn-apply-coupon:disabled {
    opacity: 0.55;
    cursor: not-allowed;
}

.referral-applied-badge {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 5px;
    background: #d4edda;
    color: #155724;
    border: 1.5px solid #28a745;
    border-radius: 10px;
    padding: 9px 14px;
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
    animation: badge-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes badge-pop {
    0% { transform: scale(0.5); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
}

.referral-success-msg {
    display: block;
    margin-top: 5px;
    font-size: 12.5px;
    animation: fadeInUp 0.4s ease;
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ─── Celebration Overlay ──────────────────────────────────────────────── */
.celebration-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(6px);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.celebration-card {
    position: relative;
    background: #fff;
    border-radius: 28px;
    max-width: 520px;
    width: 100%;
    overflow: hidden;
    box-shadow: 0 30px 80px rgba(138, 43, 226, 0.35), 0 0 0 1px rgba(138, 43, 226, 0.08);
    animation: card-bounce-in 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes card-bounce-in {
    0% { transform: scale(0.6) translateY(40px); opacity: 0; }
    100% { transform: scale(1) translateY(0); opacity: 1; }
}

/* Confetti Container */
.confetti-container {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 140px;
    overflow: hidden;
    pointer-events: none;
}

.confetti-particle {
    position: absolute;
    top: -20px;
    border-radius: 2px;
    animation: confetti-fall linear infinite;
    opacity: 0.85;
}

@keyframes confetti-fall {
    0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(160px) rotate(540deg); opacity: 0; }
}

.celebration-close {
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 10;
    background: rgba(0,0,0,0.08);
    border: none;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    color: #555;
    transition: background 0.2s, transform 0.2s;
}

.celebration-close:hover {
    background: rgba(0,0,0,0.15);
    transform: rotate(90deg);
}

.celebration-content {
    padding: 48px 36px 36px;
    text-align: center;
}

.celebration-emoji {
    font-size: 64px;
    line-height: 1;
    margin-bottom: 12px;
    display: block;
    animation: emoji-bounce 0.8s ease 0.3s both;
}

@keyframes emoji-bounce {
    0% { transform: scale(0) rotate(-30deg); }
    60% { transform: scale(1.25) rotate(10deg); }
    100% { transform: scale(1) rotate(0deg); }
}

.celebration-title {
    font-size: 1.9rem;
    font-weight: 800;
    background: linear-gradient(135deg, #8A2BE2, #A13E99, #FFD700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 20px;
    letter-spacing: -0.5px;
}

.celebration-body {
    text-align: left;
    font-size: 0.92rem;
    color: #444;
    line-height: 1.65;
}

.celebration-body p {
    margin-bottom: 8px;
}

.celebration-body strong {
    color: #511970;
}

.celebration-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, #e0d0f0, transparent);
    margin: 14px 0;
}

.text-sm-muted {
    font-size: 0.82rem !important;
    color: #888 !important;
}

.celebration-referral-note {
    color: #8A2BE2;
    font-weight: 500;
}

.celebration-welcome {
    font-size: 0.95rem;
    color: #333;
    font-weight: 500;
}

.celebration-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    background: linear-gradient(135deg, #8A2BE2 0%, #A13E99 100%);
    color: #fff;
    border: none;
    border-radius: 14px;
    padding: 14px 32px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    box-shadow: 0 6px 20px rgba(138, 43, 226, 0.35);
}

.celebration-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(138, 43, 226, 0.45);
    filter: brightness(1.08);
}

/* Transition */
.celebration-fade-enter-active,
.celebration-fade-leave-active {
    transition: opacity 0.35s ease;
}
.celebration-fade-enter-from,
.celebration-fade-leave-to {
    opacity: 0;
}

@media (max-width: 576px) {
    .celebration-content {
        padding: 44px 22px 28px;
    }
    .celebration-title {
        font-size: 1.5rem;
    }
    .celebration-emoji {
        font-size: 52px;
    }
}

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
    border: 2px solid #000 !important;
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

/* Custom Tooltip styling */
.custom-tooltip-wrapper {
    position: relative;
    cursor: pointer;
    display: inline-block;
}

.custom-tooltip-content {
    visibility: hidden;
    opacity: 0;
    width: 260px;
    background-color: #A13E99;
    color: #fff;
    text-align: center;
    border-radius: 8px;
    padding: 8px 12px;
    position: absolute;
    z-index: 1060;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 13px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: opacity 0.3s, visibility 0.3s;
    pointer-events: none;
    font-weight: normal;
}

.custom-tooltip-content::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #A13E99 transparent transparent transparent;
}

.custom-tooltip-wrapper:hover .custom-tooltip-content {
    visibility: visible;
    opacity: 1;
}
</style>
