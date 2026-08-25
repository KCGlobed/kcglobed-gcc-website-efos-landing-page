/**
 * forms.js — Form handlers, validations, dynamic selects, and submission callbacks
 */

import { api } from './api.js';
import { payment } from './payment.js';
import { isValidMobile } from './utils.js';

// Cache for JSON data
let stateCityData = {};
let universityList = [];

// Form States
const enquiryForm = {
    data: {
        name: '', mobile: '', email: '', city: '', state: '', pincode: '',
        graduationProgram: '', graduationProgramOther: '', graduationStatus: '',
        currentCGPA: '', firstDivision: '', higherQualification: '', higherQualificationOther: '',
        college: '', source: '', remarks: '', consent: false
    },
    errors: {}
};

const dossierForm = {
    data: {
        name: '', email: '', phone: '', state: '', city: '', university: '',
        isCommerceGraduate: false, referral_code: ''
    },
    errors: {},
    isDownloaded: false,
    referralApplied: false,
    isVerifyingReferral: false,
    formId: null
};

// URL Query Helpers for UTM tracking
function getUtmParams() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Fallback getter from cookies or empty string
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return '';
    };

    return {
        source: urlParams.get('utm_source') || getCookie('utm_source') || '',
        medium: urlParams.get('utm_medium') || getCookie('utm_medium') || '',
        campaign: urlParams.get('utm_campaign') || getCookie('utm_campaign') || ''
    };
}

// ── Initialize Dropdowns ──
async function initFormDropdowns() {
    try {
        // 1. Fetch State and City list
        const scRes = await fetch('assets/state_city.json');
        stateCityData = await scRes.json();

        // 2. Fetch Universities list
        const uniRes = await fetch('assets/universities.json');
        const unis = await uniRes.json();

        // 3. Fetch Highlighted Select Universities list
        const selRes = await fetch('assets/select-university.json');
        const selUnis = await selRes.json();

        // Format universities list
        const filteredUnis = unis.filter(name => !selUnis.includes(name))
            .map((name, index) => ({ id: `u-${index}`, name, isHighlight: false }));
        
        const highlightedUnis = selUnis.map((name, index) => ({ id: `s-${index}`, name, isHighlight: true }));
        
        universityList = [...filteredUnis, ...highlightedUnis];
        
        // Populate States selects
        const states = Object.keys(stateCityData).sort((a, b) => a.localeCompare(b));
        populateStateDropdowns(states);

        // Populate College dropdown in Enquiry Form
        populateEnquiryColleges(unis);

        console.log('[Forms] Successfully loaded configuration JSONs');
    } catch (err) {
        console.error('[Forms] Error initializing configurations:', err);
    }
}

function populateStateDropdowns(states) {
    const selects = document.querySelectorAll('.state-select');
    selects.forEach(select => {
        select.innerHTML = '<option value="" disabled selected>Select State</option>';
        states.forEach(state => {
            const opt = document.createElement('option');
            opt.value = state;
            opt.textContent = state;
            select.appendChild(opt);
        });
    });
}

function populateEnquiryColleges(colleges) {
    const select = document.getElementById('enquiryCollege');
    if (select) {
        select.innerHTML = '<option value="">Select College / University</option>';
        colleges.forEach(college => {
            const opt = document.createElement('option');
            opt.value = college;
            opt.textContent = college;
            select.appendChild(opt);
        });
    }
}

