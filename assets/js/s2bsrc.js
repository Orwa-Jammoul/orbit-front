import {
  Clock as Timer,
  PerspectiveCamera as Camera,
  Scene as Scene,
  WebGLRenderer as Renderer,
  SRGBColorSpace as ColorSpace,
  MathUtils as MathUtils,
  Vector2 as Vector2,
  Vector3 as Vector3,
  MeshPhysicalMaterial as PhysicalMaterial,
  ShaderChunk as ShaderChunk,
  Color as Color,
  Object3D as Object3D,
  InstancedMesh as InstancedMesh,
  SphereGeometry as SphereGeometry,
  PointLight as PointLight,
  DirectionalLight as DirectionalLight,
  PCFSoftShadowMap as ShadowMap,
  ACESFilmicToneMapping as ToneMapping,
  PMREMGenerator as PMREMGenerator,
  Raycaster as Raycaster,
  Plane as Plane
} from "three";
// } from "https://cdn.jsdelivr.net/npm/three@0.170.0/+esm";

// import { RoomEnvironment as RoomEnvironment } from "https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/environments/RoomEnvironment.js/+esm";

import {
  // Scene,
  // PointLight,
  BoxGeometry,
  MeshStandardMaterial,
  BackSide,
  Mesh,
  MeshBasicMaterial,
} from "three";
// } from "/npm/three@0.170.0/+esm";

class RoomEnvironment extends Scene {
  constructor() {
    super();

    // Create a box geometry and remove UV attribute
    const boxGeometry = new BoxGeometry();
    boxGeometry.deleteAttribute("uv");

    // Materials
    const backSideMaterial = new MeshStandardMaterial({ side: BackSide });
    const standardMaterial = new MeshStandardMaterial();

    // Point light
    const pointLight = new PointLight(0xffffff, 900, 28, 2);
    pointLight.position.set(0.418, 16.199, 0.3);
    this.add(pointLight);

    // Create meshes with different positions, rotations, and scales
    const mesh1 = new Mesh(boxGeometry, backSideMaterial);
    mesh1.position.set(-0.757, 13.219, 0.717);
    mesh1.scale.set(31.713, 28.305, 28.591);
    this.add(mesh1);

    const mesh2 = new Mesh(boxGeometry, standardMaterial);
    mesh2.position.set(-10.906, 2.009, 1.846);
    mesh2.rotation.set(0, -0.195, 0);
    mesh2.scale.set(2.328, 7.905, 4.651);
    this.add(mesh2);

    const mesh3 = new Mesh(boxGeometry, standardMaterial);
    mesh3.position.set(-5.607, -0.754, -0.758);
    mesh3.rotation.set(0, 0.994, 0);
    mesh3.scale.set(1.97, 1.534, 3.955);
    this.add(mesh3);

    const mesh4 = new Mesh(boxGeometry, standardMaterial);
    mesh4.position.set(6.167, 0.857, 7.803);
    mesh4.rotation.set(0, 0.561, 0);
    mesh4.scale.set(3.927, 6.285, 3.687);
    this.add(mesh4);

    const mesh5 = new Mesh(boxGeometry, standardMaterial);
    mesh5.position.set(-2.017, 0.018, 6.124);
    mesh5.rotation.set(0, 0.333, 0);
    mesh5.scale.set(2.002, 4.566, 2.064);
    this.add(mesh5);

    const mesh6 = new Mesh(boxGeometry, standardMaterial);
    mesh6.position.set(2.291, -0.756, -2.621);
    mesh6.rotation.set(0, -0.286, 0);
    mesh6.scale.set(1.546, 1.552, 1.496);
    this.add(mesh6);

    const mesh7 = new Mesh(boxGeometry, standardMaterial);
    mesh7.position.set(-2.193, -0.369, -5.547);
    mesh7.rotation.set(0, 0.516, 0);
    mesh7.scale.set(3.875, 3.487, 2.986);
    this.add(mesh7);

    // Create meshes with custom colors
    const mesh8 = new Mesh(boxGeometry, createColoredMaterial(50));
    mesh8.position.set(-16.116, 14.37, 8.208);
    mesh8.scale.set(0.1, 2.428, 2.739);
    this.add(mesh8);

    const mesh9 = new Mesh(boxGeometry, createColoredMaterial(50));
    mesh9.position.set(-16.109, 18.021, -8.207);
    mesh9.scale.set(0.1, 2.425, 2.751);
    this.add(mesh9);

    const mesh10 = new Mesh(boxGeometry, createColoredMaterial(17));
    mesh10.position.set(14.904, 12.198, -1.832);
    mesh10.scale.set(0.15, 4.265, 6.331);
    this.add(mesh10);

    const mesh11 = new Mesh(boxGeometry, createColoredMaterial(43));
    mesh11.position.set(-0.462, 8.89, 14.52);
    mesh11.scale.set(4.38, 5.441, 0.088);
    this.add(mesh11);

    const mesh12 = new Mesh(boxGeometry, createColoredMaterial(20));
    mesh12.position.set(3.235, 11.486, -12.541);
    mesh12.scale.set(2.5, 2, 0.1);
    this.add(mesh12);

    const mesh13 = new Mesh(boxGeometry, createColoredMaterial(100));
    mesh13.position.set(0, 20, 0);
    mesh13.scale.set(1, 0.1, 1);
    this.add(mesh13);
  }

