import { d as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import 'vue';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const validateIdDigital = defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id !== void 0 && !/^\d+$/.test(to.params.id)) {
    return navigateTo("/404", { redirectCode: 301 });
  }
  if (to.params.productId !== void 0 && !/^\d+$/.test(to.params.productId)) {
    return navigateTo("/404", { redirectCode: 301 });
  }
});

export { validateIdDigital as default };
//# sourceMappingURL=validate-id-digital-Bo_t0Atr.mjs.map
