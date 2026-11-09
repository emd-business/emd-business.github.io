const T0='/mnt/project-files/emd-v232/tests/';
const mem={};global.localStorage={getItem:k=>k in mem?mem[k]:null,setItem:(k,v)=>{mem[k]=String(v)}};global.window={};
require(process.argv[2]||'../static/parse.js');const E=window.EMDParse;
const {PRODS}={PRODS:['عطر عود ملكي','عطر ورد طائفي','دهن عود كمبودي','دهن عود هندي','بخور دخون الشيخ','مسك الطهارة','مسك أبيض','مبخرة كهربائية','عباية سوداء مطرزة','شيلة شيفون','جزء عم','مصحف التجويد'].map(n=>({name:n}))};
E.setup({prods:()=>PRODS});
const {check}=require(T0+'score');
const P=PRODS.map(p=>p.name);
function conv(r){return {name:r.name,phone:r.phone,place:r.place,pay:r.pay,prods:r.items.map(it=>({sel:it.p,q:String(it.q),reg:P.includes(it.p)}))}}
let tot=0,okT=0;const only=process.env.ONLY;
for(const set of ['tests','blind','blind2','qty','qty2']){if(only&&only!==set)continue;const T=require(T0+set);let ok=0;const F=[];
 T.forEach((t,i)=>{const r=conv(E.parse(t.m));let f;
  if(t.e.n!==undefined)f=check(r,t.e);else{const got=r.prods.map(x=>(x.reg?x.sel:'?')+'×'+x.q).sort().join(' + '),exp=t.e.p.map(x=>x.join('×')).sort().join(' + ');f=got===exp?[]:[got+' بدل '+exp]}
  if(!f.length)ok++;else F.push('#'+(i+1)+' '+f.join(' ; ')+(process.env.V?'\n   '+JSON.stringify(t.m):''))});
 tot+=T.length;okT+=ok;console.log(set,ok+'/'+T.length);F.forEach(x=>console.log('  ',x))}
console.log('TOTAL',okT+'/'+tot);
