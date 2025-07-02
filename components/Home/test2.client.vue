<template>
  <div class="globe-container">
    <canvas
      ref="canvasRef"
      @pointerdown="handlePointerDown"
      @pointerup="handlePointerUp"
      @pointerout="handlePointerUp"
      @mousemove="handleMouseMove"
      @touchmove="handleTouchMove"
      :style="canvasStyle"
    />
  </div>
</template>

<script setup>
// import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvasRef = ref(null)
const pointerInteracting = ref(null)
const pointerInteractionMovement = ref(0)
const r = ref(0)
const canvasStyle = ref({
  width: '100%',
  height: '100%',
  cursor: 'grab',
  contain: 'layout paint size',
  opacity: 0,
  transition: 'opacity 1s ease',
})

// Animation variables
let animationId = null
let lastTime = 0
const mass = 1
const tension = 280
const friction = 40
const precision = 0.001

const handlePointerDown = (e) => {
  pointerInteracting.value = e.clientX - pointerInteractionMovement.value
  canvasRef.value.style.cursor = 'grabbing'
}

const handlePointerUp = () => {
  pointerInteracting.value = null
  canvasRef.value.style.cursor = 'grab'
}

const handleMouseMove = (e) => {
  if (pointerInteracting.value !== null) {
    const delta = e.clientX - pointerInteracting.value
    pointerInteractionMovement.value = delta
    updateSpring(delta / 200)
  }
}

const handleTouchMove = (e) => {
  if (pointerInteracting.value !== null && e.touches[0]) {
    const delta = e.touches[0].clientX - pointerInteracting.value
    pointerInteractionMovement.value = delta
    updateSpring(delta / 100)
  }
}

const updateSpring = (target) => {
  cancelAnimationFrame(animationId)
  
  const animate = (time) => {
    if (!lastTime) lastTime = time
    const deltaTime = time - lastTime
    lastTime = time
    
    if (deltaTime > 0) {
      const velocity = (target - r.value) * tension - r.value * friction
      const acceleration = velocity / mass
      r.value += acceleration * (deltaTime / 1000)
      
      if (Math.abs(target - r.value) < precision && Math.abs(velocity) < precision) {
        r.value = target
      } else {
        animationId = requestAnimationFrame(animate)
      }
    } else {
      animationId = requestAnimationFrame(animate)
    }
  }
  
  animationId = requestAnimationFrame(animate)
}

onMounted(async () => {
  if (process.client) {
    const { default: createGlobe } = await import('cobe')
    
    let phi = 0
    let width = 0
    
    const onResize = () => {
      if (canvasRef.value) {
        width = canvasRef.value.offsetWidth
      }
    }
    
    window.addEventListener('resize', onResize)
    onResize()
    
    const globe = createGlobe(canvasRef.value, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [1.2, 1.2, 1.2],
      markers: [],
      onRender: (state) => {
        if (!pointerInteracting.value) {
          phi += 0.005
        }
        state.phi = phi + r.value
        state.width = width * 2
        state.height = width * 2
      }
    })
    
    setTimeout(() => {
      canvasRef.value.style.opacity = '1'
    })
    
    onBeforeUnmount(() => {
      globe.destroy()
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animationId)
    })
  }
})
</script>

<style scoped>
.globe-container {
  width: 100%;
  max-width: 600px;
  aspect-ratio: 1;
  margin: auto;
  position: relative;
}
</style>