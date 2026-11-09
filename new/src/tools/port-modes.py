# يبني src/lazy/modes.js من «نوع النشاط» V416 ولوحة البيع V417 في نسخة التطوير V453، عبر window.EMDModH
import re,sys,os,json
DEV=sys.argv[1] if len(sys.argv)>1 else '/mnt/project-files/emd-v453/EMD_Business_V453_test.html'
OUT=os.path.join(os.path.dirname(__file__),'..','lazy','modes.js')
h=open(DEV,encoding='utf8').read()
def block(tag_id,kind):
  a=h.index('<%s id="%s">'%(kind,tag_id));a=h.index('>',a)+1;b=h.index('</%s>'%kind,a);return h[a:b]
def rep(js,a,b,n=1):
  c=js.count(a);assert c==n,('count',c,n,a[:80]);return js.replace(a,b)
# ---- V416 ----
j6=block('EMD-V416-modes','script')
j6=rep(j6,"if(window.__EMD_V416__)return;window.__EMD_V416__=1;","if(window.EMDModesV416)return;var MH=window.EMDModH;")
j6=re.sub(r"function ls\(k,v\)\{.*?\n","function ls(k,v){return MH.ls(k,v)}\n",j6,count=1)
j6=rep(j6,"function FM(){return window.EMDFeatureManagerV318}","function FM(){return null}")
j6=re.sub(r"function canAdmin\(\)\{.*?\n","function canAdmin(){return true}\n",j6,count=1)
j6=rep(j6,"ls('emd416_mode',to);ls('emd416_asked','1');","ls('emd416_mode',to);ls('emd416_asked','1');MH.changed();")
j6=re.sub(r"function toast\(t\)\{.*?\n","function toast(t){MH.toast(t)}\n",j6,count=1)
j6=j6.replace("try{window.EMDCoV430.open('set')}catch(x){}","MH.company('set');").replace("try{window.EMDCoV430.open()}catch(x){}","MH.company();")
# لا «منظّم ميزات» في التطبيق الجديد (قرار الجرد): يُحذف سطر «تخصيص يدوي»
j6=re.sub(r"'<button type=\"button\" class=\"link\" data-a=\"features\">.*?</svg></button>'\+\n","",j6,count=1,flags=re.S)
assert 'data-a="features"' not in j6
# بطاقة الإعدادات وسؤال أول تشغيل والمؤقت: يتولاها التطبيق الجديد
a=j6.index('/* سطر في الإعدادات + سؤال أول تشغيل */');b=j6.index('window.EMDModesV416=')
j6=j6[:a]+"function firstRun(){view='pick';picked='online';host();paint();ov.classList.add('show');document.body.classList.add('emd416-open')}\n"+j6[b:]
j6=rep(j6,"window.EMDModesV416={open:open,mode:mode,set:applyMode,company:co};","window.EMDModesV416={open:open,mode:mode,set:applyMode,company:co,firstRun:firstRun,openCo:function(){view='co';host();paint();ov.classList.add('show');document.body.classList.add('emd416-open')}};")
j6=re.sub(r"function boot\(\)\{tick\(\);setInterval\(tick,1000\)\}\nif\(document\.readyState.*?\n","",j6)
assert 'setInterval' not in j6 and 'window.db' not in j6 and 'localStorage' not in j6,'v416 left'
# ---- V417 ----
j7=block('EMD-V417-home','script')
j7=rep(j7,"if(window.__EMD_V417__)return;window.__EMD_V417__=1;","if(window.EMD417)return;var MH=window.EMDModH;")
j7=rep(j7,"function D(){return window.db||{}}","function D(){return MH.db()||{}}")
j7=re.sub(r"function nav\(sel\)\{.*?\n","",j7,count=1)
j7=rep(j7,"try{var s=window.EMDDirectV113.summary(r[0],r[1]);o.sales=num(s.sales);o.count=num(s.count)}catch(e){}","var s=MH.dsSummary(r[0],r[1]);o.sales=num(s.sales);o.count=num(s.count);")
j7=rep(j7,"var st='';try{st=window.EMDDirectV113.statusOf(x)}catch(e){}if(st==='void')return;","if(MH.dsVoid(x))return;")
j7=re.sub(r"function low\(\)\{.*?\n","function low(){return MH.low()}\n",j7,count=1)
j7=rep(j7,"var p=prod(n),img=p&&p.image&&/^data:image|^https:/.test(p.image)?p.image:'';","var p=prod(n),img=p?MH.img(p):'';")
a=j7.index('function render(){');b=j7.index('})();',a)
j7=j7[:a]+"""function homeHtml(){var m=mode();if(!(m==='shop'||m==='hybrid'||m==='company'))return '';return '<section id="emd417" class="e7 '+m+'" aria-label="لوحة البيع">'+(m==='shop'?shopHTML():hybridHTML())+'</section>'}
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('#emd417 [data-a7]');if(a)MH.go(a.getAttribute('data-a7'))});
window.EMD417={homeHtml:homeHtml};
"""+j7[b:]
assert 'setInterval' not in j7 and 'window.db' not in j7,'v417 left'
css=block('emd416-css','style')+'\n'+block('emd417-css','style')
out='/* مُولَّد بـ tools/port-modes.py من V416 وV417 — لا تعدّل هنا */\n(function(){var s=document.createElement("style");s.textContent='+json.dumps(css,ensure_ascii=False)+';document.head.appendChild(s)})();\n'+j6+'\n'+j7
open(OUT,'w',encoding='utf8').write(out);print('modes.js',len(out.encode()),'bytes')
