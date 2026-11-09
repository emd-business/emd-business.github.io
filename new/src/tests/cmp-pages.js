const {chromium}=require('playwright');const O='/tmp/claude-0/cmp/';
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:400,height:860}});
await ctx.route('https://**/*',r=>r.request().url().includes('localhost')?r.continue():r.fulfill({status:200,contentType:'application/json',body:'[]'}));
const l=await ctx.newPage();l.on('dialog',d=>d.accept());
await l.goto('http://localhost:8132/new/index.html');await l.waitForTimeout(400);await l.click('[data-act=demo][data-n="40"]');await l.waitForTimeout(400);const data=await l.evaluate(()=>JSON.stringify(EMDRebuild.db()));await l.evaluate(d=>{Object.keys(localStorage).forEach(k=>localStorage.removeItem(k));localStorage.setItem('emd_business_v1',d);localStorage.setItem('emd_manager_profile_v41',JSON.stringify({name:'عماد'}));localStorage.setItem('emd_business_profile_v333',JSON.stringify({name:'متجر التجربة'}))},data);
await l.goto('http://localhost:8132/index.html');await l.waitForTimeout(9000);
for(const [i,nm] of [['4','track'],['9','perf']]){
  await l.evaluate(()=>{const b=[...document.querySelectorAll('nav button, nav a')].filter(x=>x.offsetParent&&/المزيد/.test(x.textContent)).pop();b.click()});await l.waitForTimeout(600);
  await l.click('#emd410Sheet [data-i="'+i+'"]');await l.waitForTimeout(1500);
  await l.screenshot({path:O+'live-'+nm+'.png',fullPage:true});
  console.log(nm,':: visible overlay text:',await l.evaluate(()=>{const c=[...document.querySelectorAll('body *')].filter(x=>{const s=getComputedStyle(x);return (s.position==='fixed')&&x.offsetHeight>400&&x.innerText.length>50});const t=c.pop();return t?(t.id+'|'+t.className+' :: '+t.innerText.replace(/\n+/g,' | ').slice(0,4000)):('page: '+document.body.innerText.slice(0,4000).replace(/\n+/g,' | '))}));
  await l.keyboard.press('Escape');await l.reload();await l.waitForTimeout(8000)}
await b.close()})();
