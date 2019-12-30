
const path = require('path')

const listDirectory = require('./utils/listDirectory')

const cwd = process.cwd()

module.exports = {
  base: '/blog/',
  title: "YufJ's LeetCode Travel",
  description: '记录自己的刷题之旅',
  serviceWorker: {
    updatePopup: {
      message: 'New content is available.',
      buttonText: 'Refresh',
    },
  },
  dest: 'docs',
  themeConfig: {
    activeHeaderLinks: false,
    editLinks: true,
    // navbar: false,
    docsDir: path.join(cwd, 'leetcode'),
    sidebar: [
      {
        title: '简单',   // 必要的
        children: listDirectory(path.join(__dirname, '../easy')).filter(f => f.type === 'file').map(item => `/easy/${item.fileName.replace('.md', '')}`)
      },
      {
        title: '中等',   // 必要的
        children: listDirectory(path.join(__dirname, '../middle')).filter(f => f.type === 'file').map(item => `/middle/${item.fileName.replace('.md', '')}`)
      },
      {
        title: '困难',   // 必要的
        children: listDirectory(path.join(__dirname, '../hard')).filter(f => f.type === 'file').map(item => `/hard/${item.fileName.replace('.md', '')}`)
      }
    ],
  },
  head: [
    ['link', { rel: 'icon', href: '/icons/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/logo.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/logo.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/logo.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: ['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: {
      message: "New content is available.",
      buttonText: "Refresh"
    }
  }],
};
