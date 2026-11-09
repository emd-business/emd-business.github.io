# يبني src/lazy/pos.js (نقطة البيع: V419 وV420 وV449 وV451) من نسخة التطوير V453.
# الوحدات كما هي، داخل غلاف يجعل window.db وlocalStorage يمرّان عبر window.EMDPosH (مفاتيح التجربة emd_rb_*، ولا كتابة لمفتاح التطبيق الحي)
import re,sys,os,json
DEV=sys.argv[1] if len(sys.argv)>1 else '/mnt/project-files/emd-v453/EMD_Business_V453_test.html'
OUT=os.path.join(os.path.dirname(__file__),'..','lazy','pos.js')
h=open(DEV,encoding='utf8').read()
def block(tag_id,kind):
  a=h.index('<%s id="%s">'%(kind,tag_id));a=h.index('>',a)+1;b=h.index('</%s>'%kind,a);return h[a:b]
MODS=[('EMD-V448-invoices','EMD-V448-css'),('EMD-V419-pos','emd419-css'),('EMD-V420-pos2','emd420-css'),('EMD-V449-cashier','emd449-css'),('EMD-V451-cashier','emd451-css')]
css='';js=''
for j,c in MODS:
  x=block(j,'script');css+=block(c,'style')+'\n'
  if j=='EMD-V419-pos':
    a="try{API()._save()}catch(err){try{localStorage.setItem('emd_business_v1',JSON.stringify(db))}catch(x){}}"
    assert x.count(a)==1;x=x.replace(a,"try{API()._save()}catch(err){}")
    a="setInterval(function(){try{applyView()}catch(e){}},700);\n";assert x.count(a)==1;x=x.replace(a,"")  # يُستدعى من renderProducts
  x=re.sub(r"(?<![\w.$'\"])db\b(?!\s*:)",'window.db',x)
  x=re.sub(r"(?<![\w.$])(window\.)?localStorage\b",'PLS',x)
  assert 'setInterval' not in x and 'MutationObserver' not in x,(j,'timer')
  js+='/* ---- '+j+' ---- */\n'+x+'\n'
assert "'emd_business_v1'" not in js
wrap=("(function(RW){var PH=RW.EMDPosH,PLS=PH.ls;\n"
 "var window=new Proxy(RW,{get:function(t,k){if(k==='db')return PH.db();if(k==='localStorage')return PLS;if(PH.alias[k]&&!(k in t))return PH.alias[k];var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t||!!PH.alias[k]}});\n")
out='/* مُولَّد بـ tools/port-pos.py من V448 وV419 وV420 وV449 وV451 — لا تعدّل هنا */\n(function(){var s=document.createElement("style");s.textContent='+json.dumps(css,ensure_ascii=False)+';document.head.appendChild(s)})();\n'+wrap+js+'})(window);\n'
open(OUT,'w',encoding='utf8').write(out);print('pos.js',len(out.encode()),'bytes')
