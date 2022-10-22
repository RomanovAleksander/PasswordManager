if (typeof importScripts === "function") {
  // eslint-disable-next-line no-undef
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"
  );
  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded");
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    // eslint-disable-next-line no-restricted-globals
    workbox.precaching.precacheAndRoute([{"revision":"6dd2261aad3fee6c0d8c3264e4ff0e32","url":"index.html"},{"revision":"dcc808a51e5a97ee25b6d73c17859ee7","url":"static/css/2.13524cd1.chunk.css"},{"revision":"c4d91f18d5894134b223b72b6e5d4433","url":"static/css/main.e2c465b3.chunk.css"},{"revision":"6c01fd56075e0bd0fb7a1df57a0f19fe","url":"static/js/2.d0063399.chunk.js"},{"revision":"aa7a5ea049e6c6b32f12f89d60cb5ab0","url":"static/js/main.98b52f79.chunk.js"},{"revision":"0d53a4b4eba8a5face87f7ae4490c110","url":"static/js/runtime-main.1fe1ad4a.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: "PRODUCTION"
        })
      )
    );
  } else {
    // console.log('Workbox could not be loaded. No Offline support');
  }
}
