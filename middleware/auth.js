export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const auth = useAuth();
    const { $awn } = useNuxtApp();
    if (!auth.value.isAuth) {
      return navigateTo("/auth/login", { redirectCode: 301 });
    }
  }
});