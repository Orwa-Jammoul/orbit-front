import { _ as __nuxt_component_0 } from './PageDetails-DkSJEC23.mjs';
import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useRuntimeConfig, a as useGetSiteApi, l as useHead } from './server.mjs';
import { u as useName } from './useMethods-C9MbGiJR.mjs';
import './nuxt-link-7-4ylRvO.mjs';
import './index-kF6d73p1.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
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
import '@unhead/addons';
import '@unhead/schema-org/vue';
import '@vue/shared';
import 'yup';

const _sfc_main = {
  __name: "privacy-policy",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { public: { api, apiBase } } = useRuntimeConfig();
    const isLoading = ref(true);
    ref(false);
    ref(null);
    const { data: dataResult, pending } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(`${api.PagesApi}/1`)), __temp = await __temp, __restore(), __temp);
    isLoading.value = false;
    useHead({
      title: useName(dataResult.value)
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasicPageDetails = __nuxt_component_0;
      if (!unref(pending)) {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=privacy-policy-B2ppMrZZ.mjs.map
