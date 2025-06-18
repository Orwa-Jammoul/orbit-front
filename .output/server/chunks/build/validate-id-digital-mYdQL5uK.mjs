import { y as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import 'vue';
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
import 'vue/server-renderer';
import 'node:path';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '@iconify/vue';
import '@unhead/addons';
import '@unhead/schema-org/vue';
import '@vue/shared';
import 'yup';

const validateIdDigital = defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id !== void 0 && !/^\d+$/.test(to.params.id)) {
    return navigateTo("/404", { redirectCode: 301 });
  }
  if (to.params.productId !== void 0 && !/^\d+$/.test(to.params.productId)) {
    return navigateTo("/404", { redirectCode: 301 });
  }
});

export { validateIdDigital as default };
//# sourceMappingURL=validate-id-digital-mYdQL5uK.mjs.map
