importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "499a0c8168124aab75d2ced8f62abe68"
  },
  {
    "url": "about/index.html",
    "revision": "3c2aaf8632935f11829142fef7b5dafc"
  },
  {
    "url": "assets/css/style.css",
    "revision": "b79e513ddf08e9dc4125cd1566831385"
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
    "revision": "8ac351e5cf98909b09e0dd825775adea"
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
    "revision": "4e866afef789b382d543b3a4b073fc29"
  },
  {
    "url": "assets/minima-social-icons.svg",
    "revision": "3a70b871c930a7ed8af27caa162af123"
  },
  {
    "url": "blog/2018/06/10/browser-extensions/index.html",
    "revision": "13a6c43402084c5e976499ae05d28fff"
  },
  {
    "url": "blog/2018/06/12/secure-your-passwords/index.html",
    "revision": "1be3007184be75c75e01e6f2778b0922"
  },
  {
    "url": "blog/2018/06/13/how-to-create-interactive-map-with-mapbox-and-leafletjs/index.html",
    "revision": "b275e3cb22d29cb0bf0f0616d2433618"
  },
  {
    "url": "blog/2018/06/16/thoughts-on-being-multilingual/index.html",
    "revision": "7df75833251f066a28a1fe3c224ee64f"
  },
  {
    "url": "blog/2018/07/15/dear-wife/index.html",
    "revision": "4aeeb4248fed2c76f3da014b965584d0"
  },
  {
    "url": "blog/2018/09/03/10-most-used-linux-commands/index.html",
    "revision": "1d2f7904bdd3deea5c44e40c64a9f32c"
  },
  {
    "url": "blog/2019/06/05/thoughts-on-url-shortener-service/index.html",
    "revision": "29aaafd535b10f50f86ca1b3403a80f9"
  },
  {
    "url": "blog/2019/06/12/about-unit-tests/index.html",
    "revision": "bcdb31ba88094ea1cdccfba764167ea5"
  },
  {
    "url": "blog/2019/06/13/financial-tools/index.html",
    "revision": "465e2ca0f2d1fd338888ff064d48bd74"
  },
  {
    "url": "blog/2019/06/16/regrowing-my-succulents/index.html",
    "revision": "bb3bb7fb52c424b478c3554297301d79"
  },
  {
    "url": "blog/2019/06/30/your-life-or-your-money/index.html",
    "revision": "9a3d22174598ffc7f4452b266a11ec81"
  },
  {
    "url": "blog/2019/07/15/so-you-have-some-money/index.html",
    "revision": "244b8c05a80a5a8f87f1fb5aeb7d6944"
  },
  {
    "url": "blog/2019/07/16/the-existence-of-anniversaries/index.html",
    "revision": "c81ca45ed15f07056ff0a3ad3dfc7ae4"
  },
  {
    "url": "blog/2019/07/18/changes-i-made-for-my-blogs-theme/index.html",
    "revision": "66c310f8d9df9742eddad7598969160d"
  },
  {
    "url": "blog/2019/07/20/bai-tieng-viet/index.html",
    "revision": "c486118802434c50e5d014f518b09833"
  },
  {
    "url": "blog/2019/07/22/how-to-deploy-a-github-page-using-circleci-20-custom-jekyll-gems/index.html",
    "revision": "bf6a624e0e16cbd72787a5dee7aead02"
  },
  {
    "url": "blog/2019/07/23/how-to-deploy-to-github-pages-using-travisci/index.html",
    "revision": "93f2714e672b41f73e4a57a27fd95765"
  },
  {
    "url": "blog/2019/07/24/useful-commands-for-postgresql-mysql/index.html",
    "revision": "d5c2176280bdefbad1838168b1982196"
  },
  {
    "url": "blog/2019/07/25/tinyalias-url-shortener-design-and-features/index.html",
    "revision": "740dbd7986cc0faffe1c8d12b8539b04"
  },
  {
    "url": "blog/2019/07/26/customize-part-of-your-life-with-ifttt/index.html",
    "revision": "f6a36c54b46e6866f9086760936ca752"
  },
  {
    "url": "blog/2019/07/26/my-blog-pagespeed-insights-score-jasonthai-me/index.html",
    "revision": "0fd8fab1186120303278af958d52b66b"
  },
  {
    "url": "blog/2019/07/27/apply-different-styles-to-mobile-vs-web-view-using-media/index.html",
    "revision": "7e4df55462b9247987b41c75307a90ea"
  },
  {
    "url": "blog/2019/07/28/42nd-biofreeze-sf-marathon-1st-half/index.html",
    "revision": "72b1cac5b3752deca11d4a2595158afa"
  },
  {
    "url": "blog/2019/08/02/what-im-up-to-in-july-2019/index.html",
    "revision": "6e34b3a28791078885cb6e5fa383c22c"
  },
  {
    "url": "blog/2019/08/04/three-proofs-total-stock-market-is-efficient/index.html",
    "revision": "48a4a51ee60b2280c4030640c78bb1cc"
  },
  {
    "url": "blog/2019/08/06/enable-offline-support-to-websites-with-workbox/index.html",
    "revision": "9780598e227baef32a19e9aa98567103"
  },
  {
    "url": "blog/2019/08/07/i-turned-my-blog-into-a-web-progress-app/index.html",
    "revision": "f80c4764f439a8553f788be1304b5a25"
  },
  {
    "url": "blog/2019/08/12/how-to-host-commento-on-apache-webserver/index.html",
    "revision": "894c5b40579023926f3c2e493bb8d639"
  },
  {
    "url": "categories/index.html",
    "revision": "c52a256f1393a6a3dbc531ad9571795b"
  },
  {
    "url": "default/index.html",
    "revision": "96bae6fd91ff855c8a1475ff26da84f0"
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
    "revision": "0d83998bda955edc7bd776812af12448"
  },
  {
    "url": "manifest.json",
    "revision": "a7a76ca0092294394bf7df3fe5000df5"
  },
  {
    "url": "page/2/index.html",
    "revision": "8ef1bd69a23e89824824b3a1dbab02aa"
  },
  {
    "url": "page/3/index.html",
    "revision": "5c01331904a4f422d5ec02bca0b28f23"
  },
  {
    "url": "posts/index.html",
    "revision": "5bedd4bc34aa6b792f00174ce671a2a6"
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
    "revision": "92f60afde241c48d450f22f1363cccb6"
  },
  {
    "url": "vi/index.html",
    "revision": "8ac1e63e21ba58c069abcb2ac850406d"
  },
  {
    "url": "visited-places/index.html",
    "revision": "15d98c4b4af3640c7628a57bbe5c4517"
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