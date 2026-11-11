/* ---------- 1) التخزين ---------- */
var LIVE_KEY='emd_business_v1';        // بيانات التطبيق الحالي (قراءة فقط هنا)
var KEY='emd_rb_sandbox_v1';           // نسخة التجربة
var META='emd_rb_sandbox_meta';
var LS=window.localStorage;
function lsGet(k){try{return LS.getItem(k)}catch(e){return null}}
function lsSet(k,v){try{LS.setItem(k,v);return true}catch(e){toast('تعذر الحفظ: مساحة التخزين ممتلئة');return false}}

var db=null, meta={};
function load(){
  var raw=lsGet(KEY);
  try{meta=JSON.parse(lsGet(META)||'{}')||{}}catch(e){meta={}}
  if(raw){try{db=JSON.parse(raw)}catch(e){db=null;badCopy(raw)}}
  return !!db;
}
/* بيانات غير قابلة للقراءة: تُحفظ نسخة منها في مفتاح منفصل قبل أن يكتب المستخدم بيانات جديدة فوقها (مرة واحدة لكل تلف) */
function badCopy(raw){try{var k='emd_business_bad_copy';if(LS.getItem(k)===raw)return;LS.setItem(k,raw);LS.setItem(k+'_at',new Date().toISOString())}catch(e){}}
function fix(d){ // يُصلح شكل البيانات فقط: القوائم الثلاث قوائم، وكل عنصر فيها كائن (قيمة فارغة أو نص بدل كائن تُسقط بدل أن تعطّل الصفحات)
  if(!d||typeof d!=='object'||Array.isArray(d))d={};
  ['orders','products','customers'].forEach(function(k){var a=d[k];if(!Array.isArray(a)){d[k]=[];return}
    for(var i=0;i<a.length;i++)if(!a[i]||typeof a[i]!=='object'||Array.isArray(a[i])){d[k]=a.filter(function(x){return x&&typeof x==='object'&&!Array.isArray(x)});break}});
  return d;
}
function adopt(d,src){
  db=fix(d);meta={source:src,at:new Date().toISOString()};
  lsSet(PIN_KEY,src==='live'?(lsGet('emd_pinned_orders_v340')||'[]'):'[]');
  lsSet('emd_rb_learn232',src==='live'?(lsGet('emd_v232_learn')||'{}'):'{}');lsSet('emd_rb_learn103',src==='live'?(lsGet('emd_v103_learn')||'{}'):'{}');
  lsSet(KEY,JSON.stringify(db));lsSet(META,JSON.stringify(meta));
  dirty();syPrime();
}
var saveT=0;
function save(){ // حفظ واحد مؤجل قليلًا بدل عشرات عمليات الحفظ المتتالية
  dirty();
  clearTimeout(saveT);
  saveT=setTimeout(saveNow,120);
}
function saveNow(){saveT=0;if(typeof stockReconcile==='function'&&stockReconcile())setTimeout(function(){try{render()}catch(e){}},0);var known=syStamp(db,cJ(CK.known,null));lsSet(KEY,JSON.stringify(db));lsSet(CK.known,JSON.stringify(known));cloudDirty();trBoot();setAfterSave()}
window.addEventListener('pagehide',function(){if(saveT){clearTimeout(saveT);saveNow()}});

var PIN_KEY='emd_rb_pins_v1'; // تثبيت التجربة منفصل عن تثبيت التطبيق الأصلي
function pinned(){try{var a=JSON.parse(lsGet(PIN_KEY)||'[]');var m={};(Array.isArray(a)?a:[]).forEach(function(x){m[String(x)]=1});return m}catch(e){return {}}}
function setPin(id,on){var m=pinned();if(on)m[id]=1;else delete m[id];lsSet(PIN_KEY,JSON.stringify(Object.keys(m)));dirty()}
function companies(){try{var a=JSON.parse(POS_LS.getItem('emd_v79_companies')||'[]');return Array.isArray(a)?a.map(function(x){return typeof x==='string'?x:(x&&x.name)||''}).filter(Boolean):[]}catch(e){return []}}
function storeName(){try{var p=JSON.parse(POS_LS.getItem('emd_business_profile_v333')||'{}');return String(p.name||'').trim()}catch(e){return ''}}
