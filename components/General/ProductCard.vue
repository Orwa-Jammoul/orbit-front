<template>
  <div class="card-product-container position-relative">
    <NuxtImg class="card-img-top" format="avif,webp" :src="src" :placeholder="[100, 75]" :nonce="nonce" />
    <div class="card-product py-2 text-muted text-center lh-sm">
      <h2 class="font-large-20-responsive fw-normal mb-0" :title="title">{{ String(title).slice(0, 12) + ' ...' }}</h2>
      <div class="font-small-12-responsive fw-light mb-0" v-html="String(description).slice(0, 26) + ' ...'"></div>
      <div class="d-flex align-items-center justify-content-center gap-4">
        <p v-if="oldPrice" class="old-price font-small-12-responsive text-decoration-line-through fw-normal mb-0">{{oldPrice + ' ' + currency.symbol}}</p>
        <p v-if="newPrice" class="price font-medium-16-responsive fw-normal mb-0">{{ newPrice + ' ' + currency.symbol}}</p>
      </div>
      <p v-if="startDate" class="price font-small-10-responsive fw-normal mb-0">{{ t('start') + ' : ' + useDate(startDate)}}</p>
      <p v-if="endDate" class="price font-small-10-responsive fw-normal mb-0">{{ t('end') + ' : ' + useDate(endDate)}}</p>

      <p class="arrow mb-0">
        <NuxtLink :to="url" class="stretched-link text-muted">
          <i class="fa fa-long-arrow-right fa-lg"></i>
        </NuxtLink>
      </p>
    </div>
  </div><!--.card-->
</template>

<script setup>
  const { src, title, url, oldPrice, newPrice, description, startDate, endDate } = defineProps(['src', 'title', 'url', 'oldPrice', 'newPrice', 'description', 'startDate', 'endDate'])
  const currency = useCurrency()
  const nonce = useNonce();
  const imageHeight = ref('190px')
  
  const handleImageHoverHeight = () => {
    if (window.innerWidth >= 1200) { 
      imageHeight.value = '190px';
    }
    if (window.innerWidth > 1100 && window.innerWidth < 1200) { 
      imageHeight.value = '180px';
    }
    if (window.innerWidth > 992 && window.innerWidth <= 1100) { 
      imageHeight.value = '160px';
    }
    if (window.innerWidth >= 768 && window.innerWidth <= 992) { 
      imageHeight.value = '140px';
    }
    if (window.innerWidth >= 576 && window.innerWidth < 768) { 
      imageHeight.value = '120px';
    }
    if (window.innerWidth < 576) {
      imageHeight.value = '100px';
    }
  }

  onMounted(() => {
    if (process.client) {
      handleImageHoverHeight()
    }
  })
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