  dispose() {
    const resources = new Set();
    this.traverse((object) => {
      if (object.isMesh) {
        resources.add(object.geometry);
        resources.add(object.material);
      }
    });

    for (const resource of resources) {
      resource.dispose();
    }
  }
}

function createColoredMaterial(scalarValue) {
  const material = new MeshBasicMaterial();
  material.color.setScalar(scalarValue);
  return material;
}

// export { RoomEnvironment };




//==========================


// Main Three.js Application Class
class ThreeApp {
  #config;
  canvas;
  camera;
  cameraMinAspect;
  cameraMaxAspect;
  cameraFov;
  maxPixelRatio;
  minPixelRatio;
  scene;
  renderer;
  #postProcessing;
  size = { width: 0, height: 0, wWidth: 0, wHeight: 0, ratio: 0, pixelRatio: 0 };
  render = this.#renderLoop;
  onBeforeRender = () => {};
  onAfterRender = () => {};
  onAfterResize = () => {};
  #isIntersecting = false;
  #isAnimating = false;
  isDisposed = false;
  #resizeObserver;
  #intersectionObserver;
  #resizeTimeout;
  #timer = new Timer();
  #frameId;
  #animationState = { elapsed: 0, delta: 0 };

  constructor(config) {
    this.#config = { ...config };
    this.#initializeCamera();
    this.#initializeScene();
    this.#initializeRenderer();
    this.resize();
    this.#setupEventListeners();
  }

