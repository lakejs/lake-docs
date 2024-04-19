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
    logo: '/assets/icons/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/', activeMatch: '/examples/' },
      { text: 'Handbook', link: '/handbook/', activeMatch: '/handbook/' },
      { text: 'Reference', link: '/reference/', activeMatch: '/reference/' },
    ],

    sidebar: {
      '/examples/': [{
        text: 'Examples',
        items: [
          { text: 'Default configuration', link: '/examples/' },
          { text: 'Full-featured editor', link: '/examples/full-featured' },
          { text: 'Document editor', link: '/examples/document' },
          { text: 'Miniature toolbar', link: '/examples/miniature' },
          { text: 'Headless editor', link: '/examples/headless' },
        ],
      }],

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
