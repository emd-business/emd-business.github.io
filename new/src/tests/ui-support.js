// اختبار «المساعدة والدعم» في التجربة: الأسئلة الشائعة، قراءة الردود، ومنع الإرسال
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:400,height:860}});const errs=[],calls=[];
await ctx.route('https://gpwgckwlcntvesnlptej.supabase.co/**',r=>{const u=r.request().url(),m=r.request().method();calls.push(m+' '+u.replace(/^https:\/\/[^/]+/,'').split('?')[0]);
  if(u.includes('/auth/v1/token'))return r.fulfill({status:200,contentType:'application/json',body:JSON.stringify({access_token:'AT',refresh_token:'RT',expires_in:3600,user:{id:'U1',email:'a@b.co'}})});
  if(u.includes('emd_support_tickets')&&m==='GET')return r.fulfill({status:200,contentType:'application/json',body:JSON.stringify([{id:7,created_at:'2026-11-09T10:00:00Z',kind:'bug',subject:'مشكلة في الطباعة',message:'لا يطبع',status:'replied',reply:'تم الإصلاح، جرّب الآن',replied_at:new Date().toISOString()}])});
  return r.fulfill({status:200,contentType:'application/json',body:'[]'})});
const p=await ctx.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('dialog',d=>d.accept());
await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(300);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(300);
await p.click('.hbtns [data-act=support]');await p.waitForTimeout(800);
console.log('open:',await p.evaluate(()=>!!document.querySelector('.emd93-ov')),'| faq items:',await p.evaluate(()=>document.querySelectorAll('.emd93-ov details,.emd93-ov .emd101-faq > *').length));
await p.screenshot({path:'/tmp/support-home.png'});
await p.evaluate(()=>{const x=document.querySelector('.emd93-ov [data-k=close],.emd93-ov .emd93-x');x&&x.click()});
// تسجيل الدخول ثم قراءة الرد
await p.click('#cloudChip');await p.fill('#clEmail','a@b.co');await p.fill('#clPw','pass1234');await p.click('[data-ck=go]');await p.waitForTimeout(600);
await p.evaluate(()=>document.querySelectorAll('.sheet').forEach(s=>s.remove()));
await p.evaluate(()=>EMD101.loadMine());await p.waitForTimeout(500);
console.log('reply dot:',await p.evaluate(()=>!!document.querySelector('#emd101Chip .emd101-dot')));
await p.click('.hbtns [data-act=support]');await p.waitForTimeout(400);
const kinds=await p.evaluate(()=>[...document.querySelectorAll('.emd93-ov [data-k],.emd93-ov [data-kind]')].map(x=>(x.dataset.k||x.dataset.kind)+':'+x.textContent.trim().slice(0,18)));console.log('buttons:',kinds.join(' | '));
await p.click('.emd93-ov [data-k=mine]');await p.waitForTimeout(300);console.log('reply shown:',await p.evaluate(()=>/تم الإصلاح/.test(document.querySelector('.emd93-ov').textContent)));
await p.click('.emd93-ov .emd93-x');await p.waitForTimeout(100);await p.click('.hbtns [data-act=support]');await p.waitForTimeout(300);
await p.click('.emd93-ov [data-k=new]');await p.waitForTimeout(300);
const f=await p.evaluate(()=>[...document.querySelectorAll('.emd93-ov input,.emd93-ov textarea,.emd93-ov [data-k]')].map(x=>x.id||x.dataset.k||x.dataset.kind));console.log('form:',f.join(','));
await p.evaluate(()=>{const s=document.querySelector('#emd101S');if(s)s.value='اختبار';const m=document.querySelector('#emd101M');if(m)m.value='رسالة اختبار طويلة بما يكفي';const e=document.querySelector('#emd101E');if(e&&!e.value)e.value='a@b.co'});
await p.click('.emd93-ov [data-k=send]');await p.waitForTimeout(600);
console.log('send msg:',await p.evaluate(()=>(document.querySelector('#emd101Msg')||{}).textContent),'| POST tickets:',calls.filter(c=>c.startsWith('POST /rest/v1/emd_support')).length);
await p.screenshot({path:'/tmp/support-2.png'});
console.log('errs',errs);console.log('calls',calls.join(', '));await b.close()})();
