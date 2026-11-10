function customersHtml(){
  var list=customersIndex().slice(),q=normTxt(state.cq||''),act=0,rep=0,ords=0;
  list.forEach(function(c){ords+=c.orders.length;if(c.orders.length>1)rep++;c.orders.forEach(function(o){if(['new','waiting','ready','packing'].indexOf(status(o))>=0)act++})});
  if(q)list=list.filter(function(c){return normTxt([c.name,c.phone,c.place].join(' ')).indexOf(q)>=0});
  var srt=state.csort||'recent';
  list.sort(srt==='most'?function(a,b){return b.orders.length-a.orders.length}:srt==='name'?function(a,b){return String(a.name).localeCompare(String(b.name),'ar')}:function(a,b){return b.last-a.last});
  var shown=list.slice(0,state.limit);
  if(srt==='phone')list.sort(function(a,b){return String(a.phone).localeCompare(String(b.phone))});
  return '<div class="chead"><div><h2 class="ptitle">👤 العملاء</h2><p class="psub">ملف سريع لكل عميل وسجل طلباته.</p></div><button class="btn dark" data-act="cManage">➕ إدارة العملاء</button></div>'+
    '<div class="kpis"><div class="kpi"><b>'+customersIndex().length+'</b><span>إجمالي العملاء</span></div><div class="kpi"><b>'+rep+'</b><span>عملاء متكررون</span></div><div class="kpi"><b>'+ords+'</b><span>إجمالي الطلبات</span></div><div class="kpi"><b>'+act+'</b><span>طلبات نشطة</span></div></div>'+
    '<div class="search">🔎<input id="cq" type="search" placeholder="ابحث بالاسم أو الرقم أو المكان" value="'+esc(state.cq||'')+'" autocomplete="off"></div>'+
    '<select class="in" id="csort" style="margin-bottom:10px">'+[['recent','الأحدث نشاطًا'],['most','الأكثر طلبات'],['name','الاسم أبجديًا'],['phone','رقم الهاتف']].map(function(x){return '<option value="'+x[0]+'"'+(srt===x[0]?' selected':'')+'>'+x[1]+'</option>'}).join('')+'</select>'+
    '<div id="clist">'+(shown.length?shown.map(function(c){var lo=c.orders.slice().sort(function(a,b){var x=odate(a),y=odate(b);return (y?y.getTime():0)-(x?x.getTime():0)})[0];
      var cnt={};c.orders.forEach(function(o){var k=status(o);cnt[k]=(cnt[k]||0)+1});var badges=Object.keys(cnt).map(function(k){return '<span class="cbadge">'+esc(ST[k]?ST[k].l:k)+': '+cnt[k]+'</span>'}).join('');
      var rec=c.ci>=0?db.customers[c.ci]:null;
      return '<div class="card" style="--sc:var(--navy2)" data-ck="'+esc(c.k)+'"><div class="ch"><div><h3>👤 '+esc(c.name||'اسم غير مذكور')+'</h3><div class="meta">📱 '+esc(c.phone)+'<br>📍 '+esc(c.place||'غير محدد')+'</div></div><span class="pill">📦 '+c.orders.length+' '+(c.orders.length===1?'طلب':'طلبات')+'</span></div>'+
        '<div class="cbadges">'+(badges||'<span class="cbadge">لا توجد حالات مسجلة</span>')+'</div>'+
        (lo?'<div class="clast"><b>آخر طلب '+esc(onum(lo))+'</b><br><span class="mute">'+esc(items(lo).map(function(x){return iname(x)+' × '+qty(x)}).join('، '))+' · '+esc(ST[status(lo)].l)+'</span></div>':'')+
        (rec&&rec.notes?'<div class="meta">📝 '+esc(rec.notes)+'</div>':'')+
        '<div class="acts"><button class="btn" data-act="cProfile">📋 الملف</button>'+(lo?'<button class="btn" data-act="open" data-id="'+esc(oid(lo))+'">📦 آخر طلب</button>':'')+'<button class="btn" data-act="cWa">💬 واتساب</button><button class="btn" data-act="cEdit">✏️ تعديل</button></div></div>'}).join(''):'<div class="empty">لا توجد نتائج مطابقة.</div>')+'</div>'+
    (list.length>shown.length?'<button class="btn moreBtn" data-act="showMore">عرض المزيد ('+(list.length-shown.length)+')</button>':'');
}
function customerProfile(k){
  var c=custByKey(k);if(!c)return;
  var os=c.orders.slice().sort(function(a,b){var x=odate(a),y=odate(b);return (y?y.getTime():0)-(x?x.getTime():0)}),spent=0,due=0;
  os.forEach(function(o){if(status(o)!=='cancelled'){spent+=total(o);due+=remaining(o)}});
  openSheet('<div class="sh"><div><h3>👤 ملف العميل</h3><small>'+esc(c.name||'')+' · '+esc(c.phone)+'</small></div><button class="x" data-act="close">إغلاق ✕</button></div>'+
    '<div class="sum"><div><span>📱 الرقم</span><span>'+esc(c.phone)+'</span></div>'+(c.place?'<div><span>📍 المكان</span><span>'+esc(c.place)+'</span></div>':'')+'<div><span>📦 الطلبات</span><span>'+os.length+'</span></div><div><span>💰 مجموع المشتريات</span><span>'+money(spent)+' '+CUR+'</span></div>'+(due?'<div style="color:var(--bad)"><span>⏳ غير محصّل</span><span>'+money(due)+' '+CUR+'</span></div>':'')+'</div>'+
    '<div class="acts" style="margin-top:10px"><button class="btn dark" data-act="cNew" data-ck="'+esc(k)+'">✍️ طلب جديد للعميل</button><button class="btn" data-act="cAll" data-ck="'+esc(k)+'">📋 كل طلباته</button><button class="btn" data-act="cWa" data-ck="'+esc(k)+'">💬</button></div>'+
    '<h4 style="margin:16px 0 6px">📋 سجل الطلبات</h4>'+os.slice(0,30).map(function(o){return '<div class="card" style="--sc:'+ST[status(o)].c+';padding:10px"><div class="ch"><b>'+esc(onum(o))+'</b><span class="pill">'+ST[status(o)].i+' '+ST[status(o)].l+'</span></div><div class="meta" style="margin:4px 0">'+esc(items(o).map(function(x){return iname(x)+' × '+qty(x)}).join('، '))+' · '+money(total(o))+'</div><button class="btn sm" data-act="openFromAlert" data-id="'+esc(oid(o))+'">📋 التفاصيل</button></div>'}).join(''));
}
function customerEdit(k){
  var c=custByKey(k);if(!c)return;
  var d=openSheet('<div class="sh"><h3>✏️ تعديل العميل</h3><button class="x" data-act="close">إغلاق ✕</button></div><form id="cf" novalidate><label class="f" for="cName">الاسم</label><input class="in" id="cName" value="'+esc(c.name)+'"><label class="f" for="cPlace">المكان</label><input class="in" id="cPlace" value="'+esc(c.place)+'"><p class="note">الرقم: '+esc(c.phone)+'. تعديل الاسم والمكان هنا يخص ملف العميل والطلبات الجديدة، ولا يغيّر الطلبات السابقة.</p><div class="foot"><button class="btn green" type="submit">💾 حفظ</button><button class="btn" type="button" data-act="close">إلغاء</button></div></form>');
  d.querySelector('#cf').addEventListener('submit',function(e){e.preventDefault();
    var rec=c.ci>=0?db.customers[c.ci]:null;if(!rec){rec={name:'',phone:c.phone,place:'',orders:c.orders.map(oid)};db.customers.push(rec)}
    rec.name=$('cName').value.trim();rec.place=$('cPlace').value.trim();rec.updatedAt=new Date().toISOString();save();closeSheet(d);toast('💾 تم الحفظ');render()});
}

