export default defineNuxtRouteMiddleware((to, from) => {
    if (to.params.id !== undefined && !/^\d+$/.test(to.params.id)) {
        return navigateTo('/404', { redirectCode: 301 })
    }
    if (to.params.productId !== undefined && !/^\d+$/.test(to.params.productId)) {
        return navigateTo('/404', { redirectCode: 301 })
    }
});