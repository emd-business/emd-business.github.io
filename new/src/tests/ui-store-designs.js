// متجري: التصاميم V245/V246 (شارات جديد، القفل، كود التفعيل محجوب في التجربة) + نموذج التخصيص V247 في المنتجات. يحتاج خادم :8131
// اختبار «متجري» في التجربة: التحميل عند الحاجة، الطلبات الواردة، المعاينة، ومنع الكتابة في الخادم
const {chromium}=require('playwright');const fs=require('fs'),path=require('path');
const STORE_PAGE=fs.readFileSync('/home/user/emd-business.github.io/store/index.html','utf8');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:400,height:860}});const errs=[],calls=[];
await ctx.route('https://gpwgckwlcntvesnlptej.supabase.co/**',r=>{const u=r.request().url();if(u.includes('/auth/v1/token'))return r.fulfill({status:200,contentType:'application/json',body:JSON.stringify({access_token:'AT',refresh_token:'RT',expires_in:3600,user:{id:'U1',email:'a@b.co'}})});return r.fulfill({status:200,contentType:'application/json',body:'[]'})});
await ctx.route('https://pfkstppvnebagbdckgbu.supabase.co/**',r=>{const body=JSON.parse(r.request().postData()||'{}');calls.push(body.action);if(body.action==='state')return r.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true,priv:['slowbrew','giveaway'],mine:['slowbrew']})});
  if(body.action==='orders')return r.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true,orders:[{id:501,created_at:new Date().toISOString(),total:12.5,subtotal:10.5,ship:2,payment:'cod',customer:{name:'نورة',phone:'99112233',city:'مسقط'},items:[{name:'عطر ليالي',qty:1,price:10.5}]}]})});
  return r.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true,rows:[]})})});
await ctx.route('**/store/index.html',r=>r.fulfill({status:200,contentType:'text/html',body:STORE_PAGE}));
const p=await ctx.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('dialog',d=>d.accept());
await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(300);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(300);
await p.evaluate(()=>{localStorage.setItem('emd_store_v411',JSON.stringify({on:true,name:'متجر التجربة',slug:'test-shop',pubAt:'9/11 · 10:00',pubSlug:'test-shop',prod:{}}));localStorage.removeItem('emd_rb_store')});
await p.evaluate(()=>document.body.classList.add('hopen'));await p.click('#cloudChip');await p.fill('#clEmail','a@b.co');await p.fill('#clPw','pass1234');await p.click('[data-ck=go]');await p.waitForTimeout(600);
await p.evaluate(()=>document.querySelectorAll('.sheet').forEach(s=>s.remove()));await p.reload();await p.waitForTimeout(5500);
console.log('store.js loaded:',await p.evaluate(()=>!!window.EMDStoreV411),'| seeded:',await p.evaluate(()=>!!localStorage.getItem('emd_rb_store')),'| card:',JSON.stringify(await p.evaluate(()=>(document.querySelector('.scard')||{}).textContent)));
await p.click('.scard');await p.waitForTimeout(500);await p.screenshot({path:'/tmp/store-orders.png'});
await p.click('#emd411Store [data-tab=design]');await p.waitForTimeout(1200);
const r=await p.evaluate(()=>({layouts:document.querySelectorAll('#emd411Store [data-e150c="layout"]').length,newBadge:document.querySelectorAll('#emd411Store .e245n').length,locked:document.querySelectorAll('#emd411Store .e246L').length,mine:document.querySelectorAll('#emd411Store .e246M').length,codeBtn:!!document.querySelector('#emd411Store .e246c'),first:(document.querySelector('#emd411Store [data-e150c="layout"]')||{}).textContent}));
console.log('designs',JSON.stringify(r),'ls',await p.evaluate(()=>Object.keys(localStorage).filter(k=>/246/.test(k))));
await p.click('#emd411Store .e246c');await p.waitForTimeout(400);await p.fill('#e246S input','ABCD1234');await p.click('#e246S .go');await p.waitForTimeout(800);console.log('redeem in sandbox:',await p.$eval('#e246S .ms',e=>e.textContent));
await p.evaluate(()=>{var e=document.querySelector('#e246S');e&&e.remove()});
await p.click('#emd411Store [data-tab=prod]');await p.waitForTimeout(800);console.log('pz247 forms',await p.$$eval('#emd411Store .pz247',l=>l.length));
await p.screenshot({path:'/tmp/store-designs.png'});
console.log('calls',calls.join(','));console.log('errs',errs);await b.close()})();
