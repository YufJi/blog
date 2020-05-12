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
    "revision": "7cb1c56a30d95dfe4e484dfd3fae1eb2"
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
    "url": "assets/js/11.91df7880.js",
    "revision": "b0bea68b61840b271f5917309227c9d6"
  },
  {
    "url": "assets/js/12.f640fb10.js",
    "revision": "380b16ea433292f6b807f29f47ed20a4"
  },
  {
    "url": "assets/js/13.b4aef729.js",
    "revision": "110022d9f8702801653e69d0edfc866a"
  },
  {
    "url": "assets/js/14.ab794554.js",
    "revision": "8c9ee5bc1f9bad7295dae32ff7fa34ab"
  },
  {
    "url": "assets/js/15.7c114e30.js",
    "revision": "de37be636d975de0e7ef05ae6d4a43fc"
  },
  {
    "url": "assets/js/16.03417670.js",
    "revision": "29bcb30cdd1e87b1705f2b49f629410b"
  },
  {
    "url": "assets/js/17.3f822d1d.js",
    "revision": "c2aefdffdc7ae253a1cc8cda36974c8a"
  },
  {
    "url": "assets/js/18.0345848d.js",
    "revision": "f41c38199d4a57eefaa9251e10b9737d"
  },
  {
    "url": "assets/js/19.185b9e41.js",
    "revision": "1ec190bce3ccc7366d432bd38ecc7e5a"
  },
  {
    "url": "assets/js/2.341844bd.js",
    "revision": "37c94b8735265b38fde984ba8397d5f0"
  },
  {
    "url": "assets/js/20.b60fd4e9.js",
    "revision": "53c9c8f8daf7562e371efbf7383af759"
  },
  {
    "url": "assets/js/21.ae82cc55.js",
    "revision": "6713a03e6b1369012f7866618c1850b1"
  },
  {
    "url": "assets/js/22.2cc0a4fa.js",
    "revision": "b644c44b65e6e7d51b40140001e21fdd"
  },
  {
    "url": "assets/js/23.c5afcb27.js",
    "revision": "aebf9932b1206211a481c28de21271f1"
  },
  {
    "url": "assets/js/24.d8ae7531.js",
    "revision": "33480889c6f9d3f42fe3384c263e0bb8"
  },
  {
    "url": "assets/js/25.074447f9.js",
    "revision": "894828764bf744ffd97b9e6404d57471"
  },
  {
    "url": "assets/js/26.277e10c4.js",
    "revision": "359f6889c563363cc6ad659a850781e5"
  },
  {
    "url": "assets/js/27.bb3b20f1.js",
    "revision": "e796557dce772ca25c2a36aa84fe6209"
  },
  {
    "url": "assets/js/28.459ffdfc.js",
    "revision": "8db54af1d7ded61868bb2d2f1b2b82e8"
  },
  {
    "url": "assets/js/29.ced83de9.js",
    "revision": "26781a734cd2403a0acf39d497fa934e"
  },
  {
    "url": "assets/js/3.b516bb16.js",
    "revision": "b5897ec68eaacd82cca59d988e843fb0"
  },
  {
    "url": "assets/js/30.4c720cbd.js",
    "revision": "2171134dce1334ab833bb81cf89d6177"
  },
  {
    "url": "assets/js/31.939320ae.js",
    "revision": "8e6febcf6d7a488531dc1175000fed72"
  },
  {
    "url": "assets/js/32.8e7ed706.js",
    "revision": "b62c4149556c7c13ee027ee26d84fa76"
  },
  {
    "url": "assets/js/33.a855d016.js",
    "revision": "956373ac1c6d457396b4c5a7f52be996"
  },
  {
    "url": "assets/js/34.e814eae2.js",
    "revision": "f96a9f2619bd7e880bfb638a45612547"
  },
  {
    "url": "assets/js/35.27bc0353.js",
    "revision": "0aff5f5004799122e0029d6e1c8ca7a5"
  },
  {
    "url": "assets/js/36.8393ebc4.js",
    "revision": "c3dd9a9e09f2bbc66accf0869dc2265a"
  },
  {
    "url": "assets/js/37.61693dba.js",
    "revision": "c4cf8317f9c615118753df47bb716433"
  },
  {
    "url": "assets/js/38.aaf0588e.js",
    "revision": "072966da5aeb4ed26aee9940e019c7ab"
  },
  {
    "url": "assets/js/39.d0e8071e.js",
    "revision": "3cd89db80bd7df9ab75d7b2956555103"
  },
  {
    "url": "assets/js/4.1cbfe24c.js",
    "revision": "e80cdd169d660d4a1dd521d87078f4b9"
  },
  {
    "url": "assets/js/40.6673d76f.js",
    "revision": "55d993ef947ae52ce656bdf0cb3811cc"
  },
  {
    "url": "assets/js/41.a6e5f505.js",
    "revision": "dfb698935f51c406d8eb76611243487f"
  },
  {
    "url": "assets/js/42.23f54e5c.js",
    "revision": "9ab88b6a5904998540cb94496c5795a2"
  },
  {
    "url": "assets/js/43.e016fa90.js",
    "revision": "92fb16c5e01c8a4898b2c0e8fb522832"
  },
  {
    "url": "assets/js/5.78cdf434.js",
    "revision": "692fcc4c62a978aba135957e57fe903e"
  },
  {
    "url": "assets/js/6.37eaabdd.js",
    "revision": "7d7eafc9010b101b2865f8306b5e3816"
  },
  {
    "url": "assets/js/7.ed178201.js",
    "revision": "8b8df7773bbaa3b0a7a8f3a3f0515991"
  },
  {
    "url": "assets/js/8.bc692197.js",
    "revision": "f425c0d6d453a73b3a5dcebc2cf5ce6d"
  },
  {
    "url": "assets/js/9.870f8f58.js",
    "revision": "1493e3406507750d4a34fabefbd31b94"
  },
  {
    "url": "assets/js/app.91b3da41.js",
    "revision": "4493fb4b9d3fdb2cb420dbe8e2a17cbb"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "8a2b67b8c17e78f456cf4699f5271767"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "92b83a517ddd6322b072d74d3df73567"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "c54d147f78e2fb65b8e36334cc3c98f7"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "7d274481cf25965fe65569cbb3db72a4"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "26d2c93bcbd387d291667cecfc0dd88c"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "7d84059fad86bb819a589ff35fda396a"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "1fa161fd470db411ce97db32a8acf06c"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "f772804d6a97d313f1220e04c89a7dc5"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "3b8e05728deaf6ec3b69be4af7e39ad1"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "343adadb7b683050f78babac49703291"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "1a048d22e63ad6673537a97e2bcc2ae6"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "e4f9d34ad769bf0c621a32a9edcd9cd2"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "f8f1f177db9b467330e54059162f0bfe"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "282802cf9e7c2261363970d003fb9abe"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "edfe128126397df3a1ee1686bae296d6"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "0bb796a39460a51a018cc3d0cd0a7b8c"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "f3eb7a16f688996ea99c66c14d937019"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "c5867842f275b50a1ed6a1177950c6bc"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "cbcbf3fd0d7b244aadf02b302aebe75a"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "08fddace3decc8fa0bf13c366723cfb9"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "52df2831bd3ffb912a10f21bb90d750a"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "8fb3629c5c61cc044c867be616bdb9a2"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "bec912f73dbdd764932b63b6a8c3d6a4"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "6b188915de6cc23e44caaba8d85b6293"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "652b6d98cfe2754cfc1ea57f4690d7c3"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "75882401e34cf96b6ba59a9ff9001fa6"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "2f6c0e9d1ce26fd2a7e2902e4a21844e"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "ba1d24a5e27245be83c8c6ea3b11fe76"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "7c3b6ff3d4e3d56d8732c2c9837396aa"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "529af948ef7829bcbe8a2ec899ae3264"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "ee5689bcd4c0e8e059e8c96f74211901"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "fb72e43f5ae924d1246b71129c977581"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "35528e24ab21695cb1acc421d29c8b82"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "ddd768975670d242e9b003abb09d2def"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "e0ef92591c84f514d3fb380bb92cf691"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "cf869b08bf0958bbd64048ada1eceb0d"
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
