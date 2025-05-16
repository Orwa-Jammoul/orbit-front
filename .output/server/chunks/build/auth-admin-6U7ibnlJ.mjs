import { k as defineNuxtRouteMiddleware } from './server.mjs';
import 'vue';
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

const authAdmin = defineNuxtRouteMiddleware((to, from) => {
});

export { authAdmin as default };
//# sourceMappingURL=auth-admin-6U7ibnlJ.mjs.map
