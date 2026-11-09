# يبني src/lazy/notify.js من «مركز التنبيهات» V317/V233 في التطبيق الحي، عبر window.EMDNotH
import re,sys,os,json
LIVE=sys.argv[1] if len(sys.argv)>1 else '/home/user/emd-business.github.io/index.html'
OUT=os.path.join(os.path.dirname(__file__),'..','lazy','notify.js')
h=open(LIVE,encoding='utf8').read()
def block(tag_id,kind):
  a=h.index('<%s id="%s">'%(kind,tag_id));a=h.index('>',a)+1;b=h.index('</%s>'%kind,a);return h[a:b]
css=block('EMD-V317-notifications-style','style')
a=h.index('<div id="emdNotifyV317"');b=h.index('<button id="emdNotifyBadgeV317"',a);html=h[a:b].strip()
js=block('EMD-V317-notifications-script','script')
def rep(x,y,n=1):
  global js;c=js.count(x);assert c==n,(c,x[:70]);js=js.replace(x,y)
rep("  'use strict';\n","  'use strict';var NH=window.EMDNotH;\n")
# أرقام الطلبات بالبادئة (EMD-0030) كما يعرضها التطبيق الحالي (V129)
js=js.replace("'#'+String(id).replace(/^#+/,'')","NH.fid(id)").replace("'#'+String(e.orderId||'').replace(/^#+/,'')","NH.fid(e.orderId||'')")
js=re.sub(r"  function db\(\)\{.*?\n","  function db(){return NH.db()}\n",js,count=1)
js=re.sub(r"\blocalStorage\b","NH.ls",js)
a=js.index("  function openOrder(id){");b=js.index("  /* EMD-V233:",a);js=js[:a]+"  function openOrder(id){NH.openOrder(String(id))}\n"+js[b:]
rep("var n=state.items.filter(function(x){return x.priority==='high'&&!__s[__k(x)]}).length;c.textContent=n>99?'99+':String(n);c.style.display=n?'flex':'none'}}",
    "var n=state.items.filter(function(x){return x.priority==='high'&&!__s[__k(x)]}).length;c.textContent=n>99?'99+':String(n);c.style.display=n?'flex':'none'}NH.count(n)}")
# الشارة تُرسم في الشريط السفلي للتطبيق الجديد؛ لا زر عائم ولا مؤقت
rep("var c=document.getElementById('emdNotifyCountV317');if(c){","var c={style:{}};if(c){")
a=js.index("  function injectTool(){");b=js.index("  window.EMDNotificationsV317=",a)
js=js[:a]+"  function init(){var c=document.getElementById('emdNotifyCloseV317');if(c)c.onclick=close}\n"+js[b:]
rep("  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();","  init();")
assert 'setInterval' not in js and 'window.db' not in js
out='/* مُولَّد بـ tools/port-notify.py من V317/V233 — لا تعدّل هنا */\n(function(){var s=document.createElement("style");s.textContent='+json.dumps(css,ensure_ascii=False)+';document.head.appendChild(s);var d=document.createElement("div");d.innerHTML='+json.dumps(html,ensure_ascii=False)+';document.body.appendChild(d.firstElementChild)})();\n'+js
open(OUT,'w',encoding='utf8').write(out);print('notify.js',len(out.encode()),'bytes')
