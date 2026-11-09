function cardMore(id){
  var o=findOrder(id);if(!o)return;var pin=pinned()[id];
  openSheet('<div class="sh"><h3>'+esc(onum(o))+'</h3><button class="x" data-act="close">إغلاق ✕</button></div><div class="list">'+
    '<button data-act="togglePin" data-id="'+esc(id)+'">'+(pin?'📌 إلغاء التثبيت':'📌 تثبيت الطلب في الأعلى')+'</button>'+
    FLOW.filter(function(k){return k!==status(o)}).map(function(k){return '<button data-act="setSt" data-st="'+k+'" data-id="'+esc(id)+'">'+ST[k].i+' نقل إلى: '+ST[k].l+'</button>'}).join('')+
    '<button data-act="label" data-id="'+esc(id)+'">🏷️ ملصق الشحن</button><button data-act="invoice" data-id="'+esc(id)+'">🧾 الفاتورة</button>'+
    '<button data-act="copyNum" data-id="'+esc(id)+'">📋 نسخ رقم الطلب</button></div>');
}
function moreSheet(){ // مثل «كل الصفحات» في التطبيق الحالي (V410)
  function g(a){return '<div class="grid3">'+a.map(function(x){return '<button '+x[0]+'><i>'+x[1]+'</i>'+x[2]+'</button>'}).join('')+'</div>'}
  openSheet('<div class="sh"><div><h3>كل الصفحات</h3><small>اختر الصفحة التي تريدها.</small></div><button class="x" data-act="close">إغلاق ✕</button></div>'+
    g([['data-act="finance"','💰','المالية'],['data-act="track"','🔗','التتبع'],['data-go="customers"','👤','العملاء'],['data-go="products"','📦','المنتجات'],['data-go="stock"','🏭','المخزن'],['data-act="direct"','🛒','بيع مباشر'],['data-go="perf"','📊','الأداء']])+
    '<div class="msec">أدوات</div>'+g([['data-act="store"','🛍️','متجري'],['data-act="settings"','⚙️','الإعدادات'],['data-act="support"','🆘','المساعدة']])+
    '<div class="mver">EMD Business • النسخة الجديدة (تجربة)</div>');
}
function alertsSheet(){
  var arr=[],now=Date.now();
  db.orders.forEach(function(o){var s=status(o),t=odate(o);
    if(s==='new')arr.push(['🆕','طلب جديد يحتاج اعتماد',o]);
    else if(s==='waiting')arr.push(['⏳','بانتظار توفر المنتج',o]);
    else if(s==='shipped'&&t&&now-t>5*864e5)arr.push(['🚚','مشحون منذ أكثر من 5 أيام',o]);
  });
  openSheet('<div class="sh"><h3>🔔 التنبيهات</h3><button class="x" data-act="close">إغلاق ✕</button></div><div class="list">'+
    (arr.length?arr.slice(0,60).map(function(a){return '<button data-act="openFromAlert" data-id="'+esc(oid(a[2]))+'">'+a[0]+' '+esc(onum(a[2]))+' — '+esc(cname(a[2])||cphone(a[2]))+'<br><small class="note">'+a[1]+'</small></button>'}).join(''):'<div class="empty">لا توجد تنبيهات الآن.</div>')+'</div>');
}


/* ---------- 4ب) المنتجات والمخزون والعملاء ---------- */
