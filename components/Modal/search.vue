<template>
  <div class="search-modal">
    <v-dialog  v-model="showSearchModal().value">
      <div class="main-dialog noselect">
        <!-- <div class="first-row pce">
          <icon class="close" name="material-symbols:cancel" size="25px" color="white"
            @click="showSearchModal().value=false"
          />
        </div> -->
        <div class="modal-content" dir="auto">
          <h3 class="modal-title">
            {{ t('search',1) }}
          </h3>
          <div class="search-bar pcc">
            <div class="input-frame d-flex">
              <input id="search-text" class="search-text" type="text" 
                :placeholder="t('what-are-you-looking-for?',1)"  
                v-on:keydown.enter="handleSearch()"
                v-model="sQuery"
              >
              <div class="icon-frame pcc" @click="handleSearch()">
                <Icon name="ph:magnifying-glass-bold" size="30px" color="white"/>
              </div>
            </div>
            <!-- <div class="select-frame">
              <Icon :class="rtl()" name="material-symbols:arrow-drop-down" size="20px" color="white"/>
              <select class="select-category mb-0" v-model="sCatId">
                <option value="0">{{ t('all-products') }}</option>
                <option v-for="cat in mainCategories" :value="cat.id" :key="cat.id">
                  {{ useName(cat,0,0,1) }}
                </option>
              </select>
            </div> -->

          </div>
  
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script setup>
const {  public : {api, apiBase } } = useRuntimeConfig();
const { $awn } = useNuxtApp();
const isLoading = ref(false);
const hasError = ref(false);

// const mainCategories = ref(useMainCategories().value)
const sCatId = ref(0)
const sQuery = ref('')

// console.log(mainCategories.value);

// const {data:mainCategoriesData} = await useGetSiteApi().LazyGetAll(`${api.mainCategoriesApi}`)
// mainCategories.value = mainCategoriesData.value.data;
// mainCategories.value.sort((a, b)=> { 
//   return a.id - b.id  ||  a.name.localeCompare(b.name);
// });
// console.log(mainCategories.value);

const handleSearch = ()=>{
  showSearchModal().value=false;
  goto(`/search-results?cid=${sCatId.value}&q=${sQuery.value}`)
  sQuery.value= '';
  sCatId.value= 0;
}

// onMounted(()=>{
//   const searchInput = document.getElementById('search-text');
//   console.log(searchInput);
//   searchInput.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//       handleSearch();
//     }
//   });
// })



</script>
<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/theme";
.main-dialog{
  position: relative;
  // width: 100%;
  // height: 100%;
  // padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  // border: solid 1px white;
  
  .first-row{
    width: 100%;
    // height: 2rem;
    padding: 1rem;
    
    .close{
      pointer-events: all;
      cursor: pointer;
      transition: all 100ms ease-in-out;
      &:hover{
        transform: scale(1.1);
      }
    }
  }
  .modal-content{
    pointer-events: none !important;
    border-radius: 4rem;
    // border: solid 1px white;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    width: min(90vw , 40rem);
    .modal-title{
      color: white ;
    }

    .search-bar{
      pointer-events: all;
      overflow: hidden;
      border-radius: 2rem;
      border: solid 1px white;
      background-color: #191919;
      
      .input-frame{
        flex-grow: 1;
        height: 4rem;
        // position: relative;
        border-radius: 2rem;
        border: solid 1px white;
        .search-text{
          height: 100%;
          flex-grow: 1;
          padding: 1rem;
          color: white;
        }
        .icon-frame{
          // position: absolute;
          height: 100%;
          // top: 0;
          // right: 0;
          width: 4rem;
          border-radius: 2rem;
          // border: solid 1px white;
          background-color: rgba(255, 255, 255, 0.1);
          transition: all 200ms ease-in-out;
          cursor: pointer;
          &:hover{
            width:5rem;
          }
        }
      }
      .select-frame{
        position: relative;
        // padding: 0 1rem;
        .icon{
          pointer-events: none;
          position: absolute;
          top: 18px;
          right: 5px;
          left: auto;
          &.rtl{
            right: auto;
            left: 5px;
          }
        }
        .select-category{
          // border: solid 1px white;
          // width: 10rem;
          padding: 1rem  1.4rem;
          color: white;
          background: none;
          background-color: #191919;
        }
      }
    }


  }

}

</style>