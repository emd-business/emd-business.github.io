/* مُولَّد بـ tools/port-staff.py من V108 وV111 — لا تعدّل هنا */
(function(){var s=document.createElement("style");s.textContent="\n.emd93-chip{border:1px solid #dbe3ea;background:#f8fafc;color:#0f172a;border-radius:999px;padding:8px 13px;font:inherit;font-size:13px;font-weight:800;cursor:pointer;display:inline-flex;align-items:center;gap:6px;white-space:nowrap}\n.emd93-chip.off{background:#fff7e6;border-color:#f5d48a;color:#7a4b00}\n.emd93-chip.err{background:#fef2f2;border-color:#fecaca;color:#991b1b}\n.emd93-chip.ok{background:#f0fdf4;border-color:#bbf7d0;color:#14532d}\n.emd93-ov{position:fixed;inset:0;z-index:12000;background:rgba(15,23,42,.6);display:flex;align-items:flex-end;justify-content:center;direction:rtl}\n.emd93-box{background:#fff;color:#111827;width:min(460px,100%);border-radius:24px 24px 0 0;padding:18px 18px 24px;max-height:94vh;overflow:auto;box-shadow:0 -10px 40px rgba(0,0,0,.25)}\n@media(min-width:620px){.emd93-ov{align-items:center}.emd93-box{border-radius:24px}}\n.emd93-head{display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:10px}\n.emd93-head h3{margin:0;font-size:20px}\n.emd93-head small{display:block;color:#64748b;font-size:12.5px;margin-top:4px;font-weight:500;line-height:1.6}\n.emd93-x{border:0;background:#f1f5f9;color:#334155;border-radius:10px;padding:8px 12px;font-weight:800;cursor:pointer;flex:none}\n.emd93-tabs{display:grid;grid-template-columns:1fr 1fr;gap:4px;background:#f1f5f9;border-radius:12px;padding:4px;margin:6px 0 12px}\n.emd93-tabs button{border:0;background:transparent;border-radius:9px;padding:10px;font-weight:800;font-size:14px;cursor:pointer;color:#475569}\n.emd93-tabs button.on{background:#fff;color:#111827;box-shadow:0 1px 4px rgba(0,0,0,.12)}\n.emd93-f label{display:block;font-size:12.5px;font-weight:700;color:#475569;margin:10px 0 4px}\n.emd93-pw{position:relative}\n.emd93-f input{width:100%;box-sizing:border-box;border:1px solid #dfe3e8;border-radius:12px;padding:13px 12px;font-size:16px;background:#fff;color:#111827}\n.emd93-f input[type=email]{direction:ltr;text-align:right}\n.emd93-pw input{padding-left:48px;direction:ltr;text-align:right}\n.emd93-eye{position:absolute;left:6px;top:50%;transform:translateY(-50%);border:0;background:transparent;font-size:20px;cursor:pointer;padding:6px 8px;line-height:1}\n.emd93-go{width:100%;border:0;border-radius:14px;padding:14px;font-weight:800;font-size:16px;cursor:pointer;background:var(--emd89-acc,#18202a);color:#fff;margin-top:16px}\n.emd93-go[disabled]{opacity:.6;cursor:wait}\n.emd93-gh{width:100%;border:0;border-radius:14px;padding:12px;font-weight:800;font-size:14px;cursor:pointer;background:#f1f5f9;color:#111827;margin-top:8px}\n.emd93-red{background:#fee2e2;color:#991b1b}\n.emd93-link{background:none;border:0;color:#2563eb;font-weight:700;font-size:13.5px;cursor:pointer;padding:8px 2px;text-decoration:underline}\n.emd93-msg{margin-top:10px;font-size:13.5px;line-height:1.7;border-radius:12px;padding:10px 12px;display:none}\n.emd93-msg.show{display:block}.emd93-msg.err{background:#fef2f2;color:#991b1b}.emd93-msg.ok{background:#f0fdf4;color:#14532d}.emd93-msg.info{background:#eff6ff;color:#1e3a8a}\n.emd93-card{background:#f8fafc;border:1px solid #eef1f5;border-radius:14px;padding:12px;font-size:14px;line-height:1.9;margin-top:8px}\n.emd93-card b{font-weight:800}\n.emd93-note{font-size:12px;color:#64748b;line-height:1.7;margin-top:12px}\n.emd93-hist{display:grid;gap:6px;margin-top:8px}\n.emd93-hist button{display:flex;justify-content:space-between;align-items:center;gap:8px;border:1px solid #e5e7eb;background:#fff;border-radius:12px;padding:11px 12px;font:inherit;font-size:13.5px;cursor:pointer;text-align:right;color:#111827}\n.emd93-hist small{color:#64748b}\nbody.emd93-open #emdQuickMenuFinal,body.emd93-open #emdNotifyBadgeV317,body.emd93-open #emdV92AiFab,body.emd93-open #emdStandaloneV2Badge,body.emd93-open #emdV66Banner{display:none!important}\n.emd93-choice{display:grid;gap:10px;margin-top:10px}\n.emd93-choice button{border:1.5px solid #e2e8f0;background:#fff;border-radius:16px;padding:14px;text-align:right;cursor:pointer;font:inherit;color:#111827}\n.emd93-choice button b{display:block;font-size:15px;margin-bottom:4px}\n.emd93-choice button span{font-size:13px;color:#475569;line-height:1.6}\n\n.emd108-lock{position:fixed;inset:0;z-index:2147482000;background:linear-gradient(160deg,#0f172a,#1e293b 60%,#134e4a);display:flex;align-items:center;justify-content:center;padding:18px;direction:rtl}\n.emd108-lock .card{background:#fff;color:#0f172a;border-radius:24px;padding:22px 18px;width:100%;max-width:420px;box-shadow:0 30px 80px rgba(0,0,0,.4);text-align:center}\n.emd108-lock h2{margin:4px 0 4px;font-size:20px}\n.emd108-lock p{margin:0 0 14px;color:#64748b;font-size:13.5px}\n.emd108-users{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:10px;margin:8px 0}\n.emd108-users button{border:1.5px solid #e2e8f0;background:#f8fafc;border-radius:18px;padding:14px 8px;font:inherit;font-weight:900;font-size:14px;cursor:pointer;color:#0f172a}\n.emd108-users button span{display:block;font-size:28px;margin-bottom:4px}\n.emd108-users button small{display:block;font-weight:700;color:#64748b;font-size:11.5px;margin-top:2px}\n.emd108-dots{display:flex;gap:12px;justify-content:center;margin:14px 0 10px}\n.emd108-dots i{width:16px;height:16px;border-radius:50%;border:2px solid #94a3b8;display:block}\n.emd108-dots i.on{background:#0f766e;border-color:#0f766e}\n.emd108-pad{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;max-width:290px;margin:0 auto}\n.emd108-pad button{border:0;background:#f1f5f9;border-radius:16px;padding:15px 0;font:inherit;font-size:22px;font-weight:900;cursor:pointer;color:#0f172a;direction:ltr}\n.emd108-pad button.x{background:transparent;font-size:15px;color:#64748b}\n.emd108-err{color:#b91c1c;font-weight:800;font-size:13px;min-height:20px}\n.emd108-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid #c7d2fe;background:#eef2ff;color:#3730a3;border-radius:999px;padding:7px 12px;font:inherit;font-size:13px;font-weight:900;cursor:pointer;white-space:nowrap}\n.emd108-sw{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 12px;border:1px solid #eef2f7;border-radius:14px;margin:6px 0;background:#fff;font-weight:800;font-size:13.5px;cursor:pointer}\n.emd108-sw input{width:22px;height:22px;flex:none;accent-color:#0f766e}\n.emd108-st{display:flex;align-items:center;gap:10px;padding:11px 12px;border:1px solid #eef2f7;border-radius:14px;margin:7px 0;background:#fff}\n.emd108-st .a{flex:1;min-width:0}\n.emd108-st b{display:block}\n.emd108-st small{color:#64748b;font-weight:700}\n.emd108-st button{border:1px solid #e2e8f0;background:#fff;border-radius:10px;padding:7px 10px;font:inherit;font-size:12.5px;font-weight:800;cursor:pointer}\n.emd108-presets{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0}\n.emd108-presets button{border:1px dashed #94a3b8;background:#fff;border-radius:999px;padding:6px 11px;font:inherit;font-size:12.5px;font-weight:800;cursor:pointer}\n.emd108-sec{margin:14px 0 6px;font-weight:900;font-size:14px}\n.emd108-kpi{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:8px 0}\n.emd108-kpi div{background:#f8fafc;border:1px solid #eef2f7;border-radius:14px;padding:10px;text-align:center;font-size:12px;color:#64748b;font-weight:800}\n.emd108-kpi b{display:block;font-size:20px;color:#0f172a;direction:ltr}\n.emd108-kpi div.g b{color:#15803d}.emd108-kpi div.w b{color:#b45309}\n.emd108-pre{white-space:pre-wrap;background:#f8fafc;border:1px solid #eef2f7;border-radius:14px;padding:12px;font-size:13px;line-height:1.75;max-height:260px;overflow:auto}\n.emd108-row2{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n.emd108-row2 .emd93-go,.emd108-row2 .emd93-gh{margin-top:6px}\n.emd108-wa{background:#16a34a!important;color:#fff!important;border-color:#16a34a!important}\n.emd108-banner{position:fixed;left:12px;right:12px;bottom:84px;z-index:2147481000;background:#0f172a;color:#fff;border-radius:18px;padding:12px 14px;display:flex;align-items:center;gap:10px;box-shadow:0 14px 40px rgba(0,0,0,.35);max-width:520px;margin:0 auto;direction:rtl}\n.emd108-banner b{flex:1;font-size:14px}\n.emd108-banner button{border:0;border-radius:12px;padding:9px 12px;font:inherit;font-weight:900;cursor:pointer}\n.emd108-banner .go{background:#facc15;color:#0f172a}.emd108-banner .no{background:transparent;color:#cbd5e1}\n.emd108-done{background:#dcfce7;color:#166534;border-radius:12px;padding:10px 12px;font-weight:900;font-size:13.5px;margin:8px 0}\nbody.emd108-no-prices .emd82-sum,body.emd108-no-prices .emd82-cell,body.emd108-no-prices .emd105-pay,body.emd108-no-prices #emd75OBox,body.emd108-no-prices #emd75Strip{display:none!important}\nbody.emd108-no-payments .emd105-pay{display:none!important}\nbody.emd108-no-finance #emd75Strip{display:none!important}\nbody.emd108-no-create [data-emd108=\"create\"],body.emd108-no-edit [data-emd108=\"edit\"],body.emd108-no-delete [data-emd108=\"delete\"],body.emd108-no-status [data-emd108=\"status\"],body.emd108-no-finance [data-emd108=\"finance\"],body.emd108-no-products [data-emd108=\"products\"],body.emd108-no-customers [data-emd108=\"customers\"],body.emd108-no-settings [data-emd108=\"settings\"],body.emd108-no-closing [data-emd108=\"closing\"],body.emd108-no-payments [data-emd108=\"payments\"],body.emd108-staff [data-emd108=\"owner\"]{display:none!important}\n\nbody.emd111-nostaff:not(.emd111-staffon) #emd108Chip{display:none!important}\n#emd111Modal{position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:18px;direction:rtl}\n#emd111Modal .box{background:#fff;border-radius:22px;padding:20px;width:min(440px,100%);box-shadow:0 24px 60px rgba(0,0,0,.35);font-family:inherit}\n#emd111Modal h3{margin:0 0 6px;font-size:19px}\n#emd111Modal p{margin:6px 0 14px;color:#475569;font-size:14px;line-height:1.7}\n#emd111Modal button{display:block;width:100%;border:0;border-radius:14px;padding:14px;font:inherit;font-size:15px;font-weight:900;cursor:pointer;margin-top:10px}\n#emd111Modal .b1{background:#0f766e;color:#fff}#emd111Modal .b2{background:#eef2ff;color:#3730a3}#emd111Modal .b3{background:#f1f5f9;color:#334155}\n#emd111Modal .st{display:inline-block;border-radius:999px;padding:3px 12px;font-size:13px;font-weight:900}\n.st.on{background:#dcfce7;color:#166534}.st.off{background:#f1f5f9;color:#334155}\n\n#emd108Chip{display:none}body.emd111-staffon #emd108Chip{display:inline-flex}\n";document.head.appendChild(s)})();
(function(RW){var PH=RW.EMDPosH,PLS=PH.ls;
var window=new Proxy(RW,{get:function(t,k){if(k==='db')return PH.db();if(k==='localStorage')return PLS;if(PH.alias[k]&&!(k in t))return PH.alias[k];var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t||!!PH.alias[k]}});
/* ---- V108 ---- */

(function(){
'use strict';
if(window.__EMD_V108__)return;window.__EMD_V108__=true;
/* V108: الموظفين والصلاحيات (رمز سري لكل موظف) + تقفيلة نهاية اليوم */
var SK='emd_v108_staff',CK='emd_v108_close',HK='emd_v108_closings',WHO='emd_v108_who';
var PERMS=[['create','📦 إضافة طلبات جديدة (من رسالة أو يدوي)'],['edit','✏️ تعديل الطلبات'],['delete','🗑️ حذف أو إلغاء الطلبات'],['status','🛠️ التجهيز والشحن وتغيير الحالة'],['prices','💲 مشاهدة الأسعار والمبالغ'],['payments','💳 تسجيل الدفع'],['finance','💰 المالية والأرباح والتقارير'],['products','📦 تعديل المنتجات والمخزون'],['customers','👤 العملاء وبياناتهم'],['settings','⚙️ الإعدادات والنسخ الاحتياطي'],['closing','📊 تقفيلة اليوم']];
var PLABEL={};PERMS.forEach(function(p){PLABEL[p[0]]=p[1]});
var PRESETS=[['مشرف',['create','edit','delete','status','prices','payments','finance','products','customers','closing']],['استقبال الطلبات',['create','edit','prices','payments','customers']],['تجهيز وشحن',['status']],['المخزن',['status','products']]];
function $(id){return document.getElementById(id)}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function rd(k,d){try{var x=JSON.parse(PLS.getItem(k)||'null');return x==null?d:x}catch(e){return d}}
function wr(k,v){try{PLS.setItem(k,JSON.stringify(v))}catch(e){}}
function cfg(){var c=rd(SK,{});c.enabled=!!c.enabled;c.staff=Array.isArray(c.staff)?c.staff:[];c.owner=c.owner||{};return c}
function setCfg(c){wr(SK,c);apply();try{RW.__stHide&&RW.__stHide()}catch(e){}}
function ownerName(){try{var m=rd('emd_manager_profile_v41',null);return (m&&m.name)||'المدير'}catch(e){return 'المدير'}}
function who(){if(!cfg().enabled)return {id:'owner',name:ownerName(),owner:true};try{var w=JSON.parse(sessionStorage.getItem(WHO)||'null');if(!w)return null;if(w.id==='owner')return {id:'owner',name:ownerName(),owner:true};var s=cfg().staff.find(function(x){return x.id===w.id&&x.active!==false});return s?{id:s.id,name:s.name,owner:false,perms:s.perms||[]}:null}catch(e){return null}}
function can(p){var w=who();if(!w)return false;if(w.owner)return true;return (w.perms||[]).indexOf(p)>=0}
window.EMDStaffV108={can:can,who:who,open:function(){openStaff()},closing:function(){openClosing()},apply:apply,on:function(){return cfg().enabled}};
function toast(t){RW.EMDPosH.alias.toast(t)}

/* ---------- الرمز السري ---------- */
function hash(pin,salt){var s=String(salt||'emd')+':'+String(pin);try{if(window.crypto&&crypto.subtle&&window.TextEncoder)return crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)).then(function(b){return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,'0')}).join('')})}catch(e){}
  var h=5381;for(var i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))>>>0;return Promise.resolve('d'+h.toString(16))}
