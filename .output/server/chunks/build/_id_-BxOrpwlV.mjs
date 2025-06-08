import { _ as __nuxt_component_0, l as localePath, u as useName, r as rtl, c as cImg, a as useDes, b as useDes1, d as useDes2, e as useDes3, g as getInnerText } from './useMethods-Bj3Kkejg.mjs';
import { ref, withAsyncContext, watchEffect, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRuntimeConfig, k as useRoute$1, a as useGetSiteApi } from './server.mjs';
import { _ as __nuxt_component_2 } from './Services-B1dTQQkW.mjs';
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
import 'swiper/vue';
import './service-BZCA6mwA.mjs';
import 'swiper/modules';

const _sfc_main$1 = {
  __name: "courseH",
  __ssrInlineRender: true,
  props: ["cardData"],
  setup(__props) {
    const { public: { api, apiBase } } = useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        class: "service-card",
        dir: ("rtl" in _ctx ? _ctx.rtl : unref(rtl))(),
        to: ("localePath" in _ctx ? _ctx.localePath : unref(localePath))(`/training/${__props.cardData.id}`),
        "data-aos-duration": "1000",
        "data-aos-delay": `${100}`,
        "data-aos": "slide-up",
        "data-aos-once": "true"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="gr-circle1" data-v-32369637${_scopeId}></div><div class="service-card-frame" data-v-32369637${_scopeId}><div class="card-left" data-v-32369637${_scopeId}><div class="img-frame cover" data-v-32369637${_scopeId}><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(__props.cardData.image))}${ssrRenderAttr("alt", ("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData))} data-v-32369637${_scopeId}></div></div><div class="card-right" data-v-32369637${_scopeId}><h5 class="card-title"${ssrRenderAttr("title", ("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData))} data-v-32369637${_scopeId}>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData))}</h5><p class="card-des" data-v-32369637${_scopeId}>${ssrInterpolate(("getInnerText" in _ctx ? _ctx.getInnerText : unref(getInnerText))(("useDes" in _ctx ? _ctx.useDes : unref(useDes))(__props.cardData)))}</p><div class="buttons" data-v-32369637${_scopeId}><button class="details-btn" data-v-32369637${_scopeId}>${ssrInterpolate(_ctx.$t("details"))}</button></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "gr-circle1" }),
              createVNode("div", { class: "service-card-frame" }, [
                createVNode("div", { class: "card-left" }, [
                  createVNode("div", { class: "img-frame cover" }, [
                    createVNode("img", {
                      src: ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(__props.cardData.image),
                      alt: ("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData)
                    }, null, 8, ["src", "alt"])
                  ])
                ]),
                createVNode("div", { class: "card-right" }, [
                  createVNode("h5", {
                    class: "card-title",
                    title: ("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData)
                  }, toDisplayString(("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData)), 9, ["title"]),
                  createVNode("p", { class: "card-des" }, toDisplayString(("getInnerText" in _ctx ? _ctx.getInnerText : unref(getInnerText))(("useDes" in _ctx ? _ctx.useDes : unref(useDes))(__props.cardData))), 1),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/courseH.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-32369637"]]);
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { public: { api, apiBase } } = useRuntimeConfig();
    const route = useRoute$1();
    const id = route.params.id;
    const dataResult = ref(null);
    const similarItems = ref(null);
    const isLoading = ref(true);
    const { data: courseData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(`${api.blocksApi}/${id}`)), __temp = await __temp, __restore(), __temp);
    watchEffect(async () => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2;
      var _a, _b, _c, _d;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_CardCourseH = __nuxt_component_1;
      const _component_HomeServices = __nuxt_component_2;
      if (!unref(isLoading)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-root" }, _attrs))} data-v-0bc58219><div class="container" data-v-0bc58219><div class="path-links text-start pt-4" data-v-0bc58219><h5 class="links-frame" dir="auto" data-v-0bc58219>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "path-link",
          to: ("localePath" in _ctx ? _ctx.localePath : unref(localePath))("/")
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
          to: ("localePath" in _ctx ? _ctx.localePath : unref(localePath))(`/training`)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("training"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("training")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` / <span class="path-link" data-v-0bc58219>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(unref(dataResult)))}</span></h5></div></div><div class="page-body container"${ssrRenderAttr("dir", ("rtl" in _ctx ? _ctx.rtl : unref(rtl))())} data-v-0bc58219><div class="main-content" data-v-0bc58219><div class="content-body" data-v-0bc58219><div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "mb-10 px-0"])}" dir="auto" data-v-0bc58219><h1 class="metal-text" data-v-0bc58219><span data-v-0bc58219>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(unref(dataResult)))}</span></h1></div><div class="description" data-v-0bc58219><div class="section" data-v-0bc58219>`);
        if ((_a = unref(dataResult)) == null ? void 0 : _a.image) {
          _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-0bc58219><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).image))} alt=" Photo" data-v-0bc58219></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="des" data-v-0bc58219>${(_a2 = ("useDes" in _ctx ? _ctx.useDes : unref(useDes))(unref(dataResult))) != null ? _a2 : ""}</div></div><div class="section" data-v-0bc58219>`);
        if ((_b = unref(dataResult)) == null ? void 0 : _b.image1) {
          _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-0bc58219><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).image1))} alt=" Photo" data-v-0bc58219></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="des" data-v-0bc58219>${(_b2 = ("useDes1" in _ctx ? _ctx.useDes1 : unref(useDes1))(unref(dataResult))) != null ? _b2 : ""}</div></div><div class="section" data-v-0bc58219>`);
        if ((_c = unref(dataResult)) == null ? void 0 : _c.image2) {
          _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-0bc58219><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).image2))} alt=" Photo" data-v-0bc58219></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="des" data-v-0bc58219>${(_c2 = ("useDes2" in _ctx ? _ctx.useDes2 : unref(useDes2))(unref(dataResult))) != null ? _c2 : ""}</div></div><div class="section" data-v-0bc58219>`);
        if ((_d = unref(dataResult)) == null ? void 0 : _d.image3) {
          _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-0bc58219><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(unref(dataResult).image3))} alt=" Photo" data-v-0bc58219></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="des" data-v-0bc58219>${(_d2 = ("useDes3" in _ctx ? _ctx.useDes3 : unref(useDes3))(unref(dataResult))) != null ? _d2 : ""}</div></div></div></div><aside class="side-nav" data-v-0bc58219><p class="px-0 ps-2" data-v-0bc58219>${ssrInterpolate(_ctx.$t("more"))}</p><!--[-->`);
        ssrRenderList(unref(similarItems), (similar, index) => {
          _push(`<div class="mb-3" data-v-0bc58219>`);
          _push(ssrRenderComponent(_component_CardCourseH, { cardData: similar }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></aside></div></div><div class="container" data-v-0bc58219>`);
        _push(ssrRenderComponent(_component_HomeServices, null, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/training/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0bc58219"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-BxOrpwlV.mjs.map
