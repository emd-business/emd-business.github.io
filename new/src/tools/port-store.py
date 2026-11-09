import re,json
s=open('/home/user/emd-business.github.io/index.html',encoding='utf-8').read()
def script(i):return re.search(r'<script id="'+re.escape(i)+r'"[^>]*>(.*?)</script>',s,re.S).group(1)
def style(i):return re.search(r'<style id="'+re.escape(i)+r'"[^>]*>(.*?)</style>',s,re.S).group(1)
def rep(t,a,b,n=1):
    c=t.count(a);assert c==n,(a[:80],c,n);return t.replace(a,b)
v411=script('EMD-V411-store')
i=v411.find('var STORE_HTML="');j=i+len('var STORE_HTML=');val,end=json.JSONDecoder().raw_decode(v411[j:])
v411=v411[:i]+v411[j+end+1:]
t=v411
t=rep(t,"if(window.__EMD_V411__)return;window.__EMD_V411__=true;\nvar KEY='emd_store_v411';","var KEY=EMDH.storeKey;")
t=rep(t,"function db(){try{return window.db||JSON.parse(localStorage.getItem('emd_business_v1')||'{}')}catch(e){return {}}}","function db(){return EMDH.db()}")
t=t.replace("window.db","EMDH.db()")
t=rep(t,"(window.EMDCoV430?window.EMDCoV430.storeQty(p):num(p.stock!=null?p.stock:p.qty))","EMDH.storeQty(p)")
# المعاينة: صفحة المتجر الحالية نفسها بدل نسخة مضمّنة
k=t.find("function pvHtml(){");e=t.find("\nvar EYE=",k)
t=t[:k]+r"""function pvHtml(){var d=JSON.stringify(pvData()).replace(/</g,'\\u003c');
  /* صفحة المتجر الحالية نفسها: بيانات المعاينة بدل قراءة المتجر من الخادم، وأي إرسال يتوقف برسالة */
  var shim='<script>window.__PV=1;(function(){var D='+d+',f=window.fetch;window.fetch=function(u,o){u=String(u&&u.url||u);'+
    'if(u.indexOf(\'/rpc/emd_store_get\')>=0)return Promise.resolve(new Response(JSON.stringify(D),{status:200,headers:{\'Content-Type\':\'application/json\'}}));'+
    'if(/supabase\\.co/.test(u))return new Promise(function(){setTimeout(function(){var g=document.getElementById(\'coGo\'),e=document.getElementById(\'err\'),en=document.documentElement.lang===\'en\';'+
    'if(g){g.disabled=false;g.textContent=en?\'Place order\':\'تأكيد الطلب\'}if(e)e.textContent=en?\'👁️ This is a preview. On the real store the order reaches the merchant.\':\'👁️ هذه معاينة فقط. في المتجر الحقيقي يصلك الطلب في التطبيق.\'},400)});'+
    'return f.apply(this,arguments)}})();<\/script>';
  return EMDH.storeHtml().then(function(h){return h.replace(/var SLUG=\(new URLSearchParams\(location\.search\)\.get\('s'\)\|\|''\)\.toLowerCase\(\)\.trim\(\);/,"var SLUG='preview';").replace('<head>','<head>'+shim)})}"""+t[e:]
