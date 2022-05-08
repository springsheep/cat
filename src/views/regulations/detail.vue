<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-05-05 14:38:49
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-07 18:30:35
-->
<template>
  <div class="content">
    <h3 class="biaoti">标题：{{ info.articleName }}</h3>
    <p class="biaoti">内容：{{ info.articleContext }}</p>
    <p class="biaoti">更新时间：{{ info.updatedTime }}</p>
    <h3 v-if="commentViews.length != 0">评论：</h3>
    <h3 class="biaoti">评论：</h3>
    <a-tree
      :defaultExpandAll="defaultExpandAll"
      :tree-data="treeData"
      :replaceFields="{ children: 'childrenComment', title: 'commentContext', key: 'id' }"
    >
      <template #title="{ id, commentContext, isHide }">
        <a-space>
          <div></div>
          <span>{{ commentContext }}</span>
          <a @click="pinglun(id)">评论</a>
          <a @click="com(true, id)" v-if="$u.a == 1 && !isHide">隐藏</a>
          <a @click="com(false, id)" v-if="$u.a == 1 && isHide">显示</a>
        </a-space>
      </template>
    </a-tree>

    <a-space style="margin-top: 20px">
      <a-button @click="pinglun">评论</a-button>
      <a-button @click="$router.go(-1)">返回</a-button>
    </a-space>
    <a-modal title="评论" :visible="visible" @ok="handleOk" @cancel="handleCancel">
      <a-form-model ref="ruleForm" :model="ruleForm">
        <a-form-model-item label="评论">
          <a-input v-model="ruleForm.commentContext" placeholder="input placeholder" />
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </div>
</template>

<script>
import { info, commenthide } from '../../api/login'
import { comment } from '../../api/manage'
export default {
  data() {
    return {
      defaultExpandAll: true,
      treeData: [],
      info: {},
      commentViews: [],
      ruleForm: {},
      visible: false,
      treeKey: '',
    }
  },
  created() {
    this.getList()
  },
  methods: {
    com(e, id) {
      commenthide(id, { isHide: e }).then((res) => {
        this.$message.success(`操作成功`)
        this.getList()
      })
    },
    onContextMenuClick(treeKey, menuKey) {
      console.log(`treeKey: ${treeKey}, menuKey: ${menuKey}`)
    },
    getList() {
      this.commentViews = []
      info(this.$route.query.id).then((res) => {
        this.info = res.body
        this.treeData = res.body.commentViews
      })
    },
    handleOk(e) {
      comment({ commentContext: this.ruleForm.commentContext, parentId: this.treeKey }, this.$route.query.id).then(
        (res) => {
          this.visible = false
          this.$message.success(`操作成功`)
          this.ruleForm.commentContext = ''
          this.getList()
        }
      )
    },
    handleCancel(e) {
      console.log('Clicked cancel button')
      this.visible = false
    },
    pinglun(treeKey) {
      console.log()
      if (typeof treeKey == 'number') {
        this.treeKey = treeKey
      } else {
        this.treeKey = ''
      }
      this.visible = true
    },
  },
}
</script>

<style lang="less" scoped>
.content {
  background: #fff;
  padding: 20px;
}
</style>
