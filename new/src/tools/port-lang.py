# يبني src/lazy/lang.js: الواجهة الإنجليزية من التطبيق الحالي — V98 (القاموس والترجمة عند العرض) + إضافات V412 وV413 وV141.
# يُحمَّل فقط إذا اختار التاجر English، فلا يكلّف الواجهة العربية شيئًا.
# المراقب (MutationObserver) يبقى هنا لأنه طريقة الترجمة نفسها، ويعمل في الوضع الإنجليزي فقط؛ حُذف المؤقت المتكرر.
# داخل غلاف التجربة (window.EMDPosH): localStorage = مفاتيح التجربة emd_rb_* مع قراءة احتياطية.
import re,sys,os,json
LIVE=sys.argv[1] if len(sys.argv)>1 else '/home/user/emd-business.github.io/index.html'
h=open(LIVE,encoding='utf8').read()
def block(tag_id,kind):
  a=h.index('<%s id="%s">'%(kind,tag_id));a=h.index('>',a)+1;b=h.index('</%s>'%kind,a);return h[a:b]
def cut(x,a,b='',n=1):
  c=x.count(a);assert c==n,(c,a[:90]);return x.replace(a,b)
js=''.join(block(i,'script')+'\n' for i in ['EMD-V412-i18n-extra','EMD-V413-i18n-extra','EMD-V141-i18n-extra'])
v=block('EMD-V98-i18n','script')
v=cut(v,"if(window.__EMD_V98__)return;window.__EMD_V98__=true;","if(window.__EMD_V98__)return;window.__EMD_V98__=true;")
v=cut(v,"  setInterval(flipCSS,3000);\n","")
v=cut(v,"if(document.body)start();else document.addEventListener('DOMContentLoaded',start);","start();")
js+=v+'\n'
assert 'setInterval' not in js and not re.search(r"(?<![\w.$'\"])db\b",js)
js=re.sub(r"(?<![\w.$])(window\.)?localStorage\b",'PLS',js)
css=block('EMD-V98-i18n-css','style')
# مكافئات عناصر التطبيق الجديد: الوقت في الرئيسية يبقى من اليسار لليمين
css+='\nhtml.emd-en #view>.hero .clock,html.emd-en #view>.hero .clock *{direction:ltr!important}\n'
wrap=("(function(RW){var PH=RW.EMDPosH,PLS=PH.ls;\n"
  "var window=new Proxy(RW,{get:function(t,k){if(k==='localStorage')return PLS;var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t}});\n")
out=('/* مُولَّد بـ tools/port-lang.py من V98 وV412 وV413 وV141 — لا تعدّل هنا */\n(function(){var s=document.createElement("style");s.id="EMD-V98-i18n-css";s.textContent='+json.dumps(css,ensure_ascii=False)+
  ';document.head.appendChild(s)})();\n'+wrap+js+'})(window);\n')
open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','lazy','lang.js'),'w',encoding='utf8').write(out);print('lang.js',len(out.encode()),'bytes')
