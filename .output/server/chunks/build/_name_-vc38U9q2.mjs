import { _ as _export_sfc, a as useLocalePath, u as useRuntimeConfig, g as useI18n, h as useRoute$1, o as useRouter$1, d as useGetSiteApi, f as useHead, b as __nuxt_component_0 } from './server.mjs';
import { u as useName, r as rtl, c as cImg, h as useAlt, a as useDes, b as useDes1, e as useDes2, f as useDes3, d as useEndpoint } from './useMethods-DGpMLSZI.mjs';
import { ref, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './training-CERSr_Iz.mjs';
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
import './course-C-qUqPie.mjs';
import '../_/vue-splide.esm.mjs';

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
        to: unref(localePath)(`/services/${("useEndpoint" in _ctx ? _ctx.useEndpoint : unref(useEndpoint))(__props.cardData)}`)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="gr-circle1" data-v-22b07ad7${_scopeId}></div><div class="service-card-frame" data-v-22b07ad7${_scopeId}><div class="card-left" data-v-22b07ad7${_scopeId}><div class="img-frame cover" data-v-22b07ad7${_scopeId}><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(__props.cardData.productImageUrl1))}${ssrRenderAttr("alt", ("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData))} data-v-22b07ad7${_scopeId}></div></div><div class="card-right" data-v-22b07ad7${_scopeId}><h5 class="card-title" data-v-22b07ad7${_scopeId}>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData))}</h5><p class="card-des" data-v-22b07ad7${_scopeId}>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData.productDefaultCategory))}</p><div class="buttons" data-v-22b07ad7${_scopeId}><button class="details-btn" data-v-22b07ad7${_scopeId}>${ssrInterpolate(_ctx.$t("details"))}</button></div></div></div>`);
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
                  createVNode("p", { class: "card-des" }, toDisplayString(("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData.productDefaultCategory)), 1),
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
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-22b07ad7"]]);
const _sfc_main = {
  __name: "[name]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c;
    let __temp, __restore;
    const localePath = useLocalePath();
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { t } = useI18n();
    const route = useRoute$1();
    useRouter$1();
    route.query.id;
    const serviceName = route.params.name;
    const dataResult = ref(null);
    const similarItems = ref([]);
    const isLoading = ref(true);
    const error = ref(null);
    try {
      const { data: serviceData, error: serviceError } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
        `${api.productsApi}/GetByEndpoint/${serviceName}`
      )), __temp = await __temp, __restore(), __temp);
      if (serviceError.value || !((_a = serviceData.value) == null ? void 0 : _a.data)) {
        throw new Error(((_b = serviceError.value) == null ? void 0 : _b.message) || t("errors.serviceNotFound"));
      }
      dataResult.value = serviceData.value.data;
      const { data: similarData, error: similarError } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
        `${api.productsSearchApi}?productcategoryid=${dataResult.value.productParentCategoryId}&pageNumber=0&pageSize=12`
      )), __temp = await __temp, __restore(), __temp);
      if (!similarError.value && ((_c = similarData.value) == null ? void 0 : _c.data)) {
        similarItems.value = similarData.value.data.filter(
          (item) => item.id != dataResult.value.id
        );
      }
      useHead({
        title: useName(serviceData.value.data),
        meta: [
          { name: "description", content: t("ogDescription") },
          { property: "og:title", content: useName(serviceData.value.data) },
          { property: "og:description", content: serviceData.value.data.seoDescription },
          { property: "og:image", content: "https://orbit-eng.net/SEO/imgs/Orbit_company-logo-en-white-01.png" },
          { property: "og:url", content: "https://orbit-eng.net" + route.fullPath },
          { property: "og:type", content: t("ogType") },
          { property: "og:locale", content: t("ogLocale") },
          { property: "og:site_name", content: t("ogSiteName") },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: useName(serviceData.value.data) },
          { name: "twitter:description", content: t("ogDescription") },
          { name: "twitter:image", content: "https://orbit-eng.net/SEO/imgs/Orbit_company-logo-en-white-01.png" },
          { name: "twitter:site", content: "@yourtwitterhandle" },
          { name: "twitter:creator", content: "@contentcreator" },
          { name: "robots", content: "index, follow" },
          { name: "keywords", content: serviceData.value.data.keywords },
          { name: "author", content: t("ogSiteName") },
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
    } catch (err) {
      error.value = err.message || t("errors.generic");
      if (err.message.includes("404") || err.message.includes("not found")) {
        error.value = t("errors.serviceNotFound");
      }
      console.error("Service page error:", err);
    } finally {
      isLoading.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a3, _b3, _c3, _d2;
      var _a2, _b2, _c2, _d;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_CardServiceH = __nuxt_component_1;
      const _component_HomeTraining = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-root" }, _attrs))} data-v-c6de7132><div class="container" data-v-c6de7132><div class="path-links text-start pt-4" data-v-c6de7132><h5 class="links-frame" dir="auto" data-v-c6de7132>`);
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
      _push(` / <span class="path-link" data-v-c6de7132>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(unref(dataResult)))}</span></h5></div></div><div class="page-body container"${ssrRenderAttr("dir", ("rtl" in _ctx ? _ctx.rtl : unref(rtl))())} data-v-c6de7132><div class="main-content" data-v-c6de7132><div class="content-body" data-v-c6de7132><div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "mb-10 px-0"])}" dir="auto" data-v-c6de7132><h1 class="metal-text" data-v-c6de7132><span data-v-c6de7132>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(unref(dataResult)))}</span></h1></div><div class="description" data-v-c6de7132><div class="section" data-v-c6de7132>`);
      if ((_a2 = unref(dataResult)) == null ? void 0 : _a2.productImageUrl) {
        _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-c6de7132><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).productImageUrl))}${ssrRenderAttr("alt", ("useAlt" in _ctx ? _ctx.useAlt : unref(useAlt))(unref(dataResult).productSeos, 1))} data-v-c6de7132></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="des" data-v-c6de7132>${(_a3 = ("useDes" in _ctx ? _ctx.useDes : unref(useDes))(unref(dataResult))) != null ? _a3 : ""}</div></div><div class="section" data-v-c6de7132>`);
      if ((_b2 = unref(dataResult)) == null ? void 0 : _b2.productImageUrl1) {
        _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-c6de7132><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).productImageUrl1))}${ssrRenderAttr("alt", ("useAlt" in _ctx ? _ctx.useAlt : unref(useAlt))(unref(dataResult).productSeos, 1))} data-v-c6de7132></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="des" data-v-c6de7132>${(_b3 = ("useDes1" in _ctx ? _ctx.useDes1 : unref(useDes1))(unref(dataResult))) != null ? _b3 : ""}</div></div><div class="section" data-v-c6de7132>`);
      if ((_c2 = unref(dataResult)) == null ? void 0 : _c2.productImageUrl2) {
        _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-c6de7132><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).productImageUrl2))}${ssrRenderAttr("alt", ("useAlt" in _ctx ? _ctx.useAlt : unref(useAlt))(unref(dataResult).productSeos, 2))} data-v-c6de7132></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="des" data-v-c6de7132>${(_c3 = ("useDes2" in _ctx ? _ctx.useDes2 : unref(useDes2))(unref(dataResult))) != null ? _c3 : ""}</div></div><div class="section" data-v-c6de7132>`);
      if ((_d = unref(dataResult)) == null ? void 0 : _d.productImageUrl3) {
        _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-c6de7132><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).productImageUrl3))}${ssrRenderAttr("alt", ("useAlt" in _ctx ? _ctx.useAlt : unref(useAlt))(unref(dataResult).productSeos, 3))} data-v-c6de7132></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="des" data-v-c6de7132>${(_d2 = ("useDes3" in _ctx ? _ctx.useDes3 : unref(useDes3))(unref(dataResult))) != null ? _d2 : ""}</div></div></div></div><aside class="side-nav" data-v-c6de7132><p class="px-0 ps-2" data-v-c6de7132>${ssrInterpolate(_ctx.$t("more"))}</p><!--[-->`);
      ssrRenderList(unref(similarItems), (similar, index) => {
        _push(`<div class="mb-3" data-v-c6de7132>`);
        _push(ssrRenderComponent(_component_CardServiceH, { cardData: similar }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></aside></div></div><div class="container pt-5" data-v-c6de7132>`);
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
const _name_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c6de7132"]]);

export { _name_ as default };
//# sourceMappingURL=_name_-vc38U9q2.mjs.map
