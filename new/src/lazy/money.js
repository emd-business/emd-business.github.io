/* مُولَّد بـ tools/port-money.py من V75 — لا تعدّل هنا */
(function(){var s=document.createElement("style");s.textContent="\n#emdLockV80{z-index:2147483000!important}\n.emd75-ov{position:fixed;inset:0;z-index:11000;background:rgba(15,23,42,.55);display:none;align-items:flex-end;justify-content:center;direction:rtl}\n.emd75-ov.show{display:flex}\n.emd75-sheet{width:min(720px,100%);height:min(94vh,100%);background:#f6f7f9;border-radius:22px 22px 0 0;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 -10px 40px rgba(0,0,0,.25)}\n@media(min-width:760px){.emd75-ov{align-items:center}.emd75-sheet{border-radius:22px;height:min(90vh,900px)}}\n.emd75-top{background:#fff;padding:14px 16px 0;border-bottom:1px solid #e8eaee}\n.emd75-hrow{display:flex;align-items:center;justify-content:space-between;gap:10px}\n.emd75-hrow h2{margin:0;font-size:20px}\n.emd75-x{border:0;background:#eef0f3;border-radius:12px;width:40px;height:40px;font-size:20px;cursor:pointer}\n.emd75-tabs{display:flex;gap:6px;overflow-x:auto;padding:12px 0 10px;scrollbar-width:none}\n.emd75-tabs::-webkit-scrollbar{display:none}\n.emd75-tab{flex:0 0 auto;border:1px solid #e3e6ea;background:#fff;border-radius:999px;padding:9px 14px;font-size:14px;font-weight:700;cursor:pointer;color:#334155}\n.emd75-tab.on{background:#111827;color:#fff;border-color:#111827}\n.emd75-tab .c{display:inline-block;min-width:18px;padding:0 5px;margin-inline-start:5px;border-radius:9px;background:#ef4444;color:#fff;font-size:11px;line-height:18px}\n.emd75-body{flex:1;overflow:auto;padding:14px 14px 30px}\n.emd75-chips{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}\n.emd75-chip{border:1px solid #dfe3e8;background:#fff;border-radius:10px;padding:7px 12px;font-size:13px;cursor:pointer}\n.emd75-chip.on{background:#e8f5ee;border-color:#16a34a;color:#14532d;font-weight:800}\n.emd75-big{background:#111827;color:#fff;border-radius:18px;padding:16px;margin-bottom:10px}\n.emd75-big small{opacity:.75;font-size:13px}\n.emd75-big b{display:block;font-size:30px;margin-top:4px;letter-spacing:.3px}\n.emd75-big .neg{color:#fca5a5}\n.emd75-big .eq{margin-top:8px;font-size:12px;opacity:.75;line-height:1.7}\n.emd75-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px}\n.emd75-card{background:#fff;border:1px solid #e8eaee;border-radius:14px;padding:12px}\n.emd75-card small{display:block;color:#64748b;font-size:12px}\n.emd75-card b{display:block;font-size:19px;margin-top:3px}\n.emd75-card.warn b{color:#b45309}\n.emd75-card.good b{color:#15803d}\n.emd75-note{background:#fff7e6;color:#6b4a00;border-radius:12px;padding:10px 12px;font-size:13px;line-height:1.7;margin-bottom:10px}\n.emd75-note button{border:0;background:#111827;color:#fff;border-radius:9px;padding:6px 10px;font-size:12px;margin-inline-start:6px;cursor:pointer}\n.emd75-sec{font-weight:800;margin:16px 2px 8px;font-size:15px}\n.emd75-form{display:grid;grid-template-columns:1.2fr 1fr;gap:8px;background:#fff;border:1px solid #e8eaee;border-radius:14px;padding:10px}\n.emd75-form input,.emd75-form select{width:100%;box-sizing:border-box;border:1px solid #dfe3e8;border-radius:10px;padding:10px;font-size:15px;background:#fff}\n.emd75-form .full{grid-column:1/-1}\n.emd75-btn{border:0;border-radius:12px;padding:11px 14px;font-weight:800;font-size:14px;cursor:pointer;background:#111827;color:#fff}\n.emd75-btn.wa{background:#128c7e}\n.emd75-btn.ok{background:#16a34a}\n.emd75-btn.ghost{background:#eef0f3;color:#111827}\n.emd75-btn.sm{padding:8px 10px;font-size:13px;border-radius:10px}\n.emd75-list{display:grid;gap:8px}\n.emd75-row{background:#fff;border:1px solid #e8eaee;border-radius:14px;padding:12px}\n.emd75-row .t{display:flex;justify-content:space-between;gap:8px;align-items:flex-start}\n.emd75-row .t b{font-size:15px}\n.emd75-row .amt{font-weight:900;font-size:17px;white-space:nowrap}\n.emd75-row .m{color:#64748b;font-size:12px;margin-top:3px;line-height:1.6}\n.emd75-row .a{display:flex;gap:6px;flex-wrap:wrap;margin-top:9px}\n.emd75-tag{display:inline-block;border-radius:999px;padding:2px 8px;font-size:11px;font-weight:800;background:#eef0f3;color:#334155;margin-inline-start:4px}\n.emd75-tag.late{background:#fee2e2;color:#991b1b}\n.emd75-tag.cour{background:#e0f2fe;color:#075985}\n.emd75-empty{text-align:center;color:#64748b;padding:30px 10px;background:#fff;border-radius:14px;border:1px dashed #d6dae0}\n.emd75-check{display:flex;gap:10px;align-items:flex-start}\n.emd75-check input{width:22px;height:22px;margin-top:2px;flex:0 0 auto}\n.emd75-pr{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:6px;align-items:center;background:#fff;border:1px solid #e8eaee;border-radius:12px;padding:8px 10px}\n.emd75-pr input{width:100%;box-sizing:border-box;border:1px solid #dfe3e8;border-radius:9px;padding:8px;font-size:15px;text-align:center}\n.emd75-pimg{width:38px;height:38px;flex:0 0 38px;border:1px dashed #cbd5e1;border-radius:10px;background:#f8fafc;padding:0;overflow:hidden;cursor:pointer;font-size:16px}\n.emd75-pimg img{width:100%;height:100%;object-fit:cover;display:block}\n.emd75-pr.h{background:transparent;border:0;font-size:12px;color:#64748b;font-weight:800;padding:0 10px}\n.emd75-sticky{position:sticky;bottom:-30px;background:linear-gradient(transparent,#f6f7f9 30%);padding:16px 0 4px;display:flex;gap:8px}\n.emd75-sticky .emd75-btn{flex:1}\n#emd75Toast{position:fixed;left:50%;transform:translateX(-50%);bottom:22px;z-index:2147483600;background:#14532d;color:#fff;padding:10px 16px;border-radius:12px;font-size:14px;direction:rtl;display:none;box-shadow:0 8px 24px rgba(0,0,0,.25)}\n/* شريط الرئيسية */\n.emd75-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:0;background:#111827;color:#fff;border-radius:18px;padding:12px 6px;margin:12px 0;cursor:pointer;direction:rtl;position:relative}\n.emd75-strip>div{text-align:center;padding:0 4px;border-inline-start:1px solid rgba(255,255,255,.14)}\n.emd75-strip>div:first-child{border:0}\n.emd75-strip small{display:block;font-size:11px;opacity:.72}\n.emd75-strip b{display:block;font-size:17px;margin-top:2px}\n.emd75-strip .due{color:#fcd34d}\n.emd75-strip .cap{grid-column:1/-1;text-align:center;font-size:11px;opacity:.6;margin-top:8px;border:0}\n/* صندوق الطلب */\n.emd75-obox{margin:14px 0;background:#f8fafc;border:1px solid #e2e8f0;border-radius:16px;padding:12px}\n.emd75-oh{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}\n.emd75-pill{border-radius:999px;padding:3px 10px;font-size:12px;font-weight:800}\n.emd75-pill.unpaid{background:#fee2e2;color:#991b1b}.emd75-pill.paid{background:#dcfce7;color:#166534}.emd75-pill.partial{background:#fef3c7;color:#92400e}\n.emd75-ol{display:flex;justify-content:space-between;font-size:13px;color:#334155;padding:3px 0}\n.emd75-ol.miss{color:#b45309}\n.emd75-li{display:grid;grid-template-columns:40px 1fr 34px 76px;grid-template-areas:\"th n n lt\" \"th in rs lt\";column-gap:8px;row-gap:6px;align-items:center;padding:9px 0;border-bottom:1px dashed #e2e8f0}\n.emd75-li>.emd75-th{grid-area:th;align-self:start}.emd75-li>.n{grid-area:n}.emd75-li>input{grid-area:in}.emd75-li>.emd75-rst,.emd75-li>span:not(.emd75-th){grid-area:rs}.emd75-li>.lt{grid-area:lt}\n.emd75-li .n b{font-size:13px}.emd75-li .n small{display:block;font-size:11px;color:#64748b}\n.emd75-li input{width:100%;box-sizing:border-box;border:1px solid #dfe3e8;border-radius:9px;padding:8px 6px;font-size:15px;text-align:center;background:#fff}\n.emd75-li .lt{font-size:14px;text-align:left}\n.emd75-li.miss input{border-color:#f59e0b;background:#fffbeb}\n.emd75-th{width:40px;height:40px;border-radius:9px;object-fit:cover;background:#eef2f7;display:flex;align-items:center;justify-content:center;font-size:18px}\n.emd75-sp{display:inline-block;background:#fef3c7;color:#92400e;border-radius:999px;padding:1px 7px;font-size:10px;font-weight:800}\n.emd75-rst{border:0;background:#eef0f3;border-radius:8px;width:30px;height:30px;cursor:pointer;font-size:15px}\n.emd75-man{grid-column:1/-1;font-size:12px;color:#92400e;background:#fffbeb;border-radius:10px;padding:7px 9px}\n.emd75-man button{border:0;background:#111827;color:#fff;border-radius:8px;padding:5px 8px;font-size:12px;margin-inline-start:6px;cursor:pointer}\n.emd75-seg{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:10px 0}\n.emd75-seg button{border:1px solid #dfe3e8;background:#fff;border-radius:10px;padding:10px 4px;font-weight:800;font-size:13px;cursor:pointer}\n.emd75-seg button.on{background:#111827;color:#fff;border-color:#111827}\n.emd75-of{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n.emd75-of label{font-size:12px;color:#64748b;display:block}\n.emd75-of input,.emd75-of select{width:100%;box-sizing:border-box;border:1px solid #dfe3e8;border-radius:10px;padding:10px;font-size:15px;background:#fff;margin-top:3px}\n.emd75-orem{margin-top:10px;font-weight:900;font-size:15px}\n.emd75-oact{display:flex;gap:8px;margin-top:10px;flex-wrap:wrap}\n.emd75-oact .emd75-btn{flex:1}\n/* معاينة الفاتورة */\n.emd75-inv{position:fixed;inset:0;z-index:11500;background:rgba(15,23,42,.7);display:none;align-items:center;justify-content:center;padding:14px;direction:rtl}\n.emd75-inv.show{display:flex}\n.emd75-invbox{background:#fff;border-radius:18px;width:min(520px,100%);max-height:94vh;display:flex;flex-direction:column;overflow:hidden}\n.emd75-invbox .img{overflow:auto;padding:12px;background:#eef0f3;flex:1}\n.emd75-invbox img{width:100%;display:block;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.12)}\n.emd75-invbox .a{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:12px}\n.emd75-invbox .a .full{grid-column:1/-1}\n";document.head.appendChild(s)})();

