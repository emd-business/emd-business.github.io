/* ---------- ربط «🛍️ متجري» بالتطبيق ----------
   منشئ المتجر ملف منفصل (store.js) يُحمَّل عند فتحه، أو بعد التشغيل بقليل إن كان المتجر منشورًا
   حتى تصل طلباته ويتحدّث مخزونه. هنا فقط الواجهة بين الملف والتطبيق، والمؤقتات تُدار من ساعة التطبيق. */
var STORE_LIVE_KEY='emd_store_v411',STORE_KEY=CLOUD_SANDBOX?'emd_rb_store':STORE_LIVE_KEY;
var stTasks=[],stN=0,stLoading=null,stHtml=null;
function storeState(){try{return JSON.parse(lsGet(STORE_KEY)||'{}')||{}}catch(e){return {}}}
function storePublished(){return !!storeState().pubAt}
function storeSeed(){if(CLOUD_SANDBOX&&lsGet(STORE_KEY)==null){var v=lsGet(STORE_LIVE_KEY);if(v)lsSet(STORE_KEY,v)}}
function storeHelpers(){return {storeKey:STORE_KEY,db:function(){return db},save:save,render:render,nextId:nextId,
  hasStock:function(o){return !shortage(o).length},storeQty:function(p){return num(p.stock!=null?p.stock:p.qty)},
  cloud:{token:cToken,uid:cUid,url:CL_URL,key:CL_KEY},login:function(){cloudSheet('login')},canWrite:cloudCanWrite,
  every:function(ms,fn){stTasks.push({ms:ms,fn:fn,at:Date.now()})},badge:function(n){if(stN!==n){stN=n;if(state.view==='home')render()}},
  openOrder:function(id){if(window.EMDStoreV411)window.EMDStoreV411.close();openOrder(id)},
  storeHtml:function(){if(!stHtml)stHtml=fetch('../store/index.html',{cache:'no-cache'}).then(function(r){if(!r.ok)throw new Error(r.status);return r.text()});stHtml.catch(function(){stHtml=null});return stHtml}}}
function storeLoad(){if(window.EMDStoreV411)return Promise.resolve(window.EMDStoreV411);if(stLoading)return stLoading;storeSeed();window.EMDH=storeHelpers();
  stLoading=new Promise(function(ok,no){var s=document.createElement('script');s.src='store.js?v=1';s.onload=function(){ok(window.EMDStoreV411)};s.onerror=function(){stLoading=null;no(new Error('load'))};document.head.appendChild(s)});return stLoading}
function storeOpen(tab){toast('🛍️ جارٍ فتح متجري…');storeLoad().then(function(X){X.open(tab)},function(){toast('تعذّر فتح متجري. تحقّق من الاتصال.')})}
function storeOrdersOpen(){storeLoad().then(function(X){var L=X.orders();if(L.length===1)X.openOrd(L[0].id);else{X.open('ord');X.poll(true)}})}
function storeTick(){if(document.hidden)return;var now=Date.now();stTasks.forEach(function(t){if(now-t.at>=t.ms){t.at=now;try{t.fn()}catch(e){}}})}
function storeBoot(){storeSeed();if(storePublished()&&cUid())setTimeout(function(){storeLoad().catch(function(){})},3000)}
function storeHomeCard(){if(!storePublished())return '';
  return '<button class="scard'+(stN?' on':'')+'" data-act="storeOrders"><span class="ic">🛍️</span><span><b>طلبات متجري</b><small>'+(stN?'تنتظر منك القبول أو الرفض':'لا توجد طلبات جديدة')+'</small></span><b class="n">'+stN+'</b></button>'}
