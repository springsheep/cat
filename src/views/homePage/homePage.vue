<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-18 17:01:01
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-04-19 10:55:53
-->
<template>
  <div>
    <Divider title="系统功能" :bottom="10" :top="0" />
    <a-row :gutter="24">
      <a-col :sm="24" :md="12" :xl="6" v-for="(item, index) in cardList" :key="index">
        <a-card hoverable :loading="loading">
          <a-card-meta>
            <template slot="title">{{ item.title }} </template>
            <template slot="description"> {{ item.description }}</template>
            <a-avatar slot="avatar" :src="item.icon" />
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
    <Divider title="组织结构图" :bottom="0" :top="10" />
    <RelationGraph />
    <div class="content-table">
      <Divider title="待审批申请清单" :bottom="10" :top="10" />
      <div class="content-table-body">
        <s-table
          ref="table"
          size="middle"
          rowKey="key"
          :columns="columns"
          :data="loadData"
          :alert="options.alert"
          show-quick-jumper
          stripe
        >
          <span slot="serial" slot-scope="text, record, index">
            {{ index + 1 }}
          </span>
          <span slot="action" slot-scope="text, record">
            <template>
              <a @click="handleCheck(record)">审批</a>
            </template>
          </span>
        </s-table>
      </div>
    </div>
  </div>
</template>

<script>
import { Divider } from '@/components'
import { STable } from '@/components'
import RelationGraph from './RelationGraph'
import { getRoleList, getServiceList } from '@/api/manage'
export default {
  components: { Divider, STable, RelationGraph },
  data() {
    return {
      //card骨架
      loading: true,
      //card数据
      cardList: [
        {
          icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: 'www.instagram.com',
          description: '在途流程 / 超期流程',
        },
        {
          icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: 'www.instagram.com',
          description: '我的待办 / 我的已办',
        },
        {
          icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: 'www.instagram.com',
          description: '组织 | 岗位 | 干部  ',
        },
        {
          icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: 'www.instagram.com',
          description: '组织管理 | 干部管理',
        },
      ],
      // 加载数据方法 必须为 Promise 对象
      loadData: (parameter) => {
        console.log('loadData.parameter', parameter)
        return getServiceList(Object.assign(parameter, this.queryParam)).then((res) => {
          return res.result
        })
      },
      // 表头
      columns: [
        {
          title: '#',
          scopedSlots: { customRender: 'serial' },
        },
        {
          title: '规则编号',
          dataIndex: 'no',
        },
        {
          title: '描述',
          dataIndex: 'description',
        },
        {
          title: '服务调用次数',
          dataIndex: 'callNo',
          sorter: true,
          needTotal: true,
          customRender: (text) => text + ' 次',
        },
        {
          title: '状态',
          dataIndex: 'status',
          needTotal: true,
        },
        {
          title: '更新时间',
          dataIndex: 'updatedAt',
          sorter: true,
        },
        {
          title: '操作',
          dataIndex: 'action',
          width: '150px',
          scopedSlots: { customRender: 'action' },
        },
      ],
      // custom table alert & rowSelection
      options: {
        // alert: {
        //   show: true,
        //   clear: () => {
        //     this.selectedRowKeys = []
        //   },
        // },
        // rowSelection: {
        //   selectedRowKeys: this.selectedRowKeys,
        //   onChange: this.onSelectChange,
        // },
      },
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  methods: {
    /**
     * @description:表格的审批
     * @param {*}
     * @return {*}
     * @author: 张鹏
     */
    handleCheck() {
      console.log(111)
    },
  },
}
</script>

<style lang="less" scoped>
.content-table {
  background: #fff;
  &-body {
    padding: 0 20px;
  }
}
.ant-avatar {
  height: 50px;
  width: 50px;
}
</style>
