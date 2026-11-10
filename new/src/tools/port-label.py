# يبني src/lazy/label.js: ملصق الشحن كاملًا من التطبيق الحالي —
# V418 (النافذة والرسم) + V422 (الطباعة عبر البلوتوث) + V423 (تصميم الملصق والملصق السريع) + V424 (إعدادات الملصق السريع)
# + V137 (رسوم التوصيل في الملصق، ضبط موضع الطباعة) + V138 (حجم الخط) + V143 (ملاءمة عرض الطابعة) + V155 (زر التثبيت، محليًا فقط).
# بدل المراقبات والمؤقتات: خطافات RW.__lblH تُستدعى بعد رسم النافذة وبعد تجهيز المعاينة.
# داخل غلاف التجربة (window.EMDPosH): localStorage = مفاتيح التجربة emd_rb_* مع قراءة احتياطية، وdb = قاعدة التجربة.
import re,sys,os,json
LIVE=sys.argv[1] if len(sys.argv)>1 else '/home/user/emd-business.github.io/index.html'
h=open(LIVE,encoding='utf8').read()
def block(tag_id,kind):
  a=h.index('<%s id="%s">'%(kind,tag_id));a=h.index('>',a)+1;b=h.index('</%s>'%kind,a);return h[a:b]
def cut(x,a,b='',n=1):
  c=x.count(a);assert c==n,(c,a[:90]);return x.replace(a,b)
def cutre(x,rx,b=''):
  y,c=re.subn(rx,lambda m:b,x,count=1,flags=re.S);assert c==1,rx[:70];return y
def between(x,a,b):
  i=x.index(a);j=x.index(b,i);return x[i:j]
HOOK="(RW.__lblH||[]).forEach(function(f){try{f()}catch(e){}});"
# ---- V418 ----
a=block('EMD-V418-label','script')
i=a.index("ov.innerHTML='<div class=\"win\">");j=a.index("</div></div>';",i)+len("</div></div>';");a=a[:j]+HOOK+a[j:]
a=cut(a,"render(cur).then(function(list){last=list;","render(cur).then(function(list){last=list;setTimeout(function(){"+HOOK+"},0);")
a=cutre(a,r"/\* ===== الأزرار ===== \*/.*?function tick\(\)\{.*?\n","")
a=cut(a,"function boot(){tick();setInterval(function(){if(!document.hidden)tick()},1200)}\nif(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();\n","")
a=cut(a,"window.EMDLabelV418={open:open,","window.EMDLabelV418={close:close,open:open,")
# الرأس ومقاس الملصق ظاهران عند الفتح (اللوحات الإضافية تُدرج فورًا فيبعد زر المشاركة)
a=cut(a,"if(b)b.focus()},50)","if(b)b.focus({preventScroll:true})},50)")
js='/* ---- V418 ---- */\n'+a+'\n'
# ---- V137 (أجزاء الملصق فقط) ----
v=block('emd-v137-js','script')
p1=between(v,"function num(v){","/* 3) أول فتح")
p2=between(v,"/* 1ب) رسوم التوصيل","/* أ) في شاشة الطلب الجديد")
p3="var pend='';\n"+between(v,"function detailOrder(){","function addDetailRow(){")
p4=between(v,"document.addEventListener('click',function(e){\n  var fb","/* 1ج) ضبط")
p4=cut(p4,"new MutationObserver(function(){var ov=document.getElementById('emd418');if(ov&&!ov.__e137){ov.__e137=1;new MutationObserver(function(){setTimeout(labelRow,0)}).observe(ov,{childList:true,subtree:true})}}).observe(document.body,{childList:true});","(RW.__lblH=RW.__lblH||[]).push(labelRow);")
p5=between(v,"/* 1ج) ضبط","/* 7) زر «الموظفين»")
js+='/* ---- V137 (الملصق) ---- */\n(function(){\'use strict\';\n'+p1+p2+p3+p4+p5+'})();\n'
# ---- V138 + V143 ----
js+='/* ---- V138 ---- */\n'+block('EMD-V138-fontsize','script')+'\n/* ---- V143 ---- */\n'+block('EMD-V143-label-fit','script')+'\n'
# ---- V422 ----
b=block('EMD-V422-btprint','script')
b=cut(b,"var mo=null;function watch(){var ov=$('emd418');if(!ov||mo)return;mo=new MutationObserver(inject);mo.observe(ov,{childList:true});inject()}","(RW.__lblH=RW.__lblH||[]).push(inject);")
b=cut(b,"if(!b){setTimeout(watch,0);return}","if(!b)return;")
b=cut(b,"var wt=setInterval(function(){watch();if(mo)clearInterval(wt)},1000);\n","")
js+='/* ---- V422 ---- */\n'+b+'\n'
# ---- V423 ----
c=block('EMD-V423-labeldesign','script')
c=cutre(c,r"function addButtons\(\)\{.*?\ndocument\.addEventListener\('click',function\(ev\)\{var b=ev\.target\.closest&&ev\.target\.closest\('\[data-e423q\],\[data-e423m\]'\).*?\n","")
c=cut(c,"var mo=null;function watch(){var ov=$('emd418');if(!ov||mo)return;mo=new MutationObserver(function(){inject();if(tab==='quick')qpv()});mo.observe(ov,{childList:true});inject()}\nvar wt=setInterval(function(){watch();if(mo)clearInterval(wt)},1000);",
  "(RW.__lblH=RW.__lblH||[]).push(function(){inject();if(tab==='quick')qpv()});")
