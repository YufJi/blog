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
    "revision": "1c6808c8d0e8bb2d7c62a663257a6c84"
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
    "url": "assets/js/10.79b1ca23.js",
    "revision": "637c5dd10dd602b33a68109baae3eed5"
  },
  {
    "url": "assets/js/11.4f9a7eb6.js",
    "revision": "33ad75190818379e3f2afdee6ed2f0ed"
  },
  {
    "url": "assets/js/12.5fcae337.js",
    "revision": "426061df1898f21fcf0bfb484d46ab38"
  },
  {
    "url": "assets/js/13.686cad59.js",
    "revision": "9e3d477bcf2b7cea57a1a50be53880c4"
  },
  {
    "url": "assets/js/14.de559b4a.js",
    "revision": "975da985948e3dbccf6c3fa8211540c7"
  },
  {
    "url": "assets/js/15.0cfe5450.js",
    "revision": "ec9b570fcd8593db7d75e4b826ba7817"
  },
  {
    "url": "assets/js/16.35218e0c.js",
    "revision": "78ea5c9bb54f9c5d6812b704d8ad6181"
  },
  {
    "url": "assets/js/17.2409b2c8.js",
    "revision": "9b4bd0d6cb49b030c5b9e5c4a06ffb9f"
  },
  {
    "url": "assets/js/18.e3f76bbf.js",
    "revision": "9f5003a9a66ed68bdb59ab60cf11ad18"
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
    "url": "assets/js/20.3650291b.js",
    "revision": "41407a7b8bcc5d489fdc4cca67fe56af"
  },
  {
    "url": "assets/js/21.196aa8a2.js",
    "revision": "0af1252b71ae9908caafded558a683bb"
  },
  {
    "url": "assets/js/22.d281647c.js",
    "revision": "19210f472aff74badd069e87847b46e7"
  },
  {
    "url": "assets/js/23.1fb02562.js",
    "revision": "b350de364ccf258dbd4640722e6ddfc4"
  },
  {
    "url": "assets/js/24.ce21ff6c.js",
    "revision": "508d1e515fc9ef66ab5314279778b538"
  },
  {
    "url": "assets/js/25.4d6e6a14.js",
    "revision": "ed630746b77a4c35c9578f27c52eb823"
  },
  {
    "url": "assets/js/26.cede6143.js",
    "revision": "be0a23e6eac04edb278b6eedbd3cb7ef"
  },
  {
    "url": "assets/js/27.a7ee0d37.js",
    "revision": "90d8c1a5e8b2359f3a4b1b9b959950a0"
  },
  {
    "url": "assets/js/28.71aa5981.js",
    "revision": "601384b9354a9327e2d92e020e36c6f1"
  },
  {
    "url": "assets/js/29.05fb8d17.js",
    "revision": "3cd5b8cf3c73e85e4ea14796716396de"
  },
  {
    "url": "assets/js/3.42199638.js",
    "revision": "af2f655efaf2264df6e12d800a6bce43"
  },
  {
    "url": "assets/js/30.4f10f563.js",
    "revision": "f96dc5d1d10223ccebebf67073073266"
  },
  {
    "url": "assets/js/31.8ae83be5.js",
    "revision": "de7701c55c34c81e4b88eabc051edf08"
  },
  {
    "url": "assets/js/32.03e52466.js",
    "revision": "5db197fb7d5593409c506e4612ee7edf"
  },
  {
    "url": "assets/js/33.0dbb77b5.js",
    "revision": "ce725533c8dd62e454ed5edec16ace91"
  },
  {
    "url": "assets/js/34.f57c6e66.js",
    "revision": "0f7c6279e40d1440a401561d9c17cac3"
  },
  {
    "url": "assets/js/35.8fdec0b1.js",
    "revision": "b4f529b828d6b4bdfbcef7951161c286"
  },
  {
    "url": "assets/js/36.e13ddc4f.js",
    "revision": "3f15aea478c1616229be78c12992332f"
  },
  {
    "url": "assets/js/37.f2205b6c.js",
    "revision": "370172c910b5ae7d9bd7a80a63af4ec6"
  },
  {
    "url": "assets/js/38.27b5f2a4.js",
    "revision": "3c1b9f134620de98ecbf2d1f44174eea"
  },
  {
    "url": "assets/js/39.16a2e5e6.js",
    "revision": "32f1a3a979f0b758d3eaec1d58ce7a33"
  },
  {
    "url": "assets/js/4.6f552e87.js",
    "revision": "6c9f29f97729654757de51f85cde658e"
  },
  {
    "url": "assets/js/40.f3a6d96e.js",
    "revision": "93932dfa447433b02908b8fb28771e28"
  },
  {
    "url": "assets/js/41.2066f8a9.js",
    "revision": "2607ce388553d0869d8971fc53424ad9"
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
    "url": "assets/js/44.73d4d4ca.js",
    "revision": "6fb9bd0da8dbcc8c013093f3776e5304"
  },
  {
    "url": "assets/js/45.419d6336.js",
    "revision": "22d84eec7e70dcbee063dae7250eb199"
  },
  {
    "url": "assets/js/46.62605f6f.js",
    "revision": "84ba3bb3553b0dda996de24b90a7c194"
  },
  {
    "url": "assets/js/47.6519216c.js",
    "revision": "15ea0e65e5fe57363f7548866b483dd0"
  },
  {
    "url": "assets/js/48.17351e90.js",
    "revision": "0051082dd99da8e0abdf87fa5191d6ba"
  },
  {
    "url": "assets/js/49.d446fea5.js",
    "revision": "dfab15324fab4b7e5645a5c02bc4850d"
  },
  {
    "url": "assets/js/5.2d578415.js",
    "revision": "5c8defe524dd0382b12b6b5427d54269"
  },
  {
    "url": "assets/js/50.2eb73eac.js",
    "revision": "bd7cadd88e3d2f7516225aba9204a6a9"
  },
  {
    "url": "assets/js/51.269419de.js",
    "revision": "93bbeefcaf1df02d88f67f42834933c4"
  },
  {
    "url": "assets/js/52.9cbb7f96.js",
    "revision": "006dd8cbb6457925c5c6a823e56b1ae6"
  },
  {
    "url": "assets/js/53.ab682d5e.js",
    "revision": "0b81f85d81e02a30a7d4fa066326cec9"
  },
  {
    "url": "assets/js/54.7ba71bed.js",
    "revision": "b9f052ca95b9b70212108784f842e350"
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
    "url": "assets/js/9.0cc67391.js",
    "revision": "5cdd0c336e3e5a1c4d9a4191fa0f0161"
  },
  {
    "url": "assets/js/app.e5e0fbf3.js",
    "revision": "c4aadfc62bb6e7b60efd286a72756438"
  },
  {
    "url": "Design pattern/React.html",
    "revision": "ebd8e47014085d7ed5b3a31bf51e2bcd"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "a88808b355ade8af12043bee1fddc36a"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "db1fb4c9a6e885588001e8fd4f7dbc74"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "31bc52eab3424e03a4242451d05e703e"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "6b10b32b98fce81b07c3f850493fccb0"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "6a8b99278159a02925123cd5c17a46ce"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "057951e916a3c20f566ccba69e54921c"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "1d0c6dcf7bc5af7e8706e7f265259aa0"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "0fd188ce336d6f9260f83d688d7258de"
  },
  {
    "url": "leetcode/easy/largestTriangleArea.html",
    "revision": "8091905d946c1bc18289abfb1efc9736"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "6d552fb7ca7f25c9f0d50e3eae5e996c"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "aa76d3cd18e7874fad8055767ad6c3a1"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "0fd182e45d6341c46451c7c42f12e3e3"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "a589065ab5e6197de36135584e1d4767"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "d2a72007d301bfe4d3a03d5f2cf4741a"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "e1e3eef90ecb9ba26efc194934f1040f"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "e3ab668d5011b062ad8a1c21453e6ddb"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "4569b818e494bc59d9896a3838e4eb5c"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "55bf42ca3b565cca0bfca470cfce0c2e"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "10f1ba0a26d95fb3a2595974f825ef00"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "03e8b92500dbae997a1fba9ece656904"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "3198f9ebbd01cdc156c695e47e213fe1"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "22d59de8609ae42a59505ff473cae382"
  },
  {
    "url": "leetcode/middle/buildTree.html",
    "revision": "053608b702cc3df37570c4aa9a82e5ce"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "741ec8b8d60fe37aa5205c59a686fa7d"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "9309c3d59ee74d87b69ebfffd237779f"
  },
  {
    "url": "leetcode/middle/convert.html",
    "revision": "5e6f5027307f2c06cbfb01aed0d3f244"
  },
  {
    "url": "leetcode/middle/exist.html",
    "revision": "2cb1ff000577d8788f0a3643719e22dc"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "a71f626611c0b3feb98d38bd8b1f2e8e"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "dceae45e87b15c76ad0d72291c23f855"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "6c4a844e7d6d125ef00a57b9d15cdeb3"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "52d1a476393b12d9307caba076da2b43"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "752bb5689e52e6bb8b1e3bc190dbbd7d"
  },
  {
    "url": "leetcode/middle/movingCount.html",
    "revision": "6f924dd032493cb0dafb2f1aecd2bd35"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "1e87b002d668d645076a11c413de266c"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "c79d46c62228ce3b85caf05ebb9b8a14"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "32036c28aaf41808d8137f706965705d"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "161a081fa2d9cc025d6e59c2f7de7fe2"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "12a263da5754ea5e4d3ce9810469ba78"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "70c05f782891e3f30b14f87a829a7054"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "dfc6870ecfd06b1b665c3b20f80af940"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "80850fe0f5ecf6f9d4daa8e437a83fed"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "15f91dcf92159e60e5c2e3e8b1eabff0"
  },
  {
    "url": "Tiny/事件系统.html",
    "revision": "f3dc8272829493d4aaba84e42a68d028"
  },
  {
    "url": "Tiny/关于小程序的探索.html",
    "revision": "8d1a1e78a7efa35886fdcb972992996b"
  },
  {
    "url": "Tiny/小程序JSBridge.html",
    "revision": "60176dda72bc54c3abbab4a5752405b0"
  },
  {
    "url": "Tiny/自定义组件web-component化.html",
    "revision": "d80c34985ca33ec18adf6610e3504ef3"
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
