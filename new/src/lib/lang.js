/* اللغة (V98): العربية افتراضيًا. اختيار English يحمّل lang.js (القاموس والترجمة عند العرض) ويعيد فتح التطبيق.
   في العربية لا يُحمَّل شيء؛ نُبقي فقط window.EMDLangV98 الذي تسأله الأدوات المنقولة عن اللغة. */
function langGet(){try{return POS_LS.getItem('emd_v98_lang')==='en'?'en':'ar'}catch(e){return 'ar'}}
function langSet(l){try{POS_LS.setItem('emd_v98_lang',l==='en'?'en':'ar')}catch(e){}location.reload()}
function langToggle(){langSet(langGet()==='en'?'ar':'en')}
function langDesc(){return langGet()==='en'?'الحالية: English. اضغط للتبديل إلى العربية.':'الحالية: العربية. اضغط للتبديل إلى English.'}
window.EMDLangV98={lang:function(){return 'ar'},set:langSet,t:function(s){return String(s)}};
function langBoot(){if(langGet()!=='en')return;window.EMDLangV98.lang=function(){return 'en'};window.EMDPosH=window.EMDPosH||posHelpers();
  loadScript('lang.js?v=1').catch(function(){window.EMDLangV98={lang:function(){return 'ar'},set:langSet,t:function(s){return String(s)}};toast('تعذّر تحميل الواجهة الإنجليزية.')})}
/* زر «🌐 English» أعلى معالج الإعداد (كما في التطبيق الحالي) */
function langWiz(){var h=document.querySelector('#emd92Ov .emd92-hero');if(!h||h.parentNode.querySelector('.emd98-wiz'))return;var en=langGet()==='en';
  var b=document.createElement('button');b.type='button';b.className='emd98-lang emd98-wiz emd-no-i18n';b.style.cssText='display:block;margin:0 auto 10px';
  b.textContent=en?'🌐 عربي':'🌐 English';b.addEventListener('click',function(e){e.stopPropagation();langToggle()});h.parentNode.insertBefore(b,h)}
document.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('#emd92Ov'))setTimeout(langWiz,0)});
