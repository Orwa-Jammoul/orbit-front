import { _ as __nuxt_component_1 } from './service-C3K_aPJI.mjs';
import { r as rtl } from './useMethods-36IGheXp.mjs';
import { ref, withAsyncContext, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { S as Splide, a as SplideSlide } from '../_/vue-splide.esm.mjs';
import { u as useRuntimeConfig, b as useGetSiteApi } from './server.mjs';

const _sfc_main = {
  __name: "Services",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const splideOption = {
      // type    : 'loop',
      autoplay: "playing",
      // playing // pause
      perPage: 3,
      gap: "2rem",
      rewind: false,
      direction: rtl(),
      breakpoints: {
        1024: {
          perPage: 2
        },
        768: {
          perPage: 1
        },
        480: {
          perPage: 1,
          gap: "0.5rem"
        }
      }
    };
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const services = ref(null);
    const { data: servicesData, pending } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
      `${api.productsSearchApi}?pageNumber=1&pageSize=12`
    )), __temp = await __temp, __restore(), __temp);
    services.value = servicesData.value.data;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardService = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "row section-title"])}"><h2 class="metal-text">${ssrInterpolate(_ctx.$t("services"))}</h2></div>`);
      if (unref(services) && unref(services).length > 0) {
        _push(ssrRenderComponent(unref(Splide), {
          class: "splide",
          options: splideOption
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(services), (service, index) => {
                _push2(ssrRenderComponent(unref(SplideSlide), {
                  class: "pcc",
                  "data-splide-interval": "10000",
                  key: service.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_CardService, {
                        cardData: service,
                        num: index
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_CardService, {
                          cardData: service,
                          num: index
                        }, null, 8, ["cardData", "num"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(services), (service, index) => {
                  return openBlock(), createBlock(unref(SplideSlide), {
                    class: "pcc",
                    "data-splide-interval": "10000",
                    key: service.id
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_CardService, {
                        cardData: service,
                        num: index
                      }, null, 8, ["cardData", "num"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Services-DfLvlxCb.mjs.map
