function itemRow(x){
  var opts='<option value="">— اختر الصنف —</option>'+db.products.map(function(p){var nm=String(p.name||'');return '<option'+(x&&x.name&&normTxt(nm)===normTxt(iname(x))?' selected':'')+'>'+esc(nm)+'</option>'}).join('');
  if(x&&x.name&&!product(iname(x)))opts+='<option selected>'+esc(iname(x))+'</option>';
  var from=x&&x.raw?'<div class="from">من الرسالة: «'+esc(x.raw)+'»'+(x.opts&&x.opts.length?' — يحتمل: '+x.opts.slice(0,4).map(esc).join(' أو '):' — غير مسجّل بهذا الاسم')+'. اختر الصحيح وسيتذكّره التطبيق.</div>':'';
  return '<div class="it'+(from?' amb':'')+'"'+(x&&x.raw?' data-raw="'+esc(x.raw)+'"':'')+(x&&x.parsed?' data-parsed="1"':'')+'><select class="in" data-k="name">'+opts+'</select><input class="in" data-k="qty" inputmode="numeric" value="'+(x?qty(x):1)+'"><input class="in" data-k="price" inputmode="decimal" placeholder="السعر" value="'+(x&&x.name?money(itemPrice(x)):'')+'"><button type="button" data-act="delItem">✕</button>'+from+'</div>';
}
function readItems(box){
  var out=[];box.querySelectorAll('.it').forEach(function(r){
    var name=r.querySelector('[data-k=name]').value.trim();if(!name)return;
    var q=Math.max(1,Math.round(num(r.querySelector('[data-k=qty]').value))||1);
    var pr=num(r.querySelector('[data-k=price]').value)||catPrice(product(name));
    out.push({name:name,qty:q,unitPrice:pr});
  });return out;
}
function formHtml(o,isNew){
  var comp=companies(),pState=o?payState(o):'unpaid';
  var f=function(id,lbl,val,ph,extra){return '<label class="f" for="'+id+'">'+lbl+'</label><input class="in" id="'+id+'" value="'+esc(val||'')+'" placeholder="'+esc(ph||'')+'" '+(extra||'')+'>'};
  var sel=function(id,lbl,val,opts){return '<label class="f" for="'+id+'">'+lbl+'</label><select class="in" id="'+id+'">'+opts.map(function(x){return '<option value="'+esc(x[0])+'"'+(String(val||'')===x[0]?' selected':'')+'>'+esc(x[1])+'</option>'}).join('')+'</select>'};
  var extras=f('fCompany','🚚 شركة التوصيل',o&&(o.company||o.deliveryCompany||o.shippingCompany),'مثال: جيناكم','list="compList"')+'<datalist id="compList">'+comp.map(function(c){return '<option value="'+esc(c)+'">'}).join('')+'</datalist>'+
    sel('fMethod','📦 طريقة التوصيل',o&&(o.method||o.deliveryMethod),[['','غير محددة'],['مندوب','مندوب'],['مكتب','مكتب'],['استلام من الفرع','استلام من الفرع'],['توصيل للمنزل','توصيل للمنزل']])+
    sel('fSource','📥 طريقة الطلب',o&&o.orderSource,[['','غير محددة'],['واتساب','واتساب'],['اتصال','اتصال'],['إنستجرام','إنستجرام'],['المتجر','المتجر'],['موقع إلكتروني','موقع إلكتروني'],['أخرى','أخرى']])+
    f('fPayM','💰 طريقة الدفع',o&&o.paymentMethod,'مثال: عند الاستلام','list="payList"')+'<datalist id="payList"><option value="عند الاستلام"><option value="تحويل بنكي"><option value="نقدًا"></datalist>'+
    '<div class="row"><div>'+f('fTransfer','💳 رقم التحويل',o&&o.transfer,'اختياري')+'</div><div>'+f('fBenef','👤 اسم المستفيد',o&&o.beneficiary,'اختياري')+'</div></div>'+
    f('fDue','📅 الموعد المطلوب',o&&o.due,'','type="date"')+
    '<label class="f" for="fNote">📝 الملاحظات</label><textarea class="in" id="fNote" rows="2">'+esc(o&&(o.note||o.notes)||'')+'</textarea>'+
    (o?'<label class="chk"><input type="checkbox" id="fNotify"'+(o.notifyOnAvailable?' checked':'')+'> <span><b>🔔 أخبر العميل عند توفر المنتج</b><br><small class="mute">للطلبات التي تنتظر وصول صنف. عند توفر الكمية يظهر الطلب في «📊 مركز الأداء» لإرسال الإشعار.</small></span></label>':'');
  var hasExtras=o&&(o.company||o.paymentMethod||o.method||o.orderSource||o.transfer||o.beneficiary||o.due||o.note);
  return f('fPhone','📱 رقم العميل <em>*</em>',o&&cphone(o),'مثال: 99999999','inputmode="tel" autocomplete="off"')+'<div id="sugg"></div>'+
    f('fName','👤 اسم العميل',o&&cname(o),'مثال: محمد')+
    f('fPlace','📍 مكان التوصيل <em>*</em>',o&&cplace(o),'مثال: نزوى')+
    '<label class="f">📦 المنتجات <em>*</em></label><div class="items" id="items">'+(o&&items(o).length?items(o).map(itemRow).join(''):itemRow(null))+'</div><button type="button" class="btn sm" data-act="addItem">＋ إضافة منتج</button>'+
    '<div class="row"><div>'+f('fFee','🚚 رسوم التوصيل',o&&num(o.deliveryFee)?money(num(o.deliveryFee)):'','0.000','inputmode="decimal"')+'</div><div>'+f('fDisc','🏷️ الخصم',o&&num(o.discount)?money(num(o.discount)):'','0.000','inputmode="decimal"')+'</div></div>'+
    '<label class="f">💳 الدفع</label><div class="seg" id="paySeg">'+['unpaid','partial','paid'].map(function(k){return '<button type="button" data-pay="'+k+'" class="'+(pState===k?'on':'')+'">'+(k==='unpaid'?'⏳ ':k==='partial'?'🌓 ':'✅ ')+PAYL[k]+'</button>'}).join('')+'</div>'+
    '<div id="partBox" class="'+(pState==='partial'?'':'hide')+'">'+f('fPaid','المبلغ المدفوع',o&&num(o.paidAmount)?money(num(o.paidAmount)):'','0.000','inputmode="decimal"')+'</div>'+
    '<div class="sum" id="sumBox"></div>'+
    '<details class="more"'+(hasExtras?' open':'')+'><summary>تفاصيل أكثر (شركة التوصيل، طريقة الدفع، طريقة الطلب، التحويل، الموعد، الملاحظات)</summary>'+extras+'</details>';
}
function bindForm(box,o){
  var it=box.querySelector('#items');
  function recalc(){
    var its=readItems(box),sub=its.reduce(function(s,x){return s+x.unitPrice*x.qty},0),fee=num($('fFee').value),dis=num($('fDisc').value),t=Math.max(0,sub+fee-dis);
    var shortTxt='';
    its.forEach(function(x){var a=available(x.name,o);if(a!==null&&a<x.qty)shortTxt+='<div style="color:#b45309">⚠️ '+esc(x.name)+': المتوفر '+Math.max(0,a)+'</div>'});
    $('sumBox').innerHTML='<div><span>المنتجات</span><span>'+money(sub)+'</span></div>'+(fee?'<div><span>التوصيل</span><span>'+money(fee)+'</span></div>':'')+(dis?'<div><span>الخصم</span><span>− '+money(dis)+'</span></div>':'')+'<div class="t"><span>الإجمالي</span><span>'+money(t)+' '+CUR+'</span></div>'+shortTxt;
  }
  box.addEventListener('input',function(e){
    if(e.target.id==='fPhone')suggest(box,e.target.value);
    recalc();
  });
  box.addEventListener('change',function(e){
    if(e.target.dataset.k==='name'){var p=product(e.target.value),pr=e.target.closest('.it').querySelector('[data-k=price]');if(e.target.value)e.target.closest('.it').classList.remove('amb');if(p&&!num(pr.value))pr.value=money(catPrice(p))}
    recalc();
  });
  box.addEventListener('click',function(e){
    var b=e.target.closest('button');if(!b)return;
    if(b.dataset.act==='addItem'){it.insertAdjacentHTML('beforeend',itemRow(null));recalc()}
    else if(b.dataset.act==='delItem'){if(it.children.length>1)b.closest('.it').remove();else b.closest('.it').querySelectorAll('input').forEach(function(i){i.value=i.dataset.k==='qty'?1:''});recalc()}
    else if(b.dataset.pay){box.querySelectorAll('#paySeg button').forEach(function(x){x.classList.toggle('on',x===b)});$('partBox').classList.toggle('hide',b.dataset.pay!=='partial')}
    else if(b.dataset.cust!=null){var c=db.customers[+b.dataset.cust];$('fPhone').value=c.phone||'';if(!$('fName').value)$('fName').value=c.name||'';if(!$('fPlace').value)$('fPlace').value=c.place||'';$('sugg').innerHTML=''}
  });
  recalc();
}
function suggest(box,v){
  var k=phoneKey(v),out=[];
  if(k.length>=3)for(var i=0;i<db.customers.length&&out.length<4;i++){if(phoneKey(db.customers[i].phone).indexOf(k)>=0)out.push(i)}
  $('sugg').innerHTML=out.length?'<div class="sugg">'+out.map(function(i){var c=db.customers[i];return '<button type="button" data-cust="'+i+'">👤 '+esc(c.name||'بدون اسم')+' · '+esc(c.phone)+(c.place?' · '+esc(c.place):'')+'</button>'}).join('')+'</div>':'';
}
function collect(box,o){
  var phone=$('fPhone').value.trim(),place=$('fPlace').value.trim(),its=readItems(box);
  var err=!phoneKey(phone)?'اكتب رقم العميل.':!place?'اكتب مكان التوصيل.':!its.length?'اختر منتجًا واحدًا على الأقل.':'';
  if(err){toast(err);return null}
  var pay=(box.querySelector('#paySeg .on')||{}).dataset;pay=pay?pay.pay:'unpaid';
  o.name=$('fName').value.trim();o.phone=phone;o.place=place;
  o.company=$('fCompany').value.trim();o.method=$('fMethod').value;o.orderSource=$('fSource').value;
  o.paymentMethod=$('fPayM').value.trim();o.transfer=$('fTransfer').value.trim();o.beneficiary=$('fBenef').value.trim();o.due=$('fDue').value;o.note=$('fNote').value.trim();if($('fNotify')){o.notifyOnAvailable=$('fNotify').checked;o.notifyStatus=o.notifyOnAvailable?(o.notifyStatus==='sent_manual'?'sent_manual':'waiting'):'none'}
  o.products=its;if(o.items&&o.products!==o.items)delete o.items;
  o.deliveryFee=num($('fFee').value);o.discount=num($('fDisc').value);
  o.subtotal=its.reduce(function(s,x){return s+x.unitPrice*x.qty},0);
  o.total=Math.max(0,o.subtotal+o.deliveryFee-o.discount);o.pricingEnabled=true;
  if(pay==='paid'){o.paymentStatus='paid';o.paidAmount=o.total}
  else if(pay==='partial'){o.paymentStatus='partial';o.paidAmount=Math.min(o.total,num($('fPaid').value))}
  else{o.paymentStatus='unpaid';o.paidAmount=0}
  if(o.paymentStatus!=='unpaid'&&!o.paidAt)o.paidAt=new Date().toISOString();
  o.remaining=Math.max(0,o.total-o.paidAmount);
  o.updatedAt=new Date().toISOString();
  return o;
}

