<template>
    <div>
      <Home />
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'home' 
});

useSeoMeta({
  // Basic SEO
  title: useI18n().t('Home'),
  description: useI18n().t('Home'),
  keywords: useI18n().t('Home'),

  ogType: useI18n().t('ogType'),
  ogLocale: useI18n().t('ogLocale'),
  ogSiteName: useI18n().t('ogSiteName'),
  robots: 'index, follow',
  author: useI18n().t('ogSiteName'),
  canonical: 'https://orbit-eng.net'+ useRoute().fullPath,
})

</script>

<style lang="scss" scoped>

</style>