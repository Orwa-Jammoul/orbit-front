<template>
  <div class="page-root pcc">
    <div class="form-frame rp">
      <ClientOnly>
        <FormSignupPerson/>
      </ClientOnly>
    </div>
  </div>
  <div>
    
  </div>
</template>

<script setup>

const { t } = useI18n();
  useSeoMeta({
    // Basic SEO
    title: t('sign-up'),
  })
</script>

<style lang="scss" scoped>
.page-root{
  min-height: calc(100vh - 5rem);
  padding: 2rem 0 4rem 0;
  .form-frame{
    width: 38rem;
    @media (max-width: 786px) {
      width: 100%;
    }
  }
}
</style>