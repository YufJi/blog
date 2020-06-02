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
    "revision": "c235a3efafa20adc6afde2a84ceb3577"
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
    "url": "assets/js/10.55c8072f.js",
    "revision": "3663950c376f887a24a603d79f8cd842"
  },
  {
    "url": "assets/js/11.ae5d2622.js",
    "revision": "0e7182fb18f2005a7716a803cd0ad927"
  },
  {
    "url": "assets/js/12.2971b604.js",
    "revision": "5cf48bd1aecab732ba86cc3a87a546c3"
  },
  {
    "url": "assets/js/13.ae051416.js",
    "revision": "f294ff846fc25e4c6c0960518445d3ed"
  },
  {
    "url": "assets/js/14.9e4af765.js",
    "revision": "958bbfb8a5fa828e44d730f146cb9785"
  },
  {
    "url": "assets/js/15.a8b2dcab.js",
    "revision": "686ecd5c47b6346ebb910c3abdb0be94"
  },
  {
    "url": "assets/js/16.e9e034c0.js",
    "revision": "8968821087c706150e989f2b8ea38962"
  },
  {
    "url": "assets/js/17.dc2657cb.js",
    "revision": "64ad12e5c1b37097c52c59470d6c5ff0"
  },
  {
    "url": "assets/js/18.206a2c57.js",
    "revision": "b0a83ec66dc9dbe0c1ad5c4e57ae3014"
  },
  {
    "url": "assets/js/19.22229180.js",
    "revision": "94eb16b773a57f4ee42cb0a2ce536bd2"
  },
  {
    "url": "assets/js/2.341844bd.js",
    "revision": "37c94b8735265b38fde984ba8397d5f0"
  },
  {
    "url": "assets/js/20.662f645c.js",
    "revision": "e624aadb76da570aeb45f053bcf53ebb"
  },
  {
    "url": "assets/js/21.0a377b97.js",
    "revision": "fb01ba6f51e080bedec4e5af820b51d2"
  },
  {
    "url": "assets/js/22.366c57be.js",
    "revision": "64b984eee7151c126cc5eb0bc764750d"
  },
  {
    "url": "assets/js/23.8cf6108d.js",
    "revision": "146c3c14b37651637997b7d558dd0290"
  },
  {
    "url": "assets/js/24.3ca089a1.js",
    "revision": "889738c5407f9ab8a837ca79c76dbc60"
  },
  {
    "url": "assets/js/25.5d2b7516.js",
    "revision": "a84568a4821a71012ecd3b82003b507f"
  },
  {
    "url": "assets/js/26.28bef7df.js",
    "revision": "85e365c8a2f328cf5e6c2a29f91ec141"
  },
  {
    "url": "assets/js/27.ba3320f3.js",
    "revision": "ff964fa28029c2ab6f79b3260eaece2e"
  },
  {
    "url": "assets/js/28.6ef8c621.js",
    "revision": "cca46217fbc1ce2410502cb1c621a99b"
  },
  {
    "url": "assets/js/29.29a3d8d5.js",
    "revision": "9e7e3a2980321e422a2d974e7c1e07ec"
  },
  {
    "url": "assets/js/3.b516bb16.js",
    "revision": "b5897ec68eaacd82cca59d988e843fb0"
  },
  {
    "url": "assets/js/30.b16c3585.js",
    "revision": "415dd64233161c7c856b16fb34a59d34"
  },
  {
    "url": "assets/js/31.f0edd232.js",
    "revision": "0233f83b5abd7bf1b3ec1f2fc8327e3e"
  },
  {
    "url": "assets/js/32.c26f6744.js",
    "revision": "c0bf9cb2b612c09528c9342bfbbf9434"
  },
  {
    "url": "assets/js/33.393c42f7.js",
    "revision": "75a7d896df4848a17b58799e42a397aa"
  },
  {
    "url": "assets/js/34.5107a48f.js",
    "revision": "d38b8fa5e2f5a9681aa92022d2a586ae"
  },
  {
    "url": "assets/js/35.c3001e62.js",
    "revision": "7f5cad506e39c4bee742e66e0b8963ad"
  },
  {
    "url": "assets/js/36.6c84e831.js",
    "revision": "57f28577ff8424758106d35540e394f2"
  },
  {
    "url": "assets/js/37.8b8281f3.js",
    "revision": "ce7af66fdbbb9d85f9b98f24ab21d5a4"
  },
  {
    "url": "assets/js/38.6d7a3751.js",
    "revision": "f43c40fc5afe7582ec15c632cb9220e7"
  },
  {
    "url": "assets/js/39.8e3418ef.js",
    "revision": "e5aa0d3328e7decd6be0d4ac21681ff2"
  },
  {
    "url": "assets/js/4.62e342d3.js",
    "revision": "51a230b2cf831ded5b077cde0e7c2657"
  },
  {
    "url": "assets/js/40.755bc589.js",
    "revision": "34b9721d0eeada1af5ebfcb294574c89"
  },
  {
    "url": "assets/js/41.8ac65311.js",
    "revision": "60d679ab1a0a7162b164c4b6b6f3ff36"
  },
  {
    "url": "assets/js/42.832b258b.js",
    "revision": "ef284a2e359e7918cfd5c2fae1474af2"
  },
  {
    "url": "assets/js/43.63a0dc73.js",
    "revision": "970c589f1eeae462c306465d5b2aab2d"
  },
  {
    "url": "assets/js/44.e6afc5cf.js",
    "revision": "bd341e4afcea4c912cddfacadf4fce50"
  },
  {
    "url": "assets/js/5.f56acf8e.js",
    "revision": "fbc7ebbc17c9710aba44ff7221a58729"
  },
  {
    "url": "assets/js/6.b65b70b4.js",
    "revision": "9247e1d6330229c364b2ee1bd9413c83"
  },
  {
    "url": "assets/js/7.948f0834.js",
    "revision": "0b4bdb1c719469e4376734c7e1a1e747"
  },
  {
    "url": "assets/js/8.3154bfc2.js",
    "revision": "c666110f52c93e49778e6c23378d8032"
  },
  {
    "url": "assets/js/9.870f8f58.js",
    "revision": "1493e3406507750d4a34fabefbd31b94"
  },
  {
    "url": "assets/js/app.03858b5d.js",
    "revision": "a2102bc436abe62fbbad1b7a4affca6e"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "0c930da8782ec1a27d43c9d333c97f79"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "8e6123ae14802ee74b88f9a70dc7fcf6"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "6a45c522afb8d2e17be3f3863b87e804"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "562b4f34152a9e01e71087df5f1b1a37"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "6f9d870549c84b313f9a0dd492a3947b"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "f3355bba6236c9264a8778356130e050"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "c7b97d84e74937e54d2045bbb4f3e076"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "9412e731adb07bd8cd3c373a95dd6bd5"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "8f3d28bd3a9eadd00f8022e27bb4b6d1"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "e79f9fdb1eb82646ce3e01e4a122fc94"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "8c0a20e6902edcb4b8885ea405b9e866"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "8edf4a060b02bbc79ebc099b74df432b"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "0f34691f3b8638d4622db54996ae7ddf"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "3a42fcffa967e319e36bbdbcf7d45d4e"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "79292d8d78b6debfa77fedfae7a9f7b2"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "6608c508dba926bfc377080a101890cb"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "511d1bc7027e4aa6e584c4029a477a4e"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "06cbb57b842e8aa32bcc399469df8dcb"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "a6acff606323f17a3fdd436e29019b50"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "df6c15fc22ba4fa929fa363aede5adcd"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "4022370a050969da3fff614542c2237d"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "a8ae75af981238c68f4bb60775c41ac3"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "67f0f96e524220c9be851a40de99a6f1"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "bd4a00a885f43d886c2e37ac26356230"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "cc705241e214f45889b0cec0c8b97b00"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "affebab478b7f7adf386e6153b6503ac"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "00d4c3779395e757974c7494453df5f5"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "08600d7f8e6b4317510ff3b25b6cc16e"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "3a0e203831b89ad8f21cb257d6005db3"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "ad98590cde9e50885d2d5b057d08073c"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "916ca11a2328be9a6d5f44628d005781"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "69130c4ee3e0f71cd44147d193135e6a"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "fbe10d81f74ad15867270a6924eef10a"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "ee93aea7176d6274210503d1d64253c2"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "173be0a9b4cea2f7b4acc0f379036f14"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "f1313aeebf0a034d3202c19f56b302c1"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "e6f68a71793d3a939695067b59fb7cfd"
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
