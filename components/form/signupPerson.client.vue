<template>
  <Form
    v-if="!isLoadingData"
    id="signupPersonForm"
    class="signup-person-form"
    :validation-schema="schema"
    :initial-values="initialValues"
    v-slot="{ meta: formMeta, resetForm }"
    @submit="handleSubmit"
    dir="auto"
  >
    <h2 class="metal-text mb-5" >
      {{ $t("sign-up") }}
    </h2>
    <div class="form-types">
      <div class="form-type-item pcc" :class="{'active':selectedType==0}" @click="selectedType=0">{{$t("person")}}</div>
      <div class="form-type-item pcc" :class="{'active':selectedType==1}" @click="selectedType=1">{{$t("company")}}</div>
    </div>

    <div class="form-fields">
      <div class="field">
        <ElementsFormVSelectNew
          dir="auto"
          name="classification" 
          id="classification" 
          :label="$t('classification')"
          :placeholder="$t('classification')"
          :items="classifications" 
          nameEn="nameEn"
          nameAr="nameAr"
          nameGe="nameEn"
        />
      </div>
      <div class="multi-col">
        
        <div class="field">
          <ElementsFormVTextInputNew
          border_color="000"
          color="000"
          type="text"
          name="firstName"
          id="firstName"
          :label="$t('firstName')"
          :placeholder="$t('firstName')"
          :astricts="true"
        />
        </div>
        <div class="field">
          <ElementsFormVTextInputNew
          border_color="000"
          color="000"
          type="text"
          name="fatherName"
          id="fatherName"
          :label="$t('fatherName')"
          :placeholder="$t('fatherName')"
          :astricts="true"
        />
        </div>
        <div class="field">
          <ElementsFormVTextInputNew
          border_color="000"
          color="000"
          type="text"
          name="lastName"
          id="lastName"
          :label="$t('lastName')"
          :placeholder="$t('lastName')"
          :astricts="true"
        />
        </div>
      
      
        <div class="field">
          <ElementsFormVTextInputNew
          border_color="000"
          color="000"
          type="text"
          name="firstNameAr"
          id="firstNameAr"
          :label="$t('firstName-ar')"
          :placeholder="$t('firstName-ar')"
          :astricts="false"
        />
        </div>
        <div class="field">
          <ElementsFormVTextInputNew
          border_color="000"
          color="000"
          type="text"
          name="fatherNameAr"
          id="fatherNameAr"
          :label="$t('fatherName-ar')"
          :placeholder="$t('fatherName-ar')"
          :astricts="false"
        />
        </div>
        <div class="field">
          <ElementsFormVTextInputNew
          border_color="000"
          color="000"
          type="text"
          name="lastNameAr"
          id="lastNameAr"
          :label="$t('lastName-ar')"
          :placeholder="$t('lastName-ar')"
          :astricts="false"
        />
        </div>
        
      </div>
      <!-- <div class="multi-col">
      </div> -->

      <div class="field">
        <ElementsFormVTextInputNew
          border_color="000"
          color="000"
          type="text"
          name="mobile1"
          id="mobile1"
          :label="$t('mobile')"
          :placeholder="$t('mobile')"
          :astricts="true"
        />
      </div>
      <div class="field">
        <ElementsFormVTextInputNew
          border_color="000"
          color="000"
          type="text"
          name="phone"
          id="phone"
          :label="$t('phone')"
          :placeholder="$t('phone')"
          :astricts="false"
        />
      </div>
      
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
      <div class="multi-col">
        <div class="field">
          <ElementsFormVTextInputNew
            type="date"
            name="birthDate"
            id="birthDate"
            :label="$t('birthDate')"
            :placeholder="$t('birthDate')"
            :astricts="true"
          />
        </div>

        <div class="field">
          <ElementsFormVSelectNew
            dir="auto"
            name="sex" 
            id="sex" 
            :label="$t('gender')"
            :placeholder="$t('gender')"
            :items="genderTypes" 
            nameEn="nameEn"
            nameAr="nameAr"
            nameGe="nameGe"
          />
        </div>
      </div>
      <div class="field">
        <ElementsFormVSelectNew
          dir="auto"
          border_color="000"  
          color="000" 
          name="countryId" 
          id="countryId" 
          :label="$t('selectCountry')"
          :placeholder="$t('selectCountry')"
          :items="countries" 
          nameEn="nameEn"
          nameAr="nameAr"
          nameGe="nameEn"
        />
      </div>
      <div class="field">
        <ElementsFormVTextInputNew
        border_color="000"
        color="000"
        type="text"
        name="Address"
        id="Address"
        :label="$t('Address')"
        :placeholder="$t('Address')"
        :astricts="true"
      />
      </div>
      <div class="multi-col">
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
        <div class="field">
          <!-- <label for="password">{{ $t('password') }}</label> -->
          <ElementsFormVTextInputNew
            border_color="000"
            color="000"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            :label="$t('confirmed-password')"
            :placeholder="$t('confirmed-password')"
            :astricts="true"
          />
        </div>
      </div>
      
       <!-- v-if="countries && countries.length>0" -->
      
      
      
      <div class="field">
        <ElementsFormVTextInputNew
        border_color="000"
        color="000"
        type="text"
        name="qualification"
        id="qualification"
        :label="$t('qualification')"
        :placeholder="$t('qualification')"
        :astricts="false"
      />
      </div>
      <div class="field">
        <ElementsFormVTextInputNew
        border_color="000"
        color="000"
        type="text"
        name="job"
        id="job"
        :label="$t('profession')"
        :placeholder="$t('profession')"
        :astricts="false"
      />
      </div>
      

    </div>
    <div class="pcc flex-column my-2">
      <button
        type="submit"
        value="signup"
        class="btn-main btn-block mb-2 mt-5 w-100"
        :class="{ 'btn-success': formMeta.valid }"
        :disabled="!formMeta.valid || isLoading"
      >
        <span v-if="!isLoading">{{ $t("sign-up") }}</span>
        <span v-else>{{ $t("loading...") }}</span>
      </button>
      <button type="reset" class="btn-main-outline mx-2 w-100" @click="handleReset(resetForm)">
        <span >{{ $t('reset') }}</span>
      </button>
    </div>
    <div class="signup pcc flex-column">
      <p class="signup-text">
        {{ $t('already-have-account') }}
      </p>
      <nuxt-link class="btn-main-outline" :to="localePath(`/account/login`)">
        {{ $t('login') }}
      </nuxt-link>
    </div>
    <!-- <div class="forget">
      {{ $t('forgot-your-password') }}
    </div> -->
    <div class="gr-circle1"></div>
    <div class="gr-circle3"></div>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from "yup";
