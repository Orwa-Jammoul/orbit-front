export const useHttpForSiteApi = () => {
  const { public: {apiBase} } = useRuntimeConfig();
  
  // Post Data
  const post = async (endpoint, data, isServer = true, isLazy = false) => useFetch(() => `${endpoint}`, {
    key: `${endpoint}`,
    baseURL: apiBase,
    method: 'post',
    body: data,
    server: isServer,
    lazy: isLazy,
    headers: {
      'Accept-Language': 'en-US',
      'Accept': 'application/json',
      'Authorization': `Bearer ${useMainToken().value}`
    },
    onRequest({ request, options }) {
      // Set the request headers
      options.headers.Authorization = `Bearer ${useMainToken().value}`
    }
  });

  const del = async (endpoint, data, isServer = true, isLazy = false) => useFetch(() => `${endpoint}`, {
    key: `${endpoint}`,
    baseURL: apiBase,
    method: 'delete',
    server: isServer,
    lazy: isLazy,
    headers: {
      'Accept-Language': 'en-US',
      'Accept': 'application/json',
      'Authorization': `Bearer ${useMainToken().value}`
    },
    onRequest({ request, options }) {
      // Set the request headers
      options.headers.Authorization = `Bearer ${useMainToken().value}`
    }
  })
  

  // Put Data
  const put = async (endpoint, data) => useFetch(() => `${endpoint}`, {
    key: `${endpoint}`,
    baseURL: apiBase,
    method: 'put',
    body: data,
    headers: {
      'Accept-Language': 'en-US',
      'Accept': 'application/json',
      'Authorization': `Bearer ${useMainToken().value}`
    },
    onRequest({ request, options }) {
      // Set the request headers
      options.headers.Authorization = `Bearer ${useMainToken().value}`
    },
    onResponseError({ request, response, options }) {
      if (response.status == 401) {
          return resetUserAuth();
      }
    }
  })
  
  
  return {
    post,
    del,
    put
  }
}