<template>
  <div class="nav-main"  :dir="rtl()">

    <div class="nav-main-ribbon pcb rp">
      
      <nuxt-link class="logo-frame contain" :class="rtl()" :to="localePath('/')" >
        <img :src="!isAr()?`/logo/Orbit_company-logo-side-white-02.png`:`/logo/Orbit_company-logo-side-white-01.png`" alt="logo">
      </nuxt-link>
      <div class="nav-links-side pce">
        <MenuLanguage/>
        <!-- <MenuCart/>
        -->
        <!-- <MenuAccount/>  -->
        <div class="vertical-nav">
          <SharedNavVertical :pages="allPages"/>
        </div>
      </div>
      <div class="center">
        <div class="center-inside-frame">
          <!-- <div class="spark"></div> -->
          <div class="h-100" v-for="page,index in pages" :key="page.id" >
            <SharedNavItemUp
              class="bottom-nav-item"
              :page="page"
              :data-aos-duration="500"
              data-aos-offset="0"
              :data-aos-delay="100*index"
              :data-aos="`fade-up`"
              data-aos-once="true"
            />
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const {locale} = useI18n()
useLang().value = locale.value;
const localePath = useLocalePath()

const pages = ref(useMenu().value.navbar);
// const contacts = ref(useContactsMenus().value.filter(item=>item.englishName.toLowerCase()!='whatsapp').sort((a,b)=>{a.order - b.order}));
// const whatsapp = useContactsMenus().value.find(item=>item.englishName.toLowerCase()!='whatsapp')
// console.log(contacts.value);
// console.log(pages.value);
// console.log(useMenu().value);
const allPages = ref(pages);
// const allPages = useMenu().value.home
const isAuth =  ref(useAuth().value.isAuthenticated)

watch(useAuth().value,()=>{
  isAuth.value =  useAuth().value.isAuthenticated
})
// console.log(useMenu().value);

import { useLocale } from 'vuetify'
const { current } = useLocale()

current.value = useLang().value
watch(useLang(),()=>{
  current.value = useLang().value
})

// const country = ref(null);
// const useCountry = async () => {
//   let userCountry = null
//   try {
//     const response = await fetch('https://ipapi.co/json/');
//     const data = await response.json();
//     userCountry = data.country;
//   } catch (error) {
//     console.error('Error detecting country:', error);
//   }
  
//   return userCountry;
// }
// country.value = await useCountry();
// console.log(country.value);

// const getClientIp = async () => {
//   try {
//     const response = await fetch('https://api.ipify.org?format=json');
//     const data = await response.json();
//     return data.ip;
//   } catch (error) {
//     console.error('Error fetching IP:', error);
//     return null;
//   }
// }

// // Usage
// const clientIp = await getClientIp();
// console.log('Client IP:', clientIp);



// const {locales, locale, setLocale } = useI18n()
  // useLang().value = locale
  const showBg = ref(false)

  onMounted(()=>{
    const lang = locale ?? localStorage.getItem("lang") ?? "en";
    // setLocale(lang)
    useLang().value = lang

    window.addEventListener('scroll', () => {
      const verticalScroll = window.scrollY;
      showBg.value = verticalScroll>10
      // console.log('Vertical Scroll Value:', verticalScroll);
    });

    // useToken().value = localStorage.getItem("token")
    // if(useToken().value){
    //   useAuth().value.isAuthenticated = true
    //   useUserId().value = localStorage.getItem("UserId")
    //   useClientId().value = localStorage.getItem("clientId")
    //   useUserInfo().value= JSON.parse(localStorage.getItem("userInfo"))
    // }
  })
</script>

<style lang="scss" scoped>
@use"~/assets/styles/scss/theme/theme" as *;

.nav-main{
  width: 100%;
  height: 100%;
  .nav-main-ribbon{
    position: relative;
    height: 5.2rem;
    background-color: none;

    // background: linear-gradient(to right, $primary2 0%, $primary2 30%, $primary2b 80%, $primary2c 100% );
    .logo-frame{
      width: 10rem;
      height: 100%;
      padding: 10px 0;
      background: none !important;
      img{
        object-position: right center;
        background: none;
      }
      &.rtl{
        img{
          object-position: left center;
        }
      }
    }
    .nav-links-side{
      height: 100%;
      
    }

    .center{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
      .center-inside-frame{
        position: relative;
        // z-index: 10;
        pointer-events: all;
        width: 50%;
        height: 3rem;
        // background-color: #00000016;
        // backdrop-filter: blur(5px);
        // background-color: $primary4;
        background-color: rgba($color:$primary4, $alpha: 0.5 ) ;
        border-radius: 1.5rem;
        border: solid 1px rgba(255, 255, 255, 0.1);

        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 920px) {
          display: none;
        }
      }
    }
  }


  .vertical-nav, .lang-small{
    height: 100%;
    width: 100%;
    display: none;

    @media (max-width: 920px) {
      // display: block;
      display: flex;
      align-items: center;
      flex-direction: row;
      // justify-content: flex-start;
      // position: relative;
    }
    // @media (max-width: 992px) {
    //   width: 30%;
    // }
    // @media (max-width: 768px) {
    //   width: 20%;
    // }
  }
}

[data-aos="fade-up"] {
  transform: translateY(10px); /* Default is 100px - adjust as needed */
}
</style>