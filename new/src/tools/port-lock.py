# يبني src/lazy/lock.js: قفل التطبيق بكلمة مرور من التطبيق الحالي — V73 (التحقق PBKDF2 + القفل التلقائي) + V74 (زر 👁) + V80 (النافذة وشاشة القفل).
# داخل غلاف التجربة (window.EMDPosH): localStorage = مفاتيح التجربة emd_rb_* مع قراءة احتياطية من التطبيق الحالي.
import re,sys,os,json
LIVE=sys.argv[1] if len(sys.argv)>1 else '/home/user/emd-business.github.io/index.html'
h=open(LIVE,encoding='utf8').read()
def block(tag_id,kind):
  a=h.index('<%s id="%s">'%(kind,tag_id));a=h.index('>',a)+1;b=h.index('</%s>'%kind,a);return h[a:b]
def html_by_id(i):
  a=h.index('<div id="%s"'%i)
  d=0
  for m in re.finditer(r'<(/?)div\b',h[a:]):
    d+=-1 if m.group(1) else 1
    if d==0:e=a+m.end();e=h.index('>',e)+1;return h[a:e]
def cut(x,a,b='',n=1):
  c=x.count(a);assert c==n,(c,a[:80]);return x.replace(a,b)
def cutre(x,rx,b=''):
  y,c=re.subn(rx,lambda m:b,x,count=1,flags=re.S);assert c==1,rx[:60];return y
# CSS: أنماط V80 (الكتلة التي تسبق النافذة) + V82 زر الخروج + V74 + رفع شاشة القفل فوق كل شيء (V75)
a=h.index('<div id="emdSettingsV80"');s0=h.rindex('<style',0,a);s0=h.index('>',s0)+1;s1=h.index('</style>',s0)
# أنماط عامة في التطبيق الحالي تعتمد عليها النافذة (الحقول بعرض كامل، الصفوف تلتف)
GEN='#emdSettingsV80 input,#emdSettingsV80 textarea,#emdSettingsV80 select,#emdLockV80 input,#emdLockV80 textarea,#emdLockV80 select{width:100%;box-sizing:border-box;border:1px solid #dfe5ec;border-radius:11px;padding:11px;background:#fff;font:inherit;color:inherit}#emdSettingsV80 .row,#emdLockV80 .row{display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap}#emdSettingsV80 .row>*,#emdLockV80 .row>*{flex:0 1 auto;min-width:0;max-width:100%}#emdSettingsV80 .actions,#emdLockV80 .actions{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0}#emdSettingsV80 .muted,#emdLockV80 .muted{color:#687384;font-size:13px}'
css=GEN+'\n'+h[s0:s1]+'\n'+block('EMD-V74-eye-css','style')+'\n#emdLockV80{z-index:2147483000!important}\n'
html=html_by_id('emdSettingsV80')+html_by_id('emdLockV80')
html=cut(html,'onclick="closeSettingsV80();openBackupV39()"','onclick="closeSettingsV80();EMDPosH.backup()"')
js='/* ---- V73 كلمة المرور ---- */\n'+block('EMD-V73-password-core','script')+'\n'
x=block('EMD Business V80 - الإعدادات والحماية','script')
x=cut(x,"localStorage.removeItem(LOCK);document.getElementById('emdLockV80').style.display='none';","localStorage.removeItem(LOCK);document.getElementById('emdLockV80').style.display='none';RW.EMDPosH.unlocked();")
x=cut(x,"function showLock(){","function showLock(){RW.EMDPosH.locked();")
x=cut(x,"if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();","init();")
js+='/* ---- V80 ---- */\n'+x+'\n'
# V73: القفل التلقائي فقط (تنظيف النصوص غير لازم: التطبيق الجديد يهرّب كل النصوص عند العرض)
y=block('EMD-V73-security','script')
a=y.index('/* 2) القفل التلقائي');y="(function(){\n'use strict';\nvar PK='emd_business_password_v80',AUTO='emd_v73_autolock_min';\nfunction clean(){}\n"+y[a:]
y=cut(y,"setInterval(function(){var m=mins();if(m>0&&Date.now()-last>m*60000)lockNow()},20000);","RW.__lkTick=function(){var m=mins();if(m>0&&Date.now()-last>m*60000)lockNow()};")
y=cut(y,"[600,1800,4000].forEach(function(ms){setTimeout(addSetting,ms)});\n","")
js+='/* ---- V73 القفل التلقائي ---- */\n'+y+'\n'
z=block('EMD-V74-password-eye','script')
z=cutre(z,r"function init\(\)\{scan\(\);new MutationObserver.*?\n","function init(){scan()}\n")
z=cut(z,"if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();","init();RW.__lkScan=scan;")
js+='/* ---- V74 ---- */\n'+z+'\n'
assert 'setInterval' not in js and 'MutationObserver' not in js
assert not re.search(r"(?<![\w.$'\"])db\b",js),'db'
js=re.sub(r"(?<![\w.$])(window\.)?localStorage\b",'PLS',js)
# فتح النافذة: نفحص حقول كلمة المرور الجديدة (بدل المراقب)
js+="(function(){var o=window.openSettingsV80;window.openSettingsV80=function(){var r=o.apply(this,arguments);try{RW.__lkScan()}catch(e){}return r}})();\n"
wrap=("(function(RW){var PH=RW.EMDPosH,PLS=PH.ls;\n"
  "var window=new Proxy(RW,{get:function(t,k){if(k==='localStorage')return PLS;var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t}});\n")
out=('/* مُولَّد بـ tools/port-lock.py من V73 وV74 وV80 — لا تعدّل هنا */\n(function(){var s=document.createElement("style");s.textContent='+json.dumps(css,ensure_ascii=False)+
  ';document.head.appendChild(s);var d=document.createElement("div");d.innerHTML='+json.dumps(html,ensure_ascii=False)+';while(d.firstChild)document.body.appendChild(d.firstChild)})();\n'+wrap+js+'})(window);\n')
open(os.path.join(os.path.dirname(__file__),'..','lazy','lock.js'),'w',encoding='utf8').write(out);print('lock.js',len(out.encode()),'bytes')
