import { _ as __nuxt_component_0 } from './service-CGlw78UM.mjs';
import { ref, withAsyncContext, watchEffect, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { u as useRuntimeConfig, a as useGetSiteApi } from './server.mjs';
import './useMethods-CeTnUbTS.mjs';
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
      `${api.blocksApi}/GetMaster?categoryId=4`
    )), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardService = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container"><div class="row"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/training/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BAMnimlz.mjs.map
