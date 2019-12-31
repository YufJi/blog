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
    "revision": "ee7d3d7846c70a376e04138cf092258d"
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
    "url": "assets/js/10.c51df596.js",
    "revision": "fd8ec183cec45dc7f53202c5b1f64164"
  },
  {
    "url": "assets/js/11.580e4ae8.js",
    "revision": "8a52e326f5b6829b4a8b25bf4d1b58bc"
  },
  {
    "url": "assets/js/12.dd75bede.js",
    "revision": "86296a2ae4b6f9fe7be1e497fb11e16d"
  },
  {
    "url": "assets/js/13.2a316647.js",
    "revision": "1bb98cf37062f6e5184d3b0fcc2644ff"
  },
  {
    "url": "assets/js/14.2b0ed99b.js",
    "revision": "96f7b913e6e32ec69b97f47e07ed6feb"
  },
  {
    "url": "assets/js/15.46578264.js",
    "revision": "8c51dde2f1e8f504788c99caacae1188"
  },
  {
    "url": "assets/js/16.110267d2.js",
    "revision": "efba8d6070ab6c6be74fe3eb2d69907a"
  },
  {
    "url": "assets/js/17.6d40c8ae.js",
    "revision": "c33f0949676bc34523aef7ae93314992"
  },
  {
    "url": "assets/js/18.fd18972b.js",
    "revision": "0004703ba39b0ee417c0e858747fa727"
  },
  {
    "url": "assets/js/19.a9bf323b.js",
    "revision": "f81433cf08f99965a0f7a9e3c981dbe5"
  },
  {
    "url": "assets/js/2.785a20b9.js",
    "revision": "63edbc12138efd0332a1b53bdda1becd"
  },
  {
    "url": "assets/js/20.534e7b83.js",
    "revision": "0b9b6c3d9332a8e7788ad8a96e5f9df9"
  },
  {
    "url": "assets/js/21.88bebd78.js",
    "revision": "ad0ae08d142e0e60fff6b98961c8f8ed"
  },
  {
    "url": "assets/js/22.ba582be5.js",
    "revision": "5276da305afd0a387f5e39b10b609d9b"
  },
  {
    "url": "assets/js/23.908b9bb8.js",
    "revision": "49616ca5cbc7037eccac0a65daef92a6"
  },
  {
    "url": "assets/js/24.ce7b365e.js",
    "revision": "8f67250e57a245f5b53af1a6e10208c4"
  },
  {
    "url": "assets/js/25.fd6f0ae1.js",
    "revision": "a9f408f21101e1906f9bcba5f9f264d5"
  },
  {
    "url": "assets/js/26.91290123.js",
    "revision": "623e8dcb4ac11cfb1918733cddd75ff2"
  },
  {
    "url": "assets/js/27.7381e1d9.js",
    "revision": "9a45b79095a943e8f370961cb2467cd8"
  },
  {
    "url": "assets/js/28.fc1cf75e.js",
    "revision": "2a9600917f04bac916c0577a186f6da9"
  },
  {
    "url": "assets/js/3.94cc3891.js",
    "revision": "d39d050f3f78bfbe013de2b7ec1fadaf"
  },
  {
    "url": "assets/js/4.bd46f7b6.js",
    "revision": "f92d883f83fe0d545ee24a866712241a"
  },
  {
    "url": "assets/js/5.f8b1dd83.js",
    "revision": "9cd6cb9c3cc3fc8752062b8ffde5e000"
  },
  {
    "url": "assets/js/6.c886b669.js",
    "revision": "d454c15fc334a287dcd7b659519e6266"
  },
  {
    "url": "assets/js/7.b788739c.js",
    "revision": "7f4cece134ccab9ef4777263c724b9b2"
  },
  {
    "url": "assets/js/8.3205b0a2.js",
    "revision": "0cc2ce7490c5ae4f92a902b91af77b39"
  },
  {
    "url": "assets/js/9.54877869.js",
    "revision": "eaf9566797671256261796f4b1e7fc0e"
  },
  {
    "url": "assets/js/app.36e8dfd7.js",
    "revision": "c5aaa8ad7d3786dac14719ed2e3fd431"
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
    "revision": "4d2e098a77bdbe5af732a2b7f2ad4cd7"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "ea32df7306f5ecb1714242b4bfa5cdb3"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "95138ee9d7b38ffd3e9013d034c5fdf8"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "33ff6ee1aa191dfc1adf42ec8cc37310"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "79894e7e0d2d5f13def6033bb5e1321f"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "12c955f4ddf795f4287f8b37ff909946"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "5a193f3cc6d59f3171eadf95bc64cb2a"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "25e9960eba8bbdd67113f210afd06a36"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "703cff4a8ac4353400c2093d210cd871"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "15dc1285ae0aa88d2ecbaac266361d63"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "e4972d188093878e4fdda7f30f0b349c"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "7dab153c0856a8f4aa0d2d1b2b0a3543"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "72ba70e8ce3f1253d7c38c19a400176b"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "0a7c11fc9e56ef37f400e8633a65ef75"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "fdffbedf243a8a6e8093eb29d644942b"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "6538f01d8344530c6354d3d03f2cf97d"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "4cb11507fb92cade71916d6cfa4e3776"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "0d9f9c2a63e41a71f54b00d3326ec009"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "7f07d058076e66a40da5bc0eb11f36e1"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "b566e8b3fc6e674520a79ea8b06d68ec"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "5f29b5f9302203eb678b66b86fb45705"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "cb073b6b44471e9fbaf5c1870c2a0718"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "318c84d9c1cfb24e5e3fc591fa35fe0e"
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
