<template>
  <div class="container">
    <div class="row path-links text-start pt-4">
      <h5 class="links-frame" dir="auto" >
        <nuxt-link class="path-link" to="/">{{ t("home") }}</nuxt-link>
        /
        <span class="path-link">{{ t('contact-us') }}</span>
      </h5>
    </div>
    <div class="title-formatting3 mb-10 px-0 " :class="{'title_en':isEn(), 'ltr':isEn(), 'rtl':!isEn()}">
      <h1 style="font-weight: var(--fw-9)" class="text-center ">
        <span >{{ t('contact-us') }}</span>
      </h1>
    </div>
  </div>

  <div v-if="contactUs && contactUs.isActive" class="container main-section" :class="rtl()" dir="auto">
    <div class="row info-section">
      <div class="left col-lg-6 mt-5 mb-5">
        <div class="info-frame pcc flex-column">

          <div v-if="contactUs.description1" class="info-row w-100 d-flex">
            <icon class="mx-2" name="material-symbols:call-sharp" size="25px"/>
            <!-- <icon class="mx-2" name="material-symbols:mail-rounded" size="25px"/> -->
            <!-- <icon class="mx-2" name="material-symbols:pin-drop" size="25px"/> -->
            <!-- <icon class="mx-2" name="material-symbols:location-on-rounded" size="25px"/> -->
            <div class="contact-info" v-html="useDes1(contactUs)"></div>
          </div>
          <div v-if="contactUs.description2" class="info-row w-100 d-flex">
            <icon class="mx-2" name="material-symbols:mail-rounded" size="25px"/>
            <!-- <icon class="mx-2" name="material-symbols:pin-drop" size="25px"/> -->
            <!-- <icon class="mx-2" name="material-symbols:markunread-mailbox" size="25px"/> -->
            <div class="contact-info" v-html="useDes2(contactUs)"></div>
          </div>
          <div v-if="contactUs.description3" class="info-row w-100 d-flex">
            <icon class="mx-2" name="material-symbols:pin-drop" size="25px"/>
            <!-- <icon class="mx-2" name="material-symbols:call-sharp" size="25px"/> -->
            <div class="contact-info" v-html="useDes3(contactUs)"></div>
          </div>
          <div v-if="contactUs.description4" class="info-row w-100 d-flex">
            <icon class="mx-2" name="material-symbols:pin-drop" size="25px"/>
            <!-- <icon class="mx-2" name="material-symbols:mail-rounded" size="25px"/> -->
            <div class="contact-info" v-html="useDes4(contactUs)"></div>
          </div>

        </div>
        <!-- <div class="info-frame pcc flex-column">

          <div v-if="contactUs2.description" class="info-row w-100 d-flex">
            <icon class="mx-2" name="material-symbols:mail-rounded" size="25px"/>
            <div class="contact-info" v-html="useDes(contactUs2)"></div>
          </div>
          <div v-if="contactUs2.description2" class="info-row w-100 d-flex">
            <icon class="mx-2" name="material-symbols:pin-drop" size="25px"/>
            <div class="contact-info" v-html="useDes2(contactUs2)"></div>
          </div>
          <div v-if="contactUs2.description3" class="info-row w-100 d-flex">
            <icon class="mx-2" name="material-symbols:call-sharp" size="25px"/>
            <div class="contact-info" v-html="useDes3(contactUs2)"></div>
          </div>
          <div v-if="contactUs2.description4" class="info-row w-100 d-flex">
            <icon class="mx-2" name="material-symbols:mail-rounded" size="25px"/>
            <div class="contact-info" v-html="useDes4(contactUs2)"></div>
          </div>

        </div> -->
        <div class="logo-frame contain">
          <img src="/logo/logo-01.png" alt="logo">
        </div>

      </div>
      <div class="right col-lg-6 mt-5" >
        <form @submit.prevent="submit">
          <v-text-field
            :class="!$i18n.locale == 'en' ? 'specialinput' : ''"
            v-model="name.value.value"
            :counter="10"
            :error-messages="name.errorMessage.value"
            :label="t('name')"
          ></v-text-field>

          <v-text-field
            :class="!$i18n.locale == 'en' ? 'specialinput' : ''"
            v-model="phone.value.value"
            :counter="7"
            :error-messages="phone.errorMessage.value"
            :label="t('phone')"
          ></v-text-field>

          <v-text-field
            :class="!$i18n.locale == 'en' ? 'specialinput' : ''"
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            :label="t('email')"
          ></v-text-field>

          <v-textarea
            :class="!$i18n.locale == 'en' ? 'specialinput' : ''"
            :label="t('message')"
            v-model="message.value.value"
            :error-messages="message.errorMessage.value"
          ></v-textarea>

          <div class="text-center">
            <v-btn class="senbtn" variant="outlined" type="submit" @click="submit()">
              {{ t("send") }}
            </v-btn>
          </div>
        </form>
      </div>

    </div>

    <div v-if="contactUs.geoLink" class="row geolocation">
      <iframe :src="contactUs.geoLink" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <!-- <div v-if="contactUs2.geoLocation" class="row geolocation">
      <iframe :src="contactUs2.geoLocation" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div> -->

  </div>
  
