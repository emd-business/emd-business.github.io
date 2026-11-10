/* ---------- المظهر (V89/V409): القراءة والتطبيق الأساسي هنا؛ نافذة المظهر والثيمات ومحرك الألوان في lazy/look.js (tools/port-look.py) ---------- */
var LOOK_DEF={accent:'#18202a',mode:'light',density:'comfortable',size:'m',owner:'',clock:true,hijri:true,homeImg:'custom',frame:'none'};
function lookGet(){var v=JSON.parse(JSON.stringify(LOOK_DEF)),x=null;try{x=JSON.parse(POS_LS.getItem('emd_v89_look')||'null')}catch(e){}
  if(!x){try{var o=JSON.parse(POS_LS.getItem('emd_appearance_v335')||'null');if(o){if(o.accent)v.accent=o.accent;if(o.density)v.density=o.density;if(o.text==='large')v.size='l'}}catch(e){}return v}
  Object.keys(v).forEach(function(k){if(x[k]!==undefined&&x[k]!==null)v[k]=x[k]});return v}
function lookOwner(){return String(lookGet().owner||'').trim()}
function lookLogo(){var l=POS_LS.getItem('emd_v89_logo')||'';return /^(data:image\/|https:\/\/)/.test(l)?l:''}
/* صورة الرئيسية: نفس مفتاح المظهر (emd_v90_homeimg)؛ ننقل مفتاح التجربة القديم مرة واحدة */
function homeImgGet(){return POS_LS.getItem('emd_v90_homeimg')||''}
function homeImgSet(v){if(v)POS_LS.setItem('emd_v90_homeimg',v);else POS_LS.removeItem('emd_v90_homeimg')}
function lookMigrate(){if(!CLOUD_SANDBOX)return;var o=lsGet('emd_rb_v90_homeimg');if(o==null)return;if(lsGet('emd_rb_emd_v90_homeimg')==null)homeImgSet(o);try{LS.removeItem('emd_rb_v90_homeimg')}catch(e){}}
/* لون أو وضع أو ثيم غير الافتراضي → نحمّل محرك الألوان فورًا */
function lookFancy(v){return String(v.accent||'').toLowerCase()!=='#18202a'||v.mode!=='light'||!!POS_LS.getItem('emd_theme_v409')}
function lookBody(v){var b=document.body,z={s:.92,m:1,l:1.1,xl:1.2}[v.size]||1;b.style.zoom=z===1?'':String(z);b.classList.toggle('emd335-compact',v.density==='compact')}
var LOOK_P=null;
function lookLoad(){if(window.__lookSweep)return Promise.resolve();if(LOOK_P)return LOOK_P;window.EMDPosH=window.EMDPosH||posHelpers();
  LOOK_P=loadScript('look.js?v=1').catch(function(e){LOOK_P=null;throw e});return LOOK_P}
function lookBoot(){lookMigrate();var v=lookGet();lookBody(v);if(lookFancy(v))lookLoad().catch(function(){})}
function lookOpen(){lookLoad().then(function(){EMDLookV89.open()},function(){toast('تعذّر الفتح. تحقّق من الاتصال.')})}
function lookSweep(){try{if(window.__lookSweep)__lookSweep()}catch(e){}}
function lookTick(){try{if(window.__lookTick)__lookTick()}catch(e){}}
/* متغيرات ألوان التطبيق الجديد للوضع الداكن واللون (المحرك يعالج الألوان الثابتة) */
function lookNative(dark,acc){var r=document.documentElement.style;
  if(acc)r.setProperty('--navy','var(--emd89-acc)');else r.removeProperty('--navy');
  var s=$('EMD-V89-dark-rb');
  if(dark&&!s){s=document.createElement('style');s.id='EMD-V89-dark-rb';s.textContent=':root{--bg:#0d1218;--card:#161d26;--ink:#e6e9ee;--mute:#9aa5b4;--line:#2a3440;--soft:#1e2731}html,body{background:#0d1218;color:#e6e9ee}';document.head.appendChild(s)}
  if(!dark&&s)s.remove()}
/* اسم المتجر وشعاره تحت اسم التطبيق (مثل .emd89-store) */
function storeRow(){var el=$('storeName');if(!el)return;var n=storeName(),lg=lookLogo();el.classList.toggle('hide',!n&&!lg);
  el.innerHTML=(n||lg)?(lg?'<img src="'+esc(lg)+'" alt="">':'<i>🏪</i>')+'<span>'+esc(n||'متجري')+'</span>':''}
