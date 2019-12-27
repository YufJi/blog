
const path = require('path')

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
        children: [
          '/easy/binarySearch',
          '/easy/distributeCandies',
          '/easy/isSymmetric',
          '/easy/reverse',
          '/easy/twoSum',
          '/easy/findContentChildren',
        ]
      },
      {
        title: '中等',   // 必要的
        children: [
          '/middle/addTwoNumbers',
          '/middle/lengthOfLongestSubstring',
          '/middle/numFactoredBinaryTrees',
          '/middle/pow',
          '/middle/threeSum',
          '/middle/findMinArrowShots'
        ]
      },
      {
        title: '困难',   // 必要的
        children: [
          '/hard/findMedianSortedArrays',
          '/hard/firstMissingPositive',
          '/hard/minWindow',
        ]
      }
    ],
  },
};
