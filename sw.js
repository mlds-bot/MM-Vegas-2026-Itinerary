// Versioned offline cache. Network-first for app files, offline fallback to saved version.
const CACHE='mm-vegas-2026-v5-menu';
const FILES=['./','./index.html','./app.js','./itinerary.js','./style.css','./manifest.json','./assets/icon.svg','./assets/dam.webp','./assets/desert.webp','./assets/feast.webp','./assets/industry.webp','./assets/neon.webp','./assets/travel.webp','./assets/vegas-collage.webp','./assets/mon-ami-gabi-dinner-menu.pdf','./assets/mon-ami-gabi-dinner-menu.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()]))});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==self.location.origin)return;e.respondWith(fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))});
