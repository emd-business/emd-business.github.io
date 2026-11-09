/* ---------- 4) العرض ---------- */
var state={view:'home',filter:'all',q:'',pinnedOnly:false,limit:30,ptab:'prep',sel:{}};
var HAY=new WeakMap();
function hay(o){var h=HAY.get(o);if(h==null){h=normTxt([oid(o),onum(o),cname(o),cphone(o),cplace(o),o.company||'',o.note||'',items(o).map(iname).join(' ')].join(' '));HAY.set(o,h)}return h}

function render(){
  var v=$('view');
  document.querySelectorAll('nav#bar [data-go]').forEach(function(b){b.classList.toggle('on',b.dataset.go===state.view)});
  renderBar();nfBadge();stTick();
  if(state.view==='home'){v.innerHTML=homeHtml();if(window.EMDCoV430&&mode()==='company')try{EMDCoV430._chip()}catch(e){}}
  else if(state.view==='products'){v.innerHTML=productsHtml();varPass()}
  else if(state.view==='stock')v.innerHTML=stockHtml();
  else if(state.view==='customers')v.innerHTML=customersHtml();
  else if(state.view==='prep')v.innerHTML=prepHtml();
  else if(state.view==='perf')v.innerHTML=perfHtml();
  else v.innerHTML=ordersHtml();
  if(state.view==='orders'){var s=$('q');if(s&&document.activeElement!==s&&state.focusQ){s.focus();state.focusQ=false}}
}