function salt(){return Math.random().toString(36).slice(2,10)}

/* ---------- شاشة «مين يستخدم التطبيق؟» ---------- */
var lockEl=null,pickId=null,pin='',fails=0,blockUntil=0;
function showLock(){var c=cfg();if(!c.enabled)return hideLock();if(!lockEl){lockEl=document.createElement('div');lockEl.className='emd108-lock';lockEl.id='emd108Lock';document.body.appendChild(lockEl);lockEl.addEventListener('click',onLock)}
  pin='';var h='<div class="card">';
  if(!pickId){var list=[{id:'owner',name:ownerName(),ic:'👑',sub:'المدير'}].concat(c.staff.filter(function(s){return s.active!==false}).map(function(s){return {id:s.id,name:s.name,ic:'👷',sub:'موظف'}}));
    h+='<div style="font-size:34px">🔐</div><h2>مين يستخدم التطبيق؟</h2><p>اختر اسمك واكتب رمزك السري.</p><div class="emd108-users">'+list.map(function(u){return '<button type="button" data-u="'+esc(u.id)+'"><span>'+u.ic+'</span>'+esc(u.name)+'<small>'+u.sub+'</small></button>'}).join('')+'</div>'}
  else{var nm=pickId==='owner'?ownerName():((c.staff.find(function(s){return s.id===pickId})||{}).name||'');
    h+='<div style="font-size:30px">'+(pickId==='owner'?'👑':'👷')+'</div><h2>'+esc(nm)+'</h2><p>اكتب رمزك السري (٤ أرقام)</p><div class="emd108-dots">'+[0,1,2,3].map(function(i){return '<i data-d="'+i+'"></i>'}).join('')+'</div><div class="emd108-err" id="emd108Err"></div>'+
      '<div class="emd108-pad">'+[1,2,3,4,5,6,7,8,9].map(function(n){return '<button type="button" data-n="'+n+'">'+n+'</button>'}).join('')+'<button type="button" class="x" data-back="1">رجوع</button><button type="button" data-n="0">0</button><button type="button" class="x" data-del="1">⌫</button></div>'}
  h+='</div>';lockEl.innerHTML=h;document.body.classList.add('emd93-open')}
