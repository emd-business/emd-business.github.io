/* ---------- المزامنة بين الأجهزة: دمج على مستوى السجل ----------
   الصيغة نفسها التي يحفظها التطبيق الحالي في السحابة، حتى يعمل الجهازان معًا أثناء الانتقال:
   _u وقت آخر تعديل لكل طلب ومنتج وعميل، _o هوية الطلب، _tomb139 (طلبات ومنتجات محذوفة)،
   _tomb179 (عملاء محذوفون)، وorderSeq. القاعدة: الأحدث وقتًا هو المعتمد، والمخزون يُدمج بالفرق. */
var SY_RANK={'new':1,waiting:2,ready:3,packing:4,shipped:5,received:6};
var SY_RECS={orders:1,products:1,customers:1,_tomb139:1,_tomb179:1};
var SY_DROP={o:{_u:1,recoveredAt:1},p:{_u:1,stock:1,updatedAt:1},c:{_u:1,orders:1,updatedAt:1}};
var SY_TOMB_DAYS=90,SY_TOMB_MAX=10;
function fnv(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return (h>>>0).toString(36)+'.'+s.length}
function hv(v){return v===undefined?'-':fnv(JSON.stringify(v))}
function syArr(a){return Array.isArray(a)?a:[]}
function isObj(x){return !!x&&typeof x==='object'&&!Array.isArray(x)}
function clone(x){return x===undefined?undefined:JSON.parse(JSON.stringify(x))}
function syNorm(x){return String(x||'').replace(/ـ/g,'').trim().toLowerCase().replace(/\s+/g,' ')}
function kO(o){return o?oid(o):''}
function kP(p){return p?(p.id!=null&&p.id!==''?'i'+p.id:(syNorm(p.name)?'n'+syNorm(p.name):'')):''}
function kPT(p){return p?(syNorm(p.name)||(p.id!=null?'#'+p.id:'')):''}   // مفتاح المحذوفات والمخزون
function kC(c){return c?String(c.id||c.phone||c.name||''):''}
function oIdent(o){return o?String(o.created||o.createdAt||o.orderDate||o._o||''):''}
function oNum(o){var m=String(kO(o)).replace(/^#/,'').trim();return /^\d+$/.test(m)?+m:0}
function sigOf(o,drop){var c={};for(var k in o)if(!drop[k])c[k]=o[k];return fnv(JSON.stringify(c))}
function syStocks(d){var m={};syArr(d&&d.products).forEach(function(p){var k=kPT(p);if(k&&!(k in m))m[k]=num(p.stock)});return m}
function syDed(o){return !!(o&&o.stockDeducted===true&&o.stockReturned!==true)}
function syItems(o){return syArr(o&&(Array.isArray(o.products)?o.products:o.items)).map(function(x){return {k:syNorm(x&&(x.name||x.product||x.productName)),q:num(x&&(x.qty!=null?x.qty:(x.quantity!=null?x.quantity:x.count)))}}).filter(function(x){return x.k&&x.q>0})}

/* ===== ختم التعديلات: يُستدعى من الحفظ ===== */
var syCache=null;
function syStampList(list,kf,g,first,now){var b=syCache[g],seen={};
  syArr(list).forEach(function(o){if(!o||typeof o!=='object')return;var k=kf(o);if(!k||seen[k])return;seen[k]=1;var h=sigOf(o,SY_DROP[g]),c=b[k];
    if(!c){if(!o._u&&(!first||g==='o'))o._u=first?1:now;b[k]={h:h,u:o._u};return}
    if(o._u!==c.u){c.h=h;c.u=o._u;return}          // وصل من جهاز آخر بطابعه
    if(c.h!==h){o._u=now;c.h=h;c.u=now}});          // تعديل على هذا الجهاز
  Object.keys(b).forEach(function(k){if(!seen[k])delete b[k]})}
/* المحذوفات: ما يُحذف من هذا الجهاز لا يرجع من الجهاز الآخر (حتى 10 سجلات في المرة، وتُنسى بعد 90 يومًا) */
function syTomb(d,known,now){
  var cur={o:{},p:{},c:{}},t1=isObj(d._tomb139)?d._tomb139:{o:{},p:{}},t2=isObj(d._tomb179)?d._tomb179:{c:{}},T={o:t1.o||{},p:t1.p||{},c:t2.c||{}},ch=false;
  syArr(d.orders).forEach(function(o){var i=kO(o);if(i)cur.o[i]=1});syArr(d.products).forEach(function(p){var i=kPT(p);if(i)cur.p[i]=1});syArr(d.customers).forEach(function(c){var i=kC(c);if(i)cur.c[i]=1});
  if(known)['o','p','c'].forEach(function(g){var gone=Object.keys(known[g]||{}).filter(function(i){return !cur[g][i]});if(gone.length&&gone.length<=SY_TOMB_MAX)gone.forEach(function(i){T[g][i]=now;ch=true})});
  ['o','p','c'].forEach(function(g){Object.keys(T[g]).forEach(function(i){if(cur[g][i]||now-T[g][i]>SY_TOMB_DAYS*864e5){delete T[g][i];ch=true}})});
  if(ch||d._tomb139)d._tomb139={o:T.o,p:T.p};if(ch||d._tomb179)d._tomb179={c:T.c};
  return cur}
/* بداية الختم: تُسجَّل بصمة كل سجل كما هو الآن، فأي تعديل بعدها يُختم بوقته */
function syPrime(){syCache=null;if(db)syStamp(db,null)}
function syStamp(d,known,now){now=now||Date.now();var first=!syCache;if(first)syCache={o:{},p:{},c:{}};
  syStampList(d.orders,kO,'o',first,now);syStampList(d.products,kP,'p',first,now);syStampList(d.customers,kC,'c',first,now);
  syArr(d.orders).forEach(function(o){if(o&&typeof o==='object'&&!oIdent(o))o._o=now+'-'+Math.random().toString(36).slice(2,8)});
  return syTomb(d,known,now)}

/* ===== نقطة البداية المشتركة: شكل البيانات عند آخر تطابق مع السحابة ===== */
function subHashes(o){var s={};if(isObj(o))Object.keys(o).forEach(function(k){s[k]=hv(o[k])});return s}
function syBase(d){var b={stocks:syStocks(d),f:{},fs:{}};Object.keys(d||{}).forEach(function(k){if(SY_RECS[k])return;b.f[k]=hv(d[k]);if(isObj(d[k]))b.fs[k]=subHashes(d[k])});return b}

/* دمج ثلاثي لقيمة واحدة: l محلي، r سحابة، bh بصمة آخر تطابق، bs بصمات حقولها، rnew: هل تعديل الجهاز الآخر أحدث */
function merge3(l,r,bh,bs,rnew){
  var lh=hv(l),rh=hv(r);if(lh===rh)return {v:l};
  if(bh==null)return {v:l===undefined?clone(r):l};               // لا نقطة بداية: لا نخسر شيئًا
  if(lh===bh)return {v:clone(r),changed:true};                    // غيّره الجهاز الآخر فقط
  if(rh===bh)return {v:l};                                        // غيّره هذا الجهاز فقط
  if(rnew===true)return {v:clone(r),changed:true};                // غيّره الجهازان: الأحدث هو المعتمد
  if(isObj(l)&&isObj(r)&&bs){var o=clone(l),ch=false;              // غيّره الجهازان: حقلًا حقلًا
    Object.keys(r).forEach(function(k){var a=hv(l[k]),b=hv(r[k]);if(a===b)return;if(bs[k]===a||(bs[k]==null&&!(k in l))){o[k]=clone(r[k]);ch=true}});
    Object.keys(l).forEach(function(k){if(!(k in r)&&bs[k]!=null&&bs[k]===hv(l[k])){delete o[k];ch=true}});
    return {v:o,changed:ch}}
  if(Array.isArray(l)&&Array.isArray(r)){var seen={},out=clone(l),ch2=false;out.forEach(function(x){seen[x&&x.id!=null?'i'+x.id:hv(x)]=1});
    r.forEach(function(x){var k=x&&x.id!=null?'i'+x.id:hv(x);if(!seen[k]){out.push(clone(x));seen[k]=1;ch2=true}});return {v:out,changed:ch2}}
  return {v:l}}

/* طلبان مختلفان بالرقم نفسه من جهازين: يأخذ طلب هذا الجهاز رقمًا جديدًا */
function syRenumber(L,R,ren,now){var rm={},max=0,rids={};
  syArr(R.orders).forEach(function(o){var i=kO(o);if(i)rm[i]=o;max=Math.max(max,oNum(o));rids[oIdent(o)]=1});syArr(L.orders).forEach(function(o){max=Math.max(max,oNum(o))});
  syArr(L.orders).forEach(function(o){var i=kO(o),r=rm[i];if(!r)return;var a=oIdent(o),b=oIdent(r);if(!a||!b||a===b||rids[a])return;
    var n='#'+String(++max).padStart(4,'0');o.id=n;if(o.orderNumber!=null)o.orderNumber=n;if(o.number!=null)o.number=n;o._u=now;ren.push({from:i,to:n,name:o.name||''})});
  if(ren.length)L.orderSeq=max+1}

/* ===== الدمج ===== opt: {archived:{id:1}, base, times:{local:{},remote:{}}, now} */
function syMerge(local,remote,opt){
  opt=opt||{};var now=opt.now||Date.now(),base=opt.base||null,arch=opt.archived||{},st={added:0,updated:0,deleted:0,stock:0,fields:0,renumbered:[]};
  var L=clone(local||{}),R=remote||{},out=L;['orders','products','customers'].forEach(function(k){if(!Array.isArray(out[k]))out[k]=[]});
  var T={o:{},p:{},c:{}};[[local&&local._tomb139,'o'],[local&&local._tomb139,'p'],[R._tomb139,'o'],[R._tomb139,'p'],[local&&local._tomb179,'c'],[R._tomb179,'c']].forEach(function(x){var src=x[0]&&x[0][x[1]]||{};Object.keys(src).forEach(function(i){T[x[1]][i]=Math.max(T[x[1]][i]||0,num(src[i]))})});
  var RT={p:(R._tomb139&&R._tomb139.p)||{},c:(R._tomb179&&R._tomb179.c)||{}};
  syRenumber(out,R,st.renumbered,now);
  var orig={};syArr(local&&local.orders).forEach(function(o){orig[kO(o)]=o});
  // الطلبات: الأحدث تعديلًا، وعند التساوي الأبعد في المراحل
  var map={},won={};out.orders.forEach(function(o,i){map[kO(o)]=i});
  syArr(R.orders).forEach(function(ro){var id=kO(ro);if(!id||arch[id])return;
    if(map[id]===undefined){if(T.o[id])return;out.orders.push(clone(ro));map[id]=out.orders.length-1;st.added++;return}
    var lo=out.orders[map[id]],ua=+lo._u||0,ub=+ro._u||0,rw=ua!==ub?ub>ua:(SY_RANK[String(ro.status||'new')]||0)>(SY_RANK[String(lo.status||'new')]||0);
    if(rw){out.orders[map[id]]=clone(ro);won[id]=ro;st.updated++}});
  // المنتجات والعملاء
  function recs(name,kf,kt,g,keepStock){var lm={},rm={},rtk={},ltk={};
    out[name].forEach(function(x){var k=kf(x);if(k&&!lm[k])lm[k]=x;ltk[kt(x)]=1});syArr(R[name]).forEach(function(x){var k=kf(x);if(k&&!rm[k])rm[k]=x;rtk[kt(x)]=1});
    out[name]=out[name].filter(function(x){var k=kt(x),t=RT[g][k];if(!t||rtk[k])return true;if((+x._u||0)>(+t||0))return true;st.deleted++;return false});
    out[name]=out[name].map(function(x){var k=kf(x),r=rm[k];if(!r||hv(r)===hv(x)||(+r._u||0)<=(+x._u||0))return x;var n=clone(r);if(keepStock){n.stock=x.stock;if(x.updatedAt&&x.stock!==r.stock)n.updatedAt=x.updatedAt}st.updated++;return n});
    syArr(R[name]).forEach(function(x){var k=kf(x);if(!k||lm[k]||T[g][kt(x)]&&!ltk[kt(x)])return;if(lm[k]===undefined){out[name].push(clone(x));lm[k]=x;st.added++}})}
  var nLocalP={};out.products.forEach(function(p){nLocalP[kPT(p)]=1});
  recs('products',kP,kPT,'p',true);recs('customers',kC,kC,'c',false);
  // المخزون = رقم الجهاز + ما تغيّر في السحابة منذ آخر تطابق؛ بلا نقطة بداية: من الطلبات التي خُصمت أو أُرجعت في الجهاز الآخر
  var rS=syStocks(R),bS=base&&base.stocks,adj={};
  Object.keys(won).forEach(function(id){var l=orig[id],r=won[id];if(!l||syDed(l)===syDed(r))return;
    if(syDed(r))syItems(r).forEach(function(x){adj[x.k]=(adj[x.k]||0)-x.q});else syItems(l).forEach(function(x){adj[x.k]=(adj[x.k]||0)+x.q})});
  out.products.forEach(function(p){var k=kPT(p);if(!nLocalP[k])return;var ls=num(p.stock),v;
    if(bS&&(k in bS)&&(k in rS))v=ls+rS[k]-bS[k];else if(adj[k])v=ls+adj[k];else return;
    v=Math.max(0,Math.round(v*1000)/1000);if(v!==ls){p.stock=v;p.updatedAt=new Date(now).toISOString();st.stock++}});
  // باقي حقول البيانات
  var tl=opt.times&&opt.times.local||{},tr=opt.times&&opt.times.remote||{};
  var fk={};Object.keys(local||{}).concat(Object.keys(R)).forEach(function(k){if(!SY_RECS[k])fk[k]=1});
  Object.keys(fk).forEach(function(k){var tk='db.'+k,rn=(tk in tr||tk in tl)?(+tr[tk]||0)>(+tl[tk]||0):undefined;
    var x=merge3((local||{})[k],R[k],base?(base.f[k]!=null?base.f[k]:'-'):null,base&&base.fs[k],rn);if(x.changed)st.fields++;if(x.v===undefined)delete out[k];else out[k]=x.v});
  if(Object.keys(T.o).length||Object.keys(T.p).length)out._tomb139={o:T.o,p:T.p};
  if(Object.keys(T.c).length)out._tomb179={c:T.c};
  return {db:out,stats:st}}

/* مفاتيح الإعدادات الأخرى: كل مفتاح يأخذ تغيير الجهاز الذي غيّره، وإن غيّره الاثنان فالأحدث */
function syMergeKeys(lk,rk,bk,tl,tr){var set={};
  Object.keys(lk).concat(Object.keys(rk)).forEach(function(k){if(k in set)return;var lv=lk[k],rv=rk[k];if(lv===rv)return;
    var l=lv==null?'-':fnv(lv),r=rv==null?'-':fnv(rv),b=bk?(bk[k]!=null?bk[k]:'-'):null;
    if(b==null){if(lv==null)set[k]=rv;return}
    if(l===b){set[k]=rv==null?null:rv;return}
    if(r===b)return;
    if((+tr[k]||0)>(+tl[k]||0))set[k]=rv==null?null:rv});
  return set}