(function(){
'use strict';
if(window.EMDMoneyV75)return;var MH=window.EMDMonH;

var COUR_KEY=MH.lk('emd_v75_couriers'),SINCE_KEY=MH.lk('emd_v75_since'),LEG_KEY=MH.lk('emd_v75_legacy_on'),CUR='ر.ع';
function D(){return MH.db()}
function arr(x){return Array.isArray(x)?x:[]}
function $(id){return document.getElementById(id)}
function num(v){var s=String(v==null?'':v).replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/٫/g,'.').replace(/[,،\s]/g,'');var x=parseFloat(s);return isFinite(x)?x:0}
function esc(s){return (window.__emdEsc||function(t){return String(t==null?'':t).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})})(s)}
function fmt(x){return (Math.round((x||0)*1000)/1000).toFixed(3)}
function pad(x){return (x<10?'0':'')+x}
function dkey(t){return t.getFullYear()+'-'+pad(t.getMonth()+1)+'-'+pad(t.getDate())}
function oid(o){return String(o.id!=null?o.id:(o.orderNumber!=null?o.orderNumber:(o.number||'')))}
function items(o){return arr(o.products||o.items||o.orderItems)}
function qty(x){return num(x.qty!=null?x.qty:x.quantity)||1}
function iname(x){return String(x.name||x.product||x.productName||'منتج')}
function cancelled(o){var s=String(o.status||'').toLowerCase();return s==='cancelled'||s==='canceled'||o.cancelled===true}
function odate(o){var t=new Date(o.orderDate||o.created||o.createdAt||o.date||o.timestamp||0);return isNaN(t)||t.getTime()<=0?null:t}
function firstPos(a){for(var i=0;i<a.length;i++){var v=num(a[i]);if(v>0)return v}return 0}
function store(){return MH.profile()}
function storeName(){return String(store().name||'').trim()||'متجري'}
function waPhone(p){var d=String(p||'').replace(/[٠-٩]/g,function(c){return '٠١٢٣٤٥٦٧٨٩'.indexOf(c)}).replace(/\D/g,'');if(d.indexOf('00')===0)d=d.slice(2);if(d.length===8)d='968'+d;return d}
function openWa(phone,text){var p=waPhone(phone);window.open('https://wa.me/'+(p||'')+'?text='+encodeURIComponent(text||''),'_blank')}
function toast(t){var el=$('emd75Toast');if(!el)return;el.textContent=t;el.style.display='block';clearTimeout(toast.t);toast.t=setTimeout(function(){el.style.display='none'},2200)}
function persist(){MH.save()}
function canSee(){return true}

/* المنتجات: بحث سريع بالاسم أو الكود */
var PM=null,PMsrc=null,PMlen=-1;
function pm(){var ps=arr(D()&&D().products);if(PM&&PMsrc===ps&&PMlen===ps.length)return PM;PM={};PMsrc=ps;PMlen=ps.length;ps.forEach(function(p){var nm=String(p.name||p.productName||'').trim();if(nm)PM['n:'+nm]=p;var k=String(p.id||p.code||'');if(k)PM['i:'+k]=p});return PM}
function prod(x){var m=pm(),k=String(x.productId||x.code||'');return (k&&m['i:'+k])||m['n:'+iname(x).trim()]||null}
function catPrice(p){return p?firstPos([p.salePrice,p.unitPrice,p.price,p.defaultPrice]):0}
function catCost(p){return p?firstPos([p.costPrice,p.purchasePrice,p.cost,p.purchaseCost]):0}
function itemPrice(x){return firstPos([x.unitPrice,x.salePrice,x.price])||catPrice(prod(x))}
function itemCost(x){return firstPos([x.cost,x.purchaseCost,x.costPrice])||catCost(prod(x))}
function autoTotal(o){return items(o).reduce(function(s,x){return s+itemPrice(x)*qty(x)},0)}
function total(o){return MH.total(o)}
function orderCost(o){return MH.cost(o)}

