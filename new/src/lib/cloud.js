/* ---------- الحساب والحفظ في السحابة ----------
   الخادم والجدول نفسيهما في التطبيق الحالي (emd_vaults وemd_vault_history).
   في التجربة: تسجيل دخول مستقل (لا يمس جلسة التطبيق الحالي)، والقراءة من السحابة مسموحة،
   أما الكتابة إلى السحابة فمتوقفة حتى لا تكتب التجربة فوق بياناتك الحقيقية. */
var CLOUD_SANDBOX=true;   // يصبح false عند النشر
var CL_URL='https://gpwgckwlcntvesnlptej.supabase.co',CL_KEY='sb_publishable_wklrs_Z4xZmdPJ2nJ0iLiw_UEdPOOQZ';
var CK=CLOUD_SANDBOX?{session:'emd_rb_cloud_session',meta:'emd_rb_cloud_meta',base:'emd_rb_cloud_base',known:'emd_rb_cloud_known',times:'emd_rb_cloud_times'}
                    :{session:'emd_v93_session_b',meta:'emd_v93_sync_b',base:'emd_v93_base_rb',known:'emd_v93_known_rb',times:'emd179_times'};
var CL_LEGACY=['emd_business_local_snapshot_v85','emd_business_last_backup_v287','emd_business_v313_snapshot_v1','emd_inventory_v2_legacy_backup_v356','emd_v303_integrity_guard'];
var CL_VERSION='R'+(document.title.match(/\d+/)||['1'])[0];
function cloudCanWrite(){return !CLOUD_SANDBOX||window.__EMD_CLOUD_TEST===true}
function cJ(k,d){try{var x=JSON.parse(lsGet(k)||'null');return x==null?d:x}catch(e){return d}}
function cMeta(){return cJ(CK.meta,{})}
function cSetMeta(p){var m=cMeta();Object.keys(p).forEach(function(k){m[k]=p[k]});lsSet(CK.meta,JSON.stringify(m))}
function cDel(k){try{LS.removeItem(k)}catch(e){}}

/* ===== البيانات التي تُحفظ: بيانات التطبيق + مفاتيح الإعدادات ===== */
function clSynced(k){return k&&k.indexOf('emd')===0&&k.indexOf('emd_v66')!==0&&k.indexOf('emd_v93')!==0&&k.indexOf('emd_rb_')!==0&&CL_LEGACY.indexOf(k)<0&&k.indexOf('snooze')<0}
function clCollect(){var keys={};for(var i=0;i<LS.length;i++){var k=LS.key(i);if(!clSynced(k)||k===LIVE_KEY)continue;var v=lsGet(k);if(v==null)continue;
  if(k==='emd_business_ai_settings_v3201'){try{var a=JSON.parse(v);if(a&&a.apiKey){a.apiKey='';v=JSON.stringify(a)}}catch(e){}}keys[k]=v}
  if(CLOUD_SANDBOX){var t=lsGet(CK.times);if(t)keys.emd179_times=t}
  keys[LIVE_KEY]=JSON.stringify(db);return keys}
function clHash(keys){var s='';Object.keys(keys).sort().forEach(function(k){s+=k+'\u0001'+keys[k]+'\u0002'});return fnv(s)}
function clDataHash(keys){return fnv(String(keys[LIVE_KEY]||''))}
function clCounts(keys){var d=null;try{d=JSON.parse(keys[LIVE_KEY]||'null')}catch(e){}d=d||{};return {orders:(d.orders||[]).length,products:(d.products||[]).length,customers:(d.customers||[]).length}}
function clCnt(c){c=c||{};return nOrders(c.orders||0)+'، '+(c.products||0)+' منتج، '+(c.customers||0)+' عميل'}
function clEmpty(c){c=c||{};return !((c.orders||0)+(c.products||0)+(c.customers||0))}
function clKeyHashes(keys){var h={};Object.keys(keys).forEach(function(k){if(k!==LIVE_KEY&&k!=='emd179_times')h[k]=fnv(keys[k])});return h}
/* نقطة البداية المشتركة تُحفظ كلما تطابق الجهاز مع السحابة */
function clSetBase(keys){var d={};try{d=JSON.parse(keys[LIVE_KEY])}catch(e){}var b=syBase(d);b.u=cUid();b.k=clKeyHashes(keys);lsSet(CK.base,JSON.stringify(b))}
function clBase(){var b=cJ(CK.base,null);return b&&b.u===cUid()?b:null}
/* وقت آخر تعديل من المستخدم لكل حقل ولكل مفتاح، يسافر مع البيانات ليُعتمد الأحدث */
var clPrevF=null;
function clTouchDb(){var t=cJ(CK.times,{}),now=Date.now(),ch=false,f={};Object.keys(db).forEach(function(k){if(!SY_RECS[k])f[k]=hv(db[k])});
  if(clPrevF)Object.keys(f).concat(Object.keys(clPrevF)).forEach(function(k){if(f[k]!==clPrevF[k]){t['db.'+k]=now;ch=true}});clPrevF=f;if(ch)lsSet(CK.times,JSON.stringify(t))}

