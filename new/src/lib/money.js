function subtotal(o,b){return items(o).reduce(function(s,x){return s+itemPrice(x,b)*qty(x)},0)}
function total(o,b){var m=num(o.total);return m>0?m:Math.max(0,subtotal(o,b)+num(o.deliveryFee)-num(o.discount))}
function cost(o,b){return items(o).reduce(function(s,x){return s+itemCost(x,b)*qty(x)},0)}
/* مثل المالية في التطبيق الحالي (V75): عند تفعيل «الطلبات القديمة محصّلة» تُعتبر الطلبات قبل تاريخ التفعيل مدفوعة ما لم يُسجَّل لها دفع */
var PAY_OLD=null;function payKey(k){var r=typeof CLOUD_SANDBOX!=='undefined'&&CLOUD_SANDBOX?lsGet('emd_rb_'+k.slice(4)):null;return r!==null?r:lsGet(k)}
function payOld(){if(PAY_OLD===null)PAY_OLD=payKey('emd_v75_legacy_on')==='1'?(payKey('emd_v75_since')||dkey(new Date())):'';return PAY_OLD}
function legacyPaid(o){var sv=payOld();if(!sv||o.paymentStatus||num(o.paidAmount)>0)return false;var t=odate(o);return !t||dkey(t)<sv}
function payState(o,b){if(legacyPaid(o))return 'paid';var s=String(o.paymentStatus||'');if(s==='paid'||s==='transfer'||s==='cash')return 'paid';var p=num(o.paidAmount),t=total(o,b);if(t>0&&p>=t-0.0005)return 'paid';if(p>0||s==='partial')return 'partial';return 'unpaid'}
function paid(o,b){return payState(o,b)==='paid'?total(o,b):Math.min(num(o.paidAmount),total(o,b))}
function remaining(o,b){return Math.max(0,total(o,b)-paid(o,b))}
var PAYL={unpaid:'غير مدفوع',partial:'مدفوع جزئيًا',paid:'مدفوع'};
