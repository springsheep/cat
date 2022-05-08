<template>
  <div class="page-header-index-wide page-header-wrapper-grid-content-main">
    <h-searchForm :formOptions="formOptions" btnItems="search, export, reset" @onSearch="searchInfo" @onReset="onReset">
    </h-searchForm>
    <a-row :gutter="24">
      <a-col :md="24" :lg="17">
        <a-card
          style="width: 100%"
          :bordered="false"
          :tabList="tabListNoTitle"
          :activeTabKey="noTitleKey"
          @tabChange="(key) => handleTabChange(key, 'noTitleKey')"
        >
          <article-page ref="ac" v-if="noTitleKey === 'article'"></article-page>
        </a-card>
      </a-col>
      <a-col :md="24" :lg="7">
        <a-card :bordered="false">
          <a-button @click="showModal">发帖</a-button>
        </a-card>
      </a-col>
    </a-row>
    <a-modal title="新建帖子" :visible="visible" @ok="handleOk" @cancel="handleCancel">
      <a-form-model ref="ruleForm" :model="ruleForm">
        <a-form-model-item label="标题">
          <a-input v-model="ruleForm.articleName" placeholder="input placeholder" />
        </a-form-model-item>
        <a-form-model-item label="内容">
          <a-input v-model="ruleForm.articleContext" placeholder="input placeholder" />
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </div>
</template>

<script>
import { PageView, RouteView } from '@/layouts'
import ArticlePage from './Article.vue'
import { mapGetters } from 'vuex'
import { articleadd, article } from '../api/login'
export default {
  components: {
    RouteView,
    PageView,
    ArticlePage,
  },
  data() {
    return {
      tags: ['很有想法的', '专注设计', '辣~', '大长腿', '川妹子', '海纳百川'],
      ruleForm: {},
      visible: false,
      tagInputVisible: false,
      tagInputValue: '',

      teams: [],
      teamSpinning: true,

      tabListNoTitle: [
        {
          key: 'article',
          tab: '帖子',
        },
      ],
      noTitleKey: 'article',
      formOptions: [
        {
          label: '标题', // label文字
          prop: 'articleName', // 字段名
          type: 'input', // 指定antd组件
          defaultValue: '', // 字段初始值
          placeholder: '请输入标题', // antd组件属性
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
  computed: {
    ...mapGetters(['nickname', 'avatar']),
  },
  mounted() {
    this.getTeams()
  },
  methods: {
    onReset(e) {
      this.$refs.ac.getList(e)
      console.log('获取到的搜索条件', e)
    },
    searchInfo(e) {
      this.$refs.ac.getList(e)
      console.log('获取到的搜索条件', e)
    },
    handleOk(e) {
      let type = articleadd
      type({ ...this.ruleForm, isArticle: false }).then((res) => {
        this.visible = false
        this.$message.success(`操作成功`)
        this.$refs.ac.getList()
      })
    },
    handleCancel(e) {
      console.log('Clicked cancel button')
      this.visible = false
    },
    showModal() {
      this.visible = true
    },
    getTeams() {
      this.$http.get('/workplace/teams').then((res) => {
        this.teams = res.result
        this.teamSpinning = false
      })
    },
    getList() {
      article().then((res) => {
        this.data = res.body.records
        console.log(this.data)

        this.loading = false
      })
    },
    handleTabChange(key, type) {
      this[type] = key
    },

    handleTagClose(removeTag) {
      const tags = this.tags.filter((tag) => tag !== removeTag)
      this.tags = tags
    },

    showTagInput() {
      this.tagInputVisible = true
      this.$nextTick(() => {
        this.$refs.tagInput.focus()
      })
    },

    handleInputChange(e) {
      this.tagInputValue = e.target.value
    },

    handleTagInputConfirm() {
      const inputValue = this.tagInputValue
      let tags = this.tags
      if (inputValue && !tags.includes(inputValue)) {
        tags = [...tags, inputValue]
      }

      Object.assign(this, {
        tags,
        tagInputVisible: false,
        tagInputValue: '',
      })
    },
  },
}
</script>

<style lang="less" scoped>
.page-header-wrapper-grid-content-main {
  width: 100%;
  height: 100%;
  min-height: 100%;
  transition: 0.3s;

  .account-center-avatarHolder {
    text-align: center;
    margin-bottom: 24px;

    & > .avatar {
      margin: 0 auto;
      width: 104px;
      height: 104px;
      margin-bottom: 20px;
      border-radius: 50%;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }

    .username {
      color: rgba(0, 0, 0, 0.85);
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 4px;
    }
  }

  .account-center-detail {
    p {
      margin-bottom: 8px;
      padding-left: 26px;
      position: relative;
    }

    i {
      position: absolute;
      height: 14px;
      width: 14px;
      left: 0;
      top: 4px;
      background: url(https://gw.alipayobjects.com/zos/rmsportal/pBjWzVAHnOOtAUvZmZfy.svg);
    }

    .title {
      background-position: 0 0;
    }
    .group {
      background-position: 0 -22px;
    }
    .address {
      background-position: 0 -44px;
    }
  }

  .account-center-tags {
    .ant-tag {
      margin-bottom: 8px;
    }
  }

  .account-center-team {
    .members {
      a {
        display: block;
        margin: 12px 0;
        line-height: 24px;
        height: 24px;
        .member {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.65);
          line-height: 24px;
          max-width: 100px;
          vertical-align: top;
          margin-left: 12px;
          transition: all 0.3s;
          display: inline-block;
        }
        &:hover {
          span {
            color: #1890ff;
          }
        }
      }
    }
  }

  .tagsTitle,
  .teamTitle {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 12px;
  }
}
</style>
