module.exports = {
    title: '形式语言与自动机', // 网站标题
    description: '计算机世界中的语言', // 网站描述

    // 插入html头
    head: [
        ['link', { rel: 'icon', href: '/favicon.svg' }]
    ],

    // 插件
    plugins: [
        ['@maginapp/vuepress-plugin-katex', { // katex公式
          delimiters: 'dollars'
        }],

        ['vuepress-plugin-container', {
            type: 'definition',
            before: info => `<div class="definition"><p class="title">${info}</p>`,
            after: '</div>',
        }],

        ['vuepress-plugin-container', {
            type: 'theorem',
            before: info => `<div class="theorem"><p class="title">${info}</p>`,
            after: '</div>',
        }],

        ['vuepress-plugin-container', {
            type: 'lemma',
            before: info => `<div class="lemma"><p class="title">${info}</p>`,
            after: '</div>',
        }],

        ['vuepress-plugin-container', {
            type: 'conclusion',
            before: info => `<div class="conclusion"><p class="title">${info}</p>`,
            after: '</div>',
        }],

        ['vuepress-plugin-container', {
            type: 'observation',
            before: info => `<div class="observation"><p class="title">${info}</p>`,
            after: '</div>',
        }],

        ['@vuepress/back-to-top'],

        ['vuepress-plugin-mygitalk', {
            // 是否启用(关闭请设置为false)(default: true)
            enable: false,
            // 是否开启首页评论(default: true)
            home: false,
            // Gitalk配置
            gitalk: {
                // GitHub Application Client ID.
                clientID: '',
                // GitHub Application Client Secret.
                clientSecret: '',
                // GitHub repository. 存储评论的 repo
                repo: '',
                // GitHub repository 所有者，可以是个人或者组织。
                owner: 'JacyCui',
                // 设置语言(default: zh-CN)
                language: 'zh-CN',
            }
        }]
    ],
    
    markdown: { // markdown渲染设置
        lineNumbers: true
    },

    locales: {  // 网站语言设置
        '/': {
            lang: 'zh-CN'
            // title: 'VuePress',
            // description: 'Vue-powered Static Site Generator'
        }
    },

    themeConfig: { // 主题设置
        // 关于导航栏
        logo: '/favicon.svg', // 导航栏logo
        navbar: true, // 启用导航栏
        nav: [ // 导航栏内容设置
            {
                text: '目录',
                items: [
                    {text: '1 前置知识', link: '/01-preliminary/'},
                    {text: '2 有穷自动机', link: '/02-fa/'},
                    {text: '3 正则表达式', link: '/03-re/'},
                    {text: '4 上下文无关文法', link: '/04-cfg/'},
                    {text: '5 下推自动机', link: '/05-pda/'},
                    {text: '6 上下文无关语言', link: '/06-cfl/'},
                    {text: '7 图灵机', link: '/07-tm/'},
                    {text: '8 判定性与复杂度', link: '/08-pnp/'},
                    {text: '9 迁移系统', link: '/09-ts/'},
                    {text: '10 Petri网', link: '/10-pn/'},
                    {text: '11 时间自动机', link: '/11-ta/'}
                ]
            },
            { 
                text: '优化打印版PDF',
                items: [
                    { text: '有穷自动机与正则语言.pdf', link: 'https://fla.cuijiacai.com/有穷自动机与正则语言.pdf'},
                ]
            },
            { text: '个人主页', link: 'https://www.cuijiacai.com' },
        ],
        repo: 'JacyCui/fla', // 文档项目的github仓库

        // 关于侧边栏
        displayAllHeaders: false, // 显示所有页面的标题链接，否则只显示当前页面的
        activeHeaderLinks: false, // 活动的标题链接
        sidebarDepth: 3, // 
        sidebar: [
            // ['/demo', 'Explicit link text'], // 显示地指定文字
            '/preface/',
            '/01-preliminary/',
            '/02-fa/',
            '/03-re/',
            '/04-cfg/',
            '/05-pda/',
            '/06-cfl/',
            '/07-tm/',
            '/08-pnp/',
            '/09-ts/',
            '/10-pn/',
            '/11-ta/'
        ],

        // 关于页脚
        nextLinks: true, // 下一篇
        prevLinks: true, // 上一篇
        lastUpdated: '最后更新', // string | boolean 最后更新时间
        repoLabel: '查看源码',
        // docsRepo: 'vuejs/vuepress', // 文档仓库，默认为项目仓库
        docsDir: 'docs', // 文档目录
        docsBranch: 'main', // 文档分支
        editLinks: true,
        editLinkText: '帮助我改善此页面！',

        smoothScroll: true // 页面滚动 
    }
}

