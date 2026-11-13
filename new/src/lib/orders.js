/* من قام بالخطوة (كما في الحية): الموظف الحالي أو المدير */
function by(){var w=null,n='المدير';try{w=stWho()}catch(e){}try{if(!w)n=dsMgr()}catch(e){}return w?{id:w.id,name:w.name}:{id:'owner',name:n}}
/* ---------- 3) نموذج الطلب (متوافق مع بيانات التطبيق الحالي) ---------- */
var ST={
  new:{l:'جديد',s:'جديدة',i:'🆕',c:'var(--s-new)'},
  waiting:{l:'بانتظار المنتج',s:'انتظار',i:'⏳',c:'var(--s-waiting)'},
  ready:{l:'جاهز للتجهيز',s:'جاهزة',i:'🟢',c:'var(--s-ready)'},
  packing:{l:'قيد التجهيز',s:'تجهيز',i:'🛠️',c:'var(--s-packing)'},
  shipped:{l:'تم الشحن',s:'مشحونة',i:'🚚',c:'var(--s-shipped)'},
  received:{l:'تم الاستلام',s:'مستلمة',i:'📬',c:'var(--s-received)'},
  cancelled:{l:'ملغي',s:'ملغاة',i:'❌',c:'var(--s-cancelled)'}
};
var FLOW=['new','waiting','ready','packing','shipped','received'];
var NEXT={new:['ready','اعتماد الطلب'],waiting:['ready','توفير المنتج'],ready:['packing','بدء التجهيز'],packing:['shipped','شحن الطلب'],shipped:['received','تأكيد الاستلام']};
function status(o){var s=String(o.status||'new').toLowerCase();if(s==='preparing')return 'packing';if(s==='canceled')return 'cancelled';if(o.cancelled===true)return 'cancelled';return ST[s]?s:'new'}
function oid(o){return String(o.id!=null?o.id:(o.orderNumber!=null?o.orderNumber:(o.number||'')))}
function items(o){return Array.isArray(o.products)?o.products:(Array.isArray(o.items)?o.items:(Array.isArray(o.orderItems)?o.orderItems:[]))}
function qty(x){return num(x.qty!=null?x.qty:x.quantity)||1}
function iname(x){return String(x.name||x.product||x.productName||'منتج')}
function cname(o){return String(o.name||o.customerName||o.customer_name||'').trim()}
function cphone(o){return String(o.phone||o.customerPhone||o.whatsapp||o.customer_phone||'').trim()}
function cplace(o){return String(o.place||o.location||o.deliveryLocation||o.address||'').trim()}
function odate(o){var t=new Date(o.orderDate||o.created||o.createdAt||o.date||o.timestamp||0);return isNaN(t)||t.getTime()<=0?null:t}
function firstPos(a){for(var i=0;i<a.length;i++){var v=num(a[i]);if(v>0)return v}return 0}
function prefix(){var p=String(POS_LS.getItem('emd_v129_order_prefix')||'EMD').replace(/[^A-Za-z0-9]/g,'').toUpperCase();return p||'EMD'}
function idsFmt(s){return typeof s==='string'&&s.indexOf('#')>=0?s.replace(/#{1,2}(\d{3,7})(?!\d)/g,function(m,d){return prefix()+'-'+d}):s}
function onum(o){var r=oid(o).replace(/^#/,'');return /^\d+$/.test(r)?prefix()+'-'+r:r||'—'}

function findOrder(id){for(var i=0;i<db.orders.length;i++)if(oid(db.orders[i])===id)return db.orders[i];return null}
function nextId(){var max=0;db.orders.forEach(function(o){var r=oid(o).replace(/^#/,'');if(/^\d+$/.test(r))max=Math.max(max,+r)});db.orderSeq=max+2;return '#'+String(max+1).padStart(4,'0')}

/* تغيير الحالة مع ربط المخزون (نفس قواعد التطبيق الحالي: الخصم عند الشحن، والإرجاع عند الإلغاء) */
function setStatus(o,to,silent){
  var from=status(o);if(from===to)return true;
  if(to==='shipped'&&o.stockDeducted!==true){
    var sh=shortage(o);
    if(sh.length){
      var msg=sh.map(function(x){return x.missing?('• '+x.name+': غير مسجل في المنتجات'):('• '+x.name+': المطلوب '+x.need+' والمتوفر '+x.have)}).join('\n');
      if(!confirm('لا يكفي المخزون لشحن هذا الطلب:\n'+msg+'\n\nهل تريد الشحن دون خصم من المخزون؟'))return false;
    }else{
      items(o).forEach(function(x){var p=product(iname(x));if(p)p.stock=Math.max(0,num(p.stock)-qty(x))});
      o.stockDeducted=true;o.stockDeductedAt=new Date().toISOString();
    }
    o.shippedAt=o.shippedAt||new Date().toISOString();
  }
  if(to==='cancelled'&&o.stockDeducted===true&&o.stockReturned!==true){
    if(confirm('هل تريد إرجاع منتجات هذا الطلب إلى المخزون؟')){
      items(o).forEach(function(x){var p=product(iname(x));if(p)p.stock=num(p.stock)+qty(x)});
      o.stockReturned=true;o.stockReturnedAt=new Date().toISOString();
    }
  }
  if(to==='received')o.receivedAt=o.receivedAt||new Date().toISOString();
  o.status=to;dirty();if(to==='cancelled')promoteWaiting();
  if(!Array.isArray(o.history))o.history=[];
  o.history.push({status:to,at:new Date().toISOString(),by:by()});
  o.updatedAt=new Date().toISOString();
  save();
  if(!silent)toast(ST[to].i+' '+onum(o)+' — '+ST[to].l);
  return true;
}
function upsertCustomer(o){
  var k=phoneKey(cphone(o));if(!k)return;
  var c=null;for(var i=0;i<db.customers.length;i++)if(phoneKey(db.customers[i].phone)===k){c=db.customers[i];break}
  if(!c){c={name:cname(o),phone:cphone(o),place:cplace(o),orders:[]};db.customers.push(c)}
  if(cname(o))c.name=c.name||cname(o);
  if(cplace(o))c.place=cplace(o);
  if(!Array.isArray(c.orders))c.orders=[];
  if(c.orders.indexOf(oid(o))<0)c.orders.unshift(oid(o));
}
