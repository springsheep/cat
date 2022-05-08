// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}

export const asyncRouterMap = [

]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },
  {
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
          show: true
        },
        component: () => import('@/views/homePage/homePage'),
      },
      {
        name: 'regulations',
        path: '/regulations',
        meta: {
          title: '科普',
          show: false
        },
        component: () => import('@/views/regulations'),
      }, {
        name: 'regulationsdetail',
        path: '/regulationsdetail',
        meta: {
          title: '科普详情',
          show: false
        },
        component: () => import('@/views/regulations/detail'),
      },
      {
        name: 'newHelp',
        path: '/newHelp',
        meta: {
          title: '新手辅助'
        },
        component: () => import('@/views/newHelp'),
      },
      {
        name: 'zhenliao',
        path: '/zhenliao',
        meta: {
          title: '快速诊疗'
        },
        component: () => import('@/views/zhenliao'),
      }, {
        name: 'jiansuo',
        path: '/jiansuo',
        meta: {
          title: '检索'
        },
        component: () => import('@/views/jiansuo'),
      }, {
        name: 'peifang',
        path: '/peifang',
        meta: {
          title: '配方计算'
        },
        component: () => import('@/views/peifang'),
      }, {
        name: 'jiaoliu',
        path: '/jiaoliu',
        meta: {
          title: '交流'
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
          title: '用户中心'
        },
        component: () => import('@/views/yonghu'),
      }, {
        name: 'geren',
        path: '/geren',
        meta: {
          title: '个人空间'
        },
        component: () => import('@/views/geren'),
      },
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
