/*
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-05-01 15:29:35
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-07 18:26:08
 */
// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './locales'
import { VueAxios } from './utils/request'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import themePluginConfig from '../config/themePluginConfig'
Vue.prototype.$u = {
  a: localStorage.getItem('userRole') || "", b: localStorage.getItem('Access-Token') || ''
}
// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'
import './codeData'
import AKit from "./compotent";
import bootstrap from './core/bootstrap'
import './core/lazy_use' // use lazy load components
import './permission' // permission control
import './utils/filter' // global filter
import './global.less' // global style

Vue.config.productionTip = false
Vue.use(AKit)
// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
// use pro-layout components
Vue.component('pro-layout', ProLayout)
Vue.component('page-container', PageHeaderWrapper)
Vue.component('page-header-wrapper', PageHeaderWrapper)
// 默认的配置，用于表单布局
Vue.prototype.$wrapperCol = {
  xl: 6,
  md: 8,
  sm: 24
}
Vue.prototype.$getDic = (key) => {
  const data = window.CodeDate;
  return data[key] || [];
};

// 表单独占一半的配置，用于表单布局
Vue.prototype.$wrapperHalfCol = {
  xxl: 6,
  xl: 12,
  md: 16,
  sm: 24
}
window.umi_plugin_ant_themeVar = themePluginConfig.theme

new Vue({
  router,
  store,
  i18n,
  // init localstorage, vuex, Logo message
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
