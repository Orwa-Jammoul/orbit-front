import { l as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import 'vue';
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
import 'vue/server-renderer';

const validateIdDigital = defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id !== void 0 && !/^\d+$/.test(to.params.id)) {
    return navigateTo("/404", { redirectCode: 301 });
  }
  if (to.params.productId !== void 0 && !/^\d+$/.test(to.params.productId)) {
    return navigateTo("/404", { redirectCode: 301 });
  }
});

export { validateIdDigital as default };
//# sourceMappingURL=validate-id-digital-BNCAHQAS.mjs.map
