<template>
  <div class="service-card" :dir="rtl()"
  >
    <div class="gr-circle1"></div>
    <div class="gr-circle3"></div>
    <div class="service-card-frame">
      <div class="card-top pcc">
        <div class="icon-frame pcc">
          <icon v-if="cardData.url1" :name="cardData.url1" size="25px"/>
        </div>
      </div>
      <div class="card-bottom">
        <div class="card-title-frame pcc">
          <h5 class="card-title">
            {{ useName(cardData) }}
          </h5>
        </div>
        <div class="card-des-frame pcc">
          <div class="card-des" v-html="useDes(cardData)"></div>
        </div>
      </div>
      

    </div>
  </div>
</template>

<script setup>
const { public: {api, apiBase} } = useRuntimeConfig();
const {cardData, num} = defineProps(["cardData", "num"])
// console.log(cardData);

</script>

<style lang="scss" scoped>
@use"~/assets/styles/scss/theme/theme" as *;
.service-card{
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  // color: black;
  padding: 10px;
  border-radius: 15px;
  overflow: hidden;
  // transition: all 300ms ease-in-out !important;
  .service-card-frame{
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    // padding: 5px;
    // box-shadow: -3px -3px 6px 0px rgba(255, 255, 255, .3),
    //             3px 3px 6px 0px rgba(0, 0, 0, 0.3);
    
    // background-color: white;
    // border: solid 1px white;
    // height: 100%;
    .card-top{
      position: relative;
      z-index: 1;
      width: 100%;
      // height: 15rem;
      aspect-ratio: 3/1;
      .icon-frame{
        width: 50px;
        height: 50px;
        border-radius: 7px;
        border: solid 1px rgba(255, 255, 255, 0.3);
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), transparent);
      }


    }
    .card-bottom{
      z-index: 2;
      width: 100%;
      // aspect-ratio: 2/.8;
      padding: 1rem;
      padding-bottom: 0;
      .card-title-frame{
        height: 6rem;
        .card-title{
          width: 100%;
          color: white;
          font-weight: 700;
          font-size: 1.5rem;
          text-align: center;
          // overflow: hidden;
          // text-wrap: nowrap;
          // text-overflow: ellipsis;
          // line-height: 2rem;
          // height: 2rem;
        }
      }
      .card-des-frame{
        min-height: 13rem;
        .card-des{
          display: inline-block;
          color: rgb(218, 218, 218);
          margin-bottom: 0;
          // border: solid 1px rgba(255, 255, 255, 0.5);
          border-radius: 12px;
          padding: 2px 10px;
          font-size: 14px;
          text-align: center;
          // background-color: rgba(255, 255, 255, 0.1);
        }
      }
      @media (max-width:768px) {
        .card-des-frame{
          min-height: 15rem;
        }
      }
      @media (max-width:550px) {
        .card-title-frame{
          height: 4rem;
        }
        .card-des-frame{
          min-height: 8rem;
        }
      }
    }
  }

  &:hover{
    // box-shadow: 5px 5px 10px rgba(0, 0, 0, .3);
    // transform: translateY(-5px);
    .img-frame{
      img{
        // transform: all 300ms ease-in-out;
        filter: saturate(1) !important;
      }
    }
  }
}
</style>