importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "cc6b049054a72271b12b6e4e0871177a"
  },
  {
    "url": "about/index.html",
    "revision": "3c30b6809a786842b0a4b346a0c4b100"
  },
  {
    "url": "assets/css/style.css",
    "revision": "ccb84dbe3b36c1d5bb05547282fe9ab5"
  },
  {
    "url": "assets/css/syntax.css",
    "revision": "6a933aa35d1779fca5ebabec6f4cf4bc"
  },
  {
    "url": "assets/img/3years_featured.webp",
    "revision": "dd6a69b33a927bff9cf7d4ba64692b0d"
  },
  {
    "url": "assets/img/3years.webp",
    "revision": "d11e011a698d76e7c50ec09eeae6ed84"
  },
  {
    "url": "assets/img/accounting-black-budget.webp",
    "revision": "0baf1cf503352b15ffb3c090aad44544"
  },
  {
    "url": "assets/img/asset-allocation.webp",
    "revision": "55d06022df0403aee95a8426f4d0dd94"
  },
  {
    "url": "assets/img/blur-chart-data.webp",
    "revision": "1b5f133eb62d240f5de0aaaae015ca8a"
  },
  {
    "url": "assets/img/blur-close-up-environment-401213.webp",
    "revision": "5697fb90df91c7433ccc3ca138adbc7d"
  },
  {
    "url": "assets/img/browser-2457113_1280.webp",
    "revision": "51f3dbfaf8dfe86fdda3c528609fe17e"
  },
  {
    "url": "assets/img/circleci-build.webp",
    "revision": "e107abd1989ae254b7f2e2b78d298f22"
  },
  {
    "url": "assets/img/circleci-logo-1200x630.webp",
    "revision": "4efd97ebc1d2dd027859682d794f2e3d"
  },
  {
    "url": "assets/img/commento-logo.webp",
    "revision": "0887ae3f52c161c74d8ca74dbb342ecb"
  },
  {
    "url": "assets/img/commento.webp",
    "revision": "4b4020361b37988244fb2481957dcca8"
  },
  {
    "url": "assets/img/devtool-audits.webp",
    "revision": "da9dbf21238d4ff002f34ae753eb6ca6"
  },
  {
    "url": "assets/img/half-marathon-cover.webp",
    "revision": "3b1e1e0e323820931dbb1ba9bca2e00a"
  },
  {
    "url": "assets/img/half-marathon.webp",
    "revision": "e68000677d43966036b5b78a32babb8d"
  },
  {
    "url": "assets/img/hello-1907233_1280.webp",
    "revision": "f69edd3bfc208c36992a01fa426b4dd3"
  },
  {
    "url": "assets/img/ifttt-featured.webp",
    "revision": "d3540508507f4184a512933332c1c190"
  },
  {
    "url": "assets/img/jasonthai-mobile-view.webp",
    "revision": "96f545935ef61945b4f9bda03874a1f3"
  },
  {
    "url": "assets/img/jasonthai-web-view.webp",
    "revision": "8df6f2d17d3071f96b23153170ffd7e4"
  },
  {
    "url": "assets/img/logo-travisci-wide1.webp",
    "revision": "a84c54dd4f2caedc916a9f45149958c1"
  },
  {
    "url": "assets/img/money-matters-1173105.webp",
    "revision": "b1a4cdabcc05f8a73e35ace110804e2d"
  },
  {
    "url": "assets/img/pagespeed-featured.webp",
    "revision": "986b659fabd25c6f2a28ebc3b704de88"
  },
  {
    "url": "assets/img/pagespeed-full.webp",
    "revision": "4f12e06567c17af92eabc1900b03e0fb"
  },
  {
    "url": "assets/img/password-checker.webp",
    "revision": "44530d2e9aa5ac1b4ca9e1a8e024f482"
  },
  {
    "url": "assets/img/postage-stamps-484991_640.webp",
    "revision": "fb28067eeef90e00ae79b6085b890547"
  },
  {
    "url": "assets/img/postgresql-vs-mysql-features.webp",
    "revision": "810b3a78726b4ac5be6311bc70c18e7b"
  },
  {
    "url": "assets/img/profile.webp",
    "revision": "2f946d0df136e05ac9535aa661ee28b8"
  },
  {
    "url": "assets/img/puuung-cooking.webp",
    "revision": "b8ea0cf8e13cc2d15b9ba73675b8d80a"
  },
  {
    "url": "assets/img/puuung-dear-wife.webp",
    "revision": "40fb5c8199e9d971d557cb879da57296"
  },
  {
    "url": "assets/img/puuung-traveling.webp",
    "revision": "61bb1a6dfa4933cdd2e8437a5814de7e"
  },
  {
    "url": "assets/img/pwa-logo.webp",
    "revision": "ff1103cc4d47d959894096e1823a1818"
  },
  {
    "url": "assets/img/pwa.webp",
    "revision": "22b0a6f0e5ad27392ffa8a50ea6f7ede"
  },
  {
    "url": "assets/img/responsive-media-queries.webp",
    "revision": "40df0f31f890356b4d6b23e39e4d157d"
  },
  {
    "url": "assets/img/succulent.webp",
    "revision": "53a18d3ed541a8bde79d3c868344ced8"
  },
  {
    "url": "assets/img/the-month-july.webp",
    "revision": "a3442a8d8657a936f2ee2a4c59d6573d"
  },
  {
    "url": "assets/img/tinyalias-analytics.webp",
    "revision": "a868ece8de2192b99641132ae283f569"
  },
  {
    "url": "assets/img/tinyalias-authentication.webp",
    "revision": "211eba794a70ab29e1af5d8c9d7d6d22"
  },
  {
    "url": "assets/img/tinyalias-diagram.webp",
    "revision": "58f3c1d0fff3fe59ffd69045219a82c9"
  },
  {
    "url": "assets/img/tinyalias-mindful.webp",
    "revision": "073cacc4ed05424fecbb99a5a0f5b6a7"
  },
  {
    "url": "assets/img/tinyalias-news.webp",
    "revision": "a7ad126475a33431f2eccccb0927bf4c"
  },
  {
    "url": "assets/img/tinyalias-password.webp",
    "revision": "271988583eb6fe38b501c9508c4d9796"
  },
  {
    "url": "assets/img/tinyalias.webp",
    "revision": "0c13375b0c7bd7ff8c4b5d067be882d4"
  },
  {
    "url": "assets/img/travisci-build.webp",
    "revision": "7768b4ef74a043b18afddda029638f00"
  },
  {
    "url": "assets/img/visited-map.webp",
    "revision": "b271321badd92b935b235dd33860641a"
  },
  {
    "url": "assets/img/workbox.webp",
    "revision": "1013955747d181bbca054f4fc7b952e9"
  },
  {
    "url": "assets/js/countries.js",
    "revision": "9655c6e2fc0472433407ff8a50d4c35c"
  },
  {
    "url": "assets/js/custom.geo.js",
    "revision": "7af09e786b16f198cd1961e7d73b0568"
  },
  {
    "url": "assets/js/jasonthai.me-20190726T112605.json",
    "revision": "c0d4bdf9c151c8ddcf1d40148cb57b19"
  },
  {
    "url": "assets/js/lazysizes.min.js",
    "revision": "149ff45fc6c2f13e892e438a58abb77f"
  },
  {
    "url": "assets/js/ls.unveilhooks.min.js",
    "revision": "26520cf1c19aca4f9fe526db7f6f9944"
  },
  {
    "url": "assets/main.css",
    "revision": "a492db4a07d1805f8a7ade754dcbce5b"
  },
  {
    "url": "assets/minima-social-icons.svg",
    "revision": "3a70b871c930a7ed8af27caa162af123"
  },
  {
    "url": "blog/2018/06/10/browser-extensions/index.html",
    "revision": "8f45ef7967896395753be8383a9a7189"
  },
  {
    "url": "blog/2018/06/12/secure-your-passwords/index.html",
    "revision": "bc90254f63ec54e1d1673a8a5473663a"
  },
  {
    "url": "blog/2018/06/13/how-to-create-interactive-map-with-mapbox-and-leafletjs/index.html",
    "revision": "2e34cc914a0537379f2dedc3641ce4b9"
  },
  {
    "url": "blog/2018/06/16/thoughts-on-being-multilingual/index.html",
    "revision": "c738675d47d8a64ea6d384d55d16fa06"
  },
  {
    "url": "blog/2018/07/15/dear-wife/index.html",
    "revision": "383ba82329367997ffefccf076de8dee"
  },
  {
    "url": "blog/2018/09/03/10-most-used-linux-commands/index.html",
    "revision": "e6756da0cec41549f0dc7b4d0e9c1867"
  },
  {
    "url": "blog/2019/06/05/thoughts-on-url-shortener-service/index.html",
    "revision": "adec1de5ac0270a0f126ed900f138dff"
  },
  {
    "url": "blog/2019/06/12/about-unit-tests/index.html",
    "revision": "74cdcfbe83e6614507ce99bb65a7550a"
  },
  {
    "url": "blog/2019/06/13/financial-tools/index.html",
    "revision": "22b91a208721872c0416301238d32f73"
  },
  {
    "url": "blog/2019/06/16/regrowing-my-succulents/index.html",
    "revision": "9cb87d3fdfba7317cb3550db322016f5"
  },
  {
    "url": "blog/2019/06/30/your-life-or-your-money/index.html",
    "revision": "1618f2cd8b22d0dd40b7ad27d7cb2b4f"
  },
  {
    "url": "blog/2019/07/15/so-you-have-some-money/index.html",
    "revision": "2b95f819586b7dd2b08a1a8cb6de7c22"
  },
  {
    "url": "blog/2019/07/16/the-existence-of-anniversaries/index.html",
    "revision": "07c99d37aa8e6b98132f11f008a6b621"
  },
  {
    "url": "blog/2019/07/18/changes-i-made-for-my-blogs-theme/index.html",
    "revision": "d526ede3f50bb6256c5caa474e9d4ad4"
  },
  {
    "url": "blog/2019/07/20/bai-tieng-viet/index.html",
    "revision": "c6b05881b566e050b78066ad6263e998"
  },
  {
    "url": "blog/2019/07/22/how-to-deploy-a-github-page-using-circleci-20-custom-jekyll-gems/index.html",
    "revision": "305111c9b4462fbebc679e8b9bffd6ae"
  },
  {
    "url": "blog/2019/07/23/how-to-deploy-to-github-pages-using-travisci/index.html",
    "revision": "625ee5d5f962eb721c2be76e381996a6"
  },
  {
    "url": "blog/2019/07/24/useful-commands-for-postgresql-mysql/index.html",
    "revision": "4ce3372d31bd0bfbd66b3e4e236165bd"
  },
  {
    "url": "blog/2019/07/25/tinyalias-url-shortener-design-and-features/index.html",
    "revision": "b9428538be15eae8776b09dace611387"
  },
  {
    "url": "blog/2019/07/26/customize-part-of-your-life-with-ifttt/index.html",
    "revision": "d9b8457f5cc37d31a48f41601bb9f2c4"
  },
  {
    "url": "blog/2019/07/26/my-blog-pagespeed-insights-score-jasonthai-me/index.html",
    "revision": "2f3d33d67314bf866fa9d153397ad681"
  },
  {
    "url": "blog/2019/07/27/apply-different-styles-to-mobile-vs-web-view-using-media/index.html",
    "revision": "a63bff415a74faa81451937f28e86aec"
  },
  {
    "url": "blog/2019/07/28/42nd-biofreeze-sf-marathon-1st-half/index.html",
    "revision": "3338ade3af4d87f0d361ae35fa99c5a9"
  },
  {
    "url": "blog/2019/08/02/what-im-up-to-in-july-2019/index.html",
    "revision": "9b5e6eda114eab0e6c3ed089d8960f59"
  },
  {
    "url": "blog/2019/08/04/three-proofs-total-stock-market-is-efficient/index.html",
    "revision": "4b78b525b2787e75263f0351abde9fb1"
  },
  {
    "url": "blog/2019/08/06/enable-offline-support-to-websites-with-workbox/index.html",
    "revision": "bafad121a39dd6057358e7242df60fbf"
  },
  {
    "url": "blog/2019/08/07/i-turned-my-blog-into-a-web-progress-app/index.html",
    "revision": "37483ce3136af276ece998283274ecb2"
  },
  {
    "url": "blog/2019/08/12/how-to-host-commento-on-apache-webserver/index.html",
    "revision": "559cd1188c49511ae1570b883f3f896f"
  },
  {
    "url": "categories/index.html",
    "revision": "1fc23e99a8fecde2e65806f3ab7688c6"
  },
  {
    "url": "default/index.html",
    "revision": "acfdf58eaf0f12f5f48c83f50657dd9b"
  },
  {
    "url": "favicon.ico",
    "revision": "d45dae1c4971840baa50643d92208269"
  },
  {
    "url": "go/robinhood/index.html",
    "revision": "32133c2962246945ebe1f74834e6ddc8"
  },
  {
    "url": "go/wealthfront/index.html",
    "revision": "ec7844f03947933239687924c1513d9f"
  },
  {
    "url": "go/ynab/index.html",
    "revision": "7b93db56d77f59ed3ce5a7000a2f6f0e"
  },
  {
    "url": "index.html",
    "revision": "85abc45033676e048ac1b4b51e73c1e7"
  },
  {
    "url": "manifest.json",
    "revision": "341768a8729bf2202ecffa5f36da3560"
  },
  {
    "url": "page/2/index.html",
    "revision": "ac50568ac85c4c53b2bdbc196261ced6"
  },
  {
    "url": "page/3/index.html",
    "revision": "c23d961a4d9ca583fa07ceca2bf49078"
  },
  {
    "url": "posts/index.html",
    "revision": "05aa871824b5189f5c46a16dda9bdfd8"
  },
  {
    "url": "redirects.json",
    "revision": "b45bb3f153aeb6a887f6db9b1f1e491c"
  },
  {
    "url": "robots.txt",
    "revision": "2fac8a129285b1b58020ae33bd484690"
  },
  {
    "url": "tags/index.html",
    "revision": "a96ac784cfa1e62945660cc6c1eda660"
  },
  {
    "url": "vi/index.html",
    "revision": "5ffd518833b62e43db25a6a8cc28d68d"
  },
  {
    "url": "visited-places/index.html",
    "revision": "dd85b7a1fa6eecc423b5fd13186fd354"
  },
  {
    "url": "workbox-config.js",
    "revision": "ea01ee827d6da686aa3dbb09fb2783a0"
  }
]);

// Caching Images
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

// Cache CSS and JavaScript Files
workbox.routing.registerRoute(
  /\.(?:js|json|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// Caching Content from Multiple Origins
workbox.routing.registerRoute(
  /.*(?:googleapis|gstatic)\.com/,
  new workbox.strategies.StaleWhileRevalidate(),
);