// Dummy Service Worker biar PWA Lolos Validasi
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
