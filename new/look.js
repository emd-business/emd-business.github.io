/* مُولَّد بـ tools/port-look.py من V89 وV409 — لا تعدّل هنا */
(function(){var s=document.createElement("style");s.id="EMD-V89-look-css";s.textContent="\n.emd89-ov{position:fixed;inset:0;z-index:11800;background:rgba(15,23,42,.55);display:flex;align-items:flex-end;justify-content:center;direction:rtl}\n.emd89-box{background:#fff;color:#111827;width:min(520px,100%);border-radius:22px 22px 0 0;padding:16px 16px 22px;max-height:94vh;overflow:auto;box-shadow:0 -10px 40px rgba(0,0,0,.25)}\n@media(min-width:620px){.emd89-ov{align-items:center}.emd89-box{border-radius:22px}}\n.emd89-head{display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:6px}\n.emd89-head h3{margin:0;font-size:19px}\n.emd89-head small{display:block;color:#64748b;font-size:12px;margin-top:3px;font-weight:500}\n.emd89-x{border:0;background:#fee2e2;color:#991b1b;border-radius:10px;padding:8px 12px;font-weight:800;cursor:pointer;flex:none}\n.emd89-sec{margin-top:16px}\n.emd89-sec>b{display:block;font-size:14px;margin-bottom:8px}\n.emd89-id{display:grid;grid-template-columns:84px 1fr;gap:10px;align-items:start}\n.emd89-logo{width:84px;height:84px;border-radius:18px;border:1.5px dashed #cbd5e1;background:#f8fafc;display:flex;align-items:center;justify-content:center;flex-direction:column;cursor:pointer;overflow:hidden;font-size:26px;color:#94a3b8;padding:0}\n.emd89-logo span{font-size:11px;font-weight:700;margin-top:2px}\n.emd89-logo img{width:100%;height:100%;object-fit:cover}\n.emd89-in label{display:block;font-size:12px;font-weight:700;color:#475569;margin-bottom:6px}\n.emd89-in input{width:100%;box-sizing:border-box;border:1px solid #dfe3e8;border-radius:11px;padding:10px;font-size:15px;margin-top:3px;background:#fff;color:#111827}\n.emd89-lock{margin-top:8px;font-size:11.5px;color:#64748b;background:#f8fafc;border:1px solid #eef1f5;border-radius:10px;padding:7px 10px}\n.emd89-sw{display:flex;flex-wrap:wrap;gap:9px}\n.emd89-sw button{width:38px;height:38px;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 1.5px #d7dce3;cursor:pointer;padding:0}\n.emd89-sw button.on{box-shadow:0 0 0 2.5px #111827}\n.emd89-sw label{width:38px;height:38px;border-radius:50%;position:relative;cursor:pointer;background:conic-gradient(#ef4444,#f59e0b,#22c55e,#06b6d4,#6366f1,#d946ef,#ef4444);box-shadow:0 0 0 1.5px #d7dce3;border:3px solid #fff;box-sizing:border-box}\n.emd89-sw label.on{box-shadow:0 0 0 2.5px #111827}\n.emd89-sw label input{position:absolute;inset:0;opacity:0;width:100%;height:100%;cursor:pointer}\n.emd89-seg{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:4px;background:#f1f5f9;border-radius:12px;padding:4px}\n.emd89-seg button{border:0;background:transparent;border-radius:9px;padding:9px 4px;font-weight:700;font-size:13px;cursor:pointer;color:#334155;line-height:1.3}\n.emd89-seg button.on{background:#fff;color:#111827;box-shadow:0 1px 4px rgba(0,0,0,.12)}\n.emd89-tg{display:flex;align-items:center;justify-content:space-between;padding:10px 2px;border-bottom:1px solid #f1f5f9;font-size:14px;font-weight:600}\n.emd89-tg:last-child{border-bottom:0}\n.emd89-tg input{width:44px;height:24px;appearance:none;-webkit-appearance:none;background:#cbd5e1;border-radius:99px;position:relative;cursor:pointer;transition:.2s;flex:none;margin:0}\n.emd89-tg input:after{content:'';position:absolute;top:3px;right:3px;width:18px;height:18px;border-radius:50%;background:#fff;transition:.2s}\n.emd89-tg input:checked{background:#16a34a}\n.emd89-tg input:checked:after{right:23px}\n.emd89-foot{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:18px}\n.emd89-foot button{border:0;border-radius:12px;padding:12px;font-weight:800;font-size:14px;cursor:pointer}\n.emd89-ok{background:#111827;color:#fff}.emd89-rst{background:#f1f5f9;color:#111827}\n.emd89-saved{font-size:12px;color:#16a34a;font-weight:700;text-align:center;margin-top:8px;min-height:16px}\n/* شعار واسم المتجر في الأعلى — لا يغيّر اسم التطبيق EMD Business */\nheader .brand{visibility:visible!important}\n.emd89-store{display:flex;align-items:center;gap:8px;direction:rtl;margin:2px 0 4px;font-weight:800;font-size:15px;color:#111827;width:100%}\n.emd89-store img{width:34px;height:34px;border-radius:10px;object-fit:cover;border:1px solid #e5e7eb;background:#fff}\n.emd89-store i{font-style:normal;width:34px;height:34px;border-radius:10px;background:#f1f5f9;display:inline-flex;align-items:center;justify-content:center;font-size:18px}\nbody.emd89-noclock #home .emd88-clock{display:none!important}\nbody.emd89-nohijri #home .emd88-date .h{display:none!important}\n/* V90: صورة بجانب التحية في الرئيسية */\n#home .emd90-hero{display:flex;align-items:center;gap:12px;margin-bottom:12px}\n#home .emd90-txt{flex:1;min-width:0}\n#home .emd90-txt .emd88-clock{margin-bottom:0!important}\n#home .emd90-img{flex:none;width:112px;height:112px;border-radius:22px;overflow:hidden;padding:0;border:0;background:transparent;cursor:pointer;box-shadow:0 6px 18px rgba(15,23,42,.14)}\n#home .emd90-img img{width:100%;height:100%;object-fit:cover;display:block}\n#home .emd90-img.empty{border:1.5px dashed #cbd5e1;background:#f8fafc;box-shadow:none;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#94a3b8;font-size:28px}\n#home .emd90-img.empty small{font-size:11px;font-weight:700;margin-top:4px}\n#home .emd90-img[hidden]{display:none!important}\n/* V91: إطارات الصورة */\n#home .emd90-img.f-circle{border-radius:50%;padding:4px;background:var(--emd89-acc,#18202a);box-shadow:0 6px 18px rgba(15,23,42,.18)}\n#home .emd90-img.f-circle img{border-radius:50%;border:3px solid #fff;box-sizing:border-box}\n#home .emd90-img.f-white{padding:6px;background:#fff;border-radius:26px;box-shadow:0 10px 26px rgba(15,23,42,.18);transform:rotate(-3deg)}\n#home .emd90-img.f-white img{border-radius:20px}\n#home .emd90-img.f-grad{padding:4px;border-radius:28px;background:linear-gradient(135deg,var(--emd89-acc,#18202a),#f59e0b 55%,#ec4899);box-shadow:0 6px 18px rgba(15,23,42,.16)}\n#home .emd90-img.f-grad img{border-radius:24px;border:3px solid #fff;box-sizing:border-box}\n@media(max-width:360px){#home .emd90-img{width:88px;height:88px;border-radius:18px}}\n.emd90-row{display:flex;align-items:center;gap:10px;margin-top:8px}\n.emd90-row img{width:54px;height:54px;border-radius:12px;object-fit:cover;border:1px solid #e5e7eb}\n.emd90-row button{border:0;border-radius:10px;padding:9px 12px;font-weight:700;font-size:13px;cursor:pointer;background:#f1f5f9;color:#111827}\n.emd90-row button.red{background:#fee2e2;color:#991b1b}\n";document.head.appendChild(s);var t=document.createElement("style");t.id="EMD-V89-dark-themes-v409";t.textContent="\n/* بطاقات اختيار الثيم داخل نافذة المظهر */\n.emd409-themes{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:8px}\n@media(min-width:460px){.emd409-themes{grid-template-columns:repeat(3,1fr)}}\n.emd409-th{border:2px solid #e5e7eb;border-radius:16px;background:#fff;padding:8px;cursor:pointer;text-align:right;font:inherit;color:#111827}\n.emd409-th.on{border-color:#1e3a8a;box-shadow:0 0 0 3px rgba(30,58,138,.15)}\n.emd409-th .pv{height:58px;border-radius:11px;position:relative;overflow:hidden;margin-bottom:7px}\n.emd409-th .pv i{position:absolute;right:7px;left:7px;height:14px;border-radius:6px;top:7px}\n.emd409-th .pv u{position:absolute;bottom:7px;width:30%;height:18px;border-radius:6px;text-decoration:none}\n.emd409-th .pv u.a{right:7px}.emd409-th .pv u.b{right:40%}\n.emd409-th b{display:block;font-size:13px}.emd409-th small{display:block;font-size:11px;color:#64748b;margin-top:2px;line-height:1.4}\n.emd409-th .ck{float:left;font-size:12px;color:#1e3a8a;font-weight:900}\n\n/* ترتيب النوافذ عند الفتح */\nbody.emd409-setup #emdV66Banner,body.emd409-setup .emd108-banner,body.emd409-setup #emdQuickToggleFinal,body.emd409-setup #emdQuickMenuFinal,\nbody.emd409-setup #emdQuickPanelFinal,body.emd409-setup #emdV92AiFab,body.emd409-setup #emdStandaloneV2Badge,body.emd409-setup #emdNotifyBadgeV317{display:none!important}\nbody.emd409-busy #emdQuickMenuFinal,body.emd409-busy #emdNotifyBadgeV317,body.emd409-busy #emdV92AiFab,body.emd409-busy #emdStandaloneV2Badge{display:none!important}\nbody.emd409-busy .emd108-banner,body.emd409-quiet-day .emd108-banner{display:none!important}\n@media(max-width:1240px){#emdV66Banner.inline{padding-right:64px}}\n\n/* ---- 1) كحلي وذهبي ---- */\nbody.emdth-navygold{--bg:#f3f5fa;--card:#fff;--text:#0f172a;--muted:#5b6478;--line:#dfe5f0;--accent:#1e3a8a;--soft:#e8eefb;background:#f3f5fa!important;--ink:#0f172a;--mute:#5b6478;--navy:#1e3a8a}\nbody.emdth-navygold .btn.dark{background:linear-gradient(135deg,#1e3a8a,#0f172a)!important;color:#fff!important;border-color:transparent!important}\nbody.emdth-navygold .hbtns button{background:#e8eefb!important;color:#1e3a8a!important}\nbody.emdth-navygold #view>.hero{background:linear-gradient(135deg,#1e3a8a,#0f172a)!important;border-radius:22px!important;padding:16px!important}\nbody.emdth-navygold #view>.hero *{color:#fff!important}\nbody.emdth-navygold #view>.hero .date{color:#cbd5f5!important}\nbody.emdth-navygold #view>.hero .himg{background:rgba(255,255,255,.1)!important;border-color:rgba(255,255,255,.35)!important}\nbody.emdth-navygold .money{background:#fff!important;border:1px solid #dfe5f0!important;box-shadow:0 6px 18px rgba(30,58,138,.08)!important}\nbody.emdth-navygold .money small,body.emdth-navygold .money .cap{color:#5b6478!important}\nbody.emdth-navygold .money b{color:#1e3a8a!important}body.emdth-navygold .money b.gold{color:#d97706!important}\nbody.emdth-navygold .stat{border:1px solid #dfe5f0!important;border-top:4px solid #1e3a8a!important;box-shadow:0 6px 16px rgba(15,23,42,.06)!important}\nbody.emdth-navygold .stat[data-filter=new]{border-top-color:#f59e0b!important}\nbody.emdth-navygold .stat b,body.emdth-navygold .emd-v90-stat .n,body.emdth-navygold .emd-v90-title{color:#1e3a8a!important}\nbody.emdth-navygold .emd-v90-btn{background:#f59e0b!important;color:#0f172a!important}\n\n/* ---- 2) أبيض أنيق ---- */\nbody.emdth-clean{--bg:#fff;--card:#fff;--text:#0f172a;--muted:#64748b;--line:#e8ecf3;--accent:#1e3a8a;--soft:#f4f6fb;background:#fff!important;--ink:#0f172a;--mute:#64748b;--navy:#1e3a8a}\nbody.emdth-clean .btn.dark,body.emdth-clean .emd-v90-btn{background:#1e3a8a!important;color:#fff!important}\nbody.emdth-clean .hbtns button{background:#fff!important;color:#1e3a8a!important;border:1px solid #c7d2ec!important}\nbody.emdth-clean .money{background:#f8fafd!important;border:1px solid #e8ecf3!important;box-shadow:none!important}\nbody.emdth-clean .money small,body.emdth-clean .money .cap{color:#64748b!important}\nbody.emdth-clean .money b{color:#0f172a!important}body.emdth-clean .money b.gold{color:#d97706!important}\nbody.emdth-clean .stat,body.emdth-clean .emd-v90-panel,body.emdth-clean .emd-v90-stat{box-shadow:none!important;border:1px solid #e8ecf3!important}\nbody.emdth-clean .stat b,body.emdth-clean .emd-v90-stat .n,body.emdth-clean #view>.hero h2{color:#1e3a8a!important}\nbody.emdth-clean .stat[data-filter=new] b{color:#d97706!important}\n\n/* ---- 3) ليلي كحلي (يعتمد على الوضع الداكن الموجود) ---- */\nbody.emdth-night{--bg:#0b1224;--card:#131d36;--line:#22304f;--soft:#1a2645;background:#0b1224!important}\nbody.emdth-night .btn.dark,body.emdth-night .emd-v90-btn{background:#f59e0b!important;color:#0b1224!important;border:0!important}\nbody.emdth-night .money{background:linear-gradient(135deg,#1e3a8a,#0f172a)!important;border:1px solid #2a3f78!important}\nbody.emdth-night .money b.gold,body.emdth-night .stat b,body.emdth-night .emd-v90-stat .n{color:#fbbf24!important}\n\n/* ---- 4) زجاجي عصري ---- */\nbody.emdth-glass{--bg:#eef1ff;--card:rgba(255,255,255,.72);--text:#1e1b4b;--muted:#5b5f86;--line:rgba(99,102,241,.16);--accent:#4338ca;--soft:rgba(255,255,255,.6);\n  background:radial-gradient(circle at 90% 0%,#c7d2fe 0,transparent 45%),radial-gradient(circle at 0% 30%,#fbcfe8 0,transparent 40%),radial-gradient(circle at 80% 80%,#fde68a 0,transparent 40%),#eef1ff!important;background-attachment:fixed!important;--ink:#1e1b4b;--mute:#5b5f86;--navy:#4338ca}\nbody.emdth-glass .card,body.emdth-glass .emd-v90-panel,body.emdth-glass .money{background:rgba(255,255,255,.62)!important;border:1px solid rgba(255,255,255,.8)!important;\n  -webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:0 8px 30px rgba(67,56,202,.10)!important;border-radius:22px!important}\nbody.emdth-glass .btn.dark,body.emdth-glass .emd-v90-btn{background:linear-gradient(135deg,#4338ca,#7c3aed)!important;color:#fff!important;border:0!important;box-shadow:0 8px 20px rgba(79,70,229,.3)!important}\nbody.emdth-glass .hbtns button{background:rgba(255,255,255,.7)!important;color:#4338ca!important;border:1px solid rgba(99,102,241,.25)!important}\nbody.emdth-glass .money,body.emdth-glass .money *{color:#1e1b4b!important}body.emdth-glass .money b.gold{color:#c2410c!important}\nbody.emdth-glass .stat b,body.emdth-glass .emd-v90-stat .n{background:linear-gradient(135deg,#4338ca,#db2777);-webkit-background-clip:text;background-clip:text;color:transparent!important}\n\n/* ---- 5) شروق دافئ ---- */\nbody.emdth-sunrise{--bg:#fbf7f1;--card:#fff;--text:#1c1917;--muted:#78716c;--line:#efe6da;--accent:#c2410c;--soft:#fdf0e3;background:#fbf7f1!important;--ink:#1c1917;--mute:#78716c;--navy:#c2410c}\nbody.emdth-sunrise .btn.dark,body.emdth-sunrise .emd-v90-btn{background:linear-gradient(135deg,#f59e0b,#ea580c)!important;color:#fff!important;border:0!important;box-shadow:0 6px 16px rgba(234,88,12,.25)!important}\nbody.emdth-sunrise .hbtns button{background:#fdf0e3!important;color:#9a3412!important}\nbody.emdth-sunrise .money{background:linear-gradient(135deg,#1e3a8a,#0f172a)!important}\nbody.emdth-sunrise .money b.gold{color:#fbbf24!important}\nbody.emdth-sunrise .stat,body.emdth-sunrise .emd-v90-panel{border:1px solid #efe6da!important;border-radius:20px!important;box-shadow:0 4px 14px rgba(120,53,15,.06)!important}\nbody.emdth-sunrise .stat b,body.emdth-sunrise .emd-v90-stat .n{color:#c2410c!important}\nbody.emdth-sunrise #view>.hero h2{color:#9a3412!important}\n\n/* ---- 6) ميدنايت نيون (يعتمد على الوضع الداكن الموجود) ---- */\nbody.emdth-neon{--bg:#070b16;--card:#0f1629;--line:#1e2a48;--soft:#141d36;background:radial-gradient(circle at 100% 0%,rgba(99,102,241,.25) 0,transparent 40%),radial-gradient(circle at 0% 100%,rgba(6,182,212,.18) 0,transparent 40%),#070b16!important;background-attachment:fixed!important}\nbody.emdth-neon .card,body.emdth-neon .emd-v90-panel,body.emdth-neon .money{border:1px solid rgba(129,140,248,.25)!important;border-radius:20px!important;box-shadow:0 0 0 1px rgba(34,211,238,.05),0 10px 30px rgba(0,0,0,.4)!important}\nbody.emdth-neon .btn.dark,body.emdth-neon .emd-v90-btn{background:linear-gradient(135deg,#6366f1,#06b6d4)!important;color:#fff!important;border:0!important;box-shadow:0 0 18px rgba(99,102,241,.45)!important}\nbody.emdth-neon .stat b,body.emdth-neon .emd-v90-stat .n{color:#67e8f9!important;text-shadow:0 0 14px rgba(103,232,249,.45)}\nbody.emdth-neon .money{background:linear-gradient(135deg,#312e81,#0e7490)!important}\nbody.emdth-neon .money b.gold{color:#f0abfc!important}\n\nbody[class*=emdth-] #view>.hero{padding:16px;border-radius:22px}\n";document.head.appendChild(t)})();
(function(RW){var PH=RW.EMDPosH,PLS=PH.ls;
var window=new Proxy(RW,{get:function(t,k){if(k==='db')return PH.db();if(k==='localStorage')return PLS;if(PH.alias[k]&&!(k in t))return PH.alias[k];var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t||!!PH.alias[k]}});
/* ---- V89 ---- */

(function(){
'use strict';
if(window.__EMD_V89__)return;window.__EMD_V89__=true;
/* V89: مظهر التطبيق — لون يشمل التطبيق كله، الوضع الليلي، شعار واسم المتجر، تحية باسمك، حجم الخط
   اسم التطبيق «EMD Business» ثابت ولا يتغير من هنا. */
var KEY='emd_v89_look',LOGO='emd_v89_logo',PROF='emd_business_profile_v333',HOMEIMG='emd_v90_homeimg';
var DEF={accent:'#18202a',mode:'light',density:'comfortable',size:'m',owner:'',clock:true,hijri:true,homeImg:'custom',frame:'none'};
var COLORS=[['#18202a','فحمي'],['#1e3a8a','كحلي'],['#2563eb','أزرق'],['#0f766e','أخضر'],['#059669','زمردي'],['#7c3aed','بنفسجي'],['#9f1239','عنابي'],['#c2410c','برتقالي'],['#a16207','ذهبي']];
var ZOOM={s:.92,m:1,l:1.1,xl:1.2};
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function lsGet(k){try{return PLS.getItem(k)}catch(e){return null}}
function lsSet(k,v){try{if(v==null)PLS.removeItem(k);else PLS.setItem(k,v);return true}catch(e){return false}}
function load(){
  var x=null;try{x=JSON.parse(lsGet(KEY)||'null')}catch(e){}
  var v=JSON.parse(JSON.stringify(DEF));
  if(!x){try{var o=JSON.parse(lsGet('emd_appearance_v335')||'null');if(o){if(o.accent)v.accent=o.accent;if(o.density)v.density=o.density;if(o.text==='large')v.size='l'}}catch(e){}return v}
  Object.keys(v).forEach(function(k){if(x[k]!==undefined&&x[k]!==null)v[k]=x[k]});return v;
}
function store(v){return lsSet(KEY,JSON.stringify(v))}
function prof(){try{return JSON.parse(lsGet(PROF)||'{}')||{}}catch(e){return {}}}
function setStoreName(n){var p=prof();p.name=n;lsSet(PROF,JSON.stringify(p))}
function storeName(){return String(prof().name||'').trim()}
function logo(){return lsGet(LOGO)||''}

/* ===== ألوان ===== */
function parse(c){
  c=String(c).trim().toLowerCase();var m;
  if(c==='white')return {r:255,g:255,b:255,a:1};if(c==='black')return {r:0,g:0,b:0,a:1};
  if(c[0]==='#'){var h=c.slice(1);if(h.length===3||h.length===4)h=h.split('').map(function(x){return x+x}).join('');if(!/^[0-9a-f]{6}([0-9a-f]{2})?$/.test(h))return null;return {r:parseInt(h.slice(0,2),16),g:parseInt(h.slice(2,4),16),b:parseInt(h.slice(4,6),16),a:h.length===8?parseInt(h.slice(6,8),16)/255:1}}
  if((m=c.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,\/]\s*([\d.]+)(%?))?\s*\)$/))){var a=m[4]==null?1:(+m[4])/(m[5]?100:1);return {r:+m[1],g:+m[2],b:+m[3],a:a}}
  return null;
}
function hsl(c){var r=c.r/255,g=c.g/255,b=c.b/255,mx=Math.max(r,g,b),mn=Math.min(r,g,b),l=(mx+mn)/2,h=0,s=0,d=mx-mn;
  if(d){s=l>.5?d/(2-mx-mn):d/(mx+mn);h=mx===r?(g-b)/d+(g<b?6:0):mx===g?(b-r)/d+2:(r-g)/d+4;h/=6}return {h:h,s:s,l:l,ch:d}}
