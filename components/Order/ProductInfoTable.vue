<template>
  <section>
    <div
      class="table-content table-responsive card"
      style="border: none"
      id="cart-container"
    >
      <h4 class="p-3" style="color: #242424">{{ t("your-order", 1) }}</h4>
      <table class="table">
        <thead>
          <tr>
            <th>{{ t('Image',1) }}</th>
            <th>{{ t('name',1) }}</th>
            <th>{{ t('quantity',1) }}</th>
            <th>{{ t('price',1) }}</th>
          </tr>
        </thead>
        <tbody>
          <template class="w-100" v-for="n in [0,1,2]">
            <template v-for="(item, index) in cart.items[n]" :key="index">
              <tr v-if="item">
                <td class="img-frame cover">
                  <img
                    :src="cImg(item.item.productImageUrl)"
                    alt=""
                  />
                </td>
                <td>
                  <NuxtLink :to="`/product/${item.id}`">
                    <h6 class="mb-0" :title="useName(item.item)">
                      {{ useName(item.item) }}
                      <!-- {{ useTranslate(item.item, "name").slice(0, 30) + "..." }} -->
                    </h6>
                  </NuxtLink>
                </td>
                <td>

                    <!-- <button @click="addToCart(item.item, item.qty+1, n)">
                      <icon name="zondicons:add-solid" size="20px" />
                    </button> -->
                    <span
                      class="m-2 quantity"
                      :id="`quantity_${item.id}`"
                    >
                      {{ item.qty }}
                    </span>
                    <!-- <button @click="addToCart(item.item, item.qty>1?item.qty-1:1, n)">
                      <icon name="zondicons:minus-solid" size="20px" />
                    </button> -->
                </td>
                <td>
                  <span>
                    {{
                      t(useCurrency().value) + " " +
                      (item.qty * item.price )
                    }}
                  </span>
                </td>
              </tr>
            </template>
          </template>
          <tr>
            <td class="py-3 text-center" colspan="1">
              <strong class="mb-0">{{ t('Total-Price')}}</strong>
            </td>
            <td colspan="1"></td>
            <td colspan="1"></td>
            <td class="py-3">
              <strong v-if="cart.totalPrice != 1" class="mb-0">
                {{
                  t(useCurrency().value) + " " + cart.totalPrice
                }}
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>

const { public: {api, apiBase} } = useRuntimeConfig();
const cart = ref(useCart().value);

watch(cartEvent(),()=>{
  cart.value=useCart().value
});


// console.log('cart : ', cart);
// const increaseQty = (id, typeId) => {
//   const quantityElm = document.getElementById(`quantity_${id}`);
//   // Check If the Quantity Is Positive Number Or Not
//   if (new RegExp("^[1-9]+[0-9]*$").test(quantityElm.dataset.qty)) {
//     // console.log(
//     //   "out : ",
//     //   typeof +quantityElm.dataset.qty,
//     //   typeof +quantityElm.dataset.qty
//     // );
//     let quantity = parseInt(quantityElm.dataset.qty) + 1;
//     quantityElm.setAttribute("data-qty", quantity);
//     quantityElm.textContent = quantity;
//     useShoppingCartComposable().updateQty(id, quantity, typeId);
//   }
// };

// const decreaseQty = (id, typeId) => {
//   const quantityElm = document.getElementById(`quantity_${id}`);
//   // Check If the Quantity Is Positive Number Or Not
//   if (
//     parseInt(quantityElm.dataset.qty) > 1 &&
//     new RegExp("^[1-9]+[0-9]*$").test(quantityElm.dataset.qty)
//   ) {
//     // console.log("in :", quantityElm.dataset.qty);
//     let quantity = parseInt(quantityElm.dataset.qty) - 1;
//     quantityElm.setAttribute("data-qty", quantity);
//     quantityElm.textContent = quantity;
//     useShoppingCartComposable().updateQty(id, quantity, typeId);
//   }
// };
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/theme";

.table-responsive {
  @include horizontal-scrollbar(6px, "#2e2b2b", $blue, "#555");
  background-color: #fff;
}

table.table {
  color: #242424;
  thead th,
  tbody td {
    vertical-align: middle;
    white-space: nowrap;
    text-align: center;
  }
  th {
    color: #242424;
  }
  h6,
  tr {
    color: $primary2;
  }
}
.img-frame {
  width: 3rem;
  height: 5rem;
  aspect-ratio: 1/1;
}
</style>
