import { _ as _export_sfc, a as useLocalePath, u as useRuntimeConfig, d as useGetSiteApi, f as useHead, g as useI18n, h as useRoute$1, p as __nuxt_component_2$1 } from './server.mjs';
import { a as useDes, u as useName } from './useMethods-DGpMLSZI.mjs';
import { ref, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$1 = {
  __name: "contact-point",
  __ssrInlineRender: true,
  props: ["cardData", "num"],
  setup(__props) {
    const { public: { api, apiBase } } = useRuntimeConfig();
    useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-frame pcs" }, _attrs))} data-v-35f7490b><div class="left-section" data-v-35f7490b><div class="circle pcc" data-v-35f7490b>${ssrInterpolate(__props.num)}</div></div><div class="right-section" data-v-35f7490b><h1 class="point-name metal-text" data-v-35f7490b>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData))}</h1><div class="info" data-v-35f7490b>${(_a = ("useDes" in _ctx ? _ctx.useDes : unref(useDes))(__props.cardData)) != null ? _a : ""}</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/contact-point.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-35f7490b"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useLocalePath();
    const { public: { api, apiBase } } = useRuntimeConfig();
    const dataResult = ref([]);
    const points = ref([]);
    ref(true);
    ref(false);
    ref(null);
    const { data: pageData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(`${api.blocksApi}/9`)), __temp = await __temp, __restore(), __temp);
    dataResult.value = pageData.value;
    const { data: pointsData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(`${api.blocksApi}/GetMaster?categoryId=11`)), __temp = await __temp, __restore(), __temp);
    points.value = pointsData.value.items;
    useHead({
      title: useI18n().t("contact-us"),
      meta: [
        { name: "description", content: useI18n().t("contact-us") },
        { name: "keywords", content: useI18n().t("contact-us") },
        { property: "og:type", content: useI18n().t("ogType") },
        { property: "og:locale", content: useI18n().t("ogLocale") },
        { property: "og:site_name", content: useI18n().t("ogSiteName") },
        { name: "robots", content: "index, follow" },
        { name: "author", content: useI18n().t("ogSiteName") },
        { name: "canonical", content: "https://orbit-eng.net" + useRoute$1().fullPath }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_HomeGlobe = __nuxt_component_2$1;
      const _component_CardContactPoint = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "page-root",
        dir: "auto"
      }, _attrs))} data-v-1300e2cf><div class="globe-frame pcc" data-v-1300e2cf>`);
      _push(ssrRenderComponent(_component_HomeGlobe, null, null, _parent));
      _push(`</div><div class="container" data-v-1300e2cf><div class="main-location" data-v-1300e2cf><div class="base-des" data-v-1300e2cf>${(_a = ("useDes" in _ctx ? _ctx.useDes : unref(useDes))(unref(dataResult))) != null ? _a : ""}</div></div><div class="stepper" data-v-1300e2cf><!--[-->`);
      ssrRenderList(unref(points), (part, index2) => {
        _push(`<div class="part" data-v-1300e2cf><div class="vertical" data-v-1300e2cf></div><div class="${ssrRenderClass([{ "pcs": index2 % 2 == 0, "pce": index2 % 2 != 0 }, "left-card"])}" data-v-1300e2cf>`);
        _push(ssrRenderComponent(_component_CardContactPoint, {
          cardData: part,
          num: index2 + 1
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div><iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3267.832774118408!2d37.052578!3d35.010890999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDAwJzM5LjIiTiAzN8KwMDMnMDkuMyJF!5e0!3m2!1sen!2s!4v1755799021267!5m2!1sen!2s" width="100%" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-1300e2cf></iframe></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1300e2cf"]]);

export { index as default };
//# sourceMappingURL=index-CbMPb84y.mjs.map