/* التحصيل يبدأ من تاريخ تفعيل الميزة: الطلبات الأقدم تُعتبر محصّلة إلا إذا سُجّل لها دفع */
function since(){return MH.lsGet(SINCE_KEY)||MH.lsGet('emd_v75_since')||dkey(new Date())}
function payState(o){return MH.payState(o)}
function paid(o){return MH.paid(o)}
function remaining(o){return MH.remaining(o)}
function method(o){var m=String(o.paymentMethod||'');if(!m&&String(o.paymentStatus||'')==='cod')m='cod';return m}
var METHOD={transfer:'تحويل بنكي',cash:'نقدًا',cod:'عند الاستلام'};
var STLBL={new:'جديد',waiting:'بانتظار المنتج',ready:'جاهز للتجهيز',packing:'قيد التجهيز',preparing:'قيد التجهيز',shipped:'تم الشحن',out_for_delivery:'مع المندوب',received:'تم الاستلام'};
function find(id){return arr(D().orders).find(function(o){return oid(o)===String(id)})}

/* ===== الحسابات ===== */
function range(k){var now=new Date(),t0=new Date(now.getFullYear(),now.getMonth(),now.getDate()),s,e;
  if(k==='today'){s=t0;e=new Date(t0.getTime()+864e5)}
  else if(k==='week'){s=new Date(t0.getTime()-6*864e5);e=new Date(t0.getTime()+864e5)}
  else if(k==='lastmonth'){s=new Date(now.getFullYear(),now.getMonth()-1,1);e=new Date(now.getFullYear(),now.getMonth(),1)}
  else if(k==='range'){var f0=cur.from?new Date(cur.from+'T00:00:00'):t0,u0=cur.to?new Date(cur.to+'T00:00:00'):f0;if(isNaN(f0))f0=t0;if(isNaN(u0))u0=f0;if(u0<f0){var tmp=f0;f0=u0;u0=tmp}s=f0;e=new Date(u0.getTime()+864e5)}
  else{s=new Date(now.getFullYear(),now.getMonth(),1);e=new Date(now.getFullYear(),now.getMonth()+1,1)}
  return {s:s,e:e,sk:dkey(s),ek:dkey(new Date(e.getTime()-1))}}
function summary(k){
  var r=range(k),sales=0,col=0,cost=0,noPrice=0,noCost=0,count=0;
  arr(D().orders).forEach(function(o){
    if(cancelled(o))return;var t=odate(o);if(!t||t<r.s||t>=r.e)return;
    count++;var tt=total(o);sales+=tt;col+=paid(o);
    if(tt<=0)noPrice++;var c=orderCost(o);if(tt>0&&c<=0)noCost++;cost+=c;
  });
  var ds=MH.dsSummary(r.s,r.e);
  if(ds&&ds.count){count+=ds.count;sales+=ds.sales;col+=ds.col;cost+=ds.cost}
  var ex=arr(D().expenses).filter(function(x){var q=String(x.date||'').slice(0,10);return q>=r.sk&&q<=r.ek}).reduce(function(s,x){return s+num(x.amount)},0);
  return {ds:ds,count:count,sales:sales,col:col,due:Math.max(0,sales-col),cost:cost,ex:ex,profit:sales-cost-ex,noPrice:noPrice,noCost:noCost,r:r};
}
function dues(){
  var now=Date.now();
  return arr(D().orders).filter(function(o){return !cancelled(o)&&total(o)>0&&remaining(o)>0.0005}).map(function(o){var t=odate(o);return {o:o,rem:remaining(o),days:t?Math.floor((now-t.getTime())/864e5):0,t:t?t.getTime():0}}).sort(function(a,b){return a.t-b.t});
}
var COURIER_ST={ready:1,packing:1,preparing:1,shipped:1,out_for_delivery:1};
function courierOrders(){return arr(D().orders).filter(function(o){return !cancelled(o)&&COURIER_ST[String(o.status||'')]})}
function company(o){return String(o.deliveryCompany||o.company||o.shippingCompany||'').trim()||'بدون شركة'}
function couriers(){try{return JSON.parse(MH.lsGet(COUR_KEY)||MH.lsGet('emd_v75_couriers')||'{}')||{}}catch(e){return {}}}

/* ===== النافذة ===== */
var cur={open:false,tab:'sum',period:'today',dueF:'all',comp:null,sel:{}};
function ensure(){
  var ov=$('emd75Ov');if(ov)return ov;
  ov=document.createElement('div');ov.id='emd75Ov';ov.className='emd75-ov';
  ov.innerHTML='<div class="emd75-sheet" role="dialog" aria-label="المالية"><div class="emd75-top"><div class="emd75-hrow"><h2>💰 المالية</h2><button class="emd75-x" id="emd75X" aria-label="إغلاق">✕</button></div>'+
    '<div class="emd75-tabs" id="emd75Tabs"></div></div><div class="emd75-body" id="emd75Body"></div></div>';
  document.body.appendChild(ov);
  $('emd75X').onclick=close;
  ov.addEventListener('click',function(e){if(e.target===ov)close()});
  ov.addEventListener('click',onAction);
  ov.addEventListener('change',onChange);
  return ov;
}
function open(tab){
  if(!canSee()){alert('المالية متاحة للمدير والمشرف فقط.');return}
  ensure();cur.open=true;if(tab)cur.tab=tab;render();$('emd75Ov').classList.add('show');
}
function close(){var ov=$('emd75Ov');if(ov)ov.classList.remove('show');cur.open=false}
var rT=null;function scheduleRender(){clearTimeout(rT);rT=setTimeout(function(){if(cur.open)render()},150)}

function tabsHtml(){
  var dn=dues().length,cn=courierOrders().filter(function(o){return /shipped|out_for_delivery/.test(o.status)}).length;
  var T=[['sum','📊 الملخص',0],['led','🧾 الفواتير',0],['due','💵 التحصيل',dn],['cour','🚚 المندوب',cn],['exp','💸 المصروفات',0],['price','🏷️ الأسعار',0]];
  return T.map(function(t){return '<button class="emd75-tab'+(cur.tab===t[0]?' on':'')+'" data-a="tab" data-v="'+t[0]+'">'+t[1]+(t[2]?'<span class="c">'+t[2]+'</span>':'')+'</button>'}).join('');
}
function render(){
  pm();$('emd75Tabs').innerHTML=tabsHtml();
  var b=$('emd75Body'),h='';
  if(cur.tab==='sum')h=sumHtml();else if(cur.tab==='due')h=dueHtml();else if(cur.tab==='cour')h=courHtml();else if(cur.tab==='exp')h=expHtml();else if(cur.tab==='led')h=ledHtml();else h=priceHtml();
  var st=b.scrollTop;b.innerHTML=h;b.scrollTop=st;
}

