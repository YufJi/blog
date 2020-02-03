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
    "revision": "cd5234b923f55e9d93ce4e7194a1f44b"
  },
  {
    "url": "assets/css/0.styles.22fb32f6.css",
    "revision": "7252b34bc2ac6fc4fc8647d43bd6073e"
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
    "url": "assets/js/10.904fafdb.js",
    "revision": "d16cfdb020ade4e1587cc47b4d1d9935"
  },
  {
    "url": "assets/js/11.900d5924.js",
    "revision": "c57d4869c4f739b156e1b34212fe1744"
  },
  {
    "url": "assets/js/12.e03d7175.js",
    "revision": "fb0b5eddd69fc83edd8dffed57ffec49"
  },
  {
    "url": "assets/js/13.b79853d1.js",
    "revision": "eaa6351a3227fb9109376acc23e245cd"
  },
  {
    "url": "assets/js/14.57512516.js",
    "revision": "b87bdabf160a6ed561e4a88745bd8d9e"
  },
  {
    "url": "assets/js/15.33b39389.js",
    "revision": "d5e1058ae018af9e8d9cf6f0dd6c8ec8"
  },
  {
    "url": "assets/js/16.df0dac9d.js",
    "revision": "858e96c64d4f995c4f287d02e45b5273"
  },
  {
    "url": "assets/js/17.ceab61be.js",
    "revision": "a80cbf7eb89ac513dc2b75df38dcc3a5"
  },
  {
    "url": "assets/js/18.1a450a91.js",
    "revision": "c29923bb8249e7bae42fb1b4e52e5f2c"
  },
  {
    "url": "assets/js/19.4e9ff454.js",
    "revision": "d4c4aca06cc915ec1dee1114b8d0c62e"
  },
  {
    "url": "assets/js/2.3185b5b6.js",
    "revision": "1a8701f6c211229d718557d50b690642"
  },
  {
    "url": "assets/js/20.68f7ba21.js",
    "revision": "5daa9b8800b986e7c8a6f82a6f967eca"
  },
  {
    "url": "assets/js/21.79aa2170.js",
    "revision": "6da7899ca4c9c9c2abd76c37b0f766d2"
  },
  {
    "url": "assets/js/22.e7322993.js",
    "revision": "9b08e4659573809d0b52707d8e11f67b"
  },
  {
    "url": "assets/js/23.bb9f9c8f.js",
    "revision": "eacb90475e5bedd305c35dd2680a0aeb"
  },
  {
    "url": "assets/js/24.7ed49a8c.js",
    "revision": "df27d3874da23d8a7ae4305e50550e81"
  },
  {
    "url": "assets/js/25.dfad3c6a.js",
    "revision": "4a48ae0e31c4ab47096914f62a39e6c3"
  },
  {
    "url": "assets/js/26.eef83a0a.js",
    "revision": "312d6a3267b0a9d0e25ddbb810c10cb6"
  },
  {
    "url": "assets/js/27.6067df8b.js",
    "revision": "0bbd9c069a4e6b9e184ccd79c92060bf"
  },
  {
    "url": "assets/js/28.93017313.js",
    "revision": "a478e6a52dc8c316684acf574e9d14ca"
  },
  {
    "url": "assets/js/29.ed787d53.js",
    "revision": "7c323bfdc133ec7ff2ffcd74c5454986"
  },
  {
    "url": "assets/js/3.1f4717a5.js",
    "revision": "e2083f393ac1acdf3f5d11155bd8e00d"
  },
  {
    "url": "assets/js/30.f604d72f.js",
    "revision": "16ef94b469c4fb3029c893b92047861c"
  },
  {
    "url": "assets/js/31.3dd5738b.js",
    "revision": "b6ad08ca2a885e0c9c57d9c390ab6138"
  },
  {
    "url": "assets/js/32.d183b08f.js",
    "revision": "1e263354ac4e5d45a976b6dfdee60845"
  },
  {
    "url": "assets/js/4.ba2e53b8.js",
    "revision": "53103bb74daa2090add103a8ac49aad1"
  },
  {
    "url": "assets/js/5.3c5283dc.js",
    "revision": "96070072a1bcb41d1286103eb5523cd4"
  },
  {
    "url": "assets/js/6.72f84703.js",
    "revision": "58ae66ff887233f063d73cdb1bd2ee17"
  },
  {
    "url": "assets/js/7.ff7117de.js",
    "revision": "f2c50eb8c6137a6183ad83369c0dbe0e"
  },
  {
    "url": "assets/js/8.51e4e9de.js",
    "revision": "52ec3b3c8f457d02e046809a8b203fa9"
  },
  {
    "url": "assets/js/9.10c4fef5.js",
    "revision": "b39f7fa503871736ed332caf93c1fbfc"
  },
  {
    "url": "assets/js/app.5cac23a2.js",
    "revision": "5992beda38c6d9bddee1068d7ed63ec2"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "f4786d4311e97b65c7d4ca15aebddeca"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "c90b4ea4c48210f64fc7db28bfd75cf0"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "cffaa3d53bf3cb6a772c4a74b363587e"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "071905b1849fc2be6ecca3e8f2a1dd77"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "06dc0c761549623d809f525be1ea057e"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "519dac309d25100babf7b2be394768bf"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "3a9e724209e37912686bbf65d1ee0b23"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "f8d067d6f598bd2faac22af5eea0e3c1"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "641a661e7ef53af036415ec81e686f64"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "71800f6ac8f5f8430c5d768054307957"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "549755b1d0e946286081c9a9229cad9f"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "9967a59f4c863a96cecf02eeb4c46788"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "4235a8b227e4750acb9bdedca07cd7fe"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "07f4e9735b454d712f811bf4f9a9c10f"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "e5fe270c0f6670039feb489f04bad0f8"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "1f375872eeee22a9886acc4b2e2c86b9"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "2ad7ee516e0462a1b0d4291a07cb2f1a"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "1fc217609bb8dd042728ca241d89b115"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "19580d8f7308f5e9e42b1ade736649b5"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "ed7143d33521a1934208a3cc189a84a1"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "d140d34f260321ca3ee0d342cd3dc730"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "8803f0e6d6d68ef8ae9fa7a94e834dca"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "f69003366c27ab80603f4851277158d3"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "40bef56487572c4ab27c170f0afa8ab9"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "a81594494e6950544dbbe1c173f3b617"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "b9de556eadf7a3b8cf22a7f178bb15a6"
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
