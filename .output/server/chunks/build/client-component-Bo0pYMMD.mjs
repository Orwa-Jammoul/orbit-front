import { defineAsyncComponent, defineComponent, h } from 'vue';
import { u as useNuxtApp, _ as __nuxt_component_0$1 } from './server.mjs';
import '../_/nitro.mjs';
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
import 'vue/server-renderer';

const createClientPage = /* @__NO_SIDE_EFFECTS__ */ (loader) => {
  const page = defineAsyncComponent(loader);
  return defineComponent({
    inheritAttrs: false,
    setup(_, { attrs }) {
      useNuxtApp();
      {
        return () => h("div", [
          h(__nuxt_component_0$1, void 0, {
            default: () => h(page, attrs)
          })
        ]);
      }
    }
  });
};

export { createClientPage };
//# sourceMappingURL=client-component-Bo0pYMMD.mjs.map
