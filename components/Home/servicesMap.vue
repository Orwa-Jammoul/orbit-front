<template>
  <div class="container main-section">
    <div class="map-frame pcc">
      مكتب أوربيت الهندســـي
    </div>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use "~/assets/styles/scss/theme/theme";

.main-section{
  height: 100vh;
  padding: 4rem 0;
  .map-frame{
    height: 100%;
    border: solid 1.5px var(--text);
    border-radius: 1rem;
    color: var(--text);
  }
}

</style>