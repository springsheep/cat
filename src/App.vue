<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-18 11:17:20
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-08 19:41:09
-->
<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
import { domTitle, setDocumentTitle } from '@/utils/domUtil'
import { i18nRender } from '@/locales'

export default {
  data() {
    return {}
  },
  computed: {
    locale() {
      // 只是为了切换语言时，更新标题
      const { title } = this.$route.meta
      title && setDocumentTitle(`${i18nRender(title)} - ${domTitle}`)

      return this.$i18n.getLocaleMessage(this.$store.getters.lang).antLocale
    },
  },
}
</script>
<style>
.pagination {
  display: flex;
  justify-content: flex-end;
}
</style>
<style lang="less" scoped>
.ant-carousel {
  /deep/.slick-slide {
    text-align: center;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }
}

.ant-carousel {
  /deep/ .slick-slide h3 {
    color: #fff;
  }
}
#app {
  overflow-y: scroll;
  // height: calc(100vh-106px);
  &::-webkit-scrollbar {
    //整体样式
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1em;
    background-color: rgba(50, 50, 50, 0.205);
  }
  &::-webkit-scrollbar-track {
    border-radius: 1em;
    background-color: rgba(50, 50, 50, 0.1);
  }
}
</style>
