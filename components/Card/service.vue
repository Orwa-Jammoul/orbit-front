<template>
  <nuxt-link class="service-card" :dir="rtl()" 
    :to="localePath(`/services/${useEndpoint(cardData)}`)" 
    >
    <!-- data-aos-duration="1000"
    :data-aos-delay="`${num*100}`"
    data-aos="slide-up"
    data-aos-once="true" -->
    <div class="gr-circle1"></div>
    <div class="service-card-frame">
      <div class="card-top">
        <div class="img-frame cover">
          <img :src="cImg(cardData.productImageUrl1)" 
            :alt="useName(cardData)"
          >
        </div>
      </div>
      <div class="card-bottom">
        <h5 class="card-title">
          {{ useName(cardData) }}
        </h5>
        <!-- <p class="card-cat">{{ useTr(cardData.productParentCategoryNameEn, cardData.productParentCategoryNameAr, cardData.productParentCategoryNameGe) }}</p> -->
        <p class="card-cat">{{ useName(cardData.productDefaultCategory) }}</p>
      </div>
      <div class="buttons pcc">
        <button class="details-btn">{{ $t('details') }}</button>
      </div>

    </div>
  </nuxt-link>
</template>

<script setup>
const { public: {api, apiBase} } = useRuntimeConfig();
const {cardData, num} = defineProps(["cardData", "num"])
// console.log(cardData);
const localePath = useLocalePath()
</script>

<style lang="scss" scoped>
@use"~/assets/styles/scss/theme/theme" as *;
.service-card{
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  // color: black;
  padding: 10px;
  border-radius: 15px;
  overflow: hidden;
  // transition: all 300ms ease-in-out !important;
  .service-card-frame{
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    // padding: 5px;
    // box-shadow: -3px -3px 6px 0px rgba(255, 255, 255, .3),
    //             3px 3px 6px 0px rgba(0, 0, 0, 0.3);
    
    // background-color: white;
    // border: solid 1px white;
    // height: 100%;
    .card-top{
      position: relative;
      display: flex;
      justify-content: space-around;
      z-index: 1;
      width: 100%;
      // height: 15rem;
      aspect-ratio: 1;
      // .img-frame{
      //   img{
      //     transition: all 300ms ease-in-out;
      //     filter: saturate(0);
      //   }
      // }


    }
    .card-bottom{
      z-index: 2;
      width: 100%;
      // aspect-ratio: 2/.8;
      padding: 1rem;
      padding-bottom: 0;
      .card-title{
        width: 100%;
        // color: black;
        color: white;
        font-weight: 700;
        overflow: hidden;
        text-wrap: nowrap;
        text-overflow: ellipsis;
        line-height: 2rem;
        height: 2rem;
      }
      .card-cat{
        color: rgb(218, 218, 218);
        margin-bottom: 0;
      }
    }
    .buttons{
      width: 100%;
      aspect-ratio: 2/.2;
      padding: 1rem;
      .details-btn{
        flex: 1;
        color: white;
        background-color: $primary1;
        padding: 5px 1rem;
        border-radius: 5px;
        // margin-inline-end: 1rem;
      }
      .Enquire-btn{
        flex: 1;
        color: black;
        border: solid 1px $primary1;
        padding: 5px 1rem;
        border-radius: 5px;
      }
    }
  }

  // &:hover{
  //   // box-shadow: 5px 5px 10px rgba(0, 0, 0, .3);
  //   // transform: translateY(-5px);
  //   .img-frame{
  //     img{
  //       // transform: all 300ms ease-in-out;
  //       filter: saturate(1) !important;
  //     }
  //   }
  // }
}
</style>