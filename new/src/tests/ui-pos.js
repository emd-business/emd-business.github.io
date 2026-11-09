// نقطة البيع في نوع «محل»: أدوات المنتجات، الباقي، الوردية، بطاقات الكاشير، والنوع الأونلاين لا يتغير
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const ctx=await b.newContext({viewport:{width:400,height:860}});
const p=await ctx.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('dialog',d=>d.accept());
await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(300);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(300);
// أونلاين: البيع المباشر بالنسخة الحية
await p.click('nav#bar [data-act=moreSheet]');await p.click('.sheet [data-act=direct]');await p.waitForTimeout(800);
console.log('online: pos tools',await p.evaluate(()=>!!document.querySelector('.e419-tools')),'| EMD419',await p.evaluate(()=>!!window.EMD419));
await p.evaluate(()=>{localStorage.setItem('emd_rb_emd416_mode','shop');localStorage.setItem('emd_rb_emd416_asked','1')});await p.reload();await p.waitForTimeout(1800);
const home=await p.$eval('#view',v=>v.textContent);console.log('shop home cards:',['فواتير اليوم','النقد في الدرج','فواتير معلّقة','آجل غير محصّل','مرتجعات اليوم'].every(s=>home.includes(s)),'| status cards hidden',!home.includes('طلبات جديدة'),'| shift chip',/الوردية/.test(home));
await p.screenshot({path:'/tmp/claude-0/cmp/n-pos-home.png'});
await p.click('nav#bar [data-act=direct]');await p.waitForTimeout(700);
console.log('shop: pos tools',await p.evaluate(()=>!!document.querySelector('.e419-tools')),'| grid class',await p.evaluate(()=>document.getElementById('emd113Pl').className));
await p.screenshot({path:'/tmp/claude-0/cmp/n-pos-sale.png'});
// أضف منتجًا ثم المبلغ المستلم
await p.evaluate(()=>EMDDirectV113._add(EMDRebuild.db().products[0].name));await p.waitForTimeout(300);
const tender=await p.evaluate(()=>!!document.getElementById('e419T'));console.log('tender box:',tender);
await p.fill('#e419T','50');await p.waitForTimeout(300);console.log('change:',await p.$eval('.e419-change',x=>x.textContent).catch(()=>'none'));
await p.screenshot({path:'/tmp/claude-0/cmp/n-pos-tender.png',fullPage:true});
// الوردية
const sh=await p.evaluate(()=>{try{return EMD420.on()+'|'+JSON.stringify(EMD420.shift())}catch(e){return 'err '+e.message}});console.log('shift api:',sh);
console.log('keys:',await p.evaluate(()=>Object.keys(localStorage).filter(k=>/^emd4[12]\d_/.test(k))),'live untouched',await p.evaluate(()=>localStorage.getItem('emd_business_v1')===null));
console.log('errs',errs);await b.close()})();
// بيع كامل في نوع «محل» مع وردية مفتوحة
(async()=>{const b=await chromium.launch();const errs=[];const p=await (await b.newContext({viewport:{width:400,height:860}})).newPage();p.on('pageerror',e=>errs.push(e.message));p.on('dialog',d=>d.accept());
await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(300);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(300);
await p.evaluate(()=>{localStorage.setItem('emd_rb_emd416_mode','shop');localStorage.setItem('emd_rb_emd416_asked','1')});await p.reload();await p.waitForTimeout(1800);
await p.click('nav#bar [data-act=direct]');await p.waitForTimeout(600);await p.evaluate(()=>EMDDirectV113.open('shift'));await p.waitForTimeout(400);
const inp=await p.$('#emd113Body input');if(inp){await inp.fill('10');}const sb=await p.$('#emd113Body button.e420-go, #emd113Body [data-e420="start"], #emd113Body button');
const startBtn=await p.evaluateHandle(()=>[...document.querySelectorAll('#emd113Body button')].find(b=>/بدء الوردية/.test(b.textContent)));await startBtn.click();await p.waitForTimeout(400);
console.log('shift open:',await p.evaluate(()=>!!EMD420.shift()));
await p.evaluate(()=>EMDDirectV113.open('new'));await p.waitForTimeout(300);
const n0=await p.evaluate(()=>(EMDRebuild.db().directSales||[]).length),st0=await p.evaluate(()=>EMDRebuild.db().products[0].stock);
await p.evaluate(()=>EMDDirectV113._add(EMDRebuild.db().products[0].name));await p.waitForTimeout(300);await p.fill('#e419T','40');await p.waitForTimeout(200);
await p.click('#emd113Ft [data-a="go"]');await p.waitForTimeout(800);
const s=await p.evaluate(()=>{const d=EMDRebuild.db();const x=d.directSales[d.directSales.length-1];return {n:d.directSales.length,tendered:x.tendered,stock:d.products[0].stock}});
console.log('sale saved:',s.n===n0+1,'tendered',s.tendered,'stock',st0,'->',s.stock);
await p.click('#emd113Ov [data-a="close"]').catch(()=>{});await p.waitForTimeout(300);await p.evaluate(()=>{document.querySelectorAll('.emd113-ov.show').forEach(x=>x.classList.remove('show'));EMDRebuild.render()});
const home=await p.$eval('#view',v=>v.textContent);console.log('home after sale:',await p.$eval('#e438',g=>[...g.children].map(c=>c.querySelector('b').textContent).join(' / ')));
console.log('rb pos keys:',await p.evaluate(()=>Object.keys(localStorage).filter(k=>/emd_rb_emd4[2-5]/.test(k))),'live untouched',await p.evaluate(()=>localStorage.getItem('emd_business_v1')===null&&localStorage.getItem('emd420_shift')===null));
console.log('errs2',errs);await b.close()})();
