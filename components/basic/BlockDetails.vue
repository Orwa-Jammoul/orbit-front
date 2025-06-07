<template>
  <div class="block-root">

    <!-- <div v-if="item?.pageUrl" class="google-map">
      <iframe :src="item.pageUrl" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div> -->
    <div class="container">
      <div class="title-formatting3 mb-10 px-0 " :class="isEn() ? 'title_en ltr' : 'rtl'">
        <h1 style="font-weight: var(--fw-9)" class="">
          <span >{{ useName(item) }}</span>
        </h1>
      </div>
      <p v-if="item?.date">{{ toShowDate(item.date) }}</p>
    </div>
  
    <div v-if="item" class="container">
      <!-- <div v-if="item?.image" class="row mb-10">
        <div  class="img-frame contain">
          <img :src="`${apiBase}/${item.image}`" alt=" Photo">
        </div>
      </div> -->
    
      <!-- section for block description -->
      <!-- <div class="row description">
        <div class="" v-html="useDes(item)"></div>
        <div class="" v-html="useDes1(item)"></div>
        <div class="" v-html="useDes2(item)"></div>
        <div class="" v-html="useDes3(item)"></div>
      </div> -->
      <div class="row description">
        <div class="section">

          <div v-if="item?.image" class="img-frame contain" :class="rtl()">
            <img :src="`${apiBase}/${item.image}`" alt=" Photo">
          </div>
          <div v-html="useDes(item)"></div>

        </div>
        <div class="section">
          <div v-if="item?.image1" class="img-frame contain" :class="rtl()">
            <img :src="cImg(item.image1)" alt=" Photo">
          </div>
          <div  v-html="useDes1(item)"></div>

        </div>
        <div class="section">
          <div v-if="item?.image2" class="img-frame contain" :class="rtl()">
            <img :src="cImg(item.image2)" alt=" Photo">
          </div>
          <div  v-html="useDes2(item)"></div>

        </div>
        <div class="section">
          <div v-if="item?.image3" class="img-frame contain" :class="rtl()">
            <img :src="cImg(item.image3)" alt=" Photo">
          </div>
          <div  v-html="useDes3(item)"></div>
        </div>
      </div>
    
      <!-- section for block attachments -->
      <div v-if="item.blockAttachements?.length >0" class="row attachments-section pt-10">
        <h2 class="section-title">{{ t('Attachments')}}</h2>
        <ol class="block-attachments px-0 ps-10">
          <li v-for="attachment in item?.blockAttachements" :key="attachment.id">
            <a :href="`${apiBase}/${attachment.file}`" target="_blank" class="attachment-link">
              <icon name="majesticons:attachment" size="18px"/>
              {{ t('downloadFile') }}
            </a>
          </li>
        </ol>
      </div>

      <!-- section for block photos -->
      <div v-if="item.blockPhotos?.length > 0" class="row block-photos">
        <h2 class="section-title">{{ t('photos') }}</h2>
        <div class="row">
          <div v-for="photo in item?.blockPhotos" :key="photo.id" class="col-md-3 mb-5">
            <div class="card photo-card contain">
              <img :src="`${apiBase}/${photo.image}`" class="card-img-top img-fluid" alt="Page Photo" @click="openAlbum(item,photo.id)">
              <img :src="`${apiBase}/${photo.image}`" class="card-img-top img-fluid bg" alt="Page Photo" >
            </div>
          </div>
        </div>
      </div>
      <!-- Video Section -->
      <div v-if="item.blockVideos?.length >0" class="row video-section pt-5">
        <h2 class="section-title">{{ t('Videos') }}</h2>
        <div class="video-list">
          <div v-for="video in item.blockVideos" :key="video.id" class="video-item">
            <video controls :src="`${apiBase}/${video.file}`" class="video-player">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      

      <div v-if="item.file" class="row attachments-section pt-10">
        <h2 class="section-title">{{ t('Attachments')}}</h2>
        <ol class="block-attachments px-0 ps-10">
          <li>
            <a :href="`${apiBase}/${item.file}`" target="_blank" class="attachment-link">
              {{ t('downloadFile') }}
            </a>
          </li>
        </ol>
      </div>
    </div>
    <ModalImgs/>
<!--   
    <div v-if="showImageModal" class="modal fade show" tabindex="-1" role="dialog" style="display: block;">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" @click="closeModal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="`${apiBase}/${selectedPhoto.image}`" class="img-fluid" alt="Large Photo">
          </div>
        </div>
      </div>
    </div>
    <div v-if="showImageModal" class="modal-backdrop fade show" @click="closeModal"></div> -->
  </div>
</template>
  
<script setup>

  // const loading = ref(true)
  const { public: { api, apiBase } } = useRuntimeConfig();
  const {item} = defineProps(['item']);

  // loading.value = !item

  const showImageModal = ref(false);
  const selectedPhoto = ref(null);
  const showModal = (photo) => {
    selectedPhoto.value = photo;
    showImageModal.value = true;
  };
  
  const closeModal = () => {
    showImageModal.value = false;
    selectedPhoto.value = null;
  };
</script>
  
<style lang="scss" scoped>
  @import "~/assets/styles/scss/theme/theme";
  .block-root{
    margin-bottom: 3rem;
  }
  .section-title {
    // padding: 0;
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #128040;
  }

  .description {
    // font-size: 2rem;
    margin-bottom: 1rem !important;
    font-size: 1.1rem !important;
    .section{
      // margin-bottom: 1rem;
      .img-frame {

        // position:absolute;
        // display: flex;
        // height: 50vh;
        width: 40%;
        height: auto;
        // height: 100%;
        margin-bottom: 2rem;
        &.rtl{
          float: left;
          margin-right: 2rem;
        }
        &.ltr{
          float: right;
          margin-left: 2rem;
        }

        &:nth-child(even){
          &.rtl{
            float: right;
            margin-left: 2rem;
          }
          &.ltr{
            float: left;
            margin-right: 2rem;
          }

        }

        @media (max-width: 992px) {
          width: 100%;
        }

      }
    }
  }

  .img-frame {
    // height: 15rem;
    height: 50vh;
  }

  .video-section {
    margin-top: 20px;



    .video-list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      .video-item {
        flex: 1 1 calc(50% - 20px);
        max-width: calc(50% - 20px);

        .video-player {
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }

  .block-attachments {
    // list-style-type: none;
    list-style-type: lower-roman;

    li {
      margin-bottom: 10px;

      .attachment-link {
        text-decoration: none;
        color: #007bff;
        font-size: 1rem;
        border-bottom: 1px solid #007bff;
        padding-bottom: 2px;
        transition: color 0.3s, border-color 0.3s;

        &:hover {
          color: #0056b3;
          border-color: #0056b3;
        }
      }
    }
  }

  .photo-card {
    width: 100%;
    aspect-ratio: 1/1.3;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    
    &:hover {
      // transform: scale(1.02);
      transform: scale(1.01);
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    }
  }

  // .modal {
  //   .modal-content {
  //     background: none;
  //     border: none;
  //   }

  //   .close {
  //     color: #fff;
  //     opacity: 1;
  //   }

  //   .modal-backdrop {
  //     background-color: rgba(0, 0, 0, 0.5);
  //   }
  // }
</style>