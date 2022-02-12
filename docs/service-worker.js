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
    "revision": "77bf486b3a72c8afbbb8041843997bae"
  },
  {
    "url": "assets/css/0.styles.e7dab88b.css",
    "revision": "7b178e57dd7a77decfbc02fe4e5c9d0a"
  },
  {
    "url": "assets/img/docs.db788ad3.png",
    "revision": "db788ad33c6493b82ec98b19b5b56532"
  },
  {
    "url": "assets/img/hybrid3内置组件.a3bdf30f.png",
    "revision": "a3bdf30f0cac785de934de73f1be68bd"
  },
  {
    "url": "assets/img/hybrid3流程.6b2effe2.png",
    "revision": "6b2effe23f0b08fb0b464e030cc386b0"
  },
  {
    "url": "assets/img/invoke.002d3d5d.png",
    "revision": "002d3d5df77dc63f55a0ca557c335a8b"
  },
  {
    "url": "assets/img/onNative.93d5cda8.png",
    "revision": "93d5cda809ae5fb865c1698c99a4b95c"
  },
  {
    "url": "assets/img/publish.0518948d.png",
    "revision": "0518948de73bb4db1bb066291e8dd53a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/事件系统.6423f061.png",
    "revision": "6423f061c4007a17e0dfbeb84cef9a5c"
  },
  {
    "url": "assets/img/小程序原理.a8c4960e.png",
    "revision": "a8c4960e283e845ae9106cf33e7918da"
  },
  {
    "url": "assets/img/小程序执行流程.0380ae33.png",
    "revision": "0380ae33195a531a04b2be614a18db97"
  },
  {
    "url": "assets/js/10.8131e7a8.js",
    "revision": "827e5ed034df6cc436bef02545ede9d9"
  },
  {
    "url": "assets/js/11.265eaf15.js",
    "revision": "b1cce0ded9054c2c90d750c0908e5312"
  },
  {
    "url": "assets/js/12.fa71b599.js",
    "revision": "29a36d30133d79eff874ee327c255ff3"
  },
  {
    "url": "assets/js/13.53bf227e.js",
    "revision": "936928675a351b45b73f8589c6fc490d"
  },
  {
    "url": "assets/js/14.de559b4a.js",
    "revision": "975da985948e3dbccf6c3fa8211540c7"
  },
  {
    "url": "assets/js/15.12989066.js",
    "revision": "d89eca0608a3ea232c18e39be6de6a33"
  },
  {
    "url": "assets/js/16.843d0225.js",
    "revision": "151e4456c2ead9504407d39e2058a7b9"
  },
  {
    "url": "assets/js/17.44272a29.js",
    "revision": "6bbfad979fa684fdf0a179790272d64c"
  },
  {
    "url": "assets/js/18.12b246fe.js",
    "revision": "9e5b3f1247c363bad4d24d2663789479"
  },
  {
    "url": "assets/js/19.ebf34356.js",
    "revision": "11c5af78b108f713dae2639ae50dc5f9"
  },
  {
    "url": "assets/js/2.ff78d0ce.js",
    "revision": "f60ded140f7bfdb7448bff13f49d73e5"
  },
  {
    "url": "assets/js/20.d728718a.js",
    "revision": "60debd836f768d7d0b631c3d47850069"
  },
  {
    "url": "assets/js/21.28421b6c.js",
    "revision": "01919371d088d5f20061525b6cc7fa47"
  },
  {
    "url": "assets/js/22.7c2907fa.js",
    "revision": "b335ca53e3f92b62c3e4cc3e3f0154c3"
  },
  {
    "url": "assets/js/23.c945c7b0.js",
    "revision": "9f58be79e8fba0985cbaa49fd4b16258"
  },
  {
    "url": "assets/js/24.6dd36f0b.js",
    "revision": "29377a8f65938b557551f25a6390b864"
  },
  {
    "url": "assets/js/25.7c825ed0.js",
    "revision": "84219ac39f92edd19d39391fe8a28d12"
  },
  {
    "url": "assets/js/26.f5cd0b8a.js",
    "revision": "9781d0bc0e74bf2ff1a858b7988eb99f"
  },
  {
    "url": "assets/js/27.1555e794.js",
    "revision": "cc54d53cabadc78eae45978fdb040c65"
  },
  {
    "url": "assets/js/28.17430ceb.js",
    "revision": "127d4e3b7a402b1e9023163e8ce6fe06"
  },
  {
    "url": "assets/js/29.eeb13a86.js",
    "revision": "abf121624804493c068803bd11a095d9"
  },
  {
    "url": "assets/js/3.77c4ddf2.js",
    "revision": "f7bda15c0f7b1a7fd868472e70329d41"
  },
  {
    "url": "assets/js/30.b20e067a.js",
    "revision": "d4084d5e800cc0f966ed4d0da54dcd59"
  },
  {
    "url": "assets/js/31.264bb16b.js",
    "revision": "1be7a3f61778bf8f1cf210ebd1eb1533"
  },
  {
    "url": "assets/js/32.3fdb310b.js",
    "revision": "82b28169ed5c3530c21bd1928ff924e4"
  },
  {
    "url": "assets/js/33.8e9fb700.js",
    "revision": "142c2b7c0af48fb43892d83826f5fc98"
  },
  {
    "url": "assets/js/34.867bf01c.js",
    "revision": "f15f4752fb399f80d718ef556c17fb24"
  },
  {
    "url": "assets/js/35.6e433692.js",
    "revision": "54325aa24111baa2264afb37c0146abe"
  },
  {
    "url": "assets/js/36.079f0487.js",
    "revision": "3ea95b59261b94ccb1cf7e1c50a2d60d"
  },
  {
    "url": "assets/js/37.e51402a1.js",
    "revision": "4f6e9f0d0cd4a464f7b26e270929ca51"
  },
  {
    "url": "assets/js/38.a34d6934.js",
    "revision": "8bde569f2717449797f90c27a30028fc"
  },
  {
    "url": "assets/js/39.8a061a37.js",
    "revision": "78b5f65b4ba154b78d4bfa0ce4371e00"
  },
  {
    "url": "assets/js/4.a097a963.js",
    "revision": "c745aff226cbefc36d610fbc39b94d46"
  },
  {
    "url": "assets/js/40.f1ee1ee3.js",
    "revision": "98f756b50f7c8005733923b3036f551d"
  },
  {
    "url": "assets/js/41.fc0ae38d.js",
    "revision": "f590d4fb3888fe8f2a7cf9f548009cb6"
  },
  {
    "url": "assets/js/42.9102e213.js",
    "revision": "c31c8de34783c817c8d4e489cf3bdb44"
  },
  {
    "url": "assets/js/43.c6deb363.js",
    "revision": "47a26e61ae79cfb789bd2f8fe07be124"
  },
  {
    "url": "assets/js/44.48029bfe.js",
    "revision": "7df6506577975ea1559e5a5b2a33f35e"
  },
  {
    "url": "assets/js/45.6836958d.js",
    "revision": "ac6eaf29f822ecf7f0ffd6fd87fcb318"
  },
  {
    "url": "assets/js/46.fc0a6797.js",
    "revision": "759167b2583f42cd7e97137c6ba5cc0e"
  },
  {
    "url": "assets/js/47.1f9c9a4a.js",
    "revision": "e7f5dcda2f39f8faa3278c58d5511d02"
  },
  {
    "url": "assets/js/48.41dbba67.js",
    "revision": "efab5a5945b369b376c241f779590241"
  },
  {
    "url": "assets/js/49.8c1ad8dc.js",
    "revision": "7fc63bfcbe235cf97e5baab27c2e32df"
  },
  {
    "url": "assets/js/5.2d578415.js",
    "revision": "5c8defe524dd0382b12b6b5427d54269"
  },
  {
    "url": "assets/js/50.1af58cb1.js",
    "revision": "65d83cd642e2d727d1e0b1270722edbd"
  },
  {
    "url": "assets/js/51.5950a409.js",
    "revision": "efeb1907c32b31d3ddc545661d936fcc"
  },
  {
    "url": "assets/js/52.a8e55636.js",
    "revision": "38cb34ffb6b0122a51449675c9e8ad48"
  },
  {
    "url": "assets/js/53.a7287746.js",
    "revision": "7a6d061c6e3b24e1e56769dd6f30cb01"
  },
  {
    "url": "assets/js/54.ba8af164.js",
    "revision": "f1d0eab1d77207a2f0e387640cc22030"
  },
  {
    "url": "assets/js/55.19ea6786.js",
    "revision": "3e4dd2598ac27025c722d1b622b6dce2"
  },
  {
    "url": "assets/js/6.854148ae.js",
    "revision": "b36f4d9694d5f60eec68cef8c946e55b"
  },
  {
    "url": "assets/js/7.1f572ee9.js",
    "revision": "a4e023ddbf990fb29d5fd8d8eb7df65f"
  },
  {
    "url": "assets/js/8.90ee672e.js",
    "revision": "2793a10fe0bc0646e77ea85501b1958f"
  },
  {
    "url": "assets/js/9.544d74ed.js",
    "revision": "f3ffd8aa0b2b972dba2875753ab3b613"
  },
  {
    "url": "assets/js/app.2cd0ee4c.js",
    "revision": "5d52bfaa14637558c638909badebc2c9"
  },
  {
    "url": "Design pattern/React.html",
    "revision": "f554eaf738976bd97930d1b118d34efc"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "3cc01a852cebf64c3141cda65d9b8043"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "f8b8d991fb0a00e33295e211e567f28f"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "1ab5d1e233b4fc768c8029c6450eb492"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "37a2225b093b3ca196c29bdaf4ef7ef9"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "f7887cf3be96aeb9c3a2a1d4fef28f62"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "7a78f10070f4349d67ba28d5c5eed3fd"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "da744d57d0413637046a13ec8697a02b"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "b14d5cb32d2545294e695334d40cd895"
  },
  {
    "url": "leetcode/easy/largestTriangleArea.html",
    "revision": "9e6add656341dd8281289d79b9c2a2ae"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "4fda0a3c471cd68df87c77f9b6bda8a0"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "ed6e6b59d5b9dfb5051c41bbd99b97f1"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "047f21e821120e4a1c8dcc039b59f59f"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "21755fb9f1413507d45102ca305b991a"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "d29126459cbb36bb60588667ffaf33dd"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "1adf9ce2de66b28d72377e7b880e3088"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "b0d9949a4c8cbf8d513f00e2e1f65ccb"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "54b66af6389007f3906014d014144f0b"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "e9cf0ff180689fadaed39e2a1d81ab2e"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "fb4a86519f866e7a98b50c63fc74c226"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "1705abd794027b3e95e0a8df45a0c75d"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "3f1864b47042b93a937811fbec9bb525"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "7332710aa0306fcfa12349a8757dfa4f"
  },
  {
    "url": "leetcode/middle/buildTree.html",
    "revision": "91d6be478aa7e9bbededfdd8cd862542"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "7c691551338815089f33aae2bd62fedc"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "13b9df8fcc7497fecd2d7b172d3148f2"
  },
  {
    "url": "leetcode/middle/convert.html",
    "revision": "5c2be0fb50eeafd636e2d17c1190637b"
  },
  {
    "url": "leetcode/middle/exist.html",
    "revision": "59f2c48bb7c5feb5d8f7e6742b0f84b3"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "a262b968ec9ae9285af1c9fb53786d68"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "db43728f0aeb29f2e3b47a317fe32fd1"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "079eb8335ff708a117fd7ec3ac78248d"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "147b10f58daf4519aa85796238ac0b85"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "94d343dfc9e37ea9d01ea3baf9d45104"
  },
  {
    "url": "leetcode/middle/movingCount.html",
    "revision": "08b86ee354c1e0e98fa1a613c088b157"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "220b2ca803cc2d7b87b727b861886500"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "b2e19f5972c7a9ce809b0a188d93ed35"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "85bcd13de5278033816761d6b93e4008"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "18bd798458b7c5d894f2b01a54162a90"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "f0fa52e8629cb1df8df2d7bb96fbad03"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "6f638e79191ca83e95082e5920af051b"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "ac0fb33a22b1595edc7344943bad16ad"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "359d3224e13cfe0a1a583ca3d1da68ba"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "0ad87dc7fa112de1556f23b1c77d9316"
  },
  {
    "url": "tiny/event.html",
    "revision": "c65a5442a0f22855ab7f97d9307dfe1e"
  },
  {
    "url": "tiny/JSBridge.html",
    "revision": "1d8f8778f66708ff84784b7de08a64c9"
  },
  {
    "url": "tiny/miniapp.html",
    "revision": "6e40c24af9c36773bf4b8c3a317046e3"
  },
  {
    "url": "tiny/自定义组件web-component化.html",
    "revision": "2f2637b88b8a7f40ddedf38e16972a41"
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
