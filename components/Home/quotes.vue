<template>
  <div class="container quotes-main">
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
        <div class="slide-card-frame pcc">
          <div class="slide-card">
            <div class="img-frame cover">
              <img :src="cImg(slide.image)" alt="">
            </div>
            <div class="content">
              <p><em>
                {{ useName(slide) }}
              </em></p>
              <ClientOnly>
                <EffectWords :text="useEndpoint(slide)"/>
              </ClientOnly>
            </div>
          </div>
        </div>
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
  `${api.Blocks}?categoryId=12&pageNumber=0&pageSize=100`
);
// sliders.value = [...data.value.items, ...data.value.items];
sliders.value = data.value.items;


</script>

<style lang="scss">
.quotes-main{
  margin-top: 4rem;
  margin-bottom: 4rem;
  height: 70lvh;
  background-color: black;
  .splide{
    height: 100%;
    background: black;
    padding-bottom: 1rem;
    .splide__track{
      height: 100%;
    }
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
      bottom: 0;
      .splide__pagination__page{
        width: 2px;
        border-radius: 0;
        &.is-active{
          background-color: #29abe2 !important;
        }
      }
    }
  }

  .word{
    font-size: 2rem;
    @media (max-width:1024px) {
      font-size: 1.5rem;
    }
  }
}
</style>

<style lang="scss" scoped>
.slide-card-frame{
  height: 100%;
  width: 100%;
  .slide-card{
  
    height: 10rem;
    max-width: 80%;
    display: flex;
    justify-content: center;

    .img-frame{
      width: 10rem;
      min-width: 10rem;
      height: 10rem;
      min-height: 10rem;
      // aspect-ratio: 1/1 !important;
      border-radius: 50%;
  
    }
    .content{
      padding-inline-start: 2rem;
      // padding-inline-end: 2rem;
      flex-grow: 1 ;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    @media (max-width:1024px) {
      flex-direction: column;
      align-items: flex-start;
      .img-frame{
        width: 6rem;
        min-width: 6rem;
        height: 6rem;
        min-height: 6rem;   
        margin-bottom: 1rem;
      }
      .content{
        padding-inline-start: 0;
        // padding-inline-end: 2rem;
        // flex-grow: 1 ;
        // display: flex;
        // flex-direction: column;
        // justify-content: center;
        // align-items: flex-start;
      }
    }
  }
}
</style>
