<template>
   <div v-if="!isLoading">    
    <!-- <ElementsHeaderImage 
      title="" 
      :imgUrl="`/page-headers/privacy-policy-header.jpg`"
      imgAlt="6060Store"
      contain
    /> -->
    <BasicPageDetails :item="terms"></BasicPageDetails>
  </div>
</template>

<script setup>

const { public: {api, apiBase} } = useRuntimeConfig();
const terms = ref(null);
const isLoading = ref(true);


const { data:termsData } = await useGetSiteApi().GetAll(
  `${api.PagesApi}/2`
);
watchEffect(()=> {
  if(process.client) {
    if(termsData.value) {
      terms.value = termsData.value
      isLoading.value= false;
      // console.log(aboutUs.value);
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
