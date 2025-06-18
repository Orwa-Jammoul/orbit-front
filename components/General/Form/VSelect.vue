<template>
  <div class="form-floating mb-3">
    <VField 
      :name="name" 
      v-slot="{ value }" 
      class="form-control just-bottom-border"
      :id="id"
      as="select"
      @change="getCitiesForCountry($event, name)">
        <option value="" disabled>
          {{placeholder}}
          <span v-if="astricts == 'true' ?? false" class="astricts">*</span>
        </option>
        <!-- <option v-for="item in items" :key="item" :value="item" :selected="value && value.includes(item)">{{ useTranslate(item, 'Name') }}</option> -->
        <template v-if="props.name == 'countryId'">
          <option v-for="item in items" :key="item" :value="item.id" :data-nameAr="item.nameAr" :data-nameEn="item.nameEn" :selected="value && value == item.id">{{ useTranslate(item, 'name', false, 0, true) }}</option>
        </template>
        <template v-else-if="props.name == 'nationalityId'">
          <option v-for="item in items" :key="item" :value="props.name == 'nationalityId' ? item.id : item.name" :data-nameAr="item.arabicName" :data-nameEn="item.name" :selected="value && value == item.id">{{ isEn() ? item.name : item.arabicName }}</option>
        </template>
        <template v-else>
          <option v-for="item in items" :key="item" :value="useTranslate(item, 'name', false, 0, true)" :data-nameAr="item.nameEn" :data-nameEn="item.nameAr" :selected="value && value == item.id">{{ useTranslate(item, 'name', false, 0, true) }}</option>
        </template>
      </VField>
      <VErrorMessage :name="name" as="div" class="help is-invalid" />
    <label :for="id" :class="`form-label ${!isEn() ? 'rtl' : '' }`" v-if="label">{{ label }}</label>
  </div>
</template>

<script setup>
    const emit = defineEmits(['cities', 'itemName', 'isLoaded']);
    const { public: {apiBase, api} } = useRuntimeConfig();
    const props = defineProps({
      items: {
        required: true
      },
      name: {
        type: String,
        required: true
      },
      id: {
        type: String,
        default: "text",
        required: true
      },
      label: {
        type: String
      },
      placeholder: {
        type: String,
        default: ""
      },
      itemId: {
        type: Number
      },
      astricts: {
        type: String,
        default: `false`
      }
    });

  const getCitiesForCountry = async (event, name) => {
    const nameAr = event.target.selectedOptions[0].getAttribute('data-nameAr');
    const nameEn = event.target.selectedOptions[0].getAttribute('data-nameEn');
    emit('itemName', [nameEn, nameAr]);
    if (name == 'countryId') {
      emit('isLoaded', true)
      let countryId = event.target.value;
      callCitiesApi(countryId);
    }
  }

  const getCitiesForSelectedCountry = async () => {
    if (props.name == 'countryId' && props.itemId) {
      emit('isLoaded', true)
      let countryId = props.itemId;
      callCitiesApi(countryId);
    }
  }


  const callCitiesApi = async (countryId) => {
    const citiesByCountryIdApi = `${api.CitiesByCountryIdApi}?_CountryId=${countryId}`;
    const response = await $fetch(citiesByCountryIdApi, {
      baseURL: apiBase,
      headers: useSiteHeaders().headers
    });
    // Emit The Value When Fetching It
    if (response.succeeded) {
      emit('cities', [response.data, countryId]);
      emit('isLoaded', false)
    }
  }

  onMounted(() => {
    getCitiesForSelectedCountry()
  })
</script>

<style lang="scss" scoped>
  input { 
    &.rtl { direction: rtl; }
   }
   .form-floating > label { 
      &.rtl { right: 0; left: unset; }
   }
    .form-check-input:focus { box-shadow: none; }
    .form-check > label { color: #aaa; }
    .form-floating > label { color: #aaa; }
    .form-control {
      height: 54px;
      border: none;
      border-bottom: 1px solid #cccccc;
      border-radius: 0px;
      outline: none;
      box-shadow: none; 
      background-color: transparent;
      color: #aaa;
    }
    .help.is-invalid { letter-spacing: .03rem; }
  .form-control:focus,
  .form-control.is-invalid:focus, 
  .was-validated .form-control:invalid:focus {
    box-shadow: none;
  }

  .just-bottom-border {
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }

  .help {
    margin-top: 10px;
    &.is-invalid {
      color: #dc3545;
    }
  }
  .form-control.rtl.is-valid, 
  .was-validated .rtl.form-control:valid,
  .form-control.rtl.is-invalid, 
  .was-validated .rtl.form-control:invalid {
    background-position: left calc(.375em + .1875rem) center;
  }

</style>