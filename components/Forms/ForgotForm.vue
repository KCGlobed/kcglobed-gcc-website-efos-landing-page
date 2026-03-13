<template>
    <div class="login-root">
        <!-- Animated background -->
        <div class="bg-mesh">
            <div class="orb orb-1" />
            <div class="orb orb-2" />
            <div class="orb orb-3" />
        </div>

        <div class="login-wrapper">
            <!-- Card -->
            <div class="card">
                <!-- Brand logo inside card -->
                <div class="card-logo">
                    <div class="logo-mark">
                        <img src="/img/GCC-School-Logo-White.png" alt="" srcset="">
                    </div>
                </div>

                <!-- Default: request reset -->
                <template v-if="!submitted">
                    <div class="card-header">
                        <p class="card-title">Forgot your password?</p>
                    </div>

                    <form class="login-form" novalidate @submit.prevent="handleSubmit">
                        <!-- Email -->
                        <div class="field-group"
                            :class="{ error: errors.email, success: touched.email && !errors.email }">
                            <label class="field-label" for="email">Email address</label>
                            <div class="input-wrap">
                                <span class="input-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </span>
                                <input id="email" v-model="form.email" type="email" class="field-input"
                                    placeholder="Enter your email" autocomplete="email" @blur="validateField('email')"
                                    @input="clearError('email')" />
                                <span v-if="touched.email && !errors.email" class="check-icon">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </span>
                            </div>
                            <p v-if="errors.email" class="field-error">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                                {{ errors.email }}
                            </p>
                        </div>

                        <!-- Submit -->
                        <button type="submit" class="submit-btn" :disabled="isLoading">
                            <span v-if="isLoading" class="spinner" />
                            <span v-else>Send reset link</span>
                        </button>

                        <!-- Global error -->
                        <div v-if="globalError" class="global-error">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                            {{ globalError }}
                        </div>
                    </form>
                </template>

                <!-- Success state -->
                <template v-else>
                    <div class="success-state">
                        <div class="success-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        </div>
                        <p class="success-title">Check your inbox</p>
                        <p class="success-sub">
                            We sent a password reset link to<br />
                            <strong>{{ form.email }}</strong>
                        </p>
                        <button type="button" class="resend-btn" :disabled="resendCooldown > 0" @click="handleResend">
                            <span v-if="resendCooldown > 0">Resend in {{ resendCooldown }}s</span>
                            <span v-else>Resend email</span>
                        </button>
                    </div>
                </template>

                <!-- Back to login -->
                <div class="back-row">
                    <NuxtLink to="/login" class="back-link">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to sign in
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// --- Types ---
interface ForgotForm {
    email: string
}

interface FormErrors {
    email: string
}

// --- State ---
const form = ref<ForgotForm>({ email: '' })
const errors = ref<FormErrors>({ email: '' })
const touched = ref({ email: false })
const isLoading = ref(false)
const globalError = ref('')
const submitted = ref(false)
const resendCooldown = ref(0)

// --- Validation ---
function validateField(field: 'email') {
    touched.value[field] = true
    errors.value[field] = ''

    if (!form.value.email.trim()) {
        errors.value.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
        errors.value.email = 'Please enter a valid email address.'
    }
}

function clearError(field: 'email') {
    if (errors.value[field]) errors.value[field] = ''
}

function validateAll(): boolean {
    validateField('email')
    return !errors.value.email
}

// --- Cooldown timer ---
function startCooldown() {
    resendCooldown.value = 60
    const interval = setInterval(() => {
        resendCooldown.value--
        if (resendCooldown.value <= 0) clearInterval(interval)
    }, 1000)
}

// --- Submit ---
async function handleSubmit() {
    globalError.value = ''
    if (!validateAll()) return

    isLoading.value = true
    try {
        const payload = { email: form.value.email }
        console.log('[ForgotPassword] Request submitted:', payload)
        const config = useRuntimeConfig();
        await $fetch(
            `${config.public.apiBase}/api/users/forgot-password/`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: payload,
            }
        )

        submitted.value = true
        startCooldown()
    } catch (err: any) {
        console.error('[ForgotPassword] API Error:', err)

        const errorData = err?.data
        if (errorData?.non_field_errors && Array.isArray(errorData.non_field_errors)) {
            globalError.value = errorData.non_field_errors[0]
        } else {
            globalError.value =
                errorData?.detail ??
                errorData?.message ??
                err?.message ??
                'Something went wrong. Please try again.'
        }
    } finally {
        isLoading.value = false
    }
}

// --- Resend ---
async function handleResend() {
    if (resendCooldown.value > 0) return
    globalError.value = ''
    try {
        const payload = { email: form.value.email }
        console.log('[ForgotPassword] Resend requested:', payload)

        await $fetch(
            'https://gccwebsite-admin-backend-738131651355.asia-south1.run.app/api/users/forgot-password/',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: payload,
            }
        )

        startCooldown()
    } catch (err: any) {
        console.error('[ForgotPassword] Resend API Error:', err)

        const errorData = err?.data
        if (errorData?.non_field_errors && Array.isArray(errorData.non_field_errors)) {
            globalError.value = errorData.non_field_errors[0]
        } else {
            globalError.value =
                errorData?.detail ??
                errorData?.message ??
                err?.message ??
                'Something went wrong. Please try again.'
        }
    }
}

// --- Meta ---
useHead({
    title: 'Forgot Password — GCC School',
    meta: [{ name: 'description', content: 'Reset your GCC School account password.' }],
})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Sora:wght@600;700&display=swap');

// -- Tokens --
$indigo: #6366f1;
$violet: #8b5cf6;
$surface: #ffffff;
$bg: #f3f4f8;
$text: #0f0f18;
$muted: #6b7280;
$border: #e5e7eb;
$error: #ef4444;
$success: #22c55e;
$radius: 14px;

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.login-root {
    font-family: 'DM Sans', sans-serif;
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $bg;
    position: relative;
    overflow: hidden;
}

