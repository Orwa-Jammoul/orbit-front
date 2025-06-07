<template>
  <div v-if="!!cart && cart.totalQty > 0" class="cart-msg">
    <!-- <div class="triangle-up"></div> -->
    <nuxt-link class="cart-frame pcc" to="/cart">
      <h1 class="open-cart">
        {{ t("My_Cart") }}
      </h1>
    </nuxt-link>
    <div class="cart-items">
      <div class="item inf-package" v-for="(item, index) in cart.items[0]" :key="index">
        <div class="cart-item pcb" v-if="item">
          <!-- <icon
            name="mdi:package-variant-closed"
            color="#0669a0"
            size="16px"
            @click="removeFromCart(item.id)"
          /> -->
          <div class="dots" :class="rtl()" :title="useName(item.item)">
            <h5 class="mb-0">{{ useName(item.item) }}</h5>
          </div>
          <h5 class="qty-num">{{item.qty}}</h5>
          <div class="options d-flex align-items-center">
            <nuxt-link class="details" :to="`/products/${item.id}`">
              {{ t("details") }}
            </nuxt-link
            >
            <p class="m-0">|</p>
            <div class="bin">
              <icon
                name="solar:trash-bin-trash-linear"
                color="#000000"
                size="16px"
                @click="removeFromCart(item.id)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="item site-package" v-for="(item, index) in cart.items[1]" :key="index">
        <div class="cart-item pcb" v-if="item">
          <!-- <icon
            name="mdi:package-variant-closed"
            color="#B62F83"
            size="16px"
            @click="removeFromCart(item.id, 0)"
          /> -->
          <div class="dots" :class="rtl()" :title="useName(item.item)">
            <h5 class="mb-0">{{ useName(item.item) }} </h5>
          </div>
          <h5 class="qty-num">{{item.qty}}</h5>
          <div class="options d-flex align-items-center">
            <nuxt-link class="details" :to="`/products/${item.id}`">
              {{ t("details") }}
            </nuxt-link>
            <p class="m-0">|</p>
            <div class="bin">
              <icon
                name="solar:trash-bin-trash-linear"
                color="#000000"
                size="16px"
                @click="removeFromCart(item.id, 1)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="item site-service" v-for="(item, index) in cart.items[2]" :key="index">
        <div class="cart-item pcb" v-if="item">
          <!-- <icon
            name="carbon:web-services-container"
            color="#B62F83"
            size="16px"
            @click="removeFromCart(item.id)"
          /> -->
          <div class="dots" :class="rtl()" :title="useName(item.item)">
            <h5 class="mb-0">{{ useName(item.item) }}</h5>
          </div>
          <h5 class="qty-num">{{item.qty}}</h5>
          <div class="options d-flex align-items-center">
            <nuxt-link class="details" :to="`/products/${item.id}`"
              >{{ t('details') }}</nuxt-link
            >
            <p class="m-0">|</p>
            <div class="bin">
              <icon
                name="solar:trash-bin-trash-linear"
                color="#000000"
                size="16px"
                @click="removeFromCart(item.id, 2)"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="total-cost" v-if="cart.totalQty > 0">
        <h5 class="title-cost">{{ t("total-price") }}</h5>
        <h5 class="cost-value" v-if="cart.totalPrice != 1">
          {{ cart.totalPrice }}<span class="currency">AED</span>
        </h5>
      </div>
    </div>
  </div>
  <div v-else class="cart-msg">
    <h5 class="empty-cart">
      {{ t("The cart is empty") }}
    </h5>
  </div>
</template>

<script setup>
const cart =ref(useCart().value)

const cartItemsNo=ref('')
watch(cartEvent(),()=>{
  cart.value=useCart().value
  cartItemsNo.value=useCart().value.totalQty
});

onMounted(()=>{
  if(localStorage.getItem('cart')){
    useCart().value = JSON.parse( localStorage.getItem('cart'));
    cart.value = useCart().value
  }
})
// console.log(cart.value.items[0])
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/theme";

.cart-msg {
  position: relative;
  width: 18rem;
  height: auto;
  background-color: $primary5;
  // border-radius: 1rem;
  // overflow: hidden;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  .triangle-up {
    position: absolute;
    bottom: 100%;
    right: 18px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 10px solid rgb(240, 240, 240);
  }
  .cart-frame {
    width: 100%;
    height: 3rem;
    // border-radius: 1rem 1rem 0 0;
    background-color: $primary6;
    // cursor: pointer;
    .open-cart {
      font-weight: 900;
      color: $primary2;
      padding: 0;
      margin: 0;
      font-size: 14px;
    }
    &:hover {
      background-color: $primary1;
      // .open-cart {
      //   // text-decoration: underline;
      //   color: $primary2;
      // }
    }
  }
  .empty-cart {
    width: 100%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin: 0;
    align-items: center;
    text-align: center;
    font-size: 14px;
    font-weight: 900;
    color: black;
  }
  .cart-items {
    // border-radius: 0 0 1rem 1rem ;
    // border-top: solid 1px $dark-grey;
    // overflow: hidden;
    .item {
      // &.inf-package{
      //   .dots {
      //     h5 {
      //       color: $blue2 !important;
      //     }
      //   }
      // }
      .cart-item {
        width: 100%;
        height: 2rem;
        padding: 1rem;
        .dots {
          width: 50%;
          h5 {
            // margin: 0;
            font-size: 14px;
            color: $primary2;
          }
          // &::after{
          //   bottom: auto !important;
          //   top: 100% !important;
          // }
        }
        .qty-num{
          color: $primary2;
          margin-bottom: 0;
          font-size: 1rem;
        }
        .options {
          .details {
            font-size: .8rem;
            color: $primary2;
            &:hover {
              color: $primary2b;
            }
          }
          .bin {
            cursor: pointer;
            &:hover {
              svg {
                color: $primary3 !important;
              }
            }
          }
        }
        // &:hover{
        //   background-color: white;
        // }
      }
    }
  }
  .total-cost {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 2rem;
    padding: 1rem;
    border-top: solid 1px $primary4;
    h5 {
      margin: 0;
      font-size: 14px;
      color: $primary2;
    }
    .cost-value {
      color: $primary3;
    }
  }
}
</style>
