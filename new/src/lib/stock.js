function available(name,excludeOrder){
  var p=product(name);if(!p)return null;
  var res=index().reserved[normTxt(name)]||0;
  if(excludeOrder&&(['new','ready','packing'].indexOf(status(excludeOrder))>=0)&&excludeOrder.stockDeducted!==true){
    items(excludeOrder).forEach(function(x){if(normTxt(iname(x))===normTxt(name))res-=qty(x)});
  }
  return Math.max(0,num(p.stock))-res;
}
function shortage(o){
  var out=[];items(o).forEach(function(x){var a=available(iname(x),o);if(a===null)out.push({name:iname(x),missing:true});else if(a<qty(x))out.push({name:iname(x),need:qty(x),have:Math.max(0,a)})});return out;
}
function demand(){ // كم مرة طُلب كل منتج في الطلبات غير الملغاة
  var m={};db.orders.forEach(function(o){if(status(o)==='cancelled')return;items(o).forEach(function(x){var k=normTxt(iname(x));m[k]=(m[k]||0)+qty(x)})});return m}
function promoteWaiting(){ // الطلبات المنتظرة التي توفرت منتجاتها تصبح جاهزة، الأقدم أولًا
  var w=db.orders.filter(function(o){return status(o)==='waiting'}).sort(function(a,b){var x=odate(a),y=odate(b);return (x?x.getTime():0)-(y?y.getTime():0)}),n=0;
  w.forEach(function(o){if(!shortage(o).length){o.status='ready';if(!Array.isArray(o.history))o.history=[];o.history.push({status:'ready',at:new Date().toISOString(),by:'rebuild-stock'});n++;dirty()}});
  return n;
}
/* حماية المخزون — مطابقة لـ V198 في التطبيق الحي: تُشغَّل عند الفتح وقبل كل حفظ */
var RC_BUSY=false;
function stockReconcile(quiet){
  if(RC_BUSY||!db)return 0;RC_BUSY=true;
  try{
    var ps=Array.isArray(db.products)?db.products:[],os=Array.isArray(db.orders)?db.orders:[],now=new Date().toISOString(),ch=0;
    var st=function(o){return String(o.status||'new').toLowerCase()};
    var nm=function(i){return i.name||i.product||i.productName||''};
    var qn=function(i){var n=Number(i.qty!=null?i.qty:(i.quantity!=null?i.quantity:1));return isFinite(n)&&n>0?n:0};
    var its=function(o){var a=Array.isArray(o.products)?o.products:(Array.isArray(o.items)?o.items:[]);return a.filter(function(i){return nm(i)&&qn(i)>0})};
    var stk=function(p){return Math.max(0,Number(p.stock!=null?p.stock:(p.quantity!=null?p.quantity:(p.qty!=null?p.qty:0)))||0)};
    var map={};for(var i=ps.length-1;i>=0;i--)map[normTxt(ps[i].name||ps[i].productName||ps[i].title)]=ps[i];
    var pr=function(n){n=normTxt(n);return n?(map[n]||null):null};
    var key=function(p){return String(p.id||p.code||normTxt(p.name||p.productName))};
    var oidf=function(o){return o.id||o.orderNumber||'طلب'};
    var same=function(a,b){return JSON.stringify(a||[])===JSON.stringify(b||[])};
    var set=function(o,s,sh){if(o.status!==s||o.preparationStatus!==s||!same(o.stockShortage,sh)){o.status=s;o.preparationStatus=s;o.stockShortage=sh;ch++}};
    var fixed=[],blocked=[],promoted=[];
    os.forEach(function(o){if(o.stockDeducted===true&&['new','waiting','ready'].indexOf(st(o))>=0&&Array.isArray(o.stockShortage)&&o.stockShortage.length){
      set(o,'shipped',[]);if(!Array.isArray(o.history))o.history=[];o.history.push({type:'status',detail:'🔧 رجع «تم الشحن» (تصحيح حماية المخزون)',at:now});fixed.push(oidf(o))}});
    var oldR=ps.map(function(p){return [p.reserved,p.available]});
    ps.forEach(function(p){p.reserved=0});
    var used={};
    var fits=function(o){var ok=true,needs=[];its(o).forEach(function(i){var p=pr(nm(i)),n=qn(i);
      if(!p){ok=false;needs.push(nm(i)+' (غير موجود بالمخزون)');return}
      var free=stk(p)-(used[key(p)]||0);if(free<n){ok=false;needs.push(nm(i)+' — مطلوب '+n+'، المتاح '+Math.max(0,free))}});return {ok:ok,needs:needs}};
    var take=function(o){its(o).forEach(function(i){var p=pr(nm(i));if(p){var k=key(p);used[k]=(used[k]||0)+qn(i);p.reserved=(p.reserved||0)+qn(i)}})};
    var byDate=function(a,b){return String(a.createdAt||a.orderDate||a.date||'').localeCompare(String(b.createdAt||b.orderDate||b.date||''))};
    var open=function(o){return o.stockDeducted!==true};
    os.filter(function(o){return open(o)&&['ready','packing'].indexOf(st(o))>=0}).sort(byDate).forEach(function(o){
      var f=fits(o);
      if(st(o)==='ready'&&!f.ok){set(o,'waiting',f.needs);blocked.push(oidf(o))}
      else{take(o);if(!same(o.stockShortage,[])){o.stockShortage=[];ch++}}});
    os.filter(function(o){return open(o)&&['new','waiting'].indexOf(st(o))>=0}).sort(byDate).forEach(function(o){
      var f=fits(o);
      if(f.ok&&its(o).length){promoted.push(oidf(o));set(o,'ready',[]);take(o)}
      else set(o,'waiting',f.needs)});
    ps.forEach(function(p,i){p.available=Math.max(0,stk(p)-Number(p.reserved||0));if(oldR[i][0]!==p.reserved||oldR[i][1]!==p.available)ch++});
    if(ch)dirty();
    if(!quiet){
      var lst=function(a){return a.slice(0,5).join('، ')+(a.length>5?' و'+(a.length-5)+' غيرها':'')};
      if(blocked.length)rcAlert((blocked.length>1?'تم إيقاف حجز '+blocked.length+' طلبات: ':'تم إيقاف حجز الطلب ')+lst(blocked)+' لأن الكمية غير متوفرة.');
      else if(fixed.length)rcAlert('رجّعنا '+fixed.length+' طلب مشحون لحالته الصحيحة: '+lst(fixed));
      else if(promoted.length)rcAlert('تم تحديث حالة الطلبات حسب المخزون المتوفر.');
    }
    return ch;
  }finally{RC_BUSY=false}
}
function rcAlert(msg){
  var e=document.getElementById('rcAlert');
  if(!e){e=document.createElement('div');e.id='rcAlert';e.className='rc-alert';document.body.appendChild(e)}
  if(e.getAttribute('data-off')===msg)return;
  e.innerHTML='<button type="button" class="x" aria-label="إغلاق">×</button><b>🔒 حماية المخزون</b><small>'+esc(msg)+'</small>';e.classList.add('show');
  e.querySelector('.x').onclick=function(){e.setAttribute('data-off',msg);e.classList.remove('show')};
}
