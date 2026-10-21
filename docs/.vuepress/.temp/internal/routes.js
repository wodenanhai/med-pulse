export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/zhangcheng/Desktop/med-pulse/docs/README.md"), meta: {"title":"MedPulse"} }],
  ["/tools/", { loader: () => import(/* webpackChunkName: "tools_index.html" */"/Users/zhangcheng/Desktop/med-pulse/docs/tools/index.md"), meta: {"title":"使用VuePress搭建在线文档网站"} }],
  ["/med_pulse/PostgreSQL.html", { loader: () => import(/* webpackChunkName: "med_pulse_PostgreSQL.html" */"/Users/zhangcheng/Desktop/med-pulse/docs/med_pulse/PostgreSQL.md"), meta: {"title":""} }],
  ["/med_pulse/conda.html", { loader: () => import(/* webpackChunkName: "med_pulse_conda.html" */"/Users/zhangcheng/Desktop/med-pulse/docs/med_pulse/conda.md"), meta: {"title":"Conda 从安装到实战使用"} }],
  ["/med_pulse/data.html", { loader: () => import(/* webpackChunkName: "med_pulse_data.html" */"/Users/zhangcheng/Desktop/med-pulse/docs/med_pulse/data.md"), meta: {"title":""} }],
  ["/med_pulse/db.html", { loader: () => import(/* webpackChunkName: "med_pulse_db.html" */"/Users/zhangcheng/Desktop/med-pulse/docs/med_pulse/db.md"), meta: {"title":""} }],
  ["/med_pulse/docker.html", { loader: () => import(/* webpackChunkName: "med_pulse_docker.html" */"/Users/zhangcheng/Desktop/med-pulse/docs/med_pulse/docker.md"), meta: {"title":""} }],
  ["/med_pulse/", { loader: () => import(/* webpackChunkName: "med_pulse_index.html" */"/Users/zhangcheng/Desktop/med-pulse/docs/med_pulse/index.md"), meta: {"title":""} }],
  ["/med_pulse/init.html", { loader: () => import(/* webpackChunkName: "med_pulse_init.html" */"/Users/zhangcheng/Desktop/med-pulse/docs/med_pulse/init.md"), meta: {"title":""} }],
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
