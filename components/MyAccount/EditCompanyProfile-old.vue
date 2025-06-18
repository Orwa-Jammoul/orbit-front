<template>
  <main class="main-black-background">
    <section class="col-lg-10 login_box_area mx-auto">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-11 col-lg-10 col-xl-9 mx-auto">
            <div class="login_form_inner">
              <h3 class="fs-3 mb-3">{{ t("editeprofile") }}</h3>
              <VForm
                id="EditCompanyForm"
                class="row register_form px-3"
                :validation-schema="schema"
                :initial-values="initialValues"
                v-slot="{ meta: formMeta }"
                @submit="handleSubmit"
              >
                <div v-if="hasError" class="error-messages mb-3">
                  <div class="alert alert-danger text-center">
                    <ul class="list-unstyled mb-0">
                      <li v-for="(error, index) in errorMessage" :key="index">
                        <p
                          class="mb-1"
                          v-for="(msg, j) in error.errors"
                          :key="`error_${j}`"
                        >
                          {{ error.field + " " + msg }}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- <div class="row"> -->
                <!-- <div class="col-sm-6">
                  <ElementsFormVTextInput
                    border_color="0e6b8a"
                    color="0e6b8a"
                    type="text"
                    name="nameAr"
                    id="nameAr"
                    :label="t('Company-Arabic-Name',1)"
                    :placeholder="t('Company-Arabic-Name',1)"
                    astricts="true"
                  />
                </div> -->
                <div class="col-sm-12">
                  <ElementsFormVTextInput
                    border_color="0e6b8a"
                    color="0e6b8a"
                    type="text"
                    name="nameEn"
                    id="nameEn"
                    :label="t('Company-Name',1)"
                    :placeholder="t('Company-Name',1)"
                    astricts="true"
                  />
                </div>
                <div class="col-sm-6">
                  <ElementsFormVTextInput
                    border_color="0e6b8a"
                    color="0e6b8a"
                    type="email"
                    name="email"
                    id="email"
                    :label="t('email',1)"
                    :placeholder="t('email',1)"
                    astricts="true"
                  />
                </div>
                <div class="col-sm-6">
                  <ElementsFormVTextInput
                    border_color="0e6b8a"
                    color="0e6b8a"
                    type="number"
                    name="phone"
                    id="phone"
                    :label="t('phone',1)"
                    :placeholder="t('phone',1)"
                    astricts="true"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <ElementsFormVTextInput
                    border_color="0e6b8a"
                    color="0e6b8a"
                    type="text"
                    name="responsiblePersonNameAr"
                    id="responsiblePersonNameAr"
                    :label="t('Arabic-Responsible-Person-Name',1)"
                    :placeholder="t('Arabic-Responsible-Person-Name',1)"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <ElementsFormVTextInput
                    border_color="0e6b8a"
                    color="0e6b8a"
                    type="text"
                    name="responsiblePersonNameEn"
                    id="responsiblePersonNameEn"
                    :label="t('English-Responsible-Person-Name',1)"
                    :placeholder="t('English-Responsible-Person-Name',1)"
                  />
                </div>
                <div class="col-sm-6">
                  <ElementsFormVTextInput
                    border_color="0e6b8a"
                    color="0e6b8a"
                    type="number"
                    name="responsiblePersonMobile"
                    id="responsiblePersonMobile"
                    :label="t('Responsible Person Mobile',1)"
                    :placeholder="t('Responsible Person Mobile',1)"
                  />
                </div>
                <!-- <div class="col-sm-6">
                    <ElementsFormVTextInput type="number" name="licenseNumber" id="licenseNumber" label="License Number" placeholder="License Number" />
                  </div>
                  <div class="col-12 col-sm-6">
                    <ElementsFormVTextInput type="date" name="licenseIssuarDate" format="yyyy-MM-dd" id="licenseIssuarDate" label="License Issuar Date" placeholder="License Issuar Date" />
                  </div>                  
                  <div class="col-12 col-sm-6">
                    <ElementsFormVTextInput type="date" name="licenseEndData" format="yyyy-MM-dd" id="licenseEndData" label="License End Date" placeholder="License End Date" />
                  </div> -->
                <!-- <div class="col-6">
                    <ElementsFormVSelect border_color="0e6b8a"
            color="0e6b8a" name="countryId" id="countryId" :items="countries" :placeholder="$t('select-countries')" @itemName="getItemName" />
                  </div> -->
                <div class="col-6">
                  <ElementsFormVSelect
                    dir="auto"
                    border_color="000"
                    color="B62F83"
                    name="countryId"
                    id="countryId"
                    type="select"
                    :label="t('select-countries')"
                    :placeholder="t('select-countries')"
                    :items="countries"
                    textEn="nameEn"
                    textAr="nameAr"
                  />
                </div>
                <!-- <div class="col-12 col-sm-6">
                  <ElementsFormVTextInput
                    border_color="0e6b8a"
                    color="0e6b8a"
                    type="text"
                    name="addressAr"
                    id="addressAr"
                    :label="t('arabicAddress')"
                    :placeholder="t('arabicAddress')"
                  />
                </div> -->
                <div class="col-12 col-sm-6">
                  <ElementsFormVTextInput
                    border_color="0e6b8a"
                    color="0e6b8a"
                    type="text"
                    name="address"
                    id="address"
                    :label="t('address')"
                    :placeholder="t('address')"
                  />
                </div>
                <!-- <div class="col-12 col-sm-6">
                    <ElementsFormVSelect name="nationalityId" id="nationalityId" :items="nationalities" :placeholder="$t('select-nationality')" />
                  </div> -->
                <!-- </div> -->

                <div class="col-md-12 form-group mt-4">
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
              </VForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { object, string, ref as yupRef } from "yup";
