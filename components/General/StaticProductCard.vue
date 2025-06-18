<template>
  <div class="card-product-container position-relative">
    <NuxtImg class="card-img-top" format="avif,webp" :src="globalDefaultImage" :placeholder="[100, 75]" :nonce="nonce" />
    <div class="card-product py-2 text-muted text-center lh-sm">
      <h2 class="font-large-20-responsive fw-normal mb-0" title="Parfume One">Parfume One</h2>
      <p class="font-small-12-responsive fw-light mb-0">Lorem, ipsum dolor sit amet</p>
      <p class="old-price font-small-12-responsive text-decoration-line-through fw-normal mb-0">0.00000 AED</p>
      <p class="price font-medium-16-responsive fw-normal mb-0">0.00000 AED</p>
      <p class="arrow mb-0">
        <NuxtLink to="/products/5" class="stretched-link text-muted">
          <i class="fa fa-long-arrow-right fa-lg"></i>
        </NuxtLink>
      </p>
    </div>
  </div><!--.card-->
</template>

<script setup>
  const { public: { globalDefaultImage } } = useRuntimeConfig()
  const nonce = useNonce();
</script>

<style lang="scss" scoped>
  .card-product-container {
    &:hover {
      @include transition(all, .7s, ease);
      transform: translateY(-5px);
      .card-product h2 { color: $gold; }
    }
    .card-product {
      
      .arrow {
        @include rtl(text-align, left, right);
        text-indent: 1.5em;
      }
    }
  }
</style>