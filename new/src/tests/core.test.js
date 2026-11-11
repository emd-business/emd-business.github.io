// اختبارات قواعد المكتبة (المال، المخزون، الطلبات) — تشغيل: node tests/core.test.js
const fs=require('fs'),path=require('path'),vm=require('vm');
const H=path.join(__dirname,'..');
const LIB=['lib/util.js','lib/store.js','lib/ui.js','lib/orders.js','lib/products.js','lib/money.js','lib/stock.js','lib/customers.js','lib/flow.js','lib/direct.js'];
function make(){
  const mem={};const el={textContent:'',style:{},innerHTML:'',lastElementChild:null,children:[],appendChild(){},remove(){}};
  const ctx={window:{localStorage:{getItem:k=>k in mem?mem[k]:null,setItem:(k,v)=>{mem[k]=String(v)}},addEventListener(){}},
    document:{getElementById:()=>el,addEventListener(){},body:{style:{}}},confirm:()=>ctx._confirm,_confirm:true,setTimeout:()=>0,clearTimeout(){},console};
  ctx.window.window=ctx.window;vm.createContext(ctx);
  const src=LIB.map(f=>fs.readFileSync(path.join(H,f),'utf8')).join('\n');
  vm.runInContext('var API=(function(){'+src+';return {dsSummary:dsSummary,index:function(){return index()},setDb:function(d){db=fix(d);dirty()},db:function(){return db},setStatus:setStatus,finishPacking:finishPacking,shipOrder:shipOrder,receiveOrder:receiveOrder,setPackItem:setPackItem,packDone:packDone,total:total,payState:payState,remaining:remaining,available:available,shortage:shortage,promoteWaiting:promoteWaiting,nextId:nextId,upsertCustomer:upsertCustomer,status:status,product:product,onum:onum}})();',ctx);
  return ctx;
}
let pass=0,fail=0;function eq(a,b,m){if(JSON.stringify(a)===JSON.stringify(b))pass++;else{fail++;console.log('✗',m,'→',JSON.stringify(a),'بدل',JSON.stringify(b))}}
const C=make(),A=C.API;
const D=()=>({orders:[
  {id:'#0001',status:'new',products:[{name:'عطر',qty:2,unitPrice:10}],deliveryFee:2,discount:1,created:'2026-11-01T10:00:00Z'},
  {id:'#0002',status:'waiting',products:[{name:'عطر',qty:5,unitPrice:10}],created:'2026-11-02T10:00:00Z'},
  {id:'#0003',status:'ready',products:[{name:'مسك',qty:1}],total:7,paidAmount:3,created:'2026-11-03T10:00:00Z'}],
  products:[{name:'عطر',stock:6,salePrice:10,costPrice:4},{name:'مسك',stock:3,price:7}],customers:[],orderSeq:3});
