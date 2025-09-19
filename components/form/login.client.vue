<template>
  <Form
    id="messageForm"
    class="login_form"
    :validation-schema="schema"
    :initial-values="initialValues"
    v-slot="{ meta: formMeta }"
    @submit="handleSubmit"
    dir="auto"
  >
    <h2 class="metal-text mb-5" >
      {{ $t("login") }}
    </h2>
    <div class="form-fields">
      <div class="field">
        <!-- <label for="email">{{ $t('email') }}</label> -->
        <ElementsFormVTextInputNew
          border_color="000"
          color="000"
          type="email"
          name="email"
          id="email"
          :label="$t('email')"
          :placeholder="$t('email')"
          :astricts="true"
        />
      </div>
      <div class="field">
        <!-- <label for="password">{{ $t('password') }}</label> -->
        <ElementsFormVTextInputNew
          border_color="000"
          color="000"
          type="password"
          name="password"
          id="password"
          :label="$t('password')"
          :placeholder="$t('password')"
          :astricts="true"
        />
      </div>

    </div>
    <div class="pcc my-2">
      <button
        type="submit"
        value="Login"
        class="btn-main btn-block w-100"
        :class="{ 'btn-success': formMeta.valid }"
        :disabled="!formMeta.valid || isLoading"
      >
        <span v-if="!isLoading">{{ $t("login") }}</span>
        <span v-else>{{ $t("loading...") }}</span>
      </button>
      <!-- <div class="btn-main btn-block mx-2" @click="emit('cancel')">
        <span >{{ $t('cancel') }}</span>
      </div> -->
    </div>
    <div class="signup pcc flex-column">
      <p class="signup-text">
        {{ $t('sign-up-to-get-started') }}
      </p>
      <nuxt-link class="goto-signup" :to="localePath(`/account/signup`)">
        {{ $t('sign-up') }}
      </nuxt-link>
    </div>
    <div class="forget">
      {{ $t('forgot-your-password') }}
    </div>
    <div class="gr-circle1"></div>
    <div class="gr-circle3"></div>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from "yup";
import { configure } from "vee-validate";
// import * as rules from "@vee-validate/rules";

const emit = defineEmits(["cancel"]);

const i18n = useI18n()
const localePath = useLocalePath()
// console.log(countries)
// const { $awn } = useNuxtApp();
const { public: {api, apiBase} } = useRuntimeConfig();
const isLoading = ref(false);


