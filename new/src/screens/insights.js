/* ---------- تفاصيل اليوم، مركز الأداء، تتبع طلبات العملاء، إشعارات التوفر ----------
   مثل التطبيق الحالي: لوحة اليوم (V90) والتوصية (V99) والشحن المتأخر (V113 القديم) والإجراء السريع (V109) و«يحتاج انتباه» (V158)،
   مركز الأداء (V20/V138) وإشعارات توفر المنتجات (V164/V166)، وصفحة «🔗 التتبع» (V316). كلها محسوبة من المكتبة، بلا مؤقتات. */
function insActive(){return db.orders.filter(function(o){var s=status(o);return s!=='received'&&s!=='cancelled'})}
function insToday(){var dk=dkey(new Date());return db.orders.filter(function(o){var t=odate(o);return t&&dkey(t)===dk})}
function insRow(o,btn){return '<div class="irow"><div><b>'+esc(onum(o))+'</b> — '+esc(cname(o)||'اسم غير مذكور')+'<small>📍 '+esc(cplace(o)||'غير محدد')+' · '+ST[status(o)].i+' '+ST[status(o)].l+(o.due?' · ⏰ قبل '+esc(o.due):'')+'</small></div>'+(btn||'<button class="btn sm dark" data-act="open" data-id="'+esc(oid(o))+'">التفاصيل</button>')+'</div>'}
function insAge(o){var t=new Date(o.shippedAt||o.updatedAt||0).getTime();return t?(Date.now()-t)/36e5:0}
function insReco(){var a=insActive(),c=function(s){return a.filter(function(o){return status(o)===s}).length},due=a.filter(function(o){return o.due}).length,w=c('waiting'),r=c('ready'),p=c('packing'),sh=c('shipped');
  if(due)return ['⏰ الأولوية الآن: مواعيد العملاء','عندك '+due+' طلب مرتبط بموعد أو مهلة. راجع هذه الطلبات أولًا حتى تضمن تجهيزها في الوقت المطلوب.','data-go="orders"','مراجعة المواعيد'];
  if(w)return ['📦 الأولوية الآن: توفير المنتجات','عندك '+w+' طلب بانتظار المنتجات. إضافة المخزون المناسب ستنقل الطلبات الجاهزة تلقائيًا إلى مرحلة التجهيز.','data-go="stock"','فتح المخزن'];
  if(r)return ['🛠️ الأولوية الآن: التجهيز','عندك '+r+' طلب جاهز للتجهيز. ابدأ بها قبل وصول طلبات جديدة حتى تقلل التراكم.','data-act="prepNow"','فتح مركز التجهيز'];
  if(p)return ['📦 الأولوية الآن: إنهاء التغليف','عندك '+p+' طلب قيد التجهيز. بعد الإنهاء حدّث الحالة للشحن حتى لا تبقى الطلبات معلقة.','data-act="prepNow"','فتح مركز الشحن'];
  if(sh)return ['📬 الأولوية الآن: متابعة الشحن','عندك '+sh+' طلب في الشحن. تابع الاستلام حتى تُغلق الطلبات.','data-filter="shipped"','متابعة الشحن'];
  return ['🤖 EMD يقترح عليك الآن','الوضع هادئ حاليًا. راجع الطلبات الجديدة وتأكد أن كل شيء جاهز.','data-go="orders"','فتح الطلبات']}
