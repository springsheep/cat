<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-05-01 15:29:35
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-07 23:18:48
-->
<template>
  <div class="antd-pro-components-article-list-content-index-listContent">
    <div class="description">
      <h3 v-if="title">标题：{{ title }}</h3>
      <slot> 内容： {{ description }} </slot>
    </div>
    <div class="extra" v-if="time">
      <a-avatar :src="avatar" size="small" />
      <a :href="href">{{ owner }}</a> 发布在 <a :href="href">{{ href }}</a>
      <em>{{ time }}</em>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleListContent',
  props: {
    prefixCls: {
      type: String,
      default: 'antd-pro-components-article-list-content-index-listContent',
    },
    description: {
      type: String,
      default: '',
    },
    owner: {
      type: String,
    },
    avatar: {
      type: String,
    },
    href: {
      type: String,
    },
    updateAt: {
      type: String,
    },
    title: {
      type: String,
    },
    time: {
      type: String,
    },
  },
}
</script>

<style lang="less" scoped>
@import '../index.less';

.antd-pro-components-article-list-content-index-listContent {
  .description {
    max-width: 720px;
    line-height: 22px;
  }
  .extra {
    margin-top: 16px;
    color: @text-color-secondary;
    line-height: 22px;

    & /deep/ .ant-avatar {
      position: relative;
      top: 1px;
      width: 20px;
      height: 20px;
      margin-right: 8px;
      vertical-align: top;
    }

    & > em {
      margin-left: 16px;
      color: @disabled-color;
      font-style: normal;
    }
  }
}

@media screen and (max-width: @screen-xs) {
  .antd-pro-components-article-list-content-index-listContent {
    .extra {
      & > em {
        display: block;
        margin-top: 8px;
        margin-left: 0;
      }
    }
  }
}
</style>