function hideLock(){if(lockEl){lockEl.remove();lockEl=null}pickId=null;pin='';document.body.classList.remove('emd93-open')}
function dots(){if(!lockEl)return;[].slice.call(lockEl.querySelectorAll('[data-d]')).forEach(function(d,i){d.classList.toggle('on',i<pin.length)})}
function onLock(e){var b=e.target.closest('button');if(!b)return;
  if(b.dataset.u){pickId=b.dataset.u;showLock();return}
  if(b.dataset.back){pickId=null;showLock();return}
  if(b.dataset.del){pin=pin.slice(0,-1);dots();return}
  if(b.dataset.n!=null){if(Date.now()<blockUntil){$('emd108Err').textContent='⏳ انتظر شوي وجرّب مرة ثانية';return}if(pin.length>=4)return;pin+=b.dataset.n;dots();if(pin.length===4)check()}}
function check(){var c=cfg(),rec=pickId==='owner'?c.owner:(c.staff.find(function(s){return s.id===pickId})||{});var p=pin;
  hash(p,rec.salt).then(function(h){if(rec.pin&&h===rec.pin){fails=0;try{sessionStorage.setItem(WHO,JSON.stringify({id:pickId,at:Date.now()}))}catch(e){}var nm=pickId==='owner'?ownerName():rec.name;hideLock();apply();audit('دخول للتطبيق',nm);toast('👋 أهلاً '+nm);setTimeout(dueCheck,800)}
    else{fails++;pin='';dots();var er=$('emd108Err');if(fails>=5){blockUntil=Date.now()+30000;fails=0;if(er)er.textContent='🚫 ٥ محاولات غلط. انتظر ٣٠ ثانية.'}else if(er)er.textContent='❌ الرمز غلط'}})}
