/* global self, caches, fetch, URL, Response */
'use strict';

var config = {
  version: '20160201v2',
  resourceCacheItems: [
    '/css/images/leaves-right.jpg',
    '/css/images/icons-social@2x.png',
    '/css/site.css',
    '/js/site.js'
  ],
  contentCacheItems: [
    '/about/',
    '/highered-rwd-directory/',
    '/offline/',
    '/'
  ],
  cachePathPattern: /^\/(?:(20[0-9]{2}|css|images|js)\/(.+)?)?$/,
  offlineImage: '<svg role="img" aria-labelledby="offline-title"'
    + ' viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">'
    + '<title id="offline-title">Offline</title>'
    + '<g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/>'
    + '<text fill="#9B9B9B" font-family="Times New Roman,Times,serif" font-size="72" font-weight="bold">'
    + '<tspan x="93" y="172">offline</tspan></text></g></svg>',
  offlinePage: '/offline/'
};

function cacheName(key, opts){
  return `${opts.version}-${key}`;
}

function addToCache(cacheKey, request, response){
  if (response.ok) {
    var copy = response.clone();
    caches.open(cacheKey).then( cache => {
      cache.put(request, copy);
    });
  }
  return response;
}

function fetchFromCache(event){
  return caches.match(event.request).then(response => {
    if (!response) {
      throw Error(`${event.request.url} not found in cache`);
    }
    return response;
  });
}

function offlineResponse(resourceType, opts){
  if (resourceType === 'image') {
    return new Response(opts.offlineImage,
      { headers: { 'Content-Type': 'image/svg+xml' } }
    );
  } else if (resourceType === 'content') {
    return caches.match(opts.offlinePage);
  }
  return undefined;
}

self.addEventListener('install', event => {
  function onInstall (event, opts) {
    caches.open( cacheName('content', opts) ).then(cache => cache.addAll(opts.contentCacheItems));
    return caches.open( cacheName('resources', opts) ).then(cache => cache.addAll(opts.resourceCacheItems));
  }

  event.waitUntil(
    onInstall(event, config).then( () => self.skipWaiting() )
  );
});

self.addEventListener('activate', event => {
  function onActivate (event, opts) {
    return caches.keys()
      .then(cacheKeys => {
        var oldCacheKeys = cacheKeys.filter(key => key.indexOf(opts.version) !== 0);
        var deletePromises = oldCacheKeys.map(oldKey => caches.delete(oldKey));
        return Promise.all(deletePromises);
      });
  }

  event.waitUntil(
    onActivate(event, config)
      .then( () => self.clients.claim() )
  );
});

self.addEventListener('fetch', event => {

  function shouldHandleFetch (event, opts) {
    var request            = event.request;
    var url                = new URL(request.url);
    var criteria           = {
      matchesPathPattern: !!(opts.cachePathPattern.exec(url.pathname)),
      isGETRequest      : request.method === 'GET',
      isFromMyOrigin    : url.origin === self.location.origin
    };
    if( (url.origin === self.location.origin) && opts.contentCacheItems.indexOf(url.pathname) !== -1 ){
      return true;
    } else {
      var failingCriteria    = Object.keys(criteria).filter(criteriaKey => !criteria[criteriaKey]);
      return !failingCriteria.length;
    }
  }

  function onFetch(event, opts){
    var request = event.request;
    var acceptHeader = request.headers.get('Accept');
    var resourceType = 'content';
    var cacheKey;

    if (acceptHeader.indexOf('text/html') !== -1) {
      resourceType = 'content';
    } else if (acceptHeader.indexOf('image') !== -1) {
      resourceType = 'images';
    } else {
      resourceType = 'resources';
    }

    cacheKey = cacheName(resourceType, opts);

    if (resourceType === 'content') {
      event.respondWith(
        fetch(request)
          .then(response => addToCache(cacheKey, request, response))
          .catch(() => fetchFromCache(event))
          .catch(() => offlineResponse(resourceType, opts))
      );
    } else {
      event.respondWith(
        fetchFromCache(event)
          .catch(() => fetch(request))
            .then(response => addToCache(cacheKey, request, response))
          .catch(() => offlineResponse(resourceType, opts))
      );
    }
  }
  if (shouldHandleFetch(event, config)) {
    onFetch(event, config);
  }

});
