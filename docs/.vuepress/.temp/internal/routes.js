export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/zhangcheng/Desktop/med-pulse/docs/README.md"), meta: {"title":"MedPulse"} }],
  ["/javams/1.html", { loader: () => import(/* webpackChunkName: "javams_1.html" */"/Users/zhangcheng/Desktop/med-pulse/docs/javams/1.md"), meta: {"title":""} }],
  ["/tools/", { loader: () => import(/* webpackChunkName: "tools_index.html" */"/Users/zhangcheng/Desktop/med-pulse/docs/tools/index.md"), meta: {"title":"使用VuePress搭建在线文档网站"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/zhangcheng/Desktop/med-pulse/docs/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateRoutes?.(routes)
  __VUE_HMR_RUNTIME__.updateRedirects?.(redirects)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateRoutes?.(m.routes)
    __VUE_HMR_RUNTIME__.updateRedirects?.(m.redirects)
  })
}
