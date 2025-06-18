<template>
  <div class="navbar-item">
    <div class="top-section pcs mx-0 me-2">
      <icon name="material-symbols-light:account-circle" size="25px" />
      <!-- <p class="m-0  d-none d-lg-block">{{t("my-account",1)}}</p> -->
    </div>
    <div class="bottom-section" :class="rtl()">
      <MenuDropAccount class="msg" />
    </div>
  </div>
</template>

<script setup>

const { public: { api, apiBase } } = useRuntimeConfig();
// const accountType = ref(useAccountType().value);
// const UserInfo = ref(useUserInfo().value);
// const isAuth = ref(useAuth().value.isAuthenticated);
// const profileImg = ref(undefined);
// if (isAuth) {
//   profileImg.value =
//     UserInfo.value?.imageUrl ?? UserInfo.value?.persomImageUrl ?? undefined;
// }

// // console.log(isAuth.value);
// watch([useAuth().value, useUserInfo()], () => {
//   isAuth.value = useAuth().value.isAuthenticated;
//   UserInfo.value = useUserInfo().value;
//   if (isAuth) {
//     profileImg.value =
//       UserInfo.value?.imageUrl ?? UserInfo.value?.persomImageUrl ?? undefined;
//   }

// });


</script>

<style lang="scss" scoped>
@use"~/assets/styles/scss/theme/theme" as *;

.navbar-item {
  position: relative;
  width: auto;
  .top-section {
    cursor: pointer;
    color: white;
    width: auto;
    height: 100%;
    // padding-inline-start: 5px ;
    // border-inline-start: solid 1px black ;
    &:hover{
      color: $primary;
    }
  }
  .bottom-section {
    z-index: 200;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    width: 10rem;
    top: 100%;
    left: auto;
    right: 0;
    &.rtl {
      left: 0;
      right: auto;
    }

    transform: translateY(-8px);
    box-shadow: 5px 5px 10px rgba($color: #000000, $alpha: 0.2);
    pointer-events: none;
    opacity: 0%;
    transition: all 200ms ease-in-out;
  }

  &:hover,
  &:focus {
    .top-section {
      .main-link {
        color: $primary2;
      }
    }
    .bottom-section {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
  }
}

</style>
