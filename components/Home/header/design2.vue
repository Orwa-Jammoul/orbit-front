<template>
  <div class="design-root">
    <div class="bg-section">
      <!-- Red loading div - shown while videos load -->
      <div v-if="!videosLoaded" class="loading-placeholder"></div>
      
      <!-- Videos - hidden until loaded -->
      <video 
        v-for="(video, index) in videoSources" 
        :key="index"
        :ref="el => { if (el) videoRefs[index] = el }"
        class="bg-video"
        :style="{ display: currentVideoIndex === index ? 'block' : 'none' }"
        muted
        playsinline
        preload="auto"
        @loadeddata="handleVideoLoaded"
      >
        <source :src="video.src" :type="video.type">
        Your browser does not support the video tag.
      </video>
    </div>
    <!-- Rest of your template -->
  </div>
</template>

<script setup>
// import { ref, onMounted, nextTick } from 'vue';

const videoSources = [
  // { src: '/videos/blackhole-02.mp4', type: 'video/mp4' },
  { src: '/videos/Orbit_Eng-01.mp4', type: 'video/mp4' },
  // { src: '/videos/blackhole-03.mp4', type: 'video/mp4' }
];

const videoRefs = ref([]);
const currentVideoIndex = ref(0);
const videosLoaded = ref(false);
const loadedVideoCount = ref(0);

const handleVideoLoaded = () => {
  loadedVideoCount.value++;
  if (loadedVideoCount.value === videoSources.length) {
    videosLoaded.value = true;
    playVideo(videoRefs.value[0]);
  }
};

const playVideo = async (video) => {
  try {
    await video.play();
  } catch (err) {
    console.error('Video play failed:', err);
    // Fallback: Show play button or handle error
  }
};

const playNextVideo = () => {
  currentVideoIndex.value = (currentVideoIndex.value + 1) % videoSources.length;
  nextTick(() => {
    playVideo(videoRefs.value[currentVideoIndex.value]);
  });
};

onMounted(() => {
  nextTick(() => {
    videoRefs.value.forEach(video => {
      video?.addEventListener('ended', playNextVideo);
    });
  });
});

onBeforeUnmount(() => {
  videoRefs.value.forEach(video => {
    video?.removeEventListener('ended', playNextVideo);
  });
});
</script>

<style lang="scss" scoped>
.design-root {
  position: relative;
  width: 100%;
  height: 100%;

  .loading-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: red;
    z-index: 10;
  }
  .bg-section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    .bg-video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .design-content{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    // align-items: center;

    padding: 5rem 3rem;
    .content-frame{
      width: max(35%, 20rem);
      height: 10rem;
      backdrop-filter: blur(10px);
      border-radius: 5px;
      // background-color: rgba(255, 255, 255, 0.1);
      padding: 1rem;
    }
  }
  .scroll-down {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    .scroll-text{
      font-size: 12px;
      font-weight: 100;
      margin-bottom: 0;
      mix-blend-mode: difference;
      &.letter-spacing{
        letter-spacing: 2px;
      }
    }
    .icon{
      mix-blend-mode: difference;
      margin-bottom: 1rem;
      animation: up-down 1s ease-in-out infinite;
    }
    
    // .bg-video {
    //   width: 100%;
    //   height: 100%;
    //   object-fit: cover;
    // }
  }
}

@keyframes up-down {
  0%{ transform: translateY(0);}
  50%{ transform: translateY(5px);}
  100%{ transform: translateY(0);}
}
</style>