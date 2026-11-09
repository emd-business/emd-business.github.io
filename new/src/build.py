#!/usr/bin/env python3
"""EMD Business (النسخة الجديدة) — يجمع ملفات المكتبة في صفحة واحدة.
الاستعمال: python3 build.py [مجلد_الإخراج]   (الافتراضي ../stage1)
القواعد التي يفحصها قبل البناء:
 - كل دالة معرّفة مرة واحدة فقط في كل الملفات (ممنوع إعادة تعريفها بطبقة فوقها)
 - لا MutationObserver، ولا setInterval إلا الساعة في boot.js
"""
import re,sys,os,shutil
H=os.path.dirname(os.path.abspath(__file__))
out=sys.argv[1] if len(sys.argv)>1 else os.path.join(H,'..','stage1')
files=[l.strip() for l in open(os.path.join(H,'ORDER.txt')) if l.strip()]
parts=[];defs={};errs=[]
for f in files:
  t=open(os.path.join(H,f),encoding='utf-8').read()
  for m in re.finditer(r'^function\s+([A-Za-z_$][\w$]*)\s*\(',t,re.M):
    n=m.group(1)
    if n in defs:errs.append('الدالة %s معرّفة مرتين: %s و %s'%(n,defs[n],f))
    defs[n]=f
  for m in re.finditer(r'^var\s+([A-Za-z_$][\w$]*)',t,re.M):
    n='var '+m.group(1)
    if n in defs:errs.append('المتغير %s معرّف مرتين: %s و %s'%(n,defs[n],f))
    defs[n]=f
  if 'MutationObserver' in t:errs.append('MutationObserver ممنوع: '+f)
  if 'setInterval' in t and f!='app/boot.js':errs.append('setInterval ممنوع: '+f)
  parts.append('/* ===== %s ===== */\n%s'%(f,t))
if errs:print('\n'.join(errs));sys.exit(1)
shell=open(os.path.join(H,'shell.html'),encoding='utf-8').read()
assert shell.count('/*@@APP@@*/')==1
html=shell.replace('/*@@APP@@*/','(function(){\n\n'+'\n'.join(parts))
os.makedirs(out,exist_ok=True)
open(os.path.join(out,'index.html'),'w',encoding='utf-8').write(html)
for x in os.listdir(os.path.join(H,'static')):shutil.copy(os.path.join(H,'static',x),os.path.join(out,x))
for x in os.listdir(os.path.join(H,'lazy')):shutil.copy(os.path.join(H,'lazy',x),os.path.join(out,x))
print('built',os.path.join(out,'index.html'),len(html),'bytes,',len([k for k in defs if not k.startswith('var ')]),'functions in',len(files),'files')
