// composables/useReAuthorization.ts
export const useReAuthorization = () => {
  const reAuthorization = async () => {
    try {
      const response = await $fetch('/api/main-token');
      if (response?.succeeded) {
        const token = response.data.token;
        console.log('Token refreshed:');
        return token;
      }
      
      throw new Error('Re-authorization failed');
    } catch (error) {
      console.error('Re-authorization error:', error);
      return false;
    }
    // try {
    //   const { data: response, error } = await useFetch('/api/main-token');
    //   console.log(response.value);
    //   if (error.value) {
    //     throw error.value;
    //   }
      
    //   if (response.value?.succeeded) {
    //     const token = useToken();
    //     token.value = response.value.data.token;
    //     console.log('Token refreshed:');
    //     return token.value;
    //   }
      
    //   throw new Error('Re-authorization failed');
    // } catch (error) {
    //   console.error('Re-authorization error:', error);
    //   return false;
    // }
  };

  return {
    reAuthorization
  };
};