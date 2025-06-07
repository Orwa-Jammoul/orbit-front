<template>
  <section class="change-password container mb-12 ">
    <!-- <h5 class=" p-3 mb-4 mb-sm-5">Type Your New Password To Change Your Current One : </h5> -->
    <div class="login_form_inner ">
      <VForm
        id="loginForm"
        class="row login_form "
        :validation-schema="schema"
        :initial-values="initialValues"
        v-slot="{ meta: formMeta }"
        @submit="handleSubmit" >
        <div v-if="hasError" class="error-messages mb-3">
          <div class="alert alert-danger text-center">
            <ul class="list-unstyled mb-0">
              <li v-for="(error, index) in errorMessage" :key="index">
                <p class="mb-1" v-for="(msg, j) in error.errors" :key="`error_${j}`">{{ (error.field ? error.field : '') + ' ' + msg }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-12">
          <ElementsFormVTextInput border_color="0e6b8a"
            color="0e6b8a" type="password" name="password" id="currentPassword" :label="t('Current-Password')" :placeholder="t('Current-Password')" autocomplete="false" :activePasswordEye="true"/>
        </div>
        <div class="col-12 col-md-12">
          <ElementsFormVTextInput border_color="0e6b8a"
            color="0e6b8a" type="password" name="newPassword" id="password" :label="t('New-Password')" :placeholder="t('New-Password')" autocomplete="false" :activePasswordEye="true"/>
        </div>
        <div class="col-12 col-md-12">
          <ElementsFormVTextInput border_color="0e6b8a"
            color="0e6b8a" type="password" name="confirmNewPassword" id="confirmPassword" :label="t('confirmpassword')" :placeholder="t('confirmpassword')" autocomplete="false" :activePasswordEye="true"/>
        </div>
        <div class="col-md-12 form-group mt-4">
          <button type="submit" value="Login" class=" d-flex btn-main mx-auto" 
          :class="{ 'btn-primary': formMeta.valid }" 
          :disabled="!formMeta.valid || isLoading">
            <span v-if="!isLoading">{{t('Change-Password')}}</span>
            <span v-else>{{ t('loading...') }}</span>
          </button>
        </div>
      </VForm>
    </div>
  </section>  
</template>

<script setup>
  import { object, string, ref as yupRef } from "yup";
  import { configure } from "vee-validate";  
  const { $awn } = useNuxtApp()
  

  const { public: {api, apiBase} } = useRuntimeConfig()
  const isLoading = ref(false);
  const hasError = ref(false);
  const errorMessage = ref('');

  // Handle Form Submit
  const handleSubmit = async (values, actions) => {
    isLoading.value = true;
    const { data, error, execute } = await useHttpForUserApi().put(api.ChangePassword, values);
    // console.log('response : ', data.value)
    if (data.value) {
      if (data.value.hasErrors) {
        isLoading.value = false
        hasError.value = true
        errorMessage.value = data.value.validationErrors        
      } else {
        isLoading.value = false
        hasError.value = false
        actions.resetForm();
        $awn.success(isEn()?'Your password has been successfully changed':'لقد تم تغيير كلمة المرور الخاصة بك بنجاح', { durations: { global: 5000 } })
      }
    }
    if (error.value && error.value.statusCode == 401) {
      await useReauthorization().reAuthorize()
      if (!data.value) execute()
    } else if (error.value && error.value.statusCode != 401) {
      isLoading.value = false
      // console.log(error.value);
      $awn.alert(t('server-error'), { durations: { global: 6000 } })
    }
  };
  configure({
    validateOnBlur: true,         // controls if `blur` events should trigger validation with `handleChange` handler
    validateOnChange: true,       // controls if `change` events should trigger validation with `handleChange` handler
    validateOnInput: false,       // controls if `input` events should trigger validation with `handleChange` handler
    validateOnModelUpdate: true,  // controls if `update:modelValue` events should trigger validation with `handleChange` handler
  });
  const schema = object({
    password: string().required().min(6).label("Your Current Password"),
    newPassword: string().required().min(6).label("Your Password"),
    confirmNewPassword: string()
      .required()
      .oneOf([yupRef("newPassword")], "Passwords do not match") //Cross-Field Validation
      .label("Your Confirmation Password"),
  });
  const initialValues = {
    password: "", 
    newPassword: "", 
    confirmNewPassword: "" 
   };
</script>

<style lang="scss">
  @import "~/assets/styles/scss/theme/theme";
  .change-password {
    padding: 0 15rem;
    h5 {
      color: #000;
      @include sm-mobile {
        font-size: 1rem;
      }
    }

    @media (max-width: 1200px) {
      padding: 0 6rem;
    }
    @media (max-width: 991px) {
      padding: 0 3rem;
    }
    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }
  .change-password label { color: rgb(105, 105, 105) !important; }
  .change-password .form-floating  label { color: rgb(105, 105, 105) !important; }
  .change-password .form-control {
      height: 54px;
      border: none;
      border-bottom: 1px solid rgb(105, 105, 105);
      border-radius: 0px;
      outline: none;
      box-shadow: none; 
      background-color: transparent;
      color: rgb(105, 105, 105);
    }
</style>