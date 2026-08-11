/**
 * utils.js — Shared utilities for GCC website landing page
 */

// Mobile validation pattern (matches validators.ts in Nuxt)
export function isValidMobile(phone) {
    if (!phone) return false;
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.trim());
}

// LocalStorage Keys
const ACCESS_TOKEN_KEY = 'gcc_access_token';
const REFRESH_TOKEN_KEY = 'gcc_refresh_token';
const USER_ROLE_KEY = 'gcc_user_role';
const USER_ID_KEY = 'gcc_user_id';

// Shared auth state management
const authState = {
    isAuthenticated: false,
    userRole: null,
    userId: null
};

export const auth = {
    init() {
        const token = localStorage.getItem(ACCESS_TOKEN_KEY);
        authState.isAuthenticated = !!token;
        authState.userRole = localStorage.getItem(USER_ROLE_KEY);
        const id = localStorage.getItem(USER_ID_KEY);
        authState.userId = id ? Number(id) : null;
        
        // Dispatch event so layout elements can update
        document.dispatchEvent(new CustomEvent('auth-changed', { detail: authState }));
        return authState;
    },

    login({ access, refresh, user_role, user_id }) {
        localStorage.setItem(ACCESS_TOKEN_KEY, access);
        localStorage.setItem(REFRESH_TOKEN_KEY, refresh);

        if (user_role) {
            localStorage.setItem(USER_ROLE_KEY, user_role);
            authState.userRole = user_role;
        }
        if (user_id != null) {
            localStorage.setItem(USER_ID_KEY, String(user_id));
            authState.userId = user_id;
        }

        authState.isAuthenticated = true;
        console.log('[Auth] Logged in successfully:', { user_role, user_id });
        
        document.dispatchEvent(new CustomEvent('auth-changed', { detail: authState }));
    },

    logout() {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        localStorage.removeItem(USER_ROLE_KEY);
        localStorage.removeItem(USER_ID_KEY);

        authState.isAuthenticated = false;
        authState.userRole = null;
        authState.userId = null;
        console.log('[Auth] Logged out');

        document.dispatchEvent(new CustomEvent('auth-changed', { detail: authState }));
    },

    getState() {
        return authState;
    },

    getAccessToken() {
        return localStorage.getItem(ACCESS_TOKEN_KEY);
    }
};
