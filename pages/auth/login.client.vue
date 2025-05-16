<template>
  <div class="login-page pcc" dir="auto"> 
    <div class="img-frame cover">
      <img :src="`/header/01.jpg`" alt="header">
      <div class="window"></div>
      <div class="gradient"></div>
    </div>
    <div class="login-box">
      <Form
        id="loginForm"
        class="mx-lg-4"
        :validation-schema="schema"
        :initial-values="initialValues"
        @submit="handleSubmit"
        v-slot="{ meta: formMeta }"
      >
        <div class="row group pt-4">
          <label for="email" class="form-label mb-3"
            >{{ t("email") }} <span class="text-danger">*</span></label
          >
          <FieldVTextInput
            type="email"
            name="email"
            id="firstNameAr"
            autocomplete="off"
            :requirestar="true"
            astricts="true"
          ></FieldVTextInput>
        </div>
        <div class="row group mt-7">
          <label for="password" class="form-label mb-3"
            >{{ t("password") }} <span class="text-danger">*</span></label
          >
          <FieldVTextInput
            border_color="7e7e7e8d"
            type="password"
            name="password"
            background="#f8f9fa"
            class=""
            id="password"
            autocomplete="off"
            :requirestar="true"
            astricts="true"
            :activePasswordEye="true"
          ></FieldVTextInput>
        </div>
        <div class="group mt-7 d-flex justify-content-center">
          <button
            type="submit"
            :value="t('sign-in')"
            class="main-btn w-50 my-0"
            :class="{ '': formMeta.valid }"
            :disabled="!formMeta.valid || Loading"
          >
            <span class="" v-if="!Loading">
              {{ t("sign-in") }}
            </span>
            <span class="" v-else>{{ t("wait") }}</span>
          </button>
        </div>
      </Form>
      
      <!-- <v-text-field label="Email" variant="underlined"></v-text-field>
      <v-text-field label="Password" variant="underlined"></v-text-field>
      <p>Forget password?</p>
      <div class="pcb">
        <v-checkbox-btn
          label="stay logged in?"
          v-model="check1"
          class="ps-0 pe-2"
        ></v-checkbox-btn>
  
        <v-btn variant="outlined" @click="submit">
          Login
        </v-btn>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { Form } from 'vee-validate';
import { configure } from "vee-validate";
import { object, string, number, ref as yupRef } from "yup";

definePageMeta({
  middleware: ["not-auth"],
  // layout: 'home' 
});


const { public: { api, apiBase },} = useRuntimeConfig();
const { $awn } = useNuxtApp();
const Loading = ref(false);

const initialValues = {
  email: "",
  password: "",
};

const handleSubmit = async (values, actions) => {
  Loading.value = true;
  const { data: loginPost, error } = await useHttpForSiteApi().post(
    `${api.authLoginApi}`, values
  )
  if(error.value){
    Loading.value = false;
    // console.log(error.value.message);
    $awn.alert(t('login-failed'), {
      durations: { global: 5000 },
    });
    return
  }
  if(!loginPost.value.token){
    Loading.value = false;
    $awn.alert(t('login-failed'), {
      durations: { global: 5000 },
    });
    // $awn.alert(loginPost.value.message, {
    //   durations: { global: 5000 },
    // });
  }else{
    useToken().value = loginPost.value.token
    useUserInfo().value = loginPost.value.user
    useAuth().value.isAuth = true
    isAdmin().value = loginPost.value.user.isAdmin
    localStorage.setItem('token', useToken().value)
    localStorage.setItem('userInfo', JSON.stringify(useUserInfo().value) )
    localStorage.setItem('isAdmin', isAdmin().value)


    $awn.success(t('logged-in-successfully'), {
      durations: { global: 5000 },
    });
    Loading.value = false;
    if(isAdmin().value){
      return navigateTo("/dashboard");
    }else{
      return navigateTo("/");
    }
  }
};

configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: true,
});
const schema = object({
  email: string().required(t('required-field',1)).email(t('valid-email',1)).label(t('email')),
  password: string().required(t('required-field',1)).label(t("Password")),
});


</script>

<style lang="scss" scoped>
@use "~/assets/styles/scss/theme/theme";

.login-page{
  position: relative;
  height: 100vh;
  .img-frame{
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    .window{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      // transform: translate(-50%,-50%);
      backdrop-filter: blur(40px);
      // filter: brightness(.5);
      filter: brightness(.5) hue-rotate(150deg);
    }
    .gradient{
      position: absolute;
      width: 100%;
      height: 20%;
      bottom: 0;
      left: 0;

      background: linear-gradient(to top, $c1, rgba( $color: $c1, $alpha: 0));
    }
  }
  .login-box{
    padding: 2rem;
    border-radius: 7px;
    position: relative;
    z-index: 2;
    width: 40%;
    // height: 20rem;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(-40px);
    #loginForm{
      .group{
        label{
          color: white;
        }
      }
    }
  }
}
</style>