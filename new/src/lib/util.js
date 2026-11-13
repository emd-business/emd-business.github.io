/* رقم النسخة الظاهر في «المزيد»: يُرفع مع كل تثبيت، ومعه اسم ذاكرة sw.js */
var APP_VER='V302';function appVer(){return APP_VER+(CLOUD_SANDBOX?' (تجربة)':'')}
/* ---------- 2) أدوات عامة ---------- */
function $(id){return document.getElementById(id)}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function digits(s){return String(s==null?'':s).replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/[۰-۹]/g,function(d){return '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)})}
function num(v){var x=parseFloat(digits(v).replace(/٫/g,'.').replace(/[,،\s]/g,''));return isFinite(x)?x:0}
function money(x){return (Math.round((x||0)*1000)/1000).toFixed(3)}
function normTxt(s){return digits(s).replace(/ـ/g,'').replace(/[أإآ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').toLowerCase().replace(/\s+/g,' ').trim()}
function phoneKey(p){var d=digits(p).replace(/\D/g,'');if(d.indexOf('00968')===0)d=d.slice(5);else if(d.indexOf('968')===0&&d.length===11)d=d.slice(3);return d.slice(-8)}
function pad(n){return (n<10?'0':'')+n}
function dkey(t){return t.getFullYear()+'-'+pad(t.getMonth()+1)+'-'+pad(t.getDate())}
var CUR='ر.ع';
function nOrders(n){return n===1?'طلب واحد':n===2?'طلبان':n>=3&&n<=10?n+' طلبات':n+' طلبًا'}
