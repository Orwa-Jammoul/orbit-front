<template>
  <nuxt-link class="service-card" :dir="rtl()" 
    :to="localePath(`/services/${useEndpoint(cardData)}`)" 
    >
    <!-- data-aos-duration="1000"
    :data-aos-delay="`${100}`"
    data-aos="slide-up"
    data-aos-once="true" -->
    <div class="gr-circle1"></div>
    <div class="service-card-frame">
      <div class="card-left">
        <div class="img-frame cover">
          <img :src="cImg(cardData.productImageUrl1)" 
            :alt="useName(cardData)"
          >
        </div>
      </div>
      <div class="card-right">
        <h5 class="card-title">
          {{ useName(cardData) }}
        </h5>
        <p class="card-des">{{ useName(cardData.productDefaultCategory) }}</p>
        <!-- <p class="card-des">{{ getInnerText(useDes1(cardData)) }}</p> -->
        <div class="buttons">
          <button class="details-btn">{{ $t('details') }}</button>
        </div>
      </div>

    </div>
  </nuxt-link>
</template>

<script setup>
const { public: {api, apiBase} } = useRuntimeConfig();
const {cardData} = defineProps(["cardData"])
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
    .card-left{
      position: relative;
      display: flex;
      justify-content: space-around;
      z-index: 1;
      width: 30%;
      // height: 15rem;
      aspect-ratio: 1;



    }
    .card-right{
      z-index: 2;
      width: 70%;
      // aspect-ratio: 2/.8;
      padding: 0 1rem;
      .card-title{
        margin: 0;
        width: 100%;
        // color: black;
        color: white;
        font-weight: 700;
        overflow: hidden;
        text-wrap: nowrap;
        text-overflow: ellipsis;
        line-height: 2rem;
      }
      .card-des{
        margin: 0;
        margin-bottom: .5rem;
        font-size: 12px;
        width: 100%;
        color: rgb(186, 186, 186);
        font-weight: 700;
        overflow: hidden;
        text-wrap: nowrap;
        text-overflow: ellipsis;
        line-height: 1rem;
      }
      .buttons{
        width: 100%;
        .details-btn{

          color: white;
          background-color: $primary1;
          padding: 5px 1rem;
          border-radius: 5px;
          // margin-inline-end: 1rem;
        }
      }
    }
  }

  // &:hover{
  //   box-shadow: 5px 5px 10px rgba(0, 0, 0, .3);
  //   transform: translateY(-5px);
  // }
  // .bg-gr{
  //   po
  // }
}
</style>