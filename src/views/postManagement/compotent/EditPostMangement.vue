<!--
 * @Author: your name
 * @Date: 2021-06-02 17:16:34
 * @LastEditTime: 2022-04-21 10:28:07
 * @LastEditors: 张鹏
 * @Description: In User Settings Edit
 * @FilePath: /qrcm/src/views/OpenIssueList/components/questionBaseInfo.vue
-->

<script>
import FormPage from '@/components/FormPage'
export default {
  mixins: [FormPage],
  data() {
    return {
      layout: 'horizontal',
      formName: 'form',
      items: [
        {
          type: 'dividerTypeOne',
          title: '发文信息',
          span: 24,
        },
        {
          type: 'input',
          title: '一级部门',
          span: 12,
          placeholder: '请输一级部门',
          key: 'solution',
          validate: {
            required: true,
            message: '请输入一级部门',
            trigger: 'change',
          },
        },
        {
          type: 'input',
          title: '发文文件名称',
          span: 12,
          placeholder: '请输发文文件名称',
          key: 'solution2',
          validate: {
            required: true,
            message: '请输发文文件名称',
            trigger: 'change',
          },
        },
        {
          type: 'dividerTypeOne',
          title: '完善发文信息',
          span: 24,
        },

        {
          span: 24,
          type: 'datetimepicker',
          title: '任命开始日期',
          placeholder: '请选择任命开始日期',
          key: 'planCloseTime',
          format: 'YYYY-MM-DD',
          valueFormat: 'YYYY-MM-DD',
          onchange: this.changeTime,
          validate: {
            required: true,
            message: '请选择任命开始日期',
            trigger: 'change',
          },
        },
        {
          type: 'input',
          title: '任命文号',
          span: 24,
          placeholder: '请输任命文号',
          key: 'solution1',
          validate: {
            required: true,
            message: '请输入任命文号',
            trigger: 'change',
          },
        },
        {
          type: 'select',
          title: '适用干部',
          placeholder: '请选择适用干部',
          key: 'isValid',
          sels: this.$getDic('shortTermIsValidList'),
          listkey: 'key',
          listvalue: 'value',
          showsearch: true,
          span: 24,
        },
      ],
    }
  },
  props: {
    isView: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // async getCommunityList(e) {}
  },
  created() {
    console.log(window)
  },
}
</script>

<style></style>
