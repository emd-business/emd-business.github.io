/* مُولَّد بـ tools/port-direct.py من V113 — لا تعدّل هنا */
(function(){var s=document.createElement("style");s.textContent="\n.emd113-ov{position:fixed;inset:0;z-index:11500;background:rgba(15,23,42,.6);display:none;align-items:flex-end;justify-content:center;direction:rtl;font-family:inherit}\n.emd113-ov.show{display:flex}\n.emd113-sheet{width:min(1020px,100%);height:min(96vh,100%);background:#f6f7f9;border-radius:22px 22px 0 0;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 -10px 40px rgba(0,0,0,.25)}\n@media(min-width:760px){.emd113-ov{align-items:center}.emd113-sheet{border-radius:22px;height:min(92vh,940px)}}\n.emd113-top{background:#fff;padding:12px 14px 0;border-bottom:1px solid #e8eaee}\n.emd113-hrow{display:flex;align-items:center;justify-content:space-between;gap:10px}\n.emd113-hrow h2{margin:0;font-size:19px}\n.emd113-x{border:0;background:#eef0f3;border-radius:12px;width:42px;height:42px;font-size:20px;cursor:pointer}\n.emd113-tabs{display:flex;gap:6px;padding:10px 0}\n.emd113-tab{flex:1;border:1px solid #e3e6ea;background:#fff;border-radius:12px;padding:10px 8px;font-size:14px;font-weight:800;cursor:pointer;color:#334155;min-height:44px}\n.emd113-tab.on{background:#111827;color:#fff;border-color:#111827}\n.emd113-body{flex:1;overflow:auto;padding:12px 12px 16px}\n.emd113-cols{display:grid;grid-template-columns:1fr;gap:0}\n@media(min-width:860px){.emd113-cols{grid-template-columns:1fr 1fr;column-gap:12px;align-items:start}}\n.emd113-box{background:#fff;border:1px solid #e8eaee;border-radius:16px;padding:12px;margin-bottom:12px}\n.emd113-box h3{margin:0 0 8px;font-size:15px}\n.emd113-in{width:100%;box-sizing:border-box;border:1px solid #dfe3e8;border-radius:12px;padding:11px 12px;font-size:16px;background:#fff;min-height:46px;font-family:inherit}\n.emd113-g2{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n.emd113-pl{max-height:300px;overflow:auto;margin-top:8px;display:grid;gap:6px}\n@media(min-width:860px){.emd113-pl{max-height:420px}}\n.emd113-p{display:flex;align-items:center;gap:10px;border:1px solid #eceff3;border-radius:12px;padding:8px;background:#fafbfc;cursor:pointer;min-height:56px}\n.emd113-p:active{background:#eef6ff}\n.emd113-p.out{opacity:.55}\n.emd113-img{width:46px;height:46px;border-radius:10px;background:#eef0f3 center/cover no-repeat;flex:0 0 auto;display:flex;align-items:center;justify-content:center;font-size:20px}\n.emd113-p .n{flex:1;min-width:0}.emd113-p .n b{display:block;font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.emd113-p .n small{color:#64748b;font-size:12.5px}\n.emd113-p .pr{font-weight:900;font-size:15px;white-space:nowrap}\n.emd113-add{border:0;background:#16a34a;color:#fff;border-radius:10px;width:42px;height:42px;font-size:22px;cursor:pointer;flex:0 0 auto}\n.emd113-line{border:1px solid #eceff3;border-radius:12px;padding:8px;margin-bottom:8px;background:#fff}\n.emd113-line .r1{display:flex;justify-content:space-between;gap:8px;align-items:center}\n.emd113-line .r2{display:flex;gap:6px;align-items:center;margin-top:6px;flex-wrap:wrap}\n.emd113-qty{display:flex;align-items:center;gap:4px}\n.emd113-qty button{border:1px solid #dfe3e8;background:#fff;border-radius:10px;width:40px;height:40px;font-size:20px;cursor:pointer}\n.emd113-qty input{width:56px;text-align:center;border:1px solid #dfe3e8;border-radius:10px;height:40px;font-size:16px}\n.emd113-mini{width:84px;border:1px solid #dfe3e8;border-radius:10px;height:40px;font-size:15px;padding:0 6px;text-align:center}\n.emd113-lt{margin-inline-start:auto;font-weight:900;font-size:16px}\n.emd113-del{border:0;background:#fee2e2;color:#b91c1c;border-radius:10px;width:40px;height:40px;cursor:pointer;font-size:16px}\n.emd113-chips{display:flex;gap:6px;flex-wrap:wrap;margin:6px 0}\n.emd113-chip{border:1px solid #dfe3e8;background:#fff;border-radius:11px;padding:9px 12px;font-size:14px;cursor:pointer;min-height:42px;font-family:inherit}\n.emd113-chip.on{background:#e8f5ee;border-color:#16a34a;color:#14532d;font-weight:800}\n.emd113-sum{background:#111827;color:#fff;border-radius:14px;padding:12px;margin-top:8px}\n.emd113-sum .r{display:flex;justify-content:space-between;padding:3px 0;font-size:14px}\n.emd113-sum .r.big{font-size:20px;font-weight:900}\n.emd113-sum .rem{color:#fbbf24}.emd113-sum .ok{color:#86efac}\n.emd113-ft{background:#fff;border-top:1px solid #e8eaee;padding:10px 12px calc(10px + env(safe-area-inset-bottom))}\n.emd113-ft .t{display:flex;justify-content:space-between;font-weight:900;margin-bottom:8px;font-size:15px}\n.emd113-go{width:100%;border:0;background:#16a34a;color:#fff;border-radius:14px;font-size:18px;font-weight:900;min-height:54px;cursor:pointer;font-family:inherit}\n.emd113-go[disabled]{background:#9ca3af;cursor:not-allowed}\n.emd113-btn{border:0;background:#111827;color:#fff;border-radius:12px;padding:11px 14px;font-size:15px;font-weight:800;cursor:pointer;min-height:46px;font-family:inherit}\n.emd113-btn.g{background:#16a34a}.emd113-btn.w{background:#25d366}.emd113-btn.l{background:#eef0f3;color:#111827}.emd113-btn.r{background:#dc2626}\n.emd113-err{background:#fef2f2;color:#991b1b;border-radius:12px;padding:10px;font-size:14px;line-height:1.7;margin-top:8px}\n.emd113-note{background:#fff7e6;color:#6b4a00;border-radius:12px;padding:8px 10px;font-size:13px;margin-top:6px}\n.emd113-ok{text-align:center;padding:18px 8px}.emd113-ok .tick{font-size:54px}\n.emd113-row{background:#fff;border:1px solid #e8eaee;border-radius:14px;padding:10px 12px;margin-bottom:8px;cursor:pointer;display:flex;justify-content:space-between;gap:8px}\n.emd113-row b{font-size:15px}.emd113-row small{color:#64748b;display:block;font-size:12.5px;margin-top:2px}\n.emd113-tag{display:inline-block;border-radius:8px;padding:2px 8px;font-size:12px;font-weight:800;margin-inline-start:6px}\n.emd113-tag.p{background:#dcfce7;color:#166534}.emd113-tag.h{background:#fef3c7;color:#92400e}.emd113-tag.c{background:#e0e7ff;color:#3730a3}.emd113-tag.v{background:#fee2e2;color:#991b1b}\n.emd113-stats{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px}\n@media(min-width:760px){.emd113-stats{grid-template-columns:repeat(4,1fr)}}\n.emd113-stat{background:#fff;border:1px solid #e8eaee;border-radius:14px;padding:10px}\n.emd113-stat small{display:block;color:#64748b;font-size:12px}.emd113-stat b{font-size:18px}\n.emd113-dl{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:14px;margin:6px 0}\n.emd113-dl dt{color:#64748b}.emd113-dl dd{margin:0;font-weight:700}\n.emd113-it{display:flex;justify-content:space-between;gap:8px;padding:6px 0;border-bottom:1px dashed #e5e7eb;font-size:14px;align-items:center}\n@media print{.emd113-ov{display:none!important}}\n";document.head.appendChild(s)})();