function rgb(h,s,l){function f(p,q,t){if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p}
  if(!s){var v=Math.round(l*255);return {r:v,g:v,b:v}}var q=l<.5?l*(1+s):l+s-l*s,p=2*l-q;return {r:Math.round(f(p,q,h+1/3)*255),g:Math.round(f(p,q,h)*255),b:Math.round(f(p,q,h-1/3)*255)}}
function out(c,a){return a<1?'rgba('+c.r+', '+c.g+', '+c.b+', '+(Math.round(a*1000)/1000)+')':'rgb('+c.r+', '+c.g+', '+c.b+')'}
function isBrand(c){return c.a>.95&&((c.r===24&&c.g===32&&c.b===42)||(c.r===17&&c.g===24&&c.b===39)||(c.r===15&&c.g===23&&c.b===42))}
function lum(hex){var c=parse(hex);if(!c)return 0;function t(v){v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)}return .2126*t(c.r)+.7152*t(c.g)+.0722*t(c.b)}
/* لون مخصص فاتح جدًا → نغمقه حتى يبقى النص الأبيض واضح */
function hex(c){return '#'+[c.r,c.g,c.b].map(function(x){return x.toString(16).padStart(2,'0')}).join('')}
function safeAccent(h){var c=parse(h);if(!c)return DEF.accent;c.a=1;var k=0;while(lum(hex(c))>.2&&k<25){var H=hsl(c),n=rgb(H.h,H.s,Math.max(0,H.l-.04));c={r:n.r,g:n.g,b:n.b,a:1};k++}return hex(c)}
function mapColor(str,role,st,noAcc){
  var c=parse(str);if(!c||c.a===0)return null;
  if(st.acc&&!noAcc&&role!=='text'&&isBrand(c))return 'var(--emd89-acc)';
  if(!st.dark)return null;
  var H=hsl(c),ch=H.ch,n;
  if(role==='bg'){
    if(H.l>.8){n=ch>.06?rgb(H.h,Math.min(1,H.s)*.45,.2):rgb(ch>.01?H.h:.6,ch>.01?Math.min(.3,H.s):.18,Math.max(.07,.135-(1-H.l)*.6))}
    else if(H.l<.3&&c.a>.9){if(isBrand(c))return noAcc?'rgb(51, 65, 85)':'var(--emd89-acc)';n=rgb(H.h,H.s,.17+H.l*.4)}
    else return null;
  }else if(role==='text'){
    if(H.l>=.55)return null;
    n=ch>.25?rgb(H.h,H.s,Math.max(.68,1-H.l)):rgb(H.h,Math.min(H.s,.2),.93-H.l*.5);
  }else{
    if(H.l<=.7)return null;n=rgb(H.h,Math.min(H.s,.3)*.6,.2+(1-H.l)*.5);
  }
  return out(n,c.a);
}
var TOK=/rgba?\([^)]*\)|#[0-9a-fA-F]{3,8}\b|\b(?:white|black)\b/g;
function roleOf(p){if(p==='color'||p==='-webkit-text-fill-color'||p==='caret-color')return 'text';if(p==='background-color'||p==='background-image')return 'bg';if(/^border-.*color$|^outline-color$/.test(p))return 'bd';return ''}
function xform(val,role,st,noAcc){var ch=false;var r=val.replace(TOK,function(t){var m=mapColor(t,role,st,noAcc);if(m!=null){ch=true;return m}return t});return ch?r:null}

