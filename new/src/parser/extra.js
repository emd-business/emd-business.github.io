const mem={};global.localStorage={getItem:k=>k in mem?mem[k]:null,setItem:(k,v)=>{mem[k]=String(v)}};global.window={};
require('../static/parse.js');const E=window.EMDParse;
E.setup({prods:()=>['عطر عود ملكي','عطر ورد طائفي','دهن عود كمبودي','دهن عود هندي','بخور دخون الشيخ','مسك الطهارة','مسك أبيض','مبخرة كهربائية','عباية سوداء مطرزة','شيلة شيفون','جزء عم','مصحف التجويد'].map(n=>({name:n}))});
const T0='/mnt/project-files/emd-v232/tests/';let fl=0,n=0;
for(const set of ['tests','blind','blind2']){require(T0+set).forEach((t,i)=>{n++;const r=E.parse(t.m);if(r.left.length){fl++;console.log(set,'#'+(i+1),r.left.join(' / '))}})}
console.log('flagged',fl,'of',n);
const X=["مرحبا ابي ٣ دهن هندي\nالاسم خلود\n9٧٧٧٦٦٥٥\nصحم","أريد مصحف التجويد نسختين وجزء عم ٥\nأنا يوسف من الرستاق\n٩٩٨٨٧٧٦٦\nالدفع تحويل","عبايه سوداء مطرزه مقاس ٥٨\nشيله شيفون ٢\nام خالد - السويق\n91234567","ابي حذاء رياضي مقاس 42\nسعيد\n95554433\nبركاء"];
X.forEach(m=>{const r=E.parse(m);console.log(JSON.stringify({n:r.name,ph:r.phone,pl:r.place,pay:r.pay,note:r.note,it:r.items.map(x=>(x.p||'?'+x.raw)+'×'+x.q+(x.opts&&x.opts.length?'['+x.opts+']':'')),left:r.left}))});
