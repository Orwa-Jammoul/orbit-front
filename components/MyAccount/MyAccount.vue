<template>
  <div class="container mt-10" style="min-height: calc(100vh - 270px);" dir="auto">
    <ul class="nav nav-pills d-flex nav-pills-mobile  mb-5 "  id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button data-index="profile" class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true">
          <span class=" fs-sm-4">{{ t('profile') }}</span>
        </button>
      </li>
      <li class="nav-item" role="presentation" >
        <button data-index="orders" class="nav-link active" id="v-pills-orders-tab" data-bs-toggle="pill" data-bs-target="#v-pills-orders" type="button" role="tab" aria-controls="v-pills-orders" aria-selected="true">
          <span class=" fs-sm-4">{{ t('orders') }}</span>
        </button>
      </li>
      <li class="nav-item" role="presentation" >
        <button data-index="Invoices" class="nav-link" id="v-pills-Invoices-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Invoices" type="button" role="tab" aria-controls="v-pills-Invoices" aria-selected="true">
          <span class=" fs-sm-4">{{ t('Invoices') }}</span>
        </button>
      </li>
      <li class="nav-item" role="presentation" >
        <button data-index="Change-Password" class="nav-link" id="v-pills-Change-Password-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Change-Password" type="button" role="tab" aria-controls="v-pills-Change-Password" aria-selected="true">
          <span class=" fs-sm-4">{{ t('Change-Password') }}</span>
        </button>
      </li>
      
    </ul>
    <div class="row" style="min-height: 450px;">
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show "  id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
          <MyAccountProfile />
        </div>
        <div class="tab-pane fade show active" id="v-pills-orders" role="tabpanel" aria-labelledby="v-pills-orders">
          <MyAccountUserOrder /> 
        </div>
        <div class="tab-pane fade show " id="v-pills-Invoices" role="tabpanel" aria-labelledby="v-pills-Invoices">
          <MyAccountInvoices /> 
        </div>
        <div class="tab-pane fade show " id="v-pills-Change-Password" role="tabpanel" aria-labelledby="v-pills-Change-Password-tab">
          <MyAccountChangePassword /> 
        </div>
    </div>
    </div>
  </div>
</template>

<script setup>
var user = useUserInfo().value ;
// console.log(user)
// console.log(useLang))
const route = useRoute()
const type = ref(useAccountType().value)
// route.query.type ? type.value = route.query.type : type.value = ""
// const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));

// console.log(user.client.type)
// onMounted(async () => {
//   await wait(1000);

//   // console.log('type', type.value)
// })
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/scss/theme/theme";

  .nav-pills {
    padding: 0 1rem;
    // background-color: $green2;
    .nav-item{
      flex: 1;
      flex-basis: 10rem;
      // flex-shrink: 1;
      .nav-link {
        width: 100%;
        background-color: #efefef;
        color:  $primary2;
        font-weight: 900;
        border-radius: 0 !important;
        // border-radius: 2rem !important;
        // margin: 0 0.2rem;
        padding-top: .5rem;
        padding-bottom: .5rem;

        &.active {
          background-color: $primary2 !important;
          color: white !important;
        }
        &:hover:not(.active) {
          // background-color: #ededed !important;
          color: $primary2b !important;
        }
      }
    }
  }

  .account_type {
    position: absolute;
    left: 1rem;
    // top: ;
    border: 1px solid $green;
    color: white;
    background-color: $green;
    padding: 0.5rem 1rem;
  }
</style>