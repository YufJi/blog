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
    "revision": "cbe3151fad85953892c29f755a3b8781"
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
    "url": "assets/js/7.ade794b2.js",
    "revision": "92a27bdffc2727f42fd7d7a58db07367"
  },
  {
    "url": "assets/js/8.6091cafe.js",
    "revision": "19be9a9b811324dbb6e81475ea72ae29"
  },
  {
    "url": "assets/js/9.e91dacf6.js",
    "revision": "5df806cf4d4483976470ec855ea0dcbf"
  },
  {
    "url": "assets/js/app.b15c694b.js",
    "revision": "95ea3f3db79b2d686b431f8327cd1971"
  },
  {
    "url": "easy/binarySearch.html",
    "revision": "6fc134f318bd29f65d6cb3c0eb50723c"
  },
  {
    "url": "easy/distributeCandies.html",
    "revision": "f86f334e79f5a5f2a1b763970292aa27"
  },
  {
    "url": "easy/findContentChildren.html",
    "revision": "fc7bbae9f3e4f0f1e1cb3182a4217829"
  },
  {
    "url": "easy/isSymmetric.html",
    "revision": "dfa97dcc4b0e75933eb789444192ad84"
  },
  {
    "url": "easy/reverse.html",
    "revision": "b1db6846b8d3d53a65528efcda66b56a"
  },
  {
    "url": "easy/searchInsert.html",
    "revision": "08a014a598e7c3aee7a2570cecd7e061"
  },
  {
    "url": "easy/twoSum.html",
    "revision": "1f74f7151646961e852256f7879b0214"
  },
  {
    "url": "hard/findMedianSortedArrays.html",
    "revision": "95fc98efcf7b71893c3fb2960b73dc8f"
  },
  {
    "url": "hard/firstMissingPositive.html",
    "revision": "f34000e4420d870b222716c7bc22fbc6"
  },
  {
    "url": "hard/minWindow.html",
    "revision": "764dd3298a13bb991a2db7260e7cab28"
  },
  {
    "url": "icons/logo.jpeg",
    "revision": "d655d97f00753dc878a8f2199de812b3"
  },
  {
    "url": "index.html",
    "revision": "05e1c0e1692066d7f06d3466c384520a"
  },
  {
    "url": "middle/addTwoNumbers.html",
    "revision": "b3b9ddbad22e7bab26ddbd628b494cff"
  },
  {
    "url": "middle/combine.html",
    "revision": "bc40d1c701b73af00de4f5901b3ac9c4"
  },
  {
    "url": "middle/findMinArrowShots.html",
    "revision": "6aec1793d4bd4b114a3dbef90d74305b"
  },
  {
    "url": "middle/generateParenthesis.html",
    "revision": "84371699eb0d1b900535f9e426b91010"
  },
  {
    "url": "middle/lengthOfLongestSubstring.html",
    "revision": "43c9f13faf9833ae6653d4e828077d55"
  },
  {
    "url": "middle/numFactoredBinaryTrees.html",
    "revision": "07e08fb7b6bf10c68bfbd14562e28d85"
  },
  {
    "url": "middle/pow.html",
    "revision": "4b267129a23567931103da806ca7f10f"
  },
  {
    "url": "middle/threeSum.html",
    "revision": "108ca846e67d7cc8412570258ed57619"
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
