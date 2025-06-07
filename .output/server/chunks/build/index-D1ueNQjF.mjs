import { _ as __nuxt_component_0 } from './PageDetails-CbAXL-Yt.mjs';
import { ref, withAsyncContext, watchEffect, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRuntimeConfig, a as useGetSiteApi } from './server.mjs';
import './useMethods-CeTnUbTS.mjs';
import './Icon-BQJZeqX5.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-C75EwnE9.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { public: { api, apiBase } } = useRuntimeConfig();
    const dataResult = ref([]);
    const isLoading = ref(true);
    ref(false);
    ref(null);
    const { data: pageData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(`${api.blocksApi}/9`)), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasicPageDetails = __nuxt_component_0;
      if (!unref(isLoading)) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-d551bd19>`);
        _push(ssrRenderComponent(_component_BasicPageDetails, { item: unref(dataResult) }, null, _parent));
        _push(`<iframe class="google-map"${ssrRenderAttr("src", unref(dataResult).url1)} width="100%" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-d551bd19></iframe></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d551bd19"]]);

export { index as default };
//# sourceMappingURL=index-D1ueNQjF.mjs.map
