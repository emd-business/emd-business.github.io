/* ---------- نافذة الحساب والحفظ في السحابة ---------- */
var clView='login',clEmail='',clBox=null;
function cloudPaint(){var b=$('cloudChip');if(!b)return;var s=cSession(),m=cMeta(),t,c;
  if(!s){t='☁️ احفظ بياناتك بحساب';c='off'}
  else if(cs.state==='saving'){t='⏳ جارٍ الحفظ…';c=''}
  else if(cs.state==='dry'){t='☁️ متصل (تجربة)';c='ok'}
  else if(cs.state==='offline'){t='📴 يُحفظ عند عودة الإنترنت';c='off'}
  else if(cs.state==='error'){t='⚠️ لم يُحفظ';c='err'}
  else{t='☁️ محفوظ'+(m.lastPush?' · '+clAgo(m.lastPush):'');c='ok'}
  if(b.textContent!==t)b.textContent=t;b.className='cchip hx '+c;
  var st=document.getElementById('clStatus');if(st)st.innerHTML=clStatusHtml()}
function clStatusHtml(){var m=cMeta(),c=clCounts(clCollect());
  return 'آخر حفظ في السحابة: <b>'+(m.lastPush?clFmt(m.lastPush):'لم يتم بعد')+'</b><br>على هذا الجهاز: '+clCnt(c)+(cs.err?'<br><span class="bad">'+esc(cs.err)+'</span>':'')}
function clPw(id,label,ac){return '<label class="f" for="'+id+'">'+label+'</label><div class="pw"><input class="in" id="'+id+'" type="password" autocomplete="'+ac+'" minlength="8"><button type="button" class="eye" data-eye="'+id+'" aria-label="إظهار كلمة المرور">👁️</button></div>'}
function clHead(t,sub,noX){return '<div class="sh"><div><h3>'+t+'</h3>'+(sub?'<small>'+sub+'</small>':'')+'</div>'+(noX?'':'<button class="x" data-act="close">إغلاق ✕</button>')+'</div>'}
var CL_SBX_NOTE='<p class="note amb">🧪 في التجربة: تسجيل الدخول هنا مستقل عن تطبيقك، ويمكنك قراءة نسختك في السحابة وجلبها إلى التجربة، لكن التجربة لا تكتب شيئًا في السحابة.</p>';
function clHtml(){var v=clView,h='';
  if(v==='login'||v==='signup'){var su=v==='signup';
    h=clHead('☁️ حسابك في EMD Business','بحساب واحد تُحفظ بياناتك في السحابة تلقائيًا، وتفتحها من أي جهاز.')+(CLOUD_SANDBOX?CL_SBX_NOTE:'')+
      '<div class="chips"><button type="button" class="chip'+(su?'':' on')+'" data-cv="login">تسجيل الدخول</button><button type="button" class="chip'+(su?' on':'')+'" data-cv="signup">حساب جديد</button></div>'+
      '<form id="clForm"><label class="f" for="clEmail">البريد الإلكتروني</label><input class="in" id="clEmail" type="email" inputmode="email" autocomplete="email" placeholder="name@example.com" dir="ltr" value="'+esc(clEmail)+'">'+
      clPw('clPw','كلمة المرور'+(su?' (8 أحرف أو أكثر)':''),su?'new-password':'current-password')+(su?clPw('clPw2','أعد كتابة كلمة المرور','new-password'):'')+
      '<div class="foot"><button type="submit" class="btn dark" data-ck="go">'+(su?'إنشاء الحساب':'دخول')+'</button></div></form>'+
      (su?'':'<button type="button" class="lnk" data-cv="forgot">نسيت كلمة المرور؟</button>')+'<div class="cmsg" id="clMsg"></div>'+
      '<p class="note">🔒 بياناتك محفوظة في حسابك، ولا يستطيع غيرك الاطلاع عليها.</p>'}
  else if(v==='sent')h=clHead('📧 أكّد بريدك الإلكتروني','')+'<p class="note">أرسلنا رابط تأكيد إلى <b dir="ltr">'+esc(clEmail)+'</b>. افتح الرسالة واضغط الرابط، فتعود إلى التطبيق وأنت مسجّل الدخول.</p><p class="note">إن لم تصلك فابحث في مجلد الرسائل غير المرغوب فيها، أو أعد الإرسال.</p><div class="list"><button data-ck="resend">📨 إعادة إرسال الرابط</button><button data-cv="login">أكّدت بريدي، أريد تسجيل الدخول</button></div><div class="cmsg" id="clMsg"></div>';
  else if(v==='forgot')h=clHead('🔑 نسيت كلمة المرور','نرسل إلى بريدك رابطًا تختار منه كلمة مرور جديدة.')+'<form id="clForm"><label class="f" for="clEmail">البريد الإلكتروني</label><input class="in" id="clEmail" type="email" dir="ltr" value="'+esc(clEmail)+'"><div class="foot"><button type="submit" class="btn dark" data-ck="go">أرسل الرابط</button></div></form><button type="button" class="lnk" data-cv="login">العودة إلى تسجيل الدخول</button><div class="cmsg" id="clMsg"></div>';
  else if(v==='newpw'||v==='chpw')h=clHead('🔑 '+(v==='newpw'?'كلمة مرور جديدة':'تغيير كلمة المرور'),'',v==='newpw')+'<form id="clForm">'+clPw('clPw','كلمة المرور الجديدة','new-password')+clPw('clPw2','أعد كتابتها','new-password')+'<div class="foot"><button type="submit" class="btn dark" data-ck="go">حفظ</button></div></form>'+(v==='chpw'?'<button type="button" class="lnk" data-cv="account">رجوع</button>':'')+'<div class="cmsg" id="clMsg"></div>';
  else if(v==='account'){var s=cSession()||{};
    h=clHead('☁️ حسابك','')+(CLOUD_SANDBOX?CL_SBX_NOTE:'')+'<div class="card"><div>الحساب: <b dir="ltr">'+esc(s.user&&s.user.email||'')+'</b></div><div id="clStatus" class="note" style="margin:6px 0 0">'+clStatusHtml()+'</div><div id="clRemote" class="note" style="margin:6px 0 0"></div></div>'+
      '<div class="list">'+(CLOUD_SANDBOX?'<button data-ck="fetch">⬇️ جلب نسختي من السحابة إلى التجربة</button>':'<button data-ck="now">☁️ احفظ الآن</button>')+
      '<button data-cv="hist">🕘 النسخ السابقة في السحابة</button><button data-cv="chpw">🔑 تغيير كلمة المرور</button><button data-ck="out">🚪 تسجيل الخروج</button></div>'+
      '<p class="note">الحفظ تلقائي بعد كل تعديل، وتُحفظ كل يوم نسخة كاملة يمكنك الرجوع إليها لمدة 30 يومًا.</p><div class="cmsg" id="clMsg"></div>'}
  else if(v==='hist')h=clHead('🕘 النسخ السابقة','اختر نسخة للرجوع إليها.')+'<div class="list" id="clHist"><p class="note">جارٍ التحميل…</p></div><button type="button" class="lnk" data-cv="account">رجوع</button><div class="cmsg" id="clMsg"></div>';
  return h}
