/* فهرس المنتجات: يُبنى مرة واحدة بعد كل تغيير */
var IX=null;
function dirty(){IX=null;HAY=new WeakMap()}
function index(){
  if(IX)return IX;
  var byName={},reserved={},counts={all:0,pinned:0},alerts=0,today=dkey(new Date()),mon=today.slice(0,7);
  var sales=0,unpaid=0,profit=0;
  Object.keys(ST).forEach(function(k){counts[k]=0});
  db.products.forEach(function(p){var k=normTxt(p.name);if(k)byName[k]=p});
  var pins=pinned();
  db.orders.forEach(function(o){
    var s=status(o);counts[s]++;if(s!=='cancelled')counts.all++;
    if(pins[oid(o)])counts.pinned++;
    if((s==='new'||s==='ready'||s==='packing')&&o.stockDeducted!==true){
      items(o).forEach(function(x){var k=normTxt(iname(x));reserved[k]=(reserved[k]||0)+qty(x)});
    }
    if(s==='cancelled')return;
    var t=odate(o),tot=total(o,byName);
    if(t){var dk=dkey(t);if(dk===today)sales+=tot;if(dk.slice(0,7)===mon)profit+=tot-cost(o,byName)}
    unpaid+=remaining(o,byName);
    if(s==='waiting'||(s==='new')||(s==='shipped'&&t&&Date.now()-t>5*864e5))alerts++;
  });
  IX={byName:byName,reserved:reserved,counts:counts,alerts:alerts,sales:sales,unpaid:unpaid,profit:profit};
  return IX;
}
function product(name,byName){return (byName||index().byName)[normTxt(name)]||null}
function catPrice(p){return p?firstPos([p.salePrice,p.unitPrice,p.price,p.defaultPrice]):0}
function catCost(p){return p?firstPos([p.costPrice,p.purchasePrice,p.cost,p.purchaseCost]):0}
function itemPrice(x,b){return firstPos([x.unitPrice,x.salePrice,x.price])||catPrice(product(iname(x),b))}
function itemCost(x,b){return firstPos([x.cost,x.purchaseCost,x.costPrice])||catCost(product(iname(x),b))}
function pimg(p){var u=String(p&&(p.image||p.img||p.imageUrl)||'');return u&&(/^data:image\//.test(u)||/^https:\/\//.test(u))?'<img class="thumb" loading="lazy" src="'+esc(u)+'" alt="">':'<div class="thumb">📦</div>'}
function minStock(p){return num(p.minStock!=null?p.minStock:(p.lowStock!=null?p.lowStock:p.alertAt))}
function pIndex(p){return db.products.indexOf(p)}
