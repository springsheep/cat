<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-20 09:06:16
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-04-21 17:08:24
-->
<template>
  <page-header-wrapper>
    <div class="list">
      <h-searchForm :formOptions="formOptions" btnItems="search, export, reset" @onSearch="searchInfo">
        <template v-slot:btnItems>
          <a-space>
            <a-button type="primary" class="btn-export" size="default">添加</a-button>
            <a-button>导入</a-button>
            <a-button>导出</a-button>
            <a-button>删除</a-button>
            <a-button>下载导入模板</a-button>
          </a-space>
        </template>
      </h-searchForm>
      <div class="list-table">
        <h-table :columns="columns" :loadData="queryTables" size="middle">
          <!-- 状态 -->
          <template #status="text">
            <a-badge v-if="text === 1" status="success" text="正常" />
            <a-badge v-else status="error" text="异常" />
          </template>
          <!-- 操作 -->
          <template #action>
            <a-space>
              <a @click="edit">编辑</a>
              <a @click="edit">删除</a>
            </a-space>
          </template>
        </h-table>
        <Divider type="1" title="上传组织架构图" :top="0" :bottom="0"> </Divider>
      </div>
    </div>
    <alertPage ref="alert" :data="current" @freash="freash" />
  </page-header-wrapper>
</template>

<script>
import alertPage from './alertPage'
import { Divider } from '@/components'
const queryTables = () => {
  return new Promise((resolve) => {
    const rows = []
    for (let i = 1; i < 18; i += 1) {
      rows.push({
        key: i,
        id: i,
        name: '用户' + i,
        mobile: '17600000000',
        roleName: '管理员',
        status: i % 2 === 0 ? 1 : 2,
      })
    }
    resolve({ rows })
  })
}

export default {
  components: { Divider, alertPage },
  data() {
    return {
      current: {},
      formOptions: [
        {
          label: '一级部门', // label文字
          prop: 'address', // 字段名
          type: 'select', // 指定antd组件
          // defaultValue: '', // 字段初始值
          placeholder: '选择部门', // antd组件属性
          options: [],
          url: 'http://rap2api.taobao.org/app/mock/270426/city',
          methods: 'get',
          dicParamsList: [
            {
              key: 'token',
            },
            {
              key: 'bussinessId',
              value: '324',
            },
          ],
          filedName: {
            label: 'name',
            value: 'id',
          },
          propsHttpRes: 'data',
          events: {
            // antd组件方法
            change(val) {
              console.log(val)
            },
          },
        },
      ],

      // 查询参数
      queryFilters: {},
      // 表头
      columns: [
        {
          title: '一级部门',
          dataIndex: 'name',
        },
        {
          title: '发文级别',
          dataIndex: 'mobile',
        },
        {
          title: '文件名称',
          dataIndex: 'roleName',
          customRender: (text) => text,
        },
        {
          title: '审批通过时间',
          dataIndex: 'roleName6',
          customRender: (text) => text,
        },
        {
          title: '申请单号',
          dataIndex: 'roleName5',
          customRender: (text) => text,
        },
        {
          title: '任命开始日期 ',
          dataIndex: 'roleName4',
          customRender: (text) => text,
        },
        {
          title: '任命文号',
          dataIndex: 'roleName3',
          customRender: (text) => text,
        },
        {
          title: '适用干部',
          dataIndex: 'roleName2',
          customRender: (text) => text,
        },
        {
          title: '同步SAP',
          dataIndex: 'roleName1',
          customRender: (text) => text,
        },
        {
          title: '同步时间',
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' },
        },
        {
          title: '操作',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ],
    }
  },
  methods: {
    freash(e) {
      this.current = {}
    },
    edit() {
      //  this.current = Object.assign({}, data);
      this.$refs.alert.show()
    },
    queryTables,
    /**
     * @description: 获取搜索条件数据
     * @param {*} e 返回值
     * @return {*}
     * @author: 张鹏
     */
    searchInfo(e) {
      console.log('获取到的搜索条件', e)
    },
  },
}
</script>
<style lang="less" scoped>
.list {
  &-table {
    padding: 20px;
    background: #fff;
  }
}
</style>