function cloudMsg(k,t){var e=clBox&&clBox.querySelector('#clMsg');if(e){e.className='cmsg show '+k;e.textContent=t}}
function clPaintSheet(){if(!clBox||!clBox.parentNode)return;clBox.querySelector('.box').innerHTML=clHtml();
  if(clView==='hist')clLoadHist();if(clView==='account')clLoadRemote()}
function cloudSheet(v){clView=v||(cSession()?'account':'login');if(clBox&&clBox.parentNode)closeSheet(clBox);clBox=openSheet(clHtml(),'cloud');
  clBox.addEventListener('click',clClick);clBox.addEventListener('submit',function(e){e.preventDefault();var g=clBox.querySelector('[data-ck=go]');if(g)g.click()});
  if(clView==='hist')clLoadHist();if(clView==='account')clLoadRemote()}
function clVal(id){var e=clBox&&clBox.querySelector('#'+id);return e?String(e.value||'').trim():''}
function clBusy(on){var g=clBox&&clBox.querySelector('[data-ck=go]');if(!g)return;g.disabled=on;if(on){g.dataset.t=g.textContent;g.textContent='⏳ لحظة…'}else if(g.dataset.t)g.textContent=g.dataset.t}
function clAfterLogin(){cDel(CK.base);cSetMeta({lastHash:null,lastData:null,lastRemote:null});clView='account';clPaintSheet();cloudPaint();return cloudCheck()}
function clClick(e){var eye=e.target.closest('[data-eye]');if(eye){var i=clBox.querySelector('#'+eye.dataset.eye);if(i){var sh=i.type==='password';i.type=sh?'text':'password';eye.textContent=sh?'🙈':'👁️'}return}
  var b=e.target.closest('button');if(!b)return;var v=b.dataset.cv,k=b.dataset.ck;
  if(v){clEmail=clVal('clEmail')||clEmail;clView=v;clPaintSheet();return}
  if(k==='go'){e.preventDefault();var vw=clView;
    if(vw==='login'||vw==='signup'||vw==='forgot'){clEmail=clVal('clEmail').toLowerCase();if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(clEmail)){cloudMsg('err','اكتب بريدًا إلكترونيًا صحيحًا.');return}}
    if(vw==='login'){var pw=clVal('clPw');if(!pw){cloudMsg('err','اكتب كلمة المرور.');return}clBusy(true);clAuth.signIn(clEmail,pw).then(function(){clBusy(false);toast('✅ تم تسجيل الدخول');return clAfterLogin()}).catch(function(x){clBusy(false);cloudMsg('err',x.message)});return}
    if(vw==='forgot'){clBusy(true);clAuth.recover(clEmail).then(function(){clBusy(false);cloudMsg('ok','📧 إن كان البريد مسجّلًا فسيصلك رابط خلال دقيقة. افتحه من الجهاز نفسه.')}).catch(function(x){clBusy(false);cloudMsg('err',x.message)});return}
    var p1=clVal('clPw'),p2=clVal('clPw2');
    if(p1.length<8){cloudMsg('err','يجب أن تكون كلمة المرور 8 أحرف أو أكثر.');return}if(!/\d/.test(p1)||!/\D/.test(p1)){cloudMsg('err','اجعل كلمة المرور تجمع بين الحروف والأرقام.');return}if(p1!==p2){cloudMsg('err','كلمتا المرور غير متطابقتين.');return}
    clBusy(true);
    if(vw==='signup'){clAuth.signUp(clEmail,p1).then(function(r){clBusy(false);if(r.session)return clAfterLogin();if(r.user&&Array.isArray(r.user.identities)&&!r.user.identities.length){cloudMsg('err',CL_ERR.user_already_exists);return}clView='sent';clPaintSheet()}).catch(function(x){clBusy(false);cloudMsg('err',x.message)});return}
    clAuth.setPassword(p1).then(function(){clBusy(false);if(vw==='newpw'){closeSheet(clBox);cloudCheck();toast('✅ تغيّرت كلمة المرور وأنت مسجّل الدخول')}else cloudMsg('ok','✅ تغيّرت كلمة المرور.')}).catch(function(x){clBusy(false);cloudMsg('err',x.message)});return}
  if(k==='resend'){clAuth.resend(clEmail).then(function(){cloudMsg('ok','📨 أعدنا إرسال الرابط.')}).catch(function(x){cloudMsg('err',x.message)});return}
  if(k==='now'){cloudMsg('info','⏳ جارٍ الحفظ…');cloudPush(true).then(function(ok){if(ok)cloudMsg('ok','✅ حُفظت بياناتك في السحابة.');else if(cs.err)cloudMsg('err',cs.err)});return}
  if(k==='fetch'){if(!confirm('جلب نسختك من السحابة إلى التجربة؟\nتُستبدل بيانات التجربة الحالية، ولا يتغير شيء في تطبيقك أو في السحابة.'))return;cloudMsg('info','⏳ جارٍ الجلب…');
    cloudPull('☁️ جُلبت نسختك من السحابة إلى التجربة').then(function(ok){meta={source:'cloud',at:new Date().toISOString()};lsSet(META,JSON.stringify(meta));banner();if(ok)closeSheet(clBox);else cloudMsg('err',cs.err||'لا توجد نسخة في السحابة لهذا الحساب.')});return}
  if(k==='out'){if(!confirm('تسجيل الخروج من حسابك؟\nتبقى بياناتك على هذا الجهاز، ويتوقف الحفظ في السحابة حتى تسجّل الدخول.'))return;var go=function(){clAuth.signOut();closeSheet(clBox);toast('تم تسجيل الخروج')};cloudPush().then(go,go);return}
  var hid=b.dataset.hist;if(hid){clRestore(hid,b.dataset.label)}}
