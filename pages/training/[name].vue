<template>
  <div class="page-root">
    <div class="container">
      <div class="path-links text-start pt-4">
        <h5 class="links-frame" dir="auto">
          <nuxt-link class="path-link" :to="localePath('/')">{{
            $t("Home")
          }}</nuxt-link>
          /
          <nuxt-link class="path-link" :to="localePath(`/training`)">{{
            $t("training")
          }}</nuxt-link>
          /
          <span class="path-link">{{ useName(dataResult) }}</span>
        </h5>
      </div>
    </div>
    <!-- <BasicBlockDetails :item="dataResult"/> -->
    <div class="page-body container" :dir="rtl()">
      <div class="main-content">
        <div class="content-body">
          <div class="mb-10 px-0" :class="rtl()" dir="auto">
            <h1 class="metal-text">
              <span>{{ useName(dataResult) }}</span>
            </h1>
          </div>
          <div class="description">
            <div class="section">
              <div
                v-if="dataResult?.courseImageUrl1"
                class="img-frame contain"
                :class="rtl()"
              >
                <img :src="cImg(dataResult.courseImageUrl1)" :alt="useAlt(dataResult.productSeos,1)" />
              </div>
              <div class="des" v-html="useDes(dataResult)"></div>
            </div>
            <div class="section">
              <div
                v-if="dataResult?.courseImageUrl2"
                class="img-frame contain"
                :class="rtl()"
              >
                <img :src="cImg(dataResult.courseImageUrl2)" :alt="useAlt(dataResult.productSeos,2)" />
              </div>
              <div class="des" v-html="useDes1(dataResult)"></div>
            </div>
            <div class="section">
              <div
                v-if="dataResult?.courseImageUrl3"
                class="img-frame contain"
                :class="rtl()"
              >
                <img :src="cImg(dataResult.courseImageUrl3)" :alt="useAlt(dataResult.productSeos,3)" />
              </div>
              <div class="des" v-html="useDes2(dataResult)"></div>
            </div>
            <div class="section">
              <div
                v-if="dataResult?.courseImageUrl4"
                class="img-frame contain"
                :class="rtl()"
              >
                <img :src="cImg(dataResult.courseImageUrl4)" :alt="useAlt(dataResult.courseSeos,4)" />
              </div>
              <div class="des" v-html="useDes3(dataResult)"></div>
            </div>
          </div>
        </div>
        <aside class="side-nav">
          <p class="px-0 ps-2">{{ $t("more") }}</p>
          <div
            class="mb-3"
            v-for="(similar, index) in similarItems"
            :key="similar.id"
          >
            <CardCourseH :cardData="similar" />
          </div>
        </aside>
      </div>
    </div>
    <div class="container">
      <HomeServices />
    </div>
  </div>
</template>

<script setup>
// const localePath = useLocalePath()
// const { public: { api, apiBase } } = useRuntimeConfig();
// const route = useRoute()
// const { t } = useI18n()
// const id = route.query.id
// const courseName = route.params.name

// const dataResult = ref(null)
// const similarItems = ref(null)
// const isLoading = ref(true)

// // const { data: courseData } = await useGetSiteApi().GetAll(`${api.coursesApi}/${id}`);
// const { data: courseData } = await useGetSiteApi().GetAll(`${api.coursesApi}/GetByEndpoint/${courseName}`);
// // console.log(courseData.value);
// // console.log(useMenu().value);
// // watchEffect(async () => {
// //   if (process.client) {
// if (courseData.value) {
//   dataResult.value = courseData.value.data
//   const { data:similarData } = await useGetSiteApi().GetAll(
//     `${api.coursesApi}/GetAllPagedSearchCourse?Coursename=&propductcategoryid=0&propductSubcategoryid=0&propductSubSubcategoryid=0&propductSubSubSubcategoryid=0&fromprice=0&toprice=0&pageNumber=0&pageSize=12`
//   );
//   similarItems.value = similarData.value.data.filter(item=>item.id != dataResult.value.id)
//   isLoading.value= false
// }
// //   }
// // })

