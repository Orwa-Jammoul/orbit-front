<template>
  <section class="header text-center">
    <h2 class="fw-bold mb-0 title position-relative">
      {{ title }}
      <div class="mt-1 div position-relative">
        <img class="image" src="/logo/icontitle.png" width="30" alt="">
      </div>
    </h2>
  </section>
</template>

<script setup>
const {  title } = defineProps([ "title"]);
</script>

<style lang="scss" scoped>
.header {
  // background-color: red;
  padding-bottom: 2.2rem;
  .title {
    padding: 0 15px;
    display: inline-block;
  }
  .div::after {
    content: " ";
      height: 2px;
      width: 105%;
      padding: 0 35px !important;
      background: linear-gradient(to left, red, darkred);
      position: absolute;
      display: block;
      bottom: -16px;
      left: -2px;
    }
    .image {
      position: absolute;
      left: -35px;
    }
}
</style>
