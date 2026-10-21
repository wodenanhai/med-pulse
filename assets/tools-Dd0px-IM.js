import{a as e,i as t,r as n,t as r}from"./app-B3dZ4D2J.js";var i=JSON.parse(`{"path":"/tools/","title":"使用VuePress搭建在线文档网站","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1792553868000,"contributors":[{"name":"zhangcheng","username":"zhangcheng","email":"2778162192@qq.com","commits":1,"url":"https://github.com/zhangcheng"}],"changelog":[{"hash":"c21cffda6a24bee3bbaf62f2505ec4e159a62de6","time":1792553868000,"email":"2778162192@qq.com","author":"zhangcheng","message":"commit"}]},"filePathRelative":"tools/index.md"}`),a={name:`index.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="使用vuepress搭建在线文档网站" tabindex="-1"><a class="header-anchor" href="#使用vuepress搭建在线文档网站"><span>使用VuePress搭建在线文档网站</span></a></h1><h2 id="_1、在线文档" tabindex="-1"><a class="header-anchor" href="#_1、在线文档"><span>1、在线文档</span></a></h2><p><a href="https://vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">VuePress官方在线文档</a></p><h2 id="_2、搭建基本环境" tabindex="-1"><a class="header-anchor" href="#_2、搭建基本环境"><span>2、搭建基本环境</span></a></h2><h3 id="_2-1-使用vue脚手架创建一个vue项目" tabindex="-1"><a class="header-anchor" href="#_2-1-使用vue脚手架创建一个vue项目"><span>2.1.使用vue脚手架创建一个vue项目</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 全局下载 vue 脚手架包</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli</span>
<span class="line"><span class="token comment"># 创建 vue2 的项目</span></span>
<span class="line">vue create atguigu-utils_docs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-使用上vuepress" tabindex="-1"><a class="header-anchor" href="#_2-2-使用上vuepress"><span>2.2.使用上vuepress</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 下载 VuePress</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 新建一个文件: docs/README.md</span></span>
<span class="line"><span class="token comment"># Hello VuePress!</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动文档项目</span></span>
<span class="line">npx vuepress dev docs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、配置教程的文档" tabindex="-1"><a class="header-anchor" href="#_3、配置教程的文档"><span>3、配置教程的文档</span></a></h2><h3 id="_3-1-整体结构" tabindex="-1"><a class="header-anchor" href="#_3-1-整体结构"><span>3.1.整体结构</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">|-- docs</span>
<span class="line">  |-- .vuepress</span>
<span class="line">    |-- public</span>
<span class="line">      |-- favicon.ico</span>
<span class="line">      |-- logo.png</span>
<span class="line">      |-- utils.jpg</span>
<span class="line">    |-- config.js</span>
<span class="line">  |-- chapter1</span>
<span class="line">    |-- 01_创建工具包项目.md</span>
<span class="line">    |-- 02_发布到npm中央仓库.md</span>
<span class="line">    |-- 03_使用自定义工具包.md</span>
<span class="line">  |-- chapter2</span>
<span class="line">    |-- 01_函数相关</span>
<span class="line">    |-- 02_数组相关</span>
<span class="line">    |-- 03_对象相关</span>
<span class="line">    |-- 04_字符串相关</span>
<span class="line">    |-- 05_手写带委托的事件监听</span>
<span class="line">    |-- 06_手写ajax请求函数</span>
<span class="line">    |-- 07_手写事件总线</span>
<span class="line">    |-- 08_手写消息订阅与发布</span>
<span class="line">    |-- 09_手写Promise</span>
<span class="line">  |-- chapter3</span>
<span class="line">    |-- README.md</span>
<span class="line">  |-- README.md</span>
<span class="line">|-- package.json</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-docs-vuepress-config-js" tabindex="-1"><a class="header-anchor" href="#_3-2-docs-vuepress-config-js"><span>3.2.docs/.vuepress/config.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// 注意: base的值为github仓库的名称(/不能少)</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/atguigu_utils-docs/&#39;</span><span class="token punctuation">,</span> <span class="token comment">/* 基础虚拟路径 */</span></span>
<span class="line">  <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token string">&#39;docs/dist&#39;</span><span class="token punctuation">,</span> <span class="token comment">/* 打包文件基础路径, 在命令所在目录下 */</span></span>
<span class="line">  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;自定义工具函数库(系列一)&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 标题</span></span>
<span class="line">  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;尚硅谷前端研究院&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 标题下的描述</span></span>
<span class="line">  </span>
<span class="line">  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 主题配置</span></span>
<span class="line">    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/logo.png&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 头部导航</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;官网&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;http://www.atguigu.com&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;谷粒学院&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;http://www.gulixueyuan.com/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> </span>
<span class="line">        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;学习路线&#39;</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;前端&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;http://www.atguigu.com/web/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Java&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;http://www.atguigu.com/kecheng.shtml&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;大数据&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;http://www.atguigu.com/bigdata/&#39;</span> <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span> </span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 左侧导航</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;打包自定义工具库&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 标题</span></span>
<span class="line">        <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 下级列表不可折叠</span></span>
<span class="line">        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 下级列表</span></span>
<span class="line">          <span class="token string">&#39;chapter1/01_创建工具包项目&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&#39;chapter1/02_发布到npm中央仓库&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&#39;chapter1/03_使用自定义工具包&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;各种自定义&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token string">&#39;chapter2/01_函数相关&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&#39;chapter2/02_数组相关&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&#39;chapter2/03_对象相关&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&#39;chapter2/04_字符串相关&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&#39;chapter2/05_手写带委托的事件监听&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&#39;chapter2/06_手写ajax请求函数&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&#39;chapter2/07_手写事件总线&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&#39;chapter2/08_手写消息订阅与发布&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&#39;chapter2/09_手写Promise&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;快速搭建在线文档网站&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token string">&#39;chapter3/&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// sidebarDepth: 3 // 左侧导航的深度默认是2级</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 指定网页head图标</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;shortcut icon&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;image/x-icon&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/favicon.ico</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-docs-readme-md" tabindex="-1"><a class="header-anchor" href="#_3-3-docs-readme-md"><span>3.3.docs/README.md</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">---</span>
<span class="line">#首页</span>
<span class="line">home: true  </span>
<span class="line"># 图标</span>
<span class="line">heroImage: /utils.jpg</span>
<span class="line"># 按钮文本</span>
<span class="line">actionText: 开始学习 →</span>
<span class="line"># 按钮点击跳转路径</span>
<span class="line">actionLink: /chapter1/01_工具函数库说明</span>
<span class="line"></span>
<span class="line">features: </span>
<span class="line">- title: 技术提升</span>
<span class="line">  details: 通过自定义实现函数相关、数组相关、对象相关，字符串相关工具函数； 手写继承、DOM事件监听、ajax请求、事件总线、消息订阅-发布、Promise。极大提升对JS核心技术的理解和编码能力</span>
<span class="line">- title: 面试利器</span>
<span class="line">  details: 中大厂面试问得最多是什么？答：原生JS的理解和编码，咱们这套课程就是为此设计的。</span>
<span class="line">- title: 扩展能力</span>
<span class="line">  details: 如何创建自己的npm工具库？如何快速搭建在线技术或文档站点？我们给你最精简的答案。</span>
<span class="line">---</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-package-json" tabindex="-1"><a class="header-anchor" href="#_3-4-package-json"><span>3.4.package.json</span></a></h3><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;doc:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;doc:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;doc:deploy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gh-pages -d docs/dist&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、发布到github-pages" tabindex="-1"><a class="header-anchor" href="#_4、发布到github-pages"><span>4、发布到github pages</span></a></h2><p>1、使用git管理当前项目 2、将打包的文档推送到github pages</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 下载工具包</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> gh-pages</span>
<span class="line"><span class="token comment"># 执行打包命令</span></span>
<span class="line"><span class="token function">npm</span> run doc:build</span>
<span class="line"><span class="token comment"># 执行部署命令</span></span>
<span class="line"><span class="token function">npm</span> run doc:deploy</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};