function dayHtml(){
  var a=insActive(),td=insToday(),dk=dkey(new Date()),cnt=function(s){return a.filter(function(o){return status(o)===s}).length};
  var ready=cnt('ready'),packing=cnt('packing'),shipped=cnt('shipped'),waiting=cnt('waiting');
  var focus=a.filter(function(o){var s=status(o);return s==='ready'||s==='new'||s==='packing'}).sort(function(x,y){return (odate(y)||0)-(odate(x)||0)}).slice(0,4);
  var rc=insReco(),recvToday=db.orders.filter(function(o){return status(o)==='received'&&dayOf(o.receivedAt)===dk}).length;
  var late=db.orders.filter(function(o){return status(o)==='shipped'&&insAge(o)>=48}).sort(function(x,y){return insAge(y)-insAge(x)});
  var alerts=[[ready,'🟢 طلبات جاهزة للتجهيز','هذه الطلبات يمكن البدء بها الآن.','ready'],[packing,'📦 طلبات قيد التجهيز','راجع ما يحتاج إكمال التغليف أو الشحن.','packing'],[shipped,'🚚 طلبات مشحونة','تحتاج متابعة تأكيد الاستلام.','shipped'],[waiting,'⏳ بانتظار المنتجات','تنتظر توفر المخزون.','waiting']].filter(function(x){return x[0]});
  var quick=shipped?'لديك '+shipped+' طلب مشحون يحتاج متابعة الاستلام.':ready?'لديك '+ready+' طلبات جاهزة ويمكن البدء بتجهيزها.':waiting?'لديك '+waiting+' طلبات تنتظر المنتجات.':'الوضع هادئ الآن.';
  var att=a.filter(function(o){var s=status(o);return s==='new'||s==='waiting'||s==='ready'}).sort(function(x,y){return (odate(y)||0)-(odate(x)||0)}).slice(0,6);
  return '<div class="day">'+
    '<div class="dcard"><div class="dh"><div><h3>🎯 لوحة اليوم</h3><small>'+esc(new Intl.DateTimeFormat('ar',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(new Date()))+'</small></div><button class="btn sm dark" data-go="orders">📋 عرض الطلبات</button></div>'+
      '<div class="kp4"><div><b>'+td.length+'</b><small>طلبات اليوم</small></div><div><b>'+ready+'</b><small>جاهز للتجهيز</small></div><div><b>'+packing+'</b><small>قيد التجهيز</small></div><div><b>'+a.length+'</b><small>طلبات نشطة</small></div></div>'+
      '<div class="dsub"><b>💡 EMD يقترح عليك الآن</b>'+(focus.length?focus.map(function(o){return insRow(o)}).join(''):'<p class="note">لا توجد طلبات تحتاج إجراء الآن ✅</p>')+'</div>'+
      '<div class="dsub"><b>🧠 توصية EMD</b><h4>'+esc(rc[0])+'</h4><p>'+esc(rc[1])+'</p><div class="kp3"><div><b>'+td.length+'</b><small>طلبات اليوم</small></div><div><b>'+recvToday+'</b><small>مستلمة اليوم</small></div><div><b>'+a.length+'</b><small>نشطة الآن</small></div></div><button class="btn dark wide" '+rc[2]+'>'+esc(rc[3])+'</button></div>'+
      (shopMode()?'':'<div class="dsub"><b>⏰ شحن يحتاج متابعة</b><small>طلبات مضى على شحنها 48 ساعة أو أكثر ولم تُسجَّل كمستلمة.</small>'+(late.length?late.slice(0,5).map(function(o){return insRow(o,'<button class="btn sm" data-act="wa" data-id="'+esc(oid(o))+'">💬 متابعة</button>')}).join(''):'<p class="okbox">✅ لا توجد حاليًا طلبات مشحونة متأخرة 48 ساعة أو أكثر.</p>')+'</div>')+
      '<div class="dsub"><b>🔔 مركز التنبيهات</b><small>ملخص سريع للأشياء التي تستحق انتباهك الآن، بدل البحث بينها داخل الطلبات.</small>'+(alerts.length?alerts.map(function(x){return '<button class="arow" data-filter="'+x[3]+'"><span><b>'+x[1]+'</b><small>'+x[2]+'</small></span><i>'+x[0]+'</i></button>'}).join(''):'<p class="okbox">✅ لا توجد تنبيهات الآن.</p>')+'</div>'+
      '<div class="dsub"><b>⚡ إجراء سريع</b><small>'+esc(quick)+'</small><div class="rowb">'+(shipped?'<button class="btn sm dark" data-filter="shipped">🚚 متابعة الشحن</button>':'')+(ready?'<button class="btn sm" data-filter="ready">🟢 التجهيز الآن</button>':'')+(waiting?'<button class="btn sm" data-go="stock">📦 فتح المخزن</button>':'')+'</div></div>'+
    '</div>'+
    '<div class="dcard"><h3>🔔 يحتاج انتباه</h3>'+(att.length?att.map(function(o){return insRow(o,'<button class="btn sm" data-act="open" data-id="'+esc(oid(o))+'">تحديث</button>')}).join(''):'<p class="note">لا يوجد ما يحتاج انتباهك الآن ✅</p>')+'</div></div>';
}

/* ---------- مركز الأداء ---------- */
var NOTIFY_KEY=CLOUD_SANDBOX?'emd_rb_v164_notify_settings':'emd_v164_notify_settings';
function nfMode(){var s={};try{s=JSON.parse(lsGet(NOTIFY_KEY)||lsGet('emd_v164_notify_settings')||'{}')||{}}catch(e){}return s.mode||'manual'}
function nfOk(o){var its=items(o);return its.length&&its.every(function(x){var a=available(iname(x),o);return a!==null&&a>=qty(x)})}
function nfReady(){return db.orders.filter(function(o){return o.notifyOnAvailable===true&&status(o)!=='received'&&o.notifyStatus!=='sent_manual'&&nfOk(o)})}
function nfWaiting(){return db.orders.filter(function(o){return o.notifyOnAvailable===true&&status(o)!=='received'&&o.notifyStatus!=='sent_manual'&&!nfOk(o)})}
function nfMsg(o){return 'السلام عليكم '+(cname(o)||'عميلنا العزيز')+' 🌷\n\nنود إبلاغك بأن المنتج الذي طلبت إشعارك عند توفره أصبح متوفرًا لدينا الآن.\n\n'+items(o).map(function(x){return '• '+iname(x)+' × '+qty(x)}).join('\n')+'\n\nيمكنك التواصل معنا لإتمام طلبك.\nشكرًا لك 🤍'}
function nfSend(o){if(!cphone(o)){alert('لا يوجد رقم واتساب محفوظ لهذا العميل.');return}waOpen(o,false,nfMsg(o));o.notifyStatus='sent_manual';o.notifySentAt=new Date().toISOString();save();render()}
function perfHtml(){
  var all=db.orders.filter(function(o){return status(o)!=='cancelled'}),c=function(s){return all.filter(function(o){return status(o)===s}).length};
  var rec=c('received'),pct=all.length?Math.round(rec/all.length*100):0,top={};
  all.forEach(function(o){items(o).forEach(function(x){var n=iname(x);top[n]=(top[n]||0)+qty(x)})});
  var tops=Object.keys(top).sort(function(a,b){return top[b]-top[a]}).slice(0,5);
  var low=db.products.map(function(p){return {n:p.name,a:available(p.name)}}).filter(function(x){return x.a!==null}).sort(function(a,b){return a.a-b.a}).slice(0,5);
  var md=nfMode(),rd=nfReady(),wt=nfWaiting();
  return '<div class="ph"><h2>📊 مركز الأداء</h2><small>ملخص عملي لأداء الطلبات والمنتجات والمخزون.</small></div>'+
    '<div class="pgrid">'+[['📋 إجمالي الطلبات',all.length],['📅 طلبات اليوم',insToday().length],['🟢 جاهزة',c('ready')],['🛠️ قيد التجهيز',c('packing')],['🚚 مشحونة',c('shipped')],['📬 مستلمة',rec]].map(function(x){return '<div><small>'+x[0]+'</small><b>'+x[1]+'</b></div>'}).join('')+'</div>'+
    '<div class="pcard"><div class="prow"><span><b>🏆 الإنجاز</b><small>نسبة الطلبات المستلمة</small></span><b class="big">'+pct+'%</b></div><div class="bar"><i style="width:'+pct+'%"></i></div><div class="prow"><span>⏳ بانتظار المنتجات</span><b>'+c('waiting')+'</b></div></div>'+
    '<div class="pcard"><h3>🔥 الأكثر طلبًا</h3>'+(tops.length?tops.map(function(n,i){return '<div class="prow ln"><span>'+(i+1)+'. '+esc(n)+'</span><i class="pill">'+top[n]+' قطعة</i></div>'}).join(''):'<p class="note">لا توجد طلبات بعد.</p>')+'</div>'+
    '<div class="pcard"><h3>📦 المخزون الذي يحتاج انتباه</h3>'+(low.length?low.map(function(x){return '<div class="prow ln"><span>'+esc(x.n)+'</span><i class="pill'+(x.a<=0?' bad':'')+'">متاح '+Math.max(0,x.a)+'</i></div>'}).join(''):'<p class="note">لا توجد منتجات بعد.</p>')+'</div>'+
    '<div class="pcard"><div class="prow"><span><b>🔔 إشعارات توفر المنتجات</b><small>يتابع العملاء الذين طلبوا إشعارهم عند وصول المنتج.</small></span><span class="tag">'+(md==='manual'?'يدوي':md==='approval'?'موافقة قبل الإرسال':'تلقائي')+'</span></div>'+
      '<div class="nfm"><b>طريقة الإشعار</b>'+[['manual','يدوي — EMD ينبهك وأنت ترسل'],['approval','يحتاج موافقة — يظهر لك الإرسال قبل التنفيذ'],['auto','تلقائي — يحتاج ربط WhatsApp Business API للإرسال الحقيقي']].map(function(m){return '<label><input type="radio" name="nfm" value="'+m[0]+'"'+(md===m[0]?' checked':'')+'> '+m[1]+'</label>'}).join('')+'</div>'+
      '<p>🟢 جاهز للإشعار: <b>'+rd.length+'</b> &nbsp; ⏳ بانتظار التوفر: <b>'+wt.length+'</b></p>'+
      (rd.length?'<div class="okbox"><b>🟢 أصبح متوفرًا الآن</b>'+rd.slice(0,8).map(function(o){return insRow(o,'<button class="btn sm dark" data-act="nfSend" data-id="'+esc(oid(o))+'">💬 إرسال الإشعار</button>')}).join('')+'</div>':'<p class="okbox">لا توجد حاليًا طلبات جاهزة لإشعار العميل ✅</p>')+'</div>';
}
function nfSetMode(v){var s={};try{s=JSON.parse(lsGet(NOTIFY_KEY)||lsGet('emd_v164_notify_settings')||'{}')||{}}catch(e){}s.mode=v;lsSet(NOTIFY_KEY,JSON.stringify(s));render()}

/* ---------- 🔗 تتبع طلبات العملاء (V316) ---------- */
function trNumber(o,used){var base=String(oid(o)||'0').replace(/[^0-9A-Za-z_-]/g,'').slice(-8)||'0',d=new Date(),ds=String(d.getFullYear()).slice(-2)+pad(d.getMonth()+1)+pad(d.getDate()),seed='EMD-'+ds+'-'+base,n=seed,i=1;
  while(used[n]){i++;n=seed+'-'+pad(i)}used[n]=1;return n}
function trToken2(){try{var a=new Uint8Array(18);crypto.getRandomValues(a);return 'EMD-'+Array.from(a,function(x){return x.toString(16).padStart(2,'0')}).join('')}catch(e){return 'EMD-'+Date.now().toString(36)+Math.random().toString(36).slice(2)}}
/* لكل طلب رقم تتبع EMD ورمز، يُنشآن مرة واحدة كما في التطبيق الحالي */
function trEnsureAll(){var used={},ch=false;db.orders.forEach(function(o){var n=String(o.customerTrackingNumber||'').trim().replace(/\s+/g,'-');if(n){used[n]=1;if(n!==o.customerTrackingNumber){o.customerTrackingNumber=n;ch=true}}});
  db.orders.forEach(function(o){if(!o.customerTrackingNumber){o.customerTrackingNumber=trNumber(o,used);ch=true}if(!o.trackingToken){o.trackingToken=trToken2();ch=true}});if(ch)save();return ch}
var trAll=false;
function trackSheet(){trEnsureAll();var L=db.orders.filter(function(o){return status(o)!=='cancelled'}).slice().sort(function(a,b){return (odate(a)||0)-(odate(b)||0)}),has=L.filter(function(o){return o.customerTrackingNumber}).length,shown=trAll?L:L.slice(-12);
  var d=openSheet('<div class="sh"><div><h3>🔗 تتبع طلبات العملاء</h3><small>لكل طلب رقم تتبع EMD ورابط متابعة. الرابط لا يعرض رقم الهاتف أو بيانات الاتصال.</small></div><button class="x" data-act="close">إغلاق ✕</button></div>'+
    '<div class="kp3"><div><b>'+L.length+'</b><small>الطلبات</small></div><div><b>'+has+'</b><small>لها رابط تتبع</small></div><div><b>'+(L.length-has)+'</b><small>بدون رابط</small></div></div>'+
    '<div class="rowb"><button class="btn sm dark" data-tk="refresh">🔄 تحديث</button>'+(L.length>12?'<button class="btn sm" data-tk="all">'+(trAll?'عرض أحدث 12':'📋 عرض الكل')+'</button>':'')+'</div>'+
    shown.map(function(o){var u=trUrl(o),sent=o.trackingSentStatus&&String(o.trackingSentStatus)===String(o.status);
      return '<div class="tkc"><b>طلب '+esc(onum(o))+' — '+esc(cname(o)||'بدون اسم')+'</b><small>'+ST[status(o)].i+' '+ST[status(o)].l+' · 🔢 <span dir="ltr">'+esc(o.customerTrackingNumber)+'</span></small>'+
        '<small>🔗 '+(u?'<span dir="ltr">'+esc(u)+'</span>':'⏳ يُنشأ الرابط من موقع التتبع عند الإرسال أو النسخ')+'</small>'+
        '<div class="rowb"><button class="btn sm" data-tk="num" data-id="'+esc(oid(o))+'">📋 نسخ الرقم</button><button class="btn sm" data-tk="link" data-id="'+esc(oid(o))+'">🔗 نسخ الرابط</button><button class="btn sm" data-act="wa" data-id="'+esc(oid(o))+'">📲 واتساب الشحن</button></div>'+
        '<small class="'+(u&&sent?'ok':'mute')+'">📡 '+(u?(sent?'صفحة العميل محدَّثة بحالة الطلب.':'حالة الطلب لم تُرسل لصفحة العميل بعد.'):'لم يُرسل الطلب لصفحة العميل بعد.')+'</small>'+
        (u&&!sent?'<button class="btn sm" data-tk="sync" data-id="'+esc(oid(o))+'">🔄 مزامنة الحالة الآن</button>':'')+'</div>'}).join(''));
  d.addEventListener('click',function(e){var b=e.target.closest('[data-tk]');if(!b)return;var k=b.dataset.tk,o=findOrder(b.dataset.id||'');
    if(k==='all'||k==='refresh'){if(k==='all')trAll=!trAll;closeSheet(d);trackSheet();return}if(!o)return;
    if(k==='num')insCopy(o.customerTrackingNumber,'📋 نُسخ رقم التتبع');
    else if(k==='link'||k==='sync'){b.disabled=true;trLink(o).then(function(u){if(k==='link')insCopy(u,'🔗 نُسخ رابط التتبع');else toast('✅ تم تحديث صفحة العميل');closeSheet(d);trackSheet()},function(er){b.disabled=false;toast(er.message||'تعذّر إنشاء الرابط')})}})}
function insCopy(t,msg){if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).then(function(){toast(msg)},function(){prompt('انسخ:',t)});else prompt('انسخ:',t)}
