/* ---------- 7) الإعدادات والتجربة ---------- */
/* مركز الإعدادات: نفس أقسام «⚙️ إعدادات EMD Business» وبطاقاتها في التطبيق الحالي (V327 + V445) */
var SET_I={
 profile:['🏢 بيانات النشاط','الاسم والتواصل والموقع والعملة. تظهر في الفاتورة والملصق.',function(){setRun(function(){EMDBusinessProfileV333.open()})}],
 prefix:['🔤 حروف رقم الطلب',function(){var p=prefix();return 'الحالية: '+p+'. تظهر قبل رقم كل طلب مثل '+p+'-0042.'},function(){setRun(function(){EMDPrefixV129.open()})}],
 wizard:['🚀 معالج الإعداد السريع','المتجر والمنتجات وشركات الشحن خطوة بخطوة.',null],
 quick:['🏷️ الملصق السريع','تصميم الملصق الذي يُطبع بزر «🏷️ ملصق» ومقاسه.',null],
 invp:['🧾 اقتراح إرسال الفاتورة',function(){return invpOn()?'مفعّل: يظهر اقتراح إرسال الفاتورة بعد استلام الطلب. اضغط للإيقاف.':'متوقف. اضغط لتفعيل اقتراح إرسال الفاتورة بعد استلام الطلب.'},function(){setRun(function(){EMDInvPromptV117.set(!EMDInvPromptV117.on());setPaint()})}],
 push:['🔔 الإشعارات','طلبات المتجر الجديدة، والتقييمات، والمخزون، وملخص اليوم على جوالك.',function(){setClose();pushSheet()}],
 wa:['💬 رسالة واتساب','قالب الرسالة التي تُرسل للعميل ومتغيراتها.',null],
 tpl:['📝 رسائل طلب جاهزة للعملاء','نماذج يملؤها العميل ويعيدها إليك.',function(){setRun(function(){EMDOrderTemplatesV121.open()})}],
 ign:['🧹 جمل يتجاهلها التحليل','أسطر في رسالة الطلب لا يقرؤها التحليل.',function(){setRun(function(){EMDParseCleanV120.open()})}],
 dup:['♻️ الطلبات المكررة','قواعد كشف الطلبات المكررة ومعالجتها.',null],
 look:['🎨 المظهر والهوية','الثيم والألوان والشعار وحجم العرض.',null],
 lang:['🌐 اللغة','الحالية: العربية. اضغط للتبديل إلى English.',null],
 btn:['🎛️ شكل الأزرار والشريط السفلي','شكل الأيقونات وأزرار الشريط السفلي على الجوال.',null],
 ord:['↕️ ترتيب الأزرار والأقسام','ترتيب أزرار الشريط وأقسام الصفحات.',null],
 qa:['⚡ الإجراءات السريعة','الاختصارات التي تظهر في قائمة «إجراءات سريعة».',null],
 dash:['📊 بطاقات الرئيسية','إظهار بطاقات حالات الطلبات أو إخفاؤها.',null],
 dord:['↕️ ترتيب بطاقات الرئيسية','ترتيب بطاقات حالات الطلبات.',null],
 dpri:['🎯 إبراز الحالات المهمة','تمييز البطاقات التي فيها طلبات تحتاج انتباهك.',null],
 staff:['👥 الموظفون','إظهار زر الموظفين وإدارة الموظفين وصلاحياتهم.',function(){stLoad().then(function(){EMDStaffHideV111.open()},function(){toast('تعذّر الفتح. تحقّق من الاتصال.')})}],
 lock:['🔐 قفل التطبيق','كلمة المرور والقفل التلقائي وتسجيل الخروج.',null],
 sec:['🧾 الأدوار وسجل العمليات','الصلاحيات وسجل العمليات المهمة.',null],
 rec:['🛟 رمز استرجاع المدير','رمز يعيد لك رمز المدير إذا نسيته.',null],
 bk:['💾 النسخة الاحتياطية والاستعادة','تصدير نسخة، واستيراد نسخة، ونقطة استعادة.',null],
 bk2:['📊 حالة التخزين والتذكير','آخر نسخة، ونسبة التخزين، وتذكير النسخ.',null],
 lost:['🛟 استرجاع الطلبات المفقودة','البحث في النسخ التلقائية عن طلب اختفى.',null],
 help:['🆘 المساعدة والدعم','أسئلة شائعة، وإرسال مشكلة أو اقتراح.',function(){setClose();supportOpen()}],
 pwa:['📲 تثبيت التطبيق على الجوال','طريقة إضافة التطبيق إلى الشاشة الرئيسية.',function(){pwaInstall()}]};
var SET_G={layout:['🎛️ تخصيص الأزرار والرئيسية','شكل الأزرار وترتيبها، والإجراءات السريعة، وبطاقات الرئيسية.',['btn','ord','qa','dash','dord','dpri']],
 secg:['🔐 الحماية والصلاحيات','قفل التطبيق، والأدوار وسجل العمليات، ورمز الاسترجاع.',['lock','sec','rec']],
 data:['💾 النسخ والاستعادة','النسخة الاحتياطية، وحالة التخزين، واسترجاع الطلبات المفقودة.',['bk','bk2','lost']]};
