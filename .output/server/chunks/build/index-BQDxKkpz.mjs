import { ref, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, o as useI18n, s as useLocalePath, u as useRuntimeConfig, a as useGetSiteApi, l as useHead } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-7-4ylRvO.mjs';
import { r as rtl, u as useName, a as useDes, c as cImg, b as useDes1, d as useDes2, e as useDes3 } from './useMethods-C9MbGiJR.mjs';
import '../_/nitro.mjs';
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
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'node:path';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '@iconify/vue';
import '@unhead/addons';
import '@unhead/schema-org/vue';
import '@vue/shared';
import 'yup';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "sphere1",
  __ssrInlineRender: true,
  setup(__props) {
    const container = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "container",
        ref: container,
        class: "shader-container"
      }, _attrs))} data-v-61a3b5ec></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/three/sphere1.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-61a3b5ec"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const localePath = useLocalePath();
    const { public: { api, apiBase } } = useRuntimeConfig();
    const dataResult = ref([]);
    ref(true);
    ref(false);
    ref(null);
    const { data: pageData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(`${api.blocksApi}/7`)), __temp = await __temp, __restore(), __temp);
    dataResult.value = pageData.value;
    useHead({
      title: t("About Us")
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d;
      var _a, _b, _c;
      const _component_ThreeSphere1 = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-root" }, _attrs))} data-v-1ab88899>`);
      _push(ssrRenderComponent(_component_ThreeSphere1, null, null, _parent));
      _push(`<div class="container" data-v-1ab88899><div class="path-links text-start pt-4" data-v-1ab88899><h5 class="links-frame" dir="auto" data-v-1ab88899>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "path-link",
        to: unref(localePath)("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` / <span class="path-link" data-v-1ab88899>${ssrInterpolate(_ctx.$t("About Us"))}</span></h5></div></div><div class="page-body container"${ssrRenderAttr("dir", ("rtl" in _ctx ? _ctx.rtl : unref(rtl))())} data-v-1ab88899><div class="main-content" data-v-1ab88899><div class="content-body" data-v-1ab88899><div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "mb-10 px-0"])}" dir="auto" data-v-1ab88899><h1 class="metal-text" data-v-1ab88899><span data-v-1ab88899>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(unref(dataResult)))}</span></h1></div><div class="description" data-v-1ab88899><div class="section" data-v-1ab88899><div class="des" data-v-1ab88899>${(_a2 = ("useDes" in _ctx ? _ctx.useDes : unref(useDes))(unref(dataResult))) != null ? _a2 : ""}</div></div><div class="section" data-v-1ab88899>`);
      if ((_a = unref(dataResult)) == null ? void 0 : _a.image1) {
        _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-1ab88899><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).image1))} alt=" Photo" data-v-1ab88899></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="des" data-v-1ab88899>${(_b2 = ("useDes1" in _ctx ? _ctx.useDes1 : unref(useDes1))(unref(dataResult))) != null ? _b2 : ""}</div></div><div class="section" data-v-1ab88899>`);
      if ((_b = unref(dataResult)) == null ? void 0 : _b.image2) {
        _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-1ab88899><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).image2))} alt=" Photo" data-v-1ab88899></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="des" data-v-1ab88899>${(_c2 = ("useDes2" in _ctx ? _ctx.useDes2 : unref(useDes2))(unref(dataResult))) != null ? _c2 : ""}</div></div><div class="section" data-v-1ab88899>`);
      if ((_c = unref(dataResult)) == null ? void 0 : _c.image3) {
        _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-1ab88899><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).image3))} alt=" Photo" data-v-1ab88899></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="des" data-v-1ab88899>${(_d = ("useDes3" in _ctx ? _ctx.useDes3 : unref(useDes3))(unref(dataResult))) != null ? _d : ""}</div></div></div></div><aside class="side-nav" data-v-1ab88899><p class="px-0 ps-2" data-v-1ab88899>${ssrInterpolate(_ctx.$t("more"))}</p><div class="mb-3" data-v-1ab88899> hello </div></aside></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1ab88899"]]);

export { index as default };
//# sourceMappingURL=index-BQDxKkpz.mjs.map
