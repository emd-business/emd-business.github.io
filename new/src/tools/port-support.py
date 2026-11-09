# يبني src/lazy/support.js من «مركز المساعدة والدعم» V101 في التطبيق الحالي، عبر window.EMDSupH
import re,sys,os,json
LIVE=sys.argv[1] if len(sys.argv)>1 else '/home/user/emd-business.github.io/index.html'
OUT=os.path.join(os.path.dirname(__file__),'..','lazy','support.js')
h=open(LIVE,encoding='utf8').read()
def block(tag_id,kind):
  a=h.index('<%s id="%s">'%(kind,tag_id));a=h.index('>',a)+1;b=h.index('</%s>'%kind,a);return h[a:b]
js=block('EMD-V101-support','script');css=block('EMD-V101-support-css','style')
c93=block('EMD-V93-cloud-css','style')
keep=[r.group(0) for r in re.finditer(r'[^{}]*\.emd93-(?:ov|box|head|x|f|go|gh|link|msg|card|note)\b[^{}]*\{[^}]*\}',c93)]
def rep(a,b,n=1):
  global js
  assert js.count(a)>=n,('missing',a[:60]);js=js.replace(a,b)
rep("if(window.__EMD_V101__)return;window.__EMD_V101__=true;","if(window.EMD101)return;var H=window.EMDSupH;")
rep("var SEEN='emd_v101_seen',LOCAL='emd_v101_sent';","var SEEN=H.lk('emd_v101_seen'),LOCAL=H.lk('emd_v101_sent');")
rep("function api(){return window.EMDCloudV93&&window.EMDCloudV93.api}","function api(){return H.api()}")
rep("function sess(){try{return window.EMDCloudV93&&window.EMDCloudV93.session()}catch(e){return null}}","function sess(){return H.session()}")
rep("var d=window.db||JSON.parse(lsGet('emd_business_v1')||'{}');","var d=H.db();")
rep("function req(path,o){var a=api();","function req(path,o){if((o.method||'GET')!=='GET'&&!H.canWrite())return Promise.reject(new Error('🧪 في التجربة لا يُرسل البلاغ إلى فريق التطبيق. جرّب الإرسال من تطبيقك الحالي.'));var a=api();")
# الزر في الرأس موجود في التطبيق الجديد؛ لا إدراج ولا مؤقتات
js=re.sub(r"function chip\(\)\{.*?\n  paintChip\(\)\}","function chip(){paintChip()}",js,flags=re.S)
js=re.sub(r"/\* بطاقة في مركز الإعدادات \*/\nfunction hub\(\)\{.*?\n.*?\n","",js)
js=re.sub(r"function boot\(\)\{.*?\}\nif\(document.readyState.*?\n","window.EMD101={open:open,loadMine:function(){return loadMine().then(paintChip,paintChip)},paint:paintChip};paintChip();\n",js)
rep("return Math.round((localStorage.getItem('emd_business_v1')||'').length/1024)","return H.sizeKb()")

# V222: «السماح للدعم بالاطلاع» داخل نافذة الدعم + تعديلات المالك عن بُعد (بدون مراقبين ولا مؤقتات)
rep("  box.innerHTML=h;\n}\nfunction msg(k,t){","  box.innerHTML=h;if(window.EMDAssistV222)EMDAssistV222.paint(ov);\n}\nfunction msg(k,t){")
a=block('EMD-V222-assist','script');acss=block('EMD-V222-assist-css','style')
def r2(x,y,n=1):
  global a
  c=a.count(x);assert c==n,('v222',c,n,x[:70]);a=a.replace(x,y)
r2("if(window.__EMD_V222A__)return;window.__EMD_V222A__=true;","var H=window.EMDSupH;")
r2("function C(){return window.EMDCloudV93||null}","function C(){return {api:H.api(),session:H.session,push:H.push}}")
r2("function req(path,o){o=o||{};var a=A();","function req(path,o){o=o||{};if((o.method||'GET')!=='GET'&&!H.canWrite())return Promise.reject(new Error('🧪 في التجربة لا يُرسل شيء إلى الدعم.'));var a=A();")
r2("var P=(window.db&&db.products)||[]","var P=H.db().products||[]")
r2("p={name:String(it.name||'').trim(),stock:0,reserved:0,available:0,price:0,unitPrice:0,salePrice:0,defaultPrice:0};if(!p.name)return;db.products.push(p)","p={name:String(it.name||'').trim(),stock:0,reserved:0,available:0,price:0,unitPrice:0,salePrice:0,defaultPrice:0};if(!p.name)return;H.db().products.push(p)")
r2("if(n){try{window.save&&save()}catch(e){}try{window.render&&render()}catch(e){}}return n}","if(n)H.after();return n}")
i=a.index("function hook(ov){");j=a.index("/* ---------- تعديلات المالك عن بُعد ---------- */")
a=a[:i]+"function hook(ov){if(!ov||!ov.firstChild)return;var box=ov.firstChild;if(!ov.__e222){ov.__e222=1;\n  ov.addEventListener('click',function(e){var b=e.target.closest('[data-e222],[data-k=\"send\"]');if(!b)return;\n    if(b.getAttribute('data-k')==='send'){var c=box.querySelector('#e222Chk');if(c&&c.checked&&!c.disabled)grant(24).catch(function(){});return}\n    var k=b.getAttribute('data-e222');b.disabled=true;(k==='on'?grant(24):revoke()).then(function(){paint(box);note(k==='on'?'✅ تم السماح لمدة 24 ساعة':'تم إيقاف السماح')},function(er){b.disabled=false;note(er.message)})},true);\n  loadAcc().then(function(){paint(ov.firstChild)})}\n  paint(box)}\n"+a[j:]
a=re.sub(r"setTimeout\(check,6000\);\ndocument\.addEventListener\('visibilitychange'.*?\nsetInterval\(.*?\n","",a)
r2("window.EMDAssistV222={check:check,","window.EMDAssistV222={paint:hook,check:check,")
assert 'MutationObserver' not in a and 'setInterval' not in a and 'window.db' not in a and 'EMDCloudV93' not in a,'v222 left'
js=js+'\n'+a
css=css+acss
assert 'setInterval' not in js and 'EMDCloudV93' not in js and "localStorage.setItem('" not in js,'leftover'
lsk=re.findall(r"lsSet\('([^']+)'",js);assert not lsk,lsk
style=''.join(keep)+css
out='/* مُولَّد بـ tools/port-support.py من V101 — لا تعدّل هنا */\n(function(){var s=document.createElement("style");s.textContent='+json.dumps(style,ensure_ascii=False)+';document.head.appendChild(s)})();\n'+js
open(OUT,'w',encoding='utf8').write(out);print('support.js',len(out.encode()),'bytes; css rules',len(keep))