function switchUser(){try{sessionStorage.removeItem(WHO)}catch(e){}pickId=null;apply();showLock()}

/* ---------- تطبيق الصلاحيات ---------- */
var OWNER_ONLY_RX=/^(?:👥 المستخدمون)/;
function permFor(el){return RW.EMDPosH.permFor(el)}
document.addEventListener('click',function(e){if(!cfg().enabled||e.target.closest('#emd108Lock'))return;var w=who();if(!w){e.preventDefault();e.stopImmediatePropagation();showLock();return}if(w.owner)return;
  var el=e.target.closest('button,[onclick],[role=button],a');if(!el)return;var p=permFor(el);if(!p)return;
  if(p==='owner'||!can(p)){e.preventDefault();e.stopImmediatePropagation();toast('🔒 ليست لديك صلاحية: '+(p==='owner'?'إدارة الموظفين (للمدير بس)':PLABEL[p].replace(/^\S+\s/,'')))}},true);
function tag(){if(!cfg().enabled)return;[].slice.call(document.querySelectorAll('button,[onclick]')).forEach(function(el){if(el.__t108===el.textContent)return;el.__t108=el.textContent;var p=permFor(el);if(p)el.setAttribute('data-emd108',p);else el.removeAttribute('data-emd108')})}
function apply(){var c=cfg(),w=who(),b=document.body;if(!b)return;
  PERMS.forEach(function(p){b.classList.toggle('emd108-no-'+p[0],!!(c.enabled&&w&&!w.owner&&!can(p[0])))});
  b.classList.toggle('emd108-staff',!!(c.enabled&&w&&!w.owner));
  chip();tag();
  if(c.enabled&&w&&!w.owner)RW.EMDPosH.viewGuard(can);
  if(c.enabled&&!w)showLock()}
/* صلاحيات النظام القديم تتبع الموظف الحالي */
/* من سجّل الطلب */
function audit(a,d){try{if(window.EMDSecurityV315&&window.EMDSecurityV315.record)window.EMDSecurityV315.record(a,d)}catch(e){}}

/* ---------- شريحة المستخدم في الأعلى ---------- */
function chip(){var host=document.querySelector('.hbtns');if(!host)return;var b=$('emd108Chip');
  if(!b){b=document.createElement('button');b.type='button';b.id='emd108Chip';b.className='emd108-chip';b.setAttribute('data-emd108-skip','1');var ref=$('emd101Chip');if(ref&&ref.parentNode===host)host.insertBefore(b,ref.nextSibling);else host.appendChild(b);b.addEventListener('click',chipClick)}
  var c=cfg(),w=who();b.innerHTML=!c.enabled?'👥 الموظفين':(w?(w.owner?'👑 ':'👷 ')+esc(w.name)+' · تبديل':'🔐 دخول')}
function chipClick(){var c=cfg(),w=who();if(!c.enabled)return openStaff();if(!w)return showLock();openMenu()}

