/* ---------- رابط تتبع الطلب للعميل، وتأكيد الاستلام والتقييم ----------
   موقع التتبع نفسه في التطبيق الحالي (EMD Track & Confirm). مصدر واحد بدل طبقات V53–V421.
   في التجربة: يُستعمل رابط التتبع الموجود فقط، ولا يُنشأ رابط جديد ولا تُرسل حالة إلى الموقع؛ قراءة تأكيدات العملاء مسموحة. */
var TR_BASE='https://emd-track-confirm.lovable.app',TR_PUBLIC=TR_BASE+'/t/';
var TR_EVENTS=CLOUD_SANDBOX?'emd_rb_customer_events':'emd_v72_customer_events',TR_META=CLOUD_SANDBOX?'emd_rb_track_meta':'emd_v70_meta';
var TR_LABEL={'new':'جديد',waiting:'بانتظار المنتج',ready:'جاهز للتجهيز',packing:'قيد التجهيز',shipped:'تم الشحن',out_for_delivery:'خرج للتوصيل',received:'تم الاستلام',cancelled:'ملغي'};
var trBusy={};
function trToken(o){return String(o&&(o.clientToken||o.client_token)||'').trim()}
function trHas(o){return !!(o&&o.clientTrackingSynced&&trToken(o))}
function trUrl(o){return trHas(o)?TR_PUBLIC+encodeURIComponent(trToken(o)):''}
function trUid(o){if(!o.trackingUid){var u='';try{var b=new Uint8Array(12);crypto.getRandomValues(b);u=Array.from(b,function(x){return x.toString(16).padStart(2,'0')}).join('')}catch(e){u=Date.now().toString(36)+Math.random().toString(36).slice(2,12)}o.trackingUid=u}return o.trackingUid}
function trPayload(o){var s=String(o.status||'new');return {action:'create',order_uid:trUid(o),client_token:trHas(o)?trToken(o):'',created_at:String(o.orderDate||o.created||o.createdAt||''),
  tracking_number:String(o.customerTrackingNumber||o.trackingNumber||o.tracking_number||o.tracking||''),order_ref:oid(o),details:String(o.notes||o.note||o.details||''),
  items:items(o).map(function(x){return {name:iname(x),qty:qty(x)}}),delivery_location:cplace(o),shipping_company:String(o.shippingCompany||o.company||o.courier||''),
  delivery_method:String(o.deliveryMethod||o.method||''),customer:{name:cname(o)||'عميل',phone:cphone(o)},status:s,status_label:TR_LABEL[s]||s,
  shipped_at:o.shippedAt||new Date().toISOString(),updated_at:new Date().toISOString()}}
function trPost(path,body){var txt=JSON.stringify(body);
  return fetch(TR_BASE+path,{method:'POST',headers:{'Content-Type':'application/json'},body:txt}).catch(function(){return fetch(TR_BASE+path,{method:'POST',headers:{'Content-Type':'text/plain;charset=UTF-8'},body:txt})})
    .then(function(r){return r.json().catch(function(){return {}}).then(function(j){j=j||{};j.__status=r.status;j.__ok=r.ok;return j})})}
