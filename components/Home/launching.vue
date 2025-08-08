<template>
  <div class="launching-root" :style="`display: ${passed?'none':'block'}`">
    <div class="launching-slider">
      <Splide 
        v-if="techs && techs.length > 0"
        class="splide"
        :options="splideOption"
        :extensions="extensions"
      >
    
        <SplideSlide
          class="pcc"
          data-splide-interval="4000"
          v-for="(tech, index) in techs"
          :key="tech.id"
        >
          <div class="tech-card pcc">
            <h1 class="card-title">
              {{ useTr(tech.nameEn, tech.nameAr, tech.nameGe) }}
            </h1>
          </div>
        </SplideSlide>
      </Splide>
    </div>
    <div class="logo-frame">
      <img src="/logo/Orbit_company-logo-side-both-blue.svg" alt="logo">
    </div>
    <div class="globe pcc">
      <HomeTest/>
    </div>
    <div class="clock">
      <ElementsCountdownClock :event-date="eventDate"/>
    </div>
  </div>
</template>

<script setup>
const eventDate = '2025-08-22T21:00:00';
const passed = ref(false);
let intervalId = null;

const checkEventDate = () => {
  const currentDate = new Date();
  const targetDate = new Date(eventDate);
  passed.value = currentDate > targetDate;
};

// Start checking every second when component mounts
onMounted(() => {
  checkEventDate(); // Initial check
  intervalId = setInterval(checkEventDate, 1000); // Update every second
});

// Clean up interval when component unmounts
onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});

import { Splide, SplideSlide } from '@splidejs/vue-splide';
  // import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';
  // import '@splidejs/vue-splide/css/core';
  import '@splidejs/vue-splide/css/skyblue';
  // import '@splidejs/vue-splide/css/sea-green';

  const splideOption = {
    direction: 'ttb',
    height   : '6rem',
    wheel    : false,
    gap   : '1rem',
    // type  : 'fade',
    autoplay: 'playing',
    rewind: true,
    // drag   : 'free',
    // focus  : 'center',
    // perPage: 1,
    // autoScroll: {
    //   speed: .1,
    // },
    // breakpoints: {
    //   1024: {
    //     perPage: 4,
    //   },
    //   768: {
    //     perPage: 3,
    //   },
    //   480: {
    //     perPage: 2,
    //     gap: '0.5rem',
    //   }
    // }
  }
  // const extensions = { AutoScroll };
  const extensions = {};

  
const {
  public: { api, apiBase },
} = useRuntimeConfig();
// const services = ref(null);


// const { data: servicesData, pending } = await useGetSiteApi().GetAll(
//   `${api.productsSearchApi}?pageNumber=1&pageSize=12`
// );
// services.value = servicesData.value.data;


// const techs = [
//   // Pure Programming Languages (1-10)
//   { id: 1, nameEn: "JavaScript", nameAr: "جافا سكريبت", nameGe: "JavaScript", icon: "" },
//   { id: 2, nameEn: "Python", nameAr: "بايثون", nameGe: "Python", icon: "" },
//   { id: 3, nameEn: "Java", nameAr: "جافا", nameGe: "Java", icon: "" },
//   { id: 4, nameEn: "C#", nameAr: "سي شارب", nameGe: "C#", icon: "" },
//   { id: 5, nameEn: "C++", nameAr: "سي بلس بلس", nameGe: "C++", icon: "" },
//   { id: 6, nameEn: "Go", nameAr: "جو", nameGe: "Go", icon: "" },
//   { id: 7, nameEn: "Rust", nameAr: "راست", nameGe: "Rust", icon: "" },
//   { id: 8, nameEn: "TypeScript", nameAr: "تايب سكريبت", nameGe: "TypeScript", icon: "" },
//   { id: 9, nameEn: "PHP", nameAr: "بي إتش بي", nameGe: "PHP", icon: "" },
//   { id: 10, nameEn: "Ruby", nameAr: "روبي", nameGe: "Ruby", icon: "" },
// ];

