export const useHttpForSiteApi = () => {
  const { public: { apiBase } } = useRuntimeConfig();
  const token = useMainToken();
  const nuxtApp = useNuxtApp();

  // Common error handler
  const handleError = (error) => {
    console.error('API Error:', error);
    
    // Handle 401 unauthorized errors
    if (error?.statusCode === 401) {
      resetUserAuth();
      return true; // Indicates auth error was handled
    }
    
    // You could add more specific error handling here
    return false;
  };

  // Common request configuration
  const getRequestConfig = (method, endpoint, data, isServer, isLazy) => ({
    key: endpoint,
    baseURL: apiBase,
    method,
    body: method !== 'delete' ? data : undefined,
    server: isServer,
    lazy: isLazy,
    headers: {
      'Accept-Language': 'en-US',
      'Authorization': `Bearer ${token.value}`
    },
    onRequest({ options }) {
      // Ensure token is fresh for each request
      options.headers.Authorization = `Bearer ${token.value}`;
    },
    onRequestError({ error }) {
      throw error;
    },
    onResponseError({ response, error }) {
      if (response.status === 401) {
        resetUserAuth();
      }
      throw error;
    }
  });

  // Post Data
  const post = async (endpoint, data, isServer = true, isLazy = false) => {
    try {
      const response = await useFetch(
        () => endpoint,
        getRequestConfig('post', endpoint, data, isServer, isLazy)
      );

      if (response.error.value) {
        handleError(response.error.value);
      }

      return response;
    } catch (error) {
      handleError(error);
      return {
        data: ref(null),
        error: ref(error),
        pending: ref(false)
      };
    }
  };

  // Delete Data
  const del = async (endpoint, isServer = true, isLazy = false) => {
    try {
      const response = await useFetch(
        () => endpoint,
        getRequestConfig('delete', endpoint, null, isServer, isLazy)
      );

      if (response.error.value) {
        handleError(response.error.value);
      }

      return response;
    } catch (error) {
      handleError(error);
      return {
        data: ref(null),
        error: ref(error),
        pending: ref(false)
      };
    }
  };

  // Put Data
  const put = async (endpoint, data, isServer = true, isLazy = false) => {
    try {
      const response = await useFetch(
        () => endpoint,
        getRequestConfig('put', endpoint, data, isServer, isLazy)
      );

      if (response.error.value) {
        handleError(response.error.value);
      }

      return response;
    } catch (error) {
      handleError(error);
      return {
        data: ref(null),
        error: ref(error),
        pending: ref(false)
      };
    }
  };

  // Helper function to reset auth
  const resetUserAuth = () => {
    // Clear user token and redirect to login
    token.value = null;
    navigateTo('/login');
  };

  return {
    post,
    del,
    put
  };
};