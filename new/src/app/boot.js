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
  if(!db)return welcome();
  db=fix(db);dirty();if(stockReconcile())save();syPrime();banner();
  var sn=storeName();if(sn){$('storeName').textContent='🏪 '+sn;$('storeName').classList.remove('hide')}
$('homeImgIn').addEventListener('change',function(){var f=this.files&&this.files[0];this.value='';homeImgPicked(f)});
  render();setTimeout(modesFirstRun,1500);
}
boot();if(stCfgOn())stLoad().catch(function(){});cloudBoot();storeBoot();puBoot();
setTimeout(function(){nfLoad().then(nfBadge,function(){})},900);setTimeout(trBoot,2500);setTimeout(function(){setLoad().catch(function(){})},2000);setTimeout(archRefresh,2500);setTimeout(trEnsureAll,3000);
setInterval(function(){coTick();cloudTick();storeTick();trTick();puTick();supTick();archTick();if(!$('sheets').children.length)closingTick();if(state.view==='home'&&!$('sheets').children.length){var c=document.querySelector('.clock');if(c){var n=new Date(),h=n.getHours();c.innerHTML=pad(h%12||12)+':'+pad(n.getMinutes())+' <span>'+(h<12?'ص':'م')+'</span>'}}},10000);
window.EMDRebuild={db:function(){return db},save:save,cloudCheck:cloudCheck,trPoll:trPoll,render:render,index:index,total:total,payState:payState,status:status};