A.setDb(D());let db=A.db(),o1=db.orders[0],o2=db.orders[1],o3=db.orders[2];
// المال
eq(A.total(o1),21,'الإجمالي = المنتجات + التوصيل − الخصم');
eq(A.total(o3),7,'الإجمالي المحفوظ له الأولوية');
eq(A.payState(o3),'partial','مدفوع جزئيًا');eq(A.remaining(o3),4,'المتبقي');
eq(A.payState({total:5,paidAmount:5}),'paid','مدفوع بالكامل');eq(A.payState({paymentStatus:'cash'}),'paid','نقدًا = مدفوع');
// المخزون: الحجز
eq(A.available('عطر'),4,'المتاح = 6 − حجز الطلب الجديد 2 (المنتظر لا يحجز)');
eq(A.available('عطر',o1),6,'عند فحص طلب لا يُحسب حجزه على نفسه');
eq(A.shortage(o2).length,1,'المنتظر ينقصه مخزون');
eq(A.available('غير موجود'),null,'منتج غير مسجل');
// الشحن يخصم
eq(A.setStatus(o1,'shipped',true),true,'الشحن');eq(A.product('عطر').stock,4,'الخصم عند الشحن');eq(o1.stockDeducted,true,'علامة الخصم');
A.setStatus(o1,'shipped',true);eq(A.product('عطر').stock,4,'لا يُخصم مرتين');
// الإلغاء يرجع ويحوّل المنتظر إلى جاهز إذا توفر
A.product('عطر').stock+=1; // 5 الآن
A.setStatus(o1,'cancelled',true);eq(A.product('عطر').stock,7,'الإرجاع عند الإلغاء');eq(o1.stockReturned,true,'علامة الإرجاع');
eq(A.status(o2),'ready','المنتظر أصبح جاهزًا بعد توفر المخزون');
// شحن مع نقص: يرفض إذا رفض التاجر
A.setDb(D());db=A.db();C._confirm=false;eq(A.setStatus(db.orders[1],'shipped',true),false,'رفض الشحن عند نقص المخزون');eq(A.product('عطر').stock,6,'لا خصم عند الرفض');C._confirm=true;
// رقم الطلب والعميل
eq(A.nextId(),'#0004','رقم الطلب التالي');
A.upsertCustomer({id:'#0009',name:'سالم',phone:'+968 9911 2233',place:'نزوى'});A.upsertCustomer({id:'#0010',phone:'99112233',place:'صحار'});
eq(A.db().customers.length,1,'العميل نفسه برقم مختلف الكتابة');eq(A.db().customers[0].place,'صحار','آخر مكان');eq(A.db().customers[0].orders,['#0010','#0009'],'سجل الطلبات');
eq(A.onum({id:'#0012'}),'EMD-0012','شكل رقم الطلب');
// دورة التجهيز والشحن والاستلام
A.setDb(D());db=A.db();var r=db.orders[2]; // جاهز: مسك ×1
eq(A.shipOrder(r,{company:'أسياد'}),'أكمل تجهيز الطلب أولًا.','لا شحن قبل التجهيز');
A.setPackItem(r,0,true);eq(A.packDone(r),true,'كل الأصناف محددة');
eq(A.finishPacking(r),true,'إنهاء التجهيز');eq(A.status(r),'packing','أصبح قيد التجهيز');eq(r.packed,true,'علامة التجهيز');
eq(A.shipOrder(r,{company:'  '}),'اكتب شركة التوصيل.','الشركة مطلوبة');eq(A.status(r),'packing','لم يُشحن');
eq(A.shipOrder(r,{company:'أسياد',method:'مكتب',tracking:'T1'}),'','الشحن');eq(A.status(r),'shipped','مشحون');eq(A.product('مسك').stock,2,'خُصم المخزون عند الشحن');eq([r.company,r.method,r.tracking],['أسياد','مكتب','T1'],'بيانات الشحن');
eq(A.receiveOrder(db.orders[0]),'هذا الطلب لم يُشحن بعد.','لا استلام قبل الشحن');
eq(A.receiveOrder(r),'','الاستلام');eq(A.status(r),'received','مستلم');eq(r.receiveConfirmed,true,'علامة الاستلام');
// البيع المباشر والمصروفات في شريط المال (مثل V75)
{const now=new Date().toISOString(),dk=now.slice(0,7);const C2=make(),B=C2.API;
 B.setDb({orders:[],products:[{name:'عطر',stock:5}],customers:[],expenses:[{date:now.slice(0,10),amount:2}],
  directSales:[{id:'DS-0001',at:now,total:10,items:[{name:'عطر',qty:2,net:10,cost:3}],payments:[{amount:10}],ops:[]},
   {id:'DS-0002',at:now,total:6,items:[{name:'عطر',qty:1,net:6,cost:3}],payments:[{amount:6}],ops:[{items:[{name:'عطر',qty:1}],value:6,refund:6}]}]});
 const ix=B.index();eq(ix.sales,10,'مبيعات اليوم تشمل البيع المباشر وتستثني الملغاة');eq(ix.profit,10-6-2,'ربح الشهر = البيع − التكلفة − المصروفات');
 const C3=make();C3.window.localStorage.setItem('emd_v75_legacy_on','1');C3.window.localStorage.setItem('emd_v75_since','2026-11-02');const L=C3.API;
 eq(L.payState({total:5,created:'2026-11-01T10:00:00'}),'paid','الطلب الأقدم من تاريخ التفعيل محصّل');eq(L.payState({total:5,created:'2026-11-03T10:00:00'}),'unpaid','الأحدث غير محصّل')}
/* بيانات تالفة: قيم فارغة أو نصوص بدل كائنات داخل القوائم تُسقط ولا تعطّل */
{const C2=make(),B=C2.API;B.setDb({orders:[null,'x',42,{id:'#1',status:'new',products:[]},[1]],products:[null,{name:'p'}],customers:'bad'});
 eq(B.db().orders.length,1,'fix: الطلبات غير الصالحة تُسقط');eq(B.db().products.length,1,'fix: المنتجات غير الصالحة تُسقط');eq(B.db().customers,[],'fix: العملاء نص → قائمة فارغة');
 B.setDb(null);eq(B.db().orders,[],'fix: بيانات فارغة');B.setDb([1,2]);eq(Array.isArray(B.db().orders),true,'fix: مصفوفة بدل كائن')}

console.log((fail?'❌':'✅')+' القواعد: '+pass+' ناجح، '+fail+' فاشل');process.exit(fail?1:0);
