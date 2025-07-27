<template>
  <div class="slider-root">
    <Splide 
      v-if="techs && techs.length > 0"
      class="splide"
      :options="splideOption"
      :extensions="extensions"
    >
  
      <SplideSlide
        class="pcc"
        data-splide-interval="10000"
        v-for="(tech, index) in techs"
        :key="tech.id"
      >
        <div class="tech-card pcc">
          <h1 class="card-title">
            {{ tech.nameEn }}
          </h1>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';
  // import '@splidejs/vue-splide/css/core';
  import '@splidejs/vue-splide/css/skyblue';
  // import '@splidejs/vue-splide/css/sea-green';

  const splideOption = {
    gap   : '1rem',
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 5,
    autoScroll: {
      speed: 1,
    },
  }
  const extensions = { AutoScroll };

  
const {
  public: { api, apiBase },
} = useRuntimeConfig();
// const services = ref(null);


// const { data: servicesData, pending } = await useGetSiteApi().GetAll(
//   `${api.productsSearchApi}?pageNumber=1&pageSize=12`
// );
// services.value = servicesData.value.data;


const techs = [
  // Pure Programming Languages (1-10)
  { id: 1, nameEn: "JavaScript", nameAr: "جافا سكريبت", nameGe: "JavaScript", icon: "" },
  { id: 2, nameEn: "Python", nameAr: "بايثون", nameGe: "Python", icon: "" },
  { id: 3, nameEn: "Java", nameAr: "جافا", nameGe: "Java", icon: "" },
  { id: 4, nameEn: "C#", nameAr: "سي شارب", nameGe: "C#", icon: "" },
  { id: 5, nameEn: "C++", nameAr: "سي بلس بلس", nameGe: "C++", icon: "" },
  { id: 6, nameEn: "Go", nameAr: "جو", nameGe: "Go", icon: "" },
  { id: 7, nameEn: "Rust", nameAr: "راست", nameGe: "Rust", icon: "" },
  { id: 8, nameEn: "TypeScript", nameAr: "تايب سكريبت", nameGe: "TypeScript", icon: "" },
  { id: 9, nameEn: "PHP", nameAr: "بي إتش بي", nameGe: "PHP", icon: "" },
  { id: 10, nameEn: "Ruby", nameAr: "روبي", nameGe: "Ruby", icon: "" },

  // Frontend Frameworks (11-17)
  { id: 11, nameEn: "React", nameAr: "رياكت", nameGe: "React", icon: "" },
  { id: 12, nameEn: "Vue.js", nameAr: "فيوجي إس", nameGe: "Vue.js", icon: "" },
  { id: 13, nameEn: "Angular", nameAr: "أنجولار", nameGe: "Angular", icon: "" },
  { id: 14, nameEn: "Nuxt.js", nameAr: "نوكت إس", nameGe: "Nuxt.js", icon: "" },
  { id: 15, nameEn: "Svelte", nameAr: "سفيلت", nameGe: "Svelte", icon: "" },
  { id: 16, nameEn: "Next.js", nameAr: "نيكست إس", nameGe: "Next.js", icon: "" },
  { id: 17, nameEn: "Tailwind CSS", nameAr: "تيلويند سي إس إس", nameGe: "Tailwind CSS", icon: "" },

  // Backend Frameworks (18-24)
  { id: 18, nameEn: "Node.js", nameAr: "نود إس", nameGe: "Node.js", icon: "" },
  { id: 19, nameEn: "ASP.NET", nameAr: "إيه إس بي دوت نت", nameGe: "ASP.NET", icon: "" },
  { id: 20, nameEn: "Django", nameAr: "جانغو", nameGe: "Django", icon: "" },
  { id: 21, nameEn: "Laravel", nameAr: "لارافيل", nameGe: "Laravel", icon: "" },
  { id: 22, nameEn: "Spring Boot", nameAr: "سبرينج بوت", nameGe: "Spring Boot", icon: "" },
  { id: 23, nameEn: "Express.js", nameAr: "اكسبرس إس", nameGe: "Express.js", icon: "" },
  { id: 24, nameEn: "Ruby on Rails", nameAr: "روبي أون ريلز", nameGe: "Ruby on Rails", icon: "" },

  // Mobile Frameworks (25-31)
  { id: 25, nameEn: "Flutter", nameAr: "فلاتر", nameGe: "Flutter", icon: "" },
  { id: 26, nameEn: "React Native", nameAr: "رياكت نيتيف", nameGe: "React Native", icon: "" },
  { id: 27, nameEn: "Swift", nameAr: "سويفت", nameGe: "Swift", icon: "" },
  { id: 28, nameEn: "Kotlin", nameAr: "كوتلن", nameGe: "Kotlin", icon: "" },
  { id: 29, nameEn: "Ionic", nameAr: "آيونك", nameGe: "Ionic", icon: "" },
  { id: 30, nameEn: "Xamarin", nameAr: "زامارين", nameGe: "Xamarin", icon: "" },
  { id: 31, nameEn: "Jetpack Compose", nameAr: "جيت باك كومبوز", nameGe: "Jetpack Compose", icon: "" },

  // Databases (32-36)
  { id: 32, nameEn: "MySQL", nameAr: "ماي إس كيو إل", nameGe: "MySQL", icon: "" },
  { id: 33, nameEn: "MongoDB", nameAr: "مونجو دي بي", nameGe: "MongoDB", icon: "" },
  { id: 34, nameEn: "PostgreSQL", nameAr: "بوستجري إس كيو إل", nameGe: "PostgreSQL", icon: "" },
  { id: 35, nameEn: "Firebase", nameAr: "فايربيز", nameGe: "Firebase", icon: "" },
  { id: 36, nameEn: "SQLite", nameAr: "إس كيو لايت", nameGe: "SQLite", icon: "" },

  // DevOps & Tools (37-40)
  { id: 37, nameEn: "Docker", nameAr: "دوكر", nameGe: "Docker", icon: "" },
  { id: 38, nameEn: "GraphQL", nameAr: "جراف كيو إل", nameGe: "GraphQL", icon: "" },
  { id: 39, nameEn: "Kubernetes", nameAr: "كوبرنيتس", nameGe: "Kubernetes", icon: "" },
  { id: 40, nameEn: "Git", nameAr: "جيت", nameGe: "Git", icon: "" },

  // ===== Graphic Design Programs (41-50) =====
  { id: 41, nameEn: "Adobe Photoshop", nameAr: "أدوبي فوتوشوب", nameGe: "Photoshop", icon: "" },
  { id: 42, nameEn: "Adobe Illustrator", nameAr: "أدوبي إليستريتور", nameGe: "Illustrator", icon: "" },
  { id: 43, nameEn: "Adobe InDesign", nameAr: "أدوبي إنديزاين", nameGe: "InDesign", icon: "" },
  { id: 44, nameEn: "Figma", nameAr: "فيجما", nameGe: "Figma", icon: "" },
  { id: 45, nameEn: "Sketch", nameAr: "سكتش", nameGe: "Sketch", icon: "" },
  { id: 46, nameEn: "Adobe XD", nameAr: "أدوبي إكس دي", nameGe: "Adobe XD", icon: "" },
  { id: 47, nameEn: "CorelDRAW", nameAr: "كوريل درو", nameGe: "CorelDRAW", icon: "" },
  { id: 48, nameEn: "Affinity Designer", nameAr: "أفينيتي ديزاينر", nameGe: "Affinity Designer", icon: "" },
  { id: 49, nameEn: "Canva", nameAr: "كانفا", nameGe: "Canva", icon: "" },
  { id: 50, nameEn: "GIMP", nameAr: "جيمب", nameGe: "GIMP", icon: "" },
];
</script>
<style lang="scss">
.slider-root{
  background-color: black;
  .splide{
    background: black;
    padding-bottom: 1rem;
    .splide__arrows{
      display: none;
      .splide__arrow{
        width: 1.5rem;
        height: 1.5rem;
        // background-color: white;
        &.splide__arrow--prev{
          border-radius: 50%;
          left: -2rem;
        }
        &.splide__arrow--next{
          border-radius: 50%;
          right: -2rem;
        }
        svg{
          fill: red;
        }
      }
    }
    .splide__pagination{
      display: none;
      bottom: 0;
      .splide__pagination__page{
        &.is-active{
          background-color: red !important;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.tech-card{
  width: 100%;
  height: 5rem;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  .card-title{
    font-weight: 200;
    font-size: 1.2rem;
    margin-bottom: 0;
  }
}
</style>