import { _ as __nuxt_component_0 } from './PageDetails-DkSJEC23.mjs';
import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRuntimeConfig, a as useGetSiteApi, l as useHead, o as useI18n } from './server.mjs';
import './nuxt-link-7-4ylRvO.mjs';
import './index-kF6d73p1.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './useMethods-C9MbGiJR.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { public: { api, apiBase } } = useRuntimeConfig();
    const dataResult = ref([]);
    ref(true);
    ref(false);
    ref(null);
    const { data: pageData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(`${api.blocksApi}/9`)), __temp = await __temp, __restore(), __temp);
    dataResult.value = pageData.value;
    useHead({
      title: useI18n().t("contact-us"),
      meta: [
        {
          name: "keywords",
          content: useI18n().t("contact-us")
        },
        {
          name: "description",
          content: useI18n().t("contact-us")
          // content: 'Contact our team - تواصل مع فريقنا'
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasicPageDetails = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9813c041>`);
      _push(ssrRenderComponent(_component_BasicPageDetails, { item: unref(dataResult) }, null, _parent));
      _push(`<iframe class="google-map"${ssrRenderAttr("src", unref(dataResult).url1)} width="100%" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-9813c041></iframe></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9813c041"]]);

export { index as default };
//# sourceMappingURL=index-CkeXAfgg.mjs.map
