// اختبار «المالية»: الفتح من شريط الرئيسية، الأرقام مطابقة، كل التبويبات، التحصيل، المصروفات، والأسعار
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:400,height:860}});const errs=[];
await ctx.addInitScript(()=>{window.open=u=>{window.__u=u}});
const p=await ctx.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('dialog',d=>d.accept());
await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(300);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(300);
await p.click('.money[data-act=finance]');await p.waitForTimeout(1200);
console.log('open:',await p.evaluate(()=>!!document.querySelector('#emd75Ov.show')));
const cmp=await p.evaluate(()=>{const s=EMDMoneyV75.summary('today'),ix=EMDRebuild.index(),due=EMDMoneyV75.dues().reduce((a,x)=>a+x.rem,0);return {sales:[+s.sales.toFixed(3),+ix.sales.toFixed(3)],due:[+due.toFixed(3),+ix.unpaid.toFixed(3)],profitMonth:[+EMDMoneyV75.summary('month').profit.toFixed(3),+ix.profit.toFixed(3)]}});
console.log('numbers (finance vs home):',JSON.stringify(cmp));
await p.screenshot({path:'/tmp/money-sum.png'});
for(const t of ['led','due','cour','exp','price']){await p.click('#emd75Tabs [data-v='+t+']');await p.waitForTimeout(200);console.log('tab',t,(await p.$eval('#emd75Body',x=>x.textContent.replace(/\s+/g,' ').slice(0,90))))}
// التحصيل: تسجيل دفع أول طلب غير مدفوع
await p.click('#emd75Tabs [data-v=due]');await p.waitForTimeout(200);
const d0=await p.evaluate(()=>EMDMoneyV75.dues().length);const pb=await p.$('#emd75Body [data-a=markPaid]');
if(pb){await pb.click();await p.waitForTimeout(300)}
console.log('dues',d0,'→',await p.evaluate(()=>EMDMoneyV75.dues().length),'| home unpaid',await p.evaluate(()=>+EMDRebuild.index().unpaid.toFixed(3)));
// مصروف
await p.click('#emd75Tabs [data-v=exp]');await p.waitForTimeout(200);
await p.fill('#emd75ExName','تغليف');await p.fill('#emd75ExAmt','2.5');await p.click('#emd75Body [data-a=addExp]');await p.waitForTimeout(300);
console.log('expenses',await p.evaluate(()=>(EMDRebuild.db().expenses||[]).length));
await p.screenshot({path:'/tmp/money-exp.png'});
await p.evaluate(()=>EMDMoneyV75.close());await p.waitForTimeout(200);
console.log('live keys untouched:',await p.evaluate(()=>['emd_v75_since','emd_v75_couriers','emd_v75_legacy_on'].every(k=>localStorage.getItem(k)===null)));
console.log('errs',errs);await b.close()})();
