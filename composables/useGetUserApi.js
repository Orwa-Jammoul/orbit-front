export const useGetUserApi = () => {
  const { public: { apiBase, api, cachedTime } } = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  const { $awn } = useNuxtApp();
  const token = useToken();

  // Common error handler
  const handleApiError = (error) => {
    console.error('API Error:', error);

    if (error?.statusCode === 401 || error?.statusCode === 403) {
      $awn.alert(error.message || 'Session expired. Please log in again.', {
        durations: { global: 5000 },
      });
      useLogout();
      navigateTo('/');
      return true; // Indicates auth error was handled
    }

    // Show generic error to user
    $awn.alert(error.message || 'An error occurred. Please try again.', {
      durations: { global: 5000 },
    });

    return false;
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
      if (!input) {
        throw new Error('Empty response from server');
      }
      return {
        ...input,
        fetchedAt: new Date()
      };
    },
    getCachedData(key) {
      try {
        return isCached ? handleCachingDataTime(key) : null;
      } catch (error) {
        console.error('Cache error:', error);
        return null;
      }
    },
    onRequestError({error}) {
      throw error;
    },
    onResponseError({error}) {
      throw error;
    }
  });

  // Get All Data (Get All)
  const GetAll = async (endpoint, isServer = true, isLazy = false, isCached = true) => {
    try {
      const { data, error } = await useFetch(() => endpoint,
        getFetchConfig(endpoint, isServer, isLazy, isCached)
      );

      if (error.value) {
        const wasAuthError = handleApiError(error.value);
        if (wasAuthError) return { data, error };
      }

      return { data, error };
    } catch (error) {
      handleApiError(error);
      return {
        data: ref(null),
        error: ref(error)
      };
    }
  };

  // Get Data By Id (Get Details)
  const GetById = async (endpointWithoutId, id, isServer = true, isLazy = false, isCached = true) => {
    try {
      if (!id) throw new Error('ID parameter is required');

      const endpoint = `${endpointWithoutId}${id}`;
      const { data, error } = await useFetch(() => endpoint,
        getFetchConfig(endpoint, isServer, isLazy, isCached)
      );

      if (error.value) {
        const wasAuthError = handleApiError(error.value);
        if (wasAuthError) return { data, error };
      }

      return { data, error };
    } catch (error) {
      handleApiError(error);
      return {
        data: ref(null),
        error: ref(error)
      };
    }
  };

  const handleCachingDataTime = (key) => {
    try {
      const data = nuxtApp.payload.data?.[key] || nuxtApp.static.data?.[key];
      if (!data) return null;

      if (!data.fetchedAt) {
        console.warn('Cached data missing fetchedAt timestamp');
        return null;
      }

      const expirationDate = new Date(data.fetchedAt);
      expirationDate.setTime(expirationDate.getTime() + cachedTime);
      const isExpired = expirationDate.getTime() < Date.now();

      return isExpired ? null : data;
    } catch (error) {
      console.error('Cache handling error:', error);
      return null;
    }
  };

  return {
    GetAll,
    GetById
  };
};