c=cut(c,"if(!b){setTimeout(watch,0);return}","if(!b)return;")
js+='/* ---- V423 ---- */\n'+c+'\n'
# ---- V424 ----
d=block('EMD-V424-quicksettings','script')
d=cutre(d,r"/\* ===== بطاقة الإعدادات ===== \*/.*?setInterval\(function\(\)\{try\{card\(\)\}catch\(e\)\{\}\},1000\);","")
d=cut(d,"draw();ov.classList.add('show');setTimeout(","draw();ov.classList.add('show');try{RW.__lblPinInject()}catch(e){}setTimeout(")
d=cut(d,"window.EMDQuickV424={open:open,size:size};","window.EMDQuickV424={open:open,size:size,opt:opt};")
js+='/* ---- V424 ---- */\n'+d+'\n'
# ---- V155: زر «📌 تثبيت تصميم الملصق» على هذا الجهاز (لا كتابة للسحابة من التجربة) ----
e=block('EMD-V155-labelpin','script')
e=cutre(e,r"var SP=Storage\.prototype,rawSet=SP\.setItem,rawDel=SP\.removeItem,rawGet=SP\.getItem,inner=false,userUntil=0,tE=null,tP=null;\nfunction g\(k\)\{.*?\nfunction s\(k,v\)\{.*?\n",
  "var userUntil=0,tE=null,tP=null;\nfunction g(k){try{return localStorage.getItem(k)}catch(e){return null}}\nfunction s(k,v){try{if(v==null)localStorage.removeItem(k);else localStorage.setItem(k,v)}catch(e){}}\n")
e=cutre(e,r"SP\.setItem=function.*?\nSP\.removeItem=function.*?\n","")
e=cutre(e,r"var UI='#emd418,#e424,\[data-e424\]';\n\['pointerdown'.*?\n","")
e=cutre(e,r"function logged\(\)\{.*?\n","function logged(){return false}\n")
e=cutre(e,r"function verify\(p,n\)\{.*?\n(  .*?\n)*","function verify(){return Promise.resolve(false)}\n")
e=cut(e,"new MutationObserver(function(){inject()}).observe(document.documentElement,{childList:true,subtree:true});\nsetTimeout(enforce,0);setInterval(function(){if(!document.hidden&&!isUser())enforce()},4000);",
  "(RW.__lblH=RW.__lblH||[]).push(inject);RW.__lblPinInject=inject;")
js+='/* ---- V155 ---- */\n'+e+'\n'
for bad in ['setInterval','MutationObserver','Storage.prototype','fetch(']:
  assert bad not in js,bad
# db عبر الغلاف
js=re.sub(r"(?<![\w.$'\"])db\.orders",'window.db.orders',js)
assert not re.search(r"(?<![\w.$'\"])db\b(?!\s*[:(])",js),'bare db'
js=re.sub(r"(?<![\w.$])(window\.)?localStorage\b",'PLS',js)
css='\n'.join(block(i,'style') for i in ['emd418-css','EMD-V422-btprint-css','EMD-V423-labeldesign-css','EMD-V424-quicksettings-css','EMD-V138-fontsize-css','EMD-V143-style','EMD-V155-labelpin-css'])
v137css=block('emd-v137-css','style');css+='\n'+v137css[v137css.index('/* زر رسوم التوصيل */'):]
wrap=("(function(RW){var PH=RW.EMDPosH,PLS=PH.ls;\n"
  "var window=new Proxy(RW,{get:function(t,k){if(k==='db')return PH.db();if(k==='localStorage')return PLS;if(k==='save')return PH.save;if(k==='render')return PH.render;var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t}});\n")
out=('/* مُولَّد بـ tools/port-label.py من V418 وV422 وV423 وV424 وV137 وV138 وV143 وV155 — لا تعدّل هنا */\n(function(){var s=document.createElement("style");s.textContent='+json.dumps(css,ensure_ascii=False)+
  ';document.head.appendChild(s)})();\n'+wrap+js+'})(window);\n')
open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','lazy','label.js'),'w',encoding='utf8').write(out);print('label.js',len(out.encode()),'bytes')
