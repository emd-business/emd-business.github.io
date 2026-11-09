const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:400,height:860}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(400);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(400);
await p.click('[data-act=moreSheet] >> nth=0');await p.waitForTimeout(200);
const btns=await p.$$eval('.sheet button',bs=>bs.map(b=>[...b.attributes].map(a=>a.name+'='+a.value).join(' ')+' :: '+b.textContent.trim().slice(0,20)));console.log(btns.join('\n'));
for(const t of ['العملاء','المنتجات','المخزن']){await p.evaluate(()=>document.querySelectorAll('.sheet').forEach(s=>s.remove()));await p.click('[data-act=moreSheet] >> nth=0');await p.click('.sheet button:has-text("'+t+'")');await p.waitForTimeout(250);console.log(t,'->',(await p.textContent('main')).slice(0,80).replace(/\s+/g,' '))}
console.log('errs',errs);await b.close()})();
