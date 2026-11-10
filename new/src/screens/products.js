function productsHtml(){ // مثل صفحة المنتجات في التطبيق الحالي (V127 + V52/V81 + V224)
  var st=pStats();
  return '<div class="card pcard"><div class="prow0"><h2>📦 المنتجات</h2><span class="qe-hb"><button class="btn" data-act="quickEdit">✏️ تعديل سريع</button><button class="btn dark" data-act="addProduct">➕ منتج</button></span></div>'+
    (mode()==='online'?'':'<div class="rowb" style="margin:0 0 10px"><button class="btn sm" data-act="posTool" data-v="xls">📥 استيراد من Excel</button><button class="btn sm" data-act="posTool" data-v="bar">🏷️ ملصقات الباركود</button></div>')+
    '<div id="productsList">'+(db.products.length?db.products.map(function(p,i){var s=st(p),u=String(p.image||p.img||p.imageUrl||'');u=/^data:image\/|^https:\/\//.test(u)?u:'';
      return '<div class="product"><div class="pimg52" data-act="pImg" data-pi="'+i+'">'+(u?'<img class="pim52" loading="lazy" src="'+esc(u)+'" alt="">':'<div class="pph52">📦</div>')+'</div>'+
        '<span class="ptx">📦 <b>'+esc(p.name)+'</b><br><span class="muted">فعلي: '+s.stock+' · 🔒 محجوز: '+s.reserved+' · 🟢 متاح: '+s.available+'</span><div class="smrow"><span class="smchip">📈 مطلوب: '+s.total+'</span>'+(s.waiting?'<span class="smchip">⏳ انتظار: '+s.waiting+'</span>':'')+'</div></span>'+
        '<span class="pbt"><button class="btn" data-act="addStock" data-pi="'+i+'">➕ مخزون</button><button class="smact" data-act="orderProduct" data-pi="'+i+'">✍️ طلب جديد</button><button class="smact" data-act="pSmart" data-pi="'+i+'">🧠 تحليل</button></span></div>'}).join(''):'<div class="empty">لا توجد منتجات بعد.</div>')+'</div></div>';
}
/* أرقام البطاقة كما يحسبها التطبيق الحالي (V127): المطلوب = كل الكميات في الطلبات، والمحجوز = الجديدة/الجاهزة/قيد التجهيز غير المخصومة */
function pStats(){var m={};db.orders.forEach(function(o){var s=String(o.status||'new'),act=['new','ready','packing'].indexOf(s)>=0&&o.stockDeducted!==true;
    items(o).forEach(function(x){var k=String(x.name||''),q=Number(x.qty)||0,r=m[k]||(m[k]={t:0,a:0,w:0});r.t+=q;if(act)r.a+=q;if(o.status==='waiting')r.w+=q})});
  return function(p){var r=m[p.name]||{t:0,a:0,w:0},stk=Number(p.stock)||0,res=Math.max(0,r.a);return {total:r.t,waiting:r.w,reserved:res,available:Math.max(0,stk-res),stock:stk}}}
function pSmart(i){var p=db.products[i];if(!p)return;var s=pStats()(p);
  alert('📦 '+p.name+'\n\n🏬 المخزون الفعلي: '+s.stock+'\n🔒 المحجوز: '+s.reserved+'\n🟢 المتاح: '+s.available+'\n⏳ مطلوب للطلبات المنتظرة: '+s.waiting+'\n📈 إجمالي الكمية المطلوبة: '+s.total)}
