<template>
  <div class="bg-black">
    <div 
      class="grid-container"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      :style="{
        'grid-template-columns': `repeat(${size}, ${cellSize}px)`,
        'grid-template-rows': `repeat(${size}, ${cellSize}px)`,
        'width': `${size * cellSize}px`,
        'height': `${size * cellSize}px`
      }"
    >
      <div 
        v-for="item in gridItems" 
        :key="item.id"
        class="grid-item"
        :style="{
          transform: `scale(${item.scale})`,
          opacity: item.opacity,
          backgroundColor: item.color,
          boxShadow: `0 0 ${item.glow * 10}px ${item.glow * 3}px ${item.color}`
        }"
      />
    </div>
  </div>
</template>

<script setup>
import anime from 'animejs/lib/anime.es.js'
import { ref, onMounted } from 'vue'

const props = defineProps({
  size: {
    type: Number,
    default: 10
  },
  cellSize: {
    type: Number,
    default: 20
  }
})

const gridItems = ref([])
const isHovered = ref(false)

onMounted(() => {
  initGrid()
  startBaseAnimation()
})

function initGrid() {
  gridItems.value = Array.from({ length: props.size * props.size }, (_, i) => ({
    id: i,
    opacity: 0.2,
    scale: 0.8,
    glow: 0,
    color: getNeonColor()
  }))
}

function getNeonColor() {
  const colors = [
    '#ff00ff', '#00ffff', '#ffff00',
    '#ff00aa', '#aa00ff', '#00ffaa'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

function startBaseAnimation() {
  // Continuous pulsing glow
  anime({
    targets: gridItems.value,
    glow: [0, 1],
    duration: 2000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true,
    delay: anime.stagger(30, {
      grid: [props.size, props.size],
      from: 'center'
    }),
    update: () => {
      gridItems.value = [...gridItems.value]
    }
  })

  // Random flickering
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * gridItems.value.length)
    anime({
      targets: gridItems.value[randomIndex],
      opacity: [0.2, 1],
      duration: 200,
      easing: 'easeOutQuad',
      complete: () => {
        anime({
          targets: gridItems.value[randomIndex],
          opacity: 0.2,
          duration: 800,
          easing: 'easeInQuad'
        })
      }
    })
  }, 100)
}

function onMouseEnter() {
  isHovered.value = true
  anime({
    targets: gridItems.value,
    scale: 1.2,
    duration: 500,
    easing: 'easeOutBack',
    delay: anime.stagger(20, {
      grid: [props.size, props.size],
      from: 'center'
    })
  })
}

function onMouseLeave() {
  isHovered.value = false
  anime({
    targets: gridItems.value,
    scale: 0.8,
    duration: 800,
    easing: 'easeInOutQuad'
  })
}
</script>

<style scoped>
.grid-container {
  display: grid;
  gap: 2px;
  /* background-color: #111; */
  padding: 15px;
  border-radius: 4px;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.3s ease;
}

.grid-item {
  border-radius: 1px;
  will-change: transform, opacity, box-shadow;
  transition: all 0.2s ease;
}

.grid-container:hover {
  transform: scale(1.02);
}
</style>