/* ---------- النوافذ ---------- */
var ov=null,view='',editId=null,chOwner=false;
function openOv(v){view=v;if(!ov){ov=document.createElement('div');ov.className='emd93-ov';ov.setAttribute('data-emd108-skip','1');ov.innerHTML='<div class="emd93-box" role="dialog" aria-modal="true"></div>';document.body.appendChild(ov);document.body.classList.add('emd93-open');ov.addEventListener('click',onOv);ov.addEventListener('change',onChange)}render()}
function closeOv(){if(ov){ov.remove();ov=null}document.body.classList.remove('emd93-open');editId=null}
function head(t,sub){return '<div class="emd93-head"><div><h3>'+t+'</h3>'+(sub?'<small>'+sub+'</small>':'')+'</div><button type="button" class="emd93-x" data-k="x" aria-label="إغلاق">✕</button></div>'}
function openMenu(){openOv('menu')}
function openStaff(){var c=cfg(),w=who();if(c.enabled&&!(w&&w.owner)){toast('🔒 إدارة الموظفين للمدير بس');return}openOv('staff')}
function openClosing(){var c=cfg();if(c.enabled&&!can('closing')){toast('🔒 ليست لديك صلاحية: تقفيلة اليوم');return}closeOv();RW.EMDPosH.closing()}
function render(){if(!ov)return;var box=ov.firstChild,h='',c=cfg(),w=who();
  if(view==='menu'){h=head((w.owner?'👑 ':'👷 ')+esc(w.name),w.owner?'المدير — كل الصلاحيات':'موظف')+
    '<button type="button" class="emd93-go" data-k="switch">🔄 تبديل المستخدم</button>'+
    (can('closing')||w.owner?'<button type="button" class="emd93-gh" data-k="closing">📊 تقفيلة اليوم</button>':'')+
    (w.owner?'<button type="button" class="emd93-gh" data-k="staff">👥 الموظفين والصلاحيات</button>':'')+
    (!w.owner?'<div class="emd93-note">صلاحياتك: '+((w.perms||[]).map(function(p){return PLABEL[p]}).join('، ')||'عرض الطلبات بس')+'</div>':'')}
  else if(view==='staff'){
    h=head('👥 الموظفين والصلاحيات','يدخل كل موظف باسمه ورمزه السري، ولا يرى إلا ما تسمح له به.');
    h+='<label class="emd108-sw"><span>🔐 تفعيل نظام الموظفين<br><small style="color:#64748b">لما يكون مفعّل، التطبيق يسأل «مين يستخدم؟» كل ما ينفتح.</small></span><input type="checkbox" data-k="en"'+(c.enabled?' checked':'')+'></label>';
    if(!c.owner.pin||chOwner)h+='<div class="emd108-sec">👑 '+(chOwner?'رمز المدير الجديد':'رمز المدير (أنت)')+'</div><div class="emd93-f"><input id="emd108OP" inputmode="numeric" maxlength="4" placeholder="٤ أرقام" autocomplete="off" style="letter-spacing:6px;text-align:center"></div><button type="button" class="emd93-go" data-k="setowner">💾 حفظ رمز المدير</button>';
    else h+='<div class="emd108-st"><div class="a"><b>👑 '+esc(ownerName())+'</b><small>المدير — كل الصلاحيات</small></div><button type="button" data-k="chowner">تغيير الرمز</button></div>';
    h+='<div class="emd108-sec">👷 الموظفين ('+c.staff.length+')</div>';
    h+=c.staff.length?c.staff.map(function(s){return '<div class="emd108-st"><div class="a"><b>'+(s.active===false?'⏸️ ':'')+esc(s.name)+'</b><small>'+((s.perms||[]).length?(s.perms||[]).length+' صلاحيات':'عرض الطلبات بس')+'</small></div><button type="button" data-k="edit" data-id="'+esc(s.id)+'">تعديل</button></div>'}).join(''):'<div class="emd93-note">لا يوجد موظفون بعد.</div>';
    h+='<button type="button" class="emd93-gh" data-k="add">➕ إضافة موظف</button>';
    h+='<div class="emd108-sec">📊 تقفيلة اليوم</div><button type="button" class="emd93-gh" data-k="closing">فتح التقفيلة وإعداداتها</button>';
    h+='<div class="emd93-note">🔒 الرموز تنحفظ مشفّرة. إذا الموظف نسى رمزه، غيّره له من «تعديل».</div>'}
  else if(view==='emp'){var s=editId?c.staff.find(function(x){return x.id===editId}):null,P=s?(s.perms||[]):['create','status'];
    h=head(s?'✏️ تعديل موظف':'➕ موظف جديد','')+'<div class="emd93-f"><label>الاسم</label><input id="emd108N" maxlength="30" value="'+esc(s?s.name:'')+'" placeholder="مثال: سالم"><label>'+(s?'رمز سري جديد (اتركه فارغًا إذا كنت لا تريد تغييره)':'الرمز السري (٤ أرقام)')+'</label><input id="emd108P" inputmode="numeric" maxlength="4" autocomplete="off" style="letter-spacing:6px;text-align:center" placeholder="••••"></div>'+
      '<div class="emd108-sec">الصلاحيات</div><div class="emd108-presets">'+PRESETS.map(function(p,i){return '<button type="button" data-k="preset" data-i="'+i+'">'+p[0]+'</button>'}).join('')+'</div>'+
      PERMS.map(function(p){return '<label class="emd108-sw"><span>'+p[1]+'</span><input type="checkbox" data-perm="'+p[0]+'"'+(P.indexOf(p[0])>=0?' checked':'')+'></label>'}).join('')+
      '<div class="emd93-note">👁️ كل الموظفين يقدرون يشوفون الطلبات. الصلاحيات تتحكم بالباقي.</div>'+
      (s?'<label class="emd108-sw"><span>⏸️ إيقاف الموظف مؤقتًا</span><input type="checkbox" id="emd108Off"'+(s.active===false?' checked':'')+'></label>':'')+
      '<button type="button" class="emd93-go" data-k="saveemp">💾 حفظ</button>'+(s?'<button type="button" class="emd93-link" data-k="delemp" style="color:#be123c">🗑️ حذف الموظف</button>':'')+'<button type="button" class="emd93-link" data-k="staff">رجوع</button><div class="emd93-msg" id="emd108M"></div>'}
  else if(view==='closing'){h=closingHtml()}
  box.innerHTML=h}
