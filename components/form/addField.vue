<template>
  <div>
    <Form class="form"  @submit="onSubmit" :validation-schema="schema">
      <div class="basic-options pcb">
        <div class="group-1">
          <FieldVTextInput id="icon" type="text" :placeholder="t('icon',1)" name="icon"/>
          <a href="https://icones.js.org" target="_blank" rel="noopener noreferrer">icones.js.org</a>
        </div>
        <div class="group-1">
          <FieldVTextInput class="mb-7" id="order" type="number" :placeholder="t('order',1)" name="order"/>
        </div>
        <div class="group-2">
          <FieldVSelect
            class="mb-7"
            id="typeId"
            name="typeId"
            :items="titleTypes"
            :placeholder="t('type')"
            nameAr="name_ar"
            nameEn="name_en"
            astricts="true"
          />
        </div>
        <div class="group-1 pcs flex-column">
          <FieldVCheckBox class="mb-0" id="isActive" type="checkbox" :placeholder="t('isActive',1)" name="isActive"/>
        </div>
        <!-- {{ titleTypes[0].name_ar }} -->
        <!-- <select name="title-types" id="title-types">
          <option v-for="tt in titleTypes" :value="tt.id" :key="tt.id">{{ tt.name_en }}</option>
        </select> -->
      </div>
      <div class="lang-content">
        <p class="lang-name">{{ t('english',1) }}</p>
        <div class="lang-fields">
          <FieldVTextInput id="content-en" type="text" :placeholder="t('content',1)" name="content_en"/>
        </div>
      </div>
      <div class="lang-content">
        <p class="lang-name">{{ t('arabic',1) }}</p>
        <div class="lang-fields">
          <FieldVTextInput id="content-ar" type="text" :placeholder="t('content',1)" name="content_ar"/>
        </div>
      </div>
      <!-- <FieldVTextInput id="title-1" placeholder="title 1" name="content_ar"/>
      <FieldVTextInput id="title-1" placeholder="title 1" name="content_en"/> -->

      <button class="o-btn" type="submit">{{t('submit')}}</button>
    </Form>
  </div>
</template>

<script setup>
import { Form } from 'vee-validate';
import * as yup from 'yup';

const { public: { api, apiBase },} = useRuntimeConfig();
// const props = defineProps({
//   item: {
//     type: Object,
//     required: true,
//   },
// })

const titleTypes = ref(null)
const noteTypes = ref(null)
const {data:titleTypesData} = await useGetUserApi().GetAll(`${api.titleTypesApi}`)
const {data:noteTypesData} = await useGetUserApi().GetAll(`${api.noteTypesApi}`)

watchEffect(()=>{
  if(titleTypesData.value && noteTypesData.value){
    titleTypes.value = convertToArray(titleTypesData.value)
    noteTypes.value = convertToArray(noteTypesData.value)
  }
})

// Validation schema
const schema = yup.object({
  // title1: yup.string().required('Content is required').min(10, 'Content must be at least 10 characters'),
  // note2: yup.string().required('Content is required').min(10, 'Content must be at least 10 characters'),
  // note3: yup.string().required('Content is required').min(10, 'Content must be at least 10 characters'),
});

const onSubmit = (values) => {
  console.log('Form submitted:', values);
};

</script>

<style lang="scss" scoped>
.form{
  margin-top: 1rem;
  .basic-options{
    .group-2{
      // flex-grow: 1;
      width: 10rem;
    }
  }
  .lang-content{
    border: solid 1px $br30;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem 0;
    .lang-name{
      width: 100%;
      color: white;
    }
    // .lang-fields{
    //   display: grid;
    //   grid-template-columns: 1fr 4fr;
    //   grid-gap: 1rem;
    // }
  }
}
</style>