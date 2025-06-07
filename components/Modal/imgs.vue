<template>
  <div class="imgs-modal">
    <v-dialog  v-model="showModal().value">
      <div class="main-dialog noselect">
        
        <div class="main-img">
          
          <v-carousel  class="h-100" v-model="sIndex" hide-delimiters>
            <v-carousel-item
              class="item-slide"
              v-for="(img, i) in album"
              :key="img.id"
              :value="i"
              :src="`${apiBase}/${img.image}`"
              contain
            >
            </v-carousel-item>
          </v-carousel>

        </div>
        <div class="imgs-ribbon pcc">
          <v-slide-group
            v-model="sIndex"
            class="pa-4"
            selected-class="bg-success"
            show-arrows
          >
            <v-slide-group-item
              v-for="img , i in album"
              :key="i"
              v-slot="{ isSelected, toggle, selectedClass }"
            >
              <v-card
                class="select-img cover"
                :class="['ma-1', selectedClass, {'active': isSelected}]"
                color="grey-lighten-1"
                height="70"
                width="70"
                @click="sIndex=i"
              >
                <v-img
                  height="70"
                  :src="`${apiBase}/${img.image}`" :alt="`img-${img.id}`"
                  cover
                ></v-img>
                <div class="d-flex fill-height align-center justify-center">
                  <v-scale-transition>
                    <v-icon
                      v-if="isSelected"
                      color="white"
                      icon="mdi-close-circle-outline"
                      size="48"
                    ></v-icon>
                  </v-scale-transition>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>                  
        </div>
  
        <!-- <v-btn class="" text="Ok" @click="showModal().value = false" ></v-btn> -->
      </div>

    </v-dialog>
  </div>
</template>

<script setup>
const { public : {api, apiBase} } = useRuntimeConfig();
  const sIndex = ref(0)

  const album = ref([])
  const defaultIndex =ref(0);

  modalData().value.map((item,i)=> {
    item.isDefault? defaultIndex.value = i :''
  })
  
  watch(showModal() , ()=>{
    sIndex.value = 0
    modalData().value.map((item,i)=> {
      item.isDefault? defaultIndex.value = i :''
    })
    sIndex.value = defaultIndex.value;
  })
  
  watch(modalData() , ()=>{
    album.value = modalData().value
  })


  // watch(sIndex , ()=>{
  //   console.log(sIndex.value);
  // })

</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/theme";
.main-dialog{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .main-img{
    width: 100vw;
    height: calc(100vh - 6rem);
    // pointer-events: all;

    // .item-slide{
    //   pointer-events: all;
    //   // border-radius: 10px;
    //   // overflow: hidden;
    // }

  }
  .imgs-ribbon{
    
    width: 100vw;
    height: 6rem;
    // background-color: brown;
    pointer-events: all;
    .select-img{
      width: 5rem;
      height: 5rem;
      border-radius: 10px;
      margin: 0 3px;
      filter: brightness(0.5);
      // transition: all 300ms ease-in-out;
      &.active{
        border: solid 2px $c1;
        filter: brightness(1);
      }
    }
  }
}

// .mdi:before{
//   color: white !important;
// }


</style>