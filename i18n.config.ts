import en from "./locales/en.json"
import ar from "./locales/ar.json"

export default defineI18nConfig(() => ({
    legacy: true,
    // defaultLocale: 'ar',
    locale: useCookie('lang').value ?? 'en',
    // locale: localStorage.getItem('lang') ?? 'ar',
    messages: {
        en: en,
        ar: ar
    }
}))
