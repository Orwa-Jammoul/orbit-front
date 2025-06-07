const handleResetStorage = (startActivity) => {
    if (startActivity) {
        // 3600 : in seconds, for 1 hours :
        if ((Date.now() - startActivity) > 3600 * 3 * 1000) {
            localStorage.removeItem('startActivity');
            localStorage.removeItem('token');
            // localStorage.removeItem('accountType');
            localStorage.removeItem('userInfo');
            localStorage.removeItem('UserId');
            localStorage.removeItem('clientId');
            // localStorage.removeItem("cart")
            // Set Activate Date After remove it
            localStorage.setItem('startActivity', Date.now());
        }
    } else {
        // store date in localstorage
        // console.log(Date.now())
        localStorage.setItem('startActivity', Date.now());
    }
}

export default defineNuxtPlugin(async (nuxtApp) => {
    const startActivity = localStorage.getItem('startActivity');
    // Remove User Data (Token, info) after Some Time
    handleResetStorage(startActivity)
    // Get User Token
    const token = localStorage.getItem('token') != 'undefined' ? localStorage.getItem('token') : null
    // Get User Info
    const userInfo = localStorage.getItem('userInfo') != 'undefined' ? JSON.parse(localStorage.getItem('userInfo')) : null
    // Get User Id
    const UserId = localStorage.getItem('UserId') != 'undefined' ? localStorage.getItem('UserId') : null
    const clientId = localStorage.getItem('clientId') != 'undefined' ? localStorage.getItem('clientId') : null
    // get account type from localstorage
    // const accountType = localStorage.getItem('accountType') != 'undefined' ? localStorage.getItem('accountType') : null
    // check if there error in storing auth data
    if (!token || !userInfo) {
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        // localStorage.removeItem('accountType')
        useToken().value = null;
        useAuth().value.isAuthenticated = false;
        useUserId().value = false;
        useUserInfo().value = null
        // useAccountType().value = null
    } else {
        // make global isAuthenticated state true
        useAuth().value.isAuthenticated = !!token
        // store Token in the store
        useToken().value = token
        // store userinfo in the store
        useUserInfo().value = userInfo
        // store userId in the store
        useUserId().value = UserId
        useClientId().value = clientId
        // Store account type in store
        // useAccountType().value = accountType

    }
    // Shopping Cart
    // const shoppingCart = localStorage.getItem("cart")
    // useCart().value = shoppingCart ? JSON.parse(shoppingCart) : useCart().value
})