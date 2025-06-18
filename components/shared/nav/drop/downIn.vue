<template>
  <div>
    <div class="dropdown-main-menu ">
      <nuxt-link 
        class="menu-item px-0 ps-10" 
        :to="localePath(page.pageUrl)" 
        @click="useShowNavVer().value.show = false" 
        v-for="page in pages" :key="page" >
        <icon :name="isEn()?`material-symbols-light:subdirectory-arrow-right-rounded`:`material-symbols-light:subdirectory-arrow-left-rounded`" size="20px"/>
        {{ useName(page) }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { pages } = defineProps(["pages"]);
const localePath = useLocalePath()
</script>

<style lang="scss" scoped>
@use"~/assets/styles/scss/theme/theme" as *;
.dropdown-main-menu{
  display: flex;
  flex-direction: column;
  // border: 1px solid #fff;
  // padding: 0 1rem;
  width: 100%;
  .menu-item{
    width: 100%;
    // width: 15rem;
    font-weight: 600;
    color: black;
    font-size: 12px;
    display: block;
    padding: .75em 1em .75em 1em;
    // border-bottom: solid 1px $br3;
      
    &:hover{
      // background-color: $primary6;
      color: $primary1;
    }
  }
}

.router-link-active{
  background-color: $primary6 !important;
  color: $primary1 !important;
}
</style>