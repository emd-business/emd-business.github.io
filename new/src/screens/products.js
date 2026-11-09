function productsHtml(){
  var q=normTxt(state.pq||''),list=db.products.filter(function(p){return !q||normTxt([p.name,p.category,p.code,p.barcode].join(' ')).indexOf(q)>=0});
  var dm=demand();
  return '<div class="ch" style="margin-top:16px"><div><h2 class="ptitle" style="margin:0">📦 المنتجات</h2><p class="psub">عدد المنتجات: '+db.products.length+'. السعر والتكلفة والصورة.</p></div><button class="btn dark" data-act="addProduct">➕ منتج</button></div>'+
    '<div class="search">🔎<input id="pq" type="search" placeholder="ابحث باسم المنتج أو التصنيف أو الكود" value="'+esc(state.pq||'')+'" autocomplete="off"></div>'+
    '<div id="plist">'+(list.length?list.map(function(p){var i=pIndex(p),a=available(p.name);
      return '<div class="card" style="--sc:var(--navy2)"><div class="prow">'+pimg(p)+'<div class="pbody"><h3>'+esc(p.name)+'</h3>'+
        '<div class="price">'+money(catPrice(p))+' '+CUR+(catCost(p)?' <small style="color:var(--mute);font-weight:600">· التكلفة '+money(catCost(p))+'</small>':'')+'</div>'+
        '<div class="nums"><span>الفعلي: '+num(p.stock)+'</span><span class="'+(a<=0?'low':'okk')+'">المتاح: '+a+'</span>'+(dm[normTxt(p.name)]?'<span>📈 طُلب: '+dm[normTxt(p.name)]+'</span>':'')+(p.category?'<span>'+esc(p.category)+'</span>':'')+'</div></div></div>'+
        '<div class="acts" style="margin-top:10px"><button class="btn" data-act="editProduct" data-pi="'+i+'">✏️ تعديل</button><button class="btn" data-act="addStock" data-pi="'+i+'">➕ مخزون</button><button class="btn" data-act="orderProduct" data-pi="'+i+'">✍️ طلب جديد</button></div></div>'}).join(''):'<div class="empty">'+(db.products.length?'لا توجد منتجات مطابقة.':'لا توجد منتجات بعد. اضغط «➕ منتج».')+'</div>')+'</div>';
}
function stockHtml(){
  var low=0,out=0,res=0;
  var rows=db.products.map(function(p){var a=available(p.name),r=index().reserved[normTxt(p.name)]||0;res+=r;if(a<=0)out++;else if(a<=minStock(p))low++;return {p:p,a:a,r:r}});
  if(state.stockLow)rows=rows.filter(function(x){return x.a<=Math.max(0,minStock(x.p))});
  rows.sort(function(x,y){return x.a-y.a});
  return '<h2 class="ptitle">🏭 المخزون</h2><p class="psub">المتاح = المخزون الفعلي − المحجوز للطلبات التي لم تُشحن بعد.</p>'+
    '<div class="kpis"><div class="kpi"><b>'+db.products.length+'</b><span>منتجات</span></div><div class="kpi"><b>'+res+'</b><span>قطع محجوزة للطلبات</span></div><div class="kpi"><b style="color:var(--bad)">'+out+'</b><span>نفد أو بالسالب</span></div><div class="kpi"><b style="color:#b45309">'+low+'</b><span>قارب على النفاد</span></div></div>'+
    '<div class="tools"><button class="btn sm'+(state.stockLow?' dark':'')+'" data-act="stockLow">⚠️ النواقص فقط</button></div>'+
    (rows.length?rows.map(function(x){var p=x.p,i=pIndex(p);
      return '<div class="card" style="--sc:'+(x.a<=0?'var(--bad)':x.a<=minStock(p)?'#d97706':'var(--ok)')+'"><div class="prow">'+pimg(p)+'<div class="pbody"><h3>'+esc(p.name)+'</h3><div class="nums"><span>الفعلي: '+num(p.stock)+'</span><span>🔒 المحجوز: '+x.r+'</span><span class="'+(x.a<=0?'low':'okk')+'">🟢 المتاح: '+x.a+'</span>'+(minStock(p)?'<span>حد التنبيه: '+minStock(p)+'</span>':'')+'</div></div><button class="btn sm" data-act="addStock" data-pi="'+i+'">➕</button></div></div>'}).join(''):'<div class="empty">'+(state.stockLow?'لا توجد نواقص الآن.':'لا توجد منتجات.')+'</div>');
}
function productSheet(i,prefillName){
  var p=i!=null?db.products[i]:null,img=p?String(p.image||p.img||p.imageUrl||''):'';
  var f=function(id,lbl,val,ph,extra){return '<label class="f" for="'+id+'">'+lbl+'</label><input class="in" id="'+id+'" value="'+esc(val==null?'':val)+'" placeholder="'+esc(ph||'')+'" '+(extra||'')+'>'};
  var d=openSheet('<div class="sh"><h3>'+(p?'✏️ تعديل المنتج':'📦 منتج جديد')+'</h3><button class="x" data-act="close">إغلاق ✕</button></div><form id="pf" novalidate>'+
    f('pName','اسم المنتج <em>*</em>',p?p.name:(prefillName||''),'مثال: عطر ورد 50 مل')+
    '<div class="row"><div>'+f('pPrice','سعر البيع ('+CUR+')',p&&catPrice(p)?money(catPrice(p)):'','0.000','inputmode="decimal"')+'</div><div>'+f('pCost','تكلفة الشراء ('+CUR+')',p&&catCost(p)?money(catCost(p)):'','0.000','inputmode="decimal"')+'</div></div>'+
    (p?'':f('pStock','الكمية الحالية',0,'0','inputmode="numeric"'))+
    '<label class="f">الصورة</label><div class="imgpick"><span id="pImgPrev">'+pimg({image:img})+'</span><button type="button" class="btn sm" data-act="pickImg">📷 اختيار صورة</button>'+(img?'<button type="button" class="btn sm red" data-act="rmImg">إزالة</button>':'')+'</div><input type="file" id="pImgIn" accept="image/*" class="hide">'+
    '<details class="more"'+(p&&(p.category||minStock(p)||p.code||p.barcode)?' open':'')+'><summary>تفاصيل أكثر (التصنيف، حد التنبيه، الكود)</summary>'+
      f('pCat','التصنيف',p&&p.category,'مثال: عطور')+f('pMin','حد التنبيه عند نقص المخزون',p&&minStock(p)?minStock(p):'','مثال: 3','inputmode="numeric"')+f('pCode','الكود أو الباركود',p&&(p.code||p.barcode||p.sku),'اختياري')+'</details>'+
    '<div class="foot"><button class="btn green" type="submit">💾 حفظ</button>'+(p?'<button class="btn red" type="button" data-act="delProduct" data-pi="'+i+'">🗑️ حذف</button>':'<button class="btn" type="button" data-act="close">إلغاء</button>')+'</div></form>');
  var newImg=null,box=d.querySelector('#pf');
  box.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
    if(b.dataset.act==='pickImg')$('pImgIn').click();
    if(b.dataset.act==='rmImg'){newImg='';$('pImgPrev').innerHTML=pimg(null);b.remove()}});
  $('pImgIn').addEventListener('change',function(){var file=this.files&&this.files[0];if(!file)return;shrink(file,480,function(u){newImg=u;$('pImgPrev').innerHTML=pimg({image:u})})});
  box.addEventListener('submit',function(e){e.preventDefault();
    var name=$('pName').value.trim();if(!name){toast('اكتب اسم المنتج.');return}
    var dup=db.products.find(function(x){return x!==p&&normTxt(x.name)===normTxt(name)});if(dup){toast('يوجد منتج بالاسم نفسه.');return}
    var t=p||{};var old=p?p.name:null;
    t.name=name;var pr=num($('pPrice').value);t.salePrice=pr;t.price=pr;t.unitPrice=pr;
    var c=num($('pCost').value);t.costPrice=c;t.purchasePrice=c;
    if(!p)t.stock=Math.max(0,Math.round(num($('pStock').value)));
    t.category=$('pCat').value.trim();var mn=$('pMin').value.trim();if(mn!=='')t.minStock=num(mn);else delete t.minStock;
    var code=$('pCode').value.trim();if(code)t.code=code;else delete t.code;
    if(newImg!==null){if(newImg)t.image=newImg;else{delete t.image;delete t.img;delete t.imageUrl}}
    t.updatedAt=new Date().toISOString();
    if(!p){t.createdAt=t.updatedAt;db.products.push(t)}
    else if(old&&normTxt(old)!==normTxt(name)){ // تحديث الاسم في الطلبات غير المشحونة حتى يبقى الحجز مرتبطًا بالمنتج
      var n=0;db.orders.forEach(function(o){if(['new','waiting','ready','packing'].indexOf(status(o))<0)return;items(o).forEach(function(x){if(normTxt(iname(x))===normTxt(old)){x.name=name;n++}})});
      if(n)toast('تم تحديث اسم المنتج في الطلبات المفتوحة ('+n+')');
    }
    save();closeSheet(d);if(!p)toast('✅ أُضيف المنتج');else if(!(old&&normTxt(old)!==normTxt(name)))toast('💾 تم الحفظ');render()});
}
function shrink(file,max,cb){var r=new FileReader();r.onload=function(){var im=new Image();im.onload=function(){var k=Math.min(1,max/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);cb(c.toDataURL('image/jpeg',.82))};im.onerror=function(){toast('تعذر قراءة الصورة')};im.src=r.result};r.readAsDataURL(file)}
function addStockSheet(i){
  var p=db.products[i];if(!p)return;
  var d=openSheet('<div class="sh"><div><h3>➕ إضافة مخزون</h3><small>'+esc(p.name)+' · الحالي: '+num(p.stock)+'</small></div><button class="x" data-act="close">إغلاق ✕</button></div><form id="sf" novalidate>'+
    '<div class="seg" id="sMode"><button type="button" class="on" data-m="add">إضافة كمية</button><button type="button" data-m="set">تعديل الكمية الفعلية</button></div>'+
    '<label class="f" for="sQty" id="sLbl">الكمية المضافة</label><input class="in" id="sQty" inputmode="numeric" placeholder="0">'+
    '<div class="foot"><button class="btn green" type="submit">💾 حفظ</button><button class="btn" type="button" data-act="close">إلغاء</button></div></form>');
  var mode='add',box=d.querySelector('#sf');setTimeout(function(){var f=$('sQty');if(f)f.focus()},60);
  box.addEventListener('click',function(e){var b=e.target.closest('[data-m]');if(!b)return;mode=b.dataset.m;box.querySelectorAll('[data-m]').forEach(function(x){x.classList.toggle('on',x===b)});$('sLbl').textContent=mode==='add'?'الكمية المضافة':'الكمية الفعلية الآن'});
  box.addEventListener('submit',function(e){e.preventDefault();var v=Math.round(num($('sQty').value));
    if(mode==='add'){if(v<=0){toast('اكتب كمية أكبر من صفر.');return}p.stock=num(p.stock)+v}else{if(v<0||$('sQty').value.trim()===''){toast('اكتب الكمية الفعلية.');return}p.stock=v}
    p.updatedAt=new Date().toISOString();dirty();
    var n=promoteWaiting();save();closeSheet(d);
    toast('💾 المخزون الآن '+p.stock+(n?' · أصبح '+n+' من الطلبات المنتظرة جاهزًا للتجهيز':''));render()});
}
