// ملصق الشحن الكامل (V418+V422+V423+V424+V137+V155): الفتح، التصميم، الملصق السريع، رسوم التوصيل، عدم لمس المفاتيح الحية
const {chromium}=require('playwright');const O='/tmp/claude-0/cmp/';
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:400,height:860}});const errs=[];
const n=await ctx.newPage();n.on('pageerror',e=>errs.push(e.message));n.on('dialog',d=>d.accept());
await n.goto('http://localhost:8133/new/index.html');await n.waitForTimeout(300);await n.click('[data-act=demo][data-n="40"]');await n.waitForTimeout(2500);
await n.evaluate(()=>document.querySelectorAll('.rc-alert,#emd122Ban').forEach(x=>x.remove()));
const before=await n.evaluate(()=>Object.keys(localStorage).filter(k=>!k.startsWith('emd_rb_')).sort().map(k=>k+'='+localStorage.getItem(k).length).join(','));
const act=(a,id)=>n.evaluate(([a,id])=>{const b=document.createElement('button');b.dataset.act=a;if(id)b.dataset.id=id;document.body.appendChild(b);b.click();b.remove()},[a,id]);
const id=await n.evaluate(()=>EMDRebuild.db().orders[0].id);
await act('label',id);await n.waitForTimeout(2500);
console.log('modal',await n.$eval('#emd418 .win',x=>[...x.querySelectorAll('.e137-fee,.e137-off,.e423,.e155,.e422')].map(e=>e.className.split(' ')[0]).join('|')).catch(()=>'none'),'img',await n.$$eval('#emd418Pv img',x=>x.length));
await n.screenshot({path:O+'n-lbl.png'});
await n.click('#emd418 [data-e137fee] [data-v=unpaid]');await n.waitForTimeout(600);
console.log('feePaid',await n.evaluate(id=>EMDRebuild.db().orders.find(o=>o.id===id).feePaid,id));
await n.click('#emd418 .e423 summary');await n.click('#emd418 [data-e423p=big]');await n.waitForTimeout(800);
console.log('design',await n.evaluate(()=>localStorage.getItem('emd_rb_emd423_normal')));
await n.click('#emd418 .e137-off summary');await n.click('#emd418 [data-off=u]');await n.waitForTimeout(500);
console.log('offset',await n.evaluate(()=>localStorage.getItem('emd_rb_emd137_offset')));
await n.click('[data-e155=pin]');await n.waitForTimeout(300);console.log('pin',await n.$eval('.e155-st',x=>x.textContent.slice(0,50)));
await n.click('#emd418 [data-a8=close]');
// البطاقة: زر «🏷️ ملصق» السريع
await n.evaluate(()=>document.querySelectorAll('.sheet').forEach(x=>x.remove()));await n.evaluate(()=>{const b=document.createElement('button');b.dataset.go='orders';document.body.appendChild(b);b.click();b.remove()});await n.waitForTimeout(400);
console.log('card btns',await n.$$eval('.card [data-act=qlabel]',x=>x.length));
await n.click('.card [data-act=qlabel]');await n.waitForTimeout(2000);
console.log('quick opened label',await n.evaluate(()=>document.getElementById('emd418').classList.contains('show')));
await n.evaluate(()=>EMDLabelV418.close());
// الإعدادات ← الملصق السريع
await act('settings');await n.click('#setHub [data-si=quick]');await n.waitForTimeout(1500);await n.screenshot({path:O+'n-q424.png'});
console.log('e424',await n.evaluate(()=>document.getElementById('e424').classList.contains('show')));
await n.click('#e424 [data-o=card]');await n.waitForTimeout(300);await n.click('#e424 .go').catch(()=>n.evaluate(()=>document.getElementById('e424').classList.remove('show')));
console.log('quick opt',await n.evaluate(()=>localStorage.getItem('emd_rb_emd424_quick')));
await n.evaluate(()=>document.querySelectorAll('.sheet').forEach(x=>x.remove()));await n.evaluate(()=>{const b=document.createElement('button');b.dataset.go='orders';document.body.appendChild(b);b.click();b.remove()});await n.waitForTimeout(400);console.log('card btns after off',await n.$$eval('.card [data-act=qlabel]',x=>x.length));
// رسوم التوصيل في نموذج الطلب
await act('open',id);await n.waitForTimeout(500);
console.log('form fee on',await n.$eval('#feeSeg .on',x=>x.dataset.feep).catch(()=>'none'));
await n.click('#feeSeg [data-feep=paid]');await n.click('#frm button[type=submit]');await n.waitForTimeout(500);
console.log('feePaid after form',await n.evaluate(id=>EMDRebuild.db().orders.find(o=>o.id===id).feePaid,id));
const after=await n.evaluate(()=>Object.keys(localStorage).filter(k=>!k.startsWith('emd_rb_')).sort().map(k=>k+'='+localStorage.getItem(k).length).join(','));
console.log('live keys unchanged',before===after);
console.log(errs);await b.close()})();
