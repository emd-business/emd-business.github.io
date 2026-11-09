// الأصناف والمقاسات (V450) وملصقات الباركود (V439) والاستيراد من Excel (V421) في نوع «محل»
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const p=await (await b.newContext({viewport:{width:400,height:860}})).newPage();p.on('pageerror',e=>errs.push(e.message));p.on('dialog',d=>d.accept());
await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(300);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(300);
await p.evaluate(()=>{localStorage.setItem('emd_rb_emd416_mode','shop');localStorage.setItem('emd_rb_emd416_asked','1')});await p.reload();await p.waitForTimeout(1500);
await p.click('nav#bar [data-go=products]');await p.waitForTimeout(300);
console.log('tools:',await p.$$eval('[data-act=posTool]',x=>x.map(b=>b.textContent).join(' | ')));
await p.click('[data-act=addProduct]');await p.waitForTimeout(200);await p.fill('#emd81Name','قميص قطني');await p.fill('#emd81Sale','8');
await p.click('.emd81-ov [data-k=var]');await p.waitForTimeout(900);
console.log('editor:',await p.evaluate(()=>!!document.querySelector('#e450E.show')));
// خاصيتان: اللون والمقاس
await p.evaluate(()=>{const q=s=>document.querySelector(s);[...document.querySelectorAll('#e450E [data-k=attr]')].filter(b=>/اللون|المقاس/.test(b.textContent)).forEach(b=>{b.click()})});await p.waitForTimeout(200);
await p.evaluate(()=>{document.querySelectorAll('#e450E [data-k=attr]').forEach(()=>{});});
const sug=async(v)=>p.evaluate(v=>{const b=[...document.querySelectorAll('#e450E [data-k=sug]')].find(x=>x.getAttribute('data-v')===v);if(b)b.click();return !!b},v);
console.log('sug:',await sug('أسود'),await sug('أبيض'),await sug('M'),await sug('L'));await p.waitForTimeout(200);
await p.evaluate(()=>{const s=document.getElementById('e450BS');if(s){s.value='5';s.dispatchEvent(new Event('input',{bubbles:true}))}});await p.evaluate(()=>{const b=document.querySelector('#e450E [data-k=bulkstock]');if(b)b.click()});await p.waitForTimeout(200);
await p.screenshot({path:'/tmp/claude-0/cmp/n-var-edit.png'});
await p.evaluate(()=>document.querySelector('#e450E [data-k=save]').click());await p.waitForTimeout(500);
const vs=await p.evaluate(()=>EMDRebuild.db().products.filter(x=>x.vg==='قميص قطني').map(x=>x.name+':'+x.stock));console.log('variants:',vs.join(', '));
await p.evaluate(()=>{EMDRebuild.render()});await p.waitForTimeout(300);
console.log('group card:',await p.evaluate(()=>!!document.querySelector('#productsList .e450-gc')),'hidden rows',await p.evaluate(()=>document.querySelectorAll('#productsList .e450-hid').length));
await p.screenshot({path:'/tmp/claude-0/cmp/n-var-list.png'});
// البيع المباشر: بطاقة واحدة ثم اختيار الخيار
await p.click('nav#bar [data-act=direct]');await p.waitForTimeout(600);
console.log('pos group:',await p.evaluate(()=>!!document.querySelector('#emd113Pl [data-e450g]')));
await p.evaluate(()=>document.querySelector('#emd113Pl [data-e450g]').click());await p.waitForTimeout(400);
await p.screenshot({path:'/tmp/claude-0/cmp/n-var-pick.png'});
await p.evaluate(()=>{const b=document.querySelector('#e450P .e450-pk:not(:disabled)');if(b)b.click()});await p.waitForTimeout(300);
await p.evaluate(()=>{const b=document.querySelector('#e450P .e450-pk:not(:disabled)');if(b)b.click()});await p.waitForTimeout(300);
console.log('cart:',await p.evaluate(()=>JSON.stringify(EMDDirectV113._s().cart.map(c=>c.name+'×'+c.qty))));
await p.evaluate(()=>EMDDirectV113.close());await p.waitForTimeout(200);
await p.evaluate(()=>EMDImportV421.open());await p.waitForTimeout(400);console.log('excel:',await p.evaluate(()=>(document.querySelector('[class*=e421].show,#e421.show,#e421')||{}).textContent?.slice(0,60)));
await p.screenshot({path:'/tmp/claude-0/cmp/n-xls.png'});await p.keyboard.press('Escape');await p.waitForTimeout(200);
await p.evaluate(()=>EMDBarcodeV439.open());await p.waitForTimeout(500);console.log('barcode:',await p.evaluate(()=>(document.querySelector('[id^=e439].show,[class*=e439].show')||{id:'none'}).id));
await p.screenshot({path:'/tmp/claude-0/cmp/n-bar.png'});
console.log('live untouched',await p.evaluate(()=>localStorage.getItem('emd_business_v1')===null));
console.log('errs',errs);await b.close()})();
