<template>
  <div class="main-nav" id="main-nav">
    <SharedMenuTop />
  </div>
</template>

<script setup>

// const userInfo = ref(localStorage.getItem("userInfo"))
// const token = ref(localStorage.getItem("token"))
// const UserId = ref(localStorage.getItem("UserId"))
// useUserInfo().value = JSON.parse(userInfo.value) 
// useToken().value = token.value
// useUserId().value = UserId.value

// useAuth().value.isAuthenticated = !!token.value

// console.log(userInfo.value);

// console.log(useMenu().value);

// const showBg = ref(false)
// const scrollPosition = ref(0)
// window.addEventListener('scroll', ()=>{
//   scrollPosition.value = window.scrollY;
//   showBg.value = scrollPosition.value>220
//   // console.log(scrollPosition.value);
// });

</script>

<style lang="scss" scoped>
@use"~/assets/styles/scss/theme/theme" as *;
.main-nav {
  z-index: 999;
  background: none;
  transition: all 300ms ease-out;
}

@media print {
  .main-nav {
    display: none; 
  }
}
</style>
