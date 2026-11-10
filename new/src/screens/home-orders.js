/* ---------- 4) العرض ---------- */
var state={view:'home',filter:'all',q:'',pinnedOnly:false,limit:30,ptab:'prep',sel:{}};
var HAY=new WeakMap();
function hay(o){var h=HAY.get(o);if(h==null){h=normTxt([oid(o),onum(o),cname(o),cphone(o),cplace(o),o.company||'',o.note||'',items(o).map(iname).join(' ')].join(' '));HAY.set(o,h)}return h}

function render(){
  var v=$('view');
  document.querySelectorAll('nav#bar [data-go]').forEach(function(b){b.classList.toggle('on',b.dataset.go===state.view)});
  renderBar();nfBadge();stTick();headPaint();if(window.__lookSweep)setTimeout(lookSweep);
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
  var lk=lookGet(),own=String(lk.owner||'').trim(),am=h>=4&&h<12,greet=(am?'صباح الخير':'مساء الخير')+(own?' يا '+own:'')+(am?' ☀️':' 🌙');
  var hijri='';try{hijri=new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura-nu-latn',{day:'numeric',month:'long',year:'numeric'}).format(now).replace(/\s*هـ\s*$/,'')+' هـ'}catch(e){}
  var greg=new Intl.DateTimeFormat('ar-OM-u-nu-latn',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(now);
  var hh=h%12||12;
  var hid=hcHidden(),pri=hcPri();
  var cards=hcOrder().filter(function(k){return !hid[k]}).map(function(k){
    return '<button class="stat'+(pri.indexOf(k)>-1&&ix.counts[k]>0?' emd339-priority':'')+'" data-filter="'+k+'"><b>'+ix.counts[k]+'</b><span>'+statIcon(k)+''+(k==='new'?'طلبات جديدة':k==='waiting'?'بانتظار المنتجات':k==='ready'?'جاهزة للتجهيز':ST[k].l)+'</span></button>';
  }).join('');
  var P={hero:'<div class="hero"><div><h2>'+esc(greet)+'</h2>'+(lk.clock!==false?'<div class="clock"><bdi>'+pad(hh)+':'+pad(now.getMinutes())+'<span class="s">:'+pad(now.getSeconds())+'</span></bdi> <span>'+(h<12?'ص':'م')+'</span></div>':'')+'<div class="date">'+esc(greg)+(hijri&&lk.hijri!==false?' · '+esc(hijri):'')+'</div></div>'+heroImg(lk)+'</div>'+modesHome(),
    strip:'<div class="money" data-act="finance" role="button"><div><small>مبيعات اليوم</small><b>'+money(ix.sales)+'</b></div><div><small>غير محصّل</small><b class="gold">'+money(ix.unpaid)+'</b></div><div><small>ربح الشهر</small><b>'+money(ix.profit)+'</b></div><div class="cap">💰 اضغط لفتح المالية · '+CUR+'</div></div>',
    grid:storeHomeCard()+(shopMode()?cashCards():'<div class="stats">'+cards+'</div>'),
    actions:(shopMode()?'':'<div class="quick"><button class="btn dark" data-act="importMsg">🤖 إدخال من رسالة</button><button class="btn" data-act="newOrder">✍️ كتابة طلب يدوي</button>'+(shopMode()?'':'<button class="btn" data-act="prepNow">🧑‍💼 ماذا أجهز الآن؟</button>')+'<button class="btn" data-act="closing">📊 تقفيلة اليوم</button></div>'),
    daily:(state.dayOpen?'<button class="fold" data-act="dayFold">▲ إخفاء تفاصيل اليوم</button>'+dayHtml():'<button class="fold" data-act="dayFold">▼ تفاصيل اليوم والتوصيات <small>(لوحة اليوم، ما يحتاج انتباهك)</small></button>')};
  return hcSections().map(function(k){return P[k]||''}).join('');
}

function filtered(){
  var q=normTxt(state.q),pins=pinned(),f=state.filter,out=[];
  var qs=q?q.split(' '):null;
  for(var i=0;i<db.orders.length;i++){
    var o=db.orders[i],s=status(o);
    if(f==='all'){if(s==='cancelled'&&!q)continue}else if(f==='store'){if(o.source!=='store'&&!o.storeOrderId)continue}else if(f==='prep'){if(s!=='ready'&&s!=='packing')continue}else if(f==='todo'){if(!NEXT[s])continue}else if(s!==f)continue;
    if(state.pinnedOnly&&!pins[oid(o)])continue;
    if(qs){var h=hay(o),ok=true;for(var j=0;j<qs.length;j++)if(h.indexOf(qs[j])<0){ok=false;break}if(!ok)continue}
    out.push(o);
  }
  out.sort(function(a,b){var pa=pins[oid(a)]?1:0,pb=pins[oid(b)]?1:0;if(pa!==pb)return pb-pa;var ta=odate(a),tb=odate(b);return (tb?tb.getTime():0)-(ta?ta.getTime():0)});
  return out;
}
var QL={card:true};
/* ---------- صفحة الطلبات بتصميم «الوارد» (اختيار عماد 2026-11-10): رأس بلون التطبيق، بحث وفلاتر، بطاقة «تحتاج خطوة منك»، صفوف مجمّعة باليوم ---------- */
var FMT_T=null,FMT_D=null;
function ibTime(t){if(!t)return '';if(!FMT_T)FMT_T=new Intl.DateTimeFormat('ar-OM-u-nu-latn',{hour:'numeric',minute:'2-digit'});return FMT_T.format(t)}
function ibDay(t){ // عنوان المجموعة: اليوم / أمس / التاريخ
  if(!t)return 'بدون تاريخ';var k=dkey(t),now=new Date(),y=new Date(now.getTime()-864e5);
  if(!FMT_D)FMT_D=new Intl.DateTimeFormat('ar-OM-u-nu-latn',{weekday:'long',day:'numeric',month:'long'});
  if(k===dkey(now))return 'اليوم · '+FMT_D.format(t);if(k===dkey(y))return 'أمس · '+FMT_D.format(t);return FMT_D.format(t)}
function ibTodo(ix){ // الطلبات التي تنتظر خطوة من التاجر، مع تفصيل الحالات
  var n=0,parts=[];['new','waiting','ready','packing','shipped'].forEach(function(k){var c=ix.counts[k]||0;if(c){n+=c;parts.push(c+' '+ST[k].l)}});return {n:n,txt:parts.join(' · ')}}
function cardHtml(o,pins){
  var s=status(o),id=oid(o),its=items(o),n=0;its.forEach(function(x){n+=qty(x)});
  var nx=NEXT[s],ps=payState(o),pin=pins[id],t=odate(o);
  var line=esc(onum(o))+(cplace(o)?' · 📍 '+esc(cplace(o)):'')+(o.company?' · 🚚 '+esc(o.company):'')+' · '+its.slice(0,3).map(function(x){return esc(iname(x))+' ×'+qty(x)}).join('، ')+(its.length>3?' +'+(its.length-3):'');
  var st='<span class="ib-st">'+ST[s].l+'</span>'+(ps!=='paid'&&s!=='cancelled'?'<span class="ib-st pay">'+PAYL[ps]+'</span>':'');
  return '<div class="card ib" style="--sc:'+ST[s].c+'" data-id="'+esc(id)+'">'+
    '<div class="ib-ic">'+ST[s].i+'</div>'+
    '<div class="ib-bd" data-act="open" role="button" tabindex="0">'+
      '<div class="ib-nm"><span>'+(pin?'<span class="pin">📌</span> ':'')+esc(cname(o)||'بدون اسم')+'</span><small>'+ibTime(t)+'</small></div>'+
      '<div class="ib-p" title="'+esc(cphone(o)||'')+'">'+line+'</div>'+
      (trPills(o)?'<div class="tags">'+trPills(o)+'</div>':'')+
    '</div>'+
    '<div class="ib-f"><span class="ib-stw">'+st+'</span>'+
      '<span class="ib-ac">'+(QL.card?'<button class="ib-ico" data-act="qlabel" title="ملصق شحن سريع" aria-label="ملصق">🏷️</button>':'')+'<button class="ib-ico" data-act="wa" aria-label="واتساب">💬</button><button class="ib-ico" data-act="cardMore" aria-label="خيارات أكثر">⋯</button>'+
      (nx?'<button class="btn dark ib-nx" data-act="advance">'+ST[nx[0]].i+' '+nx[1]+'</button>':'<button class="btn ib-nx" data-act="open">📋 التفاصيل</button>')+'</span></div></div>';
}
function ordersHtml(){
  var ix=index(),list=filtered(),pins=pinned();
  var chips=[['all','الكل',ix.counts.all]].concat(FLOW.map(function(k){return [k,ST[k].i+' '+ST[k].s,ix.counts[k]]}));
  if(ix.counts.cancelled)chips.push(['cancelled','❌ ملغاة',ix.counts.cancelled]);
  if(storePublished()||ix.store)chips.push(['store','🛍️ المتجر',ix.store||0]);
  var shown=list.slice(0,state.limit),todo=ibTodo(ix),done=ix.counts.received||0,tot=Math.max(0,ix.counts.all-(ix.counts.cancelled||0)),pct=tot?Math.round(done*100/tot):0;
  var rows='',last=null;QL=qlOpt();
  shown.forEach(function(o){var d=ibDay(odate(o));if(d!==last){rows+='<div class="ib-day">'+d+'</div>';last=d}rows+=cardHtml(o,pins)});
  return '<div class="ib-top"><div class="ib-r"><div><h2 class="ptitle">📋 الطلبات</h2><div class="ib-sm">'+ix.counts.all+' طلبًا · '+done+' مكتملة</div></div><div class="ib-ring" style="--p:'+pct+'" title="نسبة الطلبات المستلمة"><span>'+pct+'%</span></div></div>'+
    '<div class="search ib-in">🔎<input id="q" type="search" placeholder="ابحث بالاسم أو الرقم أو الموقع أو المنتج أو رقم الطلب" value="'+esc(state.q)+'" autocomplete="off">'+'<button class="ib-x dim" data-act="clearQ" aria-label="مسح البحث" title="مسح البحث">×</button>'+'<button class="ib-x" data-act="archSearch" title="ابحث في الأرشيف" aria-label="الأرشيف">🗄️</button></div>'+
    '<div class="chips ib-fl">'+chips.map(function(c){return '<button class="chip'+(state.filter===c[0]?' on':'')+'" data-filter="'+c[0]+'">'+c[1]+' <b>'+c[2]+'</b></button>'}).join('')+(state.filter==='prep'?'<button class="chip on" data-filter="prep">🧑‍💼 للتجهيز الآن '+list.length+'</button>':'')+(state.filter==='todo'?'<button class="chip on" data-filter="todo">⚡ تحتاج خطوة '+list.length+'</button>':'')+
    '<button class="chip'+(state.pinnedOnly?' on':'')+'" data-act="pinnedOnly">📌 المثبتة'+(ix.counts.pinned?' <b>'+ix.counts.pinned+'</b>':'')+'</button></div></div>'+
    (todo.n?'<div class="ib-att"><div class="n">'+todo.n+'</div><div><b>'+(todo.n===1?'طلب واحد يحتاج خطوة منك':todo.n===2?'طلبان يحتاجان خطوة منك':'طلبات تحتاج خطوة منك')+'</b><small>'+todo.txt+'</small></div><button class="btn dark" data-filter="'+(state.filter==='todo'?'all':'todo')+'">'+(state.filter==='todo'?'الكل':'ابدأ ▸')+'</button></div>':'<div class="ib-att ok"><div class="n">✅</div><div><b>لا توجد طلبات تنتظر خطوة منك</b><small>كل الطلبات مكتملة.</small></div></div>')+
    '<div class="tools"></div><div id="list">'+(shown.length?rows:'<div class="empty">لا توجد طلبات مطابقة.</div>')+'</div>'+
    (list.length>shown.length?'<button class="btn moreBtn" data-act="showMore">عرض المزيد ('+(list.length-shown.length)+')</button>':'')+
    '<button class="ib-fab" data-act="quickLink">⚡ رابط طلب سريع</button>';
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
  var oa=document.querySelector('.ib-att'),na=tmp.querySelector('.ib-att');if(oa&&na)oa.outerHTML=na.outerHTML;
  var og=document.querySelector('.ib-ring'),ng=tmp.querySelector('.ib-ring');if(og&&ng)og.outerHTML=ng.outerHTML;
}

/* صورة الرئيسية بجانب التحية (مثل V90): صورة من اختيارك، أو شعار المتجر، أو بدون — حسب «المظهر» في التطبيق الحالي */
function heroSrc(){var m=lookGet().homeImg||'custom';if(m==='none')return null;if(m==='logo')return lookLogo();return homeImgGet()}
function heroImg(lk){var s=heroSrc();if(s===null)return '';var fr=(lk&&lk.frame)||'none';
  return s&&/^(data:image\/|https:\/\/)/.test(s)?'<button class="himg'+(fr!=='none'?' f-'+fr:'')+'" data-act="homeImg" aria-label="صورة الرئيسية"><img src="'+esc(s)+'" alt=""></button>':'<button class="himg empty" data-act="homeImg"><span>🖼️</span><small>أضف صورة</small></button>'}
function homeImgSheet(){var has=!!heroSrc();
  if(!has){$('homeImgIn').click();return}
  openSheet('<div class="sh"><h3>🖼️ صورة الرئيسية</h3><button class="x" data-act="close">إغلاق ✕</button></div><div class="list"><button data-act="homeImgPick">🔄 تغيير الصورة</button><button data-act="homeImgDel" class="red">🗑️ حذف الصورة</button></div>')}
function homeImgPicked(f){if(!f)return;shrink(f,900,function(url){if(!url){toast('تعذّرت قراءة الصورة');return}homeImgSet(url);render();toast('✅ تم حفظ صورة الرئيسية')})}