/* ===== الاتصال ===== */
var CL_ERR={invalid_credentials:'البريد الإلكتروني أو كلمة المرور غير صحيحة.',email_not_confirmed:'يجب تأكيد بريدك الإلكتروني أولًا: افتح الرسالة التي وصلتك واضغط الرابط.',user_already_exists:'هذا البريد مسجّل من قبل. سجّل الدخول بدل إنشاء حساب.',email_exists:'هذا البريد مسجّل من قبل. سجّل الدخول بدل إنشاء حساب.',weak_password:'كلمة المرور ضعيفة: اجعلها 8 أحرف أو أكثر وفيها أرقام.',over_email_send_rate_limit:'أُرسلت رسائل كثيرة إلى هذا البريد. انتظر دقيقة ثم أعد المحاولة.',over_request_rate_limit:'محاولات كثيرة. انتظر قليلًا ثم أعد المحاولة.',validation_failed:'تحقق من البريد الإلكتروني وكلمة المرور.',same_password:'يجب أن تختلف كلمة المرور الجديدة عن القديمة.',email_address_invalid:'البريد الإلكتروني غير صحيح.'};
function clErrText(j,s){j=j||{};var c=j.error_code||j.code||'',m=String(j.msg||j.error_description||j.message||j.error||'');
  if(CL_ERR[c])return CL_ERR[c];if(/Invalid login/i.test(m))return CL_ERR.invalid_credentials;if(/not confirmed/i.test(m))return CL_ERR.email_not_confirmed;if(/already registered|already exists/i.test(m))return CL_ERR.user_already_exists;
  if(/Password should|weak/i.test(m))return CL_ERR.weak_password;if(s===429)return CL_ERR.over_request_rate_limit;
  if(s===401||s===403)return 'انتهت الجلسة. سجّل الدخول مرة أخرى.';return m||('خطأ من الخادم ('+s+')')}
function clCall(path,o){o=o||{};var h={apikey:CL_KEY,'Content-Type':'application/json'};if(o.token)h.Authorization='Bearer '+o.token;if(o.prefer)h.Prefer=o.prefer;
  return fetch(CL_URL+path,{method:o.method||'GET',headers:h,body:o.body!=null?JSON.stringify(o.body):undefined}).then(function(r){return r.text().then(function(t){var j=null;try{j=t?JSON.parse(t):null}catch(e){}
    if(!r.ok){var e=new Error(clErrText(j,r.status));e.status=r.status;e.body=j;throw e}return j})},function(){var e=new Error('لا يوجد اتصال بالإنترنت، أو الخادم لا يستجيب.');e.net=true;throw e})}
function cSession(){return cJ(CK.session,null)}
function cSaveSession(j){if(!j||!j.access_token)return null;var s={access_token:j.access_token,refresh_token:j.refresh_token,expires_at:Date.now()+((+j.expires_in||3600)*1000),user:j.user?{id:j.user.id,email:j.user.email}:(cSession()||{}).user||null};lsSet(CK.session,JSON.stringify(s));return s}
var clRefreshing=null;
function cToken(){var s=cSession();if(!s)return Promise.reject(Object.assign(new Error('سجّل الدخول أولًا.'),{auth:true}));
  if(s.expires_at-Date.now()>90000)return Promise.resolve(s.access_token);
  if(!clRefreshing)clRefreshing=clCall('/auth/v1/token?grant_type=refresh_token',{method:'POST',body:{refresh_token:s.refresh_token}}).then(function(j){clRefreshing=null;return cSaveSession(j).access_token},function(e){clRefreshing=null;if(e.status&&e.status<500){cDel(CK.session);cloudPaint();e.auth=true}throw e});
  return clRefreshing}
