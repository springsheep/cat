<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-05-01 17:36:56
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-04 22:14:53
-->
<template>
  <a-carousel :after-change="onChange">
    <img
      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fres.picxiaobai.com%2Ftxb%2Ftemplate%2Fpre%2F20181019%2Fe75bfa8388eb352e7dbbb1714b9ce4bf.jpg%3Fv%3D1539942172&refer=http%3A%2F%2Fres.picxiaobai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654265498&t=fb7edfa8e769a7122c2e5bc9e2a34c67"
      alt=""
    />
    <img
      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.yungong.com%2Fueditor%2Fphp%2Fupload%2Fimage%2F20210224%2F1614127702641908.jpg&refer=http%3A%2F%2Fwww.yungong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654265498&t=00e663ac77341af82a25f6c7f558f87a"
      alt=""
    />
  </a-carousel>
</template>
<script>
export default {
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c)
    },
  },
}
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  background: #364d79;
  overflow: hidden;
}
img {
  height: 100%;
  width: 100%;
  display: inline-block;
}
.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
