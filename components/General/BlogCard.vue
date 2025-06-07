<template>
  <div class="blog-box position-relative">
    <NuxtImg v-if="src" class="card-img-top" format="avif,webp" :src="src" :placeholder="[100, 50]" :nonce="nonce" />
    <NuxtImg v-else class="card-img-top" format="avif,webp" :src="globalDefaultImage" :placeholder="[100, 50]" :nonce="nonce" />
    <div class="card-content py-2 text-muted lh-sm px-2 px-md-3">
      <h2 class="font-large-20-responsive fw-normal" :title="title">{{ String(title).slice(0, 20) + ' ....' }}</h2>
      <p v-if="desc" class="font-small-12-responsive fw-light mb-1 mb-md-3">
        {{ desc }}
      </p>
      <GeneralCustomLink v-if="isMoreLink" :url="url" :class="`stretched-link`" :text="t('more')" />
      <NuxtLink v-else :to="url" class="link-discover stretched-link font-small-10-responsive text-uppercase text-decoration-none">{{ t('discover') }}</NuxtLink>
    </div>
  </div><!--.card-->
</template>

<script setup>
  const { src, title, desc, url, isMoreLink } = defineProps(['src', 'title', 'desc', 'url', 'isMoreLink'])
  const nonce = useNonce();
  const img = useImage()
  const { public: { globalDefaultImage } } = useRuntimeConfig()
</script>

<style lang="scss" scoped>
.blog-box {
  &:hover {
    @include transition(all, .7s, ease);
    transform: translateY(-5px);
    .card-content h2 { color: $gold; }
  }
  .card-img-top {
    height: fluid(100px, 300px);
    object-fit: cover;
  }
  .card-content {
      h2 { @include transition(all, .5s, ease); }
      .link-discover {
          // font-size: #{fluid(6px, 8px)};
          color: $light_grey;
          padding-bottom: 2px;
          border-bottom: 1px solid $grey;
          @include transition(all, .5s, ease);
          &:hover { color: $gold; border-bottom-color: $gold; }
        }
    }
}
</style>