const techs = [
  // Web Development (11-15)
  { id: 11, nameEn: "Web Development", nameAr: "تطوير مواقع الإنترنت", nameGe: "Webentwicklung", icon: "" },
  { id: 12, nameEn: "Frontend Development", nameAr: "تطوير الواجهات الأمامية", nameGe: "Frontend-Entwicklung", icon: "" },
  { id: 13, nameEn: "Backend Development", nameAr: "تطوير الواجهات الخلفية", nameGe: "Backend-Entwicklung", icon: "" },
  { id: 14, nameEn: "Full Stack Development", nameAr: "تطوير كامل", nameGe: "Full-Stack-Entwicklung", icon: "" },
  { id: 15, nameEn: "Responsive Design", nameAr: "تصميم متجاوب", nameGe: "Responsives Design", icon: "" },

  // Mobile Development (16-20)
  { id: 16, nameEn: "Mobile App Development", nameAr: "تطوير تطبيقات الموبايل", nameGe: "Mobile-App-Entwicklung", icon: "" },
  { id: 17, nameEn: "Android Development", nameAr: "تطوير أندرويد", nameGe: "Android-Entwicklung", icon: "" },
  { id: 18, nameEn: "iOS Development", nameAr: "تطوير آي أو إس", nameGe: "iOS-Entwicklung", icon: "" },
  { id: 19, nameEn: "Cross-Platform Development", nameAr: "تطوير متعدد المنصات", nameGe: "Cross-Platform-Entwicklung", icon: "" },
  { id: 20, nameEn: "Flutter", nameAr: "فلاتر", nameGe: "Flutter", icon: "" },

  // Software Development (21-25)
  { id: 21, nameEn: "Software Development", nameAr: "تطوير برامج الكمبيوتر", nameGe: "Softwareentwicklung", icon: "" },
  { id: 22, nameEn: "Desktop Applications", nameAr: "تطبيقات سطح المكتب", nameGe: "Desktop-Anwendungen", icon: "" },
  { id: 23, nameEn: "System Programming", nameAr: "برمجة الأنظمة", nameGe: "Systemprogrammierung", icon: "" },
  // { id: 24, nameEn: "Game Development", nameAr: "تطوير الألعاب", nameGe: "Spieleentwicklung", icon: "" },
  // { id: 25, nameEn: "Embedded Systems", nameAr: "الأنظمة المدمجة", nameGe: "Eingebettete Systeme", icon: "" },

  // Networking (26-30)
  { id: 26, nameEn: "Networking", nameAr: "تنفيذ شبكات", nameGe: "Netzwerke", icon: "" },
  { id: 27, nameEn: "Network Administration", nameAr: "إدارة الشبكات", nameGe: "Netzwerkadministration", icon: "" },
  { id: 28, nameEn: "Network Security", nameAr: "أمن الشبكات", nameGe: "Netzwerksicherheit", icon: "" },
  { id: 29, nameEn: "Cisco", nameAr: "سيسكو", nameGe: "Cisco", icon: "" },
  { id: 30, nameEn: "Cloud Networking", nameAr: "شبكات الحوسبة السحابية", nameGe: "Cloud-Netzwerke", icon: "" },

  // Controllers (31-35)
  { id: 31, nameEn: "Microcontrollers", nameAr: "المتحكمات الدقيقة", nameGe: "Mikrocontroller", icon: "" },
  { id: 32, nameEn: "Arduino", nameAr: "أردوينو", nameGe: "Arduino", icon: "" },
  { id: 33, nameEn: "Raspberry Pi", nameAr: "راسبيري باي", nameGe: "Raspberry Pi", icon: "" },
  { id: 34, nameEn: "PLC Programming", nameAr: "برمجة متحكمات PLC", nameGe: "PLC-Programmierung", icon: "" },
  { id: 35, nameEn: "IoT Development", nameAr: "تطوير إنترنت الأشياء", nameGe: "IoT-Entwicklung", icon: "" },

  // Graphic Design (36-40)
  { id: 36, nameEn: "Graphic Design", nameAr: "التصميم الجرافيكي", nameGe: "Grafikdesign", icon: "" },
  { id: 37, nameEn: "UI/UX Design", nameAr: "تصميم واجهة المستخدم/التجربة", nameGe: "UI/UX-Design", icon: "" },
  { id: 38, nameEn: "Adobe Photoshop", nameAr: "أدوبي فوتوشوب", nameGe: "Adobe Photoshop", icon: "" },
  { id: 39, nameEn: "Adobe Illustrator", nameAr: "أدوبي إليستريتور", nameGe: "Adobe Illustrator", icon: "" },
  // { id: 40, nameEn: "Figma", nameAr: "فيجما", nameGe: "Figma", icon: "" }
];
</script>

<style lang="scss">
.launching-slider{
  // background-color: black;
  position: absolute;
  left: 50%;
  top: 5%;
  width: min(80%, 19rem);
  transform: translate(-50%, 0);
  .splide{
    // background: black;
    // padding-bottom: 1rem;
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
.launching-root{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  background-color: black;
  .launching-slider{
    .tech-card{
      width: 100%;
      height: 100%;
      // height: 4rem;
      background-color: rgba(255, 255, 255, 0.05);
      padding: 10px;
      border-radius: 10px;
      backdrop-filter: blur(5px);
      .card-title{
        font-weight: 200;
        font-size: 1.2rem;
        margin-bottom: 0;
      }
    }
  }
  .logo-frame{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: min(80%, 40rem);
    // background: none;
    img{
      width: 100%;
      background-color: rgba(255, 255, 255, 0.05);
      padding: 10px;
      border-radius: 10px;
      backdrop-filter: blur(5px);
    }
  }
  .globe{
    height: 100%;
    width: 100%;
  }
  .clock{
    position: absolute;
    left: 50%;
    bottom: 5%;

    transform: translate(-50%, 0);
  }
}
</style>