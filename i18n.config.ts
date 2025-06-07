import en from "./locales/en-US.json"
import ar from "./locales/ar-AE.json"
import de from "./locales/de-DE.json"


export default defineI18nConfig(() => ({
    legacy: true,
    // locale: localStorage.getItem('lang') ?? 'en',
    messages: {
        en: en,
        ar: ar,
        de: de
    }
}))
