# يبني src/lazy/look.js: نافذة «المظهر والهوية» ومحرك الألوان V89 + الثيمات الجاهزة V409 من التطبيق الحالي،
# داخل غلاف التجربة (window.EMDPosH). الرأس والتحية وصورة الرئيسية يرسمها التطبيق الجديد (lib/look.js).
import re,sys,os,json
LIVE=sys.argv[1] if len(sys.argv)>1 else '/home/user/emd-business.github.io/index.html'
h=open(LIVE,encoding='utf8').read()
def block(tag_id,kind):
  a=h.index('<%s id="%s">'%(kind,tag_id));a=h.index('>',a)+1;b=h.index('</%s>'%kind,a);return h[a:b]
def cut(x,a,b='',n=1):
  c=x.count(a);assert c==n,(c,a[:80]);return x.replace(a,b)
def cutre(x,rx,b=''):
  y,c=re.subn(rx,lambda m:b,x,count=1,flags=re.S);assert c==1,rx[:60];return y
css=block('EMD-V89-look-css','style');css2=block('EMD-V89-dark-themes-v409','style')
# الثيمات: نفس القواعد على عناصر التطبيق الجديد (التحية .hero، شريط المال .money، بطاقات الحالات .stat)
def th(c):
  for o,n in [(' .emd90-hero .emd88-date',' #view>.hero .date'),(' .emd90-hero .emd90-img',' #view>.hero .himg'),(' .emd90-hero',' #view>.hero'),
    (' .emd75-strip b.due',' .money b.gold'),(' .emd75-strip',' .money'),(' .card.stat[data-home-status=new] .n',' .stat[data-filter=new] b'),
    (' .card.stat[data-home-status=new]',' .stat[data-filter=new]'),(' .card.stat .n',' .stat b'),(' .card.stat',' .stat'),(' .primary',' .btn.dark'),(' .secondary',' .hbtns button')]:
    c=c.replace(o,n)
  # متغيرات التطبيق الجديد: --text→--ink، --muted→--mute، --accent→--navy
  c=re.sub(r"(body\.emdth-\w+)\{([^}]*)\}",lambda m:m.group(1)+'{'+m.group(2)+(';--ink:'+re.search(r'--text:([^;]+)',m.group(2)).group(1) if '--text:' in m.group(2) else '')+(';--mute:'+re.search(r'--muted:([^;]+)',m.group(2)).group(1) if '--muted:' in m.group(2) else '')+(';--navy:'+re.search(r'--accent:([^;]+)',m.group(2)).group(1) if '--accent:' in m.group(2) else '')+'}',c)
  # عناصر لا توجد في التطبيق الجديد (الشريط العلوي القديم، لوحة V90)
  c=re.sub(r'body\.emdth-\w+ \.nav button(\.active)?,','',c);c=re.sub(r',body\.emdth-\w+ \.nav button(\.active)?(?=[{,])','',c);c=re.sub(r'\nbody\.emdth-\w+ \.nav button\{[^}]*\}','',c)
  return c
css2=th(css2)+"\nbody[class*=emdth-] #view>.hero{padding:16px;border-radius:22px}\n"
x=block('EMD-V89-look','script')
x=cut(x,"function apply(v){\n  cur=v;var acc=safeAccent(v.accent||DEF.accent),dark=isDark(v),st={dark:dark,acc:acc.toLowerCase()!==DEF.accent||dark};",
 "function apply(v){\n  cur=v;var acc=safeAccent(v.accent||DEF.accent),dark=isDark(v),st={dark:dark,acc:acc.toLowerCase()!==DEF.accent||dark};RW.EMDPosH.look(dark,st.acc,v);")
