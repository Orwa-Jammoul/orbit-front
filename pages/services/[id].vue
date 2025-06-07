<template>
  <div v-if="!isLoading">
    <div class="container">
      <div class="row path-links text-start pt-4">
        <h5 class="links-frame" dir="auto">
          <nuxt-link class="path-link" :to="localePath('/')">{{ $t("Home") }}</nuxt-link>
          /
          <nuxt-link class="path-link" :to="localePath(`/services`)">{{ $t('services') }}</nuxt-link>
          /
          <span class="path-link">{{ useName(dataResult) }}</span>
        </h5>
      </div>
    </div>
    <!-- <BasicBlockDetails :item="dataResult"/> -->
    <div class="container" dir="auto">
      <div class="mb-10 px-0 " :class="rtl()" dir="auto">
        <h1 class="metal-text">
          <span >{{ useName(dataResult) }}</span>
        </h1>
      </div>
      <div class="row description" >
        <div class="section">
          <div v-if="dataResult?.image" class="img-frame contain" :class="rtl()">
            <img :src="cImg(dataResult.image)" alt=" Photo">
          </div>
          <div v-html="useDes(dataResult)"></div>
        </div>
        <div class="section">
          <div v-if="dataResult?.image1" class="img-frame contain" :class="rtl()">
            <img :src="cImg(dataResult.image1)" alt=" Photo">
          </div>
          <div  v-html="useDes1(dataResult)"></div>
        </div>
        <div class="section">
          <div v-if="dataResult?.image2" class="img-frame contain" :class="rtl()">
            <img :src="cImg(dataResult.image2)" alt=" Photo">
          </div>
          <div  v-html="useDes2(dataResult)"></div>
        </div>
        <div class="section">
          <div v-if="dataResult?.image3" class="img-frame contain" :class="rtl()">
            <img :src="cImg(dataResult.image3)" alt=" Photo">
          </div>
          <div  v-html="useDes3(dataResult)"></div>
        </div>
      </div>
      <!-- <div class="row title-formatting" :class="rtl()">
        <h2 class="" >
          <span>
            {{ $t("more") }}
          </span>
        </h2>
      </div> -->
      <!-- <div v-if="similarNews && similarNews.length>0" class="row" data-aos-duration="1000"
      data-aos="fade-up">
        <Swiper
          class="mySwiper"
          :dir="rtl()"
          :modules="[SwiperAutoplay, SwiperPagination]"
          :space-between="40"
          :autoplay="{ delay: 15000 }"
          :pagination="{ clickable: true }"
          :loop="false"
          :breakpoints="{
            '1':{
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            '550':{
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            '768':{
              slidesPerView: 3,
              slidesPerGroup: 3
            },

            '992': {
              slidesPerView: 4,
              slidesPerGroup: 4
            },
          }"
        >
          <SwiperSlide class=" pcc" v-for="(news, index) in similarNews" :key="news.id">
            <CardNews  class="card-item-out" :index="index" :cardData="news"/>
          </SwiperSlide>
        </Swiper>
      </div> -->
    </div>
  </div>
</template>

<script setup>


const { public: { api, apiBase } } = useRuntimeConfig();
const route = useRoute()
const id = route.params.id

const dataResult = ref(null)
// const similarNews = ref(null)
const isLoading = ref(true)

const { data: serviceData } = await useGetSiteApi().GetAll(`${api.productsApi}/${id}`);
// console.log(useMenu().value);
watchEffect(async () => {
  if (process.client) {
    if (serviceData.value) {
      dataResult.value = serviceData.value.data
      // const { data:similarNewsData } = await useGetSiteApi().GetAll(
      //   `${api.blocksApi}?categoryId=${dataResult.value.categoryId}&pageNumber=0&pageSize=12`
      // );
      // similarNews.value = similarNewsData.value.items.filter(item=>item.id != dataResult.value.id)
      isLoading.value= false
    }
  }
})

</script>

<style lang="scss" scoped>
.description {
  // font-size: 2rem;
  margin-bottom: 1rem !important;
  font-size: 1.1rem !important;
  .section{
    // margin-bottom: 1rem;
    .img-frame {

      // position:absolute;
      // display: flex;
      // height: 50vh;
      width: 40%;
      height: auto;
      // height: 100%;
      margin-bottom: 2rem;
      &.rtl{
        float: left;
        margin-right: 2rem;
      }
      &.ltr{
        float: right;
        margin-left: 2rem;
      }

      &:nth-child(even){
        &.rtl{
          float: right;
          margin-left: 2rem;
        }
        &.ltr{
          float: left;
          margin-right: 2rem;
        }

      }

      @media (max-width: 992px) {
        width: 100%;
      }

    }
  }
}
</style>