// مقارنة شاشة بشاشة: التطبيق الحالي (/index.html) والتطبيق الجديد (/new/) على البيانات نفسها
const {chromium}=require('playwright');const O='/tmp/claude-0/cmp/';
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:400,height:860}});
await ctx.route('https://**/*',r=>r.request().url().includes('localhost')?r.continue():r.fulfill({status:200,contentType:'application/json',body:'[]'}));
await ctx.addInitScript(()=>{window.open=u=>{window.__u=u}});
const n=await ctx.newPage();const ne=[];n.on('pageerror',e=>ne.push(e.message));n.on('dialog',d=>d.accept());
await n.goto('http://localhost:8132/new/index.html');await n.waitForTimeout(400);await n.click('[data-act=demo][data-n="40"]');await n.waitForTimeout(400);
const data=await n.evaluate(()=>JSON.stringify(EMDRebuild.db()));
await n.evaluate(d=>{Object.keys(localStorage).forEach(k=>localStorage.removeItem(k));localStorage.setItem('emd_business_v1',d);localStorage.setItem('emd_manager_profile_v41',JSON.stringify({name:'عماد'}));localStorage.setItem('emd_business_profile_v333',JSON.stringify({name:'متجر التجربة'}))},data);
const l=await ctx.newPage();const le=[];l.on('pageerror',e=>le.push(e.message));l.on('dialog',d=>d.accept());
await l.goto('http://localhost:8132/index.html');await l.waitForTimeout(9000);
await l.evaluate(()=>document.querySelectorAll('.emd-modal,.modal,[class*=welcome],[id*=Welcome],[id*=wizard]').forEach(x=>{if(getComputedStyle(x).position==='fixed')x.remove()}));
await l.screenshot({path:O+'live-home.png'});
await n.reload();await n.waitForTimeout(3500);await n.evaluate(()=>scrollTo(0,0));await n.screenshot({path:O+'new-home.png'});await n.click('nav#bar [data-act=moreSheet]');await n.waitForTimeout(300);await n.screenshot({path:O+'new-more.png'});await n.click('.sheet .x');
const shots=[['direct',"EMDDirectV113.open('new')","EMDDirectV113.close()"],['directList',"EMDDirectV113.open('list')","EMDDirectV113.close()"],
 ['money',"EMDMoneyV75.open('sum')","EMDMoneyV75.close()"],['moneyLed',"EMDMoneyV75.open('led')","EMDMoneyV75.close()"],['moneyDue',"EMDMoneyV75.open('due')","EMDMoneyV75.close()"],
 ['moneyCour',"EMDMoneyV75.open('cour')","EMDMoneyV75.close()"],['moneyExp',"EMDMoneyV75.open('exp')","EMDMoneyV75.close()"],['moneyPrice',"EMDMoneyV75.open('price')","EMDMoneyV75.close()"],
 ['support',"(window.EMDSupportV101||window.EMD101).open('home')","(document.querySelector('.emd93-ov .emd93-x')||{click(){}}).click()"]];
await n.click('.money[data-act=finance]');await n.waitForTimeout(1500);await n.evaluate(()=>EMDMoneyV75.close());await n.click('.hbtns [data-act=support]');await n.waitForTimeout(1000);await n.evaluate(()=>document.querySelector('.emd93-ov .emd93-x').click());
for(const [k,op,cl] of shots){
  for(const [pg,nm] of [[l,'live'],[n,'new']]){try{await pg.evaluate(op);await pg.waitForTimeout(500);await pg.screenshot({path:O+nm+'-'+k+'.png'});await pg.evaluate(cl);await pg.waitForTimeout(200)}catch(e){console.log(nm,k,'ERR',e.message.slice(0,120))}}}
console.log('live errs',le.slice(0,5));console.log('new errs',ne);await b.close()})();
