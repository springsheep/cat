<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-05-01 18:29:49
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-06 22:28:13
-->
<template>
  <div>
    <banner> </banner>
    <a-checkbox-group @change="onChange" style="margin-top: 20px">
      <a-row>
        <a-col :span="8" v-for="(item, index) in arr" :key="index">
          <a-checkbox :value="index"> {{ item.name }} </a-checkbox>
        </a-col>
      </a-row>
    </a-checkbox-group>
    <a-form-model>
      <a-form-model-item label="重量">
        <a-input v-model="weight" placeholder="input placeholder" />
      </a-form-model-item>

      <a-form-model-item>
        <a-button type="primary" @click="sub"> Submit </a-button>
      </a-form-model-item>
    </a-form-model>
    {{ neirong }}
  </div>
</template>
<script>
import banner from './banner.vue'
export default {
  components: { banner },
  data() {
    return {
      qqq: [],
      checkedValues: [],
      weight: 0,
      arr: [
        { name: '兔里脊', value: 5, zhongliang: '' },
        { name: '鹿腿', value: 5, zhongliang: '' },
        { name: '牛霖', value: 5, zhongliang: '' },
        { name: '兔排', value: 5, zhongliang: '' },
        { name: '鸵鸟', value: 5, zhongliang: '' },
        { name: '鹿脖肉', value: 5, zhongliang: '' },
        { name: '小米龙', value: 5, zhongliang: '' },
        { name: '猪里脊', value: 5, zhongliang: '' },
        { name: '牛腩', value: 3, zhongliang: '' },
        { name: '三文鱼', value: 5, zhongliang: '' },
        { name: '鸡胸', value: 5, zhongliang: '' },
        { name: '青口贝', value: 2, zhongliang: '' },
        { name: '鸭小胸', value: 5, zhongliang: '' },
        { name: '马鲛鱼', value: 5, zhongliang: '' },
        { name: ' 鸡心', value: 5, zhongliang: '' },
        { name: '鸡肝', value: 5, zhongliang: '' },
        { name: '  兔肾', value: 5, zhongliang: '' },
        { name: '牛肾', value: 2, zhongliang: '' },
        { name: '鸭肝', value: 2, zhongliang: '' },
        { name: '猪肝', value: 5, zhongliang: '' },
      ],
      neirong: '',
    }
  },
  methods: {
    sub() {
      if (this.weight === 0) return
      let arr = []
      this.checkedValues.forEach((i) => {
        i = Number(i)
        arr.push(this.arr[i])
      })
      let sum = 0
      arr.forEach((i) => {
        sum = sum + i.value
      })
      arr.forEach((i) => {
        i.zhongliang = ((i.value / sum) * this.weight).toFixed(2)
      })
      console.log(arr)
      arr.forEach((i) => {
        this.neirong = this.neirong + i.name + i.zhongliang + 'kg'
      })
    },
    onChange(checkedValues) {
      this.neirong = ''
      this.checkedValues = checkedValues
      console.log('checked = ', checkedValues)
    },
  },
}
</script>
