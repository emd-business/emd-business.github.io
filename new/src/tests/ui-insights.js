// اختبار تفاصيل اليوم، مركز الأداء، التتبع، إشعارات التوفر
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const ctx=await b.newContext({viewport:{width:400,height:860}});
const p=await ctx.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('dialog',d=>d.accept());await ctx.addInitScript(()=>{window.open=u=>{window.__u=u}});
await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(300);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(400);
await p.click('[data-act=dayFold]');await p.waitForTimeout(200);
const fold=await p.$eval('#view',v=>v.textContent);
console.log('fold:',['لوحة اليوم','EMD يقترح','توصية EMD','مركز التنبيهات','إجراء سريع'].map(s=>s+'='+fold.includes(s)).join(' '));
await p.click('nav#bar [data-act=moreSheet]');await p.waitForTimeout(200);
await p.click('.sheet [data-go=perf]');await p.waitForTimeout(300);
const perf=await p.$eval('#view',v=>v.textContent);console.log('perf:',perf.includes('مركز الأداء'),perf.includes('إشعارات توفر'));
await p.click('nav#bar [data-act=moreSheet]');await p.waitForTimeout(200);
await p.click('.sheet [data-act=track]');await p.waitForTimeout(300);
const tr=await p.$eval('.sheet',v=>v.textContent);console.log('track:',tr.includes('لها رابط تتبع'),tr.includes('بدون رابط'));
const tn=await p.evaluate(()=>EMDRebuild.db().orders.filter(o=>o.customerTrackingNumber).length);console.log('tracking numbers:',tn);
console.log('errs',errs);await b.close()})();
