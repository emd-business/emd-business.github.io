/* EMD V175 تجريبية: عامل خدمة للتجربة فقط (بدون تخزين) */
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
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