function periodChips(){var P=[['today','اليوم'],['week','آخر 7 أيام'],['month','هذا الشهر'],['lastmonth','الشهر الماضي'],['range','📅 من تاريخ إلى تاريخ']];return '<div class="emd75-chips">'+P.map(function(p){return '<button class="emd75-chip'+(cur.period===p[0]?' on':'')+'" data-a="period" data-v="'+p[0]+'">'+p[1]+'</button>'}).join('')+'</div>'+(cur.period==='range'?'<div class="emd112-bar" style="margin-top:0"><label class="emd112-card"><span>من تاريخ</span><input type="date" id="emd115From" value="'+esc(cur.from||'')+'" style="width:100%;border:0;font:inherit;font-size:16px;font-weight:800;background:transparent"></label><label class="emd112-card"><span>إلى تاريخ</span><input type="date" id="emd115To" value="'+esc(cur.to||'')+'" style="width:100%;border:0;font:inherit;font-size:16px;font-weight:800;background:transparent"></label></div>':'')}
function sumHtml(){
  var s=summary(cur.period),h=periodChips();
  h+='<div class="emd75-big"><small>صافي الربح التقديري</small><b class="'+(s.profit<0?'neg':'')+'">'+fmt(s.profit)+' '+CUR+'</b>'+
    '<div class="eq">المبيعات '+fmt(s.sales)+' − تكلفة المنتجات '+fmt(s.cost)+' − المصروفات '+fmt(s.ex)+'</div></div>';
  h+='<div class="emd75-grid"><div class="emd75-card"><small>المبيعات · '+(s.count-(s.ds?s.ds.count:0))+' طلب'+(s.ds&&s.ds.count?' + '+s.ds.count+' بيع مباشر':'')+'</small><b>'+fmt(s.sales)+'</b></div>'+
    '<div class="emd75-card good"><small>المحصّل</small><b>'+fmt(s.col)+'</b></div>'+
    '<div class="emd75-card warn"><small>غير محصّل</small><b>'+fmt(s.due)+'</b></div>'+
    '<div class="emd75-card"><small>المصروفات</small><b>'+fmt(s.ex)+'</b></div></div>';
  if(s.ds&&s.ds.count)h+='<div class="emd75-note" style="background:#ecfdf5;color:#065f46">🛒 منها بيع مباشر: '+fmt(s.ds.sales)+' من '+s.ds.count+' فاتورة · محصّل '+fmt(s.ds.col)+' · متبقٍ '+fmt(s.ds.due)+' '+CUR+'<button data-a="openDirect">فتح</button></div>';
  if(s.noPrice)h+='<div class="emd75-note">⚠️ '+s.noPrice+' طلب بدون سعر، فما دخلت في المبيعات. حدّد أسعار المنتجات مرة وحدة وتنحسب تلقائيًا.<button data-a="tab" data-v="price">🏷️ الأسعار</button></div>';
  if(s.noCost)h+='<div class="emd75-note">ℹ️ '+s.noCost+' طلب منتجاته بدون تكلفة شراء، فالربح يطلع أعلى من الحقيقي.<button data-a="tab" data-v="price">أضف التكلفة</button></div>';
  if(!s.count)h+='<div class="emd75-empty">ما فيه طلبات في هذي الفترة.</div>';
  var all=dues(),tot=all.reduce(function(a,x){return a+x.rem},0);
  if(all.length)h+='<div class="emd75-note" style="background:#eef6ff;color:#1e3a8a">💵 إجمالي المبالغ اللي لك عند العملاء: <b>'+fmt(tot)+' '+CUR+'</b> من '+all.length+' طلب.<button data-a="tab" data-v="due">عرض</button></div>';
  return h;
}
function dueHtml(){
  var all=dues(),f=cur.dueF,list=all.filter(function(x){if(f==='cour')return method(x.o)==='cod'&&/shipped|out_for_delivery|received/.test(x.o.status);if(f==='late')return x.days>=3;return true});
  var tot=list.reduce(function(a,x){return a+x.rem},0);
  var h='<div class="emd75-big"><small>مبالغ لم تُحصّل بعد</small><b>'+fmt(tot)+' '+CUR+'</b><div class="eq">'+list.length+' طلب</div></div>';
  h+='<div class="emd75-chips">'+[['all','الكل'],['cour','مع المندوب'],['late','متأخر 3 أيام+']].map(function(p){return '<button class="emd75-chip'+(f===p[0]?' on':'')+'" data-a="dueF" data-v="'+p[0]+'">'+p[1]+'</button>'}).join('')+'</div>';
  if(!list.length)h+='<div class="emd75-empty">✅ ما عليك مبالغ معلّقة هنا.</div>';
  else h+='<div class="emd75-list">'+list.slice(0,300).map(function(x){var o=x.o,id=oid(o),m=method(o),st=String(o.status||'');
    return '<div class="emd75-row"><div class="t"><div><b>'+esc(o.name||'بدون اسم')+'</b>'+(x.days>=3?'<span class="emd75-tag late">'+x.days+' يوم</span>':'')+(m==='cod'&&/shipped|out_for_delivery|received/.test(st)?'<span class="emd75-tag cour">مع المندوب</span>':'')+
      '<div class="m">'+esc(id)+' · '+esc(STLBL[st]||st||'')+(m?' · '+esc(METHOD[m]||m):'')+(payState(o)==='partial'?' · دفع '+fmt(paid(o)):'')+'</div></div><div class="amt">'+fmt(x.rem)+'</div></div>'+
      '<div class="a"><button class="emd75-btn ok sm" data-a="markPaid" data-v="'+esc(id)+'">✅ استلمت المبلغ</button><button class="emd75-btn wa sm" data-a="remind" data-v="'+esc(id)+'">💬 تذكير</button><button class="emd75-btn ghost sm" data-a="invoice" data-v="'+esc(id)+'">🧾 فاتورة</button><button class="emd75-btn ghost sm" data-a="openOrder" data-v="'+esc(id)+'">التفاصيل</button></div></div>'}).join('')+'</div>';
  var lgOn=MH.legacyOn();
  h+='<div class="emd75-note" style="margin-top:12px;background:#f1f5f9;color:#475569">التحصيل يدوي: الطلب يُحسب غير محصّل حتى تسجّل له دفعة. <label style="display:flex;gap:8px;align-items:center;margin-top:6px;font-weight:700"><input type="checkbox" id="emd75LegacyOn"'+(lgOn?' checked':'')+' style="width:20px;height:20px"> اعتبار الطلبات القديمة (بدون دفعة مسجّلة) محصّلة تلقائيًا</label>'+(lgOn?'<label style="display:inline-flex;gap:6px;align-items:center;margin-top:6px">الأقدم من: <input type="date" id="emd75Since" value="'+esc(since())+'" style="border:1px solid #dfe3e8;border-radius:8px;padding:4px"></label>':'')+'</div>';
  return h;
}
function courHtml(){
  var os=courierOrders(),groups={};os.forEach(function(o){var c=company(o);(groups[c]=groups[c]||[]).push(o)});
  var names=Object.keys(groups).sort(function(a,b){return groups[b].length-groups[a].length});
  if(!names.length)return '<div class="emd75-empty">ما فيه طلبات جاهزة أو مشحونة الحين.</div>';
  if(!cur.comp||!groups[cur.comp])cur.comp=names[0];
  var list=groups[cur.comp],sel=cur.sel[cur.comp];
  if(!sel){sel={};list.forEach(function(o){if(/shipped|out_for_delivery/.test(o.status))sel[oid(o)]=1});cur.sel[cur.comp]=sel}
  var cs=couriers(),ph=cs[cur.comp]||'';
  var picked=list.filter(function(o){return sel[oid(o)]}),toCollect=picked.reduce(function(a,o){return a+remaining(o)},0);
  var h='<div class="emd75-chips">'+names.map(function(c){return '<button class="emd75-chip'+(c===cur.comp?' on':'')+'" data-a="comp" data-v="'+esc(c)+'">'+esc(c)+' ('+groups[c].length+')</button>'}).join('')+'</div>';
  h+='<div class="emd75-form" style="margin-bottom:10px"><input class="full" id="emd75CourPhone" inputmode="tel" placeholder="رقم واتساب المندوب / '+esc(cur.comp)+' (يُحفظ)" value="'+esc(ph)+'"></div>';
  h+='<div class="emd75-list">'+list.map(function(o){var id=oid(o),r=remaining(o);
    return '<label class="emd75-row emd75-check"><input type="checkbox" data-a="pick" data-v="'+esc(id)+'"'+(sel[id]?' checked':'')+'><div style="flex:1"><div class="t"><b>'+esc(o.name||'بدون اسم')+'</b><span class="amt" style="font-size:15px">'+(r>0?fmt(r):'✅ مدفوع')+'</span></div>'+
      '<div class="m">📞 '+esc(o.phone||'—')+' · 📍 '+esc(o.place||o.location||o.address||'—')+'<br>'+esc(id)+' · '+esc(STLBL[o.status]||o.status||'')+'</div></div></label>'}).join('')+'</div>';
  h+='<div class="emd75-sticky"><button class="emd75-btn wa" data-a="sendCour">📤 إرسال للمندوب ('+picked.length+')</button><button class="emd75-btn ghost" data-a="copyCour">📋 نسخ</button></div>'+
    '<div style="text-align:center;font-size:13px;color:#475569">💵 المطلوب تحصيله: <b>'+fmt(toCollect)+' '+CUR+'</b></div>';
  return h;
}
function courText(){
  var c=cur.comp,list=courierOrders().filter(function(o){return company(o)===c&&cur.sel[c]&&cur.sel[c][oid(o)]});
  var tot=0,d=new Date(),lines=['🚚 قائمة توصيل — '+storeName(),'📅 '+d.toLocaleDateString('ar-OM',{weekday:'long',day:'numeric',month:'long'}),'━━━━━━━━━━'];
  list.forEach(function(o,i){var r=remaining(o);tot+=r;
    lines.push((i+1)+') '+(o.name||'بدون اسم')+' — '+(o.phone||''));
    lines.push('📍 '+(o.place||o.location||o.address||'—'));
    lines.push(r>0?'💰 المطلوب: '+fmt(r)+' '+CUR:'✅ مدفوع — لا تحصيل');
    lines.push('🔖 '+oid(o));lines.push('');});
  lines.push('━━━━━━━━━━');lines.push('عدد الطلبات: '+list.length);lines.push('💵 إجمالي التحصيل: '+fmt(tot)+' '+CUR);
  return {text:lines.join('\n'),count:list.length};
}
/* ===== V112: تصنيفات المصروفات المخصصة + تعديل المصروف + كشف الفواتير ===== */
var DEFCATS=['تغليف','توصيل','إعلانات','إيجار','رواتب','أخرى'];
function cats(){var d=D();var c=d&&Array.isArray(d.expenseCats)?d.expenseCats.map(function(x){return String(x||'').trim()}).filter(Boolean):[];return c.length?c:DEFCATS.slice()}
function saveCats(c){var d=D();d.expenseCats=c;persist()}
function catOptions(sel,plain){var c=cats();if(sel&&c.indexOf(sel)<0)c=c.concat([sel]);return c.map(function(x){return '<option'+(x===sel?' selected':'')+'>'+esc(x)+'</option>'}).join('')+(plain?'':'<option value="__new__">➕ تصنيف جديد…</option>')}
window.EMDExpCatsV112={list:cats,options:function(sel,plain){return catOptions(sel,plain)}};
function expHtml(){
  var r=range(cur.period),h=periodChips();
  var xs=arr(D().expenses).filter(function(x){var q=String(x.date||'').slice(0,10);return q>=r.sk&&q<=r.ek}).sort(function(a,b){return String(b.date).localeCompare(String(a.date))});
  var tot=xs.reduce(function(a,x){return a+num(x.amount)},0);
  var ed=cur.editExp?arr(D().expenses).find(function(x){return String(x.id||'')===String(cur.editExp)}):null;if(cur.editExp&&!ed)cur.editExp=null;
  if(ed)h+='<div class="emd112-edit">✏️ تعدّل مصروف: «'+esc(ed.name||'')+'» — غيّر ما تريد ثم اضغط حفظ التعديل.</div>';
  h+='<div class="emd75-form"><input id="emd75ExName" placeholder="وش المصروف؟ مثل: تغليف" value="'+esc(ed?ed.name||'':'')+'"><input id="emd75ExAmt" inputmode="decimal" placeholder="المبلغ '+CUR+'" value="'+esc(ed?String(ed.amount):'')+'">'+
    '<select id="emd75ExCat">'+catOptions(ed?ed.category:'')+'</select><input id="emd75ExDate" type="date" value="'+esc(ed?String(ed.date||'').slice(0,10):dkey(new Date()))+'">'+
    '<button class="emd75-btn full" data-a="addExp">'+(ed?'💾 حفظ التعديل':'➕ إضافة مصروف')+'</button>'+(ed?'<button class="emd75-btn ghost full" data-a="cancelEdit">إلغاء التعديل</button>':'')+
    '<button class="emd75-btn ghost full" data-a="catMgr">⚙️ '+(cur.catMgr?'إغلاق إدارة التصنيفات':'إدارة تصنيفات المصروفات')+'</button></div>';
  if(cur.catMgr){var c=cats();
    h+='<div class="emd112-cats"><div style="font-weight:900;margin-bottom:4px">⚙️ تصنيفاتك (غيّر الاسم مباشرة)</div>'+c.map(function(x,i){return '<div class="emd112-cat"><input data-ci="'+i+'" value="'+esc(x)+'"><button class="emd75-btn ghost sm" data-a="catDel" data-v="'+i+'" aria-label="حذف">🗑️</button></div>'}).join('')+
      '<div class="emd112-cat"><input id="emd112NewCat" placeholder="تصنيف جديد، مثل: صيانة، مواصلات…"><button class="emd75-btn sm" data-a="catAdd">➕ إضافة</button></div>'+
      '<button class="emd75-btn ghost sm" data-a="catReset" style="margin-top:6px">↩︎ استرجاع التصنيفات الافتراضية</button><div class="m" style="font-size:12px;color:#64748b;margin-top:6px">تغيير الاسم يحدّث المصروفات القديمة. وحذف تصنيف لا يحذف مصروفاتك.</div></div>'}
  var by={};xs.forEach(function(x){var k=x.category||'بدون تصنيف';by[k]=(by[k]||0)+num(x.amount)});
  var bk=Object.keys(by).sort(function(a,b){return by[b]-by[a]});
  if(bk.length>1)h+='<div class="emd112-by">'+bk.map(function(k){return '<div class="r"><span>'+esc(k)+'</span><span>'+fmt(by[k])+' '+CUR+'</span></div>'}).join('')+'</div>';
  h+='<div class="emd75-sec">المصروفات · '+fmt(tot)+' '+CUR+'</div>';
  h+=xs.length?'<div class="emd75-list">'+xs.map(function(x){return '<div class="emd75-row"><div class="t"><div><b>'+esc(x.name||'مصروف')+'</b><div class="m">'+esc(x.category||'')+' · '+esc(String(x.date||'').slice(0,10))+'</div></div><div style="display:flex;gap:8px;align-items:center"><span class="amt">'+fmt(num(x.amount))+'</span><button class="emd75-btn ghost sm" data-a="editExp" data-v="'+esc(x.id||'')+'" aria-label="تعديل">✏️</button><button class="emd75-btn ghost sm" data-a="delExp" data-v="'+esc(x.id||'')+'" aria-label="حذف">🗑️</button></div></div></div>'}).join('')+'</div>':'<div class="emd75-empty">ما فيه مصروفات في هذي الفترة.</div>';
  return h;
}
/* ---------- كشف الفواتير ---------- */
var PL={today:'اليوم',week:'آخر 7 أيام',month:'هذا الشهر',lastmonth:'الشهر الماضي'};
function plabel(){if(cur.period==='range')return 'من '+(cur.from||'')+' إلى '+(cur.to||cur.from||'');return PL[cur.period]||cur.period}
var MLBL={cash:'💵 نقدًا',transfer:'🏦 تحويل بنكي',cod:'📦 عند الاستلام',card:'💳 بطاقة',other:'🔁 وسيلة أخرى','':'❔ غير محدد'};
function ftime(t){var h=t.getHours(),m=t.getMinutes();return (h%12||12)+':'+pad(m)+' '+(h>=12?'م':'ص')}
function fdt(t){return dkey(t)+' · '+ftime(t)}
function ledRows(){
  var r=range(cur.period),f=cur.ledM||'all',out=[];
  arr(cur.ledS==='ds'?[]:D().orders).forEach(function(o){
    if(cancelled(o))return;var t=odate(o);if(!t||t<r.s||t>=r.e)return;
    var m=method(o);if(f!=='all'&&m!==(f==='none'?'':f))return;
    var tt=total(o);if(!(tt>0))return;
    var pt=null;if(o.paidAt){var q=new Date(o.paidAt);if(!isNaN(q))pt=q}
    out.push({o:o,id:oid(o),t:t,pt:pt,total:tt,paid:paid(o),rem:remaining(o),st:payState(o),m:m});
  });
  try{var DV=cur.ledS==='ord'?null:MH.direct();if(DV)DV.list().forEach(function(sl){
    if(DV.statusOf(sl)==='void')return;var t=new Date(sl.at);if(isNaN(t)||t<r.s||t>=r.e)return;
    var p0=sl.payments&&sl.payments[0],m=p0?p0.method:'';
    if(f!=='all'&&m!==(f==='none'?'':f))return;
    var nt=DV.netTotal(sl);if(!(nt>0))return;var pd=Math.min(DV.paidOf(sl),nt),rm=DV.remainingOf(sl);
    var ptm=p0&&pd>0?new Date(p0.at):null;
    out.push({ds:sl,o:{name:(sl.customer&&sl.customer.name)||'بيع مباشر'},id:sl.id,t:t,pt:ptm&&!isNaN(ptm)?ptm:null,total:nt,paid:pd,rem:rm,st:rm<=0.0005?'paid':(pd>0.0005?'partial':'unpaid'),m:m});
  })}catch(e){}
  out.sort(function(a,b){return b.t-a.t});return out;
}
function ledHtml(){
  var rows=ledRows(),f=cur.ledM||'all';
  var sum=rows.reduce(function(a,x){a.t+=x.total;a.p+=x.paid;a.r+=x.rem;return a},{t:0,p:0,r:0});
  var bm={};rows.forEach(function(x){var k=x.m||'';var e=bm[k]||(bm[k]={n:0,v:0});e.n++;e.v+=x.paid});
  var h=periodChips();
  h+='<div class="emd75-chips">'+[['all','📋 الكل'],['ord','📦 الطلبات فقط'],['ds','🛒 البيع المباشر فقط']].map(function(p){return '<button class="emd75-chip'+((cur.ledS||'all')===p[0]?' on':'')+'" data-a="ledS" data-v="'+p[0]+'">'+p[1]+'</button>'}).join('')+'</div>';
  h+='<div class="emd75-chips">'+[['all','الكل'],['cash','💵 نقدًا'],['transfer','🏦 تحويل'],['cod','📦 عند الاستلام'],['card','💳 بطاقة'],['other','🔁 أخرى'],['none','❔ غير محدد']].map(function(p){return '<button class="emd75-chip'+(f===p[0]?' on':'')+'" data-a="ledM" data-v="'+p[0]+'">'+p[1]+'</button>'}).join('')+'</div>';
  h+='<div class="emd112-bar"><div class="emd112-card"><span>عدد الفواتير</span><b>'+rows.length+'</b></div><div class="emd112-card"><span>إجمالي الفواتير</span><b>'+fmt(sum.t)+' '+CUR+'</b></div><div class="emd112-card"><span>المحصّل</span><b style="color:#15803d">'+fmt(sum.p)+' '+CUR+'</b></div><div class="emd112-card"><span>المتبقي</span><b style="color:#b45309">'+fmt(sum.r)+' '+CUR+'</b></div></div>';
  var ks=Object.keys(bm);
  if(ks.length)h+='<div class="emd112-m">'+ks.map(function(k){return '<span class="p">'+(MLBL[k]||k)+': '+fmt(bm[k].v)+' '+CUR+' ('+bm[k].n+')</span>'}).join('')+'</div>';
  h+='<div class="emd75-sticky" style="position:static;display:flex;gap:8px;margin:6px 0"><button class="emd75-btn wa" data-a="sendLed">📤 إرسال الكشف واتساب</button><button class="emd75-btn ghost" data-a="copyLed">📋 نسخ</button></div>';
  if(!rows.length)return h+'<div class="emd75-empty">ما فيه فواتير في هذي الفترة.</div>';
  h+='<div class="emd75-list">'+rows.slice(0,200).map(function(x){
    var stl=x.st==='paid'?'<span style="color:#15803d">✅ مدفوع</span>':x.st==='partial'?'<span style="color:#b45309">🌓 جزئي · دفع '+fmt(x.paid)+'</span>':'<span style="color:#64748b">⏳ غير مدفوع</span>';
    return '<div class="emd75-row" data-a="'+(x.ds?'openDs':'openOrder')+'" data-v="'+esc(x.id)+'" style="cursor:pointer"><div class="t"><div><b>'+(x.ds?'🛒 بيع مباشر '+esc(x.id):'🧾 فاتورة '+esc(x.id))+' · '+esc(x.o.name||'بدون اسم')+'</b><div class="m">🗓️ '+esc(fdt(x.t))+'</div><div class="m">'+(MLBL[x.m]||x.m)+(x.pt&&x.st!=='unpaid'?' · دُفعت '+esc(fdt(x.pt)):'')+'</div></div><div style="text-align:left"><span class="amt">'+fmt(x.total)+' '+CUR+'</span><div class="m">'+stl+'</div><div class="m"><button class="emd75-btn wa sm" data-a="'+(x.ds?'dsInvoice':'invoice')+'" data-v="'+esc(x.id)+'">🧾 إرسال الفاتورة</button></div></div></div></div>'}).join('')+'</div>'+(rows.length>200?'<div class="emd75-empty">يعرض أحدث 200 فاتورة. استخدم الفلاتر لتضييق الفترة.</div>':'');
  return h;
}
function ledText(){
  var rows=ledRows(),sum=rows.reduce(function(a,x){a.t+=x.total;a.p+=x.paid;a.r+=x.rem;return a},{t:0,p:0,r:0});
  var L=['🧾 كشف الفواتير — '+storeName(),'الفترة: '+plabel()+(cur.ledS==='ds'?' · البيع المباشر':cur.ledS==='ord'?' · الطلبات':''),''];
  rows.forEach(function(x){L.push((x.ds?'🛒 ':'')+x.id+' | '+fmt(x.total)+' '+CUR+' | '+String(MLBL[x.m]||'').replace(/^\S+\s/,'')+' | '+fdt(x.t)+' | '+(x.st==='paid'?'مدفوع':x.st==='partial'?'جزئي ('+fmt(x.paid)+')':'غير مدفوع'))});
  L.push('','عدد الفواتير: '+rows.length,'الإجمالي: '+fmt(sum.t)+' '+CUR,'المحصّل: '+fmt(sum.p)+' '+CUR,'المتبقي: '+fmt(sum.r)+' '+CUR);
  return L.join('\n');
}
/* ---------- إجراءات V112 ---------- */
function renameCat(i,nv){var c=cats();var old=c[i];nv=String(nv||'').trim();
  if(!nv){toast('الاسم فاضي');return false}
  if(c.some(function(x,k){return k!==i&&x===nv})){toast('هذا التصنيف موجود');return false}
  c[i]=nv;saveCats(c);arr(D().expenses).forEach(function(x){if(x.category===old)x.category=nv});persist();toast('💾 تم تغيير الاسم');return true}
