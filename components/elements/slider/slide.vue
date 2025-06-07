<template>
  <div class="main-slide">
    <div  class="img-frame contain" dir="auto">
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
  </div>
</template>

<script setup>
const { public: {api, apiBase} } = useRuntimeConfig();
const {data} = defineProps(["data"])
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
@import "~/assets/styles/scss/theme/theme";
.main-slide{
  position: relative;
  height: 100%;
  width: 100%;

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
    .slider-info{
      display: flex;
      justify-content: center;
      align-items: flex-end;
      // padding-top: 8rem;
      z-index: 10;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      // padding: 0 3rem;
      .slider-info-frame{
        // position: relative;
        width: 100%;
        padding: 0 2rem;

      }
      .block-info{
        // display:inline-block;
        width: auto;
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.4);
        margin-bottom: 2rem;
        
        .slider-name,.slider-des{
          // background-color: rgba(0, 0, 0, 0.5);
          color: white;
          max-width: 70%;
          text-shadow: 0px 0px 4px #000000ff ;
  
        }
      }
      .location-name-frame{
        position: absolute;
        top: 9rem;
        left: auto;
        right: -2rem;
        &.rtl{
          left: -2rem;
          right: auto;
        }
        .location-name{
          // width: 50%;
          // width: auto;
          text-align: end;
          padding: 0 4rem;
          margin-bottom: 2rem;
          // border-bottom: solid 2px white;
          color: white;
          text-shadow: 0px 0px 4px #000000ff ;
        }
        @media (max-width: 920px) {
          top: 7rem;
        }
        @media (max-width: 425px) {
          top: 6rem;
        }
      }
      .sat-btn{
        width: auto;
        padding: 0 1rem;
        color: #000000;
        background-color: #eeeeee;
        min-width: 10rem;
        box-shadow: 0px 0px 8px 0px #000000aa ;
        // cursor: pointer;
        // max-width: 11rem;

      }

    }
    // &::after{
    //   content: '';
    //   position: absolute;
    //   width: 100%;
    //   height: 100%;
    //   top: 0;
    //   left: 0;
    //   background: linear-gradient(180deg, #000000aa,#00000000,#00000000);

    // }
    @media (max-width: 768px) {
      .slider-info{
        .slider-info-frame{
          padding: 0 1rem;
        }
        .slider-name{
          font-size: max(4vw, 1.6rem);
        }
        .slider-des{
          font-size: max(2vw, .8rem);
          &.location-name{
            max-width: 100%;
            text-align: end;
            padding: 0;
            border: solid 2px black;
          }
        }
      }
    }
  }

}
</style>