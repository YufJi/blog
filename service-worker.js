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
    "revision": "363a37dbf6ad37614c328c98fa76dc35"
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
    "url": "assets/js/17.ae2b0703.js",
    "revision": "82baa9fc24fa3d615f4faa1c3bdc1084"
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
    "url": "assets/js/app.4eca12ca.js",
    "revision": "68d0f0ce1610275c8da1b56f72f4d6f2"
  },
  {
    "url": "easy/binarySearch.html",
    "revision": "27c66f4fff01a5c2b2197d8844c2f60d"
  },
  {
    "url": "easy/distributeCandies.html",
    "revision": "1598c422b5d24939a693fa4ea1ce1d87"
  },
  {
    "url": "easy/findContentChildren.html",
    "revision": "0e1a4878715eda119d534fc173cbc6eb"
  },
  {
    "url": "easy/isSymmetric.html",
    "revision": "50eceb2c4edffa1f034b41ff197fac29"
  },
  {
    "url": "easy/reverse.html",
    "revision": "44308f6d3f9fb597d2a794354e471214"
  },
  {
    "url": "easy/searchInsert.html",
    "revision": "3a9884c00c726c8dfd09c5771cdfac39"
  },
  {
    "url": "easy/twoSum.html",
    "revision": "8e16e817b7559c5737f0810464e8f5d6"
  },
  {
    "url": "hard/findMedianSortedArrays.html",
    "revision": "ff954c015afbe0fb4fb68eff70c8bd85"
  },
  {
    "url": "hard/firstMissingPositive.html",
    "revision": "e997cca8813277f0212f5f86a856ad03"
  },
  {
    "url": "hard/minWindow.html",
    "revision": "3003f9d21138b77755c6d87a2cd7c32f"
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
    "revision": "19dc4c859feff0160a4b61b3a2e8ea87"
  },
  {
    "url": "middle/addTwoNumbers.html",
    "revision": "ed741c6d0b63bd902e086be58e06c48a"
  },
  {
    "url": "middle/carPooling.html",
    "revision": "9c1325dece27c41c2f5da7b671c90cdb"
  },
  {
    "url": "middle/combine.html",
    "revision": "e9f818564ccc2d6b3b2890ab25c6f365"
  },
  {
    "url": "middle/findMinArrowShots.html",
    "revision": "f5b49cb985e241391a9a30260eb066b0"
  },
  {
    "url": "middle/generateParenthesis.html",
    "revision": "a613cc99728dc124922187fe5190a0ca"
  },
  {
    "url": "middle/lengthOfLongestSubstring.html",
    "revision": "a7de2538d8b51ddf77214d3433bae108"
  },
  {
    "url": "middle/numFactoredBinaryTrees.html",
    "revision": "03dc48354857f657adbad4589ecaa836"
  },
  {
    "url": "middle/pow.html",
    "revision": "48cdeb1b0cec5cdec2e0b36c906c014d"
  },
  {
    "url": "middle/threeSum.html",
    "revision": "5376863076be8e31413e050b002d4abc"
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