function newOrder(pre,st){
  var head=st?'<div class="sh"><div><h3>👀 مراجعة الطلب قبل الحفظ</h3><small>فهمتُ الرسالة هكذا. راجعها ثم احفظ.</small></div><button class="x" data-act="close">إغلاق ✕</button></div>'+importBar(st)
    :'<div class="sh"><div><h3>✍️ طلب جديد</h3><small>الحقول الأساسية: الرقم والمكان والمنتجات.</small></div><button class="x" data-act="close">إغلاق ✕</button></div>';
  var d=openSheet(head+'<form id="frm" novalidate>'+formHtml(pre||null,true)+'<div class="foot"><button class="btn green" type="submit">✅ حفظ الطلب</button><button class="btn" type="button" data-act="'+(st?'backImport':'close')+'">'+(st?'↩️ تعديل الرسالة':'إلغاء')+'</button></div></form>');
  var box=d.querySelector('#frm');bindForm(box,null);
  if(pre&&pre.paymentStatus==='unpaid')box.querySelectorAll('#paySeg button').forEach(function(x){x.classList.toggle('on',x.dataset.pay==='unpaid')});
  setTimeout(function(){var f=$('fPhone');if(f&&!f.value)f.focus()},60);
  box.addEventListener('submit',function(e){
    e.preventDefault();
    var o=collect(box,{});if(!o)return;
    if(st){o.orderSource=o.orderSource||'واتساب';learnImport(box,st,o)}
    o.id=nextId();var now=new Date().toISOString();o.created=now;o.orderDate=now;
    o.status='new';o.history=[{status:'new',at:now,by:'rebuild'}];
    db.orders.unshift(o);dirty();
    o.status=shortage(o).length?'waiting':'ready';o.history.push({status:o.status,at:now,by:'rebuild'});
    upsertCustomer(o);trEnsureAll();save();
    closeSheet(d);toast('✅ تم حفظ الطلب '+onum(o));
    afterSave(o);
  });
}
function afterSave(o){
  var d=openSheet('<div class="sh"><h3>✅ تم حفظ الطلب</h3><button class="x" data-act="close">إغلاق ✕</button></div><p class="note">الطلب '+esc(onum(o))+' للعميل '+esc(cname(o)||cphone(o))+'. الحالة: '+ST[status(o)].l+'.</p><div class="foot"><button class="btn dark" data-act="waSend" data-id="'+esc(oid(o))+'">💬 إرسال تأكيد واتساب</button><button class="btn" data-act="close">لاحقًا</button></div><button class="btn sm" data-act="invoice" data-id="'+esc(oid(o))+'" style="margin-top:6px">🧾 الفاتورة</button>');
  render();
}
function openOrder(id){
  var o=findOrder(id);if(!o)return;
  var s=status(o),t=odate(o);
  var opts=FLOW.concat(['cancelled']).map(function(k){return '<option value="'+k+'"'+(k===s?' selected':'')+'>'+ST[k].i+' '+ST[k].l+'</option>'}).join('');
  var hist=(Array.isArray(o.history)?o.history.slice(-6).reverse():[]).map(function(h){var st=ST[h.status]||{l:h.status,i:'•'};var at=new Date(h.at);return '<div>'+st.i+' '+esc(st.l)+(isNaN(at)?'':' — '+at.toLocaleString('ar',{dateStyle:'short',timeStyle:'short'}))+'</div>'}).join('');
  var d=openSheet('<div class="sh"><div><h3>📋 تفاصيل الطلب</h3><small>'+esc(onum(o))+(t?' — '+t.toLocaleString('ar',{dateStyle:'medium',timeStyle:'short'}):'')+'</small></div><button class="x" data-act="close">إغلاق ✕</button></div>'+
    '<form id="frm" novalidate><label class="f" for="fStatus">🔄 حالة الطلب</label><select class="in" id="fStatus">'+opts+'</select>'+formHtml(o,false)+
    (hist?'<div class="hist"><b>سجل الطلب</b>'+hist+'</div>':'')+
    '<div class="foot"><button class="btn green" type="submit">💾 حفظ التعديلات</button><button class="btn" type="button" data-act="waSend" data-id="'+esc(id)+'">💬</button><button class="btn" type="button" data-act="copyNum" data-id="'+esc(id)+'">📋</button></div>'+
    '<div class="foot" style="margin-top:4px"><button class="btn" type="button" data-act="label" data-id="'+esc(id)+'">🏷️ ملصق الشحن</button><button class="btn" type="button" data-act="invoice" data-id="'+esc(id)+'">🧾 الفاتورة</button></div>'+
    (s!=='cancelled'?'<button class="btn red" type="button" data-act="cancelOrder" data-id="'+esc(id)+'" style="width:100%;margin-top:4px">❌ إلغاء الطلب</button>':'')+'</form>');
  var box=d.querySelector('#frm');bindForm(box,o);
  box.addEventListener('submit',function(e){
    e.preventDefault();
    var before=JSON.stringify(o);
    if(!collect(box,o))return;
    var to=$('fStatus').value;
    var later=(to==='shipped'||to==='received'||to==='packing')&&to!==status(o)?to:'';
    if(!later&&to!==status(o)&&!setStatus(o,to,true)){var old=JSON.parse(before);Object.keys(o).forEach(function(k){delete o[k]});Object.assign(o,old);dirty();return}
    upsertCustomer(o);save();closeSheet(d);toast('💾 تم حفظ التعديلات');render();
    if(later)moveOrder(o,later);
  });
}
