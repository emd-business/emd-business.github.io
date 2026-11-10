/* رسائل واتساب حسب حالة الطلب (نفس أنواع التطبيق الحالي ومتغيراته)
   القوالب التي عدّلها التاجر في التطبيق الحالي تُقرأ ولا تُعدَّل؛ تعديلات التجربة تُحفظ في مفتاح منفصل */
var WA_OLD_DEF='السلام عليكم {اسم العميل} 👋\nتم شحن طلبك رقم #{رقم الطلب} بنجاح 📦\n\n📚 {المنتج} × {الكمية}\n📍 مكان التوصيل: {المكان}\n🚚 شركة الشحن: {شركة الشحن}\n🛵 طريقة التوصيل: {طريقة التوصيل}\n\nشكرًا لطلبك 🤍';
var WA_LIVE_KEY='emd_whatsapp_templates_v189',WA_KEY='emd_rb_wa_templates';
var WA_TYPES=[
  {k:'new_order',t:'✅ تأكيد الطلب',st:['new','waiting','ready'],d:'مرحبًا {name} 🌷\n\nاستلمنا طلبك رقم #{order} ✅\nالمنتجات: {items}\n\nسنبدأ تجهيزه ونبلغك فور شحنه.'},
  {k:'preparing',t:'🛠️ قيد التجهيز',st:['packing'],d:'مرحبًا {name} 🌷\n\nطلبك رقم #{order} قيد التجهيز الآن 🛠️\nالمنتجات: {items}\n\nسنبلغك فور شحنه.'},
  {k:'shipped',t:'🚚 تم الشحن',st:['shipped'],d:'مرحبًا {name} 🌷\n\nتم شحن طلبك رقم #{order} بنجاح 🚚\nالمنتجات: {items}\nشركة التوصيل: {company}'},
  {k:'received',t:'📬 تأكيد الاستلام',st:['received'],d:'مرحبًا {name} 🌷\n\nنتمنى أن يكون طلبك رقم #{order} قد وصلك بخير 📬\nيسعدنا تأكيدك للاستلام وتقييم تجربتك.'}
];
function waSaved(key){try{var x=JSON.parse(lsGet(key)||'{}');return x&&typeof x==='object'?x:{}}catch(e){return {}}}
function waTypeFor(o){var s=status(o);for(var i=0;i<WA_TYPES.length;i++)if(WA_TYPES[i].st.indexOf(s)>=0)return WA_TYPES[i].k;return 'new_order'}
function waTemplate(k){
  var a=waSaved(WA_KEY)[k]||waSaved(WA_LIVE_KEY)[k];
  if(a&&typeof a==='object'&&a.enabled!==false&&String(a.text||'').trim())return String(a.text).replace(/\\n/g,'\n');
  if(k==='shipped'){var old=POS_LS.getItem('emd_wa_template');if(old&&old.trim()&&old!==WA_OLD_DEF)return old} // القالب القديم «💬 رسالة واتساب»
  for(var i=0;i<WA_TYPES.length;i++)if(WA_TYPES[i].k===k)return WA_TYPES[i].d;return WA_TYPES[0].d;
}
function waLink(o){return String(o.trackingUrl||o.tracking_url||'')}
function waFill(t,o){
  var its=items(o),first=its[0]||null,nm=oid(o).replace(/^#+/,''),link=waLink(o),sn=storeName();
  var list=its.map(function(x){return iname(x)+' × '+qty(x)}).join('، ')||'—';
  var map={name:cname(o)||'عميلنا العزيز',order:nm,items:list,company:o.company||o.deliveryCompany||'—',method:o.method||o.deliveryMethod||'—',place:cplace(o)||'—',link:link,store:sn,
    'اسم العميل':cname(o)||'عميلنا العزيز','رقم الطلب':nm,'المنتج':first?iname(first):list,'الكمية':first?qty(first):1,'المكان':cplace(o)||'—','شركة الشحن':o.company||'—','طريقة التوصيل':o.method||o.deliveryMethod||'—','الرابط':link};
  return String(t).replace(/\{([^{}]+)\}/g,function(m,k){return Object.prototype.hasOwnProperty.call(map,k)?String(map[k]):m});
}
function waText(o,k){
  k=k||waTypeFor(o);var txt=waFill(waTemplate(k),o),link=waLink(o),sn=storeName();
  if(link&&txt.indexOf(link)<0)txt+='\n\n🔗 '+(k==='received'?'أكّد الاستلام وقيّمنا':'تابع طلبك')+':\n'+link;
  if(sn&&txt.indexOf(sn)<0)txt+='\n\nشكرًا لثقتك بنا 🤍\n'+sn;else if(!sn&&!/شكر/.test(txt))txt+='\n\nشكرًا لثقتك بنا 🤍';
  return txt;
}
function waPhone(p){p=digits(p).replace(/\D/g,'');if(p.indexOf('00')===0)p=p.slice(2);if(p.length===8)p='968'+p;return p}
function waOpen(o,plain,text){window.open('https://wa.me/'+waPhone(cphone(o))+'?text='+encodeURIComponent(text||(plain?('مرحبًا'+(cname(o)?' '+cname(o):'')+'،\n'):waText(o))),'_blank')}
function waSheet(o){
  if(!waPhone(cphone(o))){toast('لا يوجد رقم للعميل');return}
  var k=waTypeFor(o),edited=false;
  var d=openSheet('<div class="sh"><div><h3>💬 رسالة واتساب</h3><small>'+esc(onum(o))+' · '+esc(cname(o)||cphone(o))+'</small></div><button class="x" data-act="close">إغلاق ✕</button></div>'+
    '<div class="chips" id="waChips"></div><textarea class="in msg" id="waTa"></textarea>'+
    '<label class="chk" style="margin:8px 0"><input type="checkbox" id="waKeep"> احفظ تعديلي رسالةً دائمة لهذا النوع</label>'+
    '<div class="foot"><button class="btn green" id="waGo">💬 إرسال في واتساب</button><button class="btn" data-act="close">إلغاء</button></div>');
  function paint(){d.querySelector('#waChips').innerHTML=WA_TYPES.map(function(t){return '<button type="button" class="chip'+(t.k===k?' on':'')+'" data-wk="'+t.k+'">'+t.t+'</button>'}).join('');$('waTa').value=waText(o,k);edited=false;
    if(!waLink(o)&&(k==='shipped'||k==='received')&&cloudCanWrite()){var kk=k;trLink(o).then(function(){if(!edited&&k===kk)$('waTa').value=waText(o,k)},function(e){toast(e.message)})}}
  d.addEventListener('click',function(e){var c=e.target.closest('[data-wk]');if(c){if(edited&&!confirm('تغيير نوع الرسالة يلغي تعديلك. هل تريد المتابعة؟'))return;k=c.dataset.wk;paint();return}
    if(e.target.id==='waGo'){var txt=$('waTa').value;
      if($('waKeep').checked){var s=waSaved(WA_KEY);s[k]={enabled:true,text:txt};lsSet(WA_KEY,JSON.stringify(s));toast('💾 حُفظت الرسالة لهذا النوع')}
      if(!Array.isArray(o.waLog))o.waLog=[];o.waLog.push({k:k,at:new Date().toISOString()});save();
      waOpen(o,false,txt);closeSheet(d)}});
  d.addEventListener('input',function(e){if(e.target.id==='waTa')edited=true});
  paint();
}
