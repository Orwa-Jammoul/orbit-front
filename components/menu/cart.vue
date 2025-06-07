<template>
  <div class="navbar-item">
    <div class="top-section pcc">
      <div class="btns-frame">
        <icon class="icon-btn cart-icon" name="material-symbols:shopping-cart-outline" size="25px" />
        <div class="effect" ref="effect"></div>
        <div class="cart-items-num pcc" v-if="cart.totalQty > 0">
          <p class="items-num">{{cart.totalQty}}</p>
        </div>
      </div>
    </div>
    <div  class="bottom-section" :class="isEn()?'':'rtl'">
      <MenuDropCart class="msg" :class="isEn()?'':'rtl'"/>
    </div>

  </div>
</template>

<script setup>
const { public: {api, apiBase} } = useRuntimeConfig();

const effect = ref(null)

// const cart =ref({
//   items: [],
//   totalItems: 0,
//   totalQty: 0,
//   totalPrice: 0
// })
const cart =ref(useCart().value)

const cartItemsNo=ref('')
watch(cartEvent(),()=>{
  cart.value=useCart().value
  cartItemsNo.value=useCart().value.totalQty
  effect.value.classList.add('animate');
  setTimeout(() => {
    effect.value.classList.remove('animate');
  }, 300);
});

onMounted(()=>{
  if(localStorage.getItem('cart')){
    useCart().value = JSON.parse( localStorage.getItem('cart'));
    cart.value = useCart().value
  }
})

</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/theme";

.navbar-item{
  position: relative;
  width: auto ;
  .top-section{
    color: $primary1;
    width: auto ;
    height: 100%;
    // padding: .5rem 0;
    .btns-frame{
      position: relative;
      // margin: .5rem 0;
      width: auto ;
      // height: 100%;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      display: block;
      color: rgb(44, 44, 44);
      font-size: .8rem;
      user-select: none;
      font-weight: bold;
      color: $primary1;
      cursor: pointer;
      .icon{
        color: black;
        transition: .5s;
        &:hover{
          color: $primary1;
        }
      }
      // svg{
      // }
      .effect{
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100vw;
        height: 100vw;
        border-radius: 50%;
        z-index: 100;
        transform: translate(50%, 50%);
        // background-color: rgba($color: $primary3, $alpha: .5);
        pointer-events: none;
        &.animate{
          animation-name: indicator;
          animation-duration: 300ms;
          animation-timing-function: cubic-bezier(0.84, 0, 0.26, 1);
          animation-delay: 0s;
          animation-iteration-count: 1;
          animation-direction: normal;
          animation-fill-mode: forwards;
        }
      }
      .cart-items-num{
        position: absolute;
        bottom: 0;
        right: 0;
        min-width: 50%;
        height: 50%;
        border-radius: 50%;
        // border: solid 1px $primary1;
        background-color: $primary3;

        pointer-events: none;
        .items-num{
          margin: 0;
          text-align: center;
          width: 100%;
          height: 100%;
          color: white;
          font-size: 10px;
          pointer-events: none;
        }
      }
    }
  }
  .bottom-section{
    z-index: 200;
    position: absolute;
    background-color: $primary3;
    width: auto;
    top: 80% ;
    left: 0;
    right: auto;
    &.rtl{
      left: auto;
      right: 0;
    }

    transform: translateY(-8px);
    box-shadow: 5px 5px 10px rgba($color: #000000, $alpha: .2);
    pointer-events: none;
    opacity: 0%;
    transition: all 200ms ease-in-out;

  }

  &:hover,&:focus{
    .top-section{
      .main-link{
        color: $primary2;
      }
    }
    .bottom-section{
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
  }
}

@keyframes indicator {
  0%{
    background-color: rgba($color: $primary3, $alpha: 0);
    transform: translate(50%, 50%) scale(.7);
  }
  100%{
    background-color: rgba($color: $primary3, $alpha: .5);
    transform: translate(50%, 50%) scale(0);
  }
}

</style>
