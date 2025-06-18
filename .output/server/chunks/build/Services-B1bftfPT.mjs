import { _ as __nuxt_component_1 } from './service-DDBSSpV8.mjs';
import { r as rtl } from './useMethods-8CFmUGrs.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRuntimeConfig, a as useGetSiteApi } from './server.mjs';

const _sfc_main = {
  __name: "Services",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { public: { api, apiBase } } = useRuntimeConfig();
    const { data: services } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
      `${api.productsSearchApi}?pageNumber=1&pageSize=12`
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardService = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "section-root",
        dir: "auto"
      }, _attrs))} data-v-70e5a279><div class="container" data-v-70e5a279><div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "row section-title"])}" data-v-70e5a279><h2 class="metal-text" data-v-70e5a279>${ssrInterpolate(_ctx.$t("services"))}</h2><p data-v-70e5a279> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum molestias aspernatur labore inventore hic? Recusandae praesentium ex delectus odio? </p></div><div class="services-section row px-3" data-v-70e5a279><swiper-container class="mySwiper"${ssrRenderAttr("dir", ("rtl" in _ctx ? _ctx.rtl : unref(rtl))())}${ssrRenderAttr("navigation", false)}${ssrRenderAttr("space-between", 40)}${ssrIncludeBooleanAttr({ delay: 15e3 }) ? " autoplay" : ""}${ssrRenderAttr("pagination", { clickable: true })}${ssrIncludeBooleanAttr(false) ? " loop" : ""}${ssrRenderAttr("breakpoints", {
        "1": {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        "550": {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        "768": {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        "1024": {
          slidesPerView: 3,
          slidesPerGroup: 3
        }
      })} data-v-70e5a279><!--[-->`);
      ssrRenderList(unref(services).data, (service, index) => {
        _push(`<swiper-slide class="pcc" data-v-70e5a279>`);
        _push(ssrRenderComponent(_component_CardService, {
          cardData: service,
          num: index
        }, null, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-70e5a279"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Services-B1bftfPT.mjs.map
