<template>
  <div class="slider-root mt-5">
    <div class="container mb-5">
      <div class="row section-title" :class="rtl()">
        <h2 class="metal-text" >
          {{ $t("our-partners") }}
        </h2>
        <!-- <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum molestias aspernatur labore inventore hic? Recusandae praesentium ex delectus odio?
        </p> -->
      </div>
    </div>
    <Splide 
      v-if="ourPartners && ourPartners.length > 0"
      class="splide"
      :options="splideOption"
      :extensions="extensions"
    >
  
      <SplideSlide
        class="pcc"
        data-splide-interval="10000"
        v-for="(partner, index) in ourPartners"
        :key="partner.id"
      >
        <div class="partner-card pcc">
          <h1 class="card-title">
            {{ useName(partner) }}
          </h1>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';
  // import '@splidejs/vue-splide/css/core';
  import '@splidejs/vue-splide/css/skyblue';
  // import '@splidejs/vue-splide/css/sea-green';

  const splideOption = {
    gap   : '2rem',
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 3,
    autoScroll: {
      speed: 1,
    },
  }
  const extensions = { AutoScroll };

const {
  public: { api, apiBase },
} = useRuntimeConfig();
const ourPartners = ref(null);


const { data: ourPartnersData, pending } = await useGetSiteApi().GetAll(
  `${api.blocksApi}/GetMaster?categoryId=10`
);
ourPartners.value = ourPartnersData.value.items;

</script>
<style lang="scss">
.slider-root{
  background-color: black;
  .splide{
    background: black;
    padding-bottom: 1rem;
    .splide__arrows{
      display: none;
      .splide__arrow{
        width: 1.5rem;
        height: 1.5rem;
        // background-color: white;
        &.splide__arrow--prev{
          border-radius: 50%;
          left: -2rem;
        }
        &.splide__arrow--next{
          border-radius: 50%;
          right: -2rem;
        }
        svg{
          fill: $primary;
        }
      }
    }
    .splide__pagination{
      display: none;
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

<style lang="scss" scoped>
.partner-card{
  width: 100%;
  height: 15rem;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  .card-title{
    font-weight: 200;
    font-size: 1.2rem;
    margin-bottom: 0;
  }
}
</style>