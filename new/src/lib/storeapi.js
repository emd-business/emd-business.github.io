/* ---------- ربط «🛍️ متجري» بالتطبيق ----------
   منشئ المتجر ملف منفصل (store.js) يُحمَّل عند فتحه، أو بعد التشغيل بقليل إن كان المتجر منشورًا
   حتى تصل طلباته ويتحدّث مخزونه. هنا فقط الواجهة بين الملف والتطبيق، والمؤقتات تُدار من ساعة التطبيق. */
var STORE_LIVE_KEY='emd_store_v411',STORE_KEY=CLOUD_SANDBOX?'emd_rb_store':STORE_LIVE_KEY,QUICK_LIVE_KEY='emd173_quick',QUICK_KEY=CLOUD_SANDBOX?'emd_rb_quick':QUICK_LIVE_KEY;
var stTasks=[],stN=0,stLoading=null,stHtml=null;
function storeState(){try{return JSON.parse(lsGet(STORE_KEY)||'{}')||{}}catch(e){return {}}}
function storePublished(){return !!storeState().pubAt}
function storeSeed(){if(!CLOUD_SANDBOX)return;[[STORE_KEY,STORE_LIVE_KEY],[QUICK_KEY,QUICK_LIVE_KEY]].forEach(function(k){if(lsGet(k[0])==null){var v=lsGet(k[1]);if(v)lsSet(k[0],v)}})}
function storeHelpers(){return {storeKey:STORE_KEY,quickKey:QUICK_KEY,lk:function(k){return !CLOUD_SANDBOX?k:k==='emd_v72_customer_events'?TR_EVENTS:k==='emd173_quick'?QUICK_KEY:'emd_rb_'+k},db:function(){return db},save:save,render:render,nextId:nextId,
  hasStock:function(o){return !shortage(o).length},storeQty:function(p){return num(p.stock!=null?p.stock:p.qty)},
  cloud:{token:cToken,uid:cUid,url:CL_URL,key:CL_KEY},login:function(){cloudSheet('login')},canWrite:cloudCanWrite,
  every:function(ms,fn){stTasks.push({ms:ms,fn:fn,at:Date.now()})},badge:function(n){if(stN!==n){stN=n;if(state.view==='home')render()}},
  openOrder:function(id){if(window.EMDStoreV411)window.EMDStoreV411.close();openOrder(id)},
  storeHtml:function(){if(!stHtml)stHtml=fetch('../store/index.html',{cache:'no-cache'}).then(function(r){if(!r.ok)throw new Error(r.status);return r.text()});stHtml.catch(function(){stHtml=null});return stHtml}}}
function storeLoad(){if(window.EMDStoreV411)return Promise.resolve(window.EMDStoreV411);if(stLoading)return stLoading;storeSeed();window.EMDH=storeHelpers();
  stLoading=(window.EMDqr418?Promise.resolve():loadScript('qrcode.js?v=1')).then(function(){return loadScript('store.js?v=2')}).then(function(){return window.EMDStoreV411},function(e){stLoading=null;throw e});return stLoading}
function storeOpen(tab){toast('🛍️ جارٍ فتح متجري…');storeLoad().then(function(X){X.open(tab)},function(){toast('تعذّر فتح متجري. تحقّق من الاتصال.')})}
function storeOrdersOpen(){storeLoad().then(function(X){var L=X.orders();if(L.length===1)X.openOrd(L[0].id);else{X.open('ord');X.poll(true)}})}
function quickOpen(){toast('⚡ جارٍ فتح الرابط السريع…');storeLoad().then(function(){window.EMDQuickV173.open()},function(){toast('تعذّر الفتح. تحقّق من الاتصال.')})}
function storeTick(){if(document.hidden)return;var now=Date.now();stTasks.forEach(function(t){if(now-t.at>=t.ms){t.at=now;try{t.fn()}catch(e){}}})}
function storeBoot(){storeSeed();if(storePublished()&&cUid())setTimeout(function(){storeLoad().catch(function(){})},3000)}
function storeHomeCard(){if(!storePublished())return '';
  return '<button class="scard'+(stN?' on':'')+'" data-act="storeOrders"><span class="ic">🛍️</span><span><b>طلبات متجري</b><small>'+(stN?'تنتظر منك القبول أو الرفض':'لا توجد طلبات جديدة')+'</small></span><b class="n">'+stN+'</b></button>'}
