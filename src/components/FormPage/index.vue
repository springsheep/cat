<!--
 * @Author: your name
 * @Date: 2021-06-01 17:59:55
 * @LastEditTime: 2022-04-21 10:26:39
 * @LastEditors: 张鹏
 * @Description: In User Settings Edit
 * @FilePath: /qrcm/src/components/FormPage/index.vue
-->
<template>
  <div class="formPage">
    <slot name="formTop" />
    <a-form-model :layout="layout || 'vertical'" :model="searchData" :rules="rules" :ref="formName">
      <a-row :gutter="24">
        <a-col v-for="(item, index) in items" :key="index" :span="item.span || 12">
          <a-divider orientation="left" v-if="item.type === 'divider'">
            {{ item.title }}
          </a-divider>
          <!-- 审批记录 -->
          <Divider v-if="item.type === 'dividerTypeOne'" type="1" :title="item.title" :top="0" :bottom="10"> </Divider>
          <a-form-model-item
            :label="item.title"
            :labelCol="item.labelCol"
            :key="index"
            :prop="item.key"
            v-if="item.type != 'dividerTypeOne' && item.type !== 'divider' && !item.ifHidden"
          >
            <!-- 文件上传 -->
            <upLoadCom
              v-if="item.type === 'upLoad'"
              :disabled="item.isDisabled"
              :fileListArr.sync="searchData[item.key]"
              :limit="item.limit || 1"
            />
            <a-input
              v-model="searchData[item.key]"
              :placeholder="item.placeholder"
              v-if="item.type === 'input'"
              :disabled="item.isDisabled"
            />
            <a-textarea
              v-model="searchData[item.key]"
              :placeholder="item.placeholder"
              v-if="item.type === 'textarea'"
              :disabled="item.isDisabled"
              :auto-size="{ minRows: 3, maxRows: 5 }"
            />
            <a-range-picker
              v-model="searchData[item.key]"
              :format="item.format || 'YYYY-MM-DD'"
              :valueFormat="item.valueFormat || 'YYYY-MM-DD'"
              v-if="item.type === 'rangetimepicker'"
              :disabled="item.isDisabled"
            />
            <a-date-picker
              v-model="searchData[item.key]"
              :format="item.format || 'YYYY-MM-DD'"
              :valueFormat="item.valueFormat || 'YYYY-MM-DD'"
              :defaultValue="item.defaultValue || ''"
              v-if="item.type === 'datetimepicker'"
              :disabled="item.isDisabled"
              @change="item.onchange"
            />
            <a-month-picker
              v-model="searchData[item.key]"
              v-if="item.type === 'monthtimepicker'"
              :disabled="item.isDisabled"
            />
            <a-week-picker
              v-model="searchData[item.key]"
              v-if="item.type === 'weektimepicker'"
              :disabled="item.isDisabled"
            />
            <a-button type="link" v-if="item.type === 'link'" @click="item.onClick(searchData[item.key])">
              {{ searchData[item.key] }}
            </a-button>
            <a-select
              @change="item.onchange"
              :filter-option="filterOption"
              :show-search="item.showsearch || false"
              v-model="searchData[item.key]"
              :placeholder="item.placeholder"
              v-if="item.type === 'select'"
              :disabled="item.isDisabled"
              :defaultValue="searchData[item.key] || ''"
            >
              <a-select-option v-for="(ite, idx) in item.sels" :key="idx" :value="ite[item.listvalue]"
                >{{ ite[item.listkey]
                }}{{ ite[item.listkeyTwo] ? '(' + ite[item.listkeyTwo] + ')' : '' }}</a-select-option
              >
            </a-select>
          </a-form-model-item>
        </a-col>
      </a-row>
    </a-form-model>
  </div>
</template>

<script>
import { Divider } from '@/components'
import upLoadCom from '../UpLoad/index'
export default {
  components: { upLoadCom, Divider },
  props: {
    initData: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      layout: 'horizontal', //支持vertical和horizontal 行内暂时有bug
      formName: 'form', //表单的ref属性名
      searchData: {}, //数据
      items: [], //定义表单项列表
      rules: {}, //表单校验规则
    }
  },
  created() {
    this.genRules()
  },
  watch: {
    initData: {
      handler(e) {
        this.searchData = JSON.parse(JSON.stringify(e))
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    // this.searchData = this.initData;
  },
  methods: {
    filterOption(input, option) {
      return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
    },
    genRules() {
      console.log(this.items)
      if (this.items.length == 0) {
        this.rules = {}
      }
      this.items.map((i) => {
        console.log(this.searchData[i.key])
        //如果没有值则赋值给他 赋值默认值
        if (i.defaultValue && !this.searchData[i.key]) {
          this.$set(this.searchData, i.key, i.defaultValue)
        }
        if (i.validate) {
          this.rules = Object.assign(this.rules, { [i.key]: i.validate })
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.formPage {
  .ant-form-horizontal {
    // .form_left,
    // .form_right {
    //   flex: 1;
    // }
    // /deep/.ant-form-item-control {
    //   line-height: normal;
    // }
    /deep/ .ant-form-item {
      padding-bottom: 0;
    }
    /deep/ .ant-form-item-label {
      min-width: 120px;
    }
    /deep/ .ant-form-item {
      display: flex;
      margin-right: 0;
    }
    /deep/ .ant-form-item-control-wrapper {
      flex: 1;
    }

    // /deep/.ant-row {
    //   margin-bottom: 15px;
    //   // padding-right: 20px;
    // }
  }
  /deep/ .ant-calendar-picker {
    width: 100%;
  }
}
</style>
