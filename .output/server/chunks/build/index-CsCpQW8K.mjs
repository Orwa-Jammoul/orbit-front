import { a as useLocalePath, u as useRuntimeConfig, g as useI18n, d as useGetSiteApi, f as useHead, h as useRoute$1, b as __nuxt_component_0 } from './server.mjs';
import { _ as __nuxt_component_1 } from './service-CET6FYzJ.mjs';
import { r as rtl } from './useMethods-DGpMLSZI.mjs';
import { ref, withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const localePath = useLocalePath();
    const { public: { api, apiBase } } = useRuntimeConfig();
    const { t } = useI18n();
    const services = ref([]);
    ref(true);
    const { data: servicesData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
      `${api.productsSearchApi}?pageNumber=1&pageSize=1000`
    )), __temp = await __temp, __restore(), __temp);
    services.value = servicesData.value.data;
    useHead({
      title: t("services"),
      meta: [
        { name: "description", content: t("services") },
        { name: "keywords", content: useI18n().t("services") },
        { property: "og:type", content: t("ogType") },
        { property: "og:locale", content: t("ogLocale") },
        { property: "og:site_name", content: t("ogSiteName") },
        { name: "robots", content: "index, follow" },
        { name: "author", content: t("ogSiteName") },
        { name: "canonical", content: "https://orbit-eng.net" + useRoute$1().fullPath }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_CardService = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container pt-5" dir="auto"><div class="row path-links text-start pt-4"><h5 class="links-frame" dir="auto">`);
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
      _push(` / <span class="path-link">${ssrInterpolate(_ctx.$t("services"))}</span></h5></div><div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "mb-10 px-0"])}" dir="auto"><h1 class="metal-text"><span>${ssrInterpolate(_ctx.$t("services"))}</span></h1></div></div><div class="container pb-5"${ssrRenderAttr("dir", ("rtl" in _ctx ? _ctx.rtl : unref(rtl))())}><div class="row"><!--[-->`);
      ssrRenderList(unref(services), (service) => {
        _push(`<div class="col-12 col-lg-4 col-md-6">`);
        _push(ssrRenderComponent(_component_CardService, {
          cardData: service,
          num: 0
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CsCpQW8K.mjs.map
