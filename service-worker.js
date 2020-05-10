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
    "revision": "115c65f5ac8d925f9bb48bf89932a9ca"
  },
  {
    "url": "assets/css/0.styles.f5581cdf.css",
    "revision": "8e5fe8c9ca67036451011b2d9745f001"
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
    "url": "assets/js/10.ea3a960e.js",
    "revision": "70b6a7dff940387df697de1f71bd455f"
  },
  {
    "url": "assets/js/11.510052a1.js",
    "revision": "91c72401ad517a07052f8dd0c03f6e31"
  },
  {
    "url": "assets/js/12.58add903.js",
    "revision": "f7460c092e9490b7a143fefca5a9547d"
  },
  {
    "url": "assets/js/13.176921de.js",
    "revision": "87c4a68413ce952f9ca95eaec05c25cb"
  },
  {
    "url": "assets/js/14.5c5e6d6d.js",
    "revision": "aff80b5faf78ef8f40abab3a7236335b"
  },
  {
    "url": "assets/js/15.61259627.js",
    "revision": "e9a5af97c2abf72c5c1d30061be5a551"
  },
  {
    "url": "assets/js/16.7b64ed79.js",
    "revision": "49e49e22f47e81ca85d41ff0f24e5d6e"
  },
  {
    "url": "assets/js/17.aba99f1d.js",
    "revision": "2cf2710f57dc36019dc2e23f1d785031"
  },
  {
    "url": "assets/js/18.63254333.js",
    "revision": "4b610ac15b5e974cc10923cd5c2ebd5c"
  },
  {
    "url": "assets/js/19.205205f9.js",
    "revision": "dff2c410c07d9e8aba0502b19375074b"
  },
  {
    "url": "assets/js/2.341844bd.js",
    "revision": "37c94b8735265b38fde984ba8397d5f0"
  },
  {
    "url": "assets/js/20.b84b3f85.js",
    "revision": "c62273f5abb4d1dc040766d406d904aa"
  },
  {
    "url": "assets/js/21.2ea5c789.js",
    "revision": "b4a31c733d4b7e99b8d2f9732cfea340"
  },
  {
    "url": "assets/js/22.e1a27b80.js",
    "revision": "6c43e25d5f84f7371fdb3cea2e4f840f"
  },
  {
    "url": "assets/js/23.0694f323.js",
    "revision": "ceae9ceb182eff958102aac879a20c4f"
  },
  {
    "url": "assets/js/24.8e86e513.js",
    "revision": "87b2ce88a27e7c9ed1bbe9341a45e77b"
  },
  {
    "url": "assets/js/25.6684bb49.js",
    "revision": "62637f87c7826c7cfcc9ff0e38e479fc"
  },
  {
    "url": "assets/js/26.252fd512.js",
    "revision": "da9f8735546f99b9303b13521f436ce1"
  },
  {
    "url": "assets/js/27.26957c57.js",
    "revision": "ab57db60b530a343dfa245d63c272ebc"
  },
  {
    "url": "assets/js/28.62fe9adf.js",
    "revision": "382ed6514051abd18701f32293ff6115"
  },
  {
    "url": "assets/js/29.e37e74ec.js",
    "revision": "4a4272917c0bee9d8ae2f44cbb802db6"
  },
  {
    "url": "assets/js/3.b516bb16.js",
    "revision": "b5897ec68eaacd82cca59d988e843fb0"
  },
  {
    "url": "assets/js/30.988f06c6.js",
    "revision": "28d33cb62585f4956e76c6cf65bd0e9b"
  },
  {
    "url": "assets/js/31.c12686fe.js",
    "revision": "08369f726c07b341869e6e931d940435"
  },
  {
    "url": "assets/js/32.ebe99035.js",
    "revision": "211fbfe2d3c4903e1830925a9eb7b4d6"
  },
  {
    "url": "assets/js/33.df69d9e5.js",
    "revision": "68ba7a679ac51514cdba193b973385eb"
  },
  {
    "url": "assets/js/34.243e695c.js",
    "revision": "8194f7a71e66668056829ab4f11b23d2"
  },
  {
    "url": "assets/js/35.1c9b93f6.js",
    "revision": "0d0bbbf3248b8dc4531dd8dbfd44bbe3"
  },
  {
    "url": "assets/js/36.2535d9ab.js",
    "revision": "3394e21cf361ebff2e48a48a90b233e2"
  },
  {
    "url": "assets/js/37.7fa07b07.js",
    "revision": "e48bab393acd31ffa47591594a95dcb3"
  },
  {
    "url": "assets/js/38.3ff083c4.js",
    "revision": "58cc3e6190c4624c73215dd9a012999c"
  },
  {
    "url": "assets/js/39.29849690.js",
    "revision": "978ec38b6ca35fc896d23095fbff687a"
  },
  {
    "url": "assets/js/4.ea022370.js",
    "revision": "881071861841520515366f77c462ef18"
  },
  {
    "url": "assets/js/40.dee96f8d.js",
    "revision": "37d0723690c1badc7456fad56d9f91b8"
  },
  {
    "url": "assets/js/41.0821e857.js",
    "revision": "4c555a3e931c24f9a39aaefbd5f2939b"
  },
  {
    "url": "assets/js/5.9d17f110.js",
    "revision": "89210fda1e86783b693816c1f98fa7f5"
  },
  {
    "url": "assets/js/6.ef5e269f.js",
    "revision": "3f43b047ca0bb627677d4c8cbf4baf94"
  },
  {
    "url": "assets/js/7.af8eafaf.js",
    "revision": "3ec4126656f0a59d498ba922c8fdff2f"
  },
  {
    "url": "assets/js/8.6eda919a.js",
    "revision": "c131ce90d9b7b450c55a1458a25e92cf"
  },
  {
    "url": "assets/js/9.870f8f58.js",
    "revision": "1493e3406507750d4a34fabefbd31b94"
  },
  {
    "url": "assets/js/app.c58701e9.js",
    "revision": "a56252654457e05449f6940c7b07a16b"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "bcf9b4df0b88c49af2e5148f7b08ad9a"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "f753cfbc7b7b06c6bd0a125b6323a1f4"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "fb4efb16c9dfb7ecdde2bdd8783ff8c4"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "294b5b3397e6c99fb3272622845090dc"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "a51512e47ad02155ca9e183de196c914"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "27a573fef87b0bbb1aa330ff55e863d7"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "e8f0b85b38e07947d7060963e6bbe353"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "1a01045414f2154ff430d31bc4c504af"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "bb9833dde5049f3efbd20a2d1b931b6c"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "f1c3e3885bc42b440189c6e776cdc235"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "b1352ac04e6bd96636aea6454a33f11a"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "f99f44b86fa639bc2ac42b92ffc26bf1"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "fb76fb35e614c933491cd6c6bd3531b2"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "61e992143c6ea96caf6b8a5e28145811"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "d04b55fc11b8c7e1ff002863369c7438"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "0d17a51cd4812dff91b5e7ba9d1c7cbf"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "c6e9d8f13e5f8cbe5ffa962dd498c795"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "b7c15f0647387332bb43b6f2b7a1f255"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "716682eb6256acdd7766b7dcca81ce64"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "8f282df29a3d1d7e993754e7aa617ceb"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "0268fddfcd1c4d4a3e61ecc13e5dd98c"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "4108cb1957931f6317fdca366abadf83"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "fec7a90636260779ac11c77626f6e0a9"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "4ccf3ae525574d07156ce7a1f7a1e500"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "ba7377b4f12615335355c9e0660bb034"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "1cd6a388dae275d12317accb75242389"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "acb9241e123a89fd352c8bc8fc9c52c4"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "7694d6965c21e374b3b8ddc42134cb6a"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "fc635ad8bb5def3666138fb9971b23bb"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "22c1f0053c520c18244b299c84c4ec51"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "ae6433d96949c8b8941bd72b5428199c"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "a726f692ef53785967869e7689cbbdca"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "0bbfdbe427ec1ce6b16e13242ef9a1ee"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "9b3acac847dd673c899e32aeeb024708"
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
