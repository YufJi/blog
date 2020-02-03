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
    "revision": "af47e7d2fa6c0a3bf8a81c28fd60720d"
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
    "url": "assets/js/10.662dac2e.js",
    "revision": "0f205f3a62e397d9c75d8cd2356fe51b"
  },
  {
    "url": "assets/js/11.8c8b12b9.js",
    "revision": "bdc632f02cebb58907efdc392aed4c07"
  },
  {
    "url": "assets/js/12.af03604b.js",
    "revision": "4744488728d731191fde67e6d49cdce5"
  },
  {
    "url": "assets/js/13.7cd2e0c9.js",
    "revision": "fb3224a39f6eaca6d896884d581829fd"
  },
  {
    "url": "assets/js/14.e5959ae0.js",
    "revision": "80db68db99d4466f0ceb0f40244908c8"
  },
  {
    "url": "assets/js/15.1d1970c3.js",
    "revision": "4b398b494a47296dca329c9f5d057252"
  },
  {
    "url": "assets/js/16.2a0a531e.js",
    "revision": "b6af647d143870b997d0dc07ae6241cf"
  },
  {
    "url": "assets/js/17.c8223391.js",
    "revision": "508b650854fb2a9025b60082d7f73f7b"
  },
  {
    "url": "assets/js/18.d3fda1c0.js",
    "revision": "34d7fc75619ab899d465438c65585f24"
  },
  {
    "url": "assets/js/19.6da5a50d.js",
    "revision": "00194191da1482c309f2d5d8638ca713"
  },
  {
    "url": "assets/js/2.ec312a92.js",
    "revision": "87cbac00447044a4b7fcc61edf4e2ccb"
  },
  {
    "url": "assets/js/20.66eaa227.js",
    "revision": "a99980fc0a9ef74e98f29f95fc5811af"
  },
  {
    "url": "assets/js/21.057c35ce.js",
    "revision": "ff967a0e0e785c5d62b0f97b278d216b"
  },
  {
    "url": "assets/js/22.4ab21550.js",
    "revision": "59b71e48eac12613cc9dc7cb070b2110"
  },
  {
    "url": "assets/js/23.e98e05e0.js",
    "revision": "9a5ef03de7884eff35ce3a2e49336df8"
  },
  {
    "url": "assets/js/24.7e719987.js",
    "revision": "4f85fa0b3d712642eebb4c5b4515e573"
  },
  {
    "url": "assets/js/25.22657fa3.js",
    "revision": "a043dba96f1d4b127420ea79f6bd6edb"
  },
  {
    "url": "assets/js/26.b3c7f3cf.js",
    "revision": "4f316a8b51ed5f8878da95693f50ba4c"
  },
  {
    "url": "assets/js/27.6dbdf548.js",
    "revision": "c2728b9ddcf122efbe2ecb276de620b7"
  },
  {
    "url": "assets/js/28.1a59dc08.js",
    "revision": "0fbb57cb61c1bdc828dd3c5368a44443"
  },
  {
    "url": "assets/js/29.2050b75c.js",
    "revision": "dc189e7f64e65742edacc47dd1e71900"
  },
  {
    "url": "assets/js/3.e9a8c45b.js",
    "revision": "ccc9d548c67691ee2b4501fc10672627"
  },
  {
    "url": "assets/js/30.1cf9219c.js",
    "revision": "d686889c0577fae872c9f476e57de50b"
  },
  {
    "url": "assets/js/31.aa12698c.js",
    "revision": "c138922ac28285a96a5548ff1369e1a9"
  },
  {
    "url": "assets/js/4.bd865e91.js",
    "revision": "dd794124e7c56f13ebe722334c78cc61"
  },
  {
    "url": "assets/js/5.ba1bce4d.js",
    "revision": "6feb9dff51d19c2f1822c0a0a25fbae4"
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
    "url": "assets/js/8.0dcd98ae.js",
    "revision": "63c1fd381ffd328cffad5572eabd75b4"
  },
  {
    "url": "assets/js/9.1dddb8d4.js",
    "revision": "fe7e74ad7d26f76aecf5660e13a610e8"
  },
  {
    "url": "assets/js/app.653a8fbd.js",
    "revision": "5c067708a801f335c3cdf4b1575c5a02"
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
    "revision": "37afae6c55d29871fa6459c453a679b4"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "021e52b6d76345632e8fbc456485c742"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "d535612656e591d2eb3f2ae0950663d4"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "69b1114c5d85025e40d003fac2ed51ad"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "1783bb46513dda25c8c3594a8798fec8"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "a853d4753028d37e3ff56cee04e43bff"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "7c979eb21f363f2c853254f7c2897459"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "7d94a61dc1632cecf6ab9479b61aa693"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "57e86e84fcfeeb25a4628a4312a9234e"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "5a68ef0171b4555838e2b6386d884a1f"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "48e34a94e0c1b1a8900b98e4548d2826"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "fcab7dd5914ffdd4683c196591bfde94"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "45221b6bf3e36addd2c198b07cff5470"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "c6c670608956647620696c3ffbf75c8b"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "e08ad4deee20288de291aa9aa2e7564f"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "2dabf00cb88fa812318095ed16ee8056"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "f77b9c9c929592a9503cb7af6af8d3b3"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "7096b293eafbafee55982e19607b86e4"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "e0738c03c1d179dfb84dc516c2387f50"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "5f29affbcd744cefd9e40e6055ff1b26"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "3ab78c2faef6defc14ed3ee754c2bac5"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "939d11c946508dbc30c245f9d467ce4f"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "35a86719de7d61e14583370adc027601"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "5566ff56fdb716fa3faade4f1bc06513"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "4a67a278fb0ab0886c2aef992fcd80eb"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "a1b749aecde78c75db3f4152edc393ab"
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