  #initializeCamera() {
    this.camera = new Camera();
    this.cameraFov = this.camera.fov;
  }

  #initializeScene() {
    this.scene = new Scene();
  }

  #initializeRenderer() {
    if (this.#config.canvas) {
      this.canvas = this.#config.canvas;
    } else if (this.#config.id) {
      this.canvas = document.getElementById(this.#config.id);
    } else {
      console.error("Three: Missing canvas or id parameter");
    }

    this.canvas.style.display = "block";

    const rendererOptions = {
      canvas: this.canvas,
      powerPreference: "high-performance",
      ...this.#config.rendererOptions ?? {}
    };

    this.renderer = new Renderer(rendererOptions);
    this.renderer.outputColorSpace = ColorSpace;
  }

  #setupEventListeners() {
    if (!(this.#config.size instanceof Object)) {
      window.addEventListener("resize", this.#handleResize.bind(this));

      if (this.#config.size === "parent") {
        this.#resizeObserver = new ResizeObserver(this.#handleResize.bind(this));
        this.#resizeObserver.observe(this.canvas.parentNode);
      }
    }

    this.#intersectionObserver = new IntersectionObserver(this.#handleIntersection.bind(this), {
      root: null,
      rootMargin: "0px",
      threshold: 0
    });

    this.#intersectionObserver.observe(this.canvas);
    document.addEventListener("visibilitychange", this.#handleVisibilityChange.bind(this));
  }

  #cleanupEventListeners() {
    window.removeEventListener("resize", this.#handleResize.bind(this));
    this.#resizeObserver?.disconnect();
    this.#intersectionObserver?.disconnect();
    document.removeEventListener("visibilitychange", this.#handleVisibilityChange.bind(this));
  }

  #handleIntersection(entries) {
    this.#isIntersecting = entries[0].isIntersecting;
    this.#isIntersecting ? this.#startAnimation() : this.#stopAnimation();
  }

  #handleVisibilityChange(event) {
    if (this.#isIntersecting) {
      document.hidden ? this.#stopAnimation() : this.#startAnimation();
    }
  }

  #handleResize() {
    if (this.#resizeTimeout) clearTimeout(this.#resizeTimeout);
    this.#resizeTimeout = setTimeout(this.resize.bind(this), 100);
  }

  resize() {
    let width, height;

    if (this.#config.size instanceof Object) {
      width = this.#config.size.width;
      height = this.#config.size.height;
    } else if (this.#config.size === "parent" && this.canvas.parentNode) {
      width = this.canvas.parentNode.offsetWidth;
      height = this.canvas.parentNode.offsetHeight;
    } else {
      width = window.innerWidth;
      height = window.innerHeight;
    }

    this.size.width = width;
    this.size.height = height;
    this.size.ratio = width / height;

    this.#updateCamera();
    this.#updateRenderer();
    this.onAfterResize(this.size);
  }

  #updateCamera() {
    this.camera.aspect = this.size.width / this.size.height;

    if (this.camera.isPerspectiveCamera && this.cameraFov) {
      if (this.cameraMinAspect && this.camera.aspect < this.cameraMinAspect) {
        this.#adjustCameraFov(this.cameraMinAspect);
      } else if (this.cameraMaxAspect && this.camera.aspect > this.cameraMaxAspect) {
        this.#adjustCameraFov(this.cameraMaxAspect);
      } else {
        this.camera.fov = this.cameraFov;
      }
    }

    this.camera.updateProjectionMatrix();
    this.updateWorldSize();
  }

  #adjustCameraFov(targetAspect) {
    const fov = 2 * MathUtils.radToDeg(Math.atan(Math.tan(MathUtils.degToRad(this.cameraFov / 2)) / (this.camera.aspect / targetAspect)));
    this.camera.fov = fov;
  }

  updateWorldSize() {
    if (this.camera.isPerspectiveCamera) {
      const fovRad = this.camera.fov * Math.PI / 180;
      this.size.wHeight = 2 * Math.tan(fovRad / 2) * this.camera.position.length();
      this.size.wWidth = this.size.wHeight * this.camera.aspect;
    } else if (this.camera.isOrthographicCamera) {
      this.size.wHeight = this.camera.top - this.camera.bottom;
      this.size.wWidth = this.camera.right - this.camera.left;
    }
  }

  #updateRenderer() {
    this.renderer.setSize(this.size.width, this.size.height);
    this.#postProcessing?.setSize(this.size.width, this.size.height);

    let pixelRatio = window.devicePixelRatio;

    if (this.maxPixelRatio && pixelRatio > this.maxPixelRatio) {
      pixelRatio = this.maxPixelRatio;
    } else if (this.minPixelRatio && pixelRatio < this.minPixelRatio) {
      pixelRatio = this.minPixelRatio;
    }

    this.renderer.setPixelRatio(pixelRatio);
    this.size.pixelRatio = pixelRatio;
  }

  get postprocessing() {
    return this.#postProcessing;
  }

  set postprocessing(value) {
    this.#postProcessing = value;
  }

  #startAnimation() {
    if (this.#isAnimating) return;

    const animate = () => {
      this.#frameId = requestAnimationFrame(animate);
      this.#animationState.delta = this.#timer.getDelta();
      this.#animationState.elapsed += this.#animationState.delta;

      this.onBeforeRender(this.#animationState);
      this.render();
      this.onAfterRender(this.#animationState);
    };

    this.#isAnimating = true;
    this.#timer.start();
    animate();
  }

  #stopAnimation() {
    if (this.#isAnimating) {
      cancelAnimationFrame(this.#frameId);
      this.#isAnimating = false;
      this.#timer.stop();
    }
  }

  #renderLoop() {
    this.renderer.render(this.scene, this.camera);
  }

  clear() {
    this.scene.traverse((object) => {
      if (object.isMesh && typeof object.material === "object") {
        Object.keys(object.material).forEach((key) => {
          const value = object.material[key];
          if (value !== null && typeof value === "object" && typeof value.dispose === "function") {
            value.dispose();
          }
        });

        object.material.dispose();
        object.geometry.dispose();
      }
    });

    this.scene.clear();
  }

  dispose() {
    this.#cleanupEventListeners();
    this.#stopAnimation();
    this.clear();
    this.renderer.dispose();
    this.isDisposed = true;
  }
}

