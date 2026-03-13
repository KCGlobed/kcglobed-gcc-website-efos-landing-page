/**
 * useAuth — Auth composable for GCC Website
 * Matches API response structure:
 * { data: { token: { access, refresh }, user_role, user_id } }
 */

// localStorage keys
const ACCESS_TOKEN_KEY = 'gcc_access_token'
const REFRESH_TOKEN_KEY = 'gcc_refresh_token'
const USER_ROLE_KEY = 'gcc_user_role'
const USER_ID_KEY = 'gcc_user_id'

// Shared reactive state across the app
const isAuthenticated = ref(false)
const userRole = ref<string | null>(null)
const userId = ref<number | null>(null)

export function useAuth() {

    /**
     * Hydrate reactive state from localStorage on page load.
     */
    function init() {
        if (import.meta.client) {
            const token = localStorage.getItem(ACCESS_TOKEN_KEY)
            isAuthenticated.value = !!token
            userRole.value = localStorage.getItem(USER_ROLE_KEY)
            const id = localStorage.getItem(USER_ID_KEY)
            userId.value = id ? Number(id) : null
        }
    }

    /**
     * Save all auth data to localStorage and update reactive state.
     */
    function login(data: {
        access: string
        refresh: string
        user_role?: string | null
        user_id?: number | null
    }) {
        if (!import.meta.client) return

        localStorage.setItem(ACCESS_TOKEN_KEY, data.access)
        localStorage.setItem(REFRESH_TOKEN_KEY, data.refresh)

        if (data.user_role) {
            localStorage.setItem(USER_ROLE_KEY, data.user_role)
            userRole.value = data.user_role
        }
        if (data.user_id != null) {
            localStorage.setItem(USER_ID_KEY, String(data.user_id))
            userId.value = data.user_id
        }

        isAuthenticated.value = true

        console.log('[useAuth] Stored in localStorage:', {
            access: data.access,
            refresh: data.refresh,
            user_role: data.user_role,
            user_id: data.user_id,
        })
    }

    /**
     * Clear all auth data and reset state.
     */
    function logout() {
        if (import.meta.client) {
            localStorage.removeItem(ACCESS_TOKEN_KEY)
            localStorage.removeItem(REFRESH_TOKEN_KEY)
            localStorage.removeItem(USER_ROLE_KEY)
            localStorage.removeItem(USER_ID_KEY)
        }
        isAuthenticated.value = false
        userRole.value = null
        userId.value = null
    }

    function getAccessToken(): string | null {
        return import.meta.client ? localStorage.getItem(ACCESS_TOKEN_KEY) : null
    }

    return {
        isAuthenticated: readonly(isAuthenticated),
        userRole: readonly(userRole),
        userId: readonly(userId),
        init,
        login,
        logout,
        getAccessToken
    }
}
