import { f as useHead, g as useI18n, h as useRoute$1, _ as _export_sfc, u as useRuntimeConfig, d as useGetSiteApi, a as useLocalePath, b as __nuxt_component_0$2, e as __nuxt_component_0$1$1 } from './server.mjs';
import { r as rtl, u as useName, g as getInnerText, a as useDes, b as useDes1, i as isAr, c as cImg, d as useEndpoint } from './useMethods-DGpMLSZI.mjs';
import { mergeProps, ref, withAsyncContext, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { S as Splide, a as SplideSlide } from '../_/vue-splide.esm.mjs';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import __nuxt_component_0$3 from './index-lD4fRCLv.mjs';
import { _ as _sfc_main$a } from './Services-C0rbhR-E.mjs';
import { _ as _sfc_main$b } from './training-CERSr_Iz.mjs';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '@iconify/vue';
import '@unhead/addons';
import 'unhead/plugins';
import '@unhead/schema-org/vue';
import '@vue/shared';
import 'yup';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'unhead/server';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'node:path';
import '@iconify/utils/lib/css/icon';
import './service-CET6FYzJ.mjs';
import './course-C-qUqPie.mjs';

const _sfc_main$9 = {
  __name: "slide",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const { public: { api, apiBase } } = useRuntimeConfig();
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-slide" }, _attrs))} data-v-1aeb79ed><div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" dir="auto" data-v-1aeb79ed><img${ssrRenderAttr("src", `${unref(apiBase)}/${__props.data.image}`)} loading="lazy"${ssrRenderAttr("alt", `slide-img`)} data-v-1aeb79ed></div><div class="rect" data-v-1aeb79ed></div><div class="content" data-v-1aeb79ed><div class="slider-title metal-text" data-v-1aeb79ed>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(__props.data))}</div><div class="slider-des" data-v-1aeb79ed>${(_a = ("useDes" in _ctx ? _ctx.useDes : unref(useDes))(__props.data)) != null ? _a : ""}</div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "main-btn",
        to: unref(localePath)("services")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("get-started"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("get-started")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/slider/slide.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-1aeb79ed"]]);
const _sfc_main$8 = {
  __name: "MainHeader",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const splideOption = {
      type: "loop",
      autoplay: "playing",
      // playing // pause
      perPage: 1,
      // gap   : '2rem',
      rewind: true,
      direction: rtl()
    };
    const { public: { api, apiBase } } = useRuntimeConfig();
    const sliders = ref([]);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
      `${api.Blocks}?categoryId=2&pageNumber=0&pageSize=100`
    )), __temp = await __temp, __restore(), __temp);
    sliders.value = data.value.items;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElementsSliderSlide = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-main" }, _attrs))}>`);
      if (unref(sliders) && unref(sliders).length > 0) {
        _push(ssrRenderComponent(unref(Splide), {
          class: "splide",
          options: splideOption
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(sliders), (slide) => {
                _push2(ssrRenderComponent(unref(SplideSlide), {
                  class: "item-slide",
                  "data-splide-interval": "10000",
                  key: slide.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_ElementsSliderSlide, { data: slide }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_ElementsSliderSlide, { data: slide }, null, 8, ["data"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(sliders), (slide) => {
                  return openBlock(), createBlock(unref(SplideSlide), {
                    class: "item-slide",
                    "data-splide-interval": "10000",
                    key: slide.id
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElementsSliderSlide, { data: slide }, null, 8, ["data"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/MainHeader.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "tech",
  __ssrInlineRender: true,
  setup(__props) {
    const splideOption = {
      gap: "1rem",
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 5,
      autoScroll: {
        speed: 1
      },
      breakpoints: {
        1024: {
          perPage: 4
        },
        768: {
          perPage: 3
        },
        480: {
          perPage: 2,
          gap: "0.5rem"
        }
      }
    };
    const extensions = { AutoScroll };
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const techs = [
      // Pure Programming Languages (1-10)
      { id: 1, nameEn: "JavaScript", nameAr: "\u062C\u0627\u0641\u0627 \u0633\u0643\u0631\u064A\u0628\u062A", nameGe: "JavaScript", icon: "" },
      { id: 2, nameEn: "Python", nameAr: "\u0628\u0627\u064A\u062B\u0648\u0646", nameGe: "Python", icon: "" },
      { id: 3, nameEn: "Java", nameAr: "\u062C\u0627\u0641\u0627", nameGe: "Java", icon: "" },
      { id: 4, nameEn: "C#", nameAr: "\u0633\u064A \u0634\u0627\u0631\u0628", nameGe: "C#", icon: "" },
      { id: 5, nameEn: "C++", nameAr: "\u0633\u064A \u0628\u0644\u0633 \u0628\u0644\u0633", nameGe: "C++", icon: "" },
      { id: 6, nameEn: "Go", nameAr: "\u062C\u0648", nameGe: "Go", icon: "" },
      { id: 7, nameEn: "Rust", nameAr: "\u0631\u0627\u0633\u062A", nameGe: "Rust", icon: "" },
      { id: 8, nameEn: "TypeScript", nameAr: "\u062A\u0627\u064A\u0628 \u0633\u0643\u0631\u064A\u0628\u062A", nameGe: "TypeScript", icon: "" },
      { id: 9, nameEn: "PHP", nameAr: "\u0628\u064A \u0625\u062A\u0634 \u0628\u064A", nameGe: "PHP", icon: "" },
      { id: 10, nameEn: "Ruby", nameAr: "\u0631\u0648\u0628\u064A", nameGe: "Ruby", icon: "" },
      // Frontend Frameworks (11-17)
      { id: 11, nameEn: "React", nameAr: "\u0631\u064A\u0627\u0643\u062A", nameGe: "React", icon: "" },
      { id: 12, nameEn: "Vue.js", nameAr: "\u0641\u064A\u0648\u062C\u064A \u0625\u0633", nameGe: "Vue.js", icon: "" },
      { id: 13, nameEn: "Angular", nameAr: "\u0623\u0646\u062C\u0648\u0644\u0627\u0631", nameGe: "Angular", icon: "" },
      { id: 14, nameEn: "Nuxt.js", nameAr: "\u0646\u0648\u0643\u062A \u0625\u0633", nameGe: "Nuxt.js", icon: "" },
      { id: 15, nameEn: "Svelte", nameAr: "\u0633\u0641\u064A\u0644\u062A", nameGe: "Svelte", icon: "" },
      { id: 16, nameEn: "Next.js", nameAr: "\u0646\u064A\u0643\u0633\u062A \u0625\u0633", nameGe: "Next.js", icon: "" },
      { id: 17, nameEn: "Tailwind CSS", nameAr: "\u062A\u064A\u0644\u0648\u064A\u0646\u062F \u0633\u064A \u0625\u0633 \u0625\u0633", nameGe: "Tailwind CSS", icon: "" },
      // Backend Frameworks (18-24)
      { id: 18, nameEn: "Node.js", nameAr: "\u0646\u0648\u062F \u0625\u0633", nameGe: "Node.js", icon: "" },
      { id: 19, nameEn: "ASP.NET", nameAr: "\u0625\u064A\u0647 \u0625\u0633 \u0628\u064A \u062F\u0648\u062A \u0646\u062A", nameGe: "ASP.NET", icon: "" },
      { id: 20, nameEn: "Django", nameAr: "\u062C\u0627\u0646\u063A\u0648", nameGe: "Django", icon: "" },
      { id: 21, nameEn: "Laravel", nameAr: "\u0644\u0627\u0631\u0627\u0641\u064A\u0644", nameGe: "Laravel", icon: "" },
      { id: 22, nameEn: "Spring Boot", nameAr: "\u0633\u0628\u0631\u064A\u0646\u062C \u0628\u0648\u062A", nameGe: "Spring Boot", icon: "" },
      { id: 23, nameEn: "Express.js", nameAr: "\u0627\u0643\u0633\u0628\u0631\u0633 \u0625\u0633", nameGe: "Express.js", icon: "" },
      { id: 24, nameEn: "Ruby on Rails", nameAr: "\u0631\u0648\u0628\u064A \u0623\u0648\u0646 \u0631\u064A\u0644\u0632", nameGe: "Ruby on Rails", icon: "" },
      // Mobile Frameworks (25-31)
      { id: 25, nameEn: "Flutter", nameAr: "\u0641\u0644\u0627\u062A\u0631", nameGe: "Flutter", icon: "" },
      { id: 26, nameEn: "React Native", nameAr: "\u0631\u064A\u0627\u0643\u062A \u0646\u064A\u062A\u064A\u0641", nameGe: "React Native", icon: "" },
      { id: 27, nameEn: "Swift", nameAr: "\u0633\u0648\u064A\u0641\u062A", nameGe: "Swift", icon: "" },
      { id: 28, nameEn: "Kotlin", nameAr: "\u0643\u0648\u062A\u0644\u0646", nameGe: "Kotlin", icon: "" },
      { id: 29, nameEn: "Ionic", nameAr: "\u0622\u064A\u0648\u0646\u0643", nameGe: "Ionic", icon: "" },
      { id: 30, nameEn: "Xamarin", nameAr: "\u0632\u0627\u0645\u0627\u0631\u064A\u0646", nameGe: "Xamarin", icon: "" },
      { id: 31, nameEn: "Jetpack Compose", nameAr: "\u062C\u064A\u062A \u0628\u0627\u0643 \u0643\u0648\u0645\u0628\u0648\u0632", nameGe: "Jetpack Compose", icon: "" },
      // Databases (32-36)
      { id: 32, nameEn: "MySQL", nameAr: "\u0645\u0627\u064A \u0625\u0633 \u0643\u064A\u0648 \u0625\u0644", nameGe: "MySQL", icon: "" },
      { id: 33, nameEn: "MongoDB", nameAr: "\u0645\u0648\u0646\u062C\u0648 \u062F\u064A \u0628\u064A", nameGe: "MongoDB", icon: "" },
      { id: 34, nameEn: "PostgreSQL", nameAr: "\u0628\u0648\u0633\u062A\u062C\u0631\u064A \u0625\u0633 \u0643\u064A\u0648 \u0625\u0644", nameGe: "PostgreSQL", icon: "" },
      { id: 35, nameEn: "Firebase", nameAr: "\u0641\u0627\u064A\u0631\u0628\u064A\u0632", nameGe: "Firebase", icon: "" },
      { id: 36, nameEn: "SQLite", nameAr: "\u0625\u0633 \u0643\u064A\u0648 \u0644\u0627\u064A\u062A", nameGe: "SQLite", icon: "" },
      // DevOps & Tools (37-40)
      { id: 37, nameEn: "Docker", nameAr: "\u062F\u0648\u0643\u0631", nameGe: "Docker", icon: "" },
      { id: 38, nameEn: "GraphQL", nameAr: "\u062C\u0631\u0627\u0641 \u0643\u064A\u0648 \u0625\u0644", nameGe: "GraphQL", icon: "" },
      { id: 39, nameEn: "Kubernetes", nameAr: "\u0643\u0648\u0628\u0631\u0646\u064A\u062A\u0633", nameGe: "Kubernetes", icon: "" },
      { id: 40, nameEn: "Git", nameAr: "\u062C\u064A\u062A", nameGe: "Git", icon: "" },
      // ===== Graphic Design Programs (41-50) =====
      { id: 41, nameEn: "Adobe Photoshop", nameAr: "\u0623\u062F\u0648\u0628\u064A \u0641\u0648\u062A\u0648\u0634\u0648\u0628", nameGe: "Photoshop", icon: "" },
      { id: 42, nameEn: "Adobe Illustrator", nameAr: "\u0623\u062F\u0648\u0628\u064A \u0625\u0644\u064A\u0633\u062A\u0631\u064A\u062A\u0648\u0631", nameGe: "Illustrator", icon: "" },
      { id: 43, nameEn: "Adobe InDesign", nameAr: "\u0623\u062F\u0648\u0628\u064A \u0625\u0646\u062F\u064A\u0632\u0627\u064A\u0646", nameGe: "InDesign", icon: "" },
      { id: 44, nameEn: "Figma", nameAr: "\u0641\u064A\u062C\u0645\u0627", nameGe: "Figma", icon: "" },
      { id: 45, nameEn: "Sketch", nameAr: "\u0633\u0643\u062A\u0634", nameGe: "Sketch", icon: "" },
      { id: 46, nameEn: "Adobe XD", nameAr: "\u0623\u062F\u0648\u0628\u064A \u0625\u0643\u0633 \u062F\u064A", nameGe: "Adobe XD", icon: "" },
      { id: 47, nameEn: "CorelDRAW", nameAr: "\u0643\u0648\u0631\u064A\u0644 \u062F\u0631\u0648", nameGe: "CorelDRAW", icon: "" },
      { id: 48, nameEn: "Affinity Designer", nameAr: "\u0623\u0641\u064A\u0646\u064A\u062A\u064A \u062F\u064A\u0632\u0627\u064A\u0646\u0631", nameGe: "Affinity Designer", icon: "" },
      { id: 49, nameEn: "Canva", nameAr: "\u0643\u0627\u0646\u0641\u0627", nameGe: "Canva", icon: "" },
      { id: 50, nameEn: "GIMP", nameAr: "\u062C\u064A\u0645\u0628", nameGe: "GIMP", icon: "" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "slider-root" }, _attrs))} data-v-52ecffc6>`);
      if (techs && techs.length > 0) {
        _push(ssrRenderComponent(unref(Splide), {
          class: "splide",
          options: splideOption,
          extensions
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(techs, (tech, index) => {
                _push2(ssrRenderComponent(unref(SplideSlide), {
                  class: "pcc",
                  "data-splide-interval": "10000",
                  key: tech.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="tech-card pcc" data-v-52ecffc6${_scopeId2}><h1 class="card-title" data-v-52ecffc6${_scopeId2}>${ssrInterpolate(tech.nameEn)}</h1></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "tech-card pcc" }, [
                          createVNode("h1", { class: "card-title" }, toDisplayString(tech.nameEn), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(), createBlock(Fragment, null, renderList(techs, (tech, index) => {
                  return createVNode(unref(SplideSlide), {
                    class: "pcc",
                    "data-splide-interval": "10000",
                    key: tech.id
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "tech-card pcc" }, [
                        createVNode("h1", { class: "card-title" }, toDisplayString(tech.nameEn), 1)
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 64))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/tech.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-52ecffc6"]]);
const _sfc_main$6 = {
  __name: "aboutUs",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const localePath = useLocalePath();
    const { public: { api, apiBase } } = useRuntimeConfig();
    const { data: about } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
      `${api.Blocks}/1`
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_icon = __nuxt_component_0$3;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-root grid-bg2 rp",
        dir: "auto"
      }, _attrs))} data-v-c7692e83><div class="ci" style="${ssrRenderStyle({ "--c-top": "10%", "--c-delay": "0ms", "--c-size": "4px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "15%", "--c-delay": "100ms", "--c-size": "5px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "-10%", "--c-delay": "300ms", "--c-size": "3px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "5%", "--c-delay": "500ms", "--c-size": "5px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "-5%", "--c-delay": "200ms", "--c-size": "5px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "18%", "--c-delay": "700ms", "--c-size": "5px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "-12%", "--c-delay": "900ms", "--c-size": "4px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "8%", "--c-delay": "1200ms", "--c-size": "5px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "-18%", "--c-delay": "400ms", "--c-size": "3px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "20%", "--c-delay": "100ms", "--c-size": "5px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "-8%", "--c-delay": "600ms", "--c-size": "5px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "12%", "--c-delay": "1300ms", "--c-size": "5px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "-15%", "--c-delay": "1500ms", "--c-size": "2px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "3%", "--c-delay": "300ms", "--c-size": "5px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "-3%", "--c-delay": "1100ms", "--c-size": "5px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "17%", "--c-delay": "800ms", "--c-size": "4px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "-20%", "--c-delay": "1400ms", "--c-size": "5px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "0%", "--c-delay": "500ms", "--c-size": "5px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "-7%", "--c-delay": "1000ms", "--c-size": "5px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "19%", "--c-delay": "200ms", "--c-size": "3px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "-19%", "--c-delay": "1300ms", "--c-size": "5px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "4%", "--c-delay": "900ms", "--c-size": "5px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "-14%", "--c-delay": "400ms", "--c-size": "4px" })}" data-v-c7692e83></div><div class="ci" style="${ssrRenderStyle({ "--c-top": "13%", "--c-delay": "1100ms", "--c-size": "5px" })}" data-v-c7692e83></div><div class="img-frame contain" data-v-c7692e83><img${ssrRenderAttr("src", `/imgs/spaceship.png`)} alt="image about us" data-v-c7692e83></div><div class="about-frame" data-v-c7692e83><div class="about-box grid-bg1" data-v-c7692e83><h1 class="metal-text" data-v-c7692e83>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(unref(about)))}</h1><p data-v-c7692e83>${ssrInterpolate(("getInnerText" in _ctx ? _ctx.getInnerText : unref(getInnerText))(("useDes" in _ctx ? _ctx.useDes : unref(useDes))(unref(about))))}</p><div class="gr-circle1" data-v-c7692e83></div><div class="gr-circle3" data-v-c7692e83></div></div><div class="about-box grid-bg1" data-v-c7692e83><p data-v-c7692e83>${ssrInterpolate(("getInnerText" in _ctx ? _ctx.getInnerText : unref(getInnerText))(("useDes1" in _ctx ? _ctx.useDes1 : unref(useDes1))(unref(about))))}</p>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "go-to pcs mx-0 ms-2",
        to: unref(localePath)("about-us")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="m-0" data-v-c7692e83${_scopeId}>${ssrInterpolate(_ctx.$t("read-more"))}</p><div class="icon-frame pcc" data-v-c7692e83${_scopeId}>`);
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
            _push2(`</div>`);
          } else {
            return [
              createVNode("p", { class: "m-0" }, toDisplayString(_ctx.$t("read-more")), 1),
              createVNode("div", { class: "icon-frame pcc" }, [
                !("isAr" in _ctx ? _ctx.isAr : unref(isAr))() ? (openBlock(), createBlock(_component_icon, {
                  key: 0,
                  name: "material-symbols:arrow-forward-rounded",
                  size: "20px"
                })) : (openBlock(), createBlock(_component_icon, {
                  key: 1,
                  name: "material-symbols:arrow-back-rounded",
                  size: "20px"
                }))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="gr-circle1" data-v-c7692e83></div><div class="gr-circle3" data-v-c7692e83></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/aboutUs.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-c7692e83"]]);
const _sfc_main$5 = {
  __name: "workStep",
  __ssrInlineRender: true,
  props: ["cardData", "num"],
  setup(__props) {
    const { public: { api, apiBase } } = useRuntimeConfig();
    console.log(__props.cardData);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_icon = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "service-card",
        dir: ("rtl" in _ctx ? _ctx.rtl : unref(rtl))()
      }, _attrs))} data-v-f9c3f831><div class="gr-circle1" data-v-f9c3f831></div><div class="gr-circle3" data-v-f9c3f831></div><div class="service-card-frame" data-v-f9c3f831><div class="card-top pcc" data-v-f9c3f831><div class="icon-frame pcc" data-v-f9c3f831>`);
      if (__props.cardData.url1) {
        _push(ssrRenderComponent(_component_icon, {
          name: __props.cardData.url1,
          size: "25px"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="card-bottom" data-v-f9c3f831><div class="card-title-frame pcc" data-v-f9c3f831><h5 class="card-title" data-v-f9c3f831>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData))}</h5></div><div class="card-des-frame pcc" data-v-f9c3f831><div class="card-des" data-v-f9c3f831>${(_a = ("useDes" in _ctx ? _ctx.useDes : unref(useDes))(__props.cardData)) != null ? _a : ""}</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/workStep.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const CardWorkStep = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-f9c3f831"]]);
const _sfc_main$4 = {
  __name: "HowDoWeWork",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const splideOption = {
      // type    : 'loop',
      autoplay: "playing",
      // playing // pause
      perPage: 4,
      gap: "1rem",
      rewind: false,
      direction: rtl(),
      breakpoints: {
        1024: {
          perPage: 3
        },
        992: {
          perPage: 2
        },
        550: {
          perPage: 1,
          gap: "0.5rem"
        }
      }
    };
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const steps = ref(null);
    const { data: stepsData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
      `${api.Blocks}?categoryId=13&pageNumber=0&pageSize=100`
    )), __temp = await __temp, __restore(), __temp);
    steps.value = stepsData.value.items;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "row section-title"])}"><h2 class="metal-text mb-5">${ssrInterpolate(_ctx.$t("how-do-we-work"))}</h2></div>`);
      if (unref(steps) && unref(steps).length > 0) {
        _push(ssrRenderComponent(unref(Splide), {
          class: "splide-work",
          options: splideOption
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(steps), (step, index) => {
                _push2(ssrRenderComponent(unref(SplideSlide), {
                  class: "pcc",
                  "data-splide-interval": "10000",
                  key: step.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(CardWorkStep), {
                        cardData: step,
                        num: index
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(CardWorkStep), {
                          cardData: step,
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(steps), (step, index) => {
                  return openBlock(), createBlock(unref(SplideSlide), {
                    class: "pcc",
                    "data-splide-interval": "10000",
                    key: step.id
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(CardWorkStep), {
                        cardData: step,
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
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/HowDoWeWork.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const topScreenPadding = 200;
const bottomScreenPadding = 200;
const _sfc_main$3 = {
  __name: "Words",
  __ssrInlineRender: true,
  props: ["text"],
  setup(__props) {
    const wordsText = ref(__props.text.trim().split(/\s+/).filter((word) => word.length > 0));
    const element = ref(null);
    const words = ref([]);
    for (let index = 0; index < wordsText.value.length; index++) {
      const item = wordsText.value[index];
      words.value.push({ i: index, word: item, opacity: 0 });
    }
    const screenHeight = (void 0).innerHeight;
    (screenHeight - topScreenPadding - bottomScreenPadding) / words.value.length;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "words",
        ref_key: "element",
        ref: element
      }, _attrs))} data-v-7ed0a13a><!--[-->`);
      ssrRenderList(unref(words), (word, index) => {
        _push(`<span class="word" style="${ssrRenderStyle(`opacity: ${word.opacity};`)}" data-v-7ed0a13a>${ssrInterpolate(word.word)}</span>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/effect/Words.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-7ed0a13a"]]);
const _sfc_main$2 = {
  __name: "quotes",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const splideOption = {
      type: "loop",
      autoplay: "playing",
      // playing // pause
      perPage: 1,
      // gap   : '2rem',
      rewind: true,
      direction: rtl()
    };
    const { public: { api, apiBase } } = useRuntimeConfig();
    const sliders = ref([]);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
      `${api.Blocks}?categoryId=12&pageNumber=0&pageSize=100`
    )), __temp = await __temp, __restore(), __temp);
    sliders.value = data.value.items;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1$1;
      const _component_EffectWords = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container quotes-main" }, _attrs))} data-v-fdcda7ef>`);
      if (unref(sliders) && unref(sliders).length > 0) {
        _push(ssrRenderComponent(unref(Splide), {
          class: "splide",
          options: splideOption
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(sliders), (slide) => {
                _push2(ssrRenderComponent(unref(SplideSlide), {
                  class: "item-slide",
                  "data-splide-interval": "10000",
                  key: slide.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="slide-card-frame pcc" data-v-fdcda7ef${_scopeId2}><div class="slide-card" data-v-fdcda7ef${_scopeId2}><div class="img-frame cover" data-v-fdcda7ef${_scopeId2}><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(slide.image))} alt="" data-v-fdcda7ef${_scopeId2}></div><div class="content" data-v-fdcda7ef${_scopeId2}><p data-v-fdcda7ef${_scopeId2}><em data-v-fdcda7ef${_scopeId2}>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(slide))}</em></p>`);
                      _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                      _push3(`</div></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "slide-card-frame pcc" }, [
                          createVNode("div", { class: "slide-card" }, [
                            createVNode("div", { class: "img-frame cover" }, [
                              createVNode("img", {
                                src: ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(slide.image),
                                alt: ""
                              }, null, 8, ["src"])
                            ]),
                            createVNode("div", { class: "content" }, [
                              createVNode("p", null, [
                                createVNode("em", null, toDisplayString(("useName" in _ctx ? _ctx.useName : unref(useName))(slide)), 1)
                              ]),
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  createVNode(_component_EffectWords, {
                                    text: ("useEndpoint" in _ctx ? _ctx.useEndpoint : unref(useEndpoint))(slide)
                                  }, null, 8, ["text"])
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(sliders), (slide) => {
                  return openBlock(), createBlock(unref(SplideSlide), {
                    class: "item-slide",
                    "data-splide-interval": "10000",
                    key: slide.id
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "slide-card-frame pcc" }, [
                        createVNode("div", { class: "slide-card" }, [
                          createVNode("div", { class: "img-frame cover" }, [
                            createVNode("img", {
                              src: ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(slide.image),
                              alt: ""
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "content" }, [
                            createVNode("p", null, [
                              createVNode("em", null, toDisplayString(("useName" in _ctx ? _ctx.useName : unref(useName))(slide)), 1)
                            ]),
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(_component_EffectWords, {
                                  text: ("useEndpoint" in _ctx ? _ctx.useEndpoint : unref(useEndpoint))(slide)
                                }, null, 8, ["text"])
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/quotes.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-fdcda7ef"]]);
const _imports_0 = publicAssetsURL("/logo/Orbit_company-logo-side-both-blue.svg");
const _imports_1 = publicAssetsURL("/imgs/moon-01.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HomeMainHeader = _sfc_main$8;
  const _component_HomeTech = __nuxt_component_1$1;
  const _component_HomeAboutUs = __nuxt_component_2;
  const _component_HomeHowDoWeWork = _sfc_main$4;
  const _component_HomeServices = _sfc_main$a;
  const _component_HomeTraining = _sfc_main$b;
  const _component_HomeQuotes = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))} data-v-865466a8>`);
  _push(ssrRenderComponent(_component_HomeMainHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeTech, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeAboutUs, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeHowDoWeWork, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeServices, { class: "my-10" }, null, _parent));
  _push(`<div class="logo-frame pcc" data-v-865466a8><img class="logo"${ssrRenderAttr("src", _imports_0)} alt="logo" data-v-865466a8></div><div class="banner cover" data-v-865466a8><img${ssrRenderAttr("src", _imports_1)} alt="on the moon image" data-v-865466a8></div>`);
  _push(ssrRenderComponent(_component_HomeTraining, { class: "mt-10" }, null, _parent));
  _push(ssrRenderComponent(_component_HomeQuotes, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-865466a8"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: useI18n().t("Home"),
      meta: [
        { name: "description", content: useI18n().t("Home") },
        { name: "keywords", content: useI18n().t("Home") },
        { property: "og:type", content: useI18n().t("ogType") },
        { property: "og:locale", content: useI18n().t("ogLocale") },
        { property: "og:site_name", content: useI18n().t("ogSiteName") },
        { name: "robots", content: "index, follow" },
        { name: "author", content: useI18n().t("ogSiteName") },
        { name: "canonical", content: "https://orbit-eng.net" + useRoute$1().fullPath }
      ]
    });
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
//# sourceMappingURL=index-BLNupqSX.mjs.map
