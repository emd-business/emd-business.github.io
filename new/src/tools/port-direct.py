# يبني src/lazy/direct.js من «البيع المباشر» V113 في التطبيق الحالي، عبر window.EMDDirH
import re,sys,os,json
LIVE=sys.argv[1] if len(sys.argv)>1 else '/home/user/emd-business.github.io/index.html'
OUT=os.path.join(os.path.dirname(__file__),'..','lazy',sys.argv[2] if len(sys.argv)>2 else 'direct.js')
h=open(LIVE,encoding='utf8').read()
def block(tag_id,kind):
  a=h.index('<%s id="%s">'%(kind,tag_id));a=h.index('>',a)+1;b=h.index('</%s>'%kind,a);return h[a:b]
js=block('EMD-V113-direct','script');css=block('EMD-V113-css','style')
def rep(a,b,n=1):
  global js
  c=js.count(a);assert c==n,('count',c,n,a[:70]);js=js.replace(a,b)
rep("if(window.__EMD_V113__)return;window.__EMD_V113__=true;","if(window.EMDDirectV113)return;var H=window.EMDDirH;")
rep("var KEY='emd_business_v1',DRAFT='emd_v113_draft',","var DRAFT=H.lk('emd_v113_draft'),")
rep("function D(){return window.db}","function D(){return H.db()}")
rep("function toast(t){var e=document.createElement('div');e.className='emd103-toast';e.textContent=t;document.body.appendChild(e);setTimeout(function(){e.style.opacity='0'},2600);setTimeout(function(){e.remove()},3100)}","function toast(t){H.toast(t)}")
rep("function storeName(){try{var p=window.EMDBusinessProfileV333&&window.EMDBusinessProfileV333.get();return String(p&&p.name||'').trim()||'متجري'}catch(e){return 'متجري'}}","function storeName(){return H.storeName()||'متجري'}")
# لا موظفين ولا أدوار في التطبيق الجديد بعد: المالك يملك كل الصلاحيات
rep("function who(){try{var S=window.EMDStaffV108;if(S&&S.who){var w=S.who();if(w)return {id:w.id,name:w.name,owner:!!w.owner};return null}}catch(e){}return {id:'owner',name:ownerName(),owner:true}}","function who(){return {id:'owner',name:ownerName(),owner:true}}")
js=re.sub(r"function perm\(p\)\{\n.*?\n.*?\n  return !!who\(\);\n\}","function perm(p){return true}",js,flags=re.S)
assert 'EMDSecurityV315' not in js
# المخزون المتاح بقواعد التطبيق الجديد
rep("function available(name){var p=findP(name);if(!p)return 0;return Math.max(0,r3(Number(p.stock||0)-reserved(name)))}","function available(name){var a=H.available(name);return a==null?0:Math.max(0,r3(a))}")
rep("function persistRaw(){localStorage.setItem(KEY,JSON.stringify(D()))}","function persistRaw(){H.persist()}")
rep("function saveAll(){try{if(typeof window.save==='function')window.save()}catch(e){}}","function saveAll(){H.after()}")
js=js.replace("try{if(window.EMDInventoryV75&&window.EMDInventoryV75.reconcile)window.EMDInventoryV75.reconcile();if(window.refreshOrderReadinessV23)window.refreshOrderReadinessV23()}catch(e){}","H.restock();")
js=js.replace("try{if(window.EMDInventoryV75&&window.EMDInventoryV75.reconcile)window.EMDInventoryV75.reconcile()}catch(e){}","")
assert 'EMDInventoryV75' not in js and 'refreshOrderReadinessV23' not in js,'inv'
rep("function saleOrder(){try{return window.EMDLayoutV114?window.EMDLayoutV114.order('sale',SALE_DEF):SALE_DEF}catch(e){return SALE_DEF}}","function saleOrder(){return SALE_DEF}")
rep("function storeProfile(){try{return (window.EMDBusinessProfileV333&&window.EMDBusinessProfileV333.get())||{}}catch(e){return {}}}","function storeProfile(){return H.profile()}")
rep("var LK=window.EMDLookV89,acc='#111827',lim=null;try{if(LK){acc=LK.accentHex()||acc;lim=LK.logoImg()}}catch(e){}","var acc=H.accent()||'#111827',lim=H.logoImg();")
js=js.replace("(window.EMDEncWaV129||encodeURIComponent)","encodeURIComponent")
# صور المنتجات: نفس مصدر صور التطبيق الجديد
rep("var img=p.image?'style=\"background-image:url(\\''+String(p.image)","var pu=H.img(p),img=pu?'style=\"background-image:url(\\''+String(pu)")
js=js.replace("+(p.image?'':'📦')+","+(pu?'':'📦')+")
# زر الشريط يأتي من «المزيد» في التطبيق الجديد
js=re.sub(r"function navBtn\(\)\{.*?\n\}\nsetInterval\(navBtn,1500\);setTimeout\(navBtn,300\);\n","",js,flags=re.S)
assert 'setInterval' not in js and 'window.db' not in js and 'window.save' not in js,'left'
js=re.sub(r'\bH\.(lk|db|toast|storeName|available|persist|after|restock|profile|accent|logoImg|img)\(',r'DH.\1(',js)
js=js.replace('var H=window.EMDDirH;','var DH=window.EMDDirH;')
assert not re.search(r"localStorage\.(setItem|removeItem)\('",js),'ls'
if 'EMD419' in js:
  a="function render(){\n  if(!S.open)return;";assert js.count(a)==1,'render';js=js.replace(a,a+"(window.__posHooks||[]).forEach(function(f){try{f()}catch(e){}});")
  a="function renderProducts(){\n  var el=$('emd113Pl');if(!el)return;";assert js.count(a)==1,'rp';js=js.replace(a,a+"if(window.EMD419)try{EMD419.applyView()}catch(e){}")
out='/* مُولَّد بـ tools/port-direct.py من V113 — لا تعدّل هنا */\n(function(){var s=document.createElement("style");s.textContent='+json.dumps(css,ensure_ascii=False)+';document.head.appendChild(s)})();\n'+js
open(OUT,'w',encoding='utf8').write(out);print('direct.js',len(out.encode()),'bytes')
