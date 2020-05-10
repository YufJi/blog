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
    "revision": "81e6ed8a519fd0a3881d8c33181f6172"
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
    "url": "assets/js/10.293ddbd8.js",
    "revision": "0607704d02e9ee9ae33293e957a0ea40"
  },
  {
    "url": "assets/js/11.d6e9ace1.js",
    "revision": "1d0fc377a4d111627d3360f4c89effa5"
  },
  {
    "url": "assets/js/12.f0af8467.js",
    "revision": "3d1d2098e9c572db5dbb8da6870fb22c"
  },
  {
    "url": "assets/js/13.a1ea80a3.js",
    "revision": "663cce8b672d840c7df0a9d2ea9be8b8"
  },
  {
    "url": "assets/js/14.9071fa34.js",
    "revision": "d7897708c74b92e603255bffb58c4d29"
  },
  {
    "url": "assets/js/15.eca1cd30.js",
    "revision": "3eefd3302ec304b5a35e643d4d0e74fc"
  },
  {
    "url": "assets/js/16.f12759b0.js",
    "revision": "e23d8752c96c03c297638ac948ffe489"
  },
  {
    "url": "assets/js/17.1b8ea7b6.js",
    "revision": "d430fb671e21b4988b88de2feb5b762a"
  },
  {
    "url": "assets/js/18.542abf3b.js",
    "revision": "8e859ab4a63c2e4e41c902e2e11f2409"
  },
  {
    "url": "assets/js/19.dfbee78c.js",
    "revision": "e02aba98b29b24fb0957aba2f3e7385f"
  },
  {
    "url": "assets/js/2.43f9139c.js",
    "revision": "9e0ba0c797173fdc9d2d18cf0372d8be"
  },
  {
    "url": "assets/js/20.4c17b1f9.js",
    "revision": "8a09c8005198e06ae529abda50e1bd53"
  },
  {
    "url": "assets/js/21.df558afd.js",
    "revision": "6ee8f1c12b393c7da729060a87e5da07"
  },
  {
    "url": "assets/js/22.47a72b81.js",
    "revision": "c3ae9a61e1484bae31bbb085daf58054"
  },
  {
    "url": "assets/js/23.3926a502.js",
    "revision": "d9e612d0ffeff33213b5104a958d2024"
  },
  {
    "url": "assets/js/24.1170c2da.js",
    "revision": "0352fb37c35da32f9a752ae4e06dabc3"
  },
  {
    "url": "assets/js/25.0057d315.js",
    "revision": "52cbeb2bcb096a889011574975b08362"
  },
  {
    "url": "assets/js/26.164389a8.js",
    "revision": "f0b38a6b64c1164b10a0582df981946a"
  },
  {
    "url": "assets/js/27.b1b54e87.js",
    "revision": "8473bdbb47b2b50ce3dab2c5d4a81171"
  },
  {
    "url": "assets/js/28.97836885.js",
    "revision": "994c8f07a6d01efb17abcfd4bbb697f1"
  },
  {
    "url": "assets/js/29.bd31541b.js",
    "revision": "dd378d95c22be0e15ff9e7b2784f3d96"
  },
  {
    "url": "assets/js/3.91f58b24.js",
    "revision": "391360cbf91b19674d3565f0d198e1b7"
  },
  {
    "url": "assets/js/30.29d09057.js",
    "revision": "87b09501e032e19ccd9a57a2829c9d57"
  },
  {
    "url": "assets/js/31.757af8f4.js",
    "revision": "01a6530391b3ea583a58bde39d8185bb"
  },
  {
    "url": "assets/js/32.8c9b6d1b.js",
    "revision": "42054c84b937178b2b14883b2bebfd97"
  },
  {
    "url": "assets/js/33.59fa42c3.js",
    "revision": "4efd3669ff1f4ba68bf2b9b9e4930fb3"
  },
  {
    "url": "assets/js/34.dfba364c.js",
    "revision": "56c54d1bed82139a1beb2951f8e0806d"
  },
  {
    "url": "assets/js/35.e753aa49.js",
    "revision": "40e6ae4499ed113ea6b78352f9a4b494"
  },
  {
    "url": "assets/js/36.680f62b6.js",
    "revision": "2e27300e8da7b0d8bcae43e58e94ca1a"
  },
  {
    "url": "assets/js/37.b1ec3f8e.js",
    "revision": "5950ac842e3b1bda60c244a269456b38"
  },
  {
    "url": "assets/js/38.01a5b710.js",
    "revision": "0e925202114c3aeede81bdb32741f278"
  },
  {
    "url": "assets/js/39.1b9ec170.js",
    "revision": "e92fa999f9c450273dcc417d95671a8e"
  },
  {
    "url": "assets/js/4.10a37049.js",
    "revision": "178999a4d5e8f53576ef8365784724d9"
  },
  {
    "url": "assets/js/40.34bd233b.js",
    "revision": "384289b44f0ebf149cf5790c3fe3f679"
  },
  {
    "url": "assets/js/5.aa5a4c8a.js",
    "revision": "66baf6a4ce06041c1e88056812c9ce89"
  },
  {
    "url": "assets/js/6.deb4e7a3.js",
    "revision": "63b2a99b8b75b06bd3a468f7e84f8358"
  },
  {
    "url": "assets/js/7.87e59111.js",
    "revision": "99744fe3b6fe8df3396e09a4f15313ce"
  },
  {
    "url": "assets/js/8.79af98b5.js",
    "revision": "c3319c47bf551108078a079a113b85ba"
  },
  {
    "url": "assets/js/9.5e3b960b.js",
    "revision": "b65678fad4f62f76a3bdf4c3c23cfe0b"
  },
  {
    "url": "assets/js/app.0523c54b.js",
    "revision": "9e3e130fba2d5cc86615001debdf8df7"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "28652d554cf6aaf8f398f97cd5dd104f"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "04ad7921bab8420f086d4db1ad0747bb"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "1fff4d26804841d3d663c938dbddae2e"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "005ade1c33e4e12ed665a18fa7905e87"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "c6cf71fab45600e9011196b1946b950a"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "8c05075a72780d58421dafea82a34ab7"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "c0a0a2a54153cb91ea86eaff61d8952e"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "32aa1a5d1b24dbcde161bc81039feb0f"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "ea90ebffbb4453a61b9ef23a2d3dc41f"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "047b5ad2c8efa4b298fe1f435deb112a"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "d32222f25ce31f3ff3821a3c0d8d89e4"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "980d0ed25acb4fd9442356e56fcc25de"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "48c03ff1bc265279f5246608c3f36bf4"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "080b98ab20c1ce3985ab30b1e10523e3"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "c461ea0d5248a274e59d56c57b91bce3"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "7092499817b675d9642ef6167ceff9e4"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "c4cc394f37ecc551566c7a69aed1dd3e"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "04779d016dc4a719a403bc76b351cc5f"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "9089b9f8895bbfaadcd7e4974cec2605"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "36ec6e24f827d28575216ba69c1f6791"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "2fd4894a5a3672f6a9f471a5ef07603d"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "2d5b5d4b415d06ca93a9715b06a587b0"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "b9e43db120b364f8aa8f3da591ec8a6c"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "1865c61ee78ac7758f3b2a1b35485511"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "9269e0562db545b79c4d62a9a685ad78"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "1854f7cbc9f096d48aababfffb2d650d"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "e9b1d8a24edd67f6ccbdb81f97510886"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "729eb8054939ec12d06f8c4251a3c9b4"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "17f8c0377b83097a72eb687735a1e098"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "56d5c58c3c7bd01632307ad7cf7e3581"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "da252943a9b00c92d71efbed02f82d4b"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "232041f3bc35a636897902cfda18a2fa"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "c0bcc668743fdbdc0bbc27a39a2917d7"
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