import { configure } from "vee-validate";
const { countries } = defineProps(["countries"]);
const emit = defineEmits(["toggle", "save", "cancel"]);
// console.log('nationalities', nationalities);
const { $awn } = useNuxtApp();
const { public: {api, apiBase} } = useRuntimeConfig();
const userInfo = useUserInfo().value;
// console.log(userInfo);
const isLoading = ref(false);
const hasError = ref(false);
const errorMessage = ref("");
const itemName = ref([]);
// const licenseIssuarDateMonth = ref((new Date(userInfo.licenseIssuarDate).getMonth() + 1) < 10 ? `0${(new Date(userInfo.licenseIssuarDate).getMonth() + 1)}` : (new Date(userInfo.licenseIssuarDate).getMonth() + 1));
// const licenseEndDataMonth = ref((new Date(userInfo.licenseEndData).getMonth() + 1) < 10 ? `0${(new Date(userInfo.licenseEndData).getMonth() + 1)}` : (new Date(userInfo.licenseEndData).getMonth() + 1));

// Handle Form Submit
const handleSubmit = async (values, actions) => {
  values.id = userInfo.id;
  values.clientId = userInfo.clientId;
  isLoading.value = true;
  // console.log("values : ", values);
  const { data, error, execute } = await useHttpForUserApi().post(
    api.CompanyClientsApi,
    values
  );
  // console.log("data update", data);
  // return;
  if (data.value) {
    if (data.value.hasErrors) {
      isLoading.value = false;
      hasError.value = true;
      errorMessage.value = data.value.validationErrors;
    } else {
      // console.log('yes');
      const { data: UserInfo } = await useGetSiteApi().GetById(
        `${api.CompanyClientsApi}/`,
        data.value.data 
      );
      // // console.log('UserInfo: ',UserInfo.value)
     
      // await navigateTo('/my_account');
      $awn.success("Your Account has been successfully Updated", {
        durations: { global: 5000 },
      });
      isLoading.value = false;
      // console.log(UserInfo.value);
      emit("save", UserInfo.value.data);
      emit("toggle");
    }
  }
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
  }
};



configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});
const schema = object({
  // nameAr: string().required().min(3).label("Your English Name"),
  nameEn: string().required().min(3).label("Your English Name"),
  phone: string().required().min(3).label("Your Phone Number"),
  email: string().required().email().label("Email Address"),
});
const initialValues = {
  nameAr: userInfo.nameEn,
  nameEn: userInfo.nameEn,
  email: userInfo.email,
  responsiblePersonNameAr: userInfo.responsiblePersonNameAr,
  responsiblePersonNameEn: userInfo.responsiblePersonNameEn,
  responsiblePersonMobile: userInfo.responsiblePersonMobile,
  // activityTypeNameAr: userInfo.activityTypeNameAr,
  // activityTypeNameEn: userInfo.activityTypeNameEn,
  // licenseNumber: userInfo.licenseNumber,
  // licenseIssuarDate: new Date(userInfo.licenseIssuarDate).getFullYear() + '-' + licenseIssuarDateMonth.value + '-' + new Date(userInfo.licenseIssuarDate).getDate(),
  // licenseEndData: new Date(userInfo.licenseEndData).getFullYear() + '-' + licenseEndDataMonth.value + '-' + new Date(userInfo.licenseEndData).getDate(),
  address: userInfo.address,
  // addressEn: userInfo.addressEn,
  phone: userInfo.phone,
  // fax: userInfo.fax,
  // website: userInfo.website,
  // legalForm: userInfo.legalForm,
  countryId: userInfo.countryId,
  // nationalityId: userInfo.nationalityId,
};

const getItemName = (event) => {
  itemName.value = event;
};
</script>

<style lang="scss">
@use"~/assets/styles/scss/theme/theme" as *;

.login_box_area {
  // padding: 100px 0;
  @include sm-mobile {
    padding: 50px 0;
  }
  .login_box_img {
    margin-right: -30px;
    position: relative;
    img {
      width: 100%;
    }
    &:before {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      content: "";
      background: #000;
      opacity: 0.5;
    }
    .hover {
      position: absolute;
      top: 50%;
      left: 0px;
      text-align: center;
      width: 100%;
      transform: translateY(-50%);
      h4 {
        font-size: 24px;
        color: $blue;
        margin-bottom: 15px;
      }
      p {
        max-width: 380px;
        margin: 0px auto 25px;
        color: $blue;
      }
      .primary-btn {
        border-radius: 0px;
        line-height: 38px;
        text-transform: uppercase;
        &:hover:before {
          left: 260px;
        }
      }
    }
  }
  .login_form_inner {
    // box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.07);
    box-shadow: 0px 10px 30px 0px rgb(250 250 250 / 7%);
    height: 100%;
    text-align: center;
    // padding-top: 115px;
    padding-bottom: 100px;
    background-color: #fff;

    @include tablet {
      padding-top: 80px;
      padding-bottom: 65px;
    }
    @include sm-mobile {
      padding-top: 50px;
      padding-bottom: 50px;
    }
    h3 {
      color: $primary1;
      text-transform: uppercase;
      font-size: 18px;
      margin-bottom: 30px;
    }
    .register_form {
      margin: auto;
      a {
        font-size: 14px;
        color: #777777;
        font-family: "Roboto", sans-serif;
        margin-top: 20px;
        display: block;
      }
      .form-check-input:checked {
        background-color: $DarkBlue;
        border-color: $DarkBlue;
      }
      .btn-main{
        padding-left: 0;
        padding-right: 0;
        width: 40%;
      }
    }
  }

  .btn-custom {
    &:hover:before {
      left: 700px;
      opacity: 0.3;
    }
  }
}
</style>
