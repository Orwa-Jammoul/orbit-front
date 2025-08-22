<template>
  <div class="card-frame pcs">
    <div class="left-section ">
      <div class="circle pcc">
        {{num}}
      </div>
    </div>
    <div class="right-section">
      <h1 class="point-name metal-text">{{ useName(cardData) }}</h1>
      <div class="info" v-html="useDes(cardData)"></div>
      <!-- <p v-html="useDes(cardData)"></p> -->
      <!-- <p>{{ getInnerText(useDes(cardData)) }}</p> -->
    </div>
  </div>
</template>

<script setup>
const { public: {api, apiBase} } = useRuntimeConfig();
const {cardData, num} = defineProps(["cardData", "num"])
// console.log(cardData);
const localePath = useLocalePath()
</script>

<style lang="scss" scoped>
.card-frame{
  width: 55%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: .5rem;
  padding: 1rem;
  .left-section{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .circle{
      width: 4rem;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: $primary;
      font-size: 1.5rem;
      font-weight: 900;
    }
  }
  .right-section{
    padding-inline-start: 1rem;
    .point-name{
      font-size: 1.8rem;
      // margin-bottom: 0;
    }
    .info{
      margin: 0;
      font-weight: 100;
    }
  }
  @media (max-width:1024px) {
    width: 75%;
  }
  @media (max-width:768px) {
    width: 100%;
  }
}
</style>