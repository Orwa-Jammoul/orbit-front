<template>
  <div>
    <div class="main-loader-overlay" v-if="data.show">
      <div class="preloader-bg pcc">
        <div class="preloader pcc flex-column">
          <div class="logo-frame contain">
            <img
              class="logoLoader"
              :src="`/logo/logo-01.png`"
              alt="logo"
            />
          </div>
          <div class="loading-bar" :style="`--progress:${data.percent}%`"></div>
          <div class="progress-percent">{{ data.percent }}%</div>
          <!-- {{ data.percent }} -->
          <!-- <icon class="LoaderSVG" name="eos-icons:bubble-loading" color="#fff" size="50px"/> -->
          <!-- <img class="Loader" src="/loading/loading1.svg" alt="" /> -->
          <!-- <icon class="Loader" name="svg-spinners:6-dots-scale" size="40px"/> -->
          <!-- <icon class="Loader" name="svg-spinners:6-dots-scale-middle" size="35px"/> -->
        </div>
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
  // isLoaded.value = useImageLoaded().value.loaded
  data.percent = 100;
  hide();
};
const hide = () => {
  clear();
  setTimeout(() => {
    data.show = false;
    // isLoaded.value = useImageLoaded().value.loaded = false;
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

nuxtApp.hook("page:start", start);
nuxtApp.hook("page:finish", finish);

// Provide a loader utility
  // nuxtApp.provide('loader', {
  //   start: () => {
  //     // Your start logic
  //   },
  //   finish: () => {
  //     // Your finish logic
  //   },
  //   setProgress: (percent) => {
  //     // Your progress update logic
  //   }
  // });

// watchEffect(() => {
//   isLoaded.value = useImageLoaded().value.loaded
//   console.log('loader check 1', isLoaded.value);
// })
onBeforeUnmount(() => clear);
</script>
<style lang="scss" scoped>
@use "~/assets/styles/scss/theme/theme" as *;

.main-loader-overlay{
  .preloader-bg{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    overflow: hidden;
    background: black;
    // background: linear-gradient(45deg, $primary1 0%, $primary1 30%, black 80%, black 100% );
    .preloader{
      .logoLoader {
        width: 200px;
      }
      .iconify{
        margin-top: 2rem;
        color: white !important;
      }
    }
  }
}

.loading-bar{
  position: relative;
  margin-top: 2rem;
  background-color: rgb(28, 28, 28);
  height: 2px;
  width: 200px;
  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: white;
    width: var(--progress);
    transition: all 100ms ease-in-out;
  }
}

.progress-percent{
  margin-top: 1rem;
  color: white;
  font-size: .8rem;
}

// @-webkit-keyframes animate-preloader {
//   0% {
//     width: 400px;
//   }
//   25% {
//     width: 350px;
//   }
//   50% {
//     width: 400px;
//   }
//   75% {
//     width: 350px;
//   }
//   100% {
//     width: 400px;
//   }
// }

// @keyframes animate-preloader {
//   0% {
//     width: 200px;
//   }
//   25% {
//     width: 250px;
//   }
//   50% {
//     width: 300px;
//   }
//   75% {
//     width: 250px;
//   }
//   100% {
//     width: 200px;
//   }
// }
</style>
