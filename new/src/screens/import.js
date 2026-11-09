/* ---------- إدخال الطلب من رسالة ---------- */
var parserP=null,lastMsg='';
function loadParser(){
  if(window.EMDParse)return Promise.resolve(window.EMDParse);
  if(!parserP)parserP=new Promise(function(ok,no){var sc=document.createElement('script');sc.src='parse.js?v=1';sc.onload=function(){ok(window.EMDParse)};sc.onerror=function(){parserP=null;no(new Error('parse.js'))};document.head.appendChild(sc)});
  return parserP;
}
function importSheet(msg){
  var d=openSheet('<div class="sh"><div><h3>📦 طلب جديد</h3><small>ألصق رسالة العميل كما هي، وسأستخرج الاسم والرقم والمكان والمنتجات.</small></div><button class="x" data-act="close">إغلاق ✕</button></div>'+
    '<textarea class="in msg" id="rawMsg" placeholder="مثال:&#10;ابي ٢ عطر عود ملكي&#10;محمد 99112233&#10;نزوى">'+esc(msg||'')+'</textarea>'+
    '<div class="foot"><button class="btn dark" data-act="doParse">🔎 تحليل الرسالة</button>'+(navigator.clipboard&&navigator.clipboard.readText?'<button class="btn" data-act="pasteMsg">📋 لصق</button>':'')+'</div>'+
    '<button class="btn" data-act="manualOrder" style="width:100%;margin-top:6px">✍️ كتابة طلب يدوي</button>');
  loadParser().catch(function(){});
  setTimeout(function(){var t=$('rawMsg');if(t&&!t.value)t.focus()},60);
  return d;
}
function doParse(){
  var raw=($('rawMsg')||{}).value||'';if(!raw.trim()){toast('ألصق الرسالة أولًا');return}
  lastMsg=raw;
  loadParser().then(function(P){
    P.setup({prods:function(){return db.products},lk:'emd_rb_learn232',ak:'emd_rb_learn103'});
    var r=P.parse(raw);
    var its=r.items.map(function(x){var p=x.p?product(x.p):null;return x.p?{name:x.p,qty:x.q,unitPrice:catPrice(p),parsed:1}:{name:'',qty:x.q,raw:x.raw,opts:x.opts,parsed:1}});
    var pre={name:r.name,phone:r.phone,place:r.place,company:r.company,method:r.method,paymentMethod:r.pay,note:r.note,products:its,paymentStatus:'unpaid'};
    var c=r.phone&&custByKey(phoneKey(r.phone));
    if(c){if(!pre.name)pre.name=c.name||'';if(!pre.place)pre.place=c.place||''}
    var st={r:r,cust:c};
    closeSheet();newOrder(pre,st);
  }).catch(function(){toast('تعذّر تحميل المحلّل. تحقّق من الاتصال وحاول مجددًا.')});
}
function importBar(st){
  var r=st.r,miss=[];if(!r.phone)miss.push('الرقم');if(!r.place)miss.push('المكان');if(!r.items.length)miss.push('المنتجات');
  var amb=r.items.filter(function(x){return !x.p}).length;
  var h='';
  if(st.cust)h+='<div class="okbar">👤 عميل سابق: '+esc(st.cust.name||st.cust.phone)+' — عدد طلباته: '+((st.cust.orders||[]).length||'—')+'</div>';
  if(r.left.length)h+='<div class="left">🟡 كلمات لم تُفهم: '+r.left.map(function(x){return '<b>'+esc(x)+'</b>'}).join(' ')+'<small>إن كانت منتجًا فأضفه بزر «＋ إضافة منتج» واختره، وسيتعلّمه التطبيق للمرات القادمة.</small></div>';
  if(miss.length)h+='<div class="left">⚠️ لم أجد في الرسالة: '+miss.join('، ')+'. أكملها يدويًا.</div>';
  else if(amb)h+='<div class="left">⚠️ '+(amb===1?'منتج واحد يحتاج':'عدد '+amb+' منتجات تحتاج')+' اختيارك من القائمة.</div>';
  else if(!r.left.length)h+='<div class="okbar">✅ فهمتُ الرسالة كاملة.</div>';
  return h;
}
function learnImport(box,st,o){
  try{
    var fin={place:o.place,items:[]};
    box.querySelectorAll('.it').forEach(function(row){var nm=row.querySelector('[data-k=name]').value.trim();if(!nm)return;
      fin.items.push({p:nm,q:Math.max(1,Math.round(num(row.querySelector('[data-k=qty]').value))||1),raw:row.dataset.raw||'',added:!row.dataset.parsed})});
    var out=window.EMDParse.learn(st.r,fin);
    if(out&&out.length)setTimeout(function(){toast('🧠 تعلّمتُ: '+out.join('، '))},2600);
  }catch(e){}
}
