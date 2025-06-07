import { l as defineNuxtRouteMiddleware } from './server.mjs';
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

const authProductExists = defineNuxtRouteMiddleware(() => {
});

export { authProductExists as default };
//# sourceMappingURL=auth-product-exists-BD6xoQfb.mjs.map
