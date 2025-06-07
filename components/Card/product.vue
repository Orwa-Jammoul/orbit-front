<template>
  <nuxt-link class="product-card" :dir="rtl()" :to="`/products/${cardData.id}`" data-aos-duration="1000"
  data-aos="fade-up">

    <div class="product-card-frame">
      <div class="card-top">
        <div class="img-frame cover">
          <img :src="cImg(cardData.productImageUrl)" :alt="useName(cardData)">
        </div>
        <div v-if="cardData.newPrice" class="offer-bandage pcc">
          <icon name="bxs:offer" size="20px"/>
          <!-- {{ useFormatPrice(cardData.newPrice,1) }} {{ cardData.price }} -->
            {{ Math.round(100*(cardData.price - cardData.newPrice)/cardData.newPrice) }} % {{ t('discount') }}
        </div>
      </div>
      <div class="card-bottom">
        <h5 class="card-title">
          {{ useName(cardData) }}
        </h5>
        <!-- <h5 class="card-date">
          {{ shortDate(cardData.datefrom) }} / {{ shortDate(cardData.dateto) }}
        </h5> -->
        <h5 class="card-price">
          {{ usePrice(cardData,1) }}
        </h5>
        <!-- <h5 class="card-range-price pce">
          <icon name="flowbite:users-solid" size="20px"/>
          <p class="m-0"> {{ useFormatPrice(cardData.perAdult,1)}} </p>
          <icon name="mdi:human-male-child" size="20px"/>
          <p class="m-0"> {{ useFormatPrice(cardData.perChild,1) }} </p>
          <icon name="ph:baby-duotone" size="15px"/>
          <p class="m-0"> {{ useFormatPrice(cardData.perBaby,1)  }} </p>
        </h5> -->
      </div>
      <div class="buttons pcc">
        <button class="details-btn">{{ t('view-details') }}</button>
        <!-- <button class="Enquire-btn">Enquire Now</button> -->
      </div>

    </div>
    <div v-if="cardData.serviceTypename" class="bandage" :class="rtl()">
      <div class="front pcc">{{cardData.serviceTypename}}</div>
      <div class="back"></div>
    </div>
  </nuxt-link>
</template>

<script setup>
const { public: {api, apiBase} } = useRuntimeConfig();
const {cardData} = defineProps(["cardData"])
// console.log(cardData);

</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/theme";
.product-card{
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: black;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .1);
  transition: all 300ms ease-in-out !important;
  .product-card-frame{
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    // height: 100%;
    .card-top{
      position: relative;
      display: flex;
      justify-content: space-around;
      z-index: 1;
      width: 100%;
      height: 15rem;
      // aspect-ratio: 2/1.2;
      // height: 6rem;
      .offer-bandage{
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 2px;
        // width: 5rem;
        height: 2rem;
        background-color: white;
        color: $primary1;
        padding-left: 1rem;
        padding-right: 1rem;
        border-radius: 5px 0 0 0 ;
        .icon{
          color: $primary1;
          margin-inline-end: 5px;
        }
      }
    }
    .card-bottom{
      z-index: 2;
      width: 100%;
      // aspect-ratio: 2/.8;
      padding: 1rem;
      padding-bottom: 0;
      .card-title{
        width: 100%;
        // color: black;
        color: black;
        font-weight: 700;
        overflow: hidden;
        text-wrap: nowrap;
        text-overflow: ellipsis;
        line-height: 2rem;
      }
      .card-date{
        font-size: .8rem;
      }
      .card-price{
        color: $primary1;
        font-size: 1.5rem;
        font-weight: 700;
        text-align: end;
      }
      .card-range-price{
        color: #4ebf22;
        font-size: .9rem;
        font-weight: 400;
        text-align: end;
        margin: 0;
        .icon{
          margin-inline-start: .6rem;
          margin-inline-end: 5px;
        }
      }
      
    }
    .buttons{
      width: 100%;
      aspect-ratio: 2/.2;
      padding: 1rem;
      .details-btn{
        flex: 1;
        color: white;
        background-color: $primary1;
        padding: 5px 1rem;
        border-radius: 5px;
        // margin-inline-end: 1rem;
      }
      .Enquire-btn{
        flex: 1;
        color: black;
        border: solid 1px $primary1;
        padding: 5px 1rem;
        border-radius: 5px;
      }
    }
  }
  .bandage{
    position: absolute;
    z-index: 10;
    left: - .5rem;
    right: auto;
    top: .5rem;
    .front{
      height: 2rem;
      padding-left: 1rem;
      padding-right: 1rem;
      border-radius: 0 5px 5px 0;
      background-color: #E3010C;
      color: white;
    }
    .back{
      width: .5rem;
      height: .5rem;
      background-color: hsl(357, 99%, 35%);
      clip-path: polygon(100% 0, 0 0, 100% 100%);
    }
    &.rtl{
      right: - .5rem;
      left: auto;
      .front{
        border-radius: 5px 0 0 5px ;
      }
      .back{
        clip-path: polygon(100% 0, 0 0, 0 100%);
      }
    }

  }
  &:hover{
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .3);
    transform: translateY(-5px);
  }
}
</style>