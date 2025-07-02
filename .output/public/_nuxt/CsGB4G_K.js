import{S as u,P as p,W as w,a as r,D as P,V as _,I as h,M as S,C as b}from"./D9JpzpXq.js";import{d as M,r as U,o as I,a as W,c as x,b as f,_ as m,e as C}from"./B7ccu2kg.js";const D=`
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
`,H=`
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
`,k=M({__name:"sphereLines",setup(y){const i=U(null);let t,o,n,e,a,c;I(()=>{i.value&&(z(),d())}),W(()=>{cancelAnimationFrame(c),n&&n.dispose(),window.removeEventListener("resize",v)});function z(){var l;t=new u,o=new p(75,window.innerWidth/window.innerHeight,.1,1e3),o.position.z=1.8,n=new w({antialias:!0,alpha:!0}),n.setSize(window.innerWidth/2,window.innerHeight/2),(l=i.value)==null||l.appendChild(n.domElement),a=new b;const s=new r({uniforms:{time:{value:0},resolution:{value:new _(window.innerWidth,window.innerHeight)}},vertexShader:D,fragmentShader:H,side:P}),g=new h(1,300);e=new S(g,s),t.add(e),window.addEventListener("resize",v)}function v(){o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),n.setSize(window.innerWidth/2,window.innerHeight/2),e.material instanceof r&&e.material.uniforms.resolution.value.set(window.innerWidth,window.innerHeight)}function d(){c=requestAnimationFrame(d),(e==null?void 0:e.material)instanceof r&&(e.material.uniforms.time.value=a.getElapsedTime(),e.rotation.x+=.005,e.rotation.y+=.01),n.render(t,o)}return(s,g)=>(f(),x("div",{ref_key:"container",ref:i,class:"shader-container"},null,512))}}),E=m(k,[["__scopeId","data-v-b90979b3"]]),F={};function L(y,i){const t=E;return f(),x("div",null,[C(t)])}const j=m(F,[["render",L]]);export{j as default};
