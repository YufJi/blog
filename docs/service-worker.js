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
    "revision": "50c59dd7b9026c271fda9252cbdff541"
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
    "url": "assets/js/13.e7b3544f.js",
    "revision": "cd9f4e67520a37652d526c361434740e"
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
    "url": "assets/js/19.ebf34356.js",
    "revision": "11c5af78b108f713dae2639ae50dc5f9"
  },
  {
    "url": "assets/js/2.ff78d0ce.js",
    "revision": "f60ded140f7bfdb7448bff13f49d73e5"
  },
  {
    "url": "assets/js/20.00be0d4f.js",
    "revision": "03a032f2c7448a59c86d1c5b6a9dac3a"
  },
  {
    "url": "assets/js/21.b7ebe637.js",
    "revision": "ad3cb613185e776574f5fd94e13b28de"
  },
  {
    "url": "assets/js/22.5069a372.js",
    "revision": "61af687ec24ea9e55c5bdb6d098abb03"
  },
  {
    "url": "assets/js/23.aff6a42d.js",
    "revision": "6e2164423875d2fb8f7673f261f0a065"
  },
  {
    "url": "assets/js/24.aa2da99e.js",
    "revision": "7ca2230be007adef147d492a630275d6"
  },
  {
    "url": "assets/js/25.7b9c6c3c.js",
    "revision": "2e0d42ff1a6cd05a7ca3d350ae1d3803"
  },
  {
    "url": "assets/js/26.ccb3a3ed.js",
    "revision": "e2638423f10f5bc5116fb9901819e441"
  },
  {
    "url": "assets/js/27.95346619.js",
    "revision": "d1cd2da9a20237fe0fd8032ffea25c81"
  },
  {
    "url": "assets/js/28.b0818266.js",
    "revision": "e9e35cbfc8201b0049b81b51a0a0c569"
  },
  {
    "url": "assets/js/29.7d3aad84.js",
    "revision": "bcff3f454c755af6470d38c8694859f0"
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
    "url": "assets/js/31.8ef9ff97.js",
    "revision": "df0952688fa37d0a79a125981c3f601d"
  },
  {
    "url": "assets/js/32.3fdb310b.js",
    "revision": "82b28169ed5c3530c21bd1928ff924e4"
  },
  {
    "url": "assets/js/33.baa0491a.js",
    "revision": "cc74ef0032a7e0a4f06ce58c539afdf8"
  },
  {
    "url": "assets/js/34.37c939d6.js",
    "revision": "fa8c943e871fd6f12b3708e591e02414"
  },
  {
    "url": "assets/js/35.fbd0de0f.js",
    "revision": "8410bed1413c72a0ccdbddec5621d48a"
  },
  {
    "url": "assets/js/36.d4ccbca1.js",
    "revision": "449dc204fbbb25ad45ca4cf84e24f7aa"
  },
  {
    "url": "assets/js/37.4a7a0d65.js",
    "revision": "71a2c88f639a6e36bade39545b4e0b83"
  },
  {
    "url": "assets/js/38.c0aaeb01.js",
    "revision": "f72d2e897db767579c242a7575ece304"
  },
  {
    "url": "assets/js/39.dacb20b5.js",
    "revision": "e8790b7e1d90ef13a04f79f984f56268"
  },
  {
    "url": "assets/js/4.4eeafd97.js",
    "revision": "547ec177c31ee5031d6a06e48ef8ed0a"
  },
  {
    "url": "assets/js/40.e35e80c1.js",
    "revision": "afd54e54edf9c8777933f0a4c1e7c621"
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
    "url": "assets/js/45.81d3100b.js",
    "revision": "844c9a84634ce22f8002ae2339ca9b81"
  },
  {
    "url": "assets/js/46.fc0a6797.js",
    "revision": "759167b2583f42cd7e97137c6ba5cc0e"
  },
  {
    "url": "assets/js/47.a05ffe84.js",
    "revision": "21077e2b242eec8639a49c4299030802"
  },
  {
    "url": "assets/js/48.366fccae.js",
    "revision": "dc08c83900c473d1920d9888bc582832"
  },
  {
    "url": "assets/js/49.2f876cfb.js",
    "revision": "dba0405c8776d3638532673b48d8714f"
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
    "url": "assets/js/51.a994f7f4.js",
    "revision": "b385d94abc1a987fa1d917da8eb1e395"
  },
  {
    "url": "assets/js/52.e0ebe5bf.js",
    "revision": "980474c0e50d20c5df1de3276667263f"
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
    "url": "assets/js/9.ced39cbf.js",
    "revision": "c1884b1ba8eb6944855bb22b89cb5b0d"
  },
  {
    "url": "assets/js/app.75532cf3.js",
    "revision": "4b97914e41b48ac0b4f9df9d7496b570"
  },
  {
    "url": "Design pattern/React.html",
    "revision": "2241357b2609d36d18d176a40efaf815"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "28bf1aab80878b4fdb25dd217cadd1ea"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "e9017ca8def7435fcf40b0347c6eac00"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "549b1186dbd4b34bc2308e5fe5e7a594"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "ccfa55e9b4685f7e96fd367f3c8e86f4"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "598ea1217044c24700012d699dd7b6dc"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "fe14a9991f295a5504cd5b92f4c7bf33"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "26c5a6ff52342d464533d56ea2cfd70b"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "94de3d2c3b2754730bc8c348845b9a89"
  },
  {
    "url": "leetcode/easy/largestTriangleArea.html",
    "revision": "b14a0fed16cbec0ae460d96d6c1d1fb0"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "d64c8ae1c1d27c002b7527ec570f66c0"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "aa3d5f3b1e42e34f61b1646ea20c45b2"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "6ad9ea74b14225e204ac0e834f45055c"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "dd1829407dc84695bdad1dc144a03f39"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "b9db85741c98e3c2bed9bbf519cf9543"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "bd30b1a17c9d0994f8b0403bc587c18c"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "12756dadcaa5062e689cb2b377752395"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "a93708191a8fdf38a187d8ee66184fd9"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "50cafde11b160111d629b51d1ab4953a"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "006beb3f4f97cc71b98b3fea206cad8a"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "b9fff523f22bf60d0a017f7d8be61619"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "f627b47d84fe6a9be2c4de8482907eeb"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "0bf38b9281bd5afe3ba9f648aef9df0b"
  },
  {
    "url": "leetcode/middle/buildTree.html",
    "revision": "26ee0ebac0c8887fbba4b5896e6cf47f"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "8ee3f24b6fc715c5f62b12b9c1af79cc"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "ab71b63dea39c91b2f6e0d096ef1b994"
  },
  {
    "url": "leetcode/middle/convert.html",
    "revision": "9e654c3fb2de195e534b7ed89a11c2ff"
  },
  {
    "url": "leetcode/middle/exist.html",
    "revision": "820f9f902ee7b33c39886d53b1385564"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "84957c46f6c0792bb0729d2fb64d9baa"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "76c554a6eac686f62c5d2045c87531ed"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "f52848590fe6eaf73f718faf26c150d8"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "7d16b8e94326e3e930fec20488d803d6"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "64be7253e718b0fa6602845ab0bf9d77"
  },
  {
    "url": "leetcode/middle/movingCount.html",
    "revision": "643cb01281fa98b6600e7fcc3b5af6c9"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "ab8481a99263ba2c6fbf85b035f051ff"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "1e51fd1babc68c5ebf1efc5af4fd42f4"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "0006f74a7e2064f21255ef9e60084081"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "9f31df9950c0390f3c66cc63f6dd6dff"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "9fd8fb06733d96f5770d60f596f94b2e"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "ab5bcc5adc527b6897f0bbe30146c2d9"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "830dbda5817a43373f521a36839e91a0"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "44872d514a7d0979e71666d414806096"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "1b7bff662731470aed11e42b950a5006"
  },
  {
    "url": "tiny/event.html",
    "revision": "a4c741d2b95840877354800731c3558b"
  },
  {
    "url": "tiny/JSBridge.html",
    "revision": "a979a7a52c92dce5ad4194a864a58ff2"
  },
  {
    "url": "tiny/miniapp.html",
    "revision": "1079c70835bef25f0e7a4611f92b6ef7"
  },
  {
    "url": "tiny/自定义组件web-component化.html",
    "revision": "6cc7b5451b5ef5fabc0285bbae52ac9b"
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
