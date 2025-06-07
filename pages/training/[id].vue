<template>
  <div>
    {{ id }}
  </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id
</script>

<style lang="scss" scoped>

</style>