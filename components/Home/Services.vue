<template>
  <div class="section-root" dir="auto">
    <div class="container" >
      <div class="row section-title" :class="rtl()">
        <h2 class="metal-text" >
          {{ $t("services") }}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum molestias aspernatur labore inventore hic? Recusandae praesentium ex delectus odio?
        </p>
      </div>

      <div class="services-section row px-3">
        <swiper-container
          class="mySwiper"
          :dir="rtl()"
          :navigation="false"
          :space-between="40"
          :autoplay="{ delay: 15000 }"
          :pagination="{ clickable: true }"
          :loop="false"
          :breakpoints="{
            '1':{
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            '550':{
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            '768':{
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            '1024': {
              slidesPerView: 3,
              slidesPerGroup: 3
            },
          }"
        >
          <swiper-slide class=" pcc" v-for="(service, index) in services.data" :key="service.id">
            <CardService :cardData="service" :num="index"/>
          </swiper-slide>
        </swiper-container>
      </div>
      
      
      <!-- <div class="row pcc" data-aos-duration="1000"
      data-aos="fade-up">
        <nuxt-link class="main-btn" :to="`/services`">
          {{ t("show-all",0,0,1) }}
        </nuxt-link>
      </div> -->


    </div>
  </div>
</template>

<script setup>
import 'swiper/css';

import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const { public: {api, apiBase} } = useRuntimeConfig();
// const services = ref([]);
// const isLoading = ref(true);


const { data:services } = await useGetSiteApi().GetAll(
  `${api.productsSearchApi}?pageNumber=1&pageSize=12`
);


// watchEffect(()=> {
//   if(process.client) {
//     if(servicesData.value) {
//       services.value = servicesData.value.data
//       // console.log(services.value);
//       // services.value = [...services.value, ...services.value]
//       // services.value = [...services.value, ...services.value]
//       isLoading.value = false
//     }
//   }
// })
</script>

<style lang="scss">
.services-section{
  .mySwiper{
    padding-bottom: 2rem;
    // margin-top: 2rem;
    // overflow-y: visible !important;
    // // overflow-x: visible !important;
    // padding-left: 3rem;
    // padding-right: 3rem;
    // .swiper-button-prev,.swiper-button-next{
    //   color: #DB252C;
    // }
    // .swiper-slide{
    //   height: 20rem !important;
    // }

    .swiper-pagination{
      // width: 10rem !important;
      // background-color: #DB252C ; 
      // background-color: black !important;
      // top: 100%;
      .swiper-pagination-bullet{
        background-color: #DB252C ; 
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@use"~/assets/styles/scss/theme/theme" as *;

.section-root{
  position: relative;
  // height: calc( 100vh - 5rem) ;
  padding-top: 3rem;
  background-color: black;
  color: white;
  // background: linear-gradient(45deg, hsl(0, 0%, 20%), $primary4);

  .cards-frame{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;

  }
  
  .mySwiper{
    margin-top: 2rem;
    // height: calc(2 * 20rem + 4rem);
    // height: calc(19rem * 4 + (3*40px));
    .swiper-slide{
      padding: 1rem 0;
      // height: 20rem !important;
      // height: calc((100% - 90px) / 4) !important;
      .card-item-out{
        margin: 0;
      }
    }
    // @media (max-width:992px) {
    //   // height: calc(2 * 15rem + 4rem);
    //   .swiper-slide{
    //     height: 15rem !important;
    //   }
    // }
  }

}
</style>