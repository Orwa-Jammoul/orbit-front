<template>
  <div class="home-page">
    <!-- <HomeMainHeader/> -->
    <HomeMainHeader/>
    <HomeTech/>
    <HomeAboutUs/>
    <!-- <HomeExperiences/> -->
    <HomeHowDoWeWork/>
    <HomeServices class="my-10"/> 
    <div class="logo-frame pcc">
      <img class="logo" src="/logo/Orbit_company-logo-side-both-blue.svg" alt="logo" >
    </div>
    <div class="banner cover">
      <img src="/imgs/moon-01.jpg" alt="on the moon image">
    </div>
    <HomeTraining class="mt-10"/>
    <HomeQuotes/>

    <!-- <div class="rp">
      <FormMessage/>
    </div> -->

    <!-- <ThreeSphere1/> -->
    <!-- <ThreeSphereLines/> -->

    <!-- <HomePartners/> -->
    <!-- <HomeTest/> -->
    <!-- <HomeTest2/> -->
    <!-- <HomeContact/> -->

    <!-- <EffectSphere/> -->
    
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
  .logo-frame{
    margin-top: 5rem;
    img{
      width: max(40%, 10rem)  !important;
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