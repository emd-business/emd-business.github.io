/* EMD Business — عامل الخدمة: يفتح التطبيق بدون إنترنت، ويجلب آخر نسخة أولًا عند توفر الاتصال.
   لا يلمس أي طلبات خارجية (التتبع/المزامنة/الدعم) ولا صفحات أخرى مثل owner.html
   V158: الجلب من الشبكة يتجاوز ذاكرة المتصفح المؤقتة (كانت تُبقي النسخة القديمة حتى 10 دقائق بعد النشر)،
   ورقم النسخة هنا (emd-app-vNNN) هو ما يقارنه التطبيق ليعرف أن هناك تحديثًا. */
var C='emd-app-v223';
var SHELL=['/','/manifest.webmanifest','/icon-192.png','/icon-512.png','/icon-maskable-512.png','/apple-touch-icon.png'];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(C).then(function(c){return Promise.all(SHELL.map(function(u){
    return fetch(u,{cache:'no-store'}).then(function(x){if(x&&x.ok)return c.put(u,x)}).catch(function(){})}))}).then(function(){return self.skipWaiting()}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x.indexOf('emd-app-')===0&&x!==C}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}));
});
function networkFirst(r){
  return new Promise(function(res){
    var done=false;
    var t=setTimeout(function(){caches.match('/').then(function(m){if(m&&!done){done=true;res(m)}})},4000);
    fetch(new Request(r,{cache:'no-store'})).then(function(x){
      clearTimeout(t);
      if(x&&x.ok){var cp=x.clone();caches.open(C).then(function(c){c.put('/',cp)})}
      if(!done){done=true;res(x)}
    }).catch(function(){
      clearTimeout(t);
      caches.match('/').then(function(m){if(!done){done=true;res(m||Response.error())}});
    });
  });
}
self.addEventListener('message',function(e){if(e.data==='emd-skip-waiting')self.skipWaiting()});
self.addEventListener('fetch',function(e){
  var r=e.request,u=new URL(r.url);
  /* V223: صور المنتجات من السحابة: من الذاكرة أولًا، فتظهر بدون إنترنت */
  if(r.method==='GET'&&u.pathname.indexOf('/storage/v1/object/public/emd-products/')===0){e.respondWith(caches.open('emd-img-v1').then(function(c){return c.match(r).then(function(m){return m||fetch(r).then(function(x){if(x&&(x.ok||x.type==='opaque'))c.put(r,x.clone());return x})})}));return}
  if(r.method!=='GET'||u.origin!==location.origin)return;
  if(r.mode==='navigate'){
    if(u.pathname==='/'||u.pathname==='/index.html'){e.respondWith(networkFirst(r))}
    return;
  }
  if(SHELL.indexOf(u.pathname)>0){e.respondWith(caches.match(r).then(function(m){return m||fetch(r)}))}
});
/* V161: إشعارات الجوال — استقبال الإشعار وعرضه، وفتح التطبيق على ما يخصه عند الضغط */
self.addEventListener('push',function(e){
  var d={};try{d=e.data?e.data.json():{}}catch(x){d={b:e.data?e.data.text():''}}
  e.waitUntil(self.registration.showNotification(d.t||'EMD Business',{body:d.b||'',tag:d.tag||undefined,renotify:!!d.tag,
    icon:self.registration.scope+'icon-192.png',badge:self.registration.scope+'icon-192.png',dir:'rtl',lang:'ar',data:{go:d.go||'bell'}}));
});
self.addEventListener('notificationclick',function(e){
  e.notification.close();var g=(e.notification.data&&e.notification.data.go)||'';
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(function(L){
    for(var i=0;i<L.length;i++){var c=L[i];if(c.url.indexOf(self.registration.scope)===0&&'focus' in c){c.postMessage({emd161go:g});return c.focus()}}
    return self.clients.openWindow(self.registration.scope+(g?'?emdgo='+encodeURIComponent(g):''));
  }));
});