// Interaction Manager
const interactionMap = new Map();
const pointerPosition = new Vector2();
// pointerPosition.x = 1000;
// pointerPosition.y = 400;
// const pointerPosition = new Vector2(1000,400);
let isInteractionEnabled = false;

function createInteraction(config) {
  const interaction = {
    position: new Vector2(),
    nPosition: new Vector2(),
    hover: false,
    onEnter() {},
    onMove() {},
    onClick() {},
    onLeave() {},
    ...config
  };

  function registerInteraction(element, interaction) {
    if (!interactionMap.has(element)) {
      interactionMap.set(element, interaction);

      if (!isInteractionEnabled) {
        document.body.addEventListener("pointermove", handlePointerMove);
        // document.body.addEventListener("pointerleave", handlePointerLeave);
        // document.body.addEventListener("click", handleClick);
        isInteractionEnabled = true;
      }
    }
  }

  registerInteraction(config.domElement, interaction);

  interaction.dispose = () => {
    interactionMap.delete(config.domElement);

    if (interactionMap.size === 0) {
      document.body.removeEventListener("pointermove", handlePointerMove);
      document.body.removeEventListener("pointerleave", handlePointerLeave);
      isInteractionEnabled = false;
    }
  };

  return interaction;
}

function handlePointerMove(event) {
  // pointerPosition.x = event.clientX;
  // pointerPosition.y = event.clientY;
  pointerPosition.x = 1000;
  pointerPosition.y = 500;

  for (const [element, interaction] of interactionMap) {
    const rect = element.getBoundingClientRect();

    if (isPointerInside(rect)) {
      updateInteractionPosition(interaction, rect);

      if (!interaction.hover) {
        interaction.hover = true;
        interaction.onEnter(interaction);
      }

      interaction.onMove(interaction);
    } else if (interaction.hover) {
      interaction.hover = false;
      interaction.onLeave(interaction);
    }
  }
}

function handleClick(event) {
  pointerPosition.x = 1000;
  pointerPosition.y = 500;

  for (const [element, interaction] of interactionMap) {
    const rect = element.getBoundingClientRect();
    updateInteractionPosition(interaction, rect);

    if (isPointerInside(rect)) {
      interaction.onClick(interaction);
    }
  }
}

function handlePointerLeave() {
  for (const interaction of interactionMap.values()) {
    if (interaction.hover) {
      interaction.hover = false;
      interaction.onLeave(interaction);
    }
  }
}

