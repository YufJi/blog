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
    "revision": "fc0590d117c43c8aeae5dc67e6881b68"
  },
  {
    "url": "assets/css/0.styles.e05e9135.css",
    "revision": "d9244b87c00667f441a5e1891b2a6ec6"
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
    "url": "assets/js/10.c4e51aaa.js",
    "revision": "a481d09a8cb9fecda76a133ca9ac0c3b"
  },
  {
    "url": "assets/js/11.b1ae3f0e.js",
    "revision": "ce13ee418a73aa662be2b35945b8b29b"
  },
  {
    "url": "assets/js/12.1e947321.js",
    "revision": "1ae5caaa5bf405d86dd32636d4641740"
  },
  {
    "url": "assets/js/13.bb04cdfc.js",
    "revision": "ec559b41370c3cc5a7a9d2ac76266df2"
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
    "url": "assets/js/18.a24315dd.js",
    "revision": "0904a6f55d01990d9a28255144e210ea"
  },
  {
    "url": "assets/js/19.4698954f.js",
    "revision": "571b0f68da7d5b39241709578fd29936"
  },
  {
    "url": "assets/js/2.ff78d0ce.js",
    "revision": "f60ded140f7bfdb7448bff13f49d73e5"
  },
  {
    "url": "assets/js/20.63afe0bd.js",
    "revision": "825aee2f44a0b6eeab090717c4d284e4"
  },
  {
    "url": "assets/js/21.196aa8a2.js",
    "revision": "0af1252b71ae9908caafded558a683bb"
  },
  {
    "url": "assets/js/22.1b00eb4b.js",
    "revision": "29eeb642bf94a5d4595fcab66a540f66"
  },
  {
    "url": "assets/js/23.ecc0a46f.js",
    "revision": "737bb655744f1f3795bed2b438557c87"
  },
  {
    "url": "assets/js/24.367af783.js",
    "revision": "4507e2259d97db652aa8f96a9329e790"
  },
  {
    "url": "assets/js/25.8bfcf3b1.js",
    "revision": "d796b2e9bfa33b3d3b8c08d87c395a09"
  },
  {
    "url": "assets/js/26.cede6143.js",
    "revision": "be0a23e6eac04edb278b6eedbd3cb7ef"
  },
  {
    "url": "assets/js/27.9fcc3475.js",
    "revision": "f9280e7d99b12dbc042586d15fd0be71"
  },
  {
    "url": "assets/js/28.f3bf0925.js",
    "revision": "e055408266950dd40d89be84bd6e8d36"
  },
  {
    "url": "assets/js/29.05fb8d17.js",
    "revision": "3cd5b8cf3c73e85e4ea14796716396de"
  },
  {
    "url": "assets/js/3.ecc0702e.js",
    "revision": "4dfe60f857bba2e0058ee14c2c47a4e7"
  },
  {
    "url": "assets/js/30.6a75fa4d.js",
    "revision": "2f805bf4ba36b24b283d548bd0094b24"
  },
  {
    "url": "assets/js/31.73d565ab.js",
    "revision": "c1f507232c02980d56c95083120658f1"
  },
  {
    "url": "assets/js/32.b17a3050.js",
    "revision": "9d0f72eac5f24244cac20f7c62f42a5c"
  },
  {
    "url": "assets/js/33.4c3ad177.js",
    "revision": "e2ec7eb3e01ec945689ac8b430d9b74d"
  },
  {
    "url": "assets/js/34.6463c770.js",
    "revision": "52a1f31a2751b876c55e35bf2aac9c15"
  },
  {
    "url": "assets/js/35.2e68cbe7.js",
    "revision": "6692ef8b1d290f945238c4859c7bb35f"
  },
  {
    "url": "assets/js/36.d701b3e1.js",
    "revision": "f1d18dfcfff005ccb63ea4c870676586"
  },
  {
    "url": "assets/js/37.6795bf14.js",
    "revision": "81ee1429967da20a0fc33bc7d16e9e42"
  },
  {
    "url": "assets/js/38.d71739c4.js",
    "revision": "ccee37388226da21a247c4051d0f3f13"
  },
  {
    "url": "assets/js/39.6616a5ef.js",
    "revision": "ff2a2d78172973a3531a7d4d980d32e0"
  },
  {
    "url": "assets/js/4.42aeb94e.js",
    "revision": "5bae15ecd4445e1e445d73f1a515db97"
  },
  {
    "url": "assets/js/40.f3a6d96e.js",
    "revision": "93932dfa447433b02908b8fb28771e28"
  },
  {
    "url": "assets/js/41.6455b83f.js",
    "revision": "dce464b2315eb5ce1a720a18ca197e14"
  },
  {
    "url": "assets/js/42.0cf8ddb2.js",
    "revision": "3a38423a9c9996b4e998bdba86793363"
  },
  {
    "url": "assets/js/43.64663163.js",
    "revision": "215f388325e3e937e4f955f2bca5b3ea"
  },
  {
    "url": "assets/js/44.7e32b8b6.js",
    "revision": "b748a9e86a03a053665630bd353ae0fe"
  },
  {
    "url": "assets/js/45.419d6336.js",
    "revision": "22d84eec7e70dcbee063dae7250eb199"
  },
  {
    "url": "assets/js/46.ffc8ca4f.js",
    "revision": "227d7729157fab430207b17a3f97048d"
  },
  {
    "url": "assets/js/47.6f3ef3e4.js",
    "revision": "816aaf064b3cd7c2de492111a22de487"
  },
  {
    "url": "assets/js/48.17351e90.js",
    "revision": "0051082dd99da8e0abdf87fa5191d6ba"
  },
  {
    "url": "assets/js/49.bd498107.js",
    "revision": "d7ea3749ad8575a88b7ff82f53802fef"
  },
  {
    "url": "assets/js/5.2d578415.js",
    "revision": "5c8defe524dd0382b12b6b5427d54269"
  },
  {
    "url": "assets/js/50.64d8bff6.js",
    "revision": "b90bdc526fc5dd2aa30395ff805158d6"
  },
  {
    "url": "assets/js/51.269419de.js",
    "revision": "93bbeefcaf1df02d88f67f42834933c4"
  },
  {
    "url": "assets/js/52.47da2b03.js",
    "revision": "0f24b6353345a5eea8a7b1e67fc6b0d7"
  },
  {
    "url": "assets/js/53.e7fd50e8.js",
    "revision": "bfe7e1c4fbc6a93815c654c476b9af8e"
  },
  {
    "url": "assets/js/54.df2dc67a.js",
    "revision": "ddac03765b6658191b99ebb6cb9c0589"
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
    "url": "assets/js/7.fa17fc74.js",
    "revision": "01659f813bbff6928e99bfa144474519"
  },
  {
    "url": "assets/js/8.b08f96d5.js",
    "revision": "265a73a160eb4abb7eff2fa711a5d485"
  },
  {
    "url": "assets/js/9.d7416083.js",
    "revision": "ea6cdad8f849fd0ca4212970fa92fd83"
  },
  {
    "url": "assets/js/app.97a09ff6.js",
    "revision": "dc05c7ca63baaef51fa9c779a169d0c2"
  },
  {
    "url": "Design pattern/React.html",
    "revision": "c75d59bdb6f76c9fc924f89a53e78f17"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "8f26b5147698e387e731dcbe692a45eb"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "61cd90f7050f207107dbae4ee332fb7c"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "8204264848060df5bc1fd75750fb8e85"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "18257e69484ffc1ea4e3c32dff84da10"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "c65ab459b9f6fec338ad985cc475143b"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "4a7304dbba71cf45c62f1dc43a045398"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "7bd0f2030d704033e4370b43a2dccece"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "4cc129e415b0bd0868f75b2a3b4e1114"
  },
  {
    "url": "leetcode/easy/largestTriangleArea.html",
    "revision": "f4500a1ff5726a3e743f6d33fca7e07b"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "3db80575308cff7da56694af549bad72"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "9cb51b0d52bfec3071d6a43f4e7427df"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "e94ee5bfc7e30a09ef46d2132f56d685"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "c96317b65b9be7d5ee6155d0a4400691"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "c60ca55c88a622125dd511bc9924b0c4"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "c8e63518c23aea47ec4fa2156648f008"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "8f2437bc3446bb4923791955a71aed07"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "2b362db164e808cb098c4555252b76da"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "0ad52157494cae207ffe2e2f60a141fb"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "a465ac35a6e6fe145df81a6a89b14055"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "78a660404d8e9b4ff2705b23f6e325eb"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "af1c597ae1ad70cfbf672a8934f51103"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "503109ddf3509b2361290f9ec94b03a0"
  },
  {
    "url": "leetcode/middle/buildTree.html",
    "revision": "4cdbb86e0238b112ca2baecb22b907c4"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "964d2276fdd0be6ad000d44f2eae2423"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "f1e99927cc0093ae1b2c6171a08d589e"
  },
  {
    "url": "leetcode/middle/convert.html",
    "revision": "2d2e379c535ac9d78c225a2889f4dd42"
  },
  {
    "url": "leetcode/middle/exist.html",
    "revision": "f4f2ddd7a7d27923a427108ef1b0b9ea"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "72e8a1ad65fafa55870cf23332a71f45"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "b5f58117e20f45ed90203a429d421777"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "66a7ffe5468c1786ddecbdf8a8fcf7ac"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "4f599f6d5f08efb43782a83557a7ceda"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "f0ca462720031d6dfcedcd0ad108020e"
  },
  {
    "url": "leetcode/middle/movingCount.html",
    "revision": "a91ff73c672f528ab55d169ee29c9d34"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "369e514fd44322778aa230206fc52d31"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "5ca9c37d3fdc2c2b78abc9abab7e63fc"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "714d956f1020cd36cf820aa283aa8baf"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "677034cf5430b7d468d5f4b4e59ebe39"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "56e65827302fe072cceb486f88000cbd"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "6d5cc0b919d86735a24840c381c0359f"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "97078d984f4509e49ff98f3867d9a939"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "120e4da679fd76baac62cb48600436ce"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "edf9e7b0e6b95aa089f90af6303d17a9"
  },
  {
    "url": "Tiny/event.html",
    "revision": "4ff58d455ab35a9ed1039688aca4bde1"
  },
  {
    "url": "Tiny/JSBridge.html",
    "revision": "7fa8510656ac1c551a14880aa22b575a"
  },
  {
    "url": "Tiny/miniapp.html",
    "revision": "c8f7a68d08b1d22064aece9ed97ec51a"
  },
  {
    "url": "Tiny/自定义组件web-component化.html",
    "revision": "9ba6e716ea4207e14096863a9bf7c18b"
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
