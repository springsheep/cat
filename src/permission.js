/*
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-18 11:17:20
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-07 11:02:00
 */
import router from './router'
import store from './store'
import storage from 'store'
import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.less' // progress bar custom style
import notification from 'ant-design-vue/es/notification'
import { setDocumentTitle, domTitle } from '@/utils/domUtil'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { i18nRender } from '@/locales'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const allowList = ['login', 'register', 'registerResult'] // no redirect allowList
const loginRoutePath = '/user/login'
const defaultRoutePath = '/homePage/homePage'

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  to.meta && typeof to.meta.title !== 'undefined' && setDocumentTitle(`${i18nRender(to.meta.title)} - ${domTitle}`)
  /* has token */
  if (localStorage.getItem('userRole') == 1 && to.name == 'homePage') {
    next('/yonghu')
  } else {
    next()
  }
  NProgress.done()
  // if (storage.get(ACCESS_TOKEN)) {
  //   if (to.path === loginRoutePath) {
  //     next({ path: defaultRoutePath })
  //     NProgress.done()
  //   } else {
  //     next()
  //   }
  // } else {
  //   if (allowList.includes(to.name)) {
  //     next()
  //   } else {
  //     next({ path: loginRoutePath, query: { redirect: to.fullPath } })
  //     NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
  //   }
  // }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
