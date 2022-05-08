<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-18 17:01:01
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-06 22:48:04
-->
<template>
  <div>
    <banner />
    <a-row :gutter="24">
      <a-col :sm="24" :md="12" :xl="8" v-for="(item, index) in cardList" :key="index">
        <a-card hoverable :loading="loading" style="margin-top: 20px; height: 150px">
          <a-card-meta>
            <template slot="title">{{ item.title }} </template>
            <template slot="description"> {{ item.description }}</template>
            <a-avatar slot="avatar" :src="item.icon" />
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
    <a-card :loading="loading" title="科普文章" :bordered="false" style="margin-top: 20px">
      <a-list>
        <a-list-item :key="index" v-for="(item, index) in activities">
          <a-list-item-meta>
            <div slot="title">
              <a href="#">{{ item.articleName }}</a>
            </div>
            <div slot="description">{{ item.articleContext }}</div>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>

<script>
import { Divider } from '@/components'
import { STable } from '@/components'
import banner from '../banner.vue'
import { article, artd } from '@/api/login'
import { getRoleList, getServiceList } from '@/api/manage'
export default {
  components: { Divider, STable, banner },
  data() {
    return {
      activities: [],
      //card骨架
      loading: true,
      //card数据
      cardList: [
        {
          icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: '新手辅助',
          description: '新手辅助12312312',
        },
        {
          icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: '快速治疗',
          description: '快速治疗12321312321312',
        },
        {
          icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: '猫粮检索',
          description: '猫粮检索组织 | 岗位 | 干部  ',
        },
        {
          icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: '配方计算',
          description: '配方计算组织管理 | 干部管理',
        },
        {
          icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: '交流',
          description: '交流组织管理 | 干部管理',
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
    article({ isArticle: true }).then((res) => {
      this.activities = res.body.records
    })
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
/* For demo */
.ant-carousel {
  /deep/.slick-slide {
    text-align: center;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }
}

.ant-carousel {
  /deep/ .slick-slide h3 {
    color: #fff;
  }
}
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
