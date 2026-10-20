---
title: MedPulse
home: true
heroImage: /images/med-pulse.png
heroImageDark: /images/house.png
heroText: MedPulse · 知脉医疗
tagline: 多智能体医疗引擎：记忆、识图、检索、图谱推理、数据查询一体化调度

actions:
- text: 即刻体验 · 问诊助手
  link: /vue2/index
  type: primary
- text: 技能工作台
  link: /tools/index
  type: secondary
- text: 文献与知识库
  link: /node/index
  type: secondary

features:
- title: 🧭 多轮对话 & 短期记忆
  details: 连贯医患对话上下文，理解递进式问诊，保持会话内信息连贯，自然跟随问诊流程。
- title: 🧪 VLM 视觉语言模型
  details: 检验报告、影像图片、化验单图文理解，支持图片上传识别、内容提取与初步解读。
- title: 🚀 RAG 医学知识库检索
  details: 对接权威医学文献、药品说明书、诊疗规范，检索溯源，回答有据可依。
- title: ⚙️ 知识图谱 + 图推理
  details: 疾病、症状、药物、检验指标关联推理，挖掘医学实体之间的关联关系。
- title: 🎯 NL2SQL 自然语言查数据
  details: 用自然语言查询业务数据库，运营、病案、患者统计数据一键生成查询结果。
- title: ✨ 向量库长期记忆
  details: 依托向量数据库持久化存储健康档案、历史问诊记录，跨会话召回长期健康信息。

footer: Built with VuePress · Keep shipping, keep learning.
---

## 推荐使用路径
> 「会话问诊、识图解读、知识检索、图谱推理、数据查询，构建完整医疗Agent链路」
::: tip 五步智能闭环
依靠短期记忆维持问诊对话，VLM解析图文报告，RAG检索权威资料，知识图谱做关联推理，向量库沉淀长期健康记录，NL2SQL支撑数据统计分析。
:::
1. **问诊交互阶段**：开启多轮对话，依托短期记忆持续问诊，收集症状、病史基础信息。
2. **图文解析阶段**：上传化验单、影像截图，由VLM视觉模型识别提取关键指标。
3. **资料溯源阶段**：通过RAG检索医学知识库与文献，给出循证参考信息。
4. **关联推理阶段**：调用医学知识图谱，完成症状、疾病、用药之间的关联推理校验。
5. **数据沉淀&查询阶段**：问诊记录存入向量数据库形成长期记忆；管理人员通过自然语言NL2SQL查询统计数据。

## 内容分区（智能体模式）
### 🧭 01｜问诊舱：多轮对话与视觉解读
> 适合：患者问诊、报告图片识别、化验单解读
**立即进入：** [多轮对话Demo](/MedPulse/vue2/) / [VLM图文识别](/MedPulse/vue3/) / [RAG知识库检索](/MedPulse/webpack/)

### 🧪 02｜推理舱：图谱与Skill工作台
> 适合：知识图谱调试、Agent工具编排、药品交互校验
**立即进入：** [Agent技能管理](/MedPulse/tools/)

### 🚀 03｜存储舱：向量长期记忆航线
> 适合：向量库配置、历史病历召回、记忆策略调试
**立即进入：** [医学知识库](/MedPulse/node/)

### ⚡ 04｜数据舱：NL2SQL 数据查询
> 适合：医院运营、病案统计、患者画像、自然语言查库
**立即进入：** [NL2SQL数据查询](/MedPulse/tips/)

## 本周体验挑战
- Day 1-2：体验多轮问诊，测试短期记忆，验证对话上下文能否连贯理解追问
- Day 3：上传检验图片，测试VLM视觉模型识别、提取报告指标能力
- Day 4-5：体验RAG检索 + 知识图谱推理，验证医学知识关联与溯源效果
- Day 6-7：测试长期记忆召回与NL2SQL，跨会话调取历史记录，自然语言查询统计数据
