importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "0e22c3d1a2eb03112e70a5dbd6fb3ecf"
  },
  {
    "url": "about/index.html",
    "revision": "cfebed35eedc8331ea186dab7747afdb"
  },
  {
    "url": "assets/css/style.css",
    "revision": "6118e6b5ae26923af9497d1d9cfc0039"
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
    "url": "assets/img/android-chrome-192x192.webp",
    "revision": "be30ff34132e68d3b5494ceafed8662b"
  },
  {
    "url": "assets/img/android-chrome-512x512.webp",
    "revision": "3c4f9e9ce314e57fd3d667ad065f24f4"
  },
  {
    "url": "assets/img/apple-touch-icon.webp",
    "revision": "7f82ca5c79d838475e7e2fd3e14f1d35"
  },
  {
    "url": "assets/img/asset-allocation.webp",
    "revision": "55d06022df0403aee95a8426f4d0dd94"
  },
  {
    "url": "assets/img/blur-chart-data-159888.webp",
    "revision": "e8634023bb34d0de4d85cadedba65a93"
  },
  {
    "url": "assets/img/blur-chart-data.webp",
    "revision": "4f756f89e12450e7666e4f44dd6a4a2a"
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
    "url": "assets/img/cloud-server.webp",
    "revision": "40e2848063865a05449e4dea3e0c1513"
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
    "url": "assets/img/google-syndication.webp",
    "revision": "e7eb12b6b2c003b73e2b8736df8f5287"
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
    "url": "assets/img/jekyll.webp",
    "revision": "94c8e78f30078316a6ddda9dd8a9db25"
  },
  {
    "url": "assets/img/logo-travisci-wide1.webp",
    "revision": "a84c54dd4f2caedc916a9f45149958c1"
  },
  {
    "url": "assets/img/money-matters-1173105.webp",
    "revision": "8ef781245b4ac76a7c29b066a63119fb"
  },
  {
    "url": "assets/img/month-of-august.webp",
    "revision": "7f1431b91f2e0338c6a480bcb5f27486"
  },
  {
    "url": "assets/img/nextcloud-setup.webp",
    "revision": "240c2367a15bb69f0884fe68955699f7"
  },
  {
    "url": "assets/img/nextcloud.webp",
    "revision": "7313bfafcc5271c6dc535743d84c61ca"
  },
  {
    "url": "assets/img/NextcloudLogo.webp",
    "revision": "d598fae1834f90569f9ce1309ae492e5"
  },
  {
    "url": "assets/img/openvpn-pihole.webp",
    "revision": "33720589b83b55186336012f43b99095"
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
    "url": "assets/img/pi-hole-stats.webp",
    "revision": "b040ba001354f0e1902d41999668638d"
  },
  {
    "url": "assets/img/pihole-step-1.webp",
    "revision": "9152696559d1638af34e6239b273cb1b"
  },
  {
    "url": "assets/img/pihole-step-10.webp",
    "revision": "e482f97b6751c7c323afe47a8488652e"
  },
  {
    "url": "assets/img/pihole-step-2.webp",
    "revision": "421b68fa9d3cbd808e93c9fb8f3a8bc5"
  },
  {
    "url": "assets/img/pihole-step-3.webp",
    "revision": "3cfa97e27f610f9249339363d1eff179"
  },
  {
    "url": "assets/img/pihole-step-4.webp",
    "revision": "30d3f1c239918155afb9b4f4a0d6e9d6"
  },
  {
    "url": "assets/img/pihole-step-5.webp",
    "revision": "73e7184ccd475c36bb9da29e7ae1d150"
  },
  {
    "url": "assets/img/pihole-step-6.webp",
    "revision": "335c270cfc57c567887cf9060965e943"
  },
  {
    "url": "assets/img/pihole-step-7.webp",
    "revision": "711bafd0bf5fee759a7d3a5209bb3e0e"
  },
  {
    "url": "assets/img/pihole-step-8.webp",
    "revision": "4fad234e32dc1b004840a3ea2feb99c9"
  },
  {
    "url": "assets/img/pihole-step-9.webp",
    "revision": "42b1458b82c0e622da386868d36f2a40"
  },
  {
    "url": "assets/img/postage-stamps-484991_640.webp",
    "revision": "c308e4700c49e2d3cfbcb2624793429f"
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
    "revision": "c6bb8f0d9d4458d0afd55a9196880a8f"
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
    "url": "assets/img/the-month-october.webp",
    "revision": "635047d5c73f896a5089c37a727964cb"
  },
  {
    "url": "assets/img/the-month-september.webp",
    "revision": "14009dd367de026fe0659b4da19db659"
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
    "url": "assets/js/ga-lite.min.js",
    "revision": "9dcb2c0e4c42113d6aeedecc83f1a771"
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
    "revision": "e2e6d142bc7b7ecf0ced7aaabdb70792"
  },
  {
    "url": "blog/2018/06/12/secure-your-passwords/index.html",
    "revision": "de5aa7b67c76cfbb15da15687c1ec623"
  },
  {
    "url": "blog/2018/06/13/how-to-create-interactive-map-with-mapbox-and-leafletjs/index.html",
    "revision": "020f004980cb0afffe369d93fb9ffb15"
  },
  {
    "url": "blog/2018/06/16/thoughts-on-being-multilingual/index.html",
    "revision": "932363f6c73627e75e31d7c17be3a7c8"
  },
  {
    "url": "blog/2018/07/15/dear-wife/index.html",
    "revision": "ac4069cf36514ed2211e32cd25720b77"
  },
  {
    "url": "blog/2018/09/03/10-most-used-linux-commands/index.html",
    "revision": "c8a8a79c5752f4dbaf4c1d24b33bb014"
  },
  {
    "url": "blog/2019/06/05/thoughts-on-url-shortener-service/index.html",
    "revision": "f3fcbc4d29ed0a80e55898b4edd4ae4f"
  },
  {
    "url": "blog/2019/06/12/about-unit-tests/index.html",
    "revision": "3314d2a2c8468dd3055ce987284e17a3"
  },
  {
    "url": "blog/2019/06/13/financial-tools/index.html",
    "revision": "3cf844d2de91241364527488f3b7986f"
  },
  {
    "url": "blog/2019/06/16/regrowing-my-succulents/index.html",
    "revision": "8408b4ffe0c61c4cb94da30aadde8a78"
  },
  {
    "url": "blog/2019/06/30/your-life-or-your-money/index.html",
    "revision": "57215e6122e6f0d6456fbfa050ccc969"
  },
  {
    "url": "blog/2019/07/15/so-you-have-some-money/index.html",
    "revision": "3ccd39e828ca94b52a0ceb7178c55faa"
  },
  {
    "url": "blog/2019/07/16/the-existence-of-anniversaries/index.html",
    "revision": "d23f06bfca2e7359589e9b5740086b02"
  },
  {
    "url": "blog/2019/07/18/changes-i-made-for-my-blogs-theme/index.html",
    "revision": "33aa52a9ac7feff28a7d901227d76c69"
  },
  {
    "url": "blog/2019/07/20/bai-tieng-viet/index.html",
    "revision": "040e9555e080a396141bd5f60a6e8c18"
  },
  {
    "url": "blog/2019/07/22/how-to-deploy-a-github-page-using-circleci-20-custom-jekyll-gems/index.html",
    "revision": "34f5d604a23e2a27fc1a006df2081563"
  },
  {
    "url": "blog/2019/07/23/how-to-deploy-to-github-pages-using-travisci/index.html",
    "revision": "0be9e92bc9fb06ada6084634e96f1f00"
  },
  {
    "url": "blog/2019/07/24/useful-commands-for-postgresql-mysql/index.html",
    "revision": "093f56c445b012c92be735f610777930"
  },
  {
    "url": "blog/2019/07/25/tinyalias-url-shortener-design-and-features/index.html",
    "revision": "c352da48e2dac226b992eb8310619530"
  },
  {
    "url": "blog/2019/07/26/customize-part-of-your-life-with-ifttt/index.html",
    "revision": "485ae718af8119d7374c4a5bf1a24706"
  },
  {
    "url": "blog/2019/07/26/my-blog-pagespeed-insights-score-jasonthai-me/index.html",
    "revision": "43c7d56da6725a91ba17e0231a8bab4e"
  },
  {
    "url": "blog/2019/07/27/apply-different-styles-to-mobile-vs-web-view-using-media/index.html",
    "revision": "e0f3c479cbd4f701744aa95681cb0920"
  },
  {
    "url": "blog/2019/07/28/42nd-biofreeze-sf-marathon-1st-half/index.html",
    "revision": "2986fc4d618eade3c797952754091f6b"
  },
  {
    "url": "blog/2019/08/02/what-im-up-to-in-july-2019/index.html",
    "revision": "96eb757468432be7b220c09ffbc466d4"
  },
  {
    "url": "blog/2019/08/04/three-proofs-total-stock-market-is-efficient/index.html",
    "revision": "6b19ccb733c0b6de2fba12fbd9dd5795"
  },
  {
    "url": "blog/2019/08/06/enable-offline-support-to-websites-with-workbox/index.html",
    "revision": "765ea6e91d2ffe3a359ea7e28cbc6e3c"
  },
  {
    "url": "blog/2019/08/07/i-turned-my-blog-into-a-web-progress-app/index.html",
    "revision": "27e53dd9685227883815929b59479792"
  },
  {
    "url": "blog/2019/08/12/how-to-host-commento-on-apache-webserver/index.html",
    "revision": "e85c24e998eea50772394c1043c5a6f9"
  },
  {
    "url": "blog/2019/08/25/how-to-host-openvpn-and-pi-hole-on-ubuntu-1804-vps/index.html",
    "revision": "c5b3724299b139b167fe9600e91a1bce"
  },
  {
    "url": "blog/2019/09/01/what-im-up-to-in-august-2019/index.html",
    "revision": "75e3c4b687e54e15b4eea66b0e671578"
  },
  {
    "url": "blog/2019/10/07/what-im-up-to-in-september-2019/index.html",
    "revision": "847ddc01bbe90581d94ad34fc5749d46"
  },
  {
    "url": "blog/2019/11/03/deploy-nextcloud-with-docker-compose/index.html",
    "revision": "1ae05cac3f04ddf92e3fdd044ad828e8"
  },
  {
    "url": "blog/2019/12/26/december-list-of-selfhosted-apps/index.html",
    "revision": "090b2552477e37e5df6cd8fae394dcd5"
  },
  {
    "url": "categories/index.html",
    "revision": "999a662c41e0b989721ee85ddbec2c08"
  },
  {
    "url": "default/index.html",
    "revision": "4464a215644fad43a9c8eba10226d6b4"
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
    "revision": "379606fc595858c184acb61bc64a37bf"
  },
  {
    "url": "manifest.json",
    "revision": "a7a76ca0092294394bf7df3fe5000df5"
  },
  {
    "url": "page/2/index.html",
    "revision": "388b2edb6770df9f50af50b1a1c74a05"
  },
  {
    "url": "page/3/index.html",
    "revision": "d3d0097b7411ac96bd51545592f9a8da"
  },
  {
    "url": "page/4/index.html",
    "revision": "cd9265e8f7ed55c436a2cc855d0eaac8"
  },
  {
    "url": "posts/index.html",
    "revision": "e89b7bb46ff722d766615971a33eb9ad"
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
    "revision": "d4279f81048a2b3693732bfb03e7bcad"
  },
  {
    "url": "vi/index.html",
    "revision": "3f0591e1333ca3a6400955619a6a7582"
  },
  {
    "url": "visited-places/index.html",
    "revision": "6bfc2c2abf1cfc649e93c07684cb0261"
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