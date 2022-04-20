<template>
  <div class="content-table-body">
    <s-table
      ref="table"
      size="middle"
      rowKey="key"
      :columns="columns"
      :data="loadData"
      :alert="options.alert"
      :rowSelection="options.rowSelection"
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
</template>

<script>
import { STable } from '@/components'
import { getRoleList, getServiceList } from '@/api/manage'
export default {
  components: { STable },
  data() {
    return {
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
      selectedRowKeys: [],
      selectedRows: [],

      // custom table alert & rowSelection
      options: {
        alert: {
          show: true,
          clear: () => {
            this.selectedRowKeys = []
          },
        },
        rowSelection: {
          selectedRowKeys: this.selectedRowKeys,
          onChange: this.onSelectChange,
        },
      },
      optionAlertShow: false,
    }
  },
  methods: {
    onSelectChange(selectedRowKeys, selectedRows) {},
  },
}
</script>
