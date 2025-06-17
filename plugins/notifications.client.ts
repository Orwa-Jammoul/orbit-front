import { notify } from "@kyvg/vue3-notification";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(notify);

  return {
    provide: {
      notify,
    },
  };
});

// import AWN from 'awesome-notifications';
// export default defineNuxtPlugin((nuxtApp) => {
//     const options = {
//         position: 'top-right',
//         durations: { global: 2000 },
//     }

//     return {
//         provide: {
//             awn: new AWN(options)
//         }
//     }
// })
