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
                        <img src="/img/GCC-School-Logo-White.png" alt="" />
                    </div>
                </div>

                <!-- Default: reset form -->
                <template v-if="!submitted">
                    <div class="card-header">
                        <p class="card-title">Enter new password</p>

                    </div>

                    <form class="login-form" novalidate @submit.prevent="handleSubmit">

                        <!-- New Password -->
                        <div class="field-group"
                            :class="{ error: errors.password, success: touched.password && !errors.password }">
                            <label class="field-label" for="password">New password</label>
                            <div class="input-wrap">
                                <span class="input-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </span>
                                <input id="password" v-model="form.password" :type="showPassword ? 'text' : 'password'"
                                    class="field-input" placeholder="Enter new password" autocomplete="new-password"
                                    @blur="validateField('password')" @input="clearError('password')" />
                                <button type="button" class="eye-btn"
                                    :aria-label="showPassword ? 'Hide password' : 'Show password'"
                                    @click="showPassword = !showPassword">
                                    <svg v-if="!showPassword" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path
                                            d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                        <line x1="1" y1="1" x2="23" y2="23" />
                                    </svg>
                                </button>
                            </div>
                            <p v-if="errors.password" class="field-error">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                                {{ errors.password }}
                            </p>
                        </div>

                        <!-- Confirm Password -->
                        <div class="field-group"
                            :class="{ error: errors.confirmPassword, success: touched.confirmPassword && !errors.confirmPassword }">
                            <label class="field-label" for="confirmPassword">Confirm new password</label>
                            <div class="input-wrap">
                                <span class="input-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </span>
                                <input id="confirmPassword" v-model="form.confirmPassword"
                                    :type="showConfirm ? 'text' : 'password'" class="field-input"
                                    placeholder="Re-enter new password" autocomplete="new-password"
                                    @blur="validateField('confirmPassword')" @input="clearError('confirmPassword')" />
                                <button type="button" class="eye-btn"
                                    :aria-label="showConfirm ? 'Hide password' : 'Show password'"
                                    @click="showConfirm = !showConfirm">
                                    <svg v-if="!showConfirm" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path
                                            d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                        <line x1="1" y1="1" x2="23" y2="23" />
                                    </svg>
                                </button>
                            </div>
                            <p v-if="errors.confirmPassword" class="field-error">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                                {{ errors.confirmPassword }}
                            </p>
                        </div>

                        <!-- Submit -->
                        <button type="submit" class="submit-btn" :disabled="isLoading">
                            <span v-if="isLoading" class="spinner" />
                            <span v-else>Reset password</span>
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
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                        </div>
                        <p class="success-title">Password reset!</p>
                        <p class="success-sub">Your password has been updated successfully.<br>You can now sign in
                            with your new password.</p>
                        <NuxtLink to="/login" class="submit-btn" style="text-decoration: none; margin-top: 6px;">
                            Go to sign in
                        </NuxtLink>
                    </div>
                </template>

                <!-- Back to login -->
                <div class="back-row" v-if="!submitted">
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
interface ResetForm {
    password: string
    confirmPassword: string
}

interface FormErrors {
    password: string
    confirmPassword: string
}

// --- Route (e.g. Reset Password URL with uid and token) ---
const route = useRoute()
const uid = route.query.uid as string | undefined
const token = route.query.token as string | undefined

// --- State ---
const form = ref<ResetForm>({ password: '', confirmPassword: '' })
const errors = ref<FormErrors>({ password: '', confirmPassword: '' })
const touched = ref({ password: false, confirmPassword: false })
const showPassword = ref(false)
const showConfirm = ref(false)
const isLoading = ref(false)
const globalError = ref('')
const submitted = ref(false)

// --- Validation ---
function validateField(field: 'password' | 'confirmPassword') {
    touched.value[field] = true
    errors.value[field] = ''

    if (field === 'password') {
        if (!form.value.password) {
            errors.value.password = 'Password is required.'
        } else if (form.value.password.length < 8) {
            errors.value.password = 'Password must be at least 8 characters.'
        }
        // Re-validate confirm if already touched
        if (touched.value.confirmPassword) {
            validateField('confirmPassword')
        }
    }

    if (field === 'confirmPassword') {
        if (!form.value.confirmPassword) {
            errors.value.confirmPassword = 'Please confirm your password.'
        } else if (form.value.confirmPassword !== form.value.password) {
            errors.value.confirmPassword = 'Passwords do not match.'
        }
    }
}

function clearError(field: 'password' | 'confirmPassword') {
    if (errors.value[field]) errors.value[field] = ''
}

function validateAll(): boolean {
    validateField('password')
    validateField('confirmPassword')
    return !errors.value.password && !errors.value.confirmPassword
}

// --- Submit ---
async function handleSubmit() {
    globalError.value = ''
    if (!validateAll()) return

    if (!uid || !token) {
        globalError.value = 'Invalid or expired reset link. Please request a new one.'
        return
    }

    isLoading.value = true
    try {
        const payload = {
            uid: uid,
            token: token,
            password: form.value.password,
            confirm_password: form.value.confirmPassword,
        }
        console.log('[ResetPassword] Attempting reset with payload:', payload)
        const config = useRuntimeConfig()

        await $fetch(
            `${config.public.apiBase}/api/users/reset-password/`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: payload,
            }
        )

        submitted.value = true
    } catch (err: any) {
        console.error('[ResetPassword] API Error:', err)

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

// --- Meta ---
useHead({
    title: 'Reset Password — GCC School',
    meta: [{ name: 'description', content: 'Set a new password for your GCC School account.' }],
})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Sora:wght@600;700&display=swap');

// -- css variables --
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
    min-height: 90vh;
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
    justify-content: center;
    gap: 11px;
    margin-bottom: 20px;
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
        0 1px 3px rgba(0, 0, 0, 0.06),
        0 8px 24px rgba(99, 102, 241, 0.10),
        0 24px 64px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.8);
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

.eye-btn {
    position: absolute;
    right: 12px;
    background: none;
    border: none;
    cursor: pointer;
    color: #9ca3af;
    display: flex;
    padding: 4px;
    border-radius: 6px;
    transition: color .15s;

    &:hover {
        color: $indigo;
    }
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