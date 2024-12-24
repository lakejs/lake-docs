import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: '.',
  outDir: './.vitepress/dist',
  assetsDir: 'static',
  appearance: false,
  cleanUrls: true,
  lastUpdated: false,
  lang: 'en-US',
  title: "Lake",
  description: "Lake is a browser-based rich text editor designed for creating content such as blogs, comments, and emails.",
  head: [
    ['link', { rel: 'icon', href: '/assets/icons/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/icons/favicon-16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/icons/favicon-32.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/icons/favicon-192.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/icons/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/', activeMatch: '/examples/' },
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
      { text: 'Reference', link: '/reference/', activeMatch: '/reference/' },
      { text: 'Discussions', link: 'https://github.com/lakejs/lake/discussions', target: '_blank' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lakejs/lake' },
    ],
    sidebar: {
      '/examples/': [{
        text: 'Examples',
        items: [
          { text: 'Default config', link: '/examples/' },
          { text: 'Feature-rich editor', link: '/examples/feature-rich' },
          { text: 'Comment box', link: '/examples/comment-box' },
          { text: 'Headless editor', link: '/examples/headless' },
          { text: 'Huge content', link: '/examples/huge-content' },
          { text: 'Read-only mode', link: '/examples/readonly' },
          { text: 'Internationalization', link: '/examples/internationalization' },
          { text: 'Document editor', link: '/examples/document', target: '_blank' },
        ],
      }],
      '/guide/': [{
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Getting started', link: '/guide/getting-started' },
          { text: 'Content format', link: '/guide/content-format' },
          { text: 'Markdown shortcuts', link: '/guide/markdown' },
        ],
      }],
      '/reference/': [{
        text: 'Reference',
        items: [
          { text: 'Editor config', link: '/reference/' },
          { text: 'Toolbar config', link: '/reference/toolbar-config' },
          { text: 'Editor class', link: '/reference/editor' },
          { text: 'Toolbar class', link: '/reference/toolbar' },
        ],
      }],
    },
    outline: {
      level: 2,
    },
    editLink: {
      pattern: 'https://github.com/lakejs/lake-docs/tree/main/:path',
      text: 'View this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Luo Longhao',
    },
  },
});
