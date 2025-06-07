<template>
  <div>
    <div class="main-menu ">
      <nuxt-link :to="page.pageUrl" class="menu-item" v-for="page in pages" :key="page">
        {{ useName(page) }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { pages } = defineProps(["pages"]);
const showNavVer = useShowNavVer().value;
const hideNav = (url) => {
   navigateTo(url);
  useShowNavVer().value.show = false;
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/theme";
.main-menu{
  display: flex;
  flex-direction: column;
  // padding: 0 1rem;
  width: auto;
  .menu-item{

    width: 15rem;
    font-weight: 600;
    color: white;
    font-size: 11px;
    display: block;
    padding: .75em 1em .75em 1em;
    cursor: pointer;
    border-bottom: solid 1px white;
    &:last-child{
      border-bottom: none;
    }
    &:hover{
      background-color: $br5 !important;
      color: white;
    }
    // &:hover:not(.router-link-active){
    //   background-color: $primary6 !important;
    //   // color: $primary2b;
    //   color: red;
    // }
  }
}

.router-link-active{
  // color: $primary1 !important;
  background-color: $br5 !important;
}
</style>