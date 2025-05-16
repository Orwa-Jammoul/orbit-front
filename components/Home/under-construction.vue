<template>
  <div class="test-section pcc flex-column px-5">
    <div class="logo-frame contain">
      <img src="/logos/logo-white-with-name.svg" alt="orbit-logo">
    </div>
    <div class="info mt-5 ">
      <h6 class="text-center" style="direction: rtl;" dir="rlt">
        الموقع قيد الإنشـــاء، ســـنكون هنا قريــــباً.
      </h6>
      <h6 class="text-center">
        Website is under construction, we will be there soon.
      </h6>
      <h6 class="text-center">
        Die Website befindet sich im Aufbau, wir sind bald da.
      </h6>
    </div>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.test-section{
  background-color: #29abe2;
  height: 100vh;
  .logo-frame{
    width: min(60vw , 20rem);
    height: auto;
  }
  .info{
    display: flex;
    flex-direction: column;
    color: white;

    .icon-frame{
      max-width: 25px;
      max-height: 25px;
    }
  }
}
</style>