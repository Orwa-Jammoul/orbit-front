import { l as defineNuxtRouteMiddleware, c as useNuxtApp } from './server.mjs';
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

const { $awn } = useNuxtApp();
const supplierCompany = defineNuxtRouteMiddleware((to, from) => {
});

export { supplierCompany as default };
//# sourceMappingURL=supplierCompany-DWCdk9w1.mjs.map
