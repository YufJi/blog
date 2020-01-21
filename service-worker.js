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
    "revision": "8173ea7ac6659272650310b1db966007"
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
    "url": "assets/js/5.edf501d2.js",
    "revision": "cd5926ad8d3a3adb75d4793792b6d037"
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
    "url": "assets/js/app.94bc6a00.js",
    "revision": "2742b9df98552deee0a48a3de6a977cc"
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
    "revision": "22af5e739e8cace3ee4dbedd5bbb4beb"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "501dde552d1e9a12776a9ef2edc4e3fd"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "d88cb176d76e3756b2b6607358879553"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "8b18b42d77d812aa3ebea8b3ae50fba1"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "7714d9ac624983de899318a405905f5b"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "049eac55eb1b7f30402b4cd5ddce06d5"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "5f74c0f737ad9c8298078ccc1d665d29"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "8d84953222e70bf86a5cbefb4e7d8456"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "a47827735acf4ae86eddb37f8a85d304"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "7e5d2ba11e24c54ece306f420d422a94"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "42e6d0113452e63f9d8d180c1bf6c5dc"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "73a3b95d0d58b0ae9a4f016053c71222"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "1f2b71031bc564a9aaf54e21c09c0193"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "e00783b2ab9376b4fb6846371dbd57ff"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "10a31730df1f1ee1435eee332dafcadf"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "f23206bc6a94ba88083a0abfe02a37b3"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "0f4d0e2146e7575c998db8829e18178b"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "25e2e6963189bc1dcfdc5ed4c5e0c5c5"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "5e30d63ddec2a507d8792f707668fbb3"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "813eca0860d1d6379ce8364f3d7236b4"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "535d6fee7b5895c40856ea9f587c2efc"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "4ce3fd95a26c32c8e9edfa86f1bc09f0"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "f299cc6ef0cdfbe918843b9583f18a52"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "a9fdc6f2bf8e592c6b87d6b7510ce393"
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
