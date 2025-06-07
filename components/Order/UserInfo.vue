<template>
  <section class="user-info card mt-5" style="border: none">
    <div class="row">
      <div class="col-12">
        <h4 class="mt-5" style="color: #242424">{{ t("Checkout", 1) }}</h4>
      </div>
      <div class="col-12 mb-2" >
        <!-- <label for="fullName">{{ t("fullname") }}</label> -->
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
      </div>
      <div class="col-12 mb-2">
        <!-- <label for="phone">{{ t("phone") }}</label> -->
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
      </div>
      <div class="col-12 mb-2">
        <!-- <label for="address">{{ t("address") }}</label> -->
        <ElementsFormVTextInput
          border_color="000"
          color="000"
          type="text"
          name="recieverAddress"
          id="recieverAddress"
          :label="t('address')"
          :placeholder="t('address')"
          astricts="true"
        />
      </div>
      <!--<div class="col-12 mb-2">
        <label for="address">{{ t("address") }}</label> 
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
      </div>-->
      <div class="col-12 mb-2">
        <!-- <label class="lable-input" for="birthDate " >{{t('birthDate')}}</label> -->
        <ElementsFormVTextInput
          type="date"
          border_color="B62F83"
          color="000"
          name="deliveryDate"
          format="yyyy-MM-dd"
          id="deliveryDate"
          :label="t('deliveryDate')"
          :placeholder="t('deliveryDate')"
        />
      </div>

      <!-- <div class="col-12 mb-2" >
        <label for="fullName">{{ t("Arabic Name") }}</label>
        <ElementsFormVTextInput
          border_color="000"
          color="000"
          type="text"
          name="fullNameAr"
          id="fullNameAr"
          :label="t('Arabic Name')"
          :placeholder="t('Arabic Name')"
          astricts="true"
        />
      </div> -->
      <!--<div class="col-12 mb-2">
         <label for="email">{{ t("email") }}</label>
        <ElementsFormVTextInput
          border_color="000"
          color="000"
          type="email"
          name="email"
          id="email"
          :label="t('email')"
          :placeholder="t('email')"
          astricts="true"
        />
      </div> -->

      <VForm id="orderForm" class="col-12 pcb order-form"
        :validation-schema= "schemaC"
        :initial-values="initialValues"
        v-slot="{ meta: formMeta }"
        @submit="checkCoupon"
      >
        <div class="coupon-contain">
          <ElementsFormVTextInput
            border_color="000"
            color="000"
            type="text"
            name="coupon"
            id="coupon"
            :label = " t('Coupon') "
            :placeholder = " t('Coupon')"
          />
        </div>
        <v-btn type="submit" class="coupon-btn btn-main" 
          :prepend-icon="vaildCopoun?'mdi-checkbox-marked-circle':'mdi-wrench'"
        >
          <span>{{ t("conform") }}</span>
        </v-btn>
      </VForm>
    </div>
  </section>
</template>
<script setup>
import { object, string, ref as yupRef } from "yup";
import { configure } from "vee-validate";

const {
  countries,
  countryId,
  accountType,
  locationRecievererror,
  deliveryDateerror,
} = defineProps([
  "countries",
  "countryId",
  "accountType",
  "locationRecievererror",
  "deliveryDateerror",
]);
// const countryName = ref([]);
// console.log(countries)
const countryid = ref([]);
countryid.value = 2;
const selectCountryId = ref(null);
const isLoaded = ref(false);
const { public: {api, apiBase} } = useRuntimeConfig();
const { $awn } = useNuxtApp();
const emit = defineEmits(["addcoupon"]);

const vaildCopoun = ref(false)

const getLoaded = (event) => {
  isLoaded.value = event;
};


const initialValues = {
  coupon:'',
}
const schemaC = object({
  coupon: string().min(3).label("Your Coupon").nullable(),
});
configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: true,
});

const checkCoupon = async (values) => {
  //  console.log(values);

  const { data: check } = await useGetSiteApi().GetAll(
    `${api.CheckCouponsApi}/${values.coupon}`
  )

  // console.log(check.value)
  if (check.value.data == true) {
    $awn.success("Coupon is vaild");
    vaildCopoun.value= true;
    emit("addcoupon", values.coupon);
  } else {
    $awn.alert(check.value.messages[0]);
    emit("addcoupon", null);
  }
};


</script>
<style>
.form-label.rtl {
  left: 0 !important;
  right: auto !important;
}
</style>
<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/theme";

// .coupon-contain {
//   position: relative;
//   margin-bottom: 10px;
//   button {
//     position: absolute;
//     top: 9px;
//     right: 25px;
//     background-color: $primary1;
//     color: $primary5;
//     border: none;
//   }
// }
h4 {
  color: #000;
}
.user-info {
  background-color: #fff;
  #orderForm{
    position: relative;
    .coupon-contain{
      width: 60%;
    }
    .coupon-btn{
      position: absolute;
      top: 9px;
      right: 25px;
      height: 54px;
      width: 30%;
      padding: 0;
      &.valid{
        background-color: green;
      }
    }

  }
}
.user-info label {
  color: #000 !important;
}
.user-info .form-floating label {
  color: #faaaff !important;
}
.user-info .form-control {
  height: 54px;
  border: none;
  border-bottom: 1px solid #aaa;
  border-radius: 0px;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  color: #000;
}
</style>