import { configure } from "vee-validate";
import notifications from '~/plugins/notifications';
// import * as rules from "@vee-validate/rules";

// const emit = defineEmits(["cancel"]);

const { public: {api, apiBase} } = useRuntimeConfig();
const i18n = useI18n()
const localePath = useLocalePath()
// console.log(countries)
const notify = useNotify()

const isLoading = ref(false);
const isLoadingData = ref(true);

const genderTypes = [
  {
    id: 1 ,
    nameAr: 'ذكر',
    nameEn: 'Male',
    value: "Male"
  },
  {
    id: 2 ,
    nameAr: 'انثى',
    nameEn: 'Female',
    value: "Female"
  },
]

const selectedType = ref(0)

const countries = ref(null);
const classifications = ref(null);
// ClientsClassificationsApi

const { data: countriesData } = await useGetSiteApi().GetAll(
  `${api.CountriesGetAllApi}`
);
const { data: classificationsData } = await useGetSiteApi().GetAll(
  `${api.ClientsClassificationsApi}`
);
watchEffect(()=>{
  if(countriesData.value && classificationsData.value){
    countries.value = countriesData.value.data;
    classifications.value = classificationsData.value.data;
    isLoadingData.value = false
  }
})

// console.log("token", useToken().value);

// Handle Form Submit
const handleSubmit = async (values, actions) => {
  isLoading.value = true;

  const RegisterUserData = {
    id: null,
    firstName: values.firstName,
    lastName: values.lastName,
    fullName: values.firstName + ' ' + values.lastName,
    email: values.email,
    userName: values.firstName + '-' + values.lastName,
    password: values.password,
    confirmPassword: values.confirmPassword,
    phoneNumber: values.mobile1,
    homePhoneNumber: values.phone,
    address: values.Address,
    clientType: "Basic",
    isActive: true,
    autoConfirmEmail: true,
  };

  console.log(RegisterUserData);
  console.log(values);
  try {    
    const { data:userData, error:userError } = await useFetch(`${api.RegisterNewEmail}`, {
      baseURL: apiBase,
      method: "POST",
      body: RegisterUserData,
    });
  
    if (userError.value && (userError.value.statusCode === 401 || userError.value.statusCode === 403)) {
      console.error(userError.value);
      throw new Error('Not authorized!');
    }

    console.log('response :', userData.value.succeeded, userData.value);

    if (userData.value.succeeded) {
      const RegisterClientData = {
        id: 0,
        countryId: values.countryId.id,
        cityId: 0,
        sex: values.sex.value,
        persomImageUrl: null,
        persomImageUploadRequest: null,
        cvFileUrl: "",
        cvFileUploadRequest: null,
        phone: values.phone,
        fullName: values.firstNameAr,
        fullNameEn: values.firstName,
        fatherName: values.fatherNameAr,
        fatherNameEn: values.fatherName,
        nickName: values.lastNameAr,
        nickNameEn: values.lastName,
        mobile1: values.mobile1,
        mobile2: values.mobile2,
        qualification: values.qualification,
        job: values.job,
        classificationId: values.classification.id,
        fax: values.fax ?? null,
        mailBox: values.mailBox ?? null,
        email: values.email,
        address: values.Address,
        birthDate: values.birthDate,
        additionalInfo: values.additionalInfo,
        userId: userData.value.id,
        status: "Pending", //Accepted
      };

      const { data:clientData, error:clientError } = await useHttpForUserApi().post(
        `${api.PersonClientsApi}`, RegisterClientData
      );
      // const { data:clientData, error:clientError } = await useFetch(`${api.PersonClientsApi}`, {
      //   baseURL: apiBase,
      //   method: "POST",
      //   body: RegisterClientData,
      // });
      
      if (clientError.value) {
        console.error(clientError.value);
        throw new Error('Client registering error!');
      }

      if (clientData.value.succeeded) {
        console.log(clientData.value);
        useUserInfo().value = clientData.value.data;
        localStorage.setItem("userInfo", JSON.stringify(clientData.value.data)); // storage the user info inside inside localstorage
        
        actions.resetForm();
        return navigateTo(useLocalePath(`/account/login`))

      } else {
        throw new Error('There is an error has been occur, please try again');
      }
    }

  } catch (error) {
    localStorage.removeItem("token");
    useToken().value = null;
    useAuth().value.isAuthenticated = false
    
    console.log(`Register new user error: ${error}`);
  }

  isLoading.value = false;

  // console.log('response :', data.value.succeeded, data.value);
  // if (data.value.succeeded) {
  //   isLoading.value = false;
  //   hasError.value = false;
    
  //   useToken().value = data.value.data.token;
  //   useAccountType().value = data.value.data.type;
  //   useUserId().value = data.value.data.userId

  //   useAuth().value.isAuthenticated = true

  //   localStorage.setItem("token", data.value.data.token);
  //   localStorage.setItem("accountType", data.value.data.type);
  //   localStorage.setItem('UserId', data.value.data.userId) 

  //   const userInfoApi =
  //     data.value.data.type == "Company"
  //       ? api.CompanyClientsApi
  //       : api.PersonClientsApi; // Person
  //   const { data: clientData, error: infoError } = await useGetSiteApi().GetAll(
  //     `${userInfoApi}/${data.value.data.id}`
  //   );

  //   if (clientData.value.succeeded) {
  //     useUserInfo().value = clientData.value.data;
  //     localStorage.setItem("userInfo", JSON.stringify(clientData.value.data)); // storage the user info inside inside localstorage
      
  //     if(returnTo.value){
  //       return navigateTo(`/${returnTo.value}`)
  //     }else{
  //       return navigateTo(`/`)
  //       // return useRouter().back();
  //     }

  //     // actions.resetForm();
  //   } else {
  //     isLoading.value = false;
  //     localStorage.removeItem("token");
  //     useToken().value = null;
  //     useAuth().value.isAuthenticated = false
  //     $awn.alert("There is an error has been occur, please try again", {
  //       durations: { global: 5000 },
  //     });
  //   }
  // } else {
  //   isLoading.value = false;
  //   // hasError.value = true;
  //   // errorMessage.value = data.value.messages;
  //   // remove valid class and set invalid to email input
  //   actions.evt.target[0].classList.remove("is-valid");
  //   actions.evt.target[0].classList.add("is-invalid");
  //   // remove valid class and set invalid to password input
  //   actions.evt.target[1].classList.remove("is-valid");
  //   actions.evt.target[1].classList.add("is-invalid");
  // }
  // if (error.value) {
  //   // console.log(error.value);
  //   isLoading.value = false;
  //   // $awn.alert("There is an error has been occur, please try again", {
  //   //   durations: { global: 5000 },
  //   // });
  // }
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
  classification: yup.object()
    // .shape({
    //   id: yup.string().required(),
    // })
    .default(undefined) // 👈 
    .required(i18n.t('thisFieldRequired')).label("classification"),

  firstName: yup.string().required(i18n.t('thisFieldRequired')).min(2).label("firstName"),
  fatherName: yup.string().required(i18n.t('thisFieldRequired')).min(2).label("fatherName"),
  lastName: yup.string().required(i18n.t('thisFieldRequired')).min(2).label("lastName"),

  firstNameAr: yup.string().min(2).nullable().label(i18n.t("firstName-ar")),
  fatherNameAr: yup.string().min(2).nullable().label(i18n.t("fatherName-ar")),
  lastNameAr: yup.string().min(2).nullable().label(i18n.t("lastName-ar")),
  mobile1: yup.string().matches(phoneRegExp, i18n.t('thisFieldInvalid')).required(i18n.t('thisFieldRequired')).min(3).label("Your Phone Number"),
  phone: yup.string().matches(phoneRegExp, i18n.t('thisFieldInvalid')).required(i18n.t('thisFieldRequired')).min(3).label("Your Phone Number"),
  
  email: yup.string().required(i18n.t('thisFieldRequired')).email(i18n.t('thisFieldInvalid')).label("Email Address"),
  birthDate: yup.date().required(i18n.t('thisFieldRequired')).label("birthDate"),
  sex: yup.object()
    .default(undefined)
    .required(i18n.t('thisFieldRequired')).label("gender"),
  countryId: yup.object()
    .default(undefined)
    .required(i18n.t('thisFieldRequired')).label("country"),

  Address: yup.string().required(i18n.t('thisFieldRequired')).min(3).label("Address"),

  password: yup.string()
  .required(i18n.t('thisFieldRequired'))
  .min(8, i18n.t('passwordMinLength'))
  .label(i18n.t('password')),
  confirmPassword: yup.string()
    .required()
    .oneOf([yup.ref("password")], "Passwords do not match") // Cross-Field Validation

    .label("Your Confirmation Password")
    .nullable(),

  qualification: yup.string().nullable().min(3,i18n.t('thisFieldMinLength')).label("qualification"),
  job: yup.string().nullable().min(3,i18n.t('thisFieldMinLength')).label("qualification"),
});

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
  // nationId: countries.value[0],
  // princedomId: useUserInfo().value.princedomId,
};

