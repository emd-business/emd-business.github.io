#!/usr/bin/env python3
"""يحوّل بناء التجربة (stage) إلى بناء النشر: بدون طبقة التجربة emd_rb_*، يقرأ ويكتب مفاتيح التطبيق الحالي نفسها،
والسحابة والمتجر والتتبع والإشعارات والأرشيف تعمل فعليًا. الاستعمال: python3 tools/publish.py <مجلد_stage> <مجلد_الإخراج>
لا ينشر شيئًا؛ يكتب الملفات في مجلد الإخراج فقط."""
import sys,os,re,shutil
src,out=sys.argv[1],sys.argv[2]
h=open(os.path.join(src,'index.html'),encoding='utf8').read()
def rep(a,b,n=1):
  global h;c=h.count(a);assert c==n,(c,a[:80]);h=h.replace(a,b)
rep("var CLOUD_SANDBOX=true;","var CLOUD_SANDBOX=false;")
rep("var KEY='emd_rb_sandbox_v1';","var KEY='emd_business_v1';")
rep("var META='emd_rb_sandbox_meta';","var META='emd_new_meta_v1';")
rep("'emd_rb_learn232'","'emd_v232_learn'",2);rep("'emd_rb_learn103'","'emd_v103_learn'",2)
rep("var PIN_KEY='emd_rb_pins_v1';","var PIN_KEY='emd_pinned_orders_v340';")
rep("WA_KEY='emd_rb_wa_templates';","WA_KEY='emd_whatsapp_templates_v189';")
rep("var CLOSE_KEY='emd_rb_close',CLOSINGS_KEY='emd_rb_closings';","var CLOSE_KEY='emd_v108_close',CLOSINGS_KEY='emd_v108_closings';")
rep("<title>EMD Business — النسخة الجديدة (تجربة)</title>","<title>EMD Business — إدارة الطلبات والمخزون</title>")
# شريط «نسخة تجريبية» يختفي، وشاشة الترحيب للمستخدم الجديد بلا كلمة تجربة
rep("$('sbx').innerHTML='<span>🧪 <b>نسخة تجريبية من التطبيق الجديد</b> · '+esc(srcLabel())+' · عدد الطلبات: '+db.orders.length+'. تعديلاتك هنا لا تصل إلى تطبيقك.</span><button data-act=\"settings\">تغيير البيانات</button>';","$('sbx').innerHTML='';")
rep("<h2>التطبيق الجديد — تجربة</h2><p class=\"note\">هذه نسخة تجريبية مبنية من الصفر. لا تغيّر أي شيء في تطبيقك الحالي. اختر البيانات التي تريد التجربة عليها:</p>","<h2>مرحبًا بك في EMD Business</h2><p class=\"note\">ابدأ ببيانات تجريبية لتتعرّف على التطبيق، أو افتح نسخة احتياطية من جهاز آخر:</p>")
rep("$('sbx').innerHTML='<span>🧪 <b>نسخة تجريبية من التطبيق الجديد</b></span>';","$('sbx').innerHTML='';")
left=sorted(set(re.findall(r"emd_rb_[A-Za-z0-9_]*",h)))
print('remaining emd_rb_ literals (inside CLOUD_SANDBOX branches only):',left)
os.makedirs(out,exist_ok=True)
open(os.path.join(out,'index.html'),'w',encoding='utf8').write(h)
for x in os.listdir(src):
  if x!='index.html':shutil.copy(os.path.join(src,x),os.path.join(out,x))
print('publish build ->',out,len(h),'bytes')
