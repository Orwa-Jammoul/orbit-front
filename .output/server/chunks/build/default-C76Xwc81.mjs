import { _ as _export_sfc, o as useI18n, l as useHead, b as __nuxt_component_2$1 } from './server.mjs';
import { _ as __nuxt_component_1 } from './contact-TkxEDW8r.mjs';
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
import './index-kF6d73p1.mjs';
import '@iconify/utils/lib/css/icon';
import './useMethods-C9MbGiJR.mjs';

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
      const _component_SharedNavbar = __nuxt_component_2$1;
      const _component_SharedMenuContact = __nuxt_component_1;
      const _component_SharedFooter = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a096a67d><div data-v-a096a67d>`);
      _push(ssrRenderComponent(_component_SharedNavbar, { class: "nav-bar-main" }, null, _parent));
      _push(ssrRenderComponent(_component_SharedMenuContact, null, null, _parent));
      _push(`<div id="slot" data-v-a096a67d>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_SharedFooter, null, null, _parent));
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
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a096a67d"]]);

export { _default as default };
//# sourceMappingURL=default-C76Xwc81.mjs.map
