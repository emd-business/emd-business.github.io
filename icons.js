/* مُولَّد بـ tools/port-icons.py من V412 — لا تعدّل هنا */
(function(){var s=document.createElement("style");s.textContent="/* نافذة الإعداد */\n#emd412Modal{display:none;position:fixed;inset:0;z-index:100750;background:rgba(15,23,42,.5);direction:rtl;align-items:flex-end;justify-content:center}\n#emd412Modal.show{display:flex}\n#emd412Modal .win{width:min(640px,100%);max-height:92vh;overflow:auto;background:var(--card,#fff);color:var(--text,#18202a);border-radius:22px 22px 0 0;padding:16px 16px calc(18px + env(safe-area-inset-bottom,0px))}\n@media(min-width:700px){#emd412Modal{align-items:center}#emd412Modal .win{border-radius:22px}}\n#emd412Modal .hd{display:flex;align-items:center;gap:10px;margin-bottom:6px}\n#emd412Modal .hd h2{flex:1;margin:0;font-size:18px}\n#emd412Modal .x{border:1px solid var(--line,#e4e8ef);background:var(--card,#fff);color:var(--text,#18202a);border-radius:12px;padding:8px 14px;font-weight:800;cursor:pointer}\n#emd412Modal h3{font-size:14px;margin:16px 0 4px}\n#emd412Modal .sub{font-size:12.5px;color:var(--muted,#687384);margin:0 0 10px}\n#emd412Modal .styles{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}\n@media(min-width:560px){#emd412Modal .styles{grid-template-columns:repeat(4,1fr)}}\n#emd412Modal .styles button{border:2px solid var(--line,#e4e8ef);background:var(--soft,#f5f7fb);color:var(--text,#18202a);border-radius:14px;padding:10px 8px;cursor:pointer;font-weight:800;font-size:12.5px;display:flex;flex-direction:column;align-items:center;gap:8px}\n#emd412Modal .styles button[aria-pressed=\"true\"]{border-color:var(--accent,#18202a);background:var(--card,#fff)}\n#emd412Modal .styles .demo{display:flex;gap:6px;font-size:15px;min-height:28px;align-items:center}\n#emd412Modal .styles .demo .emd412-i{margin:0}\n#emd412Modal .slot{display:grid;grid-template-columns:90px 1fr;gap:8px;align-items:center;margin:8px 0}\n#emd412Modal .slot span{font-size:13px;font-weight:700;color:var(--muted,#687384)}\n#emd412Modal select{width:100%;border:1px solid var(--line,#dfe4ec);border-radius:12px;padding:10px 12px;font:inherit;font-size:14px;background:var(--soft,#f8fafc);color:var(--text,#18202a)}\n#emd412Modal .fixed{border:1px dashed var(--line,#dfe4ec);border-radius:12px;padding:10px 12px;font-size:14px;color:var(--muted,#687384)}\n#emd412Modal .row{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}\n#emd412Modal .b{border:1px solid var(--line,#dfe4ec);background:var(--card,#fff);color:var(--text,#18202a);border-radius:12px;padding:9px 14px;font-weight:800;cursor:pointer}\n#emd412Modal .ok{color:#15803d;font-size:12.5px;font-weight:800;align-self:center}\n#emd412Modal .e141n{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:6px 0 10px}\n#emd412Modal .e141n span{font-weight:800;font-size:13px;margin-left:4px}\n#emd412Modal .e141n button{flex:1;min-width:120px;border:2px solid var(--line,#e4e8ef);background:var(--soft,#f5f7fb);color:var(--text,#18202a);border-radius:12px;padding:9px 8px;font-weight:800;font-size:13px;cursor:pointer}\n#emd412Modal .e141n button[aria-pressed=\"true\"]{border-color:var(--accent,#1e3a8a);background:var(--card,#fff);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent,#1e3a8a) 20%,transparent)}\n#emd410Bar.e141-6 button{font-size:10px;padding:6px 0}\n#emd410Bar.e141-6 button.add i{width:38px;height:38px}\n";document.head.appendChild(s)})();
(function(RW){var PH=RW.EMDPosH,PLS=PH.ls;
var window=new Proxy(RW,{get:function(t,k){if(k==='localStorage')return PLS;var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t}});
/* ---- V412 ---- */

(function(){'use strict';
if(window.__EMD_V412__)return;window.__EMD_V412__=true;
function $(id){return document.getElementById(id)}
function ls(k,v){try{if(v===undefined)return PLS.getItem(k);if(v===null)PLS.removeItem(k);else PLS.setItem(k,v)}catch(e){return null}}
function T(s){try{return window.EMDLangV98?window.EMDLangV98.t(s):s}catch(e){return s}}

/* ===== الأيقونات: [تعبئة للنمط ثنائي اللون, الخطوط] — k = تفاصيل داخلية ===== */
var IC={
 home:['<path class="f" d="M5 9.5 12 4l7 5.5V20H5Z"/>','<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path class="k" d="M10 21v-6h4v6"/>'],
 plus:['<rect class="f" x="3" y="3" width="18" height="18" rx="4"/>','<rect x="3" y="3" width="18" height="18" rx="4"/><path class="k" d="M12 8v8M8 12h8"/>'],
 add:['','<path d="M12 5v14M5 12h14"/>'],
 list:['<rect class="f" x="5" y="3" width="14" height="18" rx="2"/>','<rect x="5" y="3" width="14" height="18" rx="2"/><path class="k" d="M9 9h6M9 13h6M9 17h4"/>'],
 wallet:['<path class="f" d="M4 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1Z"/>','<path d="M4 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V7Z"/><path d="M4 7l11-3v3"/><path class="k" d="M15 13.5h2"/>'],
 link:['','<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'],
 user:['<circle class="f" cx="12" cy="8" r="4"/>','<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0Z"/>'],
 users:['<circle class="f" cx="9" cy="8" r="3.5"/>','<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0Z"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 13.5a6.5 6.5 0 0 1 3.5 6.5"/>'],
 box:['<path class="f" d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5Z"/>','<path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z"/><path class="k" d="M3 7.5 12 12l9-4.5M12 12v9"/>'],
 whs:['<path class="f" d="M3 21V9l9-5 9 5v12Z"/>','<path d="M3 21V9l9-5 9 5v12H3Z"/><path class="k" d="M7 21v-8h10v8M7 17h10"/>'],
 cart:['<path class="f" d="M6 7h15l-2 8.2a1 1 0 0 1-1 .8H8.6a1 1 0 0 1-1-.8Z"/>','<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.6 12.2a1 1 0 0 0 1 .8h9.7a1 1 0 0 0 1-.8L21 7H6"/>'],
 chart:['<rect class="f" x="4" y="4" width="16" height="16" rx="2"/>','<path d="M4 20V4M4 20h16"/><path class="k" d="M8 16v-4M12 16V8M16 16v-6"/>'],
 bell:['<path class="f" d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4Z"/>','<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4l2-2Z"/><path d="M10 21h4"/>'],
 menu:['','<path d="M4 7h16M4 12h16M4 17h16"/>'],
 spark:['<circle class="f" cx="12" cy="12" r="9"/>','<path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><circle cx="12" cy="12" r="3"/>'],
 clock:['<circle class="f" cx="12" cy="12" r="9"/>','<circle cx="12" cy="12" r="9"/><path class="k" d="M12 7v5l3 2"/>'],
 check:['<circle class="f" cx="12" cy="12" r="9"/>','<circle cx="12" cy="12" r="9"/><path class="k" d="m8 12 3 3 5-6"/>'],
 tool:['<circle class="f" cx="12" cy="12" r="9"/>','<path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3l7.5-7.5Z"/><path d="M14.5 6.5 17 4"/>'],
 truck:['<path class="f" d="M3 6h11v10H3z"/>','<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>'],
 inbox:['<path class="f" d="M5 5h14l2 8v6H3v-6Z"/>','<path d="M5 5h14l2 8v6H3v-6l2-8Z"/><path class="k" d="M3 13h5l1.5 3h5L16 13h5"/>'],
 cloud:['<path class="f" d="M7 18a5 5 0 1 1 1-9.9A6 6 0 0 1 19.5 11 3.5 3.5 0 0 1 18 18Z"/>','<path d="M7 18a5 5 0 1 1 1-9.9A6 6 0 0 1 19.5 11 3.5 3.5 0 0 1 18 18Z"/>'],
 globe:['<circle class="f" cx="12" cy="12" r="9"/>','<circle cx="12" cy="12" r="9"/><path class="k" d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>'],
 help:['<circle class="f" cx="12" cy="12" r="9"/>','<circle cx="12" cy="12" r="9"/><path class="k" d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5V14M12 17.5v.01"/>'],
 gear:['<circle class="f" cx="12" cy="12" r="8"/>','<path d="M12 2.8 14 5l3-.3.9 2.9 2.6 1.6L19.6 12l.9 2.8-2.6 1.6L17 19.3l-3-.3-2 2.2-2-2.2-3 .3-.9-2.9-2.6-1.6.9-2.8-.9-2.8 2.6-1.6L7 4.7l3 .3Z"/><circle class="k" cx="12" cy="12" r="3"/>'],
 bot:['<rect class="f" x="4" y="8" width="16" height="12" rx="3"/>','<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4M9 4h6"/><path class="k" d="M9 13v1M15 13v1M10 17h4"/>'],
 lock:['<rect class="f" x="5" y="10" width="14" height="11" rx="2"/>','<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path class="k" d="M12 14v3"/>'],
 bag:['<path class="f" d="M5 8h14l-1 13H6Z"/>','<path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>'],
 chat:['<path class="f" d="M4 5h16v11H9l-5 4Z"/>','<path d="M4 5h16v11H9l-5 4V5Z"/><path class="k" d="M8 9.5h8M8 12.5h5"/>'],
 pen:['','<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4"/>'],
 clip:['<rect class="f" x="5" y="4" width="14" height="17" rx="2"/>','<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1"/><path class="k" d="m9 13 2 2 4-4"/>'],
 kit:['<rect class="f" x="3" y="8" width="18" height="12" rx="2"/>','<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path class="k" d="M3 13h18M11 12v2h2v-2"/>'],
 image:['<rect class="f" x="3" y="4" width="18" height="16" rx="2"/>','<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="9.5" r="1.6"/><path class="k" d="m21 16-5-5-9 9"/>'],
 arrows:['','<path d="M8 4v16M4.5 7.5 8 4l3.5 3.5M16 20V4M12.5 16.5 16 20l3.5-3.5"/>'],
 save:['<path class="f" d="M5 3h11l3 3v15H5Z"/>','<path d="M5 3h11l3 3v15H5V3Z"/><path class="k" d="M8 3v5h7V3M8 21v-7h8v7"/>'],
 receipt:['<path class="f" d="M6 3h12v18l-3-2-3 2-3-2-3 2Z"/>','<path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path class="k" d="M9 8h6M9 12h6"/>'],
 brain:['<circle class="f" cx="12" cy="12" r="8"/>','<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z"/><path d="M19 16v4M17 18h4"/>'],
 puzzle:['<path class="f" d="M4 8h4a2 2 0 1 1 4 0h4v4a2 2 0 1 1 0 4v4H4Z"/>','<path d="M4 8h4a2 2 0 1 1 4 0h4v4a2 2 0 1 1 0 4v4H4V8Z"/>'],
 refresh:['','<path d="M20 11a8 8 0 0 0-14.8-4M4 4v4h4"/><path d="M4 13a8 8 0 0 0 14.8 4M20 20v-4h-4"/>'],
 broom:['','<path d="M14 4 9.5 13"/><path d="M6 13h8l1 7H5Z"/><path class="k" d="M8 16v4M11 16v4"/>'],
 note:['<rect class="f" x="4" y="3" width="16" height="18" rx="2"/>','<rect x="4" y="3" width="16" height="18" rx="2"/><path class="k" d="M8 8h8M8 12h8M8 16h5"/>'],
 phone:['<rect class="f" x="7" y="2" width="10" height="20" rx="2"/>','<rect x="7" y="2" width="10" height="20" rx="2"/><path class="k" d="M11 18h2"/>'],
 type:['','<path d="M5 6V4h14v2M12 4v16M9 20h6"/>'],
 palette:['<circle class="f" cx="12" cy="12" r="9"/>','<path d="M12 3a9 9 0 0 0 0 18c1.2 0 1.6-1 1.2-2-.6-1.4.3-2.5 1.8-2.5H17a4 4 0 0 0 4-4C21 7 17 3 12 3Z"/><circle class="k" cx="8" cy="11" r=".6"/><circle class="k" cx="11" cy="7.5" r=".6"/><circle class="k" cx="15.5" cy="8.5" r=".6"/>'],
 sliders:['','<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>'],
 target:['<circle class="f" cx="12" cy="12" r="9"/>','<circle cx="12" cy="12" r="9"/><circle class="k" cx="12" cy="12" r="5"/><circle class="k" cx="12" cy="12" r="1.5"/>'],
 pin:['<path class="f" d="M9 3h6l-1 6 4 4H6l4-4Z"/>','<path d="M9 3h6l-1 6 4 4H6l4-4-1-6Z"/><path d="M12 13v8"/>'],
 checkbox:['<rect class="f" x="3" y="3" width="18" height="18" rx="4"/>','<rect x="3" y="3" width="18" height="18" rx="4"/><path class="k" d="m8 12 3 3 5-6"/>'],
 upload:['','<path d="M12 15V4M7.5 8.5 12 4l4.5 4.5"/><path d="M4 15v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4"/>'],
 building:['<rect class="f" x="4" y="3" width="16" height="18" rx="1"/>','<rect x="4" y="3" width="16" height="18" rx="1"/><path class="k" d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3"/>'],
 rocket:['<path class="f" d="M12 3c4 2 6 6 6 10l-3 3H9l-3-3c0-4 2-8 6-10Z"/>','<path d="M12 3c4 2 6 6 6 10l-3 3H9l-3-3c0-4 2-8 6-10Z"/><circle class="k" cx="12" cy="10" r="2"/><path d="M9 16l-1 5 4-2 4 2-1-5"/>'],
 shield:['<path class="f" d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z"/>','<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/><path class="k" d="m9 12 2 2 4-4"/>'],
 search:['<circle class="f" cx="11" cy="11" r="7"/>','<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>'],
 flask:['<path class="f" d="M9 3h6v6l5 10a1.5 1.5 0 0 1-1.3 2H5.3A1.5 1.5 0 0 1 4 19L9 9Z"/>','<path d="M9 3h6M10 3v6L4.2 19a1.5 1.5 0 0 0 1.3 2h13a1.5 1.5 0 0 0 1.3-2L14 9V3"/><path class="k" d="M7 15h10"/>']};
/* الإيموجي ← [أيقونة, لون] */
var EM={'🏠':['home','#2563eb'],'📦':['box','#ea580c'],'📋':['list','#7c3aed'],'💰':['wallet','#d97706'],'🔗':['link','#0891b2'],'👤':['user','#db2777'],'🏭':['whs','#475569'],
 '🛒':['cart','#059669'],'📊':['chart','#4f46e5'],'🔔':['bell','#dc2626'],'☰':['menu','#475569'],'＋':['add','#18202a'],'🆕':['spark','#2563eb'],'⏳':['clock','#d97706'],'🟢':['check','#16a34a'],
 '🛠':['tool','#7c3aed'],'🚚':['truck','#0891b2'],'📬':['inbox','#64748b'],'☁':['cloud','#0ea5e9'],'🌐':['globe','#0891b2'],'🆘':['help','#dc2626'],'🛟':['help','#dc2626'],'⚙':['gear','#475569'],
 '🤖':['bot','#4f46e5'],'🔒':['lock','#b91c1c'],'🔐':['lock','#b91c1c'],'🛍':['bag','#b76e79'],'💬':['chat','#16a34a'],'👥':['users','#7c3aed'],'✍':['pen','#0f766e'],'🧑‍💼':['clip','#0f766e'],'🧰':['kit','#ea580c'],
 '🖼':['image','#0891b2'],'↕':['arrows','#475569'],'💾':['save','#2563eb'],'🧾':['receipt','#0f766e'],'🧠':['brain','#7c3aed'],'🧩':['puzzle','#ea580c'],'♻':['refresh','#16a34a'],'🧹':['broom','#d97706'],
 '📝':['note','#0891b2'],'📲':['phone','#4f46e5'],'🔤':['type','#475569'],'🎨':['palette','#db2777'],'🎛':['sliders','#475569'],'🎯':['target','#dc2626'],'📌':['pin','#dc2626'],'☑':['checkbox','#16a34a'],
 '📤':['upload','#2563eb'],'🏢':['building','#475569'],'🚀':['rocket','#ea580c'],'🛡':['shield','#0f766e'],'🔎':['search','#475569'],'🔬':['flask','#7c3aed']};
var EMKEYS=Object.keys(EM).sort(function(a,b){return b.length-a.length});
function svg(k){var p=IC[k]||IC.box;return '<svg viewBox="0 0 24 24" aria-hidden="true">'+p[0]+p[1]+'</svg>'}
function icon(k,c){return '<span class="emd412-i" style="--c:'+c+'">'+svg(k)+'</span>'}

/* ===== الأنماط ===== */
var STYLES=[['tile','مربعات ملونة'],['soft','دوائر ناعمة'],['duo','ثنائي اللون'],['line','خطي رفيع'],['bold','خطي عريض'],['solid','مُعبّأ'],['gold','ذهبي فاخر'],['emoji','إيموجي (القديم)']];
function style(){var s=ls('emd412_icons');for(var i=0;i<STYLES.length;i++)if(STYLES[i][0]===s)return s;return 'tile'}
function setStyle(s){ls('emd412_icons',s);applyStyle()}
function applyStyle(){RW.EMDPosH.icStyle()}

/* ===== الشريط السفلي ===== */
var OPT={home:['🏠','الرئيسية'],orders:['📋','الطلبات'],add:['＋','طلب جديد'],direct:['🛒','بيع مباشر'],bell:['🔔','التنبيهات'],finance:['💰','المالية'],tracking:['🔗','التتبع'],
 customers:['👤','العملاء'],products:['📦','المنتجات'],stock:['🏭','المخزن'],performance:['📊','الأداء'],ai:['🤖','اسأل EMD'],store:['🛍️','متجري']};
var DEF=['home','orders','add','bell'];
function slots(){var s=null;try{s=JSON.parse(ls('emd412_bar')||'null')}catch(e){}if(!Array.isArray(s)||(s.length!==4&&s.length!==5))return DEF.slice();return s.map(function(k,i){return OPT[k]?k:(DEF[i]||'direct')})}
/* V141: زر خامس اختياري */
function setCount(n){var sl=slots();if(n===5&&sl.length===4){var c=['direct','products','customers','finance','stock','tracking','performance','ai'].filter(function(k){return sl.indexOf(k)<0})[0]||'direct';sl.push(c)}else if(n===4&&sl.length===5)sl=sl.slice(0,4);ls('emd412_bar',JSON.stringify(sl))}
function buildBar(){RW.EMDPosH.icBar()}
/* ===== نافذة الإعداد ===== */
function openModal(){var m=$('emd412Modal');if(!m){m=document.createElement('div');m.id='emd412Modal';document.body.appendChild(m);
  m.addEventListener('click',function(e){if(e.target===m||e.target.closest('[data-a="close"]')){m.classList.remove('show');return}
    var s=e.target.closest('[data-style]');if(s){setStyle(s.getAttribute('data-style'));paintModal();saved();return}
    if(e.target.closest('[data-a="reset"]')){ls('emd412_bar',null);buildBar();paintModal();saved()}
    var nb=e.target.closest('[data-cnt]');if(nb){setCount(+nb.getAttribute('data-cnt'));buildBar();paintModal();saved()}});
  m.addEventListener('change',function(e){var sel=e.target.closest('select[data-slot]');if(!sel)return;var sl=slots(),i=+sel.getAttribute('data-slot'),v=sel.value,j=sl.indexOf(v);if(j>-1&&j!==i)sl[j]=sl[i];sl[i]=v;ls('emd412_bar',JSON.stringify(sl));buildBar();paintModal();saved()})}
  paintModal();m.classList.add('show')}
function saved(){var o=document.querySelector('#emd412Modal .ok');if(o){o.textContent='✓ '+T('تم الحفظ');clearTimeout(saved.t);saved.t=setTimeout(function(){o.textContent=''},1500)}}
function paintModal(){var m=$('emd412Modal');if(!m)return;var cur=style(),sl=slots();
  var demo=['home','cart','truck','wallet'],cols=['#2563eb','#059669','#0891b2','#d97706'],emo=['🏠','🛒','🚚','💰'];
  var opts=function(i){return Object.keys(OPT).map(function(k){return '<option value="'+k+'"'+(sl[i]===k?' selected':'')+'>'+T(OPT[k][1])+'</option>'}).join('')};
  m.innerHTML='<div class="win" role="dialog" aria-modal="true" aria-labelledby="emd412T"><div class="hd"><h2 id="emd412T">🎛️ '+T('شكل الأزرار والشريط السفلي')+'</h2><button type="button" class="x" data-a="close">'+T('إغلاق')+' ✕</button></div>'+
   '<h3>'+T('شكل أيقونات حالات الطلبات')+'</h3><p class="sub">'+T('يتغير في بطاقات حالات الطلبات في الرئيسية. يمكنك تغييره في أي وقت.')+'</p><div class="styles">'+
   STYLES.map(function(s){return '<button type="button" data-style="'+s[0]+'" aria-pressed="'+(s[0]===cur)+'" class="emd412-pv-'+s[0]+'"><span class="demo">'+(s[0]==='emoji'?emo.join(' '):demo.map(function(k,i){return icon(k,cols[i])}).join(''))+'</span>'+T(s[1])+'</button>'}).join('')+'</div>'+
   '<h3>'+T('أزرار الشريط السفلي (الجوال)')+'</h3><p class="sub">'+T('اختر الزر لكل خانة. الصفحات التي لا تختارها تبقى في ☰ المزيد. الضغط المطوّل على الشريط يفتح هذه النافذة.')+'</p>'+
   '<div class="e141n"><span>'+T('عدد الأزرار')+'</span><button type="button" data-cnt="4" aria-pressed="'+(sl.length===4)+'">'+T('4 أزرار + المزيد')+'</button><button type="button" data-cnt="5" aria-pressed="'+(sl.length===5)+'">'+T('5 أزرار + المزيد')+'</button></div>'+
   ['الزر 1','الزر 2','الزر الأوسط (البارز)','الزر 4','الزر 5'].slice(0,sl.length).map(function(l,i){return '<div class="slot"><span>'+T(l)+'</span><select data-slot="'+i+'" aria-label="'+T(l)+'">'+opts(i)+'</select></div>'}).join('')+
   '<div class="slot"><span>'+T(sl.length===5?'الزر 6':'الزر 5')+'</span><div class="fixed">☰ '+T('المزيد (ثابت)')+'</div></div>'+
   '<div class="row"><button type="button" class="b" data-a="reset">'+T('استعادة الشريط الافتراضي')+'</button><span class="ok"></span></div></div>';
  /* معاينة كل نمط داخل زرّه */
  STYLES.forEach(function(s){if(s[0]==='emoji')return;var b=m.querySelector('.emd412-pv-'+s[0]);if(b)b.querySelectorAll('.emd412-i').forEach(function(x){x.setAttribute('data-pv',s[0])})})}

/* معاينة الأنماط داخل النافذة بغض النظر عن النمط الحالي */
var pvCss=document.createElement('style');pvCss.id='EMD-V412-pv';
pvCss.textContent=['line','bold','solid','duo','tile','soft','gold'].map(function(s){return ''}).join('')+
 '#emd412Modal .emd412-i[data-pv]{width:auto;height:auto;border-radius:0;background:none;color:currentColor;font-size:18px}'+
 '#emd412Modal .emd412-i[data-pv] svg{width:1.15em;height:1.15em;fill:none;stroke:currentColor;stroke-width:1.9}#emd412Modal .emd412-i[data-pv] svg .f{display:none}#emd412Modal .emd412-i[data-pv] svg .k{fill:none;stroke:currentColor}'+
 '#emd412Modal .emd412-i[data-pv="line"] svg{stroke-width:1.5}#emd412Modal .emd412-i[data-pv="bold"] svg{stroke-width:2.4}'+
 '#emd412Modal .emd412-i[data-pv="solid"] svg{fill:currentColor;stroke-width:1.2}#emd412Modal .emd412-i[data-pv="solid"] svg .k{stroke:var(--card,#fff);stroke-width:1.8}'+
 '#emd412Modal .emd412-i[data-pv="duo"]{color:var(--c)}#emd412Modal .emd412-i[data-pv="duo"] svg .f{display:inline;fill:var(--c);fill-opacity:.24;stroke:none}'+
 '#emd412Modal .emd412-i[data-pv="tile"]{width:28px;height:28px;border-radius:8px;background:var(--c);color:#fff;display:inline-grid;place-items:center;font-size:16px}#emd412Modal .emd412-i[data-pv="tile"] svg{stroke-width:2.1}'+
 '#emd412Modal .emd412-i[data-pv="soft"]{width:30px;height:30px;border-radius:50%;background:color-mix(in srgb,var(--c) 15%,transparent);color:var(--c);display:inline-grid;place-items:center;font-size:16px}#emd412Modal .emd412-i[data-pv="soft"] svg{stroke-width:2.1}'+
 '#emd412Modal .emd412-i[data-pv="gold"]{color:#b8892b}#emd412Modal .emd412-i[data-pv="gold"] svg{stroke-width:1.6}';
document.head.appendChild(pvCss);
window.EMDIconsV412={open:openModal,style:style,set:setStyle};

})();

})(window);
