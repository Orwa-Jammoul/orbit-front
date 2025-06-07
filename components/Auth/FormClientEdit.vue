<template>
  <VForm
    id="registerForm"
    class="row register_form"
    :validation-schema="schema"
    :initial-values="initialValues"
    v-slot="{ meta: formMeta }"
    @submit="handleSubmit"
    @change="inputUpdated"
  >
    <div v-if="hasError" class="error-messages mb-3">
      <div class="alert alert-danger text-center">
        <ul class="list-unstyled mb-0">
          <li v-for="(error, index) in errorMessage" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
    </div>
    <div class="row p-0 m-0" dir="auto">
      <!-- <p class="text-center mb-3 pt-3 fw-bold" style="color: red">
        {{ t("Required field") }}
      </p> -->
      <div class="col-sm-12 col-md-12 col-lg-12 mb-5">
        <!-- <label for="fullName" >{{t('full Name', true)}}</label> -->
        <ElementsFormVTextInput
          border_color="000"
          color="000"
          type="text"
          name="fullname"
          id="fullname"
          :label="t('fullname', 1)"
          :placeholder="t('fullname', 1)"
          astricts="true"
        />
      </div>
      <!-- <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
        <label for="fullName" >{{t('full Name', true)}}</label>
        <ElementsFormVTextInput
          border_color="000"
          color="000"
          type="text"
          name="fullnameAr"
          id="fullnameAr"
          :label="t('fullnameAr', 1)"
          :placeholder="t('fullnameAr', 1)"
        />
      </div> -->

      <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
        <!-- <label for="email" >{{t('email')}}</label> -->
        <ElementsFormVTextInput
          border_color="000"
          color="000"
          type="email"
          name="email"
          id="email"
          :label="t('email', 1)"
          :placeholder="t('email', 1)"
          astricts="true"
        />
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
        <!-- <label for="phone" >{{t('phone')}}</label> -->
        <ElementsFormVTextInput
          border_color="000"
          color="000"
          type="text"
          name="phone"
          id="phone"
          :label="t('phone', 1)"
          :placeholder="t('phone', 1)"
          astricts="true"
        />
      </div>
      <!-- <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
        <label for="password" >{{t('password')}}</label>
        <ElementsFormVTextInput
          border_color="000"
          color="000"
          type="password"
          name="password"
          id="password"
          :label="t('password', 1)"
          :placeholder="t('password', 1)"
          autocomplete="false"
          :activePasswordEye="true"
          astricts="true"
        />
      </div> -->
      <!-- <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
        <label for="confirmpassword" >{{t('confirmpassword')}}</label>
        <ElementsFormVTextInput
          border_color="000"
          color="000"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          :label="t('confirmpassword', 1)"
          :placeholder="t('confirmpassword')"
          autocomplete="false"
          :activePasswordEye="true"
          astricts="true"
        />
      </div> -->
      <!-- <p class="text-center mb-3 pt-3 fw-bold" style="color: red">
        {{ t("Optional field") }}
      </p> -->
      <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
        <ElementsFormVTextInput
          border_color="000"
          color="000"
          type="text"
          name="fax"
          id="fax"
          :label="t('fax', 1)"
          :placeholder="t('fax', 1)"
        />
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
        <ElementsFormVTextInput
          border_color="000"
          color="000"
          type="date"
          name="birthDate"
          id="birthDate"
          :label="t('birthDate', 1)"
          :placeholder="t('birthDate', 1)"
        />
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
        <ElementsFormVSelect 
          dir="auto"
          border_color="000"  
          color="000" 
          name="sex" 
          id="sex" 
          type="select"
          :label="t('gender')"
          :placeholder="t('gender')"
          :items="useGender().value" 
        />
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
        <ElementsFormVTextInput
          border_color="000"
          color="000"
          type="text"
          name="address"
          id="address"
          :label="t('address', 1)"
          :placeholder="t('address', 1)"
        />
      </div>
      
      <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
        <ElementsFormVSelect 
          dir="auto"
          border_color="000"  
          color="000" 
          name="nationId" 
          id="nationId" 
          type="select"
          :label="t('select-countries')"
          :placeholder="t('select-countries')"
          :items="countries" 
          textEn="name"
          textAr="arabicName"
        />
      </div>
      <div  class="col-sm-12 col-md-6 col-lg-6 mb-5">
        <ElementsFormVSelect 
          dir="auto"
          border_color="000"  
          color="000" 
          name="princedomId" 
          id="princedomId" 
          type="select"
          :label="t('princedom')"
          :placeholder="t('princedom')"
          :items="princedoms" 
          textEn="nameAr"
          textAr="nameEn"
          :disabled="!showPrincedoms"
        />
      </div>

      <div
        class="col-md-12 d-flex mb-2 mt-5 form-group justify-content-center"
        :style="!isEn() ? 'direction: rtl;' : 'direction: ltr;'"
      >
        <!-- <button
          type="submit"
          value="Login"
          class="btn btn-main"
          :class="{ 'btn-success': formMeta.valid }"
          :disabled="!formMeta.valid || isLoading"
        >
          <span v-if="!isLoading">{{ t("sign-up") }}</span>
          <span v-else>{{ t("loading...") }}</span>
        </button> -->
        <button
          type="submit"
          value="Login"
          class="btn btn-main btn-block mx-2"
          :class="{ 'btn-success': formMeta.valid }"
          :disabled="!formMeta.valid || isLoading"
        >
          <span v-if="!isLoading">{{ t("save") }}</span>
          <span v-else>{{ t("loading...") }}</span>
        </button>
        <div class="btn btn-main btn-block mx-2" 
          @click="emit('cancel')"
        >
          <span >{{ t('cancel') }}</span>
        </div>
      </div>
    </div>
  </VForm>