// ── Enquiry Form Logic ──
function setupEnquiryForm() {
    const form = document.querySelector('#enquiryModal form');
    if (!form) return;

    // Grad/Status conditional fields toggles
    const gradProgSelect = form.querySelector('[placeholder="graduationProgram"]');
    const gradStatusSelect = form.querySelector('[placeholder="graduationStatus"]');
    const divisionSelect = form.querySelector('[placeholder="firstDivision"]');
    const higherQualSelect = form.querySelector('[placeholder="higherQualification"]');

    const checkConditionalToggles = () => {
        // Graduation Program OTHER check
        const otherGradBox = document.getElementById('otherGraduationProgramBox');
        if (otherGradBox) {
            otherGradBox.style.display = (form.graduationProgram.value === 'Other') ? 'block' : 'none';
        }
        
        // Graduation Status check
        const pursuingBox = document.getElementById('pursuingDetailsBox');
        const completedBox = document.getElementById('completedDetailsBox');
        
        if (form.graduationStatus.value === 'Pursuing') {
            if (pursuingBox) pursuingBox.style.display = 'block';
            if (completedBox) completedBox.style.display = 'none';
        } else if (form.graduationStatus.value === 'Completed') {
            if (pursuingBox) pursuingBox.style.display = 'none';
            if (completedBox) completedBox.style.display = 'block';
        } else {
            if (pursuingBox) pursuingBox.style.display = 'none';
            if (completedBox) completedBox.style.display = 'none';
        }

        // Higher Qualification OTHER check
        const otherHigherBox = document.getElementById('otherHigherQualificationBox');
        if (otherHigherBox) {
            otherHigherBox.style.display = (form.higherQualification && form.higherQualification.value === 'Other') ? 'block' : 'none';
        }
    };

    if (gradProgSelect) gradProgSelect.addEventListener('change', checkConditionalToggles);
    if (gradStatusSelect) gradStatusSelect.addEventListener('change', checkConditionalToggles);
    if (divisionSelect) divisionSelect.addEventListener('change', checkConditionalToggles);
    if (higherQualSelect) higherQualSelect.addEventListener('change', checkConditionalToggles);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Clean error styles
        form.querySelectorAll('.text-danger').forEach(el => el.textContent = '');
        
        let isValid = true;
        const setError = (name, msg) => {
            const errEl = form.querySelector(`.error-${name}`);
            if (errEl) errEl.textContent = msg;
            isValid = false;
        };

        const name = form.querySelector('[placeholder="Full Name"]').value.trim();
        const mobile = form.querySelector('[placeholder="Mobile Number"]').value.trim();
        const email = form.querySelector('[placeholder="Email ID"]').value.trim();
        const city = form.querySelector('[placeholder="City"]').value.trim();
        const state = form.querySelector('[placeholder="State"]').value;
        const pincode = form.querySelector('[placeholder="Pincode"]').value.trim();
        const graduationProgram = form.querySelector('[placeholder="graduationProgram"]').value;
        const graduationProgramOther = form.querySelector('[placeholder="graduationProgramOther"]')?.value.trim() || '';
        const graduationStatus = form.querySelector('[placeholder="graduationStatus"]').value;
        const currentCGPA = form.querySelector('[placeholder="Enter your current CGPA/Percentage"]')?.value.trim() || '';
        const firstDivision = form.querySelector('[placeholder="firstDivision"]')?.value || '';
        const higherQualification = form.querySelector('[placeholder="higherQualification"]')?.value || '';
        const higherQualificationOther = form.querySelector('[placeholder="higherQualificationOther"]')?.value.trim() || '';
        const college = form.querySelector('[placeholder="Select College / University"]').value;
        const source = form.querySelector('[placeholder="How Did You Hear About GCC School?"]').value;
        const remarks = form.querySelector('[placeholder="Query / Remarks (Optional)"]').value.trim();
        const consent = form.querySelector('.form-check-input').checked;

        if (!name) setError('name', 'Name is required');
        if (!mobile) setError('mobile', 'Mobile number is required');
        if (!email) setError('email', 'Email is required');
        if (!city) setError('city', 'City is required');
        if (!state) setError('state', 'State is required');
        if (!pincode) setError('pincode', 'Pincode is required');
        if (!graduationProgram) setError('graduationProgram', 'Select graduation program');
        if (graduationProgram === 'Other' && !graduationProgramOther) setError('graduationProgramOther', 'Please specify your program');
        if (!graduationStatus) setError('graduationStatus', 'Select graduation status');
        if (graduationStatus === 'Pursuing' && !currentCGPA) setError('currentCGPA', 'CGPA/Percentage is required');
        if (graduationStatus === 'Completed' && !firstDivision) setError('firstDivision', 'Please indicate if you passed with First Division');
        if (!college) setError('college', 'Select college/university');
        if (!source) setError('source', 'Select how you heard about us');
        if (!consent) setError('consent', 'Consent is required');

        if (!isValid) return;

        const payload = {
            name, mobile, email, city, state,
            graduation_program: graduationProgram,
            graduation_program_other: graduationProgramOther,
            graduation_status: graduationStatus,
            current_cgpa: currentCGPA,
            first_division: firstDivision,
            college, source, remarks, pincode
        };

        
        const submitBtn = form.querySelector('button[type="submit"]');
        const spinner = submitBtn.querySelector('.spinner-border');
        
        try {
            submitBtn.disabled = true;
            if (spinner) spinner.classList.remove('d-none');

            const res = await api.submitEnquiry(payload);
            if (res.success) {
                alert("Thank you! Our team will contact you soon.");
                
                // Hide modal
                const modalInstance = bootstrap.Modal.getInstance(document.getElementById('enquiryModal'));
                if (modalInstance) modalInstance.hide();
                
                // Open brochure
                window.open("https://storage.googleapis.com/static_files_backend/media/landing/GCC%20School%20Brochure%201.pdf", "_blank");
                
                form.reset();
                checkConditionalToggles();
            } else {
                alert(res.message || "Something went wrong. Please try again.");
            }
        } catch (err) {
            console.error('[Forms] Enquiry submission error:', err);
            alert(err.data?.message || "Server error. Try later.");
        } finally {
            submitBtn.disabled = false;
            if (spinner) spinner.classList.add('d-none');
        }
    });
}

