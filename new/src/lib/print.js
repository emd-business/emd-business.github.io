/* الطباعة: صفحة مستقلة داخل إطار مخفي، فتعمل داخل التطبيق المثبّت ولا تمنعها النوافذ المنبثقة */
function printDoc(title,body,css){
  var old=document.getElementById('printFrame');if(old)old.remove();
  var f=document.createElement('iframe');f.id='printFrame';f.setAttribute('aria-hidden','true');
  f.style.cssText='position:fixed;width:0;height:0;border:0;left:-9999px;bottom:0';document.body.appendChild(f);
  var d=f.contentDocument;d.open();
  d.write('<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>'+esc(title)+'</title><style>'+
    'body{font-family:Tahoma,Arial,sans-serif;color:#111;margin:14mm;font-size:13px}h1{font-size:20px;margin:0 0 4px}.muted{color:#666}'+
    'table{width:100%;border-collapse:collapse;margin:10px 0}th,td{border:1px solid #bbb;padding:6px 8px;text-align:right;vertical-align:top}th{background:#f1f5f9}'+
    '.sign{margin-top:30px;display:flex;justify-content:space-between}.sign div{border-top:1px solid #333;width:40%;padding-top:6px;text-align:center}'+
    '.pb{page-break-after:always}@page{margin:10mm}'+(css||'')+'</style></head><body>'+body+'</body></html>');
  d.close();
  setTimeout(function(){try{f.contentWindow.focus();f.contentWindow.print()}catch(e){toast('تعذّرت الطباعة على هذا الجهاز')}},250);
}
function printHead(title,sub){var sn=storeName();return '<h1>'+esc(title)+'</h1><div class="muted">'+(sn?esc(sn)+' · ':'')+esc(sub||'')+' · '+new Date().toLocaleString('ar',{dateStyle:'medium',timeStyle:'short'})+'</div>'}
/* الملصق والفاتورة في ملف منفصل يُحمَّل عند أول استعمال */
var docsP=null;
function loadScript(src){return new Promise(function(ok,no){var s=document.createElement('script');s.src=src;s.onload=ok;s.onerror=no;document.head.appendChild(s)})}
function withDocs(cb){
  if(!docsP)docsP=loadScript('qrcode.js?v=1').catch(function(){}).then(function(){return loadScript('docs.js?v=1')}).then(function(){
    window.EMDDocs.setup({prefix:prefix,oid:oid,cname:cname,cphone:cphone,cplace:cplace,items:items,qty:qty,iname:iname,itemPrice:itemPrice,subtotal:subtotal,total:total,paid:paid,remaining:remaining,money:money,odate:odate,
      storeName:storeName,toast:toast,printDoc:printDoc,openSheet:openSheet,esc:esc,nOrders:nOrders,waOpen:waOpen});return window.EMDDocs});
  docsP.then(cb).catch(function(){docsP=null;toast('تعذّر تحميل أداة الطباعة. تحقّق من الاتصال وحاول مجددًا.')});
}
/* ملصق الشحن كما في التطبيق الحالي (V418 وما يتبعه) في ملف label.js */
var LB_P=null;
function lbLoad(){if(window.EMDLabelV418)return Promise.resolve();if(LB_P)return LB_P;window.EMDPosH=window.EMDPosH||posHelpers();
  try{var o=localStorage.getItem('emd_rb_label');if(o&&localStorage.getItem('emd_rb_emd418_label')===null)localStorage.setItem('emd_rb_emd418_label',o)}catch(e){}
  LB_P=loadScript('qrcode.js?v=1').catch(function(){}).then(function(){return loadScript('label.js?v=1')}).catch(function(e){LB_P=null;throw e});return LB_P}
function lbRun(fn){lbLoad().then(fn,function(){toast('تعذّر تحميل أداة الملصق. تحقّق من الاتصال وحاول مجددًا.')})}
function openLabels(ids){var os=ids.map(findOrder).filter(Boolean);if(!os.length){toast('حدّد طلبًا واحدًا على الأقل');return}lbRun(function(){EMDLabelV418.open(os.map(oid))})}
function quickLabel(id){if(findOrder(id))lbRun(function(){EMDLabelDesignV423.quick(id)})}
function quickLabelSettings(){lbRun(function(){EMDQuickV424.open()})}
/* إظهار زر «🏷️ ملصق» في البطاقة و«🏷️ ملصق سريع» في نافذة الطلب (V424) */
function qlOpt(){var d={};try{d=JSON.parse(POS_LS.getItem('emd424_quick')||'{}')||{}}catch(e){}return {card:d.card!==false,modal:d.modal!==false}}
function openInvoice(id){var o=findOrder(id);if(o)withDocs(function(D){D.invoice(o)})}
