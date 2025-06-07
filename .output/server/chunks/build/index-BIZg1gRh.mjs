import { _ as __nuxt_component_0, l as localePath, r as rtl } from './useMethods-BC6SoiT9.mjs';
import { _ as __nuxt_component_1 } from './service-CUTbaGv7.mjs';
import { ref, withAsyncContext, watchEffect, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { u as useRuntimeConfig, a as useGetSiteApi } from './server.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { public: { api, apiBase } } = useRuntimeConfig();
    const services = ref([]);
    ref(true);
    const { data: servicesData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
      `${api.productsSearchApi}?pageNumber=1&pageSize=1000`
    )), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_CardService = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container"><div class="row path-links text-start pt-4"><h5 class="links-frame" dir="auto">`);
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
      _push(` / <span class="path-link">${ssrInterpolate(_ctx.$t("services"))}</span></h5></div><div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "mb-10 px-0"])}" dir="auto"><h1 class="metal-text"><span>${ssrInterpolate(_ctx.$t("services"))}</span></h1></div></div><div class="container"><div class="row"><!--[-->`);
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
//# sourceMappingURL=index-BIZg1gRh.mjs.map
