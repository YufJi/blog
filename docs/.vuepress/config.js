
const path = require('path')

const listDirectory = require('./utils/listDirectory')

const cwd = process.cwd()

module.exports = {
  base: '/blog/',
  title: "YufJ's Daily",
  description: '记录自己的刷题之旅和分享',
  dest: 'dist',
  themeConfig: {
    activeHeaderLinks: false,
    editLinks: true,
    // navbar: false,
    docsDir: path.join(cwd, 'docs'),
    sidebar: [
      {
        title: 'LeetCode',
        collapsable: false,
        children: [
          {
            title: '简单',
            sidebarDepth: 0,
            children: listDirectory(path.join(__dirname, '../leetcode/easy')).filter(f => f.type === 'file').map(item => `/leetcode/easy/${item.fileName}`)
          },
          {
            title: '中等',   // 必要的
            sidebarDepth: 0,
            children: listDirectory(path.join(__dirname, '../leetcode/middle')).filter(f => f.type === 'file').map(item => `/leetcode/middle/${item.fileName}`)
          },
          {
            title: '困难',   // 必要的
            sidebarDepth: 0,
            children: listDirectory(path.join(__dirname, '../leetcode/hard')).filter(f => f.type === 'file').map(item => `/leetcode/hard/${item.fileName}`)
          }
        ]
      },
      {
        title: '设计模式',
        collapsable: false,
        children: listDirectory(path.join(__dirname, '../Design pattern')).filter(f => f.type === 'file').map(item => `/Design pattern/${item.fileName}`)
      },
      {
        title: '前端知识',
        collapsable: false,
        sidebarDepth: 0,
        children: [
            {
            title: '实践',
            sidebarDepth: 0,
            children: listDirectory(path.join(__dirname, '../shared/practice')).filter(f => f.type === 'file').map(item => `/shared/practice/${item.fileName}`)
          },
          {
            title: 'js',
            sidebarDepth: 0,
            children: listDirectory(path.join(__dirname, '../shared/js')).filter(f => f.type === 'file').map(item => `/shared/js/${item.fileName}`)
          },
          {
            title: 'css',
            sidebarDepth: 0,
            children: listDirectory(path.join(__dirname, '../shared/css')).filter(f => f.type === 'file').map(item => `/shared/css/${item.fileName}`)
          }
        ]
      },
    ],
  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover' }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
    ['link', { rel: 'icon', href: '/icons/icon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#F3F3F3' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/icon.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/icon.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    }],
  ],
};