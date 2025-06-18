<template>
  <section class="order-page container">
    <div class="path-links text-start pt-4 mb-0">
      <h5 class="links-frame mb-0" dir="auto" >
        <nuxt-link class="path-link" to="/">{{ t("home") }}</nuxt-link> /
        <nuxt-link class="path-link" :to="`/cart`">
          {{ t("My_Cart") }}
        </nuxt-link> /
        <!-- <span class="path-link">{{ t("services", 1) }}</span> -->
        <span class="path-link">{{ t("Checkout",1) }}</span>
      </h5>
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

          <div class="col-12">
            <h4 class="my-5" style="color: #242424">{{ t("shipping-information", 1) }}</h4>
          </div>
          <!-- <div class="col-12 mb-2" >
            <ElementsFormVTextInput
              border_color="000"
              color="000"
              type="text"
              name="recieverFullName"
              id="recieverFullName"
              :label="t('fullname')"
              :placeholder="t('fullname')"
              astricts="true"
            />
          </div> -->
          <!-- <div class="col-12 mb-2">
            <ElementsFormVTextInput
              border_color="000"
              color="000"
              type="text"
              name="recieverPhone"
              id="recieverPhone"
              :label="t('phone')"
              :placeholder="t('phone')"
              astricts="true"
            />
          </div> -->
          <!-- <div class="col-sm-12 mb-5">
            <ElementsFormVSelect 
              dir="auto"
              border_color="000"  
              color="000" 
              name="countryId" 
              id="countryId" 
              type="select"
              :label="t('Country')"
              :placeholder="t('select-countries')"
              :items="countries" 
              textEn="nameEn"
              textAr="nameAr"
            />
          </div> -->
          <div class="col-sm-12 mb-5">
            <ElementsFormVSelect 
              dir="auto"
              border_color="000"  
              color="000" 
              name="payTypeId" 
              id="payTypeId" 
              type="select"
              :label="t('Payment Method')"
              :placeholder="t('Payment Method')"
              :items="payTypes" 
              textEn="nameEn"
              textAr="nameAr"
            />
          </div>
          <div class="col-sm-12 mb-5">
            <ElementsFormVSelect 
              dir="auto"
              border_color="000"  
              color="000" 
              name="currencyId" 
              id="currencyId" 
              type="select"
              :label="t('currency')"
              :placeholder="t('currency')"
              :items="currencies" 
              textEn="nameEn"
              textAr="nameAr"
            />
          </div>
          <div class="col-12 mb-2">
            <ElementsFormVTextInput
              border_color="000"
              color="000"
              type="text"
              name="address"
              id="address"
              :label="t('address')"
              :placeholder="t('address')"
              astricts="true"
            />
          </div>
          <!-- <div class="col-12 mb-2">
            <ElementsFormVTextInput
              border_color="000"
              color="000"
              type="text"
              name="clientPoints"
              id="clientPoints"
              :label="t('client-points')"
              :placeholder="t('client-points')"
              astricts="true"
            />
          </div> -->
          <!-- <div class="col-12 mb-2">
            <ElementsFormVTextInput
              border_color="000"
              color="000"
              type="text"
              name="locationReciever"
              id="locationReciever"
              :label="t('locationReciever')"
              :placeholder="t('locationReciever')"
              astricts="true"
            />
          </div> -->

          <div class="col-12 mb-2 d-flex coupon-section" >
            <div class="coupon-input">
              <ElementsFormVTextInput
                border_color="000"
                @change="couponValueUpdate"
                color="000"
                type="text"
                name="couponCode"
                id="couponCode"
                :label = " isEn() ? 'Coupon' :'الكوبون' "
                :placeholder = " isEn() ? 'Coupon' :'الكوبون' "
              />
            </div>
            <div class="coupon-btn-frame " @click="checkCoupon(formMeta)">
              <span class="coupon-btn pcc">
                <span>
                  {{ t("check") }}
                </span>
              </span>
            </div>
          </div>


          <div class="col-md-12 form-group mt-4">
            <button
              type="submit"
              value="Order"
              class="btn btn-main"
              
              :class="{ 'btn-success': formMeta.valid }"
              :disabled="!formMeta.valid || isLoading"
            >
              <span v-if="!isLoading">{{ t("order-now") }}</span>
              <span v-else>{{ t("loading...") }}</span>
            </button>
          </div>
        </VForm>
      </div>
      <div class="col-md-6">
        <OrderProductInfoTable/>
      </div>
    </div>

  </section>
</template>

<script setup>
import { object, string, ref as yupRef } from "yup";
import { configure } from "vee-validate";
import { integer } from "@vee-validate/rules";
// import { date } from "yup/lib/locale";

const { $awn } = useNuxtApp();

const { public: {api, apiBase} } = useRuntimeConfig();
const user = useUserInfo().value;
const accountType = useAccountType();
const currency = useCurrency();
const cart = ref(useCart().value);
const isLoading = ref(false);
const hasError = ref(false);
const errorMessage = ref("");
const totalCardPrice = ref(0);

const countries = ref([])
const payTypes = ref([])
const currencies = ref([])
const { data:countriesData } = await useGetSiteApi().GetAll(api.NationsApi)
const { data:payTypesData } = await useGetSiteApi().GetAll(api.PayTypesApi)
const { data:currenciesData } = await useGetSiteApi().GetAll(api.CurrenciesApi)

watchEffect(()=> {
  if(countriesData.value && payTypesData.value && currenciesData.value) {
    countries.value= countriesData.value.data
    payTypes.value= payTypesData.value.data
    currencies.value= currenciesData.value.data
  }
})



