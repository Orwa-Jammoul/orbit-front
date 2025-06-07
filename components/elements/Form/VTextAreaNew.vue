<template>
  <div class="mb-1 text-input-field">
    <Field class="d-none" v-model="inputData" :name="name" :type="type"></Field>
    <v-textarea 
      :label="`${label} ${astricts?`*`:``}`"
      :placeholder="placeholder"
      :type="type"
      :autocomplete="type"
      :hint="hint"
      color="primary"
      hide-details="auto"
      bg-color="grey-lighten-2"
      :rows="row"
      :no-resize="noResize"
      :counter="counter"
      @change="handleInputChange" 
    ></v-textarea>
    <ErrorMessage :name="name" as="div" class="help w-100 text-start is-invalid" />
  </div>
</template>


<script setup>
import { integer } from '@vee-validate/rules';
import { Field, ErrorMessage } from 'vee-validate';
const props = defineProps({
  type: {
    type: String,
    default: "file",
    required: false,
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
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  hint: {
    type: String,
    default: "",
  },
  astricts: {
    type: Boolean,
    default: false,
  },
  border_color: {
    type: String,
    default: "57585a",
  },
  color: {
    type: String,
    default: "fff",
  },
  height: {
    type: String,
    default: "35px",
  },
  row: {
    type: String,
    default: "3",
  },
  noResize: {
    type: Boolean,
    default: false,
  },
  counter: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  
});

const inputData = ref(null);

const handleInputChange = (event) => {
  // console.log(event.target.value);
  inputData.value = event.target.value
};

</script>

<style lang="scss">
.text-input-field{
  .v-input__details{
    // display: none !important;
    .v-counter{
      color: white;
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
