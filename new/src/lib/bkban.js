/* تذكير النسخة الاحتياطية (V122) أعلى الصفحة كما في التطبيق الحالي.
   فحص خفيف هنا؛ ولا يُحمَّل ملف الإعدادات (وفيه شريط التذكير نفسه) إلا إذا كان التذكير مستحقًّا. */
var BK_LAST=0;
function bkNeed(){try{
  if(document.getElementById('emd122Ban')||!(db.orders||[]).length)return false;
  var now=Date.now(),c=JSON.parse(POS_LS.getItem('emd_v122_cfg')||'{}')||{};
  var u=0;for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);u+=k.length+String(localStorage.getItem(k)||'').length}
  if(u>=3500000&&!(c.stSnooze>now))return true;
  if(c.on===false||c.snooze>now)return false;
  var v=JSON.parse(POS_LS.getItem('emd_v122_lastbk')||'null'),t=v?new Date(v).getTime():0;
  return !(t>0)||now-t>(c.hours==null?24:c.hours)*36e5}catch(e){return false}}
function bkTick(){var now=Date.now();if(now-BK_LAST<60000)return;BK_LAST=now;
  if(window.__bkTick){try{__bkTick()}catch(e){}return}
  if(bkNeed())setLoad().then(function(){setTimeout(function(){if(window.__bkTick)try{__bkTick()}catch(e){}},4200)}).catch(function(){})}
function bkBoot(){setTimeout(function(){BK_LAST=0;bkTick()},3000)}
