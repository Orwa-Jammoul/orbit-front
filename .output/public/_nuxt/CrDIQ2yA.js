import{S as L,P as U,W as T,a as P,D as C,V as A,I as N,M as W,C as V}from"./D9JpzpXq.js";import{d as $,r as m,o as B,a as E,c as u,b as f,_ as H,J as r,L as F,m as G,w as R,I as q,K as j,e as M,g as t,l as S,B as J,u as n,x as _,M as x,h as w,p as K,N as g,y as O,A as Q,O as b,G as X,P as Y,Q as Z}from"./DjWP5jMm.js";import{_ as ee}from"./C-wTRgjs.js";const te=`
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
`,oe=$({__name:"sphere1",setup(k){const a=m(null);let d,l,s,i,h,o;B(()=>{a.value&&(z(),c())}),E(()=>{cancelAnimationFrame(o),s&&s.dispose(),window.removeEventListener("resize",e)});function z(){var v;d=new L,l=new U(75,window.innerWidth/window.innerHeight,.1,1e3),l.position.z=3,s=new T({antialias:!0,alpha:!0}),s.setSize(window.innerWidth,window.innerHeight),(v=a.value)==null||v.appendChild(s.domElement),h=new V;const p=new P({uniforms:{time:{value:0},resolution:{value:new A(window.innerWidth,window.innerHeight)}},vertexShader:te,fragmentShader:ne,side:C}),y=new N(1,300);i=new W(y,p),d.add(i),window.addEventListener("resize",e)}function e(){l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight),i.material instanceof P&&i.material.uniforms.resolution.value.set(window.innerWidth,window.innerHeight)}function c(){o=requestAnimationFrame(c),(i==null?void 0:i.material)instanceof P&&(i.material.uniforms.time.value=h.getElapsedTime(),i.rotation.x+=.005,i.rotation.y+=.01),s.render(d,l)}return(p,y)=>(f(),u("div",{ref_key:"container",ref:a,class:"shader-container"},null,512))}}),ie=H(oe,[["__scopeId","data-v-61a3b5ec"]]),se={class:"page-root"},ae={class:"container"},re={class:"path-links text-start pt-4"},ce={class:"links-frame",dir:"auto"},de={class:"path-link"},le=["dir"],ve={class:"main-content"},ge={class:"content-body"},me={class:"metal-text"},ue={class:"description"},fe={class:"section"},pe=["innerHTML"],ye={class:"section"},_e=["src"],xe=["innerHTML"],he={class:"section"},ze=["src"],Pe=["innerHTML"],we={class:"section"},be=["src"],De=["innerHTML"],Ie={class:"side-nav"},Me={class:"px-0 ps-2"},Se={__name:"index",async setup(k){let a,d;const{t:l}=r(),s=F(),{public:{api:i,apiBase:h}}=G(),o=m([]);m(!0),m(!1),m(null);const{data:z}=([a,d]=R(()=>K().GetAll(`${i.blocksApi}/7`)),a=await a,d(),a);return o.value=z.value,q({title:r().t("About Us"),meta:[{name:"description",content:r().t("About Us")},{name:"keywords",content:r().t("About Us")},{property:"og:type",content:r().t("ogType")},{property:"og:locale",content:r().t("ogLocale")},{property:"og:site_name",content:r().t("ogSiteName")},{name:"robots",content:"index, follow"},{name:"author",content:r().t("ogSiteName")},{name:"canonical",content:"https://orbit-eng.net"+j().fullPath}]}),(e,c)=>{var v,D,I;const p=ie,y=ee;return f(),u("div",se,[M(p),t("div",ae,[t("div",re,[t("h5",ce,[M(y,{class:"path-link",to:n(s)("/")},{default:J(()=>[S(_(e.$t("Home")),1)]),_:1},8,["to"]),c[0]||(c[0]=S(" / ")),t("span",de,_(e.$t("About Us")),1)])])]),t("div",{class:"page-body container",dir:("rtl"in e?e.rtl:n(g))()},[t("div",ve,[t("div",ge,[t("div",{class:x(["mb-10 px-0",("rtl"in e?e.rtl:n(g))()]),dir:"auto"},[t("h1",me,[t("span",null,_(("useName"in e?e.useName:n(O))(n(o))),1)])],2),t("div",ue,[t("div",fe,[t("div",{class:"des",innerHTML:("useDes"in e?e.useDes:n(Q))(n(o))},null,8,pe)]),t("div",ye,[(v=n(o))!=null&&v.image1?(f(),u("div",{key:0,class:x(["img-frame contain",("rtl"in e?e.rtl:n(g))()])},[t("img",{src:("cImg"in e?e.cImg:n(b))(n(o).image1),alt:" Photo"},null,8,_e)],2)):w("",!0),t("div",{class:"des",innerHTML:("useDes1"in e?e.useDes1:n(X))(n(o))},null,8,xe)]),t("div",he,[(D=n(o))!=null&&D.image2?(f(),u("div",{key:0,class:x(["img-frame contain",("rtl"in e?e.rtl:n(g))()])},[t("img",{src:("cImg"in e?e.cImg:n(b))(n(o).image2),alt:" Photo"},null,8,ze)],2)):w("",!0),t("div",{class:"des",innerHTML:("useDes2"in e?e.useDes2:n(Y))(n(o))},null,8,Pe)]),t("div",we,[(I=n(o))!=null&&I.image3?(f(),u("div",{key:0,class:x(["img-frame contain",("rtl"in e?e.rtl:n(g))()])},[t("img",{src:("cImg"in e?e.cImg:n(b))(n(o).image3),alt:" Photo"},null,8,be)],2)):w("",!0),t("div",{class:"des",innerHTML:("useDes3"in e?e.useDes3:n(Z))(n(o))},null,8,De)])])]),t("aside",Ie,[t("p",Me,_(e.$t("more")),1),c[1]||(c[1]=t("div",{class:"mb-3"}," hello ",-1))])])],8,le)])}}},Ue=H(Se,[["__scopeId","data-v-b5127e25"]]);export{Ue as default};
