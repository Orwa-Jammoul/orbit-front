export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const auth = useAuth();
    if (auth.value.isAuth) {
      return useRouter().back()
    }
  }
});