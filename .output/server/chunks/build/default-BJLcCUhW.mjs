import { _ as _export_sfc, e as useI18n, d as useHead, y as __nuxt_component_3 } from './server.mjs';
import { _ as __nuxt_component_1 } from './contact-CxISoX1S.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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
import './index-BplWO78e.mjs';
import '@iconify/utils/lib/css/icon';
import './useMethods-Cg0KMTOU.mjs';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    useHead({
      htmlAttrs: {
        lang: locale.value
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedNavbar = __nuxt_component_3;
      const _component_SharedMenuContact = __nuxt_component_1;
      const _component_SharedFooter = __nuxt_component_3;
      const _component_HomeLaunching = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d8a4a81f><div data-v-d8a4a81f>`);
      _push(ssrRenderComponent(_component_SharedNavbar, { class: "nav-bar-main" }, null, _parent));
      _push(ssrRenderComponent(_component_SharedMenuContact, null, null, _parent));
      _push(`<div id="slot" data-v-d8a4a81f>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_SharedFooter, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeLaunching, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d8a4a81f"]]);

export { _default as default };
//# sourceMappingURL=default-BJLcCUhW.mjs.map
