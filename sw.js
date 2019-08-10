importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "fdb640efe567a60556b92ab8f25e5c15"
  },
  {
    "url": "about/index.html",
    "revision": "9acaadfa4b2374412cdf6ba8790bf7dc"
  },
  {
    "url": "assets/css/main.css",
    "revision": "5a5c6a31ff50256ff16c2c07aab3234b"
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
    "revision": "75c97e4b78cb06b7b78d4a420e6a51a9"
  },
  {
    "url": "blog/2018/06/12/secure-your-passwords/index.html",
    "revision": "5e8207e2826568336341ac29d363dc11"
  },
  {
    "url": "blog/2018/06/13/how-to-create-interactive-map-with-mapbox-and-leafletjs/index.html",
    "revision": "409c1f41d7c20df06c8689f2aad28bb7"
  },
  {
    "url": "blog/2018/06/16/thoughts-on-being-multilingual/index.html",
    "revision": "8470e4d409dc81cb047fc64e184c2560"
  },
  {
    "url": "blog/2018/07/15/dear-wife/index.html",
    "revision": "ed4942cf59fb0cb6861470b8bbcdc3c8"
  },
  {
    "url": "blog/2018/09/03/10-most-used-linux-commands/index.html",
    "revision": "b689eacff2c9cb9f3caa92e968b20dc5"
  },
  {
    "url": "blog/2019/06/05/thoughts-on-url-shortener-service/index.html",
    "revision": "98ebcf914f422e8d6acdd5cff780b9f3"
  },
  {
    "url": "blog/2019/06/12/about-unit-tests/index.html",
    "revision": "eaf0f42b2338652d090ae63918aa1616"
  },
  {
    "url": "blog/2019/06/13/financial-tools/index.html",
    "revision": "4a832bd4c53cfcce8ad8756266b3ddae"
  },
  {
    "url": "blog/2019/06/16/regrowing-my-succulents/index.html",
    "revision": "ed91d5e660c062cf777bb3e17a03c923"
  },
  {
    "url": "blog/2019/06/30/your-life-or-your-money/index.html",
    "revision": "4e0e346347217b8d326ebf0f5837f187"
  },
  {
    "url": "blog/2019/07/15/so-you-have-some-money/index.html",
    "revision": "8440ba8f200c369d665f64b70b88bc66"
  },
  {
    "url": "blog/2019/07/16/the-existence-of-anniversaries/index.html",
    "revision": "fac401801a276c40732686558a5dee61"
  },
  {
    "url": "blog/2019/07/18/changes-i-made-for-my-blogs-theme/index.html",
    "revision": "e301a2da65d6cbb58a106a057b85abbe"
  },
  {
    "url": "blog/2019/07/20/bai-tieng-viet/index.html",
    "revision": "b46e572175078b1e17d1029f3cdf933d"
  },
  {
    "url": "blog/2019/07/22/how-to-deploy-a-github-page-using-circleci-20-custom-jekyll-gems/index.html",
    "revision": "2145b4932163a26606888ac1fc6debfb"
  },
  {
    "url": "blog/2019/07/23/how-to-deploy-to-github-pages-using-travisci/index.html",
    "revision": "3d357b14770c3dc9d4e9b47b94626070"
  },
  {
    "url": "blog/2019/07/24/useful-commands-for-postgresql-mysql/index.html",
    "revision": "e091a2e845e75e2d80e4e5523bf253d2"
  },
  {
    "url": "blog/2019/07/25/tinyalias-url-shortener-design-and-features/index.html",
    "revision": "8339d714293454ed1f4d46202a75f850"
  },
  {
    "url": "blog/2019/07/26/customize-part-of-your-life-with-ifttt/index.html",
    "revision": "e4763dcd9945858bb589e4e52e014386"
  },
  {
    "url": "blog/2019/07/26/my-blog-pagespeed-insights-score-jasonthai-me/index.html",
    "revision": "7d37a8082e6e1dcc24b9e463a1751ff4"
  },
  {
    "url": "blog/2019/07/27/apply-different-styles-to-mobile-vs-web-view-using-media/index.html",
    "revision": "c1e78016c4c959d0f357f22cea94846c"
  },
  {
    "url": "blog/2019/07/28/42nd-biofreeze-sf-marathon-1st-half/index.html",
    "revision": "ffa416d103326cb9eb2d02779732c551"
  },
  {
    "url": "blog/2019/08/02/what-im-up-to-in-july-2019/index.html",
    "revision": "0be816a36c956e66c01ef6d8785836e9"
  },
  {
    "url": "blog/2019/08/04/three-proofs-total-stock-market-is-efficient/index.html",
    "revision": "79204c7167068eddbd09caa2f48db0cf"
  },
  {
    "url": "blog/2019/08/06/enable-offline-support-to-websites-with-workbox/index.html",
    "revision": "54c1ffda1ec097d934ef83d44a82c1dd"
  },
  {
    "url": "blog/2019/08/07/i-turned-my-blog-into-a-web-progress-app/index.html",
    "revision": "f1a72fd04f59c9ccceb06f713711c1ba"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "6cfb9275e711d0d83652fae81ee1cb32"
  },
  {
    "url": "categories/finance/index.html",
    "revision": "1217807ea38e0618f98500f0e3b4db5e"
  },
  {
    "url": "categories/index.html",
    "revision": "30d581c3bb65d716c923315fbb61c8d4"
  },
  {
    "url": "categories/tech/index.html",
    "revision": "5b9a2d5c9ef1cbe1b1bb9870d174f696"
  },
  {
    "url": "favicon.ico",
    "revision": "d45dae1c4971840baa50643d92208269"
  },
  {
    "url": "go/robinhood.html",
    "revision": "32133c2962246945ebe1f74834e6ddc8"
  },
  {
    "url": "go/wealthfront.html",
    "revision": "ec7844f03947933239687924c1513d9f"
  },
  {
    "url": "go/ynab.html",
    "revision": "7b93db56d77f59ed3ce5a7000a2f6f0e"
  },
  {
    "url": "index.html",
    "revision": "801fa4e46363c39138a527ae4c1ceeb9"
  },
  {
    "url": "manifest.json",
    "revision": "0bd75e687fe927be4306d30a1d21697b"
  },
  {
    "url": "page2/index.html",
    "revision": "d6fb8e134884217ebb3bee5701f5d40f"
  },
  {
    "url": "page3/index.html",
    "revision": "9d24be5b9e3761560897c57eed2e85b0"
  },
  {
    "url": "page4/index.html",
    "revision": "f25c71e5bef600c4caf00f712fb3d801"
  },
  {
    "url": "page5/index.html",
    "revision": "f275c3dbe8f647b81566b8acf55bf3ce"
  },
  {
    "url": "page6/index.html",
    "revision": "a31ab602a393b61842e030e8b0994cdd"
  },
  {
    "url": "posts/index.html",
    "revision": "56157841a26742caa2c8c0b3390e94ae"
  },
  {
    "url": "redirects.json",
    "revision": "e075fcfc59581877b02fdc929deef5ff"
  },
  {
    "url": "robots.txt",
    "revision": "2fac8a129285b1b58020ae33bd484690"
  },
  {
    "url": "tags/index.html",
    "revision": "5dea400844e521a21cc857bcaf78eb6b"
  },
  {
    "url": "visited-places/index.html",
    "revision": "3a6da30ab0534d9d20626cd8174e4e88"
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
  /\.(?:js|json|css|woff2)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// Caching Content from Multiple Origins
workbox.routing.registerRoute(
  /.*(?:googleapis|gstatic)\.com/,
  new workbox.strategies.StaleWhileRevalidate(),
);