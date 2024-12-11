import { defaultTheme } from "@vuepress/theme-default";

export default defaultTheme({
  // 主题设置
  // 关于导航栏
  logo: "/favicon.svg", // 导航栏logo
  navbar: [
    // 导航栏内容设置
    {
      text: "目录",
      children: [
        { text: "1 前置知识", link: "/01-preliminary/" },
        { text: "2 有穷自动机", link: "/02-fa/" },
        { text: "3 正则表达式", link: "/03-re/" },
        { text: "4 上下文无关文法", link: "/04-cfg/" },
        { text: "5 下推自动机", link: "/05-pda/" },
        { text: "6 上下文无关语言", link: "/06-cfl/" },
        { text: "7 图灵机", link: "/07-tm/" },
        { text: "8 判定性与复杂度", link: "/08-pnp/" },
        { text: "9 迁移系统", link: "/09-ts/" },
        { text: "10 Petri网", link: "/10-pn/" },
        { text: "11 时间自动机", link: "/11-ta/" },
      ],
    },
    {
      text: "优化打印版PDF",
      children: [
        {
          text: "有穷自动机与正则语言.pdf",
          link: "https://fla.cuijiacai.com/有穷自动机与正则语言.pdf",
        },
      ],
    },
    { text: "个人主页", link: "https://www.cuijiacai.com" },
  ],
  repo: "JacyCui/fla", // 文档项目的github仓库

  // 关于侧边栏
  // displayAllHeaders: false, // 显示所有页面的标题链接，否则只显示当前页面的
  // activeHeaderLinks: false, // 活动的标题链接
  sidebarDepth: 3, //
  sidebar: [
    "/preface/",
    "/01-preliminary/",
    "/02-fa/",
    "/03-re/",
    "/04-cfg/",
    "/05-pda/",
    "/06-cfl/",
    "/07-tm/",
    "/08-pnp/",
    "/09-ts/",
    "/10-pn/",
    "/11-ta/",
  ],

  // 关于页脚
  lastUpdated: true, // string | boolean 最后更新时间
  repoLabel: "查看源码",
  docsDir: "docs", // 文档目录
  docsBranch: "main", // 文档分支
  editLinkText: "帮助我改善此页面！",
});
