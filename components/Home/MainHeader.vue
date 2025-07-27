<template>
  <div class="header-main">
    <Splide
      v-if="sliders && sliders.length > 0"
      class="splide"
      :options="splideOption"
    >
      <SplideSlide
        class="item-slide"
        data-splide-interval="10000"
        v-for="slide in sliders"
        :key="slide.id"
      >
        <ElementsSliderSlide :data="slide"/>
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
    type    : 'loop',
    autoplay: 'playing', // playing // pause
    perPage: 1,
    // gap   : '2rem',
    rewind: true,
    direction: rtl(),
  }

  
const { public: { api, apiBase },} = useRuntimeConfig();
const sliders = ref([]);
const { data } = await useGetSiteApi().GetAll(
  `${api.Blocks}?categoryId=2&pageNumber=0&pageSize=100`
);
// sliders.value = [...data.value.items, ...data.value.items];
sliders.value = data.value.items;


</script>

<style lang="scss">
.header-main{
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
          fill: red;
        }
      }
    }
    .splide__pagination{
      bottom: 4rem;
      .splide__pagination__page{
        width: 2px;
        border-radius: 0;
        &.is-active{
          background-color: #29abe2 !important;
        }
      }
    }
  }
}
</style>
