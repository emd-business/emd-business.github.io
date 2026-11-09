/* ---------- 7) الإعدادات والتجربة ---------- */
function settingsSheet(){
  var live=lsGet(LIVE_KEY);
  openSheet('<div class="sh"><h3>⚙️ إعدادات التجربة</h3><button class="x" data-act="close">إغلاق ✕</button></div>'+
    '<p class="note">هذه نسخة تجريبية من التطبيق الجديد. مصدر البيانات الحالي: <b>'+esc(srcLabel())+'</b>. تعديلاتك هنا تبقى داخل التجربة فقط ولا تصل إلى تطبيقك الأصلي.</p><div class="list">'+
    (live?'<button data-act="recopy">🔁 إعادة نسخ بياناتي من التطبيق الحالي</button>':'')+
    '<button data-act="cloud">☁️ الحساب والحفظ في السحابة</button><button data-act="push">🔔 الإشعارات</button><button data-act="support">🆘 المساعدة والدعم</button><button data-act="openFile">📂 فتح ملف نسخة احتياطية</button>'+
    '<button data-act="demo" data-n="40">🧪 بيانات تجريبية صغيرة (40 طلبًا)</button>'+
    '<button data-act="demo" data-n="1500">⚡ بيانات كبيرة لاختبار السرعة (1500 طلب)</button></div>');
}
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
