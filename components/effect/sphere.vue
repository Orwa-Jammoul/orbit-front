<template>
  <canvas ref="canvas" class="fixed inset-0 w-full h-full -z-10" />
</template>

<script setup lang="ts">
import * as THREE from 'three'
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const canvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  if (!canvas.value) return

  // Scene setup
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: true
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Create grid sphere
  const geometry = new THREE.SphereGeometry(5, 32, 32)
  const wireframe = new THREE.WireframeGeometry(geometry)
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 })
  const lines = new THREE.LineSegments(wireframe, lineMaterial)
  scene.add(lines)

  // Add subtle ambient light
  const ambientLight = new THREE.AmbientLight(0x404040)
  scene.add(ambientLight)

  // Add directional light for better visibility
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
  directionalLight.position.set(1, 1, 1)
  scene.add(directionalLight)

  camera.position.z = 10

  // Mouse movement variables
  let mouseX = 0
  let mouseY = 0
  let targetRotationX = 0
  let targetRotationY = 0
  const rotationSpeed = 0.0005
  const dampingFactor = 0.05

  // Handle mouse movement
  const handleMouseMove = (event: MouseEvent) => {
    mouseX = (event.clientX - window.innerWidth / 2)
    mouseY = (event.clientY - window.innerHeight / 2)
  }

  window.addEventListener('mousemove', handleMouseMove)

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate)

    // Update target rotation based on mouse position
    targetRotationY = mouseX * rotationSpeed
    targetRotationX = mouseY * rotationSpeed

    // Apply damping for smooth rotation
    lines.rotation.y += (targetRotationY - lines.rotation.y) * dampingFactor
    lines.rotation.x += (targetRotationX - lines.rotation.x) * dampingFactor

    renderer.render(scene, camera)
  }

  // Handle window resize
  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  window.addEventListener('resize', handleResize)

  animate()

  // Cleanup
  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('resize', handleResize)
    renderer.dispose()
  })
})
</script>


<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/theme";
canvas {
  background-color: black;
  // position: fixed;
  // top: 0;
  // left: 0;
  // outline: none;
}
</style>