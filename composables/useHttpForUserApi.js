export const useHttpForUserApi = () => {
  const { public: { apiBase } } = useRuntimeConfig();
  const token = useToken(); // Get token once at the start
  const { $toast } = useNuxtApp(); // Assuming you're using a toast notification system

  // Common error handler
  const handleError = (error) => {
    console.error('API Error:', error);
    
    // Handle 401 unauthorized errors
    if (error?.statusCode === 401) {
      resetUserAuth();
      $toast.error('Session expired. Please login again.');
      return true;
    }
    
    // Show user-friendly error message
    $toast.error(error.message || 'An error occurred. Please try again.');
    return false;
  };

  // Reset auth and redirect
  const resetUserAuth = () => {
    token.value = null;
    navigateTo('/login');
  };

  // Common request configuration
  const createRequestConfig = (method, endpoint, data, isServer = true, isLazy = false) => ({
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
      // Ensure fresh token for each request
      options.headers.Authorization = `Bearer ${token.value}`;
    },
    onRequestError({ error }) {
      handleError(error);
      throw error;
    },
    onResponseError({ response, error }) {
      if (response.status === 401) {
        resetUserAuth();
      }
      handleError(error);
      throw error;
    }
  });

  // Post Data
  const post = async (endpoint, data, isServer = true, isLazy = false) => {
    try {
      const response = await useFetch(
        () => endpoint,
        createRequestConfig('post', endpoint, data, isServer, isLazy)
      );
      
      if (response.error.value) {
        handleError(response.error.value);
      }
      
      return response;
    } catch (error) {
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
        createRequestConfig('delete', endpoint, null, isServer, isLazy)
      );
      
      if (response.error.value) {
        handleError(response.error.value);
      }
      
      return response;
    } catch (error) {
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
        createRequestConfig('put', endpoint, data, isServer, isLazy)
      );
      
      if (response.error.value) {
        handleError(response.error.value);
      }
      
      return response;
    } catch (error) {
      return {
        data: ref(null),
        error: ref(error),
        pending: ref(false)
      };
    }
  };

  return {
    post,
    del,
    put
  };
};