function cUid(){var s=cSession();return s&&s.user&&s.user.id||''}
function clSite(){return location.origin+location.pathname}
var clAuth={
  signIn:function(em,pw){return clCall('/auth/v1/token?grant_type=password',{method:'POST',body:{email:em,password:pw}}).then(cSaveSession)},
  signUp:function(em,pw){return clCall('/auth/v1/signup?redirect_to='+encodeURIComponent(clSite()),{method:'POST',body:{email:em,password:pw}}).then(function(j){if(j&&j.access_token){cSaveSession(j);return {session:true}}return {session:false,user:j&&(j.user||j)}})},
  recover:function(em){return clCall('/auth/v1/recover?redirect_to='+encodeURIComponent(clSite()),{method:'POST',body:{email:em}})},
  resend:function(em){return clCall('/auth/v1/resend?redirect_to='+encodeURIComponent(clSite()),{method:'POST',body:{type:'signup',email:em}})},
  setPassword:function(pw){return cToken().then(function(t){return clCall('/auth/v1/user',{method:'PUT',token:t,body:{password:pw}})})},
  signOut:function(){var s=cSession();cDel(CK.session);cDel(CK.base);cSetMeta({lastHash:null,lastData:null,lastRemote:null,conflict:null});if(s)clCall('/auth/v1/logout',{method:'POST',token:s.access_token}).catch(function(){});cloudPaint()}};
/* رابط التأكيد أو استرجاع كلمة المرور يعود إلى التطبيق ومعه الجلسة */
var clLink={recovery:false,confirmed:false,error:''};
function cloudReadHash(){var h=location.hash||'';if(h.indexOf('access_token=')<0&&h.indexOf('error')<0)return;var p={};
  h.replace(/^#/,'').split('&').forEach(function(x){var i=x.indexOf('=');if(i>0)p[decodeURIComponent(x.slice(0,i))]=decodeURIComponent(x.slice(i+1).replace(/\+/g,' '))});
  if(p.access_token){cSaveSession({access_token:p.access_token,refresh_token:p.refresh_token,expires_in:p.expires_in});if(p.type==='recovery')clLink.recovery=true;else clLink.confirmed=true;
    clCall('/auth/v1/user',{token:p.access_token}).then(function(u){var s=cSession();if(s&&u){s.user={id:u.id,email:u.email};lsSet(CK.session,JSON.stringify(s));cloudPaint()}}).catch(function(){})}
  else if(p.error||p.error_description)clLink.error=/expired|invalid/i.test(p.error_description||p.error_code||'')?'انتهت صلاحية الرابط أو استُخدم من قبل. اطلب رابطًا جديدًا.':(p.error_description||'تعذّر فتح الرابط.');
  try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}}

