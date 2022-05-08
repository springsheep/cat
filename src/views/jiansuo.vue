<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <a-input v-model="fullText" placeholder="" style="margin-bottom: 20px" @blur="blurseach" />
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="国家/地区">
                <a-input v-model="queryParam.country" placeholder="" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="最高价格">
                <a-input-number v-model="queryParam.highPrice" style="width: 100%" />
              </a-form-item>
            </a-col>

            <a-col :md="8" :sm="24">
              <span
                class="table-page-search-submitButtons"
                :style="(advanced && { float: 'right', overflow: 'hidden' }) || {}"
              >
                <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                <a-button style="margin-left: 8px" @click="() => (this.queryParam = {})">重置</a-button>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <div class="table-operator">
        <a-button style="margin-left: 8px" @click="showModal"> 新建 </a-button>
      </div>

      <s-table
        ref="table"
        size="default"
        rowKey="key"
        :columns="columns"
        :data="loadData"
        :alert="true"
        :rowSelection="rowSelection"
        showPagination="auto"
      >
        <span slot="serial" slot-scope="text, record, index">
          {{ index + 1 }}
        </span>
        <span slot="status" slot-scope="text">
          <a-badge :status="text | statusTypeFilter" :text="text | statusFilter" />
        </span>
        <span slot="description" slot-scope="text">
          <ellipsis :length="4" tooltip>{{ text }}</ellipsis>
        </span>

        <span slot="action" slot-scope="text, record">
          <template>
            <a-space>
              <a @click="handleEdit(record)">修改</a>
              <a @click="handleSubd(record)">删除</a>
            </a-space>
          </template>
        </span>
      </s-table>
    </a-card>
    <a-modal :title="Title" :visible="visible" :confirm-loading="confirmLoading" @ok="handleOk" @cancel="handleCancel">
      <a-form :form="ruleForm" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-form-model-item label="国家/地区">
          <a-input v-model="ruleForm.country" placeholder="input placeholder" />
        </a-form-model-item>
        <a-form-item label="食物名称">
          <a-input v-model="ruleForm.catFoodName" placeholder="input placeholder" />
        </a-form-item>
        <a-form-item label="食物品牌">
          <a-input v-model="ruleForm.brand" placeholder="input placeholder" />
        </a-form-item>
        <a-form-item label="价格/每榜">
          <a-input v-model="ruleForm.price" placeholder="input placeholder" />
        </a-form-item>
        <a-form-item label="优缺点">
          <a-input v-model="ruleForm.characteristic" placeholder="input placeholder" />
        </a-form-item>
      </a-form>
    </a-modal>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import { getRoleList, getServiceList, cat, catd, cat1 } from '@/api/manage'

const columns = [
  {
    title: '国家/地区',
    dataIndex: 'country',
  },
  {
    title: '食物品牌',
    dataIndex: 'brand',
  },
  {
    title: '食物名称',
    dataIndex: 'catFoodName',
  },
  {
    title: '价格/每榜',
    dataIndex: 'price',
  },
  {
    title: '优缺点',
    dataIndex: 'characteristic',
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '150px',
    scopedSlots: { customRender: 'action' },
  },
]

const statusMap = {
  0: {
    status: 'default',
    text: '关闭',
  },
  1: {
    status: 'processing',
    text: '运行中',
  },
  2: {
    status: 'success',
    text: '已上线',
  },
  3: {
    status: 'error',
    text: '异常',
  },
}

export default {
  name: 'TableList',
  components: {
    STable,
    Ellipsis,
  },
  data() {
    this.columns = columns
    return {
      fullText: '',
      Title: '猫粮',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      ruleForm: {},
      visible: false,
      ModalText: 'Content of the modal',
      confirmLoading: false,
      // create model
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 加载数据方法 必须为 Promise 对象
      loadData: (parameter) => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        return getServiceList(requestParameters).then((res) => {
          return res.body
        })
      },
      selectedRowKeys: [],
      selectedRows: [],
    }
  },
  filters: {
    statusFilter(type) {
      return statusMap[type].text
    },
    statusTypeFilter(type) {
      return statusMap[type].status
    },
  },
  created() {
    getRoleList({ t: new Date() })
  },
  computed: {
    rowSelection() {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange,
      }
    },
  },
  methods: {
    blurseach() {
      this.queryParam.fullText = this.fullText
      this.$refs.table.refresh(true)
    },
    handleSubd(e) {
      console.log(e)
      catd(e.id).then((res) => {
        this.$message.success(`操作成功`)
        this.$refs.table.loadData()
      })
    },
    handleEdit(e) {
      this.ruleForm = e
      this.visible = true
    },
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      let type = this.ruleForm.id ? cat1 : cat
      type(this.ruleForm).then((res) => {
        this.visible = false
        this.$message.success(`操作成功`)
        this.ruleForm = {}
        this.$refs.table.loadData()
      })
    },
    handleCancel(e) {
      this.ruleForm = {}
      console.log('Clicked cancel button')
      this.visible = false
    },
    handleSub(record) {
      if (record.status !== 0) {
        this.$message.info(`${record.no} 订阅成功`)
      } else {
        this.$message.error(`${record.no} 订阅失败，规则已关闭`)
      }
    },
    onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced() {
      this.advanced = !this.advanced
    },
    resetSearchForm() {
      this.queryParam = {
        date: moment(new Date()),
      }
    },
  },
}
</script>
