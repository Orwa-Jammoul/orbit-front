<template>
  <div class="page-root">
    <div class="container">
      <div class="row path-links text-start pt-4">
        <h5 class="links-frame" dir="auto" >
          <nuxt-link class="path-link" :to="localePath('/')">{{ $t("Home") }}</nuxt-link>
          /
          <span class="path-link">{{ $t('training') }}</span>
        </h5>
      </div>
      <div class="mb-10 px-0 " :class="rtl()" dir="auto">
        <h1 class="metal-text">
          <span >{{ $t('training') }}</span>
        </h1>
      </div>
    </div>
    <!-- <h1>{{$t('training')}}</h1> -->
    <div class="container" :dir="rtl()">
      <div v-if="trainings && trainings.length > 0" class="row">
        <div class="col-12 col-lg-4 col-md-6" v-for="training in trainings" :key="training.id">
          <CardCourse :cardData="training" :num="0"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const { public: {api, apiBase} } = useRuntimeConfig();
const trainings = ref([]);
// const isLoading = ref(true);
const { t } = useI18n()
const localePath = useLocalePath()
const { data:trainingsData } = await useGetSiteApi().GetAll(
  `${api.coursesApi}/GetAllPagedSearchCourse?Coursename=&propductcategoryid=0&propductSubcategoryid=0&propductSubSubcategoryid=0&propductSubSubSubcategoryid=0&fromprice=0&toprice=0&pageNumber=0&pageSize=12`
);

if(trainingsData.value){
  trainings.value = trainingsData.value.data
}

useSeoMeta({
  // Basic SEO
  title: t('training'),
  description: t('training'),
  keywords: useI18n().t('training'),

  ogType: t('ogType'),
  ogLocale: t('ogLocale'),
  ogSiteName: t('ogSiteName'),
  robots: 'index, follow',
  author: t('ogSiteName'),
  canonical: 'https://orbit-eng.net'+ useRoute().fullPath,
})
// watchEffect(()=> {
//   if(process.client) {
//     if(servicesData.value) {
//       // console.log(services.value);
//       // services.value = [...services.value, ...services.value]
//       // services.value = [...services.value, ...services.value]
//       isLoading.value = false
//     }
//   }
// })
</script>

<style lang="scss" scoped>
.page-root{
  padding-top: 1.5rem;
  padding-bottom: 4rem;
}
</style>