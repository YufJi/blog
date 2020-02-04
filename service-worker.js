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
    "revision": "46803e25b8143c65cbe6b6963850dc9e"
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
    "url": "assets/js/13.4d57fc0a.js",
    "revision": "e0363543e24dbd74b76ea9486ad66ce7"
  },
  {
    "url": "assets/js/14.f0750315.js",
    "revision": "0d45ad924ea8eeeb867dce4721a17b53"
  },
  {
    "url": "assets/js/15.d62417d2.js",
    "revision": "35c475c234b29c3c589aed98c674288d"
  },
  {
    "url": "assets/js/16.ff53844e.js",
    "revision": "72776ffea6daf4b680f6745364adefb0"
  },
  {
    "url": "assets/js/17.1d247585.js",
    "revision": "f2aca0303faeab86b26bbd79e95f864e"
  },
  {
    "url": "assets/js/18.509ac0fd.js",
    "revision": "9a091e0cb5265f3b0e53d9d2b1bf7725"
  },
  {
    "url": "assets/js/19.67cb46fc.js",
    "revision": "b8c46e2a983a5bfdc29bf44fd5656ab9"
  },
  {
    "url": "assets/js/2.3185b5b6.js",
    "revision": "1a8701f6c211229d718557d50b690642"
  },
  {
    "url": "assets/js/20.c3863401.js",
    "revision": "616543b65e8d88c92282a95ea9df45b8"
  },
  {
    "url": "assets/js/21.b055efb2.js",
    "revision": "e1d018e3a82f91f66955acf8c23ef843"
  },
  {
    "url": "assets/js/22.ea9c4415.js",
    "revision": "2a66dd890245111489ed7dad7cff2dd9"
  },
  {
    "url": "assets/js/23.3084dcb4.js",
    "revision": "0029ad972cd488b6e26971679809e314"
  },
  {
    "url": "assets/js/24.62a9d30a.js",
    "revision": "b44eaa936eda183758f2aebf26a9e459"
  },
  {
    "url": "assets/js/25.85c4a748.js",
    "revision": "faf2016c3bdcf56490eb1a65a9c21531"
  },
  {
    "url": "assets/js/26.4541dbb0.js",
    "revision": "f7d91d74331bc12695512888c604a3a4"
  },
  {
    "url": "assets/js/27.a8b6e796.js",
    "revision": "c20f841e304e1346c02abc55a4cb450e"
  },
  {
    "url": "assets/js/28.de638e0f.js",
    "revision": "f1b42b844da9dc893d47764c1ab88c99"
  },
  {
    "url": "assets/js/29.52137155.js",
    "revision": "e78c92150ed8b41fcaf732ba39c70da2"
  },
  {
    "url": "assets/js/3.1f4717a5.js",
    "revision": "e2083f393ac1acdf3f5d11155bd8e00d"
  },
  {
    "url": "assets/js/30.2b839f7f.js",
    "revision": "ef2ec5f7801a4ddb668f9f1346bdfd2b"
  },
  {
    "url": "assets/js/31.4532a68c.js",
    "revision": "4b32ba4ae45942f7332c7049e4b64368"
  },
  {
    "url": "assets/js/32.d0f7a13c.js",
    "revision": "ac82907d2b00b86d00ebe3e7fe18f735"
  },
  {
    "url": "assets/js/33.277cec7e.js",
    "revision": "954e61bd0c37c25fdfab464736d4285f"
  },
  {
    "url": "assets/js/34.4ddb4155.js",
    "revision": "d88927d84f0eaff8bac2ca35bc5ebfac"
  },
  {
    "url": "assets/js/4.f9d8756d.js",
    "revision": "dfce9775d44706c31cef8358db91de7b"
  },
  {
    "url": "assets/js/5.db0ceb80.js",
    "revision": "7d0d08140360ced7d41b1b659620a947"
  },
  {
    "url": "assets/js/6.ac39c5c3.js",
    "revision": "9ecdac71478b1348d56fe150cc92f341"
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
    "url": "assets/js/app.3772882b.js",
    "revision": "a91803f6aa5538f22caf70dfc9a0c573"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "913e53fc7bf26fc841216acd539d261f"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "df39ca6a059563d3f982a82a505cf7c1"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "21186ce396bfbdbf6334d0b6a3dc9f05"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "ff17cfa12228905418b36ba03c5ea8e7"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "c897b7d576c77724fe9e9a1615c1c039"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "9f9fc2386986c5367262c0cce66f0848"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "b36a6a89fa64b8fb2ef440da75ebd4a4"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "4dfb492a91374dcfc2c2ae6a914f0f40"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "95093e08eb9739f23ff05c331043fb19"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "6a92aa956b699835639365a9b85f2efa"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "7a25f45057ec9f28c6fd303a0f56f295"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "b6f31df63c8a7d5197806926c2e7dd80"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "cf548392d01a4efe24860cdfa25a178f"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "d659392fcbac8d9b0b7b27fd66edaca9"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "b0704e609c0d8a4478a3b40c426f543b"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "c8cb8138b36a65b0143d5917d9fb910b"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "e3565fcdbdd33548a205e2f72c8d029d"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "e0d6e028dac23ac23b13a154928ede0f"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "cadd580f8a31cb0903f335809bc8185a"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "973bd8cc3247bf2a96dd7c7a805fe02b"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "99cb6c1bdb89c292355557be34661b02"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "2dbe794490ba7082885a2810e19cfc52"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "b1a07cf30b9dca64a6044e2d13ab196d"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "499af7adbb333b34fcc6f65a4ec45313"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "6e19d8c10e5afb052fbe7e6bf2e70000"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "4fde5e0b13659217d29e5b10f0b81b9f"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "787f5e6714b2a5e1a5c9caca099d2d10"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "a54e3f32336ac712c99e1f7aabc4b18b"
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
