'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6a3f4dd447d9f2a72948fc29b5492093",
"index.html": "11960157c43b152be4f4b5bf98d0ebd1",
"/": "11960157c43b152be4f4b5bf98d0ebd1",
"main.dart.js": "9ca8d2a446a65a9eab87c4dfc9159cf1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8b11d1f56688e26dea91abca97017f78",
".git/config": "7447cfc8a1b3a29632c078149eb02bbd",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/c15b2218cbee37e38f0e2a019b8e41e1e3414a": "593c82a5fc2dfbf5a2267637966e939f",
".git/objects/3c/117456df0812d2413940c7f601cbb801ba77a0": "82dd0238b42790f14bdf2e5f8ac2d05c",
".git/objects/05/4046ae617d4f4557a19756445e7a0458bf42f5": "6e990f06b93f3121c732a833493b6087",
".git/objects/d9/a096779553e7de50388411a97ad7165716aba7": "135460d9d41217015a84face9e72bc85",
".git/objects/be/7dbe318f75d26c83715b4a77f461f9a577fa18": "1cc8c91f0188b60ec87a9b7570e71fdd",
".git/objects/da/7e69ca9c918f180272c506183308e570f2b608": "6ac203ec173ccdc78eb17b32a0281759",
".git/objects/d1/3232d7ad8025f3a3e887c9578daf2902eda976": "65507a4a397e05fcf2fab9135ee7f630",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/1a7d20df2c6710a330a946622547a1177e2ee9": "fd24b38c1e97e719b44be24aad2d99b2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/95889949fd33ca2ce4be6fd4382e699c2cf038": "f40e5d2e49311c3c66d5a979b96ba790",
".git/objects/e4/f2db02929f0b9b14f7ec27829b1b911ebe1d72": "c8e9a365d18253b9e3de05ffa4e17361",
".git/objects/4b/8951bafc4fe6cb5c5fe11291818f0b35951ef4": "a5af059e4bfc474efe0597b6d7cf4a2b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/178bdfb1ff4759a40ac03aea8df937c8629e0f": "d8238a374d8e92bfa3fe2da178ce6d3c",
".git/objects/75/754d87792297988856d598c9171a29c3b986a0": "b85c09f983e8b49c8d0ffda43c5c44fb",
".git/objects/2f/935e8455e8e2521df86920eaa53ef5f0ec4b65": "cf61958151dafb937d2d589c0cc3e41f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0b11d75a9f0f27dc9cfbdf68a21da13b2683d6": "7f08c50744ffe248977e7feec5e9e8c5",
".git/objects/5b/8c548c317bd6eeaaceb12f54027c5f70c3b840": "1e4d831cbff62a8dc793ee8cf9ce17e7",
".git/objects/6d/07dcf795fe1ffeff84a96d97915ae36a1fbcb5": "5c82b6d6a1ebeff1cadad5fca7bc5dfa",
".git/objects/64/822114c2d319d6f91bf8177b7ba3dcab5977de": "908e0a2a87727455f99bb2e4fbba873f",
".git/objects/a0/15b0a98d3ce8a203826cfa6b48c2a64e939f9e": "a29b62f1905c01b3f981a2330b5d72bf",
".git/objects/dd/5438ade95ef44abac8af72ec3378554a7e410c": "b4b8949e6551a00d6f03dd5f5ece8243",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e6/cbbd47cf1d774a8c025fcd4e99ae1154b2fd1e": "4540653227537026481b010d74085f5a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/bd18239af8acbe2a5a5aebf9677a06282e7856": "6fb478e1d56af84f3d654d63fcc74e19",
".git/objects/4f/b3569d87fcb4ed40b757f808a837ed22dc2755": "72cbbd7f0306f5be65f975f6d8a9d1c0",
".git/objects/1d/838dd731d2cc298535c78663d70d06bd750420": "579d304485f036a091c4261c2b12d6c7",
".git/objects/49/d91aea1690f45227b9b3cefb81bf6bd046ca0e": "abc96d53e194393501a4bcb6744216cb",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "32728ecbe544c365b56d65672704d693",
".git/logs/refs/heads/master": "32728ecbe544c365b56d65672704d693",
".git/logs/refs/remotes/origin/master": "112e3030aead817e30e760573b69d113",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "06cbe97b07cd3eae334ffa42de144bd0",
".git/refs/remotes/origin/master": "06cbe97b07cd3eae334ffa42de144bd0",
".git/index": "26f38a01d403ca4606e9283396efddd5",
".git/COMMIT_EDITMSG": "23a2b973fac1c75bf46a29a775e70aa1",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "316823afd90c0ebecf0ea66d118df26e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
