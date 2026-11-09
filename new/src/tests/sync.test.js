// اختبارات دمج المزامنة بين جهازين — تشغيل: node tests/sync.test.js
const fs=require('fs'),path=require('path'),vm=require('vm');
const H=path.join(__dirname,'..');
const ctx={console,Math,Date,JSON};vm.createContext(ctx);
const src=['lib/util.js','lib/orders.js','lib/sync.js'].map(f=>fs.readFileSync(path.join(H,f),'utf8')).join('\n');
vm.runInContext('var window={localStorage:{getItem(){return null},setItem(){}},addEventListener(){}},document={getElementById(){return {}},addEventListener(){}};'+src+';var API={syMerge:syMerge,syStamp:syStamp,syBase:syBase,syMergeKeys:syMergeKeys,fnv:fnv,reset:function(){syCache=null}};',ctx);
const A=ctx.API;let pass=0,fail=0;
function eq(a,b,m){if(JSON.stringify(a)===JSON.stringify(b))pass++;else{fail++;console.log('✗',m,'→',JSON.stringify(a),'بدل',JSON.stringify(b))}}
const C=x=>JSON.parse(JSON.stringify(x));
const base0={orders:[{id:'#0001',status:'new',created:'a',_u:100,products:[{name:'عطر',qty:2}]},{id:'#0002',status:'ready',created:'b',_u:100,products:[{name:'عطر',qty:1}]}],
  products:[{id:1,name:'عطر',stock:10,_u:100},{id:2,name:'مسك',stock:5,_u:100}],customers:[{phone:'9911',name:'سعاد',_u:100}],settings:{a:1,b:2},orderSeq:3};
const B=A.syBase(base0);
// 1) كل جهاز عدّل طلبًا مختلفًا
let L=C(base0),R=C(base0);L.orders[0].status='ready';L.orders[0]._u=200;R.orders[1].status='packing';R.orders[1]._u=210;
let r=A.syMerge(L,R,{base:B});eq([r.db.orders[0].status,r.db.orders[1].status],['ready','packing'],'تعديلان على طلبين مختلفين يبقيان');
// 2) الطلب نفسه: الأحدث يفوز
L=C(base0);R=C(base0);L.orders[0].note='محلي';L.orders[0]._u=300;R.orders[0].note='سحابة';R.orders[0]._u=250;
eq(A.syMerge(L,R,{base:B}).db.orders[0].note,'محلي','الأحدث وقتًا هو المعتمد');
// 3) طلب جديد في السحابة يُضاف، وطلب محذوف هنا لا يرجع
L=C(base0);R=C(base0);R.orders.push({id:'#0003',status:'new',created:'c',_u:400});L.orders.splice(1,1);L._tomb139={o:{'#0002':500},p:{}};
r=A.syMerge(L,R,{base:B});eq(r.db.orders.map(o=>o.id),['#0001','#0003'],'الجديد يُضاف والمحذوف لا يرجع');
// 4) رقم واحد لطلبين مختلفين من جهازين
L=C(base0);R=C(base0);L.orders.push({id:'#0003',status:'new',created:'L3',_u:400,name:'أ'});R.orders.push({id:'#0003',status:'new',created:'R3',_u:410,name:'ب'});
r=A.syMerge(L,R,{base:B});eq(r.db.orders.map(o=>o.id+':'+(o.name||'')).sort(),['#0001:','#0002:','#0003:ب','#0004:أ'],'يتغير رقم طلب هذا الجهاز');eq(r.stats.renumbered.length,1,'سجل تغيير الرقم');
// 5) المخزون بالفرق: هنا بيع 2، وفي السحابة أُضيف 5
L=C(base0);R=C(base0);L.products[0].stock=8;R.products[0].stock=15;R.products[0]._u=500;
eq(A.syMerge(L,R,{base:B}).db.products[0].stock,13,'المخزون = 10 − 2 + 5');
// 6) بلا نقطة بداية: شُحن طلب في الجهاز الآخر فيُخصم هنا
L=C(base0);R=C(base0);R.orders[1].status='shipped';R.orders[1].stockDeducted=true;R.orders[1]._u=600;R.products[0].stock=9;
eq(A.syMerge(L,R,{}).db.products[0].stock,9,'خصم الشحن من الجهاز الآخر');
// 7) منتج حذفه الجهاز الآخر يُحذف هنا، إلا إن عُدّل هنا بعد الحذف
L=C(base0);R=C(base0);R.products.splice(1,1);R._tomb139={o:{},p:{'مسك':700}};
eq(A.syMerge(L,R,{base:B}).db.products.map(p=>p.name),['عطر'],'حذف المنتج يصل');
L.products[1]._u=800;eq(A.syMerge(L,R,{base:B}).db.products.map(p=>p.name),['عطر','مسك'],'التعديل بعد الحذف يبقيه');
// 8) عميل جديد من الجهاز الآخر، وتعديل أحدث على عميل
L=C(base0);R=C(base0);R.customers.push({phone:'9922',name:'منى',_u:900});R.customers[0].name='سعاد علي';R.customers[0]._u=901;
r=A.syMerge(L,R,{base:B});eq(r.db.customers.map(c=>c.name),['سعاد علي','منى'],'العملاء يُدمجون');
// 9) الإعدادات: كل جهاز غيّر حقلًا مختلفًا
L=C(base0);R=C(base0);L.settings.a=5;R.settings.b=7;eq(A.syMerge(L,R,{base:B}).db.settings,{a:5,b:7},'دمج الإعدادات حقلًا حقلًا');
// 10) الطلب المؤرشف لا يرجع
L=C(base0);L.orders.splice(0,1);R=C(base0);eq(A.syMerge(L,R,{base:B,archived:{'#0001':1}}).db.orders.length,1,'المؤرشف لا يرجع');
// 11) الختم: تعديل محلي يغيّر _u، والأول لا يغيّر شيئًا
A.reset();let d=C(base0);A.syStamp(d,null,1000);eq(d.orders[0]._u,100,'أول ختم لا يغيّر الطوابع');
d.orders[0].status='ready';A.syStamp(d,null,2000);eq(d.orders[0]._u,2000,'التعديل يُختم بوقته');eq(d.orders[1]._u,100,'غير المعدّل لا يتغير');
d.products[0].stock=3;A.syStamp(d,null,3000);eq(d.products[0]._u,100,'تغيّر المخزون وحده ليس تعديلًا للمنتج');
// 12) المحذوفات تُسجَّل
let known=A.syStamp(d,null,3000);d.customers=[];A.syStamp(d,known,4000);eq(d._tomb179,{c:{'9911':4000}},'حذف العميل يُسجَّل');
// 13) مفاتيح الإعدادات الجانبية
const f=A.fnv;eq(A.syMergeKeys({x:'1',y:'L'},{x:'2',y:'R'},{x:f('1'),y:f('0')},{y:5},{y:9}),{x:'2',y:'R'},'المفاتيح: تغيير الآخر ثم الأحدث');
console.log(fail?'❌':'✅','المزامنة:',pass,'ناجح،',fail,'فاشل');process.exit(fail?1:0);
