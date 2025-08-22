<template>

  <div class="globe-container">
    <div class="globe">
      <div class="titles">
        <h1 class="page-title metal-text">{{ $t('contact-us') }}</h1>
        <h2 class="page-subtitle">{{ $t('four-customer-service') }}</h2>
      </div>
      <canvas class="globe-canvas" ref="canvasRef" />
    </div>
  </div>
</template>

<script setup>
const canvasRef = ref(null)
let globe = null
let phi = 0

onMounted(async () => {
  if (process.client) {
    const { default: createGlobe } = await import('cobe')
    const canvas = canvasRef.value
    // const size = Math.min(600, window.innerWidth -40)
    const size = 400
    
    canvas.width = size * 2
    canvas.height = size * 2

    globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: canvas.width,
      height: canvas.height,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [1, 0.5, 1],
      glowColor: [.2, .6, 1], //.2, .6, 1
      // offset: [0, 0],
      offset: [0, 0],
      markers: [
        { location: [42.3223, -83.1763], size: 0.1, color: [0.3, 0.3, 0.8] ,},  // Dearborn, Michigan, United States
        // { location: [40.7128, -74.006], size: 0.1, color: [0.3, 0.3, 0.8] ,},  // New York
        { location: [35.0118, 37.0523], size: 0.15, color: [0.8, 0.3, 0.8] ,},  // سلمية، حماه، سورية
        // { location: [33.5138, 36.2765], size: 0.15, color: [0.3, 0.3, 0.8],}, // Damascus, Syria
        { location: [52.5200, 13.4050], size: 0.1, color: [0.3, 0.3, 0.8],}, // Berlin, Germany
        { location: [24.4539, 54.3773], size: 0.1, color: [0.3, 0.3, 0.8],},   // Abu Dhabi
        // Add more markers as needed
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi
        phi += 0.01
        // console.log(phi.value);
      },
    })

    // Add city markers
    // Object.entries(cities).forEach(([city, coords]) => {
    //   globe.value.addMarker({
    //     location: coords,
    //     size: 0.05,
        // onMouseEnter: () => {
        //   currentCity.value = city
        // },
    //     onMouseLeave: () => {
    //       currentCity.value = ''
    //     }
    //   })
    // })
  }
})

onBeforeUnmount(() => {
  if (globe) {
    globe.destroy()
  }
})
</script>

<style lang="scss" scoped>
.globe-container {
  width: 100%;
  background-color: black;
  .globe{
    // width: 100%;
    // max-width: 600px;
    // aspect-ratio: 1;
    // margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%; /* or whatever height you prefer */
    // overflow: hidden;
    .titles{
      .page-title{
        font-size: 4rem;
        line-height: 4rem;
        // margin-bottom: 0;
        // padding-bottom: 0;
      }
      .page-subtitle{
        font-size: 1.3rem;
        font-weight: 200;
        padding-top: 1rem;
        border-top: solid 1px white;
      }
    }
    .globe-canvas {
      // width: 100%;
      // height: 100%;
      // display: block;
      // width: 100%;
      width: 400px;
      aspect-ratio: 1;
      // max-width: 600px; /* adjust as needed */
      // height: auto;
      display: block;
      margin: 0;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      .titles{
        padding-top: 2rem;
      .page-title{
        font-size: 3rem;
        line-height: 3rem;
      }
      .page-subtitle{
        font-size: 1.2rem;
        font-weight: 200;
      }
    }
    }
  }
}

</style>