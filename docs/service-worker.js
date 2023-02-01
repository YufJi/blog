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
    "revision": "45bbb625937ef8df45860bbf3316cec5"
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
    "url": "assets/js/10.12ba4a1f.js",
    "revision": "a03b2e96b9da62a4d9076ecb33cf3d85"
  },
  {
    "url": "assets/js/11.fa283d90.js",
    "revision": "986d810a9e2779200df1a52eff51f798"
  },
  {
    "url": "assets/js/12.f829b7d6.js",
    "revision": "84bdf3db3ed5e0ed6d72a1c2fa685829"
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
    "url": "assets/js/15.02e26d11.js",
    "revision": "10f9867a32dfc2fcf0168b3fdb63912d"
  },
  {
    "url": "assets/js/16.adad9447.js",
    "revision": "a9c13d1410fdb34715bc4075c0cf2998"
  },
  {
    "url": "assets/js/17.059dece5.js",
    "revision": "6bc2d760da6242913602458f7d109721"
  },
  {
    "url": "assets/js/18.88a01284.js",
    "revision": "fbcb5031cf01447d2fcfede44e80b328"
  },
  {
    "url": "assets/js/19.96b0ecc2.js",
    "revision": "b72435b8c7ba61567d912ecd376265f0"
  },
  {
    "url": "assets/js/2.ff78d0ce.js",
    "revision": "f60ded140f7bfdb7448bff13f49d73e5"
  },
  {
    "url": "assets/js/20.06411b09.js",
    "revision": "85d1422826654040c85f280d77c8afb6"
  },
  {
    "url": "assets/js/21.196aa8a2.js",
    "revision": "0af1252b71ae9908caafded558a683bb"
  },
  {
    "url": "assets/js/22.1ccdfee7.js",
    "revision": "56bc36a31c6d049b9cae96112941002c"
  },
  {
    "url": "assets/js/23.1fb02562.js",
    "revision": "b350de364ccf258dbd4640722e6ddfc4"
  },
  {
    "url": "assets/js/24.ed20b756.js",
    "revision": "33c14a498ed4bf351bc3540b8a1fa1a1"
  },
  {
    "url": "assets/js/25.cdbd3621.js",
    "revision": "33840b234f0c0bbe021291174c2e3289"
  },
  {
    "url": "assets/js/26.122a0446.js",
    "revision": "20e9ec47983e683207633c5a8fe586b1"
  },
  {
    "url": "assets/js/27.40cb8e85.js",
    "revision": "8a77d937e4e7ba988b0af45d00bb93ce"
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
    "url": "assets/js/3.5c38bc90.js",
    "revision": "67e7ceec98dec0ffe921ec8666286d12"
  },
  {
    "url": "assets/js/30.ec98432d.js",
    "revision": "0177b71b51fe0b3e52b06b6629c1cf10"
  },
  {
    "url": "assets/js/31.73d565ab.js",
    "revision": "c1f507232c02980d56c95083120658f1"
  },
  {
    "url": "assets/js/32.821f82df.js",
    "revision": "6b1ce46b23f5262b23411c12d857943a"
  },
  {
    "url": "assets/js/33.4c3ad177.js",
    "revision": "e2ec7eb3e01ec945689ac8b430d9b74d"
  },
  {
    "url": "assets/js/34.60ef1a2e.js",
    "revision": "300e1180c8ca39de5469844f2da8a0b2"
  },
  {
    "url": "assets/js/35.fdc3e2ea.js",
    "revision": "f9d46f73ace7bd90a185659bddb7c543"
  },
  {
    "url": "assets/js/36.33c3584f.js",
    "revision": "650fc0a3f1e40d34a0049a0719af7b57"
  },
  {
    "url": "assets/js/37.6795bf14.js",
    "revision": "81ee1429967da20a0fc33bc7d16e9e42"
  },
  {
    "url": "assets/js/38.65cb5722.js",
    "revision": "99a417350e8fc7175a3cd06dc5898c36"
  },
  {
    "url": "assets/js/39.49f44145.js",
    "revision": "cc66bc3c9d2c5b38b1a801a76c18d5b9"
  },
  {
    "url": "assets/js/4.f9d38a53.js",
    "revision": "8303334a3d3e32c6f4183cfcba58e237"
  },
  {
    "url": "assets/js/40.6d7c8712.js",
    "revision": "4a14b01c1b21f10df35a0fa354d34b56"
  },
  {
    "url": "assets/js/41.2066f8a9.js",
    "revision": "2607ce388553d0869d8971fc53424ad9"
  },
  {
    "url": "assets/js/42.53881c27.js",
    "revision": "d05442d80369f8a11674293e5ce998b8"
  },
  {
    "url": "assets/js/43.64663163.js",
    "revision": "215f388325e3e937e4f955f2bca5b3ea"
  },
  {
    "url": "assets/js/44.2c947800.js",
    "revision": "ba863e9e36a97e3b8c5b9a6b74a5c750"
  },
  {
    "url": "assets/js/45.19cd15df.js",
    "revision": "25242df4f1e918a610b20f01e995fe01"
  },
  {
    "url": "assets/js/46.198865a8.js",
    "revision": "d70b322423d1736339fbe46678703a22"
  },
  {
    "url": "assets/js/47.0962ce52.js",
    "revision": "65593c07848bcb45b5b79e942aeacf69"
  },
  {
    "url": "assets/js/48.acc05d15.js",
    "revision": "9c912c584c4db5c03311ca0d780fd261"
  },
  {
    "url": "assets/js/49.99d71659.js",
    "revision": "745db08649a3234ac75b727c4e3e236c"
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
    "url": "assets/js/51.e1a15141.js",
    "revision": "dedf2179b76664f49b5e0e6600bdbd2f"
  },
  {
    "url": "assets/js/52.0c2333c6.js",
    "revision": "3e33c220d9bd7db19999a852389f9359"
  },
  {
    "url": "assets/js/53.69e81ad1.js",
    "revision": "576bfc89b7a3c2a443eb7da197ccd816"
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
    "url": "assets/js/7.1f572ee9.js",
    "revision": "a4e023ddbf990fb29d5fd8d8eb7df65f"
  },
  {
    "url": "assets/js/8.90ee672e.js",
    "revision": "2793a10fe0bc0646e77ea85501b1958f"
  },
  {
    "url": "assets/js/9.69c65aed.js",
    "revision": "bdba5adbe556c76446d9d25937dc8467"
  },
  {
    "url": "assets/js/app.25b0bc1c.js",
    "revision": "486c903617411eb8585c1c28f32b8ae5"
  },
  {
    "url": "Design pattern/React.html",
    "revision": "61c9179b40574995a740b2519f18a4e0"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "29256de0bcef9aeeb43956528ae78208"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "fa5060db150afda06eb961e8d275a04a"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "e5405b268bedeb59c04e8f5db1ca3b38"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "4180c39e2f0af6f5a3716d0361ae750f"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "eb05e785c93f98615e4b12c772b94f63"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "10e7cf3d3e386f6cf8052211ea20a9a2"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "f29f8dc07d917f619080dea749bfd2c3"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "516e158c06b01e97d2e1fc1866c71270"
  },
  {
    "url": "leetcode/easy/largestTriangleArea.html",
    "revision": "614161d573dbd95a0f4ef4b45084ce1c"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "0687a7c1e6add3eb71bf61dfafedc66a"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "e5db5aa7b6ce99c2f84e60ad04249082"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "1385b06650ba37aaab9dedde647b6ba5"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "a469d7eb33aaa92ef119695860165362"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "37de8df840e5a628eec38d48fa5eb909"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "9a50ca356f5d2baab843f8354a5b8fab"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "50757e579cdc3ba5da87648f4cb9a85a"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "80ef777d2e97875a174b71a3d0eabfc7"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "0bb9bc2a984118037b87f40d76b89a4d"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "76760b339944f91eb7400c90b861703e"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "fbad0de5c6bbbb4789fecbc88b6ee8e0"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "fdcaf4b3de829645a04a95470ee1c893"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "deea3f08d128948787905904b1193310"
  },
  {
    "url": "leetcode/middle/buildTree.html",
    "revision": "25ea3c5db984d7bc0df23f81ed7acdd3"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "b502534f8ff17e65c373b8262a2b1577"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "9b2a8ad7ad1de91daa09f71513b6ca9e"
  },
  {
    "url": "leetcode/middle/convert.html",
    "revision": "6249cd857c583c54211bc3632f2d1af5"
  },
  {
    "url": "leetcode/middle/exist.html",
    "revision": "b3d4ed3fcc22f12adf89ff48d024f84d"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "b1f89f2d19ca506c5fed07405f4ef1a8"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "f5777666628551acf6f7b8462c9105bf"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "ec8103700605f293c7ba9e0267b3e511"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "5b2c4e39f4fa24fc2a2e4808b66104d4"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "d95c5ebc4893054bf01666949f80443c"
  },
  {
    "url": "leetcode/middle/movingCount.html",
    "revision": "f242ffbcbb5f3c3266f20edb4d096f28"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "b72a6620bd8900a7c298c1186f7c8ba7"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "26d9a0bb5cd1388be7132459fc3520a2"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "86fd5c5904e979b94d68f748357d6016"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "b94f0d88161db6200fef579d3f809a78"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "4247269aaf1d096b170d4994dc32f9f0"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "55158ce0ef52272db264696ecfe327c5"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "ea1664df529635fc85c9efb673c1e06c"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "397c318aa614c06c191a40a6014622df"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "65b8cd70819fd389e9451dd464212c4c"
  },
  {
    "url": "Tiny/event.html",
    "revision": "540d1d0f04cbcd12128cd47fb9752a18"
  },
  {
    "url": "Tiny/JSBridge.html",
    "revision": "b4e7eb96ee000147443a433a5ba0d77f"
  },
  {
    "url": "Tiny/miniapp.html",
    "revision": "6cfcd309118e02061966c770789227ae"
  },
  {
    "url": "Tiny/自定义组件web-component化.html",
    "revision": "eb977c26fa5533bd5c83c8eb05bd6860"
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
