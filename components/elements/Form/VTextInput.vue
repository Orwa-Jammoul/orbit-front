<template>
  <div class="field-root position-relative">
    <VField :name="name" v-slot="{ field, meta }">
      <label class=" w-100 text-start" :for="id" :style="`color: #${color}`" :class="`form-label ${ isAr() ? 'rtl' : 'ltr' }`" v-if="label">
        {{ label }} 
        <span v-if="astricts == 'true' ?? false" class="astricts">*</span>
        <span v-if="astricts == 'false' ?? false" class="astricts"></span>
      </label>
      <div class="input-frame">
        <input
          v-bind="field"
          class="form-control"
          :style="`color: #${color};height: ${height}`"
          :id="id"
          :class="{
            'rtl': isAr(),
            'is-valid': meta.valid && meta.touched,
            'is-invalid': !meta.valid && meta.touched,
            'disabled': disabled,
          }"
          :placeholder="placeholder"
          :type="type"
          :autocomplete="autocomplete"
          :disabled="disabled"
        />
        <span class="show-hide-password pcc" :class="rtl()" v-if="activePasswordEye">
          <i class="fa fa-eye fa-fw" id="show_password" @click="showPassword"></i>
          <i class="fa fa-eye-slash d-none fa-fw" id="hide_password" @click="hidePassword"></i>
        </span>
      </div>

    </VField>
    <VErrorMessage
      :name="name"
      as="div"
      class="help w-100 text-start is-invalid"
    />
  </div>
</template>


<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
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
    default: "57585a",
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
