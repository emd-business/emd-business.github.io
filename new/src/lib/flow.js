/* دورة الطلب بعد الاعتماد: التجهيز ← الشحن ← الاستلام (نفس قواعد التطبيق الحالي)
   - لا يُشحن طلب قبل اكتمال قائمة تجهيزه (packed)
   - الشحن يحتاج شركة التوصيل، ويُخصم المخزون عند الشحن (setStatus)
   - الاستلام فقط لطلب مشحون */
function nowIso(){return new Date().toISOString()}
function addEvent(o,text){if(!Array.isArray(o.events))o.events=[];o.events.push({at:nowIso(),text:text})}
function packList(o){var c=Array.isArray(o.packingChecks)?o.packingChecks:[];return items(o).map(function(x,i){return {i:i,name:iname(x),q:qty(x),done:!!c[i]}})}
function packDone(o){var l=packList(o);return l.length>0&&l.every(function(x){return x.done})}
function setPackItem(o,i,on){if(!Array.isArray(o.packingChecks))o.packingChecks=[];o.packingChecks[i]=!!on;if(!on)o.packed=false;o.updatedAt=nowIso();save()}
function finishPacking(o){ // يكمل كل الأصناف ويعلّم الطلب «تم تجهيزه»
  if(!items(o).length)return false;
  o.packingChecks=items(o).map(function(){return true});
  if(status(o)==='ready')setStatus(o,'packing',true);
  if(o.packed!==true){o.packed=true;o.packedAt=o.packedAt||nowIso();addEvent(o,'✅ اكتمل تجهيز الطلب')}
  o.updatedAt=nowIso();dirty();save();return true;
}
function shipOrder(o,info){ // info: {company, method, tracking}
  if(o.packed!==true)return 'أكمل تجهيز الطلب أولًا.';
  var c=String(info.company||'').trim();if(!c)return 'اكتب شركة التوصيل.';
  var prev={company:o.company,method:o.method,deliveryMethod:o.deliveryMethod,tracking:o.tracking};
  o.company=c;if(info.method){o.method=info.method;o.deliveryMethod=info.method}
  if(info.tracking!=null)o.tracking=String(info.tracking).trim();
  if(!setStatus(o,'shipped',true)){Object.assign(o,prev);return 'تم إلغاء الشحن.'}
  o.handedToCourierAt=o.handedToCourierAt||nowIso();
  addEvent(o,'🚚 تم الشحن · '+c+(o.tracking?' · التتبع: '+o.tracking:''));save();return '';
}
function receiveOrder(o){
  if(status(o)!=='shipped')return 'هذا الطلب لم يُشحن بعد.';
  setStatus(o,'received',true);o.receiveConfirmed=true;addEvent(o,'📬 تم تأكيد استلام الطلب');save();return '';
}
function daysSince(iso){var t=new Date(iso||0).getTime();return t?Math.floor((Date.now()-t)/864e5):null}
