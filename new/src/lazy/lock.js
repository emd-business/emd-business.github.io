/* مُولَّد بـ tools/port-lock.py من V73 وV74 وV80 — لا تعدّل هنا */
(function(){var s=document.createElement("style");s.textContent="#emdSettingsV80 input,#emdSettingsV80 textarea,#emdSettingsV80 select,#emdLockV80 input,#emdLockV80 textarea,#emdLockV80 select{width:100%;box-sizing:border-box;border:1px solid #dfe5ec;border-radius:11px;padding:11px;background:#fff;font:inherit;color:inherit}#emdSettingsV80 .row,#emdLockV80 .row{display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap}#emdSettingsV80 .row>*,#emdLockV80 .row>*{flex:0 1 auto;min-width:0;max-width:100%}#emdSettingsV80 .actions,#emdLockV80 .actions{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0}#emdSettingsV80 .muted,#emdLockV80 .muted{color:#687384;font-size:13px}\n\n.emd-v80-modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.58);z-index:11000;padding:14px;overflow:auto;direction:rtl}\n.emd-v80-panel{max-width:680px;margin:28px auto;background:#fff;border-radius:24px;padding:22px;box-shadow:0 24px 80px rgba(0,0,0,.28)}\n.emd-v80-head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:16px}\n.emd-v80-head h2{margin:0}.emd-v80-setting{border:1px solid #e7eaf0;border-radius:18px;padding:16px;margin:10px 0;background:#fff}\n.emd-v80-setting .title{font-weight:900;font-size:16px}.emd-v80-setting p{margin:5px 0 12px;color:#687384;font-size:13px;line-height:1.6}\n.emd-v80-btn{border:0;border-radius:12px;padding:11px 15px;font-weight:800;cursor:pointer}.emd-v80-dark{background:#18202a;color:#fff}.emd-v80-soft{background:#eef2f7;color:#18202a}\n.emd-v80-danger{background:#fff0f0;color:#a52f2f}.emd-v80-status{display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border-radius:999px;background:#eef2f7;font-size:12px;font-weight:800}\n#emdLockV80{display:none;position:fixed;inset:0;background:linear-gradient(180deg,#f5f7fb,#eef2f7);z-index:12000;align-items:center;justify-content:center;padding:18px;direction:rtl}\n.emd-v80-lockbox{width:min(430px,100%);background:#fff;border:1px solid #e4e8ef;border-radius:26px;padding:28px;box-shadow:0 24px 80px rgba(0,0,0,.18);text-align:center}\n.emd-v80-lockicon{width:68px;height:68px;border-radius:50%;background:#18202a;color:#fff;display:flex;align-items:center;justify-content:center;font-size:30px;margin:0 auto 14px}\n.emd-v80-lockbox h2{margin:0 0 7px}.emd-v80-lockbox p{color:#687384;font-size:13px;margin:0 0 18px}.emd-v80-lockbox input{margin-bottom:10px;text-align:center}\n.emd-v80-note{font-size:12px;color:#687384;line-height:1.7;margin-top:10px}\n@media(max-width:600px){.emd-v80-panel{margin:8px auto;padding:16px}.emd-v80-head{align-items:flex-start}.emd-v80-head h2{font-size:20px}}\n\n\n.emd74-pw{position:relative;display:block;width:100%}\n.emd74-pw>input{width:100%;box-sizing:border-box;padding-left:48px!important}\n.emd74-eye{position:absolute;left:6px;top:50%;transform:translateY(-50%);width:38px;height:38px;border:0;border-radius:10px;background:transparent;font-size:20px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:.75;padding:0;-webkit-tap-highlight-color:transparent}\n.emd74-eye:active,.emd74-eye.on{opacity:1;background:rgba(0,0,0,.06)}\n\n#emdLockV80{z-index:2147483000!important}\n";document.head.appendChild(s);var d=document.createElement("div");d.innerHTML="<div id=\"emdSettingsV80\" class=\"emd-v80-modal\">\n  <div class=\"emd-v80-panel\">\n    <div class=\"emd-v80-head\"><div><h2>⚙️ إعدادات EMD Business</h2><div class=\"muted\">تحكم بسيط في الحماية والنسخ الاحتياطي.</div></div><button class=\"emd-v80-btn emd-v80-soft\" type=\"button\" onclick=\"closeSettingsV80()\">إغلاق ✕</button></div>\n    <div class=\"emd-v80-setting\">\n      <div class=\"row\"><div><div class=\"title\">🔐 حماية التطبيق</div><p>ضع كلمة مرور حتى لا يفتح التطبيق مباشرة على هذا الجهاز.</p></div><span id=\"emdPasswordStatusV80\" class=\"emd-v80-status\">🔴 غير مفعلة</span></div>\n      <div id=\"emdCurrentPassWrapV81\" style=\"display:none;margin-top:8px\"><input id=\"emdCurrentPassV81\" type=\"password\" placeholder=\"🔑 كلمة المرور الحالية مطلوبة للتغيير\" autocomplete=\"current-password\"></div>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:8px\"><input id=\"emdPassV80\" type=\"password\" placeholder=\"كلمة المرور الجديدة\" autocomplete=\"new-password\"><input id=\"emdPassConfirmV80\" type=\"password\" placeholder=\"تأكيد كلمة المرور الجديدة\" autocomplete=\"new-password\"></div>\n      <div class=\"actions\" style=\"margin-bottom:0\"><button class=\"emd-v80-btn emd-v80-dark\" type=\"button\" onclick=\"savePasswordV80()\">🔐 تفعيل / تغيير</button><button class=\"emd-v80-btn emd-v80-danger\" type=\"button\" onclick=\"disablePasswordV80()\">🔓 إلغاء الحماية</button><button class=\"emd-v80-btn emd-v80-soft\" type=\"button\" onclick=\"lockNowV80()\">🔒 قفل الآن</button></div>\n      <div class=\"emd-v80-note\">ملاحظة أمنية: عند وجود كلمة مرور حالية، لا يمكن تغييرها إلا بعد إدخال كلمة المرور الحالية الصحيحة. زر <b>🔒 تسجيل خروج</b> في أعلى التطبيق يقفل التطبيق ويطلب كلمة المرور عند الدخول مرة أخرى. هذه حماية محلية على الجهاز. عند تحويل التطبيق إلى نظام متصل بقاعدة بيانات سنضيف تسجيل دخول حقيقي بصلاحيات مستخدمين.</div>\n    </div>\n    <div class=\"emd-v80-setting\"><div class=\"title\">💾 النسخ الاحتياطي</div><p>احفظ نسخة من الطلبات والمنتجات والعملاء أو استرجع نسخة سابقة.</p><button class=\"emd-v80-btn emd-v80-dark\" type=\"button\" onclick=\"closeSettingsV80();EMDPosH.backup()\">💾 فتح النسخ الاحتياطي</button></div>\n  </div>\n</div><div id=\"emdLockV80\">\n  <div class=\"emd-v80-lockbox\"><div class=\"emd-v80-lockicon\">🔒</div><h2>EMD Business</h2><p>التطبيق مقفل. أدخل كلمة المرور للمتابعة.</p><input id=\"emdUnlockV80\" type=\"password\" placeholder=\"كلمة المرور\" autocomplete=\"current-password\" onkeydown=\"if(event.key==='Enter')unlockV80()\"><button class=\"emd-v80-btn emd-v80-dark\" style=\"width:100%\" type=\"button\" onclick=\"unlockV80()\">فتح التطبيق 🔓</button><div id=\"emdUnlockMsgV80\" class=\"emd-v80-note\"></div></div>\n</div>";while(d.firstChild)document.body.appendChild(d.firstChild)})();
(function(RW){var PH=RW.EMDPosH,PLS=PH.ls;
var window=new Proxy(RW,{get:function(t,k){if(k==='localStorage')return PLS;var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t}});
/* ---- V73 كلمة المرور ---- */

/* V73: مكان واحد للتحقق من كلمة المرور: تشفير PBKDF2 مع ملح، ترقية تلقائية للصيغة القديمة، وإيقاف مؤقت بعد المحاولات الخاطئة */
(function(){
  var PK='emd_business_password_v80',FAIL='emd_v73_lock_fail',ITER=150000;
  function rec(){try{return JSON.parse(PLS.getItem(PK)||'null')}catch(e){return null}}
  function hex(b){return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,'0')}).join('')}
  function unhex(h){var a=new Uint8Array(h.length/2);for(var i=0;i<a.length;i++)a[i]=parseInt(h.substr(i*2,2),16);return a}
  function fnv(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return ('00000000'+(h>>>0).toString(16)).slice(-8)}
  async function sha(s){try{if(window.crypto&&crypto.subtle)return hex(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))}catch(e){}return fnv(s)}
  async function pbkdf2(p,salt,iter){var k=await crypto.subtle.importKey('raw',new TextEncoder().encode(p),'PBKDF2',false,['deriveBits']);return hex(await crypto.subtle.deriveBits({name:'PBKDF2',salt:salt,iterations:iter,hash:'SHA-256'},k,256))}
  function canPB(){try{return !!(window.crypto&&crypto.subtle&&crypto.subtle.importKey&&crypto.getRandomValues)}catch(e){return false}}
  window.__emdMakePassword=async function(p){
    p=String(p||'');
    if(canPB()){var s=new Uint8Array(16);crypto.getRandomValues(s);return {v:2,salt:hex(s),iter:ITER,hash:await pbkdf2(p,s,ITER),updatedAt:new Date().toISOString()}}
    return {hash:await sha(p),updatedAt:new Date().toISOString()};
  };
  function fails(){try{return JSON.parse(PLS.getItem(FAIL)||'{}')||{}}catch(e){return {}}}
  window.__emdLockWait=function(){var f=fails();return f.until&&f.until>Date.now()?Math.ceil((f.until-Date.now())/1000):0};
  window.__emdVerifyPassword=async function(p){
    var r=rec();if(!r)return true;
    if(window.__emdLockWait()>0)return false;
    p=String(p==null?'':p);var ok=false;
    try{
      if(r.v===2&&r.salt){ok=(await pbkdf2(p,unhex(r.salt),r.iter||ITER))===r.hash}
      else{ok=(await sha(p))===r.hash||(await sha(p.trim()))===r.hash;
        if(ok&&canPB()){try{var n=await window.__emdMakePassword(p);n.updatedAt=r.updatedAt||n.updatedAt;PLS.setItem(PK,JSON.stringify(n))}catch(e){}}}
    }catch(e){ok=false}
    var f=fails();
    if(ok){if(f.n)PLS.removeItem(FAIL)}
    else{f.n=(f.n||0)+1;if(f.n>=5){var secs=Math.min(900,30*Math.pow(2,f.n-5));f.until=Date.now()+secs*1000}try{PLS.setItem(FAIL,JSON.stringify(f))}catch(e){}}
    return ok;
  };
})();

