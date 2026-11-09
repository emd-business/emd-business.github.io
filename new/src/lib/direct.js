/* ---------- البيع المباشر (فواتير المحل) ----------
   الواجهة في lazy/direct.js (مولَّدة من V113 بـ tools/port-direct.py) وتُحمَّل عند فتحها فقط.
   هنا الحسابات التي تحتاجها شاشات أخرى (التقفيلة) دون تحميل الواجهة. السجلات في db.directSales بنفس شكل التطبيق الحالي. */
function dsList(){return Array.isArray(db&&db.directSales)?db.directSales:[]}
function dsRet(s,name){var k=normTxt(name),t=0;(s.ops||[]).forEach(function(o){(o.items||[]).forEach(function(i){if(normTxt(i.name)===k)t+=num(i.qty)})});return t}
function dsVoid(s){return (s.ops||[]).length>0&&(s.items||[]).every(function(i){return num(i.qty)-dsRet(s,i.name)<=1e-9})}
function dsNet(s){return num(s.total)-(s.ops||[]).reduce(function(a,x){return a+num(x.value)},0)}
function dsPaid(s){return (s.payments||[]).reduce(function(a,x){return a+num(x.amount)},0)-(s.ops||[]).reduce(function(a,x){return a+num(x.refund)},0)}
function dsSummary(from,to){var o={count:0,sales:0,col:0,cost:0};
  dsList().forEach(function(s){var t=new Date(s.at);if(isNaN(t)||t<from||t>=to||dsVoid(s))return;var n=dsNet(s);o.count++;o.sales+=n;o.col+=Math.min(dsPaid(s),n);
    o.cost+=(s.items||[]).reduce(function(a,i){return a+num(i.cost)*Math.max(0,num(i.qty)-dsRet(s,i.name))},0)});
  return o}
function dsDay(dk){var a=new Date(dk+'T00:00:00');return dsSummary(a,new Date(a.getTime()+864e5))}
var dsLoading=null,dsLogo=null;
function dsLook(){try{var l=JSON.parse(lsGet('emd_v89_look')||'{}')||{};return /^#[0-9a-f]{6}$/i.test(l.accent||'')?l.accent:''}catch(e){return ''}}
function dsHelpers(){var src=lsGet('emd_v89_logo')||'';if(src&&/^(data:image\/|https:\/\/)/.test(src)&&!dsLogo){dsLogo=new Image();dsLogo.src=src}
  return {db:function(){return db},lk:function(k){return CLOUD_SANDBOX?'emd_rb_'+k.replace(/^emd_/,''):k},toast:toast,storeName:storeName,
    profile:function(){try{return JSON.parse(lsGet('emd_business_profile_v333')||'{}')||{}}catch(e){return {}}},
    available:function(n){return available(n)},persist:function(){dirty();saveNow()},after:function(){dirty();render()},restock:function(){dirty();if(promoteWaiting())save()},
    accent:dsLook,logoImg:function(){return dsLogo&&dsLogo.complete&&dsLogo.naturalWidth?dsLogo:null},
    img:function(p){var u=String(p&&(p.image||p.img||p.imageUrl)||'');return /^(data:image\/|https:\/\/)/.test(u)?u:''}}}
/* أنواع المحل تستعمل البيع المباشر بنسخة التطوير V453 مع نقطة البيع (lazy/pos.js)؛ «بيع أونلاين» يبقى مثل التطبيق الحالي تمامًا */
var dsVariant='';
function dsWant(){return mode()==='online'?'live':'pos'}
function posLs(){function rk(k){return CLOUD_SANDBOX?'emd_rb_'+k:k}
  return {getItem:function(k){if(k===LIVE_KEY)return null;var v=lsGet(rk(k));return v==null&&CLOUD_SANDBOX?lsGet(k):v},
    setItem:function(k,v){if(k===LIVE_KEY){dirty();saveNow();return}lsSet(rk(k),String(v))},
    removeItem:function(k){try{LS.removeItem(rk(k))}catch(e){}}}}
var POS_LS=posLs();
function posHelpers(){return {db:function(){return db},ls:POS_LS,
    alias:{EMDMoneyV75:{total:function(o){return total(o)},paid:function(o){return paid(o)},remaining:function(o){return remaining(o)},payState:function(o){return payState(o)},invoice:function(id){openInvoice(id)}},EMDPrefixV129:{fmt:function(s){return idsFmt(String(s))}}},nat:function(f){try{return /\{\s*\[native code\]\s*\}$/.test(Function.prototype.toString.call(f))}catch(e){return false}}}}
function directLoad(){if(window.EMDDirectV113)return Promise.resolve(window.EMDDirectV113);if(dsLoading)return dsLoading;window.EMDDirH=dsHelpers();
  var w=dsWant();dsVariant=w;
  dsLoading=(w==='live'?loadScript('direct.js?v=1'):loadScript('direct453.js?v=1').then(function(){window.EMDPosH=posHelpers();return loadScript('pos.js?v=1')})).then(function(){if(!window.EMDDirectV113)throw new Error('direct');return window.EMDDirectV113},function(e){dsLoading=null;throw e});return dsLoading}
function directOpen(tab,id){directLoad().then(function(X){X.open(tab||'new',id)},function(){toast('تعذّر فتح البيع المباشر. تحقّق من الاتصال.')})}
