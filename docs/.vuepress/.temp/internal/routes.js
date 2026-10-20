export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/zhangcheng/Desktop/med-pulse/docs/README.md"), meta: {"title":"MedPulse"} }],
  ["/tools/", { loader: () => import(/* webpackChunkName: "tools_index.html" */"/Users/zhangcheng/Desktop/med-pulse/docs/tools/index.md"), meta: {"title":"使用VuePress搭建在线文档网站"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/zhangcheng/Desktop/med-pulse/docs/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
]);
