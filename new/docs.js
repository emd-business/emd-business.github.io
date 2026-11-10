/* EMD Business — الفاتورة (يُحمَّل عند الحاجة فقط).
   ملصق الشحن انتقل إلى label.js (منقول من التطبيق الحالي كما هو: V418 وما يتبعه). */
(function(){
'use strict';
var H={}; // تُمرَّر من التطبيق: order helpers
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
function num(v){v=Number(v);return isFinite(v)?v:0}
function prof(){try{return JSON.parse(ls('emd_business_profile_v333')||'{}')||{}}catch(e){return {}}}
function code(o){return H.prefix()+'-'+String(H.oid(o)).replace(/^#/,'').replace(/^EMD-/i,'')}
function invoiceHtml(o){
  var pf=prof(),store=pf.name||H.storeName()||'متجري',cur=(pf.currency==='OMR'||!pf.currency)?'ر.ع':pf.currency,its=H.items(o),t=H.odate(o);
  var rows=its.map(function(x,i){var pr=H.itemPrice(x);return '<tr><td>'+(i+1)+'</td><td>'+H.esc(H.iname(x))+'</td><td>'+H.qty(x)+'</td><td>'+H.money(pr)+'</td><td>'+H.money(pr*H.qty(x))+'</td></tr>'}).join('');
  var sub=H.subtotal(o),fee=num(o.deliveryFee),dis=num(o.discount),tot=H.total(o),paid=H.paid(o),rem=H.remaining(o);
  return '<div class="inv"><div class="ih"><div><h1>'+H.esc(store)+'</h1>'+(pf.phone?'<div class="muted">هاتف: '+H.esc(pf.phone)+'</div>':'')+(pf.instagram?'<div class="muted">'+H.esc(pf.instagram)+'</div>':'')+'</div><div class="it"><b>فاتورة</b><div>'+H.esc(code(o))+'</div><div class="muted">'+(t?t.toLocaleDateString('ar-OM',{day:'numeric',month:'long',year:'numeric'}):'')+'</div></div></div>'+
    '<div class="cust"><div><span class="muted">العميل:</span> <b>'+H.esc(H.cname(o)||'—')+'</b></div><div><span class="muted">الهاتف:</span> '+H.esc(H.cphone(o)||'—')+'</div><div><span class="muted">المكان:</span> '+H.esc(H.cplace(o)||'—')+'</div></div>'+
    '<table><tr><th>#</th><th>المنتج</th><th>الكمية</th><th>السعر</th><th>المجموع</th></tr>'+rows+'</table>'+
    '<table class="tot"><tr><td>المنتجات</td><td>'+H.money(sub)+'</td></tr>'+(fee?'<tr><td>التوصيل</td><td>'+H.money(fee)+'</td></tr>':'')+(dis?'<tr><td>الخصم</td><td>− '+H.money(dis)+'</td></tr>':'')+
    '<tr class="g"><td>الإجمالي</td><td>'+H.money(tot)+' '+cur+'</td></tr>'+(paid>0&&rem>0?'<tr><td>المدفوع</td><td>'+H.money(paid)+'</td></tr>':'')+'<tr><td>'+(rem>0?'المتبقي':'حالة الدفع')+'</td><td>'+(rem>0?H.money(rem)+' '+cur:'مدفوع ✓')+'</td></tr></table>'+
    '<p class="thanks">شكرًا لتسوقك معنا 🤍</p></div>';
}
var INV_CSS='.inv{max-width:720px;margin:0 auto}.ih{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #0f1f3d;padding-bottom:10px}.ih h1{color:#0f1f3d}.it{text-align:left}.it b{font-size:22px;color:#b8860b}.cust{display:grid;gap:4px;margin:12px 0;padding:10px;background:#f8fafc;border-radius:8px}.tot{width:55%;margin-inline-start:auto}.tot td:last-child{text-align:left;font-weight:700}.tot .g td{background:#0f1f3d;color:#fff;font-size:15px}.thanks{text-align:center;margin-top:24px;color:#555}'+
  '@media print{.cust{background:none;border:1px solid #ddd}}';
var RECEIPT_CSS='@page{size:80mm auto;margin:3mm}body{margin:0;font-size:12px}.inv{max-width:74mm}.ih{display:block;text-align:center}.it{text-align:center;margin-top:6px}.tot{width:100%}th,td{padding:4px}';
function printInvoice(o,kind){H.printDoc('فاتورة '+code(o),invoiceHtml(o),INV_CSS+(kind==='receipt'?RECEIPT_CSS:''))}
function invoiceSheet(o){
  var d=H.openSheet('<div class="sh"><div><h3>🧾 الفاتورة</h3><small>'+H.esc(code(o))+' · '+H.esc(H.cname(o)||H.cphone(o))+'</small></div><button class="x" data-act="close">إغلاق ✕</button></div>'+
    '<div class="invpv">'+invoiceHtml(o)+'</div>'+
    '<div class="foot"><button class="btn dark" data-iv="a4">🖨️ طباعة A4</button><button class="btn" data-iv="receipt">🧾 طباعة إيصال 80 مم</button></div>'+
    '<button class="btn sm" data-iv="wa" style="margin-top:6px">💬 إرسال ملخص الفاتورة بواتساب</button>');
  d.addEventListener('click',function(e){var b=e.target.closest('[data-iv]');if(!b)return;var k=b.dataset.iv;
    if(k==='wa'){var its=H.items(o).map(function(x){return '• '+H.iname(x)+' × '+H.qty(x)+' = '+H.money(H.itemPrice(x)*H.qty(x))}).join('\n'),rem=H.remaining(o);
      H.waOpen(o,false,'🧾 فاتورة الطلب '+code(o)+'\n'+(H.cname(o)?'العميل: '+H.cname(o)+'\n':'')+'\n'+its+'\n\nالإجمالي: '+H.money(H.total(o))+' ر.ع'+(rem>0?'\nالمتبقي: '+H.money(rem)+' ر.ع':'\nحالة الدفع: مدفوع ✓')+'\n\nشكرًا لتسوقك معنا 🤍'+(H.storeName()?'\n'+H.storeName():''))}
    else printInvoice(o,k)});
}
window.EMDDocs={setup:function(h){H=h},invoice:invoiceSheet,printInvoice:printInvoice};
})();