function onAction112(a,v,b){
  if(a==='catMgr'){cur.catMgr=!cur.catMgr;render();return true}
  if(a==='catAdd'){var inp=$('emd112NewCat'),nv=String(inp&&inp.value||'').trim();if(!nv){toast('اكتب اسم التصنيف');return true}
    var c=cats();if(c.indexOf(nv)>=0){toast('هذا التصنيف موجود');return true}c.push(nv);saveCats(c);toast('➕ أضفت «'+nv+'»');render();return true}
  if(a==='catDel'){var c2=cats(),i=+v;if(c2.length<=1){toast('لازم يبقى تصنيف واحد على الأقل');return true}
    if(!confirm('حذف تصنيف «'+c2[i]+'»؟ مصروفاتك القديمة ما تنحذف.'))return true;c2.splice(i,1);saveCats(c2);render();return true}
  if(a==='catReset'){if(!confirm('استرجاع التصنيفات الافتراضية؟'))return true;saveCats(DEFCATS.slice());render();return true}
  if(a==='editExp'){cur.editExp=v;render();var bd=$('emd75Body');if(bd)bd.scrollTop=0;return true}
  if(a==='cancelEdit'){cur.editExp=null;render();return true}
  if(a==='addExp'&&cur.editExp){var ex=arr(D().expenses).find(function(x){return String(x.id||'')===String(cur.editExp)});
    var am=num($('emd75ExAmt').value);if(!(am>0)){toast('اكتب مبلغ المصروف');return true}
    if(ex){var cv=$('emd75ExCat').value;ex.name=($('emd75ExName').value||'').trim()||cv;ex.category=cv==='__new__'?ex.category:cv;ex.amount=am;ex.date=$('emd75ExDate').value||ex.date}
    cur.editExp=null;persist();toast('💾 تم حفظ التعديل');render();return true}
  if(a==='ledM'){cur.ledM=v;render();return true}
  if(a==='ledS'){cur.ledS=v==='all'?null:v;render();return true}
  if(a==='sendLed'){var tx=ledText();openWa('',tx);return true}
  if(a==='copyLed'){copy(ledText());return true}
  return false}
