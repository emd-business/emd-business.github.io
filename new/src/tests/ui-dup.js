const {chromium}=require('playwright');const O='/tmp/claude-0/cmp/';
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:400,height:860}});const errs=[];
const n=await ctx.newPage();n.on('pageerror',e=>errs.push(e.message));n.on('dialog',d=>{console.log('DLG',d.message().slice(0,60));d.accept()});
await n.goto('http://localhost:8133/new/index.html');await n.waitForTimeout(300);await n.click('[data-act=demo][data-n="40"]');await n.waitForTimeout(3000);
await n.evaluate(()=>document.querySelectorAll('.rc-alert,#emd122Ban').forEach(x=>x.remove()));
const act=a=>n.evaluate(a=>{const b=document.createElement('button');b.dataset.act=a;document.body.appendChild(b);b.click();b.remove()},a);
const before=await n.evaluate(()=>EMDRebuild.db().orders.length);
// طلب مطابق لآخر طلب اليوم: نفس الرقم والمكان والمنتجات
const o=await n.evaluate(()=>{const d=EMDRebuild.db();const x=d.orders[0];x.products=[x.products[0]];x.orderDate=new Date().toISOString();EMDRebuild.save();return {phone:x.phone,place:x.place,p:x.products[0].name,q:x.products[0].qty,len:x.products.length}});
console.log('target',JSON.stringify(o));
const fill=async()=>{await act('newOrder');await n.waitForTimeout(400);await n.fill('#fPhone',o.phone);await n.fill('#fPlace',o.place);
  await n.evaluate(([p,q])=>{const r=document.querySelector('#frm .prow, #frm [data-row]');return !!r},[o.p,o.q]);};
await fill();await n.selectOption('#frm .it select[data-k=name]',o.p);await n.fill('#frm .it input[data-k=qty]',String(o.q));
await n.click('#frm button[type=submit]');await n.waitForTimeout(500);await n.screenshot({path:O+'n-dup1.png'});
console.log('modal',await n.$eval('#emdDuplicateModal53',x=>x.innerText.slice(0,120).replace(/\n/g,' | ')).catch(()=>'none'));
await n.click('#emdDuplicateModal53 [data-d=no]');console.log('after cancel',await n.evaluate(()=>EMDRebuild.db().orders.length)-before,'form still',!!await n.$('#frm'));
await n.click('#frm button[type=submit]');await n.waitForTimeout(400);await n.click('#emdDuplicateModal53 [data-d=yes]');await n.waitForTimeout(500);
console.log('after yes',await n.evaluate(()=>EMDRebuild.db().orders.length)-before);
// إعدادات التكرار ورسالة واتساب من الإعدادات
const hub=async(g,k)=>{await act('settings');await n.click('[data-sg='+g+']');await n.click('#e445G [data-si='+k+']').catch(async()=>{await n.click('#setHub [data-si='+k+']')});await n.waitForTimeout(700)};
await n.evaluate(()=>document.querySelectorAll('.sheet').forEach(x=>x.remove()));
await act('settings');await n.click('#setHub [data-si=dup]');await n.waitForTimeout(800);await n.screenshot({path:O+'n-dup2.png'});
await n.evaluate(()=>{document.getElementById('dupEnabled54').checked=false});await n.click('text=💾 حفظ الإعدادات');await n.waitForTimeout(300);
console.log('dup off',await n.evaluate(()=>localStorage.getItem('emd_rb_emd_duplicate_settings')));
await act('settings');await n.click('#setHub [data-si=wa]');await n.waitForTimeout(600);await n.screenshot({path:O+'n-dup3.png'});
await n.fill('#waTemplateInput','مرحبا {اسم العميل} طلبك {رقم الطلب} شُحن');await n.click('#waTemplateModal button:has-text("💾 حفظ")');await n.waitForTimeout(300);
console.log('wa key',await n.evaluate(()=>localStorage.getItem('emd_rb_emd_wa_template')));
console.log('live untouched',await n.evaluate(()=>['emd_wa_template','emd_duplicate_settings','emd_business_v1'].every(k=>localStorage.getItem(k)===null)));
console.log(errs);await b.close()})();