function clLoadRemote(){var box=clBox&&clBox.querySelector('#clRemote');if(!box)return;
  clRemoteMeta().then(function(r){if(!box.isConnected)return;box.innerHTML=r?'في السحابة: '+clCnt(r.counts)+' · آخر تعديل '+esc(clFmt(r.updated_at))+(r.device?' من '+esc(r.device):''):'لا توجد نسخة في السحابة بعد.'}).catch(function(e){if(box.isConnected)box.textContent=e.message})}
function clLoadHist(){var box=clBox&&clBox.querySelector('#clHist');
  cToken().then(function(t){return clCall('/rest/v1/emd_vault_history?select=id,created_at,counts&user_id=eq.'+cUid()+'&order=created_at.desc&limit=30',{token:t})}).then(function(a){if(!box)return;
    if(!a||!a.length){box.innerHTML='<p class="note">لا توجد نسخ سابقة بعد. تُحفظ أول نسخة اليوم.</p>';return}
    box.innerHTML=a.map(function(r){return '<button data-hist="'+esc(r.id)+'" data-label="'+esc(clFmt(r.created_at))+'">'+esc(clFmt(r.created_at))+' <small class="mute">'+esc(clCnt(r.counts))+'</small></button>'}).join('')})
  .catch(function(e){if(box)box.innerHTML='<p class="note bad">'+esc(e.message)+'</p>'})}
function clRestore(id,label){if(!confirm('الرجوع إلى نسخة '+label+'؟'+(CLOUD_SANDBOX?'\nتُستبدل بيانات التجربة فقط.':'\nتُحفظ بياناتك الحالية في النسخ السابقة قبلها.')))return;cloudMsg('info','⏳ جارٍ الاسترجاع…');
  cToken().then(function(t){return clCall('/rest/v1/emd_vault_history?select=data&id=eq.'+encodeURIComponent(id),{token:t})}).then(function(a){if(!a||!a[0])throw new Error('النسخة غير موجودة.');
    return clApply({data:a[0].data,updated_at:cMeta().lastRemote},'☁️ رجعتَ إلى نسخة '+label).then(function(){cSetMeta({lastHash:'restored'});if(cloudCanWrite())cloudPush(true);closeSheet(clBox)})})
  .catch(function(e){cloudMsg('err',e.message)})}
