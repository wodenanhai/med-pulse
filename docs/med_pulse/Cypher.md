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
## 写入操作
``` postgresql
#创建节点
CREATE (d:Disease {name:"测试疾病",description:"这是一个测试疾病"})

#幂等创建，存在则跳过，不存在则创建（推荐）
MERGE (d:Disease {name:"糖尿病222"})

#创建关系
MATCH (d:Disease {name:"糖尿病"}),(dep:Department {name:"内分泌科"})
MERGE (d)-[:BELONGS_TO]->(dep)

#更新属性
MATCH (d:Disease {name:"糖尿病"})
SET d.description="更新后的描述"

#删除节点（必须先删除关系）
MATCH (d:Disease {name:"测试疾病"})
DETACH DELETE d        --DETACH 会自动删除该节点的所有关系
```
## 大批量分批删除
``` postgresql
MATCH (n) WITH n LIMIT 5000 DETACH DELETE n
```

## 操作
``` postgresql
from neo4j import GraphDatabase
driver = GraphDatabase.driver("bolt://localhost:7687", auth=("neo4j", "medical123"))

driver.verify_connectivity()
print("连接成功")

driver.close()
print("连接已关闭")

def get_disease_symptoms(driver,disease_name:str)->list[str]:
    with driver.session() as session:
        result = session.run(
            """
            MATCH (disease:Disease {name: $name})-[:HAS_SYMPTOM]->(s:Symptom)
            RETURN s.name AS symptom
            """,
            name=disease_name
        )
        return [record["symptom"] for record in result]

symptoms = get_disease_symptoms(driver,"糖尿病")
print(symptoms)

def add_disease(driver,name:str,description:str):
    """新增一个疾病节点"""
    with driver.session() as session:
        session.run(
            """
            MERGE (d:Disease {name: $name})
            SET d.description = $description
            """,
            name=name,
            description=description
        )
add_disease(driver,"糖尿病","一种长期的慢性疾病，由身体内糖分的代谢异常导致。")

def batch_create_symptoms(driver,symptom_names:list[str]):
    """批量创建症状节点"""
    def _create(tx,names):
        # UNWIND 把列表展开，每个元素执行一次MERGE
        tx.run(
            "UNWIND $names AS name MERGE (s:Symptom {name: name})",
            names=names
        )
    with driver.session() as session:
        # execute_write 自动处理事务提交和回滚
        session.execute_write(_create,symptom_names)
batch_create_symptoms(driver,["头痛","头痛","头痛"])

with driver.session() as session:
    result = session.run(
        """
        MATCH (d:Disease {name:$name})-[r]->(n)
        RETURN type(r) AS rel_type,n.name AS target,labels(n)[0] AS target_label
        """,
        name="糖尿病"
    )
    for record in result:
        # 通过键名访问
        print(record["rel_type"],"->",record["target"])
        # 转成字典
        row = record.data()
        print(row)
    
    #一次性取出所有结果
    all_records = result.data()
    
#分批删除
with driver.session() as session:
    while True:
        result = session.run(
            "MATCH (n) WITH n LIMIT 5000 DETACH DELETE n RETURN count(*) AS deleted"
        )
        if result.single()["deleted"] == 0:
            break
```
## 项目用法
+ 固定业务：提前写好Cypher
+ 动态业务（大模型写）：NL2SQL  NL2Cypher
