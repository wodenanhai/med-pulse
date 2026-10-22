import{a as e,i as t,r as n,t as r}from"./app-ridRASSh.js";var i=JSON.parse(`{"path":"/med_pulse/Cypher.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1792646443000,"contributors":[{"name":"zhangcheng","username":"zhangcheng","email":"2778162192@qq.com","commits":1,"url":"https://github.com/zhangcheng"}],"changelog":[{"hash":"2ad724585778b4e985cb19f317420cbdae712719","time":1792646443000,"email":"2778162192@qq.com","author":"zhangcheng","message":"commit"}]},"filePathRelative":"med_pulse/Cypher.md"}`),a={name:`Cypher.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<div class="language-postgresql line-numbers-mode" data-highlighter="prismjs" data-ext="postgresql"><pre><code class="language-postgresql"><span class="line">-- MATCH &lt;你要找的图模式&gt;</span>
<span class="line">-- WHERE &lt;过滤条件&gt;</span>
<span class="line">-- RETURN &lt;返回什么&gt;</span>
<span class="line"></span>
<span class="line">MATCH (d:Disease {name:&quot;糖尿病&quot;}) RETURN d LIMIT 25</span>
<span class="line"></span>
<span class="line">MATCH (d:Disease) WHERE d.name=&quot;糖尿病&quot; RETURN d</span>
<span class="line"></span>
<span class="line"># 糖尿病有哪些症状？</span>
<span class="line">MATCH (d:Disease {name:&quot;糖尿病&quot;})-[:HAS_SYMPTOM]-&gt;(s:Symptom) RETURN s</span>
<span class="line"># 糖尿病有哪些常用药？</span>
<span class="line">MATCH (d:Disease {name:&quot;糖尿病&quot;})-[:COMMON_DRUG]-&gt;(drug:Drug) RETURN drug.name</span>
<span class="line"></span>
<span class="line">#反向查：二甲双胍用于治疗哪些疾病？</span>
<span class="line">MATCH (d:Disease)-[:COMMON_DRUG]-&gt;(drug:Drug {name:&quot;盐酸二甲双胍片&quot;}) RETURN d.name</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="两跳-有-多饮-症状的疾病-它们属于哪个科室" tabindex="-1"><a class="header-anchor" href="#两跳-有-多饮-症状的疾病-它们属于哪个科室"><span>两跳：有&quot;多饮&quot;症状的疾病，它们属于哪个科室？</span></a></h2><div class="language-postgresql line-numbers-mode" data-highlighter="prismjs" data-ext="postgresql"><pre><code class="language-postgresql"><span class="line">MATCH (s:Symptom {name:&quot;多饮&quot;})&lt;-[:HAS_SYMPTOM]-(d:Disease)-[:BELONGS_TO]-&gt;(de:Department) RETURN d.name,de.name</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="三跳-糖尿病的常用药-这些药还用于治疗哪些其他疾病" tabindex="-1"><a class="header-anchor" href="#三跳-糖尿病的常用药-这些药还用于治疗哪些其他疾病"><span>三跳：糖尿病的常用药，这些药还用于治疗哪些其他疾病？</span></a></h2><div class="language-postgresql line-numbers-mode" data-highlighter="prismjs" data-ext="postgresql"><pre><code class="language-postgresql"><span class="line">MATCH (d:Disease {name:&quot;糖尿病&quot;})</span>
<span class="line">-[:COMMON_DRUG]-&gt;(drug:Drug)</span>
<span class="line">&lt;-[:COMMON_DRUG]-(other:Disease)</span>
<span class="line">WHERE other.name &lt;&gt; &quot;糖尿病&quot;</span>
<span class="line">RETURN drug.name AS 药品,other.name AS 其他疾病</span>
<span class="line">LIMIT 20</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="聚合统计" tabindex="-1"><a class="header-anchor" href="#聚合统计"><span>聚合统计</span></a></h2><p>哪个科室的疾病最多？</p><div class="language-postgresql line-numbers-mode" data-highlighter="prismjs" data-ext="postgresql"><pre><code class="language-postgresql"><span class="line">MATCH (d:Disease)-[:BELONGS_TO]-&gt;(dep:Department)</span>
<span class="line">RETURN dep.name AS 科室,count(d) AS 疾病数量</span>
<span class="line">ORDER BY 疾病数量 DESC </span>
<span class="line">LIMIT 10</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>症状最多的10种疾病</p><div class="language-postgresql line-numbers-mode" data-highlighter="prismjs" data-ext="postgresql"><pre><code class="language-postgresql"><span class="line">MATCH (d:Disease)-[:HAS_SYMPTOM]-&gt;(s:Symptom)</span>
<span class="line">RETURN d.name AS 疾病,count(s) AS 症状数量</span>
<span class="line">ORDER BY 症状数量 DESC</span>
<span class="line">LIMIT 10</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路径查询" tabindex="-1"><a class="header-anchor" href="#路径查询"><span>路径查询</span></a></h2><p>找糖尿病和高血压之间的最短路径</p><div class="language-postgresql line-numbers-mode" data-highlighter="prismjs" data-ext="postgresql"><pre><code class="language-postgresql"><span class="line">MATCH path=shortestPath(</span>
<span class="line">(a:Disease {name:&quot;糖尿病&quot;})-[*]-(b:Disease {name:&quot;高血压&quot;})</span>
<span class="line">)</span>
<span class="line">RETURN path</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找出所有长度&lt;=3的路径</p><div class="language-postgresql line-numbers-mode" data-highlighter="prismjs" data-ext="postgresql"><pre><code class="language-postgresql"><span class="line">MATCH path = (a:Disease {name:&quot;糖尿病&quot;})-[*1..3]-(b)</span>
<span class="line">RETURN path</span>
<span class="line">LIMIT 20</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写入操作" tabindex="-1"><a class="header-anchor" href="#写入操作"><span>写入操作</span></a></h2><div class="language-postgresql line-numbers-mode" data-highlighter="prismjs" data-ext="postgresql"><pre><code class="language-postgresql"><span class="line">#创建节点</span>
<span class="line">CREATE (d:Disease {name:&quot;测试疾病&quot;,description:&quot;这是一个测试疾病&quot;})</span>
<span class="line"></span>
<span class="line">#幂等创建，存在则跳过，不存在则创建（推荐）</span>
<span class="line">MERGE (d:Disease {name:&quot;糖尿病222&quot;})</span>
<span class="line"></span>
<span class="line">#创建关系</span>
<span class="line">MATCH (d:Disease {name:&quot;糖尿病&quot;}),(dep:Department {name:&quot;内分泌科&quot;})</span>
<span class="line">MERGE (d)-[:BELONGS_TO]-&gt;(dep)</span>
<span class="line"></span>
<span class="line">#更新属性</span>
<span class="line">MATCH (d:Disease {name:&quot;糖尿病&quot;})</span>
<span class="line">SET d.description=&quot;更新后的描述&quot;</span>
<span class="line"></span>
<span class="line">#删除节点（必须先删除关系）</span>
<span class="line">MATCH (d:Disease {name:&quot;测试疾病&quot;})</span>
<span class="line">DETACH DELETE d        --DETACH 会自动删除该节点的所有关系</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="大批量分批删除" tabindex="-1"><a class="header-anchor" href="#大批量分批删除"><span>大批量分批删除</span></a></h2><div class="language-postgresql line-numbers-mode" data-highlighter="prismjs" data-ext="postgresql"><pre><code class="language-postgresql"><span class="line">MATCH (n) WITH n LIMIT 5000 DETACH DELETE n</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><div class="language-postgresql line-numbers-mode" data-highlighter="prismjs" data-ext="postgresql"><pre><code class="language-postgresql"><span class="line">from neo4j import GraphDatabase</span>
<span class="line">driver = GraphDatabase.driver(&quot;bolt://localhost:7687&quot;, auth=(&quot;neo4j&quot;, &quot;medical123&quot;))</span>
<span class="line"></span>
<span class="line">driver.verify_connectivity()</span>
<span class="line">print(&quot;连接成功&quot;)</span>
<span class="line"></span>
<span class="line">driver.close()</span>
<span class="line">print(&quot;连接已关闭&quot;)</span>
<span class="line"></span>
<span class="line">def get_disease_symptoms(driver,disease_name:str)-&gt;list[str]:</span>
<span class="line">    with driver.session() as session:</span>
<span class="line">        result = session.run(</span>
<span class="line">            &quot;&quot;&quot;</span>
<span class="line">            MATCH (disease:Disease {name: $name})-[:HAS_SYMPTOM]-&gt;(s:Symptom)</span>
<span class="line">            RETURN s.name AS symptom</span>
<span class="line">            &quot;&quot;&quot;,</span>
<span class="line">            name=disease_name</span>
<span class="line">        )</span>
<span class="line">        return [record[&quot;symptom&quot;] for record in result]</span>
<span class="line"></span>
<span class="line">symptoms = get_disease_symptoms(driver,&quot;糖尿病&quot;)</span>
<span class="line">print(symptoms)</span>
<span class="line"></span>
<span class="line">def add_disease(driver,name:str,description:str):</span>
<span class="line">    &quot;&quot;&quot;新增一个疾病节点&quot;&quot;&quot;</span>
<span class="line">    with driver.session() as session:</span>
<span class="line">        session.run(</span>
<span class="line">            &quot;&quot;&quot;</span>
<span class="line">            MERGE (d:Disease {name: $name})</span>
<span class="line">            SET d.description = $description</span>
<span class="line">            &quot;&quot;&quot;,</span>
<span class="line">            name=name,</span>
<span class="line">            description=description</span>
<span class="line">        )</span>
<span class="line">add_disease(driver,&quot;糖尿病&quot;,&quot;一种长期的慢性疾病，由身体内糖分的代谢异常导致。&quot;)</span>
<span class="line"></span>
<span class="line">def batch_create_symptoms(driver,symptom_names:list[str]):</span>
<span class="line">    &quot;&quot;&quot;批量创建症状节点&quot;&quot;&quot;</span>
<span class="line">    def _create(tx,names):</span>
<span class="line">        # UNWIND 把列表展开，每个元素执行一次MERGE</span>
<span class="line">        tx.run(</span>
<span class="line">            &quot;UNWIND $names AS name MERGE (s:Symptom {name: name})&quot;,</span>
<span class="line">            names=names</span>
<span class="line">        )</span>
<span class="line">    with driver.session() as session:</span>
<span class="line">        # execute_write 自动处理事务提交和回滚</span>
<span class="line">        session.execute_write(_create,symptom_names)</span>
<span class="line">batch_create_symptoms(driver,[&quot;头痛&quot;,&quot;头痛&quot;,&quot;头痛&quot;])</span>
<span class="line"></span>
<span class="line">with driver.session() as session:</span>
<span class="line">    result = session.run(</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        MATCH (d:Disease {name:$name})-[r]-&gt;(n)</span>
<span class="line">        RETURN type(r) AS rel_type,n.name AS target,labels(n)[0] AS target_label</span>
<span class="line">        &quot;&quot;&quot;,</span>
<span class="line">        name=&quot;糖尿病&quot;</span>
<span class="line">    )</span>
<span class="line">    for record in result:</span>
<span class="line">        # 通过键名访问</span>
<span class="line">        print(record[&quot;rel_type&quot;],&quot;-&gt;&quot;,record[&quot;target&quot;])</span>
<span class="line">        # 转成字典</span>
<span class="line">        row = record.data()</span>
<span class="line">        print(row)</span>
<span class="line">    </span>
<span class="line">    #一次性取出所有结果</span>
<span class="line">    all_records = result.data()</span>
<span class="line">    </span>
<span class="line">#分批删除</span>
<span class="line">with driver.session() as session:</span>
<span class="line">    while True:</span>
<span class="line">        result = session.run(</span>
<span class="line">            &quot;MATCH (n) WITH n LIMIT 5000 DETACH DELETE n RETURN count(*) AS deleted&quot;</span>
<span class="line">        )</span>
<span class="line">        if result.single()[&quot;deleted&quot;] == 0:</span>
<span class="line">            break</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目用法" tabindex="-1"><a class="header-anchor" href="#项目用法"><span>项目用法</span></a></h2><ul><li>固定业务：提前写好Cypher</li><li>动态业务（大模型写）：NL2SQL NL2Cypher</li></ul>`,23)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};