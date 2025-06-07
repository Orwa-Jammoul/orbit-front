<template>
  <!-- <div class="wrap">
    <button
      v-if="!isAuth"
      class="log-btns Sign-up"
      :class="$i18n.locale === 'ar' ? 'ar' : ''"
      @click="goto('/auth/signup')"
    >
      <h5>{{ t("sign-up", true) }}</h5>
      <icon name="line-md:account-add" color="#B62F83" size="16px" />
    </button>

    <button
      v-if="!isAuth"
      class="log-btns login-btn"
      @click="goto('/auth/Login')"
    >
      <h5>{{ t("login", true) }}</h5>
      <icon name="material-symbols:login" color="#B62F83" size="16px" />
    </button>
  </div> -->

  <div class="navbar-item">
    <div class="top-section pcs mx-0 me-2">
      <icon name="material-symbols:account-circle" size="20px" />
      <!-- <p class="m-0  d-none d-lg-block">{{t("my-account",1)}}</p> -->
    </div>
    <div class="bottom-section" :class="rtl()">
      <MenuDropAccount :isAuth="isAuth" class="msg" :class="isEn() ? '' : ''" />
    </div>
  </div>
</template>

<script setup>

const { public: { api, apiBase } } = useRuntimeConfig();
const accountType = ref(useAccountType().value);
const UserInfo = ref(useUserInfo().value);
const isAuth = ref(useAuth().value.isAuthenticated);
const profileImg = ref(undefined);
if (isAuth) {
  profileImg.value =
    UserInfo.value?.imageUrl ?? UserInfo.value?.persomImageUrl ?? undefined;
}

// console.log(isAuth.value);
watch([useAuth().value, useUserInfo()], () => {
  isAuth.value = useAuth().value.isAuthenticated;
  UserInfo.value = useUserInfo().value;
  if (isAuth) {
    profileImg.value =
      UserInfo.value?.imageUrl ?? UserInfo.value?.persomImageUrl ?? undefined;
  }

});


</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/theme";

.navbar-item {
  position: relative;
  width: auto;
  .top-section {
    cursor: pointer;
    color: $primary2;
    width: auto;
    height: 100%;
    // padding-inline-start: 5px ;
    // border-inline-start: solid 1px black ;
  }
  .bottom-section {
    z-index: 200;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    width: auto;
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
