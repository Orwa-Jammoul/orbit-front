<template>
  <div class="">
    <label
      style="opacity: 1;"
      :for="id"
      :style="`color: #${color}!important; font-weight:bold`"
      :class="` fw w-100 text-start  form-label mb-2 ${!isEn() ? 'rtl' : ''}`"
      
    >
      {{ label }}
      <span v-if="astricts == 'true' ?? false" class="astricts text-danger">*</span>
      <!-- <span v-if="astricts == 'false' ?? false" class="astricts"></span> -->

    </label>
    <VField
      :name="name"
      v-slot="{ value }"
      class="form-control just-bottom-border mt-1"
      :style="`border:1px solid #${border_color}; color:#${color}!important`"
      :id="id"
      as="select"
      @change="getCitiesForCountry($event, name)"
      :disabled="disabled"
    >
      <option value="" disabled>
        {{ placeholder }}
      </option>
      <!-- <option v-for="item in items" :key="item" :value="item" :selected="value && value.includes(item)">{{ useTranslate(item, 'Name') }}</option> -->
      <option
        v-for="item in items"
        :key="item"
        :value="item.id"
        :style="` color: #000 !important`"
        :selected="value && value == item.id"
      >
      {{ isEn()? item[nameEn] : item[nameAr] }}
        <!-- {{ useTranslate(item, "name") }} -->
      </option>
    </VField>
    <VErrorMessage :name="name" as="div" class="help is-invalid" />
    
  </div>
</template>

<script setup>
const emit = defineEmits(["cities", "isLoaded"]);
const { public: {api, apiBase} } = useRuntimeConfig();
const props = defineProps({
  items: {
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    default: "text",
    required: true,
  },
  nameAr: {
    type: String,
    default: "nameAr",
  },
  nameEn: {
    type: String,
    default: "nameEn",
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
    default: "",
  },
  border_color: {
    type: String,
    default: `57585a`,
  },
  color: {
    type: String,
    default: `57585a`,
  },
  astricts: {
    type: String,
    default: `false`,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const getCitiesForCountry = async (event, name) => {
  if (name == "countries") {
    emit("isLoaded", true);
    let countryId = event.target.value;
    const { data, error, pending, refresh } = await useGetSiteApi().GetById(
      api.CitiesByCountryApi,
      countryId
    );

    // refetch the token if 401 error occure
    if (error.value && error.value.statusCode == 401) {
      await useReauthorization().reAuthorize();
    }
    // Emit The Value When Fetching It
    if (data.value) {
      emit("cities", data.value);
      emit("isLoaded", false);
    }
  }
};
</script>

<style lang="scss" scoped>
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
.form-check-input:focus {
  box-shadow: none;
}
.form-check > label {
  color: #aaa;
}
.form-floating > label {
  color: #aaa;
}
.form-control {
    background: #d1d2d272;
    border-radius: 4px;
    font-size: 16px;
    color: #000;
    height: 55px;
    &:disabled{
      opacity: .4;
    }
}

.form-control:focus {
    border-color: #495057;
    box-shadow: 0 0 0 0.2rem rgba(154, 33, 55, 0.25);
}
.help.is-invalid {
  letter-spacing: 0.03rem;
}
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
  background-position: left calc(0.375em + 0.1875rem) center;
}
.text-danger {
    color: #dc3545 !important;
}
</style>
