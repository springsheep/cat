<template>
  <page-header-wrapper>
    <h-searchForm :formOptions="formOptions" btnItems="search, export, reset" @onSearch="searchInfo" @onReset="onReset">
      <template v-slot:btnItems>
        <a-button style="margin-left: 8px" @click="showModal"> 新建 </a-button>
      </template>
    </h-searchForm>
    <a-card :bordered="false">
      <s-table
        ref="table"
        size="default"
        rowKey="key"
        :columns="columns"
        :data="loadData"
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
            <!-- <a @click="handleEdit(record)">修改</a>
            <a-divider type="vertical" /> -->
            <a-space>
              <a @click="handleEdit(record)">编辑</a>
              <a @click="handleSubd(record)">删除</a>
            </a-space>
          </template>
        </span>
      </s-table>
    </a-card>
    <a-modal :title="ruleForm.id ? '编辑' : '新建'" :visible="visible" @ok="handleOk" @cancel="handleCancel">
      <a-form-model ref="ruleForm" :model="ruleForm">
        <a-form-model-item label="类型">
          <a-radio-group v-model="ruleForm.userRole">
            <a-radio-button :value="1">管理员</a-radio-button>
            <a-radio-button :value="0"> 普通用户 </a-radio-button>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item label="用户名">
          <a-input v-model="ruleForm.userName" placeholder="input placeholder" />
        </a-form-model-item>
        <a-form-model-item label="密码">
          <a-input v-model="ruleForm.userPassword" placeholder="input placeholder" />
        </a-form-model-item>
        <a-form-model-item label="邮箱">
          <a-input v-model="ruleForm.userEmail" placeholder="input placeholder" />
        </a-form-model-item>
        <a-form-model-item label="年纪">
          <a-input v-model="ruleForm.userAge" placeholder="input placeholder" />
        </a-form-model-item>

        <a-form-model-item label="性别">
          <a-input v-model="ruleForm.userSex" placeholder="input placeholder" />
        </a-form-model-item>
        <a-form-model-item label="养猫年龄">
          <a-input v-model="ruleForm.catYear" placeholder="input placeholder" />
        </a-form-model-item>
        <a-form-model-item label="地址">
          <a-input v-model="ruleForm.userAddress" placeholder="input placeholder" />
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import { getRoleList, getServiceList, user, userd, user1 } from '@/api/manage'
import { userquery } from '@/api/login'
const columns = [
  {
    title: '用户名',
    dataIndex: 'userName',
  },
  {
    title: '年纪',
    dataIndex: 'userAge',
  },
  {
    title: '邮箱',
    dataIndex: 'userEmail',
  },
  {
    title: '地址',
    dataIndex: 'userAddress',
  },
  {
    title: '养猫年限',
    dataIndex: 'userSex',
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '150px',
    scopedSlots: { customRender: 'action' },
  },
]
export default {
  name: 'TableList',
  components: {
    STable,
    Ellipsis,
  },
  data() {
    this.columns = columns
    return {
      Title: '新增猫粮',
      ruleForm: {},
      visible: false,
      ModalText: 'Content of the modal',
      visible: false,
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
        return userquery(requestParameters).then((res) => {
          return res.body
        })
      },
      selectedRowKeys: [],
      selectedRows: [],
      formOptions: [
        {
          label: '用户名', // label文字
          prop: 'userName', // 字段名
          type: 'input', // 指定antd组件
          defaultValue: '', // 字段初始值
          placeholder: '请输入用户名', // antd组件属性
          // rules: [{ required: true, message: '必填项', trigger: 'blur' }], // antd组件属性
          events: {
            // antd组件方法
            input(val) {
              console.log(val)
            },
          },
        },
      ],
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
    onReset(e) {
      this.queryParam = e
      this.$refs.table.refresh(true)
      console.log('获取到的搜索条件', e)
    },
    searchInfo(e) {
      this.queryParam = e
      this.$refs.table.refresh(true)
      console.log('获取到的搜索条件', e)
    },
    handleSubd(e) {
      console.log(e)
      userd(e.id).then((res) => {
        this.$message.success(`操作成功`)
        this.ruleForm = {}
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
      let type = this.ruleForm.id ? user1 : user
      type(this.ruleForm).then((res) => {
        this.visible = false
        this.$message.success(`操作成功`)
        this.ruleForm = {}
        this.$refs.table.loadData()
      })
    },
    handleCancel(e) {
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
