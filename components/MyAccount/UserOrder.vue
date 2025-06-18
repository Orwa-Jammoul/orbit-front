<template>
  <section class="user-orders">
    <div class="text-start mx-3 my-3">
      <v-btn class="btn-main" @click="Print">{{ t('print',1) }}</v-btn>
    </div>

    <div
      class="orders-data table-content table-responsive"
      id="cart-container-order"
      v-if="ordersList"
    >
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
            <td>
              {{ index + 1 }}
            </td>
            <td>
              {{ order.code ?? "----" }}
            </td>
            <td>
              {{ useDate(order.createdOn) ?? "----" }}
            </td>
            <td>
                {{ order.totalPrice ?? "----" }} {{ t(useCurrency().value) }}
            </td>
            <td>
              <span>
                {{ useName(order.payType) }}
              </span>
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

        <div v-if="ordersListDetails.ordinaryOrders?.length > 0">
          <div class="table-content table-responsive" id="details">
            <table class="table">
              <thead>
                <tr>
                  <th>{{ t("product-name") }}</th>
                  <th>{{ t("quantity") }}</th>
                  <th>{{ t("price") }}</th>
                  <th>{{ t("total-price") }}</th>
                  <th>{{ t("product-image") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in ordersListDetails.ordinaryOrders" :key="item.id">
                  <td>
                    {{ useName(item.product) }}
                  </td>
                  <td>
                    {{ item.quantity }}
                  </td>
                  <td>
                    {{ item.singleOffer>0 ? item.singleOffer:  item.singlePrice }} {{ t(useCurrency().value) }}
                  </td>
                  <td> 
                    {{ item.totalPrice ?? "----" }} {{ t(useCurrency().value) }}
                  </td>
                  <td>
                    <div class="img-frame-product contain">
                      <img :src="cImg(item.product?.productImageUrl??null)" alt="product-image">
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-else>
          <elements-spinner />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { public: {api, apiBase} } = useRuntimeConfig();
const currency = useCurrency().value;
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

// const query1=`${api.GetFinalOrdinaryOrdersApi}?clientId=${user.clientId}`;
const query1=`${api.GetFinalOrdinaryOrdersApi}?clientId=${user.clientId}&PageNumber=1&PageSize=20`;
// console.log(query1);

const {data:ordersData, error} = await useGetSiteApi().GetAll(query1);
// if (error.value && (error.value.statusCode == 401 || error.value.statusCode == 403)) {
//   console.log("Reauthorization");
//   await useReauthorization().reAuthorize()
// }
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
  console.log(ordersListDetails.value );
  
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
    document.querySelector('#main-nav').style.display = 'block';
    document.querySelector('#footer-main').style.display = 'block';
}
</script>

<style lang="scss" scoped>
@use"~/assets/styles/scss/theme/theme" as *;
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
