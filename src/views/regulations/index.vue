<template>
  <div>
    <!-- <banner /> -->
    <a-card v-if="$u.a == 1" :bordered="false" class="ant-pro-components-tag-select"> </a-card>
    <h-searchForm :formOptions="formOptions" btnItems="search, export, reset" @onSearch="searchInfo" @onReset="onReset">
      <template v-slot:btnItems>
        <a-button style="margin-left: 8px" @click="showModal" v-if="$u.a == 1"> 新建 </a-button>
      </template>
    </h-searchForm>
    <a-card style="margin-top: 24px" :bordered="false">
      <a-list size="large" rowKey="id" :loading="loading" itemLayout="vertical" :dataSource="data">
        <a-list-item :key="item.id" slot="renderItem" slot-scope="item">
          <template slot="actions">
            <a @click="$router.push(`/regulationsdetail?id=${item.id}`)"> 查看</a>
            <a @click="shoucang(item, item.favorite)" v-if="$u.a == 1"> {{ !item.favorite ? '收藏' : '取消收藏' }}</a>
            <a @click="hidden(item)" v-if="$u.a == 1"> {{ !item.isHide ? '隐藏' : '显示' }}</a>
            <a @click="handleEdit(item)" v-if="$u.a == 1"> 编辑</a>
            <a @click="del(item)" v-if="$u.a == 1"> 删除</a>
            <!-- <icon-text type="star-o" />
            <icon-text type="like-o" />
            <icon-text type="message" /> -->
          </template>
          <article-list-content
            :title="item.articleName"
            :description="item.articleContext"
            :owner="item.creatorName"
            avatar="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.616pic.com%2Fbg_w1180%2F00%2F09%2F54%2Ft9CgqF1O6s.jpg&refer=http%3A%2F%2Fpic.616pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654311676&t=d40d20bc3b5cb970fa16ff1720d2b4d7"
            updateAt="12312"
          />
        </a-list-item>
        <!-- <div slot="footer" v-if="data.length > 0" style="text-align: center; margin-top: 16px">
          <a-button @click="loadMore" :loading="loadingMore">加载更多</a-button>
        </div> -->
      </a-list>
      <div class="pagination" v-if="total != 0">
        <a-pagination @change="onShowSizeChange" v-model="current" :total="total" show-less-items />
      </div>
    </a-card>

    <a-modal :title="ruleForm.id ? '新建' : '编辑'" :visible="visible" @ok="handleOk" @cancel="handleCancel">
      <a-form-model ref="ruleForm" :model="ruleForm">
        <a-form-model-item label="文章标题">
          <a-input v-model="ruleForm.articleName" placeholder="input placeholder" />
        </a-form-model-item>
        <a-form-model-item label="文章内容">
          <a-input v-model="ruleForm.articleContext" placeholder="input placeholder" />
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </div>
</template>

<script>
import { TagSelect, StandardFormRow, ArticleListContent } from '@/components'
import IconText from './components/IconText'
import banner from '../banner.vue'
const TagSelectOption = TagSelect.Option
import { shoucang, quxiaoshoucang, article, articleadd, artd, articleadd1, hide } from '../../api/login'
const owners = [
  {
    id: 'wzj',
    name: '我自己',
  },
  {
    id: 'wjh',
    name: '吴家豪',
  },
  {
    id: 'zxx',
    name: '周星星',
  },
  {
    id: 'zly',
    name: '赵丽颖',
  },
  {
    id: 'ym',
    name: '姚明',
  },
]

export default {
  components: {
    TagSelect,
    TagSelectOption,
    StandardFormRow,
    ArticleListContent,
    IconText,
    banner,
  },
  data() {
    return {
      a: localStorage.getItem('Access-Token'),
      Title: '新建文章',
      ruleForm: {},
      visible: false,
      owners,
      loading: true,
      loadingMore: false,
      data: [],
      form: this.$form.createForm(this),
      formOptions: [
        {
          label: '文章标题', // label文字
          prop: 'articleName', // 字段名
          type: 'input', // 指定antd组件
          defaultValue: '', // 字段初始值
          placeholder: '请输入文章标题', // antd组件属性
          // rules: [{ required: true, message: '必填项', trigger: 'blur' }], // antd组件属性
          events: {
            // antd组件方法
            input(val) {
              console.log(val)
            },
          },
        },
      ],
      total: 0,
      current: 1,
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    onReset(e) {
      this.getList(e)
      console.log('获取到的搜索条件', e)
    },
    searchInfo(e) {
      this.getList(e)
      console.log('获取到的搜索条件', e)
    },
    shoucang(e, b) {
      if (!b) {
        shoucang(e.id).then((res) => {
          this.$message.success(`操作成功`)
          this.getList()
        })
      } else {
        quxiaoshoucang(e.id).then((res) => {
          this.$message.success(`操作成功`)
          this.getList()
        })
      }

      console.log(2)
    },
    quxiaoshoucang(e) {
      console.log(e)

      console.log(2)
    },
    hidden(e) {
      console.log(e)
      hide(e.id, { isHide: !e.isHide }).then((res) => {
        this.$message.success(`操作成功`)
        this.getList()
      })
      console.log(2)
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
      console.log(this.ruleForm)
      this.visible = true
    },
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      this.form.validateFields((err, values) => {
        if (!err) {
          let type = this.ruleForm.id ? articleadd1 : articleadd
          type({ ...this.ruleForm, isArticle: true }).then((res) => {
            this.visible = false
            this.$message.success(`操作成功`)
            this.getList()
          })
        }
      })
    },
    handleCancel(e) {
      console.log('Clicked cancel button')
      this.visible = false
    },
    handleChange(value) {
      console.log(`selected ${value}`)
    },
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize)
      this.current = current
      this.getList()
    },
    getList(e = {}) {
      console.log(this.$route.query?.name)
      article({ pageSize: 10, pageNo: this.current, isArticle: true, articleName: this.$route.query?.name, ...e }).then(
        (res) => {
          this.data = res.body.records
          this.total = res.body.totalCount
          this.loading = false
        }
      )
    },
    loadMore() {
      this.loadingMore = true
      this.$http
        .get('/list/article')
        .then((res) => {
          this.data = this.data.concat(res.result)
        })
        .finally(() => {
          this.loadingMore = false
        })
    },
    setOwner() {
      const {
        form: { setFieldsValue },
      } = this
      setFieldsValue({
        owner: ['wzj'],
      })
    },
  },
}
</script>

<style lang="less" scoped>
.ant-pro-components-tag-select {
  margin-top: 20px;
  /deep/ .ant-pro-tag-select .ant-tag {
    margin-right: 24px;
    padding: 0 8px;
    font-size: 14px;
  }
}

.list-articles-trigger {
  margin-left: 12px;
}
</style>