function updateInteractionPosition(interaction, rect) {
  const { position, nPosition } = interaction;
  position.x = pointerPosition.x - rect.left;
  position.y = pointerPosition.y - rect.top;
  nPosition.x = (position.x / rect.width) * 2 - 1;
  nPosition.y = -(position.y / rect.height) * 2 + 1;
}

function isPointerInside(rect) {
  const { x, y } = pointerPosition;
  return x >= rect.left && x <= rect.left + rect.width && y >= rect.top && y <= rect.top + rect.height;
}

// Physics and Particle System
const tempVector1 = new Vector3();
const tempVector2 = new Vector3();
const tempVector3 = new Vector3();
const tempVector4 = new Vector3();
const tempVector5 = new Vector3();
const tempVector6 = new Vector3();
const tempVector7 = new Vector3();
const tempVector8 = new Vector3();
const tempVector9 = new Vector3();

class PhysicsSystem {
  constructor(config) {
    this.config = config;
    this.positionData = new Float32Array(3 * config.count).fill(0);
    this.velocityData = new Float32Array(3 * config.count).fill(0);
    this.sizeData = new Float32Array(config.count).fill(1);
    this.center = new Vector3();
    this.randomPositions();
  }

  randomPositions() {
    const { config, positionData, sizeData } = this;
    this.center.toArray(positionData, 0);
    sizeData[0] = config.size0;

    for (let i = 1; i < this.config.count; i++) {
      const index = 3 * i;
      positionData[index] = MathUtils.randFloatSpread(10);
      positionData[index + 1] = MathUtils.randFloatSpread(10);
      positionData[index + 2] = MathUtils.randFloatSpread(10);
      sizeData[i] = MathUtils.randFloat(config.minSize, config.maxSize);
    }
  }

  update(state) {
    const { config, center, positionData, sizeData, velocityData } = this;
    tempVector1.fromArray(positionData, 0);
    tempVector1.lerp(center, 0.1).toArray(positionData, 0);

    for (let i = 1; i < this.config.count; i++) {
      const index = 3 * i;
      tempVector2.fromArray(positionData, index);
      tempVector4.fromArray(velocityData, index);
      const size = sizeData[i];

      tempVector7.copy(tempVector1).sub(tempVector2);
      tempVector4.add(tempVector7.normalize().multiplyScalar(state.delta * config.attraction * Math.max(0.5, size)));
      tempVector4.multiplyScalar(config.friction);
      tempVector4.clampLength(0, config.maxVelocity);
      tempVector2.add(tempVector4);
      tempVector2.toArray(positionData, index);
      tempVector4.toArray(velocityData, index);
    }

    for (let i = 1; i < config.count; i++) {
      const index = 3 * i;
      tempVector2.fromArray(positionData, index);
      tempVector4.fromArray(velocityData, index);
      const size = sizeData[i];

      for (let j = i + 1; j < config.count; j++) {
        const jIndex = 3 * j;
        tempVector3.fromArray(positionData, jIndex);
        tempVector5.fromArray(velocityData, jIndex);
        const jSize = sizeData[j];

        tempVector7.copy(tempVector3).sub(tempVector2);
        const distance = tempVector7.length();
        const minDistance = size + jSize;

        if (distance < minDistance) {
          const overlap = minDistance - distance;
          tempVector8.copy(tempVector7).normalize().multiplyScalar(0.5 * overlap);
          tempVector9.copy(tempVector8).multiplyScalar(Math.max(tempVector4.length(), 1));
          tempVector2.sub(tempVector8);
          tempVector4.sub(tempVector9);
          tempVector3.add(tempVector8);
          tempVector5.add(tempVector9);
          tempVector3.toArray(positionData, jIndex);
          tempVector5.toArray(velocityData, jIndex);
        }
      }

      tempVector7.copy(tempVector1).sub(tempVector2);
      const distance = tempVector7.length();
      const minDistance = size + sizeData[0];

      if (distance < minDistance) {
        const overlap = minDistance - distance;
        tempVector8.copy(tempVector7).normalize().multiplyScalar(overlap);
        tempVector9.copy(tempVector8).multiplyScalar(Math.max(tempVector4.length(), 2));
        tempVector2.sub(tempVector8);
        tempVector4.sub(tempVector9);
      }

      tempVector2.toArray(positionData, index);
      tempVector4.toArray(velocityData, index);
    }
  }
}

