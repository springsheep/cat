import { asyncRouterMap, constantRouterMap } from '@/config/router.config'
import cloneDeep from 'lodash.clonedeep'
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 *
 * @param permission
 * @param route
 * @returns {boolean}
 */
function hasPermission(permission, route) {
  if (route.meta && route.meta.permission) {
    let flag = false
    for (let i = 0, len = permission.length; i < len; i++) {
      flag = route.meta.permission.includes(permission[i])
      if (flag) {
        return true
      }
    }
    return false
  }
  return true
}

/**
 * 单账户多角色时，使用该方法可过滤角色不存在的菜单
 *
 * @param roles
 * @param route
 * @returns {*}
 */
// eslint-disable-next-line
function hasRole(roles, route) {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(roles.id)
  } else {
    return true
  }
}

function filterAsyncRouter(routerMap, roles) {
  const accessedRouters = routerMap.filter(route => {
    if (hasPermission(roles.permissionList, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [{
      path: '/',
      name: 'index',
      component: BasicLayout,
      meta: { title: 'menu.home' },
      redirect: '/homePage/homePage',
      children: [
        {
          path: '/homePage/homePage',
          name: 'homePage',
          parentId: 0,
          id: 100,
          meta: {
            // icon: 'dashboard',
            title: '首页',
            show: true,
            role: [0]
          },
          component: () => import('@/views/homePage/homePage'),
        },
        {
          name: 'regulations',
          path: '/regulations',
          meta: {
            title: '科普',
            role: [0, 1]
          },
          component: () => import('@/views/regulations'),
        },

        {
          name: 'newHelp',
          path: '/newHelp',
          meta: {
            title: '新手辅助',
            role: [0]
          },
          component: () => import('@/views/newHelp'),
        },
        {
          name: 'zhenliao',
          path: '/zhenliao',
          meta: {
            title: '快速诊疗',
            role: [0]
          },
          component: () => import('@/views/zhenliao'),
        }, {
          name: 'jiansuo',
          path: '/jiansuo',
          meta: {
            title: '检索',
            role: [0]
          },
          component: () => import('@/views/jiansuo'),
        }, {
          name: 'peifang',
          path: '/peifang',
          meta: {
            title: '配方计算',
            role: [0]
          },
          component: () => import('@/views/peifang'),
        }, {
          name: 'jiaoliu',
          path: '/jiaoliu',
          meta: {
            title: '交流',
            role: [0, 1]
          },
          component: () => import('@/views/jiaoliu'),
        }, {
          name: 'pinglun',
          path: '/pinglun',
          meta: {
            title: '评论',
            role: [1]
          },
          component: () => import('@/views/pinglun'),
        }, {
          name: 'yonghu',
          path: '/yonghu',
          meta: {
            title: '用户中心',
            role: [1]
          },
          component: () => import('@/views/yonghu'),
        }, {
          name: 'geren',
          path: '/geren',
          meta: {
            title: '个人空间',
            role: [0, 2]
          },
          component: () => import('@/views/geren'),
        },
      ]
    },]
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        const routerMap = cloneDeep(asyncRouterMap)
        const accessedRouters = filterAsyncRouter(routerMap, roles)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
