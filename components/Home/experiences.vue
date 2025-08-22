<template>
  <div class="section-root" :class="rtl()">
    <v-parallax src="/imgs/experience-02.jpg">
      <div class="content-frame pce rp">
        <div class="content rp">
          <div class="experience-card" v-for="exp in trainings" :key="exp.id">
            <!-- <div class="icon-frame pcc">
              <icon name="lineicons:website" size="30px"/>
            </div> -->
            <h1 class="cat-name">{{useName(exp)}}</h1>
          </div>
        </div>
      </div>
    </v-parallax>
  </div>
</template>

<script setup>
const {
  public: { api, apiBase },
} = useRuntimeConfig();
const trainings = ref(null);

const { data:trainingsData, pending } = await useGetSiteApi().GetAll(
  `${api.CourseCategoriesApi}/GetAllSonsAndClassification?categoryId=0&pageNumber=1&pageSize=100`
);
trainings.value = trainingsData.value.data

</script>
<style lang="scss">
.section-root.ltr{
  .v-img__img{
    transform: scaleX(-1) !important;
  }
}
</style>
<style lang="scss" scoped>
.section-root{
  .content-frame{
    width: 100%;
    height: 100%;
    .content{
      width: 50%;
      // height: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      // justify-content: center;
      // align-items: center;
      // flex-wrap: wrap;
  
      padding-top: 2rem;
      backdrop-filter: blur(10px);
      .experience-card{
        // width: 50%;
        // flex-grow: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: .5rem;
        // background-color: black;
        // background-color: rgba(0, 0, 0, 0.1);
        background-color: $primary;
        
        padding: 10px 1rem;
        border-radius: 5px;
        margin-bottom: .5rem;
        height: 10rem;
        .icon-frame{
          height: 100%;
          aspect-ratio: 1;
          // background-color: rgb(26, 26, 26);
          .iconify{
            
            color: $primary;
          }
        }
        .cat-name{
          padding-inline-start: 1rem;
          margin-bottom: 0;
          font-size: 1.5rem;
          font-weight: 600;
          text-align: center;
          width: 100%;
        }
      }
    }
  }
}
</style>