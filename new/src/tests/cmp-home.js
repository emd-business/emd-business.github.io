const {chromium}=require('playwright');const O='/tmp/claude-0/cmp/';
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:400,height:860}});
await ctx.route('https://**/*',r=>r.request().url().includes('localhost')?r.continue():r.fulfill({status:200,contentType:'application/json',body:'[]'}));
const n=await ctx.newPage();n.on('dialog',d=>d.accept());
await n.goto('http://localhost:8132/new/index.html');await n.waitForTimeout(400);await n.click('[data-act=demo][data-n="40"]');await n.waitForTimeout(400);
const data=await n.evaluate(()=>JSON.stringify(EMDRebuild.db()));
await n.evaluate(d=>{Object.keys(localStorage).forEach(k=>localStorage.removeItem(k));localStorage.setItem('emd_business_v1',d);localStorage.setItem('emd_manager_profile_v41',JSON.stringify({name:'عماد'}));localStorage.setItem('emd_business_profile_v333',JSON.stringify({name:'متجر التجربة'}));localStorage.setItem('emd_v85_snooze',String(Date.now()+864e5))},data);
const l=await ctx.newPage();l.on('dialog',d=>d.accept());
await l.goto('http://localhost:8132/index.html');await l.waitForTimeout(9000);
await l.screenshot({path:O+'live-homefull.png',fullPage:true});
const more=await l.$('nav button:has-text("المزيد")');if(more){await more.click();await l.waitForTimeout(700);await l.screenshot({path:O+'live-more.png'});await l.keyboard.press('Escape');await l.waitForTimeout(300)}
const set=await l.$('button:has-text("الإعدادات")');if(set){await set.click();await l.waitForTimeout(800);await l.screenshot({path:O+'live-settings.png',fullPage:false})}
await n.reload();await n.waitForTimeout(800);await n.screenshot({path:O+'new-homefull.png',fullPage:true});
await n.click('nav#bar [data-act=moreSheet]');await n.waitForTimeout(300);await n.screenshot({path:O+'new-more.png'});
await b.close()})();
