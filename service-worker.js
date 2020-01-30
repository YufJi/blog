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
    "revision": "230f40492d92380c618211d821bae0a9"
  },
  {
    "url": "assets/css/0.styles.97723510.css",
    "revision": "73381b39b70976880c830582c3ea6537"
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
    "url": "assets/js/10.62c35db3.js",
    "revision": "4de2a71343e43751206546fbf791d059"
  },
  {
    "url": "assets/js/11.9f8baff1.js",
    "revision": "8f0397abf1677355ba0503a3f459fca7"
  },
  {
    "url": "assets/js/12.1c3ee7db.js",
    "revision": "659ae5e92458a2a7f894dc5df31f6909"
  },
  {
    "url": "assets/js/13.6aef3a33.js",
    "revision": "c4e226e8f85f865ba4286f19aa1b65d7"
  },
  {
    "url": "assets/js/14.6b8f793a.js",
    "revision": "73756e4f6051763c0783db9189540352"
  },
  {
    "url": "assets/js/15.2209412a.js",
    "revision": "c23c5d2c041a6e6a45f6de6651e74979"
  },
  {
    "url": "assets/js/16.379980d4.js",
    "revision": "e6b3e547a8d641ff1e9e67e8d91c1f1f"
  },
  {
    "url": "assets/js/17.5003681f.js",
    "revision": "c4eb1207cd11a11fafd6bdd8cc1fbee6"
  },
  {
    "url": "assets/js/18.434c664e.js",
    "revision": "6a0ec8ac370ec5ce14d3cf4c14be98ee"
  },
  {
    "url": "assets/js/19.5d20ec78.js",
    "revision": "26c5c74de6b313c904a7bac32935411f"
  },
  {
    "url": "assets/js/2.ec312a92.js",
    "revision": "87cbac00447044a4b7fcc61edf4e2ccb"
  },
  {
    "url": "assets/js/20.055f15b3.js",
    "revision": "307f6174ef5068559cd0c00018ea938c"
  },
  {
    "url": "assets/js/21.c2ae0c91.js",
    "revision": "f442f6b565ac8f699419ee179af48e3c"
  },
  {
    "url": "assets/js/22.bc018b08.js",
    "revision": "276f4f65350d9b019610d95968f9b54f"
  },
  {
    "url": "assets/js/23.67862268.js",
    "revision": "59a34b38b6dc09c4424947a59aeee807"
  },
  {
    "url": "assets/js/24.1f4582fc.js",
    "revision": "ff234eb81c135ee86652484835d37ec7"
  },
  {
    "url": "assets/js/25.9c465e7d.js",
    "revision": "438e2121ff100d24a4585542da398e07"
  },
  {
    "url": "assets/js/26.82214bb3.js",
    "revision": "f0567a7a0cb59bcdcf0de3bc2c2f2000"
  },
  {
    "url": "assets/js/27.eb47a1b3.js",
    "revision": "11c1763c6b7081be96d4e548389576c7"
  },
  {
    "url": "assets/js/28.9ff1e0e1.js",
    "revision": "b68c20431ef46113eb507de3e521e1e1"
  },
  {
    "url": "assets/js/29.d7372ad1.js",
    "revision": "feea0abea200b9a1aa7f8ce9b5e880c5"
  },
  {
    "url": "assets/js/3.c659dae2.js",
    "revision": "0ef532500d68ae4f3f90b540b2d18ca1"
  },
  {
    "url": "assets/js/30.132135a5.js",
    "revision": "4b05aea085a7bd44d89e324e79f02263"
  },
  {
    "url": "assets/js/4.0f73fac0.js",
    "revision": "01efa4d3db4b399f871d12103386eb20"
  },
  {
    "url": "assets/js/5.ef3ad413.js",
    "revision": "09aa075655caf8f829d7a222b8fb732b"
  },
  {
    "url": "assets/js/6.6a1f417f.js",
    "revision": "db688c5e940bee94ff08f7a70c71489d"
  },
  {
    "url": "assets/js/7.e1e59c60.js",
    "revision": "92b8f6c7a50fc0ebe1ed8bc5575d6bd8"
  },
  {
    "url": "assets/js/8.c17e74b9.js",
    "revision": "474ec52cbac05c463765f4f35c44eda2"
  },
  {
    "url": "assets/js/9.97c094a0.js",
    "revision": "ca17b8f33dfe7c5a37c4bb7f090aec3e"
  },
  {
    "url": "assets/js/app.f90fbd44.js",
    "revision": "0882a7f57d93ddb042d82f95a17595cd"
  },
  {
    "url": "icons/fruits.svg",
    "revision": "205e9855aa0f73d44f63582942cfed5c"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "a1662259a80caf53d045fc3d6fd393f2"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "bcc602a02319e6cb38caa2cfdb14c3bc"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "bbd90ad137577b3bb0acbdb8383b8219"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "1dc8b6a4b946eb06891a1f81be49cb31"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "2831417c74d97cb1dcbe1a8ffeb0fcf5"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "d9718e25358af0d2ef5b760bb3108b46"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "79014b94eb7566944b54a0e35de61306"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "6bb7384725cf8de76a3e6c0691b2cf6a"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "5a60b4e92ab16bd3c38f73fc03a008b5"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "ea610937d80ae1e4e09005b3b94c8645"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "f943bfc83b9c8ee486f5fae924566f06"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "61511ac3094b0811bce973b64f6f1dea"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "8507de443c22650560b8be079f9f1053"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "6568e7e097849e8f14dddb1175aff8cd"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "59ba6293f8e7e55608aed1d976a82447"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "0c7428fb507ff515100ec9e099d4a581"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "29f53bc640c23e7678cfbc9cdcb9ceb0"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "7eb68948977812e2262c0212f9a1865c"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "ee3e4b688bcd8e4d6ffdbe2110ebe10c"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "6b4e64bfdc39ff8235b6e6bdea03f396"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "27aa4d15ca4db34f54a3ad4615e25992"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "8da354dfb71a89d70cb919a7673218c1"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "b1c94a007d322be9e2c21a1a6f55b185"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "fb3a7e511922218232ccc85c2f2d81ea"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "d8f20c08bc8f10805170b024d20069ae"
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
