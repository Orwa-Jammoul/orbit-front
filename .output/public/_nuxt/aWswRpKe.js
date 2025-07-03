import{S as k,P as L,W as C,a as h,D as T,V as U,I as A,M as W,C as N}from"./D9JpzpXq.js";import{d as V,r as g,o as $,a as B,c as m,b as u,_ as H,I as E,J as F,m as G,w as q,K as R,e as I,g as n,l as M,B as j,u as t,x as y,L as _,h as P,p as J,M as v,y as K,A as O,N as w,G as Q,O as X,P as Y}from"./BqGQ1lLq.js";import{_ as Z}from"./CX1GJOv9.js";const ee=`
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
    d = sin(d * 20.0 + time)/5.0;
    d = abs(d);
    d = 0.04 / d;
    d = smoothstep(0.1, 0.9, d);
    vD = d;

    vec3 displacedPosition = position + normal * d * 0.1;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);

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
`,ne=`
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

    
    gl_FragColor = vec4(vec3(vD), 1.0);
  }
`,te=V({__name:"sphere1",setup(S){const a=g(null);let d,r,o,s,x,i;$(()=>{a.value&&(z(),c())}),B(()=>{cancelAnimationFrame(i),o&&o.dispose(),window.removeEventListener("resize",e)});function z(){var l;d=new k,r=new L(75,window.innerWidth/window.innerHeight,.1,1e3),r.position.z=3,o=new C({antialias:!0,alpha:!0}),o.setSize(window.innerWidth,window.innerHeight),(l=a.value)==null||l.appendChild(o.domElement),x=new N;const f=new h({uniforms:{time:{value:0},resolution:{value:new U(window.innerWidth,window.innerHeight)}},vertexShader:ee,fragmentShader:ne,side:T}),p=new A(1,300);s=new W(p,f),d.add(s),window.addEventListener("resize",e)}function e(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight),s.material instanceof h&&s.material.uniforms.resolution.value.set(window.innerWidth,window.innerHeight)}function c(){i=requestAnimationFrame(c),(s==null?void 0:s.material)instanceof h&&(s.material.uniforms.time.value=x.getElapsedTime(),s.rotation.x+=.005,s.rotation.y+=.01),o.render(d,r)}return(f,p)=>(u(),m("div",{ref_key:"container",ref:a,class:"shader-container"},null,512))}}),ie=H(te,[["__scopeId","data-v-61a3b5ec"]]),se={class:"page-root"},oe={class:"container"},ae={class:"path-links text-start pt-4"},re={class:"links-frame",dir:"auto"},ce={class:"path-link"},de=["dir"],le={class:"main-content"},ve={class:"content-body"},ge={class:"metal-text"},me={class:"description"},ue={class:"section"},fe=["innerHTML"],pe={class:"section"},ye=["src"],_e=["innerHTML"],xe={class:"section"},ze=["src"],he=["innerHTML"],Pe={class:"section"},we=["src"],De=["innerHTML"],be={class:"side-nav"},Ie={class:"px-0 ps-2"},Me={__name:"index",async setup(S){let a,d;const{t:r}=E(),o=F(),{public:{api:s,apiBase:x}}=G(),i=g([]);g(!0),g(!1),g(null);const{data:z}=([a,d]=q(()=>J().GetAll(`${s.blocksApi}/7`)),a=await a,d(),a);return i.value=z.value,R({title:r("About Us")}),(e,c)=>{var l,D,b;const f=ie,p=Z;return u(),m("div",se,[I(f),n("div",oe,[n("div",ae,[n("h5",re,[I(p,{class:"path-link",to:t(o)("/")},{default:j(()=>[M(y(e.$t("Home")),1)]),_:1},8,["to"]),c[0]||(c[0]=M(" / ")),n("span",ce,y(e.$t("About Us")),1)])])]),n("div",{class:"page-body container",dir:("rtl"in e?e.rtl:t(v))()},[n("div",le,[n("div",ve,[n("div",{class:_(["mb-10 px-0",("rtl"in e?e.rtl:t(v))()]),dir:"auto"},[n("h1",ge,[n("span",null,y(("useName"in e?e.useName:t(K))(t(i))),1)])],2),n("div",me,[n("div",ue,[n("div",{class:"des",innerHTML:("useDes"in e?e.useDes:t(O))(t(i))},null,8,fe)]),n("div",pe,[(l=t(i))!=null&&l.image1?(u(),m("div",{key:0,class:_(["img-frame contain",("rtl"in e?e.rtl:t(v))()])},[n("img",{src:("cImg"in e?e.cImg:t(w))(t(i).image1),alt:" Photo"},null,8,ye)],2)):P("",!0),n("div",{class:"des",innerHTML:("useDes1"in e?e.useDes1:t(Q))(t(i))},null,8,_e)]),n("div",xe,[(D=t(i))!=null&&D.image2?(u(),m("div",{key:0,class:_(["img-frame contain",("rtl"in e?e.rtl:t(v))()])},[n("img",{src:("cImg"in e?e.cImg:t(w))(t(i).image2),alt:" Photo"},null,8,ze)],2)):P("",!0),n("div",{class:"des",innerHTML:("useDes2"in e?e.useDes2:t(X))(t(i))},null,8,he)]),n("div",Pe,[(b=t(i))!=null&&b.image3?(u(),m("div",{key:0,class:_(["img-frame contain",("rtl"in e?e.rtl:t(v))()])},[n("img",{src:("cImg"in e?e.cImg:t(w))(t(i).image3),alt:" Photo"},null,8,we)],2)):P("",!0),n("div",{class:"des",innerHTML:("useDes3"in e?e.useDes3:t(Y))(t(i))},null,8,De)])])]),n("aside",be,[n("p",Ie,y(e.$t("more")),1),c[1]||(c[1]=n("div",{class:"mb-3"}," hello ",-1))])])],8,de)])}}},Le=H(Me,[["__scopeId","data-v-1ab88899"]]);export{Le as default};
