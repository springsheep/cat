<!--
 * @Author: your name
 * @Date: 2021-06-13 15:21:42
 * @LastEditTime: 2022-04-21 13:16:22
 * @LastEditors: 张鹏
 * @Description: In User Settings Edit
 * @FilePath: /qrcm/src/components/alert/EditPostMangement.vue
-->
<template>
  <a-modal
    :maskClosable="false"
    v-model="visible"
    title="编辑干部发文"
    :confirmLoading="loading"
    :width="700"
    @ok="ok"
    okText="确定"
    cancelText="取消"
    :destroyOnClose="true"
    :afterClose="close"
    class="alert-employee form"
  >
    <EditPostMangement ref="EditPostMangement" :initData="initData" />
  </a-modal>
</template>
<script>
import EditPostMangement from './compotent/EditPostMangement.vue'
import mixins from '@/mixins/edit'
export default {
  mixins: [mixins],
  watch: {
    current: {
      handler(e) {
        this.initData = e
      },
      immediate: true,
      deep: true,
    },
  },
  props: {
    current: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  components: { EditPostMangement },
  data() {
    return {
      initData: {},
    }
  },
  methods: {
    show() {
      this.visible = true
    },
    close() {
      this.form = {}
      this.$emit('freash', 'close')
    },
    ok() {
      const {
        $refs: { EditPostMangement },
      } = this
      const EditPostMangementForm = new Promise((resolve, reject) => {
        EditPostMangement.$refs.form.validate((err, values) => {
          if (err) {
            resolve(values)
            return
          }
          reject(err)
        })
      })

      Promise.all([EditPostMangementForm])
        .then(async () => {
          let type = this.initData.id ? 'reportshortsolutionmodify' : 'reportshortsolutionadd'
          let res = await this.$api[type]({
            data: this.initData.id
              ? EditPostMangement.searchData
              : { ...EditPostMangement.searchData, ...this.initData },
          })
          if (res.code == 200) {
            this.$message.success(this.initData.id ? '编辑成功' : '新增成功')
            this.loading = false
            this.$emit('freash')
            this.visible = false
          }
        })
        .catch(() => {})
    },
  },
}
</script>
