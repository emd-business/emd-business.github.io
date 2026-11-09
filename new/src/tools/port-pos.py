# يبني src/lazy/pos.js (نقطة البيع: V419 وV420 وV449 وV451) من نسخة التطوير V453.
# الوحدات كما هي، داخل غلاف يجعل window.db وlocalStorage يمرّان عبر window.EMDPosH (مفاتيح التجربة emd_rb_*، ولا كتابة لمفتاح التطبيق الحي)
import re,sys,os,json
DEV=sys.argv[1] if len(sys.argv)>1 else '/mnt/project-files/emd-v453/EMD_Business_V453_test.html'
OUT=os.path.join(os.path.dirname(__file__),'..','lazy','pos.js')
h=open(DEV,encoding='utf8').read()
def block(tag_id,kind):
  a=h.index('<%s id="%s">'%(kind,tag_id));a=h.index('>',a)+1;b=h.index('</%s>'%kind,a);return h[a:b]
MODS=[('EMD-V448-invoices','EMD-V448-css'),('EMD-V419-pos','emd419-css'),('EMD-V420-pos2','emd420-css'),('EMD-V449-cashier','emd449-css'),('EMD-V451-cashier','emd451-css'),('emd434-js','emd434-css'),('emd442-js','emd442-css'),('EMD-V443-invoice-js','EMD-V443-invoice-css'),('EMD-V444-js','EMD-V444-css'),('EMD-V450-variants','emd450-css'),('emd439-js','emd439-css'),('EMD-V421-import','EMD-V421-import-css')]
css='';js=''
for j,c in MODS:
  x=block(j,'script');css+=block(c,'style')+'\n'
  if j=='EMD-V419-pos':
    a="try{API()._save()}catch(err){try{localStorage.setItem('emd_business_v1',JSON.stringify(db))}catch(x){}}"
    assert x.count(a)==1;x=x.replace(a,"try{API()._save()}catch(err){}")
    a="setInterval(function(){try{applyView()}catch(e){}},700);\n";assert x.count(a)==1;x=x.replace(a,"")  # يُستدعى من renderProducts
  if j=='emd442-js':
    a="setInterval(watch,1500);";assert x.count(a)==1;x=x.replace(a,"(RW.__posHooks=RW.__posHooks||[]).push(watch);")  # يُستدعى من render في البيع المباشر
  if j in('EMD-V443-invoice-js','EMD-V444-js'):
    a="setInterval(inject,1500);setTimeout(inject,400);";assert x.count(a)==1;x=x.replace(a,"")  # سطرها في إعدادات التطبيق الجديد
  if j=='EMD-V450-variants':  # قائمة المنتجات ونافذة المنتج الجديد في التطبيق الجديد تستدعيان EMD450 مباشرة
    for a in ["setInterval(function(){wrapRP();var el=$('productsList');if(el&&el.offsetParent)try{listPass()}catch(e){}},900);","setInterval(function(){wrapAP();if($('emd81Name'))inject()},500);"]:
      assert x.count(a)==1,a;x=x.replace(a,'')
  if j=='emd439-js':
    a="function boot(){setTimeout(function(){addBtn();setInterval(addBtn,2000)},1500)}\nif(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();";assert x.count(a)==1;x=x.replace(a,'')
  if j=='EMD-V421-import':
    a="addBtn();document.addEventListener('DOMContentLoaded',addBtn);setTimeout(addBtn,1500);document.addEventListener('click',function(){setTimeout(addBtn,60)},true);";assert x.count(a)==1;x=x.replace(a,'')
  if j=='EMD-V421-import':
    a="function D(){try{return (typeof db!=='undefined'&&db)?db:window.db}catch(e){return window.db}}";assert x.count(a)==1;x=x.replace(a,"function D(){return window.db}")
  if not re.search(r"(\bvar\s+|,)db\s*=|function db\(",x):  # وحدة تعرّف db محليًا لا تُمسّ
    x=re.sub(r"(?<![\w.$'\"])db\b(?!\s*[:(])",'window.db',x)
  else:
    assert not re.search(r"(?<![\w.$'\"])db\.(products|orders|directSales)",x),(j,'bare db')
  x=re.sub(r"(?<![\w.$])(window\.)?localStorage\b",'PLS',x)
  assert 'setInterval' not in x and ('MutationObserver' not in x or j=='emd442-js'),(j,'timer')  # V442: مراقب على جسم شاشة البيع فقط
  js+='/* ---- '+j+' ---- */\n'+x+'\n'
assert js.count("'emd_business_v1'")==6  # V443 قراءة احتياطية، وV450 وV421 بعد window.save، (الغلاف يعيد null) وV444 بعد window.save؛ الغلاف يحوّل الكتابة إلى حفظ التطبيق الجديد
wrap=("(function(RW){var PH=RW.EMDPosH,PLS=PH.ls;\n"
 "var window=new Proxy(RW,{get:function(t,k){if(k==='db')return PH.db();if(k==='localStorage')return PLS;if(PH.alias[k]&&!(k in t))return PH.alias[k];var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t||!!PH.alias[k]}});\n")
out='/* مُولَّد بـ tools/port-pos.py من V448 وV419 وV420 وV449 وV451 وV434 وV442 وV443 وV444 وV450 وV439 وV421 — لا تعدّل هنا */\n(function(){var s=document.createElement("style");s.textContent='+json.dumps(css,ensure_ascii=False)+';document.head.appendChild(s)})();\n'+wrap+js+'})(window);\n'
open(OUT,'w',encoding='utf8').write(out);print('pos.js',len(out.encode()),'bytes')
