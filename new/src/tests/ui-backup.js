const {chromium}=require('playwright');const O='/tmp/claude-0/cmp/';
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:400,height:860},acceptDownloads:true});const errs=[];
const n=await ctx.newPage();n.on('pageerror',e=>errs.push(e.message));n.on('dialog',d=>{console.log('DLG',d.message().slice(0,70));d.accept()});await n.goto('http://localhost:8133/new/index.html');await n.waitForTimeout(300);await n.click('[data-act=demo][data-n="40"]');await n.waitForTimeout(7500);
console.log('banner',await n.evaluate(()=>{const b=document.getElementById('emd122Ban');return b?b.innerText.slice(0,60):'none'}));
await n.screenshot({path:O+'n-bk0.png'});
const set=()=>n.evaluate(()=>{const b=document.createElement('button');b.dataset.act='settings';document.body.appendChild(b);b.click();b.remove()});
await set();await n.click('[data-sg=data]');await n.waitForTimeout(300);await n.screenshot({path:O+'n-bk1.png'});await n.click('#e445G [data-si=bk]');await n.waitForTimeout(600);
console.log('status',await n.$eval('#emd313Status',x=>x.textContent));await n.screenshot({path:O+'n-bk2.png'});
const [dl]=await Promise.all([n.waitForEvent('download'),n.click('#emd313Export')]);const p=await dl.path();const j=JSON.parse(require('fs').readFileSync(p,'utf8'));console.log('export',j.format,j.database.orders.length,dl.suggestedFilename());
// استيراد بعد حذف طلب
await n.evaluate(()=>{EMDRebuild.db().orders.splice(0,3);EMDRebuild.save()});await n.waitForTimeout(300);
await n.setInputFiles('#emd313File',p);await n.waitForTimeout(800);console.log('after import',await n.evaluate(()=>EMDRebuild.db().orders.length),await n.$eval('#emd313Status',x=>x.textContent));
await n.evaluate(()=>EMDBackupV313.close());
await set();await n.click('[data-sg=data]');await n.click('#e445G [data-si=bk2]');await n.waitForTimeout(400);await n.screenshot({path:O+'n-bk3.png'});console.log('bk2',await n.$eval('#emd122Modal',x=>x.innerText.slice(0,160).replace(/\n/g,' | ')));
await n.evaluate(()=>document.getElementById('emd122Modal').remove());
await set();await n.click('[data-sg=data]');await n.click('#e445G [data-si=lost]');await n.waitForTimeout(1200);console.log('lost',await n.$eval('#emd124Modal',x=>x.innerText.slice(0,160).replace(/\n/g,' | ')));
console.log('live untouched',await n.evaluate(()=>localStorage.getItem('emd_business_v1')===null));
console.log(errs);await b.close()})();
