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
    "revision": "4e39f37fa23de35713e92aa133a829cb"
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
    "url": "assets/img/yufpress.d679bac0.png",
    "revision": "d679bac074465819e10b682e49ed9664"
  },
  {
    "url": "assets/js/10.62c35db3.js",
    "revision": "4de2a71343e43751206546fbf791d059"
  },
  {
    "url": "assets/js/11.9f8baff1.js",
    "revision": "8f0397abf1677355ba0503a3f459fca7"
  },
  {
    "url": "assets/js/12.1c3ee7db.js",
    "revision": "659ae5e92458a2a7f894dc5df31f6909"
  },
  {
    "url": "assets/js/13.6aef3a33.js",
    "revision": "c4e226e8f85f865ba4286f19aa1b65d7"
  },
  {
    "url": "assets/js/14.6b8f793a.js",
    "revision": "73756e4f6051763c0783db9189540352"
  },
  {
    "url": "assets/js/15.2209412a.js",
    "revision": "c23c5d2c041a6e6a45f6de6651e74979"
  },
  {
    "url": "assets/js/16.379980d4.js",
    "revision": "e6b3e547a8d641ff1e9e67e8d91c1f1f"
  },
  {
    "url": "assets/js/17.5003681f.js",
    "revision": "c4eb1207cd11a11fafd6bdd8cc1fbee6"
  },
  {
    "url": "assets/js/18.434c664e.js",
    "revision": "6a0ec8ac370ec5ce14d3cf4c14be98ee"
  },
  {
    "url": "assets/js/19.5d20ec78.js",
    "revision": "26c5c74de6b313c904a7bac32935411f"
  },
  {
    "url": "assets/js/2.ec312a92.js",
    "revision": "87cbac00447044a4b7fcc61edf4e2ccb"
  },
  {
    "url": "assets/js/20.055f15b3.js",
    "revision": "307f6174ef5068559cd0c00018ea938c"
  },
  {
    "url": "assets/js/21.c2ae0c91.js",
    "revision": "f442f6b565ac8f699419ee179af48e3c"
  },
  {
    "url": "assets/js/22.bc018b08.js",
    "revision": "276f4f65350d9b019610d95968f9b54f"
  },
  {
    "url": "assets/js/23.67862268.js",
    "revision": "59a34b38b6dc09c4424947a59aeee807"
  },
  {
    "url": "assets/js/24.5872ee93.js",
    "revision": "dcac36507667313a472d56798d1205f2"
  },
  {
    "url": "assets/js/25.89acdb84.js",
    "revision": "deaf54b43e1a644a761998c1ed2e4e22"
  },
  {
    "url": "assets/js/26.fb7ec8b7.js",
    "revision": "c09cecbac64f73f65109fb7a5da88889"
  },
  {
    "url": "assets/js/27.8b4ed413.js",
    "revision": "5a443d81e23eef796eb46a535fde3ec5"
  },
  {
    "url": "assets/js/28.232d537c.js",
    "revision": "29dbc3bc02366fd005ace17869c88e3d"
  },
  {
    "url": "assets/js/29.dac65d97.js",
    "revision": "a29b996e916da32d48d08b9fb3c9ac0a"
  },
  {
    "url": "assets/js/3.412ba3c3.js",
    "revision": "d79450700dc536e1aad3bf87a1b37197"
  },
  {
    "url": "assets/js/4.0f73fac0.js",
    "revision": "01efa4d3db4b399f871d12103386eb20"
  },
  {
    "url": "assets/js/5.53ee2f3f.js",
    "revision": "cd10c1de90dccd6c23bbc3ed6657eea1"
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
    "url": "assets/js/8.c17e74b9.js",
    "revision": "474ec52cbac05c463765f4f35c44eda2"
  },
  {
    "url": "assets/js/9.97c094a0.js",
    "revision": "ca17b8f33dfe7c5a37c4bb7f090aec3e"
  },
  {
    "url": "assets/js/app.ff60ca48.js",
    "revision": "00b518478c1917d0720d00224cd9914a"
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
    "revision": "5e96fe70c735a019b8dfd5560eb07917"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "c26d381f828a694ac585d1618b5df6fa"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "95ade36c97870d63ee437db01ee5ce0d"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "ea3a669198ba51cbbf8f5d59ee01a4bb"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "a1008e142b63528b49ef05804cb42c90"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "e6b44bf921c1b809664e4e02e6368233"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "31da5c7d24cb13fe0635d094763d92f0"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "ecef2f11fe740acb064947593dab93a5"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "b907d2d1a472124cb2d75f9843de54de"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "4bb96f2fe091d5d20d2cc0441062d0d9"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "b63d6d850fae9b5058afc39ae04a9695"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "75a32ba2b04c0e3cd6855db7f826ee9d"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "a0fb10052f33d731d4c2dc01e8b485b0"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "ef640362af228bd0bf1a865345f04355"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "f676ff1c08397b3a756c1d6c72440321"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "2e2289d02e2298dd67eb3f26c3d825d5"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "f9533f925f0f95ac828b900837d5e543"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "ec2a53401c3f921e67d610ec38052be1"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "74434397eb3747e778268afa3f48737d"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "25a600058beedfeb759563588883af3a"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "d056511e97e924e1ca989c935102fb6d"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "b71fac88a0f6eaa4b52941a4f2ef1b09"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "ee86a2bfc0a7477b55ce179667e7e5fd"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "ca01634c6bda0582b16e6dd5f441321c"
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
