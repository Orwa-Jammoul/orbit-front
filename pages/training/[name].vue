<template>
  <div class="page-root">
    <div class="container">
      <div class="path-links text-start pt-4">
        <h5 class="links-frame" dir="auto">
          <nuxt-link class="path-link" :to="localePath('/')">{{ $t("Home") }}</nuxt-link>
          /
          <nuxt-link class="path-link" :to="localePath(`/training`)">{{ $t('training') }}</nuxt-link>
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
              <div v-if="dataResult?.courseImageUrl1" class="img-frame contain" :class="rtl()">
                <img :src="cImg(dataResult.courseImageUrl1)" alt=" Photo">
              </div>
            <div class="des" v-html="useDes(dataResult)"></div>
          </div>
            <div class="section">
              <div v-if="dataResult?.courseImageUrl2" class="img-frame contain" :class="rtl()">
                <img :src="cImg(dataResult.courseImageUrl2)" alt=" Photo">
              </div>
              <div class="des" v-html="useDes1(dataResult)"></div>
            </div>
            <div class="section">
              <div v-if="dataResult?.courseImageUrl3" class="img-frame contain" :class="rtl()">
                <img :src="cImg(dataResult.courseImageUrl3)" alt=" Photo">
              </div>
              <div class="des" v-html="useDes2(dataResult)"></div>
            </div>
            <div class="section">
              <div v-if="dataResult?.courseImageUrl4" class="img-frame contain" :class="rtl()">
                <img :src="cImg(dataResult.courseImageUrl4)" alt=" Photo">
              </div>
              <div class="des" v-html="useDes3(dataResult)"></div>
            </div>
          </div>
        </div>
        <aside class="side-nav ">
          <p class="px-0 ps-2">{{ $t('more') }}</p>
          <div class="mb-3" v-for="similar, index in similarItems" :key="similar.id">
            <CardCourseH :cardData="similar"/>
          </div>
        </aside>
      </div>
    </div>
    <div class="container">
      <HomeServices/>
    </div>
  </div>
</template>

<script setup>

const localePath = useLocalePath()
const { public: { api, apiBase } } = useRuntimeConfig();
const route = useRoute()
const id = route.query.id

const dataResult = ref(null)
const similarItems = ref(null)
const isLoading = ref(true)

const { data: courseData } = await useGetSiteApi().GetAll(`${api.coursesApi}/${id}`);
// console.log(courseData.value);
// console.log(useMenu().value);
// watchEffect(async () => {
//   if (process.client) {
if (courseData.value) {
  dataResult.value = courseData.value.data
  const { data:similarData } = await useGetSiteApi().GetAll(
    `${api.coursesApi}/GetAllPagedSearchCourse?Coursename=&propductcategoryid=0&propductSubcategoryid=0&propductSubSubcategoryid=0&propductSubSubSubcategoryid=0&fromprice=0&toprice=0&pageNumber=0&pageSize=12`
  );
  similarItems.value = similarData.value.data.filter(item=>item.id != dataResult.value.id)
  isLoading.value= false
}
//   }
// })

useSeoMeta({
  // Basic SEO
  title: useName(courseData.value),
})

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