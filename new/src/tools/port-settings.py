# يبني src/lazy/settings.js من وحدات الإعدادات في التطبيق الحالي (بيانات النشاط V333، حروف رقم الطلب V129،
# جمل يتجاهلها التحليل V120، رسائل الطلب الجاهزة V121، اقتراح الفاتورة V117) داخل غلاف التجربة نفسه (window.EMDPosH):
# db = بيانات التطبيق الجديد، وlocalStorage = مفاتيح التجربة emd_rb_* مع قراءة احتياطية من التطبيق الحالي.
import re,sys,os,json
LIVE=sys.argv[1] if len(sys.argv)>1 else '/home/user/emd-business.github.io/index.html'
h=open(LIVE,encoding='utf8').read()
def block(tag_id,kind):
  a=h.index('<%s id="%s">'%(kind,tag_id));a=h.index('>',a)+1;b=h.index('</%s>'%kind,a);return h[a:b]
def html_by_id(i):
  a=h.index('<div id="%s"'%i);p=a;d=0
  for m in re.finditer(r'<(/?)div\b',h[a:]):
    d+=-1 if m.group(1) else 1
    if d==0:e=a+m.end();e=h.index('>',e)+1;return h[a:e]
def cut(x,a,b=None,n=1):
  c=x.count(a);assert c==n,(c,a[:70]);return x.replace(a,b if b is not None else '')
css='';js='';html=''
def add(name,x):  # db = بيانات التطبيق الجديد، إلا في وحدة تعرّف db محليًا
  if not re.search(r"(\bvar\s+|,)db\s*[=;,]|function db\(",x):x=re.sub(r"(?<![\w.$'\"])db\b(?!\s*[:(])",'window.db',x)
  return '/* ---- '+name+' ---- */\n'+x+'\n;\n'
