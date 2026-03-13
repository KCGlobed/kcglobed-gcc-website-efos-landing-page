/**
 * auth middleware — protects routes that require a valid JWT token.
 * Only runs on the client side.
 */
export default defineNuxtRouteMiddleware(() => {
    if (import.meta.server) return

    const token = localStorage.getItem('gcc_access_token')

    if (!token) {
        return navigateTo('/login')
    }
})
