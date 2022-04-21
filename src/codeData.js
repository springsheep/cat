/*
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-20 16:32:07
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-04-20 16:32:07
 */
/*
 * @Author: 张鹏
 * @Date: 2021-06-08 22:14:44
 * @LastEditTime: 2021-06-25 22:29:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qrcm/public/codeDate.js
 */
window.CodeDate = {
  demo: [
    {
      key: 1,
      value: 2,
    },
  ],
  //优先级
  priorityList: [
    { key: "低", value: 1 },
    { key: "中", value: 2 },
    { key: "高", value: 3 },
  ],
  //长期措施是够有效
  longTermIsValidList: [
    { key: "是", value: 1 },
    { key: "否", value: 2 },
  ],
  //shortTermIsValid
  shortTermIsValidList: [
    { key: "是", value: 1 },
    { key: "否", value: 2 },
  ],
  //oilstatues
  oilStatusList: [
    { key: "未分配", value: 1 },
    { key: "待处理", value: 2 },
    { key: "处理中", value: 3 },
    { key: "已关闭", value: 4 },
    { key: "已逾期", value: 5 },
  ],
  //cardstatues
  cardStatusList: [
    { key: "待处理", value: 1 },
    { key: "处理中", value: 2 },
    { key: "待审核", value: 3 },
    { key: "已关闭", value: 4 },
    { key: "驳回待处理", value: 5 },
  ],
  //永久性纠正措施修改接口-----永久纠正性措施验证结果
  verifyResultList: [
    { key: "有效", value: 1 },
    { key: "无效", value: 2 },
  ],
  approvalResultList: [
    { key: "同意关闭", value: 1 },
    { key: "驳回再修改", value: 2 },
  ],
  //8d报告步骤里面的状态
  reportStepStatusList: [
    { key: "未处理", value: 1 },
    { key: "处理中", value: 2 },
    { key: "待确认", value: 3 },
    { key: "已关闭", value: 4 },
  ],
  //8D状态
  reportStatusList: [
    { key: "待处理", value: 1 },
    { key: "处理中", value: 2 },
    { key: "待审核", value: 3 },
    { key: "审核通过", value: 4 },
    { key: "驳回待处理", value: 5 },
  ],

  //不需要文件
  isNeedFileList: [
    { key: "是", value: 1 },
    { key: "否", value: 2 },
  ],
};
