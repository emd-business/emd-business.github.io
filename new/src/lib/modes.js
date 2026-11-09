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
function renderBar(){var bar=$('bar');if(!bar)return;var md=mode();if(document.body.getAttribute('data-emd416m')!==md)document.body.setAttribute('data-emd416m',md);var sl=barSlots(),sig=sl.join(',');if(sig===barSig)return;barSig=sig;
  bar.style.gridTemplateColumns='repeat('+(sl.length+1)+',1fr)';
  bar.innerHTML=sl.concat(['more']).map(function(k,i){var o=k==='more'?['☰','المزيد','data-act="moreSheet"']:BAR_OPT[k];
    return '<button '+o[2]+(i===2?' class="plus"':'')+'><span class="ic">'+o[0]+'</span>'+o[1]+(k==='bell'?'<span class="badge hide" id="alertBadge"></span>':'')+'</button>'}).join('');
}
var modesP=null;
function modesHelpers(){return {db:function(){return db},toast:toast,
  ls:function(k,v){return mdLs(k,v)},
  changed:function(){barSig='';renderBar();render();if(window.EMDDirectV113&&dsVariant&&dsVariant!==dsWant()){toast('🔄 يُعاد فتح التطبيق لتطبيق نوع النشاط…');setTimeout(function(){location.reload()},900)}},
  company:function(sub){toast('🏢 لوحة الفروع والمخازن تُضاف في الخطوة القادمة.');if(window.EMDModesV416)window.EMDModesV416.openCo()},
  dsSummary:dsSummary,dsVoid:dsVoid,
  low:function(){return db.products.filter(function(p){if(!p||p.stock==null)return false;var a=available(p.name),mn=minStock(p);return mn>0?a<=mn:a<=2})},
  img:function(p){var u=String(p&&(p.image||p.img||p.imageUrl)||'');return /^(data:image\/|https:\/\/)/.test(u)?u:''},
  go:function(k){if(k==='direct')directOpen('new');else if(k==='add')importSheet('');else{state.view=k==='stock'?'stock':'products';render();scrollTo(0,0)}}}}
function modesLoad(){if(window.EMDModesV416&&window.EMD417)return Promise.resolve(window.EMDModesV416);if(modesP)return modesP;window.EMDModH=modesHelpers();
  modesP=loadScript('modes.js?v=1').then(function(){if(!window.EMDModesV416)throw new Error('modes');return window.EMDModesV416},function(e){modesP=null;throw e});return modesP}
function modesOpen(){modesLoad().then(function(M){M.open('settings')},function(){toast('تعذّر فتح نوع النشاط. تحقّق من الاتصال.')})}
/* لوحة البيع في الرئيسية لأنواع المحل؛ تُحمَّل الوحدة أول مرة ثم تُعاد الرسمة */
function modesHome(){if(mode()==='online')return '';if(!window.EMDDirectV113)directLoad().then(function(){if(state.view==='home')render()},function(){});
  if(window.EMD417)return window.EMD417.homeHtml();modesLoad().then(function(){if(state.view==='home')render()},function(){});return ''}
/* V438: بطاقات الكاشير بدل حالات الطلبات في نوع «محل» */
function cashCards(){var a=new Date();a.setHours(0,0,0,0);var b=new Date(a.getTime()+864e5),m=dsSummary(a,b),due=0,rc=0,rv=0,held=0,sh=null,cash=0,C=' '+CUR;
  dsList().forEach(function(s){if(!dsVoid(s))due+=Math.max(0,dsNet(s)-dsPaid(s));(s.ops||[]).forEach(function(p){var t=new Date(p.at);if(t>=a&&t<b){rc++;rv+=num(p.value)}})});
  try{var hl=JSON.parse(POS_LS.getItem('emd420_held')||'[]');held=Array.isArray(hl)?hl.length:0}catch(e){}
  try{var E=window.EMD420;sh=E&&E.shift();if(sh){var c=E.calcShift(sh);cash=num(sh.float)+num(c.by.cash)-num(c.ref.cash)}}catch(e){sh=null}
  function cd(v,cls,n,l,sub){return '<button class="stat cc'+(cls?' '+cls:'')+'" data-act="c438" data-v="'+v+'"><b>'+n+'</b><span>'+l+'</span>'+(sub?'<small>'+sub+'</small>':'')+'</button>'}
  return '<div class="stats" id="e438">'+cd('list','',m.count,'🧾 فواتير اليوم',m.count?'متوسط '+money(m.sales/m.count)+C:'')+cd('list','',money(m.sales),'💰 مبيعات اليوم',CUR)+
    cd('shift',sh?'':'off',sh?money(cash):'—','💵 النقد في الدرج',sh?'الوردية مفتوحة':'الوردية مغلقة · اضغط لفتحها')+cd('new',held?'warn':'',held,'⏸️ فواتير معلّقة',held?'اضغط لاستكمالها':'')+
    cd('cust',due>0.0005?'warn':'',money(due),'⏳ آجل غير محصّل','على العملاء')+cd('list','',rc,'↩️ مرتجعات اليوم',rc?money(rv)+C:'')+'</div>'}
function c438(a){directLoad().then(function(X){if(a==='cust'&&!window.EMDLoyV434)a='list';if(a==='shift'&&!(window.EMD420&&EMD420.on()))a='list';X.open(a)},function(){toast('تعذّر فتح البيع المباشر. تحقّق من الاتصال.')})}
/* سؤال أول تشغيل: فقط لتطبيق جديد بلا طلبات ولا منتجات، كي لا يُفاجأ التاجر الحالي بنافذة */
function modesFirstRun(){if(mdLs('emd416_asked')||mdLs('emd416_mode'))return;if(db.orders.length||db.products.length)return;
  modesLoad().then(function(M){M.firstRun()},function(){})}
