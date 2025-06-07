<template>

    <div class="canvas" ref="sketchContainer"></div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import p5 from 'p5';

const sketchContainer = ref(null);

onMounted(() => {
  if (process.client && sketchContainer.value) {
    new p5((p) => {
      let start = 0;
      p.setup = () => {
        p.createCanvas(1000, 1000, p.WEBGL);
        p.pixelDensity(1);
        p.angleMode(p.DEGREES);
        p.rectMode(p.CENTER);
        p.noiseDetail(1);
      };
      p.draw = () => {
        p.background(30);
        p.noFill();
        p.stroke(255);
        p.strokeWeight(3);
        p.translate(0, -100, -800);
        p.rotateX(50);
        for (let n = 0; n < 50; n++) {
          p.push();
          p.beginShape();
          for (let i = 0; i < 360; i += 3) {
            const rad = n * 16;
            const x = rad * p.cos(i);
            const y = rad * p.sin(i);
            const z = p.map(p.cos(p.frameCount * 3 + n * 10), 0, 1, -50, 50);
            const g = p.map(z, -100, 100, 150, 200) + p.sin(p.frameCount * 2) * 50;
            const b = p.map(n, 0, 500, 100, 150) + p.cos(p.frameCount / 2) * 100;
            const r = p.map(n, 0, 500, 200, 150) - p.sin(p.frameCount / 4) * 50;
            p.stroke(r, g, b);
            p.vertex(x, y, z);
          }
          p.endShape(p.CLOSE);
          p.pop();
        }
        start += 0.05;
      };
    }, sketchContainer.value);
  }
});
</script>

<style lang="scss" scoped>
  .canvas{
    height: calc(100vh - 5rem);
    background-color: $primary4;
  }
</style>