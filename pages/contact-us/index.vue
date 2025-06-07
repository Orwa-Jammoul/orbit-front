<template>
   <div v-if="!isLoading">    
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
.google-map{
  filter: invert(1);
}
</style>