function stockHtml(){
  /* مثل صفحة «🏭 المخزون» في التطبيق الحالي: قائمة بسيطة بالفعلي والمحجوز والمتاح */
  var rows=db.products.map(function(p){return {p:p,a:available(p.name),r:index().reserved[normTxt(p.name)]||0}});
  return '<div class="card"><h2 class="ptitle" style="margin-top:0">🏭 المخزون</h2><p class="psub">المتاح = المخزون الفعلي − المحجوز.</p>'+
    (rows.length?rows.map(function(x){var p=x.p;return '<div class="stk"><span>📦 <b>'+esc(p.name)+'</b><br><span class="muted">فعلي: '+num(p.stock)+' · 🔒 محجوز: '+x.r+' · 🟢 متاح: '+x.a+'</span></span>'+pimg(p)+'</div>'}).join(''):'<div class="empty">لا توجد منتجات.</div>')+'</div>';
}
function productSheet(i,prefillName){
  var p=i!=null?db.products[i]:null,img=p?String(p.image||p.img||p.imageUrl||''):'';
  var f=function(id,lbl,val,ph,extra){return '<label class="f" for="'+id+'">'+lbl+'</label><input class="in" id="'+id+'" value="'+esc(val==null?'':val)+'" placeholder="'+esc(ph||'')+'" '+(extra||'')+'>'};
  var d=openSheet('<div class="sh"><h3>'+(p?'✏️ تعديل المنتج':'📦 منتج جديد')+'</h3><button class="x" data-act="close">إغلاق ✕</button></div><form id="pf" novalidate>'+
    f('pName','اسم المنتج <em>*</em>',p?p.name:(prefillName||''),'مثال: عطر ورد 50 مل')+
    '<div class="row"><div>'+f('pPrice','سعر البيع ('+CUR+')',p&&catPrice(p)?money(catPrice(p)):'','0.000','inputmode="decimal"')+'</div><div>'+f('pCost','تكلفة الشراء ('+CUR+')',p&&catCost(p)?money(catCost(p)):'','0.000','inputmode="decimal"')+'</div></div>'+
    (p?'':f('pStock','الكمية الحالية',0,'0','inputmode="numeric"'))+(p||mode()==='online'?'':'<button type="button" class="btn e450-open" data-act="variants">🎨 هل لهذا المنتج مقاسات أو ألوان؟</button>')+
    '<label class="f">الصورة</label><div class="imgpick"><span id="pImgPrev">'+pimg({image:img})+'</span><button type="button" class="btn sm" data-act="pickImg">📷 اختيار صورة</button>'+(img?'<button type="button" class="btn sm red" data-act="rmImg">إزالة</button>':'')+'</div><input type="file" id="pImgIn" accept="image/*" class="hide">'+
    '<details class="more"'+(p&&(p.category||minStock(p)||p.code||p.barcode)?' open':'')+'><summary>تفاصيل أكثر (التصنيف، حد التنبيه، الكود)</summary>'+
      f('pCat','التصنيف',p&&p.category,'مثال: عطور')+f('pMin','حد التنبيه عند نقص المخزون',p&&minStock(p)?minStock(p):'','مثال: 3','inputmode="numeric"')+f('pCode','الكود أو الباركود',p&&(p.code||p.barcode||p.sku),'اختياري')+'</details>'+
    '<div class="foot"><button class="btn green" type="submit">💾 حفظ</button>'+(p?'<button class="btn red" type="button" data-act="delProduct" data-pi="'+i+'">🗑️ حذف</button>':'<button class="btn" type="button" data-act="close">إلغاء</button>')+'</div></form>');
  var newImg=null,box=d.querySelector('#pf');
  box.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
    if(b.dataset.act==='pickImg')$('pImgIn').click();
    if(b.dataset.act==='variants'){var seed={name:$('pName').value,price:$('pPrice').value,cost:$('pCost').value,img:newImg||''};closeSheet();directLoad().then(function(){EMD450.open(seed);setTimeout(function(){var x=$('e450Base');if(x&&!x.value)x.focus()},60)},function(){toast('تعذّر الفتح. تحقّق من الاتصال.')})}
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
/* ➕ مخزون: نافذة V60 في التطبيق الحالي */
function addStockSheet(i){
  var p=db.products[i];if(!p)return;var old=$('emdV60Ask');if(old)old.remove();
  var o=document.createElement('div');o.id='emdV60Ask';o.className='v60';
  o.innerHTML='<div class="v60b"><h3>➕ إضافة كمية — '+esc(p.name)+'</h3><label>كمية الإضافة</label><input id="v60q" type="number" min="0" inputmode="numeric" value="0"><div class="v60a"><button type="button" class="ok">حفظ</button><button type="button" class="no">إلغاء</button></div></div>';
  document.body.appendChild(o);var q=$('v60q');q.focus();
  var close=function(){o.remove()};o.querySelector('.no').onclick=close;
  o.querySelector('.ok').onclick=function(){var n=Math.max(0,+digits(q.value)||0);p.stock=(+p.stock||0)+n;p.updatedAt=new Date().toISOString();dirty();promoteWaiting();save();close();render()};
  o.addEventListener('keydown',function(e){if(e.key==='Enter')o.querySelector('.ok').click()});
}
/* صورة المنتج وإضافة منتج: نوافذ V81 في التطبيق الحالي (الصورة 320 بكسل JPEG) */
function v81Compress(file,cb){if(!file||!/^image\//.test(file.type||'image/')){alert('اختر صورة.');return}
  var r=new FileReader();r.onload=function(e){var im=new Image();im.onload=function(){var sc=Math.min(1,320/Math.max(im.width,im.height)),c=document.createElement('canvas');
    c.width=Math.max(1,Math.round(im.width*sc));c.height=Math.max(1,Math.round(im.height*sc));var x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.drawImage(im,0,0,c.width,c.height);
    var k=0.72,out=c.toDataURL('image/jpeg',k);while(out.length>60000&&k>0.4){k-=0.08;out=c.toDataURL('image/jpeg',k)}cb(out)};im.onerror=function(){alert('تعذّر قراءة الصورة.')};im.src=e.target.result};r.readAsDataURL(file)}
function v81Pick(cb){var i=document.createElement('input');i.type='file';i.accept='image/*';i.style.display='none';document.body.appendChild(i);i.onchange=function(){var f=i.files&&i.files[0];i.remove();if(f)v81Compress(f,cb)};i.click()}
function v81Sheet(h){var o=document.createElement('div');o.className='emd81-ov';o.innerHTML='<div class="emd81-box">'+h+'</div>';document.body.appendChild(o);o.addEventListener('click',function(e){if(e.target===o)o.remove()});return o}
function pImgSheet(i){var p=db.products[i];if(!p)return;var u=String(p.image||'');
  var o=v81Sheet('<h3>🖼️ صورة المنتج — '+esc(p.name)+'</h3><div class="emd81-prev" data-k="pick">'+(u?'<img src="'+esc(u)+'" alt="">':'📷')+'</div>'+
    '<div class="emd81-a"><button class="emd81-b full" data-k="pick">'+(u?'🔄 تغيير الصورة':'📷 إضافة صورة')+'</button>'+(u?'<button class="emd81-b red" data-k="del">🗑️ حذف الصورة</button>':'')+'<button class="emd81-b ghost'+(u?'':' full')+'" data-k="x">إغلاق</button></div>'+
    '<div class="emd81-note">الصورة اختيارية، وتظهر في المنتجات والأسعار وتفاصيل الطلب.</div>');
  o.addEventListener('click',function(e){var b=e.target.closest('[data-k]');if(!b)return;var k=b.getAttribute('data-k');
    if(k==='x'){o.remove();return}
    if(k==='del'){if(!confirm('حذف صورة «'+p.name+'»؟'))return;p.image='';p.updatedAt=new Date().toISOString();save();o.remove();render();return}
    if(k==='pick')v81Pick(function(url){p.image=url;p.updatedAt=new Date().toISOString();save();o.remove();render()})});
}
function addProductSheet(){var img='';
  var o=v81Sheet('<h3>📦 إضافة منتج</h3><div class="emd81-prev" data-k="pick" id="emd81Prev">📷<span style="font-size:13px;color:#64748b;margin-right:6px">صورة (اختياري)</span></div>'+
    '<div class="emd81-g"><label class="full">اسم المنتج *<input id="emd81Name" autocomplete="off"></label><label>الكمية الحالية<input id="emd81Stock" inputmode="numeric" value="0"></label>'+
    '<label>سعر البيع ('+CUR+')<input id="emd81Sale" inputmode="decimal" placeholder="اختياري"></label><label class="full">تكلفة الشراء ('+CUR+')<input id="emd81Cost" inputmode="decimal" placeholder="اختياري — لحساب الربح"></label></div>'+
    (mode()==='online'?'':'<button type="button" class="btn e450-open" data-k="var" style="width:100%;margin-top:10px">🎨 هل لهذا المنتج مقاسات أو ألوان؟</button>')+
    '<div class="emd81-a"><button class="emd81-b" data-k="ok">💾 حفظ</button><button class="emd81-b ghost" data-k="x">إلغاء</button></div>');
  setTimeout(function(){var n=$('emd81Name');if(n)n.focus()},50);
  o.addEventListener('click',function(e){var b=e.target.closest('[data-k]');if(!b)return;var k=b.getAttribute('data-k');
    if(k==='x'){o.remove();return}
    if(k==='pick'){v81Pick(function(url){img=url;$('emd81Prev').innerHTML='<img src="'+url+'" alt="">'});return}
    if(k==='var'){var seed={name:$('emd81Name').value,price:$('emd81Sale').value,cost:$('emd81Cost').value,img:img};o.remove();directLoad().then(function(){EMD450.open(seed);setTimeout(function(){var x=$('e450Base');if(x&&!x.value)x.focus()},60)},function(){toast('تعذّر الفتح. تحقّق من الاتصال.')});return}
    if(k==='ok'){var name=($('emd81Name').value||'').trim();if(!name){alert('اسم المنتج مطلوب');return}
      if(db.products.some(function(p){return normTxt(p.name)===normTxt(name)})){alert('يوجد منتج بنفس الاسم.');return}
      var p={name:name,stock:Math.max(0,Math.round(num($('emd81Stock').value)))},sv=num($('emd81Sale').value),c=num($('emd81Cost').value),t=new Date().toISOString();
      if(sv>0){p.salePrice=sv;p.unitPrice=sv;p.price=sv;p.defaultPrice=sv}if(c>0){p.costPrice=c;p.purchasePrice=c}if(img)p.image=img;p.createdAt=t;p.updatedAt=t;
      db.products.push(p);save();o.remove();render()}});
  o.addEventListener('keydown',function(e){if(e.key==='Enter'&&e.target.tagName==='INPUT'){var ok=o.querySelector('[data-k=ok]');ok&&ok.click()}});
}