</template>

<script setup>
import * as yup from "yup";
import { configure } from "vee-validate";
// import * as rules from "@vee-validate/rules";

const emit = defineEmits(["toggle", "cancel"]);

// console.log(countries)
const { $awn } = useNuxtApp();
const { public: {api, apiBase} } = useRuntimeConfig();
const isLoading = ref(false);
const hasError = ref(false);
const errorMessage = ref("");


const countries = ref([])
const princedoms = ref([])
const showPrincedoms = ref(useUserInfo().value.nationId==1)
const { data:countriesData } = await useGetSiteApi().GetAll(api.NationsApi)
const { data:princedomsData } = await useGetSiteApi().GetAll(api.princedomsApi)
watchEffect(()=> {
  if(countriesData.value && princedomsData.value) {
    countries.value= countriesData.value.data
    princedoms.value = princedomsData.value.data
    // console.log(useUserInfo().value.nation.nameEn);
    showPrincedoms.value = useUserInfo().value.nation.nameEn.toLowerCase()=="syria"
  }
})

const inputUpdated = async (values) =>{
  if(values.target.name=='nationId'){
    const selectedCountryId = values.target._value
    const selectedCountry = countries.value.find(item=>item.id==selectedCountryId)
    // console.log(selectedCountry);
    showPrincedoms.value = selectedCountry.nameEn.toLowerCase()=="syria"
  }
}

