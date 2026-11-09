// اختبار نافذة واتساب: نوع الرسالة حسب الحالة، تغيير النوع، الحفظ الدائم
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:400,height:860}});const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('dialog',d=>d.accept());
let opened='';ctx.on('page',async np=>{opened=np.url();await np.close()});
await p.addInitScript(()=>{localStorage.setItem('emd_whatsapp_templates_v189',JSON.stringify({shipped:{enabled:true,text:'أهلًا {name}، طلبك {order} مع {company}'}}))});
await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(400);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(400);
await p.click('[data-filter=shipped]');await p.waitForTimeout(200);
await p.click('.card [data-act=wa] >> nth=0');await p.waitForTimeout(200);
const t1=await p.inputValue('#waTa');const on=await p.textContent('#waChips .on');console.log('type',on,'|',JSON.stringify(t1.slice(0,80)));
await p.click('[data-wk=received]');await p.waitForTimeout(100);console.log('received',JSON.stringify((await p.inputValue('#waTa')).slice(0,60)));
await p.fill('#waTa','نص تجريبي {name}');await p.check('#waKeep');await p.click('#waGo');await p.waitForTimeout(500);
console.log('opened',decodeURIComponent(opened).slice(0,60),'saved',await p.evaluate(()=>localStorage.getItem('emd_rb_wa_templates')),'live untouched',await p.evaluate(()=>localStorage.getItem('emd_whatsapp_templates_v189').length));
console.log('errs',errs);await b.close()})();
