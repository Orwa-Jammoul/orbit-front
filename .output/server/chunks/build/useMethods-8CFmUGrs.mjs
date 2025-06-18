import { o as useI18n, u as useRuntimeConfig, q as useLang } from './server.mjs';

const vNotFound = "";
const dNotFound = "";
const defaultLang = "en";
const langPath = (path) => {
  return isEn() ? path : `/${useLang().value}${path}`;
};
const isEn = () => {
  var _a;
  const { locale } = useI18n();
  const lang = (_a = locale.value) != null ? _a : defaultLang;
  return lang === "en";
};
const isAr = () => {
  var _a;
  const { locale } = useI18n();
  const lang = (_a = locale.value) != null ? _a : defaultLang;
  return lang === "ar";
};
const rtl = () => {
  var _a;
  const { locale } = useI18n();
  const lang = (_a = locale.value) != null ? _a : defaultLang;
  return lang === "en" || lang === "de" ? "ltr" : "rtl";
};
const capitalizeFirsts = (sentence) => {
  let sentenceTemp = sentence.toLowerCase();
  let words = sentenceTemp.split(" ");
  let capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
};
const useName = (data, firstCapital = false, allCapital = false, firsts = false) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
  if (!data) {
    return dNotFound;
  }
  const { locale, locales } = useI18n();
  const lang = locale.value;
  let value;
  if (lang === "en") {
    value = (_k = (_j = (_i = (_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a = data.englishName) != null ? _a : data.nameEnglish) != null ? _b : data.nameEn) != null ? _c : data.enName) != null ? _d : data.fullNameEn) != null ? _e : data.name) != null ? _f : data.fullName) != null ? _g : data.productNameEn) != null ? _h : data.arabicName) != null ? _i : data.en_title) != null ? _j : data.firstName) != null ? _k : vNotFound;
    if (allCapital) {
      value = value.toUpperCase();
    } else if (firsts) {
      value = capitalizeFirsts(value);
    } else if (firstCapital) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
  } else if (lang === "de") {
    value = (_o = (_n = (_m = (_l = data.nameGe) != null ? _l : data.geName) != null ? _m : data.fullNameGe) != null ? _n : data.ge_title) != null ? _o : vNotFound;
    if (allCapital) {
      value = value.toUpperCase();
    } else if (firsts) {
      value = capitalizeFirsts(value);
    } else if (firstCapital) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
  } else {
    value = (_x = (_w = (_v = (_u = (_t = (_s = (_r = (_q = (_p = data.fullName) != null ? _p : data.nameAr) != null ? _q : data.arabicName) != null ? _r : data.nameArabic) != null ? _s : data.fullNameAr) != null ? _t : data.ar_title) != null ? _u : data.name) != null ? _v : data.productNameAr) != null ? _w : data.firstName) != null ? _x : vNotFound;
  }
  return value;
};
const useDes = (data, firstCapital = false, allCapital = false, firsts = false) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  if (!data) {
    return dNotFound;
  }
  const { locale, locales } = useI18n();
  const lang = locale.value;
  let value;
  if (lang === "en") {
    value = (_e = (_d = (_c = (_b = (_a = data.descriptionEnglish) != null ? _a : data.descriptionEn) != null ? _b : data.englishDescription) != null ? _c : data.descriptionAboutEn) != null ? _d : data.description) != null ? _e : vNotFound;
    if (allCapital) {
      value = value.toUpperCase();
    } else if (firsts) {
      value = capitalizeFirsts(value);
    } else if (firstCapital) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
  } else if (lang === "de") {
    value = (_f = data.descriptionGe) != null ? _f : vNotFound;
    if (allCapital) {
      value = value.toUpperCase();
    } else if (firsts) {
      value = capitalizeFirsts(value);
    } else if (firstCapital) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
  } else {
    value = (_j = (_i = (_h = (_g = data.descriptionAr) != null ? _g : data.descriptionArabic) != null ? _h : data.description) != null ? _i : data.descriptionAboutAr) != null ? _j : vNotFound;
  }
  return value;
};
const useDes1 = (data) => {
  var _a, _b, _c, _d, _e, _f;
  if (!data) {
    return dNotFound;
  }
  const { locale, locales } = useI18n();
  const lang = locale.value;
  if (lang === "en") {
    return (_b = (_a = data.englishDescription1) != null ? _a : data.descriptionEn1) != null ? _b : vNotFound;
  } else if (lang === "de") {
    return (_c = data.descriptionGe1) != null ? _c : vNotFound;
  } else {
    return (_f = (_e = (_d = data.descriptionAr1) != null ? _d : data.description1) != null ? _e : data.arabicDescription1) != null ? _f : vNotFound;
  }
};
const useDes2 = (data) => {
  var _a, _b, _c, _d, _e, _f;
  if (!data) {
    return dNotFound;
  }
  const { locale, locales } = useI18n();
  const lang = locale.value;
  if (lang === "en") {
    return (_b = (_a = data.englishDescription2) != null ? _a : data.descriptionEn2) != null ? _b : vNotFound;
  } else if (lang === "de") {
    return (_c = data.descriptionGe2) != null ? _c : vNotFound;
  } else {
    return (_f = (_e = (_d = data.descriptionAr2) != null ? _d : data.description2) != null ? _e : data.arabicDescription2) != null ? _f : vNotFound;
  }
};
const useDes3 = (data) => {
  var _a, _b, _c, _d, _e, _f;
  if (!data) {
    return dNotFound;
  }
  const { locale, locales } = useI18n();
  const lang = locale.value;
  if (lang === "en") {
    return (_b = (_a = data.englishDescription3) != null ? _a : data.descriptionEn3) != null ? _b : vNotFound;
  } else if (lang === "de") {
    return (_c = data.descriptionGe3) != null ? _c : vNotFound;
  } else {
    return (_f = (_e = (_d = data.descriptionAr3) != null ? _d : data.description3) != null ? _e : data.arabicDescription3) != null ? _f : vNotFound;
  }
};
const useIcon = (name) => {
  const icons = {
    "facebook": "iconoir:facebook",
    "instagram": "ant-design:instagram-outlined",
    "youtube": "bi:youtube",
    "youtube-play": "bi:youtube",
    "whatsapp": "ri:whatsapp-line",
    "wechat": "ic:baseline-wechat",
    "telegram": "bx:bxl-telegram",
    "pinterest": "mdi:pinterest",
    "reddit": "ic:baseline-reddit",
    "linkedIn": "mdi:linkedin",
    "quora": "carbon:logo-quora",
    "discord": "ic:baseline-discord",
    "twitch": "ri:twitch-fill",
    "github": "mdi:github",
    "behance": "akar-icons:behance-fill",
    "tiktok": "ic:baseline-tiktok",
    "twitter": "ri:twitter-x-fill",
    "x": "ri:twitter-x-fill",
    "snapchat": "ph:snapchat-logo-fill",
    "linkedin": "basil:linkedin-outline",
    "location": "tdesign:location",
    "phone": "material-symbols:call",
    "email": "material-symbols:mail-outline",
    "unknown": "pajamas:severity-unknown"
  };
  const isKnown = icons[name.toLowerCase()];
  const icon = name && isKnown ? icons[name.toLowerCase()] : icons["unknown"];
  return icon;
};
const cImg = (imgUrl, useDefault = true) => {
  const { public: { api, apiBase } } = useRuntimeConfig();
  if (!imgUrl || imgUrl == "") {
    return useDefault ? `/logo/logo-01.png` : null;
  }
  if (imgUrl.startsWith("data:image")) {
    return imgUrl;
  } else {
    return `${apiBase}/${imgUrl}`;
  }
};
const getInnerText = (strHtmlElement) => {
  return strHtmlElement.replace(/<[^>]*>/g, "");
};
const dashed = (sentence) => {
  if (!sentence) {
    return false;
  }
  return sentence.replace(/ /g, "-");
};

export { useDes as a, useDes1 as b, cImg as c, useDes2 as d, useDes3 as e, dashed as f, getInnerText as g, useIcon as h, isAr as i, langPath as l, rtl as r, useName as u };
//# sourceMappingURL=useMethods-8CFmUGrs.mjs.map
