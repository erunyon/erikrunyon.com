---
---
'use strict';
const version = '{{site.time | date: '%Y%m%d%H%M%S'}}::';
const staticCacheName = version + 'static';
const pagesCacheName = version + 'pages';
const imagesCacheName = version + 'images';

function updateStaticCache() {
  return caches.open(staticCacheName)
    .then( cache => {
      // These items won't block the installation of the Service Worker
      cache.addAll([
        '/about/',
        '/contact/'
      ]);
      // These items must be cached for the Service Worker to complete installation
      return cache.addAll([
        '/images/theme/leaves-right.jpg',
        '/images/theme/external.svg',
        '/js/site.js',
        '/',
        '/offline/'
      ]);
    });
}

function stashInCache(cacheName, request, response) {
  caches.open(cacheName)
    .then( cache => cache.put(request, response) );
}

// Limit the number of items in a specified cache.
function trimCache(cacheName, maxItems) {
  caches.open(cacheName)
    .then( cache => {
      cache.keys()
        .then(keys => {
          if (keys.length > maxItems) {
            cache.delete(keys[0])
              .then(trimCache(cacheName, maxItems));
          }
        });
    });
}

// Remove caches whose name is no longer valid
function clearOldCaches() {
  return caches.keys()
    .then( keys => {
      return Promise.all(keys
        .filter(key => key.indexOf(version) !== 0)
        .map(key => caches.delete(key))
      );
    });
}

self.addEventListener('install', event => {
  event.waitUntil(updateStaticCache()
    .then( () => self.skipWaiting() )
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(clearOldCaches()
    .then( () => self.clients.claim() )
  );
});

self.addEventListener('message', event => {
  if (event.data.command == 'trimCaches') {
    trimCache(pagesCacheName, 35);
    trimCache(imagesCacheName, 20);
  }
});

self.addEventListener('fetch', event => {
  let request = event.request;
  let url = new URL(request.url);
  let allowedOrigins = [location.origin];
  let ignoredFiles = ['analytics.js', 'track.js', 'track.gif'];

  // Check allowed sources
  if(allowedOrigins.indexOf(url.origin) === -1){
    return;
  }

  // Ignore some local files
  if(ignoredFiles.indexOf(url.pathname.split('/').pop()) != -1){
    return;
  }

  // For non-GET requests, try the network first, fall back to the offline page
  if (request.method !== 'GET') {
    event.respondWith(
      fetch(request)
        .catch( () => caches.match('/offline/') )
    );
    return;
  }

  // For HTML requests, try the network first, fall back to the cache, finally the offline page
  if (request.headers.get('Accept').indexOf('text/html') !== -1) {
    event.respondWith(
      fetch(request)
        .then( response => {
          // NETWORK
          // Stash a copy of this page in the pages cache
          let copy = response.clone();
          stashInCache(pagesCacheName, request, copy);
          return response;
        })
        .catch( () => {
          // CACHE or FALLBACK
          return caches.match(request)
            .then( response => response || caches.match('/offline/') );
        })
    );
    return;
  }

  // For non-HTML requests, look in the cache first, fall back to the network
  event.respondWith(
    caches.match(request)
      .then(response => {
        // CACHE
        return response || fetch(request)
          .then( response => {
            // NETWORK
            // If the request is for an image, stash a copy of this image in the images cache
            if (request.headers.get('Accept').indexOf('image') !== -1) {
              let copy = response.clone();
              stashInCache(imagesCacheName, request, copy);
            }
            return response;
          })
          .catch( () => {
            // OFFLINE
            // If the request is for an image, show an offline placeholder
            if (request.headers.get('Accept').indexOf('image') !== -1) {
              return new Response('<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">Offline</title><g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/><text fill="#9B9B9B" font-family="Helvetica Neue,Arial,Helvetica,sans-serif" font-size="72" font-weight="bold"><tspan x="93" y="172">offline</tspan></text></g></svg>', {headers: {'Content-Type': 'image/svg+xml'}});
            }
          });
      })
  );

});
