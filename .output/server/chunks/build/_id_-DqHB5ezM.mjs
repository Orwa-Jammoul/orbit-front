import { _ as __nuxt_component_0, l as localePath, u as useName, r as rtl, c as cImg, a as useDes, b as useDes1, d as useDes2, e as useDes3 } from './useMethods-Bj3Kkejg.mjs';
import { ref, withAsyncContext, watchEffect, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRuntimeConfig, k as useRoute$1, a as useGetSiteApi } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'node:path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'animejs';
import '@fortawesome/fontawesome-svg-core';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { public: { api, apiBase } } = useRuntimeConfig();
    const route = useRoute$1();
    const id = route.params.id;
    const dataResult = ref(null);
    const isLoading = ref(true);
    const { data: serviceData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(`${api.productsApi}/${id}`)), __temp = await __temp, __restore(), __temp);
    watchEffect(async () => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2;
      var _a, _b, _c, _d;
      const _component_nuxt_link = __nuxt_component_0;
      if (!unref(isLoading)) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-becba1b6><div class="container" data-v-becba1b6><div class="row path-links text-start pt-4" data-v-becba1b6><h5 class="links-frame" dir="auto" data-v-becba1b6>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "path-link",
          to: ("localePath" in _ctx ? _ctx.localePath : unref(localePath))("/")
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
        _push(` / `);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "path-link",
          to: ("localePath" in _ctx ? _ctx.localePath : unref(localePath))(`/services`)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("services"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("services")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` / <span class="path-link" data-v-becba1b6>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(unref(dataResult)))}</span></h5></div></div><div class="container" dir="auto" data-v-becba1b6><div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "mb-10 px-0"])}" dir="auto" data-v-becba1b6><h1 class="metal-text" data-v-becba1b6><span data-v-becba1b6>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(unref(dataResult)))}</span></h1></div><div class="row description" data-v-becba1b6><div class="section" data-v-becba1b6>`);
        if ((_a = unref(dataResult)) == null ? void 0 : _a.image) {
          _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-becba1b6><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).image))} alt=" Photo" data-v-becba1b6></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div data-v-becba1b6>${(_a2 = ("useDes" in _ctx ? _ctx.useDes : unref(useDes))(unref(dataResult))) != null ? _a2 : ""}</div></div><div class="section" data-v-becba1b6>`);
        if ((_b = unref(dataResult)) == null ? void 0 : _b.image1) {
          _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-becba1b6><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).image1))} alt=" Photo" data-v-becba1b6></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div data-v-becba1b6>${(_b2 = ("useDes1" in _ctx ? _ctx.useDes1 : unref(useDes1))(unref(dataResult))) != null ? _b2 : ""}</div></div><div class="section" data-v-becba1b6>`);
        if ((_c = unref(dataResult)) == null ? void 0 : _c.image2) {
          _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-becba1b6><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).image2))} alt=" Photo" data-v-becba1b6></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div data-v-becba1b6>${(_c2 = ("useDes2" in _ctx ? _ctx.useDes2 : unref(useDes2))(unref(dataResult))) != null ? _c2 : ""}</div></div><div class="section" data-v-becba1b6>`);
        if ((_d = unref(dataResult)) == null ? void 0 : _d.image3) {
          _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-becba1b6><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).image3))} alt=" Photo" data-v-becba1b6></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div data-v-becba1b6>${(_d2 = ("useDes3" in _ctx ? _ctx.useDes3 : unref(useDes3))(unref(dataResult))) != null ? _d2 : ""}</div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-becba1b6"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-DqHB5ezM.mjs.map
