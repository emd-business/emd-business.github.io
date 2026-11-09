// نوع «شركة» (V430): لوحة الفروع والمخازن، الشريحة في الرئيسية، ولا اتصال بسحابة الشركة في التجربة
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[],calls=[];const ctx=await b.newContext({viewport:{width:400,height:860}});
await ctx.route('https://pfkstppvnebagbdckgbu.supabase.co/**',r=>{calls.push(r.request().url());r.fulfill({status:200,contentType:'application/json',body:'{"ok":true}'})});
const p=await ctx.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('dialog',d=>d.accept());
await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(300);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(300);
await p.click('nav#bar [data-act=moreSheet]');await p.click('.sheet [data-act=settings]');await p.waitForTimeout(150);await p.click('#setHub [data-act=modes]');await p.waitForTimeout(500);
await p.click('#emd416 [data-pick=company]');await p.waitForTimeout(150);await p.click('#emd416 [data-a=confirm]');await p.waitForTimeout(2500);
console.log('after switch: reload/open?',await p.evaluate(()=>[!!window.EMDCoV430,document.body.getAttribute('data-emd416m')]));
await p.reload();await p.waitForTimeout(2500);
console.log('bar:',await p.$$eval('nav#bar button',x=>x.map(b=>b.textContent.replace(/\d+$/,'')).join('|')));
console.log('chip:',await p.evaluate(()=>{const c=document.getElementById('emd430Chip');return c?c.textContent:'none'}));
await p.screenshot({path:'/tmp/claude-0/cmp/n-co-home.png'});
await p.evaluate(()=>EMDCoV430.open('home'));await p.waitForTimeout(800);await p.screenshot({path:'/tmp/claude-0/cmp/n-co-open.png'});
console.log('panel:',await p.evaluate(()=>{const o=document.getElementById('emd430');return o?o.textContent.slice(0,140):'none'}));
// تفعيل السحابة المشتركة يجب أن يُمنع
const r=await p.evaluate(()=>EMDCoV430.call('create',{}).then(()=>'sent',e=>e.code));console.log('cloud create:',r,'| requests',calls.length);
await p.evaluate(()=>{window.__coTick&&__coTick()});await p.waitForTimeout(300);
console.log('uids set:',await p.evaluate(()=>EMDRebuild.db().products.filter(x=>x.uid).length),'| co keys',await p.evaluate(()=>Object.keys(localStorage).filter(k=>/430/.test(k))));
console.log('live untouched',await p.evaluate(()=>localStorage.getItem('emd_business_v1')===null&&localStorage.getItem('emd430_co')===null));
console.log('errs',errs);await b.close()})();
