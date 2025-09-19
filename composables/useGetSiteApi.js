export const useGetSiteApi = () => {
  const { public: { apiBase, cachedTime } } = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  const token = useMainToken(); // Get token once
  // const token = {value: ""}
  // const token = useToken();

  // Common error handler
  const handleError = (error, context = '') => {
    console.error(`API Error${context ? ` in ${context}` : ''}:`, error);

    // Handle specific error cases
    if (error?.statusCode === 401 || error?.statusCode === 403) {
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

  // Re-authorization function
  const reAuthorization = async () => {
    token.value = await useReAuthorization().reAuthorization();
    return true;
    // try {
    //   const response = await $fetch('/api/main-token');
      
    //   if (response?.succeeded) {
    //     token.value = response.value.data.token;
    //     console.log('Token refreshed:', token.value);
    //     return true;
    //   }
      
    //   throw new Error('Re-authorization failed');
    // } catch (error) {
    //   console.error('Re-authorization error:', error);
    //   return false;
    // }

    //===================

    // try {
    //   const { data: response, error } = await useFetch('/api/main-token');
      
    //   if (error.value) {
    //     throw error.value;
    //   }
      
    //   if (response.value?.succeeded) {
    //     token.value = response.value.data.token;
    //     console.log('Token refreshed:', token.value);
    //     return true;
    //   }
      
    //   throw new Error('Re-authorization failed');
    // } catch (error) {
    //   console.error('Re-authorization error:', error);
    //   return false;
    // }
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
        // This will be handled in the retry logic
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

  // Enhanced fetch with retry and re-authorization
  const fetchWithRetry = async (endpoint, fetchFunction, context, maxRetries = 1) => {
    let retryCount = 0;
    
    while (retryCount <= maxRetries) {
      // console.log(endpoint);
      try {
        const response = await fetchFunction();
        // console.log("response:", response);
        // Check if we got an authentication error
        if (response.error.value && (response.error.value.statusCode === 401 || response.error.value.statusCode === 403)) {
          throw new Error('Not authorized!');
        }
        
        return response;
        
      } catch (error) {
        console.log(`Retrying ${context} (attempt ${retryCount + 1})`);
        console.log(`Authentication error detected, attempting re-authorization (attempt ${retryCount + 1})`);
        
        // Try to re-authorize
        const reAuthSuccess = await reAuthorization();
        
        if (reAuthSuccess) {
          console.log(`re-authorization completed`)
          retryCount++;
        }else if(!reAuthSuccess && retryCount == maxRetries){
          return {
            data: ref(null),
            error: ref(handleError(error, context)),
            pending: ref(false)
          };
        }
      }
    }
  };

  // Get All Data with retry capability
  const GetAll = async (endpoint, isServer = true, isLazy = false, isCached = true, maxRetries = 1) => {
    const fetchFunction = () => useFetch(
      () => endpoint,
      getFetchConfig(endpoint, isServer, isLazy, isCached)
    );

    return fetchWithRetry(endpoint, fetchFunction, 'GetAll', maxRetries);
  };

  // Get Data By ID with retry capability
  const GetById = async (endpointWithoutId, id, isServer = true, isLazy = false, isCached = true, maxRetries = 1) => {
    if (!endpointWithoutId || !id) {
      return {
        data: ref(null),
        error: ref(handleError(new Error('Missing endpoint or ID parameter'), 'GetById')),
        pending: ref(false)
      };
    }

    const endpoint = `${endpointWithoutId}/${id}`;
    
    const fetchFunction = () => useFetch(
      () => endpoint,
      getFetchConfig(endpoint, isServer, isLazy, isCached)
    );

    return fetchWithRetry(endpoint, fetchFunction, 'GetById', maxRetries);
  };

  return {
    GetAll,
    GetById,
    reAuthorization // Export if you want to use it separately
  };
};

// export const useGetSiteApi = () => {
//   const { public: { apiBase, cachedTime } } = useRuntimeConfig();
//   const nuxtApp = useNuxtApp();
//   const token = useMainToken(); // Get token once

//   // Common error handler
//   const handleError = (error, context = '') => {
//     console.error(`API Error${context ? ` in ${context}` : ''}:`, error);

//     // Handle specific error cases
//     if (error?.statusCode === 401 || error?.statusCode === 403) {
//       // You might want to add logout logic here
//       error.message = 'Session expired. Please login again.';
//     } else if (error?.statusCode === 404) {
//       error.message = 'Requested resource not found';
//     }
    
//     return {
//       value: error,
//       message: error.message || 'An error occurred',
//       statusCode: error.statusCode || 500
//     };
//   };

//   // Common fetch configuration
//   const getFetchConfig = (key, isServer, isLazy, isCached) => ({
//     key,
//     baseURL: apiBase ?? 'https://adminpanel.orbit-eng.net',
//     server: isServer,
//     lazy: isLazy,
//     headers: {
//       'Accept-Language': 'en-US',
//       'Authorization': `Bearer ${token.value}`
//     },
//     transform(input) {
//       if (!input) throw new Error('Empty server response');
//       return {
//         ...input,
//         fetchedAt: new Date()
//       };
//     },
//     getCachedData(key) {
//       return isCached ? handleCachingDataTime(key) : null;
//     },
//     onRequestError({ error }) {
//       throw error;
//     },
//     onResponseError({ response, error }) {
//       if (response.status === 401) {
//         // Add logout logic if needed
//       }
//       throw error;
//     }
//   });

//   // Handle caching with expiration
//   const handleCachingDataTime = (key) => {
//     try {
//       if (!key) return null;
      
//       const data = nuxtApp.payload.data?.[key] || nuxtApp.static.data?.[key];
//       if (!data || !data.fetchedAt) return null;

//       const expirationDate = new Date(data.fetchedAt);
//       expirationDate.setTime(expirationDate.getTime() + cachedTime);
      
//       return expirationDate.getTime() > Date.now() ? data : null;
//     } catch (error) {
//       console.error('Cache error:', error);
//       return null;
//     }
//   };

//   // Get All Data
//   const GetAll = async (endpoint, isServer = true, isLazy = false, isCached = true) => {
//     try {
//       const response = await useFetch(
//         () => endpoint,
//         getFetchConfig(endpoint, isServer, isLazy, isCached)
//       );

//       if (response.error.value) {
//         response.error.value = handleError(response.error.value, 'GetAll');
//       }
      
//       return response;
//     } catch (error) {
//       return {
//         data: ref(null),
//         error: ref(handleError(error, 'GetAll')),
//         pending: ref(false)
//       };
//     }
//   };

//   // Get Data By ID
//   const GetById = async (endpointWithoutId, id, isServer = true, isLazy = false, isCached = true) => {
//     try {
//       if (!endpointWithoutId || !id) {
//         throw new Error('Missing endpoint or ID parameter');
//       }

//       const endpoint = `${endpointWithoutId}${id}`;
//       const response = await useFetch(
//         () => endpoint,
//         getFetchConfig(endpoint, isServer, isLazy, isCached)
//       );

//       if (response.error.value) {
//         response.error.value = handleError(response.error.value, 'GetById');
//       } else if (!response.data.value) {
//         throw new Error('Empty data response');
//       }

//       return response;
//     } catch (error) {
//       return {
//         data: ref(null),
//         error: ref(handleError(error, 'GetById')),
//         pending: ref(false),
//         refresh: () => Promise.resolve({
//           data: ref(null),
//           error: ref(handleError(error, 'GetById refresh')),
//           pending: ref(false)
//         })
//       };
//     }
//   };

//   return {
//     GetAll,
//     GetById
//   };
// };