/* ===== الحفظ والدمج ===== */
var cs={state:'idle',err:'',busy:false,merging:false};
function cState(s,e){cs.state=s;cs.err=e||'';cloudPaint()}
function clRemoteMeta(){return cToken().then(function(t){return clCall('/rest/v1/emd_vaults?select=updated_at,counts&user_id=eq.'+cUid(),{token:t})}).then(function(a){return a&&a[0]||null})}
function clRemoteFull(){return cToken().then(function(t){return clCall('/rest/v1/emd_vaults?select=data,updated_at&user_id=eq.'+cUid(),{token:t})}).then(function(a){var r=a&&a[0];return r&&r.data&&r.data.keys&&r.data.keys[LIVE_KEY]?r:null})}
function clToday(){var d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()}
function cloudPush(force){
  if(cs.busy||!cUid())return Promise.resolve(false);
  var keys=clCollect(),h=clHash(keys),m=cMeta();if(!force&&h===m.lastHash)return Promise.resolve(false);
  if(!cloudCanWrite()){cSetMeta({lastDry:Date.now()});cState('dry');return Promise.resolve(false)}
  cs.busy=true;cState('saving');
  return archAll().then(function(archive){var c=clCounts(keys),data={v:1,keys:keys,archive:archive},now=new Date().toISOString();c.h=clDataHash(keys);c.active=c.orders;c.archived=archive.length;c.orders=c.active+c.archived;
    var body={user_id:cUid(),data:data,counts:c,updated_at:now,device:clDevice(),app_version:CL_VERSION};
    return cToken().then(function(t){
      /* الحفظ المشروط: لا نكتب فوق نسخة السحابة إلا إن كانت هي آخر نسخة رأيناها */
      var up=m.lastRemote&&!force?clCall('/rest/v1/emd_vaults?user_id=eq.'+cUid()+'&updated_at=eq.'+encodeURIComponent(m.lastRemote),{method:'PATCH',token:t,prefer:'return=representation',body:body})
        .then(function(rows){if(rows&&rows.length)return rows;throw Object.assign(new Error('changed'),{changed:true})})
        :clCall('/rest/v1/emd_vaults?on_conflict=user_id',{method:'POST',token:t,prefer:'resolution=merge-duplicates,return=representation',body:body});
      return up.then(function(rows){var row=rows&&rows[0]||{updated_at:now};cSetMeta({lastHash:h,lastData:clDataHash(keys),lastRemote:row.updated_at,lastPush:Date.now(),conflict:null});clSetBase(keys);
        if(m.lastHist!==clToday()&&!clEmpty(c))return clCall('/rest/v1/emd_vault_history',{method:'POST',token:t,prefer:'return=minimal',body:{user_id:cUid(),data:data,counts:c}}).then(function(){cSetMeta({lastHist:clToday()});
          var cut=new Date(Date.now()-30*864e5).toISOString();return clCall('/rest/v1/emd_vault_history?user_id=eq.'+cUid()+'&created_at=lt.'+encodeURIComponent(cut),{method:'DELETE',token:t}).catch(function(){})}).catch(function(){})})})
  }).then(function(){cs.busy=false;cState('ok');return true},function(e){cs.busy=false;if(e.changed){cState('idle');return cloudMerge().then(function(){return false})}cState(e.net?'offline':'error',e.message);return false})}
/* تطبيق نسخة كاملة من السحابة (عند عدم وجود تعديل محلي) */
function clApply(row,label){var keys=row.data.keys,nd;try{nd=JSON.parse(keys[LIVE_KEY])}catch(e){return Promise.resolve(false)}
  db=fix(nd);syPrime();lsSet(KEY,JSON.stringify(db));dirty();
  if(cloudCanWrite()){Object.keys(keys).forEach(function(k){if(k===LIVE_KEY||k==='emd_business_ai_settings_v3201')return;lsSet(k,keys[k])});archImport(row.data.archive)}
  else if(keys.emd179_times)lsSet(CK.times,keys.emd179_times);
  var nk=clCollect();cSetMeta({lastRemote:row.updated_at,lastHash:clHash(nk),lastData:clDataHash(nk),conflict:null});clSetBase(nk);clPrevF=null;clTouchDb();
  render();if(label)toast(label);return Promise.resolve(true)}
function cloudPull(label){if(!cUid())return Promise.resolve(false);cState('saving');
  return clRemoteFull().then(function(r){if(!r){cState('ok');return false}return clApply(r,label).then(function(x){cState('ok');return x})}).catch(function(e){cState(e.net?'offline':'error',e.message);return false})}
/* تعديل هنا وتعديل في جهاز آخر: دمج على مستوى السجل ثم حفظ النتيجة */
function cloudMerge(){if(cs.merging||!cUid())return Promise.resolve(false);cs.merging=true;cs.busy=true;cState('saving');var row=null;
  return clRemoteFull().then(function(r){row=r;if(!r)throw new Error('no remote');return archAll()}).then(function(arch){
    var keys=row.data.keys,remote=JSON.parse(keys[LIVE_KEY]),base=clBase(),tl=cJ(CK.times,{}),tr={};try{tr=JSON.parse(keys.emd179_times||'{}')||{}}catch(e){}
    syStamp(db,cJ(CK.known,null));
    var res=syMerge(db,remote,{base:base,archived:archIds(arch),times:{local:tl,remote:tr}});
    db=fix(res.db);syPrime();lsSet(KEY,JSON.stringify(db));dirty();
    if(cloudCanWrite()){var set=syMergeKeys(clCollect(),keys,base&&base.k,tl,tr);Object.keys(set).forEach(function(k){if(k===LIVE_KEY||k==='emd179_times')return;if(set[k]==null)cDel(k);else lsSet(k,set[k])})}
    Object.keys(tr).forEach(function(k){if((+tr[k]||0)>(+tl[k]||0))tl[k]=tr[k]});lsSet(CK.times,JSON.stringify(tl));clPrevF=null;clTouchDb();
    cSetMeta({lastRemote:row.updated_at,conflict:null});cs.merging=false;cs.busy=false;render();
    var st=res.stats,n=st.added+st.updated+st.deleted+st.fields;if(st.renumbered.length)toast('☁️ أُنشئ طلب بالرقم نفسه في جهازك الآخر، فتغيّر رقم طلبك: '+st.renumbered.map(function(x){return x.from+' ← '+x.to}).join('، '));else if(n)toast('☁️ دُمج '+n+' تعديلًا من جهازك الآخر');
    return cloudPush(true).then(function(){return true})})
  .catch(function(e){cs.merging=false;cs.busy=false;cState(e&&e.net?'offline':'error',e&&e.message||'');return false})}
