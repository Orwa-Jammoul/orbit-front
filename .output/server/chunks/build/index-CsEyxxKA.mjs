import { r as rtl } from './useMethods-CeTnUbTS.mjs';
import { ref, withAsyncContext, watchEffect, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { u as useRuntimeConfig, a as useGetSiteApi, _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './PageDetails-BoK8aLrR.mjs';
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
import './Icon-BQJZeqX5.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-C75EwnE9.mjs';

const _imports_0 = publicAssetsURL("/png/dots-02.png");
const _imports_1 = publicAssetsURL("/logo/logo-blue.svg");
const _sfc_main$1 = {
  __name: "design1",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { public: { api, apiBase } } = useRuntimeConfig();
    const sliders = ref([]);
    const isLoading = ref(true);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
      `${api.Blocks}?categoryId=3&pageNumber=0&pageSize=100`
    )), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
      if (data.value) {
        sliders.value = data.value.items;
        isLoading.value = false;
      }
    });
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "design-root" }, _attrs))} data-v-c0026bb9><div class="bg-img" data-v-c0026bb9><img class="${ssrRenderClass(("rtl" in _ctx ? _ctx.rtl : unref(rtl))())}"${ssrRenderAttr("src", _imports_0)} alt="" data-v-c0026bb9></div><div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "main-img"])}" data-v-c0026bb9><div class="img-frame contain" data-v-c0026bb9><img class="${ssrRenderClass(("rtl" in _ctx ? _ctx.rtl : unref(rtl))())}"${ssrRenderAttr("src", _imports_1)} alt="" data-v-c0026bb9></div></div><div class="gradient-bg" data-v-c0026bb9><svg xmlns="http://www.w3.org/2000/svg" data-v-c0026bb9><defs data-v-c0026bb9><filter id="goo" data-v-c0026bb9><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" data-v-c0026bb9></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" data-v-c0026bb9></feColorMatrix><feBlend in="SourceGraphic" in2="goo" data-v-c0026bb9></feBlend></filter></defs></svg><div class="gradients-container" data-v-c0026bb9><div class="g1" data-v-c0026bb9></div><div class="g2" data-v-c0026bb9></div><div class="g3" data-v-c0026bb9></div><div class="g4" data-v-c0026bb9></div><div class="g5" data-v-c0026bb9></div><div class="interactive" data-v-c0026bb9></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/header/design1.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c0026bb9"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { public: { api, apiBase } } = useRuntimeConfig();
    const dataResult = ref([]);
    const isLoading = ref(true);
    ref(false);
    ref(null);
    const { data: pageData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(`${api.blocksApi}/7`)), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeHeaderDesign1 = __nuxt_component_0;
      const _component_BasicPageDetails = __nuxt_component_0$1;
      if (!unref(isLoading)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_HomeHeaderDesign1, null, null, _parent));
        _push(ssrRenderComponent(_component_BasicPageDetails, { item: unref(dataResult) }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CsEyxxKA.mjs.map
