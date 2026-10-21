import{a as e,i as t,r as n,t as r}from"./app-DZqFtmdB.js";var i=JSON.parse(`{"path":"/med_pulse/Cypher.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1792597189000,"contributors":[{"name":"zhangcheng","username":"zhangcheng","email":"2778162192@qq.com","commits":1,"url":"https://github.com/zhangcheng"}],"changelog":[{"hash":"b8635ee33768bed81846e3de7a2a4019284c7b82","time":1792597189000,"email":"2778162192@qq.com","author":"zhangcheng","message":"commit"}]},"filePathRelative":"med_pulse/Cypher.md"}`),a={name:`Cypher.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<div class="language-postgresql line-numbers-mode" data-highlighter="prismjs" data-ext="postgresql"><pre><code class="language-postgresql"><span class="line">-- MATCH &lt;你要找的图模式&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};