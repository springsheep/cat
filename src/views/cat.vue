<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-05-01 17:46:15
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-06 21:17:18
-->
<template>
  <div>
    <img
      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1102%2F24%2Fc5%2F6825456_6825456_1298546235265.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653990332&t=6032ebe84d8babbc9140ef27c6999e3c"
      alt=""
    />
    <a-tooltip class="head" @click="$router.push(`/regulations?name=${'猫头'}`)">
      <template slot="title"> 猫头 </template>
      <div></div>
    </a-tooltip>
    <a-tooltip class="mouse"  @click="$router.push(`/regulations?name=${'猫嘴巴'}`)">
      <template slot="title"> 猫嘴巴 </template>
      <div></div>
    </a-tooltip>
    <a-tooltip class="body"  @click="$router.push(`/regulations?name=${'猫身体'}`)">
      <template slot="title"> 猫身体 </template>
      <div></div>
    </a-tooltip>
       <a-tooltip class="ke"  @click="$router.push(`/regulations?name=${'猫腿'}`)" >
      <template slot="title"> 猫腿 </template>
      <div></div>
    </a-tooltip>
       </a-tooltip>
       <a-tooltip class="weiba"  @click="$router.push(`/regulations?name=${'尾巴'}`)">
      <template slot="title"> 猫尾巴 </template>
      <div></div>
    </a-tooltip>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
img {
  width: 200px;
}
.head {
  width: 50px;
  height: 50px;
  position: relative;
  top: -196px;
  left: 52px;
  cursor: pointer;
}
.mouse {
  width: 20px;
  height: 20px;
  position: relative;
  top: -220px;
  left: 66px;
  cursor: pointer;
}
.body {
  width: 80px;
  height: 80px;
  position: relative;
  top: -220px;
  left: 66px;
  cursor: pointer;
}
.ke {
  width: 20px;
  height: 40px;
  position: relative;
  top: -220px;
  left: 66px;
  cursor: pointer;
}
.weiba {
  width: 50px;
  height: 20px;
  position: relative;
  top: -240px;
  left: 100px;
  cursor: pointer;
}
</style>
