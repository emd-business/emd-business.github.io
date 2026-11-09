/* ---------- أرشيف الطلبات القديمة (قاعدة الجهاز نفسها التي يستعملها التطبيق الحالي) ----------
   القراءة متاحة دائمًا؛ الكتابة لا تحدث في التجربة. */
var ARCH_DB='emd_archive_v67',archP=null;
function archOpen(){if(archP)return archP;archP=new Promise(function(res,rej){try{var r=indexedDB.open(ARCH_DB,1);
  r.onupgradeneeded=function(){var d=r.result;if(!d.objectStoreNames.contains('orders')){var s=d.createObjectStore('orders',{keyPath:'k'});s.createIndex('phone','phone');s.createIndex('month','month')}};
  r.onsuccess=function(){res(r.result)};r.onerror=function(){rej(r.error||new Error('idb'))};r.onblocked=function(){rej(new Error('blocked'))}}catch(e){rej(e)}});archP.catch(function(){});return archP}
function archAll(){return archOpen().then(function(d){return new Promise(function(res,rej){var out=[],c=d.transaction('orders','readonly').objectStore('orders').openCursor();
  c.onsuccess=function(){var cur=c.result;if(!cur)return res(out);out.push({order:cur.value.order,archivedAt:cur.value.archivedAt});cur.continue()};c.onerror=function(){rej(c.error)}})}).catch(function(){return []})}
function archIds(list){var m={};(list||[]).forEach(function(x){var i=x&&x.order&&oid(x.order);if(i)m[i]=1});return m}
function archTs(v){var t=v?new Date(v).getTime():0;return isFinite(t)?t:0}
function archRecord(o,at){var its=items(o),od=archTs(o.orderDate)||archTs(o.created)||archTs(o.createdAt)||archTs(o.receivedAt)||archTs(o.shippedAt),dt=od?new Date(od):null,ph=digits(cphone(o));
  if(ph.indexOf('00968')===0)ph=ph.slice(5);else if(ph.indexOf('968')===0&&ph.length===11)ph=ph.slice(3);
  return {k:oid(o),order:o,phone:ph,name:String(o.name||''),date:od,month:dt?dt.getFullYear()+'-'+pad(dt.getMonth()+1):'',archivedAt:at||Date.now(),
    pieces:its.reduce(function(n,x){return n+qty(x)},0),hay:normTxt([oid(o),o.name,o.phone,o.place,o.company].concat(its.map(iname)).join(' '))}}
function archImport(arr){if(!cloudCanWrite()||!Array.isArray(arr)||!arr.length)return Promise.resolve(0);
  var main={};db.orders.forEach(function(o){main[oid(o)]=1});
  var recs=arr.filter(function(x){return x&&x.order&&oid(x.order)&&!main[oid(x.order)]}).map(function(x){return archRecord(x.order,x.archivedAt)});
  return archOpen().then(function(d){return new Promise(function(res,rej){var t=d.transaction('orders','readwrite'),s=t.objectStore('orders');recs.forEach(function(r){s.put(r)});t.oncomplete=function(){res(recs.length)};t.onerror=function(){rej(t.error)}})}).catch(function(){return 0})}
