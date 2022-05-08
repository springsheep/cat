<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-05-01 15:29:35
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-01 17:28:41
-->
<template>
  <global-footer class="footer custom-render">
    <template v-slot:links>
      <a>一起养猫吧</a>
      <a href="https://www.github.com/sendya/" target="_blank">@Sendya</a>
    </template>
  </global-footer>
</template>

<script>
import { GlobalFooter } from '@ant-design-vue/pro-layout'

export default {
  name: 'ProGlobalFooter',
  components: {
    GlobalFooter,
  },
}
</script>