/* ===== محرك تطبيق الألوان على كل التطبيق ===== */
var changes=[],doneSheets=new WeakSet(),inl=new Set(),ST={dark:false,acc:false};
function doDecl(decl,st,noAcc,log){
  for(var i=0;i<decl.length;i++){var p=decl[i],role=roleOf(p);if(!role)continue;
    var v=decl.getPropertyValue(p);if(!v||v.indexOf('var(')>=0)continue;
    var nv=xform(v,role,st,noAcc);if(nv==null)continue;
    var pr=decl.getPropertyPriority(p);if(log)changes.push([decl,p,v,pr]);decl.setProperty(p,nv,pr)}
}
function walk(rules,st){for(var i=0;i<rules.length;i++){var r=rules[i];
  if(r.style&&r.style.length){var sel=r.selectorText||'';if(!/emd89p/.test(sel))doDecl(r.style,st,/\.brand|emd80/.test(sel),true)}
  if(r.cssRules)walk(r.cssRules,st)}}
function sheets(st){var L=document.styleSheets;for(var i=0;i<L.length;i++){var sh=L[i];if(doneSheets.has(sh))continue;doneSheets.add(sh);var id=(sh.ownerNode&&sh.ownerNode.id)||'';if(/^EMD-V89-dark/.test(id))continue;try{walk(sh.cssRules,st)}catch(e){}}}
function inline(st){
  var els=document.querySelectorAll('body [style]');
  for(var i=0;i<els.length;i++){var el=els[i],cur=el.getAttribute('style');if(el.__emd89t===cur)continue;
    if(el.closest('[data-emd89-skip]'))continue;
    if(!/(?:rgb|#|white|black)/i.test(cur)){el.__emd89t=cur;continue}
    el.__emd89o=cur;doDecl(el.style,st,!!el.closest('header .brand'),false);el.__emd89t=el.getAttribute('style');if(el.__emd89t!==cur)inl.add(el)}
}
function restore(){
  for(var i=changes.length-1;i>=0;i--){var c=changes[i];try{c[0].setProperty(c[1],c[2],c[3])}catch(e){}}
  changes=[];doneSheets=new WeakSet();
  inl.forEach(function(el){if(el.getAttribute('style')===el.__emd89t&&el.__emd89o!=null)el.setAttribute('style',el.__emd89o);el.__emd89t=null;el.__emd89o=null});inl.clear();
  [].forEach.call(document.querySelectorAll('body [style]'),function(el){el.__emd89t=null});
}
var sweepT=0,pruneN=0;
function sweep(){if(!ST.dark&&!ST.acc)return;sheets(ST);inline(ST);if(++pruneN>25){pruneN=0;inl.forEach(function(el){if(!el.isConnected)inl.delete(el)})}}
function isDark(v){if(v.mode==='dark')return true;if(v.mode==='auto'){try{return matchMedia('(prefers-color-scheme: dark)').matches}catch(e){return false}}if(v.mode==='time'){var h=new Date().getHours();return h>=18||h<6}return false}
var cur=null;
function apply(v){
  cur=v;var acc=safeAccent(v.accent||DEF.accent),dark=isDark(v),st={dark:dark,acc:acc.toLowerCase()!==DEF.accent||dark};RW.EMDPosH.look(dark,st.acc,v);
  var root=document.documentElement;
  root.style.setProperty('--emd89-acc',dark&&acc.toLowerCase()===DEF.accent?'#334155':acc);
  root.style.setProperty('--accent',acc);
  var base=document.getElementById('EMD-V89-dark-base');
  if(dark&&!base){base=document.createElement('style');base.id='EMD-V89-dark-base';base.textContent='html:root{color-scheme:dark;--bg:#0d1218!important;--card:#161d26!important;--text:#e6e9ee!important;--muted:#9aa5b4!important;--line:#2a3440!important;--soft:#1e2731!important;--ok:#34d399!important;--warn:#fbbf24!important;--danger:#f87171!important;--shadow:0 8px 24px rgba(0,0,0,.35)!important}html,body{background-color:#0d1218}input,select,textarea{color-scheme:dark}';document.head.appendChild(base)}
  if(!dark&&base)base.remove();
  if(ST.dark!==st.dark||ST.acc!==st.acc){restore();ST=st;sweep()}
  var b=document.body;if(b){
    b.classList.toggle('emd89-dark',dark);
    b.classList.toggle('emd335-compact',v.density==='compact');b.classList.remove('emd335-large-text');
    var z=ZOOM[v.size]||1;b.style.zoom=z===1?'':String(z);
    b.classList.toggle('emd89-noclock',v.clock===false);b.classList.toggle('emd89-nohijri',v.hijri===false);
  }
  RW.EMDPosH.lookPaint();
}
/* شعار واسم المتجر تحت اسم التطبيق */
function homeSrc(v){var m=v.homeImg||'custom';if(m==='none')return '';if(m==='logo')return logo();return lsGet(HOMEIMG)||''}
function paintHome(){RW.EMDPosH.lookPaint()}
function pickHome(after){pickImg(function(url){lsSet(HOMEIMG,url);var v=load();if(v.homeImg!=='custom'){v.homeImg='custom';store(v);if(draft)draft.homeImg='custom'}apply(v);after&&after()})}
function pickImg(done){
  if(window.EMDProductImageV81&&window.EMDProductImageV81.pick){window.EMDProductImageV81.pick(done);return}
  var i=document.createElement('input');i.type='file';i.accept='image/*';i.onchange=function(){var f=i.files&&i.files[0];if(!f)return;var r=new FileReader();r.onload=function(e){done(e.target.result)};r.readAsDataURL(f)};i.click();
}
function paintStore(){RW.EMDPosH.lookPaint()}
var logoImg=null;function loadLogoImg(){var l=logo();if(!l){logoImg=null;return}var im=new Image();im.onload=function(){logoImg=im};im.src=l}

/* ===== نافذة المظهر ===== */
function admin(){return RW.EMDPosH.owner()}
var ov=null,draft=null,savedT=0;
function preview(){
  var p=ov&&ov.querySelector('#emd89Prev');if(!p)return;
  var dark=isDark(draft),acc=safeAccent(draft.accent),a2=dark&&acc.toLowerCase()===DEF.accent?'#334155':acc;
  var C=dark?{bg:'#0d1218',card:'#1b232d',tx:'#e5e7eb',mu:'#94a3b8',bd:'#2a3440'}:{bg:'#f4f6f8',card:'#ffffff',tx:'#111827',mu:'#64748b',bd:'#e5e7eb'};
  var n=storeName(),lg=logo(),h=new Date().getHours(),own=String(draft.owner||'').trim();
  var g=((h>=4&&h<12)?'صباح الخير':'مساء الخير')+(own?' يا '+esc(own):'')+((h>=4&&h<12)?' ☀️':' 🌙');
  var t=new Date(),tm=((t.getHours()%12)||12)+':'+String(t.getMinutes()).padStart(2,'0')+' '+(t.getHours()<12?'ص':'م');
  p.innerHTML='<div data-emd89-skip style="background:'+C.bg+';border:1px solid '+C.bd+';border-radius:18px;padding:12px;color:'+C.tx+';font-size:13px;direction:rtl">'+
   '<div style="display:flex;justify-content:flex-end;align-items:center;gap:6px;direction:ltr;font-weight:900;font-size:1.25em"><span style="background:#111827;color:#fff;border-radius:7px;padding:1px 6px;font-size:.7em">EMD</span><span>Business</span></div>'+
   ((n||lg)?'<div style="display:flex;align-items:center;gap:6px;margin-top:6px;font-weight:800">'+(lg?'<img src="'+esc(lg)+'" style="width:26px;height:26px;border-radius:8px;object-fit:cover">':'<span>🏪</span>')+esc(n||'متجري')+'</div>':'')+
   '<div style="display:flex;align-items:center;gap:10px;margin-top:10px"><div style="flex:1"><div style="font-weight:900;font-size:1.3em">'+g+'</div>'+
   (draft.clock!==false?'<div style="font-weight:900;font-size:1.5em;margin-top:2px">'+tm+'</div>':'')+'</div>'+(homeSrc(draft)?frameImg(homeSrc(draft),draft.frame,a2):'')+'</div>'+
   '<div style="background:'+a2+';color:#fff;border-radius:14px;padding:10px;margin-top:10px;display:flex;justify-content:space-around;text-align:center"><div><small style="opacity:.75">مبيعات اليوم</small><br><b>12.500</b></div><div><small style="opacity:.75">ربح الشهر</small><br><b>84.250</b></div></div>'+
   '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px"><div style="background:'+C.card+';border:1px solid '+C.bd+';border-radius:12px;padding:8px"><b style="font-size:1.3em">3</b><br><span style="color:'+C.mu+'">🆕 طلبات جديدة</span></div><div style="background:'+C.card+';border:1px solid '+C.bd+';border-radius:12px;padding:8px"><b style="font-size:1.3em">5</b><br><span style="color:'+C.mu+'">🚚 تم الشحن</span></div></div>'+
   '<div style="margin-top:8px;background:'+a2+';color:#fff;border-radius:12px;padding:9px;text-align:center;font-weight:800">📦 طلب جديد</div></div>';
}
function frameImg(src,fr,acc){var im='<img src="'+esc(src)+'" style="width:100%;height:100%;object-fit:cover;display:block;box-sizing:border-box;';
  if(fr==='circle')return '<div style="width:62px;height:62px;border-radius:50%;padding:3px;background:'+acc+';flex:none">'+im+'border-radius:50%;border:2px solid #fff"></div>';
  if(fr==='white')return '<div style="width:62px;height:62px;border-radius:16px;padding:4px;background:#fff;box-shadow:0 4px 12px rgba(0,0,0,.2);transform:rotate(-3deg);flex:none">'+im+'border-radius:12px"></div>';
  if(fr==='grad')return '<div style="width:62px;height:62px;border-radius:17px;padding:3px;background:linear-gradient(135deg,'+acc+',#f59e0b 55%,#ec4899);flex:none">'+im+'border-radius:14px;border:2px solid #fff"></div>';
  return '<div style="width:62px;height:62px;flex:none">'+im+'border-radius:14px"></div>'}
function seg(name,opts,val){return '<div class="emd89-seg" data-seg="'+name+'">'+opts.map(function(o){return '<button type="button" data-v="'+o[0]+'" class="'+(String(val)===o[0]?'on':'')+'">'+o[1]+'</button>'}).join('')+'</div>'}
function sw(){var a=String(draft.accent).toLowerCase(),known=COLORS.some(function(c){return c[0]===a});
  return COLORS.map(function(c){return '<button type="button" data-acc="'+c[0]+'" title="'+c[1]+'" aria-label="'+c[1]+'" style="background:'+c[0]+'" class="'+(a===c[0]?'on':'')+'"></button>'}).join('')+
    '<label class="'+(known?'':'on')+'" title="لون من اختيارك"><input type="color" id="emd89Pick" value="'+(known?'#e11d48':esc(a))+'"></label>'}
function body(){
  var n=storeName(),lg=logo();
  return '<div class="emd89-head"><div><h3>🎨 المظهر والهوية</h3><small>يتغير فورًا ويُحفظ تلقائيًا على هذا الجهاز.</small></div><button class="emd89-x" type="button" data-k="x">إغلاق ✕</button></div>'+
  '<div id="emd89Prev" style="margin-top:10px"></div>'+
  '<div class="emd89-sec"><b>🏪 هوية متجرك</b><div class="emd89-id"><button type="button" class="emd89-logo" data-k="logo">'+(lg?'<img src="'+esc(lg)+'" alt="">':'📷<span>شعارك</span>')+'</button>'+
   '<div class="emd89-in"><label>اسم المتجر<input id="emd89Store" value="'+esc(n)+'" placeholder="مثال: مكتبة النور" maxlength="40"></label><label>اسمك (للتحية)<input id="emd89Owner" value="'+esc(draft.owner||'')+'" placeholder="مثال: أحمد" maxlength="20"></label></div></div>'+
   (lg?'<div style="margin-top:6px"><button type="button" data-k="dellogo" style="border:0;background:#fee2e2;color:#991b1b;border-radius:9px;padding:6px 10px;font-weight:700;font-size:12px;cursor:pointer">🗑️ حذف الشعار</button></div>':'')+
   '<div class="emd89-lock">🔒 اسم التطبيق «EMD Business» ثابت. شعارك واسم متجرك يظهرون تحته وفي الفواتير ورسائل واتساب.</div></div>'+
  '<div class="emd89-sec"><b>🎨 لون التطبيق</b><div class="emd89-sw" data-emd89-skip>'+sw()+'</div></div>'+
  '<div class="emd89-sec"><b>🌙 الوضع</b>'+seg('mode',[['light','☀️ فاتح'],['dark','🌙 داكن'],['auto','📱 حسب الجوال'],['time','🕕 حسب الوقت']],draft.mode)+
   '<div style="font-size:11.5px;color:#64748b;margin-top:6px">«حسب الوقت»: داكن من 6 مساءً إلى 6 صباحًا.</div></div>'+
  '<div class="emd89-sec"><b>🔠 حجم الخط والعرض</b>'+seg('size',[['s','صغير'],['m','عادي'],['l','كبير'],['xl','كبير جدًا']],draft.size)+
   '<div style="margin-top:8px">'+seg('density',[['comfortable','مساحات مريحة'],['compact','مضغوطة']],draft.density)+'</div></div>'+
  '<div class="emd89-sec"><b>🏠 الصفحة الرئيسية</b>'+
   '<div style="font-size:13px;font-weight:700;margin:2px 0 6px">🖼️ صورة بجانب التحية</div>'+seg('homeImg',[['custom','صورة من اختيارك'],['logo','شعار المتجر'],['none','بدون']],draft.homeImg||'custom')+
   ((draft.homeImg||'custom')==='custom'?'<div class="emd90-row">'+(lsGet(HOMEIMG)?'<img src="'+esc(lsGet(HOMEIMG))+'" alt=""><button type="button" data-k="homeimg">🔄 تغيير الصورة</button><button type="button" class="red" data-k="delhome">🗑️ حذف</button>':'<button type="button" data-k="homeimg">📷 اختيار صورة</button>')+'</div>':'')+
   (homeSrc(draft)?'<div style="font-size:13px;font-weight:700;margin:12px 0 6px">🖼️ إطار الصورة</div>'+seg('frame',[['none','بدون'],['circle','⭕ دائري'],['white','⬜ أبيض'],['grad','🌈 ملوّن']],draft.frame||'none'):'')+
   ((draft.homeImg==='logo'&&!logo())?'<div style="font-size:11.5px;color:#b45309;margin-top:6px">ما فيه شعار محفوظ — أضفه من «هوية متجرك» فوق.</div>':'')+
   '<label class="emd89-tg">إظهار الساعة<input type="checkbox" data-t="clock" '+(draft.clock!==false?'checked':'')+'></label>'+
   '<label class="emd89-tg">إظهار التاريخ الهجري<input type="checkbox" data-t="hijri" '+(draft.hijri!==false?'checked':'')+'></label></div>'+
  '<div class="emd89-foot"><button type="button" class="emd89-ok" data-k="x">✓ تم</button><button type="button" class="emd89-rst" data-k="rst">↩️ الافتراضي</button></div><div class="emd89-saved" id="emd89Saved"></div>';
}
function commit(re){store(draft);apply(draft);preview();var s=ov&&ov.querySelector('#emd89Saved');if(s){s.textContent='✓ تم الحفظ';clearTimeout(savedT);savedT=setTimeout(function(){s.textContent=''},1400)}if(re)render()}
function render(){if(!ov)return;var y=ov.firstChild.scrollTop;ov.firstChild.innerHTML=body();try{RW.__lookInject&&RW.__lookInject()}catch(e){}ov.firstChild.scrollTop=y;preview()}
function pickLogo(){
  function done(url){lsSet(LOGO,url);loadLogoImg();paintStore();paintHome();render()}
  if(window.EMDProductImageV81&&window.EMDProductImageV81.pick){window.EMDProductImageV81.pick(done);return}
  var i=document.createElement('input');i.type='file';i.accept='image/*';i.onchange=function(){var f=i.files&&i.files[0];if(!f)return;var r=new FileReader();r.onload=function(e){done(e.target.result)};r.readAsDataURL(f)};i.click();
}
function open(){
  if(!admin()){alert('إعدادات المظهر متاحة لمدير النظام فقط.');return}
  ['emdSettingsHubV327','emdV335AppearanceModal'].forEach(function(id){var m=document.getElementById(id);if(m){m.classList.remove('show');m.setAttribute('aria-hidden','true')}});
  if(ov)ov.remove();draft=load();
  ov=document.createElement('div');ov.className='emd89-ov';ov.id='emd89Ov';ov.innerHTML='<div class="emd89-box" role="dialog" aria-modal="true"></div>';document.body.appendChild(ov);
  render();
  ov.addEventListener('click',function(e){
    if(e.target===ov){close();return}
    var b=e.target.closest('button');if(!b)return;
    var k=b.getAttribute('data-k');
    if(k==='x'){close();return}
    if(k==='logo'){pickLogo();return}
    if(k==='homeimg'){pickHome(function(){draft=load();render()});return}
    if(k==='delhome'){if(confirm('حذف صورة الرئيسية؟')){lsSet(HOMEIMG,null);apply(draft);render()}return}
    if(k==='dellogo'){if(confirm('حذف شعار المتجر؟')){lsSet(LOGO,null);loadLogoImg();paintStore();render()}return}
    if(k==='rst'){if(!confirm('إرجاع اللون والوضع والخط للإعدادات الافتراضية؟ (اسم المتجر والشعار يبقون)'))return;var own=draft.owner;draft=JSON.parse(JSON.stringify(DEF));draft.owner=own;commit(true);return}
    if(b.hasAttribute('data-acc')){draft.accent=b.getAttribute('data-acc');commit(true);return}
    var sg=b.closest('[data-seg]');if(sg){var sn=sg.getAttribute('data-seg'),sv=b.getAttribute('data-v');draft[sn]=sv;commit(true);if(sn==='homeImg'&&sv==='custom'&&!lsGet(HOMEIMG))pickHome(function(){draft=load();render()})}
  });
  ov.addEventListener('change',function(e){var t=e.target;
    if(t.id==='emd89Pick'){draft.accent=safeAccent(t.value);commit(true);return}
    if(t.hasAttribute('data-t')){draft[t.getAttribute('data-t')]=t.checked;commit(false)}});
  ov.addEventListener('input',function(e){var t=e.target;
    if(t.id==='emd89Store'){setStoreName(t.value.trim());paintStore();commit(false)}
    if(t.id==='emd89Owner'){draft.owner=t.value.trim();commit(false)}});
}
function close(){if(ov){ov.remove();ov=null}}
/* نستبدل نافذة المظهر القديمة */
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-settings-action="appearanceSettings"]');if(!b)return;e.preventDefault();e.stopImmediatePropagation();open()},true);
function hook(){if(window.EMDAppearanceV335&&window.EMDAppearanceV335.open!==open)window.EMDAppearanceV335.open=open;window.openAppearanceV89=open}
window.EMDLookV89={open:open,get:load,apply:function(){apply(load())},owner:function(){return String((cur||load()).owner||'').trim()},
  accentHex:function(){return safeAccent((cur||load()).accent)},logoImg:function(){return logoImg},storeName:storeName};
function init(){hook();loadLogoImg();apply(load());
  RW.__lookSweep=sweep;RW.__lookTick=function(){if(cur&&cur.mode==='time'){var d=isDark(cur);if(d!==ST.dark)apply(cur)}};
  document.addEventListener('click',function(){setTimeout(sweep,60);setTimeout(sweep,500)},true);
  try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(){if(cur&&cur.mode==='auto')apply(cur)})}catch(e){}
}
init();
})();

