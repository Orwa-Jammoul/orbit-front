<template>
  <section class="order main-black-background text-white py-5">
    <div class="container mb-5" style="color: #7f574d !important">
      <div class="mb-5" dir="auto">
        <nuxt-link style="color: #000 !important" class="link" to="/"
          >{{t("home")}}</nuxt-link
        >
        / 
        <nuxt-link style="color: #000 !important" class="link" to="/cart"
          >{{t("shopping-cart")}}</nuxt-link
        >
        / 
        <span>{{ t("Checkout",1) }}</span>
      </div>

      <div class="row" :class="isEn() ? '' : 'rtl'">
        <div class="col-md-6">
          <VForm
            id="orderForm"
            class="row order_form"
            :validation-schema= "schema"
            :initial-values="initialValues"
            v-slot="{ meta: formMeta }"
            @submit="handleSubmit"
          >
            <div>
              <div v-if="hasError" class="error-messages mb-3">
                <div class="alert alert-danger text-center">
                  <ul class="list-unstyled mb-0">
                    <li v-for="(error, index) in errorMessage" :key="index">
                      {{ error }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- User Info -->
            <OrderUserInfo
              @addcoupon="addcoupon"
              v-if="countries && accountType"
              :countries="countries"
              :countryId="user.countryId"
              :accountType="accountType"
            />

            <!-- Shipping & Insurance -->
            <!-- <OrderShippingInsurance v-if="productInfo && currency" :productInfo="productInfo" :currency="currency" @final-price="getEmitFinalPrice" :paymentMethods="paymentMethods" :bankInfo="bankInfo" @selected-payment="getEmitPayment" /> -->
            <div class="col-md-12 form-group mt-4">
              <v-btn
                type="submit"
                value="Login"
                class="btn-main btn-block w-100 h-100 px-3"
                :class="{ 'btn-primary': formMeta.valid }"
                :disabled="!formMeta.valid || isLoading"
              >
                <span v-if="!isLoading">{{ t("order-now") }}</span>
                <span v-else>{{ t("loading...") }}</span>
              </v-btn>
            </div>
          </VForm>
        </div>

        <div class="col-md-6">
          <OrderProductInfoTable
            v-if="cart && currency"
            :cart="cart"
            :currency="currency"
          />
        </div>
      </div>
      <!--.row-->
    </div>
    <!--.container-->
  </section>

  <!-- <div class="modal" tabindex="-1" id="exampleModal" v-if="telrIFrameUrl" :style="{ display: telrIFrameUrl ? 'block' : 'none', 'padding-left' : '0'}">
    <div class="modal-dialog modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-body">
          <h3 class="text-center text-dark mb-3" v-if="delayTelrFrameUrlRender">Please wait, view the payment page will may take some time</h3>
          <iframe id="telr" :src="telrIFrameUrl"></iframe>
          <div id="telr"></div>
          <div class="w-100" id="embed-target"></div>
        </div>
      </div>
    </div>
  </div> -->
    <div class="visually-hidden" id="embed-target">
      <button
        class="btn btn-close"
        style="background-color: white; opacity: 1"
        @click="close"
      ></button>
    <div class="container pt-5" id="paymentdiv"></div>
  </div>
</template>

<script setup>
import { object, string, ref as yupRef } from "yup";
import { configure } from "vee-validate";
// import { date } from "yup/lib/locale";
const { countries } = defineProps(["countries"]);
const { $awn } = useNuxtApp();
const Token = localStorage.getItem("mainToken");
const { public: {api, apiBase} } = useRuntimeConfig();
const user = useUserInfo().value;
const accountType = useAccountType();
// console.log(accountType.value)
const currency = useCurrency();
const cart = ref(useCart().value);
const isLoading = ref(false);
const hasError = ref(false);
const errorMessage = ref("");
const totalCardPrice = ref(0);
const payment = ref("");
const ids = ref([]);
const productIds = ref([]);
const productsPrices = ref([]);
const quantitys = ref([]);
const orderNumbers = ref([]);
const paymentTypes = ref([]);
const paymentStatuss = ref([]);
const statuss = ref([]);
const shoppingCartIds = ref([]);
const clintID = ref([]);
const clintType = ref([]);
const princedomNames = ref([]);
const countryIds = ref([]);
const addresses = ref([]);
const coupon = ref(null);
const indexId = ref(0);
const telrIFrameUrl = ref("");
const locationRecievererror = ref("");
const deliveryDateerror = ref("");
const delayTelrFrameUrlRender = ref(false);
// console.log(user);
const addcoupon = (data) => {
  // console.log('coupon is valid', data)
  coupon.value = data;
};

const initialValues = {
  recieverFullName: user.nameEn,
  recieverPhone: user.phone,
  recieverAddress: user.address,
  // locationReciever: string().required().min(3).label('Reciever Location'),
  deliveryDate: shortDate(new Date().toISOString()),
  // email: user.email,
  // fullNameEn: user.fullNameEn,
  // fullNameAr: user.fullNameAr ,
  // phone: user.phone ? user.phone : "",

  // nameEn: useTranslate(user, "name"),
  // addressEn: user.address ? user.address : "",
  // officePhone: user.officePhone ? user.officePhone : "",
  // countryId: user.countryId,
  // locationReciever: "",
  // deliveryDate: "",
  // cities: user.cities,
  // coupon: "",
  // isEnsurance: productInfo.value.isEnsurance ? "true" : "false",
  // paymentType: "transfer"
};
// console.log('user', user);
configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: true,
});

