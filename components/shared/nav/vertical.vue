<template>
  <div class="main-nav-ver">
    <div class="overlay" v-if="showNavVer.show" @click="hideNav" ></div>

    <div class="nav-toggler-frame pcc" >
      <div class="nav-toggler" :class="rtl()" @click="showNav">
        <icon name="fluent:navigation-24-filled"  size="20px"/>
        <!-- {{ t("menu") }} -->
      </div>
    </div>

    <div class="nav-ver" :class="{'rtl': !isEn(), 'show': showNavVer.show}" >
      <div class="header">
        <div class="nav-close" @click="hideNav" :class="{'rtl': !isEn(), 'show': showNavVer.show}">
          <icon name="ic:baseline-cancel" color="#2a2a2a" size="25px"/>
        </div>
        <nuxt-link class="logo-frame" to="/">
          <img class="logo" :src="`/logo/logo-01.png`" 
          alt="logo">
        </nuxt-link>
      </div>
      <div class="nav-items">
        <div class="p-0 m-0" v-for="page in pages" :key="page.id">
          <SharedNavItemIn  v-if="page.pageUrl!='/meetings'" :key="page" :page="page"/>
          <SharedNavItemIn v-else-if="isAdmin().value"  :page="page"/>
        </div>
        <!-- <button class="switch-lang" :class="rtl()" @click="switchL">
          <p class="lang-name">{{ isEn()?'عربي':'En' }}</p>
        </button> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const { pages } = defineProps(["pages"]);
// console.log(pages);

const showNavVer = useShowNavVer().value;
const hideNav = () => {
  useShowNavVer().value.show = false;
};
const showNav = () => {
  useShowNavVer().value.show = true;
};

</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/custom";

.main-nav-ver{
 
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: pointer;
}
  .nav-toggler-frame{
    // margin-right: 0.5rem;
    margin-inline-start: 5px;
    .nav-toggler{
      padding: 2px 5px ;
      border-radius: 2px;
      transition: all 100ms ease-in-out;
      cursor: pointer;
      font-size: 14px;
      // border: solid 1px $primary1;
      transition: background-color 200ms ease-in-out;
      background-color: $br20;
      color: white;
      margin-top: 5px; 
      margin-bottom: 5px; 
      // margin-left: 0;
      // margin-right: .5rem;
      // &.rtl{
      //   margin-left: .5rem;
      //   margin-right: 0;

      // }

      // .icon{
      //   transition: background-color 200ms ease-in-out;
      // }

      &:hover{
        background-color: $primary3;
        // .icon{
        //   color: $primary1 !important;
        // }
      }
    }
  
  }
  
  .nav-ver{
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 100;
    height: 100%;
    width: 60%;
    top: 0;
    left: 0;
    right: auto;
    transform: translateX(-100%);
    &.rtl{
      left: auto;
      right: 0;
      transform: translateX(100%);
    }
    visibility: hidden;
    padding: 1rem;
    background-color: $br90;
    pointer-events: none;
    
    transition: all 200ms ease-in-out;
    overflow-y: scroll;
    @include vertical-scrollbar(8px, "#f1f1f1", black, "#555");
  
    &.show{
      visibility: visible;
      transform: translateX(0);
      pointer-events: auto;
    }

    .header{
      display: flex;
      justify-content: center;
      padding-bottom: 1rem;
      border-bottom: solid 1px $grey;
      height: 8rem;
      position: relative;

      .nav-close{
        // width: 50%;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        cursor: pointer;
        position: absolute;
        top:-10px;
        left: -20px;
        right: auto;
        &.rtl{
          left: auto;
          right: -20px;
        }
      }

      .logo-frame{
        // width: 50%;
        height: 100%;

        .logo{
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
    .nav-items{
      display: flex;
      flex-direction: column;
      padding-bottom: 5rem;
    }
  }
}

</style>