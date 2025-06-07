<template>
  <div class="header-main">
    <Swiper
      class="mainheaderslider"
      :modules="[SwiperAutoplay,SwiperEffectFade, SwiperPagination]"
      :slides-per-view="1"
      :loop="true"
      :lazy="true"
      :pagination="{ clickable: true }"
      :effect="'fade'"
      :autoplay="{
        delay: 20000,
        disableOnInteraction: false,
      }"
      :fadeEffect="{
        crossFade: true
      }"
    >
      <!-- <SwiperSlide class="item-slide">
        <HomeHeaderDesign1/>
      </SwiperSlide> -->
      <SwiperSlide class="item-slide">
        <HomeHeaderDesign2/>
      </SwiperSlide>
      <!-- <SwiperSlide class="item-slide" v-for="slide in sliders" :key="slide.id">
        <ElementsSliderSlide :data="slide"/>
      </SwiperSlide> -->

    </Swiper>
  </div>

</template>

<script setup>

 import 'swiper/css';

import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const { public: {api, apiBase} } = useRuntimeConfig();
const sliders = ref([]);
const { data } = await useGetSiteApi().GetAll(
  `${api.Blocks}?categoryId=2&pageNumber=0&pageSize=100`
);


watchEffect(()=> {
  if(data.value ) {
    sliders.value = data.value.items;
    useHeader().value= data.value.blockPhotos;
  }
})

</script>

<style lang="scss" scoped>
.header-main{
  overflow: hidden;
  .mainheaderslider{
    height: 100svh;
    background-color: $primary4;
  }
}
</style>
