<template>
  <Form
    id="messageForm"
    class="message_form"
    :validation-schema="schema"
    :initial-values="initialValues"
    v-slot="{ meta: formMeta }"
    @submit="handleSubmit"
    dir="auto"
  >
    <div class="form-types">
      <div class="form-type-item pcc" :class="{'active':selectedType==0}" @click="selectedType=0">{{$t("Suggestion")}}</div>
      <div class="form-type-item pcc" :class="{'active':selectedType==1}" @click="selectedType=1">{{$t("Complaint")}}</div>
      <div class="form-type-item pcc" :class="{'active':selectedType==2}" @click="selectedType=2">{{$t("Inquiry")}}</div>
      <div class="form-type-item pcc" :class="{'active':selectedType==3}" @click="selectedType=3">{{$t("Appointment")}}</div>
    </div>
    <div class="form-fields">
      <ElementsFormVTextInputNew
        border_color="000"
        color="000"
        type="text"
        name="userName"
        id="userName"
        :label="$t('fullName')"
        :placeholder="$t('fullName')"
        :astricts="true"
      />
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
      <ElementsFormVTextInputNew
        border_color="000"
        color="000"
        type="text"
        name="mobile"
        id="mobile"
        :label="$t('phone')"
        :placeholder="$t('phone')"
        :astricts="true"
      />
      <ElementsFormVTextInputNew
        v-if="selectedType==3"
        border_color="000"
        color="000"
        type="datetime-local"
        name="appointmentDate"
        id="appointmentDate"
        :label="$t('date')"
        :placeholder="$t('date')"
        :astricts="true"
      />
      <ElementsFormVTextAreaNew
        border_color="000"
        color="000"
        type="text"
        name="description"
        id="description"
        :label="$t('message')"
        :placeholder="$t('message')"
        noResize
        :astricts="true"
      />
    </div>
    <!-- <ElementsFormVTextInput
      border_color="000"
      color="000"
      type="date"
      name="birthDate"
      id="birthDate"
      :label="$t('birthDate')"
      :placeholder="$t('birthDate')"
    /> -->
    <div class="pcc my-2">
      <button
        type="submit"
        value="Login"
        class="btn btn-main btn-block mx-2"
        :class="{ 'btn-success': formMeta.valid }"
        :disabled="!formMeta.valid || isLoading"
      >
        <span v-if="!isLoading">{{ $t("send") }}</span>
        <span v-else>{{ $t("loading...") }}</span>
      </button>
      <div class="btn btn-main btn-block mx-2" @click="emit('cancel')">
        <span >{{ $t('cancel') }}</span>
      </div>
    </div>
    
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from "yup";
import { configure } from "vee-validate";
// import * as rules from "@vee-validate/rules";

const emit = defineEmits(["cancel"]);

const i18n = useI18n()

// console.log(countries)
const { $awn } = useNuxtApp();
const { public: {api, apiBase} } = useRuntimeConfig();
const isLoading = ref(false);



const selectedType = ref(0)
// const showPrincedoms = ref(useUserInfo().value.nationId==1)
// const { data:countriesData } = await useGetSiteApi().GetAll(api.NationsApi)
// const { data:princedomsData } = await useGetSiteApi().GetAll(api.princedomsApi)
// watchEffect(()=> {
//   if(countriesData.value && princedomsData.value) {
//     countries.value= countriesData.value.data
//     princedoms.value = princedomsData.value.data
//     // console.log(useUserInfo().value.nation.nameEn);
//     showPrincedoms.value = useUserInfo().value.nation.nameEn.toLowerCase()=="syria"
//   }
// })

// const inputUpdated = async (values) =>{
//   if(values.target.name=='nationId'){
//     const selectedCountryId = values.target._value
//     const selectedCountry = countries.value.find(item=>item.id==selectedCountryId)
//     // console.log(selectedCountry);
//     showPrincedoms.value = selectedCountry.nameEn.toLowerCase()=="syria"
//   }
// }



