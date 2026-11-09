// اختبار رابط التتبع وتأكيد الاستلام بخادم وهمي
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[],calls=[];
async function dev(test){const ctx=await b.newContext({viewport:{width:400,height:860}});
  await ctx.route('https://emd-track-confirm.lovable.app/**',r=>{const u=new URL(r.request().url()),body=JSON.parse(r.request().postData()||'{}');calls.push(u.pathname+':'+(body.status||body.action));
    if(u.pathname.endsWith('create-tracking'))return r.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true,tracking_url:'https://emd-track-confirm.lovable.app/t/TOK'+body.order_ref.replace(/\W/g,''),order:{status:body.status}})});
    if(u.pathname.endsWith('order-status'))return r.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true,orders:body.items.map((x,i)=>i===0?{client_token:x.client_token,status:'received',customer_confirmed_at:'2026-11-09T12:00:00Z',rating:5,comment:'ممتاز'}:{client_token:x.client_token,status:'shipped'})})});
    return r.fulfill({status:404,body:''})});
  if(test)await ctx.addInitScript(()=>{window.__EMD_CLOUD_TEST=true});
  const p=await ctx.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('dialog',d=>d.accept());await ctx.addInitScript(()=>{window.open=u=>{window.__u=u}});
  await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(300);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(300);return p}
// 1) وضع النشر (اختبار): الشحن ثم رسالة واتساب تحمل رابط التتبع
const A=await dev(true);
const id=await A.evaluate(()=>{const o=EMDRebuild.db().orders.find(x=>x.status==='packing'||x.status==='ready');return o.id});
await A.evaluate(id=>{const o=EMDRebuild.db().orders.find(x=>x.id===id);o.status='shipped';o.shippedAt=new Date().toISOString();o.company='أسياد';EMDRebuild.save()},id);
await A.click('nav#bar [data-go=orders]');await A.waitForTimeout(200);
await A.evaluate(id=>{document.querySelector('.card[data-id="'+id+'"] [data-act=wa]').click()},id);await A.waitForTimeout(800);
const txt=await A.$eval('#waTa',x=>x.value);console.log('wa has link:',/t\/TOK/.test(txt),'| calls',calls.join(','));
await A.evaluate(()=>document.querySelectorAll('.sheet').forEach(s=>s.remove()));
// 2) تأكيد العميل والتقييم يصلان
calls.length=0;await A.evaluate(()=>EMDRebuild.trPoll(true));await A.waitForTimeout(500);
const o=await A.evaluate(id=>{const o=EMDRebuild.db().orders.find(x=>x.id===id);return {s:o.status,c:o.customerConfirmed,r:o.customerRating&&o.customerRating.stars}},id);
console.log('after poll:',JSON.stringify(o),'| card pills:',await A.evaluate(id=>{EMDRebuild.render();const c=document.querySelector('.card[data-id="'+id+'"]');return c?/أكّد العميل الاستلام/.test(c.textContent)&&/★/.test(c.textContent):'card not visible'},id));
// 3) التجربة: لا إنشاء روابط
calls.length=0;const S=await dev(false);
await S.evaluate(()=>{const o=EMDRebuild.db().orders.find(x=>x.status==='ready');o.status='shipped';EMDRebuild.save()});await S.waitForTimeout(400);
await S.click('nav#bar [data-go=orders]');await S.evaluate(()=>{const o=EMDRebuild.db().orders.find(x=>x.status==='shipped'&&!x.clientToken);document.querySelector('.card[data-id="'+o.id+'"] [data-act=wa]').click()});await S.waitForTimeout(600);
console.log('sandbox create calls:',calls.filter(c=>c.includes('create')).length);
console.log('errs',errs);await b.close()})();
