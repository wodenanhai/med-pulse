export const themeData = JSON.parse("{\"logo\":\"/images/house.png\",\"editLink\":false,\"lastUpdated\":true,\"contributors\":false,\"colorModeSwitch\":true,\"colorMode\":\"auto\",\"navbar\":[{\"text\":\"项目\",\"link\":\"/med_pulse/index\"},{\"text\":\"工具库\",\"link\":\"/tools/index\"}],\"sidebar\":{\"/med_pulse/\":[{\"text\":\"知脉\",\"children\":[{\"text\":\"一、项目简介\",\"link\":\"index.md\"},{\"text\":\"二、项目初始化\",\"link\":\"init.md\"},{\"text\":\"三、Conda隔离环境\",\"link\":\"conda.md\"},{\"text\":\"四、Docker部署服务\",\"link\":\"docker.md\"},{\"text\":\"五、数据库\",\"link\":\"db.md\"},{\"text\":\"六、数据集\",\"link\":\"data.md\"},{\"text\":\"七、PostgreSQL表结构\",\"link\":\"PostgreSQL.md\"},{\"text\":\"八、Neo4j\",\"link\":\"Neo4j.md\"}]}],\"/tools/\":[{\"text\":\"文档搭建\",\"children\":[{\"text\":\"VuePress 教程\",\"link\":\"index.md\"}]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