const couponValue = ref(null)
const isValidCoupon = ref(false)
const couponValueUpdate = (val)=>{
  // console.log('hi',val.target.value);
  couponValue.value = val.target.value
}

const checkCoupon = async () => {
  // console.log(couponValue.value);

  if(couponValue.value){
    const { data: check } = await useGetSiteApi().GetAll(
      `${api.CheckCouponsApi}/${couponValue.value}`
    )
    if (check.value.data == true) {
      isValidCoupon.value = true
      $awn.success("Coupon is valid");
    } else {
      isValidCoupon.value = false
      $awn.alert(check.value.messages[0]);
    }
  }else{
    isValidCoupon.value = false
    $awn.alert("please write coupon code!");
  }

};

const handleSubmit = async (values, actions) => {
  isLoading.value = true;
  // console.log(useCart().value);

  let ordinaryOrders = []

  // {
  //   "id": 0,
  //   "orderNumber": "string",
  //   "status": "string",
  //   "orderId": 0,
  //   "userId": "string",
  //   "clientId": 0,
  //   "clientType": "string",
  //   "productId": 0,
  //   "productName": "string",
  //   "productCategoryId": 0,
  //   "productCategory": "string",
  //   "productSubCategoryId": 0,
  //   "productSubCategory": "string",
  //   "productSubSubCategoryId": 0,
  //   "productSubSubCategory": "string",
  //   "productSubSubSubCategoryId": 0,
  //   "productSubSubSubCategory": "string",
  //   "companyId": 0,
  //   "companyName": "string",
  //   "unitId": 0,
  //   "unitName": "string",
  //   "singleQuantity": 0,
  //   "quantity": 0,
  //   "isOffer": true,
  //   "productOfferId": 0,
  //   "singleOffer": 0,
  //   "singlePrice": 0,
  //   "totalPrice": 0,
  //   "createdOn": "2025-04-21T22:03:12.941Z",
  //   "notes": "string"
  // }

  const sorts = useCart().value.items;
  console.log(sorts);


  for (let i = 0; i < sorts.length; i++) {
    const itemsOfSort = sorts[i];
    for (let j = 0; j < itemsOfSort.length; j++) {
      const item = itemsOfSort[j];
      if(item){
        let ordinaryOrder = {
          id: 0,
          productId: item.id,
          product: null,
          productName: item.item.nameEn,
          companyName: item.item.companyName,
          companyId: item.item.companyId,
          quantity: item.qty,
          singleQuantity: item.qty,
          singleOffer: 0,
          singlePrice: item.price,
          isOffer: false,
          // totalPrice: usePrice(item.item,0,0)  + (item.qty.countAdult*item.price.perAdult+ item.qty.countChild*item.price.perChild+ item.qty.countBaby*item.price.perBaby),
          totalPrice: item.price * item.qty,
          createdOn: null,
          notes: "",
        }
  
        ordinaryOrders.push(ordinaryOrder) 
      }
    }
  }


  // useCart().value
  // values.countAdult= 0;
  // values.countChild= 0;
  // values.countBaby= 0;
  values.companyId= 2;
  // values.clientGeoLocation= null;
  // values.paymentStatus= "Pending",
  values.payStatus= "Pending",
  values.status= "Pending",
  values.clientId= useUserInfo().value.clientId,
  values.userId= useUserInfo().value.client.userId,
  values.clientType= useUserInfo().value.client.type,
  values.princedomId= values.princedomId? values.princedomId:0,
  // values.address= "",    //form
  // values.payTypeId= 4,      //form
  // values.currencyId= 3,     //form
  // values.couponCode= "",    //form
  values.couponCode =  isValidCoupon.value? couponValue.value:'',
  values.clientPoints= 0,   

  values.ordinaryOrders = new Object(ordinaryOrders) 

  console.log(values);
  // isLoading.value = false;

  const { data: MainOrder, error: MainOrderError } =
    await useHttpForSiteApi().post(api.FinalOrdinaryOrdersApi, values);

  if(MainOrder.value.succeeded){
    $awn.success('Your Order Was Successfully Created')
    emptyCart();
    goto('/account')
  }else{
    // emptyCart();
    isLoading.value = false;
    $awn.alert('Can Not Create Order, please try again later', { durations: { global: 5000 } });
  }
};


const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = object({
  payTypeId: string().required().label("Payment Method"),
  currencyId: string().required().label("Currency"),
  address: string().required().min(3).label("address"),
  // recieverFullName: string().required().min(3).label("Reciever name").nullable(),
  // recieverPhone: string()
  //   .matches(phoneRegExp, "Reciever phone number is not valid")
  //   .required()
  //   .min(3)
  //   .label("Reciever phone"),
  // countryId: string().required().label('Reciever country').nullable(),
  // recieverAddress: string().required().min(3).label('Reciever address').nullable(),
  // coupon: string().label('Coupon').nullable(),
});

const initialValues = {
  payTypeId: 4,
  currencyId: 3,
  address: useUserInfo().value.address,
};

</script>

<style lang="scss" scoped>
.order-page{
  margin-bottom: 2rem;
  .coupon-section{
    .coupon-input{
      width: 70%;
    }
    .coupon-btn-frame{
      display: flex;
      flex-grow: 1;
      padding: 0 12px;
      padding-top: 12px;
      margin-top: 1.5rem;
      height: 68px;
      .coupon-btn{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        color: white;
        background-color: black;
        cursor: pointer;
      }
    }
  }
}
</style>