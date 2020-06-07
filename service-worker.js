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
    "revision": "1f9d0b3b63642f70f77c5b97d5b6b0c3"
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
    "url": "assets/js/32.10865b0b.js",
    "revision": "30a2379b879ad95b0aef1dce914ec1a4"
  },
  {
    "url": "assets/js/33.407f41a1.js",
    "revision": "442fb90c651ab785d5210a4568507749"
  },
  {
    "url": "assets/js/34.4567ed92.js",
    "revision": "f9941e6df48e6a93c57a895a15f73548"
  },
  {
    "url": "assets/js/35.d75eb700.js",
    "revision": "f46d5303bf702659f829a8fbda2b9aec"
  },
  {
    "url": "assets/js/36.6c80c256.js",
    "revision": "98ff2ef0ed1a3d74d32ec42f3eb965f4"
  },
  {
    "url": "assets/js/37.241f2f9d.js",
    "revision": "0f05b0fa38de7588756828f3cc4b4c51"
  },
  {
    "url": "assets/js/38.507f0325.js",
    "revision": "a8a3c798c0fee7496a6367a242b26de7"
  },
  {
    "url": "assets/js/39.cb80362b.js",
    "revision": "7c80db1f804e485800157cc4319f8ddd"
  },
  {
    "url": "assets/js/4.6582cc33.js",
    "revision": "1666f48f60e7df6214eedd7fedcfd39e"
  },
  {
    "url": "assets/js/40.88c8e334.js",
    "revision": "eb00cf3b137d15ec66fc89867b29252c"
  },
  {
    "url": "assets/js/41.73e3df99.js",
    "revision": "c529a07357fd6479a7c2ac8304c7a30f"
  },
  {
    "url": "assets/js/42.0f2bd3e0.js",
    "revision": "ac29feb4e3227609271137789e7df27b"
  },
  {
    "url": "assets/js/43.b48ef087.js",
    "revision": "2deba155bb5f0932a11c41d0f3c0360e"
  },
  {
    "url": "assets/js/44.a899bc7f.js",
    "revision": "084c66b3e4dc68dcdb8375822693a9bc"
  },
  {
    "url": "assets/js/45.048d8c5c.js",
    "revision": "19af0defb617ea257cb2b463c8e3fc84"
  },
  {
    "url": "assets/js/46.cfe6406f.js",
    "revision": "1582b2dccc7118ac2de989ad6c133455"
  },
  {
    "url": "assets/js/47.846cf916.js",
    "revision": "f4d40443af2c43397e239877674b3ea5"
  },
  {
    "url": "assets/js/5.f56acf8e.js",
    "revision": "fbc7ebbc17c9710aba44ff7221a58729"
  },
  {
    "url": "assets/js/6.6e4197fe.js",
    "revision": "c5980de67a95d4b816b2b2e9dc71fcce"
  },
  {
    "url": "assets/js/7.7fed567c.js",
    "revision": "6252719b5a429babca8bf993d8e55b1c"
  },
  {
    "url": "assets/js/8.685d5caf.js",
    "revision": "2ceb885af706d1ea4dc03469671ea6f0"
  },
  {
    "url": "assets/js/9.870f8f58.js",
    "revision": "1493e3406507750d4a34fabefbd31b94"
  },
  {
    "url": "assets/js/app.9c3508c8.js",
    "revision": "54db6b852555d177449618f58753501c"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "6c28bd773241c04afafa6bb757469af9"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "53bdb5c4f1c55958a8528245ffc7a9f3"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "f8c37ca5ceba8ff65eff600abc1e8050"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "c896961ae19e742720a1315d91bad7b1"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "0f69a99fc837ff776610526b31c035fe"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "44c28f7e5123131a69c10eb70b8920a1"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "5bc9329cb975d4eaa7f8a8574f58f0e0"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "4a5475e5577ab857440c8b825df64188"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "9f490f237270de23aab4c17095b13afe"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "9c1d1552359c7a204de67a685afe4078"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "e48ed31ac9d541e12444931415c40661"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "a06e0c48cf19d0eceffde82138e0d2a0"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "4306b26fbe5d7002fc2b48f81b691fb9"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "0e9576278019217c308b8119dfc4be21"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "5f645c633168dcbb29a27ef526a3a69d"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "ebe78f049eb7e4434d1a53d90b8f418c"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "e6971f0e8ecc334cc9dfe0f511e8b6b8"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "40308ee29b5dd24afc1624959b62043c"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "0f99d958174dca7c9b0ef1975d27b4b3"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "c087287457cce17e333b35d9e603d341"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "d453eb5a92f7e93b14a9a6519b232521"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "02217d7cce8ac22708dfc13058160425"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "d862eb4db1d99fc0dd4f106b1c0aebea"
  },
  {
    "url": "leetcode/middle/convert.html",
    "revision": "47f632d98f4c5c9e18818db805afaba9"
  },
  {
    "url": "leetcode/middle/exist.html",
    "revision": "71c431c3603c57719ca911e5ef8dccb7"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "7c5ef3ac601e6457b89e6984f4248cb4"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "d1ca05215e43e1c8c49f6ba3eac6fffa"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "97cb17abf0550255253698ba1a4d9761"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "84183ef7f8240e2c1204180b1045de4d"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "0198d077edd3aa4c997aa1a99a097577"
  },
  {
    "url": "leetcode/middle/movingCount.html",
    "revision": "8bfe1d2f0598b97b6223256bfde1c934"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "2d52a50f46ad99b144f37416415c59b7"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "73cea03d841afbbcc3d8cc3bba1292bb"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "b9ba11eb7783267b56f0b395640fc416"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "ba3efd6edffd9445472d440229d85387"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "d63fd1ff8c4ad1ad6c67b5ead21b2234"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "7955d7e3f9e8565a1c30316436e8d743"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "49b104214d087b5465b7487fcc7bcdee"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "2084b0b92d1bfc6a05e15e2f413d32bb"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "2924ea8bc15d76aee84f3c9ecbb9c350"
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
