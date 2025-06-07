import { defineComponent, ref, h, resolveComponent, computed } from 'vue';
import { b as useRouter$1, c as useNuxtApp, p as parseQuery, f as useLang, u as useRuntimeConfig, h as hasProtocol, r as resolveRouteObject, j as joinURL, n as navigateTo, w as withTrailingSlash, d as withoutTrailingSlash, e as nuxtLinkDefaults } from './server.mjs';

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve) {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, options.trailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, options.trailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    var _a, _b, _c;
    const router = useRouter$1();
    const config = useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink == null ? void 0 : useBuiltinLink({ ...props, to });
    const href = computed(() => {
      var _a3;
      var _a2;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return resolveTrailingSlashBehavior(
          href2,
          router.resolve
          /* will not be called */
        );
      }
      if (typeof to.value === "object") {
        return (_a3 = (_a2 = router.resolve(to.value)) == null ? void 0 : _a2.href) != null ? _a3 : null;
      }
      return resolveTrailingSlashBehavior(
        joinURL(config.app.baseURL, to.value),
        router.resolve
        /* will not be called */
      );
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: (_a = link == null ? void 0 : link.isActive) != null ? _a : computed(() => to.value === router.currentRoute.value.path),
      isExactActive: (_b = link == null ? void 0 : link.isExactActive) != null ? _b : computed(() => to.value === router.currentRoute.value.path),
      route: (_c = link == null ? void 0 : link.route) != null ? _c : computed(() => router.resolve(to.value)),
      async navigate() {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      useRouter$1();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      ref(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        var _a;
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href: href.value || null, rel, target }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
  });
}
const __nuxt_component_0 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const vNotFound = "";
const dNotFound = "";
const localePath = (path) => {
  return isEn() ? path : `/${useLang().value}${path}`;
};
const isEn = () => {
  var _a;
  const lang = (_a = useLang().value) != null ? _a : "en";
  return lang === "en";
};
const isAr = () => {
  var _a;
  const lang = (_a = useLang().value) != null ? _a : "en";
  return lang === "ar";
};
const rtl = () => {
  var _a;
  const lang = (_a = useLang().value) != null ? _a : "en";
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
  const lang = useLang().value ? useLang().value : "en";
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
  const lang = useLang().value ? useLang().value : "en";
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
    value = (_j = (_i = (_h = (_g = data.descriptionArabic) != null ? _g : data.descriptionAr) != null ? _h : data.description) != null ? _i : data.descriptionAboutAr) != null ? _j : vNotFound;
  }
  return value;
};
const useDes1 = (data) => {
  var _a, _b, _c, _d, _e, _f;
  if (!data) {
    return dNotFound;
  }
  const lang = useLang().value ? useLang().value : "en";
  if (lang === "en") {
    return (_b = (_a = data.englishDescription1) != null ? _a : data.descriptionEn1) != null ? _b : vNotFound;
  } else if (lang === "de") {
    return (_c = data.descriptionGe1) != null ? _c : vNotFound;
  } else {
    return (_f = (_e = (_d = data.description1) != null ? _d : data.arabicDescription1) != null ? _e : data.descriptionAr1) != null ? _f : vNotFound;
  }
};
const useDes2 = (data) => {
  var _a, _b, _c, _d, _e, _f;
  if (!data) {
    return dNotFound;
  }
  const lang = useLang().value ? useLang().value : "en";
  if (lang === "en") {
    return (_b = (_a = data.englishDescription2) != null ? _a : data.descriptionEn2) != null ? _b : vNotFound;
  } else if (lang === "de") {
    return (_c = data.descriptionGe2) != null ? _c : vNotFound;
  } else {
    return (_f = (_e = (_d = data.description2) != null ? _d : data.arabicDescription2) != null ? _e : data.descriptionAr2) != null ? _f : vNotFound;
  }
};
const useDes3 = (data) => {
  var _a, _b, _c, _d, _e, _f;
  if (!data) {
    return dNotFound;
  }
  const lang = useLang().value ? useLang().value : "en";
  if (lang === "en") {
    return (_b = (_a = data.englishDescription3) != null ? _a : data.descriptionEn3) != null ? _b : vNotFound;
  } else if (lang === "de") {
    return (_c = data.descriptionGe3) != null ? _c : vNotFound;
  } else {
    return (_f = (_e = (_d = data.description3) != null ? _d : data.arabicDescription3) != null ? _e : data.descriptionAr3) != null ? _f : vNotFound;
  }
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
  const htmlElement = (void 0).createElement("div");
  htmlElement.innerHTML = strHtmlElement;
  const innerText = htmlElement.innerText;
  return innerText;
};

export { __nuxt_component_0 as _, useDes as a, useDes1 as b, cImg as c, useDes2 as d, useDes3 as e, getInnerText as g, isAr as i, localePath as l, rtl as r, useName as u };
//# sourceMappingURL=useMethods-Bj3Kkejg.mjs.map
