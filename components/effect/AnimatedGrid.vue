<template>
  <div class="grid-container">
    <div 
      v-for="(item, index) in gridItems" 
      :key="index" 
      class="grid-item" 
      :style="{ backgroundColor: item.color }"
      @mouseenter="animateItem(index)"
      @click="shuffleColors"
      ></div>
  </div>
</template>

<script setup>

import anime from 'animejs/lib/anime.es.js'

const gridSize = 10 // 10x10 grid
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFBE0B', '#FB5607', '#8338EC']

const gridItems = ref([])

// Initialize grid
const initializeGrid = () => {
  gridItems.value = Array.from({ length: gridSize * gridSize }, () => ({
    color: colors[Math.floor(Math.random() * colors.length)],
    scale: 1,
    rotation: 0
  }))
}

// Animate individual item on hover
const animateItem = (index) => {
  anime({
    targets: `.grid-item:nth-child(${index + 1})`,
    scale: 1.2,
    borderRadius: ['0%', '50%'],
    duration: 500,
    easing: 'easeOutElastic(1, .8)',
    direction: 'alternate',
    complete: () => {
      anime({
        targets: `.grid-item:nth-child(${index + 1})`,
        scale: 1,
        borderRadius: '0%',
        duration: 800,
        easing: 'easeOutElastic(1, .8)'
      })
    }
  })
}

// Shuffle colors on click
const shuffleColors = () => {
  anime({
    targets: '.grid-item',
    backgroundColor: () => colors[Math.floor(Math.random() * colors.length)],
    delay: anime.stagger(20, { grid: [gridSize, gridSize], from: 'center' }),
    duration: 1000,
    easing: 'easeOutQuad'
  })

  // Add a wave effect
  anime({
    targets: '.grid-item',
    translateY: [
      { value: -10, duration: 100, delay: anime.stagger(50) },
      { value: 0, duration: 500 }
    ],
    easing: 'easeOutElastic(1, .8)'
  })
}

// Initial animation when component mounts
onMounted(() => {
  initializeGrid()

  anime({
    targets: '.grid-item',
    opacity: [0, 1],
    scale: [0.5, 1],
    delay: anime.stagger(50, { grid: [gridSize, gridSize], from: 'center' }),
    duration: 1000,
    easing: 'easeOutElastic(1, .8)'
  })
})
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 8px;
  width: 600px;
  height: 600px;
  margin: 0 auto;
  padding: 20px;
}

.grid-item {
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: transform 0.3s ease;
  will-change: transform;
}

.grid-item:hover {
  z-index: 1;
}
</style>