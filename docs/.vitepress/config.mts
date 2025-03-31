import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress/',
  title: "资源知识共享空间",
  titleTemplate: ':title - Qingss',
  description: "A Place For Resource And Knowledge",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '例子', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      {icon:{svg:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="m16 9.5l-3-3V2h-2v2.5l-3-3l-8 8v.5h2v5h5v-3h2v3h5v-5h2z"/></svg>'},
      link:'https://shrinksky.github.io/vitepress'}
    ]
  }
})
