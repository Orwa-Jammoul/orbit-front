// https://nuxt.com/docs/api/configuration/nuxt-config
import { sitemapRoutes } from './composables/sitemap';

export default defineNuxtConfig({
  ssr: true,
  modules: [
    "@nuxtjs/seo",
    "@nuxtjs/i18n",
    "@nuxt/icon",
    "@vesp/nuxt-fontawesome",
    "nuxt-swiper",
    "nuxt-aos",
    "@vee-validate/nuxt",
  ],

  i18n: {
    baseUrl: "https://orbit-eng.net",
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.json' },
      { code: 'ar', iso: 'ar-AE', file: 'ar-AE.json', dir: 'rtl' },
      { code: 'de', iso: 'de-DE', file: 'de-DE.json' }
    ],
    defaultLocale: "en",
    langDir: '../locales',
    bundle: {
      optimizeTranslationDirective: false
    },
    strategy: 'prefix_except_default', //prefix
    customRoutes: 'config',
    pages: {
      // sitemap: false, // explicitly disable i18n for sitemap
      'index': {
        en: '/',
        ar: '/',
        de: '/'
      },
      'about-us': {
        en: '/about-us',
        ar: '/من-نحن',
        de: '/Über-Uns'
      },
      'services': {
        en: '/services',
        ar: '/الخدمات',
        de: '/Dienstleistungen'
      },
      'services-name': {
        en: '/services/[name]',
        ar: '/الخدمات/[name]',
        de: '/Dienstleistungen/[name]'
      },
      'training': {
        en: '/training',
        ar: '/تدريب',
        de: '/Ausbildung'
      },
      'training-name': {
        en: '/training/[name]',
        ar: '/تدريب/[name]',
        de: '/Ausbildung/[name]'
      },
      'contact-us': {
        en: '/contact-us',
        ar: '/تواصل-معنا',
        de: '/Kontakt'
      },
      'privacy-policy': {
        en: '/privacy-policy',
        ar: '/سياسة-الخصوصية',
        de: '/Datenschutzrichtlinie'
      },
      'account/login': {
        en: '/account/login',
        ar: '/حساب/تسجيل-الدخول',
        de: '/konto/anmelden'
      },
      'account/signup': {
        en: '/account/signup',
        ar: '/حساب/تسجيل-جديد',
        de: '/konto/registrieren'
      },
      'terms-and-conditions': {
        en: '/terms-and-conditions',
        ar: '/الشروط-والأحكام',
        de: '/Geschäftsbedingungen'
      },
      '.well-known/[pathMatch(.*)]': {
        en: '/.well-known/:pathMatch(.*)',
        ar: '/.well-known/:pathMatch(.*)',
        de: '/.well-known/:pathMatch(.*)'
      }

    }
  },
  // Sitemap configuration
  sitemap: {
    strictNuxtContentPaths: true,
    defaults: {
      changefreq: 'daily',
      priority: 0.3,
      lastmod: new Date().toISOString(),
    },
    urls: async ()=>{
      const { routes } = await sitemapRoutes()
      return routes ;
    }
  },
  
  // Optional: SEO module configuration
  site: {
    url: 'https://orbit-eng.net',
    name: 'Orbit Engineering',
    description: 'Your site description',
    defaultLocale: 'en',
  },

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },

  fontawesome: {
    icons: {
      solid: ["faHome", "faUser", "faSearch"], // Add the icons you need
    },
  },

  css: [
    "vuetify/lib/styles/main.sass",
    "@/assets/styles/scss/custom.scss",
    "@/assets/styles/scss/animate/animate.min.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    // 'awesome-notifications/dist/style.css'
    // '@mdi/font/css/materialdesignicons.min.css'
  ],

  build: {
    transpile: ["vuetify"],
  },

  app: {
    head: {
      // title: "Orbit Technology and Design Company",
      // htmlAttrs: {
      //   lang: "en"
      // },
      meta: [
          // { charset: "utf-8" },
          // { name: "viewport", content: "width=device-width, initial-scale=1" },
          { name: "description", content: "Technology services website" },
        ],
        link: [
          {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
          },
          {
            rel: "stylesheet",
            href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"            
          },
          { 
            rel: 'icon', 
            href: "/logo/web-title-icon.ico",
            type: "image/x-icon" 
          }
        ],
        script: [        
          {
            src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
          },
          {
            src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js",
          },
          {
            src: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js",
          },
        ],
    }
  },

  runtimeConfig: {
    adminEmail: process.env.ADMIN_EMAIL,
    adminPassword: process.env.ADMIN_PASSWORD,
    serverApiBase: 'https://adminpanel.orbit-eng.net',
    serverApi: {
      AuthLoginApi: '/api/identity/token',
      CurrencyGetDefaultApi: '/api/v1/Currencies/Defualt',
      CountriesGetAllApi: '/api/v1/Countries',
      NationalityGetAllApi: 'api/v1/nations',
      GetPrincedoms:'api/v1/Princedoms'


    },
    public: {
      
      apiBase: 'https://adminpanel.orbit-eng.net',
      api: {
        // Auth
        RegisterNewEmail: "/api/identity/user",
        AuthLoginApi: "/api/identity/token",
        AuthRefreshTokenApi: "/api/identity/token/refresh",
        PersonClientsEditProfileApi: "/api/identity/account/UpdateProfile",
        ChangePasswordAdminApi: "/api/identity/account/ChangePassword",
        forgotPasswordApi: "/api/identity/user/forgot-password",


        PersonClientsApi : "/api/v1/Persons",
        CompanyClientsApi : "/api/v1/Companies",

        // Guest
        activityTypesApi: "/api/v1/activityTypes",


        // Menus
        MenusApi: "/api/v1/menus",
        MenusGetAllApi: "/api/v1/menus/All",
        
        //pages
        PagesApi: "/api/Pages",

        // Blocks
        blocksApi: "/api/blocks",
        Blocks: "/api/Blocks",
        BlocksCategories: "/api/blockcategories",

        // Countries
        NationsApi: "/api/v1/nations",
        CitiesApi: "/api/Cities",
        CountriesGetAllApi: "/api/v1/Countries",
        princedomsApi:'/api/v1/Princedoms',
        FeesApi:'/api/v1/Fees',
        
        // services
        ServiceTypesApi:'/api/v1/ServiceTypes',

        // products
        productsApi:'/api/v1/Products',
        allProductsApi:'/api/v1/Products/GetAllPaged',
        productsByCategoryIdApi:'/api/v1/Products/GetAllPagedProductByCategoryId',
        recentProductsApi:"/api/v1/Products/GetAllRecentProducts",
        offersProductsApi:"/api/v1/Products/GetActiveProductOffers",
        
        productsSearchApi:'/api/v1/products/GetAllPagedSearchProduct',
        
        getProductCategories:"/api/v1/ProductCategories/GetAllParentCategoriesByType",
        
        coursesApi:'/api/v1/Courses',
        // GetByServiceTypeIdApi:'/api/v1/Products/GetByServiceTypeId',

        //order
        FinalOrdinaryOrdersApi:"/api/v1/FinalOrdinaryOrders",
        PayTypesApi:"/api/v1/PayTypes",
        CurrenciesApi:"/api/v1/Currencies",
        CheckCouponsApi:"/api/v1/Coupons/IsValid",
        GetFinalOrdinaryOrdersApi:"/api/v1/FinalOrdinaryOrders/GetAllPagedFinalOrdinaryOrdersByClientId",

        // Invoices
        userInvoices:"/api/v1/Invoices/GetAllPaged",
        
        MessagingApi:"/api/v1/Suggestions",
      },

      globalDefaultImage: '/images/parfume-2.jpg',
      cachedTime: 60 * 60 * 2 * 1000,   // 60: second(1 minutes), 60: minutes(1 hours), 2 hours, 1000: milliseconds 
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/scss/theme/_variables.scss" as *;'
        }
      }
    },
    // esbuild: {
    //   supported: {
    //     'top-level-await': true
    //   }
    // }
  },

  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },

  routeRules: {
    "/.well-known/**": { redirect: "/" }, // Redirects all /.well-known paths to home
  },
});
