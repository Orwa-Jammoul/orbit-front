export default defineNuxtPlugin(async () => {
  // const {public:{api,apiBase}} = useRuntimeConfig()
  // const lang = localStorage.getItem('lang') ?? 'ar'
  // useLang().value = lang

  // const isAuth = !!localStorage.getItem('token')
  // // console.log(isAuth);
  // if(isAuth){
  //   useToken().value = localStorage.getItem('token') ?? null
  //   useUserInfo().value = JSON.parse(localStorage.getItem('userInfo') ) ?? null
  //   isAdmin().value = localStorage.getItem('isAdmin') ?? false
  //   useAuth().value.isAuth = isAuth

  //   // console.log(useToken().value);
  //   // console.log(useUserInfo().value);
  //   // console.log(useRole().value);
  // }




  // console.log(lang);
  // const {data:mainTokenData} = await useHttpForSiteApi().post(
  //   `${api.authLoginApi}`,
  //   {
  //     "email": "orwaj@gmail.com",
  //     "password": "pass@orwaj"
  //   }
  // )
  // if (mainTokenData.value && mainTokenData.value.token) {
  //   useMainToken().value = mainTokenData.value.token
  //   useAuth().value.isAuth = true
  // }

  // const langsData = [
  //     {
  //       "id": 1,
  //       "name": "english",
  //       "nameEn": "english",
  //       "code": "en",
  //       "created_at": "2025-02-28T16:12:40.000000Z",
  //       "updated_at": "2025-02-28T16:12:40.000000Z"
  //     },
  //     {
  //       "id": 2,
  //       "name": "\u0639\u0631\u0628\u064a",
  //       "nameEn": "arabic",
  //       "code": "ar",
  //       "created_at": "2025-02-28T17:19:43.000000Z",
  //       "updated_at": "2025-02-28T17:19:43.000000Z"
  //     }
  //   ]
  
  // gLangs().value = langsData



  

  // const {data:langsData} = await useGetSiteApi().GetAll(`${api.langsApi}`)
  // if (langsData.value) {
  //   gLangs().value = langsData.value.data
  // }
});