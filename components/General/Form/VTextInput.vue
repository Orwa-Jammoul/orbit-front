<template>
  <div class="form-floating mb-3">    
    <VField :name="name" v-slot="{ field, meta }">
      <input
        v-bind="field"
        class="form-control just-bottom-border"
        :id="id"
        :class="{
          'rtl': !isEn(),
          'is-valid': meta.valid && meta.touched && !removeValidClass,
          'is-invalid': !meta.valid && meta.touched && !removeInvalidClass,
          'isCustomStyle' : isCustomStyle == 'true'
        }"
        :placeholder="placeholder"
        :type="type"
        :autocomplete="autocomplete"
      />
      <span :class="`show-hide-password ${!isEn() ? 'rtl' : '' }`" v-if="activePasswordEye">
        <i class="fa fa-eye fa-fw" id="show_password" @click="showPassword"></i>
        <i class="fa fa-eye-slash d-none fa-fw" id="hide_password" @click="hidePassword"></i>
      </span>

      <VErrorMessage :name="name" as="div" class="help is-invalid" />
    </VField>
    <label :for="id" :class="`form-label ${!isEn() ? 'rtl' : '' } ${isCustomStyle == 'true' ? 'isCustomStyle' : ''}`" v-if="label">
      {{ label }}
      <span v-if="astricts == 'true' ?? false" class="astricts">*</span>
    </label>
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
  isCustomStyle: {
    type: String,
    default: `false`
  },
  id: {
    type: String,
    default: "text",
    required: true,
  },
  label: {
    type: String
  },
  placeholder: {
    type: String,
    default: "",
  },
  removeInvalidClass: {
    type: Boolean,
    default: false,
  },
  removeValidClass: {
    type: Boolean,
    default: false,
  },
  autocomplete: {
    type: String,
    default: `true`,
  },
  activePasswordEye: {
    type: Boolean,
    default: false
  },
  astricts: {
    type: String,
    default: `false`
  }
});

const showPassword = (event) => {
  // console.log(event.target.parentNode.parentNode.children[1].children[0]);
  event.target.parentNode.parentNode.children[0].setAttribute('type', 'text')
  event.target.parentNode.parentNode.children[1].children[0].classList.add('d-none')
  event.target.parentNode.parentNode.children[1].children[1].classList.remove('d-none')
}

const hidePassword = (event) => {
  event.target.parentNode.parentNode.children[0].setAttribute('type', 'password')
  event.target.parentNode.parentNode.children[1].children[0].classList.remove('d-none')
  event.target.parentNode.parentNode.children[1].children[1].classList.add('d-none')
}

</script>

<style lang="scss" scoped>

  input {
    &.rtl { direction: rtl; }
   }
   .form-floating > label {
     @include sm-mobile {
          font-size: .8rem;
      }
      &.isCustomStyle { color: #000; }
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
  #currentPassword.form-control.is-valid,
  .was-validated #currentPassword.form-control:valid,
  #confirmPassword.form-control.is-valid,
  .was-validated #confirmPassword.form-control:valid,
  #password.form-control.is-valid,
  .was-validated #password.form-control:valid,
  #currentPassword.form-control.is-invalid,
  .was-validated #currentPassword.form-control:invalid,
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
    background-position: left calc(.375em + .1875rem) center;
  }
  .show-hide-password {
    color: rgb(255 255 255 / 75%);
    position: absolute;
    top: 15px;
    right: 20px;
    i:hover { color: #fff; cursor: pointer; }
    &.rtl { right: unset; left: 20px; }
  }

  .astricts { color: #dc3545; }

  .form-control {
    &.isCustomStyle {
      height: 50px;
      margin-bottom: 18px;
      font-size: 14px;
      line-height: 26px;
      background: #eee;
      color: #000;
      border: 1px solid #eeeeee;
      // font-family: $primary-font;
      border-radius: 0;
      padding-left: 20px;
      @media(min-width: 576px) and (max-width: 992px) {
        font-size: 11px;
      }
      &:focus {
          box-shadow: none;
          outline: none;
      }
      &.placeholder { color: #333; font-size: 16px; }
      &:-moz-placeholder { color: #999; font-size: 16px; }
      &::-moz-placeholder { color: #999; font-size: 16px; }
      &::-webkit-input-placeholder { color: #999; font-size: 16px; }
    }
  }

</style>