</template>

<script setup>
const contactUs = ref(null);
const contactUs2 = ref(null);
const locations = ref(null);
const loading= ref(true)
const { public: {api, apiBase} } = useRuntimeConfig();

import { useLocale } from 'vuetify'
const { current } = useLocale()

current.value = useLang().value
watch(useLang(),()=>{
  current.value = useLang().value
})


const { data:contactUsData } = await useGetSiteApi().GetAll(
  `${api.PagesApi}/4`
);

// const { data:locationsData } = await useGetSiteApi().GetAll(
//   `${api.blocksApi}?categoryId=6&pageNumber=0&pageSize=10`
// );

watchEffect( async ()=> {
  if(process.client) {
    if(contactUsData.value) {
      contactUs.value = contactUsData.value
      // loading.value =false
      console.log(contactUs.value);
    }
  }
})

// const { data:contactUsData2 } = await useGetSiteApi().GetAll(
//   `${api.PagesApi}/5`
// );
// watchEffect( async ()=> {
//   if(process.client) {
//     if(contactUsData2.value) {
//       contactUs2.value = contactUsData2.value
//       loading.value = false
//       // console.log(contactUs2.value);
//     }
//   }
// })


import { ref } from "vue";
import { useField, useForm } from "vee-validate";
const { $awn } = useNuxtApp();

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

      return "Phone number needs to be at least 9 digits.";
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
    message(value) {
      if (value?.length >= 2) return true;

      return "Message needs to be at least 10 characters.";
    },
    // select(value) {
    //   if (value) return true;

    //   return "Select an item.";
    // },
  },
});
const name = useField("name");
const phone = useField("phone");
const email = useField("email");
const message = useField("message");
// const select = useField("select");
// const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);

const submit = handleSubmit((values) => {
  // alert(JSON.stringify(values, null, 2));
  if(values.name){
    $awn.success(isEn()?`Your message was sent successfully.`:`تم إرسال رسالتك بنجاح. `, { durations: { global: 5000 } })
    handleReset()
  }
});
</script>

<style lang="scss">
  .contact-info{
    a{
      color: green !important;
      font-weight: 600;
    }
  }
</style>

<style lang="scss" scoped>
@use"~/assets/styles/scss/theme/theme" as *;



.section-title{
  h1{
    text-align: center;
    font-size: 30px;
    border-bottom: solid 1px $gold;
    font-weight: 900;
    color: $gold;
    padding: 1rem 0;
  }
}

// .info {
//   padding: 2rem;
//   text-align: justify;
// }

.senbtn {
  width: 100%;
  background-image: linear-gradient(90deg, rgba($color: $primary2, $alpha: .5) , $primary2);
  color: white;
  padding: 0 2.5rem;
}

// .title_en {
//   flex-direction: row-reverse;
// }

.main-section{
  margin-bottom: 3rem;
  .info-section{
    // padding: 0 2rem;
    .left, .right{
      .title {
        margin: 1rem 0;
        font-size: 36px;
        font-weight: 700;
      }
      .des{
        line-height: 28px;
        font-size: 15px;
        margin-top: 1rem;
        color: $primary3c;
        text-align: justify;
      }
    }

    .left{
      display: flex;
      flex-direction: column;
      .info-frame{
        height: auto;
        // height: 5rem;

        // background-color: $br1;
        padding-top: 1rem;
        border-radius: 5px;
        // height: 50%;
        box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.2);


        &:not(:first-child){
          margin-top: 1rem;
        }
        .info-row{
          margin-bottom: 1rem;
          .iconify{
            margin: 2px 5px;
            color: $primary2;
          }
          .contact-info{
            border-inline-start: solid 1px $primary2;
            padding-inline-start: 10px;
            margin-bottom: 0;
          }
        }
        
      }
      .logo-frame{
        padding-top: 2rem;
        height: 8rem;
        // flex-grow: 1;
        // flex-shrink: 1;
      }
    }
  }
}

.geolocation{
  // width: 100%;
  margin-top: 2rem;
  padding: 0;
}





</style>
