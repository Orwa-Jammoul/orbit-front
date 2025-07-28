export const useGetSiteApi = () => {
  const { public: { apiBase, cachedTime } } = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  const token = useMainToken(); // Get token once

  // Common error handler
  const handleError = (error, context = '') => {
    console.error(`API Error${context ? ` in ${context}` : ''}:`, error);
    
    // Handle specific error cases
    if (error?.statusCode === 401 || error?.statusCode === 403) {
      // You might want to add logout logic here
      error.message = 'Session expired. Please login again.';
    } else if (error?.statusCode === 404) {
      error.message = 'Requested resource not found';
    }
    
    return {
      value: error,
      message: error.message || 'An error occurred',
      statusCode: error.statusCode || 500
    };
  };

  // Common fetch configuration
  const getFetchConfig = (key, isServer, isLazy, isCached) => ({
    key,
    baseURL: apiBase ?? 'https://adminpanel.orbit-eng.net',
    server: isServer,
    lazy: isLazy,
    headers: {
      'Accept-Language': 'en-US',
      'Authorization': `Bearer ${token.value}`
    },
    transform(input) {
      if (!input) throw new Error('Empty server response');
      return {
        ...input,
        fetchedAt: new Date()
      };
    },
    getCachedData(key) {
      return isCached ? handleCachingDataTime(key) : null;
    },
    onRequestError({ error }) {
      throw error;
    },
    onResponseError({ response, error }) {
      if (response.status === 401) {
        // Add logout logic if needed
      }
      throw error;
    }
  });

  // Handle caching with expiration
  const handleCachingDataTime = (key) => {
    try {
      if (!key) return null;
      
      const data = nuxtApp.payload.data?.[key] || nuxtApp.static.data?.[key];
      if (!data || !data.fetchedAt) return null;

      const expirationDate = new Date(data.fetchedAt);
      expirationDate.setTime(expirationDate.getTime() + cachedTime);
      
      return expirationDate.getTime() > Date.now() ? data : null;
    } catch (error) {
      console.error('Cache error:', error);
      return null;
    }
  };

  // Get All Data
  const GetAll = async (endpoint, isServer = true, isLazy = false, isCached = true) => {
    try {
      const response = await useFetch(
        () => endpoint,
        getFetchConfig(endpoint, isServer, isLazy, isCached)
      );

      if (response.error.value) {
        response.error.value = handleError(response.error.value, 'GetAll');
      }

      return response;
    } catch (error) {
      return {
        data: ref(null),
        error: ref(handleError(error, 'GetAll')),
        pending: ref(false)
      };
    }
  };

  // Get Data By ID
  const GetById = async (endpointWithoutId, id, isServer = true, isLazy = false, isCached = true) => {
    try {
      if (!endpointWithoutId || !id) {
        throw new Error('Missing endpoint or ID parameter');
      }

      const endpoint = `${endpointWithoutId}${id}`;
      const response = await useFetch(
        () => endpoint,
        getFetchConfig(endpoint, isServer, isLazy, isCached)
      );

      if (response.error.value) {
        response.error.value = handleError(response.error.value, 'GetById');
      } else if (!response.data.value) {
        throw new Error('Empty data response');
      }

      return response;
    } catch (error) {
      return {
        data: ref(null),
        error: ref(handleError(error, 'GetById')),
        pending: ref(false),
        refresh: () => Promise.resolve({
          data: ref(null),
          error: ref(handleError(error, 'GetById refresh')),
          pending: ref(false)
        })
      };
    }
  };

  return {
    GetAll,
    GetById
  };
};