# بيانات النشاط
x=block('EMD-V333-business-profile-js','script');css+=block('EMD-V333-business-profile-style','style');html+=html_by_id('emdV333BusinessProfileModal')
x=cut(x,"function admin(){try{return !!(window.EMDSecurityV315&&window.EMDSecurityV315.hasPermission&&window.EMDSecurityV315.hasPermission('*'))}catch(e){return false}}","function admin(){return RW.EMDPosH.owner()}")
x=cut(x,"function allowed(){try{if(!window.EMDFeatureManagerV318)return true;return !!(window.EMDFeatureManagerV318.isEnabled('businessProfile')&&window.EMDFeatureManagerV318.isVisible('businessProfile'))}catch(e){return false}}","function allowed(){return true}")
x=cut(x,"if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();","init();")
js+=add('V333',x)
# حروف رقم الطلب: نافذة الإعداد فقط (العرض بالبادئة موجود في التطبيق الجديد: idsFmt)
x=block('EMD-V129-prefix','script');css+=block('EMD-V129-css','style')
a=x.index('/* 1) النصوص الظاهرة في الصفحة */');b=x.index('/* 4) الإعداد */');x=x[:a]+x[b:]
x=cut(x,"setInterval(inject,1500);inject();\n","")
x=re.sub(r"function inject\(\)\{.*?\n","",x,count=1)
x=cut(x,"window.EMDEncWaV129=function(t){return encodeURIComponent(fmt(String(t==null?'':t)))};\n","")
x=cut(x,"window.EMDPrefixV129={get:get,fmt:fmt,open:open};","RW.EMDPrefixV129={get:get,fmt:RW.EMDPosH.idsFmt,open:open};")
js+=add('V129',x)
# جمل يتجاهلها التحليل: النافذة (التنظيف نفسه في lib/parseclean.js)
x=block('EMD-V120-parse','script');css+=block('EMD-V120-css','style')
a=x.index('function wrap(){var f=window.parse;');b=x.index('/* إدارة الجمل المتجاهلة */');x=x[:a]+x[b:]
x=re.sub(r"function inject\(\)\{.*?\nsetInterval\(inject,1500\);inject\(\);\n","",x,flags=re.S,count=1)
x=cut(x,"window.EMDParseCleanV120={clean:clean,open:open};","RW.EMDParseCleanV120={clean:clean,open:open};")
js+=add('V120',x)
# رسائل طلب جاهزة للعملاء
x=block('EMD-V121-templates','script');css+=block('EMD-V121-css','style')
x=re.sub(r"function inject\(\)\{.*?\n","",x,count=1);x=cut(x,"setInterval(inject,1500);inject();\n","")
js+=add('V121',x)
# اقتراح إرسال الفاتورة بعد الاستلام: التطبيق الجديد يستدعي check() بعد كل حفظ
x=block('EMD-V117-invprompt','script');css+=block('EMD-V117-css','style')
x=cut(x,"function wrap(){var f=window.save;if(typeof f!=='function'||f.__emd117)return;var g=function(){var r=f.apply(this,arguments);try{check()}catch(e){}return r};g.__emd117=true;window.save=g}\nsetTimeout(function(){snap=take();wrap()},1500);setInterval(wrap,2000);","snap=take();")
x=re.sub(r"function inject\(\)\{.*?\n.*?\n.*?\n","",x,count=1);x=cut(x,"setInterval(inject,1500);inject();\n","")
x=cut(x,"try{window.EMDMoneyV75.invoice(oid(o))}catch(e){}","RW.EMDPosH.invoice(oid(o))")
js+=add('V117',x)
# النسخ والاستعادة V313 + النسخ الاحتياطي والتخزين V122 + استرجاع الطلبات المفقودة V124
x=block('emd-v313-backup-js','script');css+=block('emd-v313-backup-css','style');html+=html_by_id('emdBackupV313')
x=re.sub(r"function addTool\(\)\{.*?\n\}\n","",x,count=1,flags=re.S)
x=cut(x,"  addTool();setTimeout(addTool,500);setTimeout(addTool,1500);\n","")
x=cut(x,"if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();","init();")
js+=add('V313',x)
x=block('EMD-V122-backup','script');css+=block('EMD-V122-css','style')
x=re.sub(r"function inject\(\)\{.*?\n","",x,count=1)
x=cut(x,"setInterval(inject,1500);inject();askPersist();\nsetTimeout(check,4000);setInterval(check,60000);","askPersist();setTimeout(check,4000);RW.__bkTick=check;")
js+=add('V122',x)
x=block('EMD-V124-fix','script');css+=block('EMD-V124-css','style')
x=re.sub(r"function inject\(\)\{.*?\n","",x,count=1)
x=re.sub(r"setInterval\(inject,1500\);inject\(\);\n?","",x,count=1)
js+=add('V124',x)
# الأدوار وسجل العمليات V315
x=block('EMD-V315-security-audit-script','script');css+=block('EMD-V315-security-audit-style','style');html+=html_by_id('emdSecurityV315')
x=re.sub(r"  function addTool\(\)\{.*?\n  \}\n","",x,count=1,flags=re.S)
x=cut(x,"    addTool();setTimeout(addTool,500);setTimeout(addTool,1500);\n","")
x=cut(x,"if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();","init();")
css+='#emdSecurityV315 input,#emdSecurityV315 textarea,#emdSecurityV315 select{width:100%;box-sizing:border-box;border:1px solid #dfe5ec;border-radius:11px;padding:11px;background:#fff;font:inherit;color:inherit}#emdSecurityV315 .row{display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap}#emdSecurityV315 .row>*{flex:0 1 auto;min-width:0;max-width:100%}#emdSecurityV315 .actions{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0}#emdSecurityV315 .muted{color:#687384;font-size:13px}'
js+=add('V315',x)
# إعدادات كشف التكرار V54 (الفحص نفسه في lib/dup.js)
x=block('EMD Business V54 - إعدادات كشف التكرار','script');css+=block('EMD Business V54 - إعدادات كشف التكرار','style');html+=html_by_id('emdDuplicateSettings54')
x=re.sub(r"  // زر الإعدادات داخل الاختصارات\.\n.*?setTimeout\(addShortcut54,500\);\n","",x,count=1,flags=re.S)
js+=add('V54',x)
# رسالة واتساب (القالب القديم = رسالة الشحن إن عدّلها التاجر، كما في V189)
a=h.index('const DEFAULT_WA_TEMPLATE');b=h.index('function waValue(',a)
x=h[a:b].replace('const DEFAULT_WA_TEMPLATE','var DEFAULT_WA_TEMPLATE')
x=x.replace("function openWaTemplate(){","window.openWaTemplate=function(){").replace("function closeWaTemplate(){","window.closeWaTemplate=function(){").replace("function saveWaTemplate(){","window.saveWaTemplate=function(){").replace("function resetWaTemplate(){","window.resetWaTemplate=function(){")
html+=html_by_id('waTemplateModal')
js+=add('WA',x)
# معالج الإعداد السريع V92 (يُفتح من الإعدادات؛ التشغيل التلقائي الأول غير لازم: التجربة تبدأ ببياناتك)
x=block('EMD-V92-onboard','script');css+=block('EMD-V92-onboard-css','style')
x=cut(x,"function admin(){try{return !!(window.EMDSecurityV315&&window.EMDSecurityV315.hasPermission&&window.EMDSecurityV315.hasPermission('*'))}catch(e){return true}}","function admin(){return RW.EMDPosH.owner()}")
x=cut(x,"function persist(){try{window.save&&window.save()}catch(e){}try{window.render&&window.render()}catch(e){}}","function persist(){RW.EMDPosH.homeRefresh();RW.EMDPosH.alias.save()}")
x=re.sub(r"function tryOrder\(\)\{.*?\n\}\n","function tryOrder(){var txt=sample();done();RW.EMDPosH.importMsg(txt)}\n",x,count=1,flags=re.S)
x=cut(x,"if(k==='restore'){done();try{window.EMDProtectV66&&window.EMDProtectV66.open();setTimeout(function(){var f=document.getElementById('emd66FileInput');f&&f.click()},300)}catch(e){}return}","if(k==='restore'){done();RW.EMDPosH.backup();return}")
x=cut(x,"if(k==='login'||k==='signup'){done();try{window.EMDCloudV93&&window.EMDCloudV93.open(k)}catch(e){}return}","if(k==='login'||k==='signup'){done();RW.EMDPosH.cloud(k);return}")
x=cut(x,"if(k==='finish'){done();try{window.show&&window.show('home')}catch(e){}return}","if(k==='finish'){done();RW.EMDPosH.goHome();return}")
x=re.sub(r"/\* زر في الإعدادات لإعادة فتح المعالج \*/.*?window\.EMDOnboardV92=\{open:open\};\n.*?\n.*?\n","window.EMDOnboardV92={open:open};\n",x,count=1,flags=re.S)
assert 'hubButton' not in x and 'auto()' not in x,'v92'
js+=add('V92',x)
# تخصيص الرئيسية: إظهار البطاقات V337، ترتيبها V338، إبراز المهم V339 — نفس النوافذ والمفاتيح؛ التطبيق يرسم البطاقات حسبها
ADM="function admin(){try{return typeof window.isAdmin==='function'?!!window.isAdmin():(window.currentUser&&window.currentUser.role==='admin')||document.body.getAttribute('data-role')==='admin'}catch(e){return false}}"
for v,sid,cid,hid in [('V337','EMD-V337-dashboard-js','EMD-V337-dashboard-style','emdV337DashboardModal'),('V338','EMD-V338-dashboard-order-script','EMD-V338-dashboard-order-style','emdV338DashboardOrderModal'),('V339','EMD-V339-dashboard-priority-script','EMD-V339-dashboard-priority-style','emdV339DashboardPriorityModal')]:
  x=block(sid,'script');css+=block(cid,'style');html+=html_by_id(hid)
  x=cut(x,ADM,"function admin(){return RW.EMDPosH.owner()}")
  x=re.sub(r"function allowed\(\)\{try\{.*?\}catch\(e\)\{return true\}\}","function allowed(){return true}",x,count=1)
  if v=='V337':
    x=cut(x,"function apply(){var st=read();cards().forEach(function(el){var k=el.getAttribute('data-home-status');el.style.display=st[k]?'none':''})}","function apply(){RW.EMDPosH.homeRefresh()}")
    x=re.sub(r"apply\(\);try\{new MutationObserver\(.*?\}catch\(e\)\{\}","apply();",x,count=1,flags=re.S)
    x=cut(x,"if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();","boot();")
  if v=='V338':
    x=re.sub(r"  function apply\(\)\{if\(applying\)return;.*?\n","  function apply(){RW.EMDPosH.homeRefresh()}\n",x,count=1)
    x=re.sub(r"  function observe\(\)\{.*?\n","  function observe(){}\n",x,count=1)
    x=cut(x,"if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();","boot();")
  if v=='V339':
    x=re.sub(r"function apply\(\)\{var chosen=load\(\);.*?\n","function apply(){RW.EMDPosH.homeRefresh()}\n",x,count=1)
    x=cut(x,"document.addEventListener('DOMContentLoaded',function(){","(function(){")
    x=cut(x,"apply();setTimeout(apply,500);setTimeout(apply,1500);});","})();")
    x=re.sub(r"var last='';function watch\(\)\{.*?setInterval\(watch,1200\);\n","",x,count=1,flags=re.S)
  js+=add(v,x)
