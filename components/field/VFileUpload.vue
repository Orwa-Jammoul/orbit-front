<template>
  <div class="mb-1 position-relative">
    <Field class="d-none" v-model="fileData" :name="name" :type="type"></Field>
    <!-- <input
    :name="name"
    :type="type"
    @change="handleFileChange" 
    /> -->
    <div class="custom-file-upload">
      <input
        :id="id"
        :name="name"
        :type="type"
        @change="handleFileChange" 
      />
      <label :for="id">{{ label }}</label>
      <span v-if="fileData?.name" class="file-name">{{ fileData.name }}</span>
    </div>
    <ErrorMessage :name="name" as="div" class="help w-100 text-start is-invalid" />
  </div>
</template>


<script setup>
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
    default: "35px",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  
});

const fileData = ref(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64full = e.target.result;
      const base64 = base64full.split(',')[1];
      fileData.value = {
        file: base64full,
        type: file.type,
        name: file.name,
      };
    };
    reader.readAsDataURL(file);
  }
  // console.log(fileData.value);
  return fileData.value
};

</script>

<style lang="scss" scoped>
@use "~/assets/styles/scss/theme/theme";

// .file-input{
//   color: white;
// }


.custom-file-upload{
  display: inline-block;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  // cursor: pointer;
  // font-family: Arial, sans-serif;
  font-size: 16px;
  text-align: center;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
  input[type="file"] {
    display: none;
  }
  label {
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    cursor: pointer;
  }
  .file-name {
    margin-left: 10px;
    font-style: italic;
    color: #555;
  }
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

}
.form-label {
    font-weight: bold;
    color: #333;
}

.form-control {
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  background: #fff;
  // background: #ffffff00;
  border-radius: 4px;
  font-size: 16px;
  color: #000;
  // color: #fff;
  &.disabled{
    color: #777 !important;
    // color: #fff !important;
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
