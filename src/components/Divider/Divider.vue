<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-18 17:40:15
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-04-18 17:57:10
-->
<template>
  <h1 class="divder-left" :style="{ 'margin-bottom': bottom + 'px', 'margin-top': top + 'px' }">{{ title }}</h1>
</template>

<script>
export default {
  name: 'Divider',
  props: {
    title: {
      default: '标题',
      type: String,
    },
    bottom: {
      default: 20,
      type: Number,
    },
    top: {
      default: 20,
      type: Number,
    },
  },
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/es/style/themes/default.less';
.divder-left {
  height: 36px;
  background: #fff;
  width: 100%;
  border-left: 5px solid @primary-color;
  padding-left: 20px;
  line-height: 36px;
  font-size: 18px;
}
</style>