// -- Mesh background --
.bg-mesh {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
}

.orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.35;
    animation: drift 12s ease-in-out infinite alternate;

    &-1 {
        width: 520px;
        height: 520px;
        background: radial-gradient(circle, #a5b4fc, #6366f1);
        top: -120px;
        left: -140px;
        animation-duration: 14s;
    }

    &-2 {
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, #ddd6fe, #8b5cf6);
        bottom: -100px;
        right: -80px;
        animation-duration: 11s;
        animation-delay: -4s;
    }

    &-3 {
        width: 280px;
        height: 280px;
        background: radial-gradient(circle, #c7d2fe, #818cf8);
        top: 50%;
        right: 20%;
        animation-duration: 16s;
        animation-delay: -8s;
    }
}

@keyframes drift {
    from {
        transform: translate(0, 0) scale(1);
    }

    to {
        transform: translate(30px, 30px) scale(1.08);
    }
}

// -- Wrapper --
.login-wrapper {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 440px;
    padding: 24px 16px;
}

// -- Card logo --
.card-logo {
    display: flex;
    align-items: center;
    gap: 11px;
    margin-bottom: 20px;
    justify-content: center;
}

.logo-mark {
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-mark img {
    max-width: 200px;
}

// -- Card --
.card {
    width: 100%;
    background: $surface;
    border-radius: 20px;
    padding: 36px 36px 32px;
    box-shadow:
        0 1px 3px rgba(0, 0, 0, .06),
        0 8px 24px rgba(99, 102, 241, .10),
        0 24px 64px rgba(0, 0, 0, .08);
    border: 1px solid rgba(255, 255, 255, .8);
    animation: slideUp .45s cubic-bezier(.22, .8, .38, 1) both;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(24px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.card-header {
    margin-bottom: 24px;
    background: none;
    border: none;
}

.card-title {
    font-family: 'Sora', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: $text;
    letter-spacing: -0.3px;
    margin-bottom: 6px;
    text-align: center;
}

.card-sub {
    font-size: 14px;
    color: $muted;
    line-height: 1.5;
}

// -- Form --
.login-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.field-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.field-label {
    font-size: 13px;
    font-weight: 500;
    color: #374151;
}

.input-wrap {
    position: relative;
    display: flex;
    align-items: center;
}

.input-icon {
    position: absolute;
    left: 13px;
    color: #9ca3af;
    display: flex;
    pointer-events: none;
}

.field-input {
    width: 100%;
    height: 46px;
    padding: 0 42px 0 40px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: $text;
    background: #f9fafb;
    border: 1.5px solid $border;
    border-radius: 10px;
    outline: none;
    transition: border-color .2s, box-shadow .2s, background .2s;

    &::placeholder {
        color: #c4c9d4;
    }

    &:focus {
        border-color: $indigo;
        background: $surface;
        box-shadow: 0 0 0 3px rgba(99, 102, 241, .12);
    }

    .field-group.error & {
        border-color: $error;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, .10);
    }

    .field-group.success & {
        border-color: $success;
    }
}

.check-icon {
    position: absolute;
    right: 13px;
    color: $success;
    display: flex;
}

.field-error {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    color: $error;
    font-weight: 500;
}

// -- Submit button --
.submit-btn {
    height: 48px;
    width: 100%;
    background: #A13E99;
    color: white;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: opacity .2s, transform .15s, box-shadow .2s;
    box-shadow: 0 4px 15px rgba(99, 102, 241, .4);
    letter-spacing: 0.2px;

    &:hover:not(:disabled) {
        opacity: .92;
        transform: translateY(-1px);
        box-shadow: 0 6px 20px rgba(99, 102, 241, .45);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: .6;
        cursor: not-allowed;
    }
}

.spinner {
    width: 18px;
    height: 18px;
    border: 2.5px solid rgba(255, 255, 255, .35);
    border-top-color: white;
    border-radius: 50%;
    animation: spin .7s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

// -- Global error --
.global-error {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 10px 14px;
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 8px;
    font-size: 13px;
    color: #b91c1c;
    font-weight: 500;
}

// -- Success state --
.success-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 8px 0 4px;
    gap: 10px;
}

.success-icon {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(99, 102, 241, .12), rgba(139, 92, 246, .12));
    border: 1.5px solid rgba(99, 102, 241, .2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: $indigo;
    margin-bottom: 4px;
}

.success-title {
    font-family: 'Sora', sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: $text;
    letter-spacing: -0.3px;
}

.success-sub {
    font-size: 13.5px;
    color: $muted;
    line-height: 1.6;

    strong {
        color: $text;
        font-weight: 600;
    }
}

.resend-btn {
    margin-top: 6px;
    height: 40px;
    padding: 0 20px;
    background: none;
    border: 1.5px solid $border;
    border-radius: 9px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    font-weight: 500;
    color: $indigo;
    cursor: pointer;
    transition: background .15s, border-color .15s, opacity .15s;

    &:hover:not(:disabled) {
        background: rgba(99, 102, 241, .05);
        border-color: rgba(99, 102, 241, .35);
    }

    &:disabled {
        color: $muted;
        cursor: not-allowed;
        opacity: .7;
    }
}

// -- Back link --
.back-row {
    display: flex;
    justify-content: center;
    margin-top: 24px;
}

.back-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 500;
    color: $muted;
    text-decoration: none;
    transition: color .15s;

    &:hover {
        color: $indigo;
    }
}

// -- Responsive --
@media (max-width: 480px) {
    .card {
        padding: 28px 22px 26px;
    }
}
</style>