// Handle Form Submit
const handleSubmit = async (values, actions) => {
  //Suggestion , Complaint, Inquiry, Appointment

  // {
  //   "id": 0,
  //   "clientId": null,
  //   "userName": "string",
  //   "email": "string",
  //   "description": "string",
  //   "reply": "string", // remove
  //   "mobile": "string",
  //   "type": 0
  // }
  isLoading.value = true;
  values.id = 0
  values.clientId= null
  // values.reply = null
  values.type = selectedType.value // 0,1,2,3
  // console.log(values);


  // let AddPersonValue = {
  //   id: useUserInfo().value.id,
  //   fullName: values.fullname,
  //   fullNameAr: values.fullname,
  //   fullNameEn: values.fullname,
  //   phone: values.phone,
  //   email: values.email,
  //   sex: values.sex ? useGender().value.find(el=>el.id==values.sex).nameEn : '',
  //   // fax: values.fax ?? null,
  //   // birthDate: values.birthDate ?? null,
  //   // address: values.address ?? null,
  //   // nationId: values.nationId ?? null,
  //   // princedomId: values.princedomId ?? null,
  //   userId: useUserId().value,
  //   status: "Accepted",
  // };

  // AddPersonValue = {...values, ...AddPersonValue}
  // console.log(AddPersonValue)

  const { data, error, execute } = await useHttpForSiteApi().post(
    api.MessagingApi,
    values
  );



  if (error.value && error.value.statusCode == 401) {
    await useReauthorization().reAuthorize();
    if (!data.value) execute();
  } else if (error.value && error.value.statusCode != 401) {
    isLoading.value = false;
    // console.log(error.value);
    $awn.alert(
      i18n.t("submitError"),
      { durations: { global: 6000 } }
    );
  } else if (data.value) {
    if (data.value.hasErrors) {
      isLoading.value = false;
      $awn.alert(
        data.value.validationErrors[0],
        { durations: { global: 6000 } }
      );
    } else {
      
      $awn.success(i18n.t("messageSentSuccess"), {
        durations: { global: 5000 },
      });
      isLoading.value = false;
      emit("cancel");
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
const schema = ref(null)
schema.value = yup.object({
  userName: yup.string().required(i18n.t('fullNameRequired')).min(3,i18n.t('fullNameMinLength')).label("Full Name"),
  email: yup.string().required(i18n.t('thisFieldRequired')).email(i18n.t('thisFieldInvalid')).label("Email Address"),
  mobile: yup.string().matches(phoneRegExp, i18n.t('thisFieldInvalid')).required(i18n.t('thisFieldRequired')).min(3).label("Your Phone Number"),
  description: yup.string().required(i18n.t('thisFieldRequired')).min(3,i18n.t('fullNameMinLength')).label("Message"),
  // birthDate: yup.date().nullable().label("birthDate"),
});

watch(selectedType, ()=>{
  if(selectedType.value!=3){
    schema.value = yup.object({
      userName: yup.string().required(i18n.t('fullNameRequired')).min(3,i18n.t('fullNameMinLength')).label("Full Name"),
      email: yup.string().required(i18n.t('thisFieldRequired')).email(i18n.t('thisFieldInvalid')).label("Email Address"),
      mobile: yup.string().matches(phoneRegExp, i18n.t('thisFieldInvalid')).required(i18n.t('thisFieldRequired')).min(3).label("Your Phone Number"),
      description: yup.string().required(i18n.t('thisFieldRequired')).min(3,i18n.t('fullNameMinLength')).label("Message"),
      // birthDate: yup.date().nullable().label("birthDate"),
    });
  }else{
    schema.value = yup.object({
      userName: yup.string().required(i18n.t('fullNameRequired')).min(3,i18n.t('fullNameMinLength')).label("Full Name"),
      email: yup.string().required(i18n.t('thisFieldRequired')).email(i18n.t('thisFieldInvalid')).label("Email Address"),
      mobile: yup.string().matches(phoneRegExp, i18n.t('thisFieldInvalid')).required(i18n.t('thisFieldRequired')).min(3).label("Your Phone Number"),
      description: yup.string().required(i18n.t('thisFieldRequired')).min(3,i18n.t('fullNameMinLength')).label("Message"),
      appointmentDate: yup.date().required(i18n.t('thisFieldRequired')).label("date"),
    });
  }
})

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
.message_form {
  position: relative;
  width: 100%;
  height: 100% !important;
  margin: 0;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  
  // .form-fields{

  // }
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
      // border: solid 1px rgba(255, 0, 0, 0.5);
      transition: all 200ms ease-in-out;
      &.active{
        background-color: $primary;
      }
    }
  }
}
</style>
