import __nuxt_component_0$1 from './index-kF6d73p1.mjs';
import { ref, mergeProps, unref, watch, withCtx, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, resolveComponent, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc, D as useMenu, o as useI18n, e as useNuxtApp, u as useRuntimeConfig, B as configure, C as Form, z as useFetch, F as Field, E as ErrorMessage, A as useMainToken } from './server.mjs';
import * as yup from 'yup';
import { r as rtl, i as isAr, h as useIcon } from './useMethods-C9MbGiJR.mjs';

const _sfc_main$3 = {
  __name: "VTextInputNew",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "file",
      required: false
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: "text",
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    astricts: {
      type: Boolean,
      default: false
    },
    border_color: {
      type: String,
      default: "57585a"
    },
    color: {
      type: String,
      default: "fff"
    },
    height: {
      type: String,
      default: "35px"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const inputField = ref(null);
    const inputData = ref(null);
    const handleInputChange = (event) => {
      inputData.value = event.target.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_text_field = resolveComponent("v-text-field");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-input-field" }, _attrs))} data-v-69376178>`);
      _push(ssrRenderComponent(unref(Field), {
        class: "d-none",
        ref_key: "inputField",
        ref: inputField,
        name: __props.name,
        type: __props.type
      }, {
        default: withCtx(({ field, meta }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_text_field, mergeProps(field, {
              label: `${__props.label} ${__props.astricts ? `*` : ``}`,
              placeholder: __props.placeholder,
              type: __props.type,
              hint: __props.hint,
              color: "primary",
              "hide-details": "auto",
              "bg-color": "grey-lighten-2",
              onChange: handleInputChange
            }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_text_field, mergeProps(field, {
                label: `${__props.label} ${__props.astricts ? `*` : ``}`,
                placeholder: __props.placeholder,
                type: __props.type,
                hint: __props.hint,
                color: "primary",
                "hide-details": "auto",
                "bg-color": "grey-lighten-2",
                onChange: handleInputChange
              }), null, 16, ["label", "placeholder", "type", "hint"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(ErrorMessage), {
        name: __props.name,
        as: "div",
        class: "mb-2 help w-100 text-start is-invalid"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/Form/VTextInputNew.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-69376178"]]);
const _sfc_main$2 = {
  __name: "VTextAreaNew",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "file",
      required: false
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: "text",
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    astricts: {
      type: Boolean,
      default: false
    },
    border_color: {
      type: String,
      default: "57585a"
    },
    color: {
      type: String,
      default: "fff"
    },
    height: {
      type: String,
      default: "35px"
    },
    row: {
      type: String,
      default: "3"
    },
    noResize: {
      type: Boolean,
      default: false
    },
    counter: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const inputData = ref(null);
    const handleInputChange = (event) => {
      inputData.value = event.target.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_textarea = resolveComponent("v-textarea");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-1 text-input-field" }, _attrs))} data-v-bd518f58>`);
      _push(ssrRenderComponent(unref(Field), {
        class: "d-none",
        modelValue: unref(inputData),
        "onUpdate:modelValue": ($event) => isRef(inputData) ? inputData.value = $event : null,
        name: __props.name,
        type: __props.type
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_textarea, {
        label: `${__props.label} ${__props.astricts ? `*` : ``}`,
        placeholder: __props.placeholder,
        type: __props.type,
        autocomplete: __props.type,
        hint: __props.hint,
        color: "primary",
        "hide-details": "auto",
        "bg-color": "grey-lighten-2",
        rows: __props.row,
        "no-resize": __props.noResize,
        counter: __props.counter,
        onChange: handleInputChange
      }, null, _parent));
      _push(ssrRenderComponent(unref(ErrorMessage), {
        name: __props.name,
        as: "div",
        class: "help w-100 text-start is-invalid"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/Form/VTextAreaNew.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bd518f58"]]);
const useHttpForSiteApi = () => {
  const { public: { apiBase } } = useRuntimeConfig();
  const post = async (endpoint, data, isServer = true, isLazy = false) => useFetch(() => `${endpoint}`, {
    key: `${endpoint}`,
    baseURL: apiBase,
    method: "post",
    body: data,
    server: isServer,
    lazy: isLazy,
    headers: {
      "Accept-Language": "en-US",
      "Authorization": `Bearer ${useMainToken().value}`
    },
    onRequest({ request, options }) {
      options.headers.Authorization = `Bearer ${useMainToken().value}`;
    }
  }, "$-O_R1QdJne");
  const del = async (endpoint, data, isServer = true, isLazy = false) => useFetch(() => `${endpoint}`, {
    key: `${endpoint}`,
    baseURL: apiBase,
    method: "delete",
    server: isServer,
    lazy: isLazy,
    headers: {
      "Accept-Language": "en-US",
      "Authorization": `Bearer ${useMainToken().value}`
    },
    onRequest({ request, options }) {
      options.headers.Authorization = `Bearer ${useMainToken().value}`;
    }
  }, "$gLEMb2uIly");
  const put = async (endpoint, data) => useFetch(() => `${endpoint}`, {
    key: `${endpoint}`,
    baseURL: apiBase,
    method: "put",
    body: data,
    headers: {
      "Authorization": `Bearer ${useMainToken().value}`
    },
    onRequest({ request, options }) {
      options.headers.Authorization = `Bearer ${useMainToken().value}`;
    },
    onResponseError({ request, response, options }) {
      if (response.status == 401) {
        return resetUserAuth();
      }
    }
  }, "$mEnaVEvyyM");
  return {
    post,
    del,
    put
  };
};
const _sfc_main$1 = {
  __name: "message",
  __ssrInlineRender: true,
  emits: ["cancel"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const i18n = useI18n();
    const { $awn } = useNuxtApp();
    const { public: { api, apiBase } } = useRuntimeConfig();
    const isLoading = ref(false);
    const selectedType = ref(0);
    const handleSubmit = async (values, actions) => {
      isLoading.value = true;
      values.id = 0;
      values.clientId = null;
      values.type = selectedType.value;
      const { data, error, execute } = await useHttpForSiteApi().post(
        api.MessagingApi,
        values
      );
      if (error.value && error.value.statusCode == 401) {
        await useReauthorization().reAuthorize();
        if (!data.value) execute();
      } else if (error.value && error.value.statusCode != 401) {
        isLoading.value = false;
        $awn.alert(
          i18n.t("submitError"),
          { durations: { global: 6e3 } }
        );
      } else if (data.value) {
        if (data.value.hasErrors) {
          isLoading.value = false;
          $awn.alert(
            data.value.validationErrors[0],
            { durations: { global: 6e3 } }
          );
        } else {
          $awn.success(i18n.t("messageSentSuccess"), {
            durations: { global: 5e3 }
          });
          isLoading.value = false;
          emit("cancel");
        }
      }
    };
    configure({
      validateOnBlur: true,
      // controls if `blur` events should trigger validation with `handleChange` handler
      validateOnChange: true,
      // controls if `change` events should trigger validation with `handleChange` handler
      validateOnInput: false,
      // controls if `input` events should trigger validation with `handleChange` handler
      validateOnModelUpdate: true
      // controls if `update:modelValue` events should trigger validation with `handleChange` handler
    });
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const schema = ref(null);
    schema.value = yup.object({
      userName: yup.string().required(i18n.t("fullNameRequired")).min(3, i18n.t("fullNameMinLength")).label("Full Name"),
      email: yup.string().required(i18n.t("thisFieldRequired")).email(i18n.t("thisFieldInvalid")).label("Email Address"),
      mobile: yup.string().matches(phoneRegExp, i18n.t("thisFieldInvalid")).required(i18n.t("thisFieldRequired")).min(3).label("Your Phone Number"),
      description: yup.string().required(i18n.t("thisFieldRequired")).min(3, i18n.t("fullNameMinLength")).label("Message")
      // birthDate: yup.date().nullable().label("birthDate"),
    });
    watch(selectedType, () => {
      if (selectedType.value != 3) {
        schema.value = yup.object({
          userName: yup.string().required(i18n.t("fullNameRequired")).min(3, i18n.t("fullNameMinLength")).label("Full Name"),
          email: yup.string().required(i18n.t("thisFieldRequired")).email(i18n.t("thisFieldInvalid")).label("Email Address"),
          mobile: yup.string().matches(phoneRegExp, i18n.t("thisFieldInvalid")).required(i18n.t("thisFieldRequired")).min(3).label("Your Phone Number"),
          description: yup.string().required(i18n.t("thisFieldRequired")).min(3, i18n.t("fullNameMinLength")).label("Message")
          // birthDate: yup.date().nullable().label("birthDate"),
        });
      } else {
        schema.value = yup.object({
          userName: yup.string().required(i18n.t("fullNameRequired")).min(3, i18n.t("fullNameMinLength")).label("Full Name"),
          email: yup.string().required(i18n.t("thisFieldRequired")).email(i18n.t("thisFieldInvalid")).label("Email Address"),
          mobile: yup.string().matches(phoneRegExp, i18n.t("thisFieldInvalid")).required(i18n.t("thisFieldRequired")).min(3).label("Your Phone Number"),
          description: yup.string().required(i18n.t("thisFieldRequired")).min(3, i18n.t("fullNameMinLength")).label("Message"),
          appointmentDate: yup.date().required(i18n.t("thisFieldRequired")).label("date")
        });
      }
    });
    const initialValues = {
      // userName: "orwa",
      // fullname: useUserInfo().value.fullName,
      // email: useUserInfo().value.email,
      // phone: useUserInfo().value.phone,
      // fax: useUserInfo().value.fax,
      // birthDate: useUserInfo().value.birthDate,
      // sex: genderId(useUserInfo().value.sex),
      // address: useUserInfo().value.address,
      // nationId: useUserInfo().value.nationId,
      // princedomId: useUserInfo().value.princedomId,
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElementsFormVTextInputNew = __nuxt_component_0;
      const _component_ElementsFormVTextAreaNew = __nuxt_component_1$2;
      _push(ssrRenderComponent(unref(Form), mergeProps({
        id: "messageForm",
        class: "message_form",
        "validation-schema": unref(schema),
        "initial-values": initialValues,
        onSubmit: handleSubmit,
        dir: "auto"
      }, _attrs), {
        default: withCtx(({ meta: formMeta }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="form-types" data-v-1fba493e${_scopeId}><div class="${ssrRenderClass([{ "active": unref(selectedType) == 0 }, "form-type-item pcc"])}" data-v-1fba493e${_scopeId}>${ssrInterpolate(_ctx.$t("Suggestion"))}</div><div class="${ssrRenderClass([{ "active": unref(selectedType) == 1 }, "form-type-item pcc"])}" data-v-1fba493e${_scopeId}>${ssrInterpolate(_ctx.$t("Complaint"))}</div><div class="${ssrRenderClass([{ "active": unref(selectedType) == 2 }, "form-type-item pcc"])}" data-v-1fba493e${_scopeId}>${ssrInterpolate(_ctx.$t("Inquiry"))}</div><div class="${ssrRenderClass([{ "active": unref(selectedType) == 3 }, "form-type-item pcc"])}" data-v-1fba493e${_scopeId}>${ssrInterpolate(_ctx.$t("Appointment"))}</div></div><div class="form-fields" data-v-1fba493e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElementsFormVTextInputNew, {
              border_color: "000",
              color: "000",
              type: "text",
              name: "userName",
              id: "userName",
              label: _ctx.$t("fullName"),
              placeholder: _ctx.$t("fullName"),
              astricts: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElementsFormVTextInputNew, {
              border_color: "000",
              color: "000",
              type: "email",
              name: "email",
              id: "email",
              label: _ctx.$t("email"),
              placeholder: _ctx.$t("email"),
              astricts: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElementsFormVTextInputNew, {
              border_color: "000",
              color: "000",
              type: "text",
              name: "mobile",
              id: "mobile",
              label: _ctx.$t("phone"),
              placeholder: _ctx.$t("phone"),
              astricts: true
            }, null, _parent2, _scopeId));
            if (unref(selectedType) == 3) {
              _push2(ssrRenderComponent(_component_ElementsFormVTextInputNew, {
                border_color: "000",
                color: "000",
                type: "datetime-local",
                name: "appointmentDate",
                id: "appointmentDate",
                label: _ctx.$t("date"),
                placeholder: _ctx.$t("date"),
                astricts: true
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_ElementsFormVTextAreaNew, {
              border_color: "000",
              color: "000",
              type: "text",
              name: "description",
              id: "description",
              label: _ctx.$t("message"),
              placeholder: _ctx.$t("message"),
              noResize: "",
              astricts: true
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="pcc my-2" data-v-1fba493e${_scopeId}><button type="submit" value="Login" class="${ssrRenderClass([{ "btn-success": formMeta.valid }, "btn btn-main btn-block mx-2"])}"${ssrIncludeBooleanAttr(!formMeta.valid || unref(isLoading)) ? " disabled" : ""} data-v-1fba493e${_scopeId}>`);
            if (!unref(isLoading)) {
              _push2(`<span data-v-1fba493e${_scopeId}>${ssrInterpolate(_ctx.$t("send"))}</span>`);
            } else {
              _push2(`<span data-v-1fba493e${_scopeId}>${ssrInterpolate(_ctx.$t("loading..."))}</span>`);
            }
            _push2(`</button><div class="btn btn-main btn-block mx-2" data-v-1fba493e${_scopeId}><span data-v-1fba493e${_scopeId}>${ssrInterpolate(_ctx.$t("cancel"))}</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "form-types" }, [
                createVNode("div", {
                  class: ["form-type-item pcc", { "active": unref(selectedType) == 0 }],
                  onClick: ($event) => selectedType.value = 0
                }, toDisplayString(_ctx.$t("Suggestion")), 11, ["onClick"]),
                createVNode("div", {
                  class: ["form-type-item pcc", { "active": unref(selectedType) == 1 }],
                  onClick: ($event) => selectedType.value = 1
                }, toDisplayString(_ctx.$t("Complaint")), 11, ["onClick"]),
                createVNode("div", {
                  class: ["form-type-item pcc", { "active": unref(selectedType) == 2 }],
                  onClick: ($event) => selectedType.value = 2
                }, toDisplayString(_ctx.$t("Inquiry")), 11, ["onClick"]),
                createVNode("div", {
                  class: ["form-type-item pcc", { "active": unref(selectedType) == 3 }],
                  onClick: ($event) => selectedType.value = 3
                }, toDisplayString(_ctx.$t("Appointment")), 11, ["onClick"])
              ]),
              createVNode("div", { class: "form-fields" }, [
                createVNode(_component_ElementsFormVTextInputNew, {
                  border_color: "000",
                  color: "000",
                  type: "text",
                  name: "userName",
                  id: "userName",
                  label: _ctx.$t("fullName"),
                  placeholder: _ctx.$t("fullName"),
                  astricts: true
                }, null, 8, ["label", "placeholder"]),
                createVNode(_component_ElementsFormVTextInputNew, {
                  border_color: "000",
                  color: "000",
                  type: "email",
                  name: "email",
                  id: "email",
                  label: _ctx.$t("email"),
                  placeholder: _ctx.$t("email"),
                  astricts: true
                }, null, 8, ["label", "placeholder"]),
                createVNode(_component_ElementsFormVTextInputNew, {
                  border_color: "000",
                  color: "000",
                  type: "text",
                  name: "mobile",
                  id: "mobile",
                  label: _ctx.$t("phone"),
                  placeholder: _ctx.$t("phone"),
                  astricts: true
                }, null, 8, ["label", "placeholder"]),
                unref(selectedType) == 3 ? (openBlock(), createBlock(_component_ElementsFormVTextInputNew, {
                  key: 0,
                  border_color: "000",
                  color: "000",
                  type: "datetime-local",
                  name: "appointmentDate",
                  id: "appointmentDate",
                  label: _ctx.$t("date"),
                  placeholder: _ctx.$t("date"),
                  astricts: true
                }, null, 8, ["label", "placeholder"])) : createCommentVNode("", true),
                createVNode(_component_ElementsFormVTextAreaNew, {
                  border_color: "000",
                  color: "000",
                  type: "text",
                  name: "description",
                  id: "description",
                  label: _ctx.$t("message"),
                  placeholder: _ctx.$t("message"),
                  noResize: "",
                  astricts: true
                }, null, 8, ["label", "placeholder"])
              ]),
              createVNode("div", { class: "pcc my-2" }, [
                createVNode("button", {
                  type: "submit",
                  value: "Login",
                  class: ["btn btn-main btn-block mx-2", { "btn-success": formMeta.valid }],
                  disabled: !formMeta.valid || unref(isLoading)
                }, [
                  !unref(isLoading) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("send")), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t("loading...")), 1))
                ], 10, ["disabled"]),
                createVNode("div", {
                  class: "btn btn-main btn-block mx-2",
                  onClick: ($event) => emit("cancel")
                }, [
                  createVNode("span", null, toDisplayString(_ctx.$t("cancel")), 1)
                ], 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/message.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1fba493e"]]);
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const socialPages = ref(useMenu().value.social);
    const contacts = ref(useMenu().value.contact);
    const showContacts = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = __nuxt_component_0$1;
      const _component_FormMessage = __nuxt_component_1$1;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "contacts-menus",
        dir: "auto"
      }, _attrs))} data-v-0f706dd0><div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "social-media-bar"])}" data-v-0f706dd0><!--[-->`);
      ssrRenderList(unref(socialPages), (page, index) => {
        _push(`<a class="social-media-item pcc"${ssrRenderAttr("href", page.url)} target="_blank"${ssrRenderAttr("data-aos-duration", 1e3)}${ssrRenderAttr("data-aos-delay", 500 * index)}${ssrRenderAttr("data-aos", ("isAr" in _ctx ? _ctx.isAr : unref(isAr))() ? `fade-right` : `fade-left`)} data-v-0f706dd0>`);
        _push(ssrRenderComponent(_component_icon, {
          name: ("useIcon" in _ctx ? _ctx.useIcon : unref(useIcon))(page.nameEn),
          size: "22px"
        }, null, _parent));
        _push(`</a>`);
      });
      _push(`<!--]--></div>`);
      if (unref(showContacts)) {
        _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "message-form"])}"${ssrRenderAttr("data-aos-duration", 1e3)}${ssrRenderAttr("data-aos-delay", 0)} data-aos-mirror="true"${ssrRenderAttr("data-aos", `slide-up`)} data-v-0f706dd0>`);
        _push(ssrRenderComponent(_component_FormMessage, {
          onCancel: ($event) => showContacts.value = false
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "messaging pcc"])}" data-v-0f706dd0><div class="circle" data-v-0f706dd0></div><button class="messaging-btn pcc" data-v-0f706dd0>`);
      if (!unref(showContacts)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:chat-add-on",
          size: "20px"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:chat-apps-script",
          size: "20px"
        }, null, _parent));
      }
      _push(`</button></div>`);
      if (unref(showContacts)) {
        _push(`<div class="${ssrRenderClass([("rtl" in _ctx ? _ctx.rtl : unref(rtl))(), "contact-bar"])}"${ssrRenderAttr("data-aos-duration", 1e3)} data-aos-offset="20"${ssrRenderAttr("data-aos-delay", 700)}${ssrRenderAttr("data-aos", `fade-up`)} data-v-0f706dd0><div class="spark" data-v-0f706dd0></div><!--[-->`);
        ssrRenderList(unref(contacts), (page, index) => {
          _push(`<a class="social-media-item pcc"${ssrRenderAttr("href", page.url)} target="_blank"${ssrRenderAttr("data-aos-duration", 500)} data-aos-offset="20"${ssrRenderAttr("data-aos-delay", 800 + 100 * index)}${ssrRenderAttr("data-aos", `fade-up`)} data-v-0f706dd0>`);
          _push(ssrRenderComponent(_component_icon, {
            name: ("useIcon" in _ctx ? _ctx.useIcon : unref(useIcon))(page.nameEn),
            size: "22px"
          }, null, _parent));
          _push(`</a>`);
        });
        _push(`<!--]--></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/menu/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f706dd0"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=contact-TkxEDW8r.mjs.map
