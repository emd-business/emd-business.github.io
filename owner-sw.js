/* EMD Business — لوحة المالك: يخلي اللوحة تنفتح كتطبيق، وتفتح حتى لو النت ضعيف (آخر نسخة محفوظة) */
var C='emd-owner-v1',FILES=['/owner.html','/owner.webmanifest','/owner-icon-192.png','/owner-icon-512.png','/owner-apple-180.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(FILES)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x.indexOf('emd-owner-')===0&&x!==C}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){var r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==location.origin)return; /* بيانات الحسابات دايمًا من السيرفر مباشرة */
  if(r.mode==='navigate'||u.pathname==='/owner.html'){
    e.respondWith(fetch(r).then(function(res){var cp=res.clone();caches.open(C).then(function(c){c.put('/owner.html',cp)});return res}).catch(function(){return caches.match('/owner.html')}));return}
  if(FILES.indexOf(u.pathname)>=0)e.respondWith(caches.match(r).then(function(m){return m||fetch(r)}));
});
