<template>
  <div>
    <ClientOnly>
      <div :class=" isEn() ? 'bodyEN' : 'bodyAR'">
        <SharedNavbar class="nav-bar-main" :class="{'bg':showBg}" />
        <SharedMenuContact/>
        <div id="slot">
          <slot />
        </div>
        <SharedFooter />
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>

  const {locales, locale, setLocale } = useI18n()
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
@import "~/assets/styles/scss/theme/theme";
.nav-bar-main {
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 0;
  left: 0;
  &.bg{
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
  }
}
#slot{
  min-height: calc(80vh - 6rem);
}
// .whatsApp{
//   z-index: 800;
//   position: fixed;
//   bottom: 2rem;
//   left: 2rem;
//   width: 3.5rem;
//   height: 3.5rem;
//   border-radius: 50%;
//   background-color: #25D366;
//   transition: all 300ms ease-out;
//   &:hover{
//     background-color: #06AB90;

//   }
// }
</style>

