/**
 * api.js — API endpoints wrapper for GCC School
 */

import { auth } from './utils.js';

// Configuration base URLs
let BASE_URL = "https://kcglobed-gcc-website-932479078084.asia-south1.run.app";
let GCC_BACKEND_URL = "https://gccwebsite-admin-backend-738131651355.asia-south1.run.app";
let mode = "sandbox";

if (window.location.hostname.includes("gccschool.com")) {
    BASE_URL = "https://gcc-website-prod-932479078084.europe-west1.run.app";
    GCC_BACKEND_URL = "https://gccwebsite-admin-prod-backend-738131651355.asia-south1.run.app";
    mode = "production";
} else if (window.location.hostname.includes("localhost") || window.location.hostname.includes("127.0.0.1")) {
    BASE_URL = "https://kcglobed-gcc-website-932479078084.asia-south1.run.app";
    GCC_BACKEND_URL = "https://gccwebsite-admin-backend-738131651355.asia-south1.run.app";
    mode = "sandbox";
}

export const CONFIG = {
    // Central admin backend base URL
    BACKEND_API_BASE: GCC_BACKEND_URL,
    
    // Local server routes (start payment, complete payment, save lead, etc.)
    LOCAL_API_BASE: BASE_URL,
    
    // Source parameter for registration source
    SOURCE: 2 // 18 corresponds to the website source in testpayment.js
};

// Helper for HTTP requests
async function request(url, options = {}) {
    const defaultHeaders = {
        'Content-Type': 'application/json'
    };

    // Include auth token if available
    const token = auth.getAccessToken();
    if (token) {
        defaultHeaders['Authorization'] = `Bearer ${token}`;
    }

    const config = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers
        }
    };

    const response = await fetch(url, config);
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        const error = new Error(data.message || response.statusText || 'Request failed');
        error.status = response.status;
        error.data = data;
        throw error;
    }

    return data;
}

export const api = {
    // 1. Validate email address
    async checkEmail(email) {
        return request(`${CONFIG.BACKEND_API_BASE}/api/users/check_email/`, {
            method: 'POST',
            body: JSON.stringify({ email })
        });
    },

    // 2. Validate referral code
    async verifyReferralCode(code) {
        return request(`${CONFIG.BACKEND_API_BASE}/api/users/verify_refferal_code/`, {
            method: 'POST',
            body: JSON.stringify({ refferal_code: code })
        });
    },

    // 3. Create abandonment lead (unsaved form auto-save)
    async createAbandonmentForm({ name, email, phone, isApplyMode, utm }) {
        return request(`${CONFIG.BACKEND_API_BASE}/api/career/createabondantform`, {
            method: 'POST',
            body: JSON.stringify({
                full_name: name,
                email: email,
                phone: phone,
                source: CONFIG.SOURCE,
                source_form: isApplyMode ? 1 : 2, // 1: apply mode, 2: dossier download
                utm_source: utm.source || '',
                utm_medium: utm.medium || '',
                utm_campaign: utm.campaign || ''
            })
        });
    },

    // 4. Create Dossier form lead (saves to main database)
    async createDossierForm({ name, email, phone, state, city, university, referralCode, isApplyMode, utm, feeWaiver }) {
        const payload = {
            full_name: name,
            email: email,
            phone: phone,
            state: state,
            city: city,
            university: university,
            source: CONFIG.SOURCE,
            source_form: isApplyMode ? 1 : 2,
            utm_source: utm.source || '',
            utm_medium: utm.medium || '',
            utm_campaign: utm.campaign || '',
            referred_code: referralCode || ''
        };

        if (feeWaiver) {
            payload.fee_waiver_category = 'Free of cost (FOC)';
        }

        return request(`${CONFIG.BACKEND_API_BASE}/api/career/createdossierform`, {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },

    // 5. Submit Enquiry Form
    async submitEnquiry(payload) {
        return request(`${CONFIG.LOCAL_API_BASE}/api/enquery`, {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },

    // 6. Save Local Lead progress
    async saveLocalLead({ name, email, phone, state, city, formId, action, utm }) {
        return request(`${CONFIG.LOCAL_API_BASE}/api/save-lead`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                mobile: phone,
                state,
                city,
                form_type: 2,
                form_id: formId,
                action: action, // e.g. 'pay_now_clicked' or 'download_dossier_clicked'
                utm_source: utm.source || '',
                utm_medium: utm.medium || '',
                utm_campaign: utm.campaign || '',
                source: CONFIG.SOURCE
            })
        }).catch(err => {
            // Silently fail to not interrupt user checkout flow
            console.error('[API] saveLead failed:', err);
        });
    },

    // 7. Initiate Payment Gateway session
    async startPayment({ name, email, phone, city, state, formId }) {
        return request(`${CONFIG.LOCAL_API_BASE}/api/start-payment`, {
            method: 'POST',
            body: JSON.stringify({
                user_id: null,
                name,
                email,
                mobile: phone,
                city,
                state,
                form_type: 2,
                form_id: formId,
                source: CONFIG.SOURCE
            })
        });
    },

    // 8. Verify and complete payment
    async completePayment(payload) {
        return request(`${CONFIG.LOCAL_API_BASE}/api/complete-payment`, {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },

    // 9. Report payment failure
    async reportPaymentFailure(payload) {
        return request(`${CONFIG.LOCAL_API_BASE}/api/report-payment-failure`, {
            method: 'POST',
            body: JSON.stringify(payload)
        }).catch(err => {
            console.error('[API] Failed to report payment failure:', err);
        });
    },

    // 10. Create Student Account
    async createStudentAccount({ name, email, phone, city, state, referralCode }) {
        return request(`${CONFIG.BACKEND_API_BASE}/api/users/create_student/`, {
            method: 'POST',
            body: JSON.stringify({
                full_name: name,
                email: email,
                city: city,
                state: state,
                country: 'India',
                phone1: phone,
                referred_code: referralCode || ''
            })
        });
    },

    // 11. Student Auto-Login
    async autoLogin(email, password) {
        return request(`${CONFIG.BACKEND_API_BASE}/api/users/website_login/`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                role: 'student'
            })
        });
    },

    // 12. Log client side errors to server
    async logClientError(payload) {
        return request(`${CONFIG.LOCAL_API_BASE}/api/log-client-error`, {
            method: 'POST',
            body: JSON.stringify(payload)
        }).catch(() => {});
    }
};
