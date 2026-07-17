const CACHE_NAME = 'super-app-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Tahap instalasi Service Worker & menyimpan aset dasar ke cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Tahap aktivasi
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Wajib ada: Merespon request/fetch dari aplikasi
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
