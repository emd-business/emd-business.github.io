/* رأس الصفحة كما في التطبيق الحالي (V410): ظاهر دائمًا «⚙️ الإعدادات» و«🔄» و«☰ المزيد»،
   و«☰ المزيد» يُظهر بقية الأزرار في الرأس نفسه: الحساب، English، مساعدة، الموظفين، استيراد طلب، تسجيل خروج، التحكم برسائل واتساب */
function headToggle(){var on=document.body.classList.toggle('hopen');var s=document.querySelector('#hMore span');if(s)s.textContent=on?'إخفاء':'المزيد'}
function headPaint(){
  var lg=$('langChip');if(lg)lg.textContent=langGet()==='en'?'🌐 عربي':'🌐 English';
  var lo=$('logoutChip');if(lo)lo.classList.toggle('hide',!lkHas());
  var st=$('stStub');if(st){if(window.EMDStaffV108)st.remove();else st.classList.toggle('hide',POS_LS.getItem('emd_v111_hidestaff')==='1')}
}
function headStaff(){stLoad().then(function(S){headPaint();S.open()},function(){toast('تعذّر الفتح. تحقّق من الاتصال.')})}
function headLogout(){lkLoad().then(function(){if(typeof window.logoutV82==='function')window.logoutV82()},function(){toast('تعذّر الفتح. تحقّق من الاتصال.')})}
/* «🔄» يحفظ ثم يعيد فتح الصفحة بآخر نسخة (V147) */
function headReload(b){if(b){b.classList.add('spin');b.disabled=true}try{saveNow()}catch(e){}setTimeout(function(){location.reload()},200)}
var WC_P=null;
function waCtlOpen(){window.EMDPosH=window.EMDPosH||posHelpers();if(!WC_P)WC_P=loadScript('wactl.js?v=1').catch(function(e){WC_P=null;throw e});
  WC_P.then(function(){window.emdV192Open()},function(){toast('تعذّر الفتح. تحقّق من الاتصال.')})}
