<template>
  <div >
    <div class="container pt-5" dir="auto">
      <div class="row path-links text-start pt-4">
        <h5 class="links-frame" dir="auto" >
          <nuxt-link class="path-link" :to="localePath('/')">{{ $t("Home") }}</nuxt-link>
          /
          <span class="path-link">{{ $t('services') }}</span>
        </h5>
      </div>
      <div class="mb-10 px-0 " :class="rtl()" dir="auto">
        <h1 class="metal-text">
          <span >{{ $t('services') }}</span>
        </h1>
      </div>
    </div>
    <div class="container pb-5" :dir="rtl()">
      <div v-if="services && services.length > 0" class="row">
        <div class="col-12 col-lg-4 col-md-6" v-for="service in services" :key="service.id">
          <CardService :cardData="service" :num="0"/>
        </div>
      </div>
      <!-- <div class="loading" v-else>
        <icon name="svg-spinners:6-dots-rotate" size="25px"/>
      </div> -->
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath()
const { public: {api, apiBase} } = useRuntimeConfig();

const { t } = useI18n()
const services = ref([]);
const isLoading = ref(true);

//?productname=&propductcategoryid=0&propductSubcategoryid=0&propductSubSubcategoryid=0&propductSubSubSubcategoryid=0&fromprice=0&toprice=0&pageNumber=1&pageSize=100&searchString=&orderBy=
const { data:servicesData } = await useGetSiteApi().GetAll(
  `${api.productsSearchApi}?pageNumber=0&pageSize=100`
);
if(servicesData.value){
  services.value = servicesData.value.data
}


useSeoMeta({
  // Basic SEO
  title: t('services'),
  description: t('services'),
  keywords: useI18n().t('services'),

  ogType: t('ogType'),
  ogLocale: t('ogLocale'),
  ogSiteName: t('ogSiteName'),
  robots: 'index, follow',
  author: t('ogSiteName'),
  canonical: 'https://orbit-eng.net'+ useRoute().fullPath,
})
// useHead({
//   title: t('services')
// })


// useSeoMeta({
//   title: t('page.title'),
//   ogTitle: t('page.title'),
//   description: t('page.description'),
//   ogDescription: t('page.description'),
//   ogImage: 'https://yourdomain.com/image.png',
//   twitterCard: 'summary_large_image',
// })

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

</style>