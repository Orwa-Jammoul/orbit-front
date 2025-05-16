import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { b as _export_sfc } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@iconify/vue';

const _imports_0 = publicAssetsURL("/logos/logo-white-with-name.svg");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "test-section pcc flex-column px-5" }, _attrs))} data-v-c39b1787><div class="logo-frame contain" data-v-c39b1787><img${ssrRenderAttr("src", _imports_0)} alt="orbit-logo" data-v-c39b1787></div><div class="info mt-5" data-v-c39b1787><h6 class="text-center" style="${ssrRenderStyle({ "direction": "rtl" })}" dir="rlt" data-v-c39b1787> \u0627\u0644\u0645\u0648\u0642\u0639 \u0642\u064A\u062F \u0627\u0644\u0625\u0646\u0634\u0640\u0640\u0640\u0627\u0621\u060C \u0633\u0640\u0640\u0640\u0646\u0643\u0648\u0646 \u0647\u0646\u0627 \u0642\u0631\u064A\u0640\u0640\u0640\u0640\u0628\u0627\u064B. </h6><h6 class="text-center" data-v-c39b1787> Website is under construction, we will be there soon. </h6><h6 class="text-center" data-v-c39b1787> Die Website befindet sich im Aufbau, wir sind bald da. </h6></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/under-construction.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c39b1787"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HomeUnderConstruction = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))} data-v-9d575e2e>`);
  _push(ssrRenderComponent(_component_HomeUnderConstruction, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9d575e2e"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Home = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Home, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-iVihEBZy.mjs.map
