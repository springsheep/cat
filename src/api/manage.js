/*
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-05-01 15:29:35
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-07 17:00:29
 */
import request from '@/utils/request'

const api = {
  user: '/user',
  role: '/role',
  service: '/forum/cat/query',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  orgTree: '/org/tree',
  cat: '/forum/cat',
  catd: '/forum/cat/',
  userd: '/forum/user/',
  commentd: '/forum/comment/',
  user: '/forum/user',
  comment: '/forum/article/comment/',



}

export default api

export function getUserList(parameter) {
  return request({
    url: api.user,
    method: 'get',
    params: parameter
  })
}

export function getRoleList(parameter) {
  return request({
    url: api.role,
    method: 'get',
    params: parameter
  })
}

export function getServiceList(parameter) {
  return request({
    url: api.service,
    method: 'get',
    params: parameter
  })
}

export function getPermissions(parameter) {
  return request({
    url: api.permissionNoPager,
    method: 'get',
    params: parameter
  })
}

export function getOrgTree(parameter) {
  return request({
    url: api.orgTree,
    method: 'get',
    params: parameter
  })
}

// id == 0 add     post
// id != 0 update  put
export function saveService(parameter) {
  return request({
    url: api.service,
    method: parameter.id === 0 ? 'post' : 'put',
    data: parameter
  })
}
export function comment(parameter, id) {
  return request({
    url: api.comment + id,
    method: 'post',
    data: parameter
  })
}

export function saveSub(sub) {
  return request({
    url: '/sub',
    method: sub.id === 0 ? 'post' : 'put',
    data: sub
  })
}
export function cat(parameter) {
  return request({
    url: api.cat,
    method: 'post',
    data: parameter
  })
}
export function cat1(parameter) {
  return request({
    url: api.cat,
    method: 'put',
    data: parameter
  })
}

export function user(parameter) {
  return request({
    url: api.user,
    method: 'post',
    data: parameter
  })
}
export function user1(parameter) {
  return request({
    url: api.user,
    method: 'put',
    data: parameter
  })
}

export function catd(parameter) {
  return request({
    url: api.catd + parameter,
    method: 'delete',
  })
}
export function userd(parameter) {
  return request({
    url: api.userd + parameter,
    method: 'delete',
  })
}
export function commentd(parameter) {
  return request({
    url: api.commentd + parameter,
    method: 'delete',
  })
}
