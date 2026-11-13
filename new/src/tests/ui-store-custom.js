// تخصيص المتجر V247: صندوق «تخصيص الزبون» في تفاصيل الطلب. يحتاج خادم :8131
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:400,height:860}});const errs=[];
await ctx.route(/supabase\.co|lovable|jsdelivr/,r=>r.abort());
const p=await ctx.newPage();p.on('pageerror',e=>errs.push(e.message));
await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(300);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(300);
await p.evaluate(()=>{localStorage.setItem('emd_store_v411',JSON.stringify({on:true,name:'م',slug:'t',pubAt:'9/11',pubSlug:'t',prod:{}}));localStorage.removeItem('emd_rb_store');
 var d=JSON.parse(localStorage.getItem('emd_rb_sandbox_v1'));d.orders[0].pz247=[{name:'كوب',qty:2,pz:{t:'سالم',n:'لون أزرق',f:[{id:'f1',m:'image/jpeg'}],fee:0.5}}];localStorage.setItem('emd_rb_sandbox_v1',JSON.stringify(d));window.__id=d.orders[0].id});
await p.reload();await p.waitForTimeout(1200);
await p.evaluate(()=>window.EMDH?0:0);
// load store.js (hook lives there) then open the order
await p.click('.scard');await p.waitForTimeout(2500);console.log('store loaded',await p.evaluate(()=>!!window.EMD247));await p.evaluate(()=>{try{window.EMDStoreV411.close()}catch(e){}document.querySelectorAll('.sheet').forEach(s=>s.remove())});
const id=await p.evaluate(()=>JSON.parse(localStorage.getItem('emd_rb_sandbox_v1')).orders[0].id);
await p.click('#bar [data-go=orders]');await p.waitForTimeout(500);console.log('store loaded',await p.evaluate(()=>!!window.EMD247),'view',await p.evaluate(()=>document.body.className+' | '+(document.querySelector('#list')?document.querySelectorAll('#list .card').length:'nolist')+' | '+[...document.querySelectorAll('[data-go],[data-act]')].slice(0,12).map(b=>b.getAttribute('data-go')||b.getAttribute('data-act')).join(',')));await p.screenshot({path:'/tmp/store-custom-1.png'});const c=await p.$('#list .card [data-act=open]');await c.click();await p.waitForTimeout(500);
console.log('box',await p.evaluate(()=>{var e=document.querySelector('#frm .pz247d');return e&&e.textContent.slice(0,120)}));
await p.screenshot({path:'/tmp/store-custom.png'});
console.log('errs',errs);await b.close()})();
