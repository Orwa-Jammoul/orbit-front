import { _ as _export_sfc, u as useRuntimeConfig, g as useI18n, a as useLocalePath, d as useGetSiteApi, f as useHead, h as useRoute$1, b as __nuxt_component_0 } from './server.mjs';
import { _ as __nuxt_component_1 } from './course-C-qUqPie.mjs';
import { r as rtl } from './useMethods-DGpMLSZI.mjs';
import { ref, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
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
    const { public: { api, apiBase } } = useRuntimeConfig();
    const services = ref([]);
    const { t } = useI18n();
    const localePath = useLocalePath();
    const { data: servicesData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
      `${api.coursesApi}/GetAllPagedSearchCourse?Coursename=&propductcategoryid=0&propductSubcategoryid=0&propductSubSubcategoryid=0&propductSubSubSubcategoryid=0&fromprice=0&toprice=0&pageNumber=0&pageSize=12`
    )), __temp = await __temp, __restore(), __temp);
    services.value = servicesData.value.data;
    useHead({
      title: t("training"),
      meta: [
        { name: "description", content: t("training") },
        { name: "keywords", content: useI18n().t("training") },
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
      const _component_CardCourse = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-root" }, _attrs))} data-v-0e931a44><div class="container" data-v-0e931a44><div class="row path-links text-start pt-4" data-v-0e931a44><h5 class="links-frame" dir="auto" data-v-0e931a44>`);
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
      _push(` / <span class="path-link" data-v-0e931a44>${ssrInterpolate(_ctx.$t("training"))}</span></h5></div><div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "mb-10 px-0"])}" dir="auto" data-v-0e931a44><h1 class="metal-text" data-v-0e931a44><span data-v-0e931a44>${ssrInterpolate(_ctx.$t("training"))}</span></h1></div></div><div class="container"${ssrRenderAttr("dir", ("rtl" in _ctx ? _ctx.rtl : unref(rtl))())} data-v-0e931a44><div class="row" data-v-0e931a44><!--[-->`);
      ssrRenderList(unref(services), (service) => {
        _push(`<div class="col-12 col-lg-4 col-md-6" data-v-0e931a44>`);
        _push(ssrRenderComponent(_component_CardCourse, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/training/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0e931a44"]]);

export { index as default };
//# sourceMappingURL=index-ARCHFWn1.mjs.map
