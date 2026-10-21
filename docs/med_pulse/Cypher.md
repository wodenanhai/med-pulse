``` postgresql
-- MATCH <你要找的图模式>
-- WHERE <过滤条件>
-- RETURN <返回什么>

MATCH (d:Disease {name:"糖尿病"}) RETURN d LIMIT 25

MATCH (d:Disease) WHERE d.name="糖尿病" RETURN d

# 糖尿病有哪些症状？
MATCH (d:Disease {name:"糖尿病"})-[:HAS_SYMPTOM]->(s:Symptom) RETURN s
# 糖尿病有哪些常用药？
MATCH (d:Disease {name:"糖尿病"})-[:COMMON_DRUG]->(drug:Drug) RETURN drug.name

#反向查：二甲双胍用于治疗哪些疾病？
MATCH (d:Disease)-[:COMMON_DRUG]->(drug:Drug {name:"盐酸二甲双胍片"}) RETURN d.name
```
## 两跳：有"多饮"症状的疾病，它们属于哪个科室？
``` postgresql
MATCH (s:Symptom {name:"多饮"})<-[:HAS_SYMPTOM]-(d:Disease)-[:BELONGS_TO]->(de:Department) RETURN d.name,de.name
```

## 三跳：糖尿病的常用药，这些药还用于治疗哪些其他疾病？
``` postgresql
MATCH (d:Disease {name:"糖尿病"})
-[:COMMON_DRUG]->(drug:Drug)
<-[:COMMON_DRUG]-(other:Disease)
WHERE other.name <> "糖尿病"
RETURN drug.name AS 药品,other.name AS 其他疾病
LIMIT 20
```
## 聚合统计
哪个科室的疾病最多？
``` postgresql
MATCH (d:Disease)-[:BELONGS_TO]->(dep:Department)
RETURN dep.name AS 科室,count(d) AS 疾病数量
ORDER BY 疾病数量 DESC 
LIMIT 10
```
症状最多的10种疾病
``` postgresql
MATCH (d:Disease)-[:HAS_SYMPTOM]->(s:Symptom)
RETURN d.name AS 疾病,count(s) AS 症状数量
ORDER BY 症状数量 DESC
LIMIT 10
```
## 路径查询
找糖尿病和高血压之间的最短路径
``` postgresql
MATCH path=shortestPath(
(a:Disease {name:"糖尿病"})-[*]-(b:Disease {name:"高血压"})
)
RETURN path
```
找出所有长度<=3的路径
``` postgresql
MATCH path = (a:Disease {name:"糖尿病"})-[*1..3]-(b)
RETURN path
LIMIT 20
```
