import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcExclude: ['**/README.md'],
  title: "Lake",
  description: "Lake is a rich text editor for the web.",
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/favicon-16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/favicon-32.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/favicon-192.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/' },
      { text: 'Handbook', link: '/handbook/' },
      { text: 'Reference', link: '/reference/' }
    ],

    sidebar: {
      '/examples/': [{
        text: 'Examples',
        items: [
          { text: 'Default configuration', link: '/examples/' },
          { text: 'Full-featured editor', link: '/examples/full-featured' }
        ]
      }],
      '/handbook/': [{
        text: 'Handbook',
        items: [
          { text: 'Getting started', link: '/markdown-examples' },
          { text: 'With React', link: '/api-examples' }
        ]
      }],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lakejs/lake' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Luo Longhao'
    }
  }
})
