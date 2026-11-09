/* ---------- «✏️ تعديل سريع» للمنتجات (مثل نافذة المنتجات V16/V51/V144/V146 في التطبيق الحالي) ----------
   اسم ورمز وصورة، بحث، و➕ ➖ ✏️ 🗑️ لكل منتج. الكمية بنافذة داخل التطبيق (V146). */
var QE={edit:null,img:null};
function qeOpen(){
  QE.edit=null;QE.img=null;
  var d=openSheet('<div class="qe-h"><h2>📦 المنتجات</h2><button type="button" class="qe-x" data-q="close">إغلاق</button></div>'+
    '<div class="qe-form"><input id="qeName" placeholder="اسم المنتج"><input id="qeCode" placeholder="رمز المنتج"><label class="qe-img">🖼️ صورة المنتج <span>(اختياري)</span><input accept="image/*" id="qeImg" type="file" style="display:none"></label><button type="button" class="qe-save" data-q="save">➕ إضافة / حفظ</button></div>'+
    '<div id="qePrev" style="display:none;margin:-7px 0 14px;text-align:right"></div>'+
    '<input id="qeSearch" class="qe-search" placeholder="🔎 بحث عن منتج..." autocomplete="off"><div id="qeList"></div>','qe');
  d.addEventListener('click',function(e){var b=e.target.closest('[data-q]');if(!b)return;var k=b.dataset.q,p=b.dataset.k!=null?qeFind(decodeURIComponent(b.dataset.k)):null;
    if(k==='close')closeSheet(d);else if(k==='save')qeSave();else if(k==='cancel')qeClear();
    else if(k==='edit'&&p)qeEdit(p);else if(k==='add'&&p)qeQty('add',p);else if(k==='rem'&&p)qeQty('remove',p);
    else if(k==='del'&&p){if(confirm('حذف المنتج «'+p.name+'»؟')){db.products.splice(db.products.indexOf(p),1);save();qeList();render()}}});
  $('qeSearch').addEventListener('input',qeList);
  $('qeImg').addEventListener('change',function(){var f=this.files&&this.files[0];if(!f)return;shrink(f,700,function(u){QE.img=u;var p=$('qePrev');p.style.display='block';p.innerHTML='<img class="qe-th" src="'+esc(u)+'" alt="معاينة صورة المنتج">'})});
  qeList();
}
function qeN(s){return String(s==null?'':s).trim().toLowerCase().replace(/\s+/g,' ')}
function qeFind(k){return db.products.find(function(p){return p&&qeN(p.name)===k})||null}
function qeList(){
  var el=$('qeList');if(!el)return;var q=qeN(($('qeSearch')||{}).value||'');
  var a=db.products.filter(function(x){return x&&x.name&&(!q||qeN(x.name).indexOf(q)>=0||qeN(x.code).indexOf(q)>=0)});
  el.innerHTML=a.length?a.map(function(x){var k=encodeURIComponent(qeN(x.name)),u=String(x.image||'');
    return '<div class="qe-row"><div class="qe-in">'+(u?'<img class="qe-th" src="'+esc(u)+'" alt="'+esc(x.name)+'">':'<div class="qe-th qe-ph">📦</div>')+
      '<div class="qe-nm"><b>📦 '+esc(x.name)+'</b><br><span>🏷️ '+esc(x.code||'بدون رمز')+'</span></div>'+
      '<div class="qe-bt"><span>📦 '+num(x.stock)+'</span><button type="button" data-q="add" data-k="'+k+'">➕</button><button type="button" data-q="rem" data-k="'+k+'">➖</button><button type="button" data-q="edit" data-k="'+k+'">✏️ تعديل</button><button type="button" data-q="del" data-k="'+k+'">🗑️</button></div></div></div>'}).join(''):'<p style="color:#777">لا توجد منتجات.</p>';
}
function qeClear(){QE.edit=null;QE.img=null;['qeName','qeCode','qeImg'].forEach(function(i){var e=$(i);if(e){e.value='';e.classList.remove('qe-ed')}});var p=$('qePrev');if(p){p.style.display='none';p.innerHTML=''}var c=$('qeCancel');if(c)c.remove()}
function qeEdit(p){QE.edit=qeN(p.name);QE.img=null;$('qeName').value=p.name||'';$('qeCode').value=p.code||'';
  var v=$('qePrev');v.style.display=p.image?'block':'none';v.innerHTML=p.image?'<img class="qe-th" src="'+esc(p.image)+'" alt="صورة المنتج">':'';
  $('qeName').classList.add('qe-ed');$('qeCode').classList.add('qe-ed');
  if(!$('qeCancel')){var b=document.createElement('button');b.id='qeCancel';b.type='button';b.className='qe-cancel';b.setAttribute('data-q','cancel');b.textContent='إلغاء تعديل المنتج ✕';document.querySelector('.qe-form').appendChild(b)}
  $('qeName').focus()}
function qeSave(){
  var name=$('qeName').value.trim(),code=$('qeCode').value.trim();if(!name){alert('اسم المنتج مطلوب');return}
  var old=QE.edit?qeFind(QE.edit):null;
  if(db.products.find(function(p){return qeN(p.name)===qeN(name)&&(!old||p!==old)})){alert('يوجد منتج آخر بهذا الاسم. اختر اسمًا مختلفًا.');return}
  if(old){old.name=name;old.code=code;if(QE.img)old.image=QE.img;old.updatedAt=new Date().toISOString()}
  else{var t=new Date().toISOString();db.products.push({name:name,code:code,stock:0,image:QE.img||'',createdAt:t,updatedAt:t})}
  save();qeClear();qeList();render();
}
/* نافذة الكمية (V146): المتاح للخصم = المخزون − المحجوز للطلبات التي لم تُشحن */
function qeRes(p){var k=qeN(p.name),n=0;db.orders.forEach(function(o){if(o.stockDeducted===true||['new','ready','packing'].indexOf(String(o.status||'new'))<0)return;items(o).forEach(function(i){if(qeN(iname(i))===k)n+=Number(i.qty||i.quantity||1)})});return n}
function qeQty(kind,p){
  var st=num(p.stock),info=kind==='remove'?'المخزون الحالي: '+st+' · المتاح للخصم: '+Math.max(0,st-qeRes(p)):'المخزون الحالي: '+st;
  var o=document.createElement('div');o.id='e146';
  o.innerHTML='<div class="e146-box" role="dialog" aria-modal="true"><h3>'+(kind==='add'?'➕ إضافة كمية':'➖ خصم كمية')+'</h3><div class="e146-name">📦 '+esc(p.name)+'</div><div class="e146-info">'+info+'</div>'+
    '<div class="e146-row"><button type="button" data-d="1">+</button><input id="e146q" type="text" inputmode="numeric" autocomplete="off" value="1" aria-label="الكمية"><button type="button" data-d="-1">−</button></div><div class="e146-err" id="e146err"></div>'+
    '<div class="e146-act"><button type="button" class="e146-ok">'+(kind==='add'?'إضافة':'خصم')+'</button><button type="button" class="e146-no">إلغاء</button></div></div>';
  document.body.appendChild(o);
  var inp=o.querySelector('#e146q'),err=o.querySelector('#e146err');
  var val=function(){var n=Number(digits(inp.value).replace(/[^\d.]/g,''));return isFinite(n)?n:0};
  var close=function(){o.remove()};
  o.querySelectorAll('[data-d]').forEach(function(b){b.onclick=function(){inp.value=String(Math.max(1,val()+Number(b.dataset.d)));err.style.display='none'}});
  inp.addEventListener('input',function(){err.style.display='none'});o.querySelector('.e146-no').onclick=close;o.addEventListener('click',function(e){if(e.target===o)close()});
  var ok=function(){var q=val();if(!(q>0)){err.textContent='أدخل كمية صحيحة أكبر من صفر.';err.style.display='block';return}
    if(kind==='remove'){var r=qeRes(p),av=Math.max(0,num(p.stock)-r);if(q>av){err.textContent='لا يمكن خصم أكثر من المتاح. المتاح الآن: '+av+(r>0?'\nالمخزون: '+num(p.stock)+'، والمحجوز لطلبات لم تُشحن بعد: '+r:'');err.style.display='block';return}p.stock=num(p.stock)-q}
    else p.stock=num(p.stock)+q;
    p.updatedAt=new Date().toISOString();dirty();if(kind==='add')promoteWaiting();save();close();qeList();render()};
  o.querySelector('.e146-ok').onclick=ok;
  inp.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();ok()}else if(e.key==='Escape')close()});
  setTimeout(function(){try{inp.focus();inp.select()}catch(e){}},60);
}
