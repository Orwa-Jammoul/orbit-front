<template>
  <div class="nav-bottom-main pcs"  :dir="rtl()">
    <div class="center d-flex">
      <SharedNavItemUp
        class="bottom-nav-item"
        v-for="page in pages"
        :page="page"
        :key="page.id" 
      />
    </div>

    <!-- <div class="vertical-nav">
      <SharedNavVertical :pages="allPages"/>
    </div> -->
  </div>
</template>

<script setup>

const pages = ref(useMenu().value.top);
// console.log(pages.value);
// const allPages = ref([...useMenu().value.top,...useMenu().value.bottom]);
// const allPages = useMenu().value.top

// console.log(useMenu().value);


</script>

<style lang="scss" scoped>
@use "~/assets/styles/scss/theme/theme";

.nav-bottom-main{
  z-index: 999;
  width: 100%;
  height: 100%;
  // background-color: $br20;
  // padding: 0 2rem;

  .left{
    height: 100%;
    // min-width: 11rem;
    // max-width: 22rem;
  }

  .center{
    height: 100%;
    .bottom-nav-item{
      height: 100% ;
    }
    .switch-lang{
      position: relative;
      margin: 0 5px;
      .lang-name{
        color: white;
        margin: 0;
      }
      &::after{
        content: '';
        position: absolute;
        height: 5px;
        width: 0;
        bottom: 0;
        opacity: 0;
        background-color: $primary1;
        transition: all 250ms ease-in-out, width 350ms ease-in-out;

      }
      &.rtl{
        &::after{
          right: -100%;
        }
      }
      &.ltr{
        &::after{
          left: -100%;
        }
      }
      &:hover{
        
        &::after{
          left: 0;
          right: 0;
          opacity: 1;
          width: 100%;
        }
      }
    }
  }
  .right{
    height: 100%;
    .media-list{
      .media-item{
        a{
          color: white;
        }
        margin-right: 5px;
      }
    }
  }

  .vertical-nav, .lang-small{
    height: 100%;
    width: 100%;
    display: none;

    // width: 25rem;
    // width: 42%;


    @media (max-width: 920px) {
      // display: block;
      display: flex;
      align-items: center;
      flex-direction: row;
      // justify-content: flex-start;
      // position: relative;
    }
    // @media (max-width: 992px) {
    //   width: 30%;
    // }
    // @media (max-width: 768px) {
    //   width: 20%;
    // }
  }

  @media (max-width: 1080px) {
    .left{
      max-width: 14rem;
    }
    .right{
      max-width: 14rem;
    }

  }
  @media (max-width: 920px) {
    .center{
      display: none !important;
    }
    .right{
      display: none !important;
    }
  }

}


</style>