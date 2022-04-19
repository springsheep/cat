/*
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-19 09:21:11
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-04-19 09:54:12
 */
let demoMenu = [
  {
    name: 'demo',
    parentId: 0,
    id: 10,
    meta: {
      title: 'demo页面',
      show: true
    },
    redirect: '/dashboard/workplace',
    component: 'RouteView'
  },
  // dashboard
  {
    name: 'dashboard',
    parentId: 10,
    id: 1,
    meta: {
      // icon: 'dashboard',
      title: '仪表盘',
      show: true
    },
    component: 'RouteView',
    redirect: '/dashboard/workplace'
  },
  {
    name: 'workplace',
    path: '/dashboard/workplace',
    parentId: 1,
    id: 7,
    meta: {
      title: '工作台',
      show: true
    },
    component: 'Workplace'
  },
  {
    name: 'monitor',
    path: 'https://www.baidu.com/',
    parentId: 1,
    id: 3,
    meta: {
      title: '监控页（外部）',
      target: '_blank',
      show: true
    }
  },
  {
    name: 'Analysis',
    parentId: 1,
    id: 2,
    meta: {
      title: '分析页',
      show: true
    },
    component: 'Analysis',
    path: '/dashboard/analysis'
  },
  // list
  {
    name: 'form',
    parentId: 10,
    id: 10009,
    meta: {
      title: '表单',
      show: true
    },
    component: 'RouteView'
  },
  {
    name: 'basic-form',
    parentId: 10009,
    id: 6,
    meta: {
      title: '基础表单'
    },
    component: 'BasicForm'
  },
  {
    name: 'step-form',
    parentId: 10009,
    id: 5,
    meta: {
      title: '分步表单'
    },
    component: 'StepForm'
  },
  {
    name: 'advancd-form',
    parentId: 10009,
    id: 4,
    meta: {
      title: '高级表单'
    },
    component: 'AdvanceForm'
  },
  // list
  {
    name: 'list',
    parentId: 10,
    id: 10010,
    meta: {
      icon: 'table',
      title: '列表页',
      show: true
    },
    redirect: '/list/table-list',
    component: 'RouteView'
  },
  {
    name: 'table-list',
    parentId: 10010,
    id: 10011,
    path: '/list/table-list/:pageNo([1-9]\\d*)?',
    meta: {
      title: '查询表格',
      show: true
    },
    component: 'TableList'
  },
  {
    name: 'basic-list',
    parentId: 10010,
    id: 10012,
    meta: {
      title: '标准列表',
      show: true
    },
    component: 'StandardList'
  },
  {
    name: 'card',
    parentId: 10010,
    id: 10013,
    meta: {
      title: '卡片列表',
      show: true
    },
    component: 'CardList'
  },
  {
    name: 'search',
    parentId: 10010,
    id: 10014,
    meta: {
      title: '搜索列表',
      show: true
    },
    redirect: '/demo/list/article',
    component: 'SearchLayout'
  },
  {
    name: 'article',
    parentId: 10014,
    id: 10015,
    meta: {
      title: '搜索列表（文章）',
      show: true
    },
    component: 'SearchArticles'
  },
  {
    name: 'project',
    parentId: 10014,
    id: 10016,
    meta: {
      title: '搜索列表（项目）',
      show: true
    },
    component: 'SearchProjects'
  },
  {
    name: 'application',
    parentId: 10014,
    id: 10017,
    meta: {
      title: '搜索列表（应用）',
      show: true
    },
    component: 'SearchApplications'
  },
  {
    name: 'profile',
    parentId: 10,
    id: 10018,
    meta: {
      title: '详情页',
      show: true
    },
    redirect: '/profile/basic',
    component: 'RouteView'
  },
  {
    name: 'basic',
    parentId: 10018,
    id: 10019,
    meta: {
      title: '基础详情页',
      show: true
    },
    component: 'ProfileBasic'
  },
  {
    name: 'advanced',
    parentId: 10018,
    id: 10020,
    meta: {
      title: '高级详情页',
      show: true
    },
    component: 'ProfileAdvanced'
  },
  {
    name: 'result',
    parentId: 10,
    id: 10021,
    meta: {
      title: '结果页',
      // icon: 'check-circle-o',
      show: true
    },
    redirect: '/result/success',
    component: 'PageView'
  },
  {
    name: 'success',
    parentId: 10021,
    id: 10022,
    meta: {
      title: '成功',
      hiddenHeaderContent: true,
      show: true
    },
    component: 'ResultSuccess'
  },
  {
    name: 'fail',
    parentId: 10021,
    id: 10023,
    meta: {
      title: '失败',
      hiddenHeaderContent: true,
      show: true
    },
    component: 'ResultFail'
  },
  {
    name: 'exception',
    parentId: 10,
    id: 10024,
    meta: {
      title: '异常页',
      icon: 'warning',
      show: true
    },
    redirect: '/exception/403',
    component: 'RouteView'
  },
  {
    name: '403',
    parentId: 10024,
    id: 10025,
    meta: {
      title: '403',
      show: true
    },
    component: 'Exception403'
  },
  {
    name: '404',
    parentId: 10024,
    id: 10026,
    meta: {
      title: '404',
      show: true
    },
    component: 'Exception404'
  },
  {
    name: '500',
    parentId: 10024,
    id: 10027,
    meta: {
      title: '500',
      show: true
    },
    component: 'Exception500'
  },

]
export default demoMenu