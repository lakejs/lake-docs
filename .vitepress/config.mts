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
  sitemap: {
    hostname: 'https://lakejs.org'
  },
  srcExclude: [
    '**/README.md',
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/icons/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/', activeMatch: '/examples/' },
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
      { text: 'Reference', link: '/reference/', activeMatch: '/reference/' },
      {
        text: '0.3.1',
        items: [
          { text: 'npm', link: 'https://www.npmjs.com/package/lakelib', target: '_blank' },
          { text: 'jsDelivr', link: 'https://www.jsdelivr.com/package/npm/lakelib', target: '_blank' },
          { text: 'UNPKG', link: 'https://unpkg.com/browse/lakelib/', target: '_blank' },
          { text: 'Changelog', link: 'https://github.com/lakejs/lake/blob/main/CHANGELOG.md', target: '_blank' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lakejs/lake' },
    ],
    search: {
      provider: 'algolia',
      options: {
        appId: 'FQ2U4EM6C5',
        apiKey: '417f39bb87ca98e992516d4a79d61aae',
        indexName: 'lakejs',
      },
    },
    sidebar: {
      '/examples/': [{
        text: 'Examples',
        items: [
          { text: 'Feature-rich editor', link: '/examples/' },
          { text: 'Comment box', link: '/examples/comment-box' },
          { text: 'Headless editor', link: '/examples/headless' },
          { text: 'Huge content', link: '/examples/huge-content' },
          { text: 'Read-only mode', link: '/examples/readonly' },
          { text: 'Internationalization', link: '/examples/internationalization' },
          { text: 'Document editor', link: '/examples/document', target: '_blank' },
          { text: 'Playground', link: 'https://codesandbox.io/s/ty37hm', target: '_blank' },
        ],
      }],
      '/guide/': [{
        text: 'Guide',
        items: [
          { text: 'Getting started', link: '/guide/' },
          { text: 'Content format', link: '/guide/content-format' },
          { text: 'Markdown shortcuts', link: '/guide/markdown' },
          { text: 'About', link: '/guide/about' },
        ],
      }],
      '/reference/': [{
        text: 'Reference',
        items: [
          { text: 'Editor config', link: '/reference/' },
          { text: 'Toolbar config', link: '/reference/toolbar-config' },
          { text: 'Editor', link: '/reference/editor' },
          { text: 'Toolbar', link: '/reference/toolbar' },
          { text: 'Button', link: '/reference/button' },
          { text: 'Dropdown', link: '/reference/dropdown' },
          { text: 'Nodes', link: '/reference/nodes' },
          { text: 'Fragment', link: '/reference/fragment' },
          { text: 'Range', link: '/reference/range' },
          { text: 'Box', link: '/reference/box' },
          { text: 'HTMLParser', link: '/reference/html-parser' },
          { text: 'TextParser', link: '/reference/text-parser' },
          { text: 'Functions', link: '/reference/functions' },
        ],
      }],
    },
    outline: {
      level: 2,
    },
    editLink: {
      pattern: 'https://github.com/lakejs/lake-docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Luo Longhao',
    },
  },
});
