<template>
  <section class="header-image" dir="auto">
    <div class="content noselect " :class="rtl()">
      <!-- <div class="top-shape" :class="rtl()" /> -->
      <h1 class="pt-5">{{ title }}</h1>
    </div>
    <div class="img-frame noselect" :class="cover?'cover':'contain'">
      <img :src="`${imgUrl}`" :alt="imgAlt">
    </div>
    <div class="blur-img cover noselect">
      <img :src="`${imgUrl}`" :alt="imgAlt">
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
  title: {
    type: String,
    default: "",
    required: false,
  },
  imgUrl: {
    type: String,
    default: "",
    required: true,
  },
  imgAlt: {
    type: String,
    default: "header-img",
    required: false,
  },
  cover: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/theme";

.header-image{
  position: relative;
  width: 100%;
  aspect-ratio: 4.85/1;

  // height: 300px;
  background-color: $br1;
  .content{
    position: absolute;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    top: 0;
    z-index: 10;
    width: 80%;
    height: 100%;
    padding: 2rem;
    .top-shape {
      position: relative;
      height: 3rem;
      &::after {
        position: absolute;
        content: "";
        background-color: $primary1;
        width: 5rem;
        height: 6px;
        top: 0;
        left: 0;
        right: auto;
      }
      &.rtl{
        &::after {
          left: auto;
          right: 0;
        }
      }
    }
    h1{
      margin-bottom: 3rem;
      font-size: 40px;
      font-weight: 700;
      color: white;
    }
  }
  .img-frame{
    position: relative;
    z-index: 6;
    // filter: saturate(0);
    // &::after{
    //   content: '';
    //   position: absolute;
    //   width: 100%;
    //   height: 100%;
    //   top: 0;
    //   left: 0;
    //   background: linear-gradient(180deg, #000000aa,#00000000,#00000000);
    // }
  }
  .blur-img{
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    img{
      filter: blur(10px);
      transform: scale(1.2);
    }
  }
}

@media (min-width: 768px) and (max-width: 992px){
  .header-image{
    h1{
      font-size: 30x !important;
    }
  }
}
@media (min-width: 330px) and (max-width: 768px){
  .header-image{
    h1{
      font-size: 32px !important;
    }
  }
}
@media (max-width: 320px){
  .header-image{
    h1{
      font-size: 32px !important;
    }
  }
}

</style>
