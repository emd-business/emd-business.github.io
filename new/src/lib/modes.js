/* ---------- نوع النشاط (V416) والشريط السفلي (V412) ----------
   نافذة الاختيار ولوحة البيع في الرئيسية (V417) في lazy/modes.js (مولَّدة بـ tools/port-modes.py) وتُحمَّل عند الحاجة فقط.
   نوع النشاط يغيّر الشريط وظهور أدوات الشحن فقط، ولا يلمس البيانات. */
var MODE_IDS=['online','shop','hybrid','company'];
var MODE_NAME={online:'بيع أونلاين',shop:'محل ونقطة بيع',hybrid:'محل + أونلاين',company:'شركة'};
var BAR_OPT={home:['🏠','الرئيسية','data-go="home"'],orders:['📋','الطلبات','data-go="orders"'],add:['＋','طلب جديد','data-act="importMsg"'],direct:['🛒','بيع مباشر','data-act="direct"'],
  bell:['🔔','التنبيهات','data-act="alerts"'],finance:['💰','المالية','data-act="finance"'],tracking:['🔗','التتبع','data-act="track"'],customers:['👤','العملاء','data-go="customers"'],
  products:['📦','المنتجات','data-go="products"'],stock:['🏭','المخزن','data-go="stock"'],performance:['📊','الأداء','data-go="perf"'],store:['🛍️','متجري','data-act="store"']};
var BAR_DEF=['home','orders','add','bell'];
var MODE_BAR={shop:['home','products','direct','stock'],hybrid:['home','orders','direct','bell'],company:['home','orders','direct','bell']};
function mdLs(k,v){var rk=CLOUD_SANDBOX?'emd_rb_'+k:k;
  if(v===undefined){var x=lsGet(rk);return x==null&&CLOUD_SANDBOX?lsGet(k):x}
  if(v===null){try{LS.removeItem(rk)}catch(e){}}else lsSet(rk,v);return v}
function mode(){var m=mdLs('emd416_mode');return MODE_IDS.indexOf(m)>-1?m:'online'}
function shopMode(){return mode()==='shop'}
function barSlots(){var s=null;try{s=JSON.parse(mdLs('emd412_bar')||'null')}catch(e){}
  if(!Array.isArray(s)||(s.length!==4&&s.length!==5))return (MODE_BAR[mode()]||BAR_DEF).slice();
  return s.map(function(k,i){return BAR_OPT[k]?k:(BAR_DEF[i]||'direct')})}
var barSig='';
function renderBar(){var bar=$('bar');if(!bar)return;var sl=barSlots(),sig=sl.join(',');if(sig===barSig)return;barSig=sig;
  bar.style.gridTemplateColumns='repeat('+(sl.length+1)+',1fr)';
  bar.innerHTML=sl.concat(['more']).map(function(k,i){var o=k==='more'?['☰','المزيد','data-act="moreSheet"']:BAR_OPT[k];
    return '<button '+o[2]+(i===2?' class="plus"':'')+'><span class="ic">'+o[0]+'</span>'+o[1]+(k==='bell'?'<span class="badge hide" id="alertBadge"></span>':'')+'</button>'}).join('');
}
var modesP=null;
function modesHelpers(){return {db:function(){return db},toast:toast,
  ls:function(k,v){return mdLs(k,v)},
  changed:function(){barSig='';renderBar();render()},
  company:function(sub){toast('🏢 لوحة الفروع والمخازن تُضاف في الخطوة القادمة.');if(window.EMDModesV416)window.EMDModesV416.openCo()},
  dsSummary:dsSummary,dsVoid:dsVoid,
  low:function(){return db.products.filter(function(p){if(!p||p.stock==null)return false;var a=available(p.name),mn=minStock(p);return mn>0?a<=mn:a<=2})},
  img:function(p){var u=String(p&&(p.image||p.img||p.imageUrl)||'');return /^(data:image\/|https:\/\/)/.test(u)?u:''},
  go:function(k){if(k==='direct')directOpen('new');else if(k==='add')importSheet('');else{state.view=k==='stock'?'stock':'products';render();scrollTo(0,0)}}}}
function modesLoad(){if(window.EMDModesV416&&window.EMD417)return Promise.resolve(window.EMDModesV416);if(modesP)return modesP;window.EMDModH=modesHelpers();
  modesP=loadScript('modes.js?v=1').then(function(){if(!window.EMDModesV416)throw new Error('modes');return window.EMDModesV416},function(e){modesP=null;throw e});return modesP}
function modesOpen(){modesLoad().then(function(M){M.open('settings')},function(){toast('تعذّر فتح نوع النشاط. تحقّق من الاتصال.')})}
/* لوحة البيع في الرئيسية لأنواع المحل؛ تُحمَّل الوحدة أول مرة ثم تُعاد الرسمة */
function modesHome(){if(mode()==='online')return '';if(window.EMD417)return window.EMD417.homeHtml();modesLoad().then(function(){if(state.view==='home')render()},function(){});return ''}
/* سؤال أول تشغيل: فقط لتطبيق جديد بلا طلبات ولا منتجات، كي لا يُفاجأ التاجر الحالي بنافذة */
function modesFirstRun(){if(mdLs('emd416_asked')||mdLs('emd416_mode'))return;if(db.orders.length||db.products.length)return;
  modesLoad().then(function(M){M.firstRun()},function(){})}
