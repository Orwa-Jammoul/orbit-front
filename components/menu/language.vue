<template>
  <div ref="langMenu" class="navbar-item pcc" @mouseleave="selected">
    <div class="top-section" @mouseenter="reselect" @click="toggle">
      <nuxt-link class="main-link d-flex align-items-center">
        {{ siteLanguages().value[useLang().value] }}
        <Icon name="ion:earth" size="20px" />
      </nuxt-link>
    </div>
    <div class="bottom-section" :class="rtl()" >
      <MenuDropLanguages class="nav-drop-down" @selected="selected" /> 
    </div>
  </div>
</template>

<script setup>
const langMenu = ref(null)
const toggle = ()=>{
  langMenu.value.classList.toggle('show');
}
const selected = ()=>{
  if (langMenu.value) {
    langMenu.value.classList.remove('show');
    // console.log('selected');
  }
}
const reselect = ()=>{
  if (langMenu.value) {
    langMenu.value.classList.add('show');
    // console.log('reselect');
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/theme";

.navbar-item{
  position: relative;
  width: auto ;
  height: 100%;
  .top-section{
    color: $primary1;
    width: auto ;
    height: 2rem;
    
    // padding: .5rem 0;
    .main-link{
      color: white;
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
      .icon{
        margin-inline-start: 5px;
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
  .bottom-section{
    z-index: 200;
    position: absolute;
    // background-color: white;
    // width: 60vw;
    width: 7rem;
    top: calc(50% + 1rem) ;
    inset-inline-end: 0;


    transform: translateY(-8px);
    box-shadow: 5px 5px 10px rgba($color: #000000, $alpha: .2);
    pointer-events: none;
    opacity: 0%;
    transition: all 200ms ease-in-out;

    .nav-drop-down{
      width: auto;
      
    }
    // &.hide{
    //   opacity: 0 !important;
    //   transform: translateY(-8px);
    //   pointer-events: none;
    // }
    // &.show{
    //   opacity: 1;
    //   transform: translateY(0);
    //   pointer-events: auto;
    // }

  }

  // &:hover,&:focus{
  &.show{
    .top-section{
      pointer-events: none;
      .main-link{
        color: $primary1;
        // background-color: $c1;
        
        .icon{
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

  // &.no-hover {
  //   pointer-events: none;
  //   .bottom-section{
  //     opacity: 0;
  //     transform: translateY(-8px);
  //     pointer-events: none;
  //   }
  // }

}

</style>
