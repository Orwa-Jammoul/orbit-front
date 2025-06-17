import { c as defineEventHandler, u as useRuntimeConfig, e as useStorage, f as createError, g as errorOptions } from '../../_/nitro.mjs';
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

const mainToken = defineEventHandler(async () => {
  const { serverApi, serverApiBase } = useRuntimeConfig();
  const { adminEmail, adminPassword } = useRuntimeConfig();
  const storage = useStorage();
  try {
    const response = await $fetch(`${serverApi.AuthLoginApi}`, {
      baseURL: serverApiBase,
      method: "POST",
      retry: 10,
      headers: {
        "Accept-Language": "en-US"
      },
      body: {
        emailOrUserName: adminEmail,
        password: adminPassword
      }
    });
    await storage.setItem("mainToken", response);
    return response;
  } catch (err) {
    console.log("error main token ", err);
    throw createError(errorOptions(err));
  }
});

export { mainToken as default };
//# sourceMappingURL=main-token.mjs.map
