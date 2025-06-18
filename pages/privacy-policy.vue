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
})


</script>

<style lang="scss" scoped>

</style>