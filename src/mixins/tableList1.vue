<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-20 09:06:16
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-04-20 15:10:15
-->
<template>
  <div class="list">
    <h-searchForm :formOptions="formOptions" btnItems="search, export, reset" @onSearch="searchInfo" />
    <div class="list-table">
      <h-table :columns="columns" :loadData="queryTables" size="middle">
        <!-- 状态 -->
        <template
          :slot="item.dataIndex"
          slot-scope="text, record, index"
          v-for="item in columns.filter((i) => i.scopedSlots)"
        >
          <template v-if="item.type === 'scope'">
            {{ record }}
            <Scope :row="record" :item="item" :cscope="item.scope" />
          </template>
          <template v-else-if="item.type === 'code'">
            <div>{{ item.type === 'code' }} {{ getByCode(record, item) }}</div>
          </template>
        </template>

        <!-- 操作 -->
        <template slot="action" slot-scope="text, record, index">
          <a-space>
            <a v-for="(item, index) in btns" :key="index" @click="rowMethod(item.method, record)">{{ item.name }}</a>
          </a-space>
        </template>
      </h-table>
    </div>
  </div>
</template>

<script>
const Scope = {
  props: {
    cscope: {
      type: Function,
      default: () => {},
    },
    row: {
      type: Object,
      default: {},
    },
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  render() {
    return <div class="custon-scpoe">{this.cscope(this.row, this.item, this.row[this.item.prop])}</div>
  },
}
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
  components: { Scope },
  data() {
    return {
      formOptions: [
        {
          label: '用户名', // label文字
          prop: 'username', // 字段名
          type: 'input', // 指定antd组件
          defaultValue: '阿黄', // 字段初始值
          placeholder: '请输入用户名', // antd组件属性
          rules: [{ required: true, message: '必填项', trigger: 'blur' }], // antd组件属性
          events: {
            // antd组件方法
            input(val) {
              console.log(val)
            },
          },
        },
        {
          label: '年龄', // label文字
          prop: 'age', // 字段名
          type: 'number', // 指定antd组件
          defaultValue: 18, // 字段初始值
          placeholder: '请输入年龄', // antd组件属性
          rules: [{ required: true, message: '必填项', trigger: 'blur' }], // antd组件属性
          events: {
            // antd组件方法
            input(val) {
              console.log(val)
            },
          },
        },
        {
          label: '性别', // label文字
          prop: 'sex', // 字段名
          type: 'select', // 指定antd组件
          // defaultValue: '', // 字段初始值
          placeholder: '请选择性别', // antd组件属性
          options: [
            {
              label: '男',
              value: '1',
            },
            {
              label: '女',
              value: '2',
            },
          ],
          events: {
            // antd组件方法
            change(val) {
              console.log(val)
            },
          },
        },
        {
          label: '下拉框', // label文字
          prop: 'address', // 字段名
          type: 'select', // 指定antd组件
          // defaultValue: '', // 字段初始值
          placeholder: '请选择性别', // antd组件属性
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
        {
          label: '项目地址', // label文字
          prop: 'project', // 字段名
          type: 'cascader', // 指定antd组件
          defaultValue: [], // 字段初始值
          placeholder: '请选择性别', // antd组件属性
          options: [],
          url: 'http://rap2api.taobao.org/app/mock/270426/getCascaderList',
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
        {
          label: '到货日期', // label文字
          prop: 'arrialDate', // 字段名
          type: 'range-picker', // 指定antd组件
          defaultValue: [], // 字段初始值
          placeholder: '请选择', // antd组件属性
          events: {
            // antd组件方法
            change(val) {
              console.log(val)
            },
          },
        },
        {
          label: '发货日期', // label文字
          prop: 'delieverDate', // 字段名
          type: 'date-picker', // 指定antd组件
          defaultValue: '', // 字段初始值
          placeholder: '请选择', // antd组件属性
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
          title: '姓名',
          dataIndex: 'name',
          width: 200,
        },
        {
          title: '手机号',
          dataIndex: 'mobile',
          width: 200,
        },
        {
          title: '角色名称',
          dataIndex: 'roleName',
          width: 200,
          customRender: (text) => {
            return text
          },
        },
        {
          title: '状态',
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' },
          width: 200,
        },
        {
          title: '操作',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' },
          width: 200,
        },
      ],
      btns: [{ name: '编辑', method: 'edit' }],
    }
  },
  methods: {
    getByCode(row, item) {
      // const code = this.$getDicts(item.code).find(
      //   (i) => i.codeValue === row[item.prop]
      // );
      const code = ''
      return code ? code.codeName : '--'
    },
    rowMethod(method, data) {
      console.log(method, data)
      if (typeof this[method] === 'function') {
        this[method](data)
      } else {
        console.log('此方法未注册')
      }
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