function onChange112(t){
  if(t.id==='emd115From'||t.id==='emd115To'){if(t.id==='emd115From')cur.from=t.value;else cur.to=t.value;render();return true}
  if(t.id==='emd75ExCat'&&t.value==='__new__'){var nv=String(prompt('اسم التصنيف الجديد:')||'').trim();
    if(nv){var c=cats();if(c.indexOf(nv)<0){c.push(nv);saveCats(c)}t.innerHTML=catOptions(nv)}else{t.innerHTML=catOptions(cats()[0])}return true}
  if(t.matches&&t.matches('input[data-ci]')){var i=+t.getAttribute('data-ci');if(!renameCat(i,t.value)){render()}else{render()}return true}
  return false}

function priceHtml(){
  var ps=arr(D().products);
  if(!ps.length)return '<div class="emd75-empty">ما فيه منتجات محفوظة بعد.</div>';
  var h='<div class="emd75-note" style="background:#f1f5f9;color:#475569">حدّد سعر البيع مرة وحدة، وكل طلب جديد ياخذ السعر تلقائيًا. التكلفة اختيارية، لكن بدونها ما نقدر نحسب الربح الحقيقي.</div>';
  h+='<div class="emd75-pr h"><div>المنتج</div><div>سعر البيع</div><div>التكلفة</div></div><div class="emd75-list" style="gap:6px">';
  h+=ps.map(function(p,i){var s=catPrice(p),c=catCost(p);return '<div class="emd75-pr"><div style="display:flex;gap:8px;align-items:center"><button type="button" class="emd75-pimg" data-a="pimg" data-v="'+i+'" title="صورة المنتج">'+(p.image?'<img src="'+esc(p.image)+'" alt="">':'📷')+'</button><b style="font-size:14px">'+esc(p.name||p.productName||'منتج')+'</b></div><input data-pi="'+i+'" data-k="s" inputmode="decimal" value="'+(s?fmt(s):'')+'" placeholder="0.000"><input data-pi="'+i+'" data-k="c" inputmode="decimal" value="'+(c?fmt(c):'')+'" placeholder="0.000"></div>'}).join('');
  h+='</div><div class="emd75-sticky"><button class="emd75-btn" data-a="savePrices">💾 حفظ الأسعار</button></div>';
  return h;
}

