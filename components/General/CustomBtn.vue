<template>
    <div class="more-btn-box">
      <NuxtLink :to="url" :class="`btn-more ${classes}`" :style="{width: width, 'font-size': fontSize}">{{ btnText }}</NuxtLink>
    </div>
</template>

<script setup>
  const { url, classes, width, fontSize, btnText } = defineProps(['url', 'classes', 'width', 'fontSize', 'btnText'])
</script>

<style lang="scss" scoped>
  @use '~/assets/styles/scss/theme/variables';
  .more-btn-box {
    .btn-more {
      display: inline-block;
      text-align: center;
      color: #fff;
      border-radius: 30px;
      background: $medium-gold;
      padding-left: 1rem;
      padding-right: 1rem;
      @include transition(all, .5s, ease);
      &:hover { color : #000; }
    }
  }

</style>