/* الفحص: عند الفتح، والعودة إلى التطبيق، وكل 10 ثوانٍ مع الساعة */
function cloudCheck(){if(!cUid()||cs.busy)return Promise.resolve();var m=cMeta(),keys=clCollect(),h=clHash(keys),lc=clCounts(keys);
  return clRemoteMeta().then(function(r){
    if(!r){if(!clEmpty(lc))return cloudPush(true);cState('ok');return}
    if(r.counts&&r.counts.h&&r.counts.h===clDataHash(keys)){cSetMeta({lastRemote:r.updated_at,lastData:r.counts.h,lastHash:m.lastHash||h});if(m.lastHash&&h!==m.lastHash)return cloudPush();cState(cloudCanWrite()||!m.lastDry?'ok':'dry');return}
    if(m.lastRemote&&r.updated_at===m.lastRemote){if(h!==m.lastHash)return cloudPush();cState('ok');return}
    if(m.lastHash&&h===m.lastHash)return cloudPull('☁️ وصل تحديث من جهازك الآخر');
    if(!m.lastHash&&clEmpty(lc))return cloudPull('☁️ استُرجعت بياناتك من السحابة');
    return cloudMerge()}).catch(function(e){cState(e.net?'offline':'error',e.message)})}
var clPushT=0;
function cloudDirty(){clTouchDb();if(!cUid())return;clearTimeout(clPushT);clPushT=setTimeout(function(){cloudPush()},1500)}
function cloudTick(){if(!cUid()||document.hidden||cs.busy)return;var a=document.activeElement;if(a&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName))return;cloudCheck()}
function clDevice(){var u=navigator.userAgent;return /iPhone|iPad/.test(u)?'iPhone/iPad':/Android/.test(u)?(/Mobile/.test(u)?'جوال أندرويد':'جهاز لوحي أندرويد'):/Windows/.test(u)?'حاسوب Windows':/Mac/.test(u)?'Mac':'جهاز'}
function clFmt(ts){if(!ts)return '—';var d=new Date(ts);return d.toLocaleDateString('ar-OM-u-nu-latn',{day:'numeric',month:'short'})+' · '+d.toLocaleTimeString('ar-OM-u-nu-latn',{hour:'numeric',minute:'2-digit'})}
function clAgo(ts){if(!ts)return '';var m=Math.round((Date.now()-new Date(ts).getTime())/60000);if(m<1)return 'الآن';if(m<60)return 'قبل '+m+' د';var h=Math.round(m/60);if(h<24)return 'قبل '+h+' س';return 'قبل '+nDays(Math.round(h/24))}
function nDays(n){return n===1?'يوم':n===2?'يومين':n<=10?n+' أيام':n+' يومًا'}
function cloudBoot(){cloudReadHash();cloudPaint();
  if(clLink.error)setTimeout(function(){cloudSheet('login');cloudMsg('err',clLink.error)},400);
  else if(clLink.recovery)setTimeout(function(){cloudSheet('newpw')},400);
  else if(clLink.confirmed)setTimeout(function(){toast('✅ تأكّد بريدك وأنت مسجّل الدخول');cloudCheck()},600);
  else if(cUid())setTimeout(cloudCheck,1500);
  document.addEventListener('visibilitychange',function(){if(!cUid())return;if(document.hidden){if(clHash(clCollect())!==cMeta().lastHash)cloudPush()}else cloudCheck()});
  window.addEventListener('online',function(){if(cUid())cloudCheck()})}
