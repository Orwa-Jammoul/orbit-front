<template>
  <div>
    <div>
      <SharedNavbar class="nav-bar-main" :class="{'bg': showBg}"/>
      <SharedMenuContact/>
      <div id="slot">
        <slot />
      </div>
      <SharedFooter />
    </div>
    <ClientOnly>
      <ElementsNotify/>
    </ClientOnly>
  </div>
</template>

<script setup>
const { locale } = useI18n()
useHead({
  htmlAttrs: {
    lang: locale.value 
  }
})

const showBg = ref(false);

if(process.client){
  showBg.value = true;
}

</script>
<style lang="scss" scoped>
@use"~/assets/styles/scss/theme/theme" as *;
.nav-bar-main {
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 0;
  left: 0;
  &.bg{
    background-color: rgba(0, 0, 0, 0.4);
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

