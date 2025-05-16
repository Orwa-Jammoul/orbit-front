<template>
  <div class="main-section">
    <div class="img-frame cover">
      <img :class="{'invert':!isDark()}" :src="`/header/01.jpg`"  alt="header">
      <!-- <img v-else :src="`/header/03.jpg`" alt="header"> -->
      <div class="window"></div>
      <div class="gradient"></div>
    </div>
    <div class="header-content pcc flex-column">
      <nuxt-link class="header-btn mb-5" :to="`/`">
        Orbit Engineering Office
      </nuxt-link>
      <h1 class="header-title">
        Orbit Engineering Office
      </h1>
      <p class="header-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ipsa natus, est nulla unde soluta earum laudantium alias iusto a, aliquam voluptate dolores! Rerum dolorem laborum similique molestias illo aperiam?
      </p>
      <nuxt-link class="header-btn mt-5" :to="`/`">
        check out our new courses
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use "~/assets/styles/scss/theme/theme";
.main-section{
  position: relative;
  height: 100vh;
  .img-frame{
    height: 100%;
    position: relative;
    .window{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      // transform: translate(-50%,-50%);
      backdrop-filter: blur(40px);
      // filter: brightness(.5);
      filter: hue-rotate(150deg);
    }
    .gradient{
      position: absolute;
      width: 100%;
      height: 20%;
      bottom: 0;
      left: 0;

      background: linear-gradient(to top, var(--background), rgba( $color: var(--background), $alpha: 0));
    }
    img.invert{
      filter: invert(1);
    }
  }
  .header-content{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 4rem;
    .header-title{
      color: var(--primary);
      font-size: 4rem;
      font-weight: 700;
    }
    .header-description{
      width: 70%;
      color: var(--text);
      text-align: center;

    }
    .header-btn{
      height: 2.4rem;
      border-radius: 1.2rem;
      padding: 5px 10px;
      color: var(--text);
      border:solid 1px $br60;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>