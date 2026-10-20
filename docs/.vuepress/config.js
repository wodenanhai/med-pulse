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
                text: "工具库",
                link: '/tools/index'
            },
        ],
        sidebar: {
            '/tools/': [
                {
                    text: "文档搭建",
                    children: [
                        {
                            text: "VuePress 入门",
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
