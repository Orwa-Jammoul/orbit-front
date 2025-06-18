<template>
  <div class="dark-bg">
    <div class="grid-container">
      <div 
        v-for="(cell, index) in cells" 
        :key="index"
        class="glow-cell"
        :style="{
          '--glow-intensity': cell.glow,
          transform: `rotate(${cell.rotation}deg) scale(${cell.scale})`
        }"
        @mouseenter="pulseCell(index)"
        @click="rippleEffect(index)"
      />
    </div>
  </div>
</template>

<script setup>
import anime from 'animejs/lib/anime.es.js'

const COLS = 16
const ROWS = 10
const BLUE = '#29abe2'

// Cell data
const cells = ref(
  Array.from({ length: COLS * ROWS }, () => ({
    scale: 1,
    rotation: 0,
    glow: 0.3 + Math.random() * 0.7
  }))
)

// Initialize with floating animation
onMounted(() => {
  anime({
    targets: '.glow-cell',
    scale: [0.8, 1],
    opacity: [0, 1],
    glow: {
      value: [0, (_, i) => 0.5 + (i % 3) * 0.5],
      easing: 'easeOutQuad'
    },
    delay: anime.stagger(30, {
      grid: [COLS, ROWS],
      from: 'center'
    }),
    duration: 1500,
    easing: 'easeOutElastic(1, .6)'
  })

  // Continuous subtle pulse
  anime({
    targets: '.glow-cell',
    glow: [0.7, 1],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
    duration: 3000,
    delay: anime.stagger(100, {grid: [COLS, ROWS]})
  })
})

// Cell hover effect
const pulseCell = (index) => {
  anime({
    targets: `.glow-cell:nth-child(${index + 1})`,
    scale: 1.2,
    glow: 1.5,
    duration: 400,
    easing: 'easeOutExpo'
  })
}

// Ripple effect on click
const rippleEffect = (originIndex) => {
  const cols = COLS
  const rows = ROWS
  const originCol = originIndex % cols
  const originRow = Math.floor(originIndex / cols)

  anime({
    targets: '.glow-cell',
    scale: (el, i) => {
      const col = i % cols
      const row = Math.floor(i / cols)
      const distance = Math.sqrt(
        Math.pow(col - originCol, 2) + 
        Math.pow(row - originRow, 2)
      )
      return 1 + Math.max(0, (3 - distance) * 0.3)
    },
    glow: (el, i) => {
      const col = i % cols
      const row = Math.floor(i / cols)
      const distance = Math.sqrt(
        Math.pow(col - originCol, 2) + 
        Math.pow(row - originRow, 2)
      )
      return 1 + Math.max(0, (4 - distance) * 0.4)
    },
    delay: (el, i) => {
      const col = i % cols
      const row = Math.floor(i / cols)
      const distance = Math.sqrt(
        Math.pow(col - originCol, 2) + 
        Math.pow(row - originRow, 2)
      )
      return distance * 20
    },
    duration: 800,
    easing: 'easeOutElastic(1, .6)'
  })
}
</script>

<style lang="scss" scoped>
.dark-bg {
  background-color: #000;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem; /* Increased from 2rem to 4rem */
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 1200px;
  // gap: 24px; // Increased from 12px to 24px
  // width: 100%;
  // max-width: 1400px; // Increased from 1200px to accommodate larger gaps 
}

.glow-cell {
  aspect-ratio: 1;
  background-color: #29abe2;
  border-radius: 4px;
  opacity: 0.9;
  box-shadow: 
    0 0 calc(var(--glow-intensity, 0.5) * 10px) #29abe2,
    0 0 calc(var(--glow-intensity, 0.5) * 20px) rgba(41, 171, 226, 0.4);
  transition: 
    transform 0.3s ease-out,
    box-shadow 0.3s ease-out;
  will-change: transform, box-shadow;
  cursor: pointer;
}

.glow-cell:hover {
  z-index: 10;
}
</style>