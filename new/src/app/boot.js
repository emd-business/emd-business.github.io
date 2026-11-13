/* ---------- 8) التشغيل ---------- */
function welcome(){
  var live=lsGet(LIVE_KEY);
  $('view').innerHTML='<div class="welcome"><img src="logo.svg" alt=""><h2>التطبيق الجديد — تجربة</h2><p class="note">هذه نسخة تجريبية مبنية من الصفر. لا تغيّر أي شيء في تطبيقك الحالي. اختر البيانات التي تريد التجربة عليها:</p>'+
    (live?'<button class="btn dark" data-act="recopy">📋 نسخة من بياناتي في التطبيق</button>':'')+
    '<button class="btn'+(live?'':' dark')+'" data-act="openFile">📂 فتح ملف نسخة احتياطية</button><button class="btn" data-act="demo" data-n="40">🧪 بيانات تجريبية</button><button class="btn" data-act="demo" data-n="1500">⚡ 1500 طلب لاختبار السرعة</button></div>';
  $('sbx').innerHTML='<span>🧪 <b>نسخة تجريبية من التطبيق الجديد</b></span>';
}
function boot(){
  if(!db){var live=lsGet(LIVE_KEY);if(load()){}else if(live&&!meta.source){try{adopt(JSON.parse(live),'live')}catch(e){}}}
  if(!db&&!CLOUD_SANDBOX)adopt({orders:[],products:[],customers:[]},'new');  /* مستخدم جديد: يبدأ بتطبيق فارغ */
  if(!db)return welcome();
  db=fix(db);dirty();if(stockReconcile())save();syPrime();banner();
  storeRow();
$('homeImgIn').addEventListener('change',function(){var f=this.files&&this.files[0];this.value='';homeImgPicked(f)});
  render();setTimeout(modesFirstRun,1500);
}
/* عامل الخدمة (sw.js في جذر الموقع): يُسجَّل فقط عندما تعمل هذه الصفحة في الجذر (بعد النشر)؛ في /new/ يبقى عامل التطبيق الحالي */
if('serviceWorker' in navigator&&/^\/(index\.html)?$/.test(location.pathname)&&(location.protocol==='https:'||location.hostname==='localhost')){window.addEventListener('load',function(){try{navigator.serviceWorker.register('/sw.js',{scope:'/'}).catch(function(){})}catch(e){}})}
langBoot();icApply();boot();lkBoot();bkBoot();lookBoot();if(stCfgOn())stLoad().catch(function(){});cloudBoot();storeBoot();puBoot();
setTimeout(function(){nfLoad().then(nfBadge,function(){})},900);setTimeout(trBoot,2500);setTimeout(function(){setLoad().catch(function(){})},2000);setTimeout(archRefresh,2500);setTimeout(trEnsureAll,3000);
setInterval(function(){coTick();lkTick();lookTick();bkTick();cloudTick();storeTick();trTick();puTick();supTick();archTick();archAutoTick();if(!$('sheets').children.length)closingTick();},10000);
/* الساعة في الرئيسية: الثواني كل ثانية مثل V88 (تحديث نص فقط) */
setInterval(function(){if(document.hidden||state.view!=='home')return;var c=document.querySelector('#view .clock');if(!c)return;var n=new Date(),h=n.getHours();c.innerHTML='<bdi>'+pad(h%12||12)+':'+pad(n.getMinutes())+'<span class="s">:'+pad(n.getSeconds())+'</span></bdi> <span>'+(h<12?'ص':'م')+'</span>'},1000);
window.EMDRebuild={db:function(){return db},save:save,cloudCheck:cloudCheck,trPoll:trPoll,render:render,index:index,total:total,payState:payState,status:status};
