<template>
  <div class="navbar-item pcc">
    <div class="top-section" >
      <nuxt-link class="main-link d-flex align-items-center" :key="page.id"
        :to="page.subPages.length>0?'':page.pageUrl" :class="rtl()"
      >
        <Icon
          :name="iconName"
          size="20px"
        />
        {{ useName(page,0,0,1) }}
        <Icon
          v-if="page.subPages.length>0"
          name="ic:outline-keyboard-arrow-down"
        />
      </nuxt-link>
    </div>
    <div v-if="page.subPages.length!=0" class="bottom-section" :class="rtl()">
      <SharedNavDropTopDown class="nav-drop-down" :pages="page.subPages" /> 
    </div>
  </div>
</template>

<script setup>
const { api, apiBase } = useRuntimeConfig();
const { page, iconName } = defineProps(["page","iconName"]);

</script>

<style lang="scss" scoped>
@use "~/assets/styles/scss/theme/theme";

.navbar-item{
  position: relative;
  width: auto ;
  // height: 100%;
  .top-section{
    color: black;
    width: auto ;
    height: 100%;
    
    // padding: .5rem 0;
    .main-link{
      position: relative;
      height: 100%;
      // z-index: 20;
      margin:0;
      // padding: 0 10px;
      width: auto ;
      display: block;
      // border-left: none;
      // border-right: solid 1px $br20;
      // &.rtl{
      //   border-left: solid 1px $br20;
      //   border-right: none;
      // }
      font-size: min(.9vw , 14px);
      // font-size: 14px;

      user-select: none;
      font-weight: 400;
      color: black;
      cursor: pointer !important;
      .icon{
        color: black;
      }
    }
    // &::before{
    //   content: '';
    //   position: absolute;
    //   z-index: 0;
    //   height: 5px;
    //   width: 0;
    //   bottom: 0;
    //   opacity: 0;
    //   background-color: $primary3 ;
    //   transition: all 250ms ease-in-out, width 350ms ease-in-out;
    // }
    // &.rtl{
    //   &::before{
    //     right: -100%;
    //   }
    // }
    // &.ltr{
    //   &::before{
    //     left: -100%;
    //   }
    // }
  }

  .bottom-section{
    z-index: 200;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    width: auto;
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
        color: $primary3;
        // background-color: $c1;
        
        .icon{
          color: $primary3;
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
      // &::before{
      //   left: 0;
      //   right: 0;
      //   opacity: 1;
      //   width: 100%;
      // }
    }
    .bottom-section{
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
    height: 5px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: $primary3 ;
  }
}
</style>