/* ===== الأفعال ===== */
function markPaid(o,amount){
  var t=total(o);freezeOne(o);
  if(amount==null||amount>=t-0.0005){o.paymentStatus='paid';o.paidAmount=t}else{o.paymentStatus=amount>0?'partial':'unpaid';o.paidAmount=amount}
  o.paidAt=new Date().toISOString();
  if(!Array.isArray(o.history))o.history=[];o.history.push({type:'payment',detail:'تسجيل دفع '+fmt(o.paidAmount)+' '+CUR,at:o.paidAt});
}
function freezeOne(o){items(o).forEach(function(x){if(!firstPos([x.unitPrice,x.salePrice,x.price])){var v=catPrice(prod(x));if(v>0)x.unitPrice=v}})}
function remindText(o){var r=remaining(o);return 'السلام عليكم '+(o.name||'')+' 🌷\nنذكّرك بمبلغ طلبك رقم '+oid(o)+' من '+storeName()+': '+fmt(r)+' '+CUR+'.\nشاكرين لك تعاملك معنا 🙏'}
function onAction(e){
  var b=e.target.closest('[data-a]');if(!b||!$('emd75Ov').contains(b))return;
  var a=b.getAttribute('data-a'),v=b.getAttribute('data-v');
  if(a==='pick')return;
  if(a==='tab'){cur.tab=v;render();$('emd75Body').scrollTop=0;return}
  if(a==='period'){cur.period=v;if(v==='range'&&!cur.from){cur.from=cur.to=dkey(new Date())}render();return}
  if(a==='dueF'){cur.dueF=v;render();return}
  if(a==='comp'){cur.comp=v;render();return}
  if(a==='markPaid'){var o=find(v);if(!o)return;markPaid(o);persist();toast('✅ تم تسجيل الدفع '+v);render();return}
  if(a==='invoice'){var oi=find(v);if(oi)invoice(oi);return}
  if(a==='dsInvoice'){try{MH.direct().invoiceImage(v)}catch(e){}return}
  if(a==='remind'){var o2=find(v);if(o2)openWa(o2.phone,remindText(o2));return}
  if(a==='openOrder'){close();MH.openOrder(v);return}
  if(a==='openDirect'){try{MH.direct().open('list')}catch(e){}return}
  if(a==='openDs'){try{MH.direct().open('list',v)}catch(e){}return}
  if(onAction112(a,v,b))return;
  if(a==='addExp'){var nm=($('emd75ExName').value||'').trim(),am=num($('emd75ExAmt').value);if(!(am>0)){toast('اكتب مبلغ المصروف');$('emd75ExAmt').focus();return}
    var d=D();if(!Array.isArray(d.expenses))d.expenses=[];d.expenses.push({id:'E'+Date.now(),name:nm||$('emd75ExCat').value,category:$('emd75ExCat').value,amount:am,date:$('emd75ExDate').value||dkey(new Date())});persist();toast('➕ تمت إضافة المصروف');render();return}
  if(a==='delExp'){if(!confirm('حذف هذا المصروف؟'))return;var d2=D();d2.expenses=arr(d2.expenses).filter(function(x){return String(x.id||'')!==v});persist();render();return}
  if(a==='pimg'){close();MH.editProduct(+v);return}
  if(a==='savePrices'){var ps=arr(D().products);document.querySelectorAll('#emd75Body .emd75-pr input[data-pi]').forEach(function(inp){var p=ps[+inp.getAttribute('data-pi')];if(!p)return;var val=num(inp.value);
      if(inp.getAttribute('data-k')==='s'){if(val>0||inp.value===''){p.salePrice=val;p.defaultPrice=val;p.unitPrice=val;p.price=val}}else{if(val>0||inp.value===''){p.costPrice=val;p.purchasePrice=val}}});
    PM=null;persist();toast('💾 تم حفظ الأسعار');render();return}
  if(a==='sendCour'||a==='copyCour'){var ct=courText();if(!ct.count){toast('اختر طلب واحد على الأقل');return}
    if(a==='sendCour'){openWa(couriers()[cur.comp]||'',ct.text)}else{copy(ct.text)}return}
}
function onChange(e){
  var t=e.target;
  if(onChange112(t))return;
  if(t.matches('input[data-a="pick"]')){var s=cur.sel[cur.comp]=cur.sel[cur.comp]||{};var id=t.getAttribute('data-v');if(t.checked)s[id]=1;else delete s[id];render();return}
  if(t.id==='emd75CourPhone'){var cs=couriers();cs[cur.comp]=t.value.trim();MH.lsSet(COUR_KEY,JSON.stringify(cs));toast('💾 تم حفظ رقم المندوب');return}
  if(t.id==='emd75LegacyOn'){MH.lsSet(LEG_KEY,t.checked?'1':'0');MH.payReset();render();scheduleStrip();return}
  if(t.id==='emd75Since'&&t.value){MH.lsSet(SINCE_KEY,t.value);MH.payReset();render();scheduleStrip();return}
}
function copy(text){
  var done=function(){toast('📋 تم النسخ')};
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(done,function(){fallback()})}else fallback();
  function fallback(){var ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done()}catch(x){}ta.remove()}
}

