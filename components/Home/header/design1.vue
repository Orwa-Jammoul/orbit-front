<template>
  <div class="design-root">
    <div class="bg-img">
      <img :class="rtl()" src="/png/dots-02.png" alt="">
    </div>
    <!-- <div class="bg-img contain">
      <img :class="rtl()" src="/png/lines-01.png" alt="">
    </div> -->
    <div class="main-img" :class="rtl()">
      <div class="img-frame contain">
        <img :class="rtl()" src="/logo/logo-blue.svg" alt="">
      </div>
    </div>
    <!-- <div class="header-content" :dir="rtl()">
      
      <div class="content-frame">
        <v-carousel
          v-if="!isLoading"
          class="h-100"
          :show-arrows="true"
          hide-delimiters
        >
          <template v-slot:prev="{ props }">
            <v-btn
              color="white"
              variant="text"
              @click="props.onClick"
            >
              <icon v-if="!isAr()" name="material-symbols:arrow-back-ios-new-rounded" size="20px"/>
              <icon v-else name="material-symbols:arrow-forward-ios-rounded" size="20px"/>
            </v-btn>
          </template>
          <template v-slot:next="{ props }">
            <v-btn
            color="white"
            variant="text"
            @click="props.onClick"
            >
              <icon v-if="!isAr()" name="material-symbols:arrow-forward-ios-rounded" size="20px"/>
              <icon v-else name="material-symbols:arrow-back-ios-new-rounded" size="20px"/>
            </v-btn>
          </template>
          <v-carousel-item
            v-for="(slide, i) in sliders"
            :key="i"
          >
            <div class="content-card h-100">
              <div class="content-top">
                <h1 class="content-title">
                  {{ useName(slide) }}
                </h1>
                <p class="des" >
                  {{ getInnerText(useDes(slide)) }}
                </p>
              </div>
              <div class="content-bottom">
                <nuxt-link class="go-btn">
                  Go
                  <icon v-if="!isAr()" name="material-symbols:arrow-right-alt-rounded" size="20px"/>
                  <icon v-else name="material-symbols:arrow-left-alt-rounded" size="20px"/>
                </nuxt-link>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="bottom-ribbon pcs">
        <div class="ribbon-card pcc flex-column ">
          <icon name="streamline:call-center-support-service" size="40px"/>
          <h6 class="mt-3 mb-0">{{ $t('services') }}</h6>
        </div>
        <div class="ribbon-card pcc flex-column">
          <icon name="ri:service-line" size="40px"/>
          <h6 class="mt-3 mb-0">{{ $t('services') }}</h6>    
        </div>
        <div class="ribbon-card pcc flex-column">
          <icon name="carbon:ibm-cloud-hyper-protect-crypto-services" size="40px"/>
          <h6 class="mt-3 mb-0">{{ $t('services') }}</h6>    
        </div>
      </div>
    </div> -->
    <div class="gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div class="gradients-container">
        <div class="g1"></div>
        <div class="g2"></div>
        <div class="g3"></div>
        <div class="g4"></div>
        <div class="g5"></div>
        <div ref="interBubble" class="interactive"></div>
        <!-- <div class="test-box"></div> -->
      </div>
    </div>
  </div>
</template>

<script setup>

const { public: {api, apiBase} } = useRuntimeConfig();
// const localePath = useLocalePath()
const sliders = ref([]);
const isLoading = ref(true);
const { data } = await useGetSiteApi().GetAll(
  `${api.Blocks}?categoryId=3&pageNumber=0&pageSize=100`
);


watchEffect(()=> {
  if(data.value ) {
    sliders.value = data.value.items;
    isLoading.value = false
    // useHeader().value= data.value.blockPhotos;
  }
})

// import { useLocale } from 'vuetify'
// const { current } = useLocale()

// current.value = useLang().value
// watch(useLang(),()=>{
//   current.value = useLang().value
// })

