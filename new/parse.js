/* EMD Business — تحليل رسالة الطلب (نسخة نظيفة: قواعد V232 + قائمة ولايات عُمان V104) */
(function(){
'use strict';
var CFG={prods:function(){return []},lk:'emd_rb_learn232',ak:'emd_rb_learn103'};
var PL=(function(){
var GOV=[
 ['مسقط',['مسقط','مطرح','بوشر','السيب','العامرات','قريات']],
 ['ظفار',['صلالة','طاقة','مرباط','رخيوت','ثمريت','ضلكوت','المزيونة','مقشن','شليم وجزر الحلانيات','سدح']],
 ['مسندم',['خصب','دبا','بخا','مدحاء']],
 ['البريمي',['البريمي','محضة','السنينة']],
 ['الداخلية',['نزوى','بهلاء','منح','الحمراء','أدم','إزكي','سمائل','بدبد','الجبل الأخضر']],
 ['شمال الباطنة',['صحار','شناص','لوى','صحم','الخابورة','السويق']],
 ['جنوب الباطنة',['الرستاق','العوابي','نخل','وادي المعاول','بركاء','المصنعة']],
 ['جنوب الشرقية',['صور','الكامل والوافي','جعلان بني بو حسن','جعلان بني بو علي','مصيرة']],
 ['شمال الشرقية',['إبراء','المضيبي','بدية','القابل','وادي بني خالد','دماء والطائيين']],
 ['الظاهرة',['عبري','ينقل','ضنك']],
 ['الوسطى',['هيماء','محوت','الدقم','الجازر']]];
var EXTRA={'لوى':['ليوا','لوا'],'بهلاء':['بهلا'],'إبراء':['ابرا'],'هيماء':['هيما'],'مدحاء':['مدحا'],'بركاء':['بركا'],'دماء والطائيين':['دما والطايين','دماء والطايين','دما والطائيين','دما'],'شليم وجزر الحلانيات':['شليم','جزر الحلانيات','الحلانيات','جزر شليم والحلانيات'],
  'جعلان بني بو علي':['جعلان بني بوعلي','بني بو علي','بني بوعلي','جعلان بو علي','جعلان'],'جعلان بني بو حسن':['جعلان بني بوحسن','بني بو حسن','بني بوحسن','جعلان بو حسن'],'الكامل والوافي':['الكامل','كامل ووافي'],
  'وادي المعاول':['المعاول'],'وادي بني خالد':['بني خالد'],'ثمريت':['ثمريط'],'سمائل':['سمايل'],'نزوى':['نزوي'],'الجبل الأخضر':['الجبل'],'صلالة':['صلاله'],'إزكي':['ازكي'],'محضة':['محضه'],'مصيرة':['مصيره','جزيرة مصيرة']};
/* كلمات لها معنى ثاني (آدم اسم، صور = صور، طاقة…) — ما نعتبرها ولاية إلا إذا كانت لحالها في سطر المكان */
var AMB={'منح':1,'ادم':1,'نخل':1,'طاقه':1,'صور':1,'كامل':1,'الكامل':1,'قابل':1,'القابل':1,'ضنك':1,'سدح':1,'دبا':1,'بخا':1,'الجبل':1,'جعلان':1,'دما':1,'شليم':1,'حمراء':1,'الحمراء':1,'لوا':1};
var AR='٠١٢٣٤٥٦٧٨٩';
function dig(s){return String(s==null?'':s).replace(/[٠-٩]/g,function(d){return AR.indexOf(d)})}
function N(s){return dig(s).replace(/[أإآٱ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/ؤ/g,'و').replace(/ئ/g,'ي').replace(/[ً-ٰٟـ]/g,'').replace(/[^ء-ي0-9a-z\s]/gi,' ').replace(/\s+/g,' ').trim().toLowerCase()}
function K(s){return N(s).split(' ').map(function(w){return w.replace(/ء$/,'')}).join(' ')}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
var LIST=[],KEYS=[],BYC={};
GOV.forEach(function(g){g[1].forEach(function(c){var o={c:c,g:g[0],keys:{}};LIST.push(o);BYC[c]=o;
  [c].concat(EXTRA[c]||[]).forEach(function(v){var k=K(v);if(!k)return;o.keys[k]=1;if(/^ال/.test(k)&&k.length>4)o.keys[k.slice(2)]=1});
  Object.keys(o.keys).forEach(function(k){KEYS.push({k:k,w:k.split(' '),o:o,amb:!!AMB[k]})})})});
KEYS.sort(function(a,b){return b.w.length-a.w.length||b.k.length-a.k.length});
var GOVK=['محافظه','ولايه','منطقه','سلطنه عمان','عمان','الباطنه جنوب','جنوب الباطنه','الباطنه شمال','شمال الباطنه','الشرقيه جنوب','جنوب الشرقيه','الشرقيه شمال','شمال الشرقيه','الباطنه','الشرقيه','الداخليه','الظاهره','الوسطي','ظفار','مسندم','جنوب','شمال'].map(K);
function tokStrip(t){if(/^(?:بال|وال|فال)/.test(t)&&t.length>5)return ['ال'+t.slice(3),t];if(/^لل/.test(t)&&t.length>4)return ['ال'+t.slice(2),t];if(/^و/.test(t)&&t.length>3)return [t.slice(1),t];return [t]}
/* يدوّر على ولاية داخل نص؛ strict = لا نقبل الكلمات المزدوجة المعنى إلا إذا كانت هي النص كله */
function find(text,strict){var w=K(text).split(' ').filter(Boolean);if(!w.length)return null;
  for(var i=0;i<w.length;i++){for(var j=0;j<KEYS.length;j++){var e=KEYS[j],n=e.w.length;if(i+n>w.length)continue;var ok=true;
      for(var z=0;z<n;z++){var cand=z===0?tokStrip(w[i]):[w[i+z]];if(cand.indexOf(e.w[z])<0){ok=false;break}}
      if(!ok)continue;if(e.amb&&strict&&w.length!==n)continue;return {o:e.o,i:i,n:n,words:w}}}
  return null}
/* أخطاء إملائية بسيطة لاسم ولاية لحاله: «الرستق» «صحاار» */
function lev(a,b){var p=[],i,j;for(j=0;j<=b.length;j++)p[j]=j;for(i=1;i<=a.length;i++){var c=[i];for(j=1;j<=b.length;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=c}return p[b.length]}
function fuzzy(text){var k=K(text);if(!k||k.split(' ').length>3)return null;var best=null,bd=9;
  KEYS.forEach(function(e){if(e.amb||e.k.length<4)return;var d=lev(k,e.k);if(d<bd){bd=d;best=e}});
  return best&&bd===1&&k[0]===best.k[0]?best.o:null}
/* «الباطنه جنوب / العوابي» → «العوابي» ، «السيب الحيل الشماليه» → «السيب – الحيل الشماليه» */
function canon(value,strict){var v=String(value||'').trim();if(!v)return null;var f=find(v,strict);
  if(!f){var fz=fuzzy(v);return fz?{c:fz.c,g:fz.g,text:fz.c}:null}
  var rest=f.words.slice(0,f.i).concat(f.words.slice(f.i+f.n)).join(' ');
  GOVK.forEach(function(g){rest=(' '+rest+' ').replace(new RegExp(' '+g+' ','g'),' ').trim()});
  rest=rest.replace(/^(?:في|ب|الي|على|عند)\s+/,'').trim();
  var o=f.o,keep='';
  if(rest&&/[ء-ي]{2}/.test(rest)&&rest!==K(o.g)){var src=v.split(/\s+/),out=[];
    /* نرجّع التفاصيل بكتابتها الأصلية */
    var restW=rest.split(' ');src.forEach(function(t){var kt=K(t);if(kt&&restW.indexOf(kt)>=0){out.push(t.replace(/^[\/\-–،,]+|[\/\-–،,]+$/g,''));restW.splice(restW.indexOf(kt),1)}});keep=out.join(' ').trim()}
  return {c:o.c,g:o.g,text:o.c+(keep?' – '+keep:'')}}

/* ---------- قبل التحليل ---------- */
var PLBL=/^\s*(?:الولاي[ةه]|الولايه|ولاي[ةه]|المنطق[ةه]|منطق[ةه]|المحافظ[ةه]|الحي)\s*[:：\-]\s*/;
function pre(raw){var used=false;var out=String(raw||'').split('\n').map(function(l){
    if(PLBL.test(l)){used=true;l=l.replace(PLBL,'المكان: ')}
    var m=l.match(/^(\s*(?:المكان|مكان التوصيل|الموقع|موقع التوصيل|العنوان)\s*[:：]?\s*)(.+)$/);
    if(m){var c=canon(m[2],false);if(c&&K(c.text)!==K(m[2])){used=true;return m[1]+c.text}return l}
    var t=l.trim();if(!t||t.split(/\s+/).length>3||/\d/.test(t))return l;
    var f=find(t,true);if(f&&f.n===K(t).split(' ').length&&!AMB[K(t)]&&K(f.o.c)!==K(t)){used=true;return f.o.c}
    return l}).join('\n');return {text:out,used:used}}
return {list:LIST,find:find,canon:canon,pre:pre,K:K}})();
var LK,AK;
function lsGet(k){try{return localStorage.getItem(k)}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function dg(s){return String(s==null?'':s).replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/[۰-۹]/g,function(d){return '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)})}
function N(s){return dg(s).toLowerCase().replace(/[ً-ٰٟـ]/g,'').replace(/[أإآٱ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/ؤ/g,'و').replace(/ئ/g,'ي').replace(/\s+/g,' ').trim()}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function prods(){try{return prodKeys()}catch(e){return []}}
function loadL(){var d;try{d=JSON.parse(lsGet(LK)||'{}')||{}}catch(e){d={}}d.lm=d.lm||{};d.units=d.units||{};d.place=d.place||{};return d}
function saveL(d){d.t=Date.now();lsSet(LK,JSON.stringify(d))}
function loadA(){var d;try{d=JSON.parse(lsGet(AK)||'{}')||{}}catch(e){d={}}d.alias=d.alias||{};d.labels=d.labels||{};d.notName=d.notName||{};d.stats=d.stats||{};return d}
function saveA(d){d.updated=Date.now();lsSet(AK,JSON.stringify(d))}

/* ---------- الكلمات ---------- */
var QW={'واحد':1,'واحده':1,'وحده':1,'حبه':1,'قطعه':1,'نسخه':1,'علبه':1,'اثنين':2,'اثنتين':2,'ثنتين':2,'حبتين':2,'نسختين':2,'قطعتين':2,'علبتين':2,'ثلاث':3,'ثلاثه':3,'اربع':4,'اربعه':4,'خمس':5,'خمسه':5,'ست':6,'سته':6,'سبع':7,'سبعه':7,'ثمان':8,'ثمانيه':8,'تسع':9,'تسعه':9,'عشر':10,'عشره':10,'عشرين':20,'ثلاثين':30,'اربعين':40,'خمسين':50,'ميه':100,'مية':100,'مائه':100,'دزينه':12,'درزن':12,'دزن':12,'درزينه':12,'دزينتين':24,'درزنين':24,'زوج':2,'زوجين':4};
var UNIT1=/^(?:حبه|حبات|حب|قطعه|قطع|نسخه|نسخ|علبه|علب|pcs|pc|piece|pieces)$/;
var UNITX=/^(?:كرتون|كرتونه|كراتين|باكيت|باكت|بكت|صندوق|كيس|طقم|شده|بندل)$/;
var STOP={};('و او من في على الى إلى ل لـ عن مع بس فقط كل لو سمحت سمحتي فضلك ممكن ابي ابا ابغي ابغى ابغا اريد أريد بغيت ودي حاب حابه حبيت اطلب أطلب عندكم عندك تطلبين تطلب لي ياليت يا اخوي اختي اخي أخي أختي طلب طلبي طلبيه الطلب طلب جديد السلام عليكم ورحمه الله وبركاته سلام مرحبا مرحباً هلا والله اهلا أهلا صباح مساء الخير هاي hi hello i want need please and the a of x × * + - – — / : عدد العدد الكميه كميه الاسم اسم اسمي واسمي باسم بإسم بأسم الرقم رقم رقمي ورقمي المكان العنوان عنواني التوصيل توصيل والتوصيل الموقع الدفع والدفع طريقه المنتج المنتجات الصنف item qty name phone area address city للمدرسه للبيت هديه انا أنا معك معاك هذا شكرا مشكور مشكورين يعطيك العافيه تسلم ارسل ارسلوا ارسله ولايه ولاية محافظه منطقه الولايه المنطقه شركه الشحن مكتب مندوب ملاحظه ملاحظات المستلم التواصل للتواصل الواتساب واتساب الجوال الهاتف كاش نقدا نقدي نقدًا تحويل بنكي استلام الاستلام عند عنوان التواصل الطلب طريقة مكان الجهه الجهة موبايل تلفون النور order new thanks thank you pls توصلونه وتوصلونه توصلونها توصلوه وصلوه ارسلوه ارسلوها كم سعر بكم').split(/\s+/).forEach(function(w){STOP[N(w)]=1});
var PLUR={'عطور':'عطر','مصاحف':'مصحف','اجزاء':'جزء','شيل':'شيله','عبايات':'عبايه','عبي':'عبايه','مباخر':'مبخره','دهون':'دهن','كتب':'كتاب','اقلام':'قلم','ساعات':'ساعه'};
var LANDMARK=/^(?:قريب|قرب|ورا|وراء|جنب|بجنب|بجانب|جانب|جمب|مقابل|قبال|خلف|قدام|امام|بعد|قبل|عند|بالقرب|يم|حذاء|حذا)$/;

/* ---------- فهرس المنتجات ---------- */
function stripAl(t){if(/^(?:ال)/.test(t)&&t.length>4)return t.slice(2);return t}
function tokNorm(t){t=N(t).replace(/^[^ء-يa-z0-9]+|[^ء-يa-z0-9]+$/g,'');return t}
function lev(a,b,cap){if(Math.abs(a.length-b.length)>cap)return cap+1;var p=[],i,j;for(j=0;j<=b.length;j++)p[j]=j;
  for(i=1;i<=a.length;i++){var c=[i],mn=i;for(j=1;j<=b.length;j++){c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));if(c[j]<mn)mn=c[j]}if(mn>cap)return cap+1;p=c}return p[b.length]}
var IDX=null,IDXsig='';
function index(){var P=prods(),sig=P.join('|');if(IDX&&IDXsig===sig)return IDX;
  var items=P.map(function(p){var w=N(p).split(' ').map(tokNorm).filter(Boolean).map(stripAl);return {p:p,w:w}});
  var df={};items.forEach(function(it){var seen={};it.w.forEach(function(t){if(!seen[t]){seen[t]=1;df[t]=(df[t]||0)+1}})});
  IDX={items:items,df:df};IDXsig=sig;return IDX}
/* ما المنتجات التي تحتوي هذه الكلمة؟ يرجع {set, dual} */
function tokProds(raw){var I=index(),t=stripAl(tokNorm(raw));if(!t||t.length<2||/^\d+$/.test(t))return null;
  function look(x){var out=[];I.items.forEach(function(it,ix){if(it.w.indexOf(x)>=0)out.push(ix)});return out}
  var s=look(t);if(s.length)return {s:s,q:0,t:t};
  if(PLUR[t]){s=look(PLUR[t]);if(s.length)return {s:s,q:0,t:PLUR[t]}}
  /* المثنى: شيلتين، جزئين، عطرين */
  var m=t.match(/^(.{2,}?)(تين|ين|ان)$/);if(m){var c=[m[1],m[1]+'ه',m[1].replace(/ي$/,'ء'),m[1].replace(/ت$/,'ه')];
    for(var i=0;i<c.length;i++){s=look(c[i]);if(s.length&&c[i].length>=2)return {s:s,q:2,t:c[i]}}}
  if(/^(.{3,})ات$/.test(t)){s=look(t.slice(0,-2)+'ه');if(s.length)return {s:s,q:0,t:t.slice(0,-2)+'ه'}}
  /* خطأ إملائي بسيط في كلمة طويلة */
  if(t.length>=4&&!STOP[t]&&!PLWORD(t)){var best=null;Object.keys(I.df).forEach(function(k){if(k.length<4||k[0]!==t[0])return;if((t.length>=5||k.length===t.length+1)&&lev(t,k,1)===1&&!best)best=k});if(best){s=look(best);return {s:s,q:0,t:best,fz:1}}}
  return null}
function aliasList(){var A=loadA().alias,P=prods();return Object.keys(A).filter(function(k){return A[k]&&P.indexOf(A[k].p)>=0}).map(function(k){return {w:k.split(' ').map(tokNorm),p:A[k].p}}).sort(function(a,b){return b.w.length-a.w.length})}
var COLORS=/^(?:ابيض|اسود|سوداء|سودا|احمر|حمراء|ازرق|زرقاء|اخضر|خضراء|بيج|رمادي|ذهبي|فضي|وردي|بني|كحلي|عنابي|كبير|صغير|وسط)$/;

/* ---------- تحليل سطر فيه منتجات ---------- */
function toks(line){return dg(line).replace(/[()\[\]{}\/=:：]/g,' ').replace(/(عدد|العدد)(\d)/g,'$1 $2').replace(/(\d)(x|×)(?=\s|$)/gi,'$1').replace(/([×x\*])\s*(\d)/gi,' $1$2').replace(/(\d)\s*([×x\*])(?=\s|$)/gi,'$1 ').replace(/[+،,]/g,' + ').split(/\s+/).filter(Boolean)}
function numOf(t,units){var n0=tokNorm(t),n=QW[n0]?n0:n0.replace(/^و(?=\S)/,'');var raw=dg(t).replace(/^و/,'');
  var m=raw.match(/^[×x\*]?(\d{1,3})$/i);if(m&&+m[1]>0)return {q:+m[1],u:''};
  if(QW[n])return {q:QW[n],u:''};return null}
function isWaw(t){var n=tokNorm(t);if(!/^و\S/.test(n)||QW[n])return false;var I=index();if(I.df[stripAl(n)])return false;return true}
function findMentions(line){var r=findMentions0(line);if(r.M.length){var keep=r.M.filter(function(m){var w=r.T.slice(m.i,m.j).map(function(t){return tokNorm(t).replace(/^و(?=\S{2})/,'')}).filter(function(t){return t&&!/^\d+$/.test(t)&&!QW[t]&&!UNIT1.test(t)});return !(w.length&&w.every(function(t){return PLWORD(t)||PLWORD(t.replace(/^لل(?=\S{3})/,'ال').replace(/^ل(?=\S{3})/,''))||PLEN.test(t)}))});if(keep.length!==r.M.length){r.M.forEach(function(m){if(keep.indexOf(m)<0)for(var x=m.i;x<m.j;x++)r.used[x]=0});r.M=keep}}return r}
function findMentions0(line){
  var T=toks(line),M=[],used={},AL=aliasList(),I=index(),L=loadL();
  /* ١) ما تعلّمه التطبيق */
  for(var i=0;i<T.length;i++){if(used[i])continue;for(var a=0;a<AL.length;a++){var w=AL[a].w,ok=true;
      for(var z=0;z<w.length;z++){var tk=T[i+z];if(!tk){ok=false;break}var n=tokNorm(tk);if(z===0)n=n.replace(/^و(?=\S{2})/,function(m){return n===w[0]?'و':''});if(n!==w[z]&&stripAl(n)!==stripAl(w[z])&&n.replace(/^و/,'')!==w[z]){ok=false;break}}
      if(ok){M.push({i:i,j:i+w.length,p:AL[a].p,al:1});for(var y=i;y<i+w.length;y++)used[y]=1;i+=w.length-1;break}}}
  /* ٢) كلمات أسماء المنتجات */
  for(i=0;i<T.length;i++){if(used[i])continue;var r=tokProds(T[i]),waw=false;
    if(!r&&isWaw(T[i])){r=tokProds(T[i].replace(/^و/,''));waw=!!r}
    if(!r||STOP[tokNorm(T[i])])continue;
    var S=r.s.slice(),j=i+1,dual=r.q,hits=[r.t];
    while(j<T.length&&!used[j]){var r2=tokProds(T[j]);if(!r2)break;var S2=S.filter(function(x){return r2.s.indexOf(x)>=0});if(!S2.length)break;S=S2;hits.push(r2.t);if(r2.q)dual=r2.q;j++}
    var pick=null;
    if(S.length===1)pick=S[0];
    else{var full=S.filter(function(x){return I.items[x].w.every(function(t){return hits.indexOf(t)>=0})});if(full.length===1)pick=full[0]}
    if(pick!=null){var it=I.items[pick],distinct=hits.some(function(t){return I.df[t]===1}),allc=it.w.every(function(t){return hits.indexOf(t)>=0});
      if(!distinct&&!allc)pick=null;
      /* كلمة وحدة (لون أو صفة) بعد منتج آخر = صفة له، ليست منتجًا جديدًا */
      else if(hits.length===1&&it.w.length>1&&(COLORS.test(hits[0])||hits[0].length<3))pick=null;
      else if(hits.length===1&&it.w.length>1&&M.some(function(m){return m.j===i})&&!waw)pick=null}
    if(pick!=null&&M.length){var last=M[M.length-1];if(last.p===I.items[pick].p&&i>last.j&&i-last.j<=2&&T.slice(last.j,i).every(function(x){return numOf(x)||UNIT1.test(tokNorm(x))}))
      {last.ext=T.slice(last.j,i);for(var y4=last.j;y4<j;y4++)used[y4]=1;last.j0=last.j;last.qtok=last.j;last.j=j;var nq=numOf(T[last.qtok]);if(nq){last.preq=nq.q}i=j-1;continue}}
    if(pick!=null){M.push({i:i,j:j,p:I.items[pick].p,dq:dual});for(var y2=i;y2<j;y2++)used[y2]=1;i=j-1}
    else if(S.length>1&&hits.length===j-i){M.push({i:i,j:j,p:null,raw:T.slice(i,j).join(' ').replace(/^و(?=\S)/,''),dq:dual});for(var y3=i;y3<j;y3++)used[y3]=1;i=j-1}}
  M.sort(function(a,b){return a.i-b.i});
  /* «مقاس 54» و«لون 2» ليست كميات */
  for(var zi=0;zi<T.length-1;zi++){if(/^(?:مقاس|المقاس|حجم|size|لون|موديل|رقم)$/.test(tokNorm(T[zi]))&&!used[zi]){used[zi]=3;used[zi+1]=3}}
  /* ٣) الكميات */
  function nn(x){return x==null?'':tokNorm(T[x]).replace(/^و(?=\S{2})/,function(m){return QW[tokNorm(T[x])]?'و':''})}
  function after(m,k){var a=m.j,t=T[a],r=null;if(!t||used[a])return null;var tn=tokNorm(t);
    if(/^(?:عدد|العدد|الكميه|كميه)$/.test(tn)&&T[a+1]&&numOf(T[a+1])&&!used[a+1])return {q:numOf(T[a+1]).q,c:[a,a+1]};
    if(/^(?:نفس|بنفس)$/.test(tn)&&/^(?:العدد|الكميه)$/.test(nn(a+1))&&k>0)return {q:M[k-1].q,c:[a,a+1]};
    if(/^(?:مثله|مثلها|مثلهم|زيه|زيها)$/.test(tn)&&k>0)return {q:M[k-1].q,c:[a]};
    if(isWaw(t))return null;
    var n=numOf(t);if(n){r={q:n.q,c:[a]};if(/^و?نص$/.test(tn)&&T[a+1]){}var u=T[a+1]&&tokNorm(T[a+1]);if(u&&UNIT1.test(u))r.c.push(a+1);else if(u&&UNITX.test(u)){r.unit=u;r.base=n.q;r.c.push(a+1)}return r}
    if(/^و?نص$/.test(tn)&&T[a+1]&&numOf(T[a+1])&&numOf(T[a+1]).q===12)return {q:6,c:[a,a+1]};
    if(UNITX.test(tn)){var n2=T[a+1]&&numOf(T[a+1]);return n2&&!isWaw(T[a+1])?{q:n2.q,c:[a,a+1],unit:tn,base:n2.q}:{q:1,c:[a],unit:tn,base:1}}
    return null}
  function before(m,k){var b=m.i-1;if(b<0||used[b])return null;var bn=tokNorm(T[b]),bw=bn.replace(/^و(?=\S)/,'');
    if(/^و?من$/.test(bn)){b--;if(b<0||used[b])return null;bn=tokNorm(T[b]);bw=bn.replace(/^و(?=\S)/,'')}
    if(k>0&&b<M[k-1].j)return null;
    if((UNIT1.test(bw)&&!QW[bw])||UNITX.test(bw)){var n=T[b-1]&&!used[b-1]&&numOf(T[b-1]);if(n){var r={q:n.q,c:[b-1,b]};if(UNITX.test(bw)){r.unit=bw;r.base=n.q}if(T[b-2]&&/^و?نص$/.test(tokNorm(T[b-2]))&&n.q===12){r.q=6;r.c.unshift(b-2)}return r}
      if(UNITX.test(bw))return {q:1,c:[b],unit:bw,base:1};return null}
    var n3=numOf(T[b]);if(n3){var r3={q:n3.q,c:[b]};if(T[b-1]&&!used[b-1]&&/^و?نص$/.test(tokNorm(T[b-1]))&&n3.q===12){r3.q=6;r3.c.unshift(b-1)}return r3}
    if(bn==='و'&&T[b-1]&&!used[b-1]&&numOf(T[b-1])&&(k===0||M[k-1].j<b-1))return {q:numOf(T[b-1]).q,c:[b-1,b]};
    return null}
  /* إذا جاء العدد قبل المنتج الأول («٢ ورد ٣ مسك») فالأعداد كلها قبل منتجاتها */
  var preStyle=M.length>1&&!!before(M[0],0)&&!after(M[0],0)||M.length>1&&!!before(M[0],0)&&M[1]&&after(M[0],0)&&after(M[0],0).c[after(M[0],0).c.length-1]===M[1].i-1&&!!before(M[1],1);
  M.forEach(function(m,k){var q=0,r=null;
    if(m.preq){m.q=m.preq;m.qx=1;return}
    r=preStyle?(before(m,k)||after(m,k)):(after(m,k)||before(m,k));
    if(r){r.c.forEach(function(c){used[c]=2});q=r.q}
    var unit=r&&r.unit||'',base=r&&r.base||0;
    if(unit&&L.units[unit])q=base*L.units[unit];
    if(!q)q=m.dq||1;else if(m.dq&&q===1&&!(r&&r.c.length))q=m.dq;
    m.qx=r?1:0;m.q=q;m.unit=unit;m.base=base});
  function isUsedQ(x){return !!used[x]}
  return {T:T,M:M,used:used}}

/* ---------- قبل التحليل: تحويل الرسالة إلى صيغة واضحة ---------- */
function stripWA(l){return String(l).replace(/^\s*\[?\d{1,4}[\/.\-]\d{1,2}[\/.\-]\d{1,4}[,،]?\s+\d{1,2}:\d{2}(?::\d{2})?\s*(?:[AaPp]\.?[Mm]\.?|ص|م)?\]?\s*(?:-\s*)?[^:\n]{1,40}?:\s+/,'')}
var GREET=/^(?:السلام عليكم|السلام|سلام عليكم|سلام|مرحبا|هلا|اهلا|صباح الخير|مساء الخير|صباح النور|مساء النور|هاي|hi|hello|hey)(?:\s+(?:ورحمه الله|ورحمة الله|وبركاته|والله|اخوي|اختي|يا اخوي|يا اختي|اخي))*[\s.!،,]*$/i;
var NAMEK=/(?:^|\s)(?:و?اسمي|على اسم|علي اسم|باسم|بإسم|بأسم|بإسمي|باسمي|اسم المستلم|الاسم)\s*[:：\/\-]?\s*/;
var SPLITK=/\s+(?=(?:و?اسمي|على اسم|و?رقمي|و?الرقم|و?التوصيل|و?العنوان|و?الدفع|و?المكان)(?:\s|[:：]))/;
var PAYRX=/(?:(?:و?الدفع|طريقه الدفع|طريقة الدفع)\s*[:：]?\s*)?(?:عند\s+الاستلام|عند\s+التوصيل|تحويل(?:\s+بنكي)?|كاش|نقدا|نقدًا|نقدي)\s*$/;
var PLEN=/^(?:muscat|salalah|sohar|nizwa|sur|seeb|barka|ibri|buraimi|qurum|khoud|mawaleh|bawshar|bousher|amerat|rustaq|ibra|duqm|khasab|ghubra|azaiba|mabelah|ruwi|muttrah|saham|suwaiq|shinas|samail|bahla|izki)\b/i;
function isPlaceStart(s){var w=N(s).split(' ');if(PLEN.test(String(s).trim()))return true;try{var V=PL;if(V){var f=V.find(s,false);if(f&&f.i===0)return true}}catch(e){}
  return PLX.indexOf(w[0].replace(/^(?:لل)/,'ال').replace(/^ل(?=\S{3})/,''))>=0||PLX.indexOf(w[0])>=0}
var PLX=('الخوض الموالح العذيبه الغبره القرم الخوير روي الحيل المعبيله الانصب غلا الوطيه الحمريه دارسيت حلبان الملده الفليج الحافه السعاده العقر الخويريه الطريف فرق سناو المصنعه العامرات السيب بوشر مطرح مسقط صحار الدهاريز الوادي الكبير').split(' ').map(N);
var NUMR='(\\d{1,3}|واحد[ةه]?|وحد[ةه]|حب[ةه]|حبتين|اثنين|اثنتين|ثنتين|ثلاث[ةه]?|[اأ]ربع[ةه]?|خمس[ةه]?|ست[ةه]?|سبع[ةه]?|عشر[ةه]?|نسخ[ةه]|قطع[ةه]|نسختين|قطعتين)';
var ONER='(?:واحد|وحد[ةه]|صنف|نوع|منتج|حب[ةه]|منتج)(?:\\s+منهم|\\s+منها)?';
var EACH=[new RegExp('(?:^|\\s)(?:و?من\\s+)?كل\\s+'+ONER+'\\s+'+NUMR+'(?:\\s+(?:حب[ةه]|حبات|نسخ[ةه]?|قطع[ةه]?))?\\s*[:：]?'),
  new RegExp('(?:^|\\s)'+NUMR+'(?:\\s+(?:حبات|نسخ|قطع))?\\s+(?:من|لكل|ل)\\s*(?:كل\\s+)?'+ONER+'\\s*[:：]?'),
  new RegExp('(?:^|\\s)(?:الاثنين|الاثنتين|الثنتين|الكل|كلهم|كلها|الجميع)\\s+'+NUMR+'(?:\\s+'+NUMR+')?'),
  new RegExp('(?:^|\\s)'+NUMR+'\\s+\\1(?=\\s|$)')];
function eachOf(s0){var s1=dg(s0);for(var i=0;i<EACH.length;i++){var m=s1.match(EACH[i]);if(m){var n=numOf(m[1]);if(n&&n.q>0)return {q:n.q,rest:(s1.slice(0,m.index)+' '+s1.slice(m.index+m[0].length)).replace(/\s+/g,' ').trim()}}}return null}
var PHRX=/(?:\+|00)?(?:968[\s\-]*)?(?<!\d)([279](?:[\s\-]?\d){7})(?!\d)/;
function pre(raw){
  var lines=String(raw||'').split(/\r?\n/),out=[],extra=[],info={mentions:[],names:[]},L=loadL(),gEach=0;
  /* افصل السطر الطويل الذي يجمع عدة معلومات */
  var L2=[];lines.forEach(function(l){var t=dg(stripWA(l));var k=(t.match(new RegExp(SPLITK.source,'g'))||[]).length;
    if(k>=1&&t.length>20){t.split(SPLITK).forEach(function(x){L2.push(x.replace(/^و(?=(?:اسمي|رقمي|الرقم|التوصيل|العنوان|الدفع|المكان|الاسم))/,''))})}else L2.push(l)});
  function placeOut(pv,lab){
    var pay=pv.match(PAYRX);if(pay&&pay.index>0){out.push('طريقة الدفع: '+pay[0].replace(/^(?:و?الدفع|طريقه الدفع|طريقة الدفع)\s*[:：]?\s*/,'').trim());pv=pv.slice(0,pay.index).trim()}
    var W=pv.split(/\s+/),cut=-1;for(var x=1;x<W.length;x++){var wn=tokNorm(W[x]);if(LANDMARK.test(wn)||L.lm[wn]){cut=x;break}}
    if(cut>0){extra.push('📍 وصف الموقع: '+W.slice(cut).join(' '));info.lm=W.slice(cut).join(' ');pv=W.slice(0,cut).join(' ')}
    pv=pv.replace(/^(?:ولايه|ولاية|منطقه|منطقة)\s+/,'');
    var pk=N(pv);if(L.place[pk])pv=L.place[pk];
    out.push('المكان: '+pv);info.place=pv}
  function proc(l0,depth){
    var t=stripWA(l0).trim();if(!t){out.push(l0);return}
    var bare=t.replace(/^[^\p{L}\p{N}]+/u,'');
    if(GREET.test(N(bare)))return;
    var sm=bare.match(/^(?:و?(?:ب?نفس)\s+(?:الشي|الشيء|العدد|الكميه|الكمية)|و?مثله|و?مثلها|و?زيه|و?زيها)\s+(.+)$/),same=0;if(sm&&info.mentions.length){same=info.mentions[info.mentions.length-1].q;bare=sm[1]}
    var le=same,ec=eachOf(bare);if(ec){if(!ec.rest||!findMentions(ec.rest).M.length){gEach=ec.q;if(!ec.rest||!N(ec.rest).split(' ').some(function(w){return !STOP[w]}))return;bare=ec.rest}else{le=ec.q;bare=ec.rest}}
    var g2=bare.match(/^(?:السلام عليكم|سلام عليكم|مرحبا|مساء الخير|صباح الخير)(?:\s+(?:ورحمة الله|ورحمه الله|وبركاته|اخوي|اختي))*[\s،,.!]+(?=\S)/);if(g2&&depth<3){proc(bare.slice(g2[0].length),depth+1);return}
    var lab0=bare.match(/^(?:الجهه|الجهة|اسم|الاسم الكريم|اسم العميل|اسم الزبون)\s*[:：]\s*(.+)$/);if(lab0){out.push('الاسم: '+lab0[1].trim());info.names.push(lab0[1].trim());return}
    var lab1=bare.match(/^(?:رقم|موبايل|تلفون)\s*[:：]\s*(.+)$/);if(lab1){out.push('الرقم: '+lab1[1].trim());return}
    var lab2=bare.match(/^(?:مكان|عنوان|المحافظه|المحافظة)\s*[:：]\s*(.+)$/);if(lab2){placeOut(lab2[1].trim());return}
    var me2=bare.match(/^(?:معك|معاك|انا|أنا|هذا)\s+([^\d٠-٩:：]{2,30})$/);if(me2&&!/\s(?:من|في)\s+\S/.test(me2[1])&&me2[1].trim().split(/\s+/).length<=3&&!findMentions(me2[1]).M.length&&!isPlaceStart(me2[1])){out.push('الاسم: '+me2[1].trim());info.names.push(me2[1].trim());return}
    var da=bare.match(/^([^\d٠-٩:：\-–—]{2,30}?)\s+[\-–—]\s+([^\d٠-٩]{2,40})$/);if(da&&isPlaceStart(da[2])&&!isPlaceStart(da[1])&&da[1].split(/\s+/).length<=3&&!findMentions(bare).M.length){out.push('الاسم: '+da[1].trim());info.names.push(da[1].trim());placeOut(da[2].trim());return}
    var me=bare.match(/^(?:معك|معاك|انا|أنا)\s+([^\d\s]+(?:\s+[^\d\s]+)?)\s+(?:من|في)\s+(\S+)(?:\s+(.*))?$/);
    if(me&&isPlaceStart(me[2])&&depth<3){out.push('الاسم: '+me[1]);info.names.push(me[1]);placeOut(me[2]);if(me[3])proc(me[3],depth+1);return}
    /* الاسم وسط السطر: «رقمي 9xxx واسمي مريم» ، «بإسم سعاد 9xxx» */
    var nm=bare.match(NAMEK);
    if(nm&&depth<3){var after=bare.slice(nm.index+nm[0].length),before=bare.slice(0,nm.index);
      var mm=after.match(/^([^\d\n،,:]+?)(?=\s+(?:و?رقمي|و?رقم|و?الرقم|من|في|و?التوصيل|و?العنوان|و?الدفع|و?المكان)(?:\s|$)|\s*[\d،,]|$)/);
      if(mm){var nmv=mm[1].trim().split(/\s+/).slice(0,4).join(' ');var rest=(before+' '+after.slice(mm[0].length)).trim();
        if(nmv&&!findMentions(nmv).M.length&&!STOP[N(nmv)]){out.push('الاسم: '+nmv);info.names.push(nmv);if(rest)proc(rest,depth+1);return}}}
    /* «التوصيل للعامرات» ، «من صحار» */
    var to=bare.match(/^(?:و?التوصيل|توصيل|الشحن|ارسله|ارسلها)\s*(?:الى|إلى|على|لـ|ل\s*ـ)?\s*(.+)$/);
    if(to){var tw=to[1].replace(/^لل(?=\S{3})/,'ال').replace(/^ل(?=\S{3})/,'');if(isPlaceStart(tw)){placeOut(tw);return}}
    var fr=bare.match(/^(?:من|في)\s+(\S.*)$/);if(fr&&isPlaceStart(fr[1])&&fr[1].split(/\s+/).length<=4){placeOut(fr[1]);return}
    /* سطر المكان */
    var lab=bare.match(/^((?:العنوان|عنوان التوصيل|المكان|الموقع|مكان التوصيل|عنواني)\s*[:：\/\-]?\s*)(.+)$/),pv=lab?lab[2]:bare;
    if(lab||(isPlaceStart(pv)&&pv.split(/\s+/).length<=10&&!findMentions(pv).M.length&&!/\d{6,}/.test(pv))){
      var before2=out.length;placeOut(pv,lab);if(!lab&&out.length===before2+1&&out[out.length-1]==='المكان: '+bare){out.pop();info.place=null;out.push(l0)}return}
    /* «حليمة 91110000 سناو» */
    var ph=dg(bare).match(PHRX);
    if(ph&&!/(?:تحويل|حواله|حساب)/.test(bare)&&!findMentions(bare).M.length){var bf=dg(bare).slice(0,ph.index).replace(/(?:^|\s)(?:و?رقمي|و?الرقم|رقم)\s*[:：]?\s*$/,'').trim(),af=dg(bare).slice(ph.index+ph[0].length).trim();
      if(af&&isPlaceStart(af.replace(/^(?:من|في)\s+/,''))&&!/^(?:الاسم|اسمي)/.test(bf)){if(bf&&bf.split(/\s+/).length<=4&&!isPlaceStart(bf)){out.push('الاسم: '+bf);info.names.push(bf)}else if(bf)out.push(bf);out.push(ph[1].replace(/\D/g,''));placeOut(af.replace(/^(?:من|في)\s+/,''));return}}
    /* المنتجات */
    var fm=findMentions(bare);
    if(fm.M.length&&!/^(?:الاسم|اسمي|الرقم|رقمي|العنوان|المكان|اسم المستلم|رقم التواصل)(?:\s|[:：\/])/.test(bare)){
      if(le)fm.M.forEach(function(m){if(!m.qx&&!m.dq){m.q=le;m.qx=1;m.each=1}});
      var leftTok=fm.T.filter(function(x,ix){return !fm.used[ix]||fm.used[ix]===3});
      var nums=fm.T.filter(function(x,ix){return !fm.used[ix]&&(/^\d{1,3}$/.test(dg(x))||QW[tokNorm(x)]&&!/^(?:حبه|قطعه|نسخه|علبه)$/.test(tokNorm(x)))});
      if(fm.M.length===1&&!fm.M[0].qx&&nums.length===1){fm.M[0].q=numOf(nums[0]).q;fm.M[0].qx=1;leftTok.splice(leftTok.indexOf(nums[0]),1)}
      var mark=out.length;
      /* بقية السطر: «للعامرات»، «مقاس 56» */
      var rest2=leftTok.join(' ').replace(/(?:^|\s)[+\-–—؟?]+(?=\s|$)/g,' ').replace(/[؟?]/g,' ').replace(/\s+/g,' ').trim();
      var restN=N(rest2).split(' ').filter(function(w){return w&&!STOP[w]&&!STOP[w.replace(/^و/,'')]});
      if(restN.length){
        var SZ=/(?:^|\s)(?:مقاس|لون|حجم|size|color)\s*[:：]?\s*\S+/gi,sz=rest2.match(SZ);if(sz){extra.push('📝 تفاصيل: '+sz.map(function(x){return x.trim()}).join('، '));rest2=rest2.replace(SZ,' ').replace(/\s+/g,' ').trim()}
        var lb2=rest2.replace(/^(?:(?:ابي|ابغى|ابغي|ابا|اريد|ممكن|بغيت|حاب|اطلب|لو سمحت|عندكم|تطلبين|لي)\s+)+/,'').trim();
        /* (كل واحد …) عولجت في بداية السطر */
        if(lb2&&N(lb2).split(' ').some(function(w){return !STOP[w]&&!STOP[w.replace(/^و/,'')]})){
          var lbp=lb2.replace(/^(?:لل)(?=\S{3})/,'ال').replace(/^(?:ل|من\s+|في\s+|الى\s+|إلى\s+)(?=\S{3})/,'');
          if(PHRX.test(dg(lb2))||NAMEK.test(lb2)||/(?:^|\s)(?:و?رقمي|و?الرقم|العنوان|المكان|التوصيل)(?:\s|[:：]|$)/.test(lb2))proc(lb2,depth+1);
          else if(isPlaceStart(lbp))placeOut(lbp);
          else if((function(){var ws=lb2.split(/\s+/);for(var z=0;z<ws.length;z++){var w=ws[z],c2=null;if(/^لل\S{3}/.test(w))c2='ال'+w.slice(2);else if(/^ل\S{3}/.test(w))c2=w.slice(1);else if(/^(?:الى|إلى|في)$/.test(w)&&ws[z+1])c2=ws[z+1];
              if(c2&&isPlaceStart(c2)){var rest3=ws.slice(z+((/^(?:الى|إلى|في)$/.test(w))?2:1)).join(' ');placeOut(c2+(rest3&&isPlaceStart(c2+' '+rest3)?'':''));var pre3=ws.slice(0,z).join(' ');if(pre3&&N(pre3).split(' ').some(function(x){return !STOP[x]}))extra.push('📝 تفاصيل: '+pre3);return true}}return false})()){}
          else if(lb2.split(/\s+/).some(function(x){return numOf(x)}))out.push(lb2);
          else extra.push('📝 تفاصيل: '+lb2)}}
      fm.M.forEach(function(m){info.mentions.push(m)});out.splice.apply(out,[mark,0].concat(fm.M));
      return}
    var tq=dg(bare).match(/^(?:(?:i want|i need|ابي|ابغى|ابغي|ابا|اريد|ممكن)\s+)?(.*[a-z\u0621-\u064A].*?)\s+[×x\*]?(\d{1,3})$/i);
    if(tq&&/[a-z]/i.test(bare)&&!/[:：]/.test(bare)&&!PHRX.test(dg(bare))&&+tq[2]>0){var nm2=tq[1].replace(/^(?:hi|hello)\s*[,،]?\s*(?:i want|i need)?\s*/i,'').trim();out.push(nm2+' × '+tq[2]);info.mentions.push({p:null,raw:nm2,q:+tq[2],qx:1,eng:1});return}
    out.push(l0)}
  L2.forEach(function(l){proc(l,0)});
  /* «العود ٢ والمسك ٣» بعد ذكر المنتجات: كمية لمنتج ذُكر من قبل */
  info.mentions.forEach(function(m,k){if(m.p||m.eng)return;var rt=tokNorm(m.raw).split(' ').map(stripAl);
    var prev=info.mentions.filter(function(o,j){return j!==k&&o.p&&!o.drop&&rt.every(function(t){return N(o.p).split(' ').map(stripAl).indexOf(t)>=0})});
    var uniq=prev.filter(function(o,j){return prev.findIndex(function(x){return x.p===o.p})===j});
    if(uniq.length===1&&m.qx){uniq[0].q=m.q;uniq[0].qx=1;uniq[0].upd=1;m.drop=1}});
  /* نفس المنتج مكرر ← كمية واحدة مجمّعة */
  var seen={};info.mentions.forEach(function(m){if(!m.p||m.drop)return;var o=seen[m.p];if(!o){seen[m.p]=m;return}o.q=(o.q||1)+(m.q||1);o.qx=1;m.drop=1});
  /* لا يوجد اسم صريح: أقصر سطر يشبه الاسم (ليس منتجًا ولا مكانًا ولا تحية) */
  if(!info.names.length&&!out.some(function(l){return /^الاسم\s*[:：]/.test(l)})){
    var cand=out.filter(function(l){if(typeof l!=='string')return false;var t=dg(l).trim();if(!t||/[:：×\d]/.test(t)||t.split(/\s+/).length>4)return false;var n=N(t);if(GREET.test(n)||STOP[n]||isPlaceStart(t)||findMentions(t).M.length||/^(?:انا|أنا|معك|معاك|ابي|ابغى|اريد)\s/.test(n))return false;
      return n.split(' ').some(function(w){return !STOP[w]})});
    if(cand.length){var nmc=cand[0].trim();out=out.map(function(l){return l===cand[0]?'الاسم: '+nmc:l});info.names.push(nmc)}}
  if(gEach)info.mentions.forEach(function(m){if(!m.qx&&!m.dq&&!m.each){m.q=gEach;m.qx=1;m.each=1}});
  info.mentions=info.mentions.filter(function(m){return !m.drop});
  out=out.filter(function(l){return !(typeof l==='object'&&l.drop)}).map(function(l){if(typeof l!=='object')return l;return l.qx||l.dq||!l.p?(l.p||l.raw)+' × '+l.q:l.p});
  return {text:out.join('\n'),extra:extra,info:info}}
var GREETW={};'السلام عليكم ورحمه الله وبركاته مرحبا هلا اهلا صباح مساء الخير الله'.split(' ').forEach(function(w){GREETW[N(w)]=1});
function PLWORD(w){if(PLX.indexOf(w)>=0)return true;try{var V=PL;if(V){var f=V.find(w,false);return !!(f&&f.n===1)}}catch(e){}return false}
/* ---------- أسماء المنتجات التي فيها أحجام («عطر 100 مل») ---------- */
var SIZE=/\s*[\(\[]?\s*[\d٠-٩]+(?:[.,][\d٠-٩]+)?\s*(?:مل|ملي|ملل|ml|جرام|جم|غرام|غ|g|gm|كجم|كيلو|kg|لتر|ltr|l|سم|cm|متر|m|اونصه|اونصة|oz|حبه|حبة|حبات|قطعه|قطعة|قطع|pcs|pc)?\s*[\)\]]?\s*$/i;
var KM=null,KMsig='';
function keyOf(n){var k=String(n||'').trim(),g=0;while(g++<3){var k2=k.replace(SIZE,'').trim();if(k2===k||!k2)break;k=k2}return k}
function kmap(){var P=(CFG.prods()||[]).map(function(p){return String(p&&p.name||'').trim()}).filter(Boolean),sig=P.join('|');if(KM&&KMsig===sig)return KM;
  var cnt={};P.forEach(function(n){var k=N(keyOf(n));cnt[k]=(cnt[k]||0)+1});
  var m={toKey:{},toName:{},full:[]};P.forEach(function(n){var k=keyOf(n);if(k!==n&&cnt[N(k)]===1&&P.every(function(o){return o===n||N(o)!==N(k)})){m.toKey[n]=k;m.toName[k]=n;m.full.push({n:n,k:k,rx:loose(n)})}else{m.toName[n]=n}});
  m.full.sort(function(a,b){return b.n.length-a.n.length});KM=m;KMsig=sig;return m}
function loose(n){var CL={'ا':'[اأإآٱ]','أ':'[اأإآٱ]','إ':'[اأإآٱ]','آ':'[اأإآٱ]','ه':'[هة]','ة':'[هة]','ي':'[يىئ]','ى':'[يى]'};
  var src=String(n).split('').map(function(ch){if(/\s/.test(ch))return '\\s*';if(/[0-9٠-٩]/.test(ch)){var d=/[0-9]/.test(ch)?+ch:'٠١٢٣٤٥٦٧٨٩'.indexOf(ch);return '['+d+'٠١٢٣٤٥٦٧٨٩'.charAt(d)+']'}return CL[ch]||ch.replace(/[.*+?^${}()|[\]\\\/]/g,'\\$&')}).join('').replace(/(\\s\*)+/g,'\\s*');
  try{return new RegExp(src,'gi')}catch(e){return null}}
function prodKeys(){var m=kmap();return (CFG.prods()||[]).map(function(p){var n=String(p&&p.name||'').trim();return m.toKey[n]||n}).filter(Boolean)}
function unKey(raw){var m=kmap();m.full.forEach(function(f){if(f.rx)raw=raw.replace(f.rx,f.k)});return raw}
/* ---------- استخراج الحقول من النص المُعلَّم ---------- */
var PHONE_L=/^\s*(?:الرقم|رقم\s*(?:الهاتف|العميل|التواصل|الجوال)?|الهاتف|الجوال|الموبايل|موبايل|تلفون|واتساب|رقمي)\s*[:：\-]?\s*(.+)$/;
var NAME_L=/^\s*(?:الاسم|اسم\s*(?:العميل|الزبون|المستلم)|اسمي)\s*[:：\-]?\s*(.+)$/;
var PLACE_L=/^\s*(?:المكان|مكان التوصيل|الموقع|موقع التوصيل|العنوان|عنواني|عنوان التوصيل)\s*[:：\-]?\s*(.+)$/;
var COMP_L=/^\s*(?:شركة|شركه)\s*(?:التوصيل|الشحن)\s*[:：\-]?\s*(.+)$/;
var PAY_L=/^\s*(?:طريقة الدفع|طريقه الدفع|الدفع)\s*[:：\-]?\s*(.+)$/;
function payOf(s){s=N(s);if(/استلام|توصيل/.test(s))return 'عند الاستلام';if(/تحويل\s*بنكي|بنك/.test(s))return 'تحويل بنكي';if(/تحويل|حواله/.test(s))return 'تحويل';if(/كاش|نقد/.test(s))return 'نقدًا';return ''}
function optsFor(raw){var I=index(),ws=tokNorm(raw).split(' ').map(stripAl).filter(function(t){return t.length>=2&&!STOP[t]});
  var KMm=kmap();return I.items.filter(function(it){return ws.some(function(t){return it.w.indexOf(t)>=0})}).map(function(it){return KMm.toName[it.p]||it.p}).slice(0,6)}
function parseMsg(raw){
  raw=unKey(String(raw||''));var KMm=kmap();
  var c;try{c=pre(raw)}catch(e){c={text:raw,extra:[],info:{mentions:[],names:[]}}}
  var t=c.text;try{t=PL.pre(t).text}catch(e){}
  var r={name:'',phone:'',place:'',pay:'',company:'',method:'',note:'',items:[],left:[],placeRaw:c.info.place||''};
  t.split('\n').forEach(function(l){var m,d=dg(l);
    if(!r.name&&(m=l.match(NAME_L))&&!/\d{6,}/.test(dg(m[1])))r.name=m[1].trim();
    else if(!r.phone&&(m=d.match(PHONE_L))&&(m=dg(m[1]).match(PHRX)))r.phone=m[1].replace(/\D/g,'');
    else if(!r.place&&(m=l.match(PLACE_L)))r.place=m[1].trim();
    else if(!r.company&&(m=l.match(COMP_L)))r.company=m[1].trim();
    else if(!r.pay&&(m=l.match(PAY_L)))r.pay=payOf(m[1])||m[1].trim()});
  if(c.info.names.length)r.name=c.info.names[0].trim();
  scan(t,r,c);
  if(/^(?:ورحمه الله|ورحمة الله|وبركاته|والتوصيل|التوصيل)$/.test(r.name))r.name='';
  if(!r.phone){var lines=dg(t).split('\n');for(var i=0;i<lines.length&&!r.phone;i++){if(/(?:تحويل|حواله|حساب)/.test(lines[i]))continue;var m2=lines[i].match(PHRX);if(m2)r.phone=m2[1].replace(/\D/g,'')}}
  if(!r.phone){var m3=dg(raw).match(PHRX);if(m3)r.phone=m3[1].replace(/\D/g,'')}
  /* المكان */
  if(r.place){var pay=r.place.match(/\s*[–\-]?\s*(?:و?الدفع\s+)?(?:تحويل(?:\s+بنكي)?|الدفع\s+عند\s+الاستلام|عند\s+الاستلام|عند\s+التوصيل|كاش|نقدا|نقدًا)\s*$/);
    if(pay&&pay.index>0){if(!r.pay)r.pay=payOf(pay[0]);r.place=r.place.slice(0,pay.index).trim()}
    if(c.info.lm){var ix=N(r.place).indexOf(N(c.info.lm));if(ix>0)r.place=r.place.slice(0,r.place.length-c.info.lm.length).replace(/[\s–\-،,]+$/,'')}
    r.place=r.place.replace(/(?:^|\s)(?:و?التوصيل|توصيل)(?:\s+(?:الى|إلى|على|ل))?(?=\s|$)/g,' ').replace(/^(?:الى|إلى|في|من)\s+/,'').replace(/\s+/g,' ').trim();
    try{var cc=PL.canon(r.place,false);if(cc)r.place=cc.text}catch(e){}}
  else{var nm=PL.K(r.name);var L0=raw.split('\n');
    for(var j=0;j<L0.length;j++){var l=stripWA(L0[j]).replace(/^\s*(?:المكان|مكان التوصيل|الموقع|موقع التوصيل|العنوان|التوصيل)\s*[:：]?\s*/,'').trim();
      if(!l||/\d{4,}/.test(dg(l))||l.split(/\s+/).length>5||PL.K(l)===nm||/^(?:الاسم|اسم|اسمي)/.test(l))continue;
      var c2=PL.canon(l,true);if(c2){r.place=c2.text;break}}}
  if(!r.pay){var pm=raw.match(/(?:عند\s+الاستلام|عند\s+التوصيل|تحويل\s+بنكي|تحويل|كاش|نقدًا|نقدا|نقدي)/);if(pm&&!/(?:تحويل|حواله)\s*(?:رقم|الى|على)?\s*\d/.test(dg(raw)))r.pay=payOf(pm[0])}
  r.note=(c.extra||[]).join('\n');
  (c.info.mentions||[]).forEach(function(m){var q=+m.q||1;
    if(m.p)r.items.push({p:KMm.toName[m.p]||m.p,q:q});else r.items.push({p:'',raw:m.raw,q:q,opts:optsFor(m.raw)})});
  try{r.left=leftovers(raw,r)}catch(e){r.left=[]}
  r.mentions=c.info.mentions;r._t=t;
  return r}
var ENL=/^\s*(name|phone|mobile|tel|area|city|address|location|region)\s*[:：\-]\s*(.+)$/i;
var QTYL=/^[^\p{L}\p{N}]*(?:العدد|الكميه|الكمية|الكمّية|عدد)\s*[:：]?\s*(\d{1,4})\s*(?:حبات|حبه|حبة|نسخ|قطع)?\s*$/u;
function isPlaceLine(l){var t=l.replace(/^(?:ولايه|ولاية|منطقه|منطقة)\s+/,'').trim();if(!t||/\d{4,}/.test(dg(t))||t.split(/\s+/).length>6)return '';
  if(PLEN.test(t))return t;if(isPlaceStart(t))return t;try{var f=PL.canon(t,true);if(f)return t;if(/^(?:ولايه|ولاية)\s/.test(l)&&PL.canon(t,false))return t}catch(e){}return ''}
var NAMEOK={'علي':1};
function scan(t,r,c){
  var M=(c.info.mentions||[]),last=null,mi=0,newM=[];
  t.split('\n').forEach(function(l0){var l=stripWA(l0).trim(),m;if(!l)return;
    var bare=l.replace(/^[^\p{L}\p{N}+]+/u,'').trim();
    /* سطر منتج من التحليل */
    for(var k=mi;k<M.length;k++){var mk=M[k],o=mk.qx||mk.dq||!mk.p?(mk.p||mk.raw)+' × '+mk.q:mk.p;if(l===o||bare===o){last=mk;mi=k+1;return}}
    if((m=dg(bare).match(QTYL))){var q=+m[1];if(q>0){var tg=last||(M.length===1?M[0]:null);if(tg){tg.q=q;tg.qx=1}}return}
    if(NAME_L.test(bare)||PLACE_L.test(bare)||PAY_L.test(bare)||/^(?:شركة|شركه)\s*(?:التوصيل|الشحن)/.test(bare)||/×/.test(bare))return;
    if((m=bare.match(/^(?:(?:طريقة\s+)?التوصيل\s*[:：\-]?\s*)?(مكتب|مندوب|توصيل للبيت|للبيت)(?:\s+(.{2,30}))?$/))){r.method=/مكتب/.test(m[1])?'مكتب':'مندوب';if(m[2]&&!r.company)r.company=m[2].trim();return}
    if((m=bare.match(ENL))){var kk=m[1].toLowerCase(),v=m[2].trim();
      if(kk==='name'){if(!r.name)r.name=v}else if(/phone|mobile|tel/.test(kk)){var ph=dg(v).replace(/[\s\-]/g,'').replace(/^(?:\+|00)?968(?=\d{8}$)/,'').match(PHRX);if(ph&&!r.phone)r.phone=ph[1].replace(/\D/g,'')}else if(!r.place)r.place=v;return}
    var en=bare.match(/^(?:(?:hi|hello)[\s,،]*)?(?:i want|i need|want|need)?\s*(\d{1,3})\s+([a-z][a-z\s]{2,40})$/i);
    if(en&&!PHRX.test(dg(bare))){var it={p:null,raw:en[2].trim(),q:+en[1],qx:1,eng:1};M.push(it);newM.push(it);return}
    var d=dg(bare),ph2=d.match(PHRX);
    if(ph2&&!/(?:تحويل|حواله|حساب)\s*(?:رقم|الى|على)?\s*$/.test(d.slice(0,ph2.index))){
      if(!r.phone)r.phone=ph2[1].replace(/\D/g,'');
      var bf=d.slice(0,ph2.index).replace(/(?:^|\s)(?:و?رقمي|و?الرقم|رقم)\s*[:：]?\s*$/,'').trim(),af=d.slice(ph2.index+ph2[0].length).trim();
      if(PHONE_L.test(bf+' 0'))bf='';
      if(bf&&!r.name&&bf.split(/\s+/).length<=4&&!isPlaceLine(bf)&&!findMentions(bf).M.length)r.name=bf;
      if(af)rest(af);return}
    rest(bare);
    function rest(x){x=x.trim();if(!x||/[:：]$/.test(x))return;
      var pay=x.match(PAYRX);if(pay){if(!r.pay)r.pay=payOf(pay[0]);x=x.slice(0,pay.index).trim();if(!x)return}
      var fr=x.match(/^(?:من|في|الى|إلى)\s+(\S+(?:\s+\S+)?)(?:\s+(.*))?$/);
      if(fr&&fr[1].indexOf(' ')>0){var w2=fr[1].split(' ');if(STOP[tokNorm(w2[1])]||findMentions(w2[1]).M.length){fr[2]=w2[1]+(fr[2]?' '+fr[2]:'');fr[1]=w2[0]}}
      if(fr){var p1=isPlaceLine(fr[1])||isPlaceLine(fr[1].split(' ')[0]);if(p1){if(!r.place)r.place=fr[1].split(' ').length>1&&!isPlaceLine(fr[1])?fr[1].split(' ')[0]:fr[1];if(fr[2]||(fr[1].split(' ').length>1&&!isPlaceLine(fr[1])))rest((fr[1].split(' ').length>1&&!isPlaceLine(fr[1])?fr[1].split(' ').slice(1).join(' ')+' ':'')+(fr[2]||''));return}}
      var pl=isPlaceLine(x);if(pl){if(!r.place)r.place=pl;return}
      var fm=findMentions(x);if(fm.M.length){fm.M.forEach(function(mm){if(!M.some(function(o){return o.p&&o.p===mm.p})){M.push(mm);newM.push(mm)}});return}
      var w=x.split(/\s+/);
      if(!r.name&&w.length<=4&&!/\d/.test(x)&&!GREET.test(N(x))&&N(x).split(' ').some(function(z){return (!STOP[z]||NAMEOK[z])&&!GREETW[z]}))r.name=x}
  });
  return newM}
/* الكلمات التي لم يُستخدم منها شيء */
function leftovers(orig,r){
  var have=[r.name,r.phone,r.place,r.pay,r.company,r.method,r.note];r.items.forEach(function(it){have.push(it.p||'');have.push(String(it.q));if(it.raw)have.push(it.raw)});
  var H={};N(dg(have.join(' '))).split(/[\s–\-،,:：\/()]+/).forEach(function(w){if(w){H[w]=1;H[stripAl(w)]=1}});
  var phrases=[],curP=[];
  String(orig).split(/\r?\n/).forEach(function(line){
    line=stripWA(line);var fm=findMentions(line),T=fm.T;
    T.forEach(function(t,ix){var n=tokNorm(t),n2=n.replace(/^و(?=\S{2})/,''),d=dg(t).replace(/\D/g,'');
      var n3=n2.replace(/^لل(?=\S{3})/,'ال').replace(/^ل(?=\S{3})/,'');var ok=!n||fm.used[ix]||H[n3]||H[stripAl(n3)]||STOP[n]||STOP[n2]||H[n]||H[n2]||H[stripAl(n2)]||QW[n]||QW[n2]||UNIT1.test(n2)||UNITX.test(n2)||/^[^ء-يa-z0-9]+$/i.test(n)||(d.length>=7)||GREETW[n]||PLWORD(n2)||(/^\d{1,4}$/.test(n)&&H[n]);
      if(ok){if(curP.length){phrases.push(curP.join(' '));curP=[]}}else curP.push(t)});
    if(curP.length){phrases.push(curP.join(' '));curP=[]}});
  return phrases.filter(function(p){return N(p).replace(/[^ء-يa-z]/g,'').length>=2})}
/* ---------- التعلّم عند الحفظ ----------
   st = نتيجة parseMsg، fin = {place, items:[{p,q,added}]} كما حفظها التاجر */
function learnFrom(st,fin){
  var out=[],A=loadA(),L=loadL(),P=prods(),KMm=kmap();
  fin={place:fin.place,items:(fin.items||[]).map(function(x){return {p:KMm.toKey[x.p]||x.p,q:x.q,raw:x.raw,added:x.added}})};
  var added=(fin.items||[]).filter(function(x){return x.added&&P.indexOf(x.p)>=0});
  /* منتج غير محدد اختاره التاجر ← اسمه في الرسالة */
  (fin.items||[]).forEach(function(x){if(x.raw&&x.p&&P.indexOf(x.p)>=0){var key=N(x.raw);if(key&&key.split(' ').length<=4&&!(A.alias[key]&&A.alias[key].p===x.p)){A.alias[key]={p:x.p,src:x.raw,n:1,t:Date.now()};out.push('«'+x.raw+'» = '+(KMm.toName[x.p]||x.p))}}});
  var cands=(st.left||[]).map(function(ph){var w=ph.split(/\s+/).filter(function(t){var n=tokNorm(t).replace(/^و(?=\S{2})/,'');return n&&!numOf(t)&&!UNIT1.test(n)&&!UNITX.test(n)&&!STOP[n]});return w.join(' ').replace(/^و(?=\S{2})/,'')}).filter(function(x){var n=N(x);return n.length>=2&&n.split(' ').length<=4&&!/\d/.test(n)});
  if(added.length&&cands.length&&(added.length===cands.length||cands.length===1&&added.length===1)){
    added.forEach(function(x,k){var src=cands[k],key=N(src);if(!key||A.alias[key]&&A.alias[key].p===x.p)return;A.alias[key]={p:x.p,src:src,n:1,t:Date.now()};out.push('«'+src+'» = '+(KMm.toName[x.p]||x.p))})}
  (st.mentions||[]).forEach(function(m){if(!m.unit||!m.p||!m.base)return;var x=(fin.items||[]).filter(function(y){return y.p===m.p})[0];if(!x||x.q===m.q)return;var mult=x.q/m.base;
    if(mult>=2&&mult===Math.round(mult)&&L.units[m.unit]!==mult){L.units[m.unit]=mult;out.push('«'+m.unit+'» = '+mult+' حبة')}});
  var fp=String(fin.place||'').trim(),p0=st.place||'';
  if(fp&&p0&&N(fp)!==N(p0)){var a=N(p0),b=N(fp);
    if(a.indexOf(b)===0&&a.length>b.length){var tl=a.slice(b.length).replace(/^[\s–\-،,]+/,'').split(' ')[0];
      if(tl&&tl.length>=2&&!/\d/.test(tl)&&!LANDMARK.test(tl)&&!PLWORD(tl)&&!L.lm[tl]){L.lm[tl]=1;out.push('كلمة «'+tl+'» وصفٌ للموقع وليست جزءًا من المكان')}}
    else if(st.placeRaw&&N(st.placeRaw).split(' ').length<=6){L.place[N(st.placeRaw)]=fp;out.push('«'+st.placeRaw+'» = '+fp)}}
  if(out.length){saveA(A);saveL(L)}
  return out}
window.EMDParse={setup:function(o){if(o.prods)CFG.prods=o.prods;if(o.lk)CFG.lk=o.lk;if(o.ak)CFG.ak=o.ak;LK=CFG.lk;AK=CFG.ak;IDX=null},
  parse:parseMsg,learn:learnFrom,places:PL,payOf:payOf};
LK=CFG.lk;AK=CFG.ak;

})();
