export default defineNuxtPlugin(async (nuxtApp) => {
    const { data: response, error } = await useFetch('/api/main-token');
    // console.log(response.value)
    if (response.value) {
        if (response.value?.succeeded) {
            useMainToken().value = response.value.data.token
        }
    }

})