function msg(t){var m=ov&&ov.querySelector('#emd108M');if(m){m.textContent=t;m.className='emd93-msg err';m.style.display='block'}else toast(t)}
function onChange(e){var k=e.target.getAttribute('data-k'),c=cfg();
  if(k==='en'){if(e.target.checked&&!c.owner.pin){e.target.checked=false;toast('اكتب رمز المدير أول');var i=$('emd108OP');if(i)i.focus();return}c.enabled=e.target.checked;
    if(c.enabled){try{sessionStorage.setItem(WHO,JSON.stringify({id:'owner',at:Date.now()}))}catch(x){}}setCfg(c);audit(c.enabled?'تفعيل نظام الموظفين':'إيقاف نظام الموظفين','');render();toast(c.enabled?'✅ نظام الموظفين مفعّل':'⏸️ نظام الموظفين متوقف')}
  var cc=e.target.getAttribute('data-c');if(cc){var C=ccfg();C[cc]=e.target.type==='checkbox'?e.target.checked:e.target.value;wr(CK,C);if(cc==='enabled')render()}}
function onOv(e){if(e.target===ov)return closeOv();var b=e.target.closest('[data-k]');if(!b||b.tagName==='INPUT')return;var k=b.getAttribute('data-k'),c=cfg();
  if(k==='x')return closeOv();
  if(k==='switch'){closeOv();return switchUser()}
  if(k==='closing')return openClosing();
  if(k==='staff'){editId=null;view='staff';return render()}
  if(k==='add'){editId=null;view='emp';return render()}
  if(k==='edit'){editId=b.dataset.id;view='emp';return render()}
  if(k==='preset'){var ps=PRESETS[+b.dataset.i][1];[].slice.call(ov.querySelectorAll('[data-perm]')).forEach(function(x){x.checked=ps.indexOf(x.dataset.perm)>=0});return}
  if(k==='setowner'||k==='chowner'){if(k==='chowner'){chOwner=true;return render()}var p=String(($('emd108OP')||{}).value||'').replace(/\D/g,'');if(p.length!==4){toast('الرمز لازم ٤ أرقام');return}var sl=salt();hash(p,sl).then(function(h){var c2=cfg();c2.owner={pin:h,salt:sl};wr(SK,c2);chOwner=false;render();toast('✅ انحفظ رمز المدير')});return}
  if(k==='saveemp'){var n=String(($('emd108N')||{}).value||'').trim(),p2=String(($('emd108P')||{}).value||'').replace(/\D/g,'');if(!n){msg('اكتب اسم الموظف');return}
    var s=editId?c.staff.find(function(x){return x.id===editId}):null;if(!s&&p2.length!==4){msg('الرمز السري لازم ٤ أرقام');return}if(p2&&p2.length!==4){msg('الرمز السري لازم ٤ أرقام');return}
    var perms=[].slice.call(ov.querySelectorAll('[data-perm]:checked')).map(function(x){return x.dataset.perm}),off=$('emd108Off');
    var done=function(h,sl){var c3=cfg();var t=editId?c3.staff.find(function(x){return x.id===editId}):null;if(!t){t={id:'st_'+Date.now().toString(36),createdAt:new Date().toISOString()};c3.staff.push(t)}t.name=n;t.perms=perms;t.active=!(off&&off.checked);if(h){t.pin=h;t.salt=sl}setCfg(c3);audit(editId?'تعديل موظف':'إضافة موظف',n);editId=null;view='staff';render();toast('✅ انحفظ')};
    if(p2){var sl2=salt();hash(p2,sl2).then(function(h){done(h,sl2)})}else done(null);return}
  if(k==='delemp'){if(!confirm('حذف الموظف؟'))return;c.staff=c.staff.filter(function(x){return x.id!==editId});setCfg(c);editId=null;view='staff';render();return}
  if(k==='cwa'||k==='cmail'||k==='ccopy'||k==='cdone')return closingAction(k)}

/* ---------- تقفيلة اليوم ---------- */
function ccfg(){var c=rd(CK,{});if(c.enabled==null)c.enabled=true;c.time=c.time||'22:00';c.wa=c.wa||'';c.email=c.email||'';return c}
function pad(x){return (x<10?'0':'')+x}
function dkey(t){return t.getFullYear()+'-'+pad(t.getMonth()+1)+'-'+pad(t.getDate())}
function num(v){var x=parseFloat(String(v==null?'':v).replace(/[^\d.\-]/g,''));return isFinite(x)?x:0}
function f3(x){return (Math.round((x||0)*1000)/1000).toFixed(3)}
function day(v){var t=new Date(v||0);return isNaN(t)||t.getTime()<=0?'':dkey(t)}
function storeName(){try{var p=window.EMDBusinessProfileV333&&window.EMDBusinessProfileV333.get();return (p&&p.name)||''}catch(e){return ''}}
function report(dk){var D=window.db||{},os=Array.isArray(D.orders)?D.orders:[],M=window.EMDMoneyV75,tot=function(o){try{return M?M.total(o):0}catch(e){return 0}};
  var r={dk:dk,newO:0,sales:0,paidToday:0,shipped:0,received:0,cancelled:0,byUser:{},prods:{},cod:0};
  os.forEach(function(o){var od=day(o.orderDate||o.createdAt||o.created||o.date),st=String(o.status||'');
    if(od===dk&&!/cancel/.test(st)){r.newO++;r.sales+=tot(o);var u=(o.createdBy&&o.createdBy.name)||'غير محدد';r.byUser[u]=(r.byUser[u]||0)+1;(o.products||o.items||[]).forEach(function(x){var n=x.name||x.product||'منتج';r.prods[n]=(r.prods[n]||0)+(num(x.qty)||1)})}
    if(/cancel/.test(st)&&od===dk)r.cancelled++;
    if(day(o.paidAt)===dk&&num(o.paidAmount)>0)r.paidToday+=num(o.paidAmount);
    if(day(o.stockDeductedAt||o.shippedAt)===dk)r.shipped++;
    if(day(o.receivedAt)===dk)r.received++});
  r.due=0;try{r.due=M?M.dues().reduce(function(a,x){return a+x.rem},0):0}catch(e){}
  r.ready=os.filter(function(o){return o.status==='ready'}).length;r.packing=os.filter(function(o){return o.status==='packing'}).length;r.waiting=os.filter(function(o){return o.status==='waiting'}).length;
  r.low=((D.products)||[]).filter(function(p){var a=num(p.available!=null?p.available:p.stock);return a<=3}).map(function(p){return (p.name||'')+' ('+num(p.available!=null?p.available:p.stock)+')'});
  r.ds={n:0,sales:0,cash:0,due:0};try{var DV=window.EMDDirectV113;if(DV){var s0=new Date(dk+'T00:00:00'),e0=new Date(s0.getTime()+864e5),sm=DV.summary(s0,e0);r.ds.n=sm.count;r.ds.sales=sm.sales;r.ds.cash=DV.cashIn(s0,e0);r.ds.due=DV.list().reduce(function(a,x){return a+(DV.statusOf(x)==='void'?0:DV.remainingOf(x))},0)}}catch(e){}
  return r}
