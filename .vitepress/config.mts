import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: '.',
  outDir: './.vitepress/dist',
  assetsDir: 'static',
  lang: 'en-US',
  title: "Lake",
  description: "Lake is a rich text editor for the web.",
  head: [
    ['link', { rel: 'icon', href: '/assets/icons/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/icons/favicon-16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/icons/favicon-32.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/icons/favicon-192.png' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/lakelib@0.0.6/dist/codemirror.min.js' }],
    ['script', { src: '/assets/values/default-value.js' }],
    ['script', { src: '/assets/values/headless-value.js' }],
    ['script', { src: '/assets/values/huge-value.js' }],
    ['script', { src: '/assets/values/miniature-value.js' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/index.html' },
      { text: 'Handbook', link: '/handbook/' },
      { text: 'Reference', link: '/reference/' },
    ],

    sidebar: {
      '/handbook/': [{
        text: 'Handbook',
        items: [
          { text: 'Getting started', link: '/markdown-examples' },
          { text: 'With React', link: '/api-examples' },
        ],
      }],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lakejs/lake' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Luo Longhao',
    },
  }
})
