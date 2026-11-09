/* ---------- وحدات الإعدادات المنقولة من التطبيق الحالي (lazy/settings.js، مولَّدة بـ tools/port-settings.py) ---------- */
var SET_P=null;
function setLoad(){if(window.EMDBusinessProfileV333&&window.EMDOrderTemplatesV121)return Promise.resolve();if(SET_P)return SET_P;window.EMDPosH=window.EMDPosH||posHelpers();
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