/* ---- V80 ---- */

(function(){
  const PK='emd_business_password_v80';
  const LOCK='emd_business_locked_v80';
  function get(){try{return JSON.parse(PLS.getItem(PK)||'null')}catch(e){return null}}
  function fallbackHash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return ('00000000'+(h>>>0).toString(16)).slice(-8)}
  async function hash(s){try{if(window.crypto&&crypto.subtle){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return Array.from(new Uint8Array(b)).map(x=>x.toString(16).padStart(2,'0')).join('')}}catch(e){}return fallbackHash(s)}
  function status(){const st=document.getElementById('emdPasswordStatusV80');if(!st)return;st.textContent=get()?'🟢 مفعلة':'🔴 غير مفعلة';const w=document.getElementById('emdCurrentPassWrapV81');if(w)w.style.display=get()?'block':'none'}
  window.openSettingsV80=function(){status();const m=document.getElementById('emdSettingsV80');if(m)m.style.display='block'};
  window.closeSettingsV80=function(){const m=document.getElementById('emdSettingsV80');if(m)m.style.display='none'};
  window.savePasswordV80=async function(){
    const a=document.getElementById('emdPassV80'),b=document.getElementById('emdPassConfirmV80'),cur=document.getElementById('emdCurrentPassV81');const p=(a?.value||'').trim();
    const rec=get();
    if(rec){
      const current=(cur?.value||'').trim();
      if(!current){alert('🔐 لتغيير كلمة المرور، أدخل كلمة المرور الحالية أولًا.');cur?.focus();return}
      if(!(await window.__emdVerifyPassword(current))){var w0=window.__emdLockWait();alert(w0?'⏳ محاولات كثيرة خاطئة. حاول بعد '+w0+' ثانية.':'❌ كلمة المرور الحالية غير صحيحة. لا يمكن تغيير كلمة المرور.');cur.value='';cur.focus();return}
    }
    if(p.length<6){alert('كلمة المرور يجب أن تكون 6 أحرف أو أرقام على الأقل.');return}
    if(p!==((b?.value||'').trim())){alert('تأكيد كلمة المرور الجديدة غير مطابق.');return}
    PLS.setItem(PK,JSON.stringify(await window.__emdMakePassword(p)));
    a.value='';b.value='';if(cur)cur.value='';status();alert(rec?'تم تغيير كلمة المرور بنجاح 🔐':'تم تفعيل كلمة المرور 🔐');
  };
  window.disablePasswordV80=async function(){
    const rec=get();if(!rec){alert('الحماية غير مفعلة.');return}
    const p=prompt('أدخل كلمة المرور الحالية لإلغاء الحماية:');if(p===null)return;
    if(!(await window.__emdVerifyPassword(p))){var w1=window.__emdLockWait();alert(w1?'⏳ محاولات كثيرة خاطئة. حاول بعد '+w1+' ثانية.':'كلمة المرور غير صحيحة.');return}
    PLS.removeItem(PK);PLS.removeItem(LOCK);status();alert('تم إلغاء حماية التطبيق.');
  };
  window.lockNowV80=function(){if(!get()){alert('فعّل كلمة المرور أولًا.');return}PLS.setItem(LOCK,'1');closeSettingsV80();showLock();};
  function showLock(){RW.EMDPosH.locked();const m=document.getElementById('emdLockV80');if(m){m.style.display='flex';setTimeout(()=>document.getElementById('emdUnlockV80')?.focus(),80)}}
  window.unlockV80=async function(){
    const rec=get(),input=document.getElementById('emdUnlockV80'),msg=document.getElementById('emdUnlockMsgV80');if(!rec)return;
    var w2=window.__emdLockWait();if(w2){msg.textContent='⏳ محاولات كثيرة خاطئة. حاول بعد '+w2+' ثانية.';input.value='';return}
    if(!(await window.__emdVerifyPassword(input.value))){var w3=window.__emdLockWait();msg.textContent=w3?'⏳ محاولات كثيرة خاطئة. حاول بعد '+w3+' ثانية.':'❌ كلمة المرور غير صحيحة.';input.value='';input.focus();return}
    PLS.removeItem(LOCK);document.getElementById('emdLockV80').style.display='none';RW.EMDPosH.unlocked();msg.textContent='';input.value='';
  };
  window.logoutV82=function(){
    if(!get()){alert('🔐 فعّل كلمة المرور أولًا حتى تتمكن من تسجيل الخروج بأمان.');return}
    try{
      closeSettingsV80();
      document.querySelectorAll('.emd-v80-modal').forEach(function(m){m.style.display='none'});
      PLS.setItem(LOCK,'1');
      showLock();
    }catch(e){PLS.setItem(LOCK,'1');showLock();}
  };
  function init(){status();if(get()&&PLS.getItem(LOCK)==='1')showLock()}
  init();
})();

