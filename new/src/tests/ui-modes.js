// نوع النشاط: الشريط، لوحة البيع، إخفاء أدوات الشحن، عدم لمس المفاتيح الحية
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const ctx=await b.newContext({viewport:{width:400,height:860}});
const p=await ctx.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('dialog',d=>d.accept());
await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(300);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(400);
const bar=()=>p.$$eval('nav#bar button',x=>x.map(b=>b.textContent.replace(/\d+$/,'')).join('|'));
console.log('online bar:',await bar());
await p.click('nav#bar [data-act=moreSheet]');await p.waitForTimeout(150);await p.click('.sheet [data-act=settings]');await p.waitForTimeout(150);
await p.click('#setHub [data-act=modes]');await p.waitForTimeout(500);
console.log('sheet:',await p.$eval('#emd416',x=>x.textContent.slice(0,120)));
await p.screenshot({path:'/tmp/claude-0/cmp/new-modes-settings.png'});
await p.click('#emd416 [data-pick=shop]');await p.waitForTimeout(150);await p.screenshot({path:'/tmp/claude-0/cmp/new-modes-confirm.png'});
await p.click('#emd416 [data-a=confirm]');await p.waitForTimeout(300);await p.click('#emd416 [data-a=close]');await p.waitForTimeout(400);
console.log('shop bar:',await bar());
const home=await p.$eval('#view',v=>v.textContent);console.log('shop home: panel',home.includes('مبيعات المحل اليوم'),'prep hidden',!home.includes('ماذا أجهز'));
await p.screenshot({path:'/tmp/claude-0/cmp/new-modes-shop.png',fullPage:false});
await p.click('nav#bar [data-act=moreSheet]');await p.waitForTimeout(150);console.log('track hidden:',!(await p.$eval('.sheet',x=>x.textContent)).includes('التتبع'));await p.evaluate(()=>{document.querySelectorAll('.sheet').forEach(x=>x.click())});await p.waitForTimeout(150);
await p.evaluate(()=>{EMDModesV416.set('hybrid');});await p.waitForTimeout(400);console.log('hybrid bar:',await bar(),'| panel',await p.$eval('#view',v=>v.textContent.includes('طلب أونلاين')));
await p.screenshot({path:'/tmp/claude-0/cmp/new-modes-hybrid.png'});
await p.evaluate(()=>{EMDModesV416.set('online');});await p.waitForTimeout(300);console.log('back online bar:',await bar(),'| panel gone',!(await p.$eval('#view',v=>v.textContent.includes('مبيعات المحل'))));
console.log('live keys:',await p.evaluate(()=>[localStorage.getItem('emd416_mode'),localStorage.getItem('emd412_bar')]),'rb:',await p.evaluate(()=>Object.keys(localStorage).filter(k=>/416|412/.test(k))));
// أول تشغيل: يظهر فقط لتطبيق بلا بيانات
console.log('errs',errs);await b.close()})();
