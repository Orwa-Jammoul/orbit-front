import { Swiper, SwiperSlide } from 'swiper/vue';
import { mergeProps, ref, withAsyncContext, watchEffect, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, resolveComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRuntimeConfig, a as useGetSiteApi, i as useHeader } from './server.mjs';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { u as useName, g as getInnerText, a as useDes, _ as __nuxt_component_0$2, l as localePath, i as isAr, r as rtl } from './useMethods-BC6SoiT9.mjs';
import __nuxt_component_1$1 from './Icon-BQJZeqX5.mjs';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { _ as __nuxt_component_1$2 } from './service-CUTbaGv7.mjs';
import { _ as __nuxt_component_1$3 } from './course-dUZoEmdu.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'animejs';
import '@fortawesome/fontawesome-svg-core';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'node:path';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-C75EwnE9.mjs';

const _sfc_main$7 = {
  __name: "design2",
  __ssrInlineRender: true,
  setup(__props) {
    const videoSources = [
      // { src: '/videos/blackhole-02.mp4', type: 'video/mp4' },
      { src: "/videos/Orbit_Eng-01.mp4", type: "video/mp4" }
      // { src: '/videos/blackhole-03.mp4', type: 'video/mp4' }
    ];
    ref([]);
    const currentVideoIndex = ref(0);
    const videosLoaded = ref(false);
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "design-root" }, _attrs))} data-v-cfe60c9c><div class="bg-section" data-v-cfe60c9c>`);
      if (!unref(videosLoaded)) {
        _push(`<div class="loading-placeholder pcc" data-v-cfe60c9c><div class="loading-frame" data-v-cfe60c9c><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" data-v-cfe60c9c><circle fill="none" stroke-opacity="1" stroke="#29abe2" stroke-width=".5" cx="100" cy="100" r="0" data-v-cfe60c9c><animate attributeName="r" calcMode="spline" dur="2" values="1;80" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite" data-v-cfe60c9c></animate><animate attributeName="stroke-width" calcMode="spline" dur="2" values="0;25" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite" data-v-cfe60c9c></animate><animate attributeName="stroke-opacity" calcMode="spline" dur="2" values="1;0" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite" data-v-cfe60c9c></animate></circle></svg></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(videoSources, (video, index) => {
        _push(`<video class="bg-video" style="${ssrRenderStyle({ display: unref(currentVideoIndex) === index ? "block" : "none" })}" muted playsinline preload="auto" data-v-cfe60c9c><source${ssrRenderAttr("src", video.src)}${ssrRenderAttr("type", video.type)} data-v-cfe60c9c> Your browser does not support the video tag. </video>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/header/design2.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-cfe60c9c"]]);
const _sfc_main$6 = {
  __name: "MainHeader",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { public: { api, apiBase } } = useRuntimeConfig();
    const sliders = ref([]);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
      `${api.Blocks}?categoryId=2&pageNumber=0&pageSize=100`
    )), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
      if (data.value) {
        sliders.value = data.value.items;
        useHeader().value = data.value.blockPhotos;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_HomeHeaderDesign2 = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-main" }, _attrs))} data-v-9b3db082>`);
      _push(ssrRenderComponent(_component_Swiper, {
        class: "mainheaderslider",
        modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperEffectFade" in _ctx ? _ctx.SwiperEffectFade : unref(EffectFade), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination)],
        "slides-per-view": 1,
        loop: true,
        lazy: true,
        pagination: { clickable: true },
        effect: "fade",
        autoplay: {
          delay: 2e4,
          disableOnInteraction: false
        },
        fadeEffect: {
          crossFade: true
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SwiperSlide, { class: "item-slide" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_HomeHeaderDesign2, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_HomeHeaderDesign2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SwiperSlide, { class: "item-slide" }, {
                default: withCtx(() => [
                  createVNode(_component_HomeHeaderDesign2)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/MainHeader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-9b3db082"]]);
const _imports_0 = publicAssetsURL("/imgs/spaceship.png");
const _sfc_main$5 = {
  __name: "aboutUs",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { public: { api, apiBase } } = useRuntimeConfig();
    const about = ref([]);
    const isLoading = ref(true);
    const { data: aboutData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
      `${api.Blocks}/1`
    )), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
      if (aboutData.value) {
        about.value = aboutData.value;
        isLoading.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_icon = __nuxt_component_1$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-root grid-bg2",
        dir: "auto"
      }, _attrs))} data-v-85ef76e7><div class="img-frame contain" data-v-85ef76e7><img${ssrRenderAttr("src", _imports_0)} alt="image" data-v-85ef76e7></div><div class="about-frame" data-v-85ef76e7><div class="about-box1 grid-bg1" data-v-85ef76e7><h1 class="metal-text" data-v-85ef76e7>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(unref(about)))}</h1><p data-v-85ef76e7>${ssrInterpolate(("getInnerText" in _ctx ? _ctx.getInnerText : unref(getInnerText))(("useDes" in _ctx ? _ctx.useDes : unref(useDes))(unref(about))))}</p><div class="go-to pcs" data-v-85ef76e7><p class="m-0" data-v-85ef76e7>${ssrInterpolate(_ctx.$t("read-more"))}</p>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "icon-frame pcc mx-0 ms-2",
        to: ("localePath" in _ctx ? _ctx.localePath : unref(localePath))("/about-us")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!("isAr" in _ctx ? _ctx.isAr : unref(isAr))()) {
              _push2(ssrRenderComponent(_component_icon, {
                name: "material-symbols:arrow-forward-rounded",
                size: "20px"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_icon, {
                name: "material-symbols:arrow-back-rounded",
                size: "20px"
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              !("isAr" in _ctx ? _ctx.isAr : unref(isAr))() ? (openBlock(), createBlock(_component_icon, {
                key: 0,
                name: "material-symbols:arrow-forward-rounded",
                size: "20px"
              })) : (openBlock(), createBlock(_component_icon, {
                key: 1,
                name: "material-symbols:arrow-back-rounded",
                size: "20px"
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="gr-circle1" data-v-85ef76e7></div><div class="gr-circle3" data-v-85ef76e7></div></div><div class="about-box2 grid-bg1" data-v-85ef76e7><h1 class="metal-text" data-v-85ef76e7>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(unref(about)))}</h1><p data-v-85ef76e7>${ssrInterpolate(("getInnerText" in _ctx ? _ctx.getInnerText : unref(getInnerText))(("useDes" in _ctx ? _ctx.useDes : unref(useDes))(unref(about))))}</p><div class="go-to pcs" data-v-85ef76e7><p class="m-0" data-v-85ef76e7>${ssrInterpolate(_ctx.$t("read-more"))}</p>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "icon-frame pcc mx-0 ms-2",
        to: ("localePath" in _ctx ? _ctx.localePath : unref(localePath))("/about-us")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!("isAr" in _ctx ? _ctx.isAr : unref(isAr))()) {
              _push2(ssrRenderComponent(_component_icon, {
                name: "material-symbols:arrow-forward-rounded",
                size: "20px"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_icon, {
                name: "material-symbols:arrow-back-rounded",
                size: "20px"
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              !("isAr" in _ctx ? _ctx.isAr : unref(isAr))() ? (openBlock(), createBlock(_component_icon, {
                key: 0,
                name: "material-symbols:arrow-forward-rounded",
                size: "20px"
              })) : (openBlock(), createBlock(_component_icon, {
                key: 1,
                name: "material-symbols:arrow-back-rounded",
                size: "20px"
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="gr-circle1" data-v-85ef76e7></div><div class="gr-circle3" data-v-85ef76e7></div></div></div><div class="gr-circle1" data-v-85ef76e7></div><div class="gr-circle2" data-v-85ef76e7></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/aboutUs.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-85ef76e7"]]);
const _sfc_main$4 = {
  __name: "Services",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { public: { api, apiBase } } = useRuntimeConfig();
    const services = ref([]);
    const isLoading = ref(true);
    const { data: servicesData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
      `${api.productsSearchApi}?pageNumber=1&pageSize=12`
    )), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_CardService = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "section-root",
        dir: "auto"
      }, _attrs))} data-v-555ab87a><div class="container" data-v-555ab87a><div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "row section-title"])}" data-v-555ab87a><h2 class="metal-text" data-v-555ab87a>${ssrInterpolate(_ctx.$t("services"))}</h2><p data-v-555ab87a> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum molestias aspernatur labore inventore hic? Recusandae praesentium ex delectus odio? </p></div>`);
      if (!unref(isLoading)) {
        _push(`<div class="services-section row px-3" data-v-555ab87a>`);
        _push(ssrRenderComponent(_component_Swiper, {
          class: "mySwiper",
          dir: ("rtl" in _ctx ? _ctx.rtl : unref(rtl))(),
          modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination), "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
          navigation: false,
          "space-between": 40,
          autoplay: { delay: 15e3 },
          pagination: { clickable: true },
          loop: false,
          breakpoints: {
            "1": {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            "550": {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            "768": {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            "1024": {
              slidesPerView: 3,
              slidesPerGroup: 3
            }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(services), (service, index) => {
                _push2(ssrRenderComponent(_component_SwiperSlide, {
                  class: "pcc",
                  key: service.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_CardService, {
                        cardData: service,
                        num: index
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_CardService, {
                          cardData: service,
                          num: index
                        }, null, 8, ["cardData", "num"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(services), (service, index) => {
                  return openBlock(), createBlock(_component_SwiperSlide, {
                    class: "pcc",
                    key: service.id
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_CardService, {
                        cardData: service,
                        num: index
                      }, null, 8, ["cardData", "num"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Services.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-555ab87a"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_parallax = resolveComponent("v-parallax");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_v_parallax, { src: "/imgs/experience-02.jpg" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/experiences.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  __name: "training",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { public: { api, apiBase } } = useRuntimeConfig();
    const services = ref([]);
    const isLoading = ref(true);
    const { data: servicesData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
      `${api.blocksApi}/GetMaster?categoryId=5&pageNumber=0&pageSize=12`
    )), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_CardCourse = __nuxt_component_1$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "section-root",
        dir: "auto"
      }, _attrs))} data-v-f759bef3><div class="container" data-v-f759bef3><div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "row section-title"])}" data-v-f759bef3><h2 class="metal-text" data-v-f759bef3>${ssrInterpolate(_ctx.$t("training"))}</h2><p data-v-f759bef3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum molestias aspernatur labore inventore hic? Recusandae praesentium ex delectus odio? </p></div>`);
      if (!unref(isLoading)) {
        _push(`<div class="training-section row" data-v-f759bef3>`);
        _push(ssrRenderComponent(_component_Swiper, {
          class: "mySwiper",
          dir: ("rtl" in _ctx ? _ctx.rtl : unref(rtl))(),
          modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination), "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
          navigation: false,
          "space-between": 40,
          autoplay: { delay: 15e3 },
          pagination: { clickable: true },
          loop: false,
          breakpoints: {
            "1": {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            "550": {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            "768": {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            "1024": {
              slidesPerView: 3,
              slidesPerGroup: 3
            }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(services), (service, index) => {
                _push2(ssrRenderComponent(_component_SwiperSlide, {
                  class: "pcc",
                  key: service.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_CardCourse, {
                        cardData: service,
                        num: index
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_CardCourse, {
                          cardData: service,
                          num: index
                        }, null, 8, ["cardData", "num"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(services), (service, index) => {
                  return openBlock(), createBlock(_component_SwiperSlide, {
                    class: "pcc",
                    key: service.id
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_CardCourse, {
                        cardData: service,
                        num: index
                      }, null, 8, ["cardData", "num"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/training.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f759bef3"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HomeMainHeader = __nuxt_component_0$1;
  const _component_HomeAboutUs = __nuxt_component_1;
  const _component_HomeServices = __nuxt_component_2;
  const _component_HomeExperiences = __nuxt_component_3;
  const _component_HomeTraining = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))} data-v-d20b6eff>`);
  _push(ssrRenderComponent(_component_HomeMainHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeAboutUs, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeServices, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeExperiences, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeTraining, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d20b6eff"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Home = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Home, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BaFghNH2.mjs.map