/* ---- V409 ---- */

(function(){'use strict';
if(window.__EMD_V409__)return;window.__EMD_V409__=true;
var TK='emd_theme_v409',PK='emd_theme_prev_v409',LOOK='emd_v89_look';
var THEMES=[
 {id:'',name:'الافتراضي',desc:'الشكل الحالي للتطبيق',pv:['#f5f7fb','#18202a','#18202a','#eef2f7']},
 {id:'navygold',name:'كحلي وذهبي',desc:'ألوان الشعار نفسها',mode:'light',accent:'#1e3a8a',pv:['#f3f5fa','linear-gradient(135deg,#1e3a8a,#0f172a)','#1e3a8a','#f59e0b']},
 {id:'clean',name:'أبيض أنيق',desc:'هادئ وبسيط',mode:'light',accent:'#1e3a8a',pv:['#ffffff','#f8fafd','#1e3a8a','#fff;border:1px solid #c7d2ec']},
 {id:'night',name:'ليلي كحلي',desc:'داكن بلمسة ذهبية',mode:'dark',accent:'#1e3a8a',pv:['#0b1224','linear-gradient(135deg,#1e3a8a,#0f172a)','#f59e0b','#1a2645']},
 {id:'glass',name:'زجاجي عصري',desc:'بطاقات شفافة وخلفية ملونة',mode:'light',accent:'#4338ca',pv:['linear-gradient(135deg,#c7d2fe,#fbcfe8,#fde68a)','rgba(255,255,255,.7)','linear-gradient(135deg,#4338ca,#7c3aed)','rgba(255,255,255,.7)']},
 {id:'sunrise',name:'شروق دافئ',desc:'كريمي مع برتقالي متدرّج',mode:'light',accent:'#c2410c',pv:['#fbf7f1','linear-gradient(135deg,#1e3a8a,#0f172a)','linear-gradient(135deg,#f59e0b,#ea580c)','#fdf0e3']},
 {id:'neon',name:'ميدنايت نيون',desc:'داكن مع توهج أزرق',mode:'dark',accent:'#4338ca',pv:['#070b16','#0f1629','linear-gradient(135deg,#6366f1,#06b6d4)','#141d36']}
];
function lsGet(k){try{return PLS.getItem(k)}catch(e){return null}}
function lsSet(k,v){try{if(v==null)PLS.removeItem(k);else PLS.setItem(k,v)}catch(e){}}
function look(){try{return JSON.parse(lsGet(LOOK)||'null')||{}}catch(e){return {}}}
function find(id){for(var i=0;i<THEMES.length;i++)if(THEMES[i].id===id)return THEMES[i];return THEMES[0]}
function current(){return lsGet(TK)||''}
function paint(){var id=current(),b=document.body;if(!b)return;
  THEMES.forEach(function(t){if(t.id)b.classList.toggle('emdth-'+t.id,t.id===id)});}
function lookApply(){try{window.EMDLookV89&&window.EMDLookV89.apply()}catch(e){}}
function choose(id){
  var L=look(),was=current();
  if(id){var t=find(id);
    if(!was)lsSet(PK,JSON.stringify({mode:L.mode||'light',accent:L.accent||'#18202a'}));
    L.mode=t.mode;L.accent=t.accent;lsSet(LOOK,JSON.stringify(L));lsSet(TK,id);
  }else{var p=null;try{p=JSON.parse(lsGet(PK)||'null')}catch(e){}
    if(was){L.mode=(p&&p.mode)||'light';L.accent=(p&&p.accent)||'#18202a';lsSet(LOOK,JSON.stringify(L))}
    lsSet(TK,null);lsSet(PK,null)}
  paint();lookApply();
  /* نعيد فتح نافذة المظهر حتى تقرأ اللون والوضع الجديدين */
  if(document.getElementById('emd89Ov')){try{var box=document.querySelector('#emd89Ov .emd89-box'),y=box?box.scrollTop:0;window.EMDLookV89.open();var nb=document.querySelector('#emd89Ov .emd89-box');if(nb)nb.scrollTop=y}catch(e){}}
}
/* إذا غيّر المستخدم اللون أو الوضع يدويًا، يرجع الثيم إلى «مخصص» */
function consistent(){var id=current();if(!id)return;var t=find(id),L=look();
  if((L.mode||'light')!==t.mode||String(L.accent||'').toLowerCase()!==t.accent){lsSet(TK,null);lsSet(PK,null);paint()}}
function section(){var id=current();
  return '<div class="emd89-sec" id="emd409Sec"><b>🎨 الثيم</b><div style="font-size:11.5px;color:#64748b;margin-top:3px">اختر شكلًا جاهزًا. يغيّر الألوان فقط، وبياناتك كما هي.</div><div class="emd409-themes" data-emd89-skip>'+
   THEMES.map(function(t){var p=t.pv;return '<button type="button" class="emd409-th'+(t.id===id?' on':'')+'" data-th="'+t.id+'">'+
    '<div class="pv" style="background:'+p[0]+'"><i style="background:'+p[1]+'"></i><u class="a" style="background:'+p[2]+'"></u><u class="b" style="background:'+p[3]+'"></u></div>'+
    (t.id===id?'<span class="ck">✓</span>':'')+'<b>'+t.name+'</b><small>'+t.desc+'</small></button>'}).join('')+'</div></div>';}
function inject(){var box=document.querySelector('#emd89Ov .emd89-box');if(!box||box.querySelector('#emd409Sec'))return;
  consistent();var prev=box.querySelector('#emd89Prev');var w=document.createElement('div');w.innerHTML=section();
  if(prev&&prev.nextSibling)box.insertBefore(w.firstChild,prev.nextSibling);else box.appendChild(w.firstChild);}
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('#emd409Sec [data-th]');if(!b)return;e.preventDefault();e.stopPropagation();choose(b.getAttribute('data-th'))},true);

function boot(){paint();RW.__lookInject=inject}
boot();
window.EMDThemesV409={list:THEMES,choose:choose,current:current};
})();

})(window);
