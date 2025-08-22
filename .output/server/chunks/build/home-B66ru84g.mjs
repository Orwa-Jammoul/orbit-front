import { _ as _export_sfc, g as useI18n, f as useHead, p as __nuxt_component_3 } from './server.mjs';
import { _ as __nuxt_component_1 } from './contact-DGpjMYZT.mjs';
import { ref, unref, useSSRContext } from 'vue';
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
import './index-lD4fRCLv.mjs';
import '@iconify/utils/lib/css/icon';
import './useMethods-DGpMLSZI.mjs';

const _sfc_main = {
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    useHead({
      htmlAttrs: {
        lang: locale.value
      }
    });
    const showBg = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedNavbar = __nuxt_component_3;
      const _component_SharedMenuContact = __nuxt_component_1;
      const _component_SharedFooter = __nuxt_component_3;
      const _component_HomeLaunching = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-789079d6><div data-v-789079d6>`);
      _push(ssrRenderComponent(_component_SharedNavbar, {
        class: ["nav-bar-main", { "bg": unref(showBg) }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_SharedMenuContact, null, null, _parent));
      _push(`<div id="slot" data-v-789079d6>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_SharedFooter, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_HomeLaunching, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-789079d6"]]);

export { home as default };
//# sourceMappingURL=home-B66ru84g.mjs.map
