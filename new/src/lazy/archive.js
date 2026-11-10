/* مُولَّد بـ tools/port-archive.py من V67 — لا تعدّل هنا */
(function(){var s=document.createElement("style");s.id="EMD-V67-archive-css";s.textContent="\n#emdV67Center{position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:2147483647;display:none;align-items:flex-start;justify-content:center;padding:16px;overflow-y:auto;direction:rtl}\n#emdV67Center.show{display:flex}\n.emd67-box{background:#fff;color:#17212b;width:min(680px,100%);border-radius:20px;padding:18px;margin:16px 0;box-shadow:0 20px 60px rgba(0,0,0,.28)}\n.emd67-head{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:6px}\n.emd67-head h2{margin:0;font-size:20px}\n.emd67-x{border:0;background:#f0f3f7;border-radius:12px;padding:8px 13px;font-size:18px;cursor:pointer}\n.emd67-sub{color:#687384;font-size:13px;line-height:1.7;margin:0 0 12px}\n.emd67-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:12px}\n.emd67-card{border:1px solid #e5eaf0;border-radius:14px;padding:11px 12px;background:#fafbfd}\n.emd67-card small{display:block;color:#687384;font-size:12px;margin-bottom:3px}\n.emd67-card b{font-size:18px}\n.emd67-set{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:0 0 12px;font-size:14px}\n.emd67-set select{width:auto;padding:9px 10px;border:1px solid #e5eaf0;border-radius:11px;font:inherit;background:#fff}\n.emd67-btn{border:0;border-radius:12px;padding:10px 14px;font:inherit;font-size:14px;cursor:pointer;background:#f0f3f7;color:#17212b}\n.emd67-btn.primary{background:#18202a;color:#fff}\n.emd67-btn:disabled{opacity:.45;cursor:not-allowed}\n.emd67-search{display:flex;gap:8px;margin:4px 0 8px}\n.emd67-search input{flex:1;min-width:0;padding:11px;border:1px solid #e5eaf0;border-radius:11px;font:inherit}\n.emd67-row{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 0;border-top:1px solid #eef1f5}\n.emd67-row div{min-width:0}\n.emd67-row b{font-size:14px}\n.emd67-row small{display:block;color:#687384;font-size:12px;margin-top:2px;line-height:1.6}\n.emd67-acts{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}\n.emd67-acts .emd67-btn{padding:8px 10px;font-size:13px}\n.emd67-months{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px;margin-top:6px}\n.emd67-month{border:1px solid #eef1f5;border-radius:12px;padding:8px 10px;font-size:13px}\n.emd67-month b{display:block;font-size:16px}\n.emd67-msg{margin-top:10px;padding:10px 12px;border-radius:12px;font-size:13px;line-height:1.7;display:none}\n.emd67-msg.ok{display:block;background:#effaf1;color:#14532d}\n.emd67-msg.err{display:block;background:#fff3f3;color:#7f1d1d}\n.emd67-h3{font-size:15px;margin:14px 0 6px}\n.emd67-pill{display:inline-block;margin-top:6px;padding:4px 9px;border-radius:99px;background:#eef2f7;color:#4a5568;font-size:12px}\n#emdV67SearchLink{margin-top:8px}\n@media(max-width:560px){.emd67-cards{grid-template-columns:1fr 1fr}}\n";document.head.appendChild(s);var d=document.createElement("div");d.innerHTML="<div id=\"emdV67Center\" aria-hidden=\"true\">\n  <div class=\"emd67-box\" role=\"dialog\" aria-label=\"أرشيف الطلبات\">\n    <div class=\"emd67-head\"><h2>🗄️ أرشيف الطلبات</h2><button class=\"emd67-x\" type=\"button\" data-v67=\"close\" aria-label=\"إغلاق\">✕</button></div>\n    <p class=\"emd67-sub\">الطلبات المستلمة أو الملغاة تنتقل للأرشيف بعد المدة اللي تختارها، فتبقى قائمة الطلبات اليومية خفيفة وسريعة. الأرشيف يتسع لعشرات الآلاف من الطلبات، وتقدر تبحث فيه وترجّع أي طلب.</p>\n    <div class=\"emd67-cards\">\n      <div class=\"emd67-card\"><small>في القائمة اليومية</small><b id=\"emd67Active\">—</b></div>\n      <div class=\"emd67-card\"><small>في الأرشيف</small><b id=\"emd67Arch\">—</b></div>\n      <div class=\"emd67-card\"><small>جاهزة للأرشفة الآن</small><b id=\"emd67Due\">—</b></div>\n    </div>\n    <div class=\"emd67-set\">\n      <span>انقل الطلب للأرشيف بعد استلامه بـ</span>\n      <select id=\"emd67Days\"><option value=\"2\">يومين</option><option value=\"3\">3 أيام</option><option value=\"7\">أسبوع</option><option value=\"14\">أسبوعين</option><option value=\"30\">شهر</option><option value=\"0\">لا تؤرشف تلقائيًا</option></select>\n      <button class=\"emd67-btn primary\" type=\"button\" data-v67=\"run\" id=\"emd67Run\">🗄️ أرشفة الآن</button>\n    </div>\n    <div class=\"emd67-h3\">🔎 البحث في الأرشيف</div>\n    <div class=\"emd67-search\"><input id=\"emd67Q\" type=\"search\" placeholder=\"اسم، رقم هاتف، رقم طلب، أو منتج\"><button class=\"emd67-btn\" type=\"button\" data-v67=\"search\">بحث</button></div>\n    <div id=\"emd67Results\"></div>\n    <div class=\"emd67-h3\">📅 الأرشيف حسب الشهر</div>\n    <div id=\"emd67Months\" class=\"emd67-months\"></div>\n    <div id=\"emd67Msg\" class=\"emd67-msg\"></div>\n  </div>\n</div>";while(d.firstChild)document.body.appendChild(d.firstChild)})();
(function(RW){var PH=RW.EMDPosH,PLS=PH.ls;
var window=new Proxy(RW,{get:function(t,k){if(k==='db')return PH.db();if(k==='localStorage')return PLS;if(k==='save')return PH.save;var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t}});
var db=PH.db();

(function(){
'use strict';
if(window.__EMD_V67_ARCHIVE__)return;window.__EMD_V67_ARCHIVE__=true;

var META='emd_v67_meta',PIN='emd_pinned_orders_v340';
var DONE=['received','cancelled','canceled','returned','completed','delivered'];
var STATUS={new:'جديد',waiting:'بانتظار المنتج',ready:'جاهز للتجهيز',packing:'قيد التجهيز',shipped:'تم الشحن',received:'تم الاستلام',cancelled:'ملغي',canceled:'ملغي',returned:'مرتجع',completed:'مكتمل',delivered:'تم التسليم'};
function $(id){return document.getElementById(id)}
function getDB(){try{return (typeof db!=='undefined'&&db)?db:window.db}catch(e){return window.db}}
function meta(){try{return JSON.parse(PLS.getItem(META)||'{}')||{}}catch(e){return {}}}
function setMeta(m){try{PLS.setItem(META,JSON.stringify(m))}catch(e){}}
function days(){var m=meta();return m.days==null?3:Number(m.days)}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function digits(s){return String(s==null?'':s).replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/\D/g,'')}
function phoneKey(p){var d=digits(p);if(d.indexOf('00968')===0)d=d.slice(5);else if(d.indexOf('968')===0&&d.length===11)d=d.slice(3);return d}
function norm(s){return String(s==null?'':s).replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/[ـً-ٟ]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/\s+/g,' ').trim().toLowerCase()}
function idOf(o){return String(o&&(o.id!=null?o.id:o.orderNumber!=null?o.orderNumber:o.number!=null?o.number:'')||'')}
function idNum(o){var n=parseInt(idOf(o).replace(/\D/g,''),10);return isFinite(n)?n:0}
function items(o){var a=Array.isArray(o.products)?o.products:Array.isArray(o.items)?o.items:[];return a.map(function(x){return {name:String(x&&(x.name||x.product||x.productName)||''),qty:Number(x&&(x.qty!=null?x.qty:x.quantity))||1}}).filter(function(x){return x.name})}
function ts(v){if(!v)return 0;var t=new Date(v).getTime();return isFinite(t)?t:0}
function orderDate(o){return ts(o.orderDate)||ts(o.created)||ts(o.createdAt)||ts(o.date)}
function doneAt(o){
  var h=Array.isArray(o.history)?o.history:[],t=0;
  for(var i=h.length-1;i>=0;i--){var e=h[i];if(e&&DONE.indexOf(String(e.status||''))>=0){t=ts(e.at||e.date||e.time);if(t)break}}
  return t||ts(o.receivedAt)||ts(o.deliveredAt)||ts(o.completedAt)||ts(o.cancelledAt)||ts(o.updatedAt)||ts(o.shippedAt)||orderDate(o);
}
function fmtDate(t){if(!t)return '—';return new Date(t).toLocaleDateString('ar-OM',{year:'numeric',month:'short',day:'numeric'})}
function monthKey(t){var d=new Date(t||Date.now());return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')}
function pinned(){try{var a=JSON.parse(PLS.getItem(PIN)||'[]');return Array.isArray(a)?a.map(String):[]}catch(e){return []}}

/* ---------- IndexedDB ---------- */
var dbP=null;
function idb(){
  if(dbP)return dbP;
  dbP=new Promise(function(res,rej){
    try{
      var r=indexedDB.open('emd_archive_v67',1);
      r.onupgradeneeded=function(){var d=r.result;if(!d.objectStoreNames.contains('orders')){var s=d.createObjectStore('orders',{keyPath:'k'});s.createIndex('phone','phone');s.createIndex('month','month')}};
      r.onsuccess=function(){res(r.result)};r.onerror=function(){rej(r.error||new Error('idb'))};r.onblocked=function(){rej(new Error('blocked'))};
    }catch(e){rej(e)}
  });
  dbP.catch(function(){});
  return dbP;
}
function record(o,at){
  var it=items(o),od=orderDate(o)||doneAt(o);
  return {k:idOf(o),order:o,phone:phoneKey(o.phone||o.customerPhone||o.whatsapp),name:String(o.name||''),date:od,month:monthKey(od),archivedAt:at||Date.now(),
    pieces:it.reduce(function(n,x){return n+x.qty},0),
    hay:norm([idOf(o),idOf(o).replace(/\D/g,''),o.name,o.phone,phoneKey(o.phone),o.place,o.company,o.trackingNumber,o.customerTrackingNumber].concat(it.map(function(x){return x.name})).join(' '))};
}
function putMany(recs){
  return idb().then(function(d){return new Promise(function(res,rej){
    var t=d.transaction('orders','readwrite'),s=t.objectStore('orders');
    recs.forEach(function(r){s.put(r)});
    t.oncomplete=function(){res(recs.length)};t.onerror=function(){rej(t.error)};t.onabort=function(){rej(t.error||new Error('aborted'))};
  })});
}
function delKeys(keys){
  return idb().then(function(d){return new Promise(function(res,rej){
    var t=d.transaction('orders','readwrite'),s=t.objectStore('orders');keys.forEach(function(k){s.delete(k)});
    t.oncomplete=function(){res(keys.length)};t.onerror=function(){rej(t.error)};
  })});
}
function getRec(k){return idb().then(function(d){return new Promise(function(res,rej){var r=d.transaction('orders','readonly').objectStore('orders').get(k);r.onsuccess=function(){res(r.result)};r.onerror=function(){rej(r.error)}})})}
function count(){return idb().then(function(d){return new Promise(function(res,rej){var r=d.transaction('orders','readonly').objectStore('orders').count();r.onsuccess=function(){res(r.result)};r.onerror=function(){rej(r.error)}})})}
function allKeys(){return idb().then(function(d){return new Promise(function(res,rej){var r=d.transaction('orders','readonly').objectStore('orders').getAllKeys();r.onsuccess=function(){res(r.result||[])};r.onerror=function(){rej(r.error)}})})}
function scan(fn){
  return idb().then(function(d){return new Promise(function(res,rej){
    var c=d.transaction('orders','readonly').objectStore('orders').openCursor();
    c.onsuccess=function(){var cur=c.result;if(!cur)return res();if(fn(cur.value)===false)return res();cur.continue()};
    c.onerror=function(){rej(c.error)};
  })});
}
function byPhone(p){return idb().then(function(d){return new Promise(function(res,rej){var r=d.transaction('orders','readonly').objectStore('orders').index('phone').getAll(p);r.onsuccess=function(){res(r.result||[])};r.onerror=function(){rej(r.error)}})})}

/* ---------- الأرشفة ---------- */
function eligible(){
  var d=getDB(),os=(d&&Array.isArray(d.orders))?d.orders:[],n=days();
  if(!os.length)return [];
  var maxN=0,maxId='';os.forEach(function(o){var x=idNum(o);if(x>=maxN){maxN=x;maxId=idOf(o)}});
  var pins=pinned(),cut=Date.now()-Math.max(0,n)*864e5;
  return os.filter(function(o){
    var id=idOf(o);if(!id||id===maxId)return false;          /* يبقى آخر طلب حتى لا يتكرر ترقيم الطلبات */
    if(pins.indexOf(id)>=0)return false;
    if(o.keepActiveUntil&&o.keepActiveUntil>Date.now())return false;
    if(DONE.indexOf(String(o.status||''))<0)return false;
    if(window.EMDLifetimeV130&&EMDLifetimeV130.unpaid(o))return false;
    var t=doneAt(o);return t&&t<=cut;
  });
}
var running=false;
async function archiveNow(manual){
  if(PH.coBlock()){if(manual)throw new Error('الأرشفة تعمل بعد نشر النسخة الجديدة (نسخة تجربة).');return 0}
  if(running)return 0;
  if(!manual&&days()<=0)return 0;
  var list=eligible();if(!list.length)return 0;
  running=true;
  try{
    var at=Date.now();
    await putMany(list.map(function(o){return record(o,at)}));       /* أولًا: الحفظ في الأرشيف وتأكيده */
    try{if(window.EMDLifetimeV130)EMDLifetimeV130.add(list)}catch(e){}
    var gone={};list.forEach(function(o){gone[idOf(o)]=1});
    var d=getDB();
    window.__emdV67Archiving=Date.now();
    d.orders=d.orders.filter(function(o){return !gone[idOf(o)]}); /* ثانيًا: إزالتها من القائمة اليومية */
    if(typeof window.save==='function')window.save();else PLS.setItem('emd_business_v1',JSON.stringify(d));
    var tot=await count();var m=meta();m.lastRun=at;m.total=tot;setMeta(m);  /* قراءة meta بعد الانتظار حتى لا نمسح تحديثًا متزامنًا */
    bumpPhones(list,1);
    return list.length;
  }finally{running=false;setTimeout(function(){window.__emdV67Archiving=0},1500)}
}
function bumpPhones(list,sign){
  try{var m=meta(),pc=m.phones||{};list.forEach(function(o){var p=phoneKey(o.phone);if(!p)return;pc[p]=Math.max(0,(pc[p]||0)+sign);if(!pc[p])delete pc[p]});m.phones=pc;setMeta(m);decorateCustomers()}catch(e){}
}
async function restoreOrder(k){
  if(PH.coBlock())throw new Error('الإرجاع يعمل بعد نشر النسخة الجديدة (نسخة تجربة).');
  var r=await getRec(k);if(!r)throw new Error('الطلب غير موجود في الأرشيف.');
  var d=getDB();if(!Array.isArray(d.orders))d.orders=[];
  if(!d.orders.some(function(o){return idOf(o)===k})){d.orders.unshift(r.order)}
  var h=Array.isArray(r.order.history)?r.order.history:(r.order.history=[]);
  h.push({type:'note',detail:'أُرجع من الأرشيف',at:new Date().toISOString()});
  r.order.keepActiveUntil=Date.now()+864e5;
  if(typeof window.save==='function')window.save();
  await delKeys([k]);bumpPhones([r.order],-1);
  try{if(window.EMDLifetimeV130)EMDLifetimeV130.remove(k)}catch(e){}
  var tot=await count();var m=meta();m.total=tot;setMeta(m);
  return r.order;
}
/* تنظيف: لو طلب موجود في القائمة اليومية والأرشيف معًا (مثلًا بعد استرجاع نسخة قديمة) القائمة اليومية هي الأصح */
async function reconcile(){
  if(PH.coBlock())return;
  var d=getDB(),os=(d&&Array.isArray(d.orders))?d.orders:[];if(!os.length)return;
  var ids={};os.forEach(function(o){ids[idOf(o)]=1});
  var keys=await allKeys(),dup=keys.filter(function(k){return ids[k]});
  if(dup.length){await delKeys(dup);await rebuildPhones()}
}
var rebuilding=null;
function rebuildPhones(){if(rebuilding)return rebuilding;if(PH.coBlock())return Promise.resolve();rebuilding=(async function(){var pc={},n=0;await scan(function(r){n++;if(r.phone)pc[r.phone]=(pc[r.phone]||0)+1});var m=meta();m.phones=pc;m.total=n;setMeta(m);try{decorateCustomers()}catch(e){}})().finally(function(){rebuilding=null});return rebuilding}

/* ---------- تصدير واستيراد مع النسخ الاحتياطية ---------- */
async function exportAll(){var out=[];await scan(function(r){out.push({order:r.order,archivedAt:r.archivedAt})});return out}
async function importAll(arr,mainOrders){
  if(!Array.isArray(arr)||!arr.length)return 0;
  var main={};(mainOrders||[]).forEach(function(o){main[idOf(o)]=1});
  var recs=arr.filter(function(x){return x&&x.order&&idOf(x.order)&&!main[idOf(x.order)]}).map(function(x){return record(x.order,x.archivedAt)});
  for(var i=0;i<recs.length;i+=2000)await putMany(recs.slice(i,i+2000));
  await rebuildPhones();return recs.length;
}

/* ---------- الواجهة ---------- */
function msg(kind,t){var e=$('emd67Msg');if(!e)return;e.className='emd67-msg'+(kind?' '+kind:'');e.textContent=t||''}
function rowHTML(r){
  var o=r.order||{},it=items(o).map(function(x){return esc(x.name)+' × '+x.qty}).join('، ');
  return '<div class="emd67-row"><div><b>'+esc(idOf(o))+' — '+esc(o.name||'بدون اسم')+'</b>'+
    '<small>📱 '+esc(o.phone||'—')+' · 📍 '+esc(o.place||'—')+' · '+esc(STATUS[o.status]||o.status||'')+'<br>📅 '+fmtDate(r.date)+(it?' · 📦 '+it:'')+'</small></div>'+
    '<div class="emd67-acts"><button class="emd67-btn" type="button" data-v67-back="'+esc(r.k)+'">↩️ إرجاع للطلبات</button></div></div>';
}
async function search(q){
  var box=$('emd67Results');q=norm(q);
  if(!q){box.innerHTML='';return}
  var toks=q.split(' ').filter(Boolean),pd=digits(q),out=[],n=0;
  box.innerHTML='<div class="emd67-sub">⏳ جارٍ البحث…</div>';
  try{
    if(/^#?\s*\d{1,6}$/.test(q)){ /* رقم طلب: المطابقة التامة أولًا */
      var want=parseInt(pd,10),exact=[];
      await scan(function(r){if(parseInt(String(r.k).replace(/\D/g,''),10)===want)exact.push(r)});
      if(exact.length){box.innerHTML='<div class="emd67-sub">الطلب المطابق:</div>'+exact.map(rowHTML).join('');return}
    }
    await scan(function(r){if(toks.every(function(t){return r.hay.indexOf(t)>=0})||(pd.length>=4&&r.phone&&r.phone.indexOf(pd)>=0)){n++;if(out.length<60)out.push(r)}});
    out.sort(function(a,b){return b.date-a.date});
    box.innerHTML=out.length?('<div class="emd67-sub">'+n+' نتيجة'+(n>out.length?' (أعرض أحدث '+out.length+')':'')+'</div>'+out.map(rowHTML).join('')):'<div class="emd67-sub">لا توجد نتائج في الأرشيف.</div>';
  }catch(e){box.innerHTML='<div class="emd67-sub">تعذر البحث: '+esc(e.message||e)+'</div>'}
}
async function months(){
  var box=$('emd67Months');var m={};
  try{await scan(function(r){var k=r.month||monthKey(r.date);var x=m[k]||(m[k]={n:0,p:0});x.n++;x.p+=r.pieces||0})}catch(e){box.innerHTML='';return}
  var ks=Object.keys(m).sort().reverse().slice(0,12);
  box.innerHTML=ks.length?ks.map(function(k){var p=k.split('-');var label=new Date(+p[0],+p[1]-1,1).toLocaleDateString('ar-OM',{year:'numeric',month:'long'});return '<div class="emd67-month">'+label+'<b>'+m[k].n+' طلب</b><span style="color:#687384">'+m[k].p+' قطعة</span></div>'}).join(''):'<div class="emd67-sub">الأرشيف فارغ حاليًا.</div>';
}
async function refresh(){
  var c=$('emdV67Center');if(!c||!c.classList.contains('show'))return;
  var d=getDB();$('emd67Active').textContent=((d&&d.orders)||[]).length;
  try{$('emd67Arch').textContent=await count()}catch(e){$('emd67Arch').textContent='غير مدعوم'}
  var due=eligible().length;$('emd67Due').textContent=due;$('emd67Run').disabled=!due;
  $('emd67Days').value=String(days());
  months();
}
function open(q){
  var c=$('emdV67Center');c.classList.add('show');c.setAttribute('aria-hidden','false');msg('');
  if(q!=null){$('emd67Q').value=q;search(q)}
  refresh();
}
function close(){var c=$('emdV67Center');c.classList.remove('show');c.setAttribute('aria-hidden','true')}

/* سجل العميل يشمل الأرشيف */
function wrapHistory(){
  var old=window.showCustomerHistory;if(typeof old!=='function'||old.__v67)return;
  var w=async function(phone){
    var d=getDB(),c=((d&&d.customers)||[]).find(function(x){return x.phone===phone})||{name:'',phone:phone,place:''};
    var p=phoneKey(phone),act=((d&&d.orders)||[]).filter(function(o){return phoneKey(o.phone)===p});
    var arch=[];try{arch=(await byPhone(p)).sort(function(a,b){return b.date-a.date})}catch(e){}
    var line=function(o,dt){return idOf(o)+' — '+fmtDate(dt||orderDate(o))+' — '+items(o).map(function(x){return x.name+' × '+x.qty}).join('، ')+' — '+(STATUS[o.status]||o.status||'')};
    var txt='';
    if(act.length)txt+='🟢 الطلبات الحالية ('+act.length+'):\n'+act.map(function(o){return line(o)}).join('\n')+'\n\n';
    if(arch.length)txt+='🗄️ في الأرشيف ('+arch.length+')'+(arch.length>25?'، أحدث 25':'')+':\n'+arch.slice(0,25).map(function(r){return line(r.order,r.date)}).join('\n');
    if(!txt)txt='لا توجد طلبات سابقة.';
    alert('📋 سجل '+(c.name||'العميل')+'\n📱 '+(c.phone||phone)+'\n📍 '+(c.place||'')+'\n📦 إجمالي الطلبات: '+(act.length+arch.length)+'\n\n'+txt);
  };
  w.__v67=true;window.showCustomerHistory=w;
}
/* عدد طلبات العميل المؤرشفة تحت اسمه في قائمة العملاء */
function decorateCustomers(){
  var pc=meta().phones||{};
  ['customersList','customerPageList'].forEach(function(id){
    var box=$(id);if(!box)return;
    Array.prototype.forEach.call(box.children,function(row){
      var old=row.querySelector('.emd67-pill');
      var m=(row.textContent||'').match(/📱\s*([+\d٠-٩\s-]{6,})/);if(!m){if(old)old.remove();return}
      var n=pc[phoneKey(m[1])];
      if(!n){if(old)old.remove();return}
      var txt='🗄️ '+n+' في الأرشيف';
      if(old){if(old.textContent!==txt)old.textContent=txt;return}
      var s=document.createElement('span');s.className='emd67-pill';s.textContent=txt;
      (row.querySelector('span')||row).appendChild(s);
    });
  });
}
function wrapCustomers(){
  var old=window.renderCustomers;if(typeof old!=='function'||old.__v67)return;
  var w=function(){var r=old.apply(this,arguments);try{decorateCustomers()}catch(e){}return r};w.__v67=true;window.renderCustomers=w;
}
function addSearchLink(){
  var s=$('orderSearchV27');if(!s||$('emdV67SearchLink'))return;
  var b=document.createElement('button');b.id='emdV67SearchLink';b.type='button';b.className='secondary';b.textContent='🗄️ ابحث في الأرشيف';
  b.onclick=function(){open(s.value||'')};
  (s.parentNode||s).insertBefore(b,s.nextSibling);
}
function addTool(){
  var p=$('emdQuickPanelFinal');if(!p||$('emdV67Tool'))return;
  var b=document.createElement('button');b.id='emdV67Tool';b.type='button';b.textContent='🗄️ أرشيف الطلبات';
  b.style.cssText='display:block;min-width:155px;padding:12px 16px;border:0;border-radius:13px;background:#fff;color:#111;box-shadow:0 6px 18px rgba(0,0,0,.18);font-size:16px;cursor:pointer;';
  b.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();open()});
  var v66=$('emdV66Tool');if(v66&&v66.parentNode===p)p.insertBefore(b,v66.nextSibling);else p.insertBefore(b,p.firstChild);
}

window.EMDArchiveV67={open:open,archiveNow:archiveNow,eligible:eligible,count:count,search:search,restoreOrder:restoreOrder,exportAll:exportAll,importAll:importAll,reconcile:reconcile};

function init(){
  var c=$('emdV67Center');
  c.addEventListener('click',async function(e){
    if(e.target===c){close();return}
    var back=e.target.closest('[data-v67-back]');
    if(back){
      var k=back.getAttribute('data-v67-back');
      try{var o=await restoreOrder(k);msg('ok','✅ أُرجع الطلب '+idOf(o)+' إلى قائمة الطلبات.');back.closest('.emd67-row').remove();refresh()}
      catch(err){msg('err','تعذر الإرجاع: '+(err.message||err))}
      return;
    }
    var a=e.target.closest('[data-v67]');if(!a)return;var k2=a.getAttribute('data-v67');
    if(k2==='close')close();
    else if(k2==='search')search($('emd67Q').value);
    else if(k2==='run'){
      var n=eligible().length;if(!n)return;
      if(!confirm('نقل '+n+' طلب مستلم إلى الأرشيف؟\nتقدر تبحث فيها وترجّعها في أي وقت.'))return;
      try{var done=await archiveNow(true);msg('ok','✅ نُقل '+done+' طلب إلى الأرشيف.');refresh()}catch(err){msg('err','تعذرت الأرشفة: '+(err.message||err))}
    }
  });
  $('emd67Q').addEventListener('keydown',function(e){if(e.key==='Enter')search(this.value)});
  $('emd67Days').addEventListener('change',function(){var m=meta();m.days=Number(this.value);setMeta(m);refresh()});
}
init();
})();

})(window);