// Handle Form Submit
const handleSubmit = async (values, actions) => {
  isLoading.value = true;
  const { data, error } = await useFetch(`${api.AuthLoginApi}`, {
    baseURL: apiBase,
    method: "POST",
    body: values,
  });
  // console.log('response :', data.value.succeeded, data.value);
  if (data.value.succeeded) {
    isLoading.value = false;
    hasError.value = false;
    
    useToken().value = data.value.data.token;
    useAccountType().value = data.value.data.type;
    useUserId().value = data.value.data.userId

    useAuth().value.isAuthenticated = true

    localStorage.setItem("token", data.value.data.token);
    localStorage.setItem("accountType", data.value.data.type);
    localStorage.setItem('UserId', data.value.data.userId) 

    const userInfoApi =
      data.value.data.type == "Company"
        ? api.CompanyClientsApi
        : api.PersonClientsApi; // Person
    const { data: infoData, error: infoError } = await useGetSiteApi().GetAll(
      `${userInfoApi}/${data.value.data.id}`
    );

    if (infoData.value.succeeded) {
      useUserInfo().value = infoData.value.data;
      localStorage.setItem("userInfo", JSON.stringify(infoData.value.data)); // storage the user info inside inside localstorage
      
      if(returnTo.value){
        return navigateTo(`/${returnTo.value}`)
      }else{
        return navigateTo(`/`)
        // return useRouter().back();
      }

      // actions.resetForm();
    } else {
      isLoading.value = false;
      localStorage.removeItem("token");
      useToken().value = null;
      useAuth().value.isAuthenticated = false
      $awn.alert("There is an error has been occur, please try again", {
        durations: { global: 5000 },
      });
    }
  } else {
    isLoading.value = false;
    hasError.value = true;
    errorMessage.value = data.value.messages;
    // remove valid class and set invalid to email input
    actions.evt.target[0].classList.remove("is-valid");
    actions.evt.target[0].classList.add("is-invalid");
    // remove valid class and set invalid to password input
    actions.evt.target[1].classList.remove("is-valid");
    actions.evt.target[1].classList.add("is-invalid");
  }
  if (error.value) {
    // console.log(error.value);
    isLoading.value = false;
    $awn.alert("There is an error has been occur, please try again", {
      durations: { global: 5000 },
    });
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
const schema = ref(null)
schema.value = yup.object({
  // userName: yup.string().required(i18n.t('fullNameRequired')).min(3,i18n.t('fullNameMinLength')).label("Full Name"),
  email: yup.string().required(i18n.t('thisFieldRequired')).email(i18n.t('thisFieldInvalid')).label("Email Address"),
  password: yup
  .string()
  .required(i18n.t('thisFieldRequired'))
  .min(8, i18n.t('passwordMinLength'))
  .label(i18n.t('password'))
  // mobile: yup.string().matches(phoneRegExp, i18n.t('thisFieldInvalid')).required(i18n.t('thisFieldRequired')).min(3).label("Your Phone Number"),
  // description: yup.string().required(i18n.t('thisFieldRequired')).min(3,i18n.t('fullNameMinLength')).label("Message"),
  // birthDate: yup.date().nullable().label("birthDate"),
});

// watch(selectedType, ()=>{
//   if(selectedType.value!=3){
//     schema.value = yup.object({
//       userName: yup.string().required(i18n.t('fullNameRequired')).min(3,i18n.t('fullNameMinLength')).label("Full Name"),
//       email: yup.string().required(i18n.t('thisFieldRequired')).email(i18n.t('thisFieldInvalid')).label("Email Address"),
//       mobile: yup.string().matches(phoneRegExp, i18n.t('thisFieldInvalid')).required(i18n.t('thisFieldRequired')).min(3).label("Your Phone Number"),
//       description: yup.string().required(i18n.t('thisFieldRequired')).min(3,i18n.t('fullNameMinLength')).label("Message"),
//       // birthDate: yup.date().nullable().label("birthDate"),
//     });
//   }else{
//     schema.value = yup.object({
//       userName: yup.string().required(i18n.t('fullNameRequired')).min(3,i18n.t('fullNameMinLength')).label("Full Name"),
//       email: yup.string().required(i18n.t('thisFieldRequired')).email(i18n.t('thisFieldInvalid')).label("Email Address"),
//       mobile: yup.string().matches(phoneRegExp, i18n.t('thisFieldInvalid')).required(i18n.t('thisFieldRequired')).min(3).label("Your Phone Number"),
//       description: yup.string().required(i18n.t('thisFieldRequired')).min(3,i18n.t('fullNameMinLength')).label("Message"),
//       appointmentDate: yup.date().required(i18n.t('thisFieldRequired')).label("date"),
//     });
//   }
// })

const initialValues = {
  // userName: "orwa",
  // fullname: useUserInfo().value.fullName,
  // email: useUserInfo().value.email,
  // phone: useUserInfo().value.phone,
  // fax: useUserInfo().value.fax,
  // birthDate: useUserInfo().value.birthDate,
  // sex: genderId(useUserInfo().value.sex),
  // address: useUserInfo().value.address,
  // nationId: useUserInfo().value.nationId,
  // princedomId: useUserInfo().value.princedomId,
};

</script>

<style scoped lang="scss">
@use"~/assets/styles/scss/theme/theme" as *;


.login_form {
  position: relative;
  width: 100%;
  height: 100% !important;
  margin: 0;
  padding: 2rem 1rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: rgba(255, 255, 255, 0.05);
  border: solid 1px rgba(255, 255, 255, 0.3);
  border-radius: .5rem;
  
  
  .field{
    margin-bottom: 2rem;
    label{
      margin-bottom: 5px;
    }
  }

  .forget{
    padding: 1rem 1rem 0 1rem;
    font-weight: 200;
    font-size: 14px;
    text-align: center;
  }
  .signup{
    padding: 3rem 0;
    .signup-text{
      text-align: center;
      font-size: 14px;
      font-weight: 200;
    }
    .goto-signup{
      width: 15rem;
      padding: 5px 2rem;
      text-align: center;
      background-color: $primary;
      // border: solid 1px white;
      border-radius: .5rem;
      cursor: pointer;
      color: white;
    }
  }

}
</style>
