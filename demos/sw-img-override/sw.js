'use strict';

self.addEventListener('install', event => {
  console.log('installing…');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('activating…');
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  let request = event.request;

  if(request.headers.get('Accept').indexOf('text/html') !== -1){
    event.respondWith( fetch(request) );
    return;
  }

  if(request.headers.get('Accept').indexOf('image') !== -1){
    let rand = (Math.floor(Math.random() * 200) + 200);
    event.respondWith(
      fetch( 'https://www.placecage.com/' + rand + '/300', {mode: 'no-cors'} )
    );
  }

});
