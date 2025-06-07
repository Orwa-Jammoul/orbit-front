<template>
  <div class="file-upload" :class="{'contain-img':!!imgUrl}">
    <div v-if="imgUrl && !isPdf(imgUrl)" class="img-frame contain">
      <img :src="imgUrl" :alt="nameUrl">
    </div>
    <a v-if="imgUrl && isPdf(imgUrl)" class="img-frame contain" target="_blank" 
      :href="imgUrl" :title="t('click-to-download')"
    >
      <img :src="`/essential/pdf-doc.png`" :alt="nameUrl">
    </a>
    <div v-if="state.files.length > 0" class="files">
      <div class="file-item" v-for="(file, index) in state.files" :key="index">
        <span>{{ file.name }}</span>
        <span class="delete-file" @click="handleClickDeleteFile(index)">{{ isEn() ? 'Delete' : 'حذف' }}</span>
      </div>
    </div>
    <div v-else class="dropzone" v-bind="getRootProps()">
      <div class="border" :class="{ isDragActive, }" >
        <input v-bind="getInputProps()" />
        <p class="instructions" v-if="isDragActive">{{ t('drop-the-files-here',0,0,1) }} ...</p>
        <p class="instructions" v-else>{{ t('Drag and drop files here, or Click to select files') }}</p>
        <Icon name='material-symbols:attach-file' size="20px" color="#57585a"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useDropzone } from 'vue3-dropzone';
  const { $awn } = useNuxtApp()
  const emit = defineEmits(['fileUploaded'])
  const allowedImages = ref(['png', 'jpg', 'jpeg', 'pdf', 'PDF'])
  const props = defineProps({
    mes: {
      type: String,
    },
    del: {
      type: Boolean,
      default: false,
    },
    nameUrl: {
      type: String,
      default: '',
    },
    uploadRequest: {
      type: String,
      default: '',
    },
    imgUrl: {
      type: String,
      default: '',
    },
  })

  const state = reactive({
    files: [],
  });

  const { getRootProps, getInputProps, isDragActive, ...rest } = useDropzone({
    onDrop,
  });

  watch(state, () => {
    const file = state.files[0];
    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        // this.urls.push({ 'url': reader.result, "name": file.name, "lastModified": file.lastModified });
        emit('fileUploaded', { 'url': reader.result, file: file, 'nameUrl': props.nameUrl, 'uploadRequest': props.uploadRequest })
      }
    } else {
      emit('fileUploaded', { 'url': null, file: null, 'nameUrl': props.nameUrl, 'uploadRequest': props.uploadRequest })
    }
  });

  watch(isDragActive, () => {
  });

  function onDrop(acceptFiles, rejectReasons) {
    // console.log(acceptFiles[0]);
    if (acceptFiles.length > 1) {
      $awn.alert('You Can Not Upload More Then One File', { durations: { global: 4000 } });
      return;
    }
    if (!allowedImages.value.includes(acceptFiles[0].name.split('.').reverse()[0].toLowerCase())) {
      $awn.alert('File Should Be PNG Or JPG Or Pdf Or Jpeg Type Only', { durations: { global: 4000 } });
      return;      
    }
    if (acceptFiles[0].size>(2*1024*1024)) {
      $awn.alert('The file is too large, Must be less than 2Mb', { durations: { global: 4000 } });
      return;      
    }
      state.files = acceptFiles;
  }

  const handleClickDeleteFile = (index) => {
    state.files.splice(index, 1);
  }

  watch(fileReset(), () => {
    // console.log("fileReset", fileReset().value);
    if(fileReset().value){
      fileResetCount().value +=1
      state.files.splice(0, 1);
      if(fileResetCount().value>=2){
        fileReset().value= false
        fileResetCount().value = -1
      }
    }
  });

</script>

<style lang="scss" scoped>
.mes {
  color: #c81f24 !important;
}

.file-upload{
  &.contain-img{
    background-color: $br2;
    padding: 5px;
    border-radius: 10px;
  }
  .img-frame{
    height: auto;
    aspect-ratio: 1/1;
    border-radius: 7px;
    overflow: hidden;
  }
  .dropzone, .files {
    width: 100%;
    height: 57px;
    border-radius: 8px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    font-size: 12px;
    line-height: 1.5;
    overflow: auto;
  }
  .files{
    .file-item {
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgb(255 167 18 / 20%);
      padding-left: 15px;
      color: #57585a;
      height: 57px;
      font-weight: bold;
      padding: 10px;

      &:first-child {
        margin-top: 0;
      }

      .delete-file {
        background: red;
        color: #fff;
        padding: 5px 10px;
        border-radius: 8px;
        cursor: pointer;
      }
    }
  }
  .dropzone{
    .border {
      border: 2px dashed #57585a;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      transition: all 0.3s ease;
      background: #fff;
      cursor: pointer;
      padding: 0 1rem;

      &.isDragActive {
        border: 2px dashed #ffb300;
        background: rgb(255 167 18 / 20%);
      }
      p { 
        font-size: 15px;
        padding-inline-end: 1rem;
        margin: 0px;
       }
      .icon{
        width: 2rem;
      }
    }
  }
}

// .dropzone{
//   padding: 0 1rem;
// }




</style>