// Handle Form Submit
const handleSubmit = async (values, actions) => {

  isLoading.value = true;

  let AddPersonValue = {
    id: useUserInfo().value.id,
    fullName: values.fullname,
    fullNameAr: values.fullname,
    fullNameEn: values.fullname,
    phone: values.phone,
    email: values.email,
    sex: values.sex ? useGender().value.find(el=>el.id==values.sex).nameEn : '',
    // fax: values.fax ?? null,
    // birthDate: values.birthDate ?? null,
    // address: values.address ?? null,
    // nationId: values.nationId ?? null,
    // princedomId: values.princedomId ?? null,
    userId: useUserId().value,
    status: "Accepted",
  };

  AddPersonValue = {...values, ...AddPersonValue}
  console.log(AddPersonValue)

  const { data, error, execute } = await useHttpForUserApi().post(
    api.PersonClientsApi,
    AddPersonValue
  );

  if (error.value && error.value.statusCode == 401) {
    await useReauthorization().reAuthorize();
    if (!data.value) execute();
  } else if (error.value && error.value.statusCode != 401) {
    isLoading.value = false;
    // console.log(error.value);
    $awn.alert(
      "Server Error, Please communicate with the administration to solve the problem",
      { durations: { global: 6000 } }
    );
  } else if (data.value) {
    if (data.value.hasErrors) {
      isLoading.value = false;
      hasError.value = true;
      errorMessage.value = data.value.validationErrors;
    } else {
      // hasError.value = false
      const { data: UserInfo } = await useGetSiteApi().GetAll(
        `${api.PersonClientsApi}/${data.value.data}`,
        0,0,0
      );
      // console.log(UserInfo)

      // await navigateTo('/my_account');
      $awn.success("Your Account has been successfully Updated", {
        durations: { global: 5000 },
      });
      isLoading.value = false;
      useUserInfo().value = UserInfo.value.data;
      localStorage.setItem("userInfo", JSON.stringify(UserInfo.value.data));
      emit("toggle");
      // return navigateTo('/my_account');
      // return navigateTo('/my_account');
    }
  }
  
};

configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});
// const regxPass = ref(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/);
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object({
  fullname: yup.string().required().min(3).label("Your Full Name").nullable(),
  email: yup.string().required().email().label("Email Address").nullable(),
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required().min(3).label("Your Phone Number").nullable(),
  nationId: yup.string().label("Your Country").nullable(),
  // licenseNumber: yup.string().nullable().min(3).label("Your license Number"),
  // licenseIssuarDate: yup.string().nullable().label("Your License Issuar Date"),
  // licenseEndData: yup.string().nullable().label("Your license End Date"),
  fax: yup.string().matches(phoneRegExp, 'Fax number is not valid').nullable().min(3).label("Fax"),
  sex: yup.string().nullable().label("Gender"),
  birthDate: yup.date().nullable().label("birthDate"),
  address: yup.string().nullable().min(3).label("Address"),
  princedomId: yup.string().nullable().label("Princedom"),
  // addressEn: yup.string().nullable().min(3).label("Your Address In English"),
  // website: yup.string().nullable().min(3).label("Your website"),
  // activityTypeName: yup.string().nullable().min(3).label("Your Activity Type Name"),
  // phone: yup.string().nullable().min(3).label("Your phone"),
  // officePhone: yup.number().nullable().label("Your office Phone"),
  // userName: yup.string().nullable().min(3).label("Your Username"),
  // password: yup.string().required().min(4).label("Your Password").nullable(),
  // password: yup.string()
  //   .required()
  //   .min(4)
  //   .test(
  //     "password-not-valid",
  //     "Password must contain at least one capital letter and lowercase letter",
  //     async (value) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value)
  //   )
  //   .label("Your Password"),
  // confirmPassword: yup.string()
  //   .required()
  //   .oneOf([yup.ref("password")], "Passwords do not match") // Cross-Field Validation

  //   .label("Your Confirmation Password")
  //   .nullable(),
});
const initialValues = {
  fullname: useUserInfo().value.fullName,
  email: useUserInfo().value.email,
  phone: useUserInfo().value.phone,
  fax: useUserInfo().value.fax,
  birthDate: useUserInfo().value.birthDate,
  sex: genderId(useUserInfo().value.sex),
  address: useUserInfo().value.address,
  nationId: useUserInfo().value.nationId,
  princedomId: useUserInfo().value.princedomId,
};

</script>

<style scoped lang="scss">
@import "~/assets/styles/scss/theme/theme";
.register_form {
  width: 100%;
  margin: 0;
  padding: 0;
  // margin: 20px auto;
  label {
    padding: 0;
    font-weight: bold;
    color: #000;
  }
}
</style>
