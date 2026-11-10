# يبني src/lazy/icons.js: نافذة «🎛️ شكل الأزرار والشريط السفلي» V412 من التطبيق الحالي داخل غلاف التجربة (window.EMDPosH).
# الأيقونات في بطاقات الحالات والشريط السفلي يرسمها التطبيق الجديد (lib/icons.js وrenderBar)؛ النافذة تحفظ نفس المفاتيح emd412_icons وemd412_bar.
import re,sys,os,json
LIVE=sys.argv[1] if len(sys.argv)>1 else '/home/user/emd-business.github.io/index.html'
h=open(LIVE,encoding='utf8').read()
def block(tag_id,kind):
  a=h.index('<%s id="%s">'%(kind,tag_id));a=h.index('>',a)+1;b=h.index('</%s>'%kind,a);return h[a:b]
def cut(x,a,b='',n=1):
  c=x.count(a);assert c==n,(c,a[:80]);return x.replace(a,b)
def cutre(x,rx,b=''):
  y,c=re.subn(rx,lambda m:b,x,count=1,flags=re.S);assert c==1,rx[:60];return y
css=block('EMD-V412-css','style')
a=css.index('/* نافذة الإعداد */');css=css[a:]
x=block('EMD-V412','script')
x=cut(x,"function applyStyle(){var b=document.body,s=style();STYLES.forEach(function(x){b.classList.toggle('emd412-s-'+x[0],x[0]===s)});sweep()}","function applyStyle(){RW.EMDPosH.icStyle()}")
x=cutre(x,r"/\* استبدال الإيموجي في بداية النص \*/.*?(?=/\* ===== الشريط السفلي ===== \*/)","")
x=cutre(x,r"function navBy\(sel\).*?(?=/\* ===== نافذة الإعداد ===== \*/)","function buildBar(){RW.EMDPosH.icBar()}\n")
x=cutre(x,r"var obsT=0;function soon\(\).*?if\(document\.readyState==='loading'\)document\.addEventListener\('DOMContentLoaded',boot\);else boot\(\);\n","")
assert 'setInterval' not in x and 'MutationObserver' not in x
x=re.sub(r"(?<![\w.$])(window\.)?localStorage\b",'PLS',x)
wrap=("(function(RW){var PH=RW.EMDPosH,PLS=PH.ls;\n"
  "var window=new Proxy(RW,{get:function(t,k){if(k==='localStorage')return PLS;var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t}});\n")
out='/* مُولَّد بـ tools/port-icons.py من V412 — لا تعدّل هنا */\n(function(){var s=document.createElement("style");s.textContent='+json.dumps(css,ensure_ascii=False)+';document.head.appendChild(s)})();\n'+wrap+'/* ---- V412 ---- */\n'+x+'\n})(window);\n'
open(os.path.join(os.path.dirname(__file__),'..','lazy','icons.js'),'w',encoding='utf8').write(out);print('icons.js',len(out.encode()),'bytes')