/* «➕ إدارة العملاء»: قاعدة العملاء مثل التطبيق الحالي — بحث، عميل جديد، تعديل */
function customersManage(){
  var list=customersIndex().slice().sort(function(a,b){return b.last-a.last}),q='';
  function rows(){var l=q?list.filter(function(c){return normTxt([c.name,c.phone,c.place].join(' ')).indexOf(normTxt(q))>=0}):list;
    return l.slice(0,150).map(function(c){return '<div class="irow" data-ck="'+esc(c.k)+'"><span>👤 <b>'+esc(c.name||'اسم غير مذكور')+'</b><small>📱 '+esc(c.phone)+(c.place?' · 📍 '+esc(c.place):'')+' · 📦 '+c.orders.length+'</small></span><span class="rowb"><button class="btn sm" data-act="cProfile">📋</button><button class="btn sm" data-act="cEdit">✏️</button></span></div>'}).join('')||'<div class="empty">لا يوجد عملاء.</div>'}
  var d=openSheet('<div class="sh"><h3>👥 قاعدة العملاء</h3><button class="x" data-act="close">إغلاق ✕</button></div><div class="row"><div><input class="in" id="cmq" placeholder="🔎 ابحث بالاسم أو الرقم..."></div><div><button class="btn dark wide" type="button" data-cm="new">➕ عميل جديد</button></div></div>'+
    '<form id="cmf" class="hide" novalidate><div class="row"><div><input class="in" id="cmPhone" placeholder="📱 الرقم" inputmode="tel"></div><div><input class="in" id="cmName" placeholder="👤 الاسم (اختياري)"></div></div><div class="row"><div><input class="in" id="cmPlace" placeholder="📍 المكان"></div><div><input class="in" id="cmNotes" placeholder="📝 ملاحظات"></div></div><div class="rowb"><button class="btn green" type="submit">💾 حفظ العميل</button><button class="btn" type="button" data-cm="cancel">إلغاء</button></div></form><div id="cmList">'+rows()+'</div>');
  d.querySelector('#cmq').addEventListener('input',function(){q=this.value;$('cmList').innerHTML=rows()});
  d.addEventListener('click',function(e){var b=e.target.closest('[data-cm]');if(!b)return;if(b.dataset.cm==='new'){$('cmf').classList.remove('hide');$('cmPhone').focus()}else $('cmf').classList.add('hide')});
  d.querySelector('#cmf').addEventListener('submit',function(e){e.preventDefault();var ph=$('cmPhone').value.trim();if(!phoneKey(ph)){alert('رقم العميل مطلوب');return}
    var k=phoneKey(ph),rec=db.customers.find(function(c){return phoneKey(c.phone)===k});if(!rec){rec={phone:ph,orders:[]};db.customers.push(rec)}
    rec.name=$('cmName').value.trim();rec.place=$('cmPlace').value.trim();rec.notes=$('cmNotes').value.trim();rec.updatedAt=new Date().toISOString();save();dirty();closeSheet(d);toast('💾 تم حفظ العميل');render()});
}
