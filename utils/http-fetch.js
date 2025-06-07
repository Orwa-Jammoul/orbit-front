export default async function(endPoint, method = 'GET', body, token) {
  const { public : { apiBase } } = useRuntimeConfig()
  const abortController = new AbortController();
  let startTime;
  let duration;
  let timer = null;

  return await $fetch(endPoint, {
    baseURL: apiBase,
    method,
    body,
    retry: 5,
    signal: abortController.signal,
    headers: {
      'Accept-Language': 'en-US',
      'Authorization': `Bearer ${useMainToken().value}`
    },

    async onRequest({ request, options }) {
      timer = setTimeout(() => {
        abortController.abort();
        console.log(`Retrying request to: ${request}`);
      }, 2500); // Abort request in 2.5s.

      startTime = new Date().getTime();
      options.headers = new Headers(options.headers);
      options.headers.set('starttime', `${new Date().getTime()}`);
      const LocaleTimeString = new Date().toLocaleTimeString();
      console.log('[' + LocaleTimeString + '] SSR-Request: ' + request.toString());
    },

    async onResponse({ request, response }) {
      if (timer) {
        clearTimeout(timer); // clear timer
      }

      const currentTime = new Date().getTime();
      duration = currentTime - startTime;
      const resultConsole = request.toString() + ' - ' + response.status.toString() +  ' %c(' + duration + ' ms)'
      // console.log('✔️%cSSR-Response: ' + resultConsole, 'color: orange', 'color: white');
    },

    async onResponseError({ error }) {
      await console.error('SSR-Error', error);
    },
  })
}