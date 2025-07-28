import { _ as __nuxt_component_0 } from './PageDetails-DgpU7lbF.mjs';
import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useRuntimeConfig, b as useGetSiteApi, d as useHead, e as useI18n, f as useRoute$1 } from './server.mjs';
import { u as useName } from './useMethods-Cg0KMTOU.mjs';
import './nuxt-link-Bc8Oh1WK.mjs';
import './index-BplWO78e.mjs';
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
  __name: "terms-and-conditions",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { public: { api, apiBase } } = useRuntimeConfig();
    ref(null);
    ref(true);
    const { data: termsData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
      `${api.PagesApi}/2`
    )), __temp = await __temp, __restore(), __temp);
    useHead({
      title: useName(termsData.value),
      meta: [
        { name: "description", content: useName(termsData.value) },
        { name: "keywords", content: useName(termsData.value) },
        { property: "og:type", content: useI18n().t("ogType") },
        { property: "og:locale", content: useI18n().t("ogLocale") },
        { property: "og:site_name", content: useI18n().t("ogSiteName") },
        { name: "robots", content: "index, follow" },
        { name: "author", content: useI18n().t("ogSiteName") },
        { name: "canonical", content: "https://orbit-eng.net" + useRoute$1().fullPath }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasicPageDetails = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_BasicPageDetails, { item: unref(termsData) }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms-and-conditions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=terms-and-conditions-CDyjV7Dq.mjs.map