/* ---- V73 القفل التلقائي ---- */
(function(){
'use strict';
var PK='emd_business_password_v80',AUTO='emd_v73_autolock_min';
function clean(){}
/* 2) القفل التلقائي بعد مدة بدون استخدام */
function hasPass(){try{var r=JSON.parse(PLS.getItem(PK)||'null');return !!(r&&r.hash)}catch(e){return false}}
function mins(){var v=parseInt(PLS.getItem(AUTO)||'15',10);return isFinite(v)?v:15}
var last=Date.now(),hiddenAt=0;
function isLocked(){var m=document.getElementById('emdLockV80');return !!(m&&getComputedStyle(m).display!=='none')}
function lockNow(){
  if(!hasPass()||isLocked())return;
  try{document.querySelectorAll('#emdV66Center.show,#emdV67Center.show,#emdNotifyV317.show,#emdTrackingV316.show').forEach(function(x){x.classList.remove('show')})}catch(e){}
  if(typeof window.logoutV82==='function')window.logoutV82();
}
['pointerdown','keydown','touchstart','scroll'].forEach(function(ev){document.addEventListener(ev,function(){last=Date.now()},{passive:true,capture:true})});
RW.__lkTick=function(){var m=mins();if(m>0&&Date.now()-last>m*60000)lockNow()};
document.addEventListener('visibilitychange',function(){
  if(document.visibilityState==='hidden'){hiddenAt=Date.now();return}
  var m=mins();if(m>0&&hiddenAt&&Date.now()-hiddenAt>m*60000)lockNow();last=Date.now();
});

/* إعداد مدة القفل داخل نافذة الإعدادات */
function addSetting(){
  var st=document.getElementById('emdPasswordStatusV80');if(!st||document.getElementById('emdV73Auto'))return;
  var box=st.closest('.emd-v80-box,.emd-v80-card')||st.parentNode;
  var row=document.createElement('div');row.id='emdV73Auto';
  row.style.cssText='margin:12px 0;padding:12px;border:1px solid #e5eaf0;border-radius:14px;background:#fafbfd;font-size:14px;direction:rtl';
  row.innerHTML='<div style="font-weight:700;margin-bottom:6px">🔒 القفل التلقائي</div><div style="color:#687384;font-size:12px;margin-bottom:8px">يقفل التطبيق إذا تُرك بدون استخدام، أو لما ترجع له بعد غياب. يعمل فقط إذا كانت كلمة المرور مفعّلة.</div>'+
    '<select id="emdV73AutoSel" style="width:auto;padding:9px 10px;border:1px solid #e5eaf0;border-radius:11px;font:inherit;background:#fff"><option value="5">بعد 5 دقائق</option><option value="15">بعد 15 دقيقة</option><option value="30">بعد 30 دقيقة</option><option value="60">بعد ساعة</option><option value="0">بدون قفل تلقائي</option></select>';
  box.appendChild(row);
  var sel=document.getElementById('emdV73AutoSel');sel.value=String(mins());
  sel.onchange=function(){try{PLS.setItem(AUTO,sel.value)}catch(e){}};
}
var oldOpen=window.openSettingsV80;
if(typeof oldOpen==='function'){window.openSettingsV80=function(){var r=oldOpen.apply(this,arguments);addSetting();return r}}
window.EMDSecurityV73={lockNow:lockNow,clean:clean};
})();

