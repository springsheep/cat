<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-05-01 17:40:18
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-01 17:47:05
-->
<template>
  <div>
    <banner />
    <cat></cat>
  </div>
</template>

<script>
import banner from './banner'
import cat from './cat.vue'
export default {
  components: { banner, cat },
}
</script>

<style></style>
