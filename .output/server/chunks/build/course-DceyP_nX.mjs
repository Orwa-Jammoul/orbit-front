import { _ as __nuxt_component_0 } from './nuxt-link-Bc8Oh1WK.mjs';
import { h as useEndpoint, r as rtl, c as cImg, u as useName, j as useTr } from './useMethods-Cg0KMTOU.mjs';
import { mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRuntimeConfig, a as useLocalePath } from './server.mjs';

const _sfc_main = {
  __name: "course",
  __ssrInlineRender: true,
  props: ["cardData", "num"],
  setup(__props) {
    const { public: { api, apiBase } } = useRuntimeConfig();
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        class: "service-card",
        dir: ("rtl" in _ctx ? _ctx.rtl : unref(rtl))(),
        to: unref(localePath)(`/training/${("useEndpoint" in _ctx ? _ctx.useEndpoint : unref(useEndpoint))(__props.cardData)}`)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="gr-circle1" data-v-980f7561${_scopeId}></div><div class="service-card-frame" data-v-980f7561${_scopeId}><div class="card-top" data-v-980f7561${_scopeId}><div class="img-frame cover" data-v-980f7561${_scopeId}><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(__props.cardData.courseImageUrl1))}${ssrRenderAttr("alt", ("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData))} data-v-980f7561${_scopeId}></div></div><div class="card-bottom" data-v-980f7561${_scopeId}><h5 class="card-title" data-v-980f7561${_scopeId}>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData))}</h5><p class="card-cat" data-v-980f7561${_scopeId}>${ssrInterpolate(("useTr" in _ctx ? _ctx.useTr : unref(useTr))(__props.cardData.courseParentCategoryNameEn, __props.cardData.courseParentCategoryNameAr, __props.cardData.courseParentCategoryNameGe))}</p><p class="card-cat" data-v-980f7561${_scopeId}>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData.courseDefaultCategory))}</p></div><div class="buttons pcc" data-v-980f7561${_scopeId}><button class="details-btn" data-v-980f7561${_scopeId}>${ssrInterpolate(_ctx.$t("details"))}</button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "gr-circle1" }),
              createVNode("div", { class: "service-card-frame" }, [
                createVNode("div", { class: "card-top" }, [
                  createVNode("div", { class: "img-frame cover" }, [
                    createVNode("img", {
                      src: ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(__props.cardData.courseImageUrl1),
                      alt: ("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData)
                    }, null, 8, ["src", "alt"])
                  ])
                ]),
                createVNode("div", { class: "card-bottom" }, [
                  createVNode("h5", { class: "card-title" }, toDisplayString(("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData)), 1),
                  createVNode("p", { class: "card-cat" }, toDisplayString(("useTr" in _ctx ? _ctx.useTr : unref(useTr))(__props.cardData.courseParentCategoryNameEn, __props.cardData.courseParentCategoryNameAr, __props.cardData.courseParentCategoryNameGe)), 1),
                  createVNode("p", { class: "card-cat" }, toDisplayString(("useName" in _ctx ? _ctx.useName : unref(useName))(__props.cardData.courseDefaultCategory)), 1)
                ]),
                createVNode("div", { class: "buttons pcc" }, [
                  createVNode("button", { class: "details-btn" }, toDisplayString(_ctx.$t("details")), 1)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/course.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-980f7561"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=course-DceyP_nX.mjs.map