const localePath = useLocalePath();
const {
  public: { api, apiBase },
} = useRuntimeConfig();
const route = useRoute();
const { t } = useI18n();
const router = useRouter();
const id = route.query.id;
const courseName = route.params.name;

const dataResult = ref(null);
const similarItems = ref([]); // Initialize as empty array
const isLoading = ref(true);
const error = ref(null);

try {
  // Fetch course data
  const { data: courseData, error: courseError } = await useGetSiteApi().GetAll(
    `${api.coursesApi}/GetByEndpoint/${courseName}`
  );

  // Check for errors or empty data
  if (courseError.value || !courseData.value?.data) {
    throw new Error(courseError.value?.message || t("errors.courseNotFound"));
  }

  dataResult.value = courseData.value.data;

  // Fetch similar courses only if we have valid data
  const { data: similarData, error: similarError } =
    await useGetSiteApi().GetAll(
      `${api.coursesApi}/GetAllPagedSearchCourse?Coursename=&propductcategoryid=0&propductSubcategoryid=0&propductSubSubcategoryid=0&propductSubSubSubcategoryid=0&fromprice=0&toprice=0&pageNumber=0&pageSize=12`
    );

  // Filter similar items if data exists
  if (!similarError.value && similarData.value?.data) {
    similarItems.value = similarData.value.data.filter(
      (item) => item.id !== dataResult.value.id
    );
  }

  useSeoMeta({
    // Basic SEO
    title: useName(courseData.value.data),
    description: t("ogDescription"),

    // Open Graph / Facebook
    ogTitle: useName(courseData.value.data),
    ogDescription: courseData.value.data.seoDescription,
    ogImage:
      "https://orbit-eng.net/SEO/imgs/Orbit_company-logo-en-white-01.png",
    ogUrl: "https://orbit-eng.net" + route.fullPath,
    ogType: t("ogType"),
    ogLocale: t("ogLocale"),
    ogSiteName: t("ogSiteName"),

    // Twitter Card
    twitterCard: "summary_large_image",
    twitterTitle: useName(courseData.value.data),
    twitterDescription: t("ogDescription"),
    twitterImage:
      "https://orbit-eng.net/SEO/imgs/Orbit_company-logo-en-white-01.png",
    twitterSite: "@yourtwitterhandle",
    twitterCreator: "@contentcreator",

    // Additional SEO
    robots: "index, follow",
    keywords: courseData.value.data.keywords, // If you have keywords translation
    author: t("ogSiteName"),
    canonical: "https://orbit-eng.net" + route.fullPath,

    // Mobile & IE
    // viewport: 'width=device-width, initial-scale=1',
    // mobileAlternate: 'https://m.orbit-eng.net'+ route.fullPath,
    // themeColor: '#ffffff',

    // App Links
    appleMobileWebAppTitle: useName(courseData.value.data),
    applicationName: t("ogTitle"),

    // FB App Links
    fbAppId: "your-facebook-app-id",

    // iOS
    appleTouchIcon: "/icons/apple-touch-icon.png",
    appleTouchStartupImage: "/splash/launch-640x1136.png",

    // Windows
    msapplicationTileImage: "/icons/mstile-150x150.png",
    msapplicationTileColor: "#ffffff",
    msapplicationConfig: "/browserconfig.xml",

    // PWA
    manifest: "/manifest.webmanifest",
  });
} catch (err) {
  error.value = err.message || t("errors.generic");

  // Handle 404 specifically
  if (err.message.includes("404") || err.message.includes("not found")) {
    // Option 1: Set error message (recommended)
    error.value = t("errors.courseNotFound");

    // Option 2: Redirect to 404 page
    // await router.replace(localePath('/404'));

    // Option 3: Throw server-side error (for SSR)
    // throw createError({ statusCode: 404, message: t('errors.courseNotFound') });
  }

  console.error("Course page error:", err);
} finally {
  isLoading.value = false;
}
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
              width: 100%;
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
