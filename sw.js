importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "60d03e0e9a18746188d36e0a6fc43ae8"
  },
  {
    "url": "about/index.html",
    "revision": "dac89b49b89574f559c5876a75df45a6"
  },
  {
    "url": "assets/css/main.css",
    "revision": "adabff4a6db3d6d944065bd5ffccab06"
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
    "url": "assets/js/lunr/lunr-en.js",
    "revision": "8c1c664d8ed573e484258337e048286a"
  },
  {
    "url": "assets/js/lunr/lunr-gr.js",
    "revision": "9363d4be641b9be823bba6f17fd87871"
  },
  {
    "url": "assets/js/lunr/lunr-store.js",
    "revision": "69da308b6c9266fd9a0d735af2f5dbad"
  },
  {
    "url": "assets/js/lunr/lunr.js",
    "revision": "725bf83f6b217652b51d98480a7d060b"
  },
  {
    "url": "assets/js/lunr/lunr.min.js",
    "revision": "7eac9eb2bea17aeda59860eea734d786"
  },
  {
    "url": "assets/js/main.min.js",
    "revision": "d8d6e312dfd298106cea56b384b523a6"
  },
  {
    "url": "blog/2018/06/10/browser-extensions/index.html",
    "revision": "22d197e029478c2a61f21c4760b6e550"
  },
  {
    "url": "blog/2018/06/12/secure-your-passwords/index.html",
    "revision": "94001a26f5fa7753aa347c3d5c39ed0d"
  },
  {
    "url": "blog/2018/06/13/how-to-create-interactive-map-with-mapbox-and-leafletjs/index.html",
    "revision": "d2809356fa69b7437cc14ab577e87b99"
  },
  {
    "url": "blog/2018/06/16/thoughts-on-being-multilingual/index.html",
    "revision": "08eb4869ebc3c17c0662ae15522f4934"
  },
  {
    "url": "blog/2018/07/15/dear-wife/index.html",
    "revision": "92b1d832fa44aca8ec43f5a77361915b"
  },
  {
    "url": "blog/2018/09/03/10-most-used-linux-commands/index.html",
    "revision": "e9614ee735307e0ec9872abe3c52eb14"
  },
  {
    "url": "blog/2019/06/05/thoughts-on-url-shortener-service/index.html",
    "revision": "c5ceabe89884fb992ecca7e841b027ea"
  },
  {
    "url": "blog/2019/06/12/about-unit-tests/index.html",
    "revision": "dc4d2693f9f63871007ff15c26aab5e5"
  },
  {
    "url": "blog/2019/06/13/financial-tools/index.html",
    "revision": "7ec7088a99c029c6302dbf56a8e26c28"
  },
  {
    "url": "blog/2019/06/16/regrowing-my-succulents/index.html",
    "revision": "7a9b4bc1aa6e01e62ed7e98bb53ae3b4"
  },
  {
    "url": "blog/2019/06/30/your-life-or-your-money/index.html",
    "revision": "86b41cacad1328c30c577796b9e8dcd5"
  },
  {
    "url": "blog/2019/07/15/so-you-have-some-money/index.html",
    "revision": "9eddba5a74ba538a6eea784ccb34a424"
  },
  {
    "url": "blog/2019/07/16/the-existence-of-anniversaries/index.html",
    "revision": "bf095a80ad6af506f7f679c23c91ec9e"
  },
  {
    "url": "blog/2019/07/18/changes-i-made-for-my-blogs-theme/index.html",
    "revision": "88cbf3ed033ce3982c5e260aaf36781c"
  },
  {
    "url": "blog/2019/07/20/bai-tieng-viet/index.html",
    "revision": "29d56f789c36e998f9247ed1f05cbf86"
  },
  {
    "url": "blog/2019/07/22/how-to-deploy-a-github-page-using-circleci-20-custom-jekyll-gems/index.html",
    "revision": "bc306a1c17157774e2f37a169a559e11"
  },
  {
    "url": "blog/2019/07/23/how-to-deploy-to-github-pages-using-travisci/index.html",
    "revision": "8a563c4e2961eb90593ad52fa664d5b8"
  },
  {
    "url": "blog/2019/07/24/useful-commands-for-postgresql-mysql/index.html",
    "revision": "d173b661b478aa2855bb6f72ce7218be"
  },
  {
    "url": "blog/2019/07/25/tinyalias-url-shortener-design-and-features/index.html",
    "revision": "faef05ce073fec6d528ba63375025756"
  },
  {
    "url": "blog/2019/07/26/customize-part-of-your-life-with-ifttt/index.html",
    "revision": "c6234e08317923b4a9e073c8037b0e4f"
  },
  {
    "url": "blog/2019/07/26/my-blog-pagespeed-insights-score-jasonthai-me/index.html",
    "revision": "70a12a6952ea92604ea29fb9d2d4b7a3"
  },
  {
    "url": "blog/2019/07/27/apply-different-styles-to-mobile-vs-web-view-using-media/index.html",
    "revision": "a24571ae55e00125d35ae5ff854fbbf6"
  },
  {
    "url": "blog/2019/07/28/42nd-biofreeze-sf-marathon-1st-half/index.html",
    "revision": "33ec866739d46403789897119a868875"
  },
  {
    "url": "blog/2019/08/02/what-im-up-to-in-july-2019/index.html",
    "revision": "04e5df90d3421ad4dc2bba867fd7e061"
  },
  {
    "url": "blog/2019/08/04/three-proofs-total-stock-market-is-efficient/index.html",
    "revision": "57a9c06272c6c0b538812a470e9d9438"
  },
  {
    "url": "blog/2019/08/06/enable-offline-support-to-websites-with-workbox/index.html",
    "revision": "f7253c4fbceb0a0749c2cb6580c343bb"
  },
  {
    "url": "blog/2019/08/07/i-turned-my-blog-into-a-web-progress-app/index.html",
    "revision": "fd5f61a00f08f2bf0d9285901350c949"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "e3b942b062127ff5e1a78399cd04b30a"
  },
  {
    "url": "categories/finance/index.html",
    "revision": "f4500beccd7e0c1cc0ca61d5777f6683"
  },
  {
    "url": "categories/index.html",
    "revision": "f86f212ff25205eb6b3027df76b14e44"
  },
  {
    "url": "categories/tech/index.html",
    "revision": "7a1a120ee044619b835b7115add89f87"
  },
  {
    "url": "favicon.ico",
    "revision": "d45dae1c4971840baa50643d92208269"
  },
  {
    "url": "index.html",
    "revision": "8955e55a53f1f3cb2194d61ee468155c"
  },
  {
    "url": "manifest.json",
    "revision": "341768a8729bf2202ecffa5f36da3560"
  },
  {
    "url": "page2/index.html",
    "revision": "f81838364dc7dcf3c391018fef1b2c59"
  },
  {
    "url": "page3/index.html",
    "revision": "97db27c56c68148d5f2b32cf266710b8"
  },
  {
    "url": "page4/index.html",
    "revision": "35683f5f21f49bf3c8d48dd1927584a7"
  },
  {
    "url": "page5/index.html",
    "revision": "b9d105dbeecef3ba0d42e9cfae2374b2"
  },
  {
    "url": "page6/index.html",
    "revision": "56e4c43907197e7bcad268eb14807666"
  },
  {
    "url": "robots.txt",
    "revision": "2fac8a129285b1b58020ae33bd484690"
  },
  {
    "url": "tags/index.html",
    "revision": "1b94283c930ff7e487902735a7a40f68"
  },
  {
    "url": "visited-places/index.html",
    "revision": "f058c88f9a545939903ef9300d4967fd"
  },
  {
    "url": "workbox-config.js",
    "revision": "ea01ee827d6da686aa3dbb09fb2783a0"
  },
  {
    "url": "year-archive/index.html",
    "revision": "ec4499f8c919beabd5c8923ca212c5e5"
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