<template>
  <div class="home-page">
    <!-- <HomeMainHeader/> -->
    <HomeMainHeader/>
    <HomeTech/>
    <HomeAboutUs/>
    <HomeServices/> 
    <!-- <div class="banner cover">
      <img src="/imgs/moon-01.jpg" alt="">
    </div> -->
    <HomeTraining/>
    <!-- <HomePartners/> -->
    <!-- <HomeTest/> -->
    <!-- <HomeTest2/> -->
    <!-- <HomeExperiences/> -->
    <!-- <HomeContact/> -->

    <!-- <EffectAnimatedGrid2 /> -->
    <!-- <EffectAnimatedGrid /> -->
    <!-- <EffectAnimatedGrid4 :size="15" :cellSize="15"/> -->

    <!-- <EffectSphere/> -->
    
    <!-- <CanvasCircles/> -->
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home-page{
  min-height: 100vh;
  // background-color: $br1;
  // padding-top: 2rem;
  // padding-bottom: 2rem;
  .group{
    position: relative;
    overflow: hidden;
    background-color: white;
    .bg1{
      z-index: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .bg2{
      z-index: 0;
      position: absolute;
      bottom: 35%;
      left: 0;
      overflow: hidden;
    }
    .bg3{
      z-index: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .bg4{
      z-index: 0;
      position: absolute;
      bottom: -20%;
      left: 0;
      overflow: hidden;
    }
  }
  .banner{
    width: 100%;
    img{
      opacity: .8;
    }
  }

}
</style>