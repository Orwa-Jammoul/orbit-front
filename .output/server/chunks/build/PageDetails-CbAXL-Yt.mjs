import { _ as __nuxt_component_0$1, l as localePath, u as useName, b as isEn, r as rtl, c as cImg, a as useDes, d as useDes1, e as useDes2, f as useDes3 } from './useMethods-CeTnUbTS.mjs';
import __nuxt_component_1 from './Icon-BQJZeqX5.mjs';
import { _ as _export_sfc, u as useRuntimeConfig, m as modalData, s as showModal } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, watch, resolveComponent, isRef, createBlock, openBlock, Fragment, renderList, createCommentVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';

const _sfc_main$1 = {
  __name: "imgs",
  __ssrInlineRender: true,
  setup(__props) {
    const { public: { api, apiBase } } = useRuntimeConfig();
    const sIndex = ref(0);
    const album = ref([]);
    const defaultIndex = ref(0);
    modalData().value.map((item, i) => {
      item.isDefault ? defaultIndex.value = i : "";
    });
    watch(showModal(), () => {
      sIndex.value = 0;
      modalData().value.map((item, i) => {
        item.isDefault ? defaultIndex.value = i : "";
      });
      sIndex.value = defaultIndex.value;
    });
    watch(modalData(), () => {
      album.value = modalData().value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_carousel = resolveComponent("v-carousel");
      const _component_v_carousel_item = resolveComponent("v-carousel-item");
      const _component_v_slide_group = resolveComponent("v-slide-group");
      const _component_v_slide_group_item = resolveComponent("v-slide-group-item");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_scale_transition = resolveComponent("v-scale-transition");
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "imgs-modal" }, _attrs))} data-v-c097ff82>`);
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: ("showModal" in _ctx ? _ctx.showModal : unref(showModal))().value,
        "onUpdate:modelValue": ($event) => ("showModal" in _ctx ? _ctx.showModal : unref(showModal))().value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="main-dialog noselect" data-v-c097ff82${_scopeId}><div class="main-img" data-v-c097ff82${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_carousel, {
              class: "h-100",
              modelValue: unref(sIndex),
              "onUpdate:modelValue": ($event) => isRef(sIndex) ? sIndex.value = $event : null,
              "hide-delimiters": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(album), (img, i) => {
                    _push3(ssrRenderComponent(_component_v_carousel_item, {
                      class: "item-slide",
                      key: img.id,
                      value: i,
                      src: `${unref(apiBase)}/${img.image}`,
                      contain: ""
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(album), (img, i) => {
                      return openBlock(), createBlock(_component_v_carousel_item, {
                        class: "item-slide",
                        key: img.id,
                        value: i,
                        src: `${unref(apiBase)}/${img.image}`,
                        contain: ""
                      }, null, 8, ["value", "src"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="imgs-ribbon pcc" data-v-c097ff82${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_slide_group, {
              modelValue: unref(sIndex),
              "onUpdate:modelValue": ($event) => isRef(sIndex) ? sIndex.value = $event : null,
              class: "pa-4",
              "selected-class": "bg-success",
              "show-arrows": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(album), (img, i) => {
                    _push3(ssrRenderComponent(_component_v_slide_group_item, { key: i }, {
                      default: withCtx(({ isSelected, toggle, selectedClass }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_card, {
                            class: ["select-img cover", ["ma-1", selectedClass, { "active": isSelected }]],
                            color: "grey-lighten-1",
                            height: "70",
                            width: "70",
                            onClick: ($event) => sIndex.value = i
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_img, {
                                  height: "70",
                                  src: `${unref(apiBase)}/${img.image}`,
                                  alt: `img-${img.id}`,
                                  cover: ""
                                }, null, _parent5, _scopeId4));
                                _push5(`<div class="d-flex fill-height align-center justify-center" data-v-c097ff82${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_v_scale_transition, null, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      if (isSelected) {
                                        _push6(ssrRenderComponent(_component_v_icon, {
                                          color: "white",
                                          icon: "mdi-close-circle-outline",
                                          size: "48"
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [
                                        isSelected ? (openBlock(), createBlock(_component_v_icon, {
                                          key: 0,
                                          color: "white",
                                          icon: "mdi-close-circle-outline",
                                          size: "48"
                                        })) : createCommentVNode("", true)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode(_component_v_img, {
                                    height: "70",
                                    src: `${unref(apiBase)}/${img.image}`,
                                    alt: `img-${img.id}`,
                                    cover: ""
                                  }, null, 8, ["src", "alt"]),
                                  createVNode("div", { class: "d-flex fill-height align-center justify-center" }, [
                                    createVNode(_component_v_scale_transition, null, {
                                      default: withCtx(() => [
                                        isSelected ? (openBlock(), createBlock(_component_v_icon, {
                                          key: 0,
                                          color: "white",
                                          icon: "mdi-close-circle-outline",
                                          size: "48"
                                        })) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_card, {
                              class: ["select-img cover", ["ma-1", selectedClass, { "active": isSelected }]],
                              color: "grey-lighten-1",
                              height: "70",
                              width: "70",
                              onClick: ($event) => sIndex.value = i
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  height: "70",
                                  src: `${unref(apiBase)}/${img.image}`,
                                  alt: `img-${img.id}`,
                                  cover: ""
                                }, null, 8, ["src", "alt"]),
                                createVNode("div", { class: "d-flex fill-height align-center justify-center" }, [
                                  createVNode(_component_v_scale_transition, null, {
                                    default: withCtx(() => [
                                      isSelected ? (openBlock(), createBlock(_component_v_icon, {
                                        key: 0,
                                        color: "white",
                                        icon: "mdi-close-circle-outline",
                                        size: "48"
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class", "onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(album), (img, i) => {
                      return openBlock(), createBlock(_component_v_slide_group_item, { key: i }, {
                        default: withCtx(({ isSelected, toggle, selectedClass }) => [
                          createVNode(_component_v_card, {
                            class: ["select-img cover", ["ma-1", selectedClass, { "active": isSelected }]],
                            color: "grey-lighten-1",
                            height: "70",
                            width: "70",
                            onClick: ($event) => sIndex.value = i
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_img, {
                                height: "70",
                                src: `${unref(apiBase)}/${img.image}`,
                                alt: `img-${img.id}`,
                                cover: ""
                              }, null, 8, ["src", "alt"]),
                              createVNode("div", { class: "d-flex fill-height align-center justify-center" }, [
                                createVNode(_component_v_scale_transition, null, {
                                  default: withCtx(() => [
                                    isSelected ? (openBlock(), createBlock(_component_v_icon, {
                                      key: 0,
                                      color: "white",
                                      icon: "mdi-close-circle-outline",
                                      size: "48"
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class", "onClick"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "main-dialog noselect" }, [
                createVNode("div", { class: "main-img" }, [
                  createVNode(_component_v_carousel, {
                    class: "h-100",
                    modelValue: unref(sIndex),
                    "onUpdate:modelValue": ($event) => isRef(sIndex) ? sIndex.value = $event : null,
                    "hide-delimiters": ""
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(album), (img, i) => {
                        return openBlock(), createBlock(_component_v_carousel_item, {
                          class: "item-slide",
                          key: img.id,
                          value: i,
                          src: `${unref(apiBase)}/${img.image}`,
                          contain: ""
                        }, null, 8, ["value", "src"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "imgs-ribbon pcc" }, [
                  createVNode(_component_v_slide_group, {
                    modelValue: unref(sIndex),
                    "onUpdate:modelValue": ($event) => isRef(sIndex) ? sIndex.value = $event : null,
                    class: "pa-4",
                    "selected-class": "bg-success",
                    "show-arrows": ""
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(album), (img, i) => {
                        return openBlock(), createBlock(_component_v_slide_group_item, { key: i }, {
                          default: withCtx(({ isSelected, toggle, selectedClass }) => [
                            createVNode(_component_v_card, {
                              class: ["select-img cover", ["ma-1", selectedClass, { "active": isSelected }]],
                              color: "grey-lighten-1",
                              height: "70",
                              width: "70",
                              onClick: ($event) => sIndex.value = i
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  height: "70",
                                  src: `${unref(apiBase)}/${img.image}`,
                                  alt: `img-${img.id}`,
                                  cover: ""
                                }, null, 8, ["src", "alt"]),
                                createVNode("div", { class: "d-flex fill-height align-center justify-center" }, [
                                  createVNode(_component_v_scale_transition, null, {
                                    default: withCtx(() => [
                                      isSelected ? (openBlock(), createBlock(_component_v_icon, {
                                        key: 0,
                                        color: "white",
                                        icon: "mdi-close-circle-outline",
                                        size: "48"
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class", "onClick"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/imgs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c097ff82"]]);
const _sfc_main = {
  __name: "PageDetails",
  __ssrInlineRender: true,
  props: ["item"],
  setup(__props) {
    const { public: { api, apiBase } } = useRuntimeConfig();
    ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2;
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_icon = __nuxt_component_1;
      const _component_ModalImgs = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-details-root" }, _attrs))} data-v-46157f60><div class="container" data-v-46157f60><div class="row path-links text-start pt-4" data-v-46157f60><h5 class="links-frame" dir="auto" data-v-46157f60>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "path-link",
        to: ("localePath" in _ctx ? _ctx.localePath : unref(localePath))("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` / <span class="path-link" data-v-46157f60>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(__props.item))}</span></h5></div><div class="${ssrRenderClass([("isEn" in _ctx ? _ctx.isEn : unref(isEn))() ? "title_en" : "", "title-formatting3 mb-10 px-0"])}" data-v-46157f60><h1 style="${ssrRenderStyle({ "font-weight": "var(--fw-9)" })}" class="text-center color" data-v-46157f60><span data-v-46157f60>${ssrInterpolate(("useName" in _ctx ? _ctx.useName : unref(useName))(__props.item))}</span></h1></div></div>`);
      if (__props.item) {
        _push(`<div class="container" dir="auto" data-v-46157f60><div class="row description" data-v-46157f60>`);
        if (__props.item.descriptionEn) {
          _push(`<div class="section" data-v-46157f60>`);
          if (__props.item.image) {
            _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-46157f60><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(__props.item.image))} alt=" Photo" data-v-46157f60></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div data-v-46157f60>${(_a2 = ("useDes" in _ctx ? _ctx.useDes : unref(useDes))(__props.item)) != null ? _a2 : ""}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.item.descriptionEn1) {
          _push(`<div class="section" data-v-46157f60>`);
          if (__props.item.image1) {
            _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-46157f60><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(__props.item.image1))} alt=" Photo" data-v-46157f60></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div data-v-46157f60>${(_b2 = ("useDes1" in _ctx ? _ctx.useDes1 : unref(useDes1))(__props.item)) != null ? _b2 : ""}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.item.descriptionEn2) {
          _push(`<div class="section" data-v-46157f60>`);
          if ((_a = __props.item) == null ? void 0 : _a.image2) {
            _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-46157f60><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(__props.item.image2))} alt=" Photo" data-v-46157f60></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div data-v-46157f60>${(_c2 = ("useDes2" in _ctx ? _ctx.useDes2 : unref(useDes2))(__props.item)) != null ? _c2 : ""}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.item.descriptionEn3) {
          _push(`<div class="section" data-v-46157f60>`);
          if ((_b = __props.item) == null ? void 0 : _b.image3) {
            _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "img-frame contain"])}" data-v-46157f60><img${ssrRenderAttr("src", ("cImg" in _ctx ? _ctx.cImg : unref(cImg))(__props.item.image3))} alt=" Photo" data-v-46157f60></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div data-v-46157f60>${(_d2 = ("useDes3" in _ctx ? _ctx.useDes3 : unref(useDes3))(__props.item)) != null ? _d2 : ""}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (((_c = __props.item.pageAttachements) == null ? void 0 : _c.length) > 0) {
          _push(`<div class="row attachments-section pt-1" data-v-46157f60><h2 class="section-title" data-v-46157f60>${ssrInterpolate(_ctx.$t("Attachments"))}</h2><ol class="page-attachments px-0 ps-10" data-v-46157f60><!--[-->`);
          ssrRenderList((_d = __props.item) == null ? void 0 : _d.pageAttachements, (attachment) => {
            _push(`<li data-v-46157f60><a${ssrRenderAttr("href", `${unref(apiBase)}/${attachment.file}`)} target="_blank" class="attachment-link" data-v-46157f60>`);
            _push(ssrRenderComponent(_component_icon, {
              name: "majesticons:attachment",
              size: "18px"
            }, null, _parent));
            _push(` ${ssrInterpolate(_ctx.$t("downloadFile"))}</a></li>`);
          });
          _push(`<!--]--></ol></div>`);
        } else {
          _push(`<!---->`);
        }
        if (((_e = __props.item.pagePhotos) == null ? void 0 : _e.length) > 0) {
          _push(`<div class="row page-photos" data-v-46157f60><h2 class="section-title" data-v-46157f60>${ssrInterpolate(_ctx.$t("photos"))}</h2><div class="row" data-v-46157f60><!--[-->`);
          ssrRenderList((_f = __props.item) == null ? void 0 : _f.pagePhotos, (photo) => {
            _push(`<div class="col-md-3 mb-5" data-v-46157f60><div class="card photo-card contain" data-v-46157f60><img${ssrRenderAttr("src", `${unref(apiBase)}/${photo.image}`)} class="card-img-top img-fluid" alt="Page Photo" data-v-46157f60><img${ssrRenderAttr("src", `${unref(apiBase)}/${photo.image}`)} class="card-img-top img-fluid bg" alt="Page Photo" data-v-46157f60></div></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (((_g = __props.item.pageVideos) == null ? void 0 : _g.length) > 0) {
          _push(`<div class="row video-section pt-5" data-v-46157f60><h2 class="section-title" data-v-46157f60>${ssrInterpolate(_ctx.$t("Videos"))}</h2><div class="video-list" data-v-46157f60><!--[-->`);
          ssrRenderList(__props.item.pageVideos, (video) => {
            _push(`<div class="video-item" data-v-46157f60><video controls${ssrRenderAttr("src", `${unref(apiBase)}/${video.file}`)} class="video-player" data-v-46157f60> Your browser does not support the video tag. </video></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ModalImgs, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/basic/PageDetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-46157f60"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=PageDetails-CbAXL-Yt.mjs.map
