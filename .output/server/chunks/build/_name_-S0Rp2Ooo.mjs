import { _ as __nuxt_component_0 } from './nuxt-link-7-4ylRvO.mjs';
import { u as useName, r as rtl, c as cImg, a as useDes, b as useDes1, d as useDes2, e as useDes3, f as dashed, g as getInnerText } from './useMethods-C9MbGiJR.mjs';
import { ref, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, s as useLocalePath, u as useRuntimeConfig, o as useI18n, x as useRoute$1, a as useGetSiteApi, l as useHead } from './server.mjs';
import { _ as __nuxt_component_2 } from './training-COJBvpj-.mjs';
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
import './course-_K2aVRe1.mjs';

const _sfc_main$1 = {
  __name: "serviceH",
  __ssrInlineRender: true,
  props: ["cardData"],
  setup(__props) {
    const { public: { api, apiBase } } = useRuntimeConfig();
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        class: "service-card",
        dir: ("rtl" in _ctx ? _ctx.rtl : unref(rtl))(),
        to: unref(localePath)(`/services/${("dashed" in _ctx ? _ctx.dashed : unref(dashed))(("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData))}?id=${__props.cardData.id}`),
        "data-aos-duration": "1000",
        "data-aos-delay": `${100}`,
        "data-aos": "slide-up",
        "data-aos-once": "true"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="gr-circle1" data-v-793f9636${_scopeId}></div><div class="service-card-frame" data-v-793f9636${_scopeId}><div class="card-left" data-v-793f9636${_scopeId}><div class="img-frame cover" data-v-793f9636${_scopeId}><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(__props.cardData.productImageUrl1))}${ssrRenderAttr("alt", ("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData))} data-v-793f9636${_scopeId}></div></div><div class="card-right" data-v-793f9636${_scopeId}><h5 class="card-title" data-v-793f9636${_scopeId}>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData))}</h5><p class="card-des" data-v-793f9636${_scopeId}>${ssrInterpolate(("getInnerText" in _ctx ? _ctx.getInnerText : unref(getInnerText))(("useDes1" in _ctx ? _ctx.useDes1 : unref(useDes1))(__props.cardData)))}</p><div class="buttons" data-v-793f9636${_scopeId}><button class="details-btn" data-v-793f9636${_scopeId}>${ssrInterpolate(_ctx.$t("details"))}</button></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "gr-circle1" }),
              createVNode("div", { class: "service-card-frame" }, [
                createVNode("div", { class: "card-left" }, [
                  createVNode("div", { class: "img-frame cover" }, [
                    createVNode("img", {
                      src: ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(__props.cardData.productImageUrl1),
                      alt: ("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData)
                    }, null, 8, ["src", "alt"])
                  ])
                ]),
                createVNode("div", { class: "card-right" }, [
                  createVNode("h5", { class: "card-title" }, toDisplayString(("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData)), 1),
                  createVNode("p", { class: "card-des" }, toDisplayString(("getInnerText" in _ctx ? _ctx.getInnerText : unref(getInnerText))(("useDes1" in _ctx ? _ctx.useDes1 : unref(useDes1))(__props.cardData))), 1),
                  createVNode("div", { class: "buttons" }, [
                    createVNode("button", { class: "details-btn" }, toDisplayString(_ctx.$t("details")), 1)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/serviceH.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-793f9636"]]);
const _sfc_main = {
  __name: "[name]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const localePath = useLocalePath();
    const { public: { api, apiBase } } = useRuntimeConfig();
    const { t } = useI18n();
    const route = useRoute$1();
    const id = route.query.id;
    const dataResult = ref(null);
    const similarItems = ref(null);
    ref(true);
    const { data: serviceData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(`${api.productsApi}/${id}`)), __temp = await __temp, __restore(), __temp);
    dataResult.value = serviceData.value.data;
    if (serviceData.value) {
      const { data: similarData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
        `${api.productsSearchApi}?propductcategoryid=${dataResult.value.productParentCategoryId}&pageNumber=0&pageSize=12`
      )), __temp = await __temp, __restore(), __temp);
      similarItems.value = similarData.value.data.filter((item) => item.id != dataResult.value.id);
    }
    useHead({
      title: useName(serviceData.value.data),
      meta: [
        { name: "description", content: t("ogDescription") },
        { property: "og:title", content: useName(serviceData.value.data) },
        { property: "og:description", content: t("ogDescription") },
        { property: "og:image", content: "https://orbit-eng.net/SEO/imgs/logo-01.png" },
        { property: "og:url", content: "https://orbit-eng.net" + route.fullPath },
        { property: "og:type", content: t("ogType") },
        { property: "og:locale", content: t("ogLocale") },
        { property: "og:site_name", content: t("ogSiteName") },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: useName(serviceData.value.data) },
        { name: "twitter:description", content: t("ogDescription") },
        { name: "twitter:image", content: "https://orbit-eng.net/SEO/imgs/logo-01.png" },
        { name: "twitter:site", content: "@yourtwitterhandle" },
        { name: "twitter:creator", content: "@contentcreator" },
        { name: "robots", content: "index, follow" },
        { name: "keywords", content: "" },
        { name: "author", content: "Your Company Name" },
        { name: "canonical", content: "https://orbit-eng.net" + route.fullPath },
        { name: "apple-mobile-web-app-title", content: useName(serviceData.value.data) },
        { name: "application-name", content: t("ogTitle") },
        { property: "fb:app_id", content: "your-facebook-app-id" },
        { name: "apple-touch-icon", content: "/icons/apple-touch-icon.png" },
        { name: "apple-touch-startup-image", content: "/splash/launch-640x1136.png" },
        { name: "msapplication-TileImage", content: "/icons/mstile-150x150.png" },
        { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "msapplication-Config", content: "/browserconfig.xml" },
        { name: "manifest", content: "/manifest.webmanifest" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2;
      var _a, _b, _c, _d;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_CardServiceH = __nuxt_component_1;
      const _component_HomeTraining = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-root" }, _attrs))} data-v-19bb955d><div class="container" data-v-19bb955d><div class="path-links text-start pt-4" data-v-19bb955d><h5 class="links-frame" dir="auto" data-v-19bb955d>`);
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
      _push(` / `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "path-link",
        to: unref(localePath)(`/services`)
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
      _push(` / <span class="path-link" data-v-19bb955d>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(unref(dataResult)))}</span></h5></div></div><div class="page-body container"${ssrRenderAttr("dir", ("rtl" in _ctx ? _ctx.rtl : unref(rtl))())} data-v-19bb955d><div class="main-content" data-v-19bb955d><div class="content-body" data-v-19bb955d><div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "mb-10 px-0"])}" dir="auto" data-v-19bb955d><h1 class="metal-text" data-v-19bb955d><span data-v-19bb955d>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(unref(dataResult)))}</span></h1></div><div class="description" data-v-19bb955d><div class="section" data-v-19bb955d>`);
      if ((_a = unref(dataResult)) == null ? void 0 : _a.productImageUrl) {
        _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-19bb955d><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).productImageUrl))} alt=" Photo" data-v-19bb955d></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="des" data-v-19bb955d>${(_a2 = ("useDes" in _ctx ? _ctx.useDes : unref(useDes))(unref(dataResult))) != null ? _a2 : ""}</div></div><div class="section" data-v-19bb955d>`);
      if ((_b = unref(dataResult)) == null ? void 0 : _b.productImageUrl1) {
        _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-19bb955d><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).productImageUrl1))} alt=" Photo" data-v-19bb955d></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="des" data-v-19bb955d>${(_b2 = ("useDes1" in _ctx ? _ctx.useDes1 : unref(useDes1))(unref(dataResult))) != null ? _b2 : ""}</div></div><div class="section" data-v-19bb955d>`);
      if ((_c = unref(dataResult)) == null ? void 0 : _c.productImageUrl2) {
        _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-19bb955d><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).productImageUrl2))} alt=" Photo" data-v-19bb955d></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="des" data-v-19bb955d>${(_c2 = ("useDes2" in _ctx ? _ctx.useDes2 : unref(useDes2))(unref(dataResult))) != null ? _c2 : ""}</div></div><div class="section" data-v-19bb955d>`);
      if ((_d = unref(dataResult)) == null ? void 0 : _d.productImageUrl3) {
        _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-19bb955d><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).productImageUrl3))} alt=" Photo" data-v-19bb955d></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="des" data-v-19bb955d>${(_d2 = ("useDes3" in _ctx ? _ctx.useDes3 : unref(useDes3))(unref(dataResult))) != null ? _d2 : ""}</div></div></div></div><aside class="side-nav" data-v-19bb955d><p class="px-0 ps-2" data-v-19bb955d>${ssrInterpolate(_ctx.$t("more"))}</p><!--[-->`);
      ssrRenderList(unref(similarItems), (similar, index) => {
        _push(`<div class="mb-3" data-v-19bb955d>`);
        _push(ssrRenderComponent(_component_CardServiceH, { cardData: similar }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></aside></div></div><div class="container" data-v-19bb955d>`);
      _push(ssrRenderComponent(_component_HomeTraining, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _name_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-19bb955d"]]);

export { _name_ as default };
//# sourceMappingURL=_name_-S0Rp2Ooo.mjs.map
