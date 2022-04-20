<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-19 11:48:57
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-04-20 09:10:04
-->
<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-19 11:48:57
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-04-19 15:09:44
-->
<template>
  <div class="content">
    <a-anchor affix wrapperClass="wrapperClass" v-if="!isMobile">
      <a-anchor-link href="#bjsm" title="背景说明" />
      <a-anchor-link href="#zzjgsz" title="组织结构设置" />
      <a-anchor-link href="#glgj" title="岗类岗级报批信息" />
      <a-anchor-link href="#gwczd" title="岗位常驻地报批信息" />
      <a-anchor-link href="#npygb" title="拟聘用干部报批信息" />
      <a-anchor-link href="#fwfj" title="发文附件" />
      <!-- <a-anchor-link href="#API" title="API">
        <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
        <a-anchor-link href="#Link-Props" title="Link Props" />
      </a-anchor-link> -->
      <a-anchor-link href="#shpj" title="审批记录" />
    </a-anchor>
    <header class="content-header">
      <h1 class="content-header-title">组织调整与干部任免申请单（20220325001）</h1>
      <div class="content-header-tag">
        <a-tag color="#1A8AFA"> 一级部门：商业BG </a-tag>
        <a-tag color="#FD6E21"> 终批角色：CEO </a-tag>
      </div>
    </header>
    <Divider type="2" title="背景说明" :top="0" :bottom="0" id="bjsm"></Divider>
    <div class="bg">
      <a-textarea
        class="bg-topInfo"
        v-model="bgInfo"
        placeholder="Controlled autosize"
        :auto-size="{ minRows: 3, maxRows: 5 }"
      />
      <div class="bg-nums">
        <div class="bg-nums-one" v-for="item in 5">
          <a-statistic title="组织结构设置" :value="1128" style="margin-right: 50px">
            <template #suffix>
              <div>个</div>
            </template>
          </a-statistic>
        </div>
      </div>
    </div>
    <Divider type="2" title="组织结构设置" :top="0" :bottom="0" id="zzjgsz">
      <template v-slot:right>
        <a-button type="link" class="a-button glgj-head-btn"> 查看及编辑详情 </a-button>
      </template>
    </Divider>
    <div class="zzjg">
      <a-textarea
        class="zzjg-topInfo"
        v-model="zzjgInfo"
        placeholder="Controlled autosize"
        :auto-size="{ minRows: 3, maxRows: 5 }"
      />
      <div class="zzjg-btn">
        <a-radio-group default-value="a" button-style="solid">
          <a-radio-button value="a"> 新版 </a-radio-button>
          <a-radio-button value="d"> 原版 </a-radio-button>
        </a-radio-group>
      </div>
      <RelationGraph />
      <div>
        <tableList></tableList>
      </div>
    </div>
    <!-- 岗类岗级报批信息 -->
    <Divider type="2" title="岗类岗级报批信息" :top="0" :bottom="0" id="glgj">
      <template v-slot:right>
        <a-button type="link" class="a-button"> 查看及编辑详情 </a-button>
        <a-checkbox class="glgj-head-btn glgj-head-checkbox"> </a-checkbox>
      </template>
    </Divider>
    <div class="glgj">
      <a-textarea
        class="glgj-topInfo"
        v-model="glgjInfo"
        placeholder="Controlled autosize"
        :auto-size="{ minRows: 3, maxRows: 5 }"
      />
      <tableList></tableList>
    </div>
    <!-- 岗位常驻地报批信息 -->
    <Divider type="2" title="岗位常驻地报批信息" :top="0" :bottom="0" id="gwczd">
      <template v-slot:right>
        <a-button type="link" class="a-button"> 查看及编辑详情 </a-button>
        <a-checkbox class="glgj-head-btn glgj-head-checkbox"> </a-checkbox>
      </template>
    </Divider>
    <div class="glgj">
      <a-textarea
        class="glgj-topInfo"
        v-model="glgjInfo"
        placeholder="Controlled autosize"
        :auto-size="{ minRows: 3, maxRows: 5 }"
      />
      <tableList></tableList>
    </div>
    <!-- 拟聘用干部报批信息 -->
    <Divider type="2" title="拟聘用干部报批信息" :top="0" :bottom="0" id="npygb">
      <template v-slot:right>
        <a-button type="link" class="a-button"> 查看及编辑详情 </a-button>
        <a-checkbox class="glgj-head-btn glgj-head-checkbox"> </a-checkbox>
      </template>
    </Divider>
    <div class="glgj">
      <a-textarea
        class="glgj-topInfo"
        v-model="glgjInfo"
        placeholder="Controlled autosize"
        :auto-size="{ minRows: 3, maxRows: 5 }"
      />
      <tableListOne></tableListOne>
    </div>
    <!-- 发文附件 -->
    <Divider type="2" title="发文附件" :top="0" :bottom="0" id="fwfj">
      <template v-slot:right>
        <a-button type="link" class="a-button"> 查看及编辑详情 </a-button>
        <a-checkbox class="glgj-head-btn glgj-head-checkbox"> </a-checkbox>
      </template>
    </Divider>
    <div class="glgj">
      <a-textarea
        class="glgj-topInfo"
        v-model="glgjInfo"
        placeholder="Controlled autosize"
        :auto-size="{ minRows: 3, maxRows: 5 }"
      />
      <tableList></tableList>
    </div>
    <!-- 审批记录 -->
    <Divider type="2" title="审批记录" :top="0" :bottom="0" id="shpj"> </Divider>
    <div class="glgj">
      <div class="glgj-steps">
        <template>
          <a-steps progress-dot :current="2" direction="vertical">
            <a-step v-for="(item, index) in steps" :key="index">
              <template v-slot:title>
                <img class="step-logo" :src="item.img || imgLogo" alt="" />
                <p>{{ item.name }}</p>
              </template>
              <template v-slot:subTitle>{{ item.time }} </template>
              <template v-slot:description>{{ item.message }} </template>
            </a-step>
          </a-steps>
        </template>
      </div>
    </div>
    <div class="footer-info">
      <a-textarea class="footer-info-topInfo" placeholder="请输入审批意见" :auto-size="{ minRows: 3, maxRows: 5 }" />
      <div class="footer-info-btns">
        <a-space>
          <a-button type="dashed">保存草稿</a-button>
          <a-button>转办</a-button>
          <a-button>驳回</a-button>
          <a-button type="primary">同意</a-button>
        </a-space>
      </div>
    </div>
  </div>
