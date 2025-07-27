<template>
  <div class="section-root" dir="auto">
    <div class="container" >
      <div class="row section-title" :class="rtl()">
        <h2 class="metal-text" >
          {{ $t("services") }}
        </h2>
        <!-- <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum molestias aspernatur labore inventore hic? Recusandae praesentium ex delectus odio?
        </p> -->
      </div>

      <div class="services-section row px-3">
        
        <v-slide-group
          v-model="model"
          class="services-swiper"
          show-arrows
          
        >
          <v-slide-group-item
            v-for="(service, index) in services.data"
            class="swiper-item"
            :key="index"
          >
            <CardService :cardData="service" :num="index"/>
          </v-slide-group-item>
        </v-slide-group>
      </div>
    </div>
  </div>
</template>

<script setup>

const { public: {api, apiBase} } = useRuntimeConfig();
const model = ref(null);
// const isLoading = ref(true);


const { data:services } = await useGetSiteApi().GetAll(
  `${api.productsSearchApi}?pageNumber=1&pageSize=12`
);


</script>

<style lang="scss">
.services-section{
  .services-swiper{
    .v-slide-group__prev, .v-slide-group__next{
      color: white !important;
      z-index: 100;
      .v-icon{
        color: white !important;
      }
    }
    .v-slide-group__container{
      // width: 10rem;
      height: 20rem;
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

  .services-section{
    .services-swiper{
      .swiper-item{
        width: 10rem;
        height: 10rem;
      }
    }
  }
}
</style>
