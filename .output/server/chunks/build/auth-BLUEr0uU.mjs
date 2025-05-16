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

const auth = defineNuxtRouteMiddleware((to, from) => {
});

export { auth as default };
//# sourceMappingURL=auth-BLUEr0uU.mjs.map
