import { defineNuxtPlugin } from '#app'
import { configure, defineRule } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'

export default defineNuxtPlugin((nuxtApp) => {
  // Register Yup with Vee-Validate
  configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
  })

  // Make Yup available throughout the app
  nuxtApp.provide('yup', yup)
  nuxtApp.provide('toTypedSchema', toTypedSchema)
})