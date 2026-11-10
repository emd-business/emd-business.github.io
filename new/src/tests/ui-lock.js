const {chromium}=require('playwright');const O='/tmp/claude-0/cmp/';
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:400,height:860}});const errs=[];let dlgAns=null;
const n=await ctx.newPage();n.on('pageerror',e=>errs.push(e.message));n.on('dialog',d=>{console.log('DLG',d.message().slice(0,70));dlgAns!=null?d.accept(dlgAns):d.accept()});
await n.goto('http://localhost:8133/new/index.html');await n.waitForTimeout(300);await n.click('[data-act=demo][data-n="40"]');await n.waitForTimeout(2500);
const set=()=>n.evaluate(()=>{const b=document.createElement('button');b.dataset.act='settings';document.body.appendChild(b);b.click();b.remove()});
await set();await n.click('[data-sg=secg]');await n.waitForTimeout(300);await n.screenshot({path:O+'n-lk0.png'});
await n.click('#e445G [data-si=lock]');await n.waitForTimeout(800);await n.screenshot({path:O+'n-lk1.png'});
console.log('status',await n.$eval('#emdPasswordStatusV80',x=>x.textContent),'auto',!!await n.$('#emdV73AutoSel'),'eye',await n.$$eval('.emd74-eye',x=>x.length));
await n.fill('#emdPassV80','123456');await n.fill('#emdPassConfirmV80','123456');await n.click('text=🔐 تفعيل / تغيير');await n.waitForTimeout(1500);
console.log('status2',await n.$eval('#emdPasswordStatusV80',x=>x.textContent),'key',await n.evaluate(()=>!!localStorage.getItem('emd_rb_emd_business_password_v80')&&localStorage.getItem('emd_business_password_v80')===null));
await n.click('text=🔒 قفل الآن');await n.waitForTimeout(300);console.log('locked shown',await n.$eval('#emdLockV80',x=>getComputedStyle(x).display));
await n.reload();await n.waitForTimeout(150);console.log('cover/lock at boot',await n.evaluate(()=>!!document.getElementById('lkCover')||(document.getElementById('emdLockV80')&&getComputedStyle(document.getElementById('emdLockV80')).display)));
await n.waitForTimeout(1200);console.log('lock after boot',await n.$eval('#emdLockV80',x=>getComputedStyle(x).display));await n.screenshot({path:O+'n-lk2.png'});
await n.fill('#emdUnlockV80','000000');await n.click('text=فتح التطبيق 🔓');await n.waitForTimeout(1500);console.log('wrong',await n.$eval('#emdUnlockMsgV80',x=>x.textContent));
await n.fill('#emdUnlockV80','123456');await n.click('text=فتح التطبيق 🔓');await n.waitForTimeout(1500);console.log('unlocked',await n.$eval('#emdLockV80',x=>getComputedStyle(x).display));
// الأدوار وسجل العمليات
await set();await n.click('[data-sg=secg]');await n.click('#e445G [data-si=sec]');await n.waitForTimeout(800);await n.screenshot({path:O+'n-lk3.png'});
console.log('sec',await n.$eval('#emdSecurityV315',x=>x.className+' | '+x.innerText.slice(0,140).replace(/\n/g,' | ')));
await n.selectOption('#emdRoleV315','prep');dlgAns='123456';await n.click('#emdRoleSaveV315');await n.waitForTimeout(1500);dlgAns=null;
console.log('role',await n.evaluate(()=>localStorage.getItem('emd_rb_emd_business_role_v315')),await n.$$eval('#emdAuditLogV315 .emd-v315-row',x=>x.length));
await n.evaluate(()=>EMDSecurityV315.close());
// إلغاء الحماية (لا يعود القفل من قيمة التطبيق الحالي)
await n.evaluate(()=>localStorage.setItem('emd_business_password_v80','{"hash":"x"}'));
await n.evaluate(()=>openSettingsV80());dlgAns='123456';await n.click('text=🔓 إلغاء الحماية');await n.waitForTimeout(1500);dlgAns=null;console.log('disabled',await n.$eval('#emdPasswordStatusV80',x=>x.textContent));
await n.evaluate(()=>localStorage.removeItem('emd_business_password_v80'));
// رمز استرجاع المدير
await n.evaluate(()=>closeSettingsV80());await set();await n.click('[data-sg=secg]');await n.click('#e445G [data-si=rec]');await n.waitForTimeout(1200);await n.screenshot({path:O+'n-lk4.png'});
console.log('rec',await n.$eval('#emd119Modal',x=>x.innerText.slice(0,120).replace(/\n/g,' | ')));
console.log('live untouched',await n.evaluate(()=>localStorage.getItem('emd_business_v1')===null&&localStorage.getItem('emd_business_locked_v80')===null));
console.log(errs);await b.close()})();
