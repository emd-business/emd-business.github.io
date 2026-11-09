# one-time: split stage1/index.html into library files (line ranges, 1-based inclusive)
import os
L=open('/mnt/project-files/emd-rebuild/src/_orig.html',encoding='utf-8').read().split('\n')
def R(a,b):return list(range(a,b+1))
M=[ # order = build order
 ('lib/store.js',   R(186,222)+R(309,311)+[314,873]),
 ('lib/util.js',    R(223,230)+R(232,235)),
 ('lib/ui.js',      [231]+R(438,446)),
 ('lib/orders.js',  R(236,260)+[312,313,315]+R(316,354)),
 ('lib/products.js',R(261,290)+R(662,664)),
 ('lib/money.js',   R(291,297)),
 ('lib/stock.js',   R(298,308)+R(665,666)+R(738,743)),
 ('lib/customers.js',R(744,753)+[771]),
 ('lib/wa.js',      R(627,635)),
 ('screens/home-orders.js',R(355,437)),
 ('screens/order-form.js', R(447,552)+R(603,626)),
 ('screens/import.js',     R(553,602)),
 ('screens/sheets.js',     R(636,661)),
 ('screens/products.js',   R(667,737)),
 ('screens/customers.js',  R(754,770)+R(772,788)),
 ('screens/settings.js',   R(854,872)+R(874,893)),
 ('app/events.js',  R(789,853)),
 ('app/boot.js',    R(894,911)),
]
seen={}
for f,rs in M:
  for r in rs:
    assert r not in seen,(r,f,seen.get(r));seen[r]=f
miss=[i for i in range(186,912) if i not in seen]
print('missing',[(i,L[i-1][:60]) for i in miss])
assert not miss
for f,rs in M:
  os.makedirs(os.path.dirname('/mnt/project-files/emd-rebuild/src/'+f),exist_ok=True)
  txt='\n'.join(L[r-1] for r in sorted(rs)).strip('\n')+'\n'
  open('/mnt/project-files/emd-rebuild/src/'+f,'w',encoding='utf-8').write(txt)
shell='\n'.join(L[:183])+'\n/*@@APP@@*/\n'+'\n'.join(L[911:])
open('/mnt/project-files/emd-rebuild/src/shell.html','w',encoding='utf-8').write(shell)
open('/mnt/project-files/emd-rebuild/src/ORDER.txt','w').write('\n'.join(f for f,_ in M)+'\n')
print('ok')
