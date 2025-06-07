<template>
  <div >
    <!-- <h1>{{$t('services')}}</h1> -->
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-4 col-md-6" v-for="service in services" :key="service.id">
          <CardService :cardData="service" :num="0"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const { public: {api, apiBase} } = useRuntimeConfig();
const services = ref([]);
const isLoading = ref(true);


const { data:servicesData } = await useGetSiteApi().GetAll(
  `${api.blocksApi}/GetMaster?categoryId=4`
);


watchEffect(()=> {
  if(process.client) {
    if(servicesData.value) {
      services.value = servicesData.value.items
      // console.log(services.value);
      services.value = [...services.value, ...services.value]
      services.value = [...services.value, ...services.value]
      isLoading.value = false
    }
  }
})
</script>

<style lang="scss" scoped>

</style>