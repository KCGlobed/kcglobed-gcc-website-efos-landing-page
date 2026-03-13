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
                    <!-- <span class="logo-name">YourBrand</span> -->
                </div>

                <div class="">
                    <h5 style="text-align: center; margin-bottom:15px;" class="">Welcome to GCC School</h5>
                </div>

                <form class="login-form" novalidate @submit.prevent="handleSubmit">
                    <!-- Email -->
                    <div class="field-group" :class="{ error: errors.email, success: touched.email && !errors.email }">
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

                    <!-- Password -->
                    <div class="field-group"
                        :class="{ error: errors.password, success: touched.password && !errors.password }">
                        <div class="label-row">
                            <label class="field-label" for="password">Password</label>
                            <NuxtLink to="/forgot-password" class="forgot-link">Forgot password?</NuxtLink>
                        </div>
                        <div class="input-wrap">
                            <span class="input-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                            </span>
                            <input id="password" v-model="form.password" :type="showPassword ? 'text' : 'password'"
                                class="field-input" placeholder="Enter your password" autocomplete="current-password"
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
                                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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

                    <!-- Submit -->
                    <button type="submit" class="submit-btn" :disabled="isLoading">
                        <span v-if="isLoading" class="spinner" />
                        <span v-else>Sign in</span>
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

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { config } from 'process'
import { ref } from 'vue'

const { login } = useAuth()

// --- Types ---
interface LoginForm {
    email: string
    password: string
}

interface FormErrors {
    email: string
    password: string
}

// --- State ---
const form = ref<LoginForm>({ email: '', password: '' })
const errors = ref<FormErrors>({ email: '', password: '' })
const touched = ref({ email: false, password: false })
const showPassword = ref(false)
const isLoading = ref(false)
const globalError = ref('')

// --- Validation rules ---
function validateField(field: 'email' | 'password') {
    touched.value[field] = true
    errors.value[field] = ''

    if (field === 'email') {
        if (!form.value.email.trim()) {
            errors.value.email = 'Email address is required.'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
            errors.value.email = 'Please enter a valid email address.'
        }
    }

    if (field === 'password') {
        if (!form.value.password) {
            errors.value.password = 'Password is required.'
        } else if (form.value.password.length < 8) {
            errors.value.password = 'Password must be at least 8 characters.'
        }
    }
}

function clearError(field: 'email' | 'password') {
    if (errors.value[field]) errors.value[field] = ''
}

function validateAll(): boolean {
    validateField('email')
    validateField('password')
    return !errors.value.email && !errors.value.password
}

// --- Submit ---
async function handleSubmit() {
    globalError.value = ''
    if (!validateAll()) return

    isLoading.value = true
    try {
        const payload = {
            email: form.value.email,
            password: form.value.password,
            role: 'student',
        }

        console.log('[Login] Sending request with payload:', payload)
        const config = useRuntimeConfig()
        const response: any = await $fetch(
            `${config.public.apiBase}/api/users/website_login/`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: payload,
            }
        )

        // Log the full API response
        console.log('[Login] Full API Response:', response)
        console.log('[Login] Response data:', response.data)

        // Extract from: response.data.token.access / refresh, response.data.user_role, response.data.user_id
        const { access, refresh } = response.data.token
        const user_role = response.data.user_role ?? null
        const user_id = response.data.user_id ?? null

        console.log('[Login] Extracted tokens:', { access, refresh, user_role, user_id })

        // Save to localStorage + mark authenticated
        login({ access, refresh, user_role, user_id })

        // Hard redirect to profile (full page reload for clean mount)
        console.log('[Login] Auth successful. Navigating to /profile...')
        window.location.href = '/profile'

    } catch (err: any) {
        console.error('[Login] API Error:', err)
        console.error('[Login] Error data:', err?.data)

        const errorData = err?.data
        if (errorData?.non_field_errors && Array.isArray(errorData.non_field_errors)) {
            globalError.value = errorData.non_field_errors[0]
        } else {
            globalError.value =
                errorData?.detail ??
                errorData?.message ??
                err?.message ??
                'Invalid credentials. Please try again.'
        }
    } finally {
        isLoading.value = false
    }
}

// --- Meta ---
useHead({
    title: 'Sign In',
    meta: [{ name: 'description', content: 'Sign in to your account.' }],
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
    justify-content: center;
    margin-bottom: 20px;
}

.logo-mark {
    display: flex;
    align-items: center;
    justify-content: center;
    // filter: drop-shadow(0 4px 14px rgba(99, 102, 241, .38));
}

.logo-mark img {
    max-width: 200px;
}

.logo-name {
    font-family: 'Sora', sans-serif;
    font-size: 22px;
    font-weight: 700;
    background: linear-gradient(135deg, $indigo, $violet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.5px;
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
}

.card-sub {
    font-size: 14px;

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

.label-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

.forgot-link {
    font-size: 12.5px;
    font-weight: 500;
    color: $indigo;
    text-decoration: none;
    transition: opacity .15s;

    &:hover {
        opacity: .75;
    }
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

// -- Responsive --
@media (max-width: 480px) {
    .card {
        padding: 28px 22px 26px;
    }
}
</style>