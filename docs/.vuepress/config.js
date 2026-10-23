import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'

export default defineUserConfig({
    base: "/med-pulse/",
    bundler: viteBundler(),
    theme: defaultTheme({
        logo: '/images/house.png',
        editLink: false,
        lastUpdated: true,
        contributors: false,
        colorModeSwitch: true,
        colorMode: 'auto',
        navbar: [
            {
                text: "项目",
                link: '/med_pulse/index'
            },
            {
                text: "工具库",
                link: '/tools/index'
            },
        ],
        sidebar: {
            '/med_pulse/': [
                {
                    text: "知脉",
                    children: [
                        {
                            text: "一、项目简介",
                            link: "index.md"
                        },
                        {
                            text: "二、项目初始化",
                            link: "init.md"
                        },
                        {
                            text: "三、Conda隔离环境",
                            link: "conda.md"
                        },
                        {
                            text: "四、Docker部署服务",
                            link: "docker.md"
                        },
                        {
                            text: "五、数据库",
                            link: "db.md"
                        },
                        {
                            text:"六、数据集",
                            link:"data.md"
                        },{
                            text:"七、PostgreSQL表结构",
                            link:"PostgreSQL.md"
                        },{
                            text:"八、Neo4j",
                            link:"Neo4j.md"
                        },{
                            text:"九、Cypher查询",
                            link:"Cypher.md"
                        },{
                            text:"十、短期记忆",
                            link:"checkpointer.md"
                        },{
                            text:"十一、状态机",
                            link:"state.md"
                        }
                    ]
                }
            ],
            '/tools/': [
                {
                    text: "文档搭建",
                    children: [
                        {
                            text: "VuePress 教程",
                            link: "index.md"
                        },
                    ]
                }
            ],
        },
    }),
    lang: "zh-CN",
    title: '知脉医疗',
    description: "面向前端成长的面试知识库、工具沉淀与 Node 实战指南",
    head: [['link', {rel: 'icon', href: '/med-pulse/images/house.png'}]],
})
