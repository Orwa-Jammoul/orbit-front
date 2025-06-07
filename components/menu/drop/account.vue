<template>
  <div class="Account-msg">
    <div class="account-frame pcc" @click="goto('/account')">
      <h5 class="account-name text-center">
        {{ user?useName(user):t("my-account",1) }}
      </h5>
    </div>
    <button class="log-btns logout-btn" @click="logout">
      <h5>{{t('logout')}}</h5>
      <icon name="mdi:account-cancel" size="16px" />
    </button>
  </div>
</template>

<script setup>

  const {isAuth}= defineProps(["isAuth"])
  const { public: { api, apiBase } } = useRuntimeConfig();
  // const accountType = ref(useAccountType());
  const user = ref(useUserInfo().value);
  const auth = ref(useAuth().value.isAuthenticated);

  watch(useAuth().value,()=>{
    auth.value = useAuth().value.isAuthenticated;
    user.value = useUserInfo().value;
    // accountType.value = useAccountType();
  })

  const logout=()=>{
    useLogout()
    console.log("logout");
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/scss/theme/theme";

  .Account-msg{
    position: relative;
    width: 12rem;
    height: auto;
    background: none;
    // border-radius: 1rem;
    overflow: hidden;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
    .account-frame{
      width: 100%;
      height: 3rem;
      // padding: 0 1rem;
      // background-color: $grey;
      background-color: black;
      cursor: pointer;
      .account-name{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        // text-align: center;
        padding: 1rem;
        color: white;
        font-weight: 600;
        padding: 0;
        margin: 0;
        font-size: 1rem;
        &:hover{
          color: $br0;
          background-color: $br5;
        }
      }
    }
    .log-btns{
      display: flex;
      align-items: center;
      
      justify-content: space-between;
      width: 100%;
      height: 2rem;
      padding: 1rem;
      color: $br3;
      background-color: black;
      h5{
        margin: 0;
        font-size: 14px;
        font-weight: 600;
        // color: $br3;
      }
      a{
          color: $br3;
      }
      &:hover{
        background-color: $br5;
        color: $br0;
        a{
          color: $br0;
        }
        // svg{
        //   color: $primary3 !important;
        // }
      }
    }

    .logout-btn{
      // border-radius: 0 0 1rem 1rem ;
      border-top: solid 1px $dark-grey;
      svg{
        color: $primary3 !important;
      }
    }


  }
</style>
