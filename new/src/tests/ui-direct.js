// اختبار «البيع المباشر»: بيع كامل، آجل برقم العميل، تحصيل، إرجاع، فاتورة صورة، والتقفيلة
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:400,height:860}});const errs=[];
const p=await ctx.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('dialog',d=>d.accept());
await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(300);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(300);
const pick=await p.evaluate(()=>{const d=EMDRebuild.db();const x=d.products.find(q=>(+q.stock||0)>=5);return {name:x.name,stock:+x.stock}});
await p.click('nav#bar [data-act=moreSheet]');await p.waitForTimeout(200);await p.click('.sheet [data-act=direct]');await p.waitForTimeout(900);
console.log('open:',await p.evaluate(()=>document.getElementById('emd113Ov').classList.contains('show')));
await p.fill('#emd113Q',pick.name);await p.waitForTimeout(200);
await p.click('#emd113Pl .emd113-p[data-v="'+pick.name+'"]');await p.click('#emd113Pl .emd113-p[data-v="'+pick.name+'"]');await p.waitForTimeout(200);
await p.screenshot({path:'/tmp/direct-new.png',fullPage:false});
await p.click('#emd113Ov [data-a=go]');await p.waitForTimeout(500);
let r=await p.evaluate(n=>{const d=EMDRebuild.db();return {sales:(d.directSales||[]).length,stock:+d.products.find(x=>x.name===n).stock,seq:d.directSeq}},pick.name);
console.log('after full sale:',JSON.stringify(r),'expected stock',pick.stock-2);
await p.screenshot({path:'/tmp/direct-done.png'});
// آجل
await p.click('#emd113Ov [data-a=new]');await p.waitForTimeout(300);
await p.fill('#emd113Q',pick.name);await p.waitForTimeout(150);await p.click('#emd113Pl .emd113-p[data-v="'+pick.name+'"]');
await p.click('#emd113Ov [data-a=mode][data-v=credit]');await p.fill('#emd113CN','سالم');await p.fill('#emd113CP','99112233');await p.waitForTimeout(150);
await p.click('#emd113Ov [data-a=go]');await p.waitForTimeout(500);
r=await p.evaluate(()=>{const d=EMDRebuild.db();const s=d.directSales[d.directSales.length-1];const c=d.customers.find(c=>String(c.phone).includes('99112233'));return {id:s.id,paid:(s.payments||[]).length,cust:!!c,cs:c&&c.directSales}});
console.log('credit sale:',JSON.stringify(r));
// القائمة والتفاصيل والتحصيل والإرجاع عبر الواجهة البرمجية
const res=await p.evaluate(id=>{const X=EMDDirectV113;const a=X.collect(id,1,'cash','');const s=X.list().find(x=>x.id===id);const b2=X.returnItems(id,null,'cash','اختبار',true);return {collect:a.ok,ret:b2.ok,status:X.statusOf(s)}},r.id);
console.log('collect/void:',JSON.stringify(res),'| stock now',await p.evaluate(n=>+EMDRebuild.db().products.find(x=>x.name===n).stock,pick.name),'expected',pick.stock-2);
await p.click('#emd113Ov [data-a=tab][data-v=list]');await p.waitForTimeout(300);await p.screenshot({path:'/tmp/direct-list.png'});
console.log('list rows:',await p.evaluate(()=>document.querySelectorAll('#emd113Body [data-a=open]').length));
await p.evaluate(id=>EMDDirectV113.invoiceImage(id),r.id);await p.waitForTimeout(800);console.log('invoice img:',await p.evaluate(()=>!!document.querySelector('#emd113InvImg')));
await p.evaluate(()=>{const x=document.querySelector('#emd113InvClose');x&&x.click();EMDDirectV113.close()});
// التقفيلة
await p.evaluate(()=>{const x=document.createElement('button');x.dataset.act='closing';document.body.appendChild(x);x.click();x.remove()});await p.waitForTimeout(300);
console.log('closing line:',await p.evaluate(()=>{const t=document.querySelector('.cltxt');return t&&(t.value||t.textContent).split('\n').filter(l=>l.includes('البيع المباشر')).join('')}));
console.log('live keys untouched:',await p.evaluate(()=>localStorage.getItem('emd_v113_draft')===null));
console.log('errs',errs);await b.close()})();