var SET_S=[['🏢 النشاط',['profile','prefix','wizard']],['🧾 الفاتورة والملصق',['quick','invp']],['💬 الرسائل والطلبات',['push','wa','tpl','ign','dup']],['🎨 الشكل والتخصيص',['look','@layout','lang']],['👥 الموظفون والحماية',['staff','@secg']],['💾 البيانات',['@data']],['🆘 المساعدة',['help','pwa']]];
function invpOn(){try{return POS_LS.getItem('emd_v117_invprompt')!=='0'}catch(e){return true}}
function setItem(k){var it=SET_I[k],d=typeof it[1]==='function'?it[1]():it[1];return '<button type="button" class="emd327-item" data-si="'+k+'"'+(k==='invp'?' id="emd117Item"':'')+'><b>'+esc(it[0])+'</b><span>'+esc(d)+'</span></button>'}
function setEntry(k){if(k.charAt(0)!=='@')return setItem(k);var g=SET_G[k.slice(1)];return '<button type="button" class="emd327-item e445-grp" data-sg="'+k.slice(1)+'"><b>'+esc(g[0])+'</b><span>'+esc(g[1])+'</span></button>'}
function setBody(){return SET_S.map(function(s){return '<div class="e445-sec"><div class="e445-t">'+s[0]+'</div><div class="emd327-grid">'+s[1].map(setEntry).join('')+'</div></div>'}).join('')+
  (CLOUD_SANDBOX?'<div class="e445-sec"><div class="e445-t">🧪 التجربة</div><p class="emd327-sub" style="margin:0 0 8px">مصدر البيانات الحالي: <b>'+esc(srcLabel())+'</b>. تعديلاتك هنا تبقى داخل التجربة فقط ولا تصل إلى تطبيقك الأصلي.</p><div class="emd327-grid">'+
    '<button type="button" class="emd327-item" data-act="modes"><b>🧭 نوع النشاط</b><span>الحالي: '+MODE_NAME[mode()]+'</span></button>'+(mode()==='company'?'<button type="button" class="emd327-item" data-act="coOpen"><b>🏢 الفروع والمخازن</b><span>المخزون في كل مخزن، والتحويل بينها، والموظفون، وتقارير كل فرع.</span></button>':'')+(mode()==='online'?'':'<button type="button" class="emd327-item" data-act="posSet" data-v="prn"><b>🖨️ الطابعات</b><span>الاتصال بالطابعة، وتحديد طابعة كل عمل ومقاسه.</span></button><button type="button" class="emd327-item" data-act="posSet" data-v="inv"><b>🧾 تصميم الفاتورة</b><span>القالب واللون والحقول وطريقة الإرسال.</span></button>')+
    (lsGet(LIVE_KEY)?'<button type="button" class="emd327-item" data-act="recopy"><b>🔁 إعادة نسخ بياناتي</b><span>نسخة جديدة من بيانات تطبيقك الحالي.</span></button>':'')+
    '<button type="button" class="emd327-item" data-act="cloud"><b>☁️ الحساب والحفظ في السحابة</b><span>تسجيل الدخول والمزامنة.</span></button><button type="button" class="emd327-item" data-act="openFile"><b>📂 فتح ملف نسخة احتياطية</b><span>تجربة التطبيق على ملف نسخة.</span></button>'+
    '<button type="button" class="emd327-item" data-act="demo" data-n="40"><b>🧪 بيانات تجريبية صغيرة</b><span>40 طلبًا.</span></button><button type="button" class="emd327-item" data-act="demo" data-n="1500"><b>⚡ بيانات كبيرة لاختبار السرعة</b><span>1500 طلب.</span></button></div></div>':'')}
function setClose(){var m=$('setHub');if(m)m.remove();var g=$('e445G');if(g)g.remove();var sn=storeName(),el=$('storeName');if(el){el.textContent=sn?'🏪 '+sn:'';el.classList.toggle('hide',!sn)}}
function setPaint(){var b=$('setBody');if(b)b.innerHTML=setBody()}
function settingsSheet(){setClose();
  var m=document.createElement('div');m.id='setHub';m.className='emd327-settings-modal show';
  m.innerHTML='<div class="emd327-settings-card" role="dialog" aria-modal="true"><div class="emd327-head"><div><h2>⚙️ إعدادات EMD Business</h2><div class="emd327-sub">مركز واحد لإعدادات النظام، الأمان، البيانات، والذكاء الاصطناعي. أدوات التشغيل اليومية تبقى خارج الإعدادات.</div></div><button type="button" class="emd327-close" data-sx="1">إغلاق ✕</button></div><div id="setBody"></div></div>';
  document.body.appendChild(m);setPaint();
  m.addEventListener('click',function(e){if(e.target===m||e.target.closest('[data-sx]'))return setClose();
    var b=e.target.closest('[data-si],[data-sg]');if(b){e.stopPropagation();if(b.hasAttribute('data-sg'))return setGroup(b.getAttribute('data-sg'));setRunItem(b.getAttribute('data-si'))}
    else if(e.target.closest('[data-act]'))setTimeout(setClose,0)});
}
function setRunItem(k){var f=SET_I[k]&&SET_I[k][2];if(!f){toast('⏳ هذه الأداة تُنقل إلى النسخة الجديدة قريبًا.');return}if(k!=='invp'&&k!=='pwa')setClose();f()}
function setGroup(g){var x=SET_G[g],o=document.createElement('div');o.id='e445G';o.className='show';
  o.innerHTML='<div class="w"><div class="h"><b>'+esc(x[0])+'</b><button type="button" class="x" data-gx="1">✕</button></div>'+x[2].map(setItem).join('')+'</div>';
  document.body.appendChild(o);o.addEventListener('click',function(e){if(e.target===o||e.target.closest('[data-gx]'))return o.remove();var b=e.target.closest('[data-si]');if(b){o.remove();setRunItem(b.getAttribute('data-si'))}})}
