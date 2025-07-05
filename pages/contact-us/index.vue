<template>
   <div>    
    <!-- <ElementsHeaderImage 
      title="" 
      :imgUrl="`/page-headers/privacy-policy-header.jpg`"
      imgAlt="6060Store"
      contain
    /> -->
    <BasicPageDetails :item="dataResult"></BasicPageDetails>

    <iframe class="google-map" :src="dataResult.url1" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<script setup>

const { public: { api, apiBase } } = useRuntimeConfig();
const dataResult = ref([])
const isLoading = ref(true);
const showImageModal = ref(false);
const selectedPhoto = ref(null);
const { data: pageData } = await useGetSiteApi().GetAll(`${api.blocksApi}/9`);
dataResult.value = pageData.value

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
// .google-map{
//   filter: invert(1);
// }
</style>