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
    "revision": "c9464e7f7dd32e6257a856f005276c9f"
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
    "url": "assets/js/app.fdb9352c.js",
    "revision": "fc99a630e8ed8c1c427ced8b2d78c2ce"
  },
  {
    "url": "easy/binarySearch.html",
    "revision": "3bbf0d38a936cc3b505212e8125a981d"
  },
  {
    "url": "easy/distributeCandies.html",
    "revision": "7d8989f8973cd95ad30f8c147703266d"
  },
  {
    "url": "easy/findContentChildren.html",
    "revision": "d5e40166a1a717fe926cf89bcbe5b538"
  },
  {
    "url": "easy/isSymmetric.html",
    "revision": "52099473f771690af508c6f529d6f135"
  },
  {
    "url": "easy/reverse.html",
    "revision": "046b1c2b13dfbf9686ff0cb53be67fcd"
  },
  {
    "url": "easy/searchInsert.html",
    "revision": "fa1393f5f8d8e3deb829d4c6b7490809"
  },
  {
    "url": "easy/twoSum.html",
    "revision": "5bbbac6ca78149b612f940d2d24ed6c4"
  },
  {
    "url": "hard/findMedianSortedArrays.html",
    "revision": "e851d4965d1a8bce9589eb4d0cf47649"
  },
  {
    "url": "hard/firstMissingPositive.html",
    "revision": "1468e8b4b7058eee4e1a02eb002bb4da"
  },
  {
    "url": "hard/minWindow.html",
    "revision": "a27fd763043bdae4ba5e570ff29dcb64"
  },
  {
    "url": "icons/logo.jpeg",
    "revision": "d655d97f00753dc878a8f2199de812b3"
  },
  {
    "url": "index.html",
    "revision": "fc9365b8cfa2ff37245e9e9160767b9e"
  },
  {
    "url": "middle/addTwoNumbers.html",
    "revision": "ce9e07e1eb352141bd3d880b54890bf0"
  },
  {
    "url": "middle/combine.html",
    "revision": "bf2d93b92a9a69a053d3338a45d8b88f"
  },
  {
    "url": "middle/findMinArrowShots.html",
    "revision": "4e763ab25a784d7bc66fb49e9b3281af"
  },
  {
    "url": "middle/generateParenthesis.html",
    "revision": "cdf33c4686abe40e9accf38ee110a669"
  },
  {
    "url": "middle/lengthOfLongestSubstring.html",
    "revision": "41d962b3f3d9f1370a585354bd48a65b"
  },
  {
    "url": "middle/numFactoredBinaryTrees.html",
    "revision": "88892246b6d7ec602185808893372e69"
  },
  {
    "url": "middle/pow.html",
    "revision": "c1ed64176410eff633eda76c1b00470d"
  },
  {
    "url": "middle/threeSum.html",
    "revision": "33ffe90db6ce2e6e7fba03f34c24e482"
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