(function(){
'use strict';
if(window.EMDDirectV113)return;var DH=window.EMDDirH;
/* V113: البيع المباشر (Direct Sales) — فاتورة كاملة من نافذة واحدة، تشارك المخزون والعملاء الحاليين */
var DRAFT=DH.lk('emd_v113_draft'),CUR='ر.ع';
var METHODS={cash:'💵 نقدًا',transfer:'🏦 تحويل بنكي',card:'💳 بطاقة',other:'🔁 وسيلة أخرى'};
function D(){return DH.db()}
function arr(x){return Array.isArray(x)?x:[]}
function $(id){return document.getElementById(id)}
function digits(s){return String(s==null?'':s).replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/[۰-۹]/g,function(d){return '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)})}
function num(v){var s=digits(v).replace(/٫/g,'.').replace(/[,،\s]/g,'');var x=parseFloat(s);return isFinite(x)?x:0}
function r3(x){return Math.round((x+Number.EPSILON)*1000)/1000}
function fmt(x){return r3(x||0).toFixed(3)}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function pad(x,n){x=String(x);while(x.length<(n||2))x='0'+x;return x}
function dkey(t){return t.getFullYear()+'-'+pad(t.getMonth()+1)+'-'+pad(t.getDate())}
function ftime(t){var h=t.getHours(),m=t.getMinutes();return (h%12||12)+':'+pad(m)+' '+(h>=12?'م':'ص')}
function fdt(iso){var t=new Date(iso);return isNaN(t)?'':dkey(t)+' · '+ftime(t)}
function norm(x){return String(x||'').replace(/[ـ]/g,'').trim().toLowerCase().replace(/\s+/g,' ')}
function phoneKey(p){return digits(p).replace(/\D/g,'')}
function toast(t){DH.toast(t)}
function ownerName(){try{var m=JSON.parse(localStorage.getItem('emd_manager_profile_v41')||'null');return (m&&m.name)||'المدير'}catch(e){return 'المدير'}}
function storeName(){return DH.storeName()||'متجري'}

/* ---------- الصلاحيات (نفس نظام الموظفين والأدوار الحالي) ---------- */
function who(){return {id:'owner',name:ownerName(),owner:true}}
function perm(p){return true}
var P_SELL='payments',P_DISC='finance',P_RET='delete';

/* ---------- المنتجات والمخزون (نفس مخزون التطبيق) ---------- */
function products(){var d=D();return d&&Array.isArray(d.products)?d.products:[]}
function findP(name){var k=norm(name);return products().find(function(p){return norm(p&&p.name)===k})}
function catPrice(p){var v=num(p&&(p.salePrice!=null?p.salePrice:(p.unitPrice!=null?p.unitPrice:(p.price!=null?p.price:p.defaultPrice))));v=v>0?v:0;if(v&&p&&window.EMDPxV433)try{v=EMDPxV433.price(p,v)}catch(e){}return v}
function catCost(p){var v=num(p&&(p.costPrice!=null?p.costPrice:(p.cost!=null?p.cost:p.purchasePrice)));return v>0?v:0}
function oitems(o){var a=Array.isArray(o&&o.products)?o.products:(Array.isArray(o&&o.items)?o.items:[]);return a.map(function(x){return {name:String(x&&(x.name||x.product||x.productName)||'').trim(),qty:Number(x&&(x.qty!=null?x.qty:(x.quantity!=null?x.quantity:x.count))||0)}}).filter(function(x){return x.name&&x.qty>0})}
function reserved(name){var t=0,k=norm(name),d=D();arr(d&&d.orders).forEach(function(o){var st=String(o&&o.status||'new');if(['new','ready','packing'].indexOf(st)<0||o.stockDeducted===true)return;oitems(o).forEach(function(i){if(norm(i.name)===k)t+=i.qty})});return t}
function available(name){var a=DH.available(name);return a==null?0:Math.max(0,r3(a))}

/* ---------- حساب الفاتورة (مشترك بين الواجهة والحفظ) ---------- */
function calc(dr){
  var lines=[],errs=[],sub=0,merged={};
  arr(dr.items).forEach(function(it){var k=norm(it.name);if(!k)return;if(merged[k]){merged[k].qty+=num(it.qty)}else{merged[k]={name:String(it.name),qty:num(it.qty),price:it.price,disc:it.disc};lines.push(merged[k])}});
  lines.forEach(function(l){
    var p=findP(l.name);l.p=p;l.cat=catPrice(p);
    var pr=l.price===''||l.price==null?l.cat:num(l.price);l.price=r3(pr);
    l.disc=r3(Math.max(0,num(l.disc)));l.auto=0;l.ofn='';l.rp=0;if(window.EMDPxV433){try{var I=EMDPxV433.line(p,l.qty,l.price);if(!(l.disc>0)&&I.qd>0){l.auto=I.qd;l.disc=I.qd}l.ofn=[I.pn,l.auto?I.qn:''].filter(Boolean).join(' + ');l.rp=I.rp}catch(e){}}l.gross=r3(l.price*l.qty);
    if(l.disc>l.gross)l.disc=l.gross;
    l.net=r3(l.gross-l.disc);sub=r3(sub+l.net);
    l.cost=catCost(p);
  });
  var invDisc=0;
  if(dr.discMode==='pct'){invDisc=r3(sub*Math.min(100,Math.max(0,num(dr.discount)))/100)}else{invDisc=r3(Math.max(0,num(dr.discount)))}
  if(invDisc>sub)invDisc=sub;
  var cpv={v:0,code:''};if(window.EMD451)try{cpv=EMD451.coupon(dr,r3(sub-invDisc))}catch(e){}invDisc=r3(invDisc+cpv.v);
  var lpv={pts:0,v:0};if(window.EMDLoyV434)try{lpv=EMDLoyV434.redeem(dr,r3(sub-invDisc))}catch(e){}invDisc=r3(invDisc+lpv.v);
  return {lines:lines,sub:sub,invDisc:invDisc,total:r3(sub-invDisc),errs:errs,lpPts:lpv.pts,lpVal:lpv.v,cpVal:cpv.v,cpCode:cpv.code};
}
function validateLines(c){
  var e=[];
  if(!c.lines.length)e.push('أضف منتجًا واحدًا على الأقل.');
  c.lines.forEach(function(l){
    if(!l.p){e.push('المنتج «'+l.name+'» غير موجود في المنتجات.');return}
    if(!(l.qty>0)||(!(l.p&&l.p.byWeight)&&Math.abs(l.qty-Math.round(l.qty))>1e-9)){e.push('كمية «'+l.name+'» يجب أن تكون رقمًا صحيحًا أكبر من صفر.');return}
    if(!(l.price>0))e.push('حدّد سعر «'+l.name+'».');
    var av=available(l.name);
    if(l.qty>av+1e-9)e.push('المخزون غير كافٍ لـ «'+l.name+'»: المطلوب '+l.qty+' والمتوفر '+av+'.');
    var canD=perm(P_DISC)||!!(window.EMD451&&EMD451.ok());
    if(!canD){
      if(l.cat>0&&Math.abs(l.price-l.cat)>0.0005)e.push('لا تملك صلاحية تغيير سعر «'+l.name+'».');
      if(l.disc>0&&!l.auto)e.push('لا تملك صلاحية الخصم.');
    }
  });
  return e;
}

/* ---------- الحفظ الآمن من التكرار ---------- */
var busy=false;
function persistRaw(){DH.persist()}
function saveAll(){DH.after()}
function findCustomer(phone){var k=phoneKey(phone);if(!k)return null;return arr(D().customers).find(function(c){var q=phoneKey(c.phone);return q&&(q===k||(q.slice(-8)===k.slice(-8)&&k.length>=8))})||null}
function sales(){var d=D();if(!Array.isArray(d.directSales))d.directSales=[];return d.directSales}
function saleByKey(key){return key?arr(D().directSales).find(function(s){return s.key===key}):null}
function paidOf(s){return r3(arr(s.payments).reduce(function(a,x){return a+num(x.amount)},0)-arr(s.ops).reduce(function(a,x){return a+num(x.refund)},0))}
function netTotal(s){return r3(num(s.total)-arr(s.ops).reduce(function(a,x){return a+num(x.value)},0))}
function remainingOf(s){return Math.max(0,r3(netTotal(s)-paidOf(s)))}
function retQty(s,name){var k=norm(name),t=0;arr(s.ops).forEach(function(o){arr(o.items).forEach(function(i){if(norm(i.name)===k)t+=num(i.qty)})});return t}
function statusOf(s){var all=arr(s.items).every(function(i){return num(i.qty)-retQty(s,i.name)<=1e-9});if(all&&arr(s.ops).length)return 'void';return arr(s.ops).length?'returned':'completed'}
function payStateOf(s){if(statusOf(s)==='void')return 'void';var r=remainingOf(s),p=paidOf(s);if(r<=0.0005)return 'paid';return p>0.0005?'partial':'credit'}
function by(){var w=who();return {id:w?w.id:'?',name:w?w.name:ownerName()}}

function commit(dr){
  if(busy)return {ok:false,error:'جاري الحفظ…'};
  busy=true;
  try{
    dr=dr||{};
    var dup=saleByKey(dr.key);
    if(dup)return {ok:true,dup:true,sale:dup};
    if(!dr.key)return {ok:false,error:'مفتاح العملية مفقود.'};
    if(!perm(P_SELL))return {ok:false,error:'ليست لديك صلاحية البيع المباشر.'};
    var c=calc(dr),errs=validateLines(c);
    if(c.invDisc-(c.lpVal||0)-(c.cpVal||0)>0.0005&&!(perm(P_DISC)||(window.EMD451&&EMD451.ok())))errs.push('لا تملك صلاحية خصم الفاتورة.');
    if(!(c.total>0)&&!(c.lpVal>0))errs.push('إجمالي الفاتورة يجب أن يكون أكبر من صفر.');
    var mode=dr.mode||'full',method=dr.method||'cash',paid=0;
    if(!METHODS[method])errs.push('اختر وسيلة دفع صحيحة.');
    if(mode==='full')paid=c.total;else if(mode==='partial')paid=r3(num(dr.amount));else if(mode==='credit')paid=0;else if(mode==='split'){paid=r3(num(dr.sa)+num(dr.sb));if(!(num(dr.sa)>0&&num(dr.sb)>0))errs.push('اكتب مبلغ كل وسيلة في الدفع المقسّم.');if(!METHODS[dr.ma]||!METHODS[dr.mb])errs.push('اختر وسيلة صحيحة لكل مبلغ.');else if(dr.ma===dr.mb)errs.push('اختر وسيلتين مختلفتين في الدفع المقسّم.')}else errs.push('نوع الدفع غير معروف.');
    if(mode==='partial'&&!(paid>0))errs.push('اكتب المبلغ المدفوع في الدفع الجزئي.');
    if(paid>c.total+0.0005)errs.push('المبلغ المدفوع أكبر من إجمالي الفاتورة.');
    if(paid<0)errs.push('المبلغ المدفوع غير صحيح.');
    var rem=r3(c.total-paid);
    var cn=String(dr.custName||'').trim(),cp=phoneKey(dr.custPhone);
    if(rem>0.0005&&cp.length<7)errs.push('اكتب رقم هاتف العميل لتسجيل المبلغ المتبقي (آجل/جزئي).');
    if(cp&&cp.length<7)errs.push('رقم الهاتف غير صحيح.');
    if(errs.length)return {ok:false,error:errs.join('\n'),errors:errs};
    /* ---- التنفيذ: لقطة للتراجع ثم تعديل ثم كتابة واحدة ---- */
    var d=D(),at=new Date().toISOString(),seq=num(d.directSeq)+1,id='DS-'+pad(seq,4);
    var snap={seq:d.directSeq,len:arr(d.directSales).length,stock:[],newCust:null,custSales:null,hadSales:Array.isArray(d.directSales)};
    var sale={id:id,no:seq,key:dr.key,at:at,by:by(),tendered:(mode==='full'&&method==='cash'&&num(dr.tender)>0)?r3(num(dr.tender)):0,
      items:c.lines.map(function(l){var o={name:l.p.name,qty:l.qty,price:l.price,disc:l.disc,net:l.net,cost:l.cost};if(l.ofn){o.of=l.ofn;o.rp=l.rp}return o}),
      subtotal:c.sub,discount:c.invDisc,total:c.total,coupon:c.cpCode?{code:c.cpCode,value:c.cpVal}:undefined,
      payments:paid>0?(mode==='split'?[{amount:r3(num(dr.sa)),method:dr.ma,at:at,by:by(),type:'sale'},{amount:r3(num(dr.sb)),method:dr.mb,at:at,by:by(),type:'sale'}]:[{amount:paid,method:method,at:at,by:by(),type:'sale'}]):[],ops:[],
      customer:{name:cn,phone:cp},lp:(window.EMDLoyV434?EMDLoyV434.stamp(c,cp):undefined),note:String(dr.note||'').trim(),stockApplied:true};
    try{
      sale.items.forEach(function(it){var p=findP(it.name);snap.stock.push({p:p,prev:p.stock,prevU:p.updatedAt});p.stock=r3(Number(p.stock||0)-it.qty);p.updatedAt=at});
      d.directSeq=seq;sales().push(sale);
      if(cp){
        var cu=findCustomer(cp);
        if(cu){snap.custSales=cu.directSales?cu.directSales.slice():null;snap.cu=cu;if(cn&&!String(cu.name||'').trim())cu.name=cn;cu.directSales=arr(cu.directSales).concat([id])}
        else{cu={name:cn,phone:cp,place:'',orders:[],directSales:[id]};if(!Array.isArray(d.customers))d.customers=[];d.customers.push(cu);snap.newCust=cu}
      }
      persistRaw();
    }catch(e){
      snap.stock.forEach(function(s){s.p.stock=s.prev;s.p.updatedAt=s.prevU});
      d.directSeq=snap.seq;d.directSales.length=snap.len;
      if(snap.newCust){var ix=d.customers.indexOf(snap.newCust);if(ix>=0)d.customers.splice(ix,1)}
      if(snap.cu){if(snap.custSales)snap.cu.directSales=snap.custSales;else delete snap.cu.directSales}
      try{persistRaw()}catch(e2){}
      return {ok:false,error:'تعذّر الحفظ (مساحة التخزين ممتلئة أو خطأ بالمتصفح). لم تُسجّل الفاتورة ولم يتغيّر المخزون.'};
    }
    
    saveAll();
    return {ok:true,sale:sale};
  }finally{busy=false}
}

function collect(id,amount,method,note){
  var s=arr(D().directSales).find(function(x){return x.id===id});
  if(!s)return {ok:false,error:'الفاتورة غير موجودة.'};
  if(!perm(P_SELL))return {ok:false,error:'ليست لديك صلاحية تسجيل التحصيل.'};
  if(statusOf(s)==='void')return {ok:false,error:'الفاتورة ملغاة.'};
  amount=r3(num(amount));var rem=remainingOf(s);
  if(!(amount>0))return {ok:false,error:'اكتب مبلغ التحصيل.'};
  if(amount>rem+0.0005)return {ok:false,error:'المبلغ أكبر من المتبقي ('+fmt(rem)+' '+CUR+').'};
  if(!METHODS[method])return {ok:false,error:'اختر وسيلة الدفع.'};
  var rec={amount:amount,method:method,at:new Date().toISOString(),by:by(),type:'collect',note:String(note||'')};
  s.payments.push(rec);
  try{persistRaw()}catch(e){s.payments.pop();return {ok:false,error:'تعذّر الحفظ.'}}
  saveAll();return {ok:true,sale:s};
}

/* إلغاء/إرجاع: عملية مستقلة تعيد المخزون وتعالج المبالغ */
function returnItems(id,list,refundMethod,reason,isVoid){
  var s=arr(D().directSales).find(function(x){return x.id===id});
  if(!s)return {ok:false,error:'الفاتورة غير موجودة.'};
  if(!perm(P_RET))return {ok:false,error:'ليست لديك صلاحية الإلغاء أو الإرجاع.'};
  if(statusOf(s)==='void')return {ok:false,error:'الفاتورة ملغاة مسبقًا.'};
  var its=[];
  if(isVoid){s.items.forEach(function(i){var q=r3(num(i.qty)-retQty(s,i.name));if(q>0)its.push({name:i.name,qty:q})})}
  else arr(list).forEach(function(x){var q=num(x.qty);if(q>0)its.push({name:x.name,qty:q})});
  if(!its.length)return {ok:false,error:'اختر كمية للإرجاع.'};
  var ratio=0,sumNet=s.items.reduce(function(a,i){return a+num(i.net)},0);ratio=sumNet>0?num(s.total)/sumNet:1;
  var value=0,out=[];
  for(var k=0;k<its.length;k++){
    var line=s.items.find(function(i){return norm(i.name)===norm(its[k].name)});
    if(!line)return {ok:false,error:'صنف غير موجود في الفاتورة.'};
    var left=r3(num(line.qty)-retQty(s,line.name));
    if(its[k].qty>left+1e-9)return {ok:false,error:'كمية الإرجاع أكبر من المتبقي في «'+line.name+'».'};
    value=r3(value+num(line.net)/num(line.qty)*ratio*its[k].qty);out.push({name:line.name,qty:its[k].qty});
  }
  var net0=netTotal(s),allBack=s.items.every(function(i){var q=num(i.qty)-retQty(s,i.name);var o=out.find(function(z){return norm(z.name)===norm(i.name)});return q-(o?o.qty:0)<=1e-9});
  if(allBack||value>net0)value=net0;
  var newNet=r3(net0-value),refund=Math.max(0,r3(paidOf(s)-newNet));
  if(refund>0&&!METHODS[refundMethod])refundMethod='cash';
  var op={id:'R'+Date.now().toString(36),type:allBack&&isVoid?'void':'return',at:new Date().toISOString(),by:by(),items:out,value:value,refund:refund,method:refund>0?refundMethod:'',reason:String(reason||'')};
  var prev=[];
  try{
    out.forEach(function(o){var p=findP(o.name);if(p){prev.push({p:p,prev:p.stock,u:p.updatedAt});p.stock=r3(Number(p.stock||0)+o.qty);p.updatedAt=op.at}});
    s.ops.push(op);persistRaw();
  }catch(e){prev.forEach(function(x){x.p.stock=x.prev;x.p.updatedAt=x.u});s.ops.pop();return {ok:false,error:'تعذّر الحفظ.'}}
  DH.restock();
  saveAll();return {ok:true,sale:s,op:op};
}

/* ---------- التقارير: تُضاف للمالية ومميّزة عن الطلبات ---------- */
function summary(s0,e0){
  var o={count:0,sales:0,col:0,due:0,cost:0,returns:0};
  arr(D()&&D().directSales).forEach(function(s){
    var t=new Date(s.at);if(isNaN(t)||t<s0||t>=e0)return;
    if(statusOf(s)==='void'){return}
    var nt=netTotal(s),pd=Math.min(paidOf(s),nt);
    o.count++;o.sales+=nt;o.col+=pd;
    var ratio=num(s.total)>0?nt/num(s.total):0;
    o.cost+=s.items.reduce(function(a,i){return a+num(i.cost)*Math.max(0,num(i.qty)-retQty(s,i.name))},0);
  });
  o.due=Math.max(0,r3(o.sales-o.col));o.sales=r3(o.sales);o.col=r3(o.col);o.cost=r3(o.cost);return o;
}
/* تحصيلات الفترة حسب تاريخ الدفع (مثل درج النقد) */
function cashIn(s0,e0){
  var t=0;arr(D()&&D().directSales).forEach(function(s){arr(s.payments).forEach(function(p){var d=new Date(p.at);if(!isNaN(d)&&d>=s0&&d<e0)t+=num(p.amount)});arr(s.ops).forEach(function(p){var d=new Date(p.at);if(!isNaN(d)&&d>=s0&&d<e0)t-=num(p.refund)})});return r3(t);
}

/* ---------- طباعة الفاتورة / PDF ---------- */
function n443(s){var its=arr(s.items).map(function(i){return {name:String(i.name),qty:num(i.qty),price:num(i.price),net:num(i.net)||num(i.qty)*num(i.price),sku:String(i.sku||i.barcode||i.code||''),ret:retQty(s,i.name)}});var sub=num(s.subtotal)||its.reduce(function(a,i){return a+i.net},0),nt=netTotal(s),ps=arr(s.payments),m=ps.length===1?ps[0].method:(ps.length?'mixed':'');function ml(k){return k==='exchange'?'رصيد مرتجع (استبدال)':String(METHODS[k]||k).replace(/^\S+\s/,'')}return {kind:'sale',id:s.id,date:new Date(s.at),cust:{name:String(s.customer&&s.customer.name||''),phone:String(s.customer&&s.customer.phone||''),addr:''},items:its,subtotal:sub,discount:num(s.discount),total:nt,paid:Math.min(paidOf(s),nt),remaining:remainingOf(s),method:m==='mixed'?'دفع مقسّم':(m?ml(m):''),pays:ps.length>1||ps.some(function(p){return p.type==='collect'})?ps.map(function(p){return {l:ml(p.method)+(p.type==='collect'?' (تحصيل)':''),at:fdt(p.at),amt:num(p.amount)}}):[],ops:arr(s.ops).map(function(o){return {l:o.type==='void'?'إلغاء الفاتورة':(o.exTo?'استبدال':'مرتجع'),at:fdt(o.at),amt:num(o.value)}}),note:String(s.note||''),cashier:String(s.by&&s.by.name||''),status:statusOf(s)==='void'?'void':''}}
function invoiceHtml(s){
  var rows=s.items.map(function(i){var rq=retQty(s,i.name);return '<tr><td>'+esc(i.name)+(rq>0?' <small>(مرتجع '+rq+')</small>':'')+'</td><td>'+i.qty+'</td><td>'+fmt(i.price)+'</td><td>'+fmt(i.net)+'</td></tr>'}).join('');
  var pays=arr(s.payments).map(function(p){return '<tr><td>'+esc(String(METHODS[p.method]||p.method).replace(/^\S+\s/,''))+(p.type==='collect'?' (تحصيل)':'')+'</td><td colspan="2">'+esc(fdt(p.at))+'</td><td>'+fmt(p.amount)+'</td></tr>'}).join('');
  var refs=arr(s.ops).map(function(o){return '<tr><td>'+(o.type==='void'?'إلغاء الفاتورة':'مرتجع')+'</td><td colspan="2">'+esc(fdt(o.at))+'</td><td>−'+fmt(o.value)+'</td></tr>'}).join('');
  var st=statusOf(s);
  return '<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>فاتورة '+esc(s.id)+'</title><style>body{font-family:Tahoma,Arial,sans-serif;margin:0;padding:14px;color:#111;font-size:14px}.w{max-width:380px;margin:auto}h1{font-size:19px;margin:0;text-align:center}.c{text-align:center;color:#555;font-size:12px}table{width:100%;border-collapse:collapse;margin:8px 0}th,td{padding:5px 3px;border-bottom:1px dashed #bbb;text-align:right}th{font-size:12px;color:#555}.t td{font-weight:800;border-bottom:0}.v{border:2px solid #b91c1c;color:#b91c1c;text-align:center;font-weight:900;padding:4px;margin:6px 0}.f{text-align:center;color:#666;font-size:12px;margin-top:10px}</style></head><body><div class="w"><h1>'+esc(storeName())+'</h1><div class="c">فاتورة بيع مباشر</div><div class="c" dir="ltr">'+esc(s.id)+'</div><div class="c">'+esc(fdt(s.at))+'</div>'
   +(s.customer&&(s.customer.name||s.customer.phone)?'<div class="c">العميل: '+esc(s.customer.name||'')+' '+esc(s.customer.phone||'')+'</div>':'')
   +(st==='void'?'<div class="v">ملغاة</div>':'')
   +'<table><tr><th>الصنف</th><th>الكمية</th><th>السعر</th><th>المجموع</th></tr>'+rows+'</table>'
   +'<table class="t"><tr><td colspan="3">المجموع قبل الخصم</td><td>'+fmt(s.subtotal)+'</td></tr>'+(num(s.discount)>0?'<tr><td colspan="3">الخصم</td><td>−'+fmt(s.discount)+'</td></tr>':'')+'<tr><td colspan="3">الإجمالي</td><td>'+fmt(s.total)+' '+CUR+'</td></tr>'+refs+pays
   +'<tr><td colspan="3">المدفوع</td><td>'+fmt(paidOf(s))+'</td></tr><tr><td colspan="3">المتبقي</td><td>'+fmt(remainingOf(s))+'</td></tr></table>'
   +(s.note?'<div class="c">ملاحظة: '+esc(s.note)+'</div>':'')+'<div class="f">شكرًا لتعاملكم · '+esc(storeName())+'</div></div></body></html>';
}
function printSale(s){if(window.EMDInvV443){try{EMDInvV443.print(n443(s));return}catch(e){console.warn('V443',e)}}
  try{
    var old=$('emd113Frame');if(old)old.remove();
    var f=document.createElement('iframe');f.id='emd113Frame';f.style.cssText='position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0';
    document.body.appendChild(f);var w=f.contentWindow;w.document.open();w.document.write(invoiceHtml(s));w.document.close();
    setTimeout(function(){try{w.focus();w.print()}catch(e){toast('تعذّرت الطباعة من هذا المتصفح')}},350);
    window.__emd113LastPrint=s.id;
  }catch(e){toast('تعذّرت الطباعة')}
}
function waText(s){
  var L=['🧾 فاتورة '+s.id+' — '+storeName(),fdt(s.at),''];
  s.items.forEach(function(i){L.push('• '+i.name+' × '+i.qty+' = '+fmt(i.net)+' '+CUR)});
  if(num(s.discount)>0)L.push('الخصم: '+fmt(s.discount)+' '+CUR);
  L.push('','الإجمالي: '+fmt(netTotal(s))+' '+CUR,'المدفوع: '+fmt(paidOf(s))+' '+CUR);
  if(remainingOf(s)>0.0005)L.push('المتبقي: '+fmt(remainingOf(s))+' '+CUR);
  if(window.EMDLoyV434)try{var lpl=EMDLoyV434.waLine(s);if(lpl)L.push('',lpl)}catch(e){}L.push('','شكرًا لتعاملكم 🌷');return L.join('\n');
}
function waPhone(p){var d=phoneKey(p);if(d.indexOf('00')===0)d=d.slice(2);if(d.length===8)d='968'+d;return d}
function shareWa(s){window.open('https://wa.me/'+waPhone(s.customer&&s.customer.phone)+'?text='+encodeURIComponent(waText(s)),'_blank')}

/* ---------- الواجهة ---------- */
var S={cat:'',tender:'',sa:'',sb:'',ma:'cash',mb:'card',open:false,tab:'new',q:'',cart:[],discount:'',discMode:'amt',mode:'full',method:'cash',amount:'',custName:'',custPhone:'',note:'',key:'',done:null,err:'',detail:null,lq:'',lp:'today',lm:'all',more:false};
function newKey(){return 'k'+Date.now().toString(36)+Math.random().toString(36).slice(2,9)}
function saveDraft(){try{localStorage.setItem(DRAFT,JSON.stringify({key:S.key,cart:S.cart,discount:S.discount,discMode:S.discMode,mode:S.mode,method:S.method,amount:S.amount,custName:S.custName,custPhone:S.custPhone,note:S.note,sa:S.sa,sb:S.sb,ma:S.ma,mb:S.mb}))}catch(e){}}
function loadDraft(){try{var d=JSON.parse(localStorage.getItem(DRAFT)||'null');if(d&&d.key){S.key=d.key;S.cart=arr(d.cart);['discount','discMode','mode','method','amount','custName','custPhone','note','sa','sb','ma','mb'].forEach(function(k){if(d[k]!=null)S[k]=d[k]});return true}}catch(e){}return false}
function resetSale(){S.tender='';S.sa='';S.sb='';S.ma='cash';S.mb='card';S.cart=[];S.e451cp='';S.discount='';S.discMode='amt';S.mode='full';S.method=window.EMD449?EMD449.defMethod():'cash';S.amount='';S.custName='';S.custPhone='';S.note='';S.key=newKey();S.err='';S.done=null;S.q='';try{localStorage.removeItem(DRAFT)}catch(e){}}
function draft(){return {cp:S.e451cp||'',key:S.key,items:S.cart,discount:S.discount,discMode:S.discMode,mode:S.mode,method:S.method,amount:S.amount,custName:S.custName,custPhone:S.custPhone,note:S.note,sa:S.sa,sb:S.sb,ma:S.ma,mb:S.mb,tender:S.tender}}

function ensure(){
  var ov=$('emd113Ov');if(ov)return ov;
  ov=document.createElement('div');ov.id='emd113Ov';ov.className='emd113-ov';
  ov.innerHTML='<div class="emd113-sheet" role="dialog" aria-label="البيع المباشر"><div class="emd113-top"><div class="emd113-hrow"><h2>🛒 البيع المباشر</h2><span class="e448-keys"><kbd>F2</kbd> بحث · <kbd>F9</kbd> إتمام البيع · <kbd>Esc</kbd> إغلاق</span><button type="button" class="emd113-x e449-gear" data-e449="set" aria-label="إعدادات الكاشير" title="إعدادات الكاشير">⚙️</button><button class="emd113-x" data-a="close" aria-label="إغلاق">✕</button></div><div class="emd113-tabs"><button class="emd113-tab" data-a="tab" data-v="new">🛒 بيع جديد</button><button class="emd113-tab" data-a="tab" data-v="list">🧾 الفواتير</button><button class="emd113-tab" data-a="tab" data-v="cust">👥 العملاء</button><button class="emd113-tab e419only" data-a="tab" data-v="shift">🗃️ الوردية</button></div></div><div class="emd113-body" id="emd113Body"></div><div class="emd113-ft" id="emd113Ft"></div></div>';
  document.body.appendChild(ov);
  ov.addEventListener('click',onClick);ov.addEventListener('input',onInput);ov.addEventListener('change',onInput);
  return ov;
}
function open(tab,detailId){
  if(!perm(P_SELL)&&!(tab==='list'&&perm('finance'))){toast('ليست لديك صلاحية البيع المباشر');return}
  var ov=ensure();if(!S.key){if(!loadDraft())S.key=newKey()}
  S.open=true;S.tab=tab||S.tab||'new';S.detail=detailId||null;S.done=null;ov.classList.add('show');render();
}
function close(){S.open=false;var ov=$('emd113Ov');if(ov)ov.classList.remove('show');saveDraft()}
function tabsSync(){[].forEach.call(document.querySelectorAll('#emd113Ov .emd113-tab'),function(b){b.classList.toggle('on',b.getAttribute('data-v')===S.tab)})}
function render(){
  if(!S.open)return;tabsSync();if(window.EMD449)EMD449.sync(S);
  if(S.done)return renderDone();
  if(S.tab==='shift'&&window.EMD420){$('emd113Ft').style.display='none';return EMD420.renderShift($('emd113Body'))}
  if(S.tab==='cust'&&window.EMDLoyV434){$('emd113Ft').style.display='none';return EMDLoyV434.renderTab($('emd113Body'))}
  if(S.tab==='list')return S.detail?renderDetail():renderList();
  renderNew();
}
var SALE_DEF=['cust','prod','note','cart','pay'];
function saleOrder(){return SALE_DEF}
function renderNew(){
  var b=$('emd113Body');
  var canD=(perm(P_DISC)||!!(window.EMD451&&EMD451.canDisc()))&&(!window.EMD449||EMD449.opt('invDisc'));
  var sec={
   cust:'<div class="emd113-box e448-cust'+(S.custName||S.custPhone||S.e448c?' open':'')+'"><button type="button" class="e448-cadd" data-a="e448cust">👤 إضافة عميل <small>(اختياري)</small></button><h3>👤 بيانات العميل <small style="color:#64748b;font-weight:400">(اختياري)</small></h3><div class="emd113-g2"><input class="emd113-in" id="emd113CN" placeholder="اسم العميل" value="'+esc(S.custName)+'"><input class="emd113-in" id="emd113CP" inputmode="tel" placeholder="رقم الهاتف" value="'+esc(S.custPhone)+'"></div><div id="emd113Sug"></div><div id="emd113Cust"></div></div>',
   prod:'<div class="emd113-box"><h3>🔎 المنتجات</h3><input class="emd113-in" id="emd113Q" placeholder="'+(window.EMD419&&EMD419.on()?'ابحث بالاسم أو امسح الباركود…':'ابحث بالاسم أو جزء منه…')+'" value="'+esc(S.q)+'" autocomplete="off">'+(window.EMD419?EMD419.prodTools(S):'')+(window.EMD451?EMD451.quick(S):'')+'<div class="emd113-pl" id="emd113Pl"></div></div>',
   note:'<div class="emd113-box e449-note"><h3>📝 ملاحظات <small style="color:#64748b;font-weight:400">(اختياري)</small></h3><input class="emd113-in" id="emd113Note" placeholder="ملاحظات على الفاتورة" value="'+esc(S.note)+'"></div>',
   cart:'<div class="emd113-box"><h3>🧺 الفاتورة</h3><div id="emd113No" style="color:#64748b;font-size:12.5px;margin:-4px 0 8px"></div><div id="emd113Cart"></div>'
    +(canD?'<div class="emd113-g2" style="margin-top:6px"><input class="emd113-in" id="emd113Disc" inputmode="decimal" placeholder="خصم على الفاتورة" value="'+esc(S.discount)+'"><select class="emd113-in" id="emd113DM"><option value="amt"'+(S.discMode==='amt'?' selected':'')+'>'+CUR+'</option><option value="pct"'+(S.discMode==='pct'?' selected':'')+'>٪ نسبة</option></select></div>':'')+(window.EMD451?EMD451.cpBox(S):'')+'</div>',
   pay:'<div class="emd113-box"><h3>💳 استلام المبلغ</h3><div class="emd113-chips" id="emd113Mode"></div><div class="emd113-chips" id="emd113Meth"></div><div id="emd113AmtBox"></div><div id="emd419Pay"></div><div class="emd113-sum" id="emd113Sum"></div><div id="emd113Err"></div></div>'
  };
  var o448=saleOrder(),f448=function(k){return sec[k]||''},r448=function(k){return k==='cart'||k==='pay'};b.innerHTML=(window.EMD420?EMD420.heldBar():'')+(window.innerWidth>=900?'<div class="emd113-cols e448-pos"><div class="e448-l">'+o448.filter(function(k){return !r448(k)}).map(f448).join('')+'</div><div class="e448-r">'+o448.filter(r448).map(f448).join('')+'</div></div>':'<div class="emd113-cols">'+o448.map(f448).join('')+'</div>');
  renderProducts();recalc();
}
function renderProducts(){
  var el=$('emd113Pl');if(!el)return;if(window.EMD419)try{EMD419.applyView()}catch(e){}var q=norm(S.q),ps=products().filter(function(p){return p&&String(p.name||'').trim()&&(!q||norm(p.name).indexOf(q)>=0||norm(p.code||p.sku||'').indexOf(q)>=0||(S.q.trim()&&String(p.barcode||'').indexOf(S.q.trim())>=0))&&(!S.cat||String(p.category||'').trim()===S.cat)});
  ps.sort(function(a,b){return String(a.name).localeCompare(String(b.name),'ar')});if(window.EMD450)ps=EMD450.collapse(ps,S.q);
  if(!ps.length){setH(el,'<div class="emd113-note">'+(products().length?'لا يوجد منتج بهذا الاسم.':'لم تُضف منتجات بعد. أضفها من قسم «📦 المنتجات».')+'</div>');return}
  setH(el,ps.slice(0,80).map(function(p,i){
    if(p&&p.__grp)return EMD450.card(p);
    var av=available(p.name),pr=catPrice(p),inCart=0;S.cart.forEach(function(c){if(norm(c.name)===norm(p.name))inCart+=num(c.qty)});
    var pu=DH.img(p),img=pu?'style="background-image:url(\''+String(pu).replace(/['"\\()\s]/g,function(c){return encodeURIComponent(c)})+'\')"':'';
    return '<div class="emd113-p'+(av-inCart<=0?' out':'')+'" data-a="add" data-v="'+esc(p.name)+'"><div class="emd113-img" '+img+'>'+(pu?'':'📦')+'</div><div class="n"><b>'+esc(p.name)+'</b><small>المتاح: <b style="display:inline;color:'+(av-inCart<=0?'#b91c1c':'#166534')+'">'+(av-inCart)+'</b>'+(inCart?' · في الفاتورة '+inCart:'')+'</small></div><div class="pr">'+(pr?(window.EMDPxV433?EMDPxV433.grid(p,pr,fmt):fmt(pr)):'<small>بلا سعر</small>')+'</div><button class="emd113-add" aria-label="إضافة" tabindex="-1">+</button></div>'}).join(''));
}
function cartHtml(c){
  if(!c.lines.length)return '<div class="emd113-note">اضغط على أي منتج لإضافته للفاتورة.</div>';
  var canD=perm(P_DISC)||!!(window.EMD451&&EMD451.canDisc()),canL=canD&&(!window.EMD449||EMD449.opt('lineDisc'));
  return c.lines.map(function(l,i){
    var priceFree=!(l.cat>0)||(canD&&(!window.EMD449||EMD449.opt('price')));
    return '<div class="emd113-line"><div class="r1"><b>'+(window.EMD450?EMD450.lineName(l.name):esc(l.name))+(window.EMDPxV433?EMDPxV433.tag(l):'')+'</b><button class="emd113-del" data-a="del" data-v="'+i+'" aria-label="حذف">🗑️</button></div><div class="r2"><div class="emd113-qty"><button data-a="dec" data-v="'+i+'" aria-label="إنقاص">−</button><input data-f="qty" data-i="'+i+'" inputmode="numeric" value="'+esc(l.qty)+'"><button data-a="inc" data-v="'+i+'" aria-label="زيادة">+</button></div>'
     +(priceFree?'<input class="emd113-mini" data-f="price" data-i="'+i+'" inputmode="decimal" placeholder="السعر" value="'+esc(l.price)+'">':'<span style="font-weight:700">× '+fmt(l.price)+'</span>')
     +(canL?'<input class="emd113-mini" data-f="disc" data-i="'+i+'" inputmode="decimal" placeholder="خصم" value="'+(l.disc&&!l.auto?esc(l.disc):'')+'">':'')
     +'<span class="emd113-lt">'+fmt(l.net)+'</span></div></div>'}).join('');
}
function recalc(){
  if(window.EMD449)EMD449.fix(S);var c=calc(draft());
  var cart=$('emd113Cart');
  if(cart&&!cart.contains(document.activeElement))setH(cart,cartHtml(c));
  else if(cart){/* لا نعيد رسم الحقل الذي يكتب فيه المستخدم؛ نحدّث إجمالي الأسطر فقط */var ts=cart.querySelectorAll('.emd113-lt');c.lines.forEach(function(l,i){if(ts[i])ts[i].textContent=fmt(l.net)})}
  var no=$('emd113No');if(no)no.innerHTML='رقم الفاتورة القادم: <span dir="ltr">DS-'+pad(num(D().directSeq)+1,4)+'</span> · '+esc(fdt(new Date().toISOString()));
  var mode=$('emd113Mode');
  if(mode)setH(mode,[['full','✅ دفع كامل'],['partial','🌓 دفع جزئي'],['credit','⏳ آجل']].concat(window.EMD419&&EMD419.on()?[['split','➗ مقسّم']]:[]).filter(function(m){return !window.EMD449||EMD449.modeOk(m[0])}).map(function(m){return '<button class="emd113-chip'+(S.mode===m[0]?' on':'')+'" data-a="mode" data-v="'+m[0]+'">'+m[1]+'</button>'}).join(''));
  var meth=$('emd113Meth');
  if(meth)setH(meth,(S.mode==='credit'||S.mode==='split')?'':Object.keys(METHODS).filter(function(k){return !window.EMD449||EMD449.methOk(k)}).map(function(k){return '<button class="emd113-chip'+(S.method===k?' on':'')+'" data-a="method" data-v="'+k+'">'+METHODS[k]+'</button>'}).join(''));
  var ab=$('emd113AmtBox');
  if(ab){var has=$('emd113Amt');if(S.mode==='partial'&&!has)ab.innerHTML='<input class="emd113-in" id="emd113Amt" inputmode="decimal" placeholder="المبلغ المستلم الآن ('+CUR+')" value="'+esc(S.amount)+'">';else if(S.mode!=='partial'&&has)ab.innerHTML=''}
  var paid=S.mode==='split'?Math.min(c.total,r3(num(S.sa)+num(S.sb))):S.mode==='full'?c.total:(S.mode==='credit'?0:Math.min(c.total,Math.max(0,r3(num(S.amount)))));
  var rem=r3(c.total-paid);
  setH($('emd113Sum'),(c.invDisc>0?'<div class="r"><span>قبل الخصم</span><span>'+fmt(c.sub)+'</span></div><div class="r"><span>الخصم</span><span>−'+fmt(c.invDisc)+'</span></div>':'')+'<div class="r big"><span>الإجمالي</span><span>'+fmt(c.total)+' '+CUR+'</span></div><div class="r ok"><span>المبلغ المدفوع</span><span>'+fmt(paid)+' '+CUR+'</span></div><div class="r '+(rem>0.0005?'rem':'')+'"><span>المتبقي'+(rem>0.0005?' (مستحق على العميل)':'')+'</span><span>'+fmt(rem)+' '+CUR+'</span></div>');
  try{if(window.EMD419)EMD419.payBox(S,c)}catch(e){}
  var ft=$('emd113Ft');
  var n=c.lines.reduce(function(a,l){return a+(l.qty||0)},0);
  setH(ft,'<div class="t" data-a="e448cart"><span>'+n+' قطعة · '+c.lines.length+' صنف'+(c.lines.length?' <u class="e448-see">عرض الفاتورة</u>':'')+'</span><span>'+fmt(c.total)+' '+CUR+'</span></div>'+(window.EMD420?EMD420.holdBtn(c):'')+'<button class="emd113-go" data-a="go"'+(S.tab!=='new'||!c.lines.length?' disabled':'')+'>✅ إتمام البيع واستلام المبلغ</button>');
  ft.style.display=S.tab==='new'&&!S.done?'':'none';
  var er=$('emd113Err');if(er)setH(er,S.err?'<div class="emd113-err">'+esc(S.err).replace(/\n/g,'<br>')+'</div>':'');
  var cu=$('emd113Cust');if(cu){var f=S.custPhone&&phoneKey(S.custPhone).length>=7?findCustomer(S.custPhone):null;
    if(f){var prevN=arr(D().directSales).filter(function(s){return phoneKey(s.customer&&s.customer.phone).slice(-8)===phoneKey(f.phone).slice(-8)}).length;cu.innerHTML='<div class="emd113-note" style="background:#ecfdf5;color:#065f46">عميل محفوظ: '+esc(f.name||f.phone)+' · '+arr(f.orders).length+' طلب · '+prevN+' بيع مباشر سابق</div>'}else if(S.custPhone&&phoneKey(S.custPhone).length>=7)cu.innerHTML='<div class="emd113-note">عميل جديد — يُحفظ تلقائيًا عند إتمام البيع.</div>';else cu.innerHTML='';if(window.EMDLoyV434)try{EMDLoyV434.pos(cu,S,c)}catch(e){}}
  saveDraft();
}
function setH(el,h){if(!el)return;if(el.__h===h)return;el.__h=h;el.innerHTML=h}
/* اقتراح العملاء أثناء كتابة جزء من الاسم أو الرقم (من العملاء والطلبات والبيع المباشر) */
function allCustomers(){
  var m={},out=[],d=D();
  function add(n,p){var k=phoneKey(p);if(!k&&!String(n||'').trim())return;var key=k?k.slice(-8):'n:'+norm(n);if(m[key]){if(!m[key].name&&n)m[key].name=String(n).trim();return}var c={name:String(n||'').trim(),phone:k};m[key]=c;out.push(c)}
  arr(d.customers).forEach(function(c){add(c.name,c.phone)});
  arr(d.orders).forEach(function(o){add(o.name,o.phone)});
  arr(d.directSales).forEach(function(s){if(s.customer)add(s.customer.name,s.customer.phone)});
  return out;
}
function suggest(q,mode){
  var el=$('emd113Sug');if(!el)return;q=String(q||'').trim();
  if(!q){setH(el,'');return}
  var qd=phoneKey(q),qn=norm(q),list;
  if(mode==='p'){if(qd.length<2){setH(el,'');return}list=allCustomers().filter(function(c){return c.phone&&c.phone.indexOf(qd)>=0})}
  else{list=allCustomers().filter(function(c){return norm(c.name).indexOf(qn)>=0||(qd.length>=3&&c.phone.indexOf(qd)>=0)})}
  list=list.slice(0,6);
  if(!list.length){setH(el,'');return}
  setH(el,'<div style="margin-top:6px;border:1px solid #dbeafe;background:#f0f7ff;border-radius:12px;overflow:hidden"><div style="font-size:12px;color:#1e40af;padding:6px 10px">عملاء مطابقون — اضغط للاختيار</div>'+list.map(function(c,i){return '<button type="button" data-a="pickCust" data-v="'+i+'" style="display:flex;justify-content:space-between;gap:8px;width:100%;border:0;border-top:1px solid #dbeafe;background:#fff;padding:12px;font:inherit;font-size:15px;cursor:pointer;min-height:46px;text-align:right"><b>'+esc(c.name||'بدون اسم')+'</b><span dir="ltr">'+esc(c.phone)+'</span></button>'}).join('')+'</div>');
  el.__list=list;
}
function addToCart(name){
  var p=findP(name);if(!p)return;var av=available(name),inCart=0,ex=null;
  S.cart.forEach(function(c){if(norm(c.name)===norm(name)){inCart+=num(c.qty);ex=c}});
  if(inCart+1>av){toast('المخزون غير كافٍ لـ «'+p.name+'»: المتوفر '+av+(inCart?' وفي الفاتورة '+inCart:''));return}
  if(ex)ex.qty=num(ex.qty)+1;else S.cart.push({name:p.name,qty:1,price:'',disc:''});
  S.err='';renderProducts();recalc();
}
function onClick(e){
  var t=e.target.closest('[data-a]');if(!t)return;var a=t.getAttribute('data-a'),v=t.getAttribute('data-v');
  if(a==='close')return close();
  if(a==='tab'){S.tab=v;S.detail=null;S.done=null;return render()}
  if(a==='add')return addToCart(v);
  if(a==='del'){S.cart.splice(+v,1);S.err='';renderProducts();$('emd113Cart').blur&&0;return rerenderCart()}
  if(a==='inc'||a==='dec'){var l=S.cart[+v];if(!l)return;var nq=num(l.qty)+(a==='inc'?1:-1);if(nq<1)return;var av=available(l.name);if(nq>av){toast('المتوفر من «'+l.name+'» '+av+' فقط');return}l.qty=nq;S.err='';renderProducts();return rerenderCart()}
  if(a==='mode'){S.mode=v;S.err='';return recalc()}
  if(a==='method'){S.method=v;return recalc()}
  if(a==='pickCust'){var el=$('emd113Sug'),c=el&&el.__list&&el.__list[+v];if(!c)return;S.custName=c.name||S.custName;S.custPhone=c.phone||S.custPhone;var n1=$('emd113CN'),p1=$('emd113CP');if(n1)n1.value=S.custName;if(p1)p1.value=S.custPhone;setH(el,'');el.__list=null;return recalc()}
  if(a==='go')return finish();
  if(a==='new'){resetSale();S.tab='new';return render()}
  if(a==='img'){return invoiceImage(v)}
  if(a==='print'){var s=saleById(v);if(s)printSale(s);return}
  if(a==='wa'){var s2=saleById(v);if(s2)shareWa(s2);return}
  if(a==='open'){S.detail=v;return render()}
  if(a==='back'){S.detail=null;return render()}
  if(a==='lp'){S.lp=v;if(v==='range'&&!S.lf){S.lf=S.lt=dkey(new Date())}return renderList()}
  if(a==='lm'){S.lm=v;return renderList()}
  if(a==='collect')return doCollect(v);
  if(a==='retgo')return doReturn(v,false);
  if(a==='voidgo')return doReturn(v,true);
  if(a==='retopen'){S.more=!S.more;return renderDetail()}
}
function rerenderCart(){var cart=$('emd113Cart');if(cart)cart.blur;var c=calc(draft());setH(cart,cartHtml(c));recalc()}
function onInput(e){
  var t=e.target;if(!S.open)return;
  if(t.id==='emd113Q'){S.q=t.value;return renderProducts()}
  if(t.id==='emd113CN'){S.custName=t.value;if(e.type==='input')suggest(t.value,'n');return recalc()}
  if(t.id==='emd113CP'){S.custPhone=t.value;if(e.type==='input')suggest(t.value,'p');return recalc()}
  if(t.id==='emd113Note'){S.note=t.value;return saveDraft()}
  if(t.id==='emd113Disc'){S.discount=t.value;return recalc()}
  if(t.id==='emd113DM'){S.discMode=t.value;return recalc()}
  if(t.id==='emd113Amt'){S.amount=t.value;return recalc()}
  if(t.id==='emd113LF'){S.lf=t.value;return renderListBody()}
  if(t.id==='emd113LT'){S.lt=t.value;return renderListBody()}
  if(t.id==='emd113LQ'){S.lq=t.value;return renderListBody()}
  var f=t.getAttribute&&t.getAttribute('data-f');
  if(f){var l=S.cart[+t.getAttribute('data-i')];if(!l)return;
    if(f==='qty'){var q=num(t.value);if(t.value===''){return}l.qty=q}
    else if(f==='price')l.price=t.value;else if(f==='disc')l.disc=t.value;
    S.err='';
    if(e.type==='change'){var cart=$('emd113Cart');if(cart)setH(cart,cartHtml(calc(draft())));renderProducts()}
    return recalc();
  }
}
function finish(){
  if(window.EMD449&&EMD449.block())return;var d=draft();if(window.EMD451&&EMD451.guardFinish(d,finish))return;
  S.cart.forEach(function(l){l.qty=num(l.qty)});
  var go=document.querySelector('#emd113Ft .emd113-go');if(go)go.disabled=true;
  var r=commit(d);
  if(!r.ok){S.err=r.error;if(go)go.disabled=false;recalc();var b=$('emd113Body');if(b)b.scrollTop=b.scrollHeight;return}
  var did=r.sale.id;try{if(window.EMD451)EMD451.after(r.sale)}catch(e){}resetSale();S.done=did;render();try{if(window.EMD420)EMD420.afterSale(did)}catch(e){}
}
function saleById(id){return arr(D().directSales).find(function(s){return s.id===id})}
function renderDone(){
  var s=saleById(S.done);if(!s){S.done=null;return render()}
  $('emd113Ft').style.display='none';
  $('emd113Body').innerHTML='<div class="emd113-box emd113-ok"><div class="tick">✅</div><h2 style="margin:6px 0">تم البيع بنجاح</h2><dl class="emd113-dl" style="max-width:340px;margin:10px auto;text-align:right"><dt>رقم الفاتورة</dt><dd dir="ltr" style="text-align:right">'+esc(s.id)+'</dd><dt>الإجمالي</dt><dd>'+fmt(netTotal(s))+' '+CUR+'</dd><dt>المبلغ المستلم</dt><dd>'+fmt(paidOf(s))+' '+CUR+'</dd><dt>المتبقي</dt><dd style="color:'+(remainingOf(s)>0.0005?'#b45309':'#166534')+'">'+fmt(remainingOf(s))+' '+CUR+'</dd></dl>'
   +'<div class="emd113-chips" style="justify-content:center"><button class="emd113-btn w" data-a="img" data-v="'+esc(s.id)+'">🧾 إرسال الفاتورة (صورة)</button><button class="emd113-btn" data-a="print" data-v="'+esc(s.id)+'">🖨️ طباعة / PDF</button>'+(window.EMD420?EMD420.rcptBtn(s.id):'')+''+(s.customer&&s.customer.phone?'<button class="emd113-btn l" data-a="wa" data-v="'+esc(s.id)+'">💬 رسالة نصية</button>':'')+'<button class="emd113-btn g" data-a="new">➕ بيع جديد</button></div></div>';
}

/* ---------- قسم المبيعات المباشرة ---------- */
function prange(k){var n=new Date(),t0=new Date(n.getFullYear(),n.getMonth(),n.getDate());if(k==='range'){var f=S.lf?new Date(S.lf+'T00:00:00'):t0,u=S.lt?new Date(S.lt+'T00:00:00'):f;if(isNaN(f))f=t0;if(isNaN(u))u=f;if(u<f){var x=f;f=u;u=x}return [f,new Date(u.getTime()+864e5)]}if(k==='today')return [t0,new Date(t0.getTime()+864e5)];if(k==='week')return [new Date(t0.getTime()-6*864e5),new Date(t0.getTime()+864e5)];if(k==='month')return [new Date(n.getFullYear(),n.getMonth(),1),new Date(n.getFullYear(),n.getMonth()+1,1)];return [new Date(0),new Date(8.64e15)]}
function filtered(){
  var r=prange(S.lp),q=norm(S.lq),qd=phoneKey(S.lq);
  return arr(D().directSales).filter(function(s){
    var t=new Date(s.at);if(isNaN(t)||t<r[0]||t>=r[1])return false;
    if(S.lm!=='all'){
      var st=payStateOf(s);
      if(S.lm==='void'){if(statusOf(s)!=='void')return false}
      else if(S.lm==='due'){if(!(remainingOf(s)>0.0005&&statusOf(s)!=='void'))return false}
      else if(!arr(s.payments).some(function(p){return p.method===S.lm}))return false;
    }
    if(q){var hay=norm(s.id+' '+s.no+' '+(s.customer&&s.customer.name)+' '+(s.customer&&s.customer.phone));if(hay.indexOf(q)<0&&!(qd&&phoneKey(s.customer&&s.customer.phone).indexOf(qd)>=0))return false}
    return true}).sort(function(a,b){return String(b.at).localeCompare(String(a.at))});
}
function renderList(){
  $('emd113Ft').style.display='none';if(window.EMD448&&EMD448.list())return;
  var chips=function(cur,act,arr2){return '<div class="emd113-chips">'+arr2.map(function(p){return '<button class="emd113-chip'+(cur===p[0]?' on':'')+'" data-a="'+act+'" data-v="'+p[0]+'">'+p[1]+'</button>'}).join('')+'</div>'};
  $('emd113Body').innerHTML=(window.EMD448?EMD448.seg():'')+'<input class="emd113-in" id="emd113LQ" placeholder="🔎 ابحث برقم الفاتورة أو اسم العميل أو رقم الهاتف" value="'+esc(S.lq)+'" autocomplete="off">'
   +chips(S.lp,'lp',[['today','اليوم'],['week','آخر 7 أيام'],['month','هذا الشهر'],['range','📅 من تاريخ إلى تاريخ'],['all','الكل']])
   +(S.lp==='range'?'<div class="emd113-g2" style="margin:6px 0"><label style="font-size:13px;color:#475569">من تاريخ<input class="emd113-in" type="date" id="emd113LF" value="'+esc(S.lf||'')+'"></label><label style="font-size:13px;color:#475569">إلى تاريخ<input class="emd113-in" type="date" id="emd113LT" value="'+esc(S.lt||'')+'"></label></div>':'')
   +chips(S.lm,'lm',[['all','كل الوسائل'],['cash','💵 نقدًا'],['transfer','🏦 تحويل'],['card','💳 بطاقة'],['other','🔁 أخرى'],['due','⏳ عليها متبقي'],['void','🚫 ملغاة']])
   +'<div id="emd113LBody"></div>';
  renderListBody();
}
function renderListBody(){
  var el=$('emd113LBody');if(!el)return;var list=filtered(),a={n:0,sales:0,col:0,due:0};
  list.forEach(function(s){if(statusOf(s)==='void')return;a.n++;var nt=netTotal(s);a.sales+=nt;a.col+=Math.min(paidOf(s),nt)});a.due=Math.max(0,r3(a.sales-a.col));
  setH(el,'<div class="emd113-stats"><div class="emd113-stat"><small>عدد الفواتير</small><b>'+a.n+'</b></div><div class="emd113-stat"><small>إجمالي المبيعات</small><b>'+fmt(a.sales)+'</b></div><div class="emd113-stat"><small>المبالغ المحصّلة</small><b style="color:#15803d">'+fmt(a.col)+'</b></div><div class="emd113-stat"><small>المتبقي (غير محصّل)</small><b style="color:#b45309">'+fmt(a.due)+'</b></div></div>'
   +(list.length?list.slice(0,200).map(function(s){var ps=payStateOf(s),tag=ps==='void'?(arr(s.ops).some(function(o){return o.exTo})?'<span class="emd113-tag v">مُستبدلة</span>':'<span class="emd113-tag v">ملغاة</span>'):ps==='paid'?'<span class="emd113-tag p">مدفوعة</span>':ps==='partial'?'<span class="emd113-tag h">جزئي</span>':'<span class="emd113-tag c">آجل</span>';
     var m=arr(s.payments)[0];return '<div class="emd113-row" data-a="open" data-v="'+esc(s.id)+'"><div><b><span dir="ltr">'+esc(s.id)+'</span>'+tag+(arr(s.ops).length&&ps!=='void'?'<span class="emd113-tag v">مرتجع</span>':'')+'</b><small>'+esc(s.customer&&(s.customer.name||s.customer.phone)||'بدون عميل')+' · '+esc(fdt(s.at))+'</small><small>'+(m?esc(m.method==='exchange'?'🔁 استبدال':METHODS[m.method]):'—')+'</small></div><div style="text-align:left"><b>'+fmt(netTotal(s))+' '+CUR+'</b>'+(remainingOf(s)>0.0005&&ps!=='void'?'<small style="color:#b45309">متبقي '+fmt(remainingOf(s))+'</small>':'')+'</div></div>'}).join(''):'<div class="emd113-note">لا توجد فواتير مطابقة.</div>'));
}
function renderDetail(){
  var s=saleById(S.detail);if(!s){S.detail=null;return renderList()}
  $('emd113Ft').style.display='none';
  var st=statusOf(s),rem=remainingOf(s),canRet=perm(P_RET),canPay=perm(P_SELL);
  var items=s.items.map(function(i){var rq=retQty(s,i.name),left=r3(num(i.qty)-rq);return '<div class="emd113-it"><span>'+esc(i.name)+' × '+i.qty+(rq>0?' <small style="color:#b91c1c">(مرتجع '+rq+')</small>':'')+'</span><span>'+fmt(i.net)+'</span></div>'}).join('');
  var pays=arr(s.payments).map(function(p){return '<div class="emd113-it"><span>'+(p.type==='collect'?'تحصيل · ':'دفعة · ')+esc(p.method==='exchange'?'🔁 رصيد مرتجع (استبدال)':(METHODS[p.method]||p.method))+'<br><small style="color:#64748b">'+esc(fdt(p.at))+' · '+esc(p.by&&p.by.name||'')+'</small></span><span>'+fmt(p.amount)+'</span></div>'}).join('')||'<div class="emd113-note">لا توجد دفعات (آجل).</div>';
  var ops=arr(s.ops).map(function(o){return '<div class="emd113-it"><span>'+(o.type==='void'?'🚫 إلغاء الفاتورة':o.type==='refund'?'💵 ردّ فرق الاستبدال':(o.exTo?'🔁 استبدال (الفاتورة '+o.exTo+')':'↩️ مرتجع')+(o.dmg?' · تالف':''))+' · '+o.items.map(function(i){return esc(i.name)+'×'+i.qty}).join('، ')+'<br><small style="color:#64748b">'+esc(fdt(o.at))+' · '+esc(o.by&&o.by.name||'')+(o.reason?' · '+esc(o.reason):'')+(o.refund>0?(o.method==='exchange'?' · '+fmt(o.refund)+' '+CUR+' رصيد للفاتورة الجديدة':' · ردّ '+fmt(o.refund)+' '+CUR):'')+'</small></span><span>−'+fmt(o.value)+'</span></div>'}).join('');
  var h='<button class="emd113-btn l" data-a="back" style="margin-bottom:10px">← رجوع للمبيعات</button><div class="emd113-box"><h3><span dir="ltr">'+esc(s.id)+'</span> '+(st==='void'?(arr(s.ops).some(function(o){return o.exTo})?'<span class="emd113-tag v">مُستبدلة</span>':'<span class="emd113-tag v">ملغاة</span>'):'')+'</h3><dl class="emd113-dl"><dt>التاريخ والوقت</dt><dd>'+esc(fdt(s.at))+'</dd><dt>نفّذها</dt><dd>'+esc(s.by&&s.by.name||'')+'</dd><dt>العميل</dt><dd>'+esc(s.customer&&(s.customer.name||'')||'')+' '+esc(s.customer&&s.customer.phone||'')+(s.customer&&(s.customer.name||s.customer.phone)?'':'—')+'</dd>'+(s.note?'<dt>ملاحظة</dt><dd>'+esc(s.note)+'</dd>':'')+'</dl>'+items
   +(num(s.discount)>0?'<div class="emd113-it"><span>الخصم</span><span>−'+fmt(s.discount)+'</span></div>':'')
   +'<div class="emd113-it"><b>الإجمالي</b><b>'+fmt(s.total)+' '+CUR+'</b></div>'+ops+'<div class="emd113-it"><b>الإجمالي بعد المرتجع</b><b>'+fmt(netTotal(s))+' '+CUR+'</b></div><div class="emd113-it"><span>المدفوع</span><b style="color:#15803d">'+fmt(paidOf(s))+' '+CUR+'</b></div><div class="emd113-it"><span>المتبقي</span><b style="color:#b45309">'+fmt(rem)+' '+CUR+'</b></div></div>'
   +'<div class="emd113-box"><h3>💵 الدفعات</h3>'+pays+'</div>'
   +'<div class="emd113-chips"><button class="emd113-btn w" data-a="img" data-v="'+esc(s.id)+'">🧾 إرسال الفاتورة (صورة)</button><button class="emd113-btn" data-a="print" data-v="'+esc(s.id)+'">🖨️ طباعة / PDF</button>'+(window.EMD420?EMD420.rcptBtn(s.id):'')+''+(s.customer&&s.customer.phone?'<button class="emd113-btn l" data-a="wa" data-v="'+esc(s.id)+'">💬 رسالة نصية</button>':'')+'</div>';
  if(st!=='void'&&rem>0.0005&&canPay)h+='<div class="emd113-box"><h3>✅ تسجيل تحصيل مبلغ متبقٍ</h3><div class="emd113-g2"><input class="emd113-in" id="emd113CA" inputmode="decimal" placeholder="المبلغ (حتى '+fmt(rem)+')" value="'+fmt(rem)+'"><select class="emd113-in" id="emd113CM">'+Object.keys(METHODS).map(function(k){return '<option value="'+k+'">'+METHODS[k]+'</option>'}).join('')+'</select></div><button class="emd113-btn g" style="margin-top:8px;width:100%" data-a="collect" data-v="'+esc(s.id)+'">تسجيل التحصيل</button><div id="emd113CErr"></div></div>';
  if(st!=='void'&&canRet){
    h+='<div class="emd113-box"><h3>↩️ إرجاع / إلغاء</h3><button class="emd113-btn l" data-a="retopen">'+(S.more?'إخفاء':'إرجاع أصناف')+'</button> <button class="emd113-btn r" data-a="voidgo" data-v="'+esc(s.id)+'">🚫 إلغاء الفاتورة كاملة</button>';
    if(S.more)h+='<div style="margin-top:8px">'+s.items.map(function(i,ix){var left=r3(num(i.qty)-retQty(s,i.name));return left>0?'<div class="emd113-it"><span>'+esc(i.name)+' (المتبقي '+left+')</span><input class="emd113-mini" data-r="'+ix+'" inputmode="numeric" placeholder="0"></div>':''}).join('')+'<input class="emd113-in" id="emd113RR" style="margin-top:8px" placeholder="سبب الإرجاع (اختياري)"><select class="emd113-in" id="emd113RM" style="margin-top:8px">'+Object.keys(METHODS).map(function(k){return '<option value="'+k+'">ردّ المبلغ: '+METHODS[k]+'</option>'}).join('')+'</select><button class="emd113-btn r" style="margin-top:8px;width:100%" data-a="retgo" data-v="'+esc(s.id)+'">تأكيد الإرجاع</button></div>';
    h+='<div class="emd113-note">الإلغاء والإرجاع يُسجَّلان كعملية مستقلة، ويعود المخزون ويُعالج المبلغ المردود تلقائيًا. لا يمكن حذف الفاتورة.</div><div id="emd113RErr"></div></div>';
  }
  $('emd113Body').innerHTML=h;
}
function doCollect(id){
  var r=collect(id,$('emd113CA').value,$('emd113CM').value);
  if(!r.ok){$('emd113CErr').innerHTML='<div class="emd113-err">'+esc(r.error)+'</div>';return}
  toast('✅ تم تسجيل التحصيل');renderDetail();
}
function doReturn(id,isVoid){
  if(window.EMD451&&EMD451.guard(isVoid?'إلغاء فاتورة كاملة.':'إرجاع أصناف من فاتورة.',function(){doReturn(id,isVoid)}))return;
  var s=saleById(id);if(!s)return;var list=[];
  if(!isVoid){[].forEach.call(document.querySelectorAll('#emd113Body [data-r]'),function(x){var q=num(x.value);if(q>0)list.push({name:s.items[+x.getAttribute('data-r')].name,qty:q})})}
  var msg=isVoid?'إلغاء الفاتورة '+id+' بالكامل؟ سيعود المخزون ويُسجَّل ردّ المبلغ.':'تأكيد إرجاع الأصناف المحددة؟';
  if(!confirm(msg))return;
  var rm=$('emd113RM'),rr=$('emd113RR');
  var r=returnItems(id,list,rm?rm.value:'cash',rr?rr.value:'',isVoid);
  if(!r.ok){var e=$('emd113RErr');if(e)e.innerHTML='<div class="emd113-err">'+esc(r.error)+'</div>';return}
  S.more=false;toast(r.op.refund>0?'تم. المبلغ المردود: '+fmt(r.op.refund)+' '+CUR:'تم تسجيل العملية');renderDetail();
}


/* ---------- فاتورة كصورة (شكل فاتورة حقيقية) للمشاركة عبر واتساب ---------- */
function storeProfile(){return DH.profile()}
function invoiceCanvas(s){
  var prof=storeProfile(),W=1080,its=s.items,rowH=70,pays=arr(s.payments),ops=arr(s.ops);
  var H=1000+its.length*rowH+pays.length*54+ops.length*54;
  var cv=document.createElement('canvas');cv.width=W;cv.height=H;var c=cv.getContext('2d');
  var F='Tahoma, "Segoe UI", Arial, sans-serif',R=W-70,Lx=70;
  function txt(t,x,y,size,weight,color,align){c.font=(weight||'normal')+' '+size+'px '+F;c.fillStyle=color||'#111827';c.textAlign=align||'right';c.direction='rtl';c.fillText(String(t==null?'':t),x,y)}
  c.fillStyle='#ffffff';c.fillRect(0,0,W,H);
  var acc=DH.accent()||'#111827',lim=DH.logoImg();
  c.fillStyle=acc;c.fillRect(0,0,W,190);
  var nx=R;if(lim){try{var ls=130,lx=R-ls,ly=30;c.save();c.beginPath();if(c.roundRect)c.roundRect(lx,ly,ls,ls,24);else c.rect(lx,ly,ls,ls);c.fillStyle='#ffffff';c.fill();c.clip();var sc=Math.max(ls/lim.width,ls/lim.height),iw=lim.width*sc,ih=lim.height*sc;c.drawImage(lim,lx+(ls-iw)/2,ly+(ls-ih)/2,iw,ih);c.restore();nx=R-ls-28}catch(e){}}
  txt(storeName(),nx,92,52,'bold','#ffffff');
  var contact=[prof.whatsapp||prof.phone,prof.location].filter(Boolean).join('  ·  ');if(contact)txt(contact,nx,146,28,'normal','rgba(255,255,255,.75)');
  txt('فاتورة بيع',Lx,92,46,'bold','#ffffff','left');txt(s.id,Lx,146,30,'normal','#cbd5e1','left');
  var y=260,dt=new Date(s.at);
  txt('العميل',R,y,26,'normal','#64748b');txt('التاريخ والوقت',Lx+300,y,26,'normal','#64748b','left');
  y+=46;txt((s.customer&&s.customer.name)||'عميل نقدي',R,y,34,'bold');txt(dt.toLocaleDateString('ar-OM',{year:'numeric',month:'long',day:'numeric'}),Lx+300,y,30,'normal','#111827','left');
  y+=42;txt((s.customer&&s.customer.phone)||'',R,y,28,'normal','#475569');txt(ftime(dt),Lx+300,y,28,'normal','#475569','left');
  y+=60;c.fillStyle='#f1f5f9';c.fillRect(50,y-44,W-100,64);
  txt('المنتج',R,y,26,'bold','#334155');txt('الكمية',560,y,26,'bold','#334155','center');txt('السعر',390,y,26,'bold','#334155','center');txt('المجموع',Lx+10,y,26,'bold','#334155','left');
  y+=30;
  its.forEach(function(x){y+=rowH;var nm=String(x.name);if(nm.length>26)nm=nm.slice(0,25)+'…';
    txt(nm,R,y-22,30,'normal');txt(x.qty,560,y-22,30,'normal','#111827','center');txt(fmt(x.price),390,y-22,30,'normal','#111827','center');txt(fmt(x.net),Lx+10,y-22,30,'bold','#111827','left');
    c.fillStyle='#e2e8f0';c.fillRect(50,y,W-100,2)});
  if(num(s.discount)>0){y+=60;txt('المجموع قبل الخصم',R,y,28,'normal','#475569');txt(fmt(s.subtotal)+' '+CUR,Lx+10,y,30,'normal','#111827','left');y+=50;txt('الخصم',R,y,28,'normal','#475569');txt('− '+fmt(s.discount)+' '+CUR,Lx+10,y,30,'normal','#b91c1c','left')}
  y+=70;txt('الإجمالي',R,y,32,'bold');txt(fmt(s.total)+' '+CUR,Lx+10,y,36,'bold','#111827','left');
  ops.forEach(function(o){y+=54;txt((o.type==='void'?'إلغاء الفاتورة':'مرتجع')+' · '+fdt(o.at),R,y,26,'normal','#b91c1c');txt('− '+fmt(o.value)+' '+CUR,Lx+10,y,28,'normal','#b91c1c','left')});
  pays.forEach(function(p){y+=54;txt(String(METHODS[p.method]||p.method).replace(/^\S+\s/,'')+(p.type==='collect'?' (تحصيل)':'')+' · '+fdt(p.at),R,y,26,'normal','#475569');txt(fmt(p.amount)+' '+CUR,Lx+10,y,28,'normal','#15803d','left')});
  var pd=paidOf(s),rm=remainingOf(s);
  y+=60;txt('إجمالي المدفوع',R,y,28,'normal','#475569');txt(fmt(pd)+' '+CUR,Lx+10,y,30,'bold','#15803d','left');
  y+=60;c.fillStyle=rm>0.0005?'#fef3c7':'#dcfce7';c.fillRect(50,y-44,W-100,68);
  txt(rm>0.0005?'المتبقي':'تم الدفع بالكامل',R,y,30,'bold',rm>0.0005?'#92400e':'#166534');if(rm>0.0005)txt(fmt(rm)+' '+CUR,Lx+10,y,34,'bold','#92400e','left');
  if(statusOf(s)==='void'){c.save();c.translate(W/2,H/2);c.rotate(-0.4);c.globalAlpha=.18;txt('ملغاة',0,0,220,'bold','#b91c1c','center');c.restore()}
  if(s.note)txt('ملاحظة: '+s.note,R,H-130,24,'normal','#64748b');
  txt('شكرًا لتسوّقكم معنا 🌷',W/2,H-60,30,'bold','#111827','center');
  return cv;
}
function invoiceImage(id){var s443=saleById(id);if(s443&&window.EMDInvV443){try{EMDInvV443.open(n443(s443));return}catch(e){console.warn('V443',e)}}
  var s=saleById(id);if(!s)return;var cv=invoiceCanvas(s);
  cv.toBlob(function(blob){if(!blob){toast('تعذّر إنشاء الفاتورة');return}showImg(s,blob)},'image/png');
}
function showImg(s,blob){
  var ov=$('emd113Inv');
  if(!ov){ov=document.createElement('div');ov.id='emd113Inv';ov.style.cssText='position:fixed;inset:0;z-index:2147483000;background:rgba(15,23,42,.7);display:none;align-items:center;justify-content:center;padding:12px;direction:rtl';
    ov.innerHTML='<div style="background:#fff;border-radius:20px;width:min(520px,100%);max-height:94vh;display:flex;flex-direction:column;overflow:hidden"><div style="overflow:auto;padding:10px;background:#f1f5f9"><img id="emd113InvImg" alt="الفاتورة" style="width:100%;display:block;border-radius:10px"></div><div style="display:flex;gap:8px;padding:10px;flex-wrap:wrap"><button class="emd113-btn w" id="emd113InvShare" style="flex:1 1 100%">📤 مشاركة الفاتورة</button><button class="emd113-btn l" id="emd113InvSave" style="flex:1">⬇️ حفظ الصورة</button><button class="emd113-btn l" id="emd113InvClose" style="flex:1">إغلاق</button></div></div>';
    document.body.appendChild(ov);ov.addEventListener('click',function(e){if(e.target===ov)hide()});$('emd113InvClose').onclick=hide}
  function hide(){ov.style.display='none';try{URL.revokeObjectURL($('emd113InvImg').src)}catch(e){}}
  var name='فاتورة-'+s.id+'.png',url=URL.createObjectURL(blob),file=null;
  try{file=new File([blob],name,{type:'image/png'})}catch(e){}
  $('emd113InvImg').src=url;
  var can=!!(file&&navigator.canShare&&navigator.canShare({files:[file]})),sh=$('emd113InvShare'),msg='فاتورتك رقم '+s.id+' من '+storeName()+' 🧾';
  sh.textContent=can?'📤 مشاركة الفاتورة (واتساب)':'💬 فتح محادثة العميل'+(s.customer&&s.customer.phone?'':' (اختر الشخص)');
  sh.onclick=function(){if(can){navigator.share({files:[file],title:'فاتورة '+s.id,text:msg}).catch(function(){})}else{dl();window.open('https://wa.me/'+waPhone(s.customer&&s.customer.phone)+'?text='+encodeURIComponent(msg+'\n(أرفقت لك صورة الفاتورة)'),'_blank')}};
  function dl(){var a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();toast('⬇️ تم حفظ الفاتورة')}
  $('emd113InvSave').onclick=dl;ov.style.display='flex';
}

/* ---------- زر في شريط التنقل ---------- */
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&S.open&&!S.done)close()});

window.EMDDirectV113={_s:function(){return S},_render:render,_reset:resetSale,_add:addToCart,_rp:renderProducts,_rc:recalc,_draft:draft,_save:persistRaw,invoiceImage:invoiceImage,list:function(){return arr(D()&&D().directSales)},open:open,close:close,commit:commit,collect:collect,returnItems:returnItems,summary:summary,cashIn:cashIn,available:available,calc:calc,state:function(){return S},invoiceHtml:invoiceHtml,netTotal:netTotal,paidOf:paidOf,remainingOf:remainingOf,statusOf:statusOf,newKey:newKey};
})();