function srcLabel(){var s=meta.source||'';return s==='live'?'نسخة من بيانات تطبيقك':s==='cloud'?'نسختك في السحابة':s.indexOf('file:')===0?'ملف '+s.slice(5):s.indexOf('demo')===0?'بيانات تجريبية':'—'}
function recopy(){
  var live=lsGet(LIVE_KEY);if(!live)return;
  if(!confirm('سيتم استبدال بيانات التجربة بنسخة جديدة من بيانات تطبيقك. تطبيقك نفسه لن يتغير. متابعة؟'))return;
  try{closeSheet();adopt(JSON.parse(live),'live');boot();toast('🔁 نُسخت بياناتك إلى التجربة')}catch(e){toast('تعذر قراءة بيانات التطبيق')}
}
function banner(){
  $('sbx').innerHTML='<span>🧪 <b>نسخة تجريبية من التطبيق الجديد</b> · '+esc(srcLabel())+' · عدد الطلبات: '+db.orders.length+'. تعديلاتك هنا لا تصل إلى تطبيقك.</span><button data-act="settings">تغيير البيانات</button>';
}

/* بيانات تجريبية */
function demo(n){
  var P=[['عطر ليالي مسقط 100 مل',38,18],['دهن عود ملكي 12 مل',45,25],['عطر ورد طائفي 50 مل',29,13],['مسك أبيض 6 مل',8,3],['بخور مروكي فاخر',15,6],['مبخرة نحاسية',17.5,8],['طقم هدية عطر وبخور',55,28],['معطر مفارش 250 مل',7.5,3],['شموع معطرة',12,5],['ساعة كلاسيك ذهبية',64,35]];
  var products=P.map(function(x,i){return {name:x[0],salePrice:x[1],costPrice:x[2],stock:[40,20,30,90,60,10,8,50,0,5][i]*Math.max(1,Math.round(n/40)),category:''}});
  var names=['مريم الحارثية','سالم البلوشي','فاطمة الكندية','خالد العامري','عائشة الهنائية','يوسف الرواحي','أحمد الشكيلي','نورة السيابية','علي المعمري','هدى الزدجالية'];
  var places=['مسقط - الخوير','السيب - الموالح','نزوى - فرق','صحار - فلج القبائل','بوشر - العذيبة','صلالة - السعادة'];
  var sts=['new','waiting','ready','ready','packing','shipped','received','received','received','received'];
  var orders=[],now=Date.now(),seed=7;function rnd(m){seed=(seed*9301+49297)%233280;return Math.floor(seed/233280*m)}
  for(var i=0;i<n;i++){
    var its=[],k=1+rnd(3);for(var j=0;j<k;j++){var p=P[rnd(P.length)];its.push({name:p[0],qty:1+rnd(3),unitPrice:p[1]})}
    var sub=its.reduce(function(s,x){return s+x.qty*x.unitPrice},0),st=i<12?sts[i%sts.length]:(i<n*0.15?sts[rnd(6)]:'received');
    var at=new Date(now-(i*(n>100?0.6:6)+rnd(5))*36e5).toISOString(),pay=st==='received'||rnd(3)===0?'paid':'unpaid';
    var c=rnd(names.length);
    orders.push({id:'#'+String(n-i).padStart(4,'0'),name:names[c],phone:'9'+(1000000+c*7919%8999999),place:places[c%places.length],company:rnd(2)?'جيناكم':'',products:its,subtotal:sub,total:sub,deliveryFee:0,paymentStatus:pay,paidAmount:pay==='paid'?sub:0,status:st,stockDeducted:st==='shipped'||st==='received',created:at,orderDate:at,history:[{status:st,at:at}]});
  }
  var customers=names.map(function(nm,c){return {name:nm,phone:'9'+(1000000+c*7919%8999999),place:places[c%places.length],orders:[]}});
  return {orders:orders,products:products,customers:customers,orderSeq:n+1};
}
