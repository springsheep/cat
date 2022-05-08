<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-05-01 18:41:19
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-08 19:49:59
-->
<template>
<div>
    <a-list size="large" rowKey="id" :loading="loading" itemLayout="vertical" :dataSource="data">
    <a-list-item :key="item.id" slot="renderItem" slot-scope="item">
      <template slot="actions">
          <a @click="$router.push(`/regulationsdetail?id=${item.id}`)"> 查看</a>
      <!-- <a @click="handleEdit(item)" v-if="$u.a == 1"> 编辑</a>
            <a @click="del(item)" v-if="$u.a == 1"> 删除</a> -->
      </template>
      </a-list-item-meta>
      <article-list-content
      :title='item.articleName'
   :description="item.articleContext"
            :owner="item.creatorName"
            avatar="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.616pic.com%2Fbg_w1180%2F00%2F09%2F54%2Ft9CgqF1O6s.jpg&refer=http%3A%2F%2Fpic.616pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654311676&t=d40d20bc3b5cb970fa16ff1720d2b4d7"
            updateAt="12312"
                    :time='item.createdTime'
      />
    </a-list-item>
     <a-modal :title="ruleForm.id ? '新建' : '编辑'" :visible="visible" @ok="handleOk" @cancel="handleCancel">
      <a-form-model-item label="类型" v-if="!ruleForm.id">
        <a-radio-group v-model="ruleForm.isArticle">
          <a-radio-button :value="true"> 是文章</a-radio-button>
          <a-radio-button :value="false"> 不是文章 </a-radio-button>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model ref="ruleForm" :model="ruleForm">
        <a-form-model-item label="文章标题">
          <a-input v-model="ruleForm.articleName" placeholder="input placeholder" />
        </a-form-model-item>
        <a-form-model-item label="文章内容">
          <a-input v-model="ruleForm.articleContext" placeholder="input placeholder" />
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </a-list>
      <div class="pagination" v-if="total!=0">
        <a-pagination @change="onShowSizeChange" v-model="current" :total="total" show-less-items />
      </div>
</div>
</template>

<script>
import { ArticleListContent } from '@/components'
import IconText from '@/views/list/search/components/IconText'

import { article, artd,articleadd1 } from '../api/login'
export default {
  name: 'Article',
  components: {
    IconText,
    ArticleListContent,
  },
  data() {
    return {
      loading: true,
      loadingMore: false,
      data: [], ruleForm: {},
      visible: false,      total: 0,
      current: 1,
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    handleOk(e) {
   
          let type = this.ruleForm.id ? articleadd1 : articleadd
          type({ isArticle: false ,...this.ruleForm}).then((res) => {
            this.visible = false
            this.$message.success(`操作成功`)
            this.getList()
          })
      
    },
      onShowSizeChange(current, pageSize) {
      console.log(current, pageSize)
      this.current=current
       this.getList()
    },
    handleCancel(e) {
      console.log('Clicked cancel button')
      this.visible = false
    },
     del(e) {
      console.log(e)
      artd(e.id).then((res) => {
        this.$message.success(`操作成功`)
        this.getList()
      })
      console.log(2)
    },
    handleEdit(e) {
      this.ruleForm.articleName = e.articleName
      this.ruleForm.articleContext = e.articleContext
      this.ruleForm.id = e.id
      this.visible = true
    },
    getList(e={}) {
      article({ pageSize: 10, pageNo: this.current,favoriteCreatorId: localStorage.getItem('id') ,...e}).then((res) => {
        this.data = res.body.records
        this.loading = false
          this.total = res.body.totalCount
      })
    },
   
  },
}
</script>

<style scoped></style>