// ── Dossier & Apply Modals Logic ──
function setupDossierModals() {
    const modals = document.querySelectorAll('.dossier-modal');
    modals.forEach(modalEl => {
        const modalId = modalEl.id;
        const form = modalEl.querySelector('form');
        if (!form) return;

        const isApplyMode = modalEl.getAttribute('mode') === 'apply' || form.closest('.modal').id.includes('Apply');
        const stateSelect = form.querySelector('.state-select');
        const citySelect = form.querySelector('.city-select');
        const uniSearchInput = form.querySelector('.searchable-select input');
        const uniDropdown = form.querySelector('.searchable-select .dropdown-list');
        const referralInput = form.querySelector('.referral-field');
        const applyReferralBtn = form.querySelector('.btn-apply-coupon');
        const closeBtn = modalEl.querySelector('[data-bs-dismiss="modal"]');

        let isDownloaded = false;
        let referralApplied = false;
        let formId = null;
        let isVerifying = false;

        // Reset state on open
        modalEl.addEventListener('show.bs.modal', () => {
            form.reset();
            isDownloaded = false;
            referralApplied = false;
            formId = null;
            isVerifying = false;
            
            // Restore views
            const preDownloadSection = form.querySelector('.pre-download-section') || form.querySelector('div[v-if="!isDownloaded"]');
            const postDownloadSection = form.querySelector('.post-download-section') || form.querySelector('div[v-else]');
            if (preDownloadSection) preDownloadSection.classList.remove('d-none');
            if (postDownloadSection) postDownloadSection.classList.add('d-none');
            
            const appliedBadge = form.querySelector('.referral-applied-badge');
            if (appliedBadge) appliedBadge.classList.add('d-none');
            if (applyReferralBtn) applyReferralBtn.classList.remove('d-none');
            if (referralInput) {
                referralInput.readOnly = false;
                referralInput.classList.remove('referral-verified');
            }

            form.querySelectorAll('.text-danger').forEach(el => el.textContent = '');
            const consentErrorEl = form.querySelector('#consentError');
            if (consentErrorEl) consentErrorEl.textContent = '';
            if (citySelect) citySelect.innerHTML = '<option value="" disabled selected>Select City</option>';
        });

        // Sync Cities select when State changes
        if (stateSelect && citySelect) {
            stateSelect.addEventListener('change', () => {
                const state = stateSelect.value;
                citySelect.innerHTML = '<option value="" disabled selected>Select City</option>';
                if (stateCityData[state]) {
                    const cities = [...stateCityData[state]].sort((a, b) => a.localeCompare(b));
                    cities.forEach(city => {
                        const opt = document.createElement('option');
                        opt.value = city;
                        opt.textContent = city;
                        citySelect.appendChild(opt);
                    });
                }
            });
        }

        // University Search Select autocomplete
        if (uniSearchInput && uniDropdown) {
            const filterUniversities = () => {
                const query = uniSearchInput.value.trim().toLowerCase();
                uniDropdown.innerHTML = '';
                
                const filtered = universityList.filter(u => u.name.toLowerCase().includes(query));
                if (filtered.length === 0) {
                    uniDropdown.classList.add('d-none');
                    return;
                }

                filtered.slice(0, 50).forEach(uni => {
                    const item = document.createElement('div');
                    item.className = 'dropdown-item';
                    item.textContent = uni.name;
                    item.addEventListener('click', () => {
                        uniSearchInput.value = uni.name;
                        uniDropdown.classList.add('d-none');
                    });
                    uniDropdown.appendChild(item);
                });
                uniDropdown.classList.remove('d-none');
            };

            uniSearchInput.addEventListener('focus', filterUniversities);
            uniSearchInput.addEventListener('input', filterUniversities);

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.searchable-select')) {
                    uniDropdown.classList.add('d-none');
                }
            });
        }

        // Auto-save form abandonment data when inputs lose focus
        const inputs = [form.querySelector('[placeholder="Enter your full name"]'), form.querySelector('[placeholder="Enter your email address"]'), form.querySelector('[placeholder="Enter your phone number"]')];
        let lastAbandonmentValue = '';
        
        const triggerAbandonment = async () => {
            const name = inputs[0].value.trim();
            const email = inputs[1].value.trim();
            const phone = inputs[2].value.trim();
            
            // Validate email and phone formats before sending
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (name && email && phone && emailRegex.test(email) && isValidMobile(phone)) {
                const currentData = `${name}-${email}-${phone}`;
                if (lastAbandonmentValue === currentData) return;
                lastAbandonmentValue = currentData;
                
                try {
                    await api.createAbandonmentForm({
                        name, email, phone,
                        isApplyMode,
                        utm: getUtmParams()
                    });
                } catch (err) {
                    console.error('[Forms] Auto-save abandonment failed:', err);
                }
            }
        };

        inputs.forEach(input => {
            if (input) input.addEventListener('blur', triggerAbandonment);
        });

        // Coupon Referral Apply Button click
        if (applyReferralBtn && referralInput) {
            applyReferralBtn.addEventListener('click', async () => {
                const code = referralInput.value.trim();
                if (!code) return;

                const errorEl = form.querySelector('.error-referral_code');
                if (errorEl) errorEl.textContent = '';

                try {
                    isVerifying = true;
                    applyReferralBtn.disabled = true;
                    const spinner = applyReferralBtn.querySelector('.spinner-border');
                    if (spinner) spinner.classList.remove('d-none');

                    const verifyRes = await api.verifyReferralCode(code);
                    if (verifyRes?.success === false || verifyRes?.data?.verified_status === false) {
                        if (errorEl) errorEl.textContent = verifyRes.message || 'Invalid referral code';
                    } else {
                        referralApplied = true;
                        referralInput.readOnly = true;
                        referralInput.classList.add('referral-verified');
                        applyReferralBtn.classList.add('d-none');
                        
                        const appliedBadge = form.querySelector('.referral-applied-badge');
                        if (appliedBadge) appliedBadge.classList.remove('d-none');
                    }
                } catch (err) {
                    const apiMessage = err?.data?.message || err?.data?.data?.message;
                    if (errorEl) errorEl.textContent = apiMessage || err?.message || 'Invalid referral code';
                } finally {
                    isVerifying = false;
                    applyReferralBtn.disabled = false;
                    const spinner = applyReferralBtn.querySelector('.spinner-border');
                    if (spinner) spinner.classList.add('d-none');
                }
            });
        }

        // Form Submit handler
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Clear errors
            form.querySelectorAll('.text-danger').forEach(el => el.textContent = '');
            const consentErrorEl = form.querySelector('#consentError');
            if (consentErrorEl) consentErrorEl.textContent = '';

            let isValid = true;
            const setError = (name, msg) => {
                const errEl = form.querySelector(`.error-${name}`);
                if (errEl) errEl.textContent = msg;
                isValid = false;
            };

            const nameInput = form.querySelector('[placeholder="Enter your full name"]');
            const emailInput = form.querySelector('[placeholder="Enter your email address"]');
            const phoneInput = form.querySelector('[placeholder="Enter your phone number"]');
            const stateInput = form.querySelector('.state-select');
            const cityInput = form.querySelector('.city-select');
            const uniInput = form.querySelector('.searchable-select input');
            const referralCodeInput = form.querySelector('.referral-field');
            const commerceCheckInput = form.querySelector('.form-check-input');

            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const phone = phoneInput ? phoneInput.value.trim() : '';
            const state = stateInput ? stateInput.value : '';
            const city = cityInput ? cityInput.value : '';
            const university = uniInput ? uniInput.value.trim() : '';
            const referralCode = referralCodeInput ? referralCodeInput.value.trim() : '';
            const isCommerceGraduate = commerceCheckInput ? commerceCheckInput.checked : false;

            if (!name) setError('name', 'Full name is required');
            if (!email) setError('email', 'Email address is required');
            if (!phone) setError('phone', 'Phone number is required');
            else if (!isValidMobile(phone)) setError('phone', 'Please enter a valid 10-digit mobile number');
            if (!state) setError('state', 'State is required');
            if (!city) setError('city', 'City is required');
            if (!university) setError('university', 'University is required');

            // Terms and conditions checks
            // Apply mode requires checkbox checked. 
            // Dossier mode: check box is only required if already downloaded (and checkout payment button is clicked)
            if ((isApplyMode || isDownloaded) && !isCommerceGraduate) {
                setError('isCommerceGraduate', 'You must agree to the Terms and Privacy Policy');
            }

            // termsConsent checkbox check for pre-download phase
            const consentCheckbox = form.querySelector('#termsConsent');
            if (!isApplyMode && !isDownloaded && consentCheckbox && !consentCheckbox.checked) {
                isValid = false;
                const consentError = form.querySelector('#consentError');
                if (consentError) {
                    consentError.textContent = 'Please accept the Terms and Privacy Policy to continue.';
                }
                consentCheckbox.focus();
            }

            if (!isValid) return;

            const submitBtn = form.querySelector('button[type="submit"]');
            const spinner = submitBtn ? submitBtn.querySelector('.spinner-border') : null;
            const submitBtnTextEl = submitBtn ? submitBtn.querySelector('span:not(.spinner-border)') : null;
            const originalBtnText = submitBtnTextEl ? submitBtnTextEl.textContent : '';

            try {
                if (submitBtn) submitBtn.disabled = true;
                if (spinner) spinner.classList.remove('d-none');
                if (isApplyMode && submitBtnTextEl) {
                    submitBtnTextEl.textContent = 'Registering...';
                }

                // 1. Verify Referral Code in database before submission if written but not checked
                let referralVerified = referralApplied;
                if (referralCode && !referralVerified) {
                    try {
                        const verifyRes = await api.verifyReferralCode(referralCode);
                        if (verifyRes?.success === false || verifyRes?.data?.verified_status === false) {
                            setError('referral_code', verifyRes.message || 'Invalid referral code');
                            if (submitBtn) submitBtn.disabled = false;
                            if (spinner) spinner.classList.add('d-none');
                            return;
                        }
                        referralVerified = true;
                    } catch (err) {
                        const apiMsg = err?.data?.message || err?.data?.data?.message;
                        setError('referral_code', apiMsg || err?.message || 'Invalid referral code');
                        if (submitBtn) submitBtn.disabled = false;
                        if (spinner) spinner.classList.add('d-none');
                        return;
                    }
                }

                // Show registering popup modal if we are registering a student account
                if (isApplyMode || referralVerified) {
                    updatePaymentStatusModal('processing', 'Please wait while we register you...');
                }

                // 2. Validate email duplicate checks for apply now
                if (isApplyMode) {
                    try {
                        const checkRes = await api.checkEmail(email);
                        if (checkRes.data?.isExist) {
                            if (submitBtn) submitBtn.disabled = false;
                            if (spinner) spinner.classList.add('d-none');
                            
                            // Close modal, show alerts
                            const modalInstance = bootstrap.Modal.getInstance(modalEl);
                            if (modalInstance) modalInstance.hide();
                            
                            triggerGlobalAlert('Account Exists', 'An account with this email address already exists. Please log in or reset your password.');
                            return;
                        }
                    } catch (err) {
                        if (err.status !== 404) {
                            console.error('[Forms] Check email failed:', err);
                            setError('email', 'Failed to validate email status. Please try again.');
                            if (submitBtn) submitBtn.disabled = false;
                            if (spinner) spinner.classList.add('d-none');
                            return;
                        }
                    }
                }

                // 3. Create dossier form submission
                const payload = {
                    name, email, phone, state, city, university,
                    referralCode: referralVerified ? referralCode : '',
                    isApplyMode,
                    utm: getUtmParams(),
                    feeWaiver: referralVerified
                };

                const response = await api.createDossierForm(payload);

                if (response.success && response.data?.url) {
                    const fileUrl = response.data.url;
                    formId = response.data.id;
                    const fileName = fileUrl.split('/').pop() || 'Dossier.pdf';

                    // Save local lead status
                    await api.saveLocalLead({
                        name, email, phone, state, city,
                        formId,
                        action: isApplyMode ? 'pay_now_clicked' : 'download_dossier_clicked',
                        utm: getUtmParams()
                    });

                    // 4. Handle Free Coupon Fee Waiver
                    if (referralVerified) {
                        // Skip payment gateways, create account and show celebration overlay
                        await payment.handlePostPaymentSuccess('REFERRAL_CODE', {
                            name, email, phone, city, state, referralCode
                        }, updatePaymentStatusModal);

                        if (!isApplyMode) {
                            // Download pdf
                            triggerFileDownload(fileUrl, fileName);
                        }

                        // Close bootstrap modal
                        const modalInstance = bootstrap.Modal.getInstance(modalEl);
                        if (modalInstance) modalInstance.hide();

                        // Close registering popup modal
                        updatePaymentStatusModal('dismiss');

                        // Open congratulations celebrations popup
                        triggerCelebrationPopup();
                        
                        if (submitBtn) submitBtn.disabled = false;
                        if (spinner) spinner.classList.add('d-none');
                        return;
                    }

                    // 5. Normal mode checkout/download routing
                    if (isApplyMode) {
                        isDownloaded = true;
                        
                        // Close register modal automatically
                        const modalInstance = bootstrap.Modal.getInstance(modalEl);
                        if (modalInstance) modalInstance.hide();
                        
                        // Direct checkout flow
                        // await payment.startCheckout({
                        //     name, email, phone, city, state, formId, referralCode
                        // }, updatePaymentStatusModal);

                        // Direct submission: Skip payment and directly register student
                        await payment.handlePostPaymentSuccess('DIRECT_SUBMIT', {
                            name, email, phone, city, state, referralCode
                        }, updatePaymentStatusModal);

                        // Close registering popup modal
                        updatePaymentStatusModal('dismiss');

                        // Trigger congratulations celebration popup
                        triggerCelebrationPopup();
                    } else {
                        // Dossier download mode
                        triggerFileDownload(fileUrl, fileName);
                        isDownloaded = true;
                        
                        // Show "PAY NOW" buttons section on the modal
                        const preDownloadSection = form.querySelector('.pre-download-section') || form.querySelector('div[v-if="!isDownloaded"]');
                        const postDownloadSection = form.querySelector('.post-download-section') || form.querySelector('div[v-else]');
                        if (preDownloadSection) preDownloadSection.classList.add('d-none');
                        if (postDownloadSection) postDownloadSection.classList.remove('d-none');
                        
                        alert("Dossier downloaded successfully! You can now proceed to pay the application fee.");
                    }
                } else {
                    alert(response.message || 'Something went wrong. Please try again.');
                }

            } catch (err) {
                console.error('[Forms] Dossier submit error:', err);
                alert(err.data?.message || 'Server error. Please try again later.');
            } finally {
                if (submitBtn) submitBtn.disabled = false;
                if (spinner) spinner.classList.add('d-none');
                if (isApplyMode && submitBtnTextEl) {
                    submitBtnTextEl.textContent = originalBtnText;
                }
            }
        });

        // Post-download checkout click handler (Dossier Mode ONLY)
        const payNowBtn = form.querySelector('.post-download-section button, button[onClick="handlePayment"], .btn-pay-now');
        if (payNowBtn) {
            payNowBtn.addEventListener('click', async (e) => {
                e.preventDefault();
                e.stopPropagation();

                // Validate checkbox
                const commerceCheckInput = form.querySelector('.form-check-input');
                const isCommerceGraduate = commerceCheckInput ? commerceCheckInput.checked : false;
                const errorEl = form.querySelector('.error-isCommerceGraduate');
                
                if (errorEl) errorEl.textContent = '';
                if (!isCommerceGraduate) {
                    if (errorEl) errorEl.textContent = 'You must agree to the Terms and Privacy Policy';
                    return;
                }

                const name = form.querySelector('[placeholder="Enter your full name"]').value.trim();
                const email = form.querySelector('[placeholder="Enter your email address"]').value.trim();
                const phone = form.querySelector('[placeholder="Enter your phone number"]').value.trim();
                const state = stateSelect.value;
                const city = citySelect.value;
                const referralCode = referralInput.value.trim();

                // Close Register modal
                const modalInstance = bootstrap.Modal.getInstance(modalEl);
                if (modalInstance) modalInstance.hide();

                // Show registering popup modal
                updatePaymentStatusModal('processing', 'Please wait while we register you...');

                try {
                    // Direct submission: Skip payment and directly register student
                    await payment.handlePostPaymentSuccess('DIRECT_SUBMIT', {
                        name, email, phone, city, state, referralCode
                    }, updatePaymentStatusModal);

                    // Close registering popup modal
                    updatePaymentStatusModal('dismiss');

                    // Trigger congratulations celebration popup
                    triggerCelebrationPopup();
                } catch (err) {
                    console.error('[Forms] Pay now direct submit error:', err);
                } finally {
                    updatePaymentStatusModal('dismiss');
                }
            });
        }
    });
}

