<template>
  <div>
    <div>
      <SharedNavbar class="nav-bar-main"/>
      <SharedMenuContact/>
      <div id="slot">
        <slot />
      </div>
      <SharedFooter />
      <HomeLaunching/>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()
useHead({
  htmlAttrs: {
    lang: locale.value 
  }
})

  // const {locales, locale, setLocale } = useI18n()
  // // useLang().value = locale

  // onMounted(()=>{
  //   const lang = locale ?? localStorage.getItem("lang") ?? "en";
  //   // setLocale(lang)
  //   useLang().value = lang
  // })

</script>
<style lang="scss" scoped>
// @import "~/assets/styles/theme/theme1.scss";
.nav-bar-main {
  position: sticky;
  z-index: 999;
  width: 100%;
  top: 0;
  left: 0;
  background-color: black;
}
#slot{
  min-height: calc(100vh - 5rem);
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

