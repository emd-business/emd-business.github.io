// اختبار الحساب والمزامنة بخادم وهمي (لا يُلمس الخادم الحقيقي)
const {chromium}=require('playwright');
const HOST='https://gpwgckwlcntvesnlptej.supabase.co';
(async()=>{const b=await chromium.launch();const errs=[],log=[];
const vault={row:null},hist=[];let now=Date.parse('2026-11-09T10:00:00Z');const ts=()=>new Date(now+=1000).toISOString();
async function mock(ctx){await ctx.route(HOST+'/**',async r=>{const u=new URL(r.request().url()),m=r.request().method(),p=u.pathname;log.push(m+' '+p+(u.search.includes('updated_at=eq')?' [guarded]':''));
  const J=(s,j)=>r.fulfill({status:s,contentType:'application/json',body:JSON.stringify(j)});
  if(p==='/auth/v1/token')return J(200,{access_token:'AT',refresh_token:'RT',expires_in:3600,user:{id:'U1',email:'a@b.co'}});
  if(p==='/rest/v1/emd_vaults'&&m==='GET'){if(!vault.row)return J(200,[]);return J(200,[u.searchParams.get('select').includes('data')?{data:vault.row.data,updated_at:vault.row.updated_at}:{updated_at:vault.row.updated_at,counts:vault.row.counts}])}
  if(p==='/rest/v1/emd_vaults'&&m==='PATCH'){const want=u.searchParams.get('updated_at').slice(3);if(!vault.row||vault.row.updated_at!==want)return J(200,[]);const body=JSON.parse(r.request().postData());vault.row={...body,updated_at:ts()};return J(200,[vault.row])}
  if(p==='/rest/v1/emd_vaults'&&m==='POST'){const body=JSON.parse(r.request().postData());vault.row={...body,updated_at:ts()};return J(201,[vault.row])}
  if(p==='/rest/v1/emd_vault_history'){if(m==='POST'){hist.push(1);return J(201,null)}return J(200,[])}
  return J(200,{})})}
async function dev(test){const ctx=await b.newContext({viewport:{width:400,height:860}});await mock(ctx);if(test)await ctx.addInitScript(()=>{window.__EMD_CLOUD_TEST=true});
  const p=await ctx.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('dialog',d=>d.accept());await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(300);return p}
async function login(p){await p.evaluate(()=>document.body.classList.add('hopen'));await p.click('#cloudChip');await p.fill('#clEmail','a@b.co');await p.fill('#clPw','pass1234');await p.click('[data-ck=go]');await p.waitForTimeout(800)}
// 1) التجربة: تسجيل دخول، لا كتابة في السحابة
const s=await dev(false);await s.click('[data-act=demo][data-n="40"]');await s.waitForTimeout(300);await login(s);
console.log('sandbox chip:',await s.textContent('#cloudChip'),'| writes:',log.filter(x=>/^(POST|PATCH|DELETE) \/rest/.test(x)).length,'| session key:',await s.evaluate(()=>!!localStorage.getItem('emd_rb_cloud_session')),'live session untouched:',await s.evaluate(()=>localStorage.getItem('emd_v93_session_b')));
await s.screenshot({path:'/tmp/cloud-account.png'});
// 2) جهازان (وضع الاختبار): الأول يرفع، الثاني يجلب، ثم تعديلان متزامنان يُدمجان
log.length=0;const A=await dev(true);await A.click('[data-act=demo][data-n="40"]');await A.waitForTimeout(300);await login(A);await A.waitForTimeout(800);
console.log('A first push:',vault.row?vault.row.counts.orders:'none','log',log.filter(x=>/rest/.test(x)).join(', '));
const B=await dev(true);await B.evaluate(()=>{localStorage.removeItem('emd_rb_sandbox_v1')});await B.reload();await B.waitForTimeout(300);
await B.click('[data-act=demo][data-n="40"]');await B.evaluate(()=>{const d=EMDRebuild.db();d.orders.length=0;d.products.length=0;d.customers.length=0});
await login(B);await B.waitForTimeout(1200);
console.log('B after login orders:',await B.evaluate(()=>EMDRebuild.db().orders.length));
const id0=await A.evaluate(()=>EMDRebuild.db().orders[0].id),id1=await A.evaluate(()=>EMDRebuild.db().orders[1].id);
log.length=0;await A.evaluate(id=>{const o=EMDRebuild.db().orders.find(x=>x.id===id);o.note='من الجهاز أ';EMDRebuild.save()},id0);await A.waitForTimeout(2200);console.log('after A edit',log.join(', '),'cloud id0 note',JSON.parse(vault.row.data.keys.emd_business_v1).orders.find(x=>x.id===id0).note);log.length=0;
await B.evaluate(id=>{const o=EMDRebuild.db().orders.find(x=>x.id===id);o.note='من الجهاز ب';EMDRebuild.save()},id1);await B.waitForTimeout(2600);console.log('after B edit',log.join(', '));
await A.evaluate(()=>EMDRebuild.cloudCheck());await A.waitForTimeout(1200);
const r=await A.evaluate(([a,c])=>{const d=EMDRebuild.db();return [d.orders.find(x=>x.id===a).note,d.orders.find(x=>x.id===c).note]},[id0,id1]);
console.log('merged on A:',JSON.stringify(r),'cloud has both:',JSON.stringify((()=>{const d=JSON.parse(vault.row.data.keys.emd_business_v1);return [d.orders.find(x=>x.id===id0).note,d.orders.find(x=>x.id===id1).note]})()),'history posts',hist.length);
console.log('guarded patches:',log.filter(x=>x.includes('[guarded]')).length);
console.log('errs',errs);await b.close()})();
