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
    "revision": "1c3e774ac29e58baa96dbe7e735b521c"
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
    "url": "assets/js/app.74e71447.js",
    "revision": "126a64f173d8b58b6b4f710d1dc94ffa"
  },
  {
    "url": "easy/binarySearch.html",
    "revision": "db39a4f24caec928e8cf4a65d4dade00"
  },
  {
    "url": "easy/distributeCandies.html",
    "revision": "5db721032c7ba8373635f0c31c108afe"
  },
  {
    "url": "easy/findContentChildren.html",
    "revision": "851f64859f9b0c0acb9d87c010aebbe5"
  },
  {
    "url": "easy/isSymmetric.html",
    "revision": "b88ef6d6322834cb3f582b1e5992c904"
  },
  {
    "url": "easy/reverse.html",
    "revision": "e599002537f9059186edce511b8ab245"
  },
  {
    "url": "easy/searchInsert.html",
    "revision": "fad68fcfe227ec9eb31ff9bb7bd56d6f"
  },
  {
    "url": "easy/twoSum.html",
    "revision": "77c6ac184e52bfebf6b41ad5a8ca8a70"
  },
  {
    "url": "hard/findMedianSortedArrays.html",
    "revision": "90d23a8f6dc72e577a41988c47975803"
  },
  {
    "url": "hard/firstMissingPositive.html",
    "revision": "605a69679d4df00b796165102b30e580"
  },
  {
    "url": "hard/minWindow.html",
    "revision": "89bb12e0e945f2bdbacd50969052458a"
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
    "revision": "937b9fd5c6f48edc3dd4e70985c133d5"
  },
  {
    "url": "middle/addTwoNumbers.html",
    "revision": "4e19c50ff063a9268ce4c0c79d537349"
  },
  {
    "url": "middle/combine.html",
    "revision": "44522fa02003eb7aa50ff94558a52625"
  },
  {
    "url": "middle/findMinArrowShots.html",
    "revision": "66337472fe8f17f88b6f41ff728c0e7b"
  },
  {
    "url": "middle/generateParenthesis.html",
    "revision": "1c0e0cb1fbf567517cff040a313e31ef"
  },
  {
    "url": "middle/lengthOfLongestSubstring.html",
    "revision": "ca8175557aaa55ac3d5520f965a3797c"
  },
  {
    "url": "middle/numFactoredBinaryTrees.html",
    "revision": "ad5c447d04d4e5134c1914587241cb90"
  },
  {
    "url": "middle/pow.html",
    "revision": "2cdd02c70fb490bff5d2557b15717407"
  },
  {
    "url": "middle/threeSum.html",
    "revision": "81d410c6a094e471d38daed24433c1cf"
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
