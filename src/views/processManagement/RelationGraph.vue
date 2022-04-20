<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-19 14:59:16
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-04-20 11:59:26
-->
<template>
  <div>
    <div style="height: 450px">
      <SeeksRelationGraph ref="seeksRelationGraph" :options="graphOptions" :on-node-expand="onNodeExpand" />
    </div>
  </div>
</template>

<script>
import SeeksRelationGraph from 'relation-graph'
export default {
  name: 'SeeksRelationGraphDemo',
  components: { SeeksRelationGraph },
  data() {
    return {
      demoname: '---',
      graphOptions: {
        // backgrounImage: 'http://ai-mark.cn/images/ai-mark-desc.png',
        // backgrounImageNoRepeat: true,
        layouts: [
          {
            label: '中心',
            layoutName: 'tree',
            layoutClassName: 'seeks-layout-tree',
            defaultJunctionPoint: 'border',
            // defaultNodeShape: 0,
            // defaultLineShape: 1,
            centerOffset_x: 200,
            centerOffset_y: 0,
            min_per_width: '50',
            min_per_height: '100',
            distance_coefficient: 0.4,
          },
        ],
        defaultExpandHolderPosition: 'bottom',
        defaultLineShape: 4,
        defaultJunctionPoint: 'tb',
        defaultNodeShape: 1,
        defaultNodeWidth: '60',
        defaultNodeHeight: '200',
        defaultNodeBorderWidth: 0,
        disableZoom: true,
        allowShowMiniToolBar: false,
      },
    }
  },
  created() {},
  mounted() {
    this.demoname = this.$route.params.demoname
    this.setGraphData()
  },
  methods: {
    setGraphData() {
      var __graph_json_data = {
        rootId: 'N1',
        nodes: [
          { id: 'N1', text: '深圳市腾讯计算机系统有限公司', color: '#2E4E8F' },

          { id: 'N6', text: '腾讯云科技有限公司', color: '#4ea2f0' },
          { id: 'N7', text: '腾讯医疗健康（深圳）有限公司', color: '#4ea2f0' },
          { id: 'N8', text: '深圳市腾讯视频文化传播有限公司', color: '#4ea2f0' },
          { id: 'N9', text: '星创互联（北京）科技有限公司', color: '#4ea2f0' },
          { id: 'N10', text: '苏州钟鼎创业二号投资中心（有限合伙）', color: '#4ea2f0' },
          { id: 'N11', text: '北京驿码神通信息技术有限公司', color: '#4ea2f0' },
        ],
        links: [
          { from: 'N1', to: 'N6', text: '' },
          { from: 'N1', to: 'N7', text: '' },
          { from: 'N1', to: 'N8', text: '' },
          { from: 'N1', to: 'N9', text: '' },
          { from: 'N1', to: 'N10', text: '' },
          { from: 'N1', to: 'N11', text: '' },
        ],
      }
      __graph_json_data.nodes.forEach((thisNode) => {
        if (thisNode.text === '深圳市腾讯计算机系统有限公司') {
          thisNode.width = 300
          thisNode.height = 60
          thisNode.offset_x = -80
        }
        if (
          thisNode.text === '张志东' ||
          thisNode.text === '陈一丹' ||
          thisNode.text === '许晨晔' ||
          thisNode.text === '马化腾'
        ) {
          thisNode.width = 100
          thisNode.height = 80
          thisNode.offset_y = 80
        }
        // 为节点《这个节点原本是没有子节点的》设置属性expandHolderPosition，使其在没有子节点的情况下也能显示【展开/收缩】按钮，当点击展开时动态加载子节点数据
        if (thisNode.text === '这个节点原本是没有子节点的') {
          thisNode.data = { asyncChild: true, loaded: false } // 这是一个自定义属性，用来在后续判断如果点击了这个节点，则动态获取数据
          thisNode.expandHolderPosition = 'bottom'
          thisNode.expanded = false
        }
      })
      var _graphSetting = this.$refs.seeksRelationGraph.graphSetting
      // this.$refs.seeksRelationGraph.graphSetting.defaultLineShape = 1
      // // 手工设置节点的坐标
      // const _center = {
      //   x: (_graphSetting.viewSize.width) / 2 - _graphSetting.canvasOffset.x,
      //   y: (_graphSetting.viewSize.height) / 2 - _graphSetting.canvasOffset.y
      // }
      setTimeout(
        function () {
          this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, (seeksRGGraph) => {
            // 这些写上当图谱初始化完成后需要执行的代码
            this.$nextTick(() => {
              // $nextTick的功能你懂的
              this.$refs.seeksRelationGraph.refresh()
            })
          })
        }.bind(this),
        1000
      )
    },
    onNodeExpand(node, e) {
      //模拟动态加载数据
      if (node.data && node.data.asyncChild === true && node.data.loaded === false) {
        node.data.loaded = true
        setTimeout(
          function () {
            this.g_loading = false
            var _new_json_data = {
              nodes: [
                { id: node.id + '-child-1', text: node.id + '-的子节点1' },
                { id: node.id + '-child-2', text: node.id + '-的子节点2' },
                { id: node.id + '-child-3', text: node.id + '-的子节点3' },
              ],
              links: [
                { from: node.id, to: node.id + '-child-1', text: '动态子节点' },
                { from: node.id, to: node.id + '-child-2', text: '动态子节点' },
                { from: node.id, to: node.id + '-child-3', text: '动态子节点' },
              ],
            }
            this.$refs.seeksRelationGraph.appendJsonData(_new_json_data, (seeksRGGraph) => {
              // 这些写上当图谱初始化完成后需要执行的代码
            })
          }.bind(this),
          1000
        )
        return
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
