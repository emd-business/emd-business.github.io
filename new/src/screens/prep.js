/* ماذا أجهز الآن؟ — شاشة واحدة بثلاثة تبويبات: التجهيز، الشحن، الاستلام
   (تجمع مركز التجهيز، قائمة التجهيز، كشف التجهيز، التجهيز الجماعي، كشف تسليم الشركات، تأكيد الاستلام) */
var LATE_DAYS=3;
function byOld(a,b){var x=odate(a),y=odate(b);return (x?x.getTime():0)-(y?y.getTime():0)}
function prepLists(){
  var r={ready:[],packing:[],toShip:[],shipped:[],shippedToday:[],waiting:0,fresh:0},today=dkey(new Date());
  db.orders.forEach(function(o){var s=status(o);
    if(s==='ready')r.ready.push(o);else if(s==='packing'){r.packing.push(o);if(o.packed===true)r.toShip.push(o)}
    else if(s==='shipped'){r.shipped.push(o);var t=new Date(o.shippedAt||0);if(!isNaN(t)&&dkey(t)===today)r.shippedToday.push(o)}
    else if(s==='waiting')r.waiting++;else if(s==='new')r.fresh++});
  r.ready.sort(byOld);r.packing.sort(byOld);r.toShip.sort(byOld);
  r.shipped.sort(function(a,b){return new Date(a.shippedAt||0)-new Date(b.shippedAt||0)});
  return r;
}
function pickTotals(list){ // قائمة السحب: مجموع كل منتج في الطلبات المختارة
  var m={},order=[];list.forEach(function(o){if(o.packed===true)return;items(o).forEach(function(x){var k=normTxt(iname(x));if(!m[k]){m[k]={name:iname(x),q:0,n:0};order.push(k)}m[k].q+=qty(x);m[k].n++})});
  return order.map(function(k){return m[k]}).sort(function(a,b){return b.q-a.q});
}
function selIds(){return Object.keys(state.sel||{})}
function prepCard(o,mode){
  var id=oid(o),its=items(o),n=0;its.forEach(function(x){n+=qty(x)});var sel=!!(state.sel||{})[id];
  var pl=packList(o),done=pl.filter(function(x){return x.done}).length;
  var extra='';
  if(mode==='packing')extra='<div class="prog"><span style="width:'+(pl.length?Math.round(done/pl.length*100):0)+'%"></span></div><small class="mute">'+(o.packed===true?'✅ اكتمل التجهيز':'التقدم: '+done+' / '+pl.length)+'</small>';
  if(mode==='shipped'){var dd=daysSince(o.shippedAt);extra='<div class="meta">🚚 '+esc(o.company||'—')+(o.tracking?' · '+esc(o.tracking):'')+(dd!=null?' · <b class="'+(dd>=LATE_DAYS?'late':'')+'">منذ '+(dd===0?'اليوم':dd===1?'يوم':dd===2?'يومين':dd<=10?dd+' أيام':dd+' يومًا')+'</b>':'')+'</div>'}
  var act=mode==='ready'?'<button class="btn dark" data-act="packOpen" data-id="'+esc(id)+'">🛠️ ابدأ التجهيز</button>'
    :mode==='packing'?(o.packed===true?'<button class="btn dark" data-act="shipOpen" data-id="'+esc(id)+'">🚚 شحن</button>':'<button class="btn dark" data-act="packOpen" data-id="'+esc(id)+'">📋 أكمل التجهيز</button>')
    :'<button class="btn dark" data-act="recvOne" data-id="'+esc(id)+'">📬 تم الاستلام</button>';
  return '<div class="card pc'+(sel?' sel':'')+'" style="--sc:'+ST[status(o)].c+'" data-id="'+esc(id)+'">'+
    '<div class="ch"><label class="chk"><input type="checkbox" data-act="selOne" data-id="'+esc(id)+'"'+(sel?' checked':'')+'><b>'+esc(onum(o))+' — '+esc(cname(o)||'بدون اسم')+'</b></label><span class="pill">📦 '+n+'</span></div>'+
    '<div class="tags">'+its.map(function(x){return '<span class="tag">'+esc(iname(x))+' × '+qty(x)+'</span>'}).join('')+'</div>'+
    '<div class="meta">📱 '+esc(cphone(o)||'—')+(cplace(o)?' · 📍 '+esc(cplace(o)):'')+(mode!=='shipped'&&o.company?' · 🚚 '+esc(o.company):'')+'</div>'+extra+
    '<div class="acts">'+act+(mode!=='ready'?'<button class="btn" data-act="label" data-id="'+esc(id)+'">🏷️</button>':'')+'<button class="btn" data-act="open" data-id="'+esc(id)+'">📋 التفاصيل</button><button class="btn" data-act="wa" data-id="'+esc(id)+'">💬</button></div></div>';
}
function prepHtml(){
  var L=prepLists(),tab=state.ptab||'prep',sel=selIds();
  var tabs=[['prep','🛠️ التجهيز',L.ready.length+L.packing.length-L.toShip.length],['ship','🚚 الشحن',L.toShip.length],['recv','📬 الاستلام',L.shipped.length]];
  var h='<h2 class="ptitle">🧑‍💼 ماذا أجهز الآن؟</h2><div class="seg ptabs">'+tabs.map(function(t){return '<button data-act="ptab" data-t="'+t[0]+'" class="'+(tab===t[0]?'on':'')+'">'+t[1]+' <small>'+t[2]+'</small></button>'}).join('')+'</div>';
  if(tab==='prep'){
    var list=L.ready.concat(L.packing.filter(function(o){return o.packed!==true}));
    h+='<div class="kpis k4"><div class="kpi"><b>'+L.ready.length+'</b><span>🟢 جاهز للتجهيز</span></div><div class="kpi"><b>'+(L.packing.length-L.toShip.length)+'</b><span>🛠️ قيد التجهيز</span></div><div class="kpi"><b>'+L.waiting+'</b><span>⏳ ينتظر المنتج</span></div><div class="kpi"><b>'+L.fresh+'</b><span>🆕 جديد يحتاج اعتمادًا</span></div></div>';
    var pk=pickTotals(list);
    if(pk.length)h+='<details class="pick"><summary>📋 قائمة السحب (المنتجات: '+pk.length+'، القطع: '+pk.reduce(function(s,x){return s+x.q},0)+')</summary><table><tr><th>المنتج</th><th>المطلوب</th><th>المخزون</th></tr>'+pk.map(function(x){var p=product(x.name);return '<tr><td>'+esc(x.name)+' <small class="mute">('+nOrders(x.n)+')</small></td><td><b>'+x.q+'</b></td><td>'+(p?num(p.stock):'—')+'</td></tr>'}).join('')+'</table></details>';
    h+=list.length?list.map(function(o){return prepCard(o,status(o))}).join(''):'<div class="empty">🎉 لا توجد طلبات تنتظر التجهيز الآن.</div>';
  }else if(tab==='ship'){
    h+=L.toShip.length?'<h3 class="sub">جاهزة للتسليم لشركة التوصيل</h3>'+L.toShip.map(function(o){return prepCard(o,'packing')}).join(''):'<div class="empty">لا توجد طلبات مجهّزة تنتظر الشحن.</div>';
    var byC={};L.shippedToday.forEach(function(o){var c=o.company||'غير محددة';(byC[c]=byC[c]||[]).push(o)});
    var cs=Object.keys(byC);
    if(cs.length)h+='<h3 class="sub">شُحنت اليوم</h3>'+cs.map(function(c){return '<div class="card" style="--sc:var(--s-shipped)"><div class="ch"><b>🚚 '+esc(c)+'</b><span class="pill">'+nOrders(byC[c].length)+'</span></div><div class="meta">'+byC[c].map(function(o){return esc(onum(o))}).join('، ')+'</div><div class="acts"><button class="btn" data-act="printHand" data-c="'+esc(c)+'">🖨️ كشف التسليم</button></div></div>'}).join('');
  }else{
    var late=L.shipped.filter(function(o){var d=daysSince(o.shippedAt);return d!=null&&d>=LATE_DAYS}).length;
    if(late)h+='<div class="left">⏰ '+(late===1?'طلب واحد مضى':nOrders(late)+' مضى')+' على شحنها '+LATE_DAYS+' أيام أو أكثر دون تأكيد استلام.</div>';
    h+=L.shipped.length?L.shipped.map(function(o){return prepCard(o,'shipped')}).join(''):'<div class="empty">لا توجد طلبات مشحونة تنتظر تأكيد الاستلام.</div>';
  }
  if(sel.length){
    var b=tab==='prep'?'<button class="btn" data-act="bulkStart">🛠️ بدء التجهيز</button><button class="btn" data-act="bulkFinish">✅ إنهاء التجهيز</button><button class="btn" data-act="printPrep">🖨️ كشف التجهيز</button><button class="btn" data-act="label">🏷️ الملصقات</button>'
      :tab==='ship'?'<button class="btn dark" data-act="shipOpen">🚚 شحن المحدد</button><button class="btn" data-act="label">🏷️ الملصقات</button>'
      :'<button class="btn dark" data-act="bulkRecv">📬 تأكيد الاستلام</button>';
    h+='<div class="selbar"><b>المحدد: '+sel.length+'</b>'+b+'<button class="btn" data-act="selNone">إلغاء التحديد</button></div>';
  }else{
    var all=tab==='prep'?'selAllPrep':tab==='ship'?'selAllShip':'selAllRecv';
    h+='<div class="tools center"><button class="btn sm" data-act="'+all+'">☑️ تحديد الكل</button>'+(tab==='prep'?'<button class="btn sm" data-act="printPrepAll">🖨️ طباعة كشف التجهيز</button>':'')+'</div>';
  }
  return h;
}
function refreshPrep(){if(state.view==='prep')$('view').innerHTML=prepHtml()}
/* قائمة تجهيز الطلب: تحديد كل صنف بعد وضعه */
function packSheet(id){
  var o=findOrder(id);if(!o)return;
  if(status(o)==='ready')setStatus(o,'packing',true);
  var d=openSheet('<div class="sh"><div><h3>🛠️ تجهيز الطلب</h3><small>'+esc(onum(o))+' · '+esc(cname(o)||'بدون اسم')+'</small></div><button class="x" data-act="close">إغلاق ✕</button></div><div id="packBody"></div>');
  function paint(){var pl=packList(o),done=pl.filter(function(x){return x.done}).length,ok=done===pl.length&&pl.length>0;
    d.querySelector('#packBody').innerHTML='<p class="note">حدّد كل صنف بعد وضعه داخل الطلب.</p><div class="prog big"><span style="width:'+(pl.length?Math.round(done/pl.length*100):0)+'%"></span></div><b>التقدم: '+done+' / '+pl.length+'</b>'+
      '<div class="packl">'+pl.map(function(x){return '<label class="pk'+(x.done?' done':'')+'"><input type="checkbox" data-pi="'+x.i+'"'+(x.done?' checked':'')+'><span><b>'+esc(x.name)+'</b><small>الكمية: '+x.q+'</small></span></label>'}).join('')+'</div>'+
      '<div class="foot"><button class="btn green" data-pk="ship"'+(ok?'':' disabled')+'>🚚 تم التجهيز — شحن الآن</button><button class="btn" data-pk="done"'+(ok?'':' disabled')+'>✅ تم التجهيز</button></div>'+
      '<button class="btn sm" data-pk="all" style="margin-top:6px">☑️ تحديد الكل</button>'}
  d.addEventListener('change',function(e){var i=e.target.dataset.pi;if(i==null)return;setPackItem(o,+i,e.target.checked);paint()});
  d.addEventListener('click',function(e){var b=e.target.closest('[data-pk]');if(!b||b.disabled)return;var k=b.dataset.pk;
    if(k==='all'){packList(o).forEach(function(x){setPackItem(o,x.i,true)});paint();return}
    finishPacking(o);closeSheet(d);toast('✅ اكتمل تجهيز '+onum(o));
    if(k==='ship')shipSheet([oid(o)]);else afterFlow()});
  paint();
}
/* الشحن: شركة التوصيل مطلوبة، وطريقة التوصيل ورقم التتبع اختياريان */
function shipSheet(ids){
  var os=ids.map(findOrder).filter(Boolean);if(!os.length)return;
  var notPacked=os.filter(function(o){return o.packed!==true});
  if(notPacked.length){if(os.length===1){packSheet(oid(os[0]));return}toast('لم يكتمل تجهيز '+nOrders(notPacked.length)+'، أكمله أولًا');return}
  var o1=os[0],comp=companies(),one=os.length===1;
  var d=openSheet('<div class="sh"><div><h3>🚚 شحن '+(one?'الطلب':nOrders(os.length))+'</h3><small>'+esc(one?onum(o1)+' · '+(cname(o1)||cphone(o1)):os.map(onum).join('، '))+'</small></div><button class="x" data-act="close">إغلاق ✕</button></div>'+
    '<form id="shf" novalidate><label class="f" for="sCo">🚚 شركة التوصيل <em>*</em></label><input class="in" id="sCo" list="sCoL" value="'+esc(o1.company||'')+'" placeholder="مثال: أسياد"><datalist id="sCoL">'+comp.map(function(c){return '<option value="'+esc(c)+'">'}).join('')+'</datalist>'+
    (comp.length?'<div class="chips">'+comp.slice(0,6).map(function(c){return '<button type="button" class="chip" data-co="'+esc(c)+'">'+esc(c)+'</button>'}).join('')+'</div>':'')+
    '<label class="f" for="sMe">📦 طريقة التوصيل</label><select class="in" id="sMe">'+['مندوب','مكتب','توصيل للمنزل','استلام من الفرع'].map(function(m){return '<option'+((o1.method||o1.deliveryMethod||'مندوب')===m?' selected':'')+'>'+m+'</option>'}).join('')+'</select>'+
    (one?'<label class="f" for="sTr">🔢 رقم التتبع <small class="mute">(اختياري)</small></label><input class="in" id="sTr" value="'+esc(o1.tracking||'')+'">':'')+
    '<div class="foot"><button class="btn green" type="submit">🚚 تأكيد الشحن</button><button class="btn" type="button" data-act="close">إلغاء</button></div></form>');
  d.addEventListener('click',function(e){var c=e.target.closest('[data-co]');if(c)$('sCo').value=c.dataset.co});
  d.querySelector('#shf').addEventListener('submit',function(e){e.preventDefault();
    var info={company:$('sCo').value,method:$('sMe').value,tracking:one?$('sTr').value:null},ok=0,err='';
    if(!String(info.company).trim()){toast('اكتب شركة التوصيل');return}
    os.forEach(function(o){var r=shipOrder(o,info);if(r)err=r;else ok++});
    closeSheet(d);state.sel={};
    toast(ok?'🚚 تم شحن '+(ok===1?onum(os[0]):nOrders(ok))+(err?' · '+err:''):err);
    afterFlow();
    if(ok===1&&one&&cphone(os[0]))openSheet('<div class="sh"><h3>🚚 تم شحن '+esc(onum(os[0]))+'</h3><button class="x" data-act="close">إغلاق ✕</button></div><p class="note">هل تريد إبلاغ العميل بأن طلبه شُحن؟</p><div class="foot"><button class="btn dark" data-act="waSend" data-id="'+esc(oid(os[0]))+'">💬 إرسال إشعار الشحن</button><button class="btn" data-act="close">لاحقًا</button></div>');
  });
}
function afterFlow(){if(state.view==='prep')refreshPrep();else if(state.view==='orders')refreshList();else render();nfBadge()}
/* الخطوة التالية للطلب من أي مكان (البطاقة، التفاصيل، النقل) */
function advanceOrder(o){
  var s=status(o);
  if(s==='new'||s==='waiting'){if(s==='waiting'&&shortage(o).length){toast('⏳ المنتجات غير متوفرة بعد');return}setStatus(o,'ready');afterFlow();return}
  if(s==='ready'){packSheet(oid(o));return}
  if(s==='packing'){if(o.packed===true)shipSheet([oid(o)]);else packSheet(oid(o));return}
  if(s==='shipped'){if(confirm('تأكيد استلام العميل للطلب '+onum(o)+'؟')){receiveOrder(o);toast('📬 تم تأكيد الاستلام');afterFlow()}}
}
function moveOrder(o,to){
  var s=status(o);if(s===to)return;
  if(to==='shipped'){advanceToShip(o);return}
  if(to==='received'){if(s!=='shipped'){toast('يُؤكَّد الاستلام بعد شحن الطلب');return}receiveOrder(o);afterFlow();return}
  if(to==='packing'&&s!=='packing'){setStatus(o,'packing');packSheet(oid(o));return}
  if(setStatus(o,to))afterFlow();
}
function advanceToShip(o){var s=status(o);if(s==='shipped'||s==='received')return;if(s!=='packing'&&s!=='ready'){if(!confirm('هذا الطلب لم يُعتمد بعد. هل تريد تجهيزه وشحنه؟'))return}packSheet(oid(o))}
/* الطباعة */
function printPrep(ids){
  var os=(ids&&ids.length?ids.map(findOrder).filter(Boolean):prepLists().ready.concat(prepLists().packing));
  if(!os.length){toast('لا توجد طلبات للطباعة');return}
  var pk=pickTotals(os.map(function(o){return o.packed===true?Object.assign({},o,{packed:false}):o}));
  printDoc('كشف التجهيز',printHead('📋 كشف التجهيز','عدد الطلبات: '+os.length)+
    '<h3>مجموع المنتجات</h3><table><tr><th>#</th><th>المنتج</th><th>الكمية</th><th>✓</th></tr>'+pk.map(function(x,i){return '<tr><td>'+(i+1)+'</td><td>'+esc(x.name)+'</td><td><b>'+x.q+'</b></td><td></td></tr>'}).join('')+'</table>'+
    '<h3>الطلبات</h3><table><tr><th>الطلب</th><th>العميل</th><th>المكان</th><th>المنتجات</th><th>✓</th></tr>'+os.map(function(o){return '<tr><td>'+esc(onum(o))+'</td><td>'+esc(cname(o)||'—')+'<br><small>'+esc(cphone(o))+'</small></td><td>'+esc(cplace(o)||'—')+'</td><td>'+items(o).map(function(x){return esc(iname(x))+' × '+qty(x)}).join('<br>')+'</td><td></td></tr>'}).join('')+'</table>');
}
function printHandover(company){
  var os=prepLists().shippedToday.filter(function(o){return (o.company||'غير محددة')===company});if(!os.length)return;
  var cod=0;os.forEach(function(o){cod+=remaining(o)});
  printDoc('كشف التسليم',printHead('🚚 كشف تسليم: '+company,'عدد الطلبات: '+os.length+' · مبالغ التحصيل: '+money(cod)+' '+CUR)+
    '<table><tr><th>#</th><th>الطلب</th><th>العميل</th><th>الهاتف</th><th>المكان</th><th>القطع</th><th>التحصيل</th></tr>'+os.map(function(o,i){var n=0;items(o).forEach(function(x){n+=qty(x)});return '<tr><td>'+(i+1)+'</td><td>'+esc(onum(o))+'</td><td>'+esc(cname(o)||'—')+'</td><td>'+esc(cphone(o))+'</td><td>'+esc(cplace(o)||'—')+'</td><td>'+n+'</td><td>'+(remaining(o)?money(remaining(o)):'مدفوع')+'</td></tr>'}).join('')+'</table>'+
    '<div class="sign"><div>توقيع المستلم من '+esc(company)+'</div><div>توقيع المتجر</div></div>');
}
