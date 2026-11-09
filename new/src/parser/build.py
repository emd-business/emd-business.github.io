import re,sys
S='/mnt/project-files/emd-rebuild/src/parser/'
v104=open(S+'v104.html',encoding='utf-8').read().split('\n')
e232=open('/mnt/project-files/emd-v232/build/ext232.html',encoding='utf-8').read().split('\n')
places='\n'.join(v104[5:66])   # lines 6..66 (GOV .. pre)
assert places.startswith('var GOV') and 'function pre(raw)' in places
core='\n'.join(e232[16:233])   # lines 17..236
assert core.startswith('function lsGet') and core.rstrip().endswith('return {text:out.join(\'\\n\'),extra:extra,info:info}}'), core[-200:]
core=core.replace("function $(id){return document.getElementById(id)}\n","")
core=core.replace("function prods(){try{return ((window.db&&window.db.products)||[]).map(function(p){return String(p&&p.name||'').trim()}).filter(Boolean)}catch(e){return []}}","function prods(){try{return prodKeys()}catch(e){return []}}")
assert 'prodKeys()' in core
core=core.replace('window.EMDPlacesV104','PL')
assert core.count('function findMentions(line){')==1
core=core.replace('function findMentions(line){','''function findMentions(line){var r=findMentions0(line);if(r.M.length){var keep=r.M.filter(function(m){var w=r.T.slice(m.i,m.j).map(function(t){return tokNorm(t).replace(/^و(?=\\S{2})/,'')}).filter(function(t){return t&&!/^\\d+$/.test(t)&&!QW[t]&&!UNIT1.test(t)});return !(w.length&&w.every(function(t){return PLWORD(t)||PLWORD(t.replace(/^لل(?=\\S{3})/,'ال').replace(/^ل(?=\\S{3})/,''))||PLEN.test(t)}))});if(keep.length!==r.M.length){r.M.forEach(function(m){if(keep.indexOf(m)<0)for(var x=m.i;x<m.j;x++)r.used[x]=0});r.M=keep}}return r}
function findMentions0(line){''')
_a="if(me2&&me2[1].trim().split(/\\s+/).length<=3&&"
assert _a in core,'me2'
core=core.replace(_a,"if(me2&&!/\\s(?:من|في)\\s+\\S/.test(me2[1])&&me2[1].trim().split(/\\s+/).length<=3&&",1)
assert 'window.' not in core and 'document' not in core, [l for l in core.split('\n') if 'window.' in l or 'document' in l]
tail='\n'.join(e232[282:284])  # GREETW + PLWORD
assert tail.startswith('var GREETW') and 'function PLWORD' in tail
tail=tail.replace('window.EMDPlacesV104','PL')
learn='\n'.join(e232[268:282]) # leftovers (DOM-dependent) - replaced below; keep only for reference
own=open(S+'own.js',encoding='utf-8').read()
out="""/* EMD Business — تحليل رسالة الطلب (نسخة نظيفة: قواعد V232 + قائمة ولايات عُمان V104) */
(function(){
'use strict';
var CFG={prods:function(){return []},lk:'emd_rb_learn232',ak:'emd_rb_learn103'};
var PL=(function(){
"""+places+"""
return {list:LIST,find:find,canon:canon,pre:pre,K:K}})();
var LK,AK;
"""+core.replace("var LK='emd_v232_learn',AK='emd_v103_learn';","")+"\n"+tail+"\n"+own+"\n})();\n"
open(S+'../static/parse.js','w',encoding='utf-8').write(out)
print(len(out))
