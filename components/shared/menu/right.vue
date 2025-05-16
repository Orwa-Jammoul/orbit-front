<template>
  <div class="inner-top-nav pcb">
    <div class="right">
      <div class="row1 pcb">
        <!-- <button >
          
        </button> -->
        <ul class="list-btns pce">

          <li v-if="isAuth" class="list-btn px-0 ps-1" :class="rtl()">
            <MenuAccount/>
          </li>
          <li v-if="!isAuth" class="list-btn px-0 ps-1 mx-0 me-1" :class="rtl()">
            <nuxt-link class="pcs" to="/auth/login" :title="t('login',1)">
              <icon class="mx-0 me-1" name="mdi:account-key" size="20px" />
              <!-- <p class="m-0 d-none d-lg-block">{{t("login",1)}}</p> -->
            </nuxt-link>
          </li>
          <!-- <li v-if="!isAuth" class="list-btn px-0 ps-1 mx-0 me-1" :class="rtl()">
            <nuxt-link class="pcs" to="/auth/club-registration" :title="t('club-registration',0,0,1)">
              <icon name="material-symbols:person" size="20px" />
            </nuxt-link>
          </li> -->
          <!-- <li v-if="!isAuth" class="list-btn px-0 ps-1 mx-0 me-1" :class="rtl()">
            <nuxt-link class="pcs" to="/auth/register-guest" :title="t('guest-registration',0,0,1)">
              <icon name="material-symbols:person-outline" size="20px" />
              <p class="m-0 d-none d-lg-block">{{ t("guest-registration",0,0,1) }}</p>
            </nuxt-link>
          </li> -->
          <li class="switch-lang" :class="rtl()"  @click="switchL" title="switch language">
            <p class="lang-name">{{ isEn()?'عربي':'En' }}</p>
          </li>
          <li>
            <div class="vertical-nav">
              <SharedNavVertical :pages="pages"/>
            </div>
          </li>
        </ul>

      </div>
      <div class="row2 pce">
        <ul class="social-media-list pce p-0 mb-0">
          <li class="social-media-item mx-0 ms-2" v-for="page in allSocialMedia" :key="page.id">
            <a target="_blank" class="social-media-link pcs" :href="page.pageUrl" :title="useName(page)">
              <icon
                :name="useIcon(page.englishName)" 
                size="20px"
                class="mx-0 me-1"
              />
            </a >
          </li>
          <li class="search-bar mx-0 ms-2 pcs">
            <!-- <input class="search-input d-none d-lg-block d-md-block" type="text" v-model="searchText" :placeholder="t('search-the-association',1)"> -->
            <button class="text-black" @click="searchS" title="search">
              <icon name="ic:twotone-search" size="20px"/>
            </button>
            <ModalSearch/>
          </li>

        </ul>
      </div>

    </div>


  </div>
</template>

<script setup>
const pages = ref([...useMenu().value.top,...useMenu().value.bottom]);
// console.log(pages.value);
const allSocialMedia = ref(useSocialMenu().value);
// console.log(allSocialMedia.value);

const isAuth = ref(!!localStorage.getItem("UserId"))
useAuth().value.isAuthenticated= isAuth.value
// console.log(useMenu().value);
watch( useAuth().value,()=>{
  isAuth.value = useAuth().value.isAuthenticated
})

const searchText = ref('')
const searchS = ()=>{
  if(searchText.value){
    // console.log(`/search-results?q=${searchText.value}`);
    // goto(`/search-results?q=${searchText.value}`)
    window.location.href = `/search-results?q=${searchText.value}`;
  }else{
    showSearchModal().value=true
    searchText.value=''
  }
}

// console.log(useAuth().value.isAuthenticated);
</script>

<style lang="scss" scoped>
@use "~/assets/styles/scss/theme/theme";
.inner-top-nav{
  position: relative;
  height: 100%;
  display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: flex-start;
  // padding: 0 2rem;
  // padding-top: 1rem;
  .right{
    z-index: 6;
    width: 100%;
    .row1{
      width: 100%;
      flex-grow: 1;
      height: 2rem;
      // background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
      .list-btns{
        width: 100%;
        font-size: 12px;
        padding: 0;
        margin: 0;
        .vertical-nav {
          height: 100%;
          width: 100%;
          display: none;

          @media (max-width: 920px) {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
        }

        .switch-lang{
          border-inline-start: solid 1px black ;
          padding-inline-start: 5px;
          cursor: pointer;
          .lang-name{
            margin: 0;
            font-size: 1rem;
            font-weight: 600;
          }
        }
        // margin-top: .5rem;
        // .search-bar{
        //   .search-input{
        //     width: 12rem;
        //     font-size: 12px;
        //     color: $br20;
        //     border: solid 1px black;
        //   }
        // }
        .list-btn{

          color: black;
          &.rtl{
            &:not(:first-child){
              border-left: none;
              border-right: solid 1px $br20;
            }
          }
          &.ltr{
            &:not(:first-child){
              border-left: solid 1px $br20;
              border-right: none;
            }
          }
          a{
            color: black;
          }
          .list-link{
            padding-inline-start: 5px;
            margin-inline-end: 5px;
            color: black;
            // padding-right: 5px;
            // margin-left: 5px;
            // .icon{
            //   display: none;
            // }
            .link-name{
              display: block;
            }
            @media (max-width: 920px) {
              // .icon{
              //   display: block;
              // }
              .link-name{
                display: none;
              }
            }

          }
          &.my-account{
            a{
              color: $primary2;
            }
          }
          
          &:hover{
            a{
              color: $primary3;
            }
          }
          &.links{
            @media (max-width: 920px) {
              display: none;
            }
          }
        }
      }

    }
    .row2{
      width: 100%;
      height: 2rem;
      // flex-grow: 1;
      z-index: 4;
      .date-into{
        font-size: 14px;
      }
      .bottom-bar{
        flex-grow: 1;
        height: 1px;
        background-color: black;
      }
      .social-media-list{
        .search-bar{
          .search-input{
            width: 12rem;
            font-size: 12px;
            color: $br20;
            border: solid 1px black;
          }
          .icon{
            transform: rotate(0deg) scale(1);
            transition: all 200ms ease-in;
          }
          &:hover{
            .icon{
              transform: rotate(-10deg) scale(1.02);
            }
          }
        }
        .social-media-item{
          border-inline-end: solid 1px black;
          &:last-child{
            border-inline-end: none;
          }
          .social-media-link{
            color: black;
            padding-inline-end: 5px;
            .social-media-name{
              font-size: 12px;
            }
  
            &:hover{
              color:$primary3;
            }
            @media (max-width: 768px) {
              .social-media-name{
                display: none;
              }
            }
          }
        }
      }
    }
  }
  .left{
    z-index: 6;
    flex-grow: 1;
    .logo-frame{
      display: block;
      width: 100%;
    }
  }
}
</style>