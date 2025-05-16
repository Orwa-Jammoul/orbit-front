export const useSiteHeaders = () => {
    const headers = {
        'Accept-Language': 'en-US',
        'Authorization': `Bearer ${useMainToken().value}`
    };
    return { headers }
}
