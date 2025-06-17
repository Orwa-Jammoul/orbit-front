<template>
  <div >
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
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-4 col-md-6" v-for="service in services" :key="service.id">
          <CardCourse :cardData="service" :num="0"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const { public: {api, apiBase} } = useRuntimeConfig();
const services = ref([]);
// const isLoading = ref(true);

const localePath = useLocalePath()
const { data:servicesData } = await useGetSiteApi().GetAll(
  `${api.blocksApi}/GetMaster?categoryId=5`
);
services.value = servicesData.value.items


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