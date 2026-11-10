# يبني src/lazy/wactl.js: «💬 التحكم برسائل واتساب» من التطبيق الحالي — V190 (الرسائل الافتراضية) + V192 (النافذة) + V193 (تفعيل كل رسالة).
# النافذة تفتح بزر رأس الصفحة كما في الحية. زر الحفظ يحفظ النص والتفعيل معًا (emdV193Save).
# داخل غلاف التجربة: localStorage = مفاتيح التجربة emd_rb_* مع قراءة احتياطية من التطبيق الحالي.
import re,sys,os,json
LIVE=sys.argv[1] if len(sys.argv)>1 else '/home/user/emd-business.github.io/index.html'
h=open(LIVE,encoding='utf8').read()
def block(tag_id,kind):
  a=h.index('<%s id="%s">'%(kind,tag_id));a=h.index('>',a)+1;b=h.index('</%s>'%kind,a);return h[a:b]
def cut(x,a,b='',n=1):
  c=x.count(a);assert c==n,(c,a[:90]);return x.replace(a,b)
def cutre(x,rx,b=''):
  y,c=re.subn(rx,lambda m:b,x,count=1,flags=re.S);assert c==1,rx[:70];return y
js=block('emd-v190-js','script')+'\n'
b=block('emd-v192-js','script')
b=cutre(b,r" // Put a dedicated button into an existing settings area when possible\.\n function inject\(\)\{.*?setTimeout\(inject,2500\);\n","")
b=cut(b,'onclick="emdV192Save()"','onclick="emdV193Save()"')
js+=b+'\n'
c=block('emd-v193-js','script')
c=cutre(c,r" // Keep the original open function but refresh cards every time\.\n document\.addEventListener\('click'.*?\n \}\);\n setTimeout\(function\(\)\{render\(\)\},500\);\n","")
js+=c+'\n'
assert 'setInterval' not in js and 'setTimeout(inject' not in js and 'MutationObserver' not in js
js=re.sub(r"(?<![\w.$])(window\.)?localStorage\b",'PLS',js)
css='\n'.join(block(i,'style') for i in ['emd-v190-css','emd-v192-css','emd-v193-css'])
wrap=("(function(RW){var PH=RW.EMDPosH,PLS=PH.ls;\n"
  "var window=new Proxy(RW,{get:function(t,k){if(k==='localStorage')return PLS;var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t}});\n")
out=('/* مُولَّد بـ tools/port-wactl.py من V190 وV192 وV193 — لا تعدّل هنا */\n(function(){var s=document.createElement("style");s.textContent='+json.dumps(css,ensure_ascii=False)+
  ';document.head.appendChild(s)})();\n'+wrap+js+'})(window);\n')
open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','lazy','wactl.js'),'w',encoding='utf8').write(out);print('wactl.js',len(out.encode()),'bytes')
