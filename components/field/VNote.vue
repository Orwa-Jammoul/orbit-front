<template>
  <div class="mb-1 position-relative">
    <Field :name="name" v-slot="{ field, meta }">
      <label class=" w-100 text-start m-0" :for="id" :style="`color: #${color}`" :class="`form-label   ${!isEn() ? 'rtl' : '' }`" v-if="label">
        {{ label }} 
        <span v-if="astricts == 'true' ?? false" class="astricts">*</span>
        <span v-if="astricts == 'false' ?? false" class="astricts"></span>
      </label>
      <FieldCoreTiptapEditor v-model="field.value" v-bind="field"/>
      <ErrorMessage
        :name="name"
        as="div"
        class="help w-100 text-start is-invalid"
      />
    </Field>
  </div>
</template>


<script setup>
import { Field, ErrorMessage } from 'vee-validate';
const props = defineProps({
  type: {
    type: String,
    default: "text",
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
  },
  placeholder: {
    type: String,
    default: "",
  },
  autocomplete: {
    type: String,
    default: "true",
  },
  activePasswordEye: {
    type: Boolean,
    default: false,
  },
  astricts: {
    type: String,
    default: "false",
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
    default: "40px",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  
});


const showPassword = (event) => {
  event.target.parentNode.parentNode.children[0].setAttribute("type", "text");
  event.target.parentNode.parentNode.children[1].children[0].classList.add(
    "d-none"
  );
  event.target.parentNode.parentNode.children[1].children[1].classList.remove(
    "d-none"
  );
};

const hidePassword = (event) => {
  event.target.parentNode.parentNode.children[0].setAttribute(
    "type",
    "password"
  );
  event.target.parentNode.parentNode.children[1].children[0].classList.remove(
    "d-none"
  );
  event.target.parentNode.parentNode.children[1].children[1].classList.add(
    "d-none"
  );
};
</script>

<style lang="scss" scoped>
@use "~/assets/styles/scss/theme/theme";
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

}
.form-label {
    font-weight: bold;
    color: #333;
}

.form-control {
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
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
}

.help {
  font-size: .8rem;
  margin-top: 6px;
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
}

.input-frame{
  position: relative;
  .show-hide-password {
    cursor: pointer;
    position: absolute;
    // color: #c81f24;
    top: 0;
    height: 100%;
    aspect-ratio: 1/1;
    right: 20px;
    i:hover {
      color: $br80;
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
  font-size: 12px;
}
</style>
