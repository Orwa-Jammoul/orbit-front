<template>
  <div class="container">
    <h1 class="title">Interactive Anime.js Grid</h1>
    <div class="grid">
      <div 
        v-for="(cell, index) in gridCells" 
        :key="index"
        class="cell"
        :style="{
          backgroundColor: cell.color,
          transform: `rotate(${cell.rotation}deg) scale(${cell.scale})`
        }"
        @mouseenter="animateCell(index)"
        @click="explodeGrid"
      />
    </div>
    <button class="reset-btn" @click="resetGrid">Reset Animation</button>
  </div>
</template>

<script setup>
import anime from 'animejs/lib/anime.es.js'

// Grid configuration
const gridSize = { rows: 8, cols: 12 }
const colors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', 
  '#FFBE0B', '#FB5607', '#8338EC',
  '#3A86FF', '#FF006E'
]

// Cell data structure
const gridCells = ref(
  Array.from({ length: gridSize.rows * gridSize.cols }, () => ({
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: 0,
    scale: 1
  }))
)

// Initialize animation on mount
onMounted(() => {
  anime({
    targets: '.cell',
    opacity: [0, 1],
    scale: [0.8, 1],
    rotate: () => anime.random(-180, 180),
    delay: anime.stagger(30, {
      grid: [gridSize.cols, gridSize.rows],
      from: 'center'
    }),
    duration: 1500,
    easing: 'spring(1, 80, 10, 0)'
  })
})

// Hover animation for individual cells
const animateCell = (index) => {
  anime({
    targets: `.cell:nth-child(${index + 1})`,
    scale: 1.2,
    rotate: () => anime.random(-15, 15),
    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
    duration: 800,
    easing: 'easeOutElastic(1, .8)'
  })
}

// Explode effect on click
const explodeGrid = () => {
  anime({
    targets: '.cell',
    translateX: () => anime.random(-200, 200),
    translateY: () => anime.random(-200, 200),
    rotate: () => anime.random(-360, 360),
    scale: () => anime.random(0.5, 1.5),
    backgroundColor: () => colors[Math.floor(Math.random() * colors.length)],
    delay: anime.stagger(10, { grid: [gridSize.cols, gridSize.rows], from: 'center' }),
    duration: 1200,
    easing: 'easeOutExpo',
    complete: () => {
      anime({
        targets: '.cell',
        translateX: 0,
        translateY: 0,
        duration: 800,
        easing: 'spring(1, 80, 10, 0)'
      })
    }
  })
}

// Reset grid to initial state
const resetGrid = () => {
  anime({
    targets: '.cell',
    scale: 1,
    rotate: 0,
    backgroundColor: () => colors[Math.floor(Math.random() * colors.length)],
    delay: anime.stagger(20, { grid: [gridSize.cols, gridSize.rows], from: 'first' }),
    duration: 1000,
    easing: 'easeOutElastic(1, .8)'
  })
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  font-weight: 700;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 12px;
  margin-bottom: 2rem;
}

.cell {
  aspect-ratio: 1;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
  will-change: transform;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cell:hover {
  z-index: 10;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.reset-btn {
  padding: 0.75rem 1.5rem;
  background-color: #4ECDC4;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reset-btn:hover {
  background-color: #3aa8a0;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>