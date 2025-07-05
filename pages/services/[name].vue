<template>
  <div class="page-root">
    <div class="container">
      <div class="path-links text-start pt-4">
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
    <div class="page-body container" :dir="rtl()">
      <div class="main-content">
        <div class="content-body">
          <div class="mb-10 px-0 " :class="rtl()" dir="auto">
            <h1 class="metal-text">
              <span >{{ useName(dataResult) }}</span>
            </h1>
          </div>
          <div class="description">
            <div class="section">
              <div v-if="dataResult?.productImageUrl" class="img-frame contain" :class="rtl()">
                <img :src="cImg(dataResult.productImageUrl)" alt=" Photo">
              </div>
              <div class="des" v-html="useDes(dataResult)"></div>
            </div>
            <div class="section">
              <div v-if="dataResult?.productImageUrl1" class="img-frame contain" :class="rtl()">
                <img :src="cImg(dataResult.productImageUrl1)" alt=" Photo">
              </div>
              <div class="des" v-html="useDes1(dataResult)"></div>
            </div>
            <div class="section">
              <div v-if="dataResult?.productImageUrl2" class="img-frame contain" :class="rtl()">
                <img :src="cImg(dataResult.productImageUrl2)" alt=" Photo">
              </div>
              <div class="des" v-html="useDes2(dataResult)"></div>
            </div>
            <div class="section">
              <div v-if="dataResult?.productImageUrl3" class="img-frame contain" :class="rtl()">
                <img :src="cImg(dataResult.productImageUrl3)" alt=" Photo">
              </div>
              <div class="des" v-html="useDes3(dataResult)"></div>
            </div>
          </div>
        </div>
        <aside class="side-nav ">
          <p class="px-0 ps-2">{{ $t('more') }}</p>
          <div class="mb-3" v-for="similar, index in similarItems" :key="similar.id">
            <CardServiceH :cardData="similar"/>
          </div>
        </aside>
      </div>
    </div>
    <div class="container">
      <HomeTraining/>
    </div>
  </div>
</template>

<script setup>

const localePath = useLocalePath()
const { public: { api, apiBase } } = useRuntimeConfig();
const { t } = useI18n()
const route = useRoute()
const id = route.query.id
const serviceName = route.params.name

// console.log(replaceDashes(serviceName));

// const route = useRoute()
// const { locale } = useI18n()

// definePageMeta({
//   validate: async (route) => {
//     // Ensure ID exists
//     if (!route.params.id) {
//       throw createError({ statusCode: 404, statusMessage: 'Service not found' })
//     }
//     return true
//   }
// })

// const id = computed(() => {
//   return typeof route.params.id === 'string'
//     ? decodeURIComponent(route.params.id)
//     : route.params.id[0] // handle array case
// })

const dataResult = ref(null)
const similarItems = ref(null)
const isLoading = ref(true)

// const { data: serviceData } = await useGetSiteApi().GetAll(`${api.productsApi}/${id}`);
const { data: serviceData } = await useGetSiteApi().GetAll(`${api.productsApi}/GetByName/${serviceName}`);
dataResult.value = serviceData.value.data
// console.log(dataResult.value);
// if (process.client) {
if (serviceData.value) {
  // console.log(dataResult.value);
  ///api/v1/products/GetAllPagedSearchProduct?productname=&propductcategoryid=0&propductSubcategoryid=0&propductSubSubcategoryid=0&propductSubSubSubcategoryid=0&fromprice=0&toprice=0&pageNumber=1&pageSize=100&searchString=&orderBy=
  const { data:similarData } = await useGetSiteApi().GetAll(
    `${api.productsSearchApi}?propductcategoryid=${dataResult.value.productParentCategoryId}&pageNumber=0&pageSize=12`
  );
  similarItems.value = similarData.value.data.filter(item=>item.id != dataResult.value.id)
  // similarItems.value = similarData.value.data
  // isLoading.value= false
}


useSeoMeta({
  // Basic SEO
  title: useName(serviceData.value.data),
  description: t('ogDescription'),
  
  // Open Graph / Facebook
  ogTitle: useName(serviceData.value.data),
  ogDescription: serviceData.value.data.seoDescription,
  ogImage: 'https://orbit-eng.net/SEO/imgs/Orbit_company-logo-en-white-01.png',
  ogUrl: 'https://orbit-eng.net'+ route.fullPath,
  ogType: t('ogType'),
  ogLocale: t('ogLocale'),
  ogSiteName: t('ogSiteName'),
  
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: useName(serviceData.value.data),
  twitterDescription: t('ogDescription'),
  twitterImage: 'https://orbit-eng.net/SEO/imgs/Orbit_company-logo-en-white-01.png',
  twitterSite: '@yourtwitterhandle',
  twitterCreator: '@contentcreator',
  
  // Additional SEO
  robots: 'index, follow',
  keywords: serviceData.value.data.keywords, // If you have keywords translation
  author: t('ogSiteName'),
  canonical: 'https://orbit-eng.net'+ route.fullPath,
  
  // Mobile & IE
  // viewport: 'width=device-width, initial-scale=1',
  // mobileAlternate: 'https://m.orbit-eng.net'+ route.fullPath,
  // themeColor: '#ffffff',
  
  // App Links
  appleMobileWebAppTitle: useName(serviceData.value.data),
  applicationName: t('ogTitle'),
  
  // FB App Links
  fbAppId: 'your-facebook-app-id',
  
  // iOS
  appleTouchIcon: '/icons/apple-touch-icon.png',
  appleTouchStartupImage: '/splash/launch-640x1136.png',
  
  // Windows
  msapplicationTileImage: '/icons/mstile-150x150.png',
  msapplicationTileColor: '#ffffff',
  msapplicationConfig: '/browserconfig.xml',
  
  // PWA
  manifest: '/manifest.webmanifest'
});


</script>

<style lang="scss" scoped>
.page-root{
  .page-body{
    .main-content{
      display: flex;
      gap: 1rem;
      .side-nav{
        width: 30%;
        border-inline-start: solid 1px rgba(255, 255, 255, 0.1);
        padding-inline-start: .5rem;
      }
      .content-body{
        width: 70%;
        // padding-top: 1rem;
        .description {
          width: 100%;
          // font-size: 2rem;
          margin-bottom: 1rem !important;
          font-size: 1.1rem !important;
          .section{
            // margin-bottom: 1rem;
            .img-frame {
        
              // position:absolute;
              // display: flex;
              // height: 50vh;
              width: 100%;
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
                // margin-left: 0;
                // margin-right: 0;
              }
        
            }
            .des{
              word-wrap: break-word;
            }
          }
        }
      }
    }
  }
  @media (max-width:992px) {
    .main-content{
      flex-direction: column;
      gap: 0;
      .side-nav, .content-body{ 
        width: 100% !important;
        border: none !important;
        padding: 0 !important;
      }
    }
  }
}
</style>