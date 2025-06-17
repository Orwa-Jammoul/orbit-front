<template>
  <div class="navbar-item pcc" v-if="!isLoading">
    <div class="top-section" >
      <nuxt-link class="main-link d-flex align-items-center">
        {{ useName(useMenuById(12)) }}
        <Icon
          v-if="categories.length>0"
          name="ic:outline-keyboard-arrow-down"
        />
      </nuxt-link>
    </div>
    <div v-if="categories.length>0" class="bottom-section" :class="rtl()">
      <MenuDropCategories class="nav-drop-down" :pages="categories" /> 
    </div>
  </div>
</template>

<script setup>
const { public:{api, apiBase } } = useRuntimeConfig();
const categories = ref([])
const isLoading = ref(true)
const { data:categoriesData } = await useGetSiteApi().GetAll(`${api.getProductCategories}`);

watchEffect(()=>{
  if(categoriesData.value){
    categories.value = categoriesData.value.data
    isLoading.value = false
  }
})
</script>

<style lang="scss" scoped>
@use"~/assets/styles/scss/theme/theme" as *;

.navbar-item{
  position: relative;
  width: auto ;
  height: 100%;
  .top-section{
    color: $primary1;
    width: auto ;
    height: 100%;
    
    // padding: .5rem 0;
    .main-link{
      color: black;
      position: relative;
      height: 100%;
      // z-index: 20;
      margin:0;
      padding: 0 6px;
      width: auto ;
      display: block;
      // border-left: none;
      // border-right: solid 1px $br4;
      // &.rtl{
      //   border-left: solid 1px $br4;
      //   border-right: none;
      // }
      font-size:  14px;
      font-weight: 700;
      // font-size: 14px;

      user-select: none;
      cursor: pointer !important;
      .iconify{
        color: black;
      }
    }
    &::before{
      content: '';
      position: absolute;
      z-index: 0;
      height: 2px;
      width: 0;
      bottom: 0;
      opacity: 0;
      background-color: $primary1 ;
      transition: all 250ms ease-in-out, width 350ms ease-in-out;
    }
    &.rtl{
      &::before{
        right: -100%;
      }
    }
    &.ltr{
      &::before{
        left: -100%;
      }
    }
  }
  .bottom-section-custom{
    z-index: 200;
    // position: absolute;
    position: fixed;
    // background-color: $primary5;
    width: 100%;
    top: 6rem;
    left: 0;
    right: auto;
    &.rtl{
      left: auto;
      right: 0;
    }

    transform: translateY(-8px);
    box-shadow: 5px 5px 10px rgba($color: #000000, $alpha: .2);
    pointer-events: none;
    opacity: 0%;
    transition: all 200ms ease-in-out;

    // .nav-drop-down-custom{
    //   width: 100% !important;
    // }

  }
  .bottom-section{
    z-index: 200;
    position: absolute;
    background-color: white;
    width: 60vw;
    top: 100% ;
    left: 0;
    right: auto;
    &.rtl{
      left: auto;
      right: 0;
    }

    transform: translateY(-8px);
    box-shadow: 5px 5px 10px rgba($color: #000000, $alpha: .2);
    pointer-events: none;
    opacity: 0%;
    transition: all 200ms ease-in-out;

    .nav-drop-down{
      width: auto;
      
    }

  }

  &:hover,&:focus{
    .top-section{
      .main-link{
        color: $primary1;
        // background-color: $c1;
        
        .iconify{
          color: $primary1;
        }
        // text-decoration: underline;
        // &:not(.router-link-active){
        //   &::before{
        //     left: 0;
        //     right: 0;
        //     opacity: 1;
        //     width: 100%;
        //   }
        // }
      }
      &::before{
        left: 0;
        right: 0;
        opacity: 1;
        width: 100%;
      }
    }
    .bottom-section{
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
    .bottom-section-custom{
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
  }

}
.router-link-active{
  // color: $primary2 !important;
  // background-color: $c1 !important;
  &::before{
    content: '';
    position: absolute;
    z-index: 0;
    height: 2px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: $primary1 ;
  }
}
</style>
