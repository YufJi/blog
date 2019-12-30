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
    "revision": "a28fec4b9e769dbd63616e638f66b44d"
  },
  {
    "url": "assets/css/0.styles.97723510.css",
    "revision": "73381b39b70976880c830582c3ea6537"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e460dd9c.js",
    "revision": "745215568b2013bff2d3425cc974670e"
  },
  {
    "url": "assets/js/11.09a513e1.js",
    "revision": "522f7af9a04266b78f18bcf6b7954f1a"
  },
  {
    "url": "assets/js/12.66c19975.js",
    "revision": "046018b8cc3443c8c9ba4dd743f76c6d"
  },
  {
    "url": "assets/js/13.9f159cd7.js",
    "revision": "0b1086257a077619b88e5d9ae9fd3f7e"
  },
  {
    "url": "assets/js/14.b1df2884.js",
    "revision": "d04d7f1aeafc5be9fca5acd52a1dfc7b"
  },
  {
    "url": "assets/js/15.514cef4c.js",
    "revision": "1018d5d2b0a1870df606588ac62efb7b"
  },
  {
    "url": "assets/js/16.a3b137ad.js",
    "revision": "643ae8ae307cef37274f5b51b0f73eda"
  },
  {
    "url": "assets/js/17.cb246ed7.js",
    "revision": "9aef889257657ae089bbf02d80e6c4d9"
  },
  {
    "url": "assets/js/18.7d775f30.js",
    "revision": "c93e1e0077b34a676878658e2fcc6b0e"
  },
  {
    "url": "assets/js/19.4fb66411.js",
    "revision": "6204c6dd0087cb8dd3f0b17c4f932735"
  },
  {
    "url": "assets/js/2.ca7eb0ac.js",
    "revision": "72d50edf78f6fe9d5f7e51bc6d2359f8"
  },
  {
    "url": "assets/js/20.a6df5ce1.js",
    "revision": "827aafaf2912287e39a0c5ed0e6fe55a"
  },
  {
    "url": "assets/js/21.518d7292.js",
    "revision": "79a9ac0f2c8b01ad7ce02d77d448dfd1"
  },
  {
    "url": "assets/js/22.fdc54c63.js",
    "revision": "f1341f17d2383578f49828b46666f5e8"
  },
  {
    "url": "assets/js/23.8ad4ff2e.js",
    "revision": "5be25b659a6e7718c0ff3e388f24d13f"
  },
  {
    "url": "assets/js/24.9f8ff4e9.js",
    "revision": "7028d2c1074524327662fc8ed0d9f13b"
  },
  {
    "url": "assets/js/3.a7c5f8f2.js",
    "revision": "d3e358516cae7b5a33e9271c149eab0e"
  },
  {
    "url": "assets/js/4.7cbaf6ab.js",
    "revision": "48f129e2ca69ca57272469e3e9cf477f"
  },
  {
    "url": "assets/js/5.9fc44ebe.js",
    "revision": "e8013577baf32b21c1fbf9d2298d6ce9"
  },
  {
    "url": "assets/js/6.51bd86b7.js",
    "revision": "728aac0f86706b172abdf41133c44702"
  },
  {
    "url": "assets/js/7.4b7a6ff9.js",
    "revision": "0bb2e54157cc573a571e45127be6743d"
  },
  {
    "url": "assets/js/8.d91730d2.js",
    "revision": "eec1aa01d881add4bf187a7bdb9cfea1"
  },
  {
    "url": "assets/js/9.e91dacf6.js",
    "revision": "5df806cf4d4483976470ec855ea0dcbf"
  },
  {
    "url": "assets/js/app.b9d11cca.js",
    "revision": "68c8c7077cd55f7f068379e5dde667bc"
  },
  {
    "url": "easy/binarySearch.html",
    "revision": "c73d2ac1252827df96a9b39a909d01c6"
  },
  {
    "url": "easy/distributeCandies.html",
    "revision": "7c8951b9235bde0dcf4ab1c887afdc70"
  },
  {
    "url": "easy/findContentChildren.html",
    "revision": "7812426c4062e348e8e3a60692ac9c3e"
  },
  {
    "url": "easy/isSymmetric.html",
    "revision": "f7739e530be0f59538c4fcf6f2ce6181"
  },
  {
    "url": "easy/reverse.html",
    "revision": "8004dfbd67e8947b0e2390a9f69303bc"
  },
  {
    "url": "easy/searchInsert.html",
    "revision": "df1aa9bc76e3380c27fde2adfa7d4792"
  },
  {
    "url": "easy/twoSum.html",
    "revision": "fcd35a61bc4e9778a4f46308dbf53ca7"
  },
  {
    "url": "hard/findMedianSortedArrays.html",
    "revision": "e4c38ff170de0fe2a3a59252cd0398ea"
  },
  {
    "url": "hard/firstMissingPositive.html",
    "revision": "02c5856d4355c55cea1d826a132a6aa9"
  },
  {
    "url": "hard/minWindow.html",
    "revision": "1aec1f90a5bc48ade5001a649381cf00"
  },
  {
    "url": "icons/logo.jpeg",
    "revision": "d655d97f00753dc878a8f2199de812b3"
  },
  {
    "url": "index.html",
    "revision": "5eb9a0c012c77ea9ad048b214f71d09c"
  },
  {
    "url": "middle/addTwoNumbers.html",
    "revision": "e49c3f088d6d48df92641816b49c89d2"
  },
  {
    "url": "middle/combine.html",
    "revision": "62365a44b5c5f291e0f7418699f050bf"
  },
  {
    "url": "middle/findMinArrowShots.html",
    "revision": "01b9f395b6e5e7defe18ffea7d149200"
  },
  {
    "url": "middle/generateParenthesis.html",
    "revision": "c5bd97fe347ea6d74f9ab0ee2ae8bba1"
  },
  {
    "url": "middle/lengthOfLongestSubstring.html",
    "revision": "6b5a8801f132a2779ea83044a5bb62b4"
  },
  {
    "url": "middle/numFactoredBinaryTrees.html",
    "revision": "fcdabd333dec9915ef72510deaa12c60"
  },
  {
    "url": "middle/pow.html",
    "revision": "f51ff207cd43e3e2cb4b18963d197c5b"
  },
  {
    "url": "middle/threeSum.html",
    "revision": "7dad969b65a226a1c61fc02407c65623"
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
