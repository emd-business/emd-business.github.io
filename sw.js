/* EMD Business — عامل الخدمة: يفتح التطبيق بدون إنترنت، ويجلب آخر نسخة أولًا عند توفر الاتصال.
   لا يلمس أي طلبات خارجية (التتبع/المزامنة/الدعم) ولا صفحات أخرى مثل owner.html */
var C='emd-app-v136';
var SHELL=['/','/manifest.webmanifest','/icon-192.png','/icon-512.png','/icon-maskable-512.png','/apple-touch-icon.png'];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(C).then(function(c){return Promise.all(SHELL.map(function(u){return c.add(u).catch(function(){})}))}).then(function(){return self.skipWaiting()}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x.indexOf('emd-app-')===0&&x!==C}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}));
});
function networkFirst(r){
  return new Promise(function(res){
    var done=false;
    var t=setTimeout(function(){caches.match('/').then(function(m){if(m&&!done){done=true;res(m)}})},4000);
    fetch(r).then(function(x){
      clearTimeout(t);
      if(x&&x.ok){var cp=x.clone();caches.open(C).then(function(c){c.put('/',cp)})}
      if(!done){done=true;res(x)}
    }).catch(function(){
      clearTimeout(t);
      caches.match('/').then(function(m){if(!done){done=true;res(m||Response.error())}});
    });
  });
}
self.addEventListener('fetch',function(e){
  var r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==location.origin)return;
  if(r.mode==='navigate'){
    if(u.pathname==='/'||u.pathname==='/index.html'){e.respondWith(networkFirst(r))}
    return;
  }
  if(SHELL.indexOf(u.pathname)>0){e.respondWith(caches.match(r).then(function(m){return m||fetch(r)}))}
});
