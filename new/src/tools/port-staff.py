# يبني src/lazy/staff.js: الموظفون والصلاحيات V108 + زر الموظفين V111 من التطبيق الحالي، داخل غلاف التجربة (window.EMDPosH).
# الصلاحيات تُطابق أزرار التطبيق الجديد (data-act / data-go) بدل أسماء دوال التطبيق القديم. التقفيلة = شاشة التطبيق الجديد.
import re,sys,os,json
LIVE=sys.argv[1] if len(sys.argv)>1 else '/home/user/emd-business.github.io/index.html'
h=open(LIVE,encoding='utf8').read()
def block(tag_id,kind):
  a=h.index('<%s id="%s">'%(kind,tag_id));a=h.index('>',a)+1;b=h.index('</%s>'%kind,a);return h[a:b]
def cut(x,a,b='',n=1):
  c=x.count(a);assert c==n,(c,a[:80]);return x.replace(a,b)
def cutre(x,rx,b=''):
  y,c=re.subn(rx,lambda m:b,x,count=1,flags=re.S);assert c==1,rx[:60];return y
css=block('EMD-V93-cloud-css','style')+block('EMD-V108-staff-css','style')+block('EMD-V111-css','style')
css+="\n#emd108Chip{display:none}body.emd111-staffon #emd108Chip{display:inline-flex}\n"
x=block('EMD-V108-staff','script')
x=cut(x,"function toast(t){var e=document.createElement('div');e.className='emd103-toast';e.textContent=t;document.body.appendChild(e);setTimeout(function(){e.style.opacity='0'},2400);setTimeout(function(){e.remove()},2900)}","function toast(t){RW.EMDPosH.alias.toast(t)}")
# الصلاحية المطلوبة لكل زر في التطبيق الجديد
x=cutre(x,r"function permFor\(el\)\{.*?\n  return ''\}","function permFor(el){return RW.EMDPosH.permFor(el)}")
x=cutre(x,r"  if\(c\.enabled&&w&&!w\.owner\)\{var v=document\.querySelector\('\.view\.active'\).*?\n","  if(c.enabled&&w&&!w.owner)RW.EMDPosH.viewGuard(can);\n")
x=cutre(x,r"function hookSec\(\)\{.*?\n(?=/\* من سجّل الطلب \*/)","")
x=cutre(x,r"function stampOrders\(\)\{.*?\n(?=function audit)","")
x=cut(x,"function chip(){var host=document.querySelector('.emd89-store')||document.querySelector('.app>header');","function chip(){var host=document.querySelector('.hbtns');")
x=cut(x,"function openClosing(){var c=cfg();if(c.enabled&&!can('closing')){toast('🔒 ليست لديك صلاحية: تقفيلة اليوم');return}openOv('closing')}","function openClosing(){var c=cfg();if(c.enabled&&!can('closing')){toast('🔒 ليست لديك صلاحية: تقفيلة اليوم');return}closeOv();RW.EMDPosH.closing()}")
x=cut(x,"  if(k==='closing'){view='closing';return render()}","  if(k==='closing')return openClosing();")
x=cutre(x,r"function homeBtn\(\)\{.*?\n","")
x=cut(x,"function boot(){hookSec();guards();stampOrders();homeBtn();apply()}\nboot();setTimeout(boot,1200);setTimeout(boot,3500);setInterval(function(){tag();dueCheck();if(cfg().enabled&&!who()&&!lockEl)showLock()},1500);",
 "apply();RW.__stTick=function(){tag();if(cfg().enabled&&!who()&&!lockEl)showLock()};")
x=cut(x,"function setCfg(c){wr(SK,c);apply()}","function setCfg(c){wr(SK,c);apply();try{RW.__stHide&&RW.__stHide()}catch(e){}}")
x=cut(x,"window.EMDStaffV108={can:can,who:who,open:function(){openStaff()},closing:function(){openClosing()}};","window.EMDStaffV108={can:can,who:who,open:function(){openStaff()},closing:function(){openClosing()},apply:apply,on:function(){return cfg().enabled}};")
js='/* ---- V108 ---- */\n'+x+'\n'
y=block('EMD-V111-staffhide','script')
y=cutre(y,r"function inject\(\)\{.*?\n.*?\n.*?\n","")
y=cutre(y,r"apply\(\);inject\(\);setInterval\(function\(\)\{apply\(\);inject\(\)\},1500\);\n/\* تثبيت اسم التطبيق.*?\}\)\(\);\n","apply();RW.__stHide=apply;\n")
js+='/* ---- V111 ---- */\n'+y+'\n'
assert 'setInterval' not in js and 'MutationObserver' not in js,'timer'
js=re.sub(r"(?<![\w.$])(window\.)?localStorage\b",'PLS',js)
assert not re.search(r"(?<![\w.$'\"])db\.(orders|products)",js)
js=js.replace("window.db","window.db")
wrap=("(function(RW){var PH=RW.EMDPosH,PLS=PH.ls;\n"
  "var window=new Proxy(RW,{get:function(t,k){if(k==='db')return PH.db();if(k==='localStorage')return PLS;if(PH.alias[k]&&!(k in t))return PH.alias[k];var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t||!!PH.alias[k]}});\n")
out='/* مُولَّد بـ tools/port-staff.py من V108 وV111 — لا تعدّل هنا */\n(function(){var s=document.createElement("style");s.textContent='+json.dumps(css,ensure_ascii=False)+';document.head.appendChild(s)})();\n'+wrap+js+'})(window);\n'
open(os.path.join(os.path.dirname(__file__),'..','lazy','staff.js'),'w',encoding='utf8').write(out);print('staff.js',len(out.encode()),'bytes')
