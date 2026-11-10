/* مُولَّد بـ tools/port-wactl.py من V190 وV192 وV193 — لا تعدّل هنا */
(function(){var s=document.createElement("style");s.textContent="\n.emd-v190-wa-btn{margin-top:10px;width:100%;border:0;border-radius:12px;padding:11px 14px;font-weight:800;cursor:pointer;background:#128c7e;color:#fff}\n.emd-v190-wa-hint{font-size:12px;opacity:.7;margin-top:6px}\n\n\n.emd192-card{background:#fff;border:1px solid #e7e7e7;border-radius:16px;padding:14px;margin:10px 0;box-shadow:0 4px 14px rgba(0,0,0,.04)}\n.emd192-card h3{margin:0 0 7px;font-size:16px}\n.emd192-card small{opacity:.68;display:block;line-height:1.6}\n.emd192-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}\n.emd192-btn{border:0;border-radius:11px;padding:9px 12px;font-weight:800;cursor:pointer}\n.emd192-primary{background:#128c7e;color:#fff}.emd192-light{background:#f2f2f2;color:#222}\n.emd192-modal{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:999999;display:none;align-items:center;justify-content:center;padding:14px}\n.emd192-modal.show{display:flex}.emd192-box{background:#fff;width:min(720px,100%);max-height:92vh;overflow:auto;border-radius:20px;padding:18px}\n.emd192-top{display:flex;align-items:center;justify-content:space-between;gap:10px}\n.emd192-close{border:0;background:#eee;border-radius:10px;padding:7px 11px;font-size:18px;cursor:pointer}\n.emd192-text{width:100%;min-height:145px;resize:vertical;border:1px solid #ddd;border-radius:12px;padding:12px;box-sizing:border-box;font-family:inherit;line-height:1.65}\n.emd192-preview{white-space:pre-wrap;background:#f7f7f7;border-radius:12px;padding:12px;margin-top:8px;line-height:1.65}\n.emd192-vars{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}\n.emd192-var{background:#eef7f5;border-radius:8px;padding:4px 7px;font-size:12px;cursor:pointer}\n\n\n.emd193-switch{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;margin-top:9px}\n.emd193-switch input{width:18px;height:18px}\n.emd193-status{display:inline-block;border-radius:20px;padding:4px 8px;font-size:11px;margin-right:5px;background:#e8f6f2;color:#08745f}\n.emd193-status.off{background:#f3f3f3;color:#777}\n.emd193-sample{margin-top:9px;font-size:12px;opacity:.7}\n";document.head.appendChild(s)})();
(function(RW){var PH=RW.EMDPosH,PLS=PH.ls;
var window=new Proxy(RW,{get:function(t,k){if(k==='localStorage')return PLS;var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t}});

(function(){
  const KEY='emd_whatsapp_templates_v189';
  const defaults={
    available:{title:'توفر المنتج',enabled:true,text:'السلام عليكم {name} 🌷\n\nالمنتج الذي طلبت إشعارك عند توفره أصبح متوفرًا لدينا الآن:\n\n{items}\n\nإذا كنت ترغب بإتمام الطلب، أخبرنا لنجهز طلبك. 🤍'},
    shipped:{title:'تم شحن الطلب',enabled:true,text:'السلام عليكم {name} 🌷\n\nنود إبلاغك بأن طلبك تم تجهيزه وتسليمه لشركة الشحن بنجاح. 📦🚚\n\n📋 رقم الطلب: {order}\n📦 المنتجات:\n{items}\n📍 مكان التوصيل: {location}\n🚚 شركة الشحن: {company}\n🛵 طريقة التوصيل: {method}\n\n🔢 رقم التتبع: {tracking}\n📌 الحالة: {status}\n{trackingLink}\n\nشكرًا لطلبك 🤍'},
    received:{title:'تأكيد الاستلام',enabled:true,text:'السلام عليكم {name} 🌷\n\nنتمنى أن يكون طلبك وصل بخير. 📦\n\nرقم الطلب: {order}\n\nشكرًا لثقتك بنا 🤍'},
    new_order:{title:'تأكيد الطلب',enabled:true,text:'السلام عليكم {name} 🌷\n\nتم تسجيل طلبك بنجاح. ✅\n\nرقم الطلب: {order}\nالمنتجات:\n{items}\n\nشكرًا لطلبك 🤍'}
  };
  function get(){
    let x={};
    try{x=JSON.parse(PLS.getItem(KEY)||'{}')||{}}catch(e){}
    const out={};
    Object.keys(defaults).forEach(k=>out[k]=Object.assign({},defaults[k],x[k]||{}));
    return out;
  }
  window.emdWhatsAppDefaultsV190=defaults;
  window.emdGetWhatsAppTemplate=function(type){
    return get()[type]||defaults[type]||{text:''};
  };
  window.emdBuildWhatsAppMessage=function(type,data){
    const t=window.emdGetWhatsAppTemplate(type);
    const d=data||{};
    let items=d.items||'';
    if(Array.isArray(items)) items=items.map(i=>'• '+(i.name||'')+' × '+(i.qty||1)).join('\n');
    const vals={
      name:d.name||'عميلنا العزيز',
      phone:d.phone||'',
      order:d.order||'',
      location:d.location||d.place||d.deliveryLocation||'',
      items:items,
      company:d.company||'',
      method:d.method||'',
      tracking:d.tracking||d.trackingNumber||'',
      trackingLink:d.trackingLink?('🔗 رابط التتبع: '+d.trackingLink):'',
      status:d.status||'🚚 تم الشحن'
    };
    let msg=String(t.text||'').replace(/\{(name|phone|order|items|company|method|location|tracking|trackingLink|status)\}/g,function(_,k){return vals[k]??'';});
    if(type==='shipped' && vals.tracking && !/رقم التتبع|\{tracking\}/i.test(msg)){
      msg += '\n\n🔢 رقم التتبع: '+vals.tracking+'\n📍 حالة الطلب: '+vals.status;
    }
    return msg;
  };
  window.emdOpenWhatsAppTemplate=window.emdV189Open||function(){};
})();


(function(){
 const KEY='emd_whatsapp_templates_v189';
 const defaults=window.emdWhatsAppDefaultsV190||{
  available:{title:'توفر المنتج',enabled:true,text:'السلام عليكم {name} 🌷\n\nالمنتج الذي طلبت إشعارك عند توفره أصبح متوفرًا لدينا الآن:\n\n{items}\n\nإذا كنت ترغب بإتمام الطلب، أخبرنا لنجهز طلبك. 🤍'},
  shipped:{title:'تم شحن الطلب',enabled:true,text:'السلام عليكم {name} 🌷\n\nنود إبلاغك بأن طلبك تم تجهيزه وتسليمه لشركة الشحن بنجاح. 📦🚚\n\n📋 رقم الطلب: {order}\n📦 المنتجات:\n{items}\n📍 مكان التوصيل: {location}\n🚚 شركة الشحن: {company}\n🛵 طريقة التوصيل: {method}\n\n🔢 رقم التتبع: {tracking}\n📌 الحالة: {status}\n{trackingLink}\n\nشكرًا لطلبك 🤍'},
  received:{title:'تأكيد الاستلام',enabled:true,text:'السلام عليكم {name} 🌷\n\nنتمنى أن يكون طلبك وصل بخير. 📦\n\nرقم الطلب: {order}\n\nشكرًا لثقتك بنا 🤍'},
  new_order:{title:'تأكيد الطلب',enabled:true,text:'السلام عليكم {name} 🌷\n\nتم تسجيل طلبك بنجاح. ✅\n\nرقم الطلب: {order}\nالمنتجات:\n{items}\n\nشكرًا لطلبك 🤍'}
 };
 function read(){try{return JSON.parse(PLS.getItem(KEY)||'{}')||{}}catch(e){return {}}}
 function save(x){PLS.setItem(KEY,JSON.stringify(x));}
 function data(){const x=read(),o={};Object.keys(defaults).forEach(k=>o[k]=Object.assign({},defaults[k],x[k]||{}));return o}
 function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
 function open(){
   let ov=document.getElementById('emdV192Overlay');
   if(!ov){
    ov=document.createElement('div');ov.id='emdV192Overlay';ov.className='emd192-modal';
    ov.innerHTML='<div class="emd192-box"><div class="emd192-top"><div><h2 style="margin:0">💬 مركز تحكم رسائل واتساب</h2><small>عدّل الرسائل مرة واحدة، وستُستخدم عند إرسالها من النظام.</small></div><button class="emd192-close" onclick="emdV192Close()">×</button></div><div id="emdV192Cards"></div><div class="emd192-actions"><button class="emd192-btn emd192-primary" onclick="emdV193Save()">💾 حفظ كل الرسائل</button><button class="emd192-btn emd192-light" onclick="emdV192Reset()">↩️ استعادة الرسائل الافتراضية</button></div></div>';
    document.body.appendChild(ov);
   }
   render();ov.classList.add('show');
 }
 function render(){
   const cards=document.getElementById('emdV192Cards'); if(!cards)return;
   const x=data();
   cards.innerHTML=Object.keys(x).map(k=>{
    const t=x[k];
    return '<div class="emd192-card"><h3>'+esc(t.title)+'</h3><small>المتغيرات المتاحة: {name} {phone} {order} {items} {company} {method}</small>'+
      '<textarea class="emd192-text" data-wa-type="'+k+'">'+esc(t.text)+'</textarea>'+
      '<div class="emd192-vars">'+['{name}','{phone}','{order}','{items}','{company}','{method}'].map(v=>'<span class="emd192-var" onclick="emdV192Insert(this,\''+v+'\')">'+v+'</span>').join('')+'</div>'+
      '<div class="emd192-actions"><button class="emd192-btn emd192-light" onclick="emdV192Preview(\''+k+'\')">👁️ معاينة</button><button class="emd192-btn emd192-light" onclick="emdV192ResetOne(\''+k+'\')">↩️ افتراضي</button></div>'+
      '<div id="emdV192Prev_'+k+'" class="emd192-preview" style="display:none"></div></div>';
   }).join('');
 }
 window.emdV192Insert=function(el,v){
   const ta=el.parentElement.parentElement.querySelector('textarea');
   const a=ta.selectionStart,b=ta.selectionEnd;ta.value=ta.value.slice(0,a)+v+ta.value.slice(b);ta.focus();ta.selectionStart=ta.selectionEnd=a+v.length;
 };
 window.emdV192Preview=function(k){
   const ta=document.querySelector('[data-wa-type="'+k+'"]'),p=document.getElementById('emdV192Prev_'+k);
   if(!ta||!p)return;
   const msg=ta.value.replaceAll('{name}','محمد').replaceAll('{phone}','91234567').replaceAll('{order}','#001').replaceAll('{items}','• جزء عم × 2\n• جزء تبارك × 1').replaceAll('{company}','جيناكم').replaceAll('{method}','مكتب');
   p.textContent=msg;p.style.display=p.style.display==='none'?'block':'none';
 };
 window.emdV192ResetOne=function(k){const ta=document.querySelector('[data-wa-type="'+k+'"]');if(ta)ta.value=defaults[k].text};
 window.emdV192Reset=function(){if(confirm('استعادة جميع الرسائل الافتراضية؟')){PLS.removeItem(KEY);render();}};
 window.emdV192Save=function(){
   const x=data();
   document.querySelectorAll('[data-wa-type]').forEach(ta=>x[ta.dataset.waType].text=ta.value);
   save(x); alert('تم حفظ رسائل واتساب بنجاح ✅');
 };
 window.emdV192Close=function(){document.getElementById('emdV192Overlay')?.classList.remove('show')};
 window.emdV192Open=open;

})();


(function(){
 const KEY='emd_whatsapp_templates_v189';
 const defs=window.emdWhatsAppDefaultsV190||{};
 function read(){try{return JSON.parse(PLS.getItem(KEY)||'{}')||{}}catch(e){return {}}}
 function all(){const r=read(),o={};Object.keys(defs).forEach(k=>o[k]=Object.assign({},defs[k],r[k]||{}));return o}
 function write(o){PLS.setItem(KEY,JSON.stringify(o))}
 function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
 function render(){
  const c=document.getElementById('emdV192Cards'); if(!c)return;
  const x=all();
  c.innerHTML=Object.keys(x).map(k=>{
   const t=x[k], on=t.enabled!==false;
   return '<div class="emd192-card">'+
    '<div class="emd192-top"><h3>'+esc(t.title)+'</h3><span class="emd193-status '+(on?'':'off')+'">'+(on?'مفعلة':'موقفة')+'</span></div>'+
    '<small>المتغيرات: {name} {phone} {order} {items} {company} {method}</small>'+
    '<label class="emd193-switch"><input type="checkbox" data-wa-enabled="'+k+'" '+(on?'checked':'')+'> استخدام هذه الرسالة</label>'+
    '<textarea class="emd192-text" data-wa-type="'+k+'">'+esc(t.text)+'</textarea>'+
    '<div class="emd192-vars">'+['{name}','{phone}','{order}','{items}','{company}','{method}'].map(v=>'<span class="emd192-var" onclick="emdV192Insert(this,\''+v+'\')">'+v+'</span>').join('')+'</div>'+
    '<div class="emd193-sample">المعاينة تستبدل البيانات بأمثلة تلقائيًا.</div>'+
    '<div class="emd192-actions"><button class="emd192-btn emd192-light" onclick="emdV192Preview(\''+k+'\')">👁️ معاينة</button><button class="emd192-btn emd192-light" onclick="emdV192ResetOne(\''+k+'\')">↩️ افتراضي</button></div>'+
    '<div id="emdV192Prev_'+k+'" class="emd192-preview" style="display:none"></div></div>';
  }).join('');
 }
 const oldOpen=window.emdV192Open;
 window.emdV193Open=function(){
  if(typeof oldOpen==='function')oldOpen();
  setTimeout(render,20);
 };
 window.emdV192Open=window.emdV193Open;
 window.emdV193Save=function(){
  const x=all();
  document.querySelectorAll('[data-wa-type]').forEach(ta=>{
   const k=ta.dataset.waType;if(x[k])x[k].text=ta.value;
  });
  document.querySelectorAll('[data-wa-enabled]').forEach(cb=>{
   const k=cb.dataset.waEnabled;if(x[k])x[k].enabled=cb.checked;
  });
  write(x);
  alert('تم حفظ إعدادات رسائل واتساب بنجاح ✅');
  render();
 };
 window.emdV193Reset=function(){
  if(confirm('استعادة جميع رسائل واتساب وإعداداتها الافتراضية؟')){
   PLS.removeItem(KEY);render();
  }
 };
 window.emdV193ResetOne=function(k){
  if(defs[k]){
   const x=all();x[k]=Object.assign({},defs[k]);write(x);render();
  }
 };
 window.emdV193Preview=function(k){
  const ta=document.querySelector('[data-wa-type="'+k+'"]'),p=document.getElementById('emdV192Prev_'+k);
  if(!ta||!p)return;
  p.textContent=ta.value.replaceAll('{name}','محمد').replaceAll('{phone}','91234567').replaceAll('{order}','#001').replaceAll('{items}','• جزء عم × 2\n• جزء تبارك × 1').replaceAll('{company}','جيناكم').replaceAll('{method}','مكتب');
  p.style.display=p.style.display==='none'?'block':'none';
 };
})();

})(window);
