/* ---------- شكل أيقونات حالات الطلبات (V412): نفس الأيقونات والأنماط؛ النافذة في lazy/icons.js (tools/port-icons.py) ---------- */
/* [تعبئة للنمط ثنائي اللون, الخطوط] — منقولة كما هي من V412 */
var IC412={
 spark:['<circle class="f" cx="12" cy="12" r="9"/>','<path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><circle cx="12" cy="12" r="3"/>'],
 clock:['<circle class="f" cx="12" cy="12" r="9"/>','<circle cx="12" cy="12" r="9"/><path class="k" d="M12 7v5l3 2"/>'],
 check:['<circle class="f" cx="12" cy="12" r="9"/>','<circle cx="12" cy="12" r="9"/><path class="k" d="m8 12 3 3 5-6"/>'],
 tool:['<circle class="f" cx="12" cy="12" r="9"/>','<path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3l7.5-7.5Z"/><path d="M14.5 6.5 17 4"/>'],
 truck:['<path class="f" d="M3 6h11v10H3z"/>','<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>'],
 inbox:['<path class="f" d="M5 5h14l2 8v6H3v-6Z"/>','<path d="M5 5h14l2 8v6H3v-6l2-8Z"/><path class="k" d="M3 13h5l1.5 3h5L16 13h5"/>'],
 home:['<path class="f" d="M5 9.5 12 4l7 5.5V20H5Z"/>','<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path class="k" d="M10 21v-6h4v6"/>'],
 cart:['<path class="f" d="M6 7h15l-2 8.2a1 1 0 0 1-1 .8H8.6a1 1 0 0 1-1-.8Z"/>','<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.6 12.2a1 1 0 0 0 1 .8h9.7a1 1 0 0 0 1-.8L21 7H6"/>'],
 wallet:['<path class="f" d="M4 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1Z"/>','<path d="M4 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V7Z"/><path d="M4 7l11-3v3"/><path class="k" d="M15 13.5h2"/>']};
var IC_ST={new:['spark','#2563eb'],waiting:['clock','#d97706'],ready:['check','#16a34a'],packing:['tool','#7c3aed'],shipped:['truck','#0891b2'],received:['inbox','#64748b']};
var IC_STYLES=['tile','soft','duo','line','bold','solid','gold','emoji'];
function icStyle(){var s=mdLs('emd412_icons');return IC_STYLES.indexOf(s)>-1?s:'tile'}
function icApply(){var b=document.body,s=icStyle();IC_STYLES.forEach(function(x){b.classList.toggle('emd412-s-'+x,x===s)})}
function icSvg(k){var p=IC412[k]||IC412.check;return '<svg viewBox="0 0 24 24" aria-hidden="true">'+p[0]+p[1]+'</svg>'}
/* أيقونة بطاقة الحالة: إيموجي (النمط القديم) أو أيقونة V412 */
function statIcon(k){var e=IC_ST[k];if(!e||icStyle()==='emoji')return '<i style="background:'+ST[k].c+'">'+ST[k].i+'</i>';return '<span class="emd412-i" style="--c:'+e[1]+'">'+icSvg(e[0])+'</span>'}
var IC_P=null;
function icOpen(){if(!IC_P){window.EMDPosH=window.EMDPosH||posHelpers();IC_P=loadScript('icons.js?v=1').catch(function(e){IC_P=null;throw e})}
  IC_P.then(function(){EMDIconsV412.open()},function(){toast('تعذّر الفتح. تحقّق من الاتصال.')})}
