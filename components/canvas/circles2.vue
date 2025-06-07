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
      p.setup = () => {
        p.createCanvas(500, 500);
        p.angleMode(p.DEGREES);
      };
      p.draw = () => {
        p.background(19,19,19);
        p.strokeWeight(4);
        p.noFill();
        p.translate(p.width / 2, p.height / 2);
        
        for (let t = 0; t < 5; t++) {
          p.stroke(100 - t * 20, 150 - t * 30, 220 - t * 30);
          p.beginShape();
          
          for (let i = 0; i < 359; i++) {
            const r1Min = p.map(p.sin(p.frameCount), -1, 1, 50, 120);
            const r1Max = p.map(p.sin(p.frameCount * 2), -1, 1, 100, 20);
            const r2Min = p.map(p.sin(p.frameCount / 2), -1, 1, 120, 50);
            const r2Max = p.map(p.sin(p.frameCount), -1, 1, 20, 100);
            const r1 = p.map(p.sin(i * 3), -1, 1, r1Min, r1Max);
            const r2 = p.map(p.sin(i * 6 + 90), -1, 1, r2Min, r2Max);
            const r = r1 + r2 - t * 10;
            const x = r * p.cos(i);
            const y = r * p.sin(i);
            p.vertex(x, y);
          }
          
          p.endShape(p.CLOSE);
        }
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