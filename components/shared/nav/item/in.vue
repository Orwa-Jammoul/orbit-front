<template>
  <div class="navbar-item">
    <div class="top-section">
      <nuxt-link class="main-link d-flex align-items-center" :key="page.id" 
        @click="hideNav(page.subPages.length,page.pageUrl);" :class="rtl()"
      >
        {{ useName(page) }} 
        <Icon
          v-if="page.subPages.length!=0"
          name="ic:outline-keyboard-arrow-down"
          color="#7f574d"
        />
      </nuxt-link>
    </div>
    <div v-if="page.subPages.length!=0 && showSubs" class="bottom-section" 
      :class="isEn()?'':'rtl'" :key="page.id"
    >
      <SharedNavDropDownIn class="nav-drop-down" :pages="page.subPages" /> 
    </div>
    <!-- <div v-if="page.id===34 && showSubs" class="bottom-section chocolate" 
      :class="isEn()?'':'rtl'" key="chocolate"
    >
      <MsgCategoriesSmall class="nav-drop-down"/>
    </div> -->
  </div>
</template>

<script setup>
const showNavVer = useShowNavVer().value;
const showSubs= ref(false)
const hideNav = (subPages,url) => {
  if(subPages>0){
    showSubs.value= !showSubs.value
  }
  else{
    navigateTo(url);
    useShowNavVer().value.show = false;
  }
  
};
const { page } = defineProps(["page"]);
</script>

<style lang="scss" scoped>
@use "~/assets/styles/scss/theme/theme";

.navbar-item{
  position: relative;
  width: auto ;
  border-bottom: solid 1px $grey;
  // min-height: 1rem;
  .top-section{
    color: $primary1;
    width: auto ;
    // padding: .5rem 0;
    .main-link{
      margin: .5rem 0;
      width: auto ;
      display: block;
      padding-left: 1rem;
      &.rtl{
        padding-left: 0;
        padding-right: 1rem;
      }
      color: rgb(44, 44, 44);
      font-size: .8rem;
      user-select: none;
      font-weight: bold;
      color: black;
      cursor: pointer;
    }
  }
  .bottom-section{
    z-index: 900;
    // position: absolute;
    // background-color: $primary5;
    width: 100%;
    // box-shadow: 5px 5px 10px rgba($color: #000000, $alpha: .2);


    .nav-drop-down{
      width: auto;
    }

  }

  &:hover,&:focus{
    .top-section{
      .main-link{
        color: $primary3;
      }
    }
    .bottom-section{
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
  }

}

.router-link-active{
  color: $primary3 !important;
}
</style>
