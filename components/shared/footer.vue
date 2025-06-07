<template>
  <div class="main-footer" id="footer-main" dir="auto">
    <div class="top-section grid-bg1 pcc flex-column">
      <div class="bg-effect">
        <div class="circle"></div>
      </div>
      <!-- <img class="bg-img" src="/imgs/carl-wang-lsxADNRNmc8-unsplash.jpg" alt=""> -->
      <!-- <video class="bg-video" src="/videos/blackhole-01.mp4" autoplay="true" controls="false" loop></video> -->
      <!-- <video class="bg-video" autoplay loop>
        <source src="/videos/blackhole-01.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video> -->
      
      <div class="logo-frame contain">
        <img src="/logo/logo-02.png" alt="logo">
      </div>
      <div class="links-frame">
        <nuxt-link class="link-item" v-for="page in pages" :to="localePath(page.pageUrl)" :key="page.id">
          {{ useName(page,0,0,1) }}
        </nuxt-link>
      </div>
    </div>
    <div class="bottom-section rp">
      <div class="footer-links pcs">
        <nuxt-link class="footer-link" :to="localePath('/privacy-policy')">
          {{ $t('privacy-policy') }}
        </nuxt-link>
        <nuxt-link class="footer-link" :to="localePath('/terms-and-conditions')">
          {{ $t('terms-and-conditions') }}
        </nuxt-link>
      </div>
      <h5 class="Copyright">
        <span>
          Copyright © {{ new Date().getFullYear() }} Orbit Engineering Office 
        </span>
      </h5>
    </div>
  </div>
</template>

<script setup>
const pages = ref(useMenu().value.navbar);
// const pages = ref(useMenu().value.footer);
// const allSocialMedia = ref(useMenu().value.social);
// console.log(useMenu().value);

</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/theme";
.main-footer{
  // background: linear-gradient(to right, $primary2 0%, $primary2 30%, $primary2b 80%, $primary2c 100% );
  background-color: rgba($color: $primary2, $alpha: .3) ;
  .top-section{
    position: relative;
    height: 40rem;
    padding-top: 2rem;
    // background-color: rgba(0, 0, 0, 0.8);
    // background-color: rgb(51, 51, 51);
    background-color: black;
    overflow: hidden;

    .bg-effect{
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(70%);
      .circle{
        position: relative;
        // z-index: 2;
        height: 150%;
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: black;
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          translate: -50% -55%;
          width: 135%;
          aspect-ratio: 1;
          background: radial-gradient(rgba(39, 129, 255, 0.8) 30%, transparent 50%);
          z-index: -1;
          animation: randomFloat 6s ease-in-out infinite;
        }
      }
    }
    .bg-img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
      // pointer-events: none;
      // mix-blend-mode: screen;
      opacity: .2;
    }

    .bg-video{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
      // pointer-events: none;
      // mix-blend-mode: screen;
      // opacity: .2;
    }
    .logo-frame{
      width: 100%;
      height: 10rem;
    }
    .links-frame{
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem 0;
      margin-top: 2rem;
      .link-item{
        color: white;
        margin-inline-end: 1rem;
        transition: all 200ms ease-in-out;
        &:hover{
          color: $primary;
        }
      }
    }
  }
  .bottom-section{
    // background: linear-gradient(to right, $primary2 0%, $primary2 30%, $primary2b 80%, $primary2c 100% );
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $primary1;
    
    // margin-top: 2rem;
    // background: none;
    // background-color: black;
    .footer-links{
      .footer-link{
        color: white;
        font-size: .9rem;
        text-decoration: underline !important;
        &:not(:last-child){
          margin-inline-end: 1rem;
        }
      }
    }
    .Copyright{
      padding: 1rem 0;
      margin: 0;
      color: white !important;
      font-weight: 400;
      font-size: 13px;
      text-align: center;
      padding-inline-end: 3rem;
    }

    @media (max-width:992px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .footer-links{
        padding: 5px;
      }
      .Copyright{
        padding: 5px;
        padding-bottom: 10px;
        // padding-inline-end: 0;
      }
    }
  }
}

@media print {
  .main-footer {
    display: none; 
  }
}
</style>