import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: '.',
  outDir: './.vitepress/dist',
  assetsDir: 'static',
  appearance: false,
  cleanUrls: true,
  lang: 'en-US',
  title: "Lake",
  description: "Lake is a rich text editor for the web.",
  head: [
    ['link', { rel: 'icon', href: '/assets/icons/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/icons/favicon-16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/icons/favicon-32.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/icons/favicon-192.png' }],
    ['script', { src: '/assets/codemirror.min.js' }],
  ],
  rewrites: {
    'examples/default.md': 'examples/index.md',
    'guide/introduction.md': 'guide/index.md',
    'reference/editor-config.md': 'reference/index.md',
  },
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
    sidebar: {
      '/examples/': [{
        text: 'Examples',
        items: [
          { text: 'Default configuration', link: '/examples/' },
          { text: 'Full-featured editor', link: '/examples/full-featured' },
          { text: 'Document editor', link: '/examples/document', target: '_blank' },
          { text: 'Miniature toolbar', link: '/examples/miniature' },
          { text: 'Headless editor', link: '/examples/headless' },
          { text: 'Huge content', link: '/examples/huge-content' },
          { text: 'Read-only mode', link: '/examples/readonly' },
        ],
      }],
      '/guide/': [{
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Getting started', link: '/guide/getting-started' },
        ],
      }],
      '/reference/': [{
        text: 'Reference',
        items: [
          { text: 'Editor configuration', link: '/reference/' },
          { text: 'Toolbar configuration', link: '/reference/toolbar-config' },
          { text: 'Content Format', link: '/reference/content-format' },
          { text: 'Markdown Shortcuts', link: '/reference/markdown' },
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
  },
})
