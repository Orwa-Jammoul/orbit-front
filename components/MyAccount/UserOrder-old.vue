<template>
  <section class="user-orders">
    <!-- {{ ordersList[0] }} -->
    <!-- {{ ordersList[1] }} -->
    <div class="text-start mx-3 my-3">
      <v-btn class="btn-main" @click="Print">{{ t('print',1) }}</v-btn>
    </div>

    <div
      class="orders-data table-content table-responsive"
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
              {{ order.code ?? "----" }}
            </td>
            <td>
              <!-- {{order.orderNumber ?? '----'}} -->
              {{ useDate(order.createdOn) ?? "----" }}
            </td>
            <td>
                {{ order.totalPrice ?? "----" }} {{ t(useCurrency().value) }}
              <!-- {{ currency.symbol }}  {{ order.totalPrice ?? '----' }} -->
            </td>
            <td>
              <!-- ---- -->
              <span>
                {{ useName(order.payType) }}
              </span>
              <!-- <span v-else-if="order.payTypeId == 4">
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
        <CardOrder v-for="(order, index) in ordersList" :order="order" :num="index" :key="order.id"/>
      </div>

    </div>
    <div v-else>
      <ElementsSpinner style="height: 350px" />
    </div>
    <div id="orderdetails" class="visually-hidden">
      <div class="container">
        <button class="btn btn-outline-info mb-5 " @click="close">
          {{ t("Back") }}
        </button>

        <h3 class=" fw-bold ">{{ t("Order Details") }}</h3>

        <div v-if="ordersListDetails.products?.length > 0">
          <!-- {{ ordersListDetails[0] }} -->
          <div class="table-content table-responsive" id="details">
            <table class="table">
              <thead>
                <tr>
                  <!-- <th>{{ t("product-image") }}</th> -->
                  <th>{{ t("product-name") }}</th>
                  <th>{{ t("quantity") }}</th>
                  <th>{{ t("price") }}</th>
                  <!-- <th>{{ t("Payment Status") }}</th> -->
                  <th>{{ t("total-price") }}</th>
                  <th>{{ t("product-image") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in ordersListDetails.products" :key="item.id">
                  <!-- <td>
                    <img
                      :src="apiBase + '/' + item.product.productImageUrl"
                      alt=""
                      width="65"
                      height="65"
                    />
                  </td> -->
                  <td>
                    {{ item.product? useName(item.product) : '----' }}
                    <!-- {{
                      textLength(item.orderType,20)
                    }} -->
                  </td>
                  <td>
                    {{ item.quantity ?? "----" }}
                  </td>
                  <!-- <td>
                    {{ item.paymentType ?? "----" }}
                  </td> -->
                  <td>
                    {{ item.unitPrice }}
                  </td>
                  <td> 
                    {{ item.totalPrice ?? "----" }} {{ t(useCurrency().value) }}
                  </td>
                  <td>
                    <div class="img-frame-product contain">
                      <img :src="cImg(item.product?.productImageUrl??null)" alt="product-image">
                    </div>
                    <!-- {{ useDate(item.createdOn) ?? "----" }} -->
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



    <!-- <div class="pagination" id="paginationorder" v-if="lastPage > 1">
      <div class="row w-100 mx-auto my-3">
        <div class="col-6 text-start">
          <button
            type="button"
            :class="`btn btn-outline-secondary px-4 py-1 ${
              page == 1 ? 'disabled' : ''
            }`"
            @click="prevRecords"
          >
            {{ t("previous") }}
          </button>
        </div>
        <div class="col-6 text-end">
          <button
            type="button"
            :class="`btn btn-outline-secondary px-4 py-1 ${
              lastPage == page ? 'disabled' : ''
            }`"
            @click="nextRecords"
          >
            {{ t("next") }}
          </button>
        </div>
      </div>
    </div> -->

    <!-- Modal For Details -->

    <!-- Modal For Details -->
  </section>
</template>

<script setup>
const currency = useCurrency().value;
const { public: {api, apiBase} } = useRuntimeConfig();
const user = useUserInfo().value;
const page = ref(1);
const NumberPerPage = ref(15);
const ordersList = ref([]);
const ordersListDetails = ref([]);
const lastPage = ref(null);
const Trackings = ref(null);
const { $awn } = useNuxtApp();

// const payOrder = async (obj) => {
//   // console.log('obj', obj)
//   // return
//   document.getElementById(`payButton${obj.orderId}`).innerText = "Loading...";
//   const paymentData = {
//     orderId: obj.orderId,
//     clientId: obj.clientId,
//     isTest: false,
//   };
//   // console.log(paymentData)
//   const {
//     data: payment,
//     error: paymentError,
//     execute: paymentExecute,
//   } = await useHttpForUserApi().post(api.SendPaymentRequestApi, paymentData);
//   if (payment.value.succeeded) {
//     document.getElementById(`payButton${obj.orderId}`).innerText = "Paid";
//     // console.log(payment.value.data.links.payment.href)
//     // window.open(payment.value.data.links.payment.href, "_parent", "width=50%,height=80vh")
//     window.open(payment.value.data.links.payment.href, "_blank");
//     await new Promise((r) => setTimeout(r, 1000));
//     window.close();
//   } else {
//     document.getElementById(`payButton${obj.orderId}`).innerText = "Pay";
//     $awn.alert("Error In Open Payment URL");
//   }
// };

// const query1 = `${api.FinallyOrdersGetAllForClientApi}/GetAllPagedFinalOrdinaryOrdersByClient/${user.clientId}/${user.client.type}?PageNumber=${page.value}&PageSize=${NumberPerPage.value}&orderBy=CreatedOn descending`
// const query1 = `/api/v1/CelebrityOrders/GetPagedByClient?clientId=${
//   useUserInfo().value.clientId
// }`;

const query1=`${api.GetFinalOrdinaryOrdersApi}?clientId=${user.clientId}`;
// console.log(query1);

const {data:ordersData, error} = await useGetSiteApi().GetAll(query1);
if (error.value && (error.value.statusCode == 401 || error.value.statusCode == 403)) {
  console.log("Reauthorization");
  await useReauthorization().reAuthorize()
}
// console.log(ordersList.value);
watchEffect(()=> {
  if(process.client) {
    if(ordersData.value ) {
      ordersList.value = ordersData.value.data;
    }
  }
})

// console.log(useUserInfo().value);
// console.log(query1);
// console.log(ordersList.value);

//  ordersList.value = ordersList.value.sort((a,b) => {
//       return b.id - a.id
//     })
// lastPage.value = orders.value.totalPages;
// // refetch the token if 401 error occure
// if (errororders.value && errororders.value.statusCode == 401) {
//   await useReauthorization().reAuthorize();
// }

// const nextRecords = async () => {
//   page.value += 1;
//   ordersList.value = [];
//   // console.log(page.value)
//   const query = `${api.FinallyOrdersGetAllForClientApi}/GetAllPagedFinalOrdinaryOrdersByClient/${user.clientId}/${user.client.type}?PageNumber=${page.value}&PageSize=${NumberPerPage.value}&orderBy=CreatedOn descending`;
//   const {
//     data: orders,
//     error: errororders,
//     execute: executeorders,
//   } = await useGetSiteApi().GetAll(query);
//   ordersList.value = orders.value.data;
//   // ordersList.value = ordersList.value.sort((a,b) => {
//   //   return b.id - a.id
//   // })
// };

// const prevRecords = async () => {
//   ordersList.value = [];
//   page.value -= 1;
//   const query = `${api.FinallyOrdersGetAllForClientApi}/GetAllPagedFinalOrdinaryOrdersByClient/${user.clientId}/${user.client.type}?PageNumber=${page.value}&PageSize=${NumberPerPage.value}&orderBy=CreatedOn descending`;
//   const {
//     data: orders,
//     error: errororders,
//     execute: executeorders,
//   } = await useGetSiteApi().GetAll(query);
//   ordersList.value = orders.value.data;
//   // ordersList.value = ordersList.value.sort((a,b) => {
//   //   return b.id - a.id
//   // })
// };

const GetOrderDetails = (order) => {
  // console.log(id)
  let item1 = document.getElementById("cart-container-order");
  if (lastPage.value > 1) {
    let item2 = document.getElementById("paginationorder");
    item2.classList.add("visually-hidden");
  }

  let item3 = document.getElementById("orderdetails");
  item1.classList.add("visually-hidden");

  item3.classList.remove("visually-hidden");

  ordersListDetails.value = order
  
};

const close = () => {
  let item1 = document.getElementById("cart-container-order");
  if (lastPage.value > 1) {
    let item2 = document.getElementById("paginationorder");
    item2.classList.remove("visually-hidden");
  }

  let item3 = document.getElementById("orderdetails");
  item1.classList.remove("visually-hidden");

  item3.classList.add("visually-hidden");
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
@import "~/assets/styles/scss/theme/theme";
.user-orders{
  .orders-data{
    // .table{
  
    // }
    .orders-cards{
      margin-bottom: 2rem;
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
    .img-frame-product{
      // width: ;
      height: 7rem;
    }
  }
}
button.btn:focus:not(:focus-visible) {
  box-shadow: unset;
}
</style>
