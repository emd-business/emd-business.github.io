// رسائل قالب «📚 الكتب» (V235) مع ٤ حالات لذاكرة التعلّم (منها كلمات خاطئة تعلّمها التطبيق مثل «1»)
const T0='/mnt/project-files/emd-v235-parser/tests/';
const mem={};global.localStorage={getItem:k=>k in mem?mem[k]:null,setItem:(k,v)=>{mem[k]=String(v)},removeItem:k=>{delete mem[k]}};global.window={};
require(process.argv[2]||'../static/parse.js');const E=window.EMDParse;
const CAT=require(T0+'books-cat3');const {check}=require(T0+'score');const T=require(T0+'books');
E.setup({prods:()=>CAT});const P=CAT.map(p=>p.name);
const AMM='رحلتي مع الفاتحة وجزء عم',BK='سورة البقره كبير';
const SC={'بدون تعلّم':{},'تعلّم «جزء عم»':{'جزء عم':AMM},'تعلّم خاطئ «1» و«البقره»':{'1':{p:AMM},'جزء عم':AMM,'البقره':BK},'تعلّم «سوره البقره» و«رحلتي مع» و«- 1»':{'سوره البقره':BK,'رحلتي مع':AMM,'- 1':AMM}};
function conv(r){return {name:r.name,phone:r.phone,place:r.place,pay:r.pay,prods:r.items.map(it=>({sel:it.p,q:String(it.q),reg:P.includes(it.p)}))}}
let tot=0,all=0;
for(const nm in SC){const A={alias:{}};for(const k in SC[nm]){const v=SC[nm][k];A.alias[k]={p:v.p||v,src:k,n:1}}
 mem['emd_rb_learn103']=JSON.stringify(A);delete mem['emd_rb_learn232'];
 let ok=0;const F=[];
 for(let i=0;i<T.length;i++){const e=JSON.parse(JSON.stringify(T[i].e));if(e.amb&&SC[nm]['البقره']||e.amb&&SC[nm]['سوره البقره'])e.p=e.p.map(x=>x[0]==='?'?[BK,1]:x);
  const r=conv(E.parse(T[i].m));const f=check(r,e);if(!f.length)ok++;else F.push('  #'+(i+1)+' '+f.join(' ; '))}
 const left=Object.keys(JSON.parse(mem['emd_rb_learn103']).alias).filter(k=>!/[ء-يa-z]{2}/.test(k));
 console.log(nm+': '+ok+'/'+T.length+(left.length?'  ⚠ بقيت مفاتيح خاطئة: '+left.join(','):''));F.forEach(x=>console.log(x));tot+=ok;all+=T.length}
console.log('BOOKS',tot+'/'+all);
