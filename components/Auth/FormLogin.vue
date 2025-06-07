<template>
  <div class="main-login" dir="auto">
    <div class="row">
    <div class="col-12">
        <div class="title-frame pcc m-2 ">
          <h2 class=" title ">{{ t('login') }}</h2>
          <icon name="material-symbols:login" color="#000000" size="30px" />
        </div>
    </div>
      <div class="main col-lg-12 col-md-12 col-12">
        <VForm
          id="loginForm"
          class="row login_form"
          :validation-schema="schema"
          :initial-values="initialValues"
          v-slot="{ meta: formMeta }"
          @submit="handleSubmit"
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
          <!-- <label for="email" class="mb-3">{{t('email')}}</label> -->
          <ElementsFormVTextInput 
            border_color="000" 
            class="mb-5"
            color="000" 
            type="email" 
            name="email" 
            id="email" 
            :label="t('email',true)" 
            :placeholder="t('email',true)" 
          />
          <!-- <label for="password"  class="mb-3">{{t('password',true)}}</label> -->
          <ElementsFormVTextInput
          border_color="000"
            color="000"
            astricts="true"
            type="password"
            name="password"
            id="password"
            :label="t('password')"
            :placeholder="t('password')"
            autocomplete="false"
            :activePasswordEye="true"
          />
          <!-- <div class="px-5">
            <v-switch
              v-model="rememberMe"
              :label="`${t('Remember me')}`"
              color="#f55"
              hide-details
              @change="useRememberMe(rememberMe)"
            ></v-switch>
          </div> -->
          <NuxtLink to="/auth/forgot" class="text-center mt-2 title mb-3"
              >{{ t('Forget Your Password') }}
          </NuxtLink>
          <div class="col-md-12 pcc form-group">
            <button
              type="submit"
              value="Login"
              class="btn btn-main"
              
              :class="{ 'btn-success': formMeta.valid }"
              :disabled="!formMeta.valid || isLoading"
            >
              <span v-if="!isLoading">{{ t("login") }}</span>
              <span v-else>{{ t("loading...") }}</span>
            </button>
          </div>


          <div class="signup-links pcc">
            <p class="pt-4 px-1">
              {{ t('If you don’t have an account please',true) }}
            </p>
            <NuxtLink to="/auth/register" class="signup-link">
              {{t('sign-up')}}
            </NuxtLink>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script setup>
// definePageMeta({
//   middleware: ["not-authorize"],
// });

import { object, string, ref as yupRef } from "yup";
import { configure, validate } from "vee-validate";
import { regex } from "@vee-validate/rules";

const route = useRoute();
const returnTo = ref(route.query.r);
// console.log(returnTo.value);

// validate.extend('regex', {
//     ...regex,
//     message: 'Password needs to contain 1 lower case, 1 upper case etc',
// })
// import { defineRule } from "vee-validate";
const { $awn } = useNuxtApp();
// const cart = useCart();

const { public: {api, apiBase} } = useRuntimeConfig();
const isLoading = ref(false);
const hasError = ref(false);
const errorMessage = ref("");
// console.log('hello');

// const rememberMe = ref(useReMe().value)

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
const schema = object({
  email: string()
    .required()
    .email().nullable()
    .label("Email Address"),
  password: string()
    .required()
    .min(4).nullable()
    .label("Your Password"),
});
const initialValues = { email: "", password: "" };
</script>

<style scoped lang="scss">
@import "~/assets/styles/scss/theme/theme";
// .main-login{
//   background-color: $primary1;
// }
.row{
  // padding: 1rem;
  height: auto;
}
.main {
  border-radius: 1rem;
label{
  padding: 0;
  font-weight: bold;
}
a{
  color: #000;
  &:hover{
  color: $primary2;

  }
}
}

.title-frame{
  // padding-top: 2rem;
  .icon{
    margin-right: 1rem;
  }
  .title {
    color: $black;
    margin: 0;
    font-weight: bold;
  } 
}

.signup-link{
  text-decoration: underline !important;
}

</style>
