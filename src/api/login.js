/*
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-05-01 15:29:35
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-07 16:57:41
 */
import request from '@/utils/request'

const userApi = {
  Login: '/auth/login',
  Logout: '/auth/logout',
  ForgePassword: '/auth/forge-password',
  Register: '/auth/register',
  twoStepCode: '/auth/2step-code',
  SendSms: '/account/sms',
  SendSmsErr: '/account/sms_err',
  // get my info
  UserInfo: '/user/info',
  UserMenu: '/user/nav',
  newlogin: '/forum/user/login',
  article: '/forum/article/query',
  articleadd: '/forum/article',
  artd: '/forum/article/',
  hide: '/forum/article/hide/',
  info: '/forum/article/info/',
  shoucang: '/forum/article/favorite/',
  quxiaoshoucang: '/forum/article/cancelFavorite/',
  commenthide: '/forum/article/comment/hide/',
  commentquery: '/forum/comment/query/',

  reg: '/forum/user',
  userquery: '/forum/user/query',
  current: '/forum/user/current'
}

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login(parameter) {
  return request({
    url: userApi.Login,
    method: 'post',
    data: parameter
  })
}
export function reg(parameter) {
  return request({
    url: userApi.reg,
    method: 'post',
    data: parameter
  })

}
export function newlogin(parameter) {
  return request({
    url: userApi.newlogin,
    method: 'post',
    data: parameter
  })
} export function articleadd(parameter) {
  return request({
    url: userApi.articleadd,
    method: 'post',
    data: parameter
  })
}
export function articleadd1(parameter) {
  return request({
    url: userApi.articleadd,
    method: 'put',
    data: parameter
  })
}

export function getSmsCaptcha(parameter) {
  return request({
    url: userApi.SendSms,
    method: 'post',
    data: parameter
  })
}

export function getInfo() {
  return request({
    url: userApi.UserInfo,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function getCurrentUserNav() {
  return request({
    url: userApi.UserMenu,
    method: 'get'
  })
}

export function logout() {
  return request({
    url: userApi.Logout,
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * get user 2step code open?
 * @param parameter {*}
 */
export function get2step(parameter) {
  return request({
    url: userApi.twoStepCode,
    method: 'post',
    data: parameter
  })
}

export function hide(id, parameter) {
  return request({
    url: userApi.hide + id,
    method: 'post',
    params: parameter
  })
}
export function quxiaoshoucang(id, parameter) {
  return request({
    url: userApi.quxiaoshoucang + id,
    method: 'post',
    params: parameter
  })
}
export function commenthide(id, parameter) {
  return request({
    url: userApi.commenthide + id,
    method: 'post',
    params: parameter
  })
}

export function shoucang(id, parameter) {
  return request({
    url: userApi.shoucang + id,
    method: 'post',
    data: parameter
  })
}

export function article(parameter) {
  return request({
    url: userApi.article,
    method: 'get',
    params: parameter
  })
}

export function userquery(parameter) {
  return request({
    url: userApi.userquery,
    method: 'get',
    params: parameter
  })
}

export function commentquery(parameter) {
  return request({
    url: userApi.commentquery,
    method: 'get',
    params: parameter
  })
}
export function current(parameter) {
  return request({
    url: userApi.current,
    method: 'get',
    params: parameter
  })
}

export function artd(parameter) {
  return request({
    url: userApi.artd + parameter,
    method: 'delete',
  })
}
export function info(parameter) {
  return request({
    url: userApi.info + parameter,
    method: 'get',
  })
}

