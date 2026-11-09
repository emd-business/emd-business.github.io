/* ---------- مركز التنبيهات (V317/V233) ----------
   النافذة في lazy/notify.js (مولَّدة بـ tools/port-notify.py) وتُحمَّل بعد فتح التطبيق بقليل.
   الرقم على زر «🔔 التنبيهات» = التنبيهات العاجلة التي لم تُشاهد، مثل التطبيق الحالي. */
var NF_P=null,nfT=null;
function nfKey(k){return !CLOUD_SANDBOX?k:k==='emd_v72_customer_events'?TR_EVENTS:'emd_rb_'+k}
function nfHelpers(){return {db:function(){return db},
  ls:{getItem:function(k){var v=lsGet(nfKey(k));return v==null&&CLOUD_SANDBOX&&k!=='emd_v72_customer_events'?lsGet(k):v},setItem:function(k,v){lsSet(nfKey(k),String(v))},removeItem:function(k){try{LS.removeItem(nfKey(k))}catch(e){}}},
  openOrder:function(id){if(id.indexOf('store:')===0){storeLoad().then(function(X){X.openOrd(id.slice(6))},function(){})}else openOrder(id)},
  fid:function(id){return idsFmt('#'+String(id).replace(/^#+/,''))}, // أرقام الطلبات بالبادئة (EMD-0030) كما في التطبيق الحالي
  count:function(n){var b=$('alertBadge');if(b){b.textContent=n>99?'99+':String(n);b.classList.toggle('hide',!n)}}}}
function nfLoad(){if(window.EMDNotificationsV317)return Promise.resolve(window.EMDNotificationsV317);if(NF_P)return NF_P;window.EMDNotH=nfHelpers();
  NF_P=loadScript('notify.js?v=1').then(function(){return window.EMDNotificationsV317},function(e){NF_P=null;throw e});return NF_P}
function nfOpen(){nfLoad().then(function(N){N.open()},function(){alertsSheet()})}
/* تحديث الرقم بعد أي تغيير (مؤجَّل قليلًا كي لا يتكرر مع كل رسم) */
function nfBadge(){clearTimeout(nfT);nfT=setTimeout(function(){if(window.EMDNotificationsV317)try{EMDNotificationsV317.badge()}catch(e){}},250)}
