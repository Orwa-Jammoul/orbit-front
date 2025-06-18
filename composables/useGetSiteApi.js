export const useGetSiteApi = () => {
    const { public: { apiBase, api, cachedTime } } = useRuntimeConfig();
    const nuxtApp = useNuxtApp();

    // Get All Data (Get All)
    const GetAll = async (endpoint, isServer = true, isLazy = false, isCached=true) => {
        return useFetch(() => `${endpoint}`, {
            key: `${endpoint}`,
            baseURL: apiBase ?? 'https://adminpanel.orbit-eng.net',
            server: isServer,
            lazy: isLazy,
            headers: {
                'Accept-Language': 'en-US',
                'Authorization': `Bearer ${useMainToken().value}`
            },
            transform(input) {
                return {
                    ...input,
                    fetchedAt: new Date()
                }
            },
            getCachedData(key) {
                return isCached?handleCachingDataTime(key):null;
            }
        })
    }

    // Get Add Data By Id (Get Details)
    const GetById = async (endpointWithoutId, id, isServer = true, isLazy = false) => {
        return useFetch(() => `${endpointWithoutId}${id}`, {
            key: `${endpointWithoutId}${id}`,
            baseURL: apiBase ?? 'https://adminpanel.orbit-eng.net',
            server: isServer,
            lazy: isLazy,
            headers: {
                'Accept-Language': 'en-US',
                'Authorization': `Bearer ${useMainToken().value}`
            },
            transform(input) {
                return {
                    ...input,
                    fetchedAt: new Date()
                }
            },
            getCachedData(key) {
                return handleCachingDataTime(key);
            }
        })
    }

    const handleCachingDataTime = (key) => {
        const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
        if (!data) return;

        // Is te data too old ? cache data for some period of time
        const expirationDate = new Date(data.fetchedAt);
        expirationDate.setTime(expirationDate.getTime() + cachedTime);
        const isExpired = expirationDate.getTime() < Date.now();
        if (isExpired) return;
        return data;
    }

    return {
        GetAll,
        GetById
    }
}