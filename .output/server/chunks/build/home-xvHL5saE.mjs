import { _ as _export_sfc, e as useI18n, d as useHead, b as __nuxt_component_2$1 } from './server.mjs';
import { _ as __nuxt_component_1 } from './contact-DlDkjgiL.mjs';
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
import './index-BTm6J6dD.mjs';
import '@iconify/utils/lib/css/icon';
import './useMethods-DM7phY2b.mjs';

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
      const _component_SharedNavbar = __nuxt_component_2$1;
      const _component_SharedMenuContact = __nuxt_component_1;
      const _component_SharedFooter = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d3564a49><div data-v-d3564a49>`);
      _push(ssrRenderComponent(_component_SharedNavbar, {
        class: ["nav-bar-main", { "bg": unref(showBg) }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_SharedMenuContact, null, null, _parent));
      _push(`<div id="slot" data-v-d3564a49>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d3564a49"]]);

export { home as default };
//# sourceMappingURL=home-xvHL5saE.mjs.map
