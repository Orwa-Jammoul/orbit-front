<template>
  <div class="container">
    <div class="row section-title" :class="rtl()">
      <h2 class="metal-text mb-5" >
        {{ $t("how-do-we-work") }}
      </h2>
      <!-- <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum molestias aspernatur labore inventore hic? Recusandae praesentium ex delectus odio?
      </p> -->
    </div>
    <Splide 
      v-if="steps && steps.length > 0"
      class="splide-work"
      :options="splideOption"
    >
  
      <SplideSlide
        class="pcc"
        data-splide-interval="10000"
        v-for="(step, index) in steps"
        :key="step.id"
      >
        <CardWorkStep :cardData="step" :num="index" />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup>
import { CardWorkStep } from '#components';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
  // import '@splidejs/vue-splide/css/core';
  import '@splidejs/vue-splide/css/skyblue';
  // import '@splidejs/vue-splide/css/sea-green';

  const splideOption = {
    // type    : 'loop',
    autoplay: 'playing', // playing // pause
    perPage: 4,
    gap   : '1rem',
    rewind: false,
    direction: rtl(),
    breakpoints: {
      1024: {
        perPage: 3,
      },
      992: {
        perPage: 2,
      },
      550: {
        perPage: 1,
        gap: '0.5rem',
      }
    }
  }

const {
  public: { api, apiBase },
} = useRuntimeConfig();
const steps = ref(null);

const { data: stepsData } = await useGetSiteApi().GetAll(
  `${api.Blocks}?categoryId=13&pageNumber=0&pageSize=100`
);
steps.value = stepsData.value.items

</script>
<style lang="scss">
.container{
  background-color: black;
  .splide-work{
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
          fill: red;
        }
      }
    }
    .splide__pagination{
      // display: none;
      bottom: -2rem !important;
      
      .splide__pagination__page{
        width: 3px;
        height: 3px;
        &.is-active{
          background-color: red !important;
        }
      }
    }
  }
}
</style>