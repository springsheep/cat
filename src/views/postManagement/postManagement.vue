<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-19 17:15:44
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-04-21 15:05:33
-->
<template>
  <page-header-wrapper>
    <div class="content">
      <!-- 操作 -->
      <a-card
        :bordered="false"
        :tabList="operationTabList"
        :activeTabKey="operationActiveTabKey"
        @tabChange="
          (key) => {
            this.operationActiveTabKey = key
          }
        "
      >
        <TableListOne v-if="operationActiveTabKey === '1'" />
        <TableListTwo v-if="operationActiveTabKey === '2'" />
      </a-card>
    </div>
  </page-header-wrapper>
</template>

<script>
import TableListOne from './TableListOne.vue'
import TableListTwo from './TableListTwo.vue'
export default {
  components: { TableListOne, TableListTwo },
  filters: {
    statusFilter(status) {
      const statusMap = {
        agree: '成功',
        reject: '驳回',
      }
      return statusMap[status]
    },
    statusTypeFilter(type) {
      const statusTypeMap = {
        agree: 'success',
        reject: 'error',
      }
      return statusTypeMap[type]
    },
  },
  methods: {
    handleTabChange(key) {
      console.log('')
      this.tabActiveKey = key
    },
  },
  data() {
    return {
      operationActiveTabKey: '1',
      operationTabList: [
        {
          key: '1',
          tab: '干部发文',
        },
        {
          key: '2',
          tab: '组织发文',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.content {
  /deep/.ant-card-body {
    padding: 1px;
  }
  /deep/.search-form-box {
    margin-bottom: 0px;
  }
  /deep/.list-table {
    padding-top: 0px;
  }
}
</style>