/* يُنشئ الرابط أو يحدّث حالة الطلب في موقع التتبع، ويعيد الرابط */
function trLink(o){var id=oid(o);
  if(!cloudCanWrite())return trHas(o)?Promise.resolve(trUrl(o)):Promise.reject(new Error('🧪 في التجربة لا يُنشأ رابط تتبع جديد.'));
  if(trBusy[id])return trBusy[id];
  trBusy[id]=trPost('/api/public/create-tracking',trPayload(o)).then(function(j){
    var url=String(j.tracking_url||(j.order&&j.order.tracking_url)||'').trim(),t=String((j.order&&j.order.client_token)||j.client_token||'').trim();
    if(!t&&url.indexOf(TR_PUBLIC)===0)t=decodeURIComponent(url.slice(TR_PUBLIC.length).split(/[?#]/)[0]);
    if(!j.__ok||j.ok===false||!t)throw new Error(j.error||'تعذّر إنشاء رابط التتبع');
    var sv=(j.order&&(j.order.status||j.order.current_status))||j.status||'';
    o.clientToken=t;o.client_token=t;o.clientTrackingSynced=true;o.trackingUrl=TR_PUBLIC+encodeURIComponent(t);o.tracking_url=o.trackingUrl;
    o.trackingSentStatus=String(o.status||'');o.trackingServerStatus=typeof sv==='string'?sv:'';o.trackingSyncAt=Date.now();save();
    return o.trackingUrl}).then(function(u){delete trBusy[id];return u},function(e){delete trBusy[id];throw e});
  return trBusy[id]}
/* بعد تغيّر حالة طلب له رابط: تُحدَّث صفحة العميل */
function trSync(o){if(trHas(o)&&cloudCanWrite()&&String(o.status)!==String(o.trackingSentStatus||''))trLink(o).catch(function(){})}
function trBoot(){if(!cloudCanWrite())return;db.orders.filter(function(o){return trHas(o)&&['shipped','received','out_for_delivery'].indexOf(String(o.status))>=0&&String(o.status)!==String(o.trackingSentStatus||'')}).slice(-30).forEach(trSync)}

/* تأكيد الاستلام والتقييم من صفحة العميل: فحص كل 3 دقائق للطلبات المشحونة */
function trMeta(){try{return JSON.parse(lsGet(TR_META)||'{}')||{}}catch(e){return {}}}
function trWatched(){var cut=Date.now()-14*864e5;return db.orders.filter(function(o){if(!trHas(o))return false;var s=status(o);
  return s==='shipped'||(s==='received'&&!o.customerRating&&new Date(o.receivedAt||o.customerConfirmedAt||0).getTime()>=cut)})}
function trRating(x){var r=x.rating!=null?x.rating:(x.stars!=null?x.stars:x.customer_rating),c=x.comment||x.rating_comment||x.review||'';
  if(r&&typeof r==='object'){c=c||r.comment||'';r=r.stars!=null?r.stars:r.value}r=Number(r);if(!isFinite(r)||r<=0)return null;
  return {stars:Math.min(5,Math.round(r)),comment:String(c||'').slice(0,500),at:x.rated_at||x.updated_at||new Date().toISOString()}}
function trStars(n){n=Math.max(0,Math.min(5,Math.round(+n||0)));return '★★★★★'.slice(0,n)+'☆☆☆☆☆'.slice(0,5-n)}
var trRunning=false,trLast=0;
function trPoll(force){var m=trMeta();if(trRunning||(!force&&Date.now()-trLast<180000))return Promise.resolve(0);if(m.unsupportedAt&&!force&&Date.now()-m.unsupportedAt<216e5)return Promise.resolve(0);
  var list=trWatched();if(!list.length)return Promise.resolve(0);trRunning=true;trLast=Date.now();var conf=[],rated=[];
  return trPost('/api/public/order-status',{action:'status',items:list.slice(0,100).map(function(o){return {client_token:trToken(o),order_uid:String(o.trackingUid||''),order_ref:oid(o)}})}).then(function(j){
    if(j.__status===404||j.__status===405){m.unsupportedAt=Date.now();lsSet(TR_META,JSON.stringify(m));return 0}
    if(!j.__ok||j.ok===false)throw new Error(j.error||'HTTP '+j.__status);
    (j.orders||j.items||j.results||[]).forEach(function(x){if(!x)return;var t=String(x.client_token||x.token||''),u=String(x.order_uid||'');
      var o=list.filter(function(q){return (t&&trToken(q)===t)||(u&&String(q.trackingUid||'')===u)})[0];if(!o)return;
      var at=x.customer_confirmed_at||x.confirmed_at||x.received_at||'',st=String(x.status||'');
      if((st==='received'||at)&&status(o)==='shipped'){receiveOrder(o);o.receivedAt=at||o.receivedAt;o.customerConfirmed=true;o.customerConfirmedAt=at||nowIso();o.trackingServerStatus='received';o.trackingSentStatus='received';addEvent(o,'أكّد العميل الاستلام من صفحة التتبع');conf.push(o)}
      else if(st==='received'&&!o.customerConfirmed){o.customerConfirmed=true;o.customerConfirmedAt=at||o.receivedAt||''}
      var r=trRating(x);if(r&&(!o.customerRating||o.customerRating.stars!==r.stars||o.customerRating.comment!==r.comment)){o.customerRating=r;rated.push(o)}});
    m=trMeta();delete m.unsupportedAt;delete m.lastError;m.lastOk=Date.now();lsSet(TR_META,JSON.stringify(m));
    if(conf.length||rated.length){save();render();trLog(conf,rated);
      var p=conf.map(function(o){return '📬 '+onum(o)+' '+cname(o)+': أكّد العميل الاستلام'}).concat(rated.filter(function(o){return conf.indexOf(o)<0}).map(function(o){return '⭐ '+onum(o)+' '+cname(o)+': '+trStars(o.customerRating.stars)}));toast(p.slice(0,2).join(' · ')+(p.length>2?' +'+(p.length-2):''))}
    return conf.length+rated.length})
  .catch(function(e){var mm=trMeta();mm.lastError=String(e&&e.message||e).slice(0,160);lsSet(TR_META,JSON.stringify(mm));return 0}).then(function(n){trRunning=false;return n})}
function trLog(conf,rated){var evs;try{evs=JSON.parse(lsGet(TR_EVENTS)||'[]');if(!Array.isArray(evs))evs=[]}catch(e){evs=[]}var has={};evs.forEach(function(e){has[e.key]=1});
  function push(kind,o){var r=o.customerRating,key=kind==='confirm'?'confirm:'+(o.trackingUid||oid(o)):'rating:'+(o.trackingUid||oid(o))+':'+(r?r.stars+':'+r.comment:'');if(has[key])return;has[key]=1;
    evs.unshift({id:Date.now().toString(36)+Math.random().toString(36).slice(2,7),key:key,kind:kind,orderId:oid(o),name:cname(o),stars:r?r.stars:0,comment:r?r.comment:'',at:Date.now(),read:false})}
  conf.forEach(function(o){push('confirm',o)});rated.filter(function(o){return conf.indexOf(o)<0}).forEach(function(o){push('rating',o)});lsSet(TR_EVENTS,JSON.stringify(evs.slice(0,300)))}
function trTick(){if(!document.hidden&&navigator.onLine!==false)trPoll()}
function trPills(o){return (o.customerConfirmed?'<span class="tag ok">✅ أكّد العميل الاستلام</span>':'')+(o.customerRating?'<span class="tag gold">'+trStars(o.customerRating.stars)+'</span>':'')}
