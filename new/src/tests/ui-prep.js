// اختبار شاشة «ماذا أجهز الآن؟»: تجهيز ← شحن ← استلام، والتحديد الجماعي، وكشف التسليم
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:400,height:860}});const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('dialog',d=>d.accept());
await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(400);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(400);
await p.click('[data-act=prepNow]');await p.waitForTimeout(200);
const info=await p.evaluate(()=>({kpi:[...document.querySelectorAll('.kpi')].map(k=>k.textContent).join(' | '),cards:document.querySelectorAll('.card.pc').length,pick:(document.querySelector('details.pick summary')||{}).textContent}));console.log('prep',JSON.stringify(info));
await p.screenshot({path:'/tmp/prep1.png'});
const id=await p.evaluate(()=>document.querySelector('.card.pc').dataset.id);
await p.click('.card.pc [data-act=packOpen]');await p.waitForTimeout(200);
const shipDis=await p.evaluate(()=>document.querySelector('[data-pk=ship]').disabled);
const n=await p.$$eval('#packBody input[type=checkbox]',x=>x.length);
for(let i=0;i<n;i++){await p.click('#packBody .pk >> nth='+i);await p.waitForTimeout(60)}
await p.screenshot({path:'/tmp/pack.png'});
await p.click('[data-pk=ship]');await p.waitForTimeout(200);
await p.fill('#sCo','أسياد');await p.click('#shf button[type=submit]');await p.waitForTimeout(300);
const o=await p.evaluate(id=>{const o=EMDRebuild.db().orders.find(x=>x.id===id);return {s:o.status,c:o.company,packed:o.packed,ded:o.stockDeducted}},id);console.log('ship-before-disabled',shipDis,JSON.stringify(o));
const offer=await p.evaluate(()=>!!document.querySelector('.sheet [data-act=waSend]'));console.log('ship notice offered',offer);if(offer){await p.click('.sheet .foot [data-act=close]');await p.waitForTimeout(150)}
await p.click('[data-act=selAllPrep]');await p.waitForTimeout(100);const nsel=await p.evaluate(()=>document.querySelectorAll('.card.pc input:checked').length);
await p.click('[data-act=bulkFinish]');await p.waitForTimeout(200);
await p.click('[data-act=ptab][data-t=ship]');await p.waitForTimeout(100);const nship=await p.evaluate(()=>document.querySelectorAll('.card.pc').length);
await p.click('[data-act=selAllShip]');await p.click('.selbar [data-act=shipOpen]');await p.waitForTimeout(200);await p.fill('#sCo','جيناكم');await p.click('#shf button[type=submit]');await p.waitForTimeout(300);
const today=await p.evaluate(()=>[...document.querySelectorAll('.card')].map(c=>(c.querySelector('.ch b')||{}).textContent+' '+((c.querySelector('.pill')||{}).textContent||'')).join(' / '));console.log('selected',nsel,'toShip',nship,'shippedToday:',today);
await p.screenshot({path:'/tmp/ship.png'});
await p.click('[data-act=printHand] >> nth=0');await p.waitForTimeout(500);const fr=await p.evaluate(()=>{const f=document.getElementById('printFrame');return f?f.contentDocument.body.innerText.slice(0,160):null});console.log('print:',JSON.stringify(fr));
await p.click('[data-act=ptab][data-t=recv]');await p.waitForTimeout(100);const nrecv=await p.evaluate(()=>document.querySelectorAll('.card.pc').length);
await p.click('.card.pc [data-act=recvOne] >> nth=0');await p.waitForTimeout(200);const nrecv2=await p.evaluate(()=>document.querySelectorAll('.card.pc').length);console.log('recv',nrecv,'->',nrecv2);
await p.screenshot({path:'/tmp/recv.png'});
console.log('counts',JSON.stringify(await p.evaluate(()=>{const c={};EMDRebuild.db().orders.forEach(o=>c[o.status]=(c[o.status]||0)+1);return c})));
console.log('errs',errs);await b.close()})();
