import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as __nuxt_component_1 } from './service-BZCA6mwA.mjs';
import { r as rtl } from './useMethods-Bj3Kkejg.mjs';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ref, withAsyncContext, watchEffect, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRuntimeConfig, a as useGetSiteApi } from './server.mjs';

const _sfc_main = {
  __name: "Services",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { public: { api, apiBase } } = useRuntimeConfig();
    const services = ref([]);
    const isLoading = ref(true);
    const { data: servicesData } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
      `${api.productsSearchApi}?pageNumber=1&pageSize=12`
    )), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_CardService = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "section-root",
        dir: "auto"
      }, _attrs))} data-v-555ab87a><div class="container" data-v-555ab87a><div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "row section-title"])}" data-v-555ab87a><h2 class="metal-text" data-v-555ab87a>${ssrInterpolate(_ctx.$t("services"))}</h2><p data-v-555ab87a> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum molestias aspernatur labore inventore hic? Recusandae praesentium ex delectus odio? </p></div>`);
      if (!unref(isLoading)) {
        _push(`<div class="services-section row px-3" data-v-555ab87a>`);
        _push(ssrRenderComponent(_component_Swiper, {
          class: "mySwiper",
          dir: ("rtl" in _ctx ? _ctx.rtl : unref(rtl))(),
          modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination), "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
          navigation: false,
          "space-between": 40,
          autoplay: { delay: 15e3 },
          pagination: { clickable: true },
          loop: false,
          breakpoints: {
            "1": {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            "550": {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            "768": {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            "1024": {
              slidesPerView: 3,
              slidesPerGroup: 3
            }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(services), (service, index) => {
                _push2(ssrRenderComponent(_component_SwiperSlide, {
                  class: "pcc",
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
                  return openBlock(), createBlock(_component_SwiperSlide, {
                    class: "pcc",
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-555ab87a"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Services-B1dTQQkW.mjs.map
