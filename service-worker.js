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
    "revision": "467ed07905304218e2d300aea3fba6ad"
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
    "url": "assets/js/12.ad57c9bc.js",
    "revision": "ec5a7e37d994e6d2586ce93633617c1a"
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
    "url": "assets/js/17.4d814b46.js",
    "revision": "9685518305e21988f10853f32d086524"
  },
  {
    "url": "assets/js/18.e7776602.js",
    "revision": "23273def4cf8a25663951472a45375b0"
  },
  {
    "url": "assets/js/19.ffd1e227.js",
    "revision": "16897cefb7f2edf78a86c861a168efa9"
  },
  {
    "url": "assets/js/2.ca7eb0ac.js",
    "revision": "72d50edf78f6fe9d5f7e51bc6d2359f8"
  },
  {
    "url": "assets/js/20.87998423.js",
    "revision": "6a5d9441949d2b582de9608bfb349e0e"
  },
  {
    "url": "assets/js/21.95fb5810.js",
    "revision": "3a2bec1db5f0d853e9969cfbceb6a62c"
  },
  {
    "url": "assets/js/22.de2393d5.js",
    "revision": "9c437e99562dfa66b04642820bf92ec9"
  },
  {
    "url": "assets/js/23.8361a8ab.js",
    "revision": "628f4cfece3e41875657b0c4baebae75"
  },
  {
    "url": "assets/js/24.9055ef45.js",
    "revision": "591e9185e0c0e08d47ad06fadb6b30c6"
  },
  {
    "url": "assets/js/25.a92a39b2.js",
    "revision": "6bff6a530cdbbf28bd47cb6ea852403c"
  },
  {
    "url": "assets/js/3.3d6067c9.js",
    "revision": "495d79adfe86b79409b56e644036e34f"
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
    "url": "assets/js/app.9066ec50.js",
    "revision": "58f763507cd268c7dee02a8defe382b7"
  },
  {
    "url": "easy/binarySearch.html",
    "revision": "9295adc5c989b13798869731ce513c5a"
  },
  {
    "url": "easy/distributeCandies.html",
    "revision": "02cd754646e594707ca0247d4a0da9b6"
  },
  {
    "url": "easy/findContentChildren.html",
    "revision": "36f58ca7dfdece691bd3d3e9b945752c"
  },
  {
    "url": "easy/isSymmetric.html",
    "revision": "7c037aa5bdcc3fce47891d9ce00d5361"
  },
  {
    "url": "easy/reverse.html",
    "revision": "423bdebb628d5404a1939894780711a7"
  },
  {
    "url": "easy/searchInsert.html",
    "revision": "3eaa34cd1b33ef2fa15fb12578e281a6"
  },
  {
    "url": "easy/twoSum.html",
    "revision": "ce613f3295bd697f54ca77c89178771d"
  },
  {
    "url": "hard/findMedianSortedArrays.html",
    "revision": "edf23195cea4e8fcce8026d42d0b0227"
  },
  {
    "url": "hard/firstMissingPositive.html",
    "revision": "28c5e7fca3732cbb30749eb3645993be"
  },
  {
    "url": "hard/minWindow.html",
    "revision": "e39580f3a69f161c5936e58a74d580f7"
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
    "revision": "d9e7dd4fe5143bd35ffc6e894101249b"
  },
  {
    "url": "middle/addTwoNumbers.html",
    "revision": "67fd5abd19102343f8481c8bb15a0fcb"
  },
  {
    "url": "middle/carPooling.html",
    "revision": "c7edb18ddfcbf20685ef06db0106ce58"
  },
  {
    "url": "middle/combine.html",
    "revision": "b94e8cf9ecd28f7ccc5bbcedb4ea7244"
  },
  {
    "url": "middle/findMinArrowShots.html",
    "revision": "ebdf6790b428b6bf148b2dfb1f6604ef"
  },
  {
    "url": "middle/generateParenthesis.html",
    "revision": "20d43e2f05e27340f25c6caea2d46d91"
  },
  {
    "url": "middle/lengthOfLongestSubstring.html",
    "revision": "77c94b85a0f77561377efcdf9634b10b"
  },
  {
    "url": "middle/numFactoredBinaryTrees.html",
    "revision": "b874c65841ab2e8cf28d7f8529e3ad2a"
  },
  {
    "url": "middle/pow.html",
    "revision": "ece4264d74d1fcd344dcc073c3f00273"
  },
  {
    "url": "middle/threeSum.html",
    "revision": "e0b742f1f7d96e963ba07c4b1c8475c2"
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
