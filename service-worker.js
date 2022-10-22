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
    workbox.precaching.precacheAndRoute([{"revision":"cf58501c53267b719c0481ef587a6cf5","url":"index.html"},{"revision":"a017fe151647ea759ff7b794c12c5050","url":"static/css/2.f96985a0.chunk.css"},{"revision":"287cae3d3c57a2c855d90647d63e6380","url":"static/css/main.51d0d70e.chunk.css"},{"revision":"ee0a4293c63ae01dc3e68294bd45f746","url":"static/js/2.7cdd9858.chunk.js"},{"revision":"94f90f78b2b0153e2fb2e443eead5320","url":"static/js/main.eee8f31f.chunk.js"},{"revision":"0d53a4b4eba8a5face87f7ae4490c110","url":"static/js/runtime-main.1fe1ad4a.js"}]);

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
