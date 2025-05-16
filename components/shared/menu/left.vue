<template>
  <div class="nav-left">
    <nuxt-link class="logo-frame contain" to="/">
      <img :src="`/logo/logo-01.png`" alt="logo">
    </nuxt-link>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use "~/assets/styles/scss/theme/theme";


.nav-left{
  height: 100%;
  width: 100%;
  padding: .5rem 0;
  .logo-frame{
    display: block;
    width: auto !important;
    img{
      width: auto !important;

    }

  }
}
</style>