// Custom Material with Scattering Effect
class ScatteringMaterial extends PhysicalMaterial {
  constructor(config) {
    super(config);

    this.uniforms = {
      thicknessDistortion: { value: 0.1 },
      thicknessAmbient: { value: 0 },
      thicknessAttenuation: { value: 0.1 },
      thicknessPower: { value: 2 },
      thicknessScale: { value: 10 }
    };

    this.defines.USE_UV = "";

    this.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, this.uniforms);

      shader.fragmentShader = `
        uniform float thicknessPower;
        uniform float thicknessScale;
        uniform float thicknessDistortion;
        uniform float thicknessAmbient;
        uniform float thicknessAttenuation;
        uniform vec3 thicknessColor;
      ` + shader.fragmentShader;

      shader.fragmentShader = shader.fragmentShader.replace(
        "void main() {",
        `
        void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {
          vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));
          float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;
          vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor;
          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
        }

        void main() {
      `);

      const lightsFragment = ShaderChunk.lights_fragment_begin.replaceAll(
        "RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",
        `
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `
      );

      shader.fragmentShader = shader.fragmentShader.replace("#include <lights_fragment_begin>", lightsFragment);
    };
  }
}

// Main Particle System
const defaultConfig = {
  count: 200,
  colors: [0xff0000, 0x00ff00, 0xffffff],
  pointLightIntensity: 150,
  directionalLightColor: 0xffffff,
  directionalLightIntensity: 5,
  materialParams: {
    metalness: 0.5,
    roughness: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.15
  },
  minSize: 0.25,
  maxSize: 1,
  size0: 3,
  attraction: 0.15,
  friction: 0.999,
  maxVelocity: 0.15
};

const tempObject = new Object3D();

class ParticleSystem extends InstancedMesh {
  constructor(renderer, config = {}) {
    const mergedConfig = { ...defaultConfig, ...config };
    super(new SphereGeometry(1, 48, 24), new ScatteringMaterial(mergedConfig.materialParams), mergedConfig.count);

    this.castShadow = true;
    this.receiveShadow = true;
    this.config = mergedConfig;
    this.physics = new PhysicsSystem(mergedConfig);
    this.initLights();
    this.setColors(mergedConfig.colors);
  }

  initLights() {
    this.pointLight = new PointLight(this.config.colors[0], this.config.pointLightIntensity);
    this.add(this.pointLight);

    this.directionalLight = new DirectionalLight(this.config.directionalLightColor, this.config.directionalLightIntensity);
    this.directionalLight.position.set(20, 20, 20);
    this.directionalLight.target.position.set(0, 0, 0);
    this.directionalLight.castShadow = true;
    this.directionalLight.shadow.mapSize.width = 2048;
    this.directionalLight.shadow.mapSize.height = 2048;
    this.directionalLight.shadow.camera.far = 70;
    this.directionalLight.shadow.camera.left = -17.5;
    this.directionalLight.shadow.camera.right = 17.5;
    this.directionalLight.shadow.camera.top = 17.5;
    this.directionalLight.shadow.camera.bottom = -17.5;
    this.add(this.directionalLight);
    this.add(this.directionalLight.target);
  }

  setColors(colors) {
    if (Array.isArray(colors) && colors.length > 1) {
      const colorGradient = createColorGradient(colors);

      for (let i = 0; i < this.count; i++) {
        this.setColorAt(i, colorGradient.getColorAt(i / this.count));
        if (i === 0) this.pointLight.color.copy(colorGradient.getColorAt(i / this.count));
      }

      this.instanceColor.needsUpdate = true;
    }
  }

