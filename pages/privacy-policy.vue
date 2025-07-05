<template>
   <div v-if="!pending">    
    <!-- <ElementsHeaderImage 
      title="" 
      :imgUrl="`/page-headers/privacy-policy-header.jpg`"
      imgAlt="6060Store"
      contain
    /> -->
    <BasicPageDetails :item="dataResult"></BasicPageDetails>

  </div>
</template>

<script setup>
const { public: { api, apiBase } } = useRuntimeConfig();
// const dataResult = ref([])
const isLoading = ref(true)
const showImageModal = ref(false);
const selectedPhoto = ref(null);

const { data: dataResult, pending } = await useGetSiteApi().GetAll(`${api.PagesApi}/1`);
isLoading.value = false
// watchEffect(() => {
//   if (process.client) {
//     if (honorData.value) {
//       dataResult.value = honorData.value
//     }
//   }
// })

useSeoMeta({
  // Basic SEO
  title: useName(dataResult.value),
  description: useName(dataResult.value),
  keywords: useName(dataResult.value),

  ogType: useI18n().t('ogType'),
  ogLocale: useI18n().t('ogLocale'),
  ogSiteName: useI18n().t('ogSiteName'),
  robots: 'index, follow',
  author: useI18n().t('ogSiteName'),
  canonical: 'https://orbit-eng.net'+ useRoute().fullPath,
})


</script>

<style lang="scss" scoped>

</style>