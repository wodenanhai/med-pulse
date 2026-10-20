export const themeData = JSON.parse("{\"logo\":\"/images/house.png\",\"editLink\":false,\"lastUpdated\":true,\"contributors\":false,\"colorModeSwitch\":true,\"colorMode\":\"auto\",\"navbar\":[{\"text\":\"工具库\",\"link\":\"/tools/index\"}],\"sidebar\":{\"/tools/\":[{\"text\":\"文档搭建\",\"children\":[{\"text\":\"VuePress 入门\",\"link\":\"index.md\"}]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
