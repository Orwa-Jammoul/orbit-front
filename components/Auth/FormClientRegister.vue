<template>
  <VForm
    v-if="!isLoading"
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
      <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
        <!-- <label for="password" >{{t('password')}}</label> -->
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
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
        <!-- <label for="confirmpassword" >{{t('confirmpassword')}}</label> -->
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
      </div>
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
          :label="t('city')"
          :placeholder="t('city')"
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
        <button
          type="submit"
          value="Login"
          class="btn btn-main"
          :class="{ 'btn-success': formMeta.valid }"
          :disabled="!formMeta.valid || isUploading"
        >
          <span v-if="!isUploading">{{ t("sign-up") }}</span>
          <span v-else>{{ t("loading...") }}</span>
        </button>
      </div>
    </div>
  </VForm>
</template>

<script setup>
import * as yup from "yup";
import { configure } from "vee-validate";
// import * as rules from "@vee-validate/rules";

// console.log(countries)
const { $awn } = useNuxtApp();
const { public: {api, apiBase} } = useRuntimeConfig();

const isLoading = ref(true);
const isUploading = ref(false);
const hasError = ref(false);
const errorMessage = ref("");


const countries = ref([])
const princedoms = ref([])
const showPrincedoms = ref(false)
const { data:countriesData } = await useGetSiteApi().GetAll(api.NationsApi)
const { data:princedomsData } = await useGetSiteApi().GetAll(api.princedomsApi)

watchEffect(()=> {
  if(countriesData.value && princedomsData.value) {
    countries.value= countriesData.value.data
    princedoms.value = princedomsData.value.data
    isLoading.value = false
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
  // console.log('values', values);
  // return;
  isUploading.value = true;
  actions.evt.target[2].classList.add("is-valid");
  actions.evt.target[2].classList.remove("is-invalid");
  actions.evt.target[3].classList.add("is-valid");
  actions.evt.target[3].classList.remove("is-invalid");
  const RegisterEmailData = {
    firstName: values.fullname,
    lastName: values.fullname,
    email: values.email,
    userName: values.email,
    password: values.password,
    confirmPassword: values.confirmPassword,
    phoneNumber: values.phone,
    activateUser: true,
    autoConfirmEmail: true,
  };
  const { data, error } = await useFetch(api.RegisterNewEmail, {
    baseURL: apiBase,
    method: "POST",
    body: RegisterEmailData,
    headers: {
      Authorization: `Bearer ${useMainToken().value}`,
    },
  });
  //   console.log('register success ', data.value, error.value);

  if (data.value) {
    if (!data.value.succeeded) {
      isUploading.value = false;
      hasError.value = true;
      // console.log(data.value.messages)
      errorMessage.value = data.value.messages[0];
      data.value.messages.forEach((mes) => {
        if (mes.includes("Email")) {
          actions.evt.target[2].classList.remove("is-valid");
          actions.evt.target[2].classList.add("is-invalid");
        }
        if (mes.includes("Username")) {
          actions.evt.target[2].classList.remove("is-valid");
          actions.evt.target[2].classList.add("is-invalid");
          errorMessage.value = [];
          errorMessage.value.push("Email Has Already Taken");
        }
        if (mes.includes("Phone")) {
          actions.evt.target[3].classList.remove("is-valid");
          actions.evt.target[3].classList.add("is-invalid");
        }
      });
    } else {
      hasError.value = false; // hide error message box
      let AddPersonValue = {
        id:0,
        fullName: values.fullname,
        fullNameAr: values.fullname,
        fullNameEn: values.fullname,
        // phone: values.phone,
        // email: values.email,
        sex: values.sex ? useGender().value.find(el=>el.id==values.sex).nameEn : '',
        // fax: values.fax ?? null,
        // birthDate: values.birthDate ?? null,
        // address: values.address ?? null,
        // nationId: values.nationId ?? null,
        // princedomId: values.princedomId ?? null,
        userId: data.value.data,
        status: "Accepted",

        additionalInfo: null,
      };

      AddPersonValue = {...values, ...AddPersonValue}

      console.log(AddPersonValue)
      const { data: AddPersonData, error: AddPersonDataError } = await useFetch(
        `${api.PersonClientsApi}`,
        {
          baseURL: apiBase,
          method: "POST",
          body: AddPersonValue,
          headers: {
            Authorization: `Bearer ${useMainToken().value}`,
          },
        }
      );
      // console.log('AddPersonData',AddPersonData.value)
      if (AddPersonData.value) {
        const loginValue = { email: values.email, password: values.password };
        const { data: loginData, error: loginError } = await useFetch(
          `${api.AuthLoginApi}`,
          {
            baseURL: apiBase,
            method: "POST",
            body: loginValue,
          }
        );
        // console.log('aa',loginData.value)
        if (loginData.value.succeeded) {
          localStorage.setItem("UserId", data.value.data);
          useUserId().value = data.value.data;
          localStorage.setItem("token", loginData.value.data.token); // storage the token in localstorage
          useAuth().value.isAuthenticated = true
          useToken().value = loginData.value.data.token; // store token in the store
          localStorage.setItem("accountType", loginData.value.data.type); // storage the Account Type in localstorage
          useAccountType().value = loginData.value.data.type;
          // Get All User Info
          const { data: UserInfo } = await useGetSiteApi().GetById(
            `${api.PersonClientsApi}/`,
            loginData.value.data.id
          );
          $awn.success("welcome, you can now benefit from our services", {
            durations: { global: 5000 },
          });
          localStorage.setItem("userInfo", JSON.stringify(UserInfo.value.data));
          useUserInfo().value = UserInfo.value.data;
          return navigateTo("/");
        }
      }
    }
  }
  if (error.value) {
    isUploading.value = false;
    // console.log(error);
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
  password: yup.string().required().min(4).label("Your Password").nullable(),
  // password: yup.string()
  //   .required()
  //   .min(4)
  //   .test(
  //     "password-not-valid",
  //     "Password must contain at least one capital letter and lowercase letter",
  //     async (value) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value)
  //   )
  //   .label("Your Password"),
  confirmPassword: yup.string()
    .required()
    .oneOf([yup.ref("password")], "Passwords do not match") // Cross-Field Validation

    .label("Your Confirmation Password")
    .nullable(),
});
const initialValues = {
  fullname: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  fax: "",
  birthDate: "",
  sex: "",
  address: "",
  nationId: "",
  princedomId: 0,
};

</script>

<style scoped lang="scss">
@use"~/assets/styles/scss/theme/theme" as *;
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
