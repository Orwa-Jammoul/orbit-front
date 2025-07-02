<template>
  <div ref="container" class="shader-container" />
</template>

<script setup lang="ts">
import * as THREE from 'three'
// import { onMounted, onUnmounted, ref } from 'vue'

const container = ref<HTMLElement | null>(null)

// Shader code
const vertexShader = `
  uniform float time;

  varying vec2 vUv;
  varying float vD;


  vec3 mod289(vec3 x)
  {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 mod289(vec4 x)
  {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 permute(vec4 x)
  {
    return mod289(((x*34.0)+1.0)*x);
  }

  vec4 taylorInvSqrt(vec4 r)
  {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  vec3 fade(vec3 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
  }

  // Classic Perlin noise
  float p_noise(vec3 P)
  {
    vec3 Pi0 = floor(P); // Integer part for indexing
    vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
  }

  
  void main() {
    vUv = uv;
    vec3 coords = normal;
    float d = p_noise(coords);
    
    // float d = uv.y;
    d = sin(d * 20.0 + time)/1.5;
    d = abs(d);
    d = 0.04 / d;
    d = smoothstep(0.5, 0.55, d);
    vD = d;

    // vec3 displacedPosition = position + normal * d * 0.1;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    //============
    // vUv = uv;

    // float d = length( vec2(2.0*(vUv.x -.5), 2.0*(vUv.y)) );
    // d = sin(d * 10.0 + time)/2.0;
    // d = abs(d);
    // d = 0.04 / d;
    // d = smoothstep(0.1, 0.9, d);
    // vD = d;

    // vec3 displacedPosition = position + normal * d * 0.1;

    // gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
  }
`

const fragmentShader = `
  uniform float time;
  uniform vec2 resolution;
  varying vec2 vUv;
  varying float vD;
  
  void main() {

    // vec2 uv = 2.0*(vUv -.5);
    vec2 uv = vec2(2.0*(vUv.x -.5), 2.0*(vUv.y));

    float d = length(uv);
    d = sin(d * 5.0 + time)/2.0;
    d = abs(d);
    d = 0.04 / d;

    
    gl_FragColor = vec4(vec3(vD), 0);
  }
`

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let mesh: THREE.Mesh
let clock: THREE.Clock
let animationId: number

onMounted(() => {
  if (!container.value) return

  // window.addEventListener('mousemove', handleMouseMove)
  
  // Initialize Three.js
  initThreeJS()
  animate()
})

onUnmounted(() => {
  // Cleanup
  cancelAnimationFrame(animationId)
  if (renderer) {
    renderer.dispose()
  }
  window.removeEventListener('resize', onWindowResize)
})

function initThreeJS() {
  // Scene
  scene = new THREE.Scene()

  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 1.8

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth/2, window.innerHeight/2)
  container.value?.appendChild(renderer.domElement)

  // Clock for animations
  clock = new THREE.Clock()

  // Create shader material
  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
    },
    vertexShader,
    fragmentShader,
    side: THREE.DoubleSide
  })

  // Geometry - smaller sphere
  // const geometry = new THREE.PlaneGeometry(1,1)
  // const geometry = new THREE.SphereGeometry(1, 512, 512)
  const geometry = new THREE.IcosahedronGeometry(1, 300); // Subdivisions = 5
  // console.log(geometry);
  mesh = new THREE.Mesh(geometry, shaderMaterial)
  scene.add(mesh)

  // Handle window resize
  window.addEventListener('resize', onWindowResize)
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth/2, window.innerHeight/2)
  
  // Update shader resolution uniform
  if (mesh.material instanceof THREE.ShaderMaterial) {
    mesh.material.uniforms.resolution.value.set(window.innerWidth, window.innerHeight)
  }
}

// // Smooth rotation variables
// let targetRotationX = 0
// let targetRotationY = 0
// let currentRotationX = 0
// let currentRotationY = 0
// const easingFactor = 0.05

// // Mouse movement handler
// const handleMouseMove = (event: MouseEvent) => {
//   // Normalize mouse coordinates to -1 to 1 range
//   // targetRotationX = 0;
//   targetRotationX = (event.clientY / window.innerHeight) * 2 - 1;
//   targetRotationY = -(event.clientX / window.innerWidth) * 2 + 1
// }



function animate() {
  animationId = requestAnimationFrame(animate)
  
  // Update shader time uniform and rotate mesh
  if (mesh?.material instanceof THREE.ShaderMaterial) {
    mesh.material.uniforms.time.value = clock.getElapsedTime()
    mesh.rotation.x += 0.005
    mesh.rotation.y += 0.01


    // Smooth interpolation
    // currentRotationX += (targetRotationX - currentRotationX) * easingFactor
    // currentRotationY += (targetRotationY - currentRotationY) * easingFactor

    // // Apply rotation (adjust multiplier for sensitivity)
    // mesh.rotation.x += currentRotationX * Math.PI * 0.2 / 20 + 0.001
    // mesh.rotation.y += currentRotationY * Math.PI * 0.2 /20 + 0.001

  }
  
  renderer.render(scene, camera)
}
</script>

<style lang="scss" scoped>
.shader-container {
  // position: fixed;
  // top: 0;
  // left: 0;
  width: 100%;
  // height: 2rem !important;
  display: flex;
  justify-content: center;
  z-index: 0;
  background: black; // Optional: set a background color
}
</style>