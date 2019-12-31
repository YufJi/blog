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
    "revision": "3b0e518815cf53e330f9beac8d0ab0ea"
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
    "url": "assets/js/27.260c3880.js",
    "revision": "a5da2c4442ab936a6fa2aa25f2136671"
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
    "url": "assets/js/app.a10823a5.js",
    "revision": "a8062ea1dfbfaf3f3228f440759a8f45"
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
    "revision": "0dd8a6e181fe0004918c9e6584365b80"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "c2b0113c62a916b57c047e7d6b3628d4"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "e92cc61f5d79abe4031296f6e26e5cb0"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "882e6ed59da57b572d652b9dfed6cc8f"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "10128e3ff23dc39f3db8f6e48403d4a0"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "0c4b7de711b3c7da53355ad8aec3663a"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "6d6d66bd0d24afe1221bef1207e1da65"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "f6eda0d246d945dca1917fb07d3b9448"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "8fdb614525b520b51e04fde3ccc3f742"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "6dcf1213c3943f48d8bedb44d262a105"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "974f93ca193bf1913ba394287b631248"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "671b06ddd9a25af3f945493b45a6326c"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "0d7840514b9f5982d88541890184dacb"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "034c69702ae9711551211f6d9002dec5"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "90b27d7a93ad91aa3f9256cdd6addf95"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "f3ae31238d3ca7cd56c15dd9dc1b0e27"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "15b44713a5776459f216bd6e944d45dd"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "453b036b660cd85c413ae31860f47788"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "bbf026e2f8f40e7058de8c91806302ec"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "0dd83063aaa916a64385812ed5ba984b"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "c26a1c1ad867d67ef8102e9097b38d6a"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "ee778068939458888c576d046a771cfd"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "e87b5ca02739d94e5e4bc92a41887371"
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
