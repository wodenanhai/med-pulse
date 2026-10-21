## 初始化PostgreSQL表结构

将SQLAlchemy Model定义在src/modules/medical/model.py，八张表

| 表名               | 说明                  |
|------------------|---------------------|
| departments      | 科室                  |
| diseases         | 疾病百科                |
| symptoms         | 症状实体                |
| disease_symptoms | 疾病-症状关联（多对多）        |
| drugs            | 药品基本信息              |
| drug_details     | 药品详情（适应症、用法、禁忌等长文本） |
| disease_drugs    | 疾病-药品关联（多对多）        |
| patients         | 患者档案                |
| consultations    | 问诊记录                |
