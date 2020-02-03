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
    "revision": "4cb2b839a1022dd367e7ee364ce28740"
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
    "url": "assets/js/app.426b545e.js",
    "revision": "57858f4240cbb72a5bbda396dc2e113b"
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
    "revision": "65604dc12bec5456a6f90e3a10228461"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "91725825557deaec9b9dea263c1a420e"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "2446f689dccf72408b9411ab5a247b6a"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "ea8d5040b3cd38dd3102698609d9cdd6"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "2737927625a908a641f3ed478d0fb480"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "87da560e357c484a6cfa2752e4d5ce7c"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "d4603adcc61fafe74b5f0b220e5a0ea1"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "5b39613a323c1505574bcf58f4a8ac2b"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "cea9b140b3b1063d3a0a61ec7504c77e"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "ea4195d3b01c70eed317083fe1218945"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "5304957254f70c079ff12a6d358a456e"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "dfb59eda4042857d7c5bdd81bbda4b60"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "e1feaaeac0c18446287511f551807192"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "5067997761c8dcf52ddef5f955efb7dd"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "2db0d08d0293c450b6585c87fbd25dd2"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "9ba3d9b97bfd283ade263666bacb2b6f"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "e203889101d835476a627799d9ffdb2f"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "816220a4d8c8d7d2c97b771b325a3027"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "98144aabda163c8d1d1a1f51641c3a06"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "0af5ed25a1abbff9172511d0a8a33e8c"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "cc1d42a4551e6112e6851f89cdf62ee2"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "d71392523e07f9c90c9cacb5e264eabd"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "449177bf65017d1b37d34d885f83473c"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "5960bb718d96c3aab0e4c000d7dda1d1"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "fdd0d387bc33f5cdc78f0475860e680a"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "3b4ddeb78f1fa764e2cc36a5e71c609c"
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
