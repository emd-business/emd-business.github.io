/* ---------- إشعارات الجوال ----------
   الاشتراك عبر دالة push نفسها في التطبيق الحالي (تصل طلبات المتجر حتى والتطبيق مغلق).
   تنبيهات التقييم والاستلام والمخزون تُعرض من الجهاز نفسه عند ظهورها.
   في التجربة: الإشعارات المحلية تعمل، أما ربط الجهاز بالخادم فمتوقف. */
var PU_FN='https://pfkstppvnebagbdckgbu.supabase.co/functions/v1/push',PU_KEY='sb_publishable__tfVZiyph-xyB87GzmHrkQ_9DVpPHJ0';
var PU_CK=CLOUD_SANDBOX?'emd_rb_push':'emd161_push',PU_SK=CLOUD_SANDBOX?'emd_rb_push_seen':'emd161_seen';
var PU_KINDS=[['store','🛍️ طلب جديد من المتجر','يصل حتى لو كان التطبيق مغلقًا (يتطلب تسجيل الدخول).'],['customer','⭐ تأكيد الاستلام والتقييم','عندما يؤكد العميل الاستلام أو يقيّم الطلب.'],
  ['stock','📦 نفاد المخزون أو قربه','عندما تصل كمية منتج إلى حد التنبيه.'],['summary','📊 ملخص اليوم','تذكير تقفيلة اليوم في وقتها.']];
function puCfg(){var c={};try{c=JSON.parse(lsGet(PU_CK)||'{}')||{}}catch(e){}c.k=c.k||{};PU_KINDS.forEach(function(k){if(c.k[k[0]]===undefined)c.k[k[0]]=true});return c}
function puSave(c){lsSet(PU_CK,JSON.stringify(c))}
function puSup(){return 'Notification' in window&&'serviceWorker' in navigator&&'PushManager' in window}
function puIos(){return /iphone|ipad|ipod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1)}
function puStd(){try{return matchMedia('(display-mode: standalone)').matches||navigator.standalone===true}catch(e){return false}}
function puPerm(){return 'Notification' in window?Notification.permission:'unsupported'}
function puCall(body,auth){if(body.action!=='key'&&!cloudCanWrite())return Promise.reject(Object.assign(new Error('sandbox'),{sandbox:true}));
  var go=function(tk){var h={apikey:PU_KEY,'Content-Type':'application/json'};if(tk)h['x-emd-token']=tk;
    return fetch(PU_FN,{method:'POST',headers:h,body:JSON.stringify(body)}).then(function(r){return r.json().catch(function(){return {}}).then(function(j){if(!r.ok||!j.ok)throw new Error(j.error||'HTTP '+r.status);return j})})};
  if(!auth)return go('');if(!cUid())return Promise.reject(Object.assign(new Error('login'),{login:true}));return cToken().then(go)}
function puReg(){return navigator.serviceWorker.getRegistration('/').then(function(r){if(!r)throw new Error('nosw');return r})}
function puB64(s){s=(s+'='.repeat((4-s.length%4)%4)).replace(/-/g,'+').replace(/_/g,'/');var r=atob(s),a=new Uint8Array(r.length);for(var i=0;i<r.length;i++)a[i]=r.charCodeAt(i);return a}
function puShow(title,o){o=o||{};if(puPerm()!=='granted')return Promise.resolve(false);
  return puReg().then(function(r){return r.showNotification(title,{body:o.body||'',tag:o.tag,icon:'../icon-192.png',badge:'../icon-192.png',dir:'rtl',lang:'ar',data:{go:o.go||''}}).then(function(){return true})})
    .catch(function(){try{new Notification(title,{body:o.body||'',tag:o.tag});return true}catch(e){return false}})}
function puSubscribe(){return puReg().then(function(r){return r.pushManager.getSubscription().then(function(s){return s||puCall({action:'key'}).then(function(j){return r.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:puB64(j.key)})})})})}
function puLink(c){return puSubscribe().then(function(s){var j=s.toJSON();c.ep=s.endpoint;puSave(c);return puCall({action:'subscribe',endpoint:j.endpoint,keys:j.keys,kinds:c.k},true)}).then(function(){c.srv=true;c.srvAt=Date.now();puSave(c)})}
function puEnable(){var c=puCfg();if(!puSup()){puPaint('unsupported');return}puPaint('busy');
  Notification.requestPermission().then(function(p){if(p!=='granted'){c.on=false;puSave(c);puPaint(p==='denied'?'denied':'idle');return}
    c.on=true;c.srv=false;puSave(c);puMarkSeen();if(!cloudCanWrite()){puPaint('sandbox');return}return puLink(c).then(function(){puPaint()},function(e){puPaint(e.sandbox?'sandbox':e.login?'nologin':'srverr')})})}
