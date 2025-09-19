import errorOptions from '../utils/error-options';

export default defineEventHandler(async () => {
    const { serverApi, serverApiBase } = useRuntimeConfig();
    const { adminEmail, adminPassword } = useRuntimeConfig();
    const storage = useStorage()
    try {
        const response = await $fetch(`${serverApi.AuthLoginApi}`, {
            baseURL: serverApiBase,
            method: "POST",
            retry: 10,
            headers: {
                'Accept-Language': 'en-US'
            },
            body: {
                emailOrUserName: adminEmail,
                password: adminPassword,
            }
        });
        // console.log("storage mainToken");
        await storage.setItem('mainToken', response)
        // console.log('response,', response)
        return response
    } catch (err) {
        console.log('error main token ', err)
        throw createError(errorOptions(err))
    }
})