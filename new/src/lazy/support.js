/* مُولَّد بـ tools/port-support.py من V101 — لا تعدّل هنا */
(function(){var s=document.createElement("style");s.textContent="\n.emd93-ov{position:fixed;inset:0;z-index:12000;background:rgba(15,23,42,.6);display:flex;align-items:flex-end;justify-content:center;direction:rtl}\n.emd93-box{background:#fff;color:#111827;width:min(460px,100%);border-radius:24px 24px 0 0;padding:18px 18px 24px;max-height:94vh;overflow:auto;box-shadow:0 -10px 40px rgba(0,0,0,.25)}.emd93-ov{align-items:center}.emd93-box{border-radius:24px}\n.emd93-head{display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:10px}\n.emd93-head h3{margin:0;font-size:20px}\n.emd93-head small{display:block;color:#64748b;font-size:12.5px;margin-top:4px;font-weight:500;line-height:1.6}\n.emd93-x{border:0;background:#f1f5f9;color:#334155;border-radius:10px;padding:8px 12px;font-weight:800;cursor:pointer;flex:none}\n.emd93-f label{display:block;font-size:12.5px;font-weight:700;color:#475569;margin:10px 0 4px}\n.emd93-f input{width:100%;box-sizing:border-box;border:1px solid #dfe3e8;border-radius:12px;padding:13px 12px;font-size:16px;background:#fff;color:#111827}\n.emd93-f input[type=email]{direction:ltr;text-align:right}\n.emd93-go{width:100%;border:0;border-radius:14px;padding:14px;font-weight:800;font-size:16px;cursor:pointer;background:var(--emd89-acc,#18202a);color:#fff;margin-top:16px}\n.emd93-go[disabled]{opacity:.6;cursor:wait}\n.emd93-gh{width:100%;border:0;border-radius:14px;padding:12px;font-weight:800;font-size:14px;cursor:pointer;background:#f1f5f9;color:#111827;margin-top:8px}\n.emd93-link{background:none;border:0;color:#2563eb;font-weight:700;font-size:13.5px;cursor:pointer;padding:8px 2px;text-decoration:underline}\n.emd93-msg{margin-top:10px;font-size:13.5px;line-height:1.7;border-radius:12px;padding:10px 12px;display:none}\n.emd93-msg.show{display:block}.emd93-msg.err{background:#fef2f2;color:#991b1b}.emd93-msg.ok{background:#f0fdf4;color:#14532d}.emd93-msg.info{background:#eff6ff;color:#1e3a8a}\n.emd93-card{background:#f8fafc;border:1px solid #eef1f5;border-radius:14px;padding:12px;font-size:14px;line-height:1.9;margin-top:8px}\n.emd93-card b{font-weight:800}\n.emd93-note{font-size:12px;color:#64748b;line-height:1.7;margin-top:12px}\n.emd101-chip{position:relative}\n.emd101-dot{position:absolute;top:-3px;inset-inline-start:-3px;width:11px;height:11px;border-radius:50%;background:#dc2626;border:2px solid #fff}\n.emd101-q{width:100%;box-sizing:border-box;border:1px solid #dfe3e8;border-radius:12px;padding:12px;font-size:15px;background:#fff;color:#111827;margin:4px 0 8px}\n.emd101-faq{display:grid;gap:6px}\n.emd101-faq details{border:1px solid #e5e7eb;border-radius:12px;background:#fff}\n.emd101-faq summary{cursor:pointer;padding:12px;font-weight:800;font-size:14px;list-style:none;display:flex;justify-content:space-between;gap:8px}\n.emd101-faq summary::-webkit-details-marker{display:none}\n.emd101-faq summary::after{content:'＋';color:#94a3b8;font-weight:900}\n.emd101-faq details[open] summary::after{content:'－'}\n.emd101-faq .a{padding:0 12px 12px;font-size:13.5px;line-height:1.9;color:#334155;white-space:pre-line}\n.emd101-row{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}\n.emd101-kinds{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin:4px 0}\n.emd101-kinds button{border:1.5px solid #e2e8f0;background:#fff;border-radius:12px;padding:10px 4px;font:inherit;font-size:12.5px;font-weight:800;cursor:pointer;color:#334155}\n.emd101-kinds button.on{border-color:var(--emd89-acc,#18202a);background:#f8fafc;color:#111827}\n.emd101-f textarea{width:100%;box-sizing:border-box;border:1px solid #dfe3e8;border-radius:12px;padding:12px;font:inherit;font-size:15px;min-height:120px;background:#fff;color:#111827;resize:vertical}\n.emd101-shot{display:flex;align-items:center;gap:10px;margin-top:8px}\n.emd101-shot img{width:64px;height:64px;object-fit:cover;border-radius:10px;border:1px solid #e5e7eb}\n.emd101-t{border:1px solid #e5e7eb;border-radius:14px;padding:12px;background:#fff;margin-top:8px}\n.emd101-t .h{display:flex;justify-content:space-between;gap:8px;font-size:12.5px;color:#64748b}\n.emd101-t .m{white-space:pre-wrap;font-size:14px;margin-top:6px;line-height:1.8}\n.emd101-t .r{margin-top:8px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:10px;font-size:14px;line-height:1.8;white-space:pre-wrap;color:#14532d}\n.emd101-st{font-weight:800;font-size:12px;border-radius:999px;padding:2px 9px;background:#f1f5f9}\n.emd101-st.answered{background:#dcfce7;color:#166534}.emd101-st.open{background:#fef3c7;color:#92400e}\n";document.head.appendChild(s)})();