/* ---- V74 ---- */

(function(){
'use strict';
if(window.__EMD_V74_EYE__)return;window.__EMD_V74_EYE__=true;
/* زر 👁 لإظهار/إخفاء كلمة المرور في كل حقول كلمة المرور */
function add(inp){
  if(!inp||inp.__emd74||!inp.parentNode)return;inp.__emd74=true;
  var w=document.createElement('span');w.className='emd74-pw';
  /* نحافظ على عرض الحقل الأصلي داخل الشبكة */
  var cs=inp.getAttribute('style')||'';if(/flex\s*:/.test(cs))w.style.flex=inp.style.flex;
  inp.parentNode.insertBefore(w,inp);w.appendChild(inp);
  var b=document.createElement('button');b.type='button';b.className='emd74-eye';b.tabIndex=-1;
  function set(show){inp.type=show?'text':'password';b.textContent=show?'🙈':'👁️';b.classList.toggle('on',show);b.setAttribute('aria-label',show?'إخفاء كلمة المرور':'إظهار كلمة المرور');b.title=b.getAttribute('aria-label')}
  set(false);
  b.addEventListener('mousedown',function(e){e.preventDefault()});
  b.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();var pos=inp.selectionStart;set(inp.type==='password');try{inp.focus();if(pos!=null)inp.setSelectionRange(pos,pos)}catch(x){}});
  inp.__emd74hide=function(){set(false)};
  w.appendChild(b);
}
function scan(root){(root||document).querySelectorAll('input[type="password"]').forEach(add)}
/* إخفاء الكلمات تلقائيًا بعد الحفظ أو الفتح أو الإغلاق */
function hideAll(){document.querySelectorAll('.emd74-pw>input').forEach(function(i){if(i.__emd74hide)i.__emd74hide()})}
['savePasswordV80','unlockV80','closeSettingsV80','disablePasswordV80','logoutV82','lockNowV80'].forEach(function(n){
  var f=window[n];if(typeof f!=='function'||f.__emd74)return;
  var g=function(){hideAll();return f.apply(this,arguments)};g.__emd74=true;window[n]=g;
});
function init(){scan()}
init();RW.__lkScan=scan;
})();

(function(){var o=window.openSettingsV80;window.openSettingsV80=function(){var r=o.apply(this,arguments);try{RW.__lkScan()}catch(e){}return r}})();
})(window);
