/**
 * auth.client.ts plugin
 * Specifically for browser-side protection. Handles hard reloads and direct access.
 */
export default defineNuxtPlugin(() => {
    const router = useRouter()

    router.beforeEach((to) => {
        const protectedRoutes = ['/profile']

        if (protectedRoutes.includes(to.path)) {
            const token = localStorage.getItem('gcc_access_token')
            if (!token) {
                return { path: '/login' }
            }
        }
        return true
    })
})
