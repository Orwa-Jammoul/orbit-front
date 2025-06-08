import { _ as __nuxt_component_0 } from './PageDetails-BHqbriu8.mjs';
import { ref, withAsyncContext, watchEffect, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useRuntimeConfig, a as useGetSiteApi } from './server.mjs';
import './useMethods-Bj3Kkejg.mjs';
import './Icon-CBg3hLjd.mjs';
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
    const { data: pageData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(`${api.blocksApi}/7`)), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasicPageDetails = __nuxt_component_0;
      if (!unref(isLoading)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
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
//# sourceMappingURL=index--GHe11DL.mjs.map
