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
    "revision": "354ae6a402e99a939df418d67c0a905b"
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
    "url": "assets/js/16.1c9348ef.js",
    "revision": "029454cb5c91bd6199369a8d69fb94f3"
  },
  {
    "url": "assets/js/17.3a83a8f7.js",
    "revision": "edf42cb04faeb548d65d6b1320097a1d"
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
    "url": "assets/js/app.cc4b70b0.js",
    "revision": "83271dbfaa267799364e721ca90aa6f6"
  },
  {
    "url": "easy/binarySearch.html",
    "revision": "56ed8d42092ae212f30fdd4f57eeb440"
  },
  {
    "url": "easy/distributeCandies.html",
    "revision": "ff4a59cb73860c4297e6aa587fbe87eb"
  },
  {
    "url": "easy/findContentChildren.html",
    "revision": "19335c4c52af1bc488e419e166d3d78e"
  },
  {
    "url": "easy/isSymmetric.html",
    "revision": "dcf390af4984b9006e3b2d4a41695738"
  },
  {
    "url": "easy/reverse.html",
    "revision": "ae460e21ebe0fb5944992bff5bee35bb"
  },
  {
    "url": "easy/searchInsert.html",
    "revision": "c3f7dbf94c5bcb921f43a272be235b7e"
  },
  {
    "url": "easy/twoSum.html",
    "revision": "a14c00c51dd4f508310d3738f3d58a97"
  },
  {
    "url": "hard/findMedianSortedArrays.html",
    "revision": "1a516f4bda0e07e39a2ea2e1f3885faa"
  },
  {
    "url": "hard/firstMissingPositive.html",
    "revision": "e1d7a3563576cf32cec4c497cc904ea9"
  },
  {
    "url": "hard/minWindow.html",
    "revision": "03e5688a3aa3a2ea0ae335bfe59d68f3"
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
    "revision": "b0a303bb68c4af1979008ae0dc69b305"
  },
  {
    "url": "middle/addTwoNumbers.html",
    "revision": "15f1a202262311ceab38810e61ef5a51"
  },
  {
    "url": "middle/combine.html",
    "revision": "7f975edee646210bd9bd5648529821d6"
  },
  {
    "url": "middle/findMinArrowShots.html",
    "revision": "4d286b94c3913dbc7dc312b22f59bb1a"
  },
  {
    "url": "middle/generateParenthesis.html",
    "revision": "27659ec4ff3f9c2e21bbf6eb930c53d7"
  },
  {
    "url": "middle/lengthOfLongestSubstring.html",
    "revision": "adb2743e9d9fb8ff5811005267cf96ce"
  },
  {
    "url": "middle/numFactoredBinaryTrees.html",
    "revision": "d47ad54bf571ba0a7642e7187480d3bf"
  },
  {
    "url": "middle/pow.html",
    "revision": "8c1af48272c940a4bd7f225e81af2835"
  },
  {
    "url": "middle/threeSum.html",
    "revision": "d8113958b80b359fc1436b0f74f8df63"
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
