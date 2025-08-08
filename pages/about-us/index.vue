<template>
  <div class="page-root">
    <!-- <HomeHeaderDesign1/>     -->
    <ElementsHeaderImage
      title=""
      :imgUrl="cImg(dataResult.image)"
      imgAlt="Orbit Technology and Design Company - header"
      contain
    />
    <!-- <ThreeSphere1/> -->
    <div class="container">
      <div class="path-links text-start pt-4">
        <h5 class="links-frame" dir="auto">
          <nuxt-link class="path-link" :to="localePath('/')">{{
            $t("Home")
          }}</nuxt-link>
          /
          <span class="path-link">{{ $t("About Us") }}</span>
        </h5>
      </div>
    </div>
    <div class="page-body container" :dir="rtl()">
      <div class="main-content">
        <div class="content-body">
          <div class="mb-10 px-0" :class="rtl()" dir="auto">
            <h1 class="metal-text">
              <span>
                <!-- <EffectWords :text="useName(dataResult)"/> -->
                {{ useName(dataResult) }}
              </span>
            </h1>
          </div>
          <div class="description">
            <div class="section">
              <!-- <div v-if="dataResult?.image" class="img-frame contain" :class="rtl()">
                  <img :src="cImg(dataResult.image)" alt=" Photo">
                </div> -->
              <div class="des" v-html="useDes(dataResult)"></div>
            </div>
            <div class="section">
              <div
                v-if="dataResult?.image1"
                class="img-frame contain"
                :class="rtl()"
              >
                <img :src="cImg(dataResult.image1)" alt=" Photo" />
              </div>
              <div class="des" v-html="useDes1(dataResult)"></div>
            </div>
            <div class="section">
              <div
                v-if="dataResult?.image2"
                class="img-frame contain"
                :class="rtl()"
              >
                <img :src="cImg(dataResult.image2)" alt=" Photo" />
              </div>
              <div class="des" v-html="useDes2(dataResult)"></div>
            </div>
            <div class="section">
              <div
                v-if="dataResult?.image3"
                class="img-frame contain"
                :class="rtl()"
              >
                <img :src="cImg(dataResult.image3)" alt=" Photo" />
              </div>
              <div class="des" v-html="useDes3(dataResult)"></div>
            </div>
          </div>
        </div>
        <!-- <aside class="side-nav ">
          <p class="px-0 ps-2">{{ $t('more') }}</p>
          <div class="mb-3">
            hello
          </div>
        </aside> -->
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "home",
});
const { t } = useI18n();
const localePath = useLocalePath();

const {
  public: { api, apiBase },
} = useRuntimeConfig();
const dataResult = ref([]);
const isLoading = ref(true);
const showImageModal = ref(false);
const selectedPhoto = ref(null);
const { data: pageData } = await useGetSiteApi().GetAll(`${api.blocksApi}/7`);
dataResult.value = pageData.value;

// watchEffect(() => {
//   if (process.client) {
//     if (pageData.value) {
//       isLoading.value = false
//     }
//   }
// })

useSeoMeta({
  // Basic SEO
  title: useI18n().t("About Us"),
  description: useI18n().t("About Us"),
  keywords: useI18n().t("About Us"),

  ogType: useI18n().t("ogType"),
  ogLocale: useI18n().t("ogLocale"),
  ogSiteName: useI18n().t("ogSiteName"),
  robots: "index, follow",
  author: useI18n().t("ogSiteName"),
  canonical: "https://orbit-eng.net" + useRoute().fullPath,
});
</script>

<style lang="scss" scoped>
.page-root {
  .page-body {
    .main-content {
      display: flex;
      gap: 1rem;
      .side-nav {
        width: 30%;
        border-inline-start: solid 1px rgba(255, 255, 255, 0.1);
        padding-inline-start: 0.5rem;
      }
      .content-body {
        width: 70%;
        // padding-top: 1rem;
        .description {
          width: 100%;
          // font-size: 2rem;
          margin-bottom: 1rem !important;
          font-size: 1.1rem !important;
          .section {
            // margin-bottom: 1rem;
            .img-frame {
              // position:absolute;
              // display: flex;
              // height: 50vh;
              width: 40%;
              height: auto;
              // height: 100%;
              margin-bottom: 2rem;
              &.rtl {
                float: left;
                margin-right: 2rem;
              }
              &.ltr {
                float: right;
                margin-left: 2rem;
              }

              &:nth-child(even) {
                &.rtl {
                  float: right;
                  margin-left: 2rem;
                }
                &.ltr {
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
            .des {
              word-wrap: break-word;
            }
          }
        }
      }
    }
  }
  @media (max-width: 992px) {
    .main-content {
      flex-direction: column;
      gap: 0;
      .side-nav,
      .content-body {
        width: 100% !important;
        border: none !important;
        padding: 0 !important;
      }
    }
  }
}
</style>
