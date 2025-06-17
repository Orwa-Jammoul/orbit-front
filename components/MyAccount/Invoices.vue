<template>
  <section class="user-invoices">
    <div class="text-start mx-3 my-3">
      <v-btn class="btn-main" @click="Print">{{ t('print',1) }}</v-btn>
    </div>

    <div
      class="orders-data table-content table-responsive"
      :class="{'visually-hidden': showDetails}"
      id="cart-container-order"
      v-if="ordersList"
    >
      <!-- {{ ordersList }} -->
      <table class="table d-none d-md-table">
        <thead>
          <tr>
            <th>#</th>
            <th>{{ t("Order Number") }}</th>
            <th>{{ t("Order date") }}</th>
            <th>{{ t("total-price") }}</th>
            <th>{{ t("Payment Method") }}</th>

            <th>{{ t("Status") }}</th>
            <th>{{ t('Action') }}</th>
          </tr>
        </thead>
        <tbody v-if="ordersList.length > 0">
          <tr v-for="(order, index) in ordersList" :key="order.id">
            <!-- v-show="n.shoppingCartId == order.id" -->
            <td>
              {{ index + 1 }}
              <!-- {{order.id ?? '----'}} -->
            </td>
            <td>
              {{ order.orderNumber ?? "----" }}
            </td>
            <td>
              <!-- {{order.orderNumber ?? '----'}} -->
              {{ useDate(order.deliveryDate) ?? "----" }}
            </td>
            <td>
              {{ useCurrency().value }}  {{ order.totalPrice ?? "----" }}
              <!-- {{ currency.symbol }}  {{ order.totalPrice ?? '----' }} -->
            </td>
            <td>
              ----
              <!-- <span v-if="order.payTypeId == 1 ">
                {{ $i18n.locale == 'en' ? order.payType.nameEn : order.payType.nameAr }}
              </span>
              <span v-else-if="order.payTypeId == 4">
                {{ $i18n.locale == 'en' ? order.payType.nameEn : order.payType.nameAr }}
              </span> -->
            </td>
            <td>
              {{ t(order.status) }}
            </td>
            <td>
              <button
                class="btn btn-info btn-sm"
                @click="GetOrderDetails(order)"
              >
                {{ t("details") }}
              </button>
              <!-- <div v-if="order.finalOrderPayment" class="mt-1">
                <button
                  class="btn px-4 btn-success btn-sm"
                  disabled
                  v-if="
                    order.finalOrderPayment.payStatus == 'PURCHASED' ||
                    order.finalOrderPayment.payStatus == 'CAPTURED'
                  "
                >
                  {{ t("Paid") }}
                </button>
                <div v-else>
                  <button
                    :id="`payButton${order.finalOrderPayment.orderId}`"
                    class="btn px-4 btn-primary btn-sm"
                    @click="payOrder(order.finalOrderPayment)"
                    v-if="order.finalOrderPayment.payStatus != 'False'"
                  >
                    {{ t("Pay") }}
                  </button>
                </div>
              </div> -->
            </td>
          </tr>
        </tbody>
        <td colspan="6" v-else class="pt-5 mt-5 text-center fs-3">
          {{ t("no-data") }}
        </td>
      </table>

      <div class="orders-cards d-block d-md-none">
        <CardInvoice v-for="(order, index) in ordersList" :order="order" :num="index" :key="order.id"/>
      </div>

    </div>
    <div v-else>
      <ElementsSpinner style="height: 350px" />
    </div>
    <div id="orderdetails" :class="{'visually-hidden': !showDetails}">
      <div class="container">
        <button class="btn btn-outline-info mb-5 " @click="close">
          {{ t("Back") }}
        </button>

        <h3 class=" fw-bold">{{ t("Order Details") }}</h3>

        <div v-if="Trackings">
          <!-- {{ ordersListDetails[0] }} -->
          <div class="table-content table-responsive" id="details">
            <table class="table">
              <thead>
                <tr>
                  <th>{{ t("number") }}</th>
                  <th>{{ t("shipping-status") }}</th>
                  <th>{{ t("note") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in Trackings" :key="item.id">
                  <td>
                    {{ index +1 }}
                  </td>
                  <td>
                    {{  item.shippingStatus }}
                  </td>
                  <td>
                    {{ isEn()? item.noteEn : item.noteAr  }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- <hr /> -->
        </div>
        <div v-else>
          <elements-spinner />
        </div>
      </div>
      <!-- <hr /> -->
    </div>
    
  </section>
</template>

<script setup>

const { public: {api, apiBase} } = useRuntimeConfig();
const { $awn } = useNuxtApp();
// console.log(object);
const user = useUserInfo().value;
const ordersList = ref([]);

const showDetails = ref(false);
const ordersListDetails = ref([]);
const Trackings = ref(null);

// const query1=`${api.MainOrderRecord}/GetPagedByClient?clientId=${user.clientId}`;
const query1=`${api.userInvoices}?clientId=${user.clientId}`;

const {data:ordersData, error} = await useGetSiteApi().GetAll(query1);
if (error.value && (error.value.statusCode == 401 || error.value.statusCode == 403)) {
  // console.log("Reauthorization");
  await useReauthorization().reAuthorize()
}

ordersList.value = ordersData.value.data;


const GetOrderDetails = async (order) => {
  showDetails.value  = !showDetails.value
  ordersListDetails.value = order

  const {data:trackingData, error:trackingError} = await useGetSiteApi().GetAll(`${api.orderTrackingApi}?orderId=${order.id}&pageNumber=1&pageSize=100`);

  Trackings.value = trackingData.value.data;
  // console.log(Trackings.value);
  
};

const close = () => {
  showDetails.value  = !showDetails.value
  ordersListDetails.value = [];
  Trackings.value = null;
}

const Print= () => {
    // Hide the navbar and footer before printing
    document.querySelector('#main-nav').style.display = 'none';
    document.querySelector('#footer-main').style.display = 'none';

    // Print the page
    window.print();

    // Show the navbar and footer after printing
    document.querySelector('#main-nav').style.display = 'flex';
    document.querySelector('#footer-main').style.display = 'block';
}

</script>

<style lang="scss" scoped>
@use"~/assets/styles/scss/theme/theme" as *;
.user-invoices{
  .orders-data{
    // .table{
  
    // }
    .orders-cards{
      margin-bottom: 1rem;
    }
  }
  .text-end{
    padding: 0 1rem;
    margin-bottom: 2rem;
  }
}

.color {
  color: $primary1;
  visibility: hidden
}
.table-responsive {
  // &::-webkit-scrollbar { height: 6px; }
  // &::-webkit-scrollbar-track { background: #2e2b2b; }
  // &::-webkit-scrollbar-thumb { background: $gold; border-radius: 10px; }
  // &::-webkit-scrollbar-thumb:hover { background: #555; }
  @include horizontal-scrollbar(6px, "#2e2b2b", $primary1, "#555");
}
table.table {
  color: #000;
  thead th,
  tbody td {
    height: 60px;
    vertical-align: middle;
    white-space: nowrap;
    text-align: center;
  }
}
button.btn:focus:not(:focus-visible) {
  box-shadow: unset;
}
</style>