/* ===== الفاتورة كصورة ===== */
function invoice(o){
  pm();var prof=store(),W=1080,its=items(o),rowH=70,H=870+its.length*rowH;
  var cv=document.createElement('canvas');cv.width=W;cv.height=H;var c=cv.getContext('2d');
  var F='Tahoma, "Segoe UI", Arial, sans-serif',R=W-70,Lx=70;
  function txt(s,x,y,size,weight,color,align){c.font=(weight||'normal')+' '+size+'px '+F;c.fillStyle=color||'#111827';c.textAlign=align||'right';c.direction='rtl';c.fillText(String(s==null?'':s),x,y)}
  c.fillStyle='#ffffff';c.fillRect(0,0,W,H);
  var acc=MH.accent()||'#111827',lim=MH.logoImg();
  c.fillStyle=acc;c.fillRect(0,0,W,190);
  var nx=R;if(lim){try{var ls=130,lx=R-ls,ly=30;c.save();c.beginPath();if(c.roundRect)c.roundRect(lx,ly,ls,ls,24);else c.rect(lx,ly,ls,ls);c.fillStyle='#ffffff';c.fill();c.clip();var sc=Math.max(ls/lim.width,ls/lim.height),iw=lim.width*sc,ih=lim.height*sc;c.drawImage(lim,lx+(ls-iw)/2,ly+(ls-ih)/2,iw,ih);c.restore();nx=R-ls-28}catch(e){}}
  txt(storeName(),nx,92,52,'bold','#ffffff');
  var contact=[prof.whatsapp||prof.phone,prof.location].filter(Boolean).join('  ·  ');
  if(contact)txt(contact,nx,146,28,'normal','rgba(255,255,255,.75)');
  txt('فاتورة',Lx,92,46,'bold','#ffffff','left');
  txt(oid(o),Lx,146,30,'normal','#cbd5e1','left');
  var y=260,dt=odate(o)||new Date();
  txt('العميل',R,y,26,'normal','#64748b');txt('التاريخ',Lx+260,y,26,'normal','#64748b','left');
  y+=46;txt(o.name||'—',R,y,34,'bold');txt(dt.toLocaleDateString('ar-OM',{year:'numeric',month:'long',day:'numeric'}),Lx+260,y,30,'normal','#111827','left');
  y+=42;txt([o.phone,o.place||o.location].filter(Boolean).join('  ·  '),R,y,28,'normal','#475569');
  y+=60;c.fillStyle='#f1f5f9';c.fillRect(50,y-44,W-100,64);
  txt('المنتج',R,y,26,'bold','#334155');txt('الكمية',560,y,26,'bold','#334155','center');txt('السعر',390,y,26,'bold','#334155','center');txt('المجموع',Lx+10,y,26,'bold','#334155','left');
  y+=30;
  its.forEach(function(x){var p=itemPrice(x),q=qty(x);y+=rowH;
    var nm=iname(x);if(nm.length>26)nm=nm.slice(0,25)+'…';
    txt(nm,R,y-22,30,'normal');txt(q,560,y-22,30,'normal','#111827','center');txt(p?fmt(p):'—',390,y-22,30,'normal','#111827','center');txt(p?fmt(p*q):'—',Lx+10,y-22,30,'bold','#111827','left');
    c.fillStyle='#e2e8f0';c.fillRect(50,y,W-100,2)});
  var t=total(o),pd=paid(o),rm=remaining(o);
  if(num(o.discount)>0&&!(num(o.total)>0)){y+=60;txt('الخصم',R,y,28,'normal','#475569');txt('− '+fmt(num(o.discount))+' '+CUR,Lx+10,y,30,'normal','#b91c1c','left')}
  y+=70;txt('الإجمالي',R,y,32,'bold');txt(fmt(t)+' '+CUR,Lx+10,y,36,'bold','#111827','left');
  y+=56;txt('المدفوع',R,y,28,'normal','#475569');txt(fmt(pd)+' '+CUR,Lx+10,y,30,'normal','#15803d','left');
  y+=56;c.fillStyle=rm>0?'#fef3c7':'#dcfce7';c.fillRect(50,y-44,W-100,68);
  txt(rm>0?'المتبقي':'تم الدفع بالكامل',R,y,30,'bold',rm>0?'#92400e':'#166534');if(rm>0)txt(fmt(rm)+' '+CUR,Lx+10,y,34,'bold','#92400e','left');
  var m=method(o);if(m){y+=60;txt('طريقة الدفع: '+(METHOD[m]||m),R,y,26,'normal','#64748b')}
  txt('شكرًا لتسوّقكم معنا 🌷',W/2,H-60,30,'bold','#111827','center');
  cv.toBlob(function(blob){if(!blob){alert('تعذّر إنشاء الفاتورة');return}showInvoice(o,blob)},'image/png');
}
function showInvoice(o,blob){
  var ov=$('emd75Inv');
  if(!ov){ov=document.createElement('div');ov.id='emd75Inv';ov.className='emd75-inv';
    ov.innerHTML='<div class="emd75-invbox"><div class="img"><div id="emd75InvHint" class="emd75-note" style="display:none;margin-bottom:8px">💡 اسم المتجر في الفاتورة يُضبط من: الإعدادات ← 🏢 بيانات النشاط.</div><img id="emd75InvImg" alt="الفاتورة"></div><div class="a"><button class="emd75-btn wa full" id="emd75InvShare">📤 مشاركة الفاتورة</button><button class="emd75-btn ghost" id="emd75InvSave">⬇️ حفظ الصورة</button><button class="emd75-btn ghost" id="emd75InvClose">إغلاق</button></div></div>';
    document.body.appendChild(ov);
    ov.addEventListener('click',function(e){if(e.target===ov)hide()});
    $('emd75InvClose').onclick=hide}
  function hide(){ov.classList.remove('show');try{URL.revokeObjectURL($('emd75InvImg').src)}catch(e){}}
  var name='فاتورة-'+oid(o).replace(/[^\w؀-ۿ-]/g,'')+'.png',url=URL.createObjectURL(blob),file=null;
  try{file=new File([blob],name,{type:'image/png'})}catch(e){}
  $('emd75InvImg').src=url;$('emd75InvHint').style.display=String(store().name||'').trim()?'none':'block';
  var canShare=!!(file&&navigator.canShare&&navigator.canShare({files:[file]}));
  var sh=$('emd75InvShare');
  sh.textContent=canShare?'📤 مشاركة الفاتورة (واتساب)':'💬 فتح محادثة العميل';
  sh.onclick=function(){
    if(canShare){navigator.share({files:[file],title:'فاتورة '+oid(o),text:'فاتورة طلبك رقم '+oid(o)+' من '+storeName()}).catch(function(){})}
    else{dl();openWa(o.phone,'فاتورة طلبك رقم '+oid(o)+' من '+storeName()+' 🧾\n(أرفقت لك صورة الفاتورة)')}
  };
  function dl(){var a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();toast('⬇️ تم حفظ الفاتورة')}
  $('emd75InvSave').onclick=dl;
  ov.classList.add('show');
}

/* ===== شريط الرئيسية + زر التنقل ===== */
function scheduleStrip(){MH.after()}
window.EMDMoneyV75={open:open,close:close,summary:summary,dues:dues,total:total,paid:paid,remaining:remaining,payState:payState,invoice:function(id){var o=find(id);if(o)invoice(o)},courierText:courText};
})();