const schema = object({
  recieverFullName: string().required().min(3).label("Reciever Name in English").nullable(),
  recieverPhone: string().required().label("Reciever Phone").nullable(),
  recieverAddress: string().required().min(3).label('Reciever Address'),
  // locationReciever: string().required().min(3).label('Reciever Location'),
  deliveryDate: string().required().label("Delivery Date"),
  
  // email: string().required().email().label("Email Address").nullable(),
  // fullNameAr: string().required().min(3).label("Your Name in Arabic").nullable(),
});

const handleSubmit = async (values, actions) => {
  isLoading.value = true;

  // {
  //   "id": 0,                                      // true
  //   "orderNumber": "string",                      // true
  //   "totalPrice": 0,                              // true
  //   "clientId": 0,                                // true
  //   "clientType": "string",                       // true
  //   "clientTypeSupplier": "string",               // true
  //   "status": "string",                           // true
  //   "createdOn": "2024-03-10T16:50:20.276Z",      // true

  //   "recieverFullName": "string",
  //   "recieverPhone": "string",
  //   "recieverAddress": "string",
  //   "locationReciever": "string",
  //   "deliveryDate": "2024-03-10T16:50:20.276Z",
  //   "codeCoupon": "string",                       // true

  //   "isConfirm": true                             // true
  // }

  values.id= 0;
  values.orderNumber= null;
  values.totalPrice= cart.value.totalPrice;
  values.clientId= user.clientId;
  values.clientType= accountType ;
  values.clientTypeSupplier = 'site',
  values.createdOn = new Date().toISOString(),
  // values.recieverFullName =  null,
  // values.recieverPhone =  null,
  // values.recieverAddress =  null,
  // values.locationReciever =  null,
  // values.deliveryDate =  null,
  values.codeCoupon =  coupon.value,
  values.status="Pending";
  values.isConfirm=false;
  // console.log(values);  
  const { data: MainOrder, error: MainOrderError } =
    await useHttpForSiteApi().post(api.MainOrderRecord, values);
  // console.log(MainOrder.value);

  if(MainOrder.value.succeeded){
    // {
    //   "id": 0,
    //   "quantity": 0,
    //   "unitPrice": 0,
    //   "totalPrice": 0,
    //   "orderType": "string",
    //   "deliveryOrderId": 0,
    //   "productOrServiceId": 0,
    //   "productCategoryId": 0,
    //   "companyId": 0,
    //   "companyKind": "string",
    //   "orderNumber": "string",
    //   "indexRow": 0
    // }
    let productItem ={}
    cart.value.items[1].map(async item=>{
      if(item){
        productItem.id=0
        productItem.quantity= item.qty
        productItem.unitPrice= item.price
        productItem.totalPrice= item.qty * item.price
        productItem.orderType= item.item.nameEn
        productItem.deliveryOrderId= MainOrder.value.data
        productItem.productOrServiceId= 1
        productItem.productCategoryId= item.item.productParentCategoryId
        productItem.companyId= item.item.companyId
        productItem.companyKind= item.item.companyKind
        productItem.orderNumber= ''
        productItem.indexRow= 0

        const { data: singleProductOrder, error: singleProductOrderError } =
          await useHttpForSiteApi().post(api.SingleItemOrder, productItem);
          
        // console.log(singleProductOrder.value);

        if(singleProductOrder.value.succeeded){
          $awn.success('Your Order Was Successfully Created')
          emptyCart();
          goto('/account/my-account')

        }else{
          $awn.alert('Can Not Create Order, please try again later', { durations: { global: 5000 } });
        }
      }
    })

  }
  // if (MainOrder.value && MainOrder.value.succeeded) {

  //   const orderTypes = ['CompanyPackage','CompanyService']

  //   let ids = []
  //   let quantityIds = []
  //   let orderTypeIds = []
  //   let celebrityOrderId = MainOrder.value.data
  //   // let celebrityOrderId = 6
  //   let cPackageOrWPackageOrWServiceIdIds = []

  //   let cartLists= cart.value.items
  //   for (let i = 0; i < cartLists.length; i++) {
  //     let cartList = cartLists[i];
  //     for (let j = 0; j < cartList.length; j++) {
  //       const item = cartList[j];
  //       if(item){
  //         ids.push(0)
  //         quantityIds.push(item.qty)
  //         orderTypeIds.push(orderTypes[i])
  //         cPackageOrWPackageOrWServiceIdIds.push(item.id)
  //       }
  //     }
  //   }

  //   console.log(ids.join(','));
  //   console.log(quantityIds.join(','));
  //   console.log(orderTypeIds.join(','));
  //   console.log(cPackageOrWPackageOrWServiceIdIds.join(','));

  //   const orderItems = {
  //     ids: ids.join(','),
  //     quantityIds: quantityIds.join(','),
  //     orderTypeIds: orderTypeIds.join(','),
  //     celebrityOrderId: celebrityOrderId,
  //     cPackageOrWPackageOrWServiceIdIds: cPackageOrWPackageOrWServiceIdIds.join(',')
  //   }
  //   const { data: ItemsOrder, error: ItemsOrderError } =
  //   await useHttpForUserApi().post(api.MultiItemsOrder, orderItems);
  //   if (ItemsOrder.value && ItemsOrder.value.succeeded) {
  //     console.log(ItemsOrder.value);
  //     $awn.success('Your Order Was Successfully Created')
  //     emptyCart();
  //     goto('/account/my-account')
  //   }
  // }else{
  //   $awn.alert('Can Not Create Order, please try again later', { durations: { global: 5000 } });
  // }
  isLoading.value = false;
};


