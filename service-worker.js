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
    "revision": "51b14d9502e107384972c7f4dabc6943"
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
    "url": "assets/js/app.4703de9e.js",
    "revision": "148435ad7811a5f0d197eca319152e42"
  },
  {
    "url": "easy/binarySearch.html",
    "revision": "e0b3d77e74dfabe844a219e66ca36811"
  },
  {
    "url": "easy/distributeCandies.html",
    "revision": "3df9551d1af8ca3d8e64acb6caf47e5b"
  },
  {
    "url": "easy/findContentChildren.html",
    "revision": "7b5c329f3685de622aff467296dbfbea"
  },
  {
    "url": "easy/isSymmetric.html",
    "revision": "69457ffb859b4e67cc60bf1516b1cbd6"
  },
  {
    "url": "easy/reverse.html",
    "revision": "6b4466325eeb41212f332d957eb3fbe4"
  },
  {
    "url": "easy/searchInsert.html",
    "revision": "dd484b273d0f675c25634241d5fcea06"
  },
  {
    "url": "easy/twoSum.html",
    "revision": "dc96d7a1ebf588afc1c1e43a0de273f8"
  },
  {
    "url": "hard/findMedianSortedArrays.html",
    "revision": "74379497783e0de02917649b73601534"
  },
  {
    "url": "hard/firstMissingPositive.html",
    "revision": "2be9810d4548f6b775f7159048c098be"
  },
  {
    "url": "hard/minWindow.html",
    "revision": "3940ac5de03119df91c503c8db81891e"
  },
  {
    "url": "icons/logo.jpeg",
    "revision": "d655d97f00753dc878a8f2199de812b3"
  },
  {
    "url": "index.html",
    "revision": "dc1f7c531f2043337b305131495fee80"
  },
  {
    "url": "middle/addTwoNumbers.html",
    "revision": "9611c32c5659753804c24100ee8eb92f"
  },
  {
    "url": "middle/combine.html",
    "revision": "ea8878a7e83964386fb8df189342c8d3"
  },
  {
    "url": "middle/findMinArrowShots.html",
    "revision": "91bc8ef88fb83c7606eae43732daab42"
  },
  {
    "url": "middle/generateParenthesis.html",
    "revision": "d752409f49290e478d9a14e6840a5041"
  },
  {
    "url": "middle/lengthOfLongestSubstring.html",
    "revision": "7ee2870750a58fa1fced03e2fbedd56b"
  },
  {
    "url": "middle/numFactoredBinaryTrees.html",
    "revision": "9525d621eae8f19bfe6312d8c171abc3"
  },
  {
    "url": "middle/pow.html",
    "revision": "84e13b2d442a49e698c8cfa7bc0521b3"
  },
  {
    "url": "middle/threeSum.html",
    "revision": "84a9172cbb7d3ea361d61da1c25123cf"
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
