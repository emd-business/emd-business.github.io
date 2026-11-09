/* ---------- تنظيف رسالة الطلب قبل التحليل (V120 في التطبيق الحالي) ----------
   أسطر القالب المعروفة، ورقم التحويل الخاص بالمتجر، و«(مكتب» بدون إغلاق، والكمية بين قوسين، والجمل التي يضيفها المستخدم (db.parseIgnore). */
function pcIgn(){var d=db;return d&&Array.isArray(d.parseIgnore)?d.parseIgnore.filter(Boolean):[]}
function pcDig(s){return String(s).replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)})}
var PC_BUILTIN=[/^\W*▫️/,/^\W*📖\s*المنتجات\s*المتوفرة/,/^\W*للطلب\s*أرسل\s*لنا/,/^\W*🛍️/,/⚠️?/,/اكتب\s*اسم\s*الكتاب/,/غي[ّر]*ر\s*الرقم\s*إذا/,/^\W*لتثبيت\s*الطلب/,/(?:حو[ّ]?ل|حوّل|حول)\s*(?:على|الى|إلى)\s*[\d٠-٩]{6,}/,/^\W*المنتج\s*\(?\s*العدد\s*\)?\W*$/,/^\W*صورة\s*التحويل/];
function parseClean(raw){
  var extra=pcIgn().map(function(x){return String(x).trim()}).filter(Boolean);
  var out=[];
  String(raw).split(/\r?\n/).forEach(function(line){
    var t=line.trim();
    if(t&&PC_BUILTIN.some(function(r){return r.test(t)}))return;
    if(t&&extra.some(function(x){return t.indexOf(x)>=0}))return;
    var m=t.match(/^[^\p{L}\p{N}]*التوصيل\s*[:：]?\s*\(?\s*(مكتب|مندوب|الى المنزل|إلى المنزل|استلام[^)\n]*)\)?\s*$/u);
    if(m){out.push('طريقة التوصيل: '+m[1].trim());return}
    var dm=t.match(/^(طريقة\s*التوصيل)\s*[:：]\s*\(?\s*([^()\n]*?)\s*\)?\s*$/);
    if(dm&&dm[2]){out.push(dm[1]+': '+dm[2]);return}
    /* الكمية بين قوسين: «- ( 2 ) اسم» أو «اسم - ( 2 )» → «اسم × 2» ليفهمها التحليل */
    var T=pcDig(t),q1=T.match(/^[-–—•·*]?\s*\(\s*(\d{1,3})\s*\)\s*[-–—:]?\s*(.+)$/),q2=T.match(/^[-–—•·*]?\s*(.*?[^\d\s(\-–—:])\s*[-–—:]?\s*\(\s*(\d{1,3})\s*\)\s*$/);
    if(q1&&!/^\d{6,}/.test(q1[2])&&/\D/.test(q1[2])){out.push(q1[2].trim()+' × '+q1[1]);return}
    if(q2&&!/(?:الهاتف|الرقم|الاسم|الولاية|المكان|التوصيل)/.test(q2[1])){out.push(q2[1].trim()+' × '+q2[2]);return}
    out.push(line)});
  return out.join('\n');
}
