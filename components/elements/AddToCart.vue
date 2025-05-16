<template>
  <div style="width: 100%;">
    <button
      v-if="isDetails"
      class="py-2 background px-5 text-black"
      style="width: 100%;"
      @click.prevent="addToCart(product, price, qty)"
    >
      {{ !isEn() ? 'أضف للسلة' : 'Add To Cart' }}
    </button>
    <div
      v-if="!isDetails"
      class="cart-shop"
      @click.prevent="addToCart(product, price, qty)"
    >
      <span>{{ !isEn() ? 'أضف للسلة' : 'Add To Cart' }}</span>
      <font-awesome :icon="['fas', 'cart-shopping']" />
    </div>
  </div>
</template>

<script setup>
const { product, isDetails, qty, price } = defineProps([
  "product",
  "isDetails",
  "qty",
  "price",
]);
const addToCart = (item, pri, qt) => {
  useShoppingCartComposable().addToCart(item);
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";

</style>