function puDisable(){var c=puCfg();c.on=false;c.srv=false;puSave(c);
  if(cloudCanWrite())puReg().then(function(r){return r.pushManager.getSubscription()}).then(function(s){if(!s)return;var ep=s.endpoint;s.unsubscribe().catch(function(){});if(cUid())puCall({action:'unsubscribe',endpoint:ep},true).catch(function(){})}).catch(function(){});
  puPaint('idle')}
function puResync(){var c=puCfg();if(!c.on||puPerm()!=='granted'||!puSup()||!cUid()||!cloudCanWrite())return;if(c.srv&&c.srvAt&&Date.now()-c.srvAt<864e5)return;puLink(c).then(function(){puPaint()},function(){})}
/* ما يستحق التنبيه: أحداث العملاء وطلبات المتجر، والمخزون عند حد التنبيه */
function puCollect(){var out=[],ev;try{ev=JSON.parse(lsGet(TR_EVENTS)||'[]')}catch(e){ev=[]}
  (Array.isArray(ev)?ev:[]).forEach(function(e){if(!e||e.read)return;var st=e.stars?' '+'★★★★★'.slice(0,e.stars):'';
    if(e.kind==='store')out.push({id:'ev_'+e.id,k:'store',t:'🛍️ طلب جديد من المتجر',b:(e.name||'زبون')+(e.comment?' · '+e.comment:''),go:'store'});
    else out.push({id:'ev_'+e.id,k:'customer',t:e.kind==='rating'?'⭐ تقييم جديد'+st:'📬 العميل أكّد الاستلام'+st,b:'#'+String(e.orderId||'').replace(/^#+/,'')+' — '+(e.name||'بدون اسم')+(e.comment?' · '+e.comment:''),go:'order:'+e.orderId})});
  db.products.forEach(function(p){var min=p.minStock!=null?p.minStock:(p.lowStock!=null?p.lowStock:p.alertAt);if(min==null||min==='')return;var q=num(p.stock),m=num(min);
    if(q<=m)out.push({id:'st_'+(p.id||p.name)+'_'+(q<=0?0:1),k:'stock',t:q<=0?'📦 نفد المخزون':'📦 المخزون قارب على النفاد',b:p.name+' — المتوفر: '+q+' · حد التنبيه: '+m,go:'stock'})});
  return out}
function puSeen(){try{return JSON.parse(lsGet(PU_SK)||'{}')||{}}catch(e){return {}}}
function puMarkSeen(){var s={};puCollect().forEach(function(x){s[x.id]=Date.now()});lsSet(PU_SK,JSON.stringify(s))}
var puLast=0;
function puTick(){if(Date.now()-puLast<30000)return;puLast=Date.now();var c=puCfg();if(!c.on||puPerm()!=='granted'||!db)return;
  var s=puSeen(),now=Date.now(),live={},ch=false;
  puCollect().forEach(function(x){live[x.id]=1;if(s[x.id])return;s[x.id]=now;ch=true;if(c.k[x.k]===false||(x.k==='store'&&c.srv)||(!document.hidden&&x.k!=='stock'))return;puShow(x.t,{body:x.b,tag:x.id,go:x.go})});
  Object.keys(s).forEach(function(k){if(!live[k]&&now-s[k]>3*864e5){delete s[k];ch=true}});if(ch)lsSet(PU_SK,JSON.stringify(s))}
/* الضغط على الإشعار يفتح ما يخصه */
function puGo(g){g=String(g||'');if(g==='store'||g.indexOf('store:')===0)storeOrdersOpen();else if(g.indexOf('order:')===0)openOrder(g.slice(6));else if(g==='stock'){state.view='stock';render()}}
function puBoot(){if('serviceWorker' in navigator)navigator.serviceWorker.addEventListener('message',function(e){if(e.data&&e.data.emd161go!==undefined)setTimeout(function(){puGo(e.data.emd161go)},400)});
  try{var q=new URLSearchParams(location.search).get('emdgo');if(q){setTimeout(function(){puGo(q)},600);history.replaceState(null,'',location.pathname+location.hash)}}catch(e){}
  setTimeout(puResync,8000);document.addEventListener('visibilitychange',function(){if(!document.hidden)puResync()})}
/* النافذة */
var puBox=null;
function pushSheet(){puBox=openSheet('<div class="sh"><div><h3>🔔 الإشعارات</h3><small>تنبيهات على جوالك بالطلبات الجديدة وما يحتاج انتباهك.</small></div><button class="x" data-act="close">إغلاق ✕</button></div>'+
  (CLOUD_SANDBOX?'<p class="note amb">🧪 في التجربة تعمل الإشعارات على هذا الجهاز فقط، ولا يُربط الجهاز بالخادم.</p>':'')+
  '<div class="cmsg show" id="puSt"></div><div class="foot"><button class="btn dark" id="puMain" data-pu="main"></button></div>'+
  '<div id="puKinds">'+PU_KINDS.map(function(k){return '<label class="chk"><input type="checkbox" data-puk="'+k[0]+'"> <span><b>'+k[1]+'</b><br><small class="mute">'+k[2]+'</small></span></label>'}).join('')+'</div>'+
  '<div class="foot"><button class="btn" data-pu="test">📨 إشعار تجريبي</button></div><p class="note">الإشعارات خاصة بهذا الجهاز؛ فعّلها على كل جوال تريد أن تصله.</p>');
  puBox.addEventListener('click',function(e){var b=e.target.closest('[data-pu]');if(!b)return;var c=puCfg();
    if(b.dataset.pu==='main'){if(c.on&&puPerm()==='granted')puDisable();else puEnable()}
    else{c.srv&&cloudCanWrite()?puCall({action:'test',endpoint:c.ep||'https://x'},true).then(function(j){if(!j.sent)puShow('EMD Business',{body:'✅ الإشعارات تعمل على هذا الجهاز',tag:'emd-test'})},function(){puShow('EMD Business',{body:'✅ الإشعارات تعمل على هذا الجهاز',tag:'emd-test'})}):puShow('EMD Business',{body:'✅ الإشعارات تعمل على هذا الجهاز',tag:'emd-test'})}});
  puBox.addEventListener('change',function(e){var k=e.target.dataset.puk;if(!k)return;var c=puCfg();c.k[k]=!!e.target.checked;puSave(c);if(c.on&&c.srv&&c.ep)puCall({action:'prefs',endpoint:c.ep,kinds:c.k},true).catch(function(){})});
  puResync();puPaint()}
function puPaint(force){if(!puBox||!puBox.isConnected)return;var c=puCfg(),p=puPerm(),s=force||'';
  if(!s){if(!puSup())s=puIos()&&!puStd()?'ios':'unsupported';else if(p==='denied')s='denied';else if(c.on&&p==='granted')s=c.srv?'ok':CLOUD_SANDBOX?'sandbox':cUid()?'srverr':'nologin';else s='idle'}
  var M={idle:['info','الإشعارات غير مفعّلة على هذا الجهاز.'],busy:['info','جارٍ التفعيل… وافق على طلب الإذن الذي يظهر لك.'],ok:['ok','✅ الإشعارات مفعّلة، وطلبات المتجر تصلك حتى لو كان التطبيق مغلقًا.'],
    sandbox:['ok','✅ الإشعارات مفعّلة على هذا الجهاز (التجربة لا تربطه بالخادم).'],nologin:['err','✅ الإشعارات مفعّلة، لكن طلبات المتجر لا تصلك والتطبيق مغلق إلا بعد تسجيل الدخول.'],
    srverr:['err','✅ الإشعارات مفعّلة داخل التطبيق، وتعذّر ربط الجهاز بالخادم الآن. ستُعاد المحاولة تلقائيًا.'],denied:['err','الإشعارات محظورة. افتح إعدادات المتصفح ← الإشعارات ← اسمح لـ EMD Business، ثم ارجع إلى هنا.'],
    ios:['err','على الآيفون تعمل الإشعارات بعد إضافة التطبيق إلى الشاشة الرئيسية: زر المشاركة ⬆️ ثم «إضافة إلى الشاشة الرئيسية»، ثم افتحه من الأيقونة وفعّل الإشعارات (iOS 16.4 أو أحدث).'],
    unsupported:['err','هذا المتصفح لا يدعم الإشعارات. استخدم Chrome على أندرويد أو التطبيق من Google Play.']}[s];
  var st=puBox.querySelector('#puSt');st.className='cmsg show '+M[0];st.textContent=M[1];
  var on=c.on&&p==='granted',b=puBox.querySelector('#puMain');b.textContent=on?'إيقاف الإشعارات على هذا الجهاز':'🔔 تفعيل الإشعارات';b.style.display=(s==='ios'||s==='unsupported'||s==='denied')?'none':'';b.disabled=s==='busy';
  [].forEach.call(puBox.querySelectorAll('[data-puk]'),function(i){i.checked=c.k[i.dataset.puk]!==false;i.disabled=!on})}
