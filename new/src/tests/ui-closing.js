// اختبار تقفيلة اليوم: الملخص، الإعدادات، التقفيل، والتذكير
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:400,height:860}});const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('dialog',d=>d.accept());
await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(400);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(400);
await p.evaluate(()=>{const o=EMDRebuild.db().orders[0];o.orderDate=new Date().toISOString();o.paidAt=new Date().toISOString();o.paymentStatus='paid';o.paidAmount=EMDRebuild.total(o)});
await p.click('[data-act=closing]');await p.waitForTimeout(300);
const txt=await p.$eval('.cltxt',x=>x.textContent);console.log('text:',JSON.stringify(txt.slice(0,260)));
console.log('kpis',await p.$$eval('.sheet .kpi',x=>x.map(k=>k.textContent).join(' | ')));
await p.screenshot({path:'/tmp/closing.png'});
await p.click('.sheet details.more summary');await p.fill('[data-cc=wa]','99887766');await p.press('[data-cc=wa]','Tab');await p.waitForTimeout(100);
console.log('cfg',await p.evaluate(()=>localStorage.getItem('emd_rb_close')),'live untouched',await p.evaluate(()=>localStorage.getItem('emd_v108_close')));
await p.evaluate(()=>{window.__u='';window.open=u=>{window.__u=u}});await p.click('[data-cl=wa]');console.log('wa url ok',await p.evaluate(()=>/wa\.me\/96899887766\?text=/.test(window.__u)));
await p.click('[data-cl=done]');await p.waitForTimeout(300);
console.log('okbar',await p.$eval('.okbar',x=>x.textContent),'closings',await p.evaluate(()=>localStorage.getItem('emd_rb_closings')));
await p.evaluate(()=>document.querySelectorAll('.sheet').forEach(s=>s.remove()));
// التذكير: يوم بلا تقفيل ووقت مضى
await p.evaluate(()=>{localStorage.removeItem('emd_rb_closings');localStorage.setItem('emd_rb_close',JSON.stringify({enabled:true,time:'00:00'}))});
await p.reload();await p.waitForTimeout(400);
await p.evaluate(()=>{});await p.waitForTimeout(31000);//await p.waitForTimeout(100);
const rem=await p.evaluate(()=>!!document.querySelector('.sheet h3')&&document.querySelector('.sheet h3').textContent);console.log('reminder',rem);
await p.click('.sheet [data-act=closing]');await p.waitForTimeout(300);console.log('opened from reminder',await p.$$eval('.sheet',x=>x.length),await p.$eval('.sheet h3',x=>x.textContent));
console.log('errs',errs);await b.close()})();
