<template>
  <section class="section-root" dir="auto">
    <div class="to-down-shadow"></div>
    <div class="container">
      <div class="row">
        <div class="section-img-frame col-12 col-lg-6">
          <img class="section-img w-100" src="/imgs/img-01.png" alt="img">
        </div>
        <div class="col-12 col-lg-6">
          <h1 class="section-title">
            {{ $t('about-us') }}
          </h1>
          <p class="section-des">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, soluta. Eligendi explicabo temporibus ad ipsa vitae totam tempore expedita itaque sit blanditiis. Veniam minima sit at enim ut aliquam saepe.
          </p>
          <div class="cards-frame">
            <div class="about-card">
              <div class="left">
                <div class="img-frame cover">
                  <img src="/imgs/img-01.png" alt="img">
                </div>
              </div>
              <div class="center">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ad!
                </p>
              </div>
              <div class="right pcc">
                <icon v-if="isAr()" name="material-symbols:arrow-back-ios-new-rounded" size="20px"/>
                <icon v-else name="material-symbols:arrow-forward-ios-rounded" size="20px"/>
              </div>
            </div>
            <div class="about-card">
              <div class="left">
                <div class="img-frame cover">
                  <img src="/imgs/img-01.png" alt="img">
                </div>
              </div>
              <div class="center">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ad!
                </p>
              </div>
              <div class="right pcc">
                <icon v-if="isAr()" name="material-symbols:arrow-back-ios-new-rounded" size="20px"/>
                <icon v-else name="material-symbols:arrow-forward-ios-rounded" size="20px"/>
              </div>
            </div>
            <div class="about-card">
              <div class="left">
                <div class="img-frame cover">
                  <img src="/imgs/img-01.png" alt="img">
                </div>
              </div>
              <div class="center">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ad!
                </p>
              </div>
              <div class="right pcc">
                <icon v-if="isAr()" name="material-symbols:arrow-back-ios-new-rounded" size="20px"/>
                <icon v-else name="material-symbols:arrow-forward-ios-rounded" size="20px"/>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <!-- <EffectSpark/> -->
    <div class="to-up-shadow"></div>
    <svg>
      <defs>
        <filter id="svg-filter">
          <feTurbulence id="turbulence" baseFrequency="0.03" numOctaves="3" seed="1" result="noise"></feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"></feDisplacementMap>
        </filter>
      </defs>
    </svg>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.section-root{
  position: relative;
  min-height: calc( 100vh - 5rem) ;
  padding-top: 3rem;
  background-color: $primary4;
  color: white;
  background: linear-gradient(45deg, hsl(0, 0%, 20%), $primary4);
  
  .section-title, .section-des{
    margin-bottom: 1rem;
    // filter: url("#svg-filter");
  }
  .section-img-frame{
    // position: relative;
    // filter: url('#svg-filter');
    .section-img{
      // position: absolute;
      // left: 0;
      // top: 0;
      // width: 100%;
      // height: 100%;
      mix-blend-mode: screen;
      filter: brightness(1.2) contrast(1.1) hue-rotate(5deg);
      // animation: wiggle 5s infinite ease-in-out;
  
    }
  }

  .cards-frame{
    .about-card{
      // display: flex;
      // justify-content: flex-start;
      display: grid;
      grid-template-columns: 4fr 8fr 1fr;
      padding: 1rem;
      border:solid 1px rgba(255, 255, 255, 0.3);
      margin-bottom: .5rem;
      .left{
        height: 5rem;
        padding-inline-end: 1rem;
        // .img-frame{

        // }
      }


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