x=cut(x,"  paintStore();paintHome();try{window.EMDGreetingV88&&window.EMDGreetingV88.tick()}catch(e){}\n}","  RW.EMDPosH.lookPaint();\n}")
x=cutre(x,r"function paintHome\(\)\{.*?\n\}\n","function paintHome(){RW.EMDPosH.lookPaint()}\n")
x=cutre(x,r"document\.addEventListener\('click',function\(e\)\{var b=e\.target\.closest&&e\.target\.closest\('#home \.emd90-img'\).*?\n.*?\n","")
x=cutre(x,r"function paintStore\(\)\{.*?\n\}\n","function paintStore(){RW.EMDPosH.lookPaint()}\n")
x=cut(x,"function admin(){try{return !!(window.EMDSecurityV315&&window.EMDSecurityV315.hasPermission&&window.EMDSecurityV315.hasPermission('*'))}catch(e){return true}}","function admin(){return RW.EMDPosH.owner()}")
x=cut(x,"  setInterval(function(){hook();paintStore();paintHome();sweep()},1200);\n  setInterval(function(){if(cur&&cur.mode==='time'){var d=isDark(cur);if(d!==ST.dark)apply(cur)}},60000);",
 "  RW.__lookSweep=sweep;RW.__lookTick=function(){if(cur&&cur.mode==='time'){var d=isDark(cur);if(d!==ST.dark)apply(cur)}};\n  document.addEventListener('click',function(){setTimeout(sweep,60);setTimeout(sweep,500)},true);")
x=cut(x,"  setTimeout(function(){apply(load())},2500);\n","")
x=cut(x,"if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();","init();")
js='/* ---- V89 ---- */\n'+x+'\n'
y=block('EMD-V409-themes','script')
# نبقي اختيار الثيم فقط؛ ترتيب النوافذ (emd409-busy/setup/quiet) خاص بالتطبيق الحالي
y=cutre(y,r"/\* ترتيب النوافذ عند الفتح \*/.*?function boot\(\)\{tick\(\);setInterval\(tick,700\)\}\n","function boot(){paint();RW.__lookInject=inject}\n")
y=cut(y,"if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();","boot();")
js+='/* ---- V409 ---- */\n'+y+'\n'
# قسم الثيمات يُضاف عند رسم نافذة المظهر (بدل الفحص كل 700 ملّي ثانية)
js=js.replace("function render(){if(!ov)return;var y=ov.firstChild.scrollTop;ov.firstChild.innerHTML=body();ov.firstChild.scrollTop=y;preview()}",
 "function render(){if(!ov)return;var y=ov.firstChild.scrollTop;ov.firstChild.innerHTML=body();try{RW.__lookInject&&RW.__lookInject()}catch(e){}ov.firstChild.scrollTop=y;preview()}")
assert 'RW.__lookInject&&' in js
assert 'setInterval' not in js and 'MutationObserver' not in js
assert not re.search(r"(?<![\w.$'\"])db\.(orders|products)",js)
js=re.sub(r"(?<![\w.$])(window\.)?localStorage\b",'PLS',js)
wrap=("(function(RW){var PH=RW.EMDPosH,PLS=PH.ls;\n"
  "var window=new Proxy(RW,{get:function(t,k){if(k==='db')return PH.db();if(k==='localStorage')return PLS;if(PH.alias[k]&&!(k in t))return PH.alias[k];var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t||!!PH.alias[k]}});\n")
out='/* مُولَّد بـ tools/port-look.py من V89 وV409 — لا تعدّل هنا */\n(function(){var s=document.createElement("style");s.id="EMD-V89-look-css";s.textContent='+json.dumps(css,ensure_ascii=False)+';document.head.appendChild(s);var t=document.createElement("style");t.id="EMD-V89-dark-themes-v409";t.textContent='+json.dumps(css2,ensure_ascii=False)+';document.head.appendChild(t)})();\n'+wrap+js+'})(window);\n'
open(os.path.join(os.path.dirname(__file__),'..','lazy','look.js'),'w',encoding='utf8').write(out);print('look.js',len(out.encode()),'bytes')