</template>

<script>
import RelationGraph from './RelationGraph'
import footerInfo from './footerInfo.vue'
import tableList from './tableList.vue'
import tableListOne from './tableListOne.vue'
import { Divider } from '@/components'
import { baseMixin } from '@/store/app-mixin'
import { getRoleList, getServiceList } from '@/api/manage'
import { message } from 'ant-design-vue'
export default {
  mixins: [baseMixin],
  components: { Divider, RelationGraph, tableList, footerInfo, tableListOne },
  data() {
    return {
      imgLogo: require('../../assets/logo.svg'),
      steps: [
        { time: '2022-10-13 15:42', img: '', name: '张雪龙 / 09867', message: '一级审批，同意' },
        { time: '2022-10-12 10:00', img: '', name: '陈文玉 / 160456', message: '干部部长审批，同意' },
        { time: '2022-10-11 12:42', img: '', name: '周文斌  / 110456', message: '提交审批' },
      ],
      bgInfo:
        '为打造更具竞争力产品，对标业界最先进实践，结合我司具体特点，落实流程变革成果，经研究开发部、各产品线、行业BG、商业BG、国际业务部、解决方案部、技术战略部、技术服务部、供应链管理部和信息技术部等批准，IPD 5.0即日发布。为打造更具竞争力产品，对标业界最先进实践，结合我司具体特点，落实流程变革成果，经研究开发部、各产品线、行业BG、商业BG、国际业务部、解决方案部、技术战略部、技术服务部、供应链管理部和信息技术部等批准，IPD 5.0即日发布。',
      zzjgInfo:
        '本次组织结构设置基于XX年X月X日“（信息门户-集团发文链接）“进行组织结构调整。本次部门调整合计：XX个（部门调整类型除“无”以外的类型合计）各级部门数量：其中二级部门XX个，三级部门XX个，三级部门XX个，四级部门XX个。变化类型数量：其中新增XX个，删除XX个，合并拆分XX个，隶属变更XX个，名称变更XX个。特殊审批：XXX',
      glgjInfo:
        '本次部门调整涉及岗位调整合计：XX个（报批为“是”）岗位层级：一级主管x个，二级主管x个，三级主管x个，四级主管x个。正副值：正职x个，副职x个，其中年轻化副职x个。实虚职：实职x个，虚职x个。轮岗：x个。公司级关键岗位x个。特殊审批：xxx。',
    }
  },
  methods: {},
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/es/style/themes/default.less';
.content {
  width: 100%;
  .footer-info {
    padding: 35px 52px;
    &-btns {
      display: flex;
      justify-content: flex-end;
    }
    &-topInfo {
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 4px;
      padding: 19px 16px 30px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
      margin-bottom: 31px;
    }
  }
  .glgj-steps {
    margin-left: 120px;
    /deep/.ant-steps-item-content {
      display: flex;
      width: 800px;
      overflow: visible;
      .ant-steps-item-title {
        width: 200px;
        display: flex;
        p {
          margin-left: 10px;
        }
      }
      .step-logo {
        width: 30px;
        height: 30px;
        display: inline-block;
        background: #ffffff;
        border: NaNpx solid #f0f0f0;
        border-radius: 50%;
      }
      .ant-steps-item-subtitle {
        position: absolute;
        left: -153px;
      }
    }
  }

  .glgj-head-btn {
    margin-right: 32px;
  }
  .glgj-head-checkbox {
    margin-left: 38px;
  }
  /deep/.wrapperClass {
    width: 200px;
    position: fixed;
    right: -39px;
    top: 84px;
    background: transparent;
  }
  .a-button {
    border: 1px solid @primary-color;
    border-radius: 4px;
  }
  .glgj {
    padding: 20px 52px;
    width: 100%;

    &-topInfo {
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 4px;
      padding: 19px 16px 30px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
      margin-bottom: 31px;
    }
  }
  .zzjg {
    padding: 20px 52px;
    width: 100%;
    &-btn {
      margin-top: 28px;
    }
    &-topInfo {
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 4px;
      padding: 19px 16px 30px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
    }
  }
  .bg {
    padding: 26px 52px;
    width: 100%;
    &-nums {
      display: flex;
      justify-content: space-around;
      width: 100%;
      background: rgba(255, 255, 255, 0.99);
      border: 1px solid #f0f0f0;
      border-radius: 4px;
      padding-top: 23px;
      padding-bottom: 20px;
      margin-top: 23px;
      /deep/ .ant-statistic-content {
        color: @primary-color;
        .ant-statistic-content-value {
          font-weight: 600;
        }
      }
    }
    &-topInfo {
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 4px;
      padding: 19px 16px 30px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
    }
  }
  background: #fff;
  .content-header {
    padding-top: 49px;
    padding-bottom: 50px;
    &-title {
      font-size: 36px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #333333;
      text-align: center;
    }
    &-tag {
      text-align: center;
      margin-top: 18px;
    }
  }
}
</style>
