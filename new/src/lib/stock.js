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
