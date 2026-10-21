export const siteData = JSON.parse("{\"base\":\"/med-pulse/\",\"lang\":\"zh-CN\",\"title\":\"知脉医疗\",\"description\":\"面向前端成长的面试知识库、工具沉淀与 Node 实战指南\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/med-pulse/images/house.png\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"知脉医疗\",\"description\":\"面向前端成长的面试知识库、工具沉淀与 Node 实战指南\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateSiteData?.(siteData)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateSiteData?.(m.siteData)
  })
}
