<template>
  <section id="wrapper" class="error-page">
    <div class="error-box">
      <!-- <div class="img-frame h-25 contain">
        <embed
          class="svg"
          type="image/svg+xml"
          src="/animated/planet-earth-svgrepo-com.svg"
        />
        <img src="/animated/planet-earth-svgrepo-com.svg" alt="planet">
      </div> -->
      <div class="error-body text-center">
        <h1 class="mb-2 mb-dmd-3 mb-xl-5 gradient-text" style="">
          {{ error?.statusCode }}
        </h1>
        <h3 class="text-uppercase gradient-text" style="">{{ heading }}</h3>
        <p class="text-black m-t-30 m-b-30">{{ description }}</p>
        <button
          @click="handleError"
          class="btn-home"
        >
          {{ t("back-to-home") }}
        </button>
      </div>
      <footer class="footer text-center">
        Copyright &copy; {{ new Date().getFullYear() }}
        <span class="fw-bold gradient-text" style=""
          >Orbit Engineering Office</span
        >
      </footer>
    </div>
  </section>
</template>

<script setup>
const error = useError();
// const i18e = useI18n();
// console.log('error : ', error.value.message, error.value.stack)
const heading = computed(() =>
  error.value?.statusCode == "404"
    ?t("page-not-found")
    :t("server-error")
);
const description = computed(() =>
  error.value?.statusCode === "404"
    ?t("could-not-find-page-msg")
    :t("error-occurred-msg")
);
const handleError = () => clearError({ redirect: "/" });
</script>

<style lang="scss" scoped>
@use "~/assets/styles/scss/theme/theme";
// .svg {
//   .rotate {
//     animation: rotate 5s linear infinite;
//   }
// }

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.error-box {
  height: 100%;
  position: fixed;
  background: url(/essential/error-bg.jpg) center center no-repeat #fff !important;
  width: 100%;
}

.m-t-30 {
  margin-top: 30px !important;
}

.m-b-30 {
  margin-bottom: 30px !important;
}

.m-b-40 {
  margin-bottom: 40px !important;
}

.btn-home {
  background-color: $primary;
  border-radius: 60px;
  border: none;
  color: white;
  position: relative;
  padding: 2px 12px;
  transition: all 200ms ease-in-out;
  &:hover{
    background-color: $primary1;
  }
}


.error-box .footer {
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  color: #58666e;
  left: 0;
  padding: 20px 30px;
  position: absolute;
  right: 0;
  background: #fff;
}

.error-body {
  padding-top: 5%;
}

.error-body h1 {
  font-size: fluid(100px, 210px);
  font-weight: 900;
  line-height: 210px;
}
</style>
