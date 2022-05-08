<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-05-01 17:40:18
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-05 01:31:52
-->
<template>
  <div>
    <banner />
    <div class="content">
      <a-tabs :default-active-key="0" tab-position="left" :style="{ height: '800px' }">
        <a-tab-pane v-for="(i, index) in arr" :key="index" :tab="`${i.name}`">
          <div class="content-right">
            <img :src="i.img" alt="" />
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import banner from './banner'
export default {
  components: { banner },
  data() {
    return {
      arr: [
        { name: '出血诊断', img: require('./img/出血诊断表.png') },
        { name: '呕吐诊断', img: require('./img/呕吐诊断表.png') },
        { name: '呼吸异常诊断', img: require('./img/呼吸异常诊断表.png') },
        { name: '瘙痒诊断', img: require('./img/瘙痒诊断表.png') },
        { name: '精神不佳诊断', img: require('./img/精神不佳诊断表.png') },
        { name: '腹泻诊断', img: require('./img/腹泻诊断表.png') },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.content {
  padding: 20px 0;
  margin-top: 20px;
  background: #fff;
  &-right {
    height: 750px;
    border: 1px solid #ddd;
    padding: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    img {
      height: 100%;
      display: inline-block;
    }
  }
  .btns {
    margin-top: 20px;
    text-align: right;
    margin-right: 20px;
  }
}
</style>
