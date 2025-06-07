export default defineNuxtRouteMiddleware(() => {
    if (process.client) {
      const auth = useAuth();
      const cart = useCart().value;
      // Check if the user is logged In
      if (!auth.value.isAuthenticated) {
        return navigateTo('/newsite/auth/login', { redirectCode: 301 })
      }
      // Check if there is an product customized or not
      if (!cart.items.length && cart.totalQty < 0 || cart.totalQty == 0) {
        return useRouter().back()
      }
    }
  
  })