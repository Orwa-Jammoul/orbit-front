<template>
  <section class="section-root grid-bg2" dir="auto">
    <div class="img-frame contain">
      <img src="/imgs/spaceship.png" alt="image about us">
    </div>
    <div class="about-frame">
      <div class="about-box1 grid-bg1">
        <h1 class="metal-text">
          {{ useName(about) }}
        </h1>
        <p>{{ getInnerText(useDes(about)) }}</p>
        <div class="go-to pcs">
          <p class="m-0">
            {{ $t('read-more') }}
          </p>
          <nuxt-link class="icon-frame pcc mx-0 ms-2" :to="langPath('/about-us')">
            <icon v-if="!isAr()" name="material-symbols:arrow-forward-rounded" size="20px"/>
            <icon v-else name="material-symbols:arrow-back-rounded" size="20px"/>
          </nuxt-link>
        </div>
        <div class="gr-circle1"/>
        <div class="gr-circle3"/>
      </div>
      <div class="about-box2 grid-bg1">
        <h1 class="metal-text">
          {{ useName(about) }}
        </h1>
        <p>{{ getInnerText(useDes(about)) }}</p>
         <div class="go-to pcs">
          <p class="m-0">
            {{ $t('read-more') }}
          </p>
          <nuxt-link class="icon-frame pcc mx-0 ms-2" :to="langPath('/about-us')">
            <icon v-if="!isAr()" name="material-symbols:arrow-forward-rounded" size="20px"/>
            <icon v-else name="material-symbols:arrow-back-rounded" size="20px"/>
          </nuxt-link>
        </div>
        <div class="gr-circle1"/>
        <div class="gr-circle3"/>
      </div>
    </div>
    <div class="gr-circle1"/>
    <div class="gr-circle2"/>
  </section>
</template>

<script setup>
const { public: {api, apiBase} } = useRuntimeConfig();
const { data:about } = await useGetSiteApi().GetAll(
  `${api.Blocks}/1`
);

</script>

<style lang="scss" scoped>
@use"~/assets/styles/scss/theme/theme" as *;
.section-root{
  position: relative;
  width: 100svw;
  overflow: hidden;
  // background-image: url('/svg/grid-vector.svg');
  // background-size: 100%;
  // background-repeat: repeat;
  min-height: calc( 200vh - 5rem) ;
  padding-top: 3rem;
  background-color: black;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  .img-frame{
    position: relative;
    z-index: 20;
    width: 70%;
    max-width: 40rem;
    animation: wiggle 5s forwards ease-in-out infinite;
  }
  .about-frame{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 3rem;

    .about-box1{
      position: relative;
      z-index: 10;
      width: 100%;
      // min-width: 25rem;
      // height: 40%;
      background-color: black;
      border-radius: .5rem;

      padding: 1rem;
      overflow: hidden;
      .go-to{
        position: relative;
        z-index: 2;
        // text-decoration: underline;
        .icon-frame{
          width: 2rem;
          aspect-ratio: 1;
          border-radius: 50%;
          background-color: $primary;
          color: white;
          cursor: pointer;
        }
      }

    }
    .about-box2{
      position: relative;
      z-index: 10;
      width: 100%;
      // min-width: 25rem;
      // height: 40%;
      background-color: black;
      border-radius: .5rem;

      padding: 1rem;
      overflow: hidden;
      .go-to{
        position: relative;
        z-index: 2;
        // text-decoration: underline;
        .icon-frame{
          width: 2rem;
          aspect-ratio: 1;
          border-radius: 50%;
          background-color: $primary;
          color: white;
          cursor: pointer;
        }
      }
    }
    .about-fields{
      position: absolute;
      z-index: 10;
      inset-inline-end: 3rem;
      bottom: 3rem;
      width: 50%;
      height: 10rem;
      background-color: black;
      border-radius: .5rem;

      // padding: 1rem;
      overflow: hidden;
      // border: solid 1px white;

      img{
        object-fit: cover;
        object-position: right;
      }
      // display: flex;

      // .about-field{
      //   position: absolute;
      //   // inset-inline-end: 101%;
      //   top: 0;
      //   background-color: white;
      //   height: 100%;
      //   aspect-ratio: 1;
      //   // margin-inline-end: 1rem;
      //   color: black;
      //   animation: slide-move-i 15s linear forwards infinite;
      //   animation-delay: calc(var(--i) * 2300ms);
      // }
      // @keyframes slide-move-i {
      //   from{
      //     // inset-inline-start: auto;
      //     inset-inline-end: 101%;
      //   }
      //   to{
      //     // inset-inline-start: 101%;
      //     inset-inline-end: -30%;
      //   }
      // }
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
</style>