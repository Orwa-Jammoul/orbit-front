<template>
  <div class="form-floating mb-3">    
    <VField :name="name" v-slot="{ field, meta }">
      <input
        v-bind="field"
        class="form-control just-bottom-border"
        min="50"
        :id="id"
        :class="{
          'rtl': !isEn(),
          'is-valid': meta.valid && meta.touched,
          'is-invalid': !meta.valid && meta.touched,
          'isCustomStyle' : isCustomStyle == 'true'
        }"
        :placeholder="placeholder"
        type="number"
        :autocomplete="autocomplete"
      />

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
  autocomplete: {
    type: String,
    default: `true`,
  },
  astricts: {
    type: String,
    default: `false`
  }
});


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
  .form-control.rtl.is-valid, 
  .was-validated .rtl.form-control:valid,
  .form-control.rtl.is-invalid, 
  .was-validated .rtl.form-control:invalid {
    background-position: left calc(.375em + .1875rem) center;
  }

  .astricts {
    color: #dc3545;
  }

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
      border-radius: 0px;
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