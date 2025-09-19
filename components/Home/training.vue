<template>
  <div class="container">
    <div class="row section-title" :class="rtl()">
      <h2 class="metal-text  mb-5" >
        {{ $t("training") }}
      </h2>
      <!-- <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum molestias aspernatur labore inventore hic? Recusandae praesentium ex delectus odio?
      </p> -->
    </div>
    <Splide 
      v-if="trainings && trainings.length > 0"
      class="splide"
      :options="splideOption"
    >
  
      <SplideSlide
        class="pcc"
        data-splide-interval="10000"
        v-for="(training, index) in trainings"
        :key="training.id"
      >
        <CardCourse :cardData="training" :num="index" />
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
const trainings = ref(null);

const { data:trainingsData, pending } = await useGetSiteApi().GetAll(
  `${api.coursesApi}/GetAllPagedSearchCourse?Coursename=&propductcategoryid=0&propductSubcategoryid=0&propductSubSubcategoryid=0&propductSubSubSubcategoryid=0&fromprice=0&toprice=0&pageNumber=0&pageSize=12`
);
if(trainingsData.value){
  trainings.value = trainingsData.value.data
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