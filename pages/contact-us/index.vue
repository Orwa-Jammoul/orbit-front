<template>
  <div class="page-root" dir="auto">    
    <div class="globe-frame pcc">
      <HomeGlobe/>
    </div>
    <div class="container" >
      <div class="main-location">
        <!-- <h1 class="base-title metal-text">
          {{ useName(dataResult) }}
        </h1> -->
        <div class="base-des" v-html="useDes(dataResult)"></div>
      </div>
      <div class="stepper" >
        <div class="part" v-for="part, index in points" :key="index">
          <div class="vertical"></div>
          <div class="left-card" :class="{'pcs': index%2==0, 'pce': index%2!=0}">
            <CardContactPoint :cardData="part" :num="index+1"/>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="cities">
      <div class="city city1">Salameih</div>
    </div> -->
    <!-- <BasicPageDetails :item="dataResult"></BasicPageDetails> -->

    
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3267.832774118408!2d37.052578!3d35.010890999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDAwJzM5LjIiTiAzN8KwMDMnMDkuMyJF!5e0!3m2!1sen!2s!4v1755799021267!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<script setup>

// definePageMeta({
//   layout: 'home' 
// });

const localePath = useLocalePath()

const { public: { api, apiBase } } = useRuntimeConfig();
const dataResult = ref([])
const points = ref([])
const isLoading = ref(true);
const showImageModal = ref(false);
const selectedPhoto = ref(null);
const { data: pageData } = await useGetSiteApi().GetAll(`${api.blocksApi}/9`);
dataResult.value = pageData.value
const { data: pointsData } = await useGetSiteApi().GetAll(`${api.blocksApi}/GetMaster?categoryId=11`);
points.value = pointsData.value.items

// watchEffect(() => {
//   if (process.client) {
//     if (pageData.value) {
//       isLoading.value = false
//     }
//   }
// })



useSeoMeta({
  // Basic SEO
  title: useI18n().t('contact-us'),
  description: useI18n().t('contact-us'),
  keywords: useI18n().t('contact-us'),

  ogType: useI18n().t('ogType'),
  ogLocale: useI18n().t('ogLocale'),
  ogSiteName: useI18n().t('ogSiteName'),
  robots: 'index, follow',
  author: useI18n().t('ogSiteName'),
  canonical: 'https://orbit-eng.net'+ useRoute().fullPath,
})



</script>

<style lang="scss" scoped>
.page-root{
  position: relative;
  .globe-frame{
    height: 100%;
    width: 100%;
  }
  .main-location{
    padding: 1rem;
    border-radius: .5rem;
    // background-color: rgba(255, 255, 255, 0.1);
    .base-title{
      text-align: center;
      font-size: 1.7rem;
    }
    .base-des{
      text-align: center;

    }
  }
  .stepper{
    // height: 10rem;
    padding-bottom: 4rem;
    .vertical{
      position: relative;
      height: 5rem;
      &::after{
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        height: 5rem;
        width: 1px;
        border-left: solid 1px rgba(255, 255, 255, 0.5) ;
      }
    }
  }
  // .cities{
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   width: 100%;
  //   height: 100%;
  //   .city{
  //     width: 10rem;
  //     height: 10rem;
  //     // background-color: white;
  //     // color: black;
  //   }
  // }
}
// .google-map{
//   filter: invert(1);
// }
</style>