import { _ as _export_sfc, e as useI18n, d as useHead, y as __nuxt_component_2$1, u as useRuntimeConfig } from './server.mjs';
import { _ as __nuxt_component_1$1 } from './contact-CxISoX1S.mjs';
import { ref, unref, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { j as useTr } from './useMethods-Cg0KMTOU.mjs';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { S as Splide, a as SplideSlide } from '../_/vue-splide.esm.mjs';
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
import './index-BplWO78e.mjs';
import '@iconify/utils/lib/css/icon';

const _sfc_main$2 = {
  __name: "CountdownClock",
  __ssrInlineRender: true,
  props: {
    eventDate: {
      type: String,
      required: true,
      validator: (value) => {
        return !isNaN(Date.parse(value));
      }
    }
  },
  setup(__props) {
    const timeLeft = ref({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "countdown-clock" }, _attrs))} data-v-35854514><div class="countdown-timer" data-v-35854514><div class="time-block" data-v-35854514><span class="time-value" data-v-35854514>${ssrInterpolate(unref(timeLeft).days)}</span><span class="time-label" data-v-35854514>Days</span></div><div class="time-block" data-v-35854514><span class="time-value" data-v-35854514>${ssrInterpolate(unref(timeLeft).hours)}</span><span class="time-label" data-v-35854514>Hours</span></div><div class="time-block" data-v-35854514><span class="time-value" data-v-35854514>${ssrInterpolate(unref(timeLeft).minutes)}</span><span class="time-label" data-v-35854514>Minutes</span></div><div class="time-block" data-v-35854514><span class="time-value" data-v-35854514>${ssrInterpolate(unref(timeLeft).seconds)}</span><span class="time-label" data-v-35854514>Seconds</span></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/CountdownClock.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-35854514"]]);
const _imports_0 = publicAssetsURL("/logo/Orbit_company-logo-side-both-blue.svg");
const eventDate = "2025-08-22T21:00:00";
const _sfc_main$1 = {
  __name: "launching",
  __ssrInlineRender: true,
  setup(__props) {
    const passed = ref(false);
    const splideOption = {
      direction: "ttb",
      height: "6rem",
      wheel: false,
      gap: "1rem",
      // type  : 'fade',
      autoplay: "playing",
      rewind: true
      // drag   : 'free',
      // focus  : 'center',
      // perPage: 1,
      // autoScroll: {
      //   speed: .1,
      // },
      // breakpoints: {
      //   1024: {
      //     perPage: 4,
      //   },
      //   768: {
      //     perPage: 3,
      //   },
      //   480: {
      //     perPage: 2,
      //     gap: '0.5rem',
      //   }
      // }
    };
    const extensions = {};
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const techs = [
      // Web Development (11-15)
      { id: 11, nameEn: "Web Development", nameAr: "\u062A\u0637\u0648\u064A\u0631 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A", nameGe: "Webentwicklung", icon: "" },
      { id: 12, nameEn: "Frontend Development", nameAr: "\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u0627\u062C\u0647\u0627\u062A \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629", nameGe: "Frontend-Entwicklung", icon: "" },
      { id: 13, nameEn: "Backend Development", nameAr: "\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u0627\u062C\u0647\u0627\u062A \u0627\u0644\u062E\u0644\u0641\u064A\u0629", nameGe: "Backend-Entwicklung", icon: "" },
      { id: 14, nameEn: "Full Stack Development", nameAr: "\u062A\u0637\u0648\u064A\u0631 \u0643\u0627\u0645\u0644", nameGe: "Full-Stack-Entwicklung", icon: "" },
      { id: 15, nameEn: "Responsive Design", nameAr: "\u062A\u0635\u0645\u064A\u0645 \u0645\u062A\u062C\u0627\u0648\u0628", nameGe: "Responsives Design", icon: "" },
      // Mobile Development (16-20)
      { id: 16, nameEn: "Mobile App Development", nameAr: "\u062A\u0637\u0648\u064A\u0631 \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644", nameGe: "Mobile-App-Entwicklung", icon: "" },
      { id: 17, nameEn: "Android Development", nameAr: "\u062A\u0637\u0648\u064A\u0631 \u0623\u0646\u062F\u0631\u0648\u064A\u062F", nameGe: "Android-Entwicklung", icon: "" },
      { id: 18, nameEn: "iOS Development", nameAr: "\u062A\u0637\u0648\u064A\u0631 \u0622\u064A \u0623\u0648 \u0625\u0633", nameGe: "iOS-Entwicklung", icon: "" },
      { id: 19, nameEn: "Cross-Platform Development", nameAr: "\u062A\u0637\u0648\u064A\u0631 \u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0645\u0646\u0635\u0627\u062A", nameGe: "Cross-Platform-Entwicklung", icon: "" },
      { id: 20, nameEn: "Flutter", nameAr: "\u0641\u0644\u0627\u062A\u0631", nameGe: "Flutter", icon: "" },
      // Software Development (21-25)
      { id: 21, nameEn: "Software Development", nameAr: "\u062A\u0637\u0648\u064A\u0631 \u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631", nameGe: "Softwareentwicklung", icon: "" },
      { id: 22, nameEn: "Desktop Applications", nameAr: "\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0633\u0637\u062D \u0627\u0644\u0645\u0643\u062A\u0628", nameGe: "Desktop-Anwendungen", icon: "" },
      { id: 23, nameEn: "System Programming", nameAr: "\u0628\u0631\u0645\u062C\u0629 \u0627\u0644\u0623\u0646\u0638\u0645\u0629", nameGe: "Systemprogrammierung", icon: "" },
      // { id: 24, nameEn: "Game Development", nameAr: "تطوير الألعاب", nameGe: "Spieleentwicklung", icon: "" },
      // { id: 25, nameEn: "Embedded Systems", nameAr: "الأنظمة المدمجة", nameGe: "Eingebettete Systeme", icon: "" },
      // Networking (26-30)
      { id: 26, nameEn: "Networking", nameAr: "\u062A\u0646\u0641\u064A\u0630 \u0634\u0628\u0643\u0627\u062A", nameGe: "Netzwerke", icon: "" },
      { id: 27, nameEn: "Network Administration", nameAr: "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0634\u0628\u0643\u0627\u062A", nameGe: "Netzwerkadministration", icon: "" },
      { id: 28, nameEn: "Network Security", nameAr: "\u0623\u0645\u0646 \u0627\u0644\u0634\u0628\u0643\u0627\u062A", nameGe: "Netzwerksicherheit", icon: "" },
      { id: 29, nameEn: "Cisco", nameAr: "\u0633\u064A\u0633\u0643\u0648", nameGe: "Cisco", icon: "" },
      { id: 30, nameEn: "Cloud Networking", nameAr: "\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u062D\u0648\u0633\u0628\u0629 \u0627\u0644\u0633\u062D\u0627\u0628\u064A\u0629", nameGe: "Cloud-Netzwerke", icon: "" },
      // Controllers (31-35)
      { id: 31, nameEn: "Microcontrollers", nameAr: "\u0627\u0644\u0645\u062A\u062D\u0643\u0645\u0627\u062A \u0627\u0644\u062F\u0642\u064A\u0642\u0629", nameGe: "Mikrocontroller", icon: "" },
      { id: 32, nameEn: "Arduino", nameAr: "\u0623\u0631\u062F\u0648\u064A\u0646\u0648", nameGe: "Arduino", icon: "" },
      { id: 33, nameEn: "Raspberry Pi", nameAr: "\u0631\u0627\u0633\u0628\u064A\u0631\u064A \u0628\u0627\u064A", nameGe: "Raspberry Pi", icon: "" },
      { id: 34, nameEn: "PLC Programming", nameAr: "\u0628\u0631\u0645\u062C\u0629 \u0645\u062A\u062D\u0643\u0645\u0627\u062A PLC", nameGe: "PLC-Programmierung", icon: "" },
      { id: 35, nameEn: "IoT Development", nameAr: "\u062A\u0637\u0648\u064A\u0631 \u0625\u0646\u062A\u0631\u0646\u062A \u0627\u0644\u0623\u0634\u064A\u0627\u0621", nameGe: "IoT-Entwicklung", icon: "" },
      // Graphic Design (36-40)
      { id: 36, nameEn: "Graphic Design", nameAr: "\u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u062C\u0631\u0627\u0641\u064A\u0643\u064A", nameGe: "Grafikdesign", icon: "" },
      { id: 37, nameEn: "UI/UX Design", nameAr: "\u062A\u0635\u0645\u064A\u0645 \u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645/\u0627\u0644\u062A\u062C\u0631\u0628\u0629", nameGe: "UI/UX-Design", icon: "" },
      { id: 38, nameEn: "Adobe Photoshop", nameAr: "\u0623\u062F\u0648\u0628\u064A \u0641\u0648\u062A\u0648\u0634\u0648\u0628", nameGe: "Adobe Photoshop", icon: "" },
      { id: 39, nameEn: "Adobe Illustrator", nameAr: "\u0623\u062F\u0648\u0628\u064A \u0625\u0644\u064A\u0633\u062A\u0631\u064A\u062A\u0648\u0631", nameGe: "Adobe Illustrator", icon: "" }
      // { id: 40, nameEn: "Figma", nameAr: "فيجما", nameGe: "Figma", icon: "" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeTest = __nuxt_component_2$1;
      const _component_ElementsCountdownClock = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "launching-root",
        style: `display: ${unref(passed) ? "none" : "block"}`
      }, _attrs))} data-v-a1561a90><div class="launching-slider" data-v-a1561a90>`);
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
                  "data-splide-interval": "4000",
                  key: tech.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="tech-card pcc" data-v-a1561a90${_scopeId2}><h1 class="card-title" data-v-a1561a90${_scopeId2}>${ssrInterpolate(("useTr" in _ctx ? _ctx.useTr : unref(useTr))(tech.nameEn, tech.nameAr, tech.nameGe))}</h1></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "tech-card pcc" }, [
                          createVNode("h1", { class: "card-title" }, toDisplayString(("useTr" in _ctx ? _ctx.useTr : unref(useTr))(tech.nameEn, tech.nameAr, tech.nameGe)), 1)
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
                    "data-splide-interval": "4000",
                    key: tech.id
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "tech-card pcc" }, [
                        createVNode("h1", { class: "card-title" }, toDisplayString(("useTr" in _ctx ? _ctx.useTr : unref(useTr))(tech.nameEn, tech.nameAr, tech.nameGe)), 1)
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
      _push(`</div><div class="logo-frame" data-v-a1561a90><img${ssrRenderAttr("src", _imports_0)} alt="logo" data-v-a1561a90></div><div class="globe pcc" data-v-a1561a90>`);
      _push(ssrRenderComponent(_component_HomeTest, null, null, _parent));
      _push(`</div><div class="clock" data-v-a1561a90>`);
      _push(ssrRenderComponent(_component_ElementsCountdownClock, { "event-date": eventDate }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/launching.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a1561a90"]]);
const _sfc_main = {
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    useHead({
      htmlAttrs: {
        lang: locale.value
      }
    });
    const showBg = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedNavbar = __nuxt_component_2$1;
      const _component_SharedMenuContact = __nuxt_component_1$1;
      const _component_SharedFooter = __nuxt_component_2$1;
      const _component_HomeLaunching = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3de0cf9e><div data-v-3de0cf9e>`);
      _push(ssrRenderComponent(_component_SharedNavbar, {
        class: ["nav-bar-main", { "bg": unref(showBg) }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_SharedMenuContact, null, null, _parent));
      _push(`<div id="slot" data-v-3de0cf9e>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_SharedFooter, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeLaunching, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3de0cf9e"]]);

export { home as default };
//# sourceMappingURL=home-D6kr_SqG.mjs.map
