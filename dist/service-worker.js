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
    "revision": "68660ceddca602367a44a10f63fe6a0e"
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
    "url": "assets/js/10.9aade4c7.js",
    "revision": "b413e095171549e9f85553cf35564769"
  },
  {
    "url": "assets/js/11.d8dbddb8.js",
    "revision": "da57874c9dd4204c11b4e61e28f153b7"
  },
  {
    "url": "assets/js/12.61f7847c.js",
    "revision": "1ae5caaa5bf405d86dd32636d4641740"
  },
  {
    "url": "assets/js/13.e92e54d0.js",
    "revision": "ec559b41370c3cc5a7a9d2ac76266df2"
  },
  {
    "url": "assets/js/14.de559b4a.js",
    "revision": "975da985948e3dbccf6c3fa8211540c7"
  },
  {
    "url": "assets/js/15.8fa5b56a.js",
    "revision": "85f2d996da75b3a27730cfbda06b26e9"
  },
  {
    "url": "assets/js/16.4f71ac4f.js",
    "revision": "9bf1cb35b594f13861960ce4a54788e3"
  },
  {
    "url": "assets/js/17.b2a79575.js",
    "revision": "9b4bd0d6cb49b030c5b9e5c4a06ffb9f"
  },
  {
    "url": "assets/js/18.bd67a472.js",
    "revision": "9008fc2b8ea28dd7b90e6a2801c8a74e"
  },
  {
    "url": "assets/js/19.56715aba.js",
    "revision": "b72435b8c7ba61567d912ecd376265f0"
  },
  {
    "url": "assets/js/2.ff78d0ce.js",
    "revision": "f60ded140f7bfdb7448bff13f49d73e5"
  },
  {
    "url": "assets/js/20.99aebd37.js",
    "revision": "c0a9b11b88b0f17f733ba87cd7ce2917"
  },
  {
    "url": "assets/js/21.91b2fbf2.js",
    "revision": "b65a83e665783885fe8ba33a1ec81046"
  },
  {
    "url": "assets/js/22.1d407b0a.js",
    "revision": "56bc36a31c6d049b9cae96112941002c"
  },
  {
    "url": "assets/js/23.446db008.js",
    "revision": "b350de364ccf258dbd4640722e6ddfc4"
  },
  {
    "url": "assets/js/24.050fa72f.js",
    "revision": "d0d65acb9c9d788bf01614864829781f"
  },
  {
    "url": "assets/js/25.b959b753.js",
    "revision": "ed630746b77a4c35c9578f27c52eb823"
  },
  {
    "url": "assets/js/26.62029e5c.js",
    "revision": "5e11688d1b5aa939f11c572f928779c8"
  },
  {
    "url": "assets/js/27.f571d07b.js",
    "revision": "f9280e7d99b12dbc042586d15fd0be71"
  },
  {
    "url": "assets/js/28.ef1863ae.js",
    "revision": "d77b08b061303b59106079263da3851d"
  },
  {
    "url": "assets/js/29.dc65780d.js",
    "revision": "7090971837c6f7447b489ba9c9c384e3"
  },
  {
    "url": "assets/js/3.72330ca0.js",
    "revision": "b4cc0e91ccbc4a81a736e80259be1df6"
  },
  {
    "url": "assets/js/30.0bd9e0c2.js",
    "revision": "efefb37e360126256aff1d0b4d76580d"
  },
  {
    "url": "assets/js/31.bd741597.js",
    "revision": "c1f507232c02980d56c95083120658f1"
  },
  {
    "url": "assets/js/32.eb134aa3.js",
    "revision": "6b1ce46b23f5262b23411c12d857943a"
  },
  {
    "url": "assets/js/33.280bd58a.js",
    "revision": "acfb0ef0011ce6e17f349ba4f365f79a"
  },
  {
    "url": "assets/js/34.9a3821bf.js",
    "revision": "756e03eccef8293cce3bd182b5eee191"
  },
  {
    "url": "assets/js/35.f4826e41.js",
    "revision": "6692ef8b1d290f945238c4859c7bb35f"
  },
  {
    "url": "assets/js/36.0ceeb75f.js",
    "revision": "3f15aea478c1616229be78c12992332f"
  },
  {
    "url": "assets/js/37.5e916798.js",
    "revision": "370172c910b5ae7d9bd7a80a63af4ec6"
  },
  {
    "url": "assets/js/38.607979af.js",
    "revision": "760bde298d06f2c417f3364e17bf0cd4"
  },
  {
    "url": "assets/js/39.1432036e.js",
    "revision": "32f1a3a979f0b758d3eaec1d58ce7a33"
  },
  {
    "url": "assets/js/4.5ebf5e36.js",
    "revision": "8fb34bfa59996c80bfef2c7e6714c8ef"
  },
  {
    "url": "assets/js/40.b2c70b16.js",
    "revision": "f61f59eaa8b7d3d2f0900929749282e1"
  },
  {
    "url": "assets/js/41.a548b7fb.js",
    "revision": "24a2ac0326cc1801a6ae7af9c2d2f74f"
  },
  {
    "url": "assets/js/42.e31e8951.js",
    "revision": "ed8b8d509de5b15404a4399cef0a07d1"
  },
  {
    "url": "assets/js/43.f8c2e5ee.js",
    "revision": "c43a6662bda63b1e60cb3f5352d77f2e"
  },
  {
    "url": "assets/js/44.e80946cb.js",
    "revision": "005d5113507d00fba351502df3ae4cbc"
  },
  {
    "url": "assets/js/45.7682909c.js",
    "revision": "22d84eec7e70dcbee063dae7250eb199"
  },
  {
    "url": "assets/js/46.9507eb28.js",
    "revision": "227d7729157fab430207b17a3f97048d"
  },
  {
    "url": "assets/js/47.61bedc8a.js",
    "revision": "b137fd1242e9b63a76e8d509c7303ff9"
  },
  {
    "url": "assets/js/48.53aaa33e.js",
    "revision": "0051082dd99da8e0abdf87fa5191d6ba"
  },
  {
    "url": "assets/js/49.3a6640c3.js",
    "revision": "d7ea3749ad8575a88b7ff82f53802fef"
  },
  {
    "url": "assets/js/5.2d578415.js",
    "revision": "5c8defe524dd0382b12b6b5427d54269"
  },
  {
    "url": "assets/js/50.98bb9b87.js",
    "revision": "fcb75d18843a5673b5f2aab1d243afe6"
  },
  {
    "url": "assets/js/51.3da408c7.js",
    "revision": "93bbeefcaf1df02d88f67f42834933c4"
  },
  {
    "url": "assets/js/52.7b55090c.js",
    "revision": "2cc3ec7c5d52e85f904627ad38c3a454"
  },
  {
    "url": "assets/js/53.550f4405.js",
    "revision": "86e140ad69c50022fc89ace3c72e0797"
  },
  {
    "url": "assets/js/54.2e0bf160.js",
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
    "url": "assets/js/9.e02dea0a.js",
    "revision": "af8687e53dc2bea06cdc9c13ab3002a0"
  },
  {
    "url": "assets/js/app.56bfe9f1.js",
    "revision": "eaf470002cedfbe9989f0e6dbf22f04a"
  },
  {
    "url": "Design pattern/React.html",
    "revision": "21fd905c6f68100fdeb0cf5bf40c5c35"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "0b131339e93a26fd0d1c70998ef495fd"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "c1c8cdffe81d89a63e38e3c6e0f1319b"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "7cd9715999c2086040289a054a5a846e"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "9783151a797b70be4a8dbe479eb52bef"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "a7f12a439d79d8fbe326e321a7908755"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "7bdb8f8af70d0bec7f8a2386dfbd209f"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "f8ced9456175a2cb45156da6c78bc8b8"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "059c5bb02872425bcddd8c7e12f03590"
  },
  {
    "url": "leetcode/easy/largestTriangleArea.html",
    "revision": "82a6f5a8b55fef487d0c119f144a21fa"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "ac6b1905e1c824a09232c3600597eb2d"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "a29ea80ce89b10321b5a543d95aa0cc2"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "36014d65deb5c91e51754b8539898623"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "1e577128f21cd8b51f5c7c02d0130c3f"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "eb9c02017ef3b9a01eef673ce5f1be89"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "23cb709e9afc1819c5725697a877d057"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "47740fbe3994cd6d800b3d570160fb5b"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "14ebfadc89c15d148a91de2e87bb0517"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "97fbefa86e6d7f89d1b197e9cce5de3d"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "c8371394153314e2ff8393a3c586adb0"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "c087e1fb7e9ded5523955b6b60ab9ac1"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "018301a13e7f12a86f0109574b7cdebc"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "b7ee0d2dce3dab45cb5c6d69f39638f1"
  },
  {
    "url": "leetcode/middle/buildTree.html",
    "revision": "8e9b61f8f401a788dc8e85c76af44fb9"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "b2edffb52c74892916da2554ba744f07"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "ff96c74b3bc327241fa8ef79d6e02e2b"
  },
  {
    "url": "leetcode/middle/convert.html",
    "revision": "b8425e2dbbdf3926d120d4a36055f522"
  },
  {
    "url": "leetcode/middle/exist.html",
    "revision": "1afd41d3143cb0ef8dec3fe479859ffd"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "3c123802eec04b447c2a11cea5dbda8d"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "67ae2baa4534177064ea02fab7e3b003"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "a7b9b978527812a9b7a6b9c76affa2ea"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "8cfff1d375104cc61f4b52a3a81b7ee4"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "8afaf1c5ba3bde4d1dc8aca496ac17ca"
  },
  {
    "url": "leetcode/middle/movingCount.html",
    "revision": "0ec9e31b830e71da94817e4b85061357"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "705c21f86811e9acee246eec553b3b37"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "b0fa5f939c48cfbbd6637cd71923d93e"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "f07986c60854fc0ef207cb850348428e"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "7efe0fd0ec8f8c8be4eeab7a1cef35e2"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "00e35232d36f917454982b69eaae811f"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "9096dd1002ca91a8a8987661a5d5f650"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "7092a0726a4b78c311d27ece91b0951a"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "214cb8896bc6e33140e1093ecd723649"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "f985f452667d0c4edc601380a3e91175"
  },
  {
    "url": "Tiny/事件系统.html",
    "revision": "24d1f0b8ab5988ab03d9ccd9c375dc5b"
  },
  {
    "url": "Tiny/关于小程序的探索.html",
    "revision": "31e1b65385dfaa2ed70474943b49d5fb"
  },
  {
    "url": "Tiny/小程序JSBridge.html",
    "revision": "84b59f602e422dee94215267d7e89f9a"
  },
  {
    "url": "Tiny/自定义组件web-component化.html",
    "revision": "68e805e840fd2e81ff40c754d0e64c3f"
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