function homeHtml(){
  var ix=index(),now=new Date(),h=now.getHours();
  var greet=h<12?'صباح الخير ☀️':'مساء الخير 🌙';
  var hijri='';try{hijri=new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura',{day:'numeric',month:'long',year:'numeric'}).format(now)}catch(e){}
  var greg=new Intl.DateTimeFormat('ar',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(now);
  var hh=h%12||12;
  var cards=['new','waiting','ready','packing','shipped','received'].map(function(k){
    return '<button class="stat" data-filter="'+k+'"><b>'+ix.counts[k]+'</b><span><i style="background:'+ST[k].c+'">'+ST[k].i+'</i>'+(k==='new'?'طلبات جديدة':k==='waiting'?'بانتظار المنتجات':k==='ready'?'جاهزة للتجهيز':ST[k].l)+'</span></button>';
  }).join('');
  return '<div class="hero"><div><h2>'+greet+'</h2><div class="clock">'+pad(hh)+':'+pad(now.getMinutes())+' <span>'+(h<12?'ص':'م')+'</span></div><div class="date">'+esc(greg)+(hijri?' · '+esc(hijri):'')+'</div></div>'+heroImg()+'</div>'+modesHome()+
    '<div class="money" data-act="finance" role="button"><div><small>مبيعات اليوم</small><b>'+money(ix.sales)+'</b></div><div><small>غير محصّل</small><b class="gold">'+money(ix.unpaid)+'</b></div><div><small>ربح الشهر</small><b>'+money(ix.profit)+'</b></div><div class="cap">💰 اضغط لفتح المالية · '+CUR+'</div></div>'+
    storeHomeCard()+(shopMode()?cashCards():'<div class="stats">'+cards+'</div>')+
    (shopMode()?'':'<div class="quick"><button class="btn dark" data-act="importMsg">🤖 إدخال من رسالة</button><button class="btn" data-act="newOrder">✍️ كتابة طلب يدوي</button>'+(shopMode()?'':'<button class="btn" data-act="prepNow">🧑‍💼 ماذا أجهز الآن؟</button>')+'<button class="btn" data-act="closing">📊 تقفيلة اليوم</button></div>')+
    (state.dayOpen?'<button class="fold" data-act="dayFold">▲ إخفاء تفاصيل اليوم</button>'+dayHtml():'<button class="fold" data-act="dayFold">▼ تفاصيل اليوم والتوصيات <small>(لوحة اليوم، ما يحتاج انتباهك)</small></button>');
}

function filtered(){
  var q=normTxt(state.q),pins=pinned(),f=state.filter,out=[];
  var qs=q?q.split(' '):null;
  for(var i=0;i<db.orders.length;i++){
    var o=db.orders[i],s=status(o);
    if(f==='all'){if(s==='cancelled'&&!q)continue}else if(f==='store'){if(o.source!=='store'&&!o.storeOrderId)continue}else if(f==='prep'){if(s!=='ready'&&s!=='packing')continue}else if(s!==f)continue;
    if(state.pinnedOnly&&!pins[oid(o)])continue;
    if(qs){var h=hay(o),ok=true;for(var j=0;j<qs.length;j++)if(h.indexOf(qs[j])<0){ok=false;break}if(!ok)continue}
    out.push(o);
  }
  out.sort(function(a,b){var pa=pins[oid(a)]?1:0,pb=pins[oid(b)]?1:0;if(pa!==pb)return pb-pa;var ta=odate(a),tb=odate(b);return (tb?tb.getTime():0)-(ta?ta.getTime():0)});
  return out;
}
function cardHtml(o,pins){
  var s=status(o),id=oid(o),its=items(o),n=0;its.forEach(function(x){n+=qty(x)});
  var nx=NEXT[s],ps=payState(o),pin=pins[id];
  var tags='<span class="tag">📦 '+n+' قطعة</span>'+its.slice(0,4).map(function(x){return '<span class="tag">'+esc(iname(x))+' × '+qty(x)+'</span>'}).join('')+(its.length>4?'<span class="tag">+'+(its.length-4)+'</span>':'');
  tags+=trPills(o);
  if(ps!=='paid'&&s!=='cancelled')tags+='<span class="tag warn">'+PAYL[ps]+' · '+money(remaining(o))+'</span>';
  return '<div class="card" style="--sc:'+ST[s].c+'" data-id="'+esc(id)+'">'+
    '<div class="ch"><h3>'+(pin?'<span class="pin">📌</span> ':'')+esc(onum(o))+' — '+esc(cname(o)||'بدون اسم')+'</h3><span class="pill">'+ST[s].i+' '+ST[s].l+'</span></div>'+
    '<div class="meta">📱 '+esc(cphone(o)||'—')+(cplace(o)?' · 📍 '+esc(cplace(o)):'')+'</div>'+
    '<div class="tags">'+tags+'</div>'+
    (nx?'<div class="next">'+ST[nx[0]].i+' الخطوة التالية: '+nx[1]+'</div>':'')+
    '<div class="acts">'+(nx?'<button class="btn dark" data-act="advance">⚡ '+ST[nx[0]].i+' '+ST[nx[0]].l+'</button>':'')+
    '<button class="btn" data-act="open">📋 التفاصيل</button><button class="btn" data-act="wa">💬 واتساب</button><button class="btn more" data-act="cardMore" aria-label="خيارات أكثر">⋯</button></div></div>';
}
function ordersHtml(){
  var ix=index(),list=filtered(),pins=pinned();
  var chips=[['all','📋 الكل',ix.counts.all]].concat(FLOW.map(function(k){return [k,ST[k].i+' '+ST[k].s,ix.counts[k]]}));
  if(ix.counts.cancelled)chips.push(['cancelled','❌ ملغاة',ix.counts.cancelled]);
  var shown=list.slice(0,state.limit);
  return '<h2 class="ptitle">📋 الطلبات</h2><p class="psub">كل الطلبات المحفوظة وحالاتها.</p>'+
    '<div class="chips">'+chips.map(function(c){return '<button class="chip'+(state.filter===c[0]?' on':'')+'" data-filter="'+c[0]+'">'+c[1]+' '+c[2]+'</button>'}).join('')+
    (storePublished()||ix.store?'<button class="chip'+(state.filter==='store'?' on':'')+'" data-filter="store">🛍️ المتجر '+(ix.store||0)+'</button>':'')+(state.filter==='prep'?'<button class="chip on" data-filter="prep">🧑‍💼 للتجهيز الآن '+list.length+'</button>':'')+'</div>'+
    '<div class="search">🔎<input id="q" type="search" placeholder="ابحث بالاسم أو الرقم أو المكان أو المنتج" value="'+esc(state.q)+'" autocomplete="off"></div>'+
    '<div class="tools"><button class="btn sm" data-act="quickLink">⚡ رابط طلب سريع</button><button class="btn sm'+(state.pinnedOnly?' dark':'')+'" data-act="pinnedOnly">📌 المثبتة فقط'+(ix.counts.pinned?' ('+ix.counts.pinned+')':'')+'</button>'+(state.q?'<button class="btn sm" data-act="clearQ">مسح البحث</button>':'')+'</div>'+
    '<div id="list">'+(shown.length?shown.map(function(o){return cardHtml(o,pins)}).join(''):'<div class="empty">لا توجد طلبات مطابقة.</div>')+'</div>'+
    (list.length>shown.length?'<button class="btn moreBtn" data-act="showMore">عرض المزيد ('+(list.length-shown.length)+')</button>':'');
}
function refreshList(){ // تحديث القائمة فقط دون إعادة بناء الصفحة كلها
  if(state.view!=='orders')return render();
  var l=$('list');if(!l)return render();
  var html=ordersHtml(),tmp=document.createElement('div');tmp.innerHTML=html;
  var nl=tmp.querySelector('#list');l.innerHTML=nl.innerHTML;
  var oldMore=document.querySelector('.moreBtn'),newMore=tmp.querySelector('.moreBtn');
  if(oldMore)oldMore.remove();if(newMore)l.after(newMore);
  var oc=document.querySelector('.chips'),nc=tmp.querySelector('.chips');if(oc&&nc)oc.innerHTML=nc.innerHTML;
  var ot=document.querySelector('.tools'),nt=tmp.querySelector('.tools');if(ot&&nt)ot.innerHTML=nt.innerHTML;
}

/* صورة الرئيسية بجانب التحية (مثل V90): صورة من اختيارك، أو شعار المتجر، أو بدون — حسب «المظهر» في التطبيق الحالي */
var HOMEIMG_KEY=CLOUD_SANDBOX?'emd_rb_v90_homeimg':'emd_v90_homeimg';
function heroSrc(){var m='custom';try{m=(JSON.parse(POS_LS.getItem('emd_v89_look')||'{}')||{}).homeImg||'custom'}catch(e){}
  if(m==='none')return null;if(m==='logo')return POS_LS.getItem('emd_v89_logo')||'';var v=lsGet(HOMEIMG_KEY);return v!==null?v:(lsGet('emd_v90_homeimg')||'')}
function heroImg(){var s=heroSrc();if(s===null)return '';
  return s&&/^(data:image\/|https:\/\/)/.test(s)?'<button class="himg" data-act="homeImg" aria-label="صورة الرئيسية"><img src="'+esc(s)+'" alt=""></button>':'<button class="himg empty" data-act="homeImg"><span>🖼️</span><small>أضف صورة</small></button>'}
function homeImgSheet(){var has=!!heroSrc();
  if(!has){$('homeImgIn').click();return}
  openSheet('<div class="sh"><h3>🖼️ صورة الرئيسية</h3><button class="x" data-act="close">إغلاق ✕</button></div><div class="list"><button data-act="homeImgPick">🔄 تغيير الصورة</button><button data-act="homeImgDel" class="red">🗑️ حذف الصورة</button></div>')}
function homeImgPicked(f){if(!f)return;shrink(f,900,function(url){if(!url){toast('تعذّرت قراءة الصورة');return}lsSet(HOMEIMG_KEY,url);render();toast('✅ تم حفظ صورة الرئيسية')})}
