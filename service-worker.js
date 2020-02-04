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
    "revision": "19cbd67cf3f2448bc89ab73450b8b595"
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
    "url": "assets/js/15.68be2cde.js",
    "revision": "b9909456d6c39d5260cff2b4636d386c"
  },
  {
    "url": "assets/js/16.e69bd2c3.js",
    "revision": "127d59f12815c2b0c8c6ffe8da946ca6"
  },
  {
    "url": "assets/js/17.dc59d94d.js",
    "revision": "7fea1d3e91844d6d979d64d56f5bfbf0"
  },
  {
    "url": "assets/js/18.640c697d.js",
    "revision": "b0fda5ee31a4687a440459f4e211cef5"
  },
  {
    "url": "assets/js/19.6200a5a9.js",
    "revision": "c1f649d0d661f03477f5127654a3f780"
  },
  {
    "url": "assets/js/2.3185b5b6.js",
    "revision": "1a8701f6c211229d718557d50b690642"
  },
  {
    "url": "assets/js/20.f957f8c8.js",
    "revision": "04caca3b49683a129c71763b2ddf7c9d"
  },
  {
    "url": "assets/js/21.79faee42.js",
    "revision": "8cfebd7ef1bb545245b894019fb23b61"
  },
  {
    "url": "assets/js/22.4a50b5a6.js",
    "revision": "7732162f1f4694fbc23d9b5f4c8b40f1"
  },
  {
    "url": "assets/js/23.ec281396.js",
    "revision": "b430e3e50ba67232034fc597fdec0e66"
  },
  {
    "url": "assets/js/24.f577616e.js",
    "revision": "78ef22618761b6758cfef196091307d0"
  },
  {
    "url": "assets/js/25.75b7c962.js",
    "revision": "49dc03d05df73c77ae1083659471d39d"
  },
  {
    "url": "assets/js/26.4876572b.js",
    "revision": "b6a24699c73fd3d36c696ca38da34104"
  },
  {
    "url": "assets/js/27.f797d5af.js",
    "revision": "57e3327d678ef358b5afcc8410fb16f1"
  },
  {
    "url": "assets/js/28.87f88a41.js",
    "revision": "3cbc521318569fcb76d7126d35244b49"
  },
  {
    "url": "assets/js/29.c1ba4be8.js",
    "revision": "5e5aef87c94f030cc1bee77c8fc476bc"
  },
  {
    "url": "assets/js/3.1f4717a5.js",
    "revision": "e2083f393ac1acdf3f5d11155bd8e00d"
  },
  {
    "url": "assets/js/30.5d514959.js",
    "revision": "6b7305ba380061055130ead767dffe86"
  },
  {
    "url": "assets/js/31.16f49bcd.js",
    "revision": "ab0896f2f8b703723da7f1fa45309533"
  },
  {
    "url": "assets/js/32.dd7071ec.js",
    "revision": "ce40c7100360d3dd9dfa5703c6b5c92e"
  },
  {
    "url": "assets/js/33.bad45a37.js",
    "revision": "843788942d1a7d449098b27a16abb14b"
  },
  {
    "url": "assets/js/4.dce469fd.js",
    "revision": "8b6d3b35f45c7dc1ad2248d1dbdea0fd"
  },
  {
    "url": "assets/js/5.b202549a.js",
    "revision": "1e70579302319d55bc91cc0d816798a7"
  },
  {
    "url": "assets/js/6.d83ba3b1.js",
    "revision": "6d1aa03e61f0d7f0aa1a0a3c07389e4c"
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
    "url": "assets/js/app.4cd7d11a.js",
    "revision": "47ba83f9f0b60e4a3613699dc2eadd92"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "0ca1d2a5c9a67882cbde83acf8030a4c"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "c59980c4ff2a7ece3a45028742ec5f5c"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "398e994964b4f567824b33f6d22c3016"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "fc02af1b55c00befebf1345272e21820"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "71db4dfd4f510ade00908b51ac513682"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "40ff07a980e5e834218ef93017ec4375"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "93600a16467ab2292c8019925ffb8e8d"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "f377954d4b4ac70c492c9420c53b8323"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "a7e1d6246db36f5ae173e30152ff2082"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "ad149b9edaf610ae02da281b66eafe04"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "b838765a65650b854e7a64aaddae4218"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "c73aa21348bd617f02247152f02cd728"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "210e17182cd92014ee950426751323da"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "bc91725f9d9cfb0e40c66868e5d2ae83"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "c046f247e14115fa4bbff710e5fe0e54"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "356a0cb3f428923f4534873ce199b358"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "9f504f77a02aaa23feb7345546a95d02"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "c3ff7a8eaaba77f5d36f4cee0faf7a9d"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "2cbcd000f031134a71a1836b51b3546d"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "153957543da37943de13f1eb47f32656"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "b1cdb9cb5e467b868264996a59b5049c"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "66c34e9bb22d160df6e77e4c84e56862"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "cf44b25dfa9f5bf7ad19694f1edc8553"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "56c1315c648cc1c604270394d300a2a4"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "0cfefce6a18c65540fbc79df0abd1c22"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "646232de7458779de3985ffb410d7f24"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "8a04e608d8ce71e0510862748a93963f"
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
