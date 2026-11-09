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
