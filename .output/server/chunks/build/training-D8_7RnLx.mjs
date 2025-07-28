import { _ as __nuxt_component_1 } from './course-DceyP_nX.mjs';
import { r as rtl } from './useMethods-Cg0KMTOU.mjs';
import { ref, withAsyncContext, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { S as Splide, a as SplideSlide } from '../_/vue-splide.esm.mjs';
import { u as useRuntimeConfig, b as useGetSiteApi } from './server.mjs';

const _sfc_main = {
  __name: "training",
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
    const trainings = ref(null);
    const { data: trainingsData, pending } = ([__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(
      `${api.coursesApi}/GetAllPagedSearchCourse?Coursename=&propductcategoryid=0&propductSubcategoryid=0&propductSubSubcategoryid=0&propductSubSubSubcategoryid=0&fromprice=0&toprice=0&pageNumber=0&pageSize=12`
    )), __temp = await __temp, __restore(), __temp);
    trainings.value = trainingsData.value.data;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCourse = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "row section-title"])}"><h2 class="metal-text">${ssrInterpolate(_ctx.$t("training"))}</h2></div>`);
      if (unref(trainings) && unref(trainings).length > 0) {
        _push(ssrRenderComponent(unref(Splide), {
          class: "splide",
          options: splideOption
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(trainings), (training, index) => {
                _push2(ssrRenderComponent(unref(SplideSlide), {
                  class: "pcc",
                  "data-splide-interval": "10000",
                  key: training.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_CardCourse, {
                        cardData: training,
                        num: index
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_CardCourse, {
                          cardData: training,
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(trainings), (training, index) => {
                  return openBlock(), createBlock(unref(SplideSlide), {
                    class: "pcc",
                    "data-splide-interval": "10000",
                    key: training.id
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_CardCourse, {
                        cardData: training,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/training.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=training-D8_7RnLx.mjs.map
