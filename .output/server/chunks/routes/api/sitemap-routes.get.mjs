import { c as defineEventHandler } from '../../_/nitro.mjs';
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
import 'vue';
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

const sitemapRoutes_get = defineEventHandler(async (event) => {
  const services = [
    { id: "service-1", endpointEn: "engineering-services", endpointAr: "engineering-services", endpointGe: "engineering-services" },
    { id: "service-2", endpointEn: "engineering-services2", endpointAr: "engineering-services2", endpointGe: "engineering-services2" }
  ];
  const routes = [];
  for (const service of services) {
    routes.push({
      loc: `/services/${service.endpointEn}`,
      _i18n: {
        languages: {
          en: `/services/${service.endpointEn}`,
          ar: `/\u0627\u0644\u062E\u062F\u0645\u0627\u062A/${service.endpointAr}`,
          de: `/Dienstleistungen/${service.endpointGe}`
        }
      }
    });
  }
  console.log(routes);
  return { data: routes };
});

export { sitemapRoutes_get as default };
//# sourceMappingURL=sitemap-routes.get.mjs.map
