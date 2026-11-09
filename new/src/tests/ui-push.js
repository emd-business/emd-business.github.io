// اختبار شاشة الإشعارات في التجربة: تُفتح، ولا كتابة في خادم الإشعارات
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:400,height:860},permissions:['notifications']});const errs=[],calls=[];
await ctx.route('https://pfkstppvnebagbdckgbu.supabase.co/**',r=>{const body=JSON.parse(r.request().postData()||'{}');calls.push(body.action);return r.fulfill({status:200,contentType:'application/json',body:'{"ok":true,"key":"BAAA"}'})});
await ctx.addInitScript(()=>{const N=function(t,o){window.__shown=(window.__shown||[]).concat(t)};Object.defineProperty(N,'permission',{get:()=>'granted'});N.requestPermission=()=>Promise.resolve('granted');window.Notification=N});const p=await ctx.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('dialog',d=>d.accept());
await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(300);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(300);
await p.click('.hbtns [data-act=settings]');await p.waitForTimeout(300);await p.click('.sheet [data-act=push]');await p.waitForTimeout(300);
console.log('sheet:',await p.$eval('.sheet:last-child',x=>x.textContent.replace(/\s+/g,' ').slice(0,220)));
const en=await p.$('.sheet:last-child [data-pu=main]');if(en){await en.click();await p.waitForTimeout(800)}
console.log('after enable:',await p.$eval('.sheet:last-child',x=>x.textContent.replace(/\s+/g,' ').slice(0,260)),'| server writes',calls.filter(a=>a!=='key').length);
await p.screenshot({path:'/tmp/push.png'});console.log('errs',errs);await b.close()})();
