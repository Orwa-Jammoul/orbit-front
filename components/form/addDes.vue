<template>
  <div>
    <Form  @submit="onSubmit" :validation-schema="schema">
      <FieldVNote id="note-1" label="note 1" name="note1"/>
      <button type="submit">Submit</button>
    </Form>
  </div>
</template>

<script setup>
import { Form } from 'vee-validate';
import * as yup from 'yup';


// Validation schema
const schema = yup.object({
  note1: yup.string().required('Content is required').min(10, 'Content must be at least 10 characters'),
  // note2: yup.string().required('Content is required').min(10, 'Content must be at least 10 characters'),
  // note3: yup.string().required('Content is required').min(10, 'Content must be at least 10 characters'),
});

const onSubmit = (values) => {
  console.log('Form submitted:', values);
};

const upd = (value)=>{
  console.log(value);
}
</script>

<style lang="scss" scoped>

</style>