function closingText(r){var C='ر.ع',top=Object.keys(r.prods).sort(function(a,b){return r.prods[b]-r.prods[a]}).slice(0,5),users=Object.keys(r.byUser);
  var d=new Date(r.dk+'T12:00:00');var dl=d.toLocaleDateString('ar-OM',{weekday:'long',day:'numeric',month:'long'});
  var t='📊 تقفيلة '+(storeName()||'المتجر')+' — '+dl+'\n\n'+
    '📦 طلبات اليوم: '+r.newO+'\n💰 مبيعات اليوم: '+f3(r.sales)+' '+C+'\n✅ المحصّل اليوم: '+f3(r.paidToday)+' '+C+'\n⏳ إجمالي غير المحصّل: '+f3(r.due)+' '+C+(r.ds&&(r.ds.n||r.ds.cash)?'\n\n🛍️ البيع المباشر اليوم: '+r.ds.n+' فاتورة — '+f3(r.ds.sales)+' '+C+'\n💵 المحصّل من البيع المباشر: '+f3(r.ds.cash)+' '+C+(r.ds.due>0?'\n⏳ غير محصّل (بيع مباشر): '+f3(r.ds.due)+' '+C:'')+'\n\n💼 إجمالي اليوم (طلبات + بيع مباشر): '+f3(r.sales+r.ds.sales)+' '+C+'\n💰 إجمالي المحصّل: '+f3(r.paidToday+r.ds.cash)+' '+C:'')+'\n\n'+
    '🚚 انشحن اليوم: '+r.shipped+'\n📬 استلمها العملاء: '+r.received+(r.cancelled?'\n❌ ملغي: '+r.cancelled:'')+'\n\n'+
    '🟢 جاهز للتجهيز: '+r.ready+'\n🛠️ قيد التجهيز: '+r.packing+'\n⏳ بانتظار المنتجات: '+r.waiting;
  if(top.length)t+='\n\n🏆 الأكثر طلبًا اليوم:\n'+top.map(function(n){return '• '+n+' × '+r.prods[n]}).join('\n');
  if(users.length>1||(users.length===1&&users[0]!=='غير محدد'))t+='\n\n👥 الطلبات حسب الموظف:\n'+users.map(function(u){return '• '+u+': '+r.byUser[u]}).join('\n');
  if(r.low.length)t+='\n\n⚠️ مخزون قليل: '+r.low.slice(0,6).join('، ');
  return t+'\n\n— EMD Business'}
function closings(){return rd(HK,[])}
function closingHtml(){var C=ccfg(),w=who(),today=dkey(new Date()),r=report(today),done=closings().find(function(x){return x.dk===today}),own=!cfg().enabled||(w&&w.owner);
  var h=head('📊 تقفيلة اليوم','ملخص يومك، وترسله للمدير بضغطة.')+
    '<div class="emd108-kpi"><div><b>'+r.newO+'</b>طلبات اليوم</div><div class="g"><b>'+f3(r.sales)+'</b>مبيعات اليوم</div><div class="g"><b>'+f3(r.paidToday)+'</b>المحصّل اليوم</div><div class="w"><b>'+f3(r.due)+'</b>غير محصّل</div></div>'+
    (r.ds&&(r.ds.n||r.ds.cash)?'<div class="emd108-kpi" style="margin-top:6px"><div><b>'+r.ds.n+'</b>فواتير بيع مباشر</div><div class="g"><b>'+f3(r.ds.sales)+'</b>مبيعات مباشرة</div><div class="g"><b>'+f3(r.sales+r.ds.sales)+'</b>إجمالي اليوم</div><div class="w"><b>'+f3(r.ds.due)+'</b>غير محصّل (مباشر)</div></div>':'')+'<div class="emd108-pre" id="emd108Txt">'+esc(closingText(r))+'</div>'+
    (done?'<div class="emd108-done">✅ تم تقفيل اليوم'+(done.by?' بواسطة '+esc(done.by):'')+' — '+new Date(done.at).toLocaleTimeString('ar-OM',{hour:'2-digit',minute:'2-digit'})+'</div>':'')+
    '<div class="emd108-row2"><button type="button" class="emd93-go emd108-wa" data-k="cwa">💬 أرسل واتساب</button><button type="button" class="emd93-gh" data-k="cmail">✉️ أرسل إيميل</button></div>'+
    '<div class="emd108-row2"><button type="button" class="emd93-gh" data-k="ccopy">📋 نسخ</button>'+(done?'':'<button type="button" class="emd93-go" data-k="cdone">🔒 تقفيل اليوم</button>')+'</div>';
  if(own)h+='<div class="emd108-sec">⚙️ إعدادات التقفيلة</div>'+
    '<label class="emd108-sw"><span>🔔 تذكير التقفيلة كل يوم</span><input type="checkbox" data-c="enabled"'+(C.enabled?' checked':'')+'></label>'+
    (C.enabled?'<div class="emd93-f"><label>وقت التقفيلة</label><input type="time" data-c="time" value="'+esc(C.time)+'"><label>واتساب المدير</label><input data-c="wa" inputmode="tel" placeholder="مثال: 99999999" value="'+esc(C.wa)+'"><label>إيميل المدير</label><input data-c="email" type="email" placeholder="name@example.com" value="'+esc(C.email)+'"></div>'+
      '<div class="emd93-note">✉️ زر «أرسل إيميل» يفتح الإيميل جاهز بالملخص. الإرسال التلقائي بدون فتح التطبيق بيجي لاحقًا.</div>':'<div class="emd93-note">التقفيلة متوقفة. يمكنك فتحها يدويًا من هنا في أي وقت.</div>');
  return h}