  update(state) {
    this.physics.update(state);

    for (let i = 0; i < this.count; i++) {
      tempObject.position.fromArray(this.physics.positionData, 3 * i);
      tempObject.scale.setScalar(this.physics.sizeData[i]);
      tempObject.updateMatrix();
      this.setMatrixAt(i, tempObject.matrix);

      if (i === 0) this.pointLight.position.copy(tempObject.position);
    }

    this.instanceMatrix.needsUpdate = true;
  }
}

// Utility Functions
function createColorGradient(colors) {
  let colorArray, colorList;

  function initialize(colors) {
    colorArray = colors;
    colorList = [];
    colorArray.forEach((color) => {
      const threeColor = new Color(color);
      colorList.push(threeColor);
    });
  }

  initialize(colors);

  return {
    setColors: initialize,
    getColorAt: function (t, target = new Color()) {
      const index = Math.max(0, Math.min(1, t)) * (colorArray.length - 1);
      const floorIndex = Math.floor(index);
      const startColor = colorList[floorIndex];

      if (floorIndex >= colorArray.length - 1) return startColor.clone();

      const blendFactor = index - floorIndex;
      const endColor = colorList[floorIndex + 1];

      target.r = startColor.r + blendFactor * (endColor.r - startColor.r);
      target.g = startColor.g + blendFactor * (endColor.g - startColor.g);
      target.b = startColor.b + blendFactor * (endColor.b - startColor.b);

      return target;
    }
  };
}

// Main Application Initialization
function initializeApp(canvas, config = {}) {
  const app = new ThreeApp({ canvas, size: "parent", rendererOptions: { antialias: true, alpha: true } });
  app.cameraMaxAspect = 1.5;
  app.camera.position.set(0, 0, 30);
  app.camera.lookAt(0, 0, 0);
  app.updateWorldSize();
  app.renderer.shadowMap.enabled = true;
  app.renderer.shadowMap.type = ShadowMap;
  app.renderer.toneMapping = ToneMapping;

  const environment = new RoomEnvironment();
  const pmremGenerator = new PMREMGenerator(app.renderer, 0.04);
  const envMap = pmremGenerator.fromScene(environment).texture;

  let particleSystem;

  function createParticleSystem(config) {
    if (particleSystem) {
      app.clear();
      app.scene.remove(particleSystem);
    }

    particleSystem = new ParticleSystem(app.renderer, config);

    const materialParams = config.materialParams || {};
    if (materialParams.envMap === undefined) particleSystem.material.envMap = envMap;
    if (materialParams.envMapIntensity === undefined) particleSystem.material.envMapIntensity = 0.25;
    particleSystem.material.envMapRotation.x = -Math.PI / 2;

    app.scene.add(particleSystem);
  }

  createParticleSystem(config);

  const raycaster = new Raycaster();
  const plane = new Plane(new Vector3(0, 0, 1), 0);
  const intersectionPoint = new Vector3();
  let isPaused = false;

  const interaction = createInteraction({
    domElement: canvas,
    onMove() {
      raycaster.setFromCamera(interaction.nPosition, app.camera);
      app.camera.getWorldDirection(plane.normal);
      raycaster.ray.intersectPlane(plane, intersectionPoint);
      particleSystem.physics.center.copy(intersectionPoint);
    },
    onLeave() {
      particleSystem.physics.center.set(0, 0, 0);
    }
  });

  app.onBeforeRender = (state) => {
    if (!isPaused) particleSystem.update(state);
  };

  app.onAfterResize = (size) => {
    particleSystem.config.maxX = size.wWidth / 2;
    particleSystem.config.maxY = size.wHeight / 2;
  };

  return {
    three: app,
    get spheres() {
      return particleSystem;
    },
    setCount(count) {
      createParticleSystem({ ...particleSystem.config, count });
    },
    togglePause() {
      isPaused = !isPaused;
    },
    dispose() {
      app.dispose();
    }
  };
}

// export { initializeApp as default };
export default { initializeApp };