const handleReset = (reset) => {
  reset()
  showNotify({
    title: "Success",
    message: "completed-successfully",
    type: "info",
    duration: 2000
  })
}

</script>

<style scoped lang="scss">
@use"~/assets/styles/scss/theme/theme" as *;


.signup-person-form {
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
  
  .metal-text{
    font-size: 1.5rem;
  }
  .form-types{
    width: 100%;
    height: 3rem;
    min-height: 3rem;
    // background-color: $primary;
    border: solid 1px rgba(255, 255, 255, 0.5);
    border-radius: 5px;

    margin-bottom: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .form-type-item{
      height: 100%;
      flex: 1;
      text-align: center;
      cursor: pointer;
      font-size: 12px;
      // border: solid 1px rgba(255, 0, 0, 0.5);
      transition: all 200ms ease-in-out;
      &.active{
        background: $lg1;
        // background-color: $primary;
      }
    }
  }
  .form-fields{
    .field{
      // margin-bottom: 2rem;
      label{
        margin-bottom: 5px;
      }
    }
    .multi-col{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1px;
      // .field{
      // }
    }
  }

  .forget{
    padding: 1rem 1rem 0 1rem;
    font-weight: 200;
    font-size: 14px;
    text-align: center;
  }
  .signup{
    padding: 3rem 0 0 0;
    .signup-text{
      text-align: center;
      font-size: 14px;
      font-weight: 200;
    }
    .goto-login{
      width: 15rem;
      padding: 5px 2rem;
      text-align: center;
      // background-color: $primary;
      border: solid 1px $primary;
      border-radius: .5rem;
      cursor: pointer;
      color: white;
      transition: all 200ms ease-in-out;
      &:hover{
        background-color: $primary;
      }
    }
  }

}
</style>
