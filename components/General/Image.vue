<template>
  <!-- <div> -->
    <GeneralVPlaceLoad v-if="!loaded" :width="width" :height="height" :classes="loadClasses" :light="light"/>
    <!-- <NuxtImg format="webp,avif" v-if="loaded" :id="id" :class="classes" :src="src" :alt="alt" @error="activeVPlaceLoad" :sytle="style" loading="lazy"/> -->
    <NuxtPicture v-if="loaded" :imgAttrs="{class:classes, id:id, sytle:style}" format="avif,webp" :src="src" :alt="alt" placeholder @error="activeVPlaceLoad" laoding="lazy" :nonce="nonce" />

  <!-- </div> -->
</template>

<script setup>
  const { src, width, height, id, classes, style, loadClasses, light, alt = 'Image' } = defineProps(['src', 'id', 'classes', 'style', 'width', 'height', 'loadClasses', 'light', 'alt']);
  const loaded = ref(false);
  const nonce = useNonce();
  
  const activeVPlaceLoad = (e) => {
    console.log('error loading image');
    loaded.value = false
  }

  onMounted(() => {
    useCheckIfImageRendered(src, (exists) => {
      if (exists) loaded.value = true;
      else loaded.value = false
    });
  })

</script>