# ترتيب الأزرار والأقسام V114: أقسام الرئيسية وبطاقات الحالات (يُحفظ في db.uiOrder مثل التطبيق الحالي)
x=block('EMD-V114-layout','script');css+=block('EMD-V114-css','style')+'\n#emd114Modal .row>button{flex:0 0 auto}#emd114Modal .row>b{flex:1}'
a=x.index('var GROUPS={');b=x.index('function D(){')
x=x[:a]+"""var GROUPS={
 home:{title:'🏠 أقسام الصفحة الرئيسية',short:'🏠 الرئيسية',hint:'ترتيب: الترحيب، شريط المبيعات، بطاقات الحالات، أزرار الإدخال، لوحة اليوم.',def:['hero','strip','grid','actions','daily'],labels:{hero:'👋 الترحيب والساعة',strip:'💰 شريط مبيعات اليوم',grid:'🧮 بطاقات حالات الطلبات',actions:'⚡ أزرار الإدخال السريع',daily:'🎯 لوحة اليوم'}},
 homestats:{title:'🧮 بطاقات حالات الطلبات',short:'🧮 البطاقات',hint:'ترتيب بطاقات: جديدة، بانتظار المنتجات، جاهزة، قيد التجهيز، تم الشحن، تم الاستلام.',def:['new','waiting','ready','packing','shipped','received'],labels:{new:'🆕 طلبات جديدة',waiting:'⏳ بانتظار المنتجات',ready:'🟢 جاهزة للتجهيز',packing:'🛠️ قيد التجهيز',shipped:'🚚 تم الشحن',received:'📬 تم الاستلام'}}
};
"""+x[b:]
x=cut(x,"var cg='nav';","var cg='home';")
x=re.sub(r"function watch\(\)\{.*?\n","",x,count=1)
x=cut(x,"function setOrder(g,keys){var d=D();if(!d.uiOrder)d.uiOrder={};if(keys)d.uiOrder[g]=keys;else delete d.uiOrder[g];persist();if(GROUPS[g].dyn)applyDyn(g);refreshOthers(g)}","function setOrder(g,keys){var d=D();if(!d.uiOrder)d.uiOrder={};if(keys)d.uiOrder[g]=keys;else delete d.uiOrder[g];persist();RW.EMDPosH.homeRefresh()}")
x=re.sub(r"function inject\(\)\{.*?\n.*?\n.*?\n","",x,count=1)
x=cut(x,"setInterval(function(){watch();applyAll();inject()},1500);watch();inject();\n","")
js+=add('V114',x)
for j in [js]:
  assert 'setInterval' not in j and 'MutationObserver' not in j
js=re.sub(r"(?<![\w.$])(window\.)?localStorage\b",'PLS',js)
wrap=("(function(RW){var PH=RW.EMDSetH,PLS=PH.ls;\n"
  "var window=new Proxy(RW,{get:function(t,k){if(k==='db')return PH.db();if(k==='localStorage')return PLS;if(PH.alias[k]&&!(k in t))return PH.alias[k];var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t||!!PH.alias[k]}});\n")
out='/* مُولَّد بـ tools/port-settings.py من V333 وV129 وV120 وV121 وV117 وV313 وV122 وV124 وV315 — لا تعدّل هنا */\n(function(){var s=document.createElement("style");s.textContent='+json.dumps(css,ensure_ascii=False)+';document.head.appendChild(s);var d=document.createElement("div");d.innerHTML='+json.dumps(html,ensure_ascii=False)+';while(d.firstChild)document.body.appendChild(d.firstChild)})();\n'+wrap+js+'})(window);\n'
out=out.replace('RW.EMDPosH','RW.EMDSetH')
open(os.path.join(os.path.dirname(__file__),'..','lazy','settings.js'),'w',encoding='utf8').write(out);print('settings.js',len(out.encode()),'bytes')
