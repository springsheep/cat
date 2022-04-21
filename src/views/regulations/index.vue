<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-20 09:06:16
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-04-20 17:55:19
-->
<template>
  <div class="list">
    <!-- <h-searchForm :formOptions="formOptions" btnItems="search, export, reset" @onSearch="searchInfo">
      <template v-slot:btnItems>
        <a-button type="primary" class="btn-export" size="default">同步SAP</a-button>
      </template>
    </h-searchForm> -->
    <div class="list-table">
      <div class="btn-export">
        <h-upload
          action="http://run.mocky.io/v3/d80efc3d-b8c6-403c-acd3-9ed641d1d0e3"
          style="width: 350px"
          @uploaded="onUploaded"
        />
      </div>

      <h-table :columns="columns" :loadData="queryTables" size="middle">
        <!-- 状态 -->
        <template #status="text">
          <a-badge v-if="text === 1" status="success" text="正常" />
          <a-badge v-else status="error" text="异常" /> </template
        >de
        <!-- 操作 -->
        <template #action>
          <a>删除</a>
        </template>
      </h-table>
    </div>
  </div>
</template>

<script>
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
  data() {
    return {
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
    onUploaded() {
      this.$message.success('文件已全部上传成功')
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
    .btn-export {
      margin-bottom: 20px;
    }
    padding: 20px;
    background: #fff;
  }
}
</style>
