/* EMD Business — ملصق الشحن والفاتورة (يُحمَّل عند الحاجة فقط)
   الملصق نفس تصميم التطبيق الحالي: الشعار واسم المتجر، رقم الطلب، المستلم ورقمه ومكانه، المنتجات،
   شركة الشحن، المبلغ عند الاستلام، رمز QR لرابط التتبع، وباركود رقم الطلب.
   الإعدادات تُقرأ من التطبيق الحالي مرة واحدة (emd418_label) وتُحفظ في مفتاح التجربة. */
(function(){
'use strict';
var H={}; // تُمرَّر من التطبيق: order helpers
var CFG_KEY='emd_rb_label',LIVE_CFG='emd418_label';
var SIZES=[[100,150,'100×150 مم · شحن كبير'],[100,100,'100×100 مم · شحن مربع'],[80,50,'80×50 مم'],[50,80,'50×80 مم'],[50,50,'50×50 مم'],[50,30,'50×30 مم']];
var C128=['11011001100','11001101100','11001100110','10010011000','10010001100','10001001100','10011001000','10011000100','10001100100','11001001000','11001000100','11000100100','10110011100','10011011100','10011001110','10111001100','10011101100','10011100110','11001110010','11001011100','11001001110','11011100100','11001110100','11101101110','11101001100','11100101100','11100100110','11101100100','11100110100','11100110010','11011011000','11011000110','11000110110','10100011000','10001011000','10001000110','10110001000','10001101000','10001100010','11010001000','11000101000','11000100010','10110111000','10110001110','10001101110','10111011000','10111000110','10001110110','11101110110','11010001110','11000101110','11011101000','11011100010','11011101110','11101011000','11101000110','11100010110','11101101000','11101100010','11100011010','11101111010','11001000010','11110001010','10100110000','10100001100','10010110000','10010000110','10000101100','10000100110','10110010000','10110000100','10011010000','10011000010','10000110100','10000110010','11000010010','11001010000','11110111010','11000010100','10001111010','10100111100','10010111100','10010011110','10111100100','10011110100','10011110010','11110100100','11110010100','11110010010','11011011110','11011110110','11110110110','10101111000','10100011110','10001011110','10111101000','10111100010','11110101000','11110100010','10111011110','10111101110','11101011110','11110101110','11010000100','11010010000','11010011100'],STOP='1100011101011';
function c128(t){var s=String(t).replace(/[^\x20-\x7e]/g,''),v=[104],sum=104;for(var i=0;i<s.length;i++){var k=s.charCodeAt(i)-32;v.push(k);sum+=k*(i+1)}v.push(sum%103);return v.map(function(x){return C128[x]}).join('')+STOP}
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
function num(v){v=Number(v);return isFinite(v)?v:0}
function cfg(){var c=null;try{c=JSON.parse(ls(CFG_KEY)||ls(LIVE_CFG)||'null')}catch(e){}c=c||{};c.w=num(c.w)||100;c.h=num(c.h)||100;c.items=c.items!==false;return c}
function saveCfg(c){ls(CFG_KEY,JSON.stringify({w:c.w,h:c.h,items:c.items}))}
function prof(){try{return JSON.parse(ls('emd_business_profile_v333')||'{}')||{}}catch(e){return {}}}
function code(o){return H.prefix()+'-'+String(H.oid(o)).replace(/^#/,'').replace(/^EMD-/i,'')}
var LOGOSVG='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><rect width="1024" height="1024" rx="230" fill="#000"/><g fill="#fff"><rect x="190" y="212" width="644" height="520" rx="150"/><path d="M290 700 L250 846 Q246 862 262 856 L438 740 Z"/></g><g fill="#000"><rect x="366" y="326" width="76" height="316" rx="38"/><rect x="366" y="326" width="292" height="76" rx="38"/><rect x="366" y="566" width="292" height="76" rx="38"/><rect x="366" y="446" width="214" height="76" rx="38"/></g><circle cx="796" cy="236" r="62" fill="#fff" stroke="#000" stroke-width="26"/></svg>';
var logoImg=null;
function getLogo(){return new Promise(function(res){if(logoImg)return res(logoImg);var src=ls('emd_v89_logo');if(!src||!/^data:image|^https?:/.test(src))src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(LOGOSVG);var im=new Image();im.crossOrigin='anonymous';im.onload=function(){logoImg=im;res(im)};im.onerror=function(){var j=new Image();j.onload=function(){logoImg=j;res(j)};j.onerror=function(){res(null)};j.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(LOGOSVG)};im.src=src})}
var FONT="'IBM Plex Sans Arabic','Noto Kufi Arabic',Tahoma,Arial,sans-serif";
/* يرسم الملصق؛ k = نسبة تصغير الخط حتى يتسع المحتوى. يرجع null إذا لم يتسع */
function draw(o,c,logo,k){
  var DPM=8,W=Math.round(c.w*DPM),Ht=Math.round(c.h*DPM),cv=document.createElement('canvas');cv.width=W;cv.height=Ht;var x=cv.getContext('2d');
  var narrow=c.w<70,u=(narrow?Math.min(c.w/58,c.h/42):Math.min(c.w,c.h*1.15)/100)*DPM*k;
  var P=Math.round(3*DPM*(narrow?0.7:1)),R=W-P,L=P,y=P,cw=W-2*P;
  x.fillStyle='#fff';x.fillRect(0,0,W,Ht);x.fillStyle='#000';x.strokeStyle='#000';x.direction='rtl';x.textBaseline='top';
  function f(px,b){x.font=(b?'700 ':'600 ')+Math.round(px)+'px '+FONT}
  function txt(s,px,b,al,xx,yy,maxW){f(px,b);x.textAlign=al||'right';x.fillText(s,xx==null?R:xx,yy==null?y:yy,maxW||cw)}
  function wrap(s,px,b,maxW,lines){f(px,b);var w=String(s).split(/\s+/),out=[],cur='';w.forEach(function(t){var n=cur?cur+' '+t:t;if(x.measureText(n).width>maxW&&cur){out.push(cur);cur=t}else cur=n});if(cur)out.push(cur);if(out.length>lines){out=out.slice(0,lines);out[lines-1]+='…'}return out}
  function line(yy){x.fillRect(L,yy,cw,Math.max(2,Math.round(u*0.5)))}
  var pf=prof(),store=pf.name||H.storeName()||'',sph=pf.phone||'';
  /* الرأس */
  var lh=Math.round((narrow?7:9)*u);if(logo){try{x.drawImage(logo,R-lh,y,lh,lh)}catch(e){}}
  txt(store,(narrow?4.6:5.2)*u,true,'right',R-lh-2*u,y,cw*0.55);
  if(!narrow&&sph)txt('هاتف المتجر '+sph,3.4*u,false,'right',R-lh-2*u,y+6*u,cw*0.55);
  f((narrow?5:6.4)*u,true);x.textAlign='left';x.direction='ltr';x.fillText(code(o),L,y+(narrow?0.6:1)*u);x.direction='rtl';
  y+=lh+2*u;line(y);y+=3*u;
  /* المستلم */
  wrap(H.cname(o)||'—',(narrow?6:7.2)*u,true,cw,2).forEach(function(s){txt(s,(narrow?6:7.2)*u,true);y+=(narrow?7.6:9)*u});
  var ph=String(H.cphone(o)).replace(/\D/g,'');if(ph.indexOf('968')===0&&ph.length===11)ph=ph.slice(3);ph=ph.length===8?ph.slice(0,4)+' '+ph.slice(4):ph;
  f((narrow?6.6:8.6)*u,true);x.textAlign='right';x.direction='ltr';x.fillText(ph,R,y);x.direction='rtl';y+=(narrow?8:10)*u;
  wrap(String(H.cplace(o)).replace(/\s*[-–]\s*/g,' · ')||'—',(narrow?4.2:5)*u,true,cw,2).forEach(function(s){txt(s,(narrow?4.2:5)*u,true);y+=(narrow?5.4:6.6)*u});
  y+=1*u;
  /* المنتجات */
  var its=H.items(o),pcs=its.reduce(function(a,p){return a+H.qty(p)},0),bottomNeed=(narrow?(c.h>=70?30:12):42)*u;
  if(c.items&&its.length&&!narrow&&c.h>=90){var rows=Math.max(1,Math.min(its.length,Math.floor((Ht-y-bottomNeed-12*u)/(5.6*u))));if(Ht-y-bottomNeed>14*u){var bx=y;y+=2*u;
      its.slice(0,rows).forEach(function(p,i){var more=(i===rows-1&&its.length>rows)?' (+'+(its.length-rows)+' أخرى)':'';txt(H.iname(p)+more,4.2*u,false,'right',R-2*u,y,cw-16*u);f(4.4*u,true);x.textAlign='left';x.fillText('× '+H.qty(p),L+2*u,y);y+=5.6*u});
      x.lineWidth=Math.max(2,u*0.5);x.strokeRect(L,bx,cw,y-bx+1*u);y+=3*u}}
  else if(narrow&&its.length&&c.h>=70){txt('القطع: '+pcs+' · الأصناف: '+its.length,3.8*u,false);y+=5*u}
  /* شركة الشحن والتاريخ */
  var cr=String(o.company||o.shippingCompany||o.courier||'').trim();
  if(cr||!narrow){txt('الشحن: '+(cr||'—'),(narrow?3.8:4.2)*u,true,'right',R,y,cw*0.62);if(!narrow){f(3.6*u,false);x.textAlign='left';var d=new Date(o.orderDate||o.created||Date.now());x.fillText(isNaN(d)?'':d.toLocaleDateString('ar-OM',{day:'numeric',month:'long'}),L,y+0.4*u)}y+=(narrow?5:7.5)*u}
  /* المبلغ + QR */
  var due=H.remaining(o),cur=(pf.currency==='OMR'||!pf.currency)?'ر.ع':pf.currency,tr=String(o.trackingUrl||o.tracking_url||'');
  var rowH=narrow?(c.h>=70?20*u:9*u):26*u,qrS=(tr&&window.EMDqr418&&(narrow?c.h>=70:true))?rowH:0;
  var bcNeed=(!narrow||c.h>=70)?(narrow?11:13)*u:0;if(k>0.5&&y+rowH+bcNeed>Ht-P)return null;
  var boxW=qrS?cw-qrS-3*u:cw,by=y;x.fillRect(R-boxW,by,boxW,rowH);x.fillStyle='#fff';
  if(narrow&&c.h<70)txt(due>0?'عند الاستلام '+due.toFixed(3)+' '+cur:'مدفوع ✓',4.4*u,true,'right',R-2*u,by+2*u,boxW-4*u);
  else if(due>0){txt('المبلغ عند الاستلام',(narrow?3.4:4)*u,true,'right',R-2*u,by+(narrow?1.4:3)*u,boxW-4*u);txt(due.toFixed(3)+' '+cur,(narrow?(c.h>=70?6.4:4.6):8.4)*u,true,'right',R-2*u,by+(narrow?(c.h>=70?7:4):9.5)*u,boxW-4*u)}
  else txt('مدفوع ✓',(narrow?(c.h>=70?7:5):9)*u,true,'right',R-2*u,by+(narrow?(c.h>=70?6:1.6):7.5)*u,boxW-4*u);
  x.fillStyle='#000';
  if(qrS){try{var q=window.EMDqr418(0,'M');q.addData(tr);q.make();var n=q.getModuleCount(),m=qrS/(n+2);for(var r=0;r<n;r++)for(var kk=0;kk<n;kk++)if(q.isDark(r,kk))x.fillRect(Math.floor(L+(kk+1)*m),Math.floor(by+(r+1)*m),Math.ceil(m),Math.ceil(m))}catch(e){}}
  y=by+rowH+2*u;
  /* الباركود */
  if(!narrow||c.h>=70){var bars=c128(code(o)),bh=Math.min(16*u,Math.max(6*u,Ht-P-y-(narrow?3.4:4.4)*u)),mw=Math.max(1,Math.floor(cw*0.9/bars.length)),bw=bars.length*mw,bx0=Math.round((W-bw)/2);
    if(bh>=5*u){for(var i=0;i<bars.length;i++)if(bars[i]==='1')x.fillRect(bx0+i*mw,y,mw,bh);f((narrow?3:3.6)*u,true);x.textAlign='center';x.direction='ltr';x.fillText(code(o),W/2,y+bh+0.6*u);x.direction='rtl'}}
  return cv;
}
function render(os){var c=cfg();return getLogo().then(function(lg){return os.map(function(o){var cv=null,k=1;while(!cv&&k>0.45){cv=draw(o,c,lg,k);k-=0.08}return {o:o,cv:cv||draw(o,c,lg,0.45)}})})}
var last=[],cur=[];
function blob(cv){return new Promise(function(r){cv.toBlob(function(b){r(b)},'image/png')})}
function files(){return Promise.all(last.map(function(it){return blob(it.cv).then(function(b){return new File([b],'label-'+code(it.o).replace(/[^\w-]/g,'')+'.png',{type:'image/png'})})}))}
function saveImgs(){files().then(function(fs){fs.forEach(function(f,i){setTimeout(function(){var a=document.createElement('a');a.href=URL.createObjectURL(f);a.download=f.name;document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},1500)},i*350)})})}
function share(){files().then(function(fs){if(navigator.canShare&&navigator.canShare({files:fs}))navigator.share({files:fs,title:'ملصق الشحن'}).catch(function(){});else{saveImgs();H.toast('المشاركة غير مدعومة هنا، فحُفظت الصورة بدلًا منها')}})}
function printLabels(){var c=cfg();H.printDoc('ملصق الشحن',last.map(function(it){return '<img alt="" src="'+it.cv.toDataURL('image/png')+'">'}).join(''),'@page{size:'+c.w+'mm '+c.h+'mm;margin:0}body{margin:0!important}img{display:block;width:'+c.w+'mm;height:'+c.h+'mm;page-break-after:always;break-after:page}')}
function paint(d){
  var c=cfg(),pre=SIZES.some(function(s){return s[0]===c.w&&s[1]===c.h});
  d.querySelector('#lbOpts').innerHTML='<label class="f" for="lbSize">مقاس الملصق</label><select class="in" id="lbSize">'+SIZES.map(function(s){return '<option value="'+s[0]+'x'+s[1]+'"'+(s[0]===c.w&&s[1]===c.h?' selected':'')+'>'+s[2]+'</option>'}).join('')+'<option value="custom"'+(pre?'':' selected')+'>مقاس آخر…</option></select>'+
    '<div class="row"'+(pre?' hidden':'')+' id="lbCust"><div><label class="f">العرض (مم)</label><input class="in" id="lbW" type="number" inputmode="numeric" min="25" max="120" value="'+c.w+'"></div><div><label class="f">الارتفاع (مم)</label><input class="in" id="lbH" type="number" inputmode="numeric" min="20" max="200" value="'+c.h+'"></div></div>'+
    '<label class="chk" style="margin:8px 0"><input type="checkbox" id="lbItems"'+(c.items?' checked':'')+'> إظهار المنتجات على الملصق</label>';
  var pv=d.querySelector('#lbPv');pv.innerHTML='<span class="mute">جارٍ تجهيز الملصق…</span>';
  render(cur).then(function(list){last=list;pv.innerHTML='';list.forEach(function(it){var im=new Image();im.alt='ملصق '+code(it.o);im.src=it.cv.toDataURL('image/png');im.style.aspectRatio=c.w+'/'+c.h;pv.appendChild(im)})});
}
function openLabels(os){
  cur=os;if(!os.length)return;
  var d=H.openSheet('<div class="sh"><div><h3>🏷️ '+(os.length>1?'ملصقات الشحن':'ملصق الشحن')+'</h3><small>'+H.esc(os.length>1?H.nOrders(os.length):code(os[0])+' · '+(H.cname(os[0])||H.cphone(os[0])))+'</small></div><button class="x" data-act="close">إغلاق ✕</button></div>'+
    '<div id="lbOpts"></div><div class="lbpv" id="lbPv"></div>'+
    '<p class="note">على الأندرويد: اضغط «مشاركة»، ثم اختر تطبيق الطابعة (مثل Phomemo) واطبع بنفس المقاس.</p>'+
    '<div class="foot"><button class="btn dark" data-lb="share">📤 مشاركة لتطبيق الطابعة</button><button class="btn" data-lb="print">🖨️ طباعة</button></div><button class="btn sm" data-lb="save" style="margin-top:6px">💾 حفظ الصورة</button>');
  d.addEventListener('change',function(e){var c=cfg(),t=e.target;
    if(t.id==='lbSize'){if(t.value==='custom'){d.querySelector('#lbCust').hidden=false;return}var p=t.value.split('x');c.w=+p[0];c.h=+p[1];saveCfg(c);paint(d)}
    else if(t.id==='lbItems'){c.items=t.checked;saveCfg(c);paint(d)}
    else if(t.id==='lbW'||t.id==='lbH'){var w=num(d.querySelector('#lbW').value),h=num(d.querySelector('#lbH').value);if(w>=25&&w<=120&&h>=20&&h<=200){c.w=w;c.h=h;saveCfg(c);paint(d)}}});
  d.addEventListener('click',function(e){var b=e.target.closest('[data-lb]');if(!b)return;var k=b.dataset.lb;if(k==='share')share();else if(k==='print')printLabels();else saveImgs()});
  paint(d);
}
/* ===== الفاتورة ===== */
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
window.EMDDocs={setup:function(h){H=h},labels:openLabels,invoice:invoiceSheet,printInvoice:printInvoice,draw:draw,config:cfg,_render:render};
})();
