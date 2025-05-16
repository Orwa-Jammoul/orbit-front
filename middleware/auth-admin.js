export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const auth = useAuth();
    const user = useUserInfo();
    if (!auth.value.isAuth || !user.value.isAdmin) {
      return navigateTo("/auth/login", { redirectCode: 301 });
    }
  }
});