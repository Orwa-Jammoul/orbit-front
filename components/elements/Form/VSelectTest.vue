<template>
  <div class="text-input-field">
    <!-- ref="inputField" v-model="inputData" -->
    <!-- <Field class="d-none" ref="inputField" :name="props.name" :type="type" v-slot="{ field, meta }"> -->
      <!-- v-bind="field" -->
      <v-select
        v-model="selectedItem"
        :hint="selectedHint"
        label="ssss"
        :items="items"
        item-title="nameEn"
        item-value="id"
        color="primary"
        hide-details="auto"
        bg-color="grey-lighten-2"
        return-object
        persistent-hint
        single-line
        @update:model-value="handleChange"
      ></v-select>
      <!-- <v-text-field 
        v-bind="field"
        :label="`${label} ${astricts?`*`:``}`"
        :placeholder="placeholder"
        :type="type"
        :hint="hint"
        color="primary"
        hide-details="auto"
        bg-color="grey-lighten-2"
        @change="handleInputChange" 
        ></v-text-field> -->
    <!-- </Field> -->
    <!-- <ErrorMessage :name="name" as="div" class="mb-2 help w-100 text-start is-invalid" /> -->
  </div>
</template>


<script setup>
// import { Field, ErrorMessage } from 'vee-validate';
// const props = defineProps({
//   // items: {
//   //   required: true,
//   // },
//   name: {
//     type: String,
//     required: true,
//   },
//   id: {
//     type: String,
//     default: "text",
//     required: true,
//   },
//   nameAr: {
//     type: String,
//     default: "nameAr",
//   },
//   nameEn: {
//     type: String,
//     default: "nameEn",
//   },
//   label: {
//     type: String,
//     default: "",
//   },
//   placeholder: {
//     type: String,
//     default: "",
//   },
//   border_color: {
//     type: String,
//     default: `57585a`,
//   },
//   color: {
//     type: String,
//     default: `57585a`,
//   },
//   type: {
//     type: String,
//     default: `select`,
//   },
//   astricts: {
//     type: String,
//     default: `false`,
//   },
//   disabled: {
//     type: Boolean,
//     default: false,
//   },
// });

const items = ref(
[
    {
        "id": 1,
        "nameAr": "أفغانستان",
        "nameEn": "Afghanistan",
        "alpha2Code": "AF",
        "alpha3Code": "AFG",
        "phoneCode": "93",
        "isActive": true
    },
    {
        "id": 2,
        "nameAr": "جزر أولاند",
        "nameEn": "Åland Islands",
        "alpha2Code": "AX",
        "alpha3Code": "ALA",
        "phoneCode": "358",
        "isActive": true
    },
    {
        "id": 3,
        "nameAr": "ألبانيا",
        "nameEn": "Albania",
        "alpha2Code": "AL",
        "alpha3Code": "ALB",
        "phoneCode": "355",
        "isActive": true
    },
    {
        "id": 4,
        "nameAr": "الجزائر",
        "nameEn": "Algeria",
        "alpha2Code": "DZ",
        "alpha3Code": "DZA",
        "phoneCode": "213",
        "isActive": true
    },
    {
        "id": 5,
        "nameAr": "ساموا الأمريكية",
        "nameEn": "American Samoa",
        "alpha2Code": "AS",
        "alpha3Code": "ASM",
        "phoneCode": "684",
        "isActive": true
    },
    {
        "id": 6,
        "nameAr": "أندورا",
        "nameEn": "Andorra",
        "alpha2Code": "AD",
        "alpha3Code": "AND",
        "phoneCode": "376",
        "isActive": true
    },
    {
        "id": 7,
        "nameAr": "أنغولا",
        "nameEn": "Angola",
        "alpha2Code": "AO",
        "alpha3Code": "AGO",
        "phoneCode": "244",
        "isActive": true
    },
    {
        "id": 8,
        "nameAr": "أنغويلا",
        "nameEn": "Anguilla",
        "alpha2Code": "AI",
        "alpha3Code": "AIA",
        "phoneCode": "264",
        "isActive": true
    },
    {
        "id": 9,
        "nameAr": "القارة القطبية الجنوبية",
        "nameEn": "Antarctica",
        "alpha2Code": "AQ",
        "alpha3Code": "ATA",
        "phoneCode": "672",
        "isActive": true
    },
    {
        "id": 10,
        "nameAr": "أنتيغوا وبربودا",
        "nameEn": "Antigua and Barbuda",
        "alpha2Code": "AG",
        "alpha3Code": "ATG",
        "phoneCode": "268",
        "isActive": true
    }
])

