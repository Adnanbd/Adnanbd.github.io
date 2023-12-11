'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9999191e2daa58c6edeafd6c3b3dee62",
"blob.gif": "8b9fcada93ca2332325f6ad550c24791",
"index.html": "26ed17a6affbb3e8bc070bf3864a227b",
"/": "26ed17a6affbb3e8bc070bf3864a227b",
"opgamingmx.ico": "e9988b3b9c9446e83d3275dea6b340a1",
"main.dart.js": "16f70d13119a43ddb2c607d4aa1ee7ce",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/loader.gif": "13923d55a5bda7929d44be6505fcda28",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e29df8bda1b4d0c59c709f6befcc51f2",
"assets/AssetManifest.json": "62d4937401f896a405e47004c229e370",
"assets/NOTICES": "cffefc00d760d487170446ceaf219db1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "7ecd91f993954a9707888e72d34adebc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "2f9474a732f3ba6c40c98c1bae37b521",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/techsist-logo.png": "7358c2a6ebe12d7b38810e9dc8d01850",
"assets/assets/cube-box-corner-room-interior-cross-section-white-empty-geometric-square-3d-blank-box-template_186921-97.avif": "e89d1023c70afe205d8ff36c8a77be6e",
"assets/assets/icons8-youtube.svg": "a2abb8cd2c27dbff02db4fa900023705",
"assets/assets/icons8-linkedin.svg": "9570052d67df72df13aa8033a51e0c00",
"assets/assets/head_png.png": "2092433d04cb4c6e57dedd6344fa0d56",
"assets/assets/icons8-drive.svg": "402c39df6b1c82fcb315d0c1a3ebe6ab",
"assets/assets/mail.svg": "df2d301c7dc731c32a485c97e6edf563",
"assets/assets/document-6356603-5231807%2520(1).png": "c704b6b59367d99635585b2b22e85765",
"assets/assets/icons8-facebook-messenger.svg": "8e9c18a857123f1ed5e619c4865e72c5",
"assets/assets/icons8-facebook.svg": "ed86b7715e93f4c2195f4a250785136f",
"assets/assets/data.json": "6d6c4f3c9640b19706836c229d8f14d5",
"assets/assets/shah-rukh-khan-1624599136.jpg": "d2f602a427ed9287c54c5a4e6c6ff99c",
"assets/assets/antopolis.png": "5f556460148c289bdec2dec2cffc5001",
"assets/assets/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3JtNTg0LWVsZW1lbnQtMDQyYi03XzEucG5n.webp": "9b37e16537958d36ba790b41b677bb0f",
"assets/assets/ag-logo.jpeg": "7354788507935873fa45f9c80f0768bc",
"assets/assets/mail-svgrepo-com.svg": "c8448eaa9cafd5a3c2774b5038e66e08",
"assets/assets/document-6356603-5231807.webp": "c704b6b59367d99635585b2b22e85765",
"assets/assets/ic1.png": "9b324dc511e223d4e2e561a518dd87d1",
"assets/assets/ic1.svg": "e11d19db30c2ea2d38ba4efb6eec80d8",
"assets/assets/ag-logo-new.jpg": "e8c2b05b49856850fc3a4f84c43f4699",
"assets/assets/ic2.svg": "df30177de9304835afd6d25762160c6c",
"assets/assets/ic3.svg": "4bc41de8c3f2e62dad5776f9bed49b21",
"assets/assets/mail-01-svgrepo-com.svg": "fe0d3e67b56f5a5734ed3053aa90a070",
"assets/assets/ic7.svg": "d99652c8b554fbd04571b84dff88be37",
"assets/assets/ic6.svg": "d9724eeda3b0e72bcbe0652e4835ffa7",
"assets/assets/5.json": "94703e120eec3da4b41953e6f6207973",
"assets/assets/85084419_3842528412454098_6194104183914758144_n.jpg": "7325e1ae2e93c8c4d419b59fb617c935",
"assets/assets/ic4.svg": "0afa412282e01bf8e7feef0e0ec4258a",
"assets/assets/ic5.svg": "d7ae04425d170aa6dd6e5a5e8f8940da",
"assets/assets/bg.jpg": "f85f752218f5d9eb7f345487410db168",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