(function(){
'use strict';
if(window.EMD101)return;var H=window.EMDSupH;
/* V101: مركز المساعدة والدعم — أسئلة شائعة + إرسال بلاغ لصاحب التطبيق + ردود داخل التطبيق */
var SEEN=H.lk('emd_v101_seen'),LOCAL=H.lk('emd_v101_sent');
function lsGet(k){try{return localStorage.getItem(k)}catch(e){return null}}
function lsSet(k,v){try{if(v==null)localStorage.removeItem(k);else localStorage.setItem(k,v)}catch(e){}}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function api(){return H.api()}
function sess(){return H.session()}
function N(s){return String(s||'').replace(/[أإآ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').toLowerCase()}
var FAQ=[
 ['لم يستخرج التحليل الاسم أو المنتج بشكل صحيح','• تأكد أن منتجاتك مسجّلة في قسم «المنتجات» بالاسم الذي يكتبه العميل تقريبًا.\n• اكتب الرقم بـ 8 خانات (مثل 99999999).\n• إذا فاته منتج فاضغط «➕ إضافة منتج آخر» في صفحة المراجعة قبل الحفظ.\n• يمكنك تعديل كل الخانات في صفحة المراجعة يدويًا.'],
 ['اختفت بياناتي أو أصبح التطبيق فارغًا','• إذا كان لديك حساب: اضغط زر الحساب ☁️ في الأعلى ← «النسخ السابقة في السحابة» واختر آخر نسخة.\n• إذا كان لديك ملف نسخة احتياطية: الإعدادات ← النسخ والاستعادة ← استرجاع من ملف.\n• تأكد أنك تفتح التطبيق من الرابط والمتصفح نفسيهما اللذين كنت تستخدمهما.'],
 ['نسيت كلمة السر','اضغط زر الحساب ☁️ ← «نسيت كلمة السر؟»، واكتب بريدك الإلكتروني. سيصلك رابط تختار منه كلمة سر جديدة، فافتحه من الجهاز نفسه.'],
 ['لم تصلني رسالة التأكيد','• راجع مجلد الرسائل غير المرغوبة (Spam).\n• تأكد أن البريد الإلكتروني مكتوب بشكل صحيح.\n• من نافذة الحساب اضغط «إعادة إرسال الرابط».\n• افتح الرابط مرة واحدة فقط، ويُفضَّل في Chrome أو Safari.'],
 ['كيف أنقل بياناتي إلى جوال أو جهاز آخر؟','سجّل الدخول بالبريد نفسه على الجهاز الآخر، وستنتقل بياناتك تلقائيًا. يتم الحفظ في السحابة بعد كل تعديل.'],
 ['كيف أثبّت التطبيق على الآيفون أو الأندرويد؟','• آيفون: افتح الرابط في Safari ← زر المشاركة ⬆️ ← «إضافة إلى الشاشة الرئيسية».\n• أندرويد: افتح الرابط في Chrome ← القائمة ⋮ ← «إضافة إلى الشاشة الرئيسية».'],
 ['رابط التتبع لا يفتح عند العميل','• تأكد أن الطلب حُفظ وأن الإنترنت كان يعمل عند إرسال الرسالة.\n• انسخ الرابط من تفاصيل الطلب وجرّب فتحه بنفسك.\n• إذا بقي لا يفتح، فأرسل لنا بلاغًا مع رقم الطلب.'],
 ['كيف أضيف منتجاتي وأسعارها؟','من قسم «المنتجات» اضغط «➕ منتج»، واكتب الاسم والكمية. الأسعار من «💰 المالية ← الأسعار».'],
 ['كيف أغيّر اللغة؟','اضغط زر «🌐 English» في الأعلى للتبديل إلى الإنجليزية، و«🌐 عربي» للرجوع.'],
 ['كيف أحمي بياناتي من الضياع؟','• أنشئ حسابًا بالبريد الإلكتروني ليكون الحفظ في السحابة تلقائيًا.\n• واحفظ نسخة احتياطية في ملف من الإعدادات ← النسخ والاستعادة، وأرسلها لنفسك على واتساب أو درايف.']
];
var ov=null,view='home',kind='problem',shot=null,mine=null,busy=false;
function counts(){try{var d=H.db();return {orders:(d.orders||[]).length,products:(d.products||[]).length,customers:(d.customers||[]).length}}catch(e){return {}}}
function lang(){try{return window.EMDLangV98?EMDLangV98.lang():'ar'}catch(e){return 'ar'}}
function open(v){view=v||'home';if(!ov){ov=document.createElement('div');ov.className='emd93-ov';ov.innerHTML='<div class="emd93-box" role="dialog" aria-modal="true"></div>';document.body.appendChild(ov);document.body.classList.add('emd93-open');
  ov.addEventListener('click',function(e){if(e.target===ov)close()});ov.addEventListener('click',onClick);ov.addEventListener('input',onInput);ov.addEventListener('change',onChange)}
  render();if(view==='home'||view==='mine')loadMine()}
function close(){if(ov){ov.remove();ov=null}document.body.classList.remove('emd93-open');paintChip()}
function head(t,sub){return '<div class="emd93-head"><div><h3>'+t+'</h3>'+(sub?'<small>'+sub+'</small>':'')+'</div><button type="button" class="emd93-x" data-k="x" aria-label="إغلاق">✕</button></div>'}
function faqHtml(q){var nq=N(q).trim();var list=FAQ.filter(function(f){return !nq||N(f[0]+' '+f[1]).indexOf(nq)>=0});
  return list.length?list.map(function(f){return '<details><summary>'+esc(f[0])+'</summary><div class="a">'+esc(f[1])+'</div></details>'}).join(''):'<div class="emd93-note">لم نجد سؤالًا يطابق بحثك. أرسل لنا بلاغًا وسنساعدك.</div>'}
function unread(){if(!mine)return 0;var s=+(lsGet(SEEN)||0);return mine.filter(function(t){return t.reply&&t.replied_at&&new Date(t.replied_at).getTime()>s}).length}
function render(){if(!ov)return;var box=ov.firstChild,h='';
  if(view==='home'){var n=mine?mine.length:0,u=unread();
    h=head('🆘 المساعدة والدعم','ابحث عن حل سريع، أو أرسل لنا بلاغًا وسنرد عليك.')+
      '<input class="emd101-q" id="emd101Q" type="search" placeholder="🔎 ابحث: كلمة السر، بياناتي، الآيفون…"><div class="emd101-faq" id="emd101Faq">'+faqHtml('')+'</div>'+
      '<div class="emd101-row"><button type="button" class="emd93-go" data-k="new" style="margin-top:0">✉️ أرسل بلاغًا</button><button type="button" class="emd93-gh" data-k="mine" style="margin-top:0">📨 بلاغاتي'+(n?' ('+n+')':'')+(u?' 🔴':'')+'</button></div>';}
  else if(view==='new'){var s=sess(),em=s&&s.user&&s.user.email||'';
    h=head('✉️ بلاغ جديد','اشرح المشكلة بالتفصيل، وأرفق صورة للشاشة إن أمكن.')+'<div class="emd93-f emd101-f">'+
      '<label>نوع البلاغ</label><div class="emd101-kinds">'+[['problem','🐞 مشكلة'],['question','❓ سؤال'],['idea','💡 اقتراح'],['other','💬 أخرى']].map(function(k){return '<button type="button" data-kind="'+k[0]+'" class="'+(kind===k[0]?'on':'')+'">'+k[1]+'</button>'}).join('')+'</div>'+
      '<label for="emd101S">العنوان (اختياري)</label><input id="emd101S" maxlength="80" placeholder="مثال: التحليل لا يقرأ الرقم">'+
      '<label for="emd101M">التفاصيل</label><textarea id="emd101M" maxlength="4000" placeholder="ماذا حدث؟ وماذا كنت تفعل؟ وماذا كنت تتوقع أن يحدث؟"></textarea>'+
      '<label for="emd101E">إيميلك للرد'+(em?'':' *')+'</label><input id="emd101E" type="email" value="'+esc(em)+'" placeholder="name@example.com"'+(em?' readonly':'')+'>'+
      '<label for="emd101C">واتساب (اختياري)</label><input id="emd101C" inputmode="tel" maxlength="20" placeholder="مثال: 99999999">'+
      '<div class="emd101-shot">'+(shot?'<img alt="" src="'+shot+'"><button type="button" class="emd93-link" data-k="noshot">حذف الصورة</button>':'<button type="button" class="emd93-gh" data-k="shot" style="margin-top:0">📷 إرفاق صورة للشاشة</button>')+'<input id="emd101File" type="file" accept="image/*" hidden></div>'+
      '<button type="button" class="emd93-go" data-k="send">📤 إرسال البلاغ</button><button type="button" class="emd93-link" data-k="home">رجوع</button>'+
      '<div class="emd93-msg" id="emd101Msg"></div><div class="emd93-note">🔒 تُرسل مع البلاغ معلومات تقنية تساعدنا: نسخة التطبيق ونوع الجهاز وعدد الطلبات والمنتجات. لا نرسل بيانات عملائك ولا طلباتهم.</div></div>';}
  else if(view==='sent'){h=head('✅ وصلنا بلاغك','شكرًا لك! سنراجعه ونرد عليك في أقرب وقت.')+'<div class="emd93-card">'+(sess()?'سيصلك الرد هنا داخل التطبيق في «📨 بلاغاتي»، ويظهر لك تنبيه 🔴 على زر المساعدة.':'سنرد عليك على البريد الذي كتبته، وإذا أنشأت حسابًا فسترى ردودنا داخل التطبيق أيضًا.')+'</div><button type="button" class="emd93-go" data-k="x">تم</button>';}
  else if(view==='mine'){h=head('📨 بلاغاتي','بلاغاتك وردودنا عليها.');
    if(!sess())h+='<div class="emd93-card">سجّل الدخول بحسابك لترى ردودنا هنا، وتصلك الردود على بريدك أيضًا.</div>';
    else if(mine===null)h+='<div class="emd93-card">⏳ جارٍ التحميل…</div>';
    else if(!mine.length)h+='<div class="emd93-card">لم ترسل أي بلاغ بعد.</div>';
    else h+=mine.map(function(t){return '<div class="emd101-t"><div class="h"><span>'+esc(t.subject||({problem:'🐞 مشكلة',question:'❓ سؤال',idea:'💡 اقتراح',other:'💬 أخرى'})[t.kind]||'بلاغ')+'</span><span class="emd101-st '+esc(t.status)+'">'+(t.status==='answered'?'✅ تم الرد':t.status==='closed'?'مغلق':'⏳ قيد المراجعة')+'</span></div><div class="m">'+esc(t.message)+'</div>'+(t.reply?'<div class="r"><b>ردّنا:</b>\n'+esc(t.reply)+'</div>':'')+'</div>'}).join('');
    h+='<button type="button" class="emd93-gh" data-k="home">رجوع</button>';
    if(mine&&mine.length){var mx=0;mine.forEach(function(t){if(t.replied_at)mx=Math.max(mx,new Date(t.replied_at).getTime())});if(mx)lsSet(SEEN,String(mx));setTimeout(paintChip,50)}}
  box.innerHTML=h;
}
function msg(k,t){var e=ov&&ov.querySelector('#emd101Msg');if(e){e.className='emd93-msg show '+k;e.textContent=t}}
function onInput(e){if(e.target.id==='emd101Q'){var f=ov.querySelector('#emd101Faq');if(f)f.innerHTML=faqHtml(e.target.value)}}
function onChange(e){if(e.target.id!=='emd101File')return;var f=e.target.files&&e.target.files[0];if(!f)return;compress(f).then(function(d){shot=d;keepForm(render)},function(){msg('err','تعذّرت قراءة الصورة. جرّب صورة أخرى.')})}
var draft=null;
function keepForm(fn){if(ov){var g=function(id){var x=ov.querySelector(id);return x?x.value:''};draft={s:g('#emd101S'),m:g('#emd101M'),e:g('#emd101E'),c:g('#emd101C')}}fn();if(draft&&ov){var p=function(id,v){var x=ov.querySelector(id);if(x&&v!=null&&!x.readOnly)x.value=v};p('#emd101S',draft.s);p('#emd101M',draft.m);p('#emd101E',draft.e);p('#emd101C',draft.c)}}
function compress(file){return new Promise(function(res,rej){var r=new FileReader();r.onerror=rej;r.onload=function(){var img=new Image();img.onerror=rej;img.onload=function(){
  var tries=[[1280,.72],[1024,.62],[800,.55],[640,.5]];for(var i=0;i<tries.length;i++){var mx=tries[i][0],sc=Math.min(1,mx/Math.max(img.width,img.height));var c=document.createElement('canvas');c.width=Math.round(img.width*sc);c.height=Math.round(img.height*sc);c.getContext('2d').drawImage(img,0,0,c.width,c.height);var d=c.toDataURL('image/jpeg',tries[i][1]);if(d.length<850000)return res(d)}rej(new Error('big'))};img.src=r.result};r.readAsDataURL(file)})}
function req(path,o){if((o.method||'GET')!=='GET'&&!H.canWrite())return Promise.reject(new Error('🧪 في التجربة لا يُرسل البلاغ إلى فريق التطبيق. جرّب الإرسال من تطبيقك الحالي.'));var a=api();if(!a)return Promise.reject(new Error('الخدمة غير متاحة الآن.'));var h={'apikey':a.key,'Content-Type':'application/json'};if(o.token)h.Authorization='Bearer '+o.token;if(o.prefer)h.Prefer=o.prefer;
  return fetch(a.url+path,{method:o.method||'GET',headers:h,body:o.body!=null?JSON.stringify(o.body):undefined}).then(function(r){return r.text().then(function(t){var j=null;try{j=t?JSON.parse(t):null}catch(e){}
    if(!r.ok){var m=String(j&&(j.message||j.msg)||'');var e=new Error(r.status===404||/schema cache|does not exist|Could not find/i.test(m)?'خدمة الدعم غير جاهزة بعد. حاول لاحقًا.':(r.status===401||r.status===403)?'انتهت الجلسة. سجّل دخول مرة ثانية وجرّب.':(m||('خطأ ('+r.status+')')));e.status=r.status;throw e}return j})},function(){throw new Error('ما فيه اتصال بالإنترنت.')})}
function tok(){var a=api();if(!a||!sess())return Promise.resolve(null);return a.token().catch(function(){return null})}
function send(){if(busy)return;var g=function(id){var x=ov.querySelector(id);return x?String(x.value||'').trim():''};
  var m=g('#emd101M'),em=g('#emd101E').toLowerCase(),c=g('#emd101C'),s=g('#emd101S');
  if(m.length<3){msg('err','اكتب تفاصيل المشكلة أولًا.');return}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)){msg('err','اكتب بريدًا إلكترونيًا صحيحًا لنتمكن من الرد عليك.');return}
  var a=api(),meta={v:a&&a.version||'',device:a&&a.device?a.device():'',lang:lang(),ua:navigator.userAgent.slice(0,160),screen:screen.width+'x'+screen.height,counts:counts(),cloud:!!sess(),hasImage:!!shot,page:location.origin+location.pathname,errs:(window.EMDErrLog?EMDErrLog.list():[]),net:navigator.onLine,pwa:!!((window.matchMedia&&matchMedia('(display-mode: standalone)').matches)||navigator.standalone),store:(function(){try{return H.sizeKb()}catch(e){return 0}})(),dev:(function(){try{return localStorage.getItem('emd_dev_id')||''}catch(e){return ''}})()};
  busy=true;var b=ov.querySelector('[data-k=send]');if(b){b.disabled=true;b.textContent='⏳ جارٍ الإرسال…'}
  tok().then(function(t){var uid=t&&a.uid?a.uid():null;return req('/rest/v1/emd_support_tickets',{method:'POST',token:t,prefer:'return=minimal',body:{user_id:uid||null,email:em,contact:c||null,kind:kind,subject:s||null,message:m,meta:meta,image:shot||null}})}).then(function(){
    busy=false;shot=null;draft=null;var n=+(lsGet(LOCAL)||0)+1;lsSet(LOCAL,String(n));mine=null;view='sent';render();loadMine()},function(err){busy=false;if(b){b.disabled=false;b.textContent='📤 إرسال البلاغ'}msg('err',err.message)})}
function loadMine(){if(!sess())return Promise.resolve();return tok().then(function(t){if(!t)return;return req('/rest/v1/emd_support_tickets?select=id,created_at,kind,subject,message,status,reply,replied_at&order=created_at.desc&limit=30',{token:t}).then(function(a){mine=Array.isArray(a)?a:[];if(ov&&(view==='mine'||view==='home'))render();paintChip()})}).catch(function(){if(mine===null)mine=[];if(ov&&view==='mine')render()})}
function onClick(e){var b=e.target.closest('[data-k],[data-kind]');if(!b)return;
  if(b.hasAttribute('data-kind')){kind=b.getAttribute('data-kind');[].forEach.call(ov.querySelectorAll('[data-kind]'),function(x){x.classList.toggle('on',x===b)});return}
  var k=b.getAttribute('data-k');
  if(k==='x'){close();return}if(k==='new'){view='new';render();return}if(k==='home'){view='home';render();return}if(k==='mine'){view='mine';render();loadMine();return}
  if(k==='shot'){var f=ov.querySelector('#emd101File');if(f)f.click();return}if(k==='noshot'){shot=null;keepForm(render);return}if(k==='send'){send();return}}
/* زر المساعدة في أعلى التطبيق */
function chip(){paintChip()}
function paintChip(){var b=document.getElementById('emd101Chip');if(!b)return;var u=unread(),d=b.querySelector('.emd101-dot');if(u&&!d){d=document.createElement('span');d.className='emd101-dot';b.appendChild(d)}else if(!u&&d)d.remove();b.title=u?'وصلك رد على بلاغك':'المساعدة والدعم'}
window.EMD101={open:open,loadMine:function(){return loadMine().then(paintChip,paintChip)},paint:paintChip};paintChip();
window.EMDSupportV101={open:open,faq:FAQ};
})();
