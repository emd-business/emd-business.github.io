const {chromium}=require('playwright');const O='/tmp/claude-0/cmp/';
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:400,height:860}});const errs=[];
const n=await ctx.newPage();n.on('pageerror',e=>errs.push(e.message));n.on('dialog',d=>d.accept());
await n.goto('http://localhost:8133/new/index.html');await n.waitForTimeout(300);await n.click('[data-act=demo][data-n="40"]');await n.waitForTimeout(3000);
await n.evaluate(()=>document.querySelectorAll('.rc-alert,#emd122Ban').forEach(x=>x.remove()));
const act=a=>n.evaluate(a=>{const b=document.createElement('button');b.dataset.act=a;document.body.appendChild(b);b.click();b.remove()},a);
const before=await n.evaluate(()=>Object.keys(localStorage).filter(k=>!k.startsWith('emd_rb_')).sort().join(','));
await act('settings');await n.click('#setHub [data-si=wizard]');await n.waitForTimeout(1200);
for(let i=0;i<6;i++){const ov=await n.$('#emd92Ov');if(!ov){console.log('closed at',i);break}
  await n.screenshot({path:O+'n-wiz'+i+'.png'});console.log('step',i,(await ov.innerText()).slice(0,70).replace(/\n/g,' | '));
  const nx=await n.$('#emd92Ov [data-k=next]');if(nx)await nx.click();else{const f=await n.$('#emd92Ov [data-k=finish]');if(f){await f.click();}else break}
  await n.waitForTimeout(500)}
console.log('ov gone',!await n.$('#emd92Ov'),'home',!!await n.$('#view'));
const after=await n.evaluate(()=>Object.keys(localStorage).filter(k=>!k.startsWith('emd_rb_')).sort().join(','));
console.log('live keys unchanged',before===after);
console.log(errs);await b.close()})();