function closingAction(k){var C=ccfg(),r=report(dkey(new Date())),t=closingText(r);
  if(k==='cwa'){var p=String(C.wa||'').replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/\D/g,'');if(p.length===8)p='968'+p;window.open('https://wa.me/'+p+'?text='+(window.EMDEncWaV129||encodeURIComponent)(t),'_blank');return}
  if(k==='cmail'){window.location.href='mailto:'+encodeURIComponent(C.email||'')+'?subject='+encodeURIComponent('📊 تقفيلة '+(storeName()||'المتجر')+' '+r.dk)+'&body='+encodeURIComponent(t);return}
  if(k==='ccopy'){try{navigator.clipboard.writeText(t).then(function(){toast('📋 انسخ')})}catch(e){toast('ما قدرنا ننسخ')}return}
  if(k==='cdone'){var w=who(),a=closings().filter(function(x){return x.dk!==r.dk});a.push({dk:r.dk,at:new Date().toISOString(),by:w?w.name:'',r:{newO:r.newO,sales:r.sales,paidToday:r.paidToday,due:r.due,shipped:r.shipped,ds:r.ds}});wr(HK,a.slice(-120));audit('تقفيل اليوم',r.dk);hideBanner();render();toast('🔒 تم تقفيل اليوم');return}}
/* تذكير وقت التقفيلة */
var banner=null;
function hideBanner(){if(banner){banner.remove();banner=null}}
function dueCheck(){var C=ccfg();if(!C.enabled||banner)return;if(cfg().enabled&&!can('closing'))return;var now=new Date(),dk=dkey(now),hm=pad(now.getHours())+':'+pad(now.getMinutes());
  if(hm<C.time)return;if(closings().some(function(x){return x.dk===dk}))return;try{if(sessionStorage.getItem('emd_v108_snooze')===dk)return}catch(e){}
  banner=document.createElement('div');banner.className='emd108-banner';banner.setAttribute('data-emd108-skip','1');banner.innerHTML='<span style="font-size:22px">📊</span><b>حان وقت تقفيلة اليوم</b><button type="button" class="go">فتح التقفيلة</button><button type="button" class="no">لاحقًا</button>';
  banner.querySelector('.go').onclick=function(){hideBanner();openClosing()};banner.querySelector('.no').onclick=function(){try{sessionStorage.setItem('emd_v108_snooze',dk)}catch(e){}hideBanner()};document.body.appendChild(banner)}
/* زر «📊 تقفيلة اليوم» في الرئيسية */

apply();RW.__stTick=function(){tag();if(cfg().enabled&&!who()&&!lockEl)showLock()};
window.addEventListener('storage',function(e){if(e.key===SK)apply()});
})();

/* ---- V111 ---- */

(function(){'use strict';
if(window.__EMD_V111__)return;window.__EMD_V111__=true;
var K='emd_v111_hidestaff';
function rd(k){try{return JSON.parse(PLS.getItem(k)||'null')}catch(e){return null}}
function hidden(){try{return PLS.getItem(K)==='1'}catch(e){return false}}
function staffOn(){var c=rd('emd_v108_staff');return !!(c&&c.enabled)}
function apply(){document.body.classList.toggle('emd111-nostaff',hidden());document.body.classList.toggle('emd111-staffon',staffOn())}
function setHidden(v){try{PLS.setItem(K,v?'1':'0')}catch(e){}apply();paintItem()}
function close(){var m=document.getElementById('emd111Modal');if(m)m.remove()}
function open(){close();var m=document.createElement('div');m.id='emd111Modal';var h=hidden(),on=staffOn();
 m.innerHTML='<div class="box"><h3>👥 زر الموظفين</h3><p>الحالة: <span class="st '+(h?'off':'on')+'">'+(h?'مخفي من الشاشة الرئيسية':'ظاهر في الشاشة الرئيسية')+'</span></p>'+
 (on?'<p>⚠️ نظام الموظفين مفعّل الآن، فيبقى الزر ظاهرًا ليدخل الموظفون ويبدّلوا الحساب. الإخفاء يسري فقط عند عدم استخدام الموظفين.</p>':'<p>إذا كنت تعمل وحدك ولا تحتاج إلى الموظفين، أخفِ الزر لتصبح الشاشة أنظف. ويمكنك فتح إدارة الموظفين من هنا في أي وقت.</p>')+
 '<button class="b1" id="emd111Tg">'+(h?'👁️ إظهار الزر':'🙈 إخفاء الزر')+'</button><button class="b2" id="emd111Op">⚙️ فتح إدارة الموظفين والصلاحيات</button><button class="b3" id="emd111Cl">إغلاق</button></div>';
 document.body.appendChild(m);
 m.addEventListener('click',function(e){if(e.target===m)close()});
 document.getElementById('emd111Tg').onclick=function(){setHidden(!hidden());open()};
 document.getElementById('emd111Op').onclick=function(){close();try{window.EMDStaffV108&&window.EMDStaffV108.open()}catch(e){}};
 document.getElementById('emd111Cl').onclick=close}
function paintItem(){var it=document.getElementById('emd111Item');if(it){var s=it.querySelector('span');if(s)s.textContent=hidden()?'الزر مخفي حاليًا — اضغط لإظهاره أو لفتح الإدارة.':'إظهار أو إخفاء الزر وفتح إدارة الموظفين والصلاحيات.'}}
apply();RW.__stHide=apply;
window.EMDStaffHideV111={hidden:hidden,set:setHidden,open:open};
})();

})(window);
