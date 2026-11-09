/* ---------- 6) الأحداث (مستمع واحد للصفحة كلها) ---------- */
document.addEventListener('click',function(e){
  var b=e.target.closest('[data-go],[data-act],[data-filter]');if(!b)return;
  var card=b.closest('.card'),id=b.dataset.id||(card&&card.dataset.id),act=b.dataset.act;
  if(b.dataset.go){if(b.closest('.sheet'))closeSheet(b.closest('.sheet'));state.view=b.dataset.go;state.limit=30;state.pq='';state.cq='';render();window.scrollTo(0,0);return}
  if(b.dataset.filter){state.view='orders';state.filter=b.dataset.filter;state.limit=30;render();if(!b.classList.contains('chip'))window.scrollTo(0,0);return}
  switch(act){
    case 'close':closeSheet(b.closest('.sheet'));break;
    case 'newOrder':newOrder();break;
    case 'importMsg':importSheet('');break;
    case 'manualOrder':closeSheet();newOrder();break;
    case 'doParse':doParse();break;
    case 'pasteMsg':navigator.clipboard.readText().then(function(t){var a=$('rawMsg');if(a&&t){a.value=t;doParse()}}).catch(function(){toast('اسمح بالوصول للحافظة أو ألصق يدويًا')});break;
    case 'backImport':closeSheet();importSheet(lastMsg);break;
    case 'open':openOrder(id);break;
    case 'openFromAlert':closeSheet();openOrder(id);break;
    case 'advance':{var o=findOrder(id);if(o)advanceOrder(o);break}
    case 'wa':case 'waSend':{var o2=findOrder(id);if(o2)waSheet(o2);if(act==='waSend'&&b.closest('.sheet')&&!b.closest('form'))closeSheet(b.closest('.sheet'));break}
    case 'cardMore':cardMore(id);break;
    case 'togglePin':setPin(id,!pinned()[id]);closeSheet();refreshList();break;
    case 'setSt':{var o3=findOrder(id);closeSheet();if(o3)moveOrder(o3,b.dataset.st);break}
    case 'ptab':state.ptab=b.dataset.t;state.sel={};refreshPrep();window.scrollTo(0,0);break;
    case 'selOne':{state.sel=state.sel||{};if(b.checked)state.sel[id]=1;else delete state.sel[id];refreshPrep();break}
    case 'selNone':state.sel={};refreshPrep();break;
    case 'selAllPrep':case 'selAllShip':case 'selAllRecv':{var LL=prepLists(),arr=act==='selAllPrep'?LL.ready.concat(LL.packing.filter(function(x){return x.packed!==true})):act==='selAllShip'?LL.toShip:LL.shipped;state.sel={};arr.forEach(function(x){state.sel[oid(x)]=1});refreshPrep();break}
    case 'packOpen':packSheet(id);break;
    case 'shipOpen':shipSheet(id?[id]:selIds());break;
    case 'recvOne':{var o6=findOrder(id);if(o6&&confirm('تأكيد استلام العميل للطلب '+onum(o6)+'؟')){receiveOrder(o6);toast('📬 تم تأكيد الاستلام');afterFlow()}break}
    case 'bulkStart':{var n1=0;selIds().forEach(function(k){var x=findOrder(k);if(x&&status(x)==='ready'&&setStatus(x,'packing',true))n1++});state.sel={};toast('🛠️ بدأ تجهيز '+nOrders(n1));afterFlow();break}
    case 'bulkFinish':{var ids2=selIds();if(!confirm('هل اكتمل تجهيز '+nOrders(ids2.length)+'؟ تأكد أن كل الأصناف وُضعت.'))break;var n2=0;ids2.forEach(function(k){var x=findOrder(k);if(x&&finishPacking(x))n2++});state.sel={};toast('✅ اكتمل تجهيز '+nOrders(n2)+'، وتجدها في تبويب الشحن');afterFlow();break}
    case 'bulkRecv':{var ids3=selIds();if(!confirm('تأكيد استلام '+nOrders(ids3.length)+'؟'))break;var n3=0;ids3.forEach(function(k){var x=findOrder(k);if(x&&!receiveOrder(x))n3++});state.sel={};toast('📬 تم تأكيد استلام '+nOrders(n3));afterFlow();break}
    case 'printPrep':printPrep(selIds());break;
    case 'printPrepAll':printPrep(null);break;
    case 'printHand':printHandover(b.dataset.c);break;
    case 'label':closeSheetIfMenu(b);openLabels(id?[id]:selIds());break;
    case 'invoice':closeSheetIfMenu(b);openInvoice(id);break;
    case 'copyNum':{var o4=findOrder(id);if(o4&&navigator.clipboard)navigator.clipboard.writeText(onum(o4)).then(function(){toast('📋 نُسخ '+onum(o4))});break}
    case 'cancelOrder':{var o5=findOrder(id);if(o5&&confirm('هل تريد إلغاء الطلب '+onum(o5)+'؟')){closeSheet();setStatus(o5,'cancelled');render()}break}
    case 'pinnedOnly':state.pinnedOnly=!state.pinnedOnly;state.limit=30;refreshList();break;
    case 'clearQ':state.q='';state.limit=30;render();break;
    case 'showMore':state.limit+=30;if(state.view==='orders')refreshList();else render();break;
    case 'addProduct':productSheet(null);break;
    case 'editProduct':productSheet(+b.dataset.pi);break;
    case 'delProduct':{var pp=db.products[+b.dataset.pi];if(pp&&confirm('هل تريد حذف المنتج «'+pp.name+'»؟ الطلبات السابقة لا تتأثر.')){db.products.splice(+b.dataset.pi,1);save();closeSheet(b.closest('.sheet'));toast('🗑️ حُذف المنتج');render()}break}
    case 'addStock':addStockSheet(+b.dataset.pi);break;
    case 'orderProduct':{var pq=db.products[+b.dataset.pi];newOrder();if(pq){var sl=document.querySelector('#items select');sl.value=pq.name;sl.dispatchEvent(new Event('change',{bubbles:true}))}break}
    case 'stockLow':state.stockLow=!state.stockLow;render();break;
    case 'csort':state.csort=b.dataset.s;state.limit=30;render();break;
    case 'cProfile':customerProfile(ck(b));break;
    case 'cEdit':customerEdit(ck(b));break;
    case 'cWa':{var cc=custByKey(ck(b));if(cc)waOpen({phone:cc.phone,name:cc.name,status:'x',products:[]},true);break}
    case 'cNew':{var cn=custByKey(ck(b));closeSheet();newOrder();if(cn){$('fPhone').value=cn.phone;$('fName').value=cn.name||'';$('fPlace').value=cn.place||'';$('fPlace').dispatchEvent(new Event('input',{bubbles:true}))}break}
    case 'cAll':{var ca=custByKey(ck(b));closeSheet();state.view='orders';state.filter='all';state.q=ca?phoneKey(ca.phone):'';state.limit=30;render();window.scrollTo(0,0);break}
    case 'store':closeSheetIfMenu(b);storeOpen();break;
    case 'push':closeSheetIfMenu(b);pushSheet();break;
    case 'support':closeSheetIfMenu(b);supportOpen();break;
    case 'direct':closeSheetIfMenu(b);directOpen('new');break;
    case 'finance':closeSheetIfMenu(b);financeOpen('sum');break;
    case 'homeImg':homeImgSheet();break;
    case 'dayFold':state.dayOpen=!state.dayOpen;render();break;
    case 'track':closeSheetIfMenu(b);trackSheet();break;
    case 'nfSend':{var o3=findOrder(id);if(o3)nfSend(o3);break}
    case 'homeImgPick':closeSheet(b.closest('.sheet'));$('homeImgIn').click();break;
    case 'homeImgDel':if(confirm('حذف صورة الرئيسية؟')){lsSet(HOMEIMG_KEY,'');closeSheet(b.closest('.sheet'));render()}break;
    case 'quickLink':quickOpen();break;
    case 'storeOrders':storeOrdersOpen();break;
    case 'cloud':closeSheetIfMenu(b);cloudSheet();break;
    case 'closing':var cs=b.closest('.sheet');if(cs)closeSheet(cs);closingSheet();break;
    case 'prepNow':state.view='prep';state.sel={};render();window.scrollTo(0,0);break;
    case 'moreSheet':moreSheet();break;
    case 'alerts':alertsSheet();break;
    case 'settings':closeSheetIfMenu(b);settingsSheet();break;
    case 'soon':toast('«'+(b.dataset.what||'هذا القسم')+'» يُبنى في المرحلة القادمة');break;
    case 'recopy':recopy();break;
    case 'openFile':$('fileIn').click();break;
    case 'demo':closeSheet();adopt(demo(+b.dataset.n||40),'demo'+(b.dataset.n||40));boot();break;
  }
});
function ck(b){var c=b.closest('[data-ck]');return b.dataset.ck||(c&&c.dataset.ck)}
var qT=0;
document.addEventListener('input',function(e){
  var id=e.target.id;
  if(id==='q'){state.q=e.target.value;state.limit=30;clearTimeout(qT);qT=setTimeout(refreshList,180);return}
  if(id==='pq'||id==='cq'){state[id]=e.target.value;state.limit=30;clearTimeout(qT);qT=setTimeout(function(){var tmp=document.createElement('div');tmp.innerHTML=state.view==='products'?productsHtml():customersHtml();var L=id==='pq'?'#plist':'#clist';$(L.slice(1)).innerHTML=tmp.querySelector(L).innerHTML;var om=document.querySelector('.moreBtn'),nm=tmp.querySelector('.moreBtn');if(om)om.remove();if(nm)$(L.slice(1)).after(nm)},180)}
});
$('view').addEventListener('change',function(e){if(e.target.name==='nfm')nfSetMode(e.target.value)});
$('fileIn').addEventListener('change',function(){
  var f=this.files&&this.files[0];if(!f)return;var r=new FileReader();
  r.onload=function(){try{var raw=JSON.parse(r.result),d=raw&&raw.data&&raw.data.orders?raw.data:raw;
    if(raw&&raw.keys&&raw.keys[LIVE_KEY]){d=raw.keys[LIVE_KEY];if(typeof d==='string')d=JSON.parse(d)}
    if(!d||!Array.isArray(d.orders))throw 0;
    closeSheet();adopt(d,'file:'+f.name);boot();toast('📂 فُتحت النسخة، عدد الطلبات: '+d.orders.length);
  }catch(e){toast('تعذر قراءة الملف. اختر ملف نسخة احتياطية من EMD Business.')}};
  r.readAsText(f);this.value='';
});
