/* ---------- تخصيص الرئيسية: نفس مفاتيح التطبيق الحالي ----------
   إخفاء البطاقات V337 (emd_dashboard_v337)، ترتيبها V338 (emd_dashboard_order_v338) ثم V114 (db.uiOrder.homestats)،
   إبراز المهم V339 (emd_dashboard_priority_v339)، وترتيب أقسام الرئيسية V114 (db.uiOrder.home). النوافذ في lazy/settings.js. */
var HC_ST=['new','waiting','ready','packing','shipped','received'],HC_SEC=['hero','strip','grid','actions','daily'];
function hcJson(k,d){try{var x=JSON.parse(POS_LS.getItem(k)||'null');return x==null?d:x}catch(e){return d}}
function hcMerge(sv,keys){var out=[];(Array.isArray(sv)?sv:[]).forEach(function(k){if(keys.indexOf(k)>=0&&out.indexOf(k)<0)out.push(k)});keys.forEach(function(k){if(out.indexOf(k)<0)out.push(k)});return out}
function hcOrder(){var o=hcMerge(hcJson('emd_dashboard_order_v338',null),HC_ST);return hcMerge(db.uiOrder&&db.uiOrder.homestats,o)}
function hcHidden(){var x=hcJson('emd_dashboard_v337',{});return x&&typeof x==='object'?x:{}}
function hcPri(){var x=hcJson('emd_dashboard_priority_v339',[]);return Array.isArray(x)?x:[]}
function hcSections(){return hcMerge(db.uiOrder&&db.uiOrder.home,HC_SEC)}
