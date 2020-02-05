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
    "revision": "dc8893cff7ad22c1d9825cff058fcf0e"
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
    "url": "assets/js/16.e052a7c6.js",
    "revision": "d936af17323f3ee42dc980492a3ebf25"
  },
  {
    "url": "assets/js/17.56c195c9.js",
    "revision": "e3d028b0933993e5ce722c762980d7f0"
  },
  {
    "url": "assets/js/18.acaede67.js",
    "revision": "e15b4398641ee5152a1846a7409ac70b"
  },
  {
    "url": "assets/js/19.4cd6122a.js",
    "revision": "b281069654c47308e65deca4e4a67a26"
  },
  {
    "url": "assets/js/2.3185b5b6.js",
    "revision": "1a8701f6c211229d718557d50b690642"
  },
  {
    "url": "assets/js/20.724d2a1d.js",
    "revision": "bebe1abd7074bcf4a57697dd14222963"
  },
  {
    "url": "assets/js/21.c4be5402.js",
    "revision": "3a09a36a43a9272a08803b4df6d67e6a"
  },
  {
    "url": "assets/js/22.b19e7a56.js",
    "revision": "1c75354ae80bb2a50d89a6cd172d85e9"
  },
  {
    "url": "assets/js/23.0c48ee4d.js",
    "revision": "706f941b5c3211f5e048fbca7ab0aa46"
  },
  {
    "url": "assets/js/24.51ed836c.js",
    "revision": "43e84986961a76c6e7643f47a6d338fc"
  },
  {
    "url": "assets/js/25.4b1af86f.js",
    "revision": "1f1f4374e97601240bc781a7cc562944"
  },
  {
    "url": "assets/js/26.08ebcc11.js",
    "revision": "f1ca3040f33328a1d1fd386945535b41"
  },
  {
    "url": "assets/js/27.8204156f.js",
    "revision": "eda8fa7a38b69118dac6d67f12a58665"
  },
  {
    "url": "assets/js/28.dca0ee7d.js",
    "revision": "9421943017e0f208c0b31c2941360860"
  },
  {
    "url": "assets/js/29.a513874c.js",
    "revision": "ff9516315d4233506d43c52bc3f2fcad"
  },
  {
    "url": "assets/js/3.1f4717a5.js",
    "revision": "e2083f393ac1acdf3f5d11155bd8e00d"
  },
  {
    "url": "assets/js/30.91c81396.js",
    "revision": "f7e8d1a76f7557fb486e83ca5dd572c9"
  },
  {
    "url": "assets/js/31.845e5293.js",
    "revision": "318b3f9b5c0c00e15d56b4284fac5be4"
  },
  {
    "url": "assets/js/32.7926611d.js",
    "revision": "91dd85b5edcaeb4a82513e385211495a"
  },
  {
    "url": "assets/js/33.a70dfc49.js",
    "revision": "fc3e529311fb541ee746059a6e05caec"
  },
  {
    "url": "assets/js/34.bc3ba2a0.js",
    "revision": "e97bc145ee4f3c3b7da28760577f282b"
  },
  {
    "url": "assets/js/35.b3e0c81a.js",
    "revision": "23e4555c21898627825fc96eeff803a1"
  },
  {
    "url": "assets/js/4.7924b108.js",
    "revision": "8a6585d64067ec908902e94671f0a83b"
  },
  {
    "url": "assets/js/5.fc907d44.js",
    "revision": "34f686b1d19a2afabdbb83243fbb1c77"
  },
  {
    "url": "assets/js/6.49d749c3.js",
    "revision": "c2711f3c6ee615f8e12af92be50f4efb"
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
    "url": "assets/js/app.45b884d3.js",
    "revision": "10ccae86be265a59c661bc25d3bcccb0"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "d14b3c13263d660b1a002b5ba2be5042"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "4ddaeb00b18b5f2125dd5ea7efbc5e54"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "261155fb0c746b01cb881b23957d1844"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "fe234ac62d01e31d420bcaf6b4f228ac"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "5a81e5fdcbfbf7b051658c34802a2398"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "4cd2847a1a3d158393765cd5f1881451"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "cb825a4ca9fbdf365d3de50219ad416f"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "8259ef801085674af68e4cb111920bfa"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "72f7be233053112ed730bc4678a8e279"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "ce646ac326ff794c37f621bfe1dd43fb"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "b1787ae9c02f431f160cfad5a42953a9"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "03e9174db665748123abbdfd9716de23"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "d82adc004b1da91c0493e414eb4952e3"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "f8326fda4e6ce225b5b4ea2a3d091fa6"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "26dd311d4843c3a923aa7754f294b89f"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "12a1fb3e6a8838bc8f45b3fa92592d04"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "ed7f915331a3c421ec71e18b0771af52"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "1b1b938b4b6feacc6da3ca169c02bc53"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "f7e60e3ce8105a398976f59870900849"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "444d68e4cb45a85b8a4938b384763cdd"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "ffd794b766cff2bd3ffbdab3a2b9659e"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "fbd6f7eb2dc92163e77de60efc190fbf"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "4a2218bbc9a1f0366cdbaf44e0b14a5f"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "16e07c1652fe7d33e2f66a84a556bc8b"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "ad2af7b47e38559d0a0116de40c27e4c"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "218c66eaed02f5b358a8e3dcc12ceb9c"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "bd5abfe1f39f631f741a35505e17ed63"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "2601991457a1cab3f6aed3996b1e90b2"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "9dde0d0f3c4bb1f881cf3940820a6931"
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
