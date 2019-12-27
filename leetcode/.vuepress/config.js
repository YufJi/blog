
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
};