const interBubble =ref(null)

let curX = 0;
let curY = 0;
let tgX = 0;
let tgY = 0;

function move() {
  curX += (tgX - curX) / 20;
  curY += (tgY - curY) / 20;
  if(interBubble.value){
    interBubble.value.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(() => {
      move();
    });
  }
}

onMounted(()=>{
  window.addEventListener('mousemove', (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
  });
  move();
})
</script>

<style lang="scss">
.header-content{
  .content-frame{
    .v-window__controls{
      justify-content: flex-end;
      align-items: flex-end;
      padding: 1rem;
    }
  }
}
</style>

<style lang="scss" scoped>
.design-root{
  position: relative;
  height: 100svh;
  width: 100%;
  overflow: hidden;
  // border-radius: 0 0 3rem 3rem;
  // overflow: hidden;
  // background-color: $primary4;
  .bg-img{
    z-index: 90;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    overflow: hidden;
    img{
      height: 100%;
      // mix-blend-mode:hard-light;
      filter: invert(1);
      opacity: .5;
      object-position: right center;
      &.rtl{
        object-position: left center;
      }
      // object-fit: cover;
    }
  }
  .main-img{
    z-index: 91;
    align-items: center;
    position: absolute;
    top: 0;
    left: auto;
    right: 0;
    &.rtl{
      left: 0;
      right: auto;
    }
    width: 50%;
    height: 100%;
    padding: 8rem;
    .img-frame{
      overflow: visible;
      img{
        filter: drop-shadow(0 0 0.45rem rgba(0, 0, 0, 0.3));
        // opacity: .5;
        // mix-blend-mode: screen;
  
      }
    }
    animation: wiggle 5s infinite ease-in-out;
  
  }
  .header-content {
    position: relative;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    display: flex;
    // justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    padding: 3rem;
    .content-frame{
      width: 50%;
      height: 20rem;
      // background-color: rgba(255, 255, 255, 0.2);
      padding: 2rem 0;
      color: white;
      .content-card{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 1rem;
        // border-bottom: solid 1px white;
        // border-inline-start: solid 1px white;
        // border: solid 1px white;
        // background-color: rgba(255, 255, 255, 0.1);
        background: linear-gradient(-45deg, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.1));
        border-radius: 1rem;
        backdrop-filter: blur(5px);
        .content-top{
          .content-title{
            margin-top: 1rem;
          }
          // .des{
      
          // }
        }
        .content-bottom{
          .go-btn{
            display: inline-block;
            margin-top: 1rem;
            padding: .5rem 2rem;
            // line-height: 1.5rem;
            border-radius: 1.75rem;
            color: white;
            background-color: orangered;
          }
        }
        
      }
    }
    .bottom-ribbon{
      position: absolute;
      left: 0;
      bottom: 3rem;
      width: 100%;
      height: 9rem;
      padding: 0 3rem;
      gap: 1rem;

      .ribbon-card{
        height: 100%;
        aspect-ratio: 1/1;
        background-color: rgba(255, 255, 255, 0.1);
        border: solid 1px white;
        border-radius: 1rem;
        color: white;

      }
    }
    // font-size: 96px;
    // opacity: 0.8;
    // user-select: none;
    // text-shadow: 1px 1px rgba(0,0,0,0.1);
  }
  .gradient-bg {
    position: relative;
    width: 100vw;
    height: 100svh;
    overflow: hidden;
    background: linear-gradient(40deg, var(--color-bg1), var(--color-bg2));
    top: 0;
    left: 0;
    // z-index: 1;

    svg {
      position: fixed;
      top:0;
      left:0;
      width: 0;
      height: 0;
    }


    .gradients-container {
      filter: url(#goo) blur(40px) ;
      width: 100%;
      height: 100%;
      // .test-box{
      //   position: absolute;
      //   bottom: 2rem;
      //   left: 2rem;
      //   width: 10rem;
      //   height: 10rem;
      //   background-color: aqua;
      // }
      .g1 {
        position: absolute;
        background: radial-gradient(circle at center, rgba(var(--color1), 0.8) 0, rgba(var(--color1), 0) 50%) no-repeat;
        mix-blend-mode: var(--blending);
    
        width: var(--circle-size);
        height: var(--circle-size);
        top: calc(50% - var(--circle-size) / 2);
        left: calc(50% - var(--circle-size) / 2);
    
        transform-origin: center center;
        animation: moveVertical 60s ease infinite;
    
        opacity: 1;
      }
    
      .g2 {
        position: absolute;
        background: radial-gradient(circle at center, rgba(var(--color2), 0.8) 0, rgba(var(--color2), 0) 50%) no-repeat;
        mix-blend-mode: var(--blending);
    
        width: var(--circle-size);
        height: var(--circle-size);
        top: calc(50% - var(--circle-size) / 2);
        left: calc(50% - var(--circle-size) / 2);
    
        transform-origin: calc(50% - 400px);
        animation: moveInCircle 40s reverse infinite;
    
        opacity: 1;
      }
    
      .g3 {
        position: absolute;
        background: radial-gradient(circle at center, rgba(var(--color3), 0.8) 0, rgba(var(--color3), 0) 50%) no-repeat;
        mix-blend-mode: var(--blending);
    
        width: var(--circle-size);
        height: var(--circle-size);
        top: calc(50% - var(--circle-size) / 2 + 200px);
        left: calc(50% - var(--circle-size) / 2 - 500px);
    
        transform-origin: calc(50% + 400px);
        animation: moveInCircle 80s linear infinite;
    
        opacity: 1;
      }
    
      .g4 {
        position: absolute;
        background: radial-gradient(circle at center, rgba(var(--color4), 0.8) 0, rgba(var(--color4), 0) 50%) no-repeat;
        mix-blend-mode: var(--blending);
    
        width: var(--circle-size);
        height: var(--circle-size);
        top: calc(50% - var(--circle-size) / 2);
        left: calc(50% - var(--circle-size) / 2);
    
        transform-origin: calc(50% - 200px);
        animation: moveHorizontal 80s ease infinite;
    
        opacity: 0.7;
      }
    
      .g5 {
        position: absolute;
        background: radial-gradient(circle at center, rgba(var(--color5), 0.8) 0, rgba(var(--color5), 0) 50%) no-repeat;
        mix-blend-mode: var(--blending);
    
        width: calc(var(--circle-size) * 2);
        height: calc(var(--circle-size) * 2);
        top: calc(50% - var(--circle-size));
        left: calc(50% - var(--circle-size));
    
        transform-origin: calc(50% - 800px) calc(50% + 200px);
        animation: moveInCircle 40s ease infinite;
    
        opacity: 1;
      }
    
      .interactive {
        position: absolute;
        background: radial-gradient(circle at center, rgba(var(--color-interactive), 0.8) 0, rgba(var(--color-interactive), 0) 50%) no-repeat;
        mix-blend-mode: var(--blending);
    
        width: 100%;
        height: 100%;
        top: -50%;
        left: -50%;
    
        opacity: 0.7;
      }
    }

  }
}

@keyframes wiggle {
  0% {
    transform: rotateZ(0deg) translate(0, .5rem); 
  }
  50% {
    transform: rotateZ(0deg) translate(.5rem, 0); 
  }
  100% {
    transform: rotateZ(0deg) translate(0, .5rem); 
  }
}

@keyframes moveInCircle {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes moveVertical {
  0% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(-50%);
  }
}

@keyframes moveHorizontal {
  0% {
    transform: translateX(-50%) translateY(-10%);
  }
  50% {
    transform: translateX(50%) translateY(10%);
  }
  100% {
    transform: translateX(-50%) translateY(-10%);
  }
}


</style>