const close = () => {
  document.getElementById("embed-target").classList.add("visually-hidden");
  return navigateTo("/");
};
const setUserInfo = (data) => {
  // console.log(data)
  if (accountType.value == "Person") {
    initialValues.fullNameAr = useTranslate(data, "fullName");
  } else {
    initialValues.nameEn = useTranslate(data, "name");
  }
  initialValues.email = data.email;
  initialValues.addressEn = data.address;
  if (accountType.value == "Person") {
    initialValues.phone = data.phone;
  } else {
    initialValues.officePhone = data.officePhone;
  }
  initialValues.countryId = data.countryId;
};

const getEmitFinalPrice = (event) => {
  totalCardPrice.value = event;
};

// const getEmitPayment = (event) => {
//   payment.value = event
//   console.log(payment.value)
// }

const resetCart = () => {
  localStorage.removeItem("cart");
  useCart().value.items = new Array();
  useCart().value.totalPrice = 0;
  useCart().value.totalQty = 0;
};

const throwErrorMessage = (message) => {
  isLoading.value = false;
  $awn.alert(message, { durations: { global: 5000 } });
};

onMounted(() => {
  setUserInfo(user);
});
</script>

<style lang="scss" scoped>
h2,
h4 {
  color: #242424;
}

#telr {
  width: 100%;
  min-width: 600px;
  height: 600px;
  // frameborder: 0;
}

#embed-target {
  background-color: rgba(0, 0, 0, 0.586);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100% !important;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
