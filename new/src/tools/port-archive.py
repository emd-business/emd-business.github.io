# يبني src/lazy/archive.js: نافذة «🗄️ أرشيف الطلبات» V67 من التطبيق الحالي (البحث، الأرشفة حسب المدة، الإرجاع، الشهور).
# حُذف منها: التشغيل التلقائي والمؤقتات وإضافة الأزرار (التطبيق الجديد يضيف الزر ويشغّل الأرشفة التلقائية من lib/archive.js).
# داخل غلاف التجربة: localStorage = مفاتيح التجربة emd_rb_*، db = قاعدة التجربة؛ وفي التجربة لا كتابة في قاعدة الأرشيف المشتركة.
import re,sys,os,json
LIVE=sys.argv[1] if len(sys.argv)>1 else '/home/user/emd-business.github.io/index.html'
h=open(LIVE,encoding='utf8').read()
def block(tag_id,kind):
  a=h.index('<%s id="%s">'%(kind,tag_id));a=h.index('>',a)+1;b=h.index('</%s>'%kind,a);return h[a:b]
def cut(x,a,b='',n=1):
  c=x.count(a);assert c==n,(c,a[:90]);return x.replace(a,b)
def cutre(x,rx,b=''):
  y,c=re.subn(rx,lambda m:b,x,count=1,flags=re.S);assert c==1,rx[:70];return y
css=block('EMD-V67-archive-css','style')
i=h.index('<div id="emdV67Center"');j=h.index('<script id="EMD-V67-archive">');html=h[i:j].strip()
js=block('EMD-V67-archive','script')
js=cutre(js,r"  addTool\(\);addSearchLink\(\);wrapHistory\(\);wrapCustomers\(\);\n  \[700,1600,3600,8000\].*?setInterval\(function\(\)\{archiveNow\(false\)\.catch\(function\(\)\{\}\)\},6\*3600\*1000\);\n","")
js=cut(js,"if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();","init();")
# التجربة: لا كتابة في قاعدة الأرشيف المشتركة مع التطبيق الحالي
js=cut(js,"function archiveNow(manual){\n  if(running)return 0;","function archiveNow(manual){\n  if(PH.coBlock()){if(manual)throw new Error('الأرشفة تعمل بعد نشر النسخة الجديدة (نسخة تجربة).');return 0}\n  if(running)return 0;")
js=cut(js,"function restoreOrder(k){","function restoreOrder(k){\n  if(PH.coBlock())throw new Error('الإرجاع يعمل بعد نشر النسخة الجديدة (نسخة تجربة).');")
js=cut(js,"async function reconcile(){","async function reconcile(){\n  if(PH.coBlock())return;")
js=cut(js,"function rebuildPhones(){if(rebuilding)return rebuilding;","function rebuildPhones(){if(rebuilding)return rebuilding;if(PH.coBlock())return Promise.resolve();")
for bad in ['setInterval','MutationObserver','fetch(']:
  assert bad not in js,bad
js=re.sub(r"(?<![\w.$])(window\.)?localStorage\b",'PLS',js)
wrap=("(function(RW){var PH=RW.EMDPosH,PLS=PH.ls;\n"
  "var window=new Proxy(RW,{get:function(t,k){if(k==='db')return PH.db();if(k==='localStorage')return PLS;if(k==='save')return PH.save;var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t}});\n"
  "var db=PH.db();\n")
out=('/* مُولَّد بـ tools/port-archive.py من V67 — لا تعدّل هنا */\n(function(){var s=document.createElement("style");s.id="EMD-V67-archive-css";s.textContent='+json.dumps(css,ensure_ascii=False)+
  ';document.head.appendChild(s);var d=document.createElement("div");d.innerHTML='+json.dumps(html,ensure_ascii=False)+';while(d.firstChild)document.body.appendChild(d.firstChild)})();\n'+wrap+js+'\n})(window);\n')
open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','lazy','archive.js'),'w',encoding='utf8').write(out);print('archive.js',len(out.encode()),'bytes')
