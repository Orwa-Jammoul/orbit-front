<template>
  <div>
    <ClientOnly>
      <ElementsLoader/>
      <div>
        <!-- <SharedNavbar class="nav-bar-main" /> -->
        <div id="slot">
          <slot />
        </div>
        <!-- <SharedFooter /> -->
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>

</script>
<style lang="scss" scoped>
@use "~/assets/styles/scss/theme/theme";
.nav-bar-main {
  background: var(--secondary);
  position: fixed;
  // position: sticky;
  // position: absolute;
  z-index: 999;
  width: 100%;
  top: 0;
}
#slot{
  min-height: calc(100vh - 6rem);
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

