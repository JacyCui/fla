import { viteBundler } from "@vuepress/bundler-vite";
import { markdownContainerPlugin } from "@vuepress/plugin-markdown-container";
import { markdownMathPlugin } from "@vuepress/plugin-markdown-math";
import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  theme,

  lang: "zh-CN",
  title: "形式语言与自动机", // 网站标题
  description: "计算机世界中的语言", // 网站描述

  // 插入html头
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],

  // 插件
  plugins: [
    markdownMathPlugin({
      type: "katex",
    }),

    searchPlugin({}),

    markdownContainerPlugin({
      type: "definition",
      before: (info) => `<div class="definition"><p class="title">${info}</p>`,
      after: () => "</div>",
    }),
    markdownContainerPlugin({
      type: "theorem",
      before: (info) => `<div class="theorem"><p class="title">${info}</p>`,
      after: () => "</div>",
    }),
    markdownContainerPlugin({
      type: "lemma",
      before: (info) => `<div class="lemma"><p class="title">${info}</p>`,
      after: () => "</div>",
    }),
    markdownContainerPlugin({
      type: "conclusion",
      before: (info) => `<div class="conclusion"><p class="title">${info}</p>`,
      after: () => "</div>",
    }),
    markdownContainerPlugin({
      type: "observation",
      before: (info) => `<div class="observation"><p class="title">${info}</p>`,
      after: () => "</div>",
    }),
  ],
});
