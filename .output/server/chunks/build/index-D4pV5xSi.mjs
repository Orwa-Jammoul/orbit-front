import { _ as _export_sfc, b as __nuxt_component_2$1, u as useRuntimeConfig, a as useGetSiteApi } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-7-4ylRvO.mjs';
import __nuxt_component_0$2 from './index-kF6d73p1.mjs';
import { u as useName, g as getInnerText, a as useDes, l as langPath, i as isAr } from './useMethods-C9MbGiJR.mjs';
import { mergeProps, withAsyncContext, unref, withCtx, createBlock, openBlock, resolveComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { _ as __nuxt_component_2 } from './Services-XOu-y2gd.mjs';
import { _ as __nuxt_component_2$2 } from './training-qCNWIfUk.mjs';
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
import './service-Dn1Qy4Vt.mjs';
import './course-CgASIZSD.mjs';

const _imports_0 = publicAssetsURL("/imgs/spaceship.png");
const _sfc_main$3 = {
  __name: "aboutUs",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { public: { api, apiBase } } = useRuntimeConfig();
    const { data: about } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
      `${api.Blocks}/1`
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_icon = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-root grid-bg2",
        dir: "auto"
      }, _attrs))} data-v-e54b72b3><div class="img-frame contain" data-v-e54b72b3><img${ssrRenderAttr("src", _imports_0)} alt="image about us" data-v-e54b72b3></div><div class="about-frame" data-v-e54b72b3><div class="about-box1 grid-bg1" data-v-e54b72b3><h1 class="metal-text" data-v-e54b72b3>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(unref(about)))}</h1><p data-v-e54b72b3>${ssrInterpolate(("getInnerText" in _ctx ? _ctx.getInnerText : unref(getInnerText))(("useDes" in _ctx ? _ctx.useDes : unref(useDes))(unref(about))))}</p><div class="go-to pcs" data-v-e54b72b3><p class="m-0" data-v-e54b72b3>${ssrInterpolate(_ctx.$t("read-more"))}</p>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "icon-frame pcc mx-0 ms-2",
        to: ("langPath" in _ctx ? _ctx.langPath : unref(langPath))("/about-us")
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
      _push(`</div><div class="gr-circle1" data-v-e54b72b3></div><div class="gr-circle3" data-v-e54b72b3></div></div><div class="about-box2 grid-bg1" data-v-e54b72b3><h1 class="metal-text" data-v-e54b72b3>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(unref(about)))}</h1><p data-v-e54b72b3>${ssrInterpolate(("getInnerText" in _ctx ? _ctx.getInnerText : unref(getInnerText))(("useDes" in _ctx ? _ctx.useDes : unref(useDes))(unref(about))))}</p><div class="go-to pcs" data-v-e54b72b3><p class="m-0" data-v-e54b72b3>${ssrInterpolate(_ctx.$t("read-more"))}</p>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "icon-frame pcc mx-0 ms-2",
        to: ("langPath" in _ctx ? _ctx.langPath : unref(langPath))("/about-us")
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
      _push(`</div><div class="gr-circle1" data-v-e54b72b3></div><div class="gr-circle3" data-v-e54b72b3></div></div></div><div class="gr-circle1" data-v-e54b72b3></div><div class="gr-circle2" data-v-e54b72b3></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/aboutUs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e54b72b3"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_parallax = resolveComponent("v-parallax");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_v_parallax, { src: "/imgs/experience-02.jpg" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/experiences.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HomeMainHeader = __nuxt_component_2$1;
  const _component_HomeAboutUs = __nuxt_component_1;
  const _component_HomeServices = __nuxt_component_2;
  const _component_HomeTest = __nuxt_component_2$1;
  const _component_HomeExperiences = __nuxt_component_4;
  const _component_HomeTraining = __nuxt_component_2$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))} data-v-0358a683>`);
  _push(ssrRenderComponent(_component_HomeMainHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeAboutUs, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeServices, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeTest, null, null, _parent));
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
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0358a683"]]);
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
//# sourceMappingURL=index-D4pV5xSi.mjs.map
