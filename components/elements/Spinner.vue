<template>
  <div class="loading pcs">
    <span>
      {{t('loading')}}
    </span>
    <icon name="svg-spinners:3-dots-bounce" size="20px"/>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.loading{
  padding: 1rem;
  color: white;
  .iconify{
    color: white;
  }
}
</style>