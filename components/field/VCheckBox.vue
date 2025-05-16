<template>
  <div class="form-check">
    <Field class="d-none" :name="name" type="checkbox" v-model="inputData"></Field>
    <v-checkbox :label="label" @change="handleInputChange"></v-checkbox>
    <ErrorMessage :name="name" as="div" class="help is-invalid" />
  </div>
</template>

<script setup>
import { Field, ErrorMessage } from 'vee-validate';
const props = defineProps({
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
});

const inputData = ref(false);

const handleInputChange = (event)=>{
  // console.log(event.target.checked);
  inputData.value = event.target.checked
  return inputData.value
}
</script>

<style lang="scss" scoped>
.form-check{
  width: 100%;
  padding-left: 0;
  color: white;
  .help {
    margin-top: 10px;
    &.is-invalid {
      color: #dc3545;
    }
  }
}

</style>