// const inputData = ref(null); // Start with null

// // Set initial value only if it exists in items
// onMounted(() => {
//   const ireland = items.value.find(item => item.id === 107);
//   if (ireland) {
//     inputData.value = ireland;
//   }
// });

const selectedItem = ref(null);

// Set initial value after component mounts
onMounted(() => {
  const initialItem = items.value.find(item => item.id === 107);
  if (initialItem) {
    selectedItem.value = initialItem;
  }
});

// Computed hint
const selectedHint = computed(() => {
  return selectedItem.value 
    ? `${selectedItem.value.nameEn}, ${selectedItem.value.id}`
    : 'Please select a country';
});

// const inputField = ref(null);
// const inputData = ref({
//             "id": 107,
//             "nameAr": "أيرلندا",
//             "nameEn": "Ireland",
//             "alpha2Code": "IE",
//             "alpha3Code": "IRL",
//             "phoneCode": "353",
//             "isActive": true
//         });



// console.log(items);


// Computed property for dynamic hint
// const selectedHint = computed(() => {
//   return inputData.value ? `${inputData.value.nameEn}, ${inputData.value.id}` : '';
// });

// Handle change event
const handleChange = (newValue) => {
  console.log('Selected item:', newValue);
  // You can emit an event here if needed
  // emit('update:modelValue', newValue);
};

// if(items){
//   inputField.value = items[0]
// }
// onMounted(()=>{
//   console.log(inputField.value);
// })

// const inputData = ref(null);

// const handleInputChange = (event) => {
//   // console.log(event.target.value);
//   inputData.value = event.target.value
// };

</script>

<style lang="scss">
.text-input-field{
  // .v-input__details{
  //   display: none !important;
  // }
  input[type="date"], input[type="time"], input[type="datetime-local"]{
    &::-webkit-calendar-picker-indicator {
      position: absolute;
      right: 1rem;
      color: rgb(16, 111, 255);
      opacity: 1;
      display: block;
      // background: url(https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png) no-repeat;
      // width: 20px;
      // height: 20px;
      // border-width: thin;
    }
  }
}
</style>

<style lang="scss" scoped>
@use "~/assets/styles/scss/theme/theme";


.field-root{
  margin-bottom: 10px;
}
input {
  &.rtl {
    direction: rtl;
  }
}
.form-floating > label {
  &.rtl {
    right: 0;
    left: unset;
  }
}


.just-bottom-border {
  border-top: 0;
  border-left: 0;
  border-right: 0;
}

.form-control::placeholder {
  color: #00000099 !important;
  padding-right: 12px;
}
.form-label {
    font-weight: bold;
    color: #333;
}

.form-control {
    background: #d1d2d272;
    border-radius: 4px;
    font-size: 16px;
    color: #333;
    &.disabled{
      color: #777 !important;
    }
}

.form-control:focus {
    border-color: #495057;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.help.is-invalid {
  letter-spacing: 0.03rem;
  font-size: 12px;
}

.help {
  margin-top: 10px;
  &.is-invalid {
    color: #dc3545;
  }
}

#confirmPassword.form-control.is-valid,
.was-validated #confirmPassword.form-control:valid,
#password.form-control.is-valid,
.was-validated #password.form-control:valid,
#confirmPassword.form-control.is-invalid,
.was-validated #confirmPassword.form-control:invalid,
#password.form-control.is-invalid,
.was-validated #password.form-control:invalid {
  background-image: none;
}

.form-control.rtl.is-valid,
.was-validated .rtl.form-control:valid,
.form-control.rtl.is-invalid,
.was-validated .rtl.form-control:invalid {
  background-position: left calc(0.375em + 0.1875rem) center;
  padding-inline-start: 12px;
  padding-inline-end: 12px;
}

.input-frame{
  position: relative;
  .show-hide-password {
    position: absolute;
    color: #c81f24;
    top: 0;
    // height: 100%;
    right: 20px;
    i:hover {
      color: #c81f24;
      cursor: pointer;
      transition: 0.5s;
    }
    &.rtl {
      right: unset;
      left: 20px;
    }
  }
}

.astricts {
  color: #c81f24;
  font-size: 16px;
}

</style>
