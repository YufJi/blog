/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "aef65e8a0e27fca687574f27d4f8a251"
  },
  {
    "url": "assets/css/0.styles.22fb32f6.css",
    "revision": "7252b34bc2ac6fc4fc8647d43bd6073e"
  },
  {
    "url": "assets/img/docs.db788ad3.png",
    "revision": "db788ad33c6493b82ec98b19b5b56532"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.904fafdb.js",
    "revision": "d16cfdb020ade4e1587cc47b4d1d9935"
  },
  {
    "url": "assets/js/11.900d5924.js",
    "revision": "c57d4869c4f739b156e1b34212fe1744"
  },
  {
    "url": "assets/js/12.e03d7175.js",
    "revision": "fb0b5eddd69fc83edd8dffed57ffec49"
  },
  {
    "url": "assets/js/13.b79853d1.js",
    "revision": "eaa6351a3227fb9109376acc23e245cd"
  },
  {
    "url": "assets/js/14.57512516.js",
    "revision": "b87bdabf160a6ed561e4a88745bd8d9e"
  },
  {
    "url": "assets/js/15.33b39389.js",
    "revision": "d5e1058ae018af9e8d9cf6f0dd6c8ec8"
  },
  {
    "url": "assets/js/16.df0dac9d.js",
    "revision": "858e96c64d4f995c4f287d02e45b5273"
  },
  {
    "url": "assets/js/17.ceab61be.js",
    "revision": "a80cbf7eb89ac513dc2b75df38dcc3a5"
  },
  {
    "url": "assets/js/18.1a450a91.js",
    "revision": "c29923bb8249e7bae42fb1b4e52e5f2c"
  },
  {
    "url": "assets/js/19.4e9ff454.js",
    "revision": "d4c4aca06cc915ec1dee1114b8d0c62e"
  },
  {
    "url": "assets/js/2.3185b5b6.js",
    "revision": "1a8701f6c211229d718557d50b690642"
  },
  {
    "url": "assets/js/20.68f7ba21.js",
    "revision": "5daa9b8800b986e7c8a6f82a6f967eca"
  },
  {
    "url": "assets/js/21.79aa2170.js",
    "revision": "6da7899ca4c9c9c2abd76c37b0f766d2"
  },
  {
    "url": "assets/js/22.e7322993.js",
    "revision": "9b08e4659573809d0b52707d8e11f67b"
  },
  {
    "url": "assets/js/23.bb9f9c8f.js",
    "revision": "eacb90475e5bedd305c35dd2680a0aeb"
  },
  {
    "url": "assets/js/24.7ed49a8c.js",
    "revision": "df27d3874da23d8a7ae4305e50550e81"
  },
  {
    "url": "assets/js/25.dfad3c6a.js",
    "revision": "4a48ae0e31c4ab47096914f62a39e6c3"
  },
  {
    "url": "assets/js/26.eef83a0a.js",
    "revision": "312d6a3267b0a9d0e25ddbb810c10cb6"
  },
  {
    "url": "assets/js/27.6067df8b.js",
    "revision": "0bbd9c069a4e6b9e184ccd79c92060bf"
  },
  {
    "url": "assets/js/28.93017313.js",
    "revision": "a478e6a52dc8c316684acf574e9d14ca"
  },
  {
    "url": "assets/js/29.ed787d53.js",
    "revision": "7c323bfdc133ec7ff2ffcd74c5454986"
  },
  {
    "url": "assets/js/3.1f4717a5.js",
    "revision": "e2083f393ac1acdf3f5d11155bd8e00d"
  },
  {
    "url": "assets/js/30.f604d72f.js",
    "revision": "16ef94b469c4fb3029c893b92047861c"
  },
  {
    "url": "assets/js/31.3dd5738b.js",
    "revision": "b6ad08ca2a885e0c9c57d9c390ab6138"
  },
  {
    "url": "assets/js/32.d183b08f.js",
    "revision": "1e263354ac4e5d45a976b6dfdee60845"
  },
  {
    "url": "assets/js/4.ba2e53b8.js",
    "revision": "53103bb74daa2090add103a8ac49aad1"
  },
  {
    "url": "assets/js/5.3c5283dc.js",
    "revision": "96070072a1bcb41d1286103eb5523cd4"
  },
  {
    "url": "assets/js/6.72f84703.js",
    "revision": "58ae66ff887233f063d73cdb1bd2ee17"
  },
  {
    "url": "assets/js/7.ff7117de.js",
    "revision": "f2c50eb8c6137a6183ad83369c0dbe0e"
  },
  {
    "url": "assets/js/8.86a90ae2.js",
    "revision": "bbd4edaa1fe432b093279228b46e9ee8"
  },
  {
    "url": "assets/js/9.1f0df260.js",
    "revision": "73b7ad0ee21dc07fa57dd2f31b709407"
  },
  {
    "url": "assets/js/app.eb5a4e23.js",
    "revision": "8859ee89a09747b58ab4fb0955a75bef"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "082ad587c52989811541ad218140a65f"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "d7b93a2709004edd6eb1e792801e10d2"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "5407077118242e40ee9e4e1c37f06fb3"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "2fd58f6095ec6c0eeb25df54c8ee4dee"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "81c8197951f9c354a4fa8b7e9b5f88e1"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "a799fdadb836feef28112dcfdab69928"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "08d0102dce8c0fd03add7a9657e95c80"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "1e0ec034031e1b8306da2ad73a8f305d"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "9001c9b474be95d67f98ca84d5283b14"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "b3979428f40d529eaf71dcec8cb55040"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "b81d9139e34d670d4299f4e3119a8b44"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "45be0c307c98c6386d98f730527eb1ad"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "8d4df609c64914a584eb98365cc40aeb"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "ce9fd1f2e005cacf48fe851f560f67dd"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "712750db21fbca082199ec7ee6e0efc6"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "57cce5b87c2b70578f5eec7cee18da3b"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "980e85e167117192d8150b5faea17f3f"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "390773968f2599a9ee60787d7579a93d"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "ef4492043b0a2498c5a3d0c8577fee73"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "99fc0f8fdeaa78c7f242d9591ea157d1"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "a6cee63823861fdb5c05ec51a6ab81da"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "041597ac9673ab57007b2e9fb63e66fc"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "f1513738e7827979c147e2eece1b69e2"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "38a1c8a2dc7e5daa964be3cb32adb7b2"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "444c5fba9c386153781767b2d5d6a364"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "7dcea5a560bc9d87bcadf3025c8475aa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