// Helper to download pdf files
function triggerFileDownload(url, filename) {
    // Uses standard proxy route to bypass CORS block on storage download headers
    window.location.href = `/api/download?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(filename)}`;
}

// Helper to show celebration overlay confetti animation
function triggerCelebrationPopup() {
    const celebrationEl = document.getElementById('celebrationOverlay');
    if (celebrationEl) {
        celebrationEl.classList.add('show');
    }
}

// Helper to show modal alert warnings
function triggerGlobalAlert(title, message) {
    const alertModalEl = document.getElementById('globalAlertModal');
    if (alertModalEl) {
        alertModalEl.querySelector('.modal-title').textContent = title;
        alertModalEl.querySelector('.modal-body p').innerHTML = message;
        const modal = new bootstrap.Modal(alertModalEl);
        modal.show();
    }
}

// Updates payment status modal visibility and messages
function updatePaymentStatusModal(status, message = '') {
    const statusModalEl = document.getElementById('paymentStatusModal');
    if (!statusModalEl) return;

    const spinner = statusModalEl.querySelector('.spinner-border');
    const successIcon = statusModalEl.querySelector('.success-icon');
    const failedIcon = statusModalEl.querySelector('.failed-icon');
    const statusText = statusModalEl.querySelector('.status-message');
    const closeBtn = statusModalEl.querySelector('.btn-close');

    // Retrieve Bootstrap modal instance
    const modal = bootstrap.Modal.getInstance(statusModalEl) || new bootstrap.Modal(statusModalEl);

    if (status === 'dismiss') {
        modal.hide();
        return;
    }

    modal.show();

    if (status === 'processing') {
        if (spinner) spinner.classList.remove('d-none');
        if (successIcon) successIcon.classList.add('d-none');
        if (failedIcon) failedIcon.classList.add('d-none');
        if (closeBtn) closeBtn.classList.add('d-none');
    } else if (status === 'success') {
        if (spinner) spinner.classList.add('d-none');
        if (successIcon) successIcon.classList.remove('d-none');
        if (failedIcon) failedIcon.classList.add('d-none');
        if (closeBtn) closeBtn.classList.remove('d-none');
    } else if (status === 'failed') {
        if (spinner) spinner.classList.add('d-none');
        if (successIcon) successIcon.classList.add('d-none');
        if (failedIcon) failedIcon.classList.remove('d-none');
        if (closeBtn) closeBtn.classList.remove('d-none');
    }

    if (statusText) statusText.innerHTML = message;
}

// DOM Setup on load
document.addEventListener('DOMContentLoaded', () => {
    initFormDropdowns();
    setupEnquiryForm();
    setupDossierModals();

    // Close button for celebration modal
    const closeCelebrationBtn = document.querySelector('.celebration-close, .celebration-close-btn');
    if (closeCelebrationBtn) {
        closeCelebrationBtn.addEventListener('click', () => {
            const celebrationEl = document.getElementById('celebrationOverlay');
            if (celebrationEl) celebrationEl.classList.remove('show');
        });
    }
});
