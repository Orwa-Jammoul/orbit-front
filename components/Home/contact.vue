<template>
  <div class="section-root" dir="auto">
    <EffectWords :text="someText"/>
  </div>
</template>

<script setup>
const someText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A optio, vero fugit totam repellat culpa modi cumque ratione. Quo, quam."
</script>


<style lang="scss" scoped>
@use"~/assets/styles/scss/theme/theme" as *;

.section-root{
  position: relative;
  height: calc( 100vh - 5rem) ;
  padding-top: 3rem;
  background-color: $primary4;
  color: white;
  // background: linear-gradient(45deg, hsl(0, 0%, 20%), $primary4);
}
</style>