<template>
  <div class="main-slide">
    <div  class="img-frame contain" :class="rtl()" dir="auto">
      <img  :src="`${apiBase}/${data.image}`" loading="lazy" :alt="`slide-img`">
      <!-- <div class="slider-info">
        <div v-if="data.isVisible" class="slider-info-frame d-flex">
          <div class="block-info">
            <h1 class="slider-name noselect mb-5">{{  useName(data) }}</h1>
            <div class="slider-des noselect" v-html=" useDes(data) "></div>
          </div>
          <div class="location-name-frame pce" :class="rtl()">
            <div class="location-name noselect" v-html=" useDes1(data) "></div>
          </div>
        </div>
      </div> -->
    </div>
    <div class="rect"></div>
    <div class="content">
      <div class="slider-title metal-text">
        {{useName(data)}}
      </div>
      <div class="slider-des" v-html="useDes(data)"></div>
      <nuxt-link class="main-btn" :to="localePath('services')">{{ $t('get-started') }}</nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { public: {api, apiBase} } = useRuntimeConfig();
const {data} = defineProps(["data"])
const localePath = useLocalePath()
// console.log(data);

</script>

<style lang="scss">
// .slider-des{
//   display: flex;
//   p{
    // padding: 10px;
    // background-color: rgba(0, 0, 0, 0.5);
    // margin-bottom: 4rem ;
    // border-bottom: solid 2px rgba(0, 0, 0, 0.5);
//   }
// }
.location-name-frame{
  .location-name{
    p{
      background-color: rgba(0, 0, 0, 0.4);
      padding: 10px;
      // border-bottom: solid 2px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>

<style lang="scss" scoped>
@use"~/assets/styles/scss/theme/theme" as *;
.main-slide{
  position: relative;
  height: 100%;
  width: 100%;
  background-color: black;

  .img-frame{
    position: relative;
    height: 100%;
    width: 100%;
    box-shadow: inset 2px 2px 2px 2px rgba($color: #000000, $alpha: 1.0);
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      // filter: saturate(0);
    }
    &.ltr{
      img{
        transform: scaleX(-1);
      }
    }
    // @media (max-width: 768px) {
    //   .slider-info{
    //     .slider-info-frame{
    //       padding: 0 1rem;
    //     }
    //     .slider-name{
    //       font-size: max(4vw, 1.6rem);
    //     }
    //     .slider-des{
    //       font-size: max(2vw, .8rem);
    //       &.location-name{
    //         max-width: 100%;
    //         text-align: end;
    //         padding: 0;
    //         border: solid 2px black;
    //       }
    //     }
    //   }
    // }
  }
  .rect{
    position: absolute;
    inset-inline-start: 60%;
    top: 0;
    bottom: 0;
    width: 15rem;
    background: linear-gradient(rgba(255, 255, 255, 0.1), transparent);
    // opacity: .08;
    opacity: 1;
    z-index: 4;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    transition: all 500ms ease-in-out;
  }
  .content{
    position: absolute;
    inset-inline-start: 60%;
    top: 0;
    bottom: 0;
    inset-inline-end: 0;

    padding-inline-start: 1rem;
    padding-inline-end: 4rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: white;
    z-index: 6;
    // direction: rtl;
    .slider-title{
      // direction: rtl !important;
      font-weight: 700;
      font-size: 4rem;
      // letter-spacing: 5px;
      line-height: 4rem;
      margin-bottom: 1rem;
      // text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.3);
    }
    .slider-des{
      font-size: .8rem;
      // line-height: 2rem;
      color: rgb(200, 200, 200);
    }
    .main-btn{
      margin: 0;
      margin-top: 2rem;
    }
  }
  @media (max-width: 1024px) {
    .content{
      .slider-title{
        font-size: 3rem;
        line-height: 3rem;
      }
    }
  }
  @media (max-width: 768px) {
    .rect{
      inset-inline-start: 0;
      top: 50%;
      width: 100%;
    }
    .content{
      inset-inline-start: 0;
      justify-content: flex-end;
      padding-inline-start: 4rem;
      padding-inline-end: 4rem;
      .slider-title{
        font-size: 3rem;
        line-height: 3rem;
      }
      .main-btn{
        margin: .5rem 0;
      }
    }
  }

}
</style>