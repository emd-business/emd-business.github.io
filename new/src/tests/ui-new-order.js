const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:400,height:860}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(400);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(400);
await p.click('.plus');await p.waitForTimeout(200);console.log(await p.textContent('.sheet h3'),!!await p.$('#rawMsg'));
await p.click('[data-act=manualOrder]');await p.waitForTimeout(200);console.log(await p.textContent('.sheet h3'),!!await p.$('#fPhone'));
await p.screenshot({path:'/tmp/n.png'});console.log(errs);await b.close()})();
