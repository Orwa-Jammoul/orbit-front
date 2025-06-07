<template>
  <div>
    <div class="container">
      <div class="path-links text-start pt-4">
        <h5 class="links-frame" dir="auto" style="color:#000">
          <nuxt-link class="path-link" to="/">{{ t('home') }}</nuxt-link>
            /
          <span class="path-link"> {{ useName(useMenuById(menuId))  }}</span>
        </h5>
      </div>

      <div class="title-formatting mb-10 px-0 " :class="isEn() ? 'ltr title_en' : 'rtl'">
        <h1 style="font-weight: var(--fw-9)" class="text-center color ">
          <span >{{ useName(useMenuById(menuId)) }}</span>
        </h1>
      </div>
    
    </div>
    <!-- section for card -->
    <div class="container py-4">
      <div class="row card-container">
        <div v-for="item in items"  :key="item.id" class="col-12 col-lg-3 col-md-6">
          <a target="_blank" v-if="isUrl(item.pageUrl)" class="card" :href="item.pageUrl">
            <div class="image-container contain">
              <img :src="item.image1?`${apiBase}/${item.image1}`:`/logo/logo-01.png`" class="img-fluid" alt="Page Photo">
              <!-- <img :src="item.image1?`${apiBase}/${item.image1}`:`/logo/logo-01.png`" class="img-fluid bg" alt="Page Photo"> -->
            </div>
            <div class="card-content">
              <h5 class="text-center pcc">
                <span  class="" :title="useName(item)">{{ useName(item)}}</span>
              </h5>
            </div>
          </a>
          <nuxt-link v-else class="card" :to="`${baseUrl}/${item.id}`">
            <div class="image-container contain">
              <img :src="item.image1?`${apiBase}/${item.image1}`:`/logo/logo-01.png`" class="img-fluid" alt="Page Photo">
            </div>
            <div class="card-content">
              <h5 class="text-center">
                <span >{{ useName(item)}}</span>
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
  const { public: { api, apiBase } } = useRuntimeConfig();
  const showImageModal = ref(false);
  const selectedPhoto = ref(null);
  const router = useRouter()
  const props = defineProps(['items','menuId', 'baseUrl']);
  

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


.card-container {

  .card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 1.5rem;
    
    display: flex;
    aspect-ratio: 1/1.3;
    
    cursor: pointer;
    transition: all 100ms ease-in;
    &:hover {
      transform: scale(1.01);
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    }
    // width: 450px;
    // height: auto;
    // flex-direction: column;
    // overflow: hidden;
    .image-container{
      height: 80%;
      padding: 5px;
    }

    .card-content {
      padding: 1rem;
      h5 {
        margin: 21px;
        text-align: center;
        color: black;
        min-height: 3rem;
      }
    }


    // img {
    //   width: 100%;
    //   height: 320px;
    //   object-fit: cover;
    //   border-radius: 8px;
    //   border: 1px solid #777;
    // }

    .ellipsis {
      padding-bottom: 5px;
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

  }
  @media (max-width:400px){
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width:768px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width:992px){
    grid-template-columns: repeat(2, 1fr);
  }
}

.text-center {
  text-align: center;
}

</style>