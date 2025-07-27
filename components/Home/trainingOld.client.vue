<template>
  <div class="section-root" dir="auto">
    <div class="container" >
      <div class="row section-title" :class="rtl()">
        <h2 class="metal-text" >
          {{ $t("training") }}
        </h2>
        <!-- <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum molestias aspernatur labore inventore hic? Recusandae praesentium ex delectus odio?
        </p> -->
      </div>
      
      <div class="training-section row">
        <swiper-container
          v-if="!isLoading && trainings.length>0"
          ref="swiperRef"
          class="mySwiper"
          :dir="rtl()"
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
          <swiper-slide class=" pcc" v-for="(training, index) in trainings" :key="training.id">
            <CardCourse :cardData="training" :num="index"/>
          </swiper-slide>
        </swiper-container>
      </div>
      
      
      <!-- <div class="row pcc" data-aos-duration="1000"
      data-aos="fade-up">
        <nuxt-link class="main-btn" :to="`/trainings`">
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
const swiperRef = ref(null)

const { public: {api, apiBase} } = useRuntimeConfig();
const trainings = ref([]);
const isLoading = ref(true);


// const { data:trainingsData } = await useGetSiteApi().GetAll(
//   `${api.blocksApi}/GetMaster?categoryId=5&pageNumber=0&pageSize=12`
// );

watchEffect(async ()=>{
  const { data:trainingsData, pending } = await useGetSiteApi().GetAll(
    `${api.coursesApi}/GetAllPagedSearchCourse?Coursename=&propductcategoryid=0&propductSubcategoryid=0&propductSubSubcategoryid=0&propductSubSubSubcategoryid=0&fromprice=0&toprice=0&pageNumber=0&pageSize=12`
  );
  if(trainingsData.value){
    trainings.value = trainingsData.value.data
    isLoading.value = false
  }
})

onMounted(() => {
  // console.log(swiperRef.value);
  // console.log(swiperRef.value.shadowRoot);
  if (swiperRef.value?.shadowRoot) {
    const style = document.createElement('style');
    style.textContent = `
      .swiper{
        padding-bottom: 1rem !important;
      }
    `;
    swiperRef.value.shadowRoot.appendChild(style);
  }
})

</script>


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
  
  .mySwiper {
    --swiper-pagination-bottom: 0;
    --swiper-pagination-color: red;
    --swiper-pagination-bullet-inactive-color: red;
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;

  }

}
</style>