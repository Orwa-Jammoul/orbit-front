<template>
  <section class="section-root grid-bg2 rp" dir="auto">

    <div class="ci" style="--c-top: 10%; --c-delay: 0ms; --c-size: 4px;"></div>
    <div class="ci" style="--c-top: 15%; --c-delay: 100ms; --c-size: 5px;"></div>
    <div class="ci" style="--c-top: -10%; --c-delay: 300ms; --c-size: 3px;"></div>
    <div class="ci" style="--c-top: 5%; --c-delay: 500ms; --c-size: 5px;"></div>
    <div class="ci" style="--c-top: -5%; --c-delay: 200ms; --c-size: 5px;"></div>
    <div class="ci" style="--c-top: 18%; --c-delay: 700ms; --c-size: 5px;"></div>
    <div class="ci" style="--c-top: -12%; --c-delay: 900ms; --c-size: 4px;"></div>
    <div class="ci" style="--c-top: 8%; --c-delay: 1200ms; --c-size: 5px;"></div>
    <div class="ci" style="--c-top: -18%; --c-delay: 400ms; --c-size: 3px;"></div>
    <div class="ci" style="--c-top: 20%; --c-delay: 100ms; --c-size: 5px;"></div>
    <div class="ci" style="--c-top: -8%; --c-delay: 600ms; --c-size: 5px;"></div>
    <div class="ci" style="--c-top: 12%; --c-delay: 1300ms; --c-size: 5px;"></div>
    <div class="ci" style="--c-top: -15%; --c-delay: 1500ms; --c-size: 2px;"></div>
    <div class="ci" style="--c-top: 3%; --c-delay: 300ms; --c-size: 5px;"></div>
    <div class="ci" style="--c-top: -3%; --c-delay: 1100ms; --c-size: 5px;"></div>
    <div class="ci" style="--c-top: 17%; --c-delay: 800ms; --c-size: 4px;"></div>
    <div class="ci" style="--c-top: -20%; --c-delay: 1400ms; --c-size: 5px;"></div>
    <div class="ci" style="--c-top: 0%; --c-delay: 500ms; --c-size: 5px;"></div>
    <div class="ci" style="--c-top: -7%; --c-delay: 1000ms; --c-size: 5px;"></div>
    <div class="ci" style="--c-top: 19%; --c-delay: 200ms; --c-size: 3px;"></div>
    <div class="ci" style="--c-top: -19%; --c-delay: 1300ms; --c-size: 5px;"></div>
    <div class="ci" style="--c-top: 4%; --c-delay: 900ms; --c-size: 5px;"></div>
    <div class="ci" style="--c-top: -14%; --c-delay: 400ms; --c-size: 4px;"></div>
    <div class="ci" style="--c-top: 13%; --c-delay: 1100ms; --c-size: 5px;"></div>
    
    <!-- <div class="vl"></div> -->



    <div class="img-frame contain">
      <img :src="`/imgs/spaceship.png`" alt="image about us">
    </div>
    <div class="about-frame">
      <div class="about-box grid-bg1">
        <h1 class="metal-text">
          {{ useName(about) }}
        </h1>
        <p>{{ getInnerText(useDes(about)) }}</p>
        <!-- <div class="go-to pcs">
          <p class="m-0">
            {{ $t('read-more') }}
          </p>
          <nuxt-link class="icon-frame pcc mx-0 ms-2" :to="localePath('about-us')">
            <icon v-if="!isAr()" name="material-symbols:arrow-forward-rounded" size="20px"/>
            <icon v-else name="material-symbols:arrow-back-rounded" size="20px"/>
          </nuxt-link>
        </div> -->
        <div class="gr-circle1"/>
        <div class="gr-circle3"/>
      </div>
      <div class="about-box grid-bg1">
        <!-- <h1 class="metal-text">
          {{ useName(about) }}
        </h1> -->
        <p>{{ getInnerText(useDes1(about)) }}</p>

          <nuxt-link class="go-to pcs mx-0 ms-2" :to="localePath('about-us')">
            <p class="m-0">
              {{ $t('read-more') }}
            </p>
            <div class="icon-frame pcc">
              <icon v-if="!isAr()" name="material-symbols:arrow-forward-rounded" size="20px"/>
              <icon v-else name="material-symbols:arrow-back-rounded" size="20px"/>
            </div>
          </nuxt-link>

        <div class="gr-circle1"/>
        <div class="gr-circle3"/>
      </div>
    </div>
    <!-- <div class="gr-circle1"/>
    <div class="gr-circle2"/> -->
  </section>
</template>

<script setup>
const localePath = useLocalePath()
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
  min-height: calc( 120vh - 5rem) ;
  padding-top: 3rem;
  background-color: black;
  color: white;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-top: 2rem;
  margin-bottom: 4rem;

  .ci{
    position: absolute;
    left: 110%;
    top: calc(50% + var(--c-top));
    width: var(--c-size);
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: $primary;
    animation: fast-move 1.5s forwards linear infinite;
    animation-delay: var(--c-delay);
    transform: scale(.5);
  }
  // .vl{
  //   position: absolute;
  //   left: 110%;
  //   top: 0;
  //   width: 1px;
  //   height: 100%;
  //   border-left: solid 1px rgba($color: $primary, $alpha: .5) ;
  //   animation: fast-move 2s forwards linear infinite;
  // }
  .img-frame{
    position: relative;
    z-index: 20;
    width: 50%;
    max-width: 40rem;
    padding-inline-end: 3rem;
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

    .about-box{
      position: relative;
      z-index: 10;
      width: 60%;
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
        p{
          color: white;
          padding-inline-end: 1rem;
        }
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
  @media (max-width:1024px) {
    min-height: calc( 200vh - 5rem) ;
    justify-content: center;
    .img-frame{
      width: 80%;
    }
    .about-box{
      width: 100% !important;
    }
  }
}

@keyframes wiggle {
  0% {
    transform: rotateZ(0deg) translate(0, 1rem); 
  }
  50% {
    transform: rotateZ(0deg) translate(1rem, 0); 
  }
  100% {
    transform: rotateZ(0deg) translate(0, 1rem); 
  }
}
@keyframes fast-move {
  0% {
    left: 110%;
  }
  100% {
    left: -10%;
  }
}
</style>