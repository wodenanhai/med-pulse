节点类型（7类）：疾病、症状、药品、科室、检查、食物、生产商

关系类型（11类）：

| 关系               | 含义                                                                                      |
|------------------|-----------------------------------------------------------------------------------------|
| HAS_SYMPTOM      | 疾病→症状                                                                                   |
| BELONGS_TO       | 疾病→科室                                                                                   |
| COMMON_DRUG      | 疾病→常用药                                                                                  |
| RECOMMEND_DRUG   | 疾病→推荐药                                                                                  |
| NEED_CHECK       | 疾病→检查项目                                                                                 |
| DO_EAT           | 疾病→宜吃食物                                                                                 |
| NO_EAT           | 疾病→忌吃食物                                                                                 |
| ACOMPANY_WITH    | 疾病→并发症（疾病）                                                                              |
| DRUG_INTERACTION | 药品→药品（交互冲突） ⚠️ medical.json 无此字段，可接入 https://www.nmpa.gov.cn/datasearch/home-index.html |
| SAME_CLASS       | 药品→同类药品 ⚠️ medical.json 无此字段，待补充                                                        |
| PRODUCED_BY      | 药品→生产商 ⚠️ medical.json 无此字段，待补充                                                         |

## 关系型数据库vs图数据库

| 对比纬度 | PostgreSQL(关系型) | Neo4j(图数据库) |
|------|-----------------|-------------|
| 数据模型 | 表+行+外键          | 节点+关系+属性    |
| 多跳查询 | JOIN嵌套，性能差      | 原生支持，性能好    |
| 适合场景 | 结构化统计，事务        | 关系推理、路径查找   |
| 查询语言 | SQL             | Cypher      |

## 根据症状查候选疾病
``` python
// 输入: 已确认症状列表
// 输出: 候选疾病 + 命中症状数 + 该疾病总症状数
MATCH (d:Disease)-[:HAS_SYMPTOM]->(s:Symptom)
WHERE s.name IN $confirmed_symptoms
WITH d, count(s) AS matched_count
MATCH (d)-[:HAS_SYMPTOM]->(all_s:Symptom)
WITH d, matched_count, count(all_s) AS total_symptoms
ORDER BY toFloat(matched_count) / total_symptoms DESC
LIMIT 10
RETURN d.name AS disease,
       matched_count,
       total_symptoms,
       toFloat(matched_count) / total_symptoms AS confidence
```
## 获取候选疾病的完整症状
``` python
// 输入: 候选疾病名称列表
// 输出: 这些疾病的所有症状（去掉已确认/已否认的）
MATCH (d:Disease)-[:HAS_SYMPTOM]->(s:Symptom)
WHERE d.name IN $candidate_diseases
  AND NOT s.name IN $confirmed_symptoms
  AND NOT s.name IN $denied_symptoms
RETURN s.name AS symptom, count(d) AS disease_count
ORDER BY disease_count DESC  // 区分度低的（多病共有）排后
```

## 获取并发症
``` python
MATCH (d:Disease)-[:ACOMPANY_WITH]->(comp:Disease)
WHERE d.name IN $candidate_diseases
RETURN d.name AS disease, comp.name AS complication
```
## 获取建议科室和检查项目
``` python
MATCH (d:Disease)-[:BELONGS_TO]->(dept:Department)
WHERE d.name = $primary_disease
RETURN dept.name AS department

MATCH (d:Disease)-[:NEED_CHECK]->(c:Check)
WHERE d.name = $primary_disease
RETURN c.name AS check_item
```
