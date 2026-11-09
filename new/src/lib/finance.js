/* ---------- المالية: الملخص، الفواتير، التحصيل، المندوب، المصروفات، الأسعار ----------
   الواجهة في lazy/money.js (مولَّدة من V75 بـ tools/port-money.py)، وتأخذ الحسابات من هذه المكتبة نفسها. */
var finLoading=null;
function finHelpers(){var lk=function(k){return CLOUD_SANDBOX?'emd_rb_'+k.replace(/^emd_/,''):k};
  return {db:function(){return db},lk:lk,lsGet:lsGet,lsSet:lsSet,save:function(){dirty();save()},after:function(){dirty();render()},
    total:function(o){return total(o)},paid:function(o){return paid(o)},remaining:function(o){return remaining(o)},payState:function(o){return payState(o)},cost:function(o){return cost(o)},
    legacyOn:function(){return payKey('emd_v75_legacy_on')==='1'},payReset:function(){PAY_OLD=null;dirty();render()},
    dsSummary:dsSummary,direct:function(){return window.EMDDirectV113},profile:function(){return window.EMDDirH?EMDDirH.profile():dsHelpers().profile()},
    accent:dsLook,logoImg:function(){return dsLogo&&dsLogo.complete&&dsLogo.naturalWidth?dsLogo:null},
    openOrder:function(id){openOrder(id)},editProduct:function(i){state.view='products';render();productSheet(i)}}}
function financeLoad(){if(window.EMDMoneyV75)return Promise.resolve(window.EMDMoneyV75);if(finLoading)return finLoading;
  finLoading=directLoad().then(function(){window.EMDMonH=finHelpers();return loadScript('money.js?v=1')}).then(function(){if(!window.EMDMoneyV75)throw new Error('money');return window.EMDMoneyV75},function(e){finLoading=null;throw e});return finLoading}
function financeOpen(tab){financeLoad().then(function(X){X.open(tab||'sum')},function(){toast('تعذّر فتح المالية. تحقّق من الاتصال.')})}
