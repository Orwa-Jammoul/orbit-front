<template>
  <Swiper
    class="mainheaderslider"
    :modules="[SwiperAutoplay,SwiperEffectFade, SwiperPagination]"
    :slides-per-view="1"
    :loop="true"
    :lazy="true"
    :pagination="{ clickable: true }"
    :effect="'fade'"
    :autoplay="{
      delay: 6000,
      disableOnInteraction: false,
    }"
    :fadeEffect="{
      crossFade: true
    }"
  >
    <SwiperSlide class="item-slide" v-for="item in sliders" :key="item.id">
      <ElementsSliderSlide :data="item" />
    </SwiperSlide>

  </Swiper>
</template>

<script setup>
const {sliders, flipH} = defineProps(["sliders", "flipH"])
// console.log(sliders);
 // Import Swiper styles
 import 'swiper/css';

import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

</script>

<style lang="scss" scoped>
  @use "~/assets/styles/scss/theme/theme";
  .mainheaderslider{
    // height: 100vh !important;
    // height: calc(100vh - 11rem) !important;
    height: calc(100vh - 6rem);
    // aspect-ratio: 2.5/1;
    // height: 50vw;
    // max-height: 50vw;
    // min-height: 25rem;
    // max-height: 600px;
    // @media (max-width: 768px) {
    //   max-height: 70vh;
    // }
  }
</style>
