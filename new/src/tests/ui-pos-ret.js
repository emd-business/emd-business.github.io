// المرتجع (V442) في نوع «محل»: يعيد المخزون ويسجّل العملية على الفاتورة
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const p=await (await b.newContext({viewport:{width:400,height:860}})).newPage();p.on('pageerror',e=>errs.push(e.message));p.on('dialog',d=>d.accept());
await p.goto('http://localhost:8131/index.html');await p.waitForTimeout(300);await p.click('[data-act=demo][data-n="40"]');await p.waitForTimeout(300);
await p.evaluate(()=>{const d=EMDRebuild.db();const pr=d.products[0];const at=new Date().toISOString();pr.stock=10;d.directSales=[{id:'DS-1',no:1,key:'k1',at,by:{id:'owner',name:'عماد'},items:[{name:pr.name,qty:2,price:pr.salePrice,disc:0,net:2*pr.salePrice,cost:pr.costPrice}],subtotal:2*pr.salePrice,discount:0,total:2*pr.salePrice,payments:[{amount:2*pr.salePrice,method:'cash',at,type:'sale'}],ops:[],customer:{name:'سالم',phone:'99112233'},note:'',stockApplied:true}];localStorage.setItem('emd_rb_emd416_mode','shop');EMDRebuild.save()});
await p.reload();await p.waitForTimeout(1500);await p.click('nav#bar [data-act=direct]');await p.waitForTimeout(700);
await p.evaluate(()=>EMDDirectV113.open('list'));await p.waitForTimeout(500);
await p.evaluate(()=>[...document.querySelectorAll('#emd113Body button')].find(x=>/مرتجع واستبدال/.test(x.textContent)).click());await p.waitForTimeout(500);
const step=async(k)=>{await p.evaluate(k=>{const x=document.querySelector('#e442 [data-k="'+k+'"]');if(x)x.click();else throw new Error('no '+k)},k);await p.waitForTimeout(400)};
await step('pick');await p.screenshot({path:'/tmp/claude-0/cmp/ret2.png'});
await step('ra');await p.screenshot({path:'/tmp/claude-0/cmp/ret3.png'});
console.log('buttons:',await p.evaluate(()=>[...document.querySelectorAll('#e442 [data-k]')].map(x=>x.dataset.k+':'+x.textContent.trim().slice(0,25)).join(' | ')));
await step('go').catch(e=>console.log(e.message));await p.waitForTimeout(500);await p.screenshot({path:'/tmp/claude-0/cmp/ret4.png'});
console.log(await p.evaluate(()=>{const d=EMDRebuild.db();return JSON.stringify({ops:d.directSales[0].ops,stock:d.products[0].stock})}));
console.log('errs',errs);await b.close()})();
