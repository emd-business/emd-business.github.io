/* ---------- وحدات الإعدادات المنقولة من التطبيق الحالي (lazy/settings.js، مولَّدة بـ tools/port-settings.py) ---------- */
var SET_P=null;
/* مثل غلاف نقطة البيع، مع قراءة/كتابة «emd_business_v1» = بيانات التطبيق الجديد (النسخ والاستعادة)، وطول التخزين الحقيقي */
function setHelpers(){var h=posHelpers(),L=h.ls;
  h.ls={getItem:function(k){return k===LIVE_KEY?JSON.stringify(db):L.getItem(k)},setItem:function(k,v){if(k!==LIVE_KEY)return L.setItem(k,v);var d=JSON.parse(v);db=fix(d);dirty();saveNow();render()},removeItem:function(k){if(k!==LIVE_KEY)L.removeItem(k)},
    get length(){try{return LS.length}catch(e){return 0}},key:function(i){try{return LS.key(i)}catch(e){return null}}};
  h.alias.EMDArchiveV67={exportAll:function(){return archAll()}};return h}
function setLoad(){if(window.EMDBusinessProfileV333&&window.EMDOrderTemplatesV121)return Promise.resolve();if(SET_P)return SET_P;window.EMDSetH=window.EMDSetH||setHelpers();
  SET_P=loadScript('settings.js?v=1').catch(function(e){SET_P=null;throw e});return SET_P}
function setRun(fn){setLoad().then(fn,function(){toast('تعذّر الفتح. تحقّق من الاتصال.')})}
/* المدير = كل الصلاحيات (حتى يُنقل نظام الموظفين) */
function stOwner(){try{var w=window.EMDStaffV108&&EMDStaffV108.who();return !window.EMDStaffV108||!!(w&&w.owner)}catch(e){return true}}
/* اقتراح إرسال الفاتورة بعد الاستلام (V117) يُفحص بعد كل حفظ */
function setAfterSave(){try{if(window.EMDInvPromptV117)EMDInvPromptV117.check()}catch(e){}}
/* تثبيت التطبيق على الجوال (V122): نفس الرسائل؛ لا تسجيل لعامل الخدمة في التجربة */
var PWA_EV=null;window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();PWA_EV=e});
function pwaStd(){try{return window.matchMedia('(display-mode: standalone)').matches||navigator.standalone===true||/android-app:/.test(document.referrer)}catch(e){return false}}
function pwaInstall(){
  if(pwaStd()){toast('✅ التطبيق مثبّت ويعمل الآن كتطبيق.');return}
  if(PWA_EV){var e=PWA_EV;PWA_EV=null;try{e.prompt()}catch(x){}return}
  if(/iphone|ipad|ipod/i.test(navigator.userAgent)){toast('📱 على آيفون: اضغط زر المشاركة في Safari ثم «إضافة إلى الشاشة الرئيسية».');return}
  toast('من قائمة المتصفح (⋮) اختر «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية».')}
/* ---------- الموظفون والصلاحيات (V108 + V111 في lazy/staff.js، مولَّدة بـ tools/port-staff.py) ---------- */
var ST_P=null;
function stCfgOn(){try{var c=JSON.parse(POS_LS.getItem('emd_v108_staff')||'null');return !!(c&&c.enabled)}catch(e){return false}}
function stLoad(){if(window.EMDStaffV108)return Promise.resolve(window.EMDStaffV108);if(ST_P)return ST_P;window.EMDPosH=window.EMDPosH||posHelpers();
  ST_P=loadScript('staff.js?v=1').then(function(){return window.EMDStaffV108},function(e){ST_P=null;throw e});return ST_P}
function stCan(p){try{return !window.EMDStaffV108||!EMDStaffV108.on()||EMDStaffV108.can(p)}catch(e){return true}}
function stDeny(p){if(stCan(p))return false;toast('🔒 ليست لديك صلاحية لهذا الإجراء.');return true}
function stWho(){try{var w=window.EMDStaffV108&&EMDStaffV108.on()&&EMDStaffV108.who();return w?{id:w.id,name:w.name}:null}catch(e){return null}}
function stTick(){try{if(window.__stTick)window.__stTick();if(window.__stHide)window.__stHide()}catch(e){}}
/* الصلاحية التي يحتاجها كل زر في التطبيق الجديد (مقابل permFor في V108) */
var ST_ACT={newOrder:'create',importMsg:'create',manualOrder:'create',doParse:'create',pasteMsg:'create',orderProduct:'create',
  cancelOrder:'delete',advance:'status',setSt:'status',packOpen:'status',shipOpen:'status',recvOne:'status',bulkStart:'status',bulkFinish:'status',bulkRecv:'status',
  finance:'finance',addProduct:'products',addStock:'products',quickEdit:'products',editProduct:'products',delProduct:'products',pImg:'products',
  cEdit:'customers',cNew:'customers',settings:'settings',cloud:'settings',recopy:'settings',openFile:'settings',modes:'settings',posSet:'settings',closing:'closing'};
var ST_GO={customers:'customers',perf:'finance'};
function stPermFor(el){if(el.closest('#emd108Lock,.emd108-banner,[data-emd108-skip]'))return '';var a=el.getAttribute('data-act'),g=el.getAttribute('data-go');return (a&&ST_ACT[a])||(g&&ST_GO[g])||''}
function stViewGuard(can){var v={customers:'customers',perf:'finance'}[state.view];if(v&&!can(v)){state.view='home';render()}}
/* ---------- قفل التطبيق بكلمة مرور (V73 + V74 + V80 في lazy/lock.js، مولَّدة بـ tools/port-lock.py) ---------- */
var LK_P=null;
function lkHas(){try{var r=JSON.parse(POS_LS.getItem('emd_business_password_v80')||'null');return !!(r&&r.hash)}catch(e){return false}}
function lkLoad(){if(window.unlockV80)return Promise.resolve();if(LK_P)return LK_P;window.EMDPosH=window.EMDPosH||posHelpers();
  LK_P=loadScript('lock.js?v=1').then(lkCoverOff,function(e){LK_P=null;lkCoverOff();throw e});return LK_P}
/* غطاء مؤقت حتى تُحمَّل شاشة القفل، فلا تظهر البيانات لحظة الفتح */
function lkCover(){if(POS_LS.getItem('emd_business_locked_v80')!=='1'||$('lkCover'))return;var d=document.createElement('div');d.id='lkCover';document.body.appendChild(d)}
function lkCoverOff(){var d=$('lkCover');if(d)d.remove()}
function lkBoot(){if(!lkHas())return;lkCover();lkLoad().catch(function(){})}
function lkOpen(){lkLoad().then(function(){openSettingsV80()},function(){toast('تعذّر الفتح. تحقّق من الاتصال.')})}
function lkTick(){try{if(window.__lkTick)__lkTick()}catch(e){}}
