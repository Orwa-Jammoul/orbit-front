export const useGetUserApi = () => {
    const { public: { apiBase, api, cachedTime } } = useRuntimeConfig();
    const nuxtApp = useNuxtApp();
    const { $awn } = useNuxtApp();

    // Get All Data (Get All)
    const GetAll = async (endpoint, isServer = true, isLazy = false, isCached=true) => {
        const data = await useFetch(() => `${endpoint}`, {
            key: `${endpoint}`,
            baseURL: apiBase ?? 'https://adminpanel.orbit-eng.net',
            server: isServer,
            lazy: isLazy,
            headers: {
                'Accept-Language': 'en-US',
                'Authorization': `Bearer ${useToken().value}`
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
        // console.log(data);
        if(data.error.value){
            if(data.error.value.statusCode == 401 || data.error.value.statusCode == 403){
                $awn.alert(errorMessage.value[0], {
                    durations: { global: 5000 },
                });
                useLogout()
                return navigateTo('/');
            }
        }
        return data
    }

    // Get Add Data By Id (Get Details)
    const GetById = async (endpointWithoutId, id, isServer = true, isLazy = false) => {
        const data = useFetch(() => `${endpointWithoutId}${id}`, {
            key: `${endpointWithoutId}${id}`,
            baseURL: apiBase ?? 'https://adminpanel.orbit-eng.net',
            server: isServer,
            lazy: isLazy,
            headers: {
                'Accept-Language': 'en-US',
                'Authorization': `Bearer ${useToken().value}`
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
        if(data.error.value){
            if(data.error.value.statusCode == 401 || data.error.value.statusCode == 403){
                $awn.alert(errorMessage.value[0], {
                    durations: { global: 5000 },
                });
                useLogout()
                return navigateTo('/');
            }
        }
        return data
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