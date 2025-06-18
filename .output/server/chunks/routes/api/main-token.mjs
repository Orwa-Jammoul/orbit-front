import { c as defineEventHandler, u as useRuntimeConfig, e as useStorage, f as createError } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

function errorOptions(error) {
  var _a, _b, _c;
  return {
    statusCode: (_b = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a.status) != null ? _b : 444,
    message: (_c = error == null ? void 0 : error.message) != null ? _c : "Error ::::: ",
    data: {
      responseBody: error.stack
    }
  };
}

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
