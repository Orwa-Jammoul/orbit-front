<template>
  <div>
      <div class="main-loader-overlay" v-if="data.show">
        <div class="d-flex align-items-center justify-content-center h-100">
          <img  class="image" src="/newdisign/logo.png" alt="">
          <img class="Loader" src="/loading/loadingnew.svg" alt="" />

          <!-- <NuxtImg class="custom_blink" format="avif,webp" src="/newlogo/Untitled-1-01.png" :placeholder="[100, 75]" sizes="150px sm:200px lg:250px"/> -->
        </div>
      </div>
  </div>
</template>

<script setup>
const props = defineProps({
  throttle: {
    type: Number,
    default: 200,
  },
  duration: {
    type: Number,
    default: 2000,
  },
  height: {
    type: Number,
    default: 3,
  },
});
// Options & Data
const data = reactive({
  percent: 0,
  show: false,
  canSucceed: true,
});
// Local variables
let _timer = null;
let _throttle = null;
let _cut;

// Functions
const clear = () => {
  _timer && clearInterval(_timer);
  _throttle && clearTimeout(_throttle);
  _timer = null;
};
const start = () => {
  clear();
  data.percent = 0;
  data.canSucceed = true;
  
  if (props.throttle) {
    _throttle = setTimeout(startTimer, props.throttle);
  } else {
    startTimer();
  }
};
const set = (num) => {
  data.show = true;
  data.canSucceed = true;
  data.percent = Math.min(100, Math.max(0, Math.floor(num)));
};
const increase = (num) => {
  data.percent = Math.min(100, Math.floor(data.percent + num));
};
const decrease = (num) => {
  data.percent = Math.max(0, Math.floor(data.percent - num));
};
const pause = () => clearInterval(_timer);
const resume = () => startTimer();
const finish = () => {
  // isLoaded.value = useImageLouded().value.loaded
  data.percent = 100;
  hide();
};
const hide = () => {
  clear();
  setTimeout(() => {
    data.show = false;
    // isLoaded.value = useImageLouded().value.loaded = false;
    setTimeout(() => {
      data.percent = 0;
    }, 400);
  }, 500);
};
const startTimer = () => {
  data.show = true;
  _cut = 10000 / Math.floor(props.duration);
  _timer = setInterval(() => {
    increase(_cut);
  }, 100);
};

// Hooks
const nuxtApp = useNuxtApp();

nuxtApp.hook('page:start', start);
nuxtApp.hook('page:finish', finish);

// watchEffect(() => {
//   isLoaded.value = useImageLouded().value.loaded
//   console.log('loader check 1', isLoaded.value);
// })
onBeforeUnmount(() => clear);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/theme/variables";
@import "@/assets/styles/scss/theme/mixin";

// .image {
//   width: 450px;
// }

.landing-page {
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 999999;
}

#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  object-fit: fill;
  width: 100vw; 
  min-width: 100vw; 
  min-height: 100vh;
}

.main-loader-overlay {
  position: fixed;
  background: $green;
  z-index: 9999999;
}

.custom_blink {
  animation: blinker 2s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: .5;
  }
}

.loader-percent {
    display: inline-block;
    position: relative;    
    top: calc(50% - 40px);
    color: #fff;
    &.rtl { right: calc(50% - 97px); }
    &.ltr { left: calc(50% - 97px); }
}


.overflow-section {
  position: absolute;
  background: #263038;
  z-index: 2;
}

.main-loader-overlay,
.overflow-section {
  inset: 0;
  -webkit-backdrop-filter: blur(3px);
          backdrop-filter: blur(3px);
}

.main-loader-overlay .lds-facebook,
.overflow-section .lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;  
  top: calc(50% - 40px);
  &.rtl { right: calc(50% - 40px); }
  &.ltr { left: calc(50% - 40px); }
}

.main-loader-overlay .lds-facebook div,
.overflow-section .lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #fff;
  -webkit-animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
          animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}

.main-loader-overlay .lds-facebook div:nth-child(1),
.overflow-section .lds-facebook div:nth-child(1) {
  left: 8px;
  -webkit-animation-delay: -0.24s;
          animation-delay: -0.24s;
}

.main-loader-overlay .lds-facebook div:nth-child(2),
.overflow-section .lds-facebook div:nth-child(2) {
  left: 32px;
  -webkit-animation-delay: -0.12s;
          animation-delay: -0.12s;
}

.main-loader-overlay .lds-facebook div:nth-child(3),
.overflow-section .lds-facebook div:nth-child(3) {
  left: 56px;
  -webkit-animation-delay: 0;
          animation-delay: 0;
}

@-webkit-keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }

  50%, 100% {
    top: 24px;
    height: 32px;
  }
}

@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }

  50%, 100% {
    top: 24px;
    height: 32px;
  }
}


</style>
