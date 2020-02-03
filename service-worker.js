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
    "revision": "e73109b6ea34337f3e71a2bf04beca26"
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
    "url": "assets/js/app.9c01c6ab.js",
    "revision": "7a69af0fe6badb32be2687df310b232a"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "48e726927bb6150d322bc39ddda4d8df"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "af29ed14731c3a1d6aec94ebc67ab7c2"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "c6239e1ab22725e179d72cefe99e8865"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "f579b9c42d21a64f6012dd280c22c3fa"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "688594c82bb63a910761a095da586a6e"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "1afa25f2ae7fbfc6ec12c9c8fa682c3f"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "b214574357e40bd3dee1dd4fa8a87dbb"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "19baabd99edeed55b0b56da3402277cc"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "c7243cae03b5f7cfc01f47c5e906d4df"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "76fa4810ecf2b8c8f7393568a77478d2"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "5c82ca3fd9f47813a2e0cbce788d2935"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "e8bc5e75051a93cbb5677c8b0916eeb5"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "e5690b5195f361bf519206d791d90abc"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "3e72fb8e68c3c440d16db6d727f251cb"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "ac7be940cdba393a6c1fe60bbb1cf698"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "1cdaa7a5c6f61ef3e59140190ee2f14f"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "b396052e0051ee86865fbff0ebab23be"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "51c740403c27bcbc495cc2912d3e2e68"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "f8c042c935f4b655784217c97e586d4d"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "ac81d2c916493c1d3023468730bb13cd"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "ea4f366c2df46e75df2426035dca6df4"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "b1211a75fddbac7d2a530b60d69e869c"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "0b8ac8217111b4570f045fae687b749b"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "e347de4aef0ad1a47f0a074b837e7002"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "8145feae6a903d9f78ae2e7c3d5d001e"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "cc3bb6ecae7f40f99bd564dc4dfeabe0"
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
