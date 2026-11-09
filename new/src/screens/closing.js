/* تقفيلة اليوم: ملخص اليوم، إرساله للمدير بواتساب أو بالبريد، وتذكير يومي بوقت محدد
   الإعدادات تُقرأ من التطبيق الحالي مرة واحدة (emd_v108_close) وتُحفظ في مفتاح التجربة */
var CLOSE_KEY='emd_rb_close',CLOSINGS_KEY='emd_rb_closings';
function closeCfg(){var c;try{c=JSON.parse(lsGet(CLOSE_KEY)||lsGet('emd_v108_close')||'{}')||{}}catch(e){c={}}if(c.enabled==null)c.enabled=true;c.time=c.time||'22:00';c.wa=c.wa||'';c.email=c.email||'';return c}
function closeSave(c){lsSet(CLOSE_KEY,JSON.stringify(c))}
function closings(){try{var a=JSON.parse(lsGet(CLOSINGS_KEY)||'[]');return Array.isArray(a)?a:[]}catch(e){return []}}
function dayOf(v){var t=new Date(v||0);return isNaN(t)||t.getTime()<=0?'':dkey(t)}
function closingReport(dk){
  var r={dk:dk,newO:0,sales:0,paidToday:0,shipped:0,received:0,cancelled:0,prods:{},due:index().unpaid,ready:0,packing:0,waiting:0,low:[]};
  db.orders.forEach(function(o){var s=status(o),od=dayOf(o.orderDate||o.created||o.createdAt||o.date);
    if(s==='ready')r.ready++;else if(s==='packing')r.packing++;else if(s==='waiting')r.waiting++;
    if(od===dk){if(s==='cancelled')r.cancelled++;else{r.newO++;r.sales+=total(o);items(o).forEach(function(x){r.prods[iname(x)]=(r.prods[iname(x)]||0)+qty(x)})}}
    if(s!=='cancelled'&&dayOf(o.paidAt)===dk)r.paidToday+=paid(o);
    if(dayOf(o.shippedAt)===dk)r.shipped++;
    if(dayOf(o.receivedAt)===dk)r.received++});
  db.products.forEach(function(p){var a=available(p.name);if(a!==null&&a<=3)r.low.push(p.name+' ('+Math.max(0,a)+')')});
  return r;
}
function closingText(r){
  var top=Object.keys(r.prods).sort(function(a,b){return r.prods[b]-r.prods[a]}).slice(0,5);
  var dl=new Date(r.dk+'T12:00:00').toLocaleDateString('ar-OM',{weekday:'long',day:'numeric',month:'long'});
  var t='📊 تقفيلة '+(storeName()||'المتجر')+' — '+dl+'\n\n'+
    '📦 طلبات اليوم: '+r.newO+'\n💰 مبيعات اليوم: '+money(r.sales)+' '+CUR+'\n✅ المحصّل اليوم: '+money(r.paidToday)+' '+CUR+'\n⏳ إجمالي غير المحصّل: '+money(r.due)+' '+CUR+'\n\n'+
    '🚚 شُحن اليوم: '+r.shipped+'\n📬 استلمها العملاء: '+r.received+(r.cancelled?'\n❌ ملغى: '+r.cancelled:'')+'\n\n'+
    '🟢 جاهز للتجهيز: '+r.ready+'\n🛠️ قيد التجهيز: '+r.packing+'\n⏳ بانتظار المنتجات: '+r.waiting;
  if(top.length)t+='\n\n🏆 الأكثر طلبًا اليوم:\n'+top.map(function(n){return '• '+n+' × '+r.prods[n]}).join('\n');
  if(r.low.length)t+='\n\n⚠️ مخزون قليل: '+r.low.slice(0,6).join('، ');
  return t+'\n\n— EMD Business';
}
function closingSheet(){
  var C=closeCfg(),today=dkey(new Date()),r=closingReport(today),txt=closingText(r),done=closings().filter(function(x){return x.dk===today})[0];
  var d=openSheet('<div class="sh"><div><h3>📊 تقفيلة اليوم</h3><small>ملخص يومك، وترسله للمدير بضغطة.</small></div><button class="x" data-act="close">إغلاق ✕</button></div>'+
    '<div class="kpis"><div class="kpi"><b>'+r.newO+'</b><span>طلبات اليوم</span></div><div class="kpi"><b>'+money(r.sales)+'</b><span>مبيعات اليوم</span></div><div class="kpi"><b>'+money(r.paidToday)+'</b><span>المحصّل اليوم</span></div><div class="kpi"><b>'+money(r.due)+'</b><span>غير المحصّل</span></div></div>'+
    '<pre class="cltxt">'+esc(txt)+'</pre>'+
    (done?'<div class="okbar">✅ تم تقفيل اليوم — '+new Date(done.at).toLocaleTimeString('ar-OM',{hour:'2-digit',minute:'2-digit'})+'</div>':'')+
    '<div class="foot"><button class="btn green" data-cl="wa">💬 أرسل واتساب</button><button class="btn" data-cl="mail">✉️ أرسل بريدًا</button></div>'+
    '<div class="foot" style="margin-top:4px"><button class="btn" data-cl="copy">📋 نسخ</button>'+(done?'':'<button class="btn dark" data-cl="done">🔒 تقفيل اليوم</button>')+'</div>'+
    '<details class="more"><summary>⚙️ إعدادات التقفيلة</summary>'+
    '<label class="chk" style="margin:8px 0"><input type="checkbox" data-cc="enabled"'+(C.enabled?' checked':'')+'> 🔔 تذكير التقفيلة كل يوم</label>'+
    '<label class="f">وقت التقفيلة</label><input class="in" type="time" data-cc="time" value="'+esc(C.time)+'">'+
    '<label class="f">واتساب المدير</label><input class="in" data-cc="wa" inputmode="tel" placeholder="مثال: 99999999" value="'+esc(C.wa)+'">'+
    '<label class="f">بريد المدير</label><input class="in" data-cc="email" type="email" placeholder="name@example.com" value="'+esc(C.email)+'"></details>');
  d.addEventListener('change',function(e){var k=e.target.dataset.cc;if(!k)return;var c=closeCfg();c[k]=e.target.type==='checkbox'?e.target.checked:e.target.value.trim();closeSave(c);toast('💾 حُفظ')});
  d.addEventListener('click',function(e){var b=e.target.closest('[data-cl]');if(!b)return;var k=b.dataset.cl,c=closeCfg();
    if(k==='wa'){var p=waPhone(c.wa);window.open('https://wa.me/'+(p||'')+'?text='+encodeURIComponent(txt),'_blank')}
    else if(k==='mail'){location.href='mailto:'+encodeURIComponent(c.email)+'?subject='+encodeURIComponent('تقفيلة '+(storeName()||'المتجر')+' — '+today)+'&body='+encodeURIComponent(txt)}
    else if(k==='copy'){if(navigator.clipboard)navigator.clipboard.writeText(txt).then(function(){toast('📋 نُسخ الملخص')})}
    else if(k==='done'){var a=closings().filter(function(x){return x.dk!==today});a.push({dk:today,at:new Date().toISOString(),newO:r.newO,sales:r.sales,paidToday:r.paidToday});lsSet(CLOSINGS_KEY,JSON.stringify(a.slice(-120)));closeSheet(d);toast('🔒 تم تقفيل اليوم');closingSheet()}});
}
/* التذكير: يُفحص مع تحديث الساعة (لا مؤقت إضافي) */
function closingTick(){
  var c=closeCfg();if(!c.enabled)return;var n=new Date(),today=dkey(n),hm=pad(n.getHours())+':'+pad(n.getMinutes());
  if(hm<c.time||c.reminded===today||closings().some(function(x){return x.dk===today}))return;
  c.reminded=today;closeSave(c);
  openSheet('<div class="sh"><h3>🔔 حان وقت تقفيلة اليوم</h3><button class="x" data-act="close">إغلاق ✕</button></div><p class="note">راجع ملخص يومك وأرسله للمدير.</p><div class="foot"><button class="btn dark" data-act="closing">📊 فتح التقفيلة</button><button class="btn" data-act="close">لاحقًا</button></div>');
}
