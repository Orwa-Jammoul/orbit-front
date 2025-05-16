<template>
  <div ref="container" class="three-container"></div>
</template>

<script setup>
// import Spheres2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.8/build/backgrounds/spheres2.cdn.min.js'
import Spheres2Background from 'assets/js/s2bsrc.js';

const container = ref(null)

// const bg = Spheres2Background(container.value, {
const bg = Spheres2Background(document.getElementById('webgl-canvas'), {
count: 2,
// colors: [0xff0000, 0x0, 0xffffff],
colors: [0x29ABE2, 0x0, 0xffffff],
attraction: 0.05,
minSize: 0.5,
maxSize: 1,
// count: 200,
// colors: [0xff0000, 0x00ff00, 0xffffff],
// pointLightIntensity: 150,
// directionalLightColor: 0xffffff,
// directionalLightIntensity: 5,
// materialParams: {
//   metalness: 0.5,
//   roughness: 0.5,
//   clearcoat: 1,
//   clearcoatRoughness: 0.15
// },
// minSize: 0.25,
// maxSize: 1,
// size0: 3,
// attraction: 0.15,
// friction: 0.999,
// maxVelocity: 0.15
})


// onMounted(() => {
//   container.value.appendChild(renderer.domElement);
// })

</script>

<style lang="scss" scoped>
.three-container {
  width: 100%;
  height: 100vh;
}
</style>