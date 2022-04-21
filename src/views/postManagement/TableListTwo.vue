<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-20 09:06:16
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-04-20 17:25:34
-->
<template>
  <div class="list">
    <h-searchForm :formOptions="formOptions" btnItems="search, export, reset" @onSearch="searchInfo">
      <!-- <template v-slot:btnItems>
        <a-button type="primary" class="btn-export" size="default">同步SAP</a-button>
      </template> -->
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
          <a @click="edit">编辑</a>
        </template>
      </h-table>
    </div>
    <EditPostMangement ref="alert" :data="current" @freash="freash" />
  </div>
</template>

<script>
import EditPostMangement from './EditPostMangement.vue'
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
  components: { EditPostMangement },
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
        {
          label: '文件名称', // label文字
          prop: 'fileName', // 字段名
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
        {
          label: '申请单号', // label文字
          prop: 'orderNum', // 字段名
          type: 'input', // 指定antd组件
          defaultValue: '', // 字段初始值
          placeholder: '请输入申请单号', // antd组件属性
          // rules: [{ required: true, message: '必填项', trigger: 'blur' }], // antd组件属性
          events: {
            // antd组件方法
            input(val) {
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
          title: '申请人  ',
          dataIndex: 'roleName4',
          customRender: (text) => text,
        },
        {
          title: '申请名称',
          dataIndex: 'roleName3',
          customRender: (text) => text,
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
