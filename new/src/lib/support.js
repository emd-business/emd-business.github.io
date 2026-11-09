/* ---------- المساعدة والدعم: أسئلة شائعة، وإرسال بلاغ لفريق التطبيق، وقراءة الردود ----------
   الملف lazy/support.js مولَّد من V101 (tools/port-support.py). في التجربة: قراءة البلاغات والردود مسموحة، والإرسال ممنوع. */
var supLoading=null,supLast=0,supChk=0;
function supHelpers(){return {api:function(){return {url:CL_URL,key:CL_KEY,version:'new',token:cToken,uid:cUid,device:function(){return CLOUD_SANDBOX?'تجربة التطبيق الجديد':'التطبيق الجديد'}}},
  session:function(){try{return cSession()}catch(e){return null}},db:function(){return db||{}},sizeKb:function(){try{return Math.round(JSON.stringify(db).length/1024)}catch(e){return 0}},
  canWrite:cloudCanWrite,push:function(){return cloudCanWrite()?cloudPush():Promise.resolve()},after:function(){dirty();save();render()},lk:function(k){return CLOUD_SANDBOX?'emd_rb_'+k.replace(/^emd_/,''):k}}}
function supLoad(){if(window.EMD101)return Promise.resolve(window.EMD101);if(supLoading)return supLoading;window.EMDSupH=supHelpers();
  supLoading=loadScript('support.js?v=2').then(function(){if(!window.EMD101)throw new Error('support');return window.EMD101},function(e){supLoading=null;throw e});return supLoading}
function supportOpen(){supLoad().then(function(X){X.open('home')},function(){toast('تعذّر فتح المساعدة. تحقّق من الاتصال.')})}
/* الردود الجديدة: فحص كل 30 دقيقة لمن سجّل الدخول، وأول فحص بعد 6 ثوانٍ من الفتح */
/* وتعديلات الدعم المعلّقة (V222): كل 10 دقائق */
function supTick(){if(document.hidden||!cUid()||performance.now()<6000)return;var n=Date.now(),mine=!supLast||n-supLast>=18e5,chk=!supChk||n-supChk>=6e5;if(!mine&&!chk)return;
  if(mine)supLast=n;if(chk)supChk=n;supLoad().then(function(X){if(mine)X.loadMine();if(chk&&window.EMDAssistV222)EMDAssistV222.check()},function(){})}
