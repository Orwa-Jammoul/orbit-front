<template>
   <div v-if="!isLoading">
    <HomeHeaderDesign1/>    
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
const dataResult = ref([])
const isLoading = ref(true)
const showImageModal = ref(false);
const selectedPhoto = ref(null);
const { data: pageData } = await useGetSiteApi().GetAll(`${api.blocksApi}/7`);

watchEffect(() => {
  if (process.client) {
    if (pageData.value) {
      dataResult.value = pageData.value
      isLoading.value = false
    }
  }
})




</script>

<style lang="scss" scoped>

</style>