t=rep(t,"w.querySelector('iframe').srcdoc=pvHtml()}","pvHtml().then(function(h){w.querySelector('iframe').srcdoc=h},function(){toast('تعذّر تحميل المعاينة. تحقّق من الاتصال.')})}")
# الحساب
t=rep(t,"function C(){var c=window.EMDCloudV93;return c&&c.api}","function C(){return EMDH.cloud}")
t=rep(t,"else if(act==='login'){close();try{window.EMDCloudV93.open()}catch(x){}}","else if(act==='login'){close();EMDH.login()}")
# الكتابة في الخادم متوقفة في التجربة (القراءة مسموحة)
t=rep(t,"function fn(action,body){var c=C();","function fn(action,body){if(action!=='orders'&&!EMDH.canWrite())return Promise.reject(new Error('🧪 في التجربة لا يُرسل شيء إلى متجرك الحقيقي.'));var c=C();")
# المؤقتات: تُشغَّل من ساعة التطبيق بدل مؤقتات خاصة
t=rep(t,"setInterval(function(){if(!document.hidden)stockCheck()},45000);","EMDH.every(45000,stockCheck);")
t=rep(t,"setInterval(function(){if(!document.hidden)stageSync()},60000);","EMDH.every(60000,stageSync);")
t=rep(t,"try{window.EMDNotificationsV317&&window.EMDNotificationsV317.badge()}catch(e){}}","EMDH.badge(N)}")
t=rep(t,"function badge(){[$('emd411Btn'),document.querySelector('#emd410Sheet [data-emd411]')].forEach(function(b){if(!b)return;var n=b.querySelector('.emd413-n');\n  if(!N){if(n)n.remove();return}if(!n){n=document.createElement('span');n.className='emd413-n';b.appendChild(n)}n.textContent=N>99?'99+':N})}","function badge(){EMDH.badge(N)}")
# الطلب المعتمد يدخل قاعدة التطبيق بقواعده
t=rep(t,"id:typeof window.nextSequentialOrderId==='function'?window.nextSequentialOrderId():'#'+String(d.orders.length+1).padStart(4,'0'),","id:EMDH.nextId(),")
t=rep(t,"obj.status=(typeof window.hasStockForNewOrderV23==='function'&&window.hasStockForNewOrderV23(obj))?'ready':'waiting';","obj.status=EMDH.hasStock(obj)?'ready':'waiting';")
t=rep(t,"try{if(typeof window.save==='function')window.save()}catch(e){}try{if(typeof window.render==='function')window.render()}catch(e){}","EMDH.save();EMDH.render();")
t=rep(t,"function openLocal415(id){try{if(typeof window.openOrderV26==='function'){window.openOrderV26(id);return}if(typeof window.openOrder31==='function'){window.openOrder31(id);return}}catch(e){}\n  try{show('orders')}catch(e){}}","function openLocal415(id){EMDH.openOrder(id)}")
# الحقن في واجهة التطبيق القديم يُحذف؛ الفتح من التطبيق الجديد مباشرة
k=t.find("var MINE={emd410Bar");e=t.find("})();",k)
t=t[:k]+"EMDH.every(55000,function(){poll()});document.addEventListener('visibilitychange',function(){if(!document.hidden)poll()});setTimeout(function(){poll(true)},1500);\n"+t[e:]
k=t.find("function inject(){");e=t.find("\n\n",k);t=t[:k]+t[e:]
assert 'setInterval(function(){inject' not in t
left=sorted(set(re.findall(r'window\.(?!open\b|E215\b|EMD150\b|EMD156Z\b|EMDStoreV411\b|EMDStageV157\b|EMDStockV156\b|__PV\b|matchMedia\b|AudioContext\b|webkitAudioContext\b|innerWidth\b|devicePixelRatio\b|CSS\b|__e154o\b|__e156o\b|__ltH\b|__nS\b)\w+',t)))
print('V411 leftovers',left,'SI',t.count('setInterval'))
mods=[t]
for i in ['EMD-V166-thumbs-js','EMD-V150-design','EMD-V182-season','EMD-V156-zones','EMD-V208-picker','EMD-V215-receipt']:
    x=script(i)
    x=x.replace("window.db","EMDH.db()").replace("localStorage.getItem('emd_business_v1')","JSON.stringify(EMDH.db())")
    if i=='EMD-V215-receipt':
        x=rep(x,"function call(action,b){var c=window.EMDCloudV93&&window.EMDCloudV93.api;","function call(action,b){if(action!=='list'&&!EMDH.canWrite())return Promise.reject(new Error('sandbox'));var c=EMDH.cloud;")
        x=rep(x,"function gcall(b){var c=window.EMDCloudV93&&window.EMDCloudV93.api;","function gcall(b){if(b&&b.action!=='mine'&&!EMDH.canWrite())return Promise.reject(new Error('🧪 في التجربة لا يُرسل شيء إلى متجرك الحقيقي.'));var c=EMDH.cloud;")
    if i=='EMD-V208-picker':
        x=rep(x,"base=new URL('t/',location.href).href","base=new URL('../t/',location.href).href")
    if i=='EMD-V182-season':
        x=x.replace("if(n++<60)setTimeout(h,250);return","return")
    left=sorted(set(re.findall(r'window\.(EMDCloudV93|db|save|render)\b',x)))
    print(i,len(x),'leftovers',left,'SI',x.count('setInterval'),'MO',x.count('MutationObserver'))
    mods.append('/* ===== '+i+' ===== */\n'+x)
css='\n'.join(style(i) for i in ['EMD-V411-store-css','EMD-V413-store-css','emd414-css','emd415-css','EMD-V150-design-css','EMD-V166-thumbs','EMD-V208-picker-css','EMD-V209-modal-fix','EMD-V215-css'])
head='''/* «🛍️ متجري»: منشئ المتجر وطلباته. يُحمَّل عند الحاجة فقط.
   نُقل من التطبيق الحالي كوحدة واحدة، مع ربطه بالتطبيق الجديد عبر EMDH، وبلا نسخة مضمّنة من صفحة المتجر:
   المعاينة تقرأ صفحة المتجر الحالية نفسها (../store/). في التجربة: لا نشر ولا اعتماد طلبات (القراءة فقط). */
(function(){'use strict';
var EMDH=window.EMDH;
var st=document.createElement('style');st.id='emdStoreCss';st.textContent='''+json.dumps(css,ensure_ascii=False)+''';document.head.appendChild(st);
'''
out=head+'\n'.join(mods)+'\n})();\n'
open('/mnt/project-files/emd-rebuild/src/lazy/store.js','w',encoding='utf-8').write(out)
print('store.js',len(out))
