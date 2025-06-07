<template>
  <div class="form-check form-switch form-check-inline">
    <VField :name="name" v-slot="{ field }" :type="type" :value="value">
      <input 
        v-bind="field"
        style="cursor: pointer;"
        class="form-check-input" 
        :id="id"
        :type="type"
        :name="name" 
        :value="value">
      <label :for="id" class="form-check-label" v-if="label">{{ label }}</label>
      <VErrorMessage :name="name" as="div" class="help is-invalid" />
    </VField>
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
    type: String
  },
  value: {
    type: String
  },
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
  .form-control:focus,
  .form-control.is-invalid:focus, 
  .was-validated .form-control:invalid:focus {
    box-shadow: none;
  }
  .form-check-input:checked {
      background-color: #d2bd6c;
      border-color: #d2bd6c;
    }
  .form-check-input:focus { box-shadow: none; }
    .form-check > label { color: #d2bd6c; }
    .form-floating > label { color: #d2bd6c; }
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

</style>