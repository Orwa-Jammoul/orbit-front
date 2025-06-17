import 'vuetify/styles'
import { createVuetify } from "vuetify";
// import { ThemeDefinition } from "vuetify";
// import { VTextField } from 'vuetify/components/VTextField'
// import { VCard } from 'vuetify/components';
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// const siteTheme:ThemeDefinition = {
//   colors:{
//     pp: '#000',
//   }
// }

export default defineNuxtPlugin((nuxtApp)=>{
  const vuetify = createVuetify({
    // components: {
    //   VCard,
    //   VTextField,
    // },
    components,
    directives,
    theme:{
      defaultTheme: 'dark',
    }
  })

  nuxtApp.vueApp.use(vuetify)
})