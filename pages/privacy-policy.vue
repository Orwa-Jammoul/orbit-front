<template>
   <div v-if="!isLoading">    
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
const showImageModal = ref(false);
const selectedPhoto = ref(null);
const { data: honorData } = await useGetSiteApi().GetAll(`${api.PagesApi}/1`);

watchEffect(() => {
  if (process.client) {
    if (honorData.value) {
      dataResult.value = honorData.value
    }
  }
})




</script>

<style lang="scss" scoped>

</style>