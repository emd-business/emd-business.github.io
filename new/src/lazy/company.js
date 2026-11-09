/* مُولَّد بـ tools/port-pos.py من emd430-js — لا تعدّل هنا */
(function(){var s=document.createElement("style");s.textContent="\n#emd430 .e436t{display:grid;grid-template-columns:1fr auto;gap:3px 12px;font-size:13.5px;margin-top:8px}\n#emd430 .e436t span{color:#64748b}#emd430 .e436t b{text-align:left}\n#emd430 .e435big{font-size:26px;font-weight:900;margin:4px 0 2px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}\n#emd430 .e435up,#emd430 .e435dn{display:inline-block;border-radius:8px;padding:1px 7px;font-size:12px;font-weight:800;white-space:nowrap}\n#emd430 .e435up{background:#dcfce7;color:#166534}#emd430 .e435dn{background:#fee2e2;color:#991b1b}\n#emd430 .hero .e435up{background:rgba(134,239,172,.2);color:#86efac}#emd430 .hero .e435dn{background:rgba(252,165,165,.2);color:#fca5a5}\n#emd430 .e435al{display:flex;align-items:center;gap:10px;width:100%;text-align:right;font:inherit;font-size:14px;background:#fffbeb;border:1px solid #fde68a;color:#78350f;border-radius:12px;padding:10px 12px;margin-bottom:6px;cursor:pointer;min-height:46px}\n#emd430 .e435al i{font-style:normal;font-size:18px}#emd430 .e435al span{flex:1}#emd430 .e435al em{font-style:normal;color:#b45309}\n#emd430 .e433of{border:1px solid #e2e8f0;border-radius:14px;padding:10px 12px;margin-top:8px;background:#fff}\n#emd430 .e433of.dim{opacity:.6}\n#emd430 .e433of .mut{margin-top:4px;line-height:1.6}\n#emd430{position:fixed;inset:0;z-index:2147482000;display:none;background:rgba(15,23,42,.55);direction:rtl;font-family:inherit;color:#0f172a}\n#emd430.show{display:flex;align-items:flex-end;justify-content:center}\n@media(min-width:761px){#emd430.show{align-items:center}}\n#emd430 *{box-sizing:border-box}\n#emd430 .w{width:100%;max-width:820px;height:94vh;background:#f4f6fb;border-radius:22px 22px 0 0;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 -10px 40px rgba(15,23,42,.25)}\n@media(min-width:761px){#emd430 .w{height:88vh;border-radius:22px}}\n#emd430 .hd{background:linear-gradient(135deg,#172554,#1e3a8a);color:#fff;padding:14px 16px 0;position:relative}\n#emd430 .hd:after{content:'';position:absolute;left:0;right:0;bottom:0;height:3px;background:linear-gradient(90deg,#f59e0b,#fbbf24,#f59e0b)}\n#emd430 .hr{display:flex;align-items:center;gap:10px}\n#emd430 .mk{width:38px;height:38px;border-radius:11px;background:#0b1640;border:1.5px solid #f59e0b;color:#fbbf24;font-weight:900;font-size:11px;letter-spacing:.5px;display:flex;align-items:center;justify-content:center;flex:none}\n#emd430 .tt{flex:1;min-width:0}#emd430 .tt b{display:block;font-size:17px}#emd430 .tt small{display:block;font-size:12px;color:#c7d2fe;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n#emd430 .x{width:36px;height:36px;border-radius:50%;border:0;background:rgba(255,255,255,.14);color:#fff;font-size:16px;cursor:pointer;flex:none}\n#emd430 .tabs{display:flex;gap:4px;margin-top:12px;overflow-x:auto;scrollbar-width:none;padding-bottom:3px}\n#emd430 .tabs::-webkit-scrollbar{display:none}\n#emd430 .tabs button{flex:none;border:0;background:transparent;color:#c7d2fe;font:inherit;font-size:13.5px;font-weight:800;padding:9px 12px 11px;border-radius:12px 12px 0 0;cursor:pointer}\n#emd430 .tabs button.on{background:#f4f6fb;color:#172554}\n#emd430 .bd{flex:1;overflow:auto;padding:14px 14px calc(24px + env(safe-area-inset-bottom,0px))}\n#emd430 .cd{background:#fff;border:1px solid #e3e8f2;border-radius:16px;padding:14px;margin-bottom:12px}\n#emd430 .cd h4{margin:0 0 10px;font-size:14.5px;display:flex;align-items:center;gap:6px}\n#emd430 .cd h4 em{font-style:normal;margin-inline-start:auto;font-size:12px;color:#64748b;font-weight:700}\n#emd430 .mut{color:#64748b;font-size:12.5px;line-height:1.7}\n#emd430 .hero{background:linear-gradient(135deg,#1e3a8a,#172554);color:#fff;border:0}\n#emd430 .hero .mut{color:#c7d2fe}\n#emd430 .pill{display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:800;padding:4px 10px;border-radius:99px;background:#eef2ff;color:#3730a3}\n#emd430 .pill i{width:7px;height:7px;border-radius:50%;background:currentColor;display:inline-block}\n#emd430 .pill.ok{background:#dcfce7;color:#166534}#emd430 .pill.warn{background:#fef3c7;color:#92400e}#emd430 .pill.bad{background:#fee2e2;color:#991b1b}\n#emd430 .hero .pill{background:rgba(255,255,255,.14);color:#fff}#emd430 .hero .pill.ok{background:rgba(34,197,94,.25);color:#dcfce7}\n#emd430 .kv{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px}\n#emd430 .kv div{background:rgba(255,255,255,.1);border-radius:12px;padding:9px 10px}\n#emd430 .kv b{display:block;font-size:16px}#emd430 .kv small{font-size:11.5px;color:#c7d2fe}\n#emd430 .acts{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}\n#emd430 .acts button{border:1px solid #e3e8f2;background:#fff;border-radius:14px;padding:12px 4px;font:inherit;font-size:12.5px;font-weight:800;color:#172554;display:flex;flex-direction:column;align-items:center;gap:5px;cursor:pointer}\n#emd430 .acts button i{font-style:normal;font-size:22px}\n#emd430 .b1,#emd430 .b2,#emd430 .b3{border:0;border-radius:12px;padding:11px 16px;font:inherit;font-weight:800;font-size:14px;cursor:pointer}\n#emd430 .b1{background:#f59e0b;color:#172554}#emd430 .b2{background:#1e3a8a;color:#fff}#emd430 .b3{background:#eef2f7;color:#172554}\n#emd430 .bs{padding:7px 11px;font-size:12.5px;border-radius:10px}\n#emd430 .b1:disabled,#emd430 .b2:disabled{opacity:.55}\n#emd430 .row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}\n#emd430 .grow{flex:1;min-width:0}\n#emd430 .whs{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px}\n#emd430 .wh{border:1px solid #e3e8f2;border-radius:14px;padding:12px;background:#fff;position:relative}\n#emd430 .wh.cur{border-color:#f59e0b;box-shadow:0 0 0 2px rgba(245,158,11,.2)}\n#emd430 .wh b{font-size:14.5px}#emd430 .wh .tg{position:absolute;top:10px;left:10px;font-size:11px;font-weight:800;background:#fef3c7;color:#92400e;padding:2px 8px;border-radius:99px}\n#emd430 .wh .nums{display:flex;gap:12px;margin-top:8px;font-size:12px;color:#475569}#emd430 .wh .nums b{display:block;font-size:15px;color:#0f172a}\n#emd430 .wh .low{color:#b45309}\n#emd430 input,#emd430 select{font:inherit;font-size:14px;border:1px solid #d6dce8;border-radius:11px;padding:10px 11px;background:#fff;color:#0f172a;min-width:0;width:100%}\n#emd430 label.f{display:block;font-size:12.5px;font-weight:800;color:#334155;margin:0 0 5px}\n#emd430 .two{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n#emd430 .chips{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;padding-bottom:2px}\n#emd430 .chips::-webkit-scrollbar{display:none}\n#emd430 .chips button{flex:none;border:1px solid #d6dce8;background:#fff;color:#334155;border-radius:99px;padding:7px 13px;font:inherit;font-size:12.5px;font-weight:800;cursor:pointer}\n#emd430 .chips button.on{background:#1e3a8a;border-color:#1e3a8a;color:#fff}\n#emd430 .pr{display:flex;align-items:center;gap:10px;padding:11px 2px;border-bottom:1px solid #eef1f6;cursor:pointer}\n#emd430 .pr:last-child{border-bottom:0}\n#emd430 .pr .nm{flex:1;min-width:0}#emd430 .pr .nm b{display:block;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n#emd430 .pr .qs{display:flex;gap:4px;flex-wrap:wrap;margin-top:4px}\n#emd430 .pr .qs span{font-size:11.5px;background:#f1f5f9;color:#334155;border-radius:7px;padding:2px 7px;font-weight:700}\n#emd430 .pr .qs span.z{color:#b91c1c;background:#fef2f2}\n#emd430 .pr .tot{font-size:16px;font-weight:900;color:#172554;min-width:44px;text-align:center}\n#emd430 .pr .tot small{display:block;font-size:10.5px;color:#64748b;font-weight:700}\n#emd430 .ln{display:grid;grid-template-columns:1fr 92px 34px;gap:6px;align-items:center;margin-bottom:6px}\n#emd430 .ln .nm{font-size:13.5px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n#emd430 .ln .nm small{display:block;font-size:11.5px;color:#64748b;font-weight:600}\n#emd430 .del{width:34px;height:34px;border:0;border-radius:10px;background:#fef2f2;color:#b91c1c;cursor:pointer;font-size:14px}\n#emd430 .sug{border:1px solid #e3e8f2;border-radius:12px;margin-top:6px;overflow:hidden;background:#fff}\n#emd430 .sug button{display:flex;width:100%;justify-content:space-between;gap:8px;border:0;border-bottom:1px solid #eef1f6;background:#fff;padding:10px 12px;font:inherit;font-size:13.5px;text-align:right;cursor:pointer;color:#0f172a}\n#emd430 .sug button:last-child{border-bottom:0}#emd430 .sug button small{color:#64748b}\n#emd430 .lg{font-size:13px}\n#emd430 .lg .it{display:flex;gap:10px;padding:9px 0;border-bottom:1px dashed #e3e8f2;align-items:flex-start}\n#emd430 .lg .it:last-child{border-bottom:0}\n#emd430 .lg .ic{width:30px;height:30px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex:none;background:#eef2ff}\n#emd430 .lg .it b{font-size:13.5px}#emd430 .lg .it small{display:block;color:#64748b;font-size:11.5px}\n#emd430 .pos{color:#15803d;font-weight:900}#emd430 .neg{color:#b91c1c;font-weight:900}\n#emd430 .sum4{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}\n@media(max-width:560px){#emd430 .sum4{grid-template-columns:repeat(2,1fr)}#emd430 .acts{grid-template-columns:repeat(4,1fr)}#emd430 .kv b{font-size:14px}}\n#emd430 .st{background:#fff;border:1px solid #e3e8f2;border-radius:14px;padding:11px 12px}\n#emd430 .st small{display:block;font-size:11.5px;color:#64748b;font-weight:700}#emd430 .st b{display:block;font-size:17px;margin-top:3px;color:#172554}\n#emd430 .brc{border:1px solid #e3e8f2;border-radius:14px;padding:12px;margin-bottom:10px;background:#fff}\n#emd430 .brc .top{display:flex;align-items:center;gap:8px}\n#emd430 .brc .top b{font-size:15px;flex:1}#emd430 .brc .top span{font-weight:900;color:#172554}\n#emd430 .bar{height:8px;border-radius:99px;background:#eef2f7;margin:8px 0;overflow:hidden}\n#emd430 .bar i{display:block;height:100%;border-radius:99px;background:linear-gradient(90deg,#1e3a8a,#f59e0b)}\n#emd430 .mini{display:flex;gap:6px;flex-wrap:wrap}\n#emd430 .mini span{font-size:11.5px;background:#f8fafc;border:1px solid #eef1f6;border-radius:8px;padding:3px 8px;color:#334155;font-weight:700}\n#emd430 .er{display:grid;grid-template-columns:1fr 1fr 34px;gap:6px;margin-bottom:6px}\n#emd430 .code{font-size:32px;font-weight:900;letter-spacing:4px;text-align:center;color:#172554;background:#fffbeb;border:2px dashed #f59e0b;border-radius:14px;padding:14px;direction:ltr;margin:10px 0}\n#emd430 .empty{text-align:center;color:#64748b;font-size:13px;padding:18px 8px}\n#emd430 .note{background:#fffbeb;border:1px solid #fde68a;color:#78350f;border-radius:12px;padding:10px 12px;font-size:12.5px;line-height:1.7}\n#emd430 .sub2{position:fixed;inset:0;z-index:2;background:rgba(15,23,42,.45);display:flex;align-items:flex-end;justify-content:center}\n#emd430 .sub2 .sw{width:100%;max-width:620px;background:#fff;border-radius:20px 20px 0 0;padding:16px 16px calc(18px + env(safe-area-inset-bottom,0px));max-height:86vh;overflow:auto}\n@media(min-width:761px){#emd430 .sub2{align-items:center}#emd430 .sub2 .sw{border-radius:20px}}\n#emd430 .sw h3{margin:0 0 4px;font-size:17px;color:#172554}\n.emd430-toast{position:fixed;left:50%;bottom:calc(86px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);background:#172554;color:#fff;padding:10px 16px;border-radius:12px;font-size:13.5px;font-weight:700;z-index:2147483600;box-shadow:0 8px 24px rgba(0,0,0,.25);direction:rtl;max-width:90vw;text-align:center}\n#emd430 .tabs button .bg{display:inline-block;min-width:18px;padding:0 5px;margin-inline-start:4px;border-radius:99px;background:#f59e0b;color:#172554;font-size:11px;line-height:18px}\n#emd430 .rq{border:1px solid #e3e8f2;border-radius:14px;padding:12px;margin-bottom:10px;background:#fff}\n#emd430 .rq.act{border-color:#f59e0b;box-shadow:0 0 0 2px rgba(245,158,11,.18)}\n#emd430 .rq .top{display:flex;align-items:center;gap:8px;flex-wrap:wrap}#emd430 .rq .top b{font-size:14.5px}\n#emd430 .rq .rt{font-size:13px;color:#334155;margin:6px 0;font-weight:700}\n#emd430 .rq ul{margin:6px 0 0;padding:0 18px 0 0;font-size:13px;color:#0f172a}#emd430 .rq li{margin:2px 0}\n#emd430 .rq .short{color:#b91c1c;font-weight:800}\n#emd430 .sh{display:grid;grid-template-columns:22px 1fr 70px;gap:8px;align-items:center;padding:9px 0;border-bottom:1px solid #eef1f6}\n#emd430 .sh:last-child{border-bottom:0}#emd430 .sh input[type=checkbox]{width:20px;height:20px;accent-color:#1e3a8a}\n#emd430 .sh b{font-size:13.5px;display:block}#emd430 .sh small{font-size:11.5px;color:#64748b;display:block}\n#emd430 .sh input[inputmode]{padding:8px;text-align:center}\n#emd430 .po .amt{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}\n#emd430 .po .amt span{font-size:11.5px;background:#f8fafc;border:1px solid #eef1f6;border-radius:8px;padding:3px 8px;font-weight:700;color:#334155}\n#emd430 .po .amt span.due{background:#fef2f2;border-color:#fecaca;color:#991b1b}\n#emd430 .pl{display:grid;grid-template-columns:1fr 70px 80px 34px;gap:6px;align-items:center;margin-bottom:6px}\n#emd430 .pl .nm{font-size:13px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n#emd430 .pl .nm small{display:block;font-size:11px;color:#64748b;font-weight:600}\n#emd430 .pl input{padding:8px;text-align:center}\n#emd430 .plh{display:grid;grid-template-columns:1fr 70px 80px 34px;gap:6px;font-size:11px;color:#64748b;font-weight:800;margin:8px 0 4px}\n#emd430 .spl{display:flex;align-items:center;gap:8px;padding:10px 2px;border-bottom:1px solid #eef1f6;cursor:pointer}\n#emd430 .spl:last-child{border-bottom:0}#emd430 .spl b{font-size:14px}#emd430 .spl .grow small{display:block;color:#64748b;font-size:11.5px}\n#emd430Chip{display:none}\nbody[data-emd416m=\"company\"] #emd430Chip{display:flex;align-items:center;gap:8px;margin:0 0 10px;border:1px solid #e3e8f2;background:#fff;border-radius:14px;padding:9px 12px;font:inherit;font-size:13px;font-weight:800;color:#172554;width:100%;cursor:pointer;direction:rtl;text-align:right}\n#emd430Chip i{font-style:normal}#emd430Chip span{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n#emd430Chip em{font-style:normal;font-size:11.5px;padding:2px 8px;border-radius:99px;background:#eef2ff;color:#3730a3}\n#emd430Chip em.ok{background:#dcfce7;color:#166534}#emd430Chip em.warn{background:#fef3c7;color:#92400e}\nbody.emd430-open #emd410Bar,body.emd430-open #emdQuickToggleFinal,body.emd430-open #emdV92AiFab{display:none!important}\n\n";document.head.appendChild(s)})();
(function(RW){var PH=RW.EMDPosH,PLS=PH.ls;
var EMDStaffV108=RW.EMDStaffV108||PH.alias.EMDStaffV108,EMDCloudV93=RW.EMDCloudV93||PH.alias.EMDCloudV93,EMDBusinessProfileV333=RW.EMDBusinessProfileV333||PH.alias.EMDBusinessProfileV333,EMDLookV89=RW.EMDLookV89||PH.alias.EMDLookV89,EMDPrefixV129=RW.EMDPrefixV129||PH.alias.EMDPrefixV129;
var window=new Proxy(RW,{get:function(t,k){if(k==='db')return PH.db();if(k==='localStorage')return PLS;if(PH.alias[k]&&!(k in t))return PH.alias[k];var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t||!!PH.alias[k]}});
/* ---- emd430-js ---- */

(function(){'use strict';
if(window.EMDCoV430)return;
var FN='https://pfkstppvnebagbdckgbu.supabase.co/functions/v1/company',FNKEY='sb_publishable__tfVZiyph-xyB87GzmHrkQ_9DVpPHJ0';
var DBKEY='emd_business_v1';
var K={co:'emd430_co',st:'emd430_st',q:'emd430_q',log:'emd430_log',seen:'emd430_seen',cat:'emd430_cat'};
function $(id){return document.getElementById(id)}
function rd(k,d){try{var x=JSON.parse(PLS.getItem(k)||'null');return x==null?d:x}catch(e){return d}}
function wr(k,v){try{PLS.setItem(k,JSON.stringify(v))}catch(e){}}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function num(v){var s=String(v==null?'':v).replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/٫/g,'.').replace(/[,،\s]/g,'');var x=parseFloat(s);return isFinite(x)?x:0}
function r3(x){return Math.round((+x||0)*1000)/1000}
function qf(x){x=r3(x);return Number.isInteger(x)?String(x):x.toFixed(3).replace(/0+$/,'')}
function mf(x){return r3(x).toFixed(3)+' ر.ع'}
function norm(s){return String(s||'').trim().toLowerCase().replace(/\s+/g,' ').replace(/[إأآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه')}
function uuid(){try{if(crypto.randomUUID)return crypto.randomUUID()}catch(e){}return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=Math.random()*16|0;return (c==='x'?r:(r&3|8)).toString(16)})}
function newUid(){return 'p'+Date.now().toString(36)+Math.random().toString(36).slice(2,8)}
function D(){try{return (typeof window.db!=='undefined'&&window.db)?db:window.db}catch(e){return window.db}}
function prods(){var d=D();return d&&Array.isArray(d.products)?d.products:[]}
function persist(){try{PLS.setItem(DBKEY,JSON.stringify(D()))}catch(e){}}
function refreshUI(){try{if(typeof window.save==='function')window.save();else persist()}catch(e){persist()}}
function toast(t){[].forEach.call(document.querySelectorAll('.emd430-toast'),function(o){o.remove()});var x=document.createElement('div');x.className='emd430-toast';x.textContent=t;document.body.appendChild(x);setTimeout(function(){x.remove()},2800)}
function mode(){try{return window.EMDModesV416.mode()}catch(e){return 'online'}}
function staff(){return window.EMDStaffV108}
function who(){try{var w=staff()&&staff().who();if(w)return w}catch(e){}return {id:'owner',name:'المدير',owner:true}}
function can(p){try{var S=staff();return S?!!S.can(p):true}catch(e){return true}}
function isBoss(){var w=who();return !!(w&&w.owner)}
function priceOf(p){return num(p.salePrice!=null?p.salePrice:p.unitPrice!=null?p.unitPrice:p.price)}
function storeKey(p,i){return String(p.id||p.sku||p.name||('p'+i))}

/* ===== الحالة ===== */
var CO=null;
function co(){if(CO)return CO;var c=rd(K.co,null);
  if(!c||!Array.isArray(c.w)){c={v:1,name:'',b:[],w:[],wh:'',storeWh:'',cloud:null};
    var old=null;try{old=window.EMDModesV416&&window.EMDModesV416.company()}catch(e){}
    var ids=[];if(old&&Array.isArray(old.b))old.b.forEach(function(b){var id=uuid();ids.push(id);if(String(b.n||'').trim())c.b.push({id:id,n:String(b.n).trim(),c:String(b.c||'').trim(),on:true})});
    if(old&&Array.isArray(old.w))old.w.forEach(function(w){if(String(w.n||'').trim())c.w.push({id:uuid(),n:String(w.n).trim(),b:(w.b>=0&&ids[w.b]&&c.b.some(function(x){return x.id===ids[w.b]}))?ids[w.b]:'',on:true})})}
  if(!c.w.length)c.w.push({id:uuid(),n:'المخزن الرئيسي',b:c.b[0]?c.b[0].id:'',on:true});
  if(!c.wh||!c.w.some(function(w){return w.id===c.wh}))c.wh=c.w[0].id;
  CO=c;return c}
function saveCo(){wr(K.co,CO)}
var ST=null;function st(){if(!ST)ST=rd(K.st,{});return ST}function saveSt(){wr(K.st,ST)}
var Q=null;function q(){if(!Q){Q=rd(K.q,{});if(!Array.isArray(Q.mv))Q.mv=[];if(!Q.cat||typeof Q.cat!=='object')Q.cat={};if(!Q.sales||typeof Q.sales!=='object')Q.sales={}}return Q}function saveQ(){wr(K.q,Q)}
var SEEN=null;function seen(){if(!SEEN){SEEN=rd(K.seen,{});SEEN.cat=SEEN.cat||{};SEEN.sales=SEEN.sales||{}}return SEEN}function saveSeen(){wr(K.seen,SEEN)}
var CAT=null;function cat(){if(!CAT)CAT=rd(K.cat,{});return CAT}function saveCat(){wr(K.cat,CAT)}
function cloud(){var c=co();return c.cloud&&c.cloud.token?c.cloud:null}
function W(id){return co().w.find(function(w){return w.id===id})}
function B(id){return co().b.find(function(b){return b.id===id})}
function wName(id){var w=W(id);return w?w.n:'مخزن محذوف'}
function bName(id){var b=B(id);return b?b.n:(id?'فرع محذوف':'بدون فرع محدد')}
function activeWs(){return co().w.filter(function(w){return w.on!==false})}
function myBranch(){var c=co(),cl=cloud();if(cl&&cl.b)return cl.b;var w=W(c.wh);return w?w.b:''}
function byUid(uid){return prods().find(function(p){return p&&p.uid===uid})}
function nameOf(uid){var p=byUid(uid);if(p)return p.name;var x=cat()[uid];return x?x.n:'منتج'}

/* ===== السجل والحركات ===== */
var KIND={app:['🛒','بيع أو تعديل في التطبيق'],init:['📥','رصيد افتتاحي'],tr_out:['📤','تحويل صادر'],tr_in:['📥','تحويل وارد'],recv:['🚚','استلام بضاعة'],count:['📋','جرد وتعديل'],sale:['🛒','بيع']};
function addMove(w,uid,d,k,extra){d=r3(d);if(!d)return null;var m={id:uuid(),w:w,u:uid,d:d,k:k,at:new Date().toISOString(),by:(who()||{}).name||''};if(extra)for(var x in extra)m[x]=extra[x];
  var L=logs();L.unshift({id:m.id,w:w,u:uid,n:nameOf(uid),d:d,k:k,at:m.at,by:m.by,ref:m.ref||'',note:m.note||''});if(L.length>400)L.length=400;
  if(cloud()){q().mv.push(m);soon()}flushLater();return m}
var LOGC=null,flT=null;function logs(){if(!LOGC)LOGC=rd(K.log,[]);return LOGC}
function flushLater(){if(flT)return;flT=setTimeout(function(){flT=null;wr(K.log,logs());if(Q)saveQ()},0)}
/* تغيير كمية مخزن مباشرة (من شاشات هذه النافذة) */
function change(w,uid,d,k,extra){d=r3(d);if(!d)return;var S=st(),m=S[w]||(S[w]={});m[uid]=r3((m[uid]||0)+d);
  if(w===co().wh){var p=byUid(uid);if(p){p.stock=m[uid];if(p.actual!=null)p.actual=p.stock;p.updatedAt=new Date().toISOString()}}
  saveSt();addMove(w,uid,d,k,extra)}
function qty(w,uid){var m=st()[w];return m&&m[uid]!=null?m[uid]:0}

/* ===== المراقبة: أي تغيير في كمية المنتج داخل التطبيق يصير حركة على مخزن هذا الجهاز ===== */
function sig(p){var im=String(p.image||'');return [p.name,priceOf(p),num(p.cost),p.category||'',p.sku||'',p.barcode||'',im.length+':'+im.slice(-24),p.minStock==null?'':num(p.minStock)].join('|')}
function catRow(p,i){var im=String(p.image||'');if(im.length>110000)im='';return {uid:p.uid,n:String(p.name).trim(),p:priceOf(p),c:num(p.cost),cat:p.category||'',sku:p.sku||'',bc:p.barcode||'',img:im||null,sk:storeKey(p,i),min:p.minStock==null?null:num(p.minStock)}}
function watch(){var c=co(),w=c.wh,L=prods(),S=st(),m=S[w]||(S[w]={}),dirty=false,chg=false,cl=cloud(),SN=seen(),qq=cl?q():null,qd=false;
  for(var i=0;i<L.length;i++){var p=L[i];if(!p||!String(p.name||'').trim())continue;
    if(!p.uid){var k=norm(p.name),hit=null;for(var u in m){if(!byUid(u)&&norm(nameOf(u))===k){hit=u;break}}p.uid=hit||newUid();dirty=true}
    var v=r3(num(p.stock)),pv=m[p.uid];
    if(pv===undefined){m[p.uid]=v;chg=true;if(v)addMove(w,p.uid,v,'init')}
    else if(Math.abs(v-pv)>1e-9){m[p.uid]=v;chg=true;addMove(w,p.uid,v-pv,'app')}
    if(cl){var s=sig(p);if(SN.cat[p.uid]!==s){SN.cat[p.uid]=s;qq.cat[p.uid]=catRow(p,i);qd=true}}}
  if(dirty)persist();if(chg)saveSt();if(qd){saveSeen();saveQ();soon()}}
var salesAt=0;
function saleRow(s){var DV=window.EMDDirectV113,pay={},cost=0;(s.payments||[]).forEach(function(x){var k=/^(cash|card|transfer)$/.test(x.method)?x.method:'other';pay[k]=r3((pay[k]||0)+num(x.amount))});
  (s.items||[]).forEach(function(i){cost+=num(i.cost)*num(i.qty)});
  return {sid:String(s.id),k:'pos',at:s.at,t:DV?DV.netTotal(s):num(s.total),pd:DV?DV.paidOf(s):num(s.total),cs:r3(cost),pay:pay,
    it:(s.items||[]).map(function(i){return {n:i.name,q:num(i.qty),v:num(i.net!=null?i.net:num(i.price)*num(i.qty))}}),by:s.by&&s.by.name||'',st:DV?DV.statusOf(s):'completed',cu:window.EMDLoyV434?EMDLoyV434.row(s):null}}
function orderRow(o){var M=window.EMDMoneyV75,t=0,pd=0;try{t=M?M.total(o):num(o.total);pd=M?M.paid(o):0}catch(e){t=num(o.total)}
  return {sid:'O'+String(o.id),k:'order',at:o.createdAt||o.date||new Date().toISOString(),t:r3(t),pd:r3(pd),cs:0,pay:{},it:[],by:'',st:String(o.status||'')}}
function watchSales(force){if(!cloud())return;if(!force&&Date.now()-salesAt<15000)return;salesAt=Date.now();var d=D()||{},SN=seen(),qq=q(),qd=false,lim=Date.now()-90*864e5;
  function put(r){if(!r.at||new Date(r.at).getTime()<lim)return;var h=JSON.stringify(r);h=h.length+':'+fnv(h);if(SN.sales[r.sid]!==h){SN.sales[r.sid]=h;qq.sales[r.sid]=r;qd=true}}
  (Array.isArray(d.directSales)?d.directSales.slice(-800):[]).forEach(function(s){try{put(saleRow(s))}catch(e){}});
  (Array.isArray(d.orders)?d.orders.slice(-800):[]).forEach(function(o){try{if(o&&o.id!=null)put(orderRow(o))}catch(e){}});
  if(qd){saveSeen();saveQ();soon()}}
function fnv(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return (h>>>0).toString(36)}

/* ===== السحابة ===== */
function ownerTok(){var a=window.EMDCloudV93&&window.EMDCloudV93.api;var ok=false;try{ok=!!(a&&a.uid())}catch(e){}if(!ok)return Promise.reject(Object.assign(new Error('login'),{code:'login'}));return a.token()}
function call(action,body,owner){if(RW.EMDPosH.coBlock(action))return Promise.reject(Object.assign(new Error('sandbox'),{code:'sandbox'}));body=body||{};body.action=action;var cl=cloud();if(cl&&!body.token)body.token=cl.token;
  return (owner?ownerTok():Promise.resolve('')).then(function(tk){return fetch(FN,{method:'POST',headers:{apikey:FNKEY,'Content-Type':'application/json','x-emd-token':tk||''},body:JSON.stringify(body)})})
  .then(function(r){return r.text().then(function(x){var j=null;try{j=x?JSON.parse(x):null}catch(e){}if(!r.ok||!j||!j.ok){var e=new Error((j&&j.error)||('HTTP '+r.status));e.code=(j&&j.error)||('http'+r.status);e.detail=(j&&j.detail)||'';e.status=r.status;throw e}return j})})}
function errMsg(e){var c=String(e&&e.code||''),m=String(e&&e.message||'');
  if(c==='sandbox')return '🧪 في التجربة لا يُرسل شيء إلى سحابة الشركة. جرّب الربط من تطبيقك بعد النشر.';
  if(c==='login'||c==='auth')return 'سجّل الدخول إلى حسابك أولًا من نافذة الحساب السحابي، ثم أعد المحاولة.';
  if(c==='bad_code')return 'رمز الربط غير صحيح أو انتهت صلاحيته. اطلب رمزًا جديدًا من جهاز المالك.';
  if(c==='device')return 'تم فصل هذا الجهاز عن الشركة من جهاز المالك.';
  if(c==='no_company')return 'لا توجد شركة مرتبطة بحسابك بعد.';
  if(c==='too_many')return 'توجد رموز ربط كثيرة غير مستخدمة. انتظر قليلًا ثم أعد المحاولة.';
  if(c==='http404')return 'خدمة السحابة المشتركة غير مفعّلة بعد.';
  if(c==='not_enough')return 'الكمية غير متوفرة في المخزن: '+(e.detail||'');
  if(c==='req_state')return 'تغيّرت حالة هذا الطلب من جهاز آخر، وتم تحديث القائمة.';
  if(c==='req_place')return 'تتم هذه الخطوة من جهاز المخزن المعني أو من جهاز المالك.';
  if(c==='bad_request')return 'بيانات الطلب غير صحيحة.';
  if(/Failed to fetch|NetworkError|Load failed/i.test(m))return 'لا يوجد اتصال بالإنترنت. ستتم المزامنة تلقائيًا عند عودة الاتصال.';
  return 'تعذّر إكمال العملية: '+m}
var busy=false,timer=null,lastErr='';
function soon(){clearTimeout(timer);timer=setTimeout(function(){sync()},2500)}
function applyStruct(s,fromOwner){var c=co();if(!s)return;c.name=s.name||c.name;c.storeWh=s.store_wh||'';if(s.px&&typeof s.px==='object'&&!Array.isArray(s.px)&&!(c.pxDirty&&cloud()&&cloud().owner))c.px=s.px;
  c.b=(s.b||[]).map(function(b){return {id:b.id,n:b.n,c:b.c||'',on:b.on!==false}});
  c.w=(s.w||[]).map(function(w){return {id:w.id,n:w.n,b:w.b||'',on:w.on!==false}});
  if(!c.w.length)c.w=[{id:c.wh,n:'المخزن الرئيسي',b:'',on:true}];
  var cl=cloud();if(cl&&!cl.owner&&s.staff&&typeof s.staff==='object'&&!Array.isArray(s.staff)){var cur=PLS.getItem('emd_v108_staff')||'',nx=JSON.stringify(s.staff);if(cur!==nx){PLS.setItem('emd_v108_staff',nx);staffChanged=true}}
  if(cl&&cl.owner)cl.staffSig=staffSig();
  saveCo()}
var staffChanged=false;
/* تبديل المخزن الذي يعمل عليه هذا الجهاز */
function setActive(w){var c=co();if(!W(w)||w===c.wh)return;watch();c.wh=w;saveCo();var m=st()[w]||{};
  prods().forEach(function(p){if(!p||!p.uid)return;p.stock=m[p.uid]!=null?m[p.uid]:0;if(p.actual!=null)p.actual=p.stock});
  var S=st();S[w]=m;prods().forEach(function(p){if(p&&p.uid&&m[p.uid]==null)m[p.uid]=0});saveSt();refreshUI()}
function applyCat(rows){if(!rows||!rows.length)return false;var C=cat(),SN=seen(),L=prods(),c=co(),m=st()[c.wh]||(st()[c.wh]={}),ch=false;
  rows.forEach(function(r){C[r.uid]=r;var p=byUid(r.uid);
    if(r.del){if(p){var i=L.indexOf(p);if(i>=0)L.splice(i,1);ch=true}return}
    if(!p){var k=norm(r.n);p=L.find(function(x){return x&&norm(x.name)===k&&(!x.uid||!C[x.uid]||x.uid===r.uid)});
      if(p){var old=p.uid;p.uid=r.uid;if(old&&old!==r.uid){Object.keys(st()).forEach(function(w){var mm=st()[w];if(mm[old]!=null&&w!==c.wh)delete mm[old]});delete m[old];var qq=q();qq.mv=qq.mv.filter(function(x){return x.u!==old});delete qq.cat[old]}
        m[r.uid]=qty(c.wh,r.uid);p.stock=m[r.uid]}
      else{p={name:r.n,stock:qty(c.wh,r.uid),uid:r.uid};m[r.uid]=p.stock;L.push(p)}}
    p.name=r.n;if(r.p!=null){var pr=num(r.p);if(p.salePrice!=null)p.salePrice=pr;if(p.unitPrice!=null)p.unitPrice=pr;p.price=pr}
    if(r.c!=null)p.cost=num(r.c);if(r.cat)p.category=r.cat;if(r.sku)p.sku=r.sku;if(r.bc)p.barcode=r.bc;if(r.img&&r.img!==p.image)p.image=r.img;if(r.min!=null)p.minStock=num(r.min);
    SN.cat[r.uid]=sig(p);ch=true});
  saveCat();saveSeen();saveSt();return ch}
function applyStock(rows){if(!rows||!rows.length)return false;var S=st(),c=co(),pend={},ch=false;q().mv.forEach(function(x){var k=x.w+'|'+x.u;pend[k]=(pend[k]||0)+x.d});
  rows.forEach(function(r){var w=r[0],u=r[1],v=r3(num(r[2])+(pend[w+'|'+u]||0)),m=S[w]||(S[w]={});m[u]=v;
    if(w===c.wh){var p=byUid(u);if(p&&r3(num(p.stock))!==v){p.stock=v;if(p.actual!=null)p.actual=v;ch=true}}});
  saveSt();return ch}
function sync(manual){var cl=cloud();if(!cl||busy)return Promise.resolve(false);if(!navigator.onLine&&!manual)return Promise.resolve(false);
  watch();watchSales(manual);busy=true;var qq=q(),first=!cl.rev;
  var mv=first?[]:qq.mv.slice(0,1500),cs=first?[]:Object.keys(qq.cat).slice(0,400).map(function(k){return qq.cat[k]}),ss=first?[]:Object.keys(qq.sales).slice(0,400).map(function(k){return qq.sales[k]});
  var p=(cl.owner&&(cl.staffSig!==staffSig()||co().pxDirty)&&!first)?pushStruct().catch(function(){}):Promise.resolve();
  return p.then(function(){return call('sync',{since:first?0:Math.max(0,(cl.rev||0)-200),mv:mv,cat:cs,sales:ss,wh:co().wh,branch:myBranch()||null})}).then(function(r){
    var ids={};mv.forEach(function(x){ids[x.id]=1});qq.mv=qq.mv.filter(function(x){return !ids[x.id]});
    cs.forEach(function(x){if(qq.cat[x.uid]===x)delete qq.cat[x.uid]});ss.forEach(function(x){if(qq.sales[x.sid]===x)delete qq.sales[x.sid]});saveQ();
    var c=co();if(r.struct)applyStruct(r.struct);
    if(r.device&&!cl.owner){cl.b=r.device.b||'';if(r.device.w&&r.device.w!==c.wh&&W(r.device.w)){setActive(r.device.w)}}
    var a=applyCat(r.cat),b=applyStock(r.st);if(r.rq)setRq(r.rq);if(r.po)setPos(r.po);cl.rev=r.rev;cl.at=Date.now();lastErr='';cl.err='';
    if(first)adoptLeftovers();
    saveCo();busy=false;if(a||b)refreshUI();else persist();
    if(staffChanged){staffChanged=false;try{if(!window.EMDStaffV108.who())document.body.click()}catch(e){}}
    if(qq.mv.length||Object.keys(qq.cat).length||Object.keys(qq.sales).length)soon();
    paintIfOpen();chip();return true})
  .catch(function(e){busy=false;lastErr=errMsg(e);var c=co();if(c.cloud){c.cloud.err=lastErr;if(e.code==='device'){c.cloud.revoked=true}saveCo()}paintIfOpen();chip();if(manual)toast(lastErr);return false})}
/* بعد أول مزامنة: المنتجات الموجودة على هذا الجهاز فقط تُضاف إلى كتالوج الشركة بكمياتها */
function adoptLeftovers(){var C=cat(),c=co(),qq=q(),SN=seen();prods().forEach(function(p,i){if(!p||!p.uid||C[p.uid])return;qq.cat[p.uid]=catRow(p,i);SN.cat[p.uid]=sig(p);var v=r3(num(p.stock));if(v)qq.mv.push({id:uuid(),w:c.wh,u:p.uid,d:v,k:'init',at:new Date().toISOString(),by:(who()||{}).name||''})});saveQ();saveSeen();watchSales(true)}
function staffSig(){var s=PLS.getItem('emd_v108_staff')||'';return s.length+':'+fnv(s)}
function staffObj(){var s=rd('emd_v108_staff',{});return s&&typeof s==='object'?s:{}}
function pushStruct(){var c=co(),cl=cloud();if(!cl||!cl.owner)return Promise.resolve();var sg=staffSig();
  var ds=c.pxDirty;return call('struct',{name:c.name,b:c.b,w:c.w,store_wh:c.storeWh||null,staff:staffObj(),px:pxObj()},true).then(function(r){cl.staffSig=sg;if(c.pxDirty===ds)c.pxDirty=0;saveCo();return r})}
function initialQueue(){var c=co(),qq=q(),SN=seen(),S=st(),at=new Date().toISOString(),by=(who()||{}).name||'';qq.mv=[];qq.cat={};qq.sales={};SN.sales={};
  prods().forEach(function(p,i){if(p&&p.uid){qq.cat[p.uid]=catRow(p,i);SN.cat[p.uid]=sig(p)}});
  Object.keys(S).forEach(function(w){if(!W(w))return;var m=S[w];Object.keys(m).forEach(function(u){if(m[u])qq.mv.push({id:uuid(),w:w,u:u,d:r3(m[u]),k:'init',at:at,by:by})})});
  saveQ();saveSeen();salesAt=0;watchSales(true)}
function activate(){var c=co();watch();
  return call('create',{name:c.name||bizName(),device:'جهاز المالك',branch:myBranch()||null,wh:c.wh},true).then(function(r){
    c.cloud={token:r.token,dev:r.device,owner:true,rev:0,at:0};
    if(r.fresh){if(!c.name)c.name=bizName();saveCo();return pushStruct().then(function(){initialQueue();c.cloud.rev=0;c.cloud.boot=1;saveCo();return syncBoot()})}
    applyStruct(r.struct);if(!W(c.wh))c.wh=c.w[0].id;q().mv=[];saveQ();saveCo();return sync(true)})}
/* أول مزامنة للمالك: نرسل كل شيء ثم نستقبل */
function syncBoot(){var cl=cloud();cl.rev=1;saveCo();return sync(true).then(function(){cl.boot=0;saveCo();return true})}
function join(code){var c=co();
  return call('join',{code:code,device:deviceName()}).then(function(r){
    q().mv=[];q().cat={};q().sales={};saveQ();SEEN={cat:{},sales:{}};saveSeen();CAT={};saveCat();
    c.cloud={token:r.token,dev:r.device,owner:false,rev:0,at:0,b:r.branch||''};applyStruct(r.struct);
    if(r.wh&&W(r.wh)){var keep=st()[c.wh]||{};ST={};ST[r.wh]=keep;c.wh=r.wh}else{c.wh=c.w[0].id;var k2=st()[c.wh]||{};ST={};ST[c.wh]=k2}
    saveSt();saveCo();try{if(mode()!=='company')window.EMDModesV416.set('company')}catch(e){}
    return sync(true)})}
function leave(){var c=co();c.cloud=null;saveCo();Q={mv:[],cat:{},sales:{}};saveQ();toast('تم فصل هذا الجهاز عن السحابة. بياناته المحلية باقية.');paint()}
function bizName(){try{var m=JSON.parse(PLS.getItem('emd_manager_profile_v41')||'null');if(m&&(m.business||m.shop||m.store))return m.business||m.shop||m.store}catch(e){}try{var s=rd('emd_store_v411',{});if(s.name)return s.name}catch(e){}return 'شركتي'}
function deviceName(){var u=navigator.userAgent||'';return /iPad|Tablet|Pad/i.test(u)?'جهاز لوحي':/Android|iPhone/i.test(u)?'هاتف':'حاسوب'}

/* ===== الواجهة ===== */
var ov=null,tab='home',fW='all',fQ='',lines=[],trMode='tr',trFrom='',trTo='',sugQ='',period='today',rep=null,repBusy=false,sub=null,linkCode=null,devs=null,limit=150;
function host(){if(ov)return ov;ov=document.createElement('div');ov.id='emd430';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.setAttribute('aria-label','الفروع والمخازن');
  ov.addEventListener('click',onClick);ov.addEventListener('input',onInput);ov.addEventListener('change',onChange);
  ov.addEventListener('keydown',function(e){if(e.key==='Escape'){if(sub){sub=null;paint()}else close()}});document.body.appendChild(ov);return ov}
function open(t){watch();tab=t||'home';dRep=null;fRep=null;sRep=null;sub=null;host();paint();ov.classList.add('show');document.body.classList.add('emd430-open');if(cloud())sync()}
function close(){if(!ov)return;ov.classList.remove('show');document.body.classList.remove('emd430-open');sub=null}
function poTot(){var e=$('e432tot');if(e)e.textContent=mf(poLines.reduce(function(s,l){return s+num(l.q)*num(l.c)},0))}
function paintIfOpen(){if(ov&&ov.classList.contains('show')){var a=document.activeElement,keep=a&&ov.contains(a)&&a.tagName==='INPUT';if(!keep)paint()}}
function tabs(){var T=[['home','🏢 نظرة عامة'],['stock','📦 المخزون'],['move','🔁 التحويل']];if(can('finance'))T.unshift(['dash','📈 لوحة المالك']);if(cloud()){var na=actionable().length;T.push(['req','📨 الطلبات'+(na?'<span class="bg">'+na+'</span>':'')])}if(can('finance'))T.push(['rep','📊 التقارير']);if(can('finance'))T.push(['fin','💰 الأرباح']);if(can('finance'))T.push(['emp','👤 الموظفون']);if(canBuy())T.push(['buy','🧾 المشتريات']);if(canPxSee())T.push(['px','🏷️ الأسعار والعروض']);if(canSetup())T.push(['set','⚙️ الإعداد']);return T}
function canSetup(){var cl=cloud();return isBoss()&&(!cl||cl.owner)}
function cloudPill(){var cl=cloud();if(!cl)return '<span class="pill"><i></i>على هذا الجهاز فقط</span>';if(cl.revoked)return '<span class="pill bad"><i></i>الجهاز مفصول</span>';
  var n=q().mv.length+Object.keys(q().cat).length;if(cl.err)return '<span class="pill warn"><i></i>غير متصل'+(n?' · '+n+' بانتظار الإرسال':'')+'</span>';
  return '<span class="pill ok"><i></i>متصل بالسحابة'+(cl.at?' · '+ago(cl.at):'')+'</span>'}
function ago(t){var s=Math.round((Date.now()-t)/1000);if(s<60)return 'الآن';if(s<3600)return 'قبل '+Math.round(s/60)+' د';return 'قبل '+Math.round(s/3600)+' س'}
function paint(){if(!ov)return;var c=co(),T=tabs();if(!T.some(function(x){return x[0]===tab}))tab='home';
  var h='<div class="w"><div class="hd"><div class="hr"><span class="mk">EMD</span><span class="tt"><b>الفروع والمخازن</b><small>'+esc(c.name||bizName())+' · '+esc(bName(myBranch()))+' · '+esc(wName(c.wh))+'</small></span><button type="button" class="x" data-a="close" aria-label="إغلاق">✕</button></div>'+
   '<div class="tabs" role="tablist">'+T.map(function(x){return '<button type="button" role="tab" data-tab="'+x[0]+'" class="'+(tab===x[0]?'on':'')+'" aria-selected="'+(tab===x[0])+'">'+x[1]+'</button>'}).join('')+'</div></div><div class="bd">';
  h+=tab==='home'?vHome():tab==='stock'?vStock():tab==='move'?vMove():tab==='req'?vReq():tab==='buy'?vBuy():tab==='dash'?vDash():tab==='fin'?vFin():tab==='emp'?vStaff():tab==='px'?vPx():tab==='rep'?vRep():vSet();
  h+='</div>'+(sub?vSub():'')+'</div>';var sc=ov.querySelector('.bd'),top=sc?sc.scrollTop:0;ov.innerHTML=h;var sc2=ov.querySelector('.bd');if(sc2&&!paint.reset)sc2.scrollTop=top;paint.reset=false;var tn=ov.querySelector('.tabs .on');if(tn&&tn.scrollIntoView)try{tn.scrollIntoView({block:'nearest',inline:'nearest'})}catch(e){}}
function totals(w){var m=st()[w]||{},n=0,u=0,v=0,low=0;prods().forEach(function(p){if(!p||!p.uid)return;var x=m[p.uid]||0;if(x>0){n++;u+=x;v+=x*num(p.cost)}var mn=p.minStock!=null?num(p.minStock):0;if(x<=mn&&(x>0||mn>0||x<0))low++});return {n:n,u:r3(u),v:r3(v),low:low}}
function vHome(){var c=co(),cl=cloud(),wh=activeWs(),all=0,val=0;wh.forEach(function(w){var t=totals(w.id);all+=t.u;val+=t.v});var me=who();
  var h='<div class="cd hero"><div class="row"><b class="grow" style="font-size:16px">'+esc(c.name||bizName())+'</b>'+cloudPill()+'</div>'+
    '<div class="mut" style="margin-top:6px">هذا الجهاز يعمل في <b style="color:#fff">'+esc(bName(myBranch()))+'</b> على <b style="color:#fbbf24">'+esc(wName(c.wh))+'</b>'+(me?' · المستخدم: '+esc(me.name):'')+'</div>'+
    '<div class="kv"><div><b>'+c.b.filter(function(b){return b.on!==false}).length+'</b><small>فروع</small></div><div><b>'+wh.length+'</b><small>مخازن</small></div><div><b>'+qf(all)+'</b><small>قطعة في المخازن</small></div></div>'+
    ((!cl||cl.owner)&&wh.length>1?'<div style="margin-top:10px"><button type="button" class="b3 bs" data-a="pickWh">تغيير مخزن هذا الجهاز</button></div>':'')+'</div>';
  var na=cl?actionable().length:0;if(na)h+='<button type="button" class="note" data-tab="req" style="width:100%;text-align:right;font:inherit;font-weight:800;margin-bottom:12px;cursor:pointer">📨 لديك '+na+(na===1?' طلب تحويل بانتظارك':' طلبات تحويل بانتظارك')+' ←</button>';
  h+='<div class="acts"><button type="button" data-a="goTr"><i>🔁</i>تحويل</button><button type="button" data-a="goRecv"><i>🚚</i>استلام</button><button type="button" data-tab="stock"><i>📦</i>المخزون</button>'+(can('finance')?'<button type="button" data-tab="rep"><i>📊</i>التقارير</button>':'<button type="button" data-a="switchUser"><i>👤</i>تبديل المستخدم</button>')+'</div><div style="height:12px"></div>';
  h+='<div class="cd"><h4>🏬 المخازن<em>'+(can('finance')?'قيمة المخزون: '+mf(val):'')+'</em></h4><div class="whs">'+wh.map(function(w){var t=totals(w.id);return '<div class="wh'+(w.id===c.wh?' cur':'')+'">'+(w.id===c.wh?'<span class="tg">هذا الجهاز</span>':'')+(w.id===c.storeWh?'<span class="tg" style="'+(w.id===c.wh?'top:34px;':'')+'background:#e0e7ff;color:#3730a3">المتجر الإلكتروني</span>':'')+
    '<b>'+esc(w.n)+'</b><div class="mut">'+esc(w.b?bName(w.b):'يزوّد جميع الفروع')+'</div><div class="nums"><span><b>'+t.n+'</b>منتج</span><span><b>'+qf(t.u)+'</b>قطعة</span><span class="'+(t.low?'low':'')+'"><b>'+t.low+'</b>منخفض</span></div></div>'}).join('')+'</div></div>';
  h+=vCloudCard();
  var L=logs().slice(0,6);h+='<div class="cd"><h4>🕘 آخر الحركات<em><button type="button" class="b3 bs" data-a="goLog">عرض الكل</button></em></h4>'+(L.length?logHtml(L):'<div class="empty">لا توجد حركات بعد</div>')+'</div>';
  return h}
function vCloudCard(){var cl=cloud();
  if(!cl){if(!isBoss())return '';
    return '<div class="cd"><h4>☁️ السحابة المشتركة</h4><div class="mut">اربط جميع أجهزة الشركة معًا: يرى كل فرع مخزونه ويبيع منه، وتتابع أنت جميع الفروع والمخازن والتقارير من جهازك. تعمل الأجهزة دون إنترنت، وتتم المزامنة عند عودة الاتصال.</div>'+
     '<div class="row" style="margin-top:12px"><button type="button" class="b1" data-a="activate">تفعيل السحابة لشركتي</button><button type="button" class="b3" data-a="joinAsk">لديّ رمز ربط من المالك</button></div></div>'}
  var n=q().mv.length+Object.keys(q().cat).length+Object.keys(q().sales).length;
  return '<div class="cd"><h4>☁️ المزامنة<em>'+cloudPill()+'</em></h4>'+(cl.err?'<div class="note" style="margin-bottom:10px">'+esc(cl.err)+'</div>':'')+
   '<div class="mut">'+(n?n+' عملية بانتظار الإرسال. ':'جميع العمليات مُرسلة. ')+'تتم المزامنة تلقائيًا كل نصف دقيقة.</div><div class="row" style="margin-top:10px"><button type="button" class="b2 bs" data-a="syncNow">مزامنة الآن</button>'+
   (cl.owner?'<button type="button" class="b3 bs" data-a="goDevices">أجهزة الشركة</button>':'<button type="button" class="b3 bs" data-a="leave">فصل هذا الجهاز</button>')+'</div></div>'}
function logHtml(L){return '<div class="lg">'+L.map(function(x){var k=KIND[x.k]||['•',x.k];return '<div class="it"><span class="ic">'+k[0]+'</span><span class="grow"><b>'+esc(x.n||nameOf(x.u))+'</b> <span class="'+(x.d>0?'pos':'neg')+'">'+(x.d>0?'+':'')+qf(x.d)+'</span><small>'+k[1]+' · '+esc(wName(x.w))+(x.by?' · '+esc(x.by):'')+(x.dev?' · '+esc(x.dev):'')+' · '+tm(x.at)+(x.note?' · '+esc(x.note):'')+'</small></span></div>'}).join('')+'</div>'}
function tm(t){try{var d=new Date(t);return d.toLocaleDateString('ar-OM',{day:'numeric',month:'short'})+' '+d.toLocaleTimeString('ar-OM',{hour:'2-digit',minute:'2-digit'})}catch(e){return ''}}
function vStock(){var c=co(),ws=activeWs(),k=norm(fQ),L=prods().filter(function(p){return p&&p.uid&&String(p.name||'').trim()&&(!k||norm(p.name).indexOf(k)>=0||String(p.barcode||'').indexOf(fQ.trim())===0||norm(p.sku).indexOf(k)===0)});
  var rows=L.map(function(p){var per=ws.map(function(w){return qty(w.id,p.uid)}),tot=per.reduce(function(a,b){return a+b},0);return {p:p,per:per,tot:fW==='all'?tot:qty(fW,p.uid)}});
  rows.sort(function(a,b){return a.tot-b.tot});
  var h='<div class="cd"><input type="search" data-in="fQ" value="'+esc(fQ)+'" placeholder="ابحث باسم المنتج أو الباركود" aria-label="بحث"><div class="chips" style="margin-top:10px"><button type="button" data-fw="all" class="'+(fW==='all'?'on':'')+'">جميع المخازن</button>'+ws.map(function(w){return '<button type="button" data-fw="'+w.id+'" class="'+(fW===w.id?'on':'')+'">'+esc(w.n)+'</button>'}).join('')+'</div></div>';
  h+='<div class="cd"><h4>📦 '+rows.length+' منتج<em>الأقل كمية أولًا</em></h4>'+(rows.length?rows.slice(0,limit).map(function(r){return '<div class="pr" data-p="'+esc(r.p.uid)+'"><span class="nm"><b>'+esc(r.p.name)+'</b><span class="qs">'+ws.map(function(w,i){return '<span class="'+(r.per[i]<=0?'z':'')+'">'+esc(w.n)+': '+qf(r.per[i])+'</span>'}).join('')+'</span></span><span class="tot">'+qf(r.tot)+'<small>'+(fW==='all'?'الإجمالي':esc(wName(fW)))+'</small></span></div>'}).join('')+(rows.length>limit?'<div style="text-align:center;margin-top:10px"><button type="button" class="b3 bs" data-a="more">عرض المزيد</button></div>':''):'<div class="empty">لا توجد منتجات مطابقة</div>')+'</div>';
  return h}
function vMove(){var c=co(),ws=activeWs();if(!trFrom||!W(trFrom))trFrom=c.wh;if(!trTo||!W(trTo)||trTo===trFrom){var o=ws.find(function(w){return w.id!==trFrom});trTo=o?o.id:''}
  if(trMode==='req'){if(!cloud())trMode='tr';else if(trFrom===c.wh){var o2=ws.find(function(w){return w.id!==c.wh});trFrom=o2?o2.id:trFrom}}
  var allowed=trMode==='req'||can('transfer')||can('products');
  var h='<div class="cd"><div class="chips">'+(cloud()?'<button type="button" data-tm="req" class="'+(trMode==='req'?'on':'')+'">📨 طلب بضاعة من مخزن آخر</button>':'')+'<button type="button" data-tm="tr" class="'+(trMode==='tr'?'on':'')+'">🔁 تحويل بين مخزنين</button><button type="button" data-tm="recv" class="'+(trMode==='recv'?'on':'')+'">🚚 استلام بضاعة جديدة</button></div>';
  if(!allowed)return h+'<div class="note" style="margin-top:12px">ليست لديك صلاحية تحويل المخزون. اطلبها من المالك.</div></div>';
  if(trMode==='tr'&&ws.length<2)return h+'<div class="note" style="margin-top:12px">أضف مخزنًا ثانيًا من تبويب «الإعداد» لتتمكن من التحويل.</div></div>';
  var opt=function(sel,ex){return ws.filter(function(w){return w.id!==ex}).map(function(w){return '<option value="'+w.id+'"'+(w.id===sel?' selected':'')+'>'+esc(w.n)+'</option>'}).join('')};
  if(trMode==='req')h+='<div class="two" style="margin-top:12px"><div><label class="f">اطلب من مخزن</label><select data-in="trFrom">'+opt(trFrom,c.wh)+'</select></div><div><label class="f">إلى مخزنك</label><input value="'+esc(wName(c.wh))+'" disabled></div></div><div class="mut" style="margin-top:6px">يصل الطلب إلى جهاز ذلك المخزن، فيوافق ويرسل، ثم تؤكد أنت الاستلام.</div>';
  else h+='<div class="two" style="margin-top:12px">'+(trMode==='tr'?'<div><label class="f">من مخزن</label><select data-in="trFrom">'+opt(trFrom)+'</select></div><div><label class="f">إلى مخزن</label><select data-in="trTo">'+opt(trTo,trFrom)+'</select></div>':'<div style="grid-column:1/-1"><label class="f">إلى مخزن</label><select data-in="trFrom">'+opt(trFrom)+'</select></div>')+'</div>';
  h+='<label class="f" style="margin-top:12px">أضف منتجًا</label><input type="search" data-in="sugQ" value="'+esc(sugQ)+'" placeholder="اكتب اسم المنتج أو امسح الباركود" autocomplete="off"><div id="e430sug">'+sugHtml()+'</div>';
  h+='<div style="margin-top:12px">'+(lines.length?lines.map(function(l,i){return '<div class="ln"><span class="nm">'+esc(nameOf(l.u))+'<small>'+(trMode==='req'?'لديك: '+qf(qty(c.wh,l.u))+' · لديهم: '+qf(qty(trFrom,l.u)):trMode==='tr'?'المتوفر في '+esc(wName(trFrom))+': '+qf(qty(trFrom,l.u)):'الحالي: '+qf(qty(trFrom,l.u)))+'</small></span><input inputmode="decimal" data-ln="'+i+'" value="'+esc(l.q)+'" aria-label="الكمية"><button type="button" class="del" data-dl="'+i+'" aria-label="حذف">✕</button></div>'}).join(''):'<div class="empty">لم تُضف منتجات بعد</div>')+'</div>';
  h+='<input data-in="trNote" placeholder="ملاحظة (اختياري)" style="margin-top:6px" value="'+esc(trNote)+'"><div style="margin-top:12px"><button type="button" class="b1" style="width:100%" data-a="doMove"'+(lines.length?'':' disabled')+'>'+(trMode==='req'?'إرسال الطلب':trMode==='tr'?'تنفيذ التحويل':'تسجيل الاستلام')+'</button></div></div>';
  var L=logs().filter(function(x){return x.k==='tr_in'||x.k==='recv'}).slice(0,8);
  h+='<div class="cd"><h4>🕘 آخر التحويلات والاستلامات</h4>'+(L.length?logHtml(L):'<div class="empty">لا يوجد بعد</div>')+'</div>';return h}
var trNote='';
function sugHtml(){var k=norm(sugQ);if(!k)return '';var L=prods().filter(function(p){return p&&p.uid&&(norm(p.name).indexOf(k)>=0||String(p.barcode||'')===sugQ.trim())}).slice(0,6);
  return L.length?'<div class="sug">'+L.map(function(p){return '<button type="button" data-add="'+esc(p.uid)+'"><span>'+esc(p.name)+'</span><small>'+qf(qty(trFrom,p.uid))+' في '+esc(wName(trFrom))+'</small></button>'}).join('')+'</div>':'<div class="mut" style="margin-top:6px">لا توجد نتائج</div>'}
function vRep(){var h='<div class="cd"><div class="chips">'+[['today','اليوم'],['7','آخر 7 أيام'],['30','آخر 30 يومًا'],['month','هذا الشهر']].map(function(x){return '<button type="button" data-per="'+x[0]+'" class="'+(period===x[0]?'on':'')+'">'+x[1]+'</button>'}).join('')+'</div>'+(cloud()?'':'<div class="mut" style="margin-top:8px">التقرير من مبيعات هذا الجهاز. فعّل السحابة المشتركة لترى جميع الفروع.</div>')+'</div>';
  if(!rep||rep.per!==period){loadRep();return h+'<div class="empty">جارٍ تجهيز التقرير…</div>'}
  if(rep.err)return h+'<div class="note">'+esc(rep.err)+'</div>';
  var bs=rep.branches||[],T={t:0,n:0,cs:0,ot:0,o:0,due:0};bs.forEach(function(b){T.t+=num(b.t);T.n+=num(b.n);T.cs+=num(b.cs);T.ot+=num(b.ot);T.o+=num(b.o);T.due+=num(b.due)});
  h+='<div class="sum4"><div class="st"><small>مبيعات الفروع</small><b>'+mf(T.t)+'</b></div><div class="st"><small>عدد الفواتير</small><b>'+T.n+'</b></div><div class="st"><small>متوسط الفاتورة</small><b>'+mf(T.n?T.t/T.n:0)+'</b></div><div class="st"><small>الربح التقديري</small><b>'+mf(T.t-T.cs)+'</b></div></div><div style="height:12px"></div>';
  var mx=Math.max.apply(null,bs.map(function(b){return num(b.t)+num(b.ot)}).concat([1]));
  h+='<div class="cd"><h4>🏬 حسب الفرع</h4>'+(bs.length?bs.sort(function(a,b){return num(b.t)-num(a.t)}).map(function(b){var top=(rep.top||[]).filter(function(x){return (x.b||'')===(b.b||'')}).slice(0,3);
    return '<div class="brc"><div class="top"><b>'+esc(bName(b.b))+'</b><span>'+mf(b.t)+'</span></div><div class="bar"><i style="width:'+Math.max(3,Math.round((num(b.t)+num(b.ot))/mx*100))+'%"></i></div>'+
     '<div class="mini"><span>'+num(b.n)+' فاتورة</span>'+(num(b.cash)?'<span>💵 نقدًا '+mf(b.cash)+'</span>':'')+(num(b.card)?'<span>💳 بطاقة '+mf(b.card)+'</span>':'')+(num(b.tr)?'<span>🏦 تحويل '+mf(b.tr)+'</span>':'')+(num(b.oth)?'<span>🔁 أخرى '+mf(b.oth)+'</span>':'')+(num(b.due)?'<span style="color:#b45309">⏳ آجل '+mf(b.due)+'</span>':'')+(num(b.o)?'<span>🛍️ طلبات أونلاين: '+num(b.o)+' · '+mf(b.ot)+'</span>':'')+'</div>'+
     (top.length?'<div class="mut" style="margin-top:8px">الأكثر مبيعًا: '+top.map(function(x){return esc(x.n)+' ('+qf(x.q)+')'}).join('، ')+'</div>':'')+'</div>'}).join(''):'<div class="empty">لا توجد مبيعات في هذه الفترة</div>')+'</div>';
  var ws=activeWs();h+='<div class="cd"><h4>📦 قيمة المخزون بسعر التكلفة</h4>'+ws.map(function(w){var t=totals(w.id);return '<div class="pr" style="cursor:default"><span class="nm"><b>'+esc(w.n)+'</b><span class="mut">'+t.n+' منتج · '+qf(t.u)+' قطعة'+(t.low?' · <span style="color:#b45309">'+t.low+' منخفض</span>':'')+'</span></span><span class="tot" style="font-size:14px">'+mf(t.v)+'</span></div>'}).join('')+'</div>';
  return h}
function range(){var a=new Date();a.setHours(0,0,0,0);var b=new Date(a.getTime()+864e5);if(period==='7')a=new Date(a.getTime()-6*864e5);else if(period==='30')a=new Date(a.getTime()-29*864e5);else if(period==='month')a.setDate(1);return [a,b]}
function loadRep(){if(repBusy)return;var r=range(),per=period;
  if(!cloud()){rep=localRep(r[0],r[1]);rep.per=per;return}
  repBusy=true;watchSales(true);sync().then(function(){return call('report',{from:r[0].toISOString(),to:r[1].toISOString()})}).then(function(j){repBusy=false;j.per=per;rep=j;paintIfOpen()}).catch(function(e){repBusy=false;rep=localRep(r[0],r[1]);rep.per=per;rep.offline=true;paintIfOpen()})}
function localRep(a,b){var d=D()||{},br=myBranch(),x={b:br,n:0,t:0,cs:0,cash:0,card:0,tr:0,oth:0,due:0,o:0,ot:0},top={};
  (d.directSales||[]).forEach(function(s){var t=new Date(s.at);if(!(t>=a&&t<b))return;var r=saleRow(s);if(r.st==='void')return;x.n++;x.t+=r.t;x.cs+=r.cs;x.due+=Math.max(0,r.t-r.pd);x.cash+=r.pay.cash||0;x.card+=r.pay.card||0;x.tr+=r.pay.transfer||0;x.oth+=r.pay.other||0;r.it.forEach(function(i){var o=top[i.n]||(top[i.n]={b:br,n:i.n,q:0,v:0});o.q+=i.q;o.v+=i.v})});
  (d.orders||[]).forEach(function(o){var t=new Date(o.createdAt||o.date);if(!(t>=a&&t<b)||/cancel/.test(o.status||''))return;x.o++;x.ot+=orderRow(o).t});
  return {branches:x.n||x.o?[x]:[],top:Object.keys(top).map(function(k){return top[k]}).sort(function(a,b){return b.v-a.v})}}
function vSet(){var c=co(),cl=cloud(),S=staffObj(),list=Array.isArray(S.staff)?S.staff:[],bopt=function(sel,all){return '<option value="">'+(all||'يزوّد جميع الفروع')+'</option>'+c.b.map(function(b){return '<option value="'+b.id+'"'+(b.id===sel?' selected':'')+'>'+esc(b.n)+'</option>'}).join('')};
  var h='<div class="cd"><h4>🏢 اسم الشركة</h4><input data-in="coName" value="'+esc(c.name||'')+'" placeholder="'+esc(bizName())+'"></div>';
  h+='<div class="cd"><h4>🏬 الفروع<em><button type="button" class="b3 bs" data-a="addB">+ فرع</button></em></h4>'+(c.b.length?c.b.map(function(b,i){return '<div class="er" data-b="'+i+'"><input data-k="n" value="'+esc(b.n)+'" placeholder="اسم الفرع"><input data-k="c" value="'+esc(b.c||'')+'" placeholder="المدينة"><button type="button" class="del" data-a="delB" data-i="'+i+'" aria-label="حذف الفرع">✕</button></div>'}).join(''):'<div class="empty">لا توجد فروع بعد</div>')+'</div>';
  h+='<div class="cd"><h4>📦 المخازن<em><button type="button" class="b3 bs" data-a="addW">+ مخزن</button></em></h4>'+c.w.map(function(w,i){return '<div class="er" data-w="'+i+'"><input data-k="n" value="'+esc(w.n)+'" placeholder="اسم المخزن"><select data-k="b" aria-label="تابع لفرع">'+bopt(w.b)+'</select><button type="button" class="del" data-a="delW" data-i="'+i+'" aria-label="حذف المخزن">✕</button></div>'}).join('')+'<div class="mut">لا يُحذف مخزن فيه بضاعة، ولا مخزن هذا الجهاز.</div></div>';
  h+='<div class="cd"><h4>🛍️ مخزون المتجر الإلكتروني</h4><select data-in="storeWh"><option value="">مخزن هذا الجهاز ('+esc(wName(c.wh))+')</option>'+activeWs().map(function(w){return '<option value="'+w.id+'"'+(w.id===c.storeWh?' selected':'')+'>'+esc(w.n)+'</option>'}).join('')+'</select><div class="mut" style="margin-top:6px">تظهر في متجرك الإلكتروني كميات هذا المخزن'+(cl?'، وتتحدّث تلقائيًا مع كل مزامنة. أما الأسعار فتبقى بزر «تحديث أسعار المتجر».':' عند النشر.')+'</div></div>';
  h+='<div class="cd"><h4>👥 الموظفون وفروعهم<em><button type="button" class="b3 bs" data-a="staffOpen">إدارة الموظفين والرموز</button></em></h4>'+(S.enabled&&list.length?list.map(function(s,i){return '<div class="row" style="margin-bottom:6px"><span class="grow"><b>'+esc(s.name)+'</b>'+(s.active===false?' <span class="mut">(موقوف)</span>':'')+'</span><select data-sb="'+i+'" style="width:auto;min-width:150px" aria-label="فرع الموظف">'+bopt(s.branch||'','جميع الفروع')+'</select></div>'}).join('')+'<div class="mut">يظهر الموظف في شاشة الدخول على أجهزة فرعه فقط.</div>':'<div class="mut">أضف الموظفين ورموزهم السرية وصلاحياتهم من «إدارة الموظفين والرموز»، ثم حدّد فرع كل موظف هنا.</div>')+'</div>';
  if(cl)h+='<div class="cd" id="e430dev"><h4>📱 أجهزة الشركة<em><button type="button" class="b1 bs" data-a="linkAsk">+ ربط جهاز جديد</button></em></h4>'+devHtml()+'</div>';
  h+='<button type="button" class="b2" style="width:100%" data-a="saveSet">حفظ الإعداد</button>';return h}
function devHtml(){if(!devs){loadDevs();return '<div class="empty">جارٍ التحميل…</div>'}if(devs.err)return '<div class="note">'+esc(devs.err)+'</div>';
  return devs.list.map(function(d){return '<div class="pr" style="cursor:default"><span class="nm"><b>'+(d.owner?'👑 ':'📱 ')+esc(d.n||'جهاز')+'</b><span class="mut">'+esc(d.b?bName(d.b):'جميع الفروع')+' · '+esc(d.w?wName(d.w):'')+' · '+(d.seen?'آخر ظهور '+tm(d.seen):'لم يتصل بعد')+'</span></span>'+(d.id===cloud().dev?'<span class="pill ok">هذا الجهاز</span>':'<button type="button" class="b3 bs" data-rv="'+d.id+'">فصل</button>')+'</div>'}).join('')}
function loadDevs(){devs=null;call('devices',{},true).then(function(j){devs={list:j.devices};paintIfOpen()}).catch(function(e){devs={err:errMsg(e)};paintIfOpen()})}
function vSub(){var c=co(),h='<div class="sub2"><div class="sw" role="dialog" aria-modal="true">';
  if(sub.t==='p'){var p=byUid(sub.u);if(!p){sub=null;return ''}var ws=activeWs(),allowed=can('products');
    h+='<h3>'+esc(p.name)+'</h3><div class="mut">'+(p.barcode?'الباركود '+esc(p.barcode)+' · ':'')+'السعر '+mf(priceOf(p))+'</div><div style="margin-top:12px">'+ws.map(function(w){return '<div class="pr" style="cursor:default"><span class="nm"><b>'+esc(w.n)+'</b><span class="mut">'+esc(w.b?bName(w.b):'يزوّد جميع الفروع')+'</span></span>'+(allowed?'<input inputmode="decimal" data-cnt="'+w.id+'" value="'+qf(qty(w.id,p.uid))+'" style="width:84px;text-align:center" aria-label="الكمية في '+esc(w.n)+'">':'<span class="tot">'+qf(qty(w.id,p.uid))+'</span>')+'</div>'}).join('')+'</div>'+
     (allowed?'<div class="pr" style="cursor:default"><span class="nm"><b>حد التنبيه</b><span class="mut">يظهر المنتج في «النواقص» عندما تصل كميته في أي مخزن إلى هذا الحد</span></span><input inputmode="decimal" data-min="1" value="'+(p.minStock!=null?qf(p.minStock):'')+'" placeholder="0" style="width:84px;text-align:center" aria-label="حد التنبيه"></div><div class="mut" style="margin-top:6px">عدّل الكمية بعد الجرد ثم اضغط «حفظ الجرد». تُسجَّل الفروقات في السجل.</div>':'')+
     '<div class="row" style="margin-top:12px">'+(allowed?'<button type="button" class="b2 grow" data-a="saveCount">حفظ الجرد</button>':'')+'<button type="button" class="b1 grow" data-a="trThis">تحويل هذا المنتج</button><button type="button" class="b3" data-a="subClose">إغلاق</button></div>'+
     '<h4 style="margin:16px 0 6px">السجل</h4><div id="e430plog">'+plog(p.uid)+'</div>'}
  else if(sub.t==='join'){h+='<h3>ربط هذا الجهاز بشركة</h3><div class="mut">اطلب من المالك رمز الربط من: الفروع والمخازن ← الإعداد ← «ربط جهاز جديد». الرمز صالح لمدة 30 دقيقة ولمرة واحدة.</div><input data-in="joinCode" placeholder="مثال: 7F3A-91C2" style="margin-top:12px;direction:ltr;text-align:center;font-size:20px;letter-spacing:3px" autocomplete="off">'+
     '<div class="note" style="margin-top:10px">بعد الربط تُستبدل كميات المنتجات في هذا الجهاز بكميات مخزن الفرع، وتظهر منتجات الشركة كاملة. وأي منتج موجود هنا فقط يُضاف إلى منتجات الشركة.</div>'+
     '<div class="row" style="margin-top:12px"><button type="button" class="b1 grow" data-a="joinGo">ربط الجهاز</button><button type="button" class="b3" data-a="subClose">إلغاء</button></div>'}
  else if(sub.t==='link'){if(linkCode){h+='<h3>رمز ربط الجهاز</h3><div class="mut">على الجهاز الجديد: افتح EMD Business ← الفروع والمخازن ← «لديّ رمز ربط من المالك»، ثم اكتب هذا الرمز.</div><div class="code">'+esc(linkCode.slice(0,4)+'-'+linkCode.slice(4))+'</div><div class="mut" style="text-align:center">صالح لمدة 30 دقيقة ولجهاز واحد فقط</div><div class="row" style="margin-top:12px"><button type="button" class="b3 grow" data-a="subClose">تم</button></div>'}
    else{var bsel=sub.b||'',lws=activeWs().filter(function(w){return !bsel||!w.b||w.b===bsel}).sort(function(x,y){return (y.b===bsel&&bsel?1:0)-(x.b===bsel&&bsel?1:0)});if(!sub.w||!lws.some(function(w){return w.id===sub.w}))sub.w=lws[0]?lws[0].id:'';h+='<h3>ربط جهاز جديد</h3><div class="mut">اختر الفرع والمخزن الذي سيعمل عليه الجهاز الجديد.</div><div class="two" style="margin-top:12px"><div><label class="f">الفرع</label><select data-in="lkB"><option value="">بدون فرع محدد</option>'+c.b.map(function(b){return '<option value="'+b.id+'"'+(b.id===bsel?' selected':'')+'>'+esc(b.n)+'</option>'}).join('')+'</select></div><div><label class="f">المخزن</label><select data-in="lkW">'+lws.map(function(w){return '<option value="'+w.id+'"'+(w.id===sub.w?' selected':'')+'>'+esc(w.n)+'</option>'}).join('')+'</select></div></div>'+
      '<label class="f" style="margin-top:10px">اسم الجهاز</label><input data-in="lkN" value="'+esc(sub.n||'')+'" placeholder="مثال: نقطة بيع فرع صحار"><div class="row" style="margin-top:12px"><button type="button" class="b1 grow" data-a="linkGo">إنشاء رمز الربط</button><button type="button" class="b3" data-a="subClose">إلغاء</button></div>'}}
  else if(sub.t==='wh'){h+='<h3>مخزن هذا الجهاز</h3><div class="mut">تُعرض في شاشة المنتجات ونقطة البيع كميات المخزن الذي تختاره، ويُخصم منه البيع.</div><div style="margin-top:10px">'+activeWs().map(function(w){return '<button type="button" class="b3" style="width:100%;margin-bottom:6px;text-align:right'+(w.id===c.wh?';outline:2px solid #f59e0b':'')+'" data-sw="'+w.id+'">'+esc(w.n)+' <span class="mut">· '+esc(w.b?bName(w.b):'يزوّد جميع الفروع')+'</span></button>'}).join('')+'</div>'}
  else if(sub.t==='pxof'){h+=vPxSub()}
  else if(sub.t==='ponew'||sub.t==='porecv'||sub.t==='popay'){h+=vPoSub()}
  else if(sub.t==='rq'){var r=rqs().find(function(x){return x.id===sub.id});if(!r){sub=null;return ''}var op=sub.op;
    h+='<h3>'+(op==='send'?'إرسال الطلب ':op==='recv'?'تأكيد استلام ':'رفض الطلب ')+esc(r.ref)+'</h3><div class="mut">'+esc(wName(r.f))+' ← '+esc(wName(r.t))+(r.note?' · '+esc(r.note):'')+'</div><div style="margin-top:10px">'+
     (op==='reject'?'':r.l.map(function(l,i){var def=op==='send'?l.q:l.s;return '<div class="ln"><span class="nm">'+esc(l.n||nameOf(l.u))+'<small>'+(op==='send'?'مطلوب '+qf(l.q)+' · المتوفر لديك '+qf(qty(r.f,l.u)):'أُرسل '+qf(l.s))+'</small></span><input inputmode="decimal" data-rl="'+i+'" value="'+qf(Math.max(0,op==='send'?Math.min(def,Math.max(0,qty(r.f,l.u))):def))+'" aria-label="الكمية"><span></span></div>'}).join(''))+'</div>'+
     '<input data-in="rqNote" placeholder="'+(op==='reject'?'سبب الرفض (اختياري)':'ملاحظة (اختياري)')+'" style="margin-top:6px">'+
     (op==='recv'?'<div class="mut" style="margin-top:6px">إذا وصلت كمية أقل، اكتب الكمية الفعلية، ويُسجَّل الفرق نقصًا في الطلب.</div>':'')+
     '<div class="row" style="margin-top:12px"><button type="button" class="'+(op==='reject'?'b3':'b1')+' grow" data-a="rqGo"'+(op==='reject'?' style="background:#fee2e2;color:#991b1b"':'')+'>'+(op==='send'?'تأكيد الإرسال وخصم الكمية':op==='recv'?'تأكيد الاستلام':'رفض الطلب')+'</button><button type="button" class="b3" data-a="subClose">إلغاء</button></div>'}
  else if(sub.t==='log'){h+='<h3>سجل حركات المخزون</h3><div id="e430alog">'+(sub.rows?logHtml(sub.rows):'<div class="empty">جارٍ التحميل…</div>')+'</div><div class="row" style="margin-top:12px"><button type="button" class="b3 grow" data-a="subClose">إغلاق</button></div>'}
  return h+'</div></div>'}
function plog(uid){var L=logs().filter(function(x){return x.u===uid}).slice(0,12);if(cloud()&&!sub.rows){call('moves',{u:uid}).then(function(j){if(sub&&sub.u===uid){sub.rows=j.moves;var el=$('e430plog');if(el)el.innerHTML=j.moves.length?logHtml(j.moves.slice(0,20)):'<div class="empty">لا توجد حركات</div>'}}).catch(function(){})}
  if(sub.rows)L=sub.rows.slice(0,20);return L.length?logHtml(L):'<div class="empty">لا توجد حركات</div>'}

function collectSet(){if(!ov)return;var c=co();var nm=ov.querySelector('[data-in="coName"]');if(nm)c.name=nm.value.trim();
  [].forEach.call(ov.querySelectorAll('[data-b]'),function(r){var b=c.b[+r.getAttribute('data-b')];if(b){b.n=r.querySelector('[data-k="n"]').value.trim();b.c=r.querySelector('[data-k="c"]').value.trim()}});
  [].forEach.call(ov.querySelectorAll('[data-w]'),function(r){var w=c.w[+r.getAttribute('data-w')];if(w){w.n=r.querySelector('[data-k="n"]').value.trim();w.b=r.querySelector('[data-k="b"]').value}});
  var sw=ov.querySelector('[data-in="storeWh"]');if(sw)c.storeWh=sw.value}
function onInput(e){var t=e.target,k=t.getAttribute('data-in');if(pxInput(t,k))return;
  if(k==='fQ'){fQ=t.value;limit=150;var pos=t.selectionStart;paint();var n=ov.querySelector('[data-in="fQ"]');if(n){n.focus();try{n.setSelectionRange(pos,pos)}catch(x){}}return}
  if(k==='sugQ'){sugQ=t.value;var bc=prods().filter(function(p){return p&&p.uid&&p.barcode&&String(p.barcode)===sugQ.trim()});if(bc.length===1&&sugQ.trim().length>=6){addLine(bc[0].uid);return}var s=$('e430sug');if(s)s.innerHTML=sugHtml();return}
  if(k==='trNote'){trNote=t.value;return}
  if(k==='poQ'){poQ=t.value;var bc2=prods().filter(function(p){return p&&p.uid&&p.barcode&&String(p.barcode)===poQ.trim()});if(bc2.length===1&&poQ.trim().length>=6){poAdd(bc2[0].uid);return}var s2=$('e432sug');if(s2)s2.innerHTML=poSug();return}
  if(k&&k.indexOf('po_')===0){poF[k.slice(3)]=t.value;return}
  if(t.hasAttribute('data-pq')){var a1=poLines[+t.getAttribute('data-pq')];if(a1)a1.q=t.value;poTot();return}
  if(t.hasAttribute('data-pc')){var a2=poLines[+t.getAttribute('data-pc')];if(a2)a2.c=t.value;poTot();return}
  if(t.hasAttribute('data-ln')){var l=lines[+t.getAttribute('data-ln')];if(l)l.q=t.value}}
function onChange(e){var t=e.target,k=t.getAttribute('data-in');if(pxChange(t,k))return;
  if(k==='trFrom'){trFrom=t.value;paint();return}if(k==='trTo'){trTo=t.value;paint();return}
  if(k==='po_w'){poF.w=t.value;return}
  if(k==='lkB'){sub.b=t.value;sub.w='';var n=ov.querySelector('[data-in="lkN"]');if(n)sub.n=n.value;paint();return}if(k==='lkW'){sub.w=t.value;return}
  if(t.hasAttribute('data-sb')){var S=staffObj(),s=S.staff&&S.staff[+t.getAttribute('data-sb')];if(s){s.branch=t.value||'';wr('emd_v108_staff',S);toast('تم تحديد فرع '+s.name);if(cloud())soon()}}}
function addLine(uid){var l=lines.find(function(x){return x.u===uid});if(l)l.q=String(num(l.q)+1);else lines.push({u:uid,q:'1'});sugQ='';paint();var n=ov.querySelector('[data-in="sugQ"]');if(n)n.focus()}
function onClick(e){var t=e.target;
  if(t.classList&&t.classList.contains('sub2')){sub=null;pxF=null;paint();return}
  if(pxClick(t)||dashClick(t)||finClick(t)||staffClick(t))return;
  var tb=t.closest('[data-tab]');if(tb){tab=tb.getAttribute('data-tab');sub=null;paint.reset=true;if(tab==='rep')rep=null;if(tab==='dash')dRep=null;if(tab==='fin')fRep=null;if(tab==='emp')sRep=null;if(tab==='set')devs=null;paint();return}
  var fw=t.closest('[data-fw]');if(fw){fW=fw.getAttribute('data-fw');paint();return}
  var tmb=t.closest('[data-tm]');if(tmb){trMode=tmb.getAttribute('data-tm');paint();return}
  var pe=t.closest('[data-per]');if(pe){period=pe.getAttribute('data-per');rep=null;paint();return}
  var pr=t.closest('[data-p]');if(pr){sub={t:'p',u:pr.getAttribute('data-p')};paint();return}
  var ad=t.closest('[data-add]');if(ad){addLine(ad.getAttribute('data-add'));return}
  var dl=t.closest('[data-dl]');if(dl){lines.splice(+dl.getAttribute('data-dl'),1);paint();return}
  var sw=t.closest('[data-sw]');if(sw){setActive(sw.getAttribute('data-sw'));if(cloud()&&cloud().owner){pushStructSafe()}sub=null;paint();toast('هذا الجهاز يعمل الآن على '+wName(co().wh));return}
  var rv=t.closest('[data-rv]');if(rv){if(!confirm('فصل هذا الجهاز عن الشركة؟ لن يتمكن من المزامنة بعد ذلك.'))return;call('revoke',{id:rv.getAttribute('data-rv')},true).then(function(){toast('تم فصل الجهاز');loadDevs()}).catch(function(x){toast(errMsg(x))});return}
  var pa=t.closest('[data-poa]');if(pa){poAct(pa.getAttribute('data-poa'),pa.getAttribute('data-id'));return}
  var spx=t.closest('[data-sp]');if(spx){spF=spx.getAttribute('data-sp');paint();return}
  var pd=t.closest('[data-pd]');if(pd){poLines.splice(+pd.getAttribute('data-pd'),1);paint();return}
  var pad=t.closest('[data-poadd]');if(pad){poAdd(pad.getAttribute('data-poadd'));return}
  var ra=t.closest('[data-rqa]');if(ra){var op=ra.getAttribute('data-rqa'),id=ra.getAttribute('data-id');
    if(op==='cancel'){if(!confirm('إلغاء هذا الطلب؟'))return;reqCall({op:'cancel',id:id},'تم إلغاء الطلب');return}
    sub={t:'rq',id:id,op:op};paint();return}
  var a=t.closest('[data-a]');if(!a)return;var k=a.getAttribute('data-a');
  if(k==='close'){close();return}
  if(k==='subClose'){sub=null;linkCode=null;paint();return}
  if(k==='goTr'||k==='goRecv'){trMode=k==='goTr'?'tr':'recv';tab='move';paint.reset=true;paint();return}
  if(k==='goLog'){sub={t:'log',rows:cloud()?null:logs()};paint();if(cloud())call('moves',{}).then(function(j){if(sub&&sub.t==='log'){sub.rows=j.moves;paint()}}).catch(function(){if(sub&&sub.t==='log'){sub.rows=logs();paint()}});return}
  if(k==='goDevices'){tab='set';devs=null;paint();setTimeout(function(){var d=$('e430dev');if(d)d.scrollIntoView({block:'start'})},30);return}
  if(k==='switchUser'){close();try{sessionStorage.removeItem('emd_v108_who');location.reload()}catch(x){}return}
  if(k==='pickWh'){sub={t:'wh'};paint();return}
  if(k==='poNew'){openPoNew([]);return}
  if(k==='poGo'){poGo(a);return}
  if(k==='poRecvGo'){poRecvGo(a);return}
  if(k==='poPayGo'){poPayGo(a);return}
  if(k==='shBuy'){var miss=shortages().filter(function(x){return !x.src||!cloud()});openPoNew(miss.map(function(x){return {u:x.u,q:String(Math.max(1,Math.ceil((x.mn>0?x.mn*2:3)-x.q)))}}));return}
  if(k==='spAll'){spF='';paint();return}
  if(k==='newReq'){trMode='req';tab='move';lines=[];paint.reset=true;paint();return}
  if(k==='more'){limit+=300;paint();return}
  if(k==='syncNow'){sync(true).then(function(ok){if(ok)toast('✓ تمت المزامنة')});return}
  if(k==='leave'){if(confirm('فصل هذا الجهاز عن السحابة المشتركة؟ تبقى بياناته على الجهاز.'))leave();return}
  if(k==='activate'){if(!confirm('تفعيل السحابة المشتركة لشركتك؟ تُرفع الفروع والمخازن والمنتجات وكمياتها وملخص المبيعات إلى حسابك، لتتمكن أجهزة فروعك من الاتصال بها.'))return;a.disabled=true;a.textContent='جارٍ التفعيل…';
    activate().then(function(){toast('✓ تم تفعيل السحابة المشتركة');tab='set';devs=null;paint()}).catch(function(x){var c=co();if(c.cloud&&!c.cloud.rev){c.cloud=null;saveCo()}toast(errMsg(x));paint();if(x.code==='login'){try{window.EMDCloudV93.open()}catch(y){}}});return}
  if(k==='joinAsk'){sub={t:'join'};paint();setTimeout(function(){var n=ov.querySelector('[data-in="joinCode"]');if(n)n.focus()},30);return}
  if(k==='joinGo'){var cd=(ov.querySelector('[data-in="joinCode"]')||{}).value||'';if(cd.replace(/[^0-9a-z]/gi,'').length<8){toast('اكتب رمز الربط كاملًا (8 خانات)');return}a.disabled=true;a.textContent='جارٍ الربط…';
    join(cd).then(function(){sub=null;tab='home';paint();toast('✓ تم ربط الجهاز بـ'+(co().name||'الشركة'))}).catch(function(x){var c=co();if(c.cloud&&!c.cloud.at){c.cloud=null;saveCo()}toast(errMsg(x));a.disabled=false;a.textContent='ربط الجهاز'});return}
  if(k==='linkAsk'){linkCode=null;sub={t:'link',b:myBranch(),w:'',n:''};paint();return}
  if(k==='linkGo'){var lw=(ov.querySelector('[data-in="lkW"]')||{}).value||'',lb=(ov.querySelector('[data-in="lkB"]')||{}).value||'',ln=(ov.querySelector('[data-in="lkN"]')||{}).value||'';if(!lw){toast('اختر المخزن');return}a.disabled=true;
    pushStruct().then(function(){return call('link',{branch:lb||null,wh:lw,name:ln},true)}).then(function(j){linkCode=j.code;paint();loadDevs()}).catch(function(x){a.disabled=false;toast(errMsg(x))});return}
  if(k==='addB'||k==='addW'){collectSet();var c=co();if(k==='addB')c.b.push({id:uuid(),n:'',c:'',on:true});else c.w.push({id:uuid(),n:'',b:'',on:true});paint();var ins=ov.querySelectorAll(k==='addB'?'[data-b] [data-k="n"]':'[data-w] [data-k="n"]');if(ins.length)ins[ins.length-1].focus();return}
  if(k==='delB'||k==='delW'){collectSet();var c2=co(),i=+a.getAttribute('data-i');
    if(k==='delB'){var bid=c2.b[i]&&c2.b[i].id;c2.b.splice(i,1);c2.w.forEach(function(w){if(w.b===bid)w.b=''})}
    else{var w=c2.w[i];if(!w)return;if(w.id===c2.wh){toast('لا يمكن حذف مخزن هذا الجهاز. غيّر مخزن الجهاز أولًا.');return}var t2=totals(w.id);if(t2.u>0){toast('في هذا المخزن '+qf(t2.u)+' قطعة. حوّلها إلى مخزن آخر أولًا.');return}c2.w.splice(i,1)}paint();return}
  if(k==='staffOpen'){collectSet();saveCo();close();try{staff().open()}catch(x){toast('نافذة الموظفين غير متاحة')}return}
  if(k==='saveSet'){collectSet();var c3=co();c3.b=c3.b.filter(function(b){return b.n});c3.w=c3.w.filter(function(w){return w.n});if(!c3.w.length){toast('أضف مخزنًا واحدًا على الأقل');return}if(!W(c3.wh))c3.wh=c3.w[0].id;saveCo();
    if(cloud()){a.disabled=true;pushStruct().then(function(){toast('✓ تم حفظ الإعداد وإرساله إلى جميع الأجهزة');devs=null;paint()}).catch(function(x){toast(errMsg(x));paint()})}else{toast('✓ تم حفظ الإعداد');paint()}return}
  if(k==='doMove'){doMove();return}
  if(k==='rqGo'){rqGo(a);return}
  if(k==='shGo'){shGo(a);return}
  if(k==='saveCount'){var p=byUid(sub.u),n=0,mi=ov.querySelector('[data-min]');if(mi){var mv=String(mi.value).trim()===''?null:r3(num(mi.value));if((p.minStock==null?null:num(p.minStock))!==mv){if(mv==null)delete p.minStock;else p.minStock=mv;n++}}[].forEach.call(ov.querySelectorAll('[data-cnt]'),function(inp){var w=inp.getAttribute('data-cnt'),v=r3(num(inp.value)),d=r3(v-qty(w,p.uid));if(d){change(w,p.uid,d,'count');n++}});
    if(n){refreshUI();toast('✓ تم الحفظ')}else toast('لا توجد فروقات');sub=null;paint();return}
  if(k==='trThis'){var u=sub.u;sub=null;trMode='tr';tab='move';lines=[{u:u,q:'1'}];paint.reset=true;paint();return}}
function pushStructSafe(){pushStruct().catch(function(e){toast(errMsg(e))})}
function doMove(){var c=co();if(!lines.length)return;var bad=[],ok=[];
  if(trMode==='req'){var L=lines.map(function(l){return {u:l.u,q:r3(num(l.q))}}).filter(function(x){return x.q>0});if(!L.length){toast('اكتب الكميات المطلوبة');return}
    newReq(trFrom,L,trNote.trim()).then(function(ok){if(ok){lines=[];trNote='';tab='req';paint.reset=true;paint()}});return}
  lines.forEach(function(l){var v=r3(num(l.q));if(v<=0){bad.push(nameOf(l.u)+': كمية غير صحيحة');return}if(trMode==='tr'&&v>qty(trFrom,l.u)+1e-9){bad.push(nameOf(l.u)+': المتوفر '+qf(qty(trFrom,l.u))+' فقط');return}ok.push({u:l.u,v:v})});
  if(bad.length){alert('تعذّر التنفيذ:\n'+bad.join('\n'));return}
  if(trMode==='tr'&&(!trTo||trTo===trFrom)){toast('اختر مخزن الوجهة');return}
  var ref=(trMode==='tr'?'TR-':'RC-')+Date.now().toString(36).toUpperCase(),note=trNote.trim();
  ok.forEach(function(x){if(trMode==='tr'){change(trFrom,x.u,-x.v,'tr_out',{ref:ref,note:note||('إلى '+wName(trTo))});change(trTo,x.u,x.v,'tr_in',{ref:ref,note:note||('من '+wName(trFrom))})}else change(trFrom,x.u,x.v,'recv',{ref:ref,note:note})});
  lines=[];trNote='';refreshUI();toast(trMode==='tr'?'✓ تم تحويل '+ok.length+' منتج إلى '+wName(trTo):'✓ تم تسجيل استلام '+ok.length+' منتج');paint();if(cloud())sync()}

/* ===== V431: طلبات التحويل بين المخازن ===== */
var RQ=null;function rqs(){if(!RQ)RQ=rd('emd431_rq',[]);return RQ}
function canAct(r,step){var cl=cloud();if(!cl)return false;if(cl.owner)return true;return step==='send'?r.f===co().wh:r.t===co().wh}
function actionable(){return rqs().filter(function(r){return (r.st==='requested'&&canAct(r,'send'))||(r.st==='sent'&&canAct(r,'recv'))})}
function setRq(a){if(!Array.isArray(a))return;RQ=a;wr('emd431_rq',a);var seenIds=rd('emd431_seen',null),act=actionable().map(function(r){return r.id+':'+r.st});
  if(seenIds){var nw=act.filter(function(x){return seenIds.indexOf(x)<0});if(nw.length)toast('📨 لديك '+(nw.length===1?'طلب تحويل جديد':nw.length+' طلبات تحويل جديدة')+' في «الفروع والمخازن»')}
  wr('emd431_seen',act)}
function newReq(f,L,note){if(!f||f===co().wh){toast('اختر المخزن الذي تطلب منه');return Promise.resolve(false)}
  return call('req',{op:'new',id:uuid(),f:f,t:co().wh,l:L.map(function(x){return {u:x.u,n:nameOf(x.u),q:x.q}}),note:note||'',by:(who()||{}).name||''})
   .then(function(r){setRq(r.rq);toast('✓ أُرسل الطلب إلى '+wName(f));return true}).catch(function(e){toast(errMsg(e));return false})}
function reqCall(body,okMsg){body.by=(who()||{}).name||'';return call('req',body).then(function(r){setRq(r.rq);sub=null;toast('✓ '+okMsg);paint();return sync()}).catch(function(e){if(e.code==='req_state')sync();toast(errMsg(e));paint()})}
function rqGo(btn){var r=rqs().find(function(x){return x.id===sub.id});if(!r)return;var op=sub.op,note=(ov.querySelector('[data-in="rqNote"]')||{}).value||'',L=[];
  [].forEach.call(ov.querySelectorAll('[data-rl]'),function(inp){var l=r.l[+inp.getAttribute('data-rl')];if(!l)return;var v=Math.max(0,r3(num(inp.value)));L.push(op==='send'?{u:l.u,s:v}:{u:l.u,r:v})});
  if(op==='send'&&!L.some(function(x){return x.s>0})){toast('اكتب كمية واحدة على الأقل، أو ارفض الطلب');return}
  btn.disabled=true;reqCall({op:op,id:r.id,l:L,note:note},op==='send'?'تم الإرسال وخصم الكمية من '+wName(r.f):op==='recv'?'تم الاستلام وإضافة الكمية إلى '+wName(r.t):'تم رفض الطلب')}
var RS={requested:['بانتظار الموافقة','warn'],sent:['في الطريق',''],received:['تم الاستلام','ok'],rejected:['مرفوض','bad'],cancelled:['ملغى','bad']};
function rqCard(r){var me=co().wh,st=RS[r.st]||[r.st,''],act=(r.st==='requested'&&canAct(r,'send'))||(r.st==='sent'&&canAct(r,'recv')),b='';
  if(r.st==='requested'&&canAct(r,'send'))b='<button type="button" class="b1 bs" data-rqa="send" data-id="'+r.id+'">موافقة وإرسال</button><button type="button" class="b3 bs" data-rqa="reject" data-id="'+r.id+'">رفض</button>';
  else if(r.st==='sent'&&canAct(r,'recv'))b='<button type="button" class="b1 bs" data-rqa="recv" data-id="'+r.id+'">تأكيد الاستلام</button>';
  if(r.st==='requested'&&(r.t===me||cloud().owner))b+='<button type="button" class="b3 bs" data-rqa="cancel" data-id="'+r.id+'">إلغاء</button>';
  return '<div class="rq'+(act?' act':'')+'"><div class="top"><b>'+esc(r.ref)+'</b><span class="pill '+st[1]+'"><i></i>'+st[0]+'</span><span class="mut" style="margin-inline-start:auto">'+tm(r.at)+'</span></div>'+
   '<div class="rt">'+esc(wName(r.f))+' ← '+esc(wName(r.t))+'</div><ul>'+r.l.map(function(l){var sh=l.r!=null&&l.s!=null&&num(l.r)<num(l.s);
     return '<li>'+esc(l.n||nameOf(l.u))+': مطلوب '+qf(l.q)+(l.s!=null?' · أُرسل '+qf(l.s):'')+(l.r!=null?' · استُلم '+qf(l.r):'')+(sh?' <span class="short">(نقص '+qf(num(l.s)-num(l.r))+')</span>':'')+'</li>'}).join('')+'</ul>'+
   '<div class="mut" style="margin-top:6px">'+(r.by?'طلبه '+esc(r.by):'')+(r.note?' · '+esc(r.note):'')+(r.sb&&r.st!=='requested'?' · '+(r.st==='rejected'||r.st==='cancelled'?'':'أرسله ')+esc(r.sb):'')+(r.rp?' · '+esc(r.rp):'')+(r.rb?' · استلمه '+esc(r.rb):'')+'</div>'+
   (b?'<div class="row" style="margin-top:10px">'+b+'</div>':'')+'</div>'}
/* النواقص في مخزن هذا الجهاز مع اقتراح المصدر والكمية */
var SH=null;
function shortages(){var c=co(),me=c.wh,ws=activeWs().filter(function(w){return w.id!==me}),out=[];
  prods().forEach(function(p){if(!p||!p.uid)return;var mn=p.minStock!=null?num(p.minStock):0,q0=qty(me,p.uid);
    var best=null;ws.forEach(function(w){var sp=qty(w.id,p.uid)-mn;if(sp>0&&(!best||sp>best.sp))best={w:w.id,sp:sp}});
    if(!((mn>0&&q0<=mn)||q0<0))return;
    var need=Math.max(1,Math.ceil((mn>0?mn*2:3)-q0));out.push({u:p.uid,n:p.name,q:q0,mn:mn,src:best?best.w:'',sug:best?Math.min(need,Math.floor(best.sp)||best.sp):0})});
  return out.sort(function(a,b){return (a.q-a.mn)-(b.q-b.mn)})}
function vReq(){var c=co(),me=c.wh,all=rqs(),cl=cloud();if(!cl)return '<div class="note">طلبات التحويل بين الفروع تعمل مع السحابة المشتركة. فعّلها من «نظرة عامة».</div>';
  var h='',S=shortages();
  h+='<div class="cd"><h4>⚠️ النواقص في '+esc(wName(me))+'<em>'+S.length+'</em></h4>'+(S.length?S.slice(0,40).map(function(x,i){return '<div class="sh"><input type="checkbox" data-shc="'+i+'"'+(x.src&&x.sug>0?' checked':' disabled')+' aria-label="اختيار"><span><b>'+esc(x.n)+'</b><small>لديك '+qf(x.q)+(x.mn?' · الحد '+qf(x.mn):'')+' · '+(x.src?'متوفر في '+esc(wName(x.src))+': '+qf(qty(x.src,x.u)):'غير متوفر في المخازن الأخرى')+'</small></span><input inputmode="decimal" data-shq="'+i+'" value="'+(x.sug>0?qf(x.sug):'')+'"'+(x.src?'':' disabled')+' aria-label="الكمية المقترحة"></div>'}).join('')+
    '<button type="button" class="b1" style="width:100%;margin-top:10px" data-a="shGo">📨 اطلب المحدد من المخازن المقترحة</button>'+(canBuy()&&S.some(function(x){return !x.src})?'<button type="button" class="b3" style="width:100%;margin-top:8px" data-a="shBuy">🧾 أمر شراء لغير المتوفر في المخازن</button>':''):'<div class="empty">لا توجد نواقص. حدّد «حد التنبيه» لكل منتج من تبويب المخزون.</div>')+'</div>';
  SH=S;
  var mine=function(r){return cl.owner||r.f===me||r.t===me};
  var a1=all.filter(function(r){return r.st==='requested'&&canAct(r,'send')}),a2=all.filter(function(r){return r.st==='sent'&&canAct(r,'recv')}),
      a3=all.filter(function(r){return (r.st==='requested'||r.st==='sent')&&mine(r)&&a1.indexOf(r)<0&&a2.indexOf(r)<0}),a4=all.filter(function(r){return r.st!=='requested'&&r.st!=='sent'&&mine(r)}).slice(0,15);
  if(a1.length)h+='<div class="cd"><h4>📥 بانتظار موافقتك<em>'+a1.length+'</em></h4>'+a1.map(rqCard).join('')+'</div>';
  if(a2.length)h+='<div class="cd"><h4>🚚 بانتظار استلامك<em>'+a2.length+'</em></h4>'+a2.map(rqCard).join('')+'</div>';
  h+='<div class="cd"><h4>📨 طلبات قيد التنفيذ<em><button type="button" class="b3 bs" data-a="newReq">+ طلب بضاعة</button></em></h4>'+(a3.length?a3.map(rqCard).join(''):'<div class="empty">لا توجد طلبات أخرى قيد التنفيذ</div>')+'</div>';
  if(a4.length)h+='<div class="cd"><h4>🕘 المكتملة مؤخرًا</h4>'+a4.map(rqCard).join('')+'</div>';
  return h}
function shGo(btn){var S=SH||[],by={};[].forEach.call(ov.querySelectorAll('[data-shc]'),function(cb){if(!cb.checked)return;var i=+cb.getAttribute('data-shc'),x=S[i],q=r3(num((ov.querySelector('[data-shq="'+i+'"]')||{}).value));if(!x||!x.src||q<=0)return;(by[x.src]=by[x.src]||[]).push({u:x.u,q:q})});
  var srcs=Object.keys(by);if(!srcs.length){toast('اختر منتجًا واحدًا على الأقل بكمية صحيحة');return}btn.disabled=true;
  var i=0,n=0;(function next(){if(i>=srcs.length){btn.disabled=false;if(n)toast('✓ أُرسل '+n+(n===1?' طلب':' طلبات'));paint();return}var f=srcs[i++];newReq(f,by[f],'من قائمة النواقص').then(function(ok){if(ok)n++;next()})})()}


/* ===== V432: المشتريات والموردون (متوافق مع «أوامر التوريد» الموجودة: emd_purchase_requests_v255) ===== */
var POK='emd_purchase_requests_v255',poLines=[],poQ='',poF={},spF='';
function canBuy(){return isBoss()||can('products')}
function pos(){var a=rd(POK,[]);return Array.isArray(a)?a:[]}
function savePos(a){wr(POK,a)}
function poRem(p){return Math.max(0,r3(num(p.totalCost)-num(p.supplierPaid)))}
function fromSrv(x){return {id:x.id,createdAt:x.at,status:x.st,supplier:x.sp||'',supplierPhone:x.ph||'',wh:x.w,items:(x.it||[]).map(function(i){return {uid:i.u,name:i.n,qty:num(i.q),received:num(i.r),unitCost:num(i.c)}}),
  totalCost:num(x.t),supplierPaid:num(x.pd),supplierDueDate:x.due||'',pays:x.pays||[],note:x.note||'',by:x.by||'',cloud:true,v432:true}}
function setPos(list){if(!Array.isArray(list))return;var srv=list.map(fromSrv),ids={};srv.forEach(function(x){ids[x.id]=1});
  var keep=pos().filter(function(x){return !ids[x.id]&&!(x.cloud&&(x.status==='ordered'||x.status==='partial'))});savePos(srv.concat(keep).sort(function(a,b){return String(b.createdAt).localeCompare(String(a.createdAt))}))}
function poWh(p){return p.wh&&W(p.wh)?p.wh:co().wh}
function canRecv(p){if(p.status!=='ordered'&&p.status!=='partial')return false;if(!canBuy())return false;var cl=cloud();if(!p.cloud||!cl)return true;return cl.owner||poWh(p)===co().wh}
function uidOf(i){if(i.uid&&byUid(i.uid))return i.uid;var k=norm(i.name),p=prods().find(function(x){return x&&norm(x.name)===k});return p?p.uid:''}
var PS={ordered:['بانتظار الاستلام','warn'],partial:['استلام جزئي',''],received:['مكتمل','ok'],cancelled:['ملغى','bad'],draft:['مسودة','']};
function today(){var d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function suppliers(){var m={};pos().forEach(function(p){if(p.status==='cancelled')return;var n=String(p.supplier||'').trim()||'بدون مورد';var s=m[n]||(m[n]={n:n,ph:'',c:0,t:0,pd:0,late:0});s.c++;s.t+=num(p.totalCost);s.pd+=num(p.supplierPaid);if(p.supplierPhone)s.ph=p.supplierPhone;if(p.supplierDueDate&&p.supplierDueDate<today()&&poRem(p)>0)s.late++});
  return Object.keys(m).map(function(k){var s=m[k];s.rem=Math.max(0,r3(s.t-s.pd));return s}).sort(function(a,b){return b.rem-a.rem})}
function poCard(p){var st=PS[p.status]||[p.status,''],rem=poRem(p),late=p.supplierDueDate&&p.supplierDueDate<today()&&rem>0,b='';
  if(canRecv(p))b+='<button type="button" class="b1 bs" data-poa="recv" data-id="'+esc(p.id)+'">📥 استلام</button>';
  if(rem>0&&can('finance'))b+='<button type="button" class="b3 bs" data-poa="pay" data-id="'+esc(p.id)+'">💳 تسجيل دفعة</button>';
  if(p.supplierPhone&&(p.status==='ordered'||p.status==='partial'))b+='<button type="button" class="b3 bs" data-poa="wa" data-id="'+esc(p.id)+'">📤 إرسال للمورد</button>';
  if(p.status==='ordered'&&canBuy()&&!(p.items||[]).some(function(i){return num(i.received)>0}))b+='<button type="button" class="b3 bs" data-poa="cancel" data-id="'+esc(p.id)+'">إلغاء</button>';
  return '<div class="rq po'+(canRecv(p)?' act':'')+'"><div class="top"><b>'+esc(p.id)+'</b><span class="pill '+st[1]+'"><i></i>'+st[0]+'</span><span class="mut" style="margin-inline-start:auto">'+tm(p.createdAt)+'</span></div>'+
   '<div class="rt">'+esc(p.supplier||'بدون مورد')+' ← '+esc(wName(poWh(p)))+'</div><ul>'+(p.items||[]).map(function(i){return '<li>'+esc(i.name)+': '+qf(i.qty)+(num(i.received)?' · استُلم '+qf(i.received):'')+(num(i.unitCost)?' · '+mf(i.unitCost):'')+'</li>'}).join('')+'</ul>'+
   (can('finance')?'<div class="amt"><span>الإجمالي '+mf(p.totalCost)+'</span><span>المدفوع '+mf(p.supplierPaid)+'</span>'+(rem>0?'<span class="'+(late?'due':'')+'">المتبقي '+mf(rem)+(p.supplierDueDate?' · الاستحقاق '+esc(p.supplierDueDate):'')+'</span>':'<span>مسدّد بالكامل ✓</span>')+'</div>':'')+
   (b?'<div class="row" style="margin-top:10px">'+b+'</div>':'')+'</div>'}
function vBuy(){if(!canBuy())return '<div class="note">ليست لديك صلاحية المشتريات.</div>';var all=pos().filter(function(p){return Array.isArray(p.items)}),SP=suppliers(),fin=can('finance');
  var open1=all.filter(function(p){return p.status==='ordered'||p.status==='partial'||p.status==='draft'}),due=SP.reduce(function(a,s){return a+s.rem},0),late=SP.reduce(function(a,s){return a+s.late},0);
  var f=function(p){return !spF||(String(p.supplier||'').trim()||'بدون مورد')===spF};
  var h='<div class="sum4" style="grid-template-columns:repeat(3,1fr)"><div class="st"><small>أوامر مفتوحة</small><b>'+open1.length+'</b></div>'+(fin?'<div class="st"><small>مستحق للموردين</small><b>'+mf(due)+'</b></div><div class="st"><small>متأخر السداد</small><b style="'+(late?'color:#b91c1c':'')+'">'+late+'</b></div>':'')+'</div><div style="height:12px"></div>';
  h+='<button type="button" class="b1" style="width:100%;margin-bottom:12px" data-a="poNew">+ أمر شراء جديد</button>';
  if(spF)h+='<div class="note" style="margin-bottom:12px">تعرض أوامر المورد «'+esc(spF)+'» فقط. <button type="button" class="b3 bs" data-a="spAll">عرض الكل</button></div>';
  var o=open1.filter(f);h+='<div class="cd"><h4>📦 بانتظار الاستلام<em>'+o.length+'</em></h4>'+(o.length?o.map(poCard).join(''):'<div class="empty">لا توجد أوامر مفتوحة</div>')+'</div>';
  if(fin&&SP.length)h+='<div class="cd"><h4>🏭 الموردون<em>'+SP.length+'</em></h4>'+SP.map(function(s){return '<div class="spl" data-sp="'+esc(s.n)+'"><span class="grow"><b>'+esc(s.n)+'</b><small>'+s.c+' أمر · الإجمالي '+mf(s.t)+(s.ph?' · '+esc(s.ph):'')+'</small></span><span class="pill '+(s.late?'bad':s.rem>0?'warn':'ok')+'">'+(s.rem>0?'متبقٍ '+mf(s.rem):'مسدّد')+'</span></div>'}).join('')+'</div>';
  var d=all.filter(function(p){return (p.status==='received'||p.status==='cancelled')&&f(p)}).slice(0,12);
  if(d.length)h+='<div class="cd"><h4>🕘 المكتملة مؤخرًا</h4>'+d.map(poCard).join('')+'</div>';
  return h}
function openPoNew(pre){poLines=(pre||[]).map(function(x){var p=byUid(x.u);return {u:x.u,q:String(x.q||1),c:p&&num(p.cost)?qf(p.cost):''}});poQ='';poF={w:co().wh,due:''};sub={t:'ponew'};tab='buy';paint()}
function poSug(){var k=norm(poQ);if(!k)return '';var L=prods().filter(function(p){return p&&p.uid&&(norm(p.name).indexOf(k)>=0||String(p.barcode||'')===poQ.trim())}).slice(0,6);
  return L.length?'<div class="sug">'+L.map(function(p){return '<button type="button" data-poadd="'+esc(p.uid)+'"><span>'+esc(p.name)+'</span><small>التكلفة '+mf(p.cost||0)+'</small></button>'}).join('')+'</div>':'<div class="mut" style="margin-top:6px">لا توجد نتائج</div>'}
function poAdd(uid){var l=poLines.find(function(x){return x.u===uid});if(l)l.q=String(num(l.q)+1);else{var p=byUid(uid);poLines.push({u:uid,q:'1',c:p&&num(p.cost)?qf(p.cost):''})}poQ='';paint();var n=ov.querySelector('[data-in="poQ"]');if(n)n.focus()}
function vPoSub(){var h='';
  if(sub.t==='ponew'){var SP=suppliers().filter(function(s){return s.n!=='بدون مورد'}),tot=poLines.reduce(function(a,l){return a+num(l.q)*num(l.c)},0);
    h+='<h3>أمر شراء جديد</h3><div class="two" style="margin-top:10px"><div><label class="f">المورد</label><input data-in="po_sp" list="e432sp" value="'+esc(poF.sp||'')+'" placeholder="اسم المورد"><datalist id="e432sp">'+SP.map(function(s){return '<option value="'+esc(s.n)+'">'}).join('')+'</datalist></div><div><label class="f">هاتف المورد (واتساب)</label><input data-in="po_ph" inputmode="tel" value="'+esc(poF.ph||'')+'" placeholder="968..." style="direction:ltr"></div></div>'+
     '<div class="two" style="margin-top:10px"><div><label class="f">يُستلم في مخزن</label><select data-in="po_w">'+activeWs().map(function(w){return '<option value="'+w.id+'"'+(w.id===poF.w?' selected':'')+'>'+esc(w.n)+'</option>'}).join('')+'</select></div><div><label class="f">تاريخ استحقاق الدفع</label><input type="date" data-in="po_due" value="'+esc(poF.due||'')+'"></div></div>'+
     '<label class="f" style="margin-top:10px">أضف منتجًا</label><input type="search" data-in="poQ" value="'+esc(poQ)+'" placeholder="اسم المنتج أو الباركود" autocomplete="off"><div id="e432sug">'+poSug()+'</div>'+
     (poLines.length?'<div class="plh"><span>المنتج</span><span>الكمية</span><span>تكلفة الوحدة</span><span></span></div>'+poLines.map(function(l,i){return '<div class="pl"><span class="nm">'+esc(nameOf(l.u))+'<small>لديك '+qf(qty(poF.w||co().wh,l.u))+'</small></span><input inputmode="decimal" data-pq="'+i+'" value="'+esc(l.q)+'" aria-label="الكمية"><input inputmode="decimal" data-pc="'+i+'" value="'+esc(l.c)+'" placeholder="0.000" aria-label="تكلفة الوحدة"><button type="button" class="del" data-pd="'+i+'" aria-label="حذف">✕</button></div>'}).join('')+'<div class="mut">الإجمالي التقريبي: <b id="e432tot">'+mf(tot)+'</b></div>':'<div class="empty">لم تُضف منتجات بعد</div>')+
     '<input data-in="po_note" value="'+esc(poF.note||'')+'" placeholder="ملاحظة (اختياري)" style="margin-top:8px"><div class="row" style="margin-top:12px"><button type="button" class="b1 grow" data-a="poGo"'+(poLines.length?'':' disabled')+'>حفظ أمر الشراء</button><button type="button" class="b3" data-a="subClose">إلغاء</button></div>'}
  else if(sub.t==='porecv'){var p=pos().find(function(x){return x.id===sub.id});if(!p)return '';
    h+='<h3>استلام '+esc(p.id)+'</h3><div class="mut">'+esc(p.supplier||'بدون مورد')+' ← '+esc(wName(poWh(p)))+'</div><div class="plh" style="grid-template-columns:1fr 70px 80px"><span>المنتج</span><span>المستلم الآن</span><span>تكلفة الوحدة</span></div>'+
     (p.items||[]).map(function(i,k){var left=Math.max(0,num(i.qty)-num(i.received));return '<div class="pl" style="grid-template-columns:1fr 70px 80px"><span class="nm">'+esc(i.name)+'<small>المطلوب '+qf(i.qty)+(num(i.received)?' · استُلم '+qf(i.received):'')+'</small></span><input inputmode="decimal" data-rq="'+k+'" value="'+qf(left)+'"><input inputmode="decimal" data-rc="'+k+'" value="'+(num(i.unitCost)?qf(i.unitCost):'')+'" placeholder="0.000"></div>'}).join('')+
     '<div class="mut" style="margin-top:6px">تُضاف الكميات إلى المخزن، وتُحدَّث تكلفة كل منتج بالمتوسط المرجّح تلقائيًا.</div><div class="row" style="margin-top:12px"><button type="button" class="b1 grow" data-a="poRecvGo">تأكيد الاستلام</button><button type="button" class="b3" data-a="subClose">إلغاء</button></div>'}
  else{var p2=pos().find(function(x){return x.id===sub.id});if(!p2)return '';
    h+='<h3>دفعة للمورد</h3><div class="mut">'+esc(p2.id)+' · '+esc(p2.supplier||'بدون مورد')+' · المتبقي '+mf(poRem(p2))+'</div><label class="f" style="margin-top:10px">المبلغ</label><input inputmode="decimal" data-in="po_amt" value="'+qf(poRem(p2))+'"><input data-in="po_pnote" placeholder="ملاحظة (مثال: تحويل بنكي)" style="margin-top:8px">'+
     '<div class="row" style="margin-top:12px"><button type="button" class="b1 grow" data-a="poPayGo">حفظ الدفعة</button><button type="button" class="b3" data-a="subClose">إلغاء</button></div>'}
  return h}
function poId(){return 'PO-'+Date.now().toString(36).toUpperCase().slice(-6)}
function poGo(btn){var sp=String(poF.sp||'').trim(),w=poF.w||co().wh,L=poLines.map(function(l){return {u:l.u,n:nameOf(l.u),q:r3(num(l.q)),c:r3(num(l.c))}}).filter(function(x){return x.q>0});
  if(!L.length){toast('أضف منتجًا بكمية صحيحة');return}var id=poId(),by=(who()||{}).name||'';btn.disabled=true;
  if(cloud()){call('po',{op:'new',id:id,w:w,sp:sp,ph:String(poF.ph||'').trim(),it:L,due:poF.due||'',note:poF.note||'',by:by}).then(function(r){setPos(r.po);sub=null;poLines=[];toast('✓ تم حفظ أمر الشراء '+id);paint()}).catch(function(e){btn.disabled=false;toast(errMsg(e))});return}
  var a=pos();a.unshift({id:id,createdAt:new Date().toISOString(),status:'ordered',supplier:sp,supplierPhone:String(poF.ph||'').trim(),wh:w,items:L.map(function(x){return {uid:x.u,name:x.n,qty:x.q,received:0,unitCost:x.c}}),
    totalCost:r3(L.reduce(function(s,x){return s+x.q*x.c},0)),supplierPaid:0,supplierDueDate:poF.due||'',pays:[],note:poF.note||'',by:by,v432:true});savePos(a);sub=null;poLines=[];toast('✓ تم حفظ أمر الشراء '+id);paint()}
function poAct(op,id){var p=pos().find(function(x){return x.id===id});if(!p)return;
  if(op==='recv'){sub={t:'porecv',id:id};paint();return}
  if(op==='pay'){sub={t:'popay',id:id};paint();return}
  if(op==='wa'){var ph=String(p.supplierPhone||'').replace(/\D/g,'');var t='أمر شراء '+p.id+'\nمن: '+(co().name||bizName())+'\n\n'+(p.items||[]).map(function(i){return '• '+i.name+' × '+qf(num(i.qty)-num(i.received))}).join('\n')+'\n\nالتسليم: '+wName(poWh(p))+(p.note?'\nملاحظة: '+p.note:'');
    window.open('https://wa.me/'+ph+'?text='+encodeURIComponent(t),'_blank');return}
  if(op==='cancel'){if(!confirm('إلغاء أمر الشراء '+id+'؟'))return;
    if(p.cloud&&cloud()){call('po',{op:'cancel',id:id}).then(function(r){setPos(r.po);toast('تم إلغاء الأمر');paint()}).catch(function(e){toast(errMsg(e))});return}
    var a=pos();a.forEach(function(x){if(x.id===id)x.status='cancelled'});savePos(a);paint()}}
function poRecvGo(btn){var a=pos(),p=a.find(function(x){return x.id===sub.id});if(!p)return;var L=[];
  (p.items||[]).forEach(function(i,k){var q=r3(num((ov.querySelector('[data-rq="'+k+'"]')||{}).value)),c=r3(num((ov.querySelector('[data-rc="'+k+'"]')||{}).value));L.push({i:i,k:k,q:Math.max(0,q),c:c})});
  if(!L.some(function(x){return x.q>0})){toast('اكتب الكمية المستلمة');return}btn.disabled=true;var by=(who()||{}).name||'';
  if(p.cloud&&cloud()){call('po',{op:'recv',id:p.id,by:by,it:L.filter(function(x){return x.q>0}).map(function(x){return {u:x.i.uid,q:x.q,c:x.c||null}})}).then(function(r){setPos(r.po);sub=null;toast('✓ تم الاستلام في '+wName(poWh(p)));paint();return sync()}).catch(function(e){btn.disabled=false;toast(errMsg(e))});return}
  var w=poWh(p),miss=[];L.forEach(function(x){if(x.q<=0){if(x.c)x.i.unitCost=x.c;return}var u=uidOf(x.i);if(!u){miss.push(x.i.name);return}x.i.uid=u;var pr=byUid(u);
    if(pr&&x.c>0){var all=activeWs().reduce(function(s,ww){return s+Math.max(0,qty(ww.id,u))},0);pr.cost=r3(all+x.q>0?(all*num(pr.cost)+x.q*x.c)/(all+x.q):x.c)}
    if(x.c>0)x.i.unitCost=x.c;x.i.received=r3(num(x.i.received)+x.q);change(w,u,x.q,'recv',{ref:p.id,note:'أمر شراء '+p.id+(p.supplier?' · '+p.supplier:'')})});
  p.totalCost=r3((p.items||[]).reduce(function(s,i){return s+num(i.qty)*num(i.unitCost)},0));p.status=(p.items||[]).every(function(i){return num(i.received)>=num(i.qty)})?'received':'partial';savePos(a);refreshUI();
  sub=null;toast(miss.length?'تعذّر العثور على: '+miss.join('، '):'✓ تم الاستلام في '+wName(w));paint()}
function poPayGo(btn){var a=pos(),p=a.find(function(x){return x.id===sub.id});if(!p)return;var amt=r3(num((ov.querySelector('[data-in="po_amt"]')||{}).value)),note=(ov.querySelector('[data-in="po_pnote"]')||{}).value||'',by=(who()||{}).name||'';
  if(amt<=0){toast('اكتب مبلغًا صحيحًا');return}btn.disabled=true;
  if(p.cloud&&cloud()){call('po',{op:'pay',id:p.id,a:amt,note:note,by:by}).then(function(r){setPos(r.po);sub=null;toast('✓ تم تسجيل الدفعة');paint()}).catch(function(e){btn.disabled=false;toast(errMsg(e))});return}
  p.supplierPaid=r3(num(p.supplierPaid)+amt);p.pays=(p.pays||[]).concat([{a:amt,at:new Date().toISOString(),by:by,note:note}]);p.supplierPaymentStatus=poRem(p)<=0?'paid':'partial';savePos(a);sub=null;toast('✓ تم تسجيل الدفعة');paint()}

/* ===== نقاط الدخول ===== */
function card(){var g=$('emd327SystemGrid');if(!g)return;var cd=g.querySelector('[data-emd430]');var want=mode()==='company';
  if(!want){if(cd)cd.remove();return}
  var t='<b>🏢 الفروع والمخازن</b><span>المخزون في كل مخزن، والتحويل بينها، والموظفون، وتقارير كل فرع.</span>';
  if(!cd){cd=document.createElement('button');cd.type='button';cd.className='emd327-item';cd.setAttribute('data-emd430','1');cd.addEventListener('click',function(){var x=$('emd327SettingsClose');if(x)x.click();open('home')});var f=g.querySelector('[data-emd416]');if(f&&f.nextSibling)g.insertBefore(cd,f.nextSibling);else g.appendChild(cd)}
  if(cd.innerHTML!==t)cd.innerHTML=t}
function sheetBtn(){var s=$('emd410Sheet');if(!s||!s.classList.contains('show')||mode()!=='company'||s.querySelector('[data-e430s]'))return;var gs=s.querySelectorAll('.grid3'),g=gs[gs.length-1];if(!g)return;
  var b=document.createElement('button');b.type='button';b.setAttribute('data-e430s','1');b.innerHTML='<i>🏢</i>الفروع والمخازن';b.addEventListener('click',function(e){e.stopPropagation();s.classList.remove('show');open('home')});g.insertBefore(b,g.firstChild)}
function chip(){if(mode()!=='company')return;var home=$('view');if(!home||!home.querySelector('.hero'))return;if(!home)return;var el=$('emd430Chip');
  if(!el){el=document.createElement('button');el.type='button';el.id='emd430Chip';el.addEventListener('click',function(){open(cloud()&&actionable().length?'req':(can('finance')?'dash':'home'))});var ref=home.querySelector('#emd417');if(ref&&ref.parentNode)ref.parentNode.insertBefore(el,ref.nextSibling);else home.insertBefore(el,home.firstChild)}
  var c=co(),cl=cloud(),me=who(),st2=!cl?'':cl.revoked?'<em class="warn">مفصول</em>':cl.err?'<em class="warn">غير متصل</em>':'<em class="ok">متزامن</em>';
  var na=cl?actionable().length:0;
  var h='<i>🏢</i><span>'+esc(bName(myBranch()))+' · '+esc(wName(c.wh))+(me&&me.name?' · '+esc(me.name):'')+'</span>'+(na?'<em class="warn" data-rqchip="1">📨 '+na+' بانتظارك</em>':'')+st2;if(el.innerHTML!==h)el.innerHTML=h}
document.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('#emd410Bar [data-n="more"]'))setTimeout(sheetBtn,0)},true);

/* ===== V433: أسعار وعروض لكل فرع ===== */
function pxObj(){var c=co();if(!c.px||typeof c.px!=='object'||Array.isArray(c.px))c.px={};var x=c.px;if(!x.bp||typeof x.bp!=='object')x.bp={};if(!x.adj||typeof x.adj!=='object')x.adj={};if(!Array.isArray(x.of))x.of=[];return x}
function pxOn(){return mode()==='company'||!!cloud()}
function canPxSee(){return isBoss()||can('prices')}
function canPxEdit(){var cl=cloud();return cl?canSetup():(isBoss()||can('prices'))}
function rawPrice(p){var v=num(p&&(p.salePrice!=null?p.salePrice:(p.unitPrice!=null?p.unitPrice:(p.price!=null?p.price:p.defaultPrice))));return v>0?v:0}
function dkey(d){return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2)}
function today(){return dkey(new Date())}
function ofState(o,t){t=t||today();if(o.on===false)return 'off';if(o.from&&t<o.from)return 'soon';if(o.to&&t>o.to)return 'end';return 'live'}
function ofHits(o,p,br){if(!p)return false;if(o.b&&o.b.length&&o.b.indexOf(br)<0)return false;
  if(o.sc==='cat')return !!String(o.cat||'').trim()&&norm(p.category)===norm(o.cat);
  if(o.sc==='items')return !!p.uid&&(o.u||[]).indexOf(p.uid)>=0;return true}
/* السعر الأساسي في الفرع: سعر خاص بالمنتج، وإلا نسبة الفرع العامة، وإلا السعر الأساسي */
function brBase(p,raw,br){var x=pxObj();if(br&&p&&p.uid){var m=x.bp[br];if(m&&m[p.uid]!=null&&num(m[p.uid])>0)return r3(num(m[p.uid]));var a=num(x.adj[br]);if(a&&raw>0)return r3(Math.max(0,raw*(1+a/100)))}return raw}
function ofPrice(o,b){var v=num(o.v);if(o.k==='pct')return r3(b*(1-Math.min(100,Math.max(0,v))/100));if(o.k==='amt')return r3(Math.max(0,b-v));if(o.k==='fix')return v>0&&v<b?r3(v):b;return b}
function pxInfo(p,raw,br){if(br===undefined)br=myBranch();var base=brBase(p,raw,br),eff=base,po=null,qo=null,qr=0,t=today();
  if(base>0)pxObj().of.forEach(function(o){if(ofState(o,t)!=='live'||!ofHits(o,p,br))return;
    if(o.k==='bxgy'){var bx=Math.max(1,Math.round(num(o.bx))),gy=Math.max(1,Math.round(num(o.gy))),r=gy/(bx+gy);if(r>qr){qr=r;qo=o}return}
    var e=ofPrice(o,base);if(e>0&&e<eff-1e-9){eff=e;po=o}});
  return {raw:raw,base:base,eff:eff,po:po,qo:qo}}
var KINDS={pct:'٪ نسبة خصم',amt:'خصم مبلغ',fix:'سعر خاص',bxgy:'اشترِ واحصل مجانًا'};
function ofWhat(o){var v=num(o.v);return o.k==='pct'?'خصم '+qf(v)+'٪':o.k==='amt'?'خصم '+mf(v):o.k==='fix'?'سعر خاص '+mf(v):'اشترِ '+qf(num(o.bx)||1)+' واحصل على '+qf(num(o.gy)||1)+' مجانًا'}
function ofDesc(o){var sc=o.sc==='cat'?'على تصنيف «'+esc(o.cat||'')+'»':o.sc==='items'?'على '+((o.u||[]).length===1?'منتج واحد':(o.u||[]).length+' منتجات'):'على جميع المنتجات';
  var bs=o.b&&o.b.length?'في '+o.b.map(function(id){return esc(bName(id))}).join('، '):'في جميع الفروع';
  var dt=o.from&&o.to?'من '+o.from+' إلى '+o.to:o.to?'حتى '+o.to:o.from?'ابتداءً من '+o.from:'بلا تاريخ انتهاء';
  return esc(ofWhat(o))+' '+sc+' '+bs+' · '+dt}
var pxBr='',pxQ='',pxF=null,pxIQ='',pxT=null;
function pxSave(msg){var c=co();c.pxDirty=Date.now();saveCo();if(msg)toast(msg);var cl=cloud();if(cl&&cl.owner){clearTimeout(pxT);pxT=setTimeout(function(){pushStruct().then(function(){toast('✓ وصلت التحديثات إلى جميع الأجهزة')}).catch(function(e){toast(errMsg(e))})},1200)}}
function brs(){return co().b.filter(function(b){return b.on!==false})}
function vPx(){if(!canPxSee())return '<div class="note">ليست لديك صلاحية الأسعار.</div>';var x=pxObj(),ed=canPxEdit(),t=today(),B2=brs();
  var live=x.of.filter(function(o){return ofState(o,t)==='live'}).length;
  var h='<div class="sum4" style="grid-template-columns:repeat(3,1fr)"><div class="st"><small>عروض فعّالة الآن</small><b>'+live+'</b></div><div class="st"><small>كل العروض</small><b>'+x.of.length+'</b></div><div class="st"><small>فرع هذا الجهاز</small><b style="font-size:14px">'+esc(bName(myBranch()))+'</b></div></div><div style="height:12px"></div>';
  if(!ed)h+='<div class="note" style="margin-bottom:12px">تُدار الأسعار والعروض من جهاز المالك، وتُطبَّق هنا تلقائيًا في نقطة البيع.</div>';
  if(ed)h+='<button type="button" class="b1" style="width:100%;margin-bottom:12px" data-a="pxNew">+ عرض جديد</button>';
  var ord={live:0,soon:1,off:2,end:3},L=x.of.slice().sort(function(a,b){return ord[ofState(a,t)]-ord[ofState(b,t)]});
  h+='<div class="cd"><h4>🎁 العروض<em>'+x.of.length+'</em></h4>'+(L.length?L.map(function(o){var s=ofState(o,t),pl={live:['ok','فعّال'],soon:['warn','قادم'],off:['','موقوف'],end:['bad','منتهٍ']}[s];
    return '<div class="e433of'+(s==='end'||s==='off'?' dim':'')+'"><div class="row"><b class="grow">'+esc(o.n||ofWhat(o))+'</b><span class="pill '+pl[0]+'"><i></i>'+pl[1]+'</span></div><div class="mut">'+ofDesc(o)+'</div>'+
     (ed?'<div class="row" style="margin-top:8px"><button type="button" class="b3 bs" data-pxe="'+esc(o.id)+'">✏️ تعديل</button><button type="button" class="b3 bs" data-pxt="'+esc(o.id)+'">'+(o.on===false?'▶️ تشغيل':'⏸️ إيقاف')+'</button><button type="button" class="b3 bs" data-pxd="'+esc(o.id)+'" style="color:#b91c1c">🗑️ حذف</button></div>':'')+'</div>'}).join('')
    :'<div class="empty">لا توجد عروض بعد'+(ed?'. أنشئ أول عرض: خصم نسبة، أو خصم مبلغ، أو سعر خاص، أو «اشترِ واحصل مجانًا».':'')+'</div>')+'</div>';
  h+='<div class="cd"><h4>🏬 أسعار الفروع</h4>';
  if(!B2.length)h+='<div class="empty">أضف الفروع من تبويب «الإعداد» أولًا، ثم حدّد سعرًا مختلفًا لكل فرع عند الحاجة.</div>';
  else{if(!pxBr||!B2.some(function(b){return b.id===pxBr}))pxBr=myBranch()&&B2.some(function(b){return b.id===myBranch()})?myBranch():B2[0].id;var a=num(x.adj[pxBr]);
    h+='<div class="mut" style="margin-bottom:8px">يُستخدم السعر الأساسي في كل الفروع، إلا إذا حدّدت للفرع نسبة عامة أو سعرًا خاصًا لمنتج.</div><div class="chips">'+B2.map(function(b){var n=Object.keys(x.bp[b.id]||{}).length;return '<button type="button" data-pxb="'+b.id+'" class="'+(b.id===pxBr?'on':'')+'">'+esc(b.n)+(n||num(x.adj[b.id])?' •':'')+'</button>'}).join('')+'</div>'+
     '<div class="pr" style="cursor:default"><span class="nm"><b>نسبة عامة لأسعار الفرع</b><span class="mut">مثال: 10 تعني أن الأسعار أعلى بـ 10٪، و‎-5 تعني أقل بـ 5٪. اتركها فارغة لعدم التغيير.</span></span>'+(ed?'<input inputmode="decimal" data-in="pxAdj" value="'+(a?qf(a):'')+'" placeholder="0٪" style="width:84px;text-align:center" aria-label="النسبة العامة">':'<span class="tot">'+(a?qf(a)+'٪':'—')+'</span>')+'</div>'+
     '<input data-in="pxQ" value="'+esc(pxQ)+'" placeholder="🔎 ابحث عن منتج بالاسم أو الباركود" style="margin-top:10px;width:100%"><div id="e433pl">'+pxList()+'</div>'}
  h+='</div>'+pxEffect();return h}
function pxList(){var x=pxObj(),m=x.bp[pxBr]||{},ed=canPxEdit(),k=norm(pxQ),L=prods().filter(function(p){return p&&p.uid&&String(p.name||'').trim()&&(!k||norm(p.name).indexOf(k)>=0||String(p.barcode||'')===pxQ.trim())});
  L.sort(function(a,b){return (m[b.uid]!=null?1:0)-(m[a.uid]!=null?1:0)});var more=L.length>60;L=L.slice(0,60);
  if(!L.length)return '<div class="empty">لا توجد منتجات مطابقة</div>';
  return L.map(function(p){var raw=rawPrice(p),own=m[p.uid]!=null,I=pxInfo(p,raw,pxBr);
    return '<div class="pr" style="cursor:default"><span class="nm"><b>'+esc(p.name)+'</b><span class="mut">الأساسي '+mf(raw)+(I.base!==raw&&!own?' · في الفرع '+mf(I.base):'')+(I.po?' · بالعرض '+mf(I.eff):'')+'</span></span>'+
     (ed?'<input inputmode="decimal" data-bpu="'+p.uid+'" value="'+(own?qf(m[p.uid]):'')+'" placeholder="'+qf(I.base)+'" style="width:84px;text-align:center'+(own?';border-color:#f59e0b;background:#fffbeb':'')+'" aria-label="سعر '+esc(p.name)+' في الفرع">':'<span class="tot">'+mf(I.base)+'</span>')+'</div>'}).join('')+(more?'<div class="mut" style="margin-top:6px">تُعرض أول 60 نتيجة. ابحث لتضييق القائمة.</div>':'')}
/* أثر العروض: من فواتير البيع المباشر في هذا الجهاز آخر 30 يومًا */
function pxEffect(){var d=D()||{},lim=Date.now()-30*864e5,n=0,u=0,v=0,t=0,by={};
  (Array.isArray(d.directSales)?d.directSales:[]).forEach(function(s){if(!s||new Date(s.at).getTime()<lim)return;var hit=false;(s.items||[]).forEach(function(i){if(!i.of)return;hit=true;var q=num(i.qty),dv=Math.max(0,num(i.rp)*q-num(i.net));u+=q;v+=dv;t+=num(i.net);var b=by[i.of]||(by[i.of]={q:0,v:0});b.q+=q;b.v+=dv});if(hit)n++});
  if(!n)return '';var K=Object.keys(by).sort(function(a,b){return by[b].q-by[a].q}).slice(0,5);
  return '<div class="cd"><h4>📈 أثر العروض<em>آخر 30 يومًا</em></h4><div class="sum4" style="grid-template-columns:repeat(3,1fr)"><div class="st"><small>فواتير بعروض</small><b>'+n+'</b></div><div class="st"><small>قطع مباعة</small><b>'+qf(u)+'</b></div><div class="st"><small>قيمة الخصومات</small><b>'+mf(v)+'</b></div></div>'+
    K.map(function(k){return '<div class="pr" style="cursor:default"><span class="nm"><b>'+esc(k)+'</b></span><span class="tot">'+qf(by[k].q)+' قطعة<small>خصم '+mf(by[k].v)+'</small></span></div>'}).join('')+'<div class="mut" style="margin-top:6px">من فواتير البيع المباشر على هذا الجهاز.</div></div>'}
function pxCats(){var m={};prods().forEach(function(p){var c=String(p&&p.category||'').trim();if(c)m[c]=1});return Object.keys(m).sort()}
function openPx(id){var o=id&&pxObj().of.find(function(x){return x.id===id});pxF=o?JSON.parse(JSON.stringify(o)):{id:'',n:'',k:'pct',v:'',bx:'2',gy:'1',sc:'all',cat:'',u:[],b:[],from:today(),to:'',on:true};pxIQ='';sub={t:'pxof'};paint()}
function vPxSub(){var f=pxF,B2=brs(),C=pxCats();if(!f){sub=null;return ''}
  var h='<h3>'+(f.id?'تعديل العرض':'عرض جديد')+'</h3><label class="f">نوع العرض</label><div class="chips">'+Object.keys(KINDS).map(function(k){return '<button type="button" data-pxk="'+k+'" class="'+(f.k===k?'on':'')+'">'+KINDS[k]+'</button>'}).join('')+'</div>';
  if(f.k==='bxgy')h+='<div class="two" style="margin-top:8px"><div><label class="f">عند شراء</label><input inputmode="numeric" data-in="pxBx" value="'+esc(f.bx)+'" placeholder="2"></div><div><label class="f">يحصل مجانًا على</label><input inputmode="numeric" data-in="pxGy" value="'+esc(f.gy)+'" placeholder="1"></div></div><div class="mut" style="margin-top:4px">يُخصم ثمن القطع المجانية تلقائيًا في الفاتورة لكل مجموعة كاملة.</div>';
  else h+='<label class="f" style="margin-top:8px">'+(f.k==='pct'?'نسبة الخصم ٪':f.k==='amt'?'مبلغ الخصم على القطعة (ر.ع)':'السعر الخاص للقطعة (ر.ع)')+'</label><input inputmode="decimal" data-in="pxV" value="'+esc(f.v)+'" placeholder="'+(f.k==='pct'?'20':'1.500')+'">';
  h+='<label class="f" style="margin-top:10px">يشمل</label><div class="chips"><button type="button" data-pxs="all" class="'+(f.sc==='all'?'on':'')+'">جميع المنتجات</button>'+(C.length?'<button type="button" data-pxs="cat" class="'+(f.sc==='cat'?'on':'')+'">تصنيف</button>':'')+'<button type="button" data-pxs="items" class="'+(f.sc==='items'?'on':'')+'">منتجات محددة</button></div>';
  if(f.sc==='cat')h+='<select data-in="pxCat" style="margin-top:6px;width:100%"><option value="">اختر التصنيف</option>'+C.map(function(c){return '<option'+(c===f.cat?' selected':'')+'>'+esc(c)+'</option>'}).join('')+'</select>';
  if(f.sc==='items')h+='<input data-in="pxIQ" value="'+esc(pxIQ)+'" placeholder="🔎 أضف منتجًا بالاسم أو الباركود" style="margin-top:6px;width:100%"><div id="e433sug">'+pxSug()+'</div><div id="e433it">'+pxItems()+'</div>';
  h+='<label class="f" style="margin-top:10px">الفروع</label>'+(B2.length?'<div class="chips"><button type="button" data-pxbr="" class="'+(!f.b.length?'on':'')+'">جميع الفروع</button>'+B2.map(function(b){return '<button type="button" data-pxbr="'+b.id+'" class="'+(f.b.indexOf(b.id)>=0?'on':'')+'">'+esc(b.n)+'</button>'}).join('')+'</div>':'<div class="mut">يُطبَّق في جميع الفروع.</div>');
  h+='<div class="two" style="margin-top:10px"><div><label class="f">من تاريخ</label><input type="date" data-in="pxFrom" value="'+esc(f.from||'')+'"></div><div><label class="f">إلى تاريخ (اختياري)</label><input type="date" data-in="pxTo" value="'+esc(f.to||'')+'"></div></div>';
  h+='<label class="f" style="margin-top:10px">اسم العرض (يظهر في الفاتورة)</label><input data-in="pxN" value="'+esc(f.n)+'" placeholder="مثال: عرض نهاية الأسبوع" maxlength="40">';
  h+='<div class="note" style="margin-top:10px" id="e433pv">'+ofDesc(f)+'</div>';
  h+='<div class="row" style="margin-top:12px"><button type="button" class="b1 grow" data-a="pxGo">حفظ العرض</button><button type="button" class="b3" data-a="subClose">إلغاء</button></div>';
  return h}
function pxSug(){var k=norm(pxIQ);if(!k)return '';var L=prods().filter(function(p){return p&&p.uid&&pxF.u.indexOf(p.uid)<0&&(norm(p.name).indexOf(k)>=0||String(p.barcode||'')===pxIQ.trim())}).slice(0,6);
  return L.length?'<div class="sug">'+L.map(function(p){return '<button type="button" data-pxi="'+p.uid+'"><b>'+esc(p.name)+'</b><small>'+mf(rawPrice(p))+'</small></button>'}).join('')+'</div>':'<div class="mut">لا توجد نتائج</div>'}
function pxItems(){return pxF.u.length?pxF.u.map(function(u,i){return '<div class="ln"><span class="nm">'+esc(nameOf(u))+'</span><button type="button" class="del" data-pxr="'+i+'" aria-label="إزالة">✕</button></div>'}).join(''):''}
function pxPv(){var e=$('e433pv');if(e&&pxF)e.innerHTML=ofDesc(pxF)}
function pxGo(){var f=pxF,v=num(f.v),bx=Math.round(num(f.bx)),gy=Math.round(num(f.gy)),e='';
  if(f.k==='bxgy'){if(!(bx>=1&&gy>=1))e='اكتب عدد القطع المشتراة والمجانية (1 على الأقل).'}
  else if(!(v>0))e='اكتب قيمة العرض.';else if(f.k==='pct'&&v>=100)e='نسبة الخصم يجب أن تكون أقل من 100٪.';
  if(!e&&f.sc==='cat'&&!String(f.cat||'').trim())e='اختر التصنيف.';
  if(!e&&f.sc==='items'&&!f.u.length)e='أضف منتجًا واحدًا على الأقل.';
  if(!e&&f.from&&f.to&&f.to<f.from)e='تاريخ النهاية قبل تاريخ البداية.';
  if(e){toast(e);return}
  var o={id:f.id||uuid(),n:String(f.n||'').trim().slice(0,40)||ofWhat(f),k:f.k,v:f.k==='bxgy'?0:r3(v),bx:f.k==='bxgy'?bx:0,gy:f.k==='bxgy'?gy:0,sc:f.sc,cat:f.sc==='cat'?f.cat:'',u:f.sc==='items'?f.u.slice(0,500):[],b:f.b.filter(function(id){return !!B(id)}),from:f.from||'',to:f.to||'',on:f.on!==false};
  var L=pxObj().of,i=L.findIndex(function(x){return x.id===o.id});if(i>=0)L[i]=o;else L.unshift(o);
  sub=null;pxF=null;pxSave('✓ تم حفظ العرض');paint()}
function pxClick(t){var b;
  var a0=t.closest('[data-a]');if(a0){var ak=a0.getAttribute('data-a');if(ak==='pxNew'){openPx('');return true}if(ak==='pxGo'){pxGo();return true}if(ak==='subClose')pxF=null}
  if((b=t.closest('[data-pxb]'))){pxBr=b.getAttribute('data-pxb');pxQ='';paint();return true}
  if((b=t.closest('[data-pxe]'))){openPx(b.getAttribute('data-pxe'));return true}
  if((b=t.closest('[data-pxt]'))){var o=pxObj().of.find(function(x){return x.id===b.getAttribute('data-pxt')});if(o){o.on=o.on===false;pxSave(o.on?'تم تشغيل العرض':'تم إيقاف العرض');paint()}return true}
  if((b=t.closest('[data-pxd]'))){if(!confirm('حذف هذا العرض؟ لا تتأثر الفواتير السابقة.'))return true;var x=pxObj(),id=b.getAttribute('data-pxd');x.of=x.of.filter(function(o){return o.id!==id});pxSave('تم حذف العرض');paint();return true}
  if(!pxF)return false;
  if((b=t.closest('[data-pxk]'))){pxF.k=b.getAttribute('data-pxk');paint();return true}
  if((b=t.closest('[data-pxs]'))){pxF.sc=b.getAttribute('data-pxs');paint();return true}
  if((b=t.closest('[data-pxbr]'))){var id2=b.getAttribute('data-pxbr');if(!id2)pxF.b=[];else{var j=pxF.b.indexOf(id2);if(j>=0)pxF.b.splice(j,1);else pxF.b.push(id2);if(pxF.b.length===brs().length)pxF.b=[]}paint();return true}
  if((b=t.closest('[data-pxi]'))){pxF.u.push(b.getAttribute('data-pxi'));pxIQ='';var q1=ov.querySelector('[data-in="pxIQ"]');if(q1){q1.value='';q1.focus()}$('e433sug').innerHTML='';$('e433it').innerHTML=pxItems();pxPv();return true}
  if((b=t.closest('[data-pxr]'))){pxF.u.splice(+b.getAttribute('data-pxr'),1);$('e433it').innerHTML=pxItems();pxPv();return true}
  return false}
function pxInput(t,k){
  if(k==='pxQ'){pxQ=t.value;var e=$('e433pl');if(e)e.innerHTML=pxList();return true}
  if(!pxF||!k||k.indexOf('px')!==0)return false;
  if(k==='pxIQ'){pxIQ=t.value;var s=$('e433sug');if(s)s.innerHTML=pxSug();return true}
  var M={pxV:'v',pxBx:'bx',pxGy:'gy',pxN:'n',pxFrom:'from',pxTo:'to',pxCat:'cat'};if(M[k]){pxF[M[k]]=t.value;pxPv();return true}
  return false}
function pxChange(t,k){
  if(k==='pxAdj'){var x=pxObj(),v=num(t.value);if(v&&v>-100&&v<=500)x.adj[pxBr]=r3(v);else delete x.adj[pxBr];pxSave('✓ تم حفظ نسبة '+bName(pxBr));setTimeout(function(){var e=$('e433pl');if(e)e.innerHTML=pxList()},0);return true}
  if(t.hasAttribute('data-bpu')){var x2=pxObj(),u=t.getAttribute('data-bpu'),m=x2.bp[pxBr]||(x2.bp[pxBr]={}),v2=num(t.value);if(String(t.value).trim()&&v2>0)m[u]=r3(v2);else delete m[u];if(!Object.keys(m).length)delete x2.bp[pxBr];pxSave('✓ سعر '+nameOf(u)+' في '+bName(pxBr));setTimeout(function(){var e=$('e433pl');if(e&&!e.contains(document.activeElement))e.innerHTML=pxList()},0);return true}
  if(pxF&&(k==='pxFrom'||k==='pxTo'||k==='pxCat')){return pxInput(t,k)}
  return false}
/* واجهة نقطة البيع */
window.EMDPxV433={
  price:function(p,v){if(!pxOn()||!p||!(v>0))return v;return pxInfo(p,v).eff},
  line:function(p,q,price){var R={qd:0,pn:'',qn:'',rp:0};if(!p||!pxOn())return R;var I=pxInfo(p,rawPrice(p));R.rp=I.base;
    if(I.po&&Math.abs(num(price)-I.eff)<0.0005)R.pn=I.po.n||ofWhat(I.po);
    if(I.qo){var bx=Math.max(1,Math.round(num(I.qo.bx))),gy=Math.max(1,Math.round(num(I.qo.gy))),free=Math.floor(num(q)/(bx+gy))*gy;if(free>0){R.qd=r3(free*num(price));R.qn=I.qo.n||ofWhat(I.qo)}}
    return R},
  grid:function(p,pr,fmt){if(!pxOn())return fmt(pr);var I=pxInfo(p,rawPrice(p));return (I.po&&I.base>pr?'<s style="opacity:.55;font-weight:400;font-size:.8em">'+fmt(I.base)+'</s> ':'')+fmt(pr)+(I.qo?'<small style="display:block;color:#b45309;font-weight:600;font-size:11px">🎁 '+qf(num(I.qo.bx)||1)+' + '+qf(num(I.qo.gy)||1)+' مجانًا</small>':'')},
  tag:function(l){return l&&l.ofn?' <small style="display:inline-block;color:#b45309;background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:0 6px;font-weight:600">🏷️ '+esc(l.ofn)+'</small>':''},
  open:function(){open('px')}
};

/* ===== V435: لوحة المالك الموحّدة — مقارنة الفروع، الاتجاه اليومي، ما يحتاج انتباهك ===== */
var dPer='today',dRep=null,dBusy=false;
function dRange(per){var a=new Date();a.setHours(0,0,0,0);var b=new Date(a.getTime()+864e5);if(per==='7')a=new Date(a.getTime()-6*864e5);else if(per==='30')a=new Date(a.getTime()-29*864e5);else if(per==='month')a.setDate(1);
  var len=b-a,pa,pb;if(per==='month'){pa=new Date(a.getFullYear(),a.getMonth()-1,1);pb=new Date(pa.getTime()+(Date.now()-a.getTime()))}else{pa=new Date(a.getTime()-len);pb=a}
  return {a:a,b:b,pa:pa,pb:pb}}
function dLoad(){if(dBusy)return;var r=dRange(dPer),per=dPer;
  if(!cloud()){dRep={per:per,cur:dLocal(r.a,r.b),prev:localRep(r.pa,r.pb),local:true};return}
  dBusy=true;watchSales(true);
  sync().catch(function(){}).then(function(){return Promise.all([call('report',{from:r.a.toISOString(),to:r.b.toISOString()}),call('report',{from:r.pa.toISOString(),to:r.pb.toISOString()})])})
  .then(function(x){dBusy=false;dRep={per:per,cur:x[0],prev:x[1]};paintIfOpen()})
  .catch(function(){dBusy=false;dRep={per:per,cur:dLocal(r.a,r.b),prev:localRep(r.pa,r.pb),local:true,off:true};paintIfOpen()})}
function dLocal(a,b){var r=localRep(a,b),m={},DV=window.EMDDirectV113;((D()||{}).directSales||[]).forEach(function(x){var t=new Date(x.at);if(!(t>=a&&t<b)||(DV&&DV.statusOf(x)==='void'))return;var k=t.getFullYear()+'-'+('0'+(t.getMonth()+1)).slice(-2)+'-'+('0'+t.getDate()).slice(-2);m[k]=(m[k]||0)+(DV?DV.netTotal(x):num(x.total))});r.days=Object.keys(m).map(function(k){return {dy:k,t:m[k]}});return r}
function dSum(rep){var T={t:0,n:0,cs:0,ot:0,o:0,due:0,cash:0,card:0,tr:0,oth:0};(rep&&rep.branches||[]).forEach(function(b){for(var k in T)T[k]+=num(b[k])});return T}
function dDelta(cur,prev){if(!(prev>0))return cur>0?'<span class="e435up">جديد</span>':'';var p=Math.round((cur-prev)/prev*100);return '<span class="'+(p>=0?'e435up':'e435dn')+'">'+(p>=0?'▲ ':'▼ ')+Math.abs(p)+'٪</span>'}
function dPct(a,b){return b>0?Math.round(a/b*100):0}
function dTrend(rep){var m={};(rep.days||[]).forEach(function(x){m[x.dy]=(m[x.dy]||0)+num(x.t)});var r=dRange(dPer),days=[];
  for(var t=new Date(r.a);t<r.b;t=new Date(t.getTime()+864e5)){var k=t.getFullYear()+'-'+('0'+(t.getMonth()+1)).slice(-2)+'-'+('0'+t.getDate()).slice(-2);days.push({k:k,v:m[k]||0})}
  if(days.length<2)return '';var mx=Math.max.apply(null,days.map(function(d){return d.v}).concat([1])),W=320,H=110,bw=W/days.length,best=days.reduce(function(a,d){return d.v>a.v?d:a},days[0]);
  var bars=days.map(function(d,i){var h=Math.max(d.v>0?3:1,Math.round(d.v/mx*(H-22)));return '<rect x="'+(i*bw+bw*0.15).toFixed(1)+'" y="'+(H-14-h)+'" width="'+(bw*0.7).toFixed(1)+'" height="'+h+'" rx="2" fill="'+(d===best&&d.v>0?'#f59e0b':'#1e3a8a')+'"><title>'+d.k+': '+mf(d.v)+'</title></rect>'}).join('');
  var lab=function(i){return '<text x="'+(i*bw+bw/2).toFixed(1)+'" y="'+(H-2)+'" font-size="9" text-anchor="middle" fill="#64748b">'+days[i].k.slice(8)+'</text>'};
  var labs=[0,Math.floor(days.length/2),days.length-1].map(lab).join('');
  return '<div class="cd"><h4>📅 المبيعات يومًا بيوم</h4><svg viewBox="0 0 '+W+' '+H+'" style="width:100%;height:auto;display:block" role="img" aria-label="مبيعات كل يوم">'+bars+labs+'</svg>'+
    (best.v>0?'<div class="mut" style="margin-top:6px">أفضل يوم: <b>'+esc(best.k)+'</b> بمبيعات '+mf(best.v)+'</div>':'')+'</div>'}
function dAlerts(T){var A=[],cl=cloud();
  activeWs().forEach(function(w){var t=totals(w.id);if(t.low)A.push(['stock:'+w.id,'📦','<b>'+esc(w.n)+'</b>: '+t.low+(t.low===1?' منتج منخفض أو نافد':' منتجات منخفضة أو نافدة')])});
  if(cl){var na=actionable().length;if(na)A.push(['req','📨',na+(na===1?' طلب تحويل بانتظار إجرائك':' طلبات تحويل بانتظار إجرائك')])}
  if(canBuy()){var P=pos().filter(function(p){return Array.isArray(p.items)&&p.status!=='cancelled'}),open=P.filter(function(p){return p.status==='ordered'||p.status==='partial'}).length,due=0,late=0,td=today();
    P.forEach(function(p){var r=poRem(p);due+=r;if(r>0&&p.supplierDueDate&&p.supplierDueDate<td)late++});
    if(open)A.push(['buy','🧾',open+(open===1?' أمر شراء بانتظار الاستلام':' أوامر شراء بانتظار الاستلام')]);
    if(due>0.0005)A.push(['buy','💸','مستحقات للموردين: <b>'+mf(due)+'</b>'+(late?' · <span style="color:#b91c1c">'+late+' متأخر</span>':'')])}
  if(T.due>0.0005)A.push(['rep','⏳','مبيعات آجلة غير محصّلة في هذه الفترة: <b>'+mf(T.due)+'</b>']);
  var bs=(dRep.cur.branches||[]);if(cl&&bs.length){co().b.filter(function(b){return b.on!==false}).forEach(function(b){if(!bs.some(function(x){return x.b===b.id&&(num(x.t)+num(x.ot))>0}))A.push(['rep','🔕','لا مبيعات في <b>'+esc(b.n)+'</b> خلال هذه الفترة'])})}
  return '<div class="cd"><h4>⚠️ يحتاج انتباهك</h4>'+(A.length?A.map(function(a){return '<button type="button" class="e435al" data-dgo="'+a[0]+'"><i>'+a[1]+'</i><span>'+a[2]+'</span><em>←</em></button>'}).join(''):'<div class="mut">✓ لا يوجد ما يحتاج انتباهك الآن.</div>')+'</div>'}
function vDash(){var h='<div class="cd"><div class="chips">'+[['today','اليوم'],['7','آخر 7 أيام'],['30','آخر 30 يومًا'],['month','هذا الشهر']].map(function(x){return '<button type="button" data-dper="'+x[0]+'" class="'+(dPer===x[0]?'on':'')+'">'+x[1]+'</button>'}).join('')+'</div>'+
    (cloud()?'':'<div class="mut" style="margin-top:8px">الأرقام من هذا الجهاز فقط. فعّل السحابة المشتركة لترى جميع الفروع معًا.</div>')+'</div>';
  if(!dRep||dRep.per!==dPer){dLoad();if(!dRep||dRep.per!==dPer)return h+'<div class="empty">جارٍ تجهيز اللوحة…</div>'}
  if(dRep.off)h+='<div class="note">تعذّر الاتصال بالسحابة، فالأرقام من هذا الجهاز فقط.</div>';
  var T=dSum(dRep.cur),P=dSum(dRep.prev),all=T.t+T.ot,pall=P.t+P.ot,pf=T.t-T.cs,ppf=P.t-P.cs,cmp=dPer==='today'?'مقارنة بالأمس':dPer==='month'?'مقارنة بالفترة نفسها من الشهر الماضي':'مقارنة بالفترة السابقة';
  h+='<div class="cd hero"><div class="mut">إجمالي المبيعات · '+cmp+'</div><div class="e435big">'+mf(all)+' '+dDelta(all,pall)+'</div>'+
    '<div class="kv"><div><b>'+mf(pf)+'</b><small>الربح التقديري '+dDelta(pf,ppf)+'</small></div><div><b>'+dPct(pf,T.t)+'٪</b><small>هامش الربح</small></div><div><b>'+T.n+'</b><small>فاتورة · '+T.o+' طلب أونلاين</small></div></div></div>';
  h+='<div class="sum4"><div class="st"><small>متوسط الفاتورة</small><b>'+mf(T.n?T.t/T.n:0)+'</b></div><div class="st"><small>💵 نقدًا</small><b>'+mf(T.cash)+'</b></div><div class="st"><small>💳 بطاقة وتحويل</small><b>'+mf(T.card+T.tr+T.oth)+'</b></div><div class="st"><small>🛍️ أونلاين</small><b>'+mf(T.ot)+'</b></div></div><div style="height:12px"></div>';
  h+=dAlerts(T);
  var bs=(dRep.cur.branches||[]).slice().sort(function(a,b){return (num(b.t)+num(b.ot))-(num(a.t)+num(a.ot))}),pb={};(dRep.prev.branches||[]).forEach(function(b){pb[b.b||'']=num(b.t)+num(b.ot)});
  var med=['🥇','🥈','🥉'];
  h+='<div class="cd"><h4>🏆 ترتيب الفروع</h4>'+(bs.length?bs.map(function(b,i){var v=num(b.t)+num(b.ot),p=num(b.t)-num(b.cs);
    return '<div class="brc"><div class="top"><b>'+(med[i]||'')+' '+esc(bName(b.b))+'</b><span style="margin-inline-start:auto">'+mf(v)+' '+dDelta(v,pb[b.b||'']||0)+'</span></div>'+
     '<div class="bar"><i style="width:'+Math.max(3,dPct(v,all))+'%"></i></div>'+
     '<div class="mini"><span>'+dPct(v,all)+'٪ من مبيعات الشركة</span><span>الربح '+mf(p)+' ('+dPct(p,num(b.t))+'٪)</span><span>'+num(b.n)+' فاتورة · متوسط '+mf(num(b.n)?num(b.t)/num(b.n):0)+'</span>'+(num(b.due)?'<span style="color:#b45309">⏳ آجل '+mf(b.due)+'</span>':'')+'</div></div>'}).join(''):'<div class="empty">لا توجد مبيعات في هذه الفترة</div>')+'</div>';
  if(dPer!=='today')h+=dTrend(dRep.cur);
  var m={};(dRep.cur.top||[]).forEach(function(x){var o=m[x.n]||(m[x.n]={n:x.n,q:0,v:0});o.q+=num(x.q);o.v+=num(x.v)});var top=Object.keys(m).map(function(k){return m[k]}).sort(function(a,b){return b.v-a.v}).slice(0,5);
  if(top.length)h+='<div class="cd"><h4>⭐ الأكثر مبيعًا في الشركة</h4>'+top.map(function(x,i){return '<div class="pr" style="cursor:default"><span class="nm"><b>'+(i+1)+'. '+esc(x.n)+'</b><span class="mut">'+qf(x.q)+' قطعة</span></span><span class="tot" style="font-size:14px">'+mf(x.v)+'</span></div>'}).join('')+'</div>';
  var sv=0,su=0;activeWs().forEach(function(w){var t=totals(w.id);sv+=t.v;su+=t.u});
  h+='<div class="cd"><h4>📦 المخزون في كل المخازن</h4><div class="row"><span class="grow">'+qf(su)+' قطعة في '+activeWs().length+' مخزن</span><b>'+mf(sv)+'</b></div><div class="mut" style="margin-top:4px">القيمة بسعر التكلفة. التفاصيل في تبويب «📊 التقارير».</div></div>';
  return h}
function dashClick(t){var p=t.closest('[data-dper]');if(p){dPer=p.getAttribute('data-dper');paint();return true}
  var g=t.closest('[data-dgo]');if(g){var v=g.getAttribute('data-dgo');if(v.indexOf('stock:')===0){fW=v.slice(6);v='stock'}tab=v;sub=null;if(v==='rep')rep=null;paint.reset=true;paint();return true}
  return false}

/* ===== V436: المصروفات والأرباح لكل فرع ===== */
var fPer='month',fRep=null,fBusy=false,expAt=0,EXK='emd436_seen';
function exps(){var d=D()||{};return Array.isArray(d.expenses)?d.expenses:[]}
function expSel(ed){if(mode()!=='company')return '';var c=co(),bs=c.b.filter(function(b){return b.on!==false});if(!bs.length)return '';
  var sel=ed?(ed.branch!=null?ed.branch:myBranch()):myBranch();
  return '<select id="e436B" aria-label="الفرع"><option value="">🏢 عام للشركة</option>'+bs.map(function(b){return '<option value="'+b.id+'"'+(b.id===sel?' selected':'')+'>🏬 '+esc(b.n)+'</option>'}).join('')+'</select>'}
function expVal(ex){var s=$('e436B');if(s&&ex)ex.branch=s.value;expAt=0}
function expRow(x){return {id:String(x.id||''),b:x.branch==null?'*':String(x.branch),d:String(x.date||'').slice(0,10),a:num(x.amount),c:String(x.category||'أخرى').slice(0,60),n:String(x.name||'').slice(0,120)}}
/* رفع المصروفات المتغيّرة فقط، وحذف ما حُذف من هذا الجهاز */
function pushExp(force){var cl=cloud();if(!cl||cl.revoked)return Promise.resolve();if(!force&&Date.now()-expAt<60000)return Promise.resolve();expAt=Date.now();
  var SN=rd(EXK,{}),up=[],live={};exps().forEach(function(x){if(!x||!x.id)return;var r=expRow(x),h=JSON.stringify(r);live[r.id]=1;if(SN[r.id]!==h)up.push(r)});
  var del=Object.keys(SN).filter(function(k){return !live[k]});if(!up.length&&!del.length)return Promise.resolve();
  up=up.slice(0,500);return call('exp',{up:up,del:del.slice(0,500)}).then(function(){up.forEach(function(r){SN[r.id]=JSON.stringify(r)});del.forEach(function(k){delete SN[k]});wr(EXK,SN)}).catch(function(){expAt=0})}
function fRange(per){var n=new Date(),a,b;if(per==='last'){a=new Date(n.getFullYear(),n.getMonth()-1,1);b=new Date(n.getFullYear(),n.getMonth(),1)}else if(per==='q'){a=new Date(n.getFullYear(),n.getMonth()-2,1);b=new Date(n.getFullYear(),n.getMonth()+1,1)}else if(per==='year'){a=new Date(n.getFullYear(),0,1);b=new Date(n.getFullYear()+1,0,1)}else{a=new Date(n.getFullYear(),n.getMonth(),1);b=new Date(n.getFullYear(),n.getMonth()+1,1)}return [a,b]}
function dk(t){return t.getFullYear()+'-'+('0'+(t.getMonth()+1)).slice(-2)+'-'+('0'+t.getDate()).slice(-2)}
function localExp(a,b){var sa=dk(a),sb=dk(b),m={},br=myBranch();exps().forEach(function(x){var q=String(x.date||'').slice(0,10);if(!(q>=sa&&q<sb))return;var bb=x.branch==null?br:x.branch,c=String(x.category||'أخرى'),k=bb+'|'+c;var o=m[k]||(m[k]={b:bb||null,c:c,a:0});o.a+=num(x.amount)});return Object.keys(m).map(function(k){return m[k]})}
function fLoad(){if(fBusy)return;var r=fRange(fPer),per=fPer;
  if(!cloud()){fRep={per:per,sales:localRep(r[0],r[1]),exp:localExp(r[0],r[1]),local:true};return}
  fBusy=true;watchSales(true);
  sync().catch(function(){}).then(function(){return pushExp(true)}).then(function(){return Promise.all([call('report',{from:r[0].toISOString(),to:r[1].toISOString()}),call('pnl',{from:dk(r[0]),to:dk(r[1])})])})
  .then(function(x){fBusy=false;fRep={per:per,sales:x[0],exp:x[1].exp||[]};paintIfOpen()})
  .catch(function(){fBusy=false;fRep={per:per,sales:localRep(r[0],r[1]),exp:localExp(r[0],r[1]),local:true,off:true};paintIfOpen()})}
function vFin(){var h='<div class="cd"><div class="chips">'+[['month','هذا الشهر'],['last','الشهر الماضي'],['q','آخر 3 أشهر'],['year','هذه السنة']].map(function(x){return '<button type="button" data-fper="'+x[0]+'" class="'+(fPer===x[0]?'on':'')+'">'+x[1]+'</button>'}).join('')+'</div>'+
    (cloud()?'':'<div class="mut" style="margin-top:8px">الأرقام من هذا الجهاز فقط. فعّل السحابة المشتركة لتجمع مصروفات وأرباح كل الفروع.</div>')+'</div>';
  if(!fRep||fRep.per!==fPer){fLoad();if(!fRep||fRep.per!==fPer)return h+'<div class="empty">جارٍ تجهيز تقرير الأرباح…</div>'}
  if(fRep.off)h+='<div class="note">تعذّر الاتصال بالسحابة، فالأرقام من هذا الجهاز فقط.</div>';
  var R={},ids=[];function g(b){b=b||'';if(!R[b]){R[b]={b:b,s:0,cs:0,e:0,cats:{}};ids.push(b)}return R[b]}
  (fRep.sales.branches||[]).forEach(function(x){var o=g(x.b);o.s+=num(x.t)+num(x.ot);o.cs+=num(x.cs)});
  (fRep.exp||[]).forEach(function(x){var o=g(x.b);o.e+=num(x.a);o.cats[x.c]=(o.cats[x.c]||0)+num(x.a)});
  var T={s:0,cs:0,e:0},cats={};ids.forEach(function(k){var o=R[k];T.s+=o.s;T.cs+=o.cs;T.e+=o.e;for(var c in o.cats)cats[c]=(cats[c]||0)+o.cats[c]});
  var gp=T.s-T.cs,np=gp-T.e;
  h+='<div class="cd hero"><div class="mut">صافي ربح الشركة</div><div class="e435big" style="color:'+(np>=0?'#86efac':'#fca5a5')+'">'+mf(np)+'</div>'+
    '<div class="kv"><div><b>'+mf(T.s)+'</b><small>المبيعات</small></div><div><b>'+mf(gp)+'</b><small>مجمل الربح</small></div><div><b>'+mf(T.e)+'</b><small>المصروفات</small></div></div></div>';
  var br=ids.filter(function(k){return k}).map(function(k){return R[k]}).sort(function(a,b){return (b.s-b.cs-b.e)-(a.s-a.cs-a.e)}),gen=R['']||null;
  var row=function(o,title){var gp1=o.s-o.cs,np1=gp1-o.e,cs=Object.keys(o.cats).sort(function(a,b){return o.cats[b]-o.cats[a]});
    return '<div class="brc"><div class="top"><b>'+title+'</b><span style="margin-inline-start:auto;font-weight:900;color:'+(np1>=0?'#166534':'#b91c1c')+'">'+mf(np1)+'</span></div>'+
      '<div class="e436t"><span>المبيعات</span><b>'+mf(o.s)+'</b><span>− تكلفة البضاعة</span><b>'+mf(o.cs)+'</b><span>= مجمل الربح</span><b>'+mf(gp1)+'</b><span>− المصروفات</span><b>'+mf(o.e)+'</b><span>= صافي الربح</span><b style="color:'+(np1>=0?'#166534':'#b91c1c')+'">'+mf(np1)+(o.s>0?' ('+Math.round(np1/o.s*100)+'٪)':'')+'</b></div>'+
      (cs.length?'<div class="mini">'+cs.map(function(c){return '<span>'+esc(c)+' '+mf(o.cats[c])+'</span>'}).join('')+'</div>':'')+'</div>'};
  h+='<div class="cd"><h4>🏬 ربح كل فرع</h4>'+(br.length?br.map(function(o){return row(o,esc(bName(o.b)))}).join(''):'')+(gen&&(gen.s||gen.e)?row(gen,'🏢 '+(co().b.length?'عام للشركة / بدون فرع':'المحل')):'')+(!br.length&&!(gen&&(gen.s||gen.e))?'<div class="empty">لا توجد مبيعات أو مصروفات في هذه الفترة</div>':'')+'</div>';
  var ck=Object.keys(cats).sort(function(a,b){return cats[b]-cats[a]});
  if(ck.length)h+='<div class="cd"><h4>💸 المصروفات حسب التصنيف</h4>'+ck.map(function(c){return '<div class="brc" style="padding:9px 12px"><div class="top"><b>'+esc(c)+'</b><span style="margin-inline-start:auto">'+mf(cats[c])+'</span></div><div class="bar"><i style="width:'+Math.max(3,Math.round(cats[c]/T.e*100))+'%"></i></div></div>'}).join('')+'</div>';
  h+='<div class="cd"><button type="button" class="b1" data-a="e436add" style="width:100%">➕ تسجيل مصروف</button><div class="mut" style="margin-top:6px">يُسجَّل المصروف من نافذة «💸 المصروفات» المعتادة، مع اختيار الفرع. تكلفة طلبات الأونلاين غير محسوبة في هذا التقرير إن لم تُسجَّل تكلفة المنتج.</div></div>';
  return h}
function finClick(t){var p=t.closest('[data-fper]');if(p){fPer=p.getAttribute('data-fper');paint();return true}
  if(t.closest('[data-a="e436add"]')){close();try{if(window.EMDMoneyV75&&EMDMoneyV75.open)EMDMoneyV75.open('exp');else if(typeof window.emdV214Expenses==='function')window.emdV214Expenses()}catch(e){}return true}
  return false}

/* ===== V437: أداء الموظفين وعمولاتهم ===== */
var sPer='month',sRep=null,sBusy=false,sCfg=false;
function cmCfg(){var x=pxObj().cm;x=x&&typeof x==='object'?x:{};return {on:!!x.on,basis:x.basis==='profit'?'profit':'sales',def:Math.max(0,num(x.def)),by:x.by&&typeof x.by==='object'?x.by:{}}}
function cmRate(c,n){var v=c.by[n];return v!==undefined&&v!==''&&v!==null?Math.max(0,num(v)):c.def}
function sRange(per){var n=new Date(),a,b;if(per==='today'){a=new Date(n.getFullYear(),n.getMonth(),n.getDate());b=new Date(a.getTime()+864e5)}else if(per==='last'){a=new Date(n.getFullYear(),n.getMonth()-1,1);b=new Date(n.getFullYear(),n.getMonth(),1)}else if(per==='7'){b=new Date(n.getFullYear(),n.getMonth(),n.getDate()+1);a=new Date(b.getTime()-7*864e5)}else{a=new Date(n.getFullYear(),n.getMonth(),1);b=new Date(n.getFullYear(),n.getMonth()+1,1)}return [a,b]}
function localStaff(a,b){var DV=window.EMDDirectV113,m={},br=myBranch()||null;
  ((D()||{}).directSales||[]).forEach(function(s){var t=new Date(s.at);if(!(t>=a&&t<b))return;var r=saleRow(s);if(r.st==='void')return;var n=r.by||'المدير',o=m[n]||(m[n]={s:n,b:br,n:0,t:0,cs:0});o.n++;o.t+=r.t;o.cs+=r.cs});
  return Object.keys(m).map(function(k){return m[k]})}
function sLoad(){if(sBusy)return;var r=sRange(sPer),per=sPer;
  if(!cloud()){sRep={per:per,list:localStaff(r[0],r[1]),local:true};return}
  sBusy=true;watchSales(true);
  sync().catch(function(){}).then(function(){return call('staff',{from:r[0].toISOString(),to:r[1].toISOString()})})
  .then(function(j){sBusy=false;sRep={per:per,list:j.list||[]};paintIfOpen()})
  .catch(function(){sBusy=false;sRep={per:per,list:localStaff(r[0],r[1]),local:true,off:true};paintIfOpen()})}
function vStaff(){var c=cmCfg(),ed=isBoss()&&(!cloud()||cloud().owner);
  var h='<div class="cd"><div class="chips">'+[['today','اليوم'],['7','آخر 7 أيام'],['month','هذا الشهر'],['last','الشهر الماضي']].map(function(x){return '<button type="button" data-sper="'+x[0]+'" class="'+(sPer===x[0]?'on':'')+'">'+x[1]+'</button>'}).join('')+'</div>'+
    (cloud()?'':'<div class="mut" style="margin-top:8px">الأرقام من هذا الجهاز فقط. فعّل السحابة المشتركة لترى موظفي كل الفروع.</div>')+'</div>';
  h+='<div class="e434lp'+(c.on?'':' off')+'" style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;border-radius:14px;padding:10px 12px;margin-bottom:12px;font-size:13.5px;'+(c.on?'background:#fffbeb;border:1px solid #fde68a;color:#78350f':'background:#f8fafc;border:1px solid #e2e8f0;color:#475569')+'"><span>'+
    (c.on?'💰 <b>العمولات مفعّلة</b> · '+c.def+'٪ من '+(c.basis==='profit'?'الربح':'المبيعات')+' (افتراضيًا)':'💰 العمولات غير مفعّلة. فعّلها لتحسب عمولة كل موظف تلقائيًا.')+'</span>'+
    (ed?'<button type="button" class="b3 bs" data-a="e437cfg">'+(sCfg?'إخفاء الإعداد':(c.on?'⚙️ الإعداد':'تفعيل'))+'</button>':'')+'</div>';
  if(!sRep||sRep.per!==sPer){sLoad();if(!sRep||sRep.per!==sPer)return h+'<div class="empty">جارٍ تجهيز أداء الموظفين…</div>'}
  if(sRep.off)h+='<div class="note">تعذّر الاتصال بالسحابة، فالأرقام من هذا الجهاز فقط.</div>';
  var m={};(sRep.list||[]).forEach(function(x){var n=x.s||'غير معروف',o=m[n]||(m[n]={n:n,bs:{},c:0,t:0,cs:0});o.c+=num(x.n);o.t+=num(x.t);o.cs+=num(x.cs);if(x.b)o.bs[x.b]=1});
  var L=Object.keys(m).map(function(k){var o=m[k];o.p=o.t-o.cs;o.r=cmRate(c,o.n);o.cm=c.on?r3((c.basis==='profit'?Math.max(0,o.p):o.t)*o.r/100):0;return o}).sort(function(a,b){return b.t-a.t});
  var S=staffObj(),names={};(Array.isArray(S.staff)?S.staff:[]).forEach(function(s){if(s&&s.name&&s.active!==false)names[s.name]=1});
  if(sCfg&&ed){var all=Object.keys(names);L.forEach(function(o){if(!names[o.n])all.push(o.n)});
    h+='<div class="cd"><h4>⚙️ إعداد العمولات</h4><label class="row" style="gap:8px;font-weight:800;margin-bottom:8px"><input type="checkbox" id="e437on"'+(c.on?' checked':'')+' style="width:22px;height:22px"> تفعيل العمولات</label>'+
      '<div class="row" style="gap:8px;margin-bottom:8px"><select id="e437basis" class="grow"><option value="sales"'+(c.basis==='sales'?' selected':'')+'>نسبة من المبيعات</option><option value="profit"'+(c.basis==='profit'?' selected':'')+'>نسبة من الربح</option></select><input id="e437def" inputmode="decimal" value="'+esc(c.def)+'" style="width:90px" aria-label="النسبة الافتراضية ٪"><b>٪</b></div>'+
      (all.length?'<div class="mut" style="margin-bottom:6px">نسبة خاصة لموظف (اتركها فارغة لتُطبَّق النسبة الافتراضية):</div>'+all.map(function(n,i){return '<div class="row" style="gap:8px;margin-bottom:6px"><span class="grow">'+esc(n)+'</span><input data-cmn="'+esc(n)+'" inputmode="decimal" value="'+esc(c.by[n]!=null?c.by[n]:'')+'" placeholder="'+esc(c.def)+'" style="width:90px"><b>٪</b></div>'}).join(''):'')+
      '<button type="button" class="b1" data-a="e437save" style="width:100%;margin-top:6px">حفظ الإعداد</button>'+(cloud()?'<div class="mut" style="margin-top:6px">يصل الإعداد إلى جميع الفروع.</div>':'')+'</div>'}
  var T=L.reduce(function(a,o){a.t+=o.t;a.c+=o.c;a.cm+=o.cm;return a},{t:0,c:0,cm:0});
  h+='<div class="sum4"><div class="st"><small>موظفون باعوا</small><b>'+L.length+'</b></div><div class="st"><small>المبيعات</small><b>'+mf(T.t)+'</b></div><div class="st"><small>الفواتير</small><b>'+T.c+'</b></div><div class="st"><small>'+(c.on?'إجمالي العمولات':'متوسط الفاتورة')+'</small><b>'+mf(c.on?T.cm:(T.c?T.t/T.c:0))+'</b></div></div><div style="height:12px"></div>';
  var med=['🥇','🥈','🥉'],mx=L.length?L[0].t:1;
  h+='<div class="cd"><h4>🏆 ترتيب الموظفين</h4>'+(L.length?L.map(function(o,i){var bs=Object.keys(o.bs).map(bName).join('، ');
    return '<div class="brc"><div class="top"><b>'+(med[i]||'')+' '+esc(o.n)+'</b><span style="margin-inline-start:auto">'+mf(o.t)+'</span></div><div class="bar"><i style="width:'+Math.max(3,Math.round(o.t/(mx||1)*100))+'%"></i></div>'+
      '<div class="mini"><span>'+o.c+' فاتورة</span><span>متوسط '+mf(o.c?o.t/o.c:0)+'</span><span>الربح '+mf(o.p)+'</span>'+(bs&&cloud()?'<span>'+esc(bs)+'</span>':'')+(c.on?'<span style="color:#92400e;font-weight:800">💰 العمولة '+mf(o.cm)+' ('+o.r+'٪)</span>':'')+'</div></div>'}).join(''):'<div class="empty">لا توجد مبيعات للموظفين في هذه الفترة</div>')+'</div>';
  if(c.on&&L.length)h+='<div class="cd"><button type="button" class="b3" data-a="e437wa" style="width:100%">📤 مشاركة كشف العمولات</button></div>';
  h+='<div class="mut" style="padding:0 4px 8px">يُحسب البيع للموظف الذي أتمّ الفاتورة في البيع المباشر، وتُستبعد الفواتير الملغاة.</div>';
  sRep.L=L;return h}
function staffClick(t){var p=t.closest('[data-sper]');if(p){sPer=p.getAttribute('data-sper');paint();return true}
  if(t.closest('[data-a="e437cfg"]')){sCfg=!sCfg;paint();return true}
  if(t.closest('[data-a="e437save"]')){var by={};[].forEach.call(document.querySelectorAll('#emd430 [data-cmn]'),function(i){var v=String(i.value||'').trim();if(v!=='')by[i.getAttribute('data-cmn')]=Math.max(0,num(v))});
    var on=$('e437on'),cm={on:!!(on&&on.checked),basis:$('e437basis').value,def:Math.max(0,num($('e437def').value)),by:by};
    if(cm.def>100||Object.keys(by).some(function(k){return by[k]>100})){toast('النسبة يجب ألا تتجاوز 100٪');return true}
    pxObj().cm=cm;pxSave();sCfg=false;toast(cm.on?'✓ تم تفعيل العمولات':'✓ تم حفظ الإعداد');paint();return true}
  if(t.closest('[data-a="e437wa"]')){var L=(sRep&&sRep.L)||[],c=cmCfg(),r=sRange(sPer),f=function(d){return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2)};
    var x=['💰 كشف عمولات الموظفين — '+(co().name||bizName()),'الفترة: '+f(r[0])+' إلى '+f(new Date(r[1].getTime()-864e5)),''];
    L.forEach(function(o){x.push('• '+o.n+': مبيعات '+mf(o.t)+' · العمولة '+mf(o.cm)+' ('+o.r+'٪)')});
    x.push('','إجمالي العمولات: '+mf(L.reduce(function(a,o){return a+o.cm},0)));
    var u='https://wa.me/?text='+(window.EMDEncWaV129||encodeURIComponent)(x.join('\n'));window.open(u,'_blank');return true}
  return false}

/* ===== واجهة للأجزاء الأخرى ===== */
window.EMDCoV430={open:open,close:close,sync:function(){return sync(true)},state:co,cloud:cloud,call:call,pxSet:function(k,v){pxObj()[k]=v;pxSave()},expSel:expSel,expVal:expVal,qty:qty,
  storeQty:function(p){var c=co();if(!p||!p.uid||!c.storeWh||c.storeWh===c.wh)return num(p.stock!=null?p.stock:p.qty);return qty(c.storeWh,p.uid)},
  here:function(s){var cl=cloud();if(!s||!s.branch||!cl||cl.owner)return true;return !cl.b||s.branch===cl.b},
  _watch:watch,_change:change,_chip:chip};

var last=0;
function tick(){var on=mode()==='company'||!!cloud();if(on){try{watch()}catch(e){}}try{card()}catch(e){}try{chip()}catch(e){}if(!on)return;
  var cl=cloud();if(cl&&!cl.revoked&&Date.now()-last>30000&&document.visibilityState!=='hidden'){last=Date.now();try{watchSales();sync();pushExp()}catch(e){}}}
RW.__coTick=tick;window.addEventListener('online',function(){if(cloud())sync()});
})();

})(window);
