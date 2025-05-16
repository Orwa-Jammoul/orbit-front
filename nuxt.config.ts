// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/icon',
    'nuxt-swiper',
    'vuetify-nuxt-module',
    '@vee-validate/nuxt',
    '@vesp/nuxt-fontawesome',
    'nuxt-aos',
    'nuxt-tiptap-editor',
  ],
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  tiptap: {
    prefix: 'Tiptap', //prefix for Tiptap imports, composables not included
  },
  css: [
    "@/assets/styles/scss/custom.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
    'awesome-notifications/dist/style.css'
  ],
  vuetifyOptions: {
    // Vuetify configuration
    theme: {
      defaultTheme: 'dark', // light or 'dark'
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#29abe2', // Your primary color
            secondary: '#424242', // Your secondary color
            accent: '#82B1FF', // Your accent color
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: '#ffffff', // Your primary color for dark mode
            secondary: '#424242',
            accent: '#FF4081',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
          },
        },
      },
    },
    defaults: {
      VBtn: {
        rounded: 'xs',
        variant: 'tonal',
      },
    },
  },
  app: {
    head: {
      title: "Orbit",
      htmlAttrs: {
        lang: "ar"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Ecommerce Site" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"            
        },
        { 
          rel: 'icon', 
          href: "/logos/logo-blue.svg",
          type: "image/x-icon" 
        }
      ],
      script: [        
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
        },
        // {
        //   src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js",
        // },
      ],
    }
  },
  runtimeConfig: {
    // serverApiBase: 'https://orbit-eng.com',
    serverApiBase: 'http://localhost:8000',
    serverApi: {
      AuthLoginApi: '/api/identity/token',

    },
    public: {
      // apiBase: 'https://orbit-eng.com',
      apiBase: 'http://localhost:8000',
      api: {
        authLoginApi: '/api/auth/login',
        authLogoutApi: '/api/auth/logout',
        langsApi: '/api/langs',
        usersApi: '/api/auth/users',
        userApi: '/api/auth/user',

        titleTypesApi: '/api/title-types',
        noteTypesApi: '/api/note-types',
        attachmentTypesApi: '/api/attachment-types',
        blocksApi: '/api/blocks',
      },
      globalDefaultImage: '/logos/logo-blue.svg',
      cachedTime: 60 * 60 * 2 * 1000,   // 60: second(1 minutes), 60: minutes(1 hours), 2 hours, 1000: milliseconds 
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
          additionalData: '@use "~/assets/styles/scss/theme/_variables.scss" as *;'
        }
      }
    }
  }

})