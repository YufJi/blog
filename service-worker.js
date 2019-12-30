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
    "revision": "dbca8696bb46976c46645e32f07fe4d0"
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
    "url": "assets/js/10.6c541186.js",
    "revision": "fd8ec183cec45dc7f53202c5b1f64164"
  },
  {
    "url": "assets/js/11.4eff14fe.js",
    "revision": "8a52e326f5b6829b4a8b25bf4d1b58bc"
  },
  {
    "url": "assets/js/12.cd1d59a2.js",
    "revision": "86296a2ae4b6f9fe7be1e497fb11e16d"
  },
  {
    "url": "assets/js/13.135b6ecc.js",
    "revision": "1bb98cf37062f6e5184d3b0fcc2644ff"
  },
  {
    "url": "assets/js/14.29f477bd.js",
    "revision": "96f7b913e6e32ec69b97f47e07ed6feb"
  },
  {
    "url": "assets/js/15.b0f58079.js",
    "revision": "8c51dde2f1e8f504788c99caacae1188"
  },
  {
    "url": "assets/js/16.74318877.js",
    "revision": "efba8d6070ab6c6be74fe3eb2d69907a"
  },
  {
    "url": "assets/js/17.e2152482.js",
    "revision": "c33f0949676bc34523aef7ae93314992"
  },
  {
    "url": "assets/js/18.2ff18a1b.js",
    "revision": "0004703ba39b0ee417c0e858747fa727"
  },
  {
    "url": "assets/js/19.eb093c06.js",
    "revision": "f81433cf08f99965a0f7a9e3c981dbe5"
  },
  {
    "url": "assets/js/2.785a20b9.js",
    "revision": "63edbc12138efd0332a1b53bdda1becd"
  },
  {
    "url": "assets/js/20.a7ec5705.js",
    "revision": "0b9b6c3d9332a8e7788ad8a96e5f9df9"
  },
  {
    "url": "assets/js/21.78526c57.js",
    "revision": "ad0ae08d142e0e60fff6b98961c8f8ed"
  },
  {
    "url": "assets/js/22.d721c4da.js",
    "revision": "5276da305afd0a387f5e39b10b609d9b"
  },
  {
    "url": "assets/js/23.d52cfa71.js",
    "revision": "49616ca5cbc7037eccac0a65daef92a6"
  },
  {
    "url": "assets/js/24.84bfd2e7.js",
    "revision": "8f67250e57a245f5b53af1a6e10208c4"
  },
  {
    "url": "assets/js/25.3f2682f7.js",
    "revision": "a9f408f21101e1906f9bcba5f9f264d5"
  },
  {
    "url": "assets/js/26.955e0b78.js",
    "revision": "f949f9bef23918af0b7657217807a340"
  },
  {
    "url": "assets/js/3.28e4da2e.js",
    "revision": "70e1edf98b72d386c14d7354967bd7a3"
  },
  {
    "url": "assets/js/4.e2f8fc2f.js",
    "revision": "f92d883f83fe0d545ee24a866712241a"
  },
  {
    "url": "assets/js/5.f8b1dd83.js",
    "revision": "9cd6cb9c3cc3fc8752062b8ffde5e000"
  },
  {
    "url": "assets/js/6.a420fd29.js",
    "revision": "d454c15fc334a287dcd7b659519e6266"
  },
  {
    "url": "assets/js/7.780d3b02.js",
    "revision": "7f4cece134ccab9ef4777263c724b9b2"
  },
  {
    "url": "assets/js/8.871b1dcc.js",
    "revision": "0cc2ce7490c5ae4f92a902b91af77b39"
  },
  {
    "url": "assets/js/9.dd70c0dd.js",
    "revision": "eaf9566797671256261796f4b1e7fc0e"
  },
  {
    "url": "assets/js/app.8efa8fbd.js",
    "revision": "5c3f476201bb55866092b5509111dfde"
  },
  {
    "url": "easy/binarySearch.html",
    "revision": "9ad1de474a2b37502333a1f5f51b429d"
  },
  {
    "url": "easy/distributeCandies.html",
    "revision": "5c91f07d95e0b527f7c477de02c5e22f"
  },
  {
    "url": "easy/findContentChildren.html",
    "revision": "176eb076abf4b5228bdb9472caa1e6f2"
  },
  {
    "url": "easy/isSymmetric.html",
    "revision": "7b6de52ce92e5045047deb5e71f93f26"
  },
  {
    "url": "easy/reverse.html",
    "revision": "609a04d871f8f0ec88745345b9285d68"
  },
  {
    "url": "easy/searchInsert.html",
    "revision": "5b610b6bf9868458cafd933b8affa65f"
  },
  {
    "url": "easy/twoSum.html",
    "revision": "e7c4e0594af1270e1d83d2d20b0950ab"
  },
  {
    "url": "hard/findMedianSortedArrays.html",
    "revision": "87eadaa08b8b1696d4d5a44378b03306"
  },
  {
    "url": "hard/firstMissingPositive.html",
    "revision": "46c0f3cd53fd57296cfcdb4df2452265"
  },
  {
    "url": "hard/minWindow.html",
    "revision": "519f0ea517467c2c69a3fc7669bf26b5"
  },
  {
    "url": "hard/solveNQueens.html",
    "revision": "79e161e4b53c2e27880a9d2096f816f7"
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
    "revision": "4b81acf04b6e93a9d24f38571fe79cc9"
  },
  {
    "url": "middle/addTwoNumbers.html",
    "revision": "743ea0b2f6676943d5fac559b7e6e4c8"
  },
  {
    "url": "middle/carPooling.html",
    "revision": "f6cd3931583c50ffbff417c38918f7f2"
  },
  {
    "url": "middle/combine.html",
    "revision": "30ddde142ce86d801dbf0e3664f2b92c"
  },
  {
    "url": "middle/findMinArrowShots.html",
    "revision": "a8a17163d87aedea96b188d6cc3b0b9e"
  },
  {
    "url": "middle/generateParenthesis.html",
    "revision": "7e7789819c940c1c3a6811f3fb410430"
  },
  {
    "url": "middle/lengthOfLongestSubstring.html",
    "revision": "d5eea4357d3f1d29a61cf15e0ec3430c"
  },
  {
    "url": "middle/numFactoredBinaryTrees.html",
    "revision": "6b96378781c20e90c3b791dbad7993a8"
  },
  {
    "url": "middle/pow.html",
    "revision": "4b504a3b9767cf5a9aabcb9d667b7121"
  },
  {
    "url": "middle/threeSum.html",
    "revision": "36f13aa0af63e40f62bd53f0986c8560"
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
