<template>
  <div class="main-footer pt-10 " dir="auto">
    <div class="container">
      <!-- <div class="row top-section pcc">
        <div class="logo-frame contain">
          <img :src="`/logo/logo-01.png`" alt="logo">
        </div>
      </div> -->
      <div class="row row1" :dir="rtl()">
        <div class="left col-6 col-lg-3 col-md-6 col-sm-6  order-0">
          <div class=" logo-frame contain">
            <img :src="`/logo/logo-01.png`" alt="logo">
          </div>
          <ul class="social-media-list pcs p-0 mb-0">
            <li class="social-media-item mx-0 ms-2" v-for="page in allSocialMedia" :key="page.id">
              <a target="_blank" class="social-media-link pcs" :href="page.pageUrl" :title="useName(page)">
                <icon
                  :name="useIcon(page.englishName)" 
                  size="20px"
                  class="mx-0 me-1"
                />
              </a >
            </li>
            <!-- <li class="search-bar mx-0 ms-2 pcs">
              <button class="text-black" @click="searchS" title="search">
                <icon name="ic:twotone-search" size="20px"/>
              </button>
              <ModalSearch/>
            </li> -->

          </ul>
        </div>
        <div class="center col-12 col-lg-6 col-md-12 order-last ">
          <div class="page-link-group" v-for="page in pages" :key="page.id">
            <nuxt-link class="page-link-item" :class="rtl()" :to="page.pageUrl!='#'?page.pageUrl:''" >
              <span class="link-name">
                {{ useName(page,0,0,1) }}
              </span>
            </nuxt-link>
            <nuxt-link class="subPage-link-item" :class="rtl()" v-for="subPage in page.subPages" :to="subPage.pageUrl!='#'?subPage.pageUrl:''" :key="subPage.id">
              <span class="link-name">
                {{ useName(subPage,0,0,1) }}
              </span>
            </nuxt-link>

          </div>
          <!-- <button class="switch-lang" @click="switchL">
            <icon :name="isEn()?'flag:ae-4x3':'flagpack:gb-ukm'" size="18px"/>
          </button> -->
        </div>
        <div class="right mb-5 col-6 col-lg-3 col-md-6 col-sm-6 order-lg-last">
          <div class="page-link-group" :class="rtl()" v-for="page in otherPage" :key="page.id">
            <nuxt-link class="page-link-item" :to="page.pageUrl!='#'?page.pageUrl:''" >
              <span class="link-name">
                {{ useName(page,0,0,1) }} 
              </span>
            </nuxt-link>
            <nuxt-link class="subPage-link-item" :class="rtl()" v-for="subPage in page.subPages" :to="subPage.pageUrl!='#'?subPage.pageUrl:''" :key="subPage.id">
              <span class="link-name">
                {{ useName(subPage,0,0,1) }}
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- <div class="row app-links pcc">
        <a target="_blank" class="app-link contain" href="https://play.google.com/store/apps/details?id=nerva.org.journalists_association">
          <img :src="`/icons/app-store-logo.png`" alt="app-store">
        </a>
        <a target="_blank" class="app-link contain" href="https://play.google.com/store/apps/details?id=nerva.org.journalists_association">
          <img :src="`/icons/google-store.png`" alt="google store">
        </a>
      </div> -->
      
    </div>
    <div class="bottom-section pcc">
      <h5 class="Copyright w-100">
        Copyright © {{ new Date().getFullYear() }} U.A.E T.T.A
      </h5>
    </div>
  </div>
</template>

<script setup>
const { public : {api, apiBase} } = useRuntimeConfig();

const pages = ref(useMenu().value.footer);
const otherPage = ref([useMenuById(12), useMenuById(19)])

// const pages = ref(useMenu().value.bottom);
// console.log(otherPage.value);
const allSocialMedia = ref(useSocialMenu().value);

</script>

<style lang="scss" scoped>
@use "~/assets/styles/scss/theme/theme";
.main-footer{
  background-color: $br70;

  .row1{
    // height: 20rem;
    .left{
      .logo-frame{
        margin-top: 0;
        margin-bottom: 1rem;
        height: auto;
        max-width: 10rem;
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
    .center{
      // margin-top: 1rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 25px;
      grid-column-gap: 2rem;
      // .switch-lang{
      //   width: auto;
      // }
    }
    .right{
      // margin-top: 1rem;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      // grid-auto-rows: 25px;
      // grid-column-gap: 2rem;
    }

    .page-link-group{
      display: flex;
      flex-direction: column;
      .page-link-item{
        position: relative;
        width: auto;
        height: 20px;
        padding: 0;
        color: $br20;
        font-size: 14px;
        font-weight: 500;
        color: black;
        // margin: 5px;
        // background: none;
        // border-bottom: solid 1px $br20;
        cursor: pointer;
        transition: all 350ms ease-out;
        .link-name{
          position: relative;
          z-index: 2;
        }
        &:hover{
          color: $primary3;
          padding-inline-start: .3rem;
        }
      }
      .subPage-link-item{
        height: 25px;
        padding-inline-start: 1rem;
        position: relative;
        width: auto;
        height: 20px;
        color: $br20;
        font-size: 14px;
        font-weight: 500;
        color: $br20;
        // margin: 5px;

        // background: none;
        // border-bottom: solid 1px $br20;
        cursor: pointer;
        transition: all 350ms ease-out;
        &:last-child{
          margin-bottom: .3rem;
        }
        .link-name{
          position: relative;
          z-index: 2;
        }
        &:hover{
          color: $primary3;
          padding-inline-start: 1.3rem;
        }
      }
    }
  }

  .app-links{
    width: 100%;
    margin: 2rem 0;
    .app-link{
      width: auto !important;
      transition: all 100ms ease-in;
      &:hover{
        transform: scale(1.02);
        filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.4));
      }
    }
  }
  .bottom-section{
    // margin-top: 2rem;
    // background: none;
    background-color: black;
    .Copyright{
      padding: 1rem 0;
      margin: 0;
      color: white;
      font-weight: 400;
      font-size: 14px;
      text-align: center;
    }
  }



  // @media (max-width: 992px) {
  //   .right{
  //     grid-template-columns: repeat(3, 1fr);
  //   }
  // }
  // @media (max-width: 768px) {
  //   .right{
  //     grid-template-columns: repeat(2, 1fr);
  //     padding: 0 1rem;
  //   }
  // }
}


.router-link-active{
  color: $primary3 !important;
}

@media print {
  .main-footer {
    display: none; 
  }
}
</style>