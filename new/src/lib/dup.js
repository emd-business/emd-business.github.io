/* ---------- كشف الطلب المكرر عند الحفظ (V53) بإعدادات V54 (emd_duplicate_settings): نفس القواعد والنافذة ---------- */
var DUP_DEF={enabled:true,days:1,phone:true,place:true,items:true,qty:true,name:false};
function dupSettings(){var d={};for(var k in DUP_DEF)d[k]=DUP_DEF[k];try{var x=JSON.parse(POS_LS.getItem('emd_duplicate_settings')||'{}');for(var j in x)d[j]=x[j]}catch(e){}return d}
function dupNorm(s){return String(s==null?'':s).trim().toLowerCase().replace(/[ً-ٰٟ]/g,'').replace(/\s+/g,' ')}
function dupDig(s){return String(s==null?'':s).replace(/[٠-٩]/g,function(d){return String('٠١٢٣٤٥٦٧٨٩'.indexOf(d))}).replace(/\D/g,'')}
function dupProds(o){var a=Array.isArray(o&&o.products)?o.products:(o&&o.product?[{name:o.product,qty:o.quantity||1}]:[]);
  return a.map(function(x){return {name:dupNorm(x.name||x.product),qty:Number(x.qty||x.quantity||1)}}).filter(function(x){return x.name}).sort(function(a,b){return a.name.localeCompare(b.name,'ar')})}
function dupSameItems(a,b){var x=dupProds(a),y=dupProds(b);if(!x.length||x.length!==y.length)return false;return x.every(function(v,i){return v.name===y[i].name&&v.qty===y[i].qty})}
function dupFind(obj){var s=dupSettings();if(!s.enabled)return null;
  var now=new Date(obj.orderDate||Date.now()),maxDays=Math.max(1,Number(s.days)||1);
  for(var i=0;i<db.orders.length;i++){var old=db.orders[i];if(!old||String(old.id)===String(obj.id))continue;
    var od=new Date(old.orderDate||old.created||0);if(isNaN(od.getTime()))continue;
    if(Math.abs(now.getTime()-od.getTime())>maxDays*864e5)continue;
    if(s.phone&&!(dupDig(obj.phone)&&dupDig(obj.phone)===dupDig(old.phone)))continue;
    if(s.place&&!(dupNorm(obj.place)&&dupNorm(obj.place)===dupNorm(old.place)))continue;
    if(s.items&&!dupSameItems(obj,old))continue;
    if(s.name&&dupNorm(obj.name)!==dupNorm(old.name))continue;
    if(!s.phone&&!s.place&&!s.items&&!s.name)continue;
    if(s.qty&&!dupSameItems({products:dupProds(obj)},{products:dupProds(old)}))continue;
    return old}
  return null}
function dupDate(v){var d=new Date(v||0);if(isNaN(d.getTime()))return 'تاريخ غير معروف';return d.toLocaleDateString('ar-OM',{year:'numeric',month:'numeric',day:'numeric'})+' · '+d.toLocaleTimeString('ar-OM',{hour:'2-digit',minute:'2-digit'})}
/* نافذة «⚠️ يوجد طلب مشابه»: نعم ← يكمل الحفظ، إلغاء ← يبقى النموذج كما هو */
function dupAsk(obj,old,go){var its=function(o){return dupProds(o).map(function(x){return x.name+' × '+x.qty}).join('، ')||'غير محدد'};
  var m=document.createElement('div');m.id='emdDuplicateModal53';
  m.innerHTML='<div class="emd-dup53"><h2 style="margin:0">⚠️ يوجد طلب مشابه</h2><p style="color:#666">وجدت طلبًا سابقًا يبدو مطابقًا لهذا الطلب. راجع التفاصيل قبل الحفظ.</p>'+
    '<div class="box"><b>📅 الطلب السابق</b><br>'+esc(idsFmt('#'+String(old.id||'').replace(/^#+/,'')))+' · '+esc(old.name||'اسم غير مذكور')+'<br>📱 '+esc(old.phone||'')+' · 📍 '+esc(old.place||'غير محدد')+'<br>📦 '+esc(its(old))+'<br>🕐 '+esc(dupDate(old.orderDate||old.created))+'</div>'+
    '<div class="box"><b>🔎 الطلب الحالي</b><br>📱 '+esc(obj.phone||'')+' · 📍 '+esc(obj.place||'غير محدد')+'<br>📦 '+esc(its(obj))+'</div>'+
    '<div class="actions"><button class="yes" type="button" data-d="yes">✅ نعم، هذا طلب جديد</button><button class="no" type="button" data-d="no">↩️ ألغي هذا الطلب</button></div></div>';
  m.addEventListener('click',function(e){var b=e.target.closest('[data-d]');if(!b)return;m.remove();if(b.getAttribute('data-d')==='yes')go()});
  document.body.appendChild(m)}
