<template>
  <div class="o-select-field">
    <div class="select-field-frame">
      <label class="select-label" :class="{'up': selectClicked || selectHasValue }" :for="id">{{ `${label} ${astricts?`*`:``}` }}</label>
      <icon :class="{'active': selectClicked }" name="material-symbols-light:arrow-drop-down-rounded" size="30px"/>
      <div class="underline" :class="{'active': selectClicked }"></div>
      <Field
        ref="inputField"
        :name="name"
        v-slot="{ value }"
        class="select-field"
        :class="{'has-value': selectClicked || selectHasValue }"
        :id="id"
        as="select"
        @change="handleChange"
        @focus="handleClick(true)"
        @blur="handleClick(false)"
        :disabled="disabled"
      >
        <option value="" disabled>
          {{ placeholder }}
        </option>
        <option v-for="item in items" :value="item" :key="item">
          {{ useTr(item[`${nameEn}`],item[`${nameAr}`],item[`${nameGe}`]) }}
        </option>
      </Field>
    </div>
    <ErrorMessage :name="name" as="div" class="mb-2 help w-100 text-start is-invalid" />
  </div>
</template>


<script setup>
import { Field, ErrorMessage } from 'vee-validate';
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
  nameGe: {
    type: String,
    default: "nameGe",
  },
  label: {
    type: String,
    default: "",
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
  type: {
    type: String,
    default: `select`,
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

const inputField = ref(null);
const selectedItem = ref(null);
const selectClicked = ref(false);
const selectHasValue = ref(false);

onMounted(()=>{
  selectHasValue.value = !!inputField.value.value
})

// const inputData = ref(null);

const handleChange = (event) => {
  selectHasValue.value = !!inputField.value.value
};
const handleClick = (isFocus) => {
  selectClicked.value = isFocus
};

</script>

<style lang="scss" scoped>
@use "~/assets/styles/scss/theme/theme";

.o-select-field{
  .select-field-frame{
    position: relative;
    .select-label{
      position: absolute;
      inset-inline-start: 1rem;
      inset-inline-end: 1rem;
      top: 16px;
      bottom: 3px;
      
      color: #424242;
      font-size: 1rem;
      pointer-events: none;
      transition: all 200ms ease-in-out;
      // background-color: #e0e0e0;

      &.up{
        top: 6px;
        font-size: 12px;
        color: rgb(34, 150, 243);
        background: none;
      }
    }
    .iconify{
      position: absolute;
      inset-inline-end: .8rem;
      top: 16px;
      color: rgb(34, 150, 243);
      transition: all 200ms ease-in-out;
      pointer-events: none;
      &.active{
        transform: rotate(180deg);
      }
    }
    .underline{
      position: absolute;
      bottom: 0;
      height: 2.5px;
      left: 50%;
      right: 50%;
      // width: 0;
      background-color: rgb(34, 150, 243);
      transition: all 200ms ease-in-out;
      &.active{
        left: 0;
        right: 0;
        // width: 100%;
      }
    }
    .select-field{
      width: 100%;
      height: 3.5rem;
      background-color: #e0e0e0;
      color: #e0e0e0;
      margin-bottom: 1px;
      padding: 1.5rem 1rem .5rem 1rem ;
      border-radius: 3px 3px 0 0;
      outline: none;
      transition: all 200ms ease-in-out;
      
      
      &:focus{
        // border: none;
        background-color: rgb(188, 188, 188);
        color: rgb(188, 188, 188);
      }
      &.has-value{
        color: black !important;
      }
  
      option {
        // padding: 1rem 10px 8px 10px;
        background-color: #e0e0e0;
        color: #333;
      }
      
    }
  }
  .astricts {
    color: #c81f24;
    font-size: 16px;
  }

  .help {
    margin-top: 10px;
    &.is-invalid {
      color: #dc3545;
      letter-spacing: 0.03rem;
      font-size: 12px;
    }
  }
}


</style>
