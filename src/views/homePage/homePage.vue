<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-18 17:01:01
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-04-19 09:00:06
-->
<template>
  <div>
    <Divider title="系统功能" :bottom="10" :top="0" />
    <a-row :gutter="24">
      <a-col :sm="24" :md="12" :xl="6" v-for="(item, index) in cardList" :key="index">
        <a-card hoverable :loading="loading">
          <a-card-meta>
            <template slot="title">{{ item.title }} </template>
            <template slot="description"> {{ item.description }}</template>
            <a-avatar slot="avatar" :src="item.icon" />
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
    <Divider title="组织结构图" :bottom="10" :top="10" />
  </div>
</template>

<script>
import { Divider } from '@/components'
export default {
  components: { Divider },
  data() {
    return {
      loading: true,
      cardList: [
        {
          icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: 'www.instagram.com',
          description: '在途流程 / 超期流程',
        },
        {
          icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: 'www.instagram.com',
          description: '我的待办 / 我的已办',
        },
        {
          icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: 'www.instagram.com',
          description: '组织 | 岗位 | 干部  ',
        },
        {
          icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: 'www.instagram.com',
          description: '组织管理 | 干部管理',
        },
      ],
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.ant-avatar {
  height: 50px;
  width: 50px;
}
</style>
