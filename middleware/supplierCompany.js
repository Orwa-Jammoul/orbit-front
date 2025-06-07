const { $awn } = useNuxtApp();

export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
      const user = useUserInfo().value;
      const auth = useAuth();
      if(auth.value.isAuthenticated) {
        if (useUserInfo().value.client.type != "Person" && useUserInfo().value.client.status != 'Accepted') {
          $awn.alert("Your Company has been successfully registered, please wait for the administration's approval", { durations: { global: 5000 } });
          return navigateTo("/", { redirectCode: 301 });
        }
      }
    }
  });