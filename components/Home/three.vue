<template>
  <div ref="container" class="three-container"></div>
</template>

<script setup>
import * as THREE from 'three';

import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const container = ref(null);

// Variables to track cursor position
const cursor = ref({ x: 0, y: 0 });

let scene, camera, renderer, sphere;

let moon1;
let orbitRadius = 10;
let orbitAn = 0;
let orbitAnSpeed = 0.01;



onMounted(() => {
  // Set up the scene, camera, and renderer
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, container.value.clientWidth / container.value.clientHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  container.value.appendChild(renderer.domElement);

  const controls = new OrbitControls( camera, renderer.domElement );
  controls.enableZoom = false;
  let gui;

  const textureLoader = new THREE.TextureLoader();
  const envMap = textureLoader.load('/header/01.jpg');
  // const hdrTexture = new THREE.TextureLoader();
  // const loader = new THREE.RGBELoader();
  // loader.load(
  // '/header/01.hdr',
  // (texture) => {
  //   texture.mapping = THREE.EquirectangularReflectionMapping;
  //   scene.background = texture;
  //   scene.environment = texture;
  // })



  

  // Add lighting to the scene
  const ambientLight = new THREE.AmbientLight(0xffffff, .5); // Soft white light
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 500); // Bright white light
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  renderer.shadowMap.enabled = true;
  pointLight.castShadow = true;
  
  

  // Create a sphere
  const geometry = new THREE.SphereGeometry(5, 32, 32);
  // const material = new THREE.MeshStandardMaterial({ 
  const material = new THREE.MeshPhysicalMaterial({ 
    // color: 0x29abe2,
    // shininess: 100, // How shiny the surface is
    // specular: 0xffffff, // Highlight color
    roughness: 0, // Controls how rough the surface appears
    metalness: 0, // Controls how metallic the surface appears
    transmission: .5,
    // map: envMap,
    // wireframe: true 
  });
  // material.envMap = envMap;
  sphere = new THREE.Mesh(geometry, material);
  sphere.castShadow = true;
  scene.add(sphere);

  const gMoon1 = new THREE.SphereGeometry(1, 20, 20);
  const mMoon1 = new THREE.MeshStandardMaterial({ 
    color: 0xffffff, 
    roughness: 0, // Controls how rough the surface appears
    metalness: 0.5, // Controls how metallic the surface appears
    // shininess: 100, // How shiny the surface is
    // specular: 0xffffff, // Highlight color
    // wireframe: true
  });
  moon1 = new THREE.Mesh(gMoon1, mMoon1);
  moon1.castShadow = true;

  // moon1.position.x = -10
  // moon1.position.z = 4
  scene.add(moon1);

  // Position the camera
  camera.position.z = 15;


  const API = {
    speed: 0.1,
    directionalLightIntensity: 0.6,
    envMapIntensity: 1
  };

  gui = new GUI( { title: 'test' } );

  gui.add( API, 'speed', 0, 1, 0.02 )
  .name( 'speed' )
  .onChange( ()=>{
    orbitAnSpeed = API.speed * 0.1;
  } );

  // Add mousemove event listener to track cursor position
  // const onMouseMove = (event) => {
  //   // Normalize cursor position to [-1, 1] range
  //   cursor.value.x = (event.clientX / window.innerWidth) * 2 - 1;
  //   cursor.value.y = -(event.clientY / window.innerHeight) * 2 + 1;
  // };
  // window.addEventListener('mousemove', onMouseMove);

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);

    // Update camera position based on cursor position
    // camera.position.y = Math.sin(cursor.value.x *2) * 20; // Adjust multiplier for sensitivity
    // camera.position.z = Math.cos(cursor.value.x *2) * 20; // Adjust multiplier for sensitivity

    // Ensure the camera looks at the center of the scene
    camera.lookAt(scene.position);

    // Rotate the sphere
    // sphere.rotation.x += 0.01;
    // sphere.rotation.y += 0.01;


    moon1.rotation.x += 0.01;
    moon1.rotation.y += 0.01;

    orbitAn += orbitAnSpeed;
    moon1.position.x = Math.cos(orbitAn) * orbitRadius;
    moon1.position.z = Math.sin(orbitAn) * orbitRadius;

    renderer.render(scene, camera);
  };

  animate();
});

// not necessary
onBeforeUnmount(() => {
  // Clean up the Three.js scene
  if (renderer) {
    renderer.dispose();
  }
  if (scene) {
    scene.traverse((object) => {
      if (object.isMesh) {
        object.geometry.dispose();
        object.material.dispose();
      }
    });
  }
});
</script>

<style lang="scss" scoped>
.three-container {
  width: 100%;
  height: 100vh;
}
</style>