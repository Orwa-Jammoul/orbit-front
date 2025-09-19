<template>
  <div class="container">
    <div class="row section-title" :class="rtl()">
      <h2 class="metal-text mb-5" >
        {{ $t("services") }}
      </h2>
      <!-- <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum molestias aspernatur labore inventore hic? Recusandae praesentium ex delectus odio?
      </p> -->
    </div>
    <Splide 
      v-if="services && services.length > 0"
      class="splide"
      :options="splideOption"
    >
  
      <SplideSlide
        class="pcc"
        data-splide-interval="10000"
        v-for="(service, index) in services"
        :key="service.id"
      >
        <CardService :cardData="service" :num="index" />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  // import '@splidejs/vue-splide/css/core';
  import '@splidejs/vue-splide/css/skyblue';
  // import '@splidejs/vue-splide/css/sea-green';

  const splideOption = {
    // type    : 'loop',
    autoplay: 'playing', // playing // pause
    perPage: 3,
    gap   : '2rem',
    rewind: false,
    direction: rtl(),
    breakpoints: {
      1024: {
        perPage: 2,
      },
      768: {
        perPage: 1,
      },
      480: {
        perPage: 1,
        gap: '0.5rem',
      }
    }
  }

  
const {
  public: { api, apiBase },
} = useRuntimeConfig();
const services = ref(null);


const { data: servicesData, pending } = await useGetSiteApi().GetAll(
  `${api.productsSearchApi}?pageNumber=0&pageSize=12`
);
if(servicesData.value){
  services.value = servicesData.value.data;
}

</script>
<style lang="scss">
.container{
  background-color: black;
  .splide{
    background: black;
    padding-bottom: 1rem;
    .splide__arrows{
      .splide__arrow{
        width: 1.5rem;
        height: 1.5rem;
        // background-color: white;
        &.splide__arrow--prev{
          border-radius: 50%;
          inset-inline-start: -2rem;
        }
        &.splide__arrow--next{
          border-radius: 50%;
          inset-inline-end: -2rem;
        }
        svg{
          fill: $primary;
        }
      }
    }
    .splide__pagination{
      bottom: 0;
      .splide__pagination__page{
        width: 2px;
        border-radius: 0;
        &.is-active{
          background-color: $primary !important;
        }
      }
    }
  }
}
</style>