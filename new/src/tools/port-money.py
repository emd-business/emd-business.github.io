# يبني src/lazy/money.js من «المالية» V75 في التطبيق الحالي، عبر window.EMDMonH
# الحسابات (الإجمالي، المدفوع، المتبقي، حالة الدفع) تأتي من مكتبة التطبيق الجديد حتى تتطابق الأرقام في كل الشاشات.
import re,sys,os,json
LIVE=sys.argv[1] if len(sys.argv)>1 else '/home/user/emd-business.github.io/index.html'
OUT=os.path.join(os.path.dirname(__file__),'..','lazy','money.js')
h=open(LIVE,encoding='utf8').read()
def block(tag_id,kind):
  a=h.index('<%s id="%s">'%(kind,tag_id));a=h.index('>',a)+1;b=h.index('</%s>'%kind,a);return h[a:b]
js=block('EMD-V75-money','script');css=block('EMD-V75-money-css','style')
def rep(a,b,n=1):
  global js
  c=js.count(a);assert c==n,('count',c,n,a[:70]);js=js.replace(a,b)
def cut(start,end):
  global js
  i=js.index(start);j=js.index(end,i);js=js[:i]+js[j:]
rep("if(window.__EMD_V75__)return;window.__EMD_V75__=true;","if(window.EMDMoneyV75)return;var MH=window.EMDMonH;")
rep("var COUR_KEY='emd_v75_couriers',SINCE_KEY='emd_v75_since',","var COUR_KEY=MH.lk('emd_v75_couriers'),SINCE_KEY=MH.lk('emd_v75_since'),LEG_KEY=MH.lk('emd_v75_legacy_on'),")
rep("function D(){try{return (typeof db!=='undefined'&&db)?db:window.db}catch(e){return window.db}}","function D(){return MH.db()}")
rep("function store(){try{var p=window.EMDBusinessProfileV333&&window.EMDBusinessProfileV333.get();return p||{}}catch(e){return {}}}","function store(){return MH.profile()}")
js=js.replace("(window.EMDEncWaV129||encodeURIComponent)","MH.enc")
# حروف رقم الطلب (V129): العرض EMD-0042 والمخزّن #0042
rep("var st=b.scrollTop;b.innerHTML=h;","var st=b.scrollTop;b.innerHTML=MH.ids(h);")
rep("function persist(){try{if(typeof window.save==='function')window.save();else localStorage.setItem('emd_business_v1',JSON.stringify(D()))}catch(e){}}","function persist(){MH.save()}")
js=re.sub(r"function canSee\(\)\{.*?\n","function canSee(){return true}\n",js,count=1)
assert 'EMDSecurityV315' not in js,'sec'
# الحسابات من مكتبة التطبيق الجديد
rep("function total(o){var m=num(o.total);return m>0?m:Math.max(0,autoTotal(o)-num(o.discount))}","function total(o){return MH.total(o)}")
rep("function orderCost(o){return items(o).reduce(function(s,x){return s+itemCost(x)*qty(x)},0)}","function orderCost(o){return MH.cost(o)}")
js=re.sub(r"function since\(\)\{.*?\n","function since(){return MH.lsGet(SINCE_KEY)||MH.lsGet('emd_v75_since')||dkey(new Date())}\n",js,count=1)
js=re.sub(r"function legacy\(o\)\{.*?\n","",js,count=1)
js=re.sub(r"function payState\(o\)\{.*?\n","function payState(o){return MH.payState(o)}\n",js,count=1)
js=re.sub(r"function paid\(o\)\{.*?\n","function paid(o){return MH.paid(o)}\n",js,count=1)
js=re.sub(r"function remaining\(o\)\{.*?\n","function remaining(o){return MH.remaining(o)}\n",js,count=1)
rep("var lgOn=localStorage.getItem('emd_v75_legacy_on')==='1';","var lgOn=MH.legacyOn();")
rep("try{localStorage.setItem('emd_v75_legacy_on',t.checked?'1':'0')}catch(x){}","MH.lsSet(LEG_KEY,t.checked?'1':'0');MH.payReset();")
rep("try{localStorage.setItem(SINCE_KEY,t.value)}catch(x){}","MH.lsSet(SINCE_KEY,t.value);MH.payReset();")
rep("try{localStorage.setItem(COUR_KEY,JSON.stringify(cs))}catch(x){}","MH.lsSet(COUR_KEY,JSON.stringify(cs));")
rep("function couriers(){try{return JSON.parse(localStorage.getItem(COUR_KEY)||'{}')||{}}catch(e){return {}}}","function couriers(){try{return JSON.parse(MH.lsGet(COUR_KEY)||MH.lsGet('emd_v75_couriers')||'{}')||{}}catch(e){return {}}}")
# تثبيت الأسعار عند كل حفظ: نموذج الطلب في التطبيق الجديد يحفظ السعر في الطلب أصلًا
cut("/* تثبيت السعر في الطلب عند الحفظ","/* ===== الحسابات ===== */")
rep("arr((window.EMDLifetimeV130?EMDLifetimeV130.all():D().orders))","arr(MH.allOrders())")
rep("var ds=null;try{ds=window.EMDDirectV113?window.EMDDirectV113.summary(r.s,r.e):null}catch(e){}","var ds=MH.dsSummary(r.s,r.e);")
js=re.sub(r"\n  try\{if\(window\.EMDLayoutV114\)T=window\.EMDLayoutV114\.sort\('fin',T,function\(t\)\{return t\[0\]\}\)\}catch\(e\)\{\}","",js)
assert 'EMDLayoutV114' not in js,'layout'
rep("if(a==='openOrder'){close();if(typeof window.openOrderV26==='function')window.openOrderV26(v);return}","if(a==='openOrder'){close();MH.openOrder(v);return}")
rep("if(a==='pimg'){var pp=arr(D().products)[+v];if(pp&&window.EMDProductImageV81)window.EMDProductImageV81.edit(pp,function(){render()});return}","if(a==='pimg'){close();MH.editProduct(+v);return}")
# صندوق السعر والدفع داخل الطلب موجود في تفاصيل الطلب بالتطبيق الجديد
cut("/* ===== صندوق السعر والدفع داخل نافذة الطلب ===== */","/* ===== الفاتورة كصورة ===== */")
js=re.sub(r"var LK=window\.EMDLookV89.*?\}catch\(e\)\{\}","var acc=MH.accent()||'#111827',lim=MH.logoImg();",js,count=1)
assert 'EMDLookV89' not in js,'look'
# الشريط وأزرار القوائم: في التطبيق الجديد الشريط في الرئيسية، والفتح من «المزيد»
i=js.index("function strip(){");j=js.index("window.EMDMoneyV75=");js=js[:i]+js[j:]
js=re.sub(r"var sT=null;function scheduleStrip\(\)\{.*?\n","function scheduleStrip(){MH.after()}\n",js,count=1)
js=re.sub(r"function init\(\)\{.*?\nif\(document\.readyState.*?\n","",js,flags=re.S)
rep(",courierText:courText,freeze:freeze};",",courierText:courText};")
js=re.sub(r"\bwindow\.EMDDirectV113\b","MH.direct()",js)
for bad in ['setInterval','window.save','window.render','window.db','openOrderV26','EMDLifetimeV130','EMDProductImageV81']:
  assert bad not in js,bad
assert not re.search(r"localStorage\.setItem\(",js),'ls'
out='/* مُولَّد بـ tools/port-money.py من V75 — لا تعدّل هنا */\n(function(){var s=document.createElement("style");s.textContent='+json.dumps(css,ensure_ascii=False)+';document.head.appendChild(s)})();\n'+js
open(OUT,'w',encoding='utf8').write(out);print('money.js',len(out.encode()),'bytes')
