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
assert 'setInterval' not in js and 'EMDCloudV93' not in js and "localStorage.setItem('" not in js,'leftover'
lsk=re.findall(r"lsSet\('([^']+)'",js);assert not lsk,lsk
style=''.join(keep)+css
out='/* مُولَّد بـ tools/port-support.py من V101 — لا تعدّل هنا */\n(function(){var s=document.createElement("style");s.textContent='+json.dumps(style,ensure_ascii=False)+';document.head.appendChild(s)})();\n'+js
open(OUT,'w',encoding='utf8').write(out);print('support.js',len(out.encode()),'bytes; css rules',len(keep))
