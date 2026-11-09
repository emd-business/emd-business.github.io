/* «🛍️ متجري»: منشئ المتجر وطلباته. يُحمَّل عند الحاجة فقط.
   نُقل من التطبيق الحالي كوحدة واحدة، مع ربطه بالتطبيق الجديد عبر EMDH، وبلا نسخة مضمّنة من صفحة المتجر:
   المعاينة تقرأ صفحة المتجر الحالية نفسها (../store/). في التجربة: لا نشر ولا اعتماد طلبات (القراءة فقط). */
(function(){'use strict';
var EMDH=window.EMDH;
var st=document.createElement('style');st.id='emdStoreCss';st.textContent="\n#e173Btn{display:inline-flex;align-items:center;gap:6px;border:0;border-radius:14px;padding:10px 14px;background:#0f1f3d;color:#f3d98b;font:inherit;font-weight:800;cursor:pointer;box-shadow:0 4px 12px rgba(15,31,61,.18)}\n.e173-card{display:flex;align-items:center;gap:12px;width:100%;margin:12px 0;padding:14px;border:0;border-radius:16px;background:linear-gradient(135deg,#0f1f3d,#1b3263);color:#fff;font:inherit;text-align:right;cursor:pointer}\n.e173-card i{font-style:normal;font-size:26px}.e173-card b{display:block;font-size:16px;color:#f3d98b}.e173-card small{color:#d6dbe7}\n#e173{position:fixed;inset:0;z-index:2147483000;display:none;background:rgba(10,16,30,.55);direction:rtl;text-align:right}\n#e173.show{display:flex;align-items:flex-end;justify-content:center}\n#e173 *{box-sizing:border-box}\n#e173 .w{width:100%;max-width:560px;max-height:94vh;display:flex;flex-direction:column;background:#f6f4ef;border-radius:24px 24px 0 0;overflow:hidden;color:#1c2333;font-size:15px}\n#e173 .hd{display:flex;align-items:center;gap:10px;padding:14px 16px;background:#0f1f3d;color:#fff}\n#e173 .hd h2{margin:0;font-size:18px;flex:1;color:#f3d98b}#e173 .hd small{display:block;color:#c9d0de;font-size:12px;font-weight:400}\n#e173 .hd button{border:0;background:rgba(255,255,255,.12);color:#fff;border-radius:12px;padding:8px 12px;font:inherit;cursor:pointer}\n#e173 .bd{overflow:auto;padding:14px 14px 18px;flex:1;-webkit-overflow-scrolling:touch}\n#e173 .ft{padding:12px 14px calc(12px + env(safe-area-inset-bottom));background:#fff;box-shadow:0 -6px 20px rgba(15,31,61,.08)}\n#e173 .bx{background:#fff;border-radius:18px;padding:14px;margin:0 0 12px;box-shadow:0 2px 8px rgba(15,31,61,.05)}\n#e173 .bx h3{margin:0 0 10px;font-size:16px;color:#0f1f3d}\n#e173 .typ{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n#e173 .typ button{border:2px solid #e2e5ec;background:#fff;border-radius:16px;padding:12px;text-align:right;font:inherit;cursor:pointer;color:#1c2333}\n#e173 .typ button b{display:block;font-size:15px}#e173 .typ button small{color:#6b7280;font-size:12.5px;line-height:1.5;display:block;margin-top:2px}\n#e173 .typ button[aria-pressed=\"true\"]{border-color:#c9a24a;background:#fffaf0;box-shadow:0 0 0 3px rgba(201,162,74,.18)}\n#e173 .in{width:100%;font:inherit;font-size:16px;padding:11px 12px;border-radius:12px;border:1.5px solid #d9dde5;background:#fbfbfd;color:#1c2333}\n#e173 .chips{display:flex;gap:6px;overflow-x:auto;padding:8px 0 4px;scrollbar-width:none}\n#e173 .chips button{flex:none;border:1.5px solid #d9dde5;background:#fff;border-radius:999px;padding:6px 12px;font:inherit;font-size:13.5px;font-weight:700;cursor:pointer;color:#1c2333}\n#e173 .chips button[aria-pressed=\"true\"]{background:#0f1f3d;border-color:#0f1f3d;color:#fff}\n#e173 .cnt{display:flex;justify-content:space-between;align-items:center;gap:8px;font-size:13.5px;color:#5b6475;margin:6px 0}\n#e173 .cnt button{border:0;background:none;color:#8a6410;font:inherit;font-weight:800;cursor:pointer;padding:4px}\n#e173 .catm{display:flex;gap:8px;align-items:flex-start;background:#fffaf0;border:1px solid #f0dca8;border-radius:12px;padding:10px;margin:6px 0;font-size:14px}\n#e173 .lst{max-height:46vh;overflow:auto;border-top:1px solid #eef0f4}\n#e173 .pr{display:flex;align-items:center;gap:10px;padding:9px 2px;border-bottom:1px solid #eef0f4;cursor:pointer}\n#e173 .pr.off{opacity:.5}\n#e173 .pr .ck{width:26px;height:26px;flex:none;border-radius:8px;border:2px solid #cfd4dd;display:grid;place-items:center;color:#fff;font-weight:900}\n#e173 .pr.sel .ck{background:#0f1f3d;border-color:#0f1f3d}\n#e173 .pr .im{width:42px;height:42px;flex:none;border-radius:10px;background:#f1efe9 center/cover;display:grid;place-items:center;font-size:18px}\n#e173 .pr .nm{flex:1;min-width:0}#e173 .pr .nm b{display:block;font-size:14.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n#e173 .pr .nm small{color:#6b7280;font-size:12.5px}#e173 .pr .nm small.r{color:#b91c1c}#e173 .pr .nm small.n{color:#8a6410}\n#e173 .qty{display:flex;align-items:center;gap:4px;flex:none}\n#e173 .qty button{width:34px;height:34px;border-radius:10px;border:0;background:#eef0f4;color:#0f1f3d;font-size:20px;font-weight:800;cursor:pointer}\n#e173 .qty span{min-width:22px;text-align:center;font-weight:800}\n#e173 details{background:#fff;border-radius:18px;padding:12px 14px;margin:0 0 12px}\n#e173 summary{font-weight:800;color:#0f1f3d;cursor:pointer}\n#e173 .op{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 0;border-top:1px solid #eef0f4;font-size:14.5px}\n#e173 .op:first-of-type{border-top:0}\n#e173 .op select,#e173 .op input[type=number]{font:inherit;padding:6px 8px;border-radius:10px;border:1.5px solid #d9dde5;background:#fff;max-width:45%}\n#e173 .op input[type=checkbox]{width:22px;height:22px;accent-color:#0f1f3d;flex:none}\n#e173 .op small{display:block;color:#6b7280;font-size:12.5px}\n#e173 .go{display:block;width:100%;border:0;border-radius:16px;padding:15px;background:#c9a24a;color:#111;font:inherit;font-size:17px;font-weight:800;cursor:pointer;text-align:center}\n#e173 .go:disabled{opacity:.5}\n#e173 .go2{display:block;width:100%;margin-top:8px;border:1.5px solid #d9dde5;border-radius:14px;padding:12px;background:#fff;color:#0f1f3d;font:inherit;font-weight:800;cursor:pointer;text-align:center}\n#e173 .note{background:#eef3ff;border-radius:12px;padding:10px 12px;font-size:14px;color:#1e3a8a;margin:0 0 10px}\n#e173 .bad{background:#fdecec;color:#991b1b;border-radius:12px;padding:10px 12px;font-size:14px;margin:0 0 10px}\n#e173 .url{direction:ltr;text-align:left;word-break:break-all;background:#f4f6fa;border-radius:12px;padding:10px;font-size:12.5px;color:#334155;margin:0 0 10px;max-height:84px;overflow:auto}\n#e173 .sh{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n#e173 .sh button,#e173 .sh a{border:0;border-radius:14px;padding:13px 8px;font:inherit;font-weight:800;cursor:pointer;text-align:center;text-decoration:none;background:#0f1f3d;color:#fff;font-size:14.5px}\n#e173 .sh .wa{background:#1f9d55;grid-column:1/-1;font-size:16px}\n#e173 .okk{text-align:center;margin:4px 0 12px}#e173 .okk div{font-size:40px}#e173 .okk b{display:block;font-size:18px;color:#0f1f3d}\n#e173 .qr{text-align:center}#e173 .qr img{width:220px;max-width:80%;image-rendering:pixelated;border-radius:12px;background:#fff;padding:6px}\n#e173 .cu{display:flex;justify-content:space-between;width:100%;border:0;border-bottom:1px solid #eef0f4;background:none;padding:10px 4px;font:inherit;cursor:pointer;color:#1c2333;text-align:right}\n#e173 .rc{display:flex;align-items:center;gap:8px;padding:9px 0;border-top:1px solid #eef0f4;font-size:14px}\n#e173 .rc:first-of-type{border-top:0}#e173 .rc span{flex:1;min-width:0}#e173 .rc small{display:block;color:#6b7280;font-size:12px}\n#e173 .rc button{border:1.5px solid #d9dde5;background:#fff;border-radius:10px;padding:6px 10px;font:inherit;font-size:13px;font-weight:700;cursor:pointer}\n#e173 .kill{display:flex;align-items:center;gap:10px;background:#fff;border-radius:16px;padding:12px 14px;margin:0 0 12px;font-size:14.5px}\n#e173 .kill.on{background:#fdecec;color:#991b1b}\n#e173 .kill input{width:22px;height:22px;accent-color:#b91c1c}\n#e173Toast{position:fixed;left:50%;bottom:90px;transform:translateX(-50%);z-index:2147483001;background:#0f1f3d;color:#fff;padding:10px 16px;border-radius:12px;font-weight:700;opacity:0;transition:opacity .2s;pointer-events:none;max-width:90vw;text-align:center}\n#e173Toast.show{opacity:1}\n\n\n#emd411Btn{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line,#e4e8ef);background:var(--card,#fff);color:var(--text,#18202a);border-radius:12px;padding:10px 14px;font-weight:800;cursor:pointer}\n@media(max-width:760px),(pointer:coarse) and (max-width:1400px){header #emd411Btn{display:none!important}}\n#emd411Store{display:none;position:fixed;inset:0;z-index:100700;background:rgba(15,23,42,.5);direction:rtl;align-items:stretch;justify-content:center}\n#emd411Store.show{display:flex}\n#emd411Store .win{width:min(760px,100%);background:var(--card,#fff);color:var(--text,#18202a);display:flex;flex-direction:column;max-height:100%;box-shadow:0 0 50px rgba(0,0,0,.3)}\n@media(min-width:780px){#emd411Store{align-items:center;padding:24px}#emd411Store .win{border-radius:22px;max-height:calc(100vh - 48px)}}\n#emd411Store .hd{display:flex;align-items:center;gap:10px;padding:14px 16px 10px;border-bottom:1px solid var(--line,#e4e8ef)}\n#emd411Store .hd h2{margin:0;font-size:18px;flex:1}\n#emd411Store .hd small{display:block;font-size:12px;color:var(--muted,#687384);font-weight:600;margin-top:2px}\n#emd411Store .x{border:1px solid var(--line,#e4e8ef);background:var(--card,#fff);color:var(--text,#18202a);border-radius:12px;padding:8px 14px;font-weight:800;cursor:pointer}\n#emd411Store .tabs{display:flex;gap:6px;overflow-x:auto;padding:10px 16px;border-bottom:1px solid var(--line,#e4e8ef);scrollbar-width:none}\n#emd411Store .tabs button{flex:none;border:1px solid var(--line,#e4e8ef);background:var(--soft,#f5f7fb);color:var(--text,#18202a);border-radius:999px;padding:7px 13px;font-weight:800;font-size:13px;cursor:pointer}\n#emd411Store .tabs button[aria-selected=\"true\"]{background:var(--accent,#18202a);color:#fff;border-color:transparent}\n#emd411Store .bd{overflow:auto;flex:1;padding:14px 16px 20px}\n#emd411Store label.f{display:block;font-size:12.5px;font-weight:700;color:var(--muted,#687384);margin:12px 0 0}\n#emd411Store label.f input,#emd411Store label.f textarea,#emd411Store .srch{display:block;width:100%;box-sizing:border-box;margin-top:5px;border:1px solid var(--line,#dfe4ec);border-radius:12px;padding:10px 12px;font:inherit;font-size:14px;color:var(--text,#18202a);background:var(--soft,#f8fafc)}\n#emd411Store label.f textarea{min-height:64px;resize:vertical}\n#emd411Store .two{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n#emd411Store .chk{display:flex;align-items:center;gap:9px;margin:12px 0 0;font-size:14px;font-weight:700;color:var(--text,#18202a)}\n#emd411Store .chk input{width:18px;height:18px}\n#emd411Store .hint{font-size:12px;color:var(--muted,#687384);margin:6px 0 0;line-height:1.6}\n#emd411Store .b{border:1px solid var(--line,#dfe4ec);background:var(--card,#fff);color:var(--text,#18202a);border-radius:12px;padding:9px 14px;font-weight:800;font-size:13.5px;cursor:pointer}\n#emd411Store .b.pri{background:var(--accent,#18202a);color:#fff;border-color:transparent}\n#emd411Store .b:disabled{opacity:.5;cursor:default}\n#emd411Store .row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}\n#emd411Store .logo{display:flex;gap:14px;align-items:center;margin-top:6px}\n#emd411Store .logo .pv{width:72px;height:72px;border-radius:16px;border:1px dashed var(--line,#cfd6e0);display:grid;place-items:center;overflow:hidden;background:var(--soft,#f5f7fb);font-size:28px;flex:none}\n#emd411Store .logo .pv img{width:100%;height:100%;object-fit:contain}\n#emd411Store .skins{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:8px}\n#emd411Store .skins button{border:2px solid transparent;border-radius:14px;padding:0;overflow:hidden;cursor:pointer;text-align:start;background:var(--soft,#f5f7fb);color:var(--text,#18202a)}\n#emd411Store .skins button[aria-pressed=\"true\"]{border-color:var(--accent,#18202a)}\n#emd411Store .skins .sw{height:44px;display:flex;align-items:flex-end;padding:6px 8px;gap:4px}\n#emd411Store .skins .sw i{width:14px;height:14px;border-radius:50%;border:1px solid rgba(255,255,255,.4)}\n#emd411Store .skins b{display:block;font-size:12.5px;padding:6px 8px 8px}\n#emd411Store .accs{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}\n#emd411Store .accs button{width:32px;height:32px;border-radius:50%;border:2px solid var(--card,#fff);box-shadow:0 0 0 1px var(--line,#cfd6e0);cursor:pointer}\n#emd411Store .accs button[aria-pressed=\"true\"]{box-shadow:0 0 0 3px var(--text,#18202a)}\n/* معاينة مصغرة */\n#emd411Store .mini{border-radius:16px;overflow:hidden;border:1px solid var(--line,#e4e8ef);margin-bottom:6px}\n#emd411Store .mini .an{font-size:11px;text-align:center;padding:5px 8px}\n#emd411Store .mini .tp{display:flex;align-items:center;gap:8px;padding:10px 12px}\n#emd411Store .mini .tp img{width:30px;height:30px;object-fit:contain;border-radius:7px}\n#emd411Store .mini .tp b{font-size:17px}\n#emd411Store .mini .hr{padding:6px 12px 14px}\n#emd411Store .mini .hr small{font-size:11px;font-weight:700}\n#emd411Store .mini .hr h3{margin:2px 0 4px;font-size:19px;line-height:1.3}\n#emd411Store .mini .hr p{margin:0;font-size:12px;opacity:.75;line-height:1.6}\n#emd411Store .mini .bt{display:inline-block;margin-top:8px;padding:6px 14px;border-radius:999px;font-size:12px;font-weight:800}\n/* المنتجات */\n#emd411Store .pbar{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:10px}\n#emd411Store .pbar .srch{flex:1 1 180px;margin:0}\n#emd411Store .upd{border:1px solid var(--line,#e4e8ef);background:var(--soft,#f5f7fb);border-radius:16px;padding:12px;margin-bottom:12px}\n#emd411Store .upd b{font-size:14px}\n#emd411Store .upd .when{font-size:12px;color:var(--muted,#687384);margin:3px 0 8px}\n#emd411Store .chg{margin:8px 0;border-top:1px solid var(--line,#e4e8ef);padding-top:8px;font-size:13px}\n#emd411Store .chg div{display:flex;justify-content:space-between;gap:8px;padding:3px 0}\n#emd411Store .chg s{color:var(--muted,#687384)}\n#emd411Store .pr{display:grid;grid-template-columns:48px 1fr auto;gap:10px;align-items:center;padding:10px 0;border-bottom:1px solid var(--line,#eef1f5)}\n#emd411Store .pr .im{width:48px;height:48px;border-radius:12px;background:var(--soft,#f5f7fb);display:grid;place-items:center;overflow:hidden;font-size:20px}\n#emd411Store .pr .im img{width:100%;height:100%;object-fit:cover}\n#emd411Store .pr b{display:block;font-size:14px}\n#emd411Store .pr small{font-size:12px;color:var(--muted,#687384)}\n#emd411Store .pr .out{color:#b91c1c;font-weight:800}\n#emd411Store .pr .more{grid-column:2/-1;display:none}\n#emd411Store .pr.open .more{display:block}\n#emd411Store .pr .lnk{border:0;background:none;color:var(--accent,#2563eb);font-weight:800;font-size:12px;padding:0;cursor:pointer}\n#emd411Store .sw2{position:relative;width:46px;height:26px;flex:none}\n#emd411Store .sw2 input{opacity:0;position:absolute;inset:0;margin:0;cursor:pointer;z-index:1}\n#emd411Store .sw2 span{position:absolute;inset:0;border-radius:99px;background:#cbd5e1;transition:.2s}\n#emd411Store .sw2 span::after{content:\"\";position:absolute;top:3px;right:3px;width:20px;height:20px;border-radius:50%;background:#fff;transition:.2s}\n#emd411Store .sw2 input:checked+span{background:#16a34a}\n#emd411Store .sw2 input:checked+span::after{right:23px}\n#emd411Store .sw2 input:focus-visible+span{outline:2px solid var(--accent,#2563eb);outline-offset:2px}\n#emd411Store .empty{text-align:center;color:var(--muted,#687384);padding:24px 8px;font-size:14px}\n#emd411Store .note{background:#fff7e6;color:#7a4b00;border-radius:14px;padding:12px 14px;font-size:13px;line-height:1.7;font-weight:700;margin-bottom:12px}\n#emd411Store .url{direction:ltr;text-align:left;font-family:ui-monospace,monospace;font-size:13px;background:var(--soft,#f5f7fb);border:1px solid var(--line,#e4e8ef);border-radius:12px;padding:10px 12px;word-break:break-all;margin-top:6px}\n#emd411Store .ft{padding:10px 16px calc(10px + env(safe-area-inset-bottom,0px));border-top:1px solid var(--line,#e4e8ef);display:flex;align-items:center;gap:10px;font-size:12.5px;color:var(--muted,#687384)}\n#emd411Store .ft .ok{color:#15803d;font-weight:800;margin-inline-start:auto}\n#emd411Toast{position:fixed;left:50%;bottom:calc(96px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:100800;background:#111827;color:#fff;padding:10px 16px;border-radius:12px;font-weight:700;font-size:13.5px;display:none;direction:rtl}\n#emd411Toast.show{display:block}\n/* أي لوحة أو نافذة كبيرة تظهر فوق الشريط السفلي */\nbody.emd411-covered #emd410Bar{display:none!important}\n\n\n.emd413-n{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;padding:0 5px;border-radius:99px;background:#dc2626;color:#fff;font-size:11px;font-weight:800;line-height:1;margin-inline-start:4px}\n#emd410Sheet [data-emd411]{position:relative}\n#emd410Sheet [data-emd411] .emd413-n{position:absolute;top:4px;inset-inline-end:8px;margin:0}\n#emd411Store .emd413-pub{margin-top:12px}\n#emd411Store .emd413-pub .ok{color:#15803d;font-weight:800;font-size:14px;margin-bottom:4px}\n#emd411Store .emd413-pub .bad{color:#b91c1c;font-weight:700;font-size:13px;margin:6px 0;line-height:1.6}\n#emd411Store .b.big{display:block;width:100%;padding:13px;font-size:15px;margin-top:8px}\n#emd411Store .emd413-o{border:1px solid var(--line,#e4e8ef);border-radius:16px;padding:12px;margin-bottom:10px;background:var(--card,#fff)}\n#emd411Store .emd413-o .top{display:flex;justify-content:space-between;gap:8px;align-items:baseline}\n#emd411Store .emd413-o .top b{font-size:15px}\n#emd411Store .emd413-o .top small{font-size:12px;color:var(--muted,#687384);white-space:nowrap}\n#emd411Store .emd413-o .ln{font-size:13px;color:var(--muted,#687384);margin-top:3px;overflow-wrap:anywhere}\n#emd411Store .emd413-o .its{margin:8px 0;padding:8px 10px;border-radius:12px;background:var(--soft,#f5f7fb);font-size:13px}\n#emd411Store .emd413-o .its div{display:flex;justify-content:space-between;gap:8px;padding:2px 0}\n#emd411Store .emd413-o .its .sm{color:var(--muted,#687384);border-top:1px dashed var(--line,#dfe4ec);margin-top:4px;padding-top:4px}\n#emd411Store .emd413-o .its .sm+.sm{border:0;margin:0;padding-top:2px}\n#emd411Store .emd413-o .its .t{color:var(--text,#18202a);font-weight:800}\n#emd411Store .emd413-o .row{margin-top:10px}\n#emd411Store .b.rej{color:#b91c1c}\n\n\n#emd411Store .emd414-pvb{display:flex;align-items:center;gap:12px;width:100%;margin:12px 0 6px;padding:12px 14px;border:1px solid #c7d2fe;border-radius:16px;background:linear-gradient(135deg,#eef2ff,#f8fafc);color:#1e293b;font:inherit;text-align:right;cursor:pointer;transition:box-shadow .15s,transform .15s,border-color .15s}\n#emd411Store .emd414-pvb:hover{border-color:#818cf8;box-shadow:0 6px 18px rgba(79,70,229,.14)}\n#emd411Store .emd414-pvb:active{transform:scale(.99)}\n#emd411Store .emd414-pvb:focus-visible{outline:3px solid #a5b4fc;outline-offset:2px}\n#emd411Store .emd414-pvb .ic{flex:none;display:grid;place-items:center;width:40px;height:40px;border-radius:12px;background:#4f46e5;color:#fff;box-shadow:0 4px 10px rgba(79,70,229,.3)}\n#emd411Store .emd414-pvb .tx{flex:1;display:flex;flex-direction:column;gap:2px;min-width:0}\n#emd411Store .emd414-pvb b{font-size:15px;color:#1e1b4b}\n#emd411Store .emd414-pvb small{font-size:12px;color:#64748b;line-height:1.5}\n#emd411Store .emd414-pvb .ar{flex:none;font-size:22px;color:#6366f1;line-height:1}\n#emd414Pv{position:fixed;inset:0;z-index:2147483600;background:#e2e8f0;display:flex;flex-direction:column;direction:rtl}\n#emd414Pv .bar{display:flex;align-items:center;gap:10px;padding:10px 14px;background:#0f172a;color:#fff;box-shadow:0 2px 10px rgba(0,0,0,.2)}\n#emd414Pv .ttl{flex:1;display:flex;align-items:center;gap:10px;min-width:0}\n#emd414Pv .ttl .ic{flex:none;display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:#4f46e5}\n#emd414Pv .ttl b{display:block;font-size:15px}\n#emd414Pv .ttl small{display:block;font-size:11.5px;color:#94a3b8}\n#emd414Pv .dev{display:none;background:#1e293b;border-radius:12px;padding:3px;gap:3px}\n#emd414Pv .dev button{border:0;background:transparent;color:#cbd5e1;border-radius:9px;padding:7px 12px;font:inherit;font-size:13px;cursor:pointer}\n#emd414Pv .dev button[aria-pressed=true]{background:#fff;color:#0f172a;font-weight:700}\n#emd414Pv .x{flex:none;border:1px solid #334155;background:#1e293b;color:#fff;border-radius:10px;padding:8px 14px;font:inherit;font-size:13px;font-weight:700;cursor:pointer}\n#emd414Pv .x:hover{background:#334155}\n#emd414Pv .stage{flex:1;display:flex;justify-content:center;min-height:0}\n#emd414Pv iframe{width:100%;height:100%;border:0;background:#fff}\n@media(min-width:760px){\n #emd414Pv .dev{display:flex}\n #emd414Pv .stage{padding:18px}\n #emd414Pv .stage.m iframe{width:400px;border-radius:26px;box-shadow:0 0 0 10px #0f172a,0 20px 50px rgba(15,23,42,.35)}\n #emd414Pv .stage.d iframe{border-radius:12px;box-shadow:0 10px 30px rgba(15,23,42,.2)}\n}\nbody.emd414-pv #emdQuickMenuFinal{display:none!important}\n\n\n#home .grid .emd415-home{grid-column:1/-1;display:flex;align-items:center;gap:12px;cursor:pointer;border:1px solid #e5e7eb}\n#home .grid .emd415-home .ic{flex:none;display:grid;place-items:center;width:44px;height:44px;border-radius:14px;background:#f1f5f9;font-size:22px}\n#home .grid .emd415-home .tx{flex:1;display:flex;flex-direction:column;gap:2px;text-align:right;min-width:0}\n#home .grid .emd415-home .tx b{font-size:15px}\n#home .grid .emd415-home .tx small{font-size:12px;color:#64748b;font-weight:600}\n#home .grid .emd415-home .n{flex:none;font-size:28px;font-weight:800;margin:0}\n#home .grid .emd415-home.on{border:2px solid #d4a72c;background:linear-gradient(135deg,#fffbeb,#fff)}\n#home .grid .emd415-home.on .ic{background:#d4a72c;color:#fff}\n#home .grid .emd415-home.on .n{color:#b45309}\n#home .grid .emd415-home:focus-visible{outline:3px solid #fcd34d;outline-offset:2px}\n.emd415-x{display:none!important}\n.emd415-empty{padding:16px;color:#64748b;text-align:center;font-weight:600;line-height:1.7}\n#emd411Store .emd413-o.emd415-hl{outline:3px solid #d4a72c;outline-offset:2px;background:#fffbeb;transition:background .4s}\n\n\n#emd411Store .e150 h4{margin:16px 0 8px;font-size:14px;color:#172554}\n#emd411Store .e150 h4:first-child{margin-top:4px}\n#emd411Store .e150 .hint{font-size:12.5px;color:#64748b;margin:-4px 0 8px;line-height:1.7}\n#emd411Store .e150-lx{display:grid;grid-template-columns:repeat(auto-fill,minmax(132px,1fr));gap:8px}\n#emd411Store .e150-lx button{display:grid;gap:4px;text-align:right;border:1.5px solid #e2e8f0;background:#fff;border-radius:14px;padding:8px;cursor:pointer;font:inherit;color:#0f172a}\n#emd411Store .e150-lx button[aria-pressed=\"true\"]{border-color:#1e3a8a;box-shadow:0 0 0 3px rgba(245,158,11,.35)}\n#emd411Store .e150-lx .sw{height:46px;border-radius:9px;display:flex;overflow:hidden;border:1px solid rgba(0,0,0,.06)}\n#emd411Store .e150-lx .sw i{flex:1}\n#emd411Store .e150-lx b{font-size:13.5px}\n#emd411Store .e150-lx small{font-size:11.5px;color:#64748b;line-height:1.4}\n#emd411Store .e150-ch{display:flex;flex-wrap:wrap;gap:6px}\n#emd411Store .e150-ch button{border:1px solid #cbd5e1;background:#fff;border-radius:999px;padding:6px 12px;font:inherit;font-size:13px;cursor:pointer;color:#0f172a}\n#emd411Store .e150-ch button[aria-pressed=\"true\"]{background:#1e3a8a;border-color:#1e3a8a;color:#fff}\n#emd411Store .e171-t{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 0;border-top:1px solid #e2e8f0}#emd411Store .e171-t b{display:block;font-size:14px}#emd411Store .e171-t small{display:block;color:#64748b;font-size:12px;line-height:1.5}#emd411Store .e171-t .e150-ch button{white-space:nowrap}\n#emd411Store .e150-sw{display:flex;gap:8px;flex-wrap:wrap}\n#emd411Store .e150-sw button{width:30px;height:30px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #cbd5e1;cursor:pointer}\n#emd411Store .e150-sw button[aria-pressed=\"true\"]{box-shadow:0 0 0 2px #0f172a}\n#emd411Store .e150 details{border:1px solid #e2e8f0;border-radius:12px;padding:8px 12px;margin-top:8px;background:#f8fafc}\n#emd411Store .e150 summary{cursor:pointer;font-weight:700;font-size:14px;color:#172554}\n#emd411Store .e150 .row{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px;margin-top:8px}\n#emd411Store .e150 label.f2{display:grid;gap:4px;font-size:12.5px;color:#475569}\n#emd411Store .e150 input,#emd411Store .e150 textarea,#emd411Store .e150 select{width:100%;box-sizing:border-box;border:1px solid #cbd5e1;border-radius:10px;padding:8px 10px;font:inherit;font-size:14px;background:#fff;color:#0f172a}\n#emd411Store .e150 textarea{min-height:60px;resize:vertical}\n#emd411Store .e150 .cv{display:flex;gap:10px;align-items:center;margin-top:6px}\n#emd411Store .e150 .cv img{width:120px;height:60px;object-fit:cover;border-radius:8px;border:1px solid #e2e8f0}\n#emd411Store .e150 .cv button,#emd411Store .e150 .add{border:1px dashed #94a3b8;background:#fff;border-radius:10px;padding:7px 12px;font:inherit;font-size:13px;cursor:pointer;color:#1e3a8a}\n#emd411Store .e150 .del{border:0;background:none;color:#b91c1c;font-size:12.5px;cursor:pointer;padding:0}\n#emd411Store .e150 .pvrow{margin-top:14px}\n/* V151 صور المتجر لكل منتج */\n#emd411Store .e151g{margin-top:8px;padding:10px;border:1px dashed #cbd5e1;border-radius:12px;background:#f8fafc}\n#emd411Store .e151g>b{display:block;font-size:13px;margin-bottom:2px}\n#emd411Store .e151g small{display:block;color:#64748b;font-size:11.5px;line-height:1.6}\n#emd411Store .e151r{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 4px}\n#emd411Store .e151t{position:relative;width:64px;height:64px;border-radius:10px;overflow:hidden;background:#e2e8f0;box-shadow:0 0 0 1px #e2e8f0}\n#emd411Store .e151t.main{box-shadow:0 0 0 2px #c9a227}\n#emd411Store .e151t img{width:100%;height:100%;object-fit:cover;display:block}\n#emd411Store .e151t em{position:absolute;bottom:0;left:0;right:0;background:rgba(23,37,84,.85);color:#fff;font:700 10px/1.6 inherit;font-style:normal;text-align:center}\n#emd411Store .e151t button{position:absolute;top:3px;width:22px;height:22px;border-radius:50%;border:0;padding:0;font-size:13px;line-height:22px;background:rgba(15,23,42,.7);color:#fff;cursor:pointer}\n#emd411Store .e151t .x{inset-inline-end:3px}\n#emd411Store .e151t .st{inset-inline-start:3px;color:#fcd34d}\n#emd411Store .e151a{width:64px;height:64px;border-radius:10px;border:1.5px dashed #94a3b8;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#172554;font-size:20px;cursor:pointer;background:#fff}\n#emd411Store .e151a span{font-size:10.5px;font-weight:700}\n/* V154 أسماء الأصناف */\n#emd411Store .e154r{display:flex;gap:6px;align-items:center;margin-top:8px}\n#emd411Store .e154n{flex:1;min-width:0}\n#emd411Store .e154n input{width:100%;box-sizing:border-box;border:1px solid #cbd5e1;border-radius:10px;padding:9px 10px;font:inherit;font-size:14px}\n#emd411Store .e154n small{display:block;color:#64748b;font-size:11px;margin-top:2px}\n#emd411Store .e154r button{width:36px;height:36px;border-radius:10px;border:1px solid #cbd5e1;background:#fff;font-size:16px;cursor:pointer;flex:none}\n#emd411Store .e154r button:disabled{opacity:.35;cursor:default}\n\n\n#emd411Store .e150-lx{grid-template-columns:repeat(auto-fill,minmax(148px,1fr));gap:10px}\n#emd411Store .e150-lx button{position:relative;padding:6px 6px 10px;border-radius:18px;gap:6px;transition:transform .2s,box-shadow .2s,border-color .2s;align-content:start}\n#emd411Store .e150-lx button:active{transform:scale(.97)}\n#emd411Store .e150-lx button[aria-pressed=\"true\"]{border-color:#c9a227;box-shadow:0 0 0 3px rgba(201,162,39,.35),0 10px 22px -12px rgba(10,20,48,.55)}\n#emd411Store .e166t{display:block;position:relative;border-radius:13px;overflow:hidden;aspect-ratio:3/3.6;background:#eee;box-shadow:inset 0 0 0 1px rgba(0,0,0,.06)}\n#emd411Store .e166t svg{display:block;width:100%;height:100%}\n#emd411Store .e166t::after{content:\"\";position:absolute;inset:0;background:linear-gradient(115deg,transparent 40%,rgba(255,255,255,.22) 50%,transparent 60%);transform:translateX(-120%);pointer-events:none}\n#emd411Store .e150-lx button:hover .e166t::after,#emd411Store .e150-lx button[aria-pressed=\"true\"] .e166t::after{animation:e166sh 1.4s ease}\n@keyframes e166sh{to{transform:translateX(120%)}}\n#emd411Store .e166k{position:absolute;top:6px;right:6px;z-index:2;font-size:10px;font-weight:700;padding:2px 8px;border-radius:999px;background:rgba(10,20,48,.82);color:#f3d78b;backdrop-filter:blur(4px)}\n#emd411Store .e166ok{position:absolute;top:0;left:0;z-index:3;width:26px;height:26px;border-radius:50%;background:#c9a227;color:#0a1430;display:none;place-items:center;font-size:14px;font-weight:800;font-style:normal;box-shadow:0 0 0 3px #fff;transform:translate(-4px,-4px)}\n#emd411Store .e150-lx button[aria-pressed=\"true\"] .e166ok{display:grid}\n#emd411Store .e150-lx b{font-size:14px;padding:0 4px}\n#emd411Store .e150-lx small{padding:0 4px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n#emd411Store .e166t .a1{animation:e166a1 3.2s ease-in-out infinite}\n#emd411Store .e166t .a2{animation:e166a2 2.4s ease-in-out infinite}\n#emd411Store .e166t .a3{animation:e166a3 4s ease-in-out infinite}\n#emd411Store .e166t .tw{animation:e166tw 2.2s ease-in-out infinite}\n#emd411Store .e166t .sm{animation:e166sm 3s ease-out infinite}\n#emd411Store .e166t .sp{transform-origin:60px 60px;animation:e166sp 8s linear infinite}\n#emd411Store .e166t .pl{transform-origin:46px 74px;animation:e166pl 3.4s ease-in-out infinite}\n#emd411Store .e166t .ph{animation:e166ph 2.6s ease-in-out infinite alternate}\n#emd411Store .e166t .gr{transform-origin:60px 86px;animation:e166gr 3.6s ease-in-out infinite}\n#emd411Store .e166t .bc{animation:e166bc 4s ease-in-out infinite}\n#emd411Store .e166t .kb{transform-origin:60px 50px;animation:e166kb 7s ease-in-out infinite alternate}\n#emd411Store .e166t .c1{animation:e166c1 3.2s ease-in-out infinite}#emd411Store .e166t .c2{animation:e166c2 3.2s ease-in-out infinite}\n#emd411Store .e166t .c3{animation:e166c3 3.2s ease-in-out infinite}#emd411Store .e166t .c4{animation:e166c4 3.2s ease-in-out infinite}\n@keyframes e166a1{50%{transform:translateY(-4px)}}\n@keyframes e166a2{50%{transform:translateX(26px)}}\n@keyframes e166a3{50%{transform:rotate(4deg) translateX(4px)}}\n@keyframes e166tw{50%{opacity:.2}}\n@keyframes e166sm{0%{opacity:0;transform:translateY(6px)}40%{opacity:.8}100%{opacity:0;transform:translateY(-16px)}}\n@keyframes e166sp{to{transform:rotate(360deg)}}\n@keyframes e166pl{0%,20%{transform:none}55%,80%{transform:translate(4px,-10px) rotate(-14deg)}}\n@keyframes e166ph{to{transform:translateY(-6px)}}\n@keyframes e166gr{0%{transform:scaleY(.1)}70%,100%{transform:scaleY(1)}}\n@keyframes e166bc{0%,30%{transform:translateX(0)}60%,100%{transform:translateX(-34px)}}\n@keyframes e166kb{to{transform:scale(1.12)}}\n@keyframes e166c1{40%,60%{transform:translate(-7px,-7px)}}@keyframes e166c2{40%,60%{transform:translate(7px,-7px)}}\n@keyframes e166c3{40%,60%{transform:translate(-7px,7px)}}@keyframes e166c4{40%,60%{transform:translate(7px,7px)}}\n#emd411Store .e166t .e7r{transform-box:fill-box;transform-origin:100% 50%;animation:e167r 3.6s ease-in-out infinite}\n#emd411Store .e166t .e7c{animation:e167c 3.6s ease-in-out infinite}\n#emd411Store .e166t .e7d{animation:e167d 3.6s ease-in-out infinite}\n#emd411Store .e166t .e7s{animation:e167s 2.4s ease-in-out infinite}\n#emd411Store .e166t .e7k{animation:e167k 2.4s ease-in-out infinite}\n#emd411Store .e166t .e7l{animation:e167l 2.6s ease-in-out infinite}\n#emd411Store .e166t .e7p{animation:e167p 2.6s ease-out infinite}\n#emd411Store .e166t .e7n{transform-origin:72px 78px;animation:e167n 3s ease-in-out infinite}\n#emd411Store .e166t .e7b{animation:e167b 3s ease-in-out infinite}\n#emd411Store .e166t .e7z{animation:e167z 3s ease-in infinite}\n@keyframes e167r{0%{transform:scaleX(0)}25%,100%{transform:scaleX(1)}}\n@keyframes e167c{0%,55%{stroke-dashoffset:170}85%,100%{stroke-dashoffset:0}}\n@keyframes e167d{0%{transform:translate(0,0)}12%{transform:translate(38px,0)}25%{transform:translate(4px,12px)}38%{transform:translate(32px,24px)}50%{transform:translate(6px,24px)}70%{transform:translate(40px,8px)}85%{transform:translate(19px,-12px)}100%{transform:translate(0,0)}}\n@keyframes e167s{0%,100%{transform:translateY(0)}40%,55%{transform:translateY(22px)}}\n@keyframes e167k{0%,42%{opacity:0}50%,100%{opacity:1}}\n@keyframes e167l{0%{transform:translateY(0)}50%{transform:translateY(46px)}100%{transform:translateY(0)}}\n@keyframes e167p{0%{opacity:0;transform:translateY(-14px)}30%,100%{opacity:1;transform:none}}\n@keyframes e167n{0%,10%{transform:none}50%,100%{transform:rotate(360deg)}}\n@keyframes e167b{25%{transform:translate(2px,-2px)}50%{transform:translate(-2px,1px)}}\n@keyframes e167z{0%,50%{opacity:0;transform:none}60%{opacity:1}100%{opacity:0;transform:translate(6px,6px)}}\n#emd411Store .e166t .e8b{transform-box:fill-box;transform-origin:center;animation:e168b 3s ease-in-out infinite}\n#emd411Store .e166t .e8c{animation:e168c 3s ease-in infinite}\n#emd411Store .e166t .e8o{transform-origin:58px 56px;animation:e168o 3s ease-in-out infinite}\n#emd411Store .e166t .e8p{transform-box:fill-box;transform-origin:0 50%;animation:e168p 3s linear infinite}\n#emd411Store .e166t .e8h{transform-box:fill-box;transform-origin:center;animation:e168h 3s ease infinite}\n#emd411Store .e166t .e8l{animation:e168l 3.2s ease-in-out infinite}#emd411Store .e166t .e8r{animation:e168r 3.2s ease-in-out infinite}\n#emd411Store .e166t .e8g{animation:e168g 3.2s ease-in-out infinite}\n@keyframes e168b{0%,25%{transform:scale(0)}35%,100%{transform:scale(1)}}\n@keyframes e168c{0%,30%{opacity:0;transform:none}35%{opacity:1}80%,100%{opacity:0;transform:translateY(30px)}}\n@keyframes e168o{50%{transform:rotate(-5deg)}}\n@keyframes e168p{0%{transform:scaleX(0)}100%{transform:scaleX(1)}}\n@keyframes e168h{0%,55%{opacity:0;transform:scale(0)}65%{opacity:1;transform:scale(1.3)}85%{opacity:1;transform:scale(1)}100%{opacity:0;transform:translateY(-8px)}}\n@keyframes e168l{0%,15%{transform:none}50%,80%{transform:translate(-9px,2px) rotate(-8deg)}100%{transform:none}}\n@keyframes e168r{0%,15%{transform:none}50%,80%{transform:translate(9px,-1px) rotate(7deg)}100%{transform:none}}\n@keyframes e168g{0%,20%{opacity:0}50%,80%{opacity:1}100%{opacity:0}}\n#emd411Store .e166t .e9l{transform-box:fill-box;transform-origin:50% 0;animation:e169l 3.4s ease-in-out infinite}\n#emd411Store .e166t .e9c{animation:e169c 3.2s linear infinite}\n#emd411Store .e166t .e9f{animation:e169f 2.6s ease-in-out infinite alternate}\n#emd411Store .e166t .e9d{animation:e169d 3s ease-in-out infinite}\n@keyframes e169l{0%,15%{transform:none}45%,80%{transform:scaleY(-.25) translateY(-6px)}100%{transform:none}}\n@keyframes e169c{0%{transform:none;opacity:0}20%{opacity:1}100%{transform:translateY(70px);opacity:0}}\n@keyframes e169f{to{transform:translateY(-6px) rotate(8deg)}}\n@keyframes e169d{0%{transform:translateY(-34px);opacity:0}40%,85%{transform:none;opacity:1}100%{opacity:0}}\n#emd411Store .e166t .e10a{transform-origin:60px 96px;animation:e170a 3.6s ease-in infinite}\n#emd411Store .e166t .e10w{transform-origin:60px 20px;animation:e170w 4s ease-in-out infinite}\n#emd411Store .e166t .e10p{animation:e170p 3s linear infinite}\n@keyframes e170a{0%{transform:scale(.6);opacity:0}30%{opacity:1}100%{transform:scale(1.5);opacity:0}}\n@keyframes e170w{0%{transform:scaleY(0)}25%,100%{transform:scaleY(1)}}\n@keyframes e170p{0%{transform:none;opacity:0}15%{opacity:1}100%{transform:translate(-8px,50px) rotate(200deg);opacity:0}}\n@media (prefers-reduced-motion:reduce){#emd411Store .e166t *{animation:none!important}}\n\n#emd411Store .e208p{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:8px 0 10px;position:sticky;top:0;z-index:3;background:#fff;padding:4px 0}#emd411Store .e208p button{min-height:44px;padding:4px;border:1.5px solid #cbd5e1;border-radius:10px;background:#fff;color:#0f172a;font:700 12.5px/1.3 inherit;cursor:pointer}#emd411Store .e208p button[aria-pressed=\"true\"]{background:#0a1430;border-color:#0a1430;color:#f3d78b}#emd411Store .e208p small{display:block;font-weight:500;font-size:10.5px;opacity:.8}#emd411Store .e208t{display:block;border-radius:13px;overflow:hidden;aspect-ratio:5/6;box-shadow:inset 0 0 0 1px rgba(0,0,0,.08)}#emd411Store .e208t img{display:block;width:100%;height:100%;object-fit:cover;object-position:top}\n\n#emd411Store .hd,#emd411Store .tabs,#emd411Store .ft{flex:none}\n#emd411Store .tabs{overflow-y:hidden}\n#emd411Store .tabs button{flex:none}\n#emd411Store .bd{min-height:0}\n#emd411Store .e208p{top:-14px;padding:8px 0 8px;box-shadow:0 8px 8px -8px rgba(15,23,42,.18)}\nbody:has(#emd411Store.show) #emd410Bar{display:none!important}\n\n\n.e215r{margin:8px 0;padding:9px;border:1px solid var(--line,#e4e8ef);border-radius:12px;background:var(--soft,#f6f8fb);font-size:13px}\n.e215t{display:flex;gap:10px;align-items:flex-start}\n.e215t img{width:68px;height:90px;object-fit:cover;border-radius:8px;border:1px solid var(--line,#e4e8ef);cursor:zoom-in;flex:none;background:#fff}\n.e215b{display:block;font-weight:800;margin-bottom:3px}.e215b.g{color:#15803d}.e215b.y{color:#b45309}.e215b.r{color:#b91c1c}\n.e215s{display:block;color:var(--muted,#687384);font-size:12px;line-height:1.5}\n.e215m{display:flex;gap:6px;margin-top:7px}.e215m input{flex:1;min-width:0;min-height:40px;padding:6px 9px;border:1px solid var(--line,#d6dce6);border-radius:9px;background:var(--card,#fff);color:inherit;direction:ltr}.e215m button{min-height:40px;padding:0 11px;border:1px solid var(--line,#d6dce6);border-radius:9px;background:var(--card,#fff);color:inherit;font-weight:700;cursor:pointer}\n#e215Z{position:fixed;inset:0;z-index:100900;background:rgba(0,0,0,.88);display:flex;align-items:center;justify-content:center;padding:12px}#e215Z img{max-width:100%;max-height:100%;border-radius:8px}\n";document.head.appendChild(st);

(function(){'use strict';
var KEY=EMDH.storeKey;
function $(id){return document.getElementById(id)}
function esc(t){return String(t==null?'':t).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function num(v){v=parseFloat(String(v==null?'':v).replace(/[^\d.\-]/g,''));return isFinite(v)?v:0}
function omr(v){return num(v).toFixed(3)+' ر.ع'}
function toast(t){var el=$('emd411Toast');if(!el){el=document.createElement('div');el.id='emd411Toast';document.body.appendChild(el)}el.textContent=t;el.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(function(){el.classList.remove('show')},2200)}

/* الثيمات الستة نفسها اللي في معاينة المتجر */
var SKINS=[['night','ليل ذهبي','#0b0b0c','#f3ead7','#d4af37'],['ivory','عاجي أتيليه','#f6f2e9','#1d2b22','#1d2b22'],['marble','رخام وردي','#f3efec','#2a2326','#b76e79'],
  ['emerald','زمرد ملكي','#06281f','#f1ead6','#d6b25e'],['navy','كحلي EMD','#0a1430','#eef1f8','#e9c98b'],['plum','ليلك ومخمل','#24101d','#f6e9ef','#f2b8c6']];
var ACC=[['','حسب الثيم'],['#d4af37','ذهبي'],['#b76e79','وردي'],['#0f766e','فيروزي'],['#1e3a8a','كحلي'],['#7c2d12','بني'],['#9c4566','عنابي'],['#111111','أسود']];
var DEF={on:false,skin:'night',accent:'',logo:'',name:'',sub:'',hideName:false,announce:'توصيل مجاني للطلبات فوق 25 ر.ع',eye:'وصل حديثًا',l1:'',l2:'',desc:'',
  wa:'',ig:'',city:'',waBtn:true,ship:2,free:25,cod:true,bank:true,bankInfo:'',gift:true,slug:'',paused:false,layout:'',font:'',shape:'',cols:'',hide:[],notice:'',lead:0,cover:'',seal:{},feats:[],info:[],reviews:[],hours:{},map:'',px:{},prod:{},snap:null,snapAt:'',pubAt:'',pubSlug:'',pubErr:'',imgUp:{},seen:[]};
function load(){var o={};try{o=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){}var r={};for(var k in DEF)r[k]=k in o?o[k]:JSON.parse(JSON.stringify(DEF[k]));return r}
var S=load();
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));var f=$('emd411Saved');if(f){f.textContent='✓ محفوظ في الجهاز';clearTimeout(save.t);save.t=setTimeout(function(){f.textContent=''},1500)}}catch(e){toast('تعذّر الحفظ لامتلاء الذاكرة. جرّب شعارًا أصغر.')}}

/* بيانات التطبيق: اسم النشاط والمنتجات */
function db(){return EMDH.db()}
function bizName(){var d=db(),c=d.settings||d.cfg||{};return c.storeName||c.businessName||c.name||d.storeName||d.businessName||''}
function products(){var d=db(),L=Array.isArray(d.products)?d.products:[];return L.map(function(p,i){
  return {k:String(p.id||p.sku||p.name||('p'+i)),name:String(p.name||p.productName||'منتج بدون اسم'),price:num(p.salePrice!=null?p.salePrice:p.unitPrice!=null?p.unitPrice:p.price),
    stock:EMDH.storeQty(p),cat:String(p.category||p.cat||''),img:p.image?String(p.image):''}}).filter(function(p){return p.name.trim()})}
function pim(p){var o=S.prod[p.k];return (o&&Array.isArray(o.imgs)&&o.imgs[0])||p.img}
function gal(k,o){var A=Array.isArray(o.imgs)?o.imgs:[];return '<div class="e151g"><b>🖼️ صور المتجر</b><small>حتى 5 صور تظهر للزبون فقط، ولا تتغير صورة المنتج في التطبيق.</small><div class="e151r">'+
  A.map(function(u,i){return '<span class="e151t'+(i?'':' main')+'"><img alt="" src="'+esc(u)+'">'+(i?'<button type="button" class="st" data-a="gmain" data-gi="'+i+'" title="اجعلها الصورة الرئيسية" aria-label="اجعلها الصورة الرئيسية">★</button>':'<em>الرئيسية</em>')+'<button type="button" class="x" data-a="gdel" data-gi="'+i+'" aria-label="حذف الصورة">×</button></span>'}).join('')+
  (A.length<5?'<label class="e151a" aria-label="إضافة صور">＋<span>إضافة</span><input type="file" accept="image/*" multiple data-gal hidden></label>':'')+'</div>'+
  (A.length?'':'<small>إن لم تُضف صورًا يظهر المنتج في المتجر بصورته في التطبيق.</small>')+'</div>'}
function reopen(k){var r=$('emd411Store').querySelectorAll('.pr');for(var i=0;i<r.length;i++)if(r[i].getAttribute('data-p')===k)r[i].classList.add('open')}
function galAdd(k,files){var o=pset(k);o.imgs=Array.isArray(o.imgs)?o.imgs:[];var F=[].slice.call(files||[],0,5-o.imgs.length);if(!F.length){toast('الحد الأقصى 5 صور للمنتج');return}
  toast('جارٍ تجهيز الصور…');
  Promise.all(F.map(function(f){return new Promise(function(ok){var r=new FileReader();r.onload=function(){ok(String(r.result))};r.onerror=function(){ok('')};r.readAsDataURL(f)}).then(function(d){
    if(!d)return '';if(logged())return upImg(d,800,'image/jpeg').then(function(u){return u||small(d)});return small(d)})}))
  .then(function(L){L=L.filter(Boolean);var y=$('emd411Store').querySelector('.bd').scrollTop;o.imgs=o.imgs.concat(L).slice(0,5);save();paint();reopen(k);$('emd411Store').querySelector('.bd').scrollTop=y;toast(L.length?'✓ أُضيفت الصور، وتظهر للزبائن بعد «حدّث المتجر»':'تعذّرت قراءة الصورة')})}
function small(d){return shrink(d,800,'image/jpeg').then(function(b){return new Promise(function(ok){var r=new FileReader();r.onload=function(){ok(String(r.result))};r.onerror=function(){ok('')};r.readAsDataURL(b)})}).catch(function(){return ''})}
function pvGal(L){var g={};L.forEach(function(p){var o=S.prod[p.k];if(o&&Array.isArray(o.imgs)&&o.imgs.length>1)g[p.k]=o.imgs.slice(1)});return g}
function pset(k){return S.prod[k]||(S.prod[k]={on:false,desc:'',old:''})}

/* الزر في الرأس + في قائمة المزيد على الجوال */


/* النافذة */
var TABS=[['design','🎨 التصميم'],['id','الهوية'],['front','الواجهة'],['contact','التواصل'],['ship','التوصيل والدفع'],['prod','المنتجات'],['pub','الرابط']],tab='id',q='';
function open(t){build();poll();if(t)tab=t;if(!S.name)S.name=bizName()||'';$('emd411Store').classList.add('show');paint();document.documentElement.style.overflow='hidden'}
function close(){var w=$('emd411Store');if(w)w.classList.remove('show');document.documentElement.style.overflow=''}
window.EMDStoreV411={save:save,paint:paint,open:open,close:close,openOrd:openOrd,state:function(){return S},poll:poll,publish:publish,orders:function(){return ORD}};
function build(){if($('emd411Store'))return;var w=document.createElement('div');w.id='emd411Store';
  w.innerHTML='<div class="win" role="dialog" aria-modal="true" aria-labelledby="emd411T"><div class="hd"><div style="flex:1"><h2 id="emd411T">🛍️ متجري الإلكتروني</h2><small>شعارك وألوانك ومنتجاتك. تُحفظ التعديلات في الجهاز.</small></div><button type="button" class="x" data-a="close">إغلاق ✕</button></div>'+
   '<div class="tabs" role="tablist"></div><div class="bd"></div><div class="ft"><span id="emd413Ft"></span><span class="ok" id="emd411Saved"></span></div></div>';
  w.addEventListener('click',onClick);w.addEventListener('input',onInput);w.addEventListener('change',onChange);
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&w.classList.contains('show'))close()});
  document.body.appendChild(w)}
function paint(){var w=$('emd411Store');if(!w)return;
  paintTabs();
  var bd=w.querySelector('.bd'),h='';
  if(tab!=='prod'&&tab!=='pub'&&tab!=='ord'&&tab!=='design')h+=mini();
  if(tab==='id'){h+='<label class="f">الشعار</label><div class="logo"><div class="pv">'+(S.logo?'<img alt="" src="'+S.logo+'">':'🛍️')+'</div><div class="row"><label class="b pri" style="margin:0">رفع شعار<input type="file" accept="image/*" data-file="logo" hidden></label>'+(S.logo?'<button type="button" class="b" data-a="nologo">إزالة</button>':'')+'</div></div>'+
    '<p class="hint">صورة مربعة أو بخلفية شفافة. نصغّرها تلقائيًا إلى 256 بكسل.</p>'+
    fld('name','اسم المتجر','text',30)+fld('sub','سطر تحت الاسم (مثال: مسقط · منذ 2020)','text',40)+
    chk('hideName','أخفِ الاسم بجانب الشعار (إذا كان الشعار يتضمن الاسم)')+
    ''}
  else if(tab==='front'){h+=fld('announce','شريط الإعلان أعلى المتجر','text',90)+fld('eye','عنوان صغير','text',30)+
    '<div class="two">'+fld('l1','العنوان، السطر الأول','text',24)+fld('l2','السطر الثاني','text',24)+'</div>'+fld('desc','وصف قصير للمتجر','area',180)}
  else if(tab==='contact'){h+='<div class="two">'+fld('wa','رقم واتساب','tel',15,'9xxxxxxx')+fld('ig','انستقرام','text',30,'@mystore')+'</div>'+fld('city','المدينة','text',30)+chk('waBtn','زر واتساب عائم للزبائن في المتجر')}
  else if(tab==='ship'){h+='<div class="two">'+fld('ship','رسوم التوصيل (ر.ع)','number')+fld('free','توصيل مجاني فوق (ر.ع)','number')+'</div><p class="hint">اكتب 0 في «توصيل مجاني فوق» إذا لم يكن لديك توصيل مجاني.</p>'+(window.EMD156Z?window.EMD156Z():'')+
    chk('cod','دفع عند الاستلام')+chk('bank','تحويل بنكي')+(S.bank?fld('bankInfo','بيانات التحويل التي تظهر للزبون (البنك، اسم الحساب، الرقم)','area',200):'')+(S.bank&&!String(S.bankInfo||'').trim()?'<p class="hint" style="color:#b42318;font-weight:700">⚠️ اكتب بيانات التحويل، وإلا فلن يعرف الزبون أين يحوّل المبلغ.</p>':'')+(S.cod===false&&!S.bank?'<p class="hint" style="color:#b42318;font-weight:700">⚠️ اختر طريقة دفع واحدة على الأقل.</p>':'')+chk('gift','خيار تغليف هدية')}
  else if(tab==='design')h+=(window.EMD150?window.EMD150.tab():'');   else if(tab==='prod')h+=prodTab();
  else if(tab==='pub')h+=pubTab();
  else if(tab==='ord')h+=ordTab();
  var y=bd.scrollTop,keep=document.activeElement&&bd.contains(document.activeElement)?document.activeElement.getAttribute('data-k')||document.activeElement.className:'';
  bd.innerHTML=h;bd.scrollTop=y;if(keep==='srch'){var s=bd.querySelector('.srch');if(s){s.focus();s.setSelectionRange(s.value.length,s.value.length)}}}
function fld(k,l,type,max,ph){var v=S[k]==null?'':S[k];
  if(type==='area')return '<label class="f">'+l+'<textarea data-k="'+k+'" maxlength="'+max+'">'+esc(v)+'</textarea></label>';
  return '<label class="f">'+l+'<input data-k="'+k+'" type="'+(type==='number'?'number':type==='tel'?'tel':'text')+'"'+(type==='number'?' min="0" step="0.5" inputmode="decimal"':'')+(max?' maxlength="'+max+'"':'')+(ph?' placeholder="'+ph+'"':'')+((type==='tel'||k==='ig')?' dir="ltr"':'')+' value="'+esc(v)+'"></label>'}
function chk(k,l){return '<label class="chk"><input type="checkbox" data-k="'+k+'"'+(S[k]?' checked':'')+'> '+l+'</label>'}
function skin(){for(var i=0;i<SKINS.length;i++)if(SKINS[i][0]===S.skin)return SKINS[i];return SKINS[0]}
function mini(){var s=skin(),acc=S.accent||s[4],ink=inkFor(acc),nm=S.name||bizName()||'متجري';
  return '<div class="mini" style="background:'+s[2]+';color:'+s[3]+'" aria-label="معاينة مصغرة">'+(S.announce?'<div class="an" style="background:'+acc+';color:'+ink+'">'+esc(S.announce)+'</div>':'')+
   '<div class="tp">'+(S.logo?'<img alt="" src="'+S.logo+'">':'<span style="font-size:22px">🛍️</span>')+(S.hideName&&S.logo?'':'<b style="color:'+acc+'">'+esc(nm)+'</b>')+(S.sub?'<small style="opacity:.6;font-size:11px">'+esc(S.sub)+'</small>':'')+'</div>'+
   '<div class="hr"><small style="color:'+acc+'">'+esc(S.eye)+'</small><h3><span style="color:'+acc+'">'+esc(S.l1||'منتجات مختارة')+'</span><br>'+esc(S.l2||'تصلك إلى باب بيتك')+'</h3>'+(S.desc?'<p>'+esc(S.desc)+'</p>':'')+'<span class="bt" style="background:'+acc+';color:'+ink+'">تسوّق الآن</span></div></div>'}
function inkFor(hex){var n=parseInt(String(hex).replace('#',''),16);if(!isFinite(n))return '#111';var r=n>>16,g=n>>8&255,b=n&255;return (r*299+g*587+b*114)/1000>150?'#111':'#fff'}

/* تبويب المنتجات + زر تحديث الأسعار */
function prodTab(){var L=products(),shown=L.filter(function(p){return pset(p.k).on}),F=L.filter(function(p){return !q||(p.name+' '+p.cat).indexOf(q)>-1});
  var ch=changes(),h='<div class="upd"><b>🔄 تحديث أسعار المتجر</b><div class="when">'+(S.snapAt?'آخر تحديث: '+esc(S.snapAt):'لم يتم التحديث بعد')+' · '+shown.length+' منتج ظاهر في المتجر</div>';
  if(ch.list.length)h+='<div class="chg">'+ch.list.slice(0,30).map(function(c){return '<div><span>'+esc(c.name)+'</span><span>'+c.txt+'</span></div>'}).join('')+(ch.list.length>30?'<div><span>و'+(ch.list.length-30)+' تغييرات أخرى</span></div>':'')+'</div>';
  h+='<div class="row"><button type="button" class="b pri" data-a="sync"'+(shown.length?'':' disabled')+'>'+(ch.list.length?'تأكيد تحديث '+ch.list.length+' تغيير':'🔄 تحديث الآن')+'</button></div>'+
   '<label class="chk" style="margin-top:10px"><input type="checkbox" data-k="autoStock"'+(S.autoStock!==false?' checked':'')+'> تحديث الكميات في المتجر تلقائيًا</label>'+
   (S.autoStock!==false?'<div class="when">'+(S.stockErr?'⚠️ تعذّر آخر تحديث للكميات: '+esc(S.stockErr):S.stockAt?'آخر تحديث تلقائي للكميات: '+esc(S.stockAt):'تتحدّث الكميات بعد أول نشر للمتجر')+'</div>':'')+
   '<p class="hint">تنتقل الأسعار والوصف والصور إلى المتجر <b>فقط</b> عند الضغط على هذا الزر. أما الكميات فتتحدّث وحدها خلال دقيقة ما دام التطبيق مفتوحًا، وعندما تنفد كمية منتج يظهر للزبون «نفدت الكمية». لا تظهر التكلفة ولا ملاحظاتك الداخلية أبدًا.</p></div>';
  if(!L.length)return h+'<div class="empty">لا توجد منتجات في المخزون حتى الآن.<br>أضف منتجاتك من صفحة المخزون، ثم فعّل ما تريد إظهاره هنا.</div>';
  h+='<div class="pbar"><input class="srch" type="search" placeholder="ابحث عن منتج…" value="'+esc(q)+'" aria-label="ابحث عن منتج"><button type="button" class="b" data-a="all1">اعرض الكل</button><button type="button" class="b" data-a="all0">إخفاء الكل</button></div>';
  h+=F.map(function(p){var o=pset(p.k);return '<div class="pr" data-p="'+esc(p.k)+'"><div class="im">'+(pim(p)?'<img alt="" src="'+esc(pim(p))+'">':'📦')+'</div>'+
    '<div><b>'+esc(p.name)+'</b><small>'+omr(p.price)+(p.cat?' · '+esc(p.cat):'')+(p.stock<=0?' · <span class="out">نفد</span>':'')+'</small><br><button type="button" class="lnk" data-a="more">'+(o.desc||o.old||(o.imgs&&o.imgs.length)?'✎ الوصف والصور والخصم ✓':'✎ الوصف والصور والخصم')+'</button></div>'+
    '<label class="sw2" title="يظهر في المتجر"><input type="checkbox" data-on aria-label="يظهر '+esc(p.name)+' في المتجر"'+(o.on?' checked':'')+'><span></span></label>'+
    '<div class="more"><label class="f">وصف قصير يظهر للزبون<input data-pd="desc" maxlength="80" value="'+esc(o.desc)+'"></label><label class="f">سعر قبل الخصم (اختياري)<input data-pd="old" type="number" min="0" step="0.5" inputmode="decimal" value="'+esc(o.old)+'"></label>'+gal(p.k,o)+'</div></div>'}).join('')||'<div class="empty">لا يوجد منتج بهذا الاسم.</div>';
  return h}
function changes(){var L=products(),snap=S.snap||{},list=[];L.forEach(function(p){var o=S.prod[p.k];if(!o||!o.on)return;var s=snap[p.k];
  if(!s)list.push({name:p.name,txt:'جديد · '+omr(p.price)});
  else{var t=[];if(s.price!==p.price)t.push('<s>'+omr(s.price)+'</s> ← '+omr(p.price));if((s.stock>0)!==(p.stock>0))t.push(p.stock>0?'عاد متوفرًا':'نفد');if(s.desc!==(o.desc||'')||String(s.old||'')!==String(o.old||''))t.push('الوصف/الخصم');if((s.im||'')!==(o.imgs||[]).join('|'))t.push('الصور');if(t.length)list.push({name:p.name,txt:t.join(' · ')})}});
  Object.keys(snap).forEach(function(k){var o=S.prod[k],p=null;for(var i=0;i<L.length;i++)if(L[i].k===k)p=L[i];if(!p||!o||!o.on)list.push({name:snap[k].name,txt:'يُزال من المتجر'})});
  return {list:list}}
function sync(){if(S.pubAt&&logged()){publish();return}snapshot();save();paint();toast('✓ حُفظت الأسعار، وتظهر للزبائن عند نشر المتجر')}

/* تبويب الرابط: النشر الفعلي (V413) */
function slugOk(s){return /^[a-z0-9][a-z0-9-]{1,28}[a-z0-9]$/.test(s)}
/* V212: لكل حساب رقم خاص ثابت من 4 خانات قبل اسم الرابط؛ المتاجر المنشورة سابقًا تبقى بروابطها */
function slugNo(){var c=C(),u='';try{u=c&&c.uid()||''}catch(e){}if(!u)return '';var h=2166136261;u=String(u);for(var i=0;i<u.length;i++){h^=u.charCodeAt(i);h=Math.imul(h,16777619)}return String(1000+(h>>>0)%9000)}
function slugHas(s,n){return !!n&&String(s||'').indexOf(n+'-')===0}
function slugOld(){return !!(S.pubAt&&S.pubSlug&&!slugHas(S.pubSlug,slugNo()))}
function slugFull(v){v=String(v||'');var n=slugNo();if(!n||!v||slugOld()||slugHas(v,n))return v;return n+'-'+v.slice(0,25)}
function slugName(){var n=slugNo();return !slugOld()&&slugHas(S.slug,n)?S.slug.slice(n.length+1):S.slug}
function pubTab(){S.slug=slugFull(S.slug);var url=URL0+(S.slug||'اسم-متجرك'),on=0,live=!!S.pubAt;products().forEach(function(p){if(S.prod[p.k]&&S.prod[p.k].on)on++});
  var sn=slugNo(),h='<label class="f">'+(sn&&!slugOld()?'اسم متجرك في الرابط (حروف إنجليزية صغيرة وأرقام و -)':'اسم الرابط (حروف إنجليزية صغيرة وأرقام و -)')+'<input data-k="slug" dir="ltr" maxlength="'+(sn&&!slugOld()?25:30)+'" placeholder="noor-perfumes" value="'+esc(slugName())+'"></label>'+(sn&&!slugOld()?'<p class="hint">رقمك الخاص '+sn+' يُضاف تلقائيًا قبل الاسم، فلا يتكرر رابطك مع تاجر آخر.</p>':'')+
   (S.slug&&!slugOk(S.slug)?'<p class="hint" style="color:#b91c1c">من 3 إلى 30 حرفًا: a-z و 0-9 و - فقط، ولا يبدأ ولا ينتهي بـ -</p>':'')+
   (live&&S.pubSlug&&S.slug!==S.pubSlug?'<p class="hint" style="color:#b45309">غيّرت اسم الرابط. بعد تحديث المتجر يتوقف الرابط القديم، ويحتاج الزبائن إلى الرابط الجديد.</p>':'')+
   '<label class="f">رابط متجرك</label><div class="url">'+esc(url)+'</div>'+pvBtn();
  if(!C())return h+'<div class="note" style="margin-top:12px">نظام الحساب غير موجود في هذه النسخة، فلا يمكن نشر المتجر.</div>';
  if(!logged())return h+'<div class="note" style="margin-top:12px">🔐 لنشر متجرك يجب تسجيل الدخول بحسابك في التطبيق (نفس حساب الحفظ في السحابة).</div><button type="button" class="b pri" data-a="login">تسجيل الدخول</button>';
  h+='<button type="button" class="e173-card" data-a="quick"><i>⚡</i><span><b>رابط طلب سريع</b><small>أرسل للعميل منتجات محددة، فيطلب بثلاث لمسات.</small></span></button><div class="emd413-pub">'+(live?'<div class="ok">🟢 متجرك منشور · آخر نشر: '+esc(S.pubAt)+'</div>':'')+(S.pubErr?'<div class="bad">'+esc(S.pubErr)+'</div>':'')+
   (on?'':'<div class="bad" style="color:#b45309">لم تفعّل أي منتج في تبويب «المنتجات»، فسيظهر المتجر بلا منتجات.</div>')+
   '<button type="button" class="b pri big" data-a="publish"'+(busy||!slugOk(S.slug)?' disabled':'')+'>'+(busy?'⏳ جاري النشر…':live?'🔄 حدّث المتجر':'🚀 انشر متجري')+'</button>'+
   '<p class="hint">يُرفع إلى المتجر: الاسم والشعار والألوان والنصوص والتواصل والتوصيل، والمنتجات التي فعّلتها ('+on+') بأسعار البيع.</p><p class="hint">لا يُرفع أبدًا: التكلفة والكميات الدقيقة وطلباتك وعملاؤك.</p></div>'+
   '<div class="row" style="margin-top:10px"><button type="button" class="b" data-a="copy"'+(live?'':' disabled')+'>نسخ الرابط</button><button type="button" class="b" data-a="openst"'+(live?'':' disabled')+'>فتح المتجر</button><button type="button" class="b" data-a="share"'+(live?'':' disabled')+'>إرسال بالواتساب</button></div>'+
   chk('paused','إيقاف المتجر مؤقتًا (يعرض الرابط للزبون «المتجر غير متاح حاليًا» ولا يقبل طلبات)');
  return h}


/* ===== V414: معاينة المتجر (نفس صفحة المتجر، بدون إنترنت وبدون إرسال طلبات) ===== */
function pvData(){var L=products().filter(function(p){var o=S.prod[p.k];return o&&o.on});
  return {slug:'preview',ship:Math.max(0,num(S.ship)),free_over:num(S.free)>0?num(S.free):null,
    brand:Object.assign({name:S.name||bizName()||'',sub:S.sub,hideName:!!S.hideName,logo:S.logo||'',skin:S.skin,accent:S.accent,announce:S.announce,eye:S.eye,l1:S.l1,l2:S.l2,desc:S.desc,
      wa:S.wa,ig:S.ig,city:S.city,waBtn:!!S.waBtn,cod:!!S.cod,bank:!!S.bank,bankInfo:S.bank?S.bankInfo:'',gift:!!S.gift},window.EMD150?window.EMD150.extra(S,S.cover):{},{gal:pvGal(L)}),
    products:L.map(function(p){var o=S.prod[p.k];return {key:p.k,name:p.name,price:Math.max(0,p.price),old_price:num(o.old)>p.price?num(o.old):null,
      in_stock:Math.floor(p.stock)>0,cat:(window.EMD150?window.EMD150.cat(p.cat):p.cat)||null,descr:o.desc||null,image:pim(p)||null}})}}
function pvHtml(){var d=JSON.stringify(pvData()).replace(/</g,'\\u003c');
  /* صفحة المتجر الحالية نفسها: بيانات المعاينة بدل قراءة المتجر من الخادم، وأي إرسال يتوقف برسالة */
  var shim='<script>window.__PV=1;(function(){var D='+d+',f=window.fetch;window.fetch=function(u,o){u=String(u&&u.url||u);'+
    'if(u.indexOf(\'/rpc/emd_store_get\')>=0)return Promise.resolve(new Response(JSON.stringify(D),{status:200,headers:{\'Content-Type\':\'application/json\'}}));'+
    'if(/supabase\\.co/.test(u))return new Promise(function(){setTimeout(function(){var g=document.getElementById(\'coGo\'),e=document.getElementById(\'err\'),en=document.documentElement.lang===\'en\';'+
    'if(g){g.disabled=false;g.textContent=en?\'Place order\':\'تأكيد الطلب\'}if(e)e.textContent=en?\'👁️ This is a preview. On the real store the order reaches the merchant.\':\'👁️ هذه معاينة فقط. في المتجر الحقيقي يصلك الطلب في التطبيق.\'},400)});'+
    'return f.apply(this,arguments)}})();<\/script>';
  return EMDH.storeHtml().then(function(h){return h.replace(/var SLUG=\(new URLSearchParams\(location\.search\)\.get\('s'\)\|\|''\)\.toLowerCase\(\)\.trim\(\);/,"var SLUG='preview';").replace('<head>','<head>'+shim)})}
var EYE='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
function pvBtn(){return '<button type="button" class="emd414-pvb" data-a="pv"><span class="ic">'+EYE+'</span><span class="tx"><b>معاينة المتجر</b><small>شاهد متجرك كما يراه الزبون قبل نشره</small></span><span class="ar" aria-hidden="true">‹</span></button>'}
function pvOpen(){var w=$('emd414Pv');if(w)w.remove();w=document.createElement('div');w.id='emd414Pv';w.setAttribute('role','dialog');w.setAttribute('aria-label','معاينة المتجر');
  w.innerHTML='<div class="bar"><span class="ttl"><span class="ic">'+EYE+'</span><span><b>معاينة المتجر</b><small>لا تُرسل الطلبات من المعاينة</small></span></span>'+
    '<span class="dev" role="group" aria-label="حجم الشاشة"><button type="button" data-d="m" aria-pressed="true">📱 جوال</button><button type="button" data-d="d" aria-pressed="false">🖥️ كمبيوتر</button></span>'+
    '<button type="button" class="x">إغلاق ✕</button></div><div class="stage m"><iframe title="معاينة المتجر" sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe></div>';
  document.body.appendChild(w);document.body.classList.add('emd414-pv');
  w.querySelector('.x').onclick=function(){w.remove();document.body.classList.remove('emd414-pv')};
  [].forEach.call(w.querySelectorAll('[data-d]'),function(b){b.onclick=function(){var d=b.getAttribute('data-d');w.querySelector('.stage').className='stage '+d;[].forEach.call(w.querySelectorAll('[data-d]'),function(x){x.setAttribute('aria-pressed',String(x===b))})}});
  pvHtml().then(function(h){w.querySelector('iframe').srcdoc=h},function(){toast('تعذّر تحميل المعاينة. تحقّق من الاتصال.')})}

/* ===== V413: النشر الفعلي في السحابة + طلبات المتجر ===== */
var URL0='https://emd-business.github.io/store/?s=';
function C(){return EMDH.cloud}
function logged(){var c=C();try{return !!(c&&c.uid())}catch(e){return false}}
function stamp(){var d=new Date(),z=function(n){return (n<10?'0':'')+n};return d.getDate()+'/'+(d.getMonth()+1)+' · '+z(d.getHours())+':'+z(d.getMinutes())}
var FN='https://pfkstppvnebagbdckgbu.supabase.co/functions/v1/store-admin',FNKEY='sb_publishable__tfVZiyph-xyB87GzmHrkQ_9DVpPHJ0';
function fn(action,body){if(action!=='orders'&&!EMDH.canWrite())return Promise.reject(new Error('🧪 في التجربة لا يُرسل شيء إلى متجرك الحقيقي.'));var c=C();if(!c)return Promise.reject(Object.assign(new Error('no cloud'),{auth:true}));body=body||{};body.action=action;
  return c.token().then(function(tk){return fetch(FN,{method:'POST',headers:{apikey:FNKEY,'Content-Type':'application/json','x-emd-token':tk},body:JSON.stringify(body)})}).then(function(r){
    return r.text().then(function(x){var j=null;try{j=x?JSON.parse(x):null}catch(e){}
      if(!r.ok||!j||!j.ok){var e=new Error((j&&j.error)||('HTTP '+r.status));e.status=r.status;e.code=(j&&(j.code||j.error))||'';if(r.status===401)e.auth=true;throw e}return j})})}
function errMsg(e){var c=String(e&&e.code||''),m=String(e&&e.message||'');
  if(e&&e.auth)return 'سجّل الدخول مرة أخرى من نافذة الحساب، ثم أعد المحاولة.';
  if(c==='slug_taken'||c==='23505')return 'اسم الرابط هذا محجوز لتاجر آخر. جرّب اسمًا آخر.';
  if(e&&e.status===404||c==='42P01'||c==='PGRST205'||/does not exist|Could not find|relation/i.test(m))return 'لم تُجهَّز السحابة للمتجر بعد: يجب تشغيل ملف الإعداد store_setup.sql مرة واحدة.';
  if(/Failed to fetch|NetworkError|Load failed/i.test(m))return 'لا يوجد اتصال بالإنترنت. تحقق منه وأعد المحاولة.';
  return 'تعذّر الإكمال: '+m}
function fnv(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return (h>>>0).toString(36)+s.length.toString(36)}
function shrink(src,M,type){return new Promise(function(ok,no){var im=new Image();im.onload=function(){var sc=Math.min(1,M/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.max(1,Math.round(im.width*sc));c.height=Math.max(1,Math.round(im.height*sc));var g=c.getContext('2d');
  if(type==='image/jpeg'){g.fillStyle='#fff';g.fillRect(0,0,c.width,c.height)}g.drawImage(im,0,0,c.width,c.height);c.toBlob(function(b){b?ok(b):no(new Error('img'))},type,.85)};im.onerror=function(){no(new Error('img'))};im.src=src})}
/* الصور تنرفع مرة وحدة: اسم الملف من بصمة الصورة، ولو انرفعت قبل نستخدم رابطها */
function upImg(src,M,type){src=String(src||'');if(/^https:\/\//i.test(src))return Promise.resolve(src);if(!/^data:image\//i.test(src))return Promise.resolve('');
  var h=fnv(src)+'-'+M,done=S.imgUp[h];if(done)return Promise.resolve(done);
  return shrink(src,M,type).then(b64).then(function(d){return fn('upload',{name:h+(type==='image/png'?'.png':'.jpg'),type:type,data:d})}).then(function(j){S.imgUp[h]=j.url;return j.url}).catch(function(){return ''})}
function b64(blob){return new Promise(function(ok,no){var r=new FileReader();r.onload=function(){ok(String(r.result).split(',')[1]||'')};r.onerror=no;r.readAsDataURL(blob)})}
function snapshot(){var L=products(),snap={};L.forEach(function(p){var o=S.prod[p.k];if(o&&o.on)snap[p.k]={name:p.name,price:p.price,stock:p.stock,cat:p.cat,desc:o.desc||'',old:o.old||'',im:(o.imgs||[]).join('|')}});S.snap=snap;S.snapAt=stamp()}
var busy=false;
/* V211: إن كان الرابط محجوزًا لتاجر آخر تُضاف إليه علامة مميزة تلقائيًا ويُعاد النشر دون إزعاج التاجر */
function slugNext(base,n){var suf=n<=9?'-'+n:'-'+Math.random().toString(36).slice(2,6);return base.slice(0,30-suf.length).replace(/-+$/,'')+suf}
function slugTaken(e){var c=String(e&&e.code||''),m=String(e&&e.message||'');return c==='slug_taken'||(c==='23505'&&/slug/i.test(m))}
function pubFree(st,rows){var base=st.slug,n=1;
  function go(s){st.slug=s;return fn('publish',{store:st,products:rows}).then(function(r){if(s!==base){S.slug=s;S.slugAuto=true}return r},function(e){if(!slugTaken(e)||n>=14)throw e;n++;return go(slugNext(base,n))})}
  return go(base)}
function publish(){if(busy)return;if(!logged()){S.pubErr='سجّل الدخول أولًا من تبويب «الرابط».';paint();return}
  S.slug=slugFull(S.slug);
  if(!slugOk(S.slug)){S.pubErr='اكتب اسم رابط صحيحًا أولًا (تبويب «الرابط»).';tab='pub';paint();return}
  busy=true;S.pubErr='';paint();
  var L=products().filter(function(p){var o=S.prod[p.k];return o&&o.on}),rows=[],brand=null,GAL={};
  upImg(S.logo,256,'image/png').then(function(logo){return upImg(S.cover||'',1200,'image/jpeg').then(function(cv){return [logo,cv]})}).then(function(A){var logo=A[0];
    brand=Object.assign({name:S.name||bizName()||'',sub:S.sub,hideName:!!S.hideName,logo:logo,skin:S.skin,accent:S.accent,announce:S.announce,eye:S.eye,l1:S.l1,l2:S.l2,desc:S.desc,
      wa:S.wa,ig:S.ig,city:S.city,waBtn:!!S.waBtn,cod:!!S.cod,bank:!!S.bank,bankInfo:S.bank?S.bankInfo:'',gift:!!S.gift},window.EMD150?window.EMD150.extra(S,A[1]):{});
    var i=0;function next(){if(i>=L.length)return Promise.resolve();var p=L[i++],o=S.prod[p.k];
      return Promise.all((Array.isArray(o.imgs)?o.imgs.slice(0,5):[]).map(function(x){return upImg(x,800,'image/jpeg')})).then(function(U){(o.imgs||[]).slice(0,5).forEach(function(x,j){if(U[j]&&/^data:/.test(x))o.imgs[o.imgs.indexOf(x)]=U[j]});U=U.filter(Boolean);if(U.length>1)GAL[p.k]=U.slice(1);
        return U.length?U[0]:upImg(p.img,600,'image/jpeg')}).then(function(u){rows.push({key:p.k,name:p.name,price:Math.max(0,p.price),old_price:num(o.old)>p.price?num(o.old):null,stock:Math.max(0,Math.floor(p.stock)),cat:(window.EMD150?window.EMD150.cat(p.cat):p.cat)||null,descr:o.desc||null,image:u||null});return next()})}
    return next()})
  .then(function(){if(brand){var gk=Object.keys(GAL);if(gk.length)brand.gal=GAL;while(gk.length&&JSON.stringify(brand).length>19500){var kk=gk[gk.length-1];GAL[kk].pop();if(!GAL[kk].length){delete GAL[kk];gk.pop()}}}
    return pubFree({slug:S.slug,is_open:!S.paused,brand:brand,ship:Math.max(0,num(S.ship)),free_over:num(S.free)>0?num(S.free):null},rows)})
  .then(function(){S.pubRows=rows;S.pubStore={brand:brand,ship:Math.max(0,num(S.ship)),free_over:num(S.free)>0?num(S.free):null};S.stockErr='';snapshot();S.pubAt=stamp();S.pubSlug=S.slug;busy=false;save();paint();toast(S.slugAuto?'✓ تم نشر متجرك برابط: '+S.slug:'✓ تم نشر متجرك');S.slugAuto=false;poll(true)})
  .catch(function(e){busy=false;S.pubErr=errMsg(e);save();paint()})}
/* V156: الكميات تتحدّث في المتجر تلقائيًا (الأسعار والتصميم تبقى كما نُشرت آخر مرة) */
var stBusy=false;
function stockCheck(){if(stBusy||busy||S.autoStock===false||!S.pubAt||!S.pubStore||!Array.isArray(S.pubRows)||!S.pubRows.length||!logged())return;
  var cur={};products().forEach(function(p){cur[p.k]=Math.max(0,Math.floor(p.stock))});
  var R=S.pubRows.map(function(r){var x=Object.assign({},r),v=cur[r.key];x.stock=v==null?0:v;return x});
  if(!R.some(function(x,i){return x.stock!==S.pubRows[i].stock}))return;
  stBusy=true;
  fn('publish',{store:{slug:S.pubSlug||S.slug,is_open:!S.paused,brand:S.pubStore.brand,ship:S.pubStore.ship,free_over:S.pubStore.free_over},products:R})
  .then(function(){S.pubRows=R;if(S.snap)R.forEach(function(x){if(S.snap[x.key])S.snap[x.key].stock=x.stock});S.stockAt=stamp();S.stockErr='';stBusy=false;save();
    var w=$('emd411Store');if(w&&w.classList.contains('show')&&tab==='prod')paint()},
   function(e){stBusy=false;S.stockErr=errMsg(e);save()})}
EMDH.every(45000,stockCheck);
document.addEventListener('visibilitychange',function(){if(!document.hidden)setTimeout(stockCheck,3000)});
setTimeout(stockCheck,8000);
window.EMDStockV156={check:stockCheck};
var sgBusy=false;
function stageOf(o){var s=String(o.status||'');if(/^cancel/.test(s))return 'cancel';if(s==='received'||s==='delivered'||s==='closed')return 'done';if(s==='shipped'||s==='out_for_delivery')return 'ship';return 'prep'}
function stageSync(){if(sgBusy||!logged())return;var d=EMDH.db();if(!d||!Array.isArray(d.orders))return;S.stg=S.stg&&typeof S.stg==='object'?S.stg:{};
  var L=[];d.orders.forEach(function(o){if(!o||o.source!=='store'||!o.storeOrderId)return;var id=String(o.storeOrderId),st=stageOf(o);if(S.stg[id]!==st)L.push({id:+o.storeOrderId,stage:st})});
  if(!L.length)return;sgBusy=true;L=L.slice(0,50);
  fn('stage',{list:L}).then(function(){L.forEach(function(x){S.stg[String(x.id)]=x.stage});var k=Object.keys(S.stg);if(k.length>400)k.slice(0,k.length-400).forEach(function(x){delete S.stg[x]});sgBusy=false;save()},function(){sgBusy=false})}
EMDH.every(60000,stageSync);
document.addEventListener('visibilitychange',function(){if(!document.hidden)setTimeout(stageSync,5000)});
setTimeout(stageSync,10000);
window.EMDStageV157={sync:stageSync,of:stageOf};
function setOpen(){if(!S.pubAt||!logged())return;fn('open',{is_open:!S.paused})
  .then(function(){toast(S.paused?'⏸ أوقفنا المتجر مؤقتًا':'▶ عاد المتجر يستقبل الطلبات')},function(e){toast(errMsg(e))})}

/* الطلبات: فحص خفيف كل دقيقة لما المتجر منشور والشاشة ظاهرة */
var ORD=[],N=0,lastPoll=0,polling=false;
function poll(force){if(!S.pubAt||!logged()||polling)return;if(!force&&(document.hidden||Date.now()-lastPoll<55000))return;lastPoll=Date.now();polling=true;
  fn('orders')
  .then(function(j){polling=false;ORD=Array.isArray(j.orders)?j.orders:[];N=ORD.length;bell();badge();var w=$('emd411Store');if(w&&w.classList.contains('show')){if(tab==='ord')paint();else paintTabs()}},function(){polling=false})}
function bell(){var seen={},ch=false;(S.seen||[]).forEach(function(i){seen[i]=1});
  var ev=[];try{ev=JSON.parse(localStorage.getItem(EMDH.lk('emd_v72_customer_events'))||'[]');if(!Array.isArray(ev))ev=[]}catch(e){ev=[]}
  ORD.forEach(function(o){if(seen[o.id])return;seen[o.id]=1;S.seen.push(o.id);ch=true;var cu=o.customer||{};
    ev.push({id:'store'+o.id,kind:'store',orderId:'',name:cu.name||'',comment:omr(o.total)+' · '+(o.items||[]).length+' صنف',at:Date.parse(o.created_at)||Date.now(),read:false})});
  if(!ch)return;S.seen=S.seen.slice(-300);save();try{localStorage.setItem(EMDH.lk('emd_v72_customer_events'),JSON.stringify(ev.slice(-200)))}catch(e){}
  EMDH.badge(N)}
function badge(){EMDH.badge(N)}
function ago(ts){var m=Math.round((Date.now()-Date.parse(ts))/60000);if(!(m>=0))return '';if(m<1)return 'الآن';if(m<60)return 'قبل '+m+' د';var h=Math.round(m/60);if(h<24)return 'قبل '+h+' س';return 'قبل '+Math.round(h/24)+' يوم'}
function ordTab(){if(!logged())return '<div class="note">🔐 سجّل الدخول بحسابك لترى طلبات متجرك.</div><button type="button" class="b pri" data-a="login">تسجيل الدخول</button>';
  var h='<div class="row" style="justify-content:space-between;margin-bottom:6px"><b style="font-size:15px">'+(N?N+' طلب جديد من المتجر':'لا توجد طلبات جديدة')+'</b><button type="button" class="b" data-a="poll">🔄 تحقق الآن</button></div>';
  if(!ORD.length)return h+'<div class="empty">عندما يطلب زبون من رابط متجرك، يظهر طلبه هنا وتعتمده بضغطة.<br>نتحقق تلقائيًا كل دقيقة ما دام التطبيق مفتوحًا.</div>';
  setTimeout(function(){window.E215&&window.E215.scan()},0);return h+ORD.map(function(o){var cu=o.customer||{},ph=String(cu.phone||'');
    return '<div class="emd413-o" data-o="'+o.id+'"><div class="top"><b>#'+o.id+' · '+esc(cu.name)+'</b><small>'+ago(o.created_at)+'</small></div>'+
     '<div class="ln"><span dir="ltr">'+esc(ph)+'</span>'+(cu.city?' · '+esc(cu.city):'')+'</div>'+(cu.address?'<div class="ln">📍 '+esc(cu.address)+'</div>':'')+(cu.note?'<div class="ln">💬 '+esc(cu.note)+'</div>':'')+
     '<div class="its">'+(o.items||[]).map(function(i){return '<div><span>'+esc(i.name)+' × '+(+i.qty||1)+'</span><span>'+omr((+i.price||0)*(+i.qty||1))+'</span></div>'}).join('')+
     '<div class="sm"><span>التوصيل</span><span>'+(+o.ship?omr(o.ship):'مجاني')+'</span></div><div class="sm t"><span>الإجمالي</span><span>'+omr(o.total)+'</span></div></div>'+
     '<div class="ln">'+(o.payment==='bank'?'💳 تحويل بنكي':'💵 دفع عند الاستلام')+(o.gift?' · 🎁 تغليف هدية':'')+'</div>'+(o.payment==='bank'?'<div class="e215r" data-rid="'+o.id+'">🧾 جارٍ جلب الإيصال…</div>':'')+
     '<div class="row"><button type="button" class="b pri" data-a="acc">✓ اعتمد</button><button type="button" class="b" data-a="owa">💬 واتساب</button><button type="button" class="b" data-e221t="'+esc(ph)+'">⭐ زبون موثوق</button><button type="button" class="b rej" data-a="rej">✕ رفض</button></div></div>'}).join('')}
function findO(id){for(var i=0;i<ORD.length;i++)if(String(ORD[i].id)===String(id))return ORD[i]}
function handled(id,st){return fn('handle',{id:+id,status:st}).then(function(j){return j.rows})}
function drop(id){ORD=ORD.filter(function(x){return String(x.id)!==String(id)});N=ORD.length;badge();paint()}
function accept(id,btn){var o=findO(id);if(!o)return;btn.disabled=true;
  handled(id,'accepted').then(function(a){if(!a||!a.length){toast('عولج هذا الطلب من جهاز آخر');drop(id);return}
    try{var red215=window.E215&&window.E215.pay(id)&&window.E215.pay(id).red,has215=window.E215&&window.E215.pay(id)&&window.E215.pay(id).ok,bank215=a[0].payment==='bank',no=addLocal(a[0]);drop(id);toast(bank215&&has215?'✓ أُضيف إلى الطلبات '+no+' وسُجّل مدفوعًا':bank215&&red215?'أُضيف إلى الطلبات '+no+' غير مدفوع لأن الإيصال مشكوك فيه':'✓ أُضيف إلى قائمة الطلبات '+no)}catch(e){handled(id,'new').catch(function(){});btn.disabled=false;toast('تعذّرت إضافته إلى الطلبات: '+(e.message||e))}},
    function(e){btn.disabled=false;toast(errMsg(e))})}
function addLocal(o){var d=EMDH.db();if(!d||!Array.isArray(d.orders))throw new Error('قاعدة الطلبات غير جاهزة');
  var cu=o.customer||{},now=new Date().toISOString(),ps=(o.items||[]).map(function(i){return {name:String(i.name||''),qty:Math.max(1,+i.qty||1),unitPrice:+i.price||0}});
  var obj={id:EMDH.nextId(),
    name:cu.name||'',phone:cu.phone||'',place:[cu.city,cu.address].filter(Boolean).join(' - '),company:'',method:'',transfer:'',beneficiary:'',due:'',
    note:['[مصدر الطلب: المتجر الإلكتروني #'+o.id+']',o.payment==='bank'?'الدفع: تحويل بنكي':'الدفع: عند الاستلام',o.gift?'🎁 تغليف هدية':'',cu.note?'ملاحظة الزبون: '+cu.note:''].filter(Boolean).join('\n'),
    products:ps,payment:'pending',created:now,orderDate:now,deliveryFee:+o.ship||0,subtotal:+o.subtotal||0,total:+o.total||0,paidAmount:0,remaining:+o.total||0,pricingEnabled:true,
    source:'store',storeOrderId:o.id,notifyOnAvailable:false,notifyStatus:'none'};
  obj.status=EMDH.hasStock(obj)?'ready':'waiting';
  var nt218=String(cu.note||''),m218=nt218.match(/طريقة التوصيل: ([^·—]+)/),c218=nt218.match(/شركة التوصيل: ([^·—]+)/),cr215=nt218.indexOf('رسوم التوصيل للمندوب')>-1;if(m218)obj.method=m218[1].trim();if(c218)obj.company=c218[1].trim();
  if(o.payment==='bank'&&window.E215){var rc215=window.E215.pay(o.id);if(rc215&&rc215.ok){var fee215=String(cu.city||'').indexOf('يحددها')>-1;obj.paymentStatus=fee215?'partial':'paid';obj.paymentMethod='transfer';obj.paidAmount=+o.total||0;obj.remaining=0;obj.payment='paid';obj.paymentReference=rc215.last?('…'+rc215.last):'';obj.paymentUpdatedAt=now;obj.emd215Paid=true;if(cr215){obj.emd218Fee=+obj.deliveryFee||0;obj.deliveryFee=0;obj.total=+o.subtotal||0;obj.paidAmount=obj.total;obj.paymentStatus='paid';obj.note+='\nرسوم التوصيل تُدفع للمندوب: '+(+o.ship||0).toFixed(3)+' ر.ع'}}else if(rc215&&rc215.red){obj.emd215Red=true}}
  d.orders.unshift(obj);
  var pk=String(obj.phone).replace(/\D/g,'');if(pk){d.customers=Array.isArray(d.customers)?d.customers:[];var c=null;for(var i=0;i<d.customers.length;i++)if(String(d.customers[i].phone||'').replace(/\D/g,'')===pk){c=d.customers[i];break}
    if(!c){c={name:obj.name,phone:obj.phone,place:obj.place,orders:[]};d.customers.push(c)}c.orders=Array.isArray(c.orders)?c.orders:[];if(c.orders.indexOf(obj.id)<0)c.orders.unshift(obj.id)}
  EMDH.save();EMDH.render();
  return obj.id}
function reject(id,btn){if(!confirm('هل ترفض هذا الطلب؟ سيختفي من هنا، ويمكنك التواصل مع الزبون عبر واتساب.'))return;btn.disabled=true;
  handled(id,'rejected').then(function(){try{var rj=JSON.parse(localStorage.getItem(EMDH.lk('emd415_rej'))||'[]');rj.push(String(id));localStorage.setItem(EMDH.lk('emd415_rej'),JSON.stringify(rj.slice(-300)))}catch(x){}drop(id);toast('تم رفض الطلب')},function(e){btn.disabled=false;toast(errMsg(e))})}
function owa(id){var o=findO(id);if(!o)return;var cu=o.customer||{},p=String(cu.phone||'').replace(/\D/g,'');if(p.length===8)p='968'+p;
  var m='السلام عليكم '+(cu.name||'')+' 🌷\nاستلمنا طلبك رقم #'+o.id+' من متجر '+(S.name||bizName()||'')+' بقيمة '+omr(o.total)+'.';
  window.open('https://wa.me/'+p+'?text='+encodeURIComponent(m),'_blank')}
/* V415: فتح طلب متجر محدد من التنبيهات */
function openLocal415(id){EMDH.openOrder(id)}
function openOrd(id){id=String(id);
  function hl(){if(!findO(id))return false;open('ord');var t0=Date.now(),sc=false,iv=setInterval(function(){var e=document.querySelector('#emd411Store [data-o="'+id+'"]'),end=Date.now()-t0>5000;if(e){e.classList.toggle('emd415-hl',!end);if(!sc){sc=true;e.scrollIntoView({block:'center',behavior:'smooth'})}}if(end)clearInterval(iv)},150);return true}
  if(hl())return;
  var L=(EMDH.db()&&Array.isArray(EMDH.db().orders))?EMDH.db().orders:[];for(var i=0;i<L.length;i++)if(String(L[i].storeOrderId)===id){openLocal415(L[i].id);return}
  var r=[];try{r=JSON.parse(localStorage.getItem(EMDH.lk('emd415_rej'))||'[]')}catch(e){}if(r.indexOf(id)>=0){toast('رفضت هذا الطلب من قبل');return}
  if(S.pubAt&&logged()){toast('⏳ نتحقق من الطلب…');poll(true);setTimeout(function(){if(!hl())open('ord')},2500);return}
  open('ord')}
function tabsList(){return S.pubAt?TABS.concat([['ord','📥 الطلبات'+(N?' ('+N+')':'')]]):TABS}
function paintTabs(){var w=$('emd411Store');if(!w)return;
  w.querySelector('.tabs').innerHTML=tabsList().map(function(t){return '<button type="button" role="tab" data-tab="'+t[0]+'" aria-selected="'+(t[0]===tab)+'">'+t[1]+'</button>'}).join('');
  var f=$('emd413Ft');if(f)f.textContent=S.pubAt?'🟢 متجرك منشور · آخر نشر: '+S.pubAt:'تُحفظ التعديلات في الجهاز، وتظهر للزبائن عند نشر المتجر'}

/* الأحداث */
function onClick(e){var w=$('emd411Store'),t=e.target;if(t===w){close();return}
  var tb=t.closest('[data-tab]');if(tb){tab=tb.getAttribute('data-tab');paint();w.querySelector('.bd').scrollTop=0;return}
  var sk=t.closest('[data-skin]');if(sk){S.skin=sk.getAttribute('data-skin');save();paint();return}
  var ac=t.closest('[data-acc]');if(ac){S.accent=ac.getAttribute('data-acc');save();paint();return}
  var a=t.closest('[data-a]');if(!a)return;var act=a.getAttribute('data-a');
  if(act==='close')close();
  else if(act==='nologo'){S.logo='';save();paint()}
  else if(act==='more'){a.closest('.pr').classList.toggle('open')}
  else if(act==='gdel'||act==='gmain'){var gk=a.closest('.pr').getAttribute('data-p'),go=pset(gk),gi=+a.getAttribute('data-gi'),gy=$('emd411Store').querySelector('.bd').scrollTop;go.imgs=Array.isArray(go.imgs)?go.imgs:[];
    if(act==='gdel'){if(!confirm('هل تحذف هذه الصورة من المتجر؟'))return;go.imgs.splice(gi,1)}else{var gm=go.imgs.splice(gi,1)[0];go.imgs.unshift(gm)}save();paint();reopen(gk);$('emd411Store').querySelector('.bd').scrollTop=gy}
  else if(act==='all1'||act==='all0'){products().forEach(function(p){if(!q||(p.name+' '+p.cat).indexOf(q)>-1)pset(p.k).on=act==='all1'});save();paint()}
  else if(act==='sync')sync();
  else if(act==='publish')publish();
  else if(act==='pv')pvOpen();
  else if(act==='login'){close();EMDH.login()}
  else if(act==='openst')window.open(URL0+(S.pubSlug||S.slug),'_blank');
  else if(act==='share')window.open('https://wa.me/?text='+encodeURIComponent('تفضّل بزيارة متجرنا 🛍️ '+URL0+(S.pubSlug||S.slug)),'_blank');
  else if(act==='poll')poll(true);
  else if(act==='quick'){close();window.EMDQuickV173.open()}
  else if(act==='acc'||act==='rej'||act==='owa'){var oid=a.closest('[data-o]').getAttribute('data-o');if(act==='acc')accept(oid,a);else if(act==='rej')reject(oid,a);else owa(oid)}
  else if(act==='copy'){var u='https://emd-business.github.io/store/?s='+(S.pubSlug||S.slug);try{navigator.clipboard.writeText(u).then(function(){toast('✓ تم نسخ الرابط')},function(){toast(u)})}catch(x){toast(u)}}}
var repaintT;
function onInput(e){var t=e.target;
  if(t.classList.contains('srch')){q=t.value.trim();paint();return}
  var k=t.getAttribute('data-k');if(k&&t.type!=='checkbox'){S[k]=t.type==='number'?Math.max(0,num(t.value)):(k==='slug'?slugFull(t.value.toLowerCase().replace(/\s+/g,'-')):t.value);save();
    clearTimeout(repaintT);repaintT=setTimeout(function(){var m=$('emd411Store').querySelector('.mini');if(m)m.outerHTML=mini();if(k==='slug'){var u=$('emd411Store').querySelector('.url');if(u)u.textContent='https://emd-business.github.io/store/?s='+(S.slug||'اسم-متجرك');var c=$('emd411Store').querySelector('[data-a="copy"]');if(c)c.disabled=!slugOk(S.slug)}},120);return}
  var pd=t.getAttribute('data-pd');if(pd){var r=t.closest('.pr');pset(r.getAttribute('data-p'))[pd]=t.value;save()}}
function onChange(e){var t=e.target,k=t.getAttribute('data-k');
  if(k&&t.type==='checkbox'){S[k]=t.checked;if(k==='paused')setTimeout(setOpen,0);if((k==='cod'||k==='bank')&&!S.cod&&!S.bank){S[k]=true;t.checked=true;toast('يجب اختيار طريقة دفع واحدة على الأقل')}save();if(k==='bank'||k==='hideName')paint();else{var m=$('emd411Store').querySelector('.mini');if(m)m.outerHTML=mini()}return}
  if(k==='slug'){paint();return}
  if(t.hasAttribute('data-gal')){galAdd(t.closest('.pr').getAttribute('data-p'),t.files);t.value='';return}
  if(t.hasAttribute('data-on')){var r=t.closest('.pr');pset(r.getAttribute('data-p')).on=t.checked;save();var y=$('emd411Store').querySelector('.bd').scrollTop;paint();return}
  if(t.getAttribute('data-file')==='logo'){var f=t.files&&t.files[0];if(!f)return;var rd=new FileReader();rd.onload=function(){var im=new Image();im.onload=function(){var M=256,sc=Math.min(1,M/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.max(1,Math.round(im.width*sc));c.height=Math.max(1,Math.round(im.height*sc));c.getContext('2d').drawImage(im,0,0,c.width,c.height);S.logo=c.toDataURL('image/png');save();paint()};im.onerror=function(){toast('الملف ليس صورة')};im.src=rd.result};rd.readAsDataURL(f)}}

EMDH.every(55000,function(){poll()});document.addEventListener('visibilitychange',function(){if(!document.hidden)poll()});setTimeout(function(){poll(true)},1500);
})();

/* ===== EMD-V166-thumbs-js ===== */

(function(){'use strict';
/* معاينة مصغّرة لكل تصميم: خلفية التصميم، وعلامته المميزة متحركة، وبطاقتا منتج */
var P={royal:['#f2f5fc','#0b1f6e','#1a47c9','#dfe6fb'],champ:['#f7efe6','#4a3424','#b8873f','#efe2cf'],oud:['#15100c','#f1e3c4','#d4a94f','#2a2018'],rest:['#fbf3df','#8b1a1a','#f2c230','#f6e7bd'],
 ig:['#fbf8f3','#1c1813','#a8834f','#eee6da'],candy:['#fff6f8','#7a1f45','#d63c78','#fde0ea'],bout:['#f6f0e4','#33402f','#4f6450','#e9dfcc'],bake:['#f6ecdf','#3a2318','#8a4b22','#ead9c4'],photo:['#0f0e0d','#f3e9d8','#e6cfa7','#2c2925'],
 print3d:['#060b20','#dff6ff','#3b6bff','#111a3a'],cmyk:['#fbfcfe','#17306b','#e5007d','#eef3fa'],sticker:['#fbf6ee','#26304f','#4f5fd0','#ffffff'],moon:['#121a15','#f5f0e5','#e2b765','#1b2620'],calm:['#f7f0e6','#3e2717','#7a4a2c','#fffaf3'],
 laser:['#f6efe6','#2b1d12','#6e4528','#ffffff'],stamp:['#fbf4ec','#36264a','#7d5a9e','#ffffff'],factory:['#f7f4ee','#1c2420','#2f7d3b','#ffffff'],capsule:['#f3f6ff','#16204a','#1f3fae','#ffffff'],
 bite:['#f7f1e8','#5a3a2e','#5a3a2e','#fffaf3'],story:['#1d130e','#fff6ec','#d99a4e','#2a1c15'],crumble:['#f4ecdf','#20302a','#183a2b','#fbf7f0'],cbox:['#f3efe4','#2f3a2b','#5d7356','#faf8f2'],jelly:['#f6f8ff','#1f2a4d','#4f6fd6','#ffffff'],arch:['#1a0f08','#f3e6d3','#c8915a','#2b1a10'],awning:['#fbf6ee','#3a1a12','#6e1424','#ffffff']};
var LIVE={print3d:1,cmyk:1,sticker:1,moon:1,calm:1,laser:1,stamp:1,factory:1,capsule:1,bite:1,story:1,crumble:1,cbox:1,jelly:1,arch:1,awning:1};
function tiles(c,y){return '<rect x="10" y="'+y+'" width="47" height="42" rx="7" fill="'+c[3]+'"/><rect x="63" y="'+y+'" width="47" height="42" rx="7" fill="'+c[3]+'"/>'+
  '<rect x="14" y="'+(y+46)+'" width="30" height="4" rx="2" fill="'+c[1]+'" opacity=".55"/><rect x="67" y="'+(y+46)+'" width="30" height="4" rx="2" fill="'+c[1]+'" opacity=".55"/>'+
  '<rect x="14" y="'+(y+53)+'" width="18" height="4" rx="2" fill="'+c[2]+'"/><rect x="67" y="'+(y+53)+'" width="18" height="4" rx="2" fill="'+c[2]+'"/>'}
function top(c){return '<circle cx="104" cy="11" r="5" fill="'+c[2]+'"/><rect x="66" y="8.5" width="32" height="5" rx="2.5" fill="'+c[1]+'" opacity=".8"/><rect x="10" y="7" width="12" height="8" rx="3" fill="none" stroke="'+c[1]+'" stroke-opacity=".35"/>'}
function bottle(x,y,col,cap){return '<rect x="'+(x-3)+'" y="'+(y-8)+'" width="6" height="6" rx="1" fill="'+cap+'"/><rect x="'+(x-9)+'" y="'+(y-2)+'" width="18" height="24" rx="5" fill="'+col+'" opacity=".9"/><rect x="'+(x-5)+'" y="'+(y+2)+'" width="4" height="14" rx="2" fill="#fff" opacity=".35"/>'}
var M={
 arch:function(c){return '<rect x="0" y="20" width="120" height="76" fill="#1a0f08"/><circle cx="60" cy="56" r="30" fill="#e8c391" opacity=".14"/><g class="e10a"><path d="M14 96V52a46 46 0 0 1 92 0v44" fill="none" stroke="#c8915a" stroke-width="3"/></g><g class="e10a" style="animation-delay:-1.2s"><path d="M30 96V58a30 30 0 0 1 60 0v38" fill="none" stroke="#c8915a" stroke-width="2.4" opacity=".8"/></g><g class="e10a" style="animation-delay:-2.4s"><path d="M44 96V64a16 16 0 0 1 32 0v32" fill="none" stroke="#e8c391" stroke-width="1.6" opacity=".7"/></g><path d="M0 96L60 70 120 96z" fill="#4a2e1c" opacity=".6"/><rect x="58" y="20" width="1" height="16" fill="#000"/><circle cx="58.5" cy="38" r="3" fill="#ffd79a"/>'},
 awning:function(c){return '<rect x="0" y="20" width="120" height="76" fill="#6e1424"/><g class="e10w"><rect x="0" y="20" width="120" height="16" fill="#f6ede0"/><g fill="#8e2236"><rect x="0" y="20" width="12" height="16"/><rect x="24" y="20" width="12" height="16"/><rect x="48" y="20" width="12" height="16"/><rect x="72" y="20" width="12" height="16"/><rect x="96" y="20" width="12" height="16"/></g><g fill="#8e2236"><circle cx="6" cy="36" r="6"/><circle cx="30" cy="36" r="6"/><circle cx="54" cy="36" r="6"/><circle cx="78" cy="36" r="6"/><circle cx="102" cy="36" r="6"/></g><g fill="#f6ede0"><circle cx="18" cy="36" r="6"/><circle cx="42" cy="36" r="6"/><circle cx="66" cy="36" r="6"/><circle cx="90" cy="36" r="6"/><circle cx="114" cy="36" r="6"/></g></g><path d="M38 96V68a22 22 0 0 1 44 0v28z" fill="#c79f78" stroke="#e9dcc8" stroke-width="3"/><g fill="#d81b60"><path class="e10p" d="M20 44l4 2-2 3z"/><path class="e10p" style="animation-delay:-1s" d="M96 46l4 2-2 3z"/><path class="e10p" style="animation-delay:-2s" d="M70 44l4 2-2 3z"/></g>'},
 cbox:function(c){return '<rect x="0" y="20" width="120" height="76" fill="#f3efe4"/><g transform="translate(60 62) skewX(-14)"><rect x="-34" y="-14" width="68" height="34" rx="3" fill="#efe9da" stroke="#d8cfb8"/><g fill="#d39a4f"><circle cx="-22" cy="-4" r="6"/><circle cx="0" cy="-4" r="6"/><circle cx="22" cy="-4" r="6"/><circle cx="-22" cy="10" r="6"/><circle cx="0" cy="10" r="6"/><circle cx="22" cy="10" r="6"/></g><g fill="#4a2c1a"><circle cx="-24" cy="-6" r="1.4"/><circle cx="-2" cy="-3" r="1.4"/><circle cx="20" cy="-6" r="1.4"/><circle cx="-20" cy="9" r="1.4"/><circle cx="2" cy="12" r="1.4"/><circle cx="24" cy="9" r="1.4"/></g><g class="e9l"><rect x="-36" y="-16" width="72" height="38" rx="3" fill="#f6f2e8" stroke="#d8cfb8"/><circle cx="0" cy="3" r="9" fill="none" stroke="'+c[2]+'" stroke-width="1.5"/></g></g><g fill="#d9a35b" opacity=".6"><circle class="e9c" cx="20" cy="24" r="1.6"/><circle class="e9c" style="animation-delay:1.2s" cx="96" cy="22" r="2"/><circle class="e9c" style="animation-delay:2.1s" cx="70" cy="22" r="1.4"/></g>'},
 jelly:function(c){return '<rect x="0" y="20" width="120" height="76" fill="#dfe7ff"/><g class="e9f"><circle cx="22" cy="36" r="6" fill="none" stroke="#ff8a5c" stroke-width="4"/><path d="M98 30l2.4 5h5.6l-4.4 3.4 1.6 5.6-5.2-3.2-5.2 3.2 1.6-5.6-4.4-3.4h5.6z" fill="#f59ab8"/></g><g class="e9f" style="animation-delay:-1s"><rect x="14" y="70" width="18" height="6" rx="2" fill="#7fd1a8"/><circle cx="102" cy="74" r="6" fill="#ffc94d"/></g><path d="M48 44h24l-2 4v34q0 4-4 4H54q-4 0-4-4V48z" fill="#fff" fill-opacity=".7" stroke="#cfd8f5" stroke-width="1.5"/><path d="M46 40h28l-4 6H50z" fill="'+c[2]+'"/><g clip-path="url(#e9bg)"><g class="e9d"><circle cx="56" cy="76" r="4" fill="#ff8a5c"/><circle cx="65" cy="78" r="4" fill="#7fd1a8"/><circle cx="60" cy="70" r="4" fill="#f59ab8"/></g></g><defs><clipPath id="e9bg"><rect x="50" y="48" width="20" height="38"/></clipPath></defs>'},
 bite:function(c){return '<rect x="0" y="20" width="120" height="76" fill="#f7f1e8"/><g class="e8o"><circle cx="58" cy="56" r="24" fill="#e9b26a" stroke="#c98b45" stroke-width="2"/><g fill="#6b3f2a"><ellipse cx="48" cy="48" rx="4" ry="3.4"/><ellipse cx="62" cy="58" rx="4" ry="3.4"/><ellipse cx="50" cy="66" rx="3.4" ry="3"/><ellipse cx="68" cy="68" rx="3" ry="2.6"/></g></g><g class="e8b" fill="#f7f1e8"><circle cx="78" cy="38" r="9"/><circle cx="70" cy="32" r="6"/><circle cx="84" cy="47" r="6"/></g><g fill="#c98b45"><circle class="e8c" cx="76" cy="44" r="1.6"/><circle class="e8c" style="animation-delay:.15s" cx="80" cy="48" r="1.3"/></g><path d="M20 90h80" stroke="#5a3a2e" stroke-opacity=".15" stroke-width="2"/>'},
 story:function(c){return '<rect x="0" y="20" width="120" height="76" fill="#3a2518"/><circle cx="60" cy="56" r="26" fill="#d99a4e" opacity=".55"/><circle cx="60" cy="56" r="17" fill="#e9b26a"/><g fill="#6b3f2a"><circle cx="54" cy="51" r="2.4"/><circle cx="64" cy="57" r="2.4"/><circle cx="56" cy="63" r="2"/></g><rect x="0" y="66" width="120" height="30" fill="#1d130e" opacity=".55"/><rect x="10" y="78" width="40" height="5" rx="2.5" fill="#fff"/><rect x="10" y="86" width="26" height="4" rx="2" fill="#fff" opacity=".6"/><rect x="84" y="80" width="26" height="10" rx="5" fill="#fffaf3"/><g transform="translate(0 0)"><rect x="8" y="24" width="32" height="2" rx="1" fill="#fff"/><rect x="44" y="24" width="32" height="2" rx="1" fill="#fff" opacity=".35"/><rect class="e8p" x="44" y="24" width="32" height="2" rx="1" fill="#fff"/><rect x="80" y="24" width="32" height="2" rx="1" fill="#fff" opacity=".35"/></g><text class="e8h" x="60" y="62" text-anchor="middle" font-size="22">❤️</text>'},
 crumble:function(c){return '<rect x="0" y="20" width="120" height="76" fill="#0f2a1e"/><circle cx="60" cy="56" r="32" fill="#c9a45c" opacity=".12"/><path class="e8g" d="M56 46h8M55 56h10M56 66h8" stroke="#5a2f14" stroke-width="4" stroke-linecap="round"/><g class="e8l"><path d="M60 32a24 24 0 0 0 0 48l3-8-4-8 4-8-4-8 4-8z" fill="#d9a35e"/><circle cx="50" cy="48" r="3" fill="#4a2a17"/><circle cx="52" cy="64" r="3" fill="#4a2a17"/></g><g class="e8r"><path d="M60 32a24 24 0 0 1 0 48l3-8-4-8 4-8-4-8 4-8z" fill="#c98b45"/><circle cx="70" cy="46" r="3" fill="#4a2a17"/><circle cx="68" cy="62" r="3" fill="#4a2a17"/></g><rect x="0" y="90" width="120" height="6" fill="#c9a45c"/>'},
 laser:function(c){return '<rect x="0" y="20" width="120" height="76" fill="#241911"/><rect x="30" y="26" width="60" height="64" rx="4" fill="#a1743f" stroke="#6e4528"/><g fill="#3a2213"><rect class="e7r" x="40" y="38" width="40" height="5" rx="2.5"/><rect class="e7r" style="animation-delay:.6s" x="46" y="50" width="28" height="5" rx="2.5"/><rect class="e7r" style="animation-delay:1.2s" x="42" y="62" width="36" height="5" rx="2.5"/></g><circle class="e7c" cx="60" cy="58" r="27" fill="none" stroke="#3a2213" stroke-width="1.2" stroke-dasharray="170" stroke-dashoffset="170"/><g class="e7d"><rect x="37" y="28" width="8" height="6" rx="1.5" fill="#2a2d33"/><rect x="40.5" y="34" width="1" height="5" fill="#ff3a1a"/><circle cx="41" cy="40" r="2.2" fill="#fff3c4"/><circle cx="41" cy="40" r="4" fill="#ff7a2a" opacity=".45"/></g>'},
 stamp:function(c){return '<rect x="0" y="20" width="120" height="76" fill="#f2b58f"/><path d="M84 20h36v34c-12 6-30 2-36-12z" fill="'+c[2]+'" opacity=".9"/><path d="M50 58c0-9 20-9 20 0" fill="none" stroke="#cdb89c" stroke-width="2.5"/><path d="M38 58h44l-3 34H41z" fill="#efe4d2"/><circle class="e7k" cx="60" cy="74" r="8" fill="none" stroke="'+c[2]+'" stroke-width="3"/><g class="e7s"><circle cx="60" cy="24" r="5" fill="#b07444"/><rect x="58" y="28" width="4" height="5" fill="#9a6038"/><rect x="47" y="33" width="26" height="9" rx="3" fill="'+c[2]+'"/><rect x="49" y="42" width="22" height="2.5" rx="1" fill="#3e2a57"/></g>'},
 factory:function(c){return '<rect x="0" y="20" width="120" height="76" fill="#1c2420"/><path d="M0 20h120M0 38h120M0 56h120M0 74h120M24 20v76M48 20v76M72 20v76M96 20v76" stroke="#fff" stroke-opacity=".05"/><rect x="0" y="86" width="120" height="6" fill="#3a4740"/><path d="M44 34h32l-4 50H48z" fill="'+c[2]+'"/><rect x="45.5" y="58" width="29" height="6" fill="#f1b33a"/><circle cx="60" cy="47" r="4" fill="#f1b33a"/><g class="e7l"><rect x="38" y="30" width="44" height="5" rx="2.5" fill="#56645b"/><rect x="40" y="31" width="40" height="3" rx="1.5" fill="#f1b33a" opacity=".8"/></g><g fill="#f1b33a"><rect class="e7p" x="94" y="80" width="14" height="4" rx="1.5"/><rect class="e7p" style="animation-delay:.5s" x="94" y="75" width="14" height="4" rx="1.5"/><rect class="e7p" style="animation-delay:1s" x="94" y="70" width="14" height="4" rx="1.5"/></g>'},
 capsule:function(c){return '<rect x="0" y="20" width="120" height="76" fill="#e4eaff"/><rect x="40" y="62" width="40" height="30" rx="6" fill="'+c[2]+'"/><circle cx="60" cy="44" r="21" fill="'+c[2]+'"/><circle cx="60" cy="44" r="19" fill="#eef2ff"/><g class="e7b"><circle cx="52" cy="50" r="5" fill="#ff6b8b"/><circle cx="64" cy="52" r="5" fill="#ffd23f"/><circle cx="58" cy="41" r="5" fill="#3ccf91"/><circle cx="68" cy="42" r="4.5" fill="#6f8cff"/></g><path d="M47 34a16 16 0 0 1 9-7" stroke="#fff" stroke-width="2.4" stroke-linecap="round" fill="none"/><g class="e7n"><circle cx="72" cy="78" r="5" fill="#fff"/><rect x="71" y="73.5" width="2" height="9" rx="1" fill="#ff6b8b"/></g><rect x="46" y="82" width="16" height="8" rx="2" fill="#0d1b4f"/><g class="e7z"><path d="M50 84a4 4 0 0 1 8 0z" fill="#ff6b8b"/><path d="M50 84a4 4 0 0 0 8 0z" fill="#fff"/></g>'},
 royal:function(c){return '<g fill="'+c[2]+'" opacity=".14"><path d="M14 92V52a18 18 0 0 1 36 0v40z"/><path d="M42 92V40a18 18 0 0 1 36 0v52z"/><path d="M70 92V52a18 18 0 0 1 36 0v40z"/></g>'+bottle(60,58,c[2],'#d4af37')+'<g fill="'+c[2]+'"><circle class="sm" cx="56" cy="44" r="3"/><circle class="sm" style="animation-delay:1s" cx="64" cy="42" r="2.4"/><circle class="sm" style="animation-delay:2s" cx="60" cy="40" r="2"/></g><rect x="38" y="86" width="44" height="7" rx="3.5" fill="'+c[2]+'"/>'},
 champ:function(c){return '<rect x="14" y="24" width="92" height="66" rx="10" fill="'+c[2]+'" opacity=".18"/><rect x="14" y="24" width="92" height="66" rx="10" fill="none" stroke="'+c[2]+'" stroke-width="1.2"/>'+bottle(40,48,c[2],c[1])+'<rect x="60" y="44" width="38" height="5" rx="2.5" fill="'+c[1]+'"/><rect x="60" y="54" width="28" height="4" rx="2" fill="'+c[1]+'" opacity=".5"/><rect class="a1" x="60" y="64" width="34" height="10" rx="5" fill="'+c[2]+'"/>'},
 oud:function(c){return '<rect x="18" y="22" width="84" height="70" rx="4" fill="none" stroke="'+c[2]+'" stroke-width="1.4"/><rect x="22" y="26" width="76" height="62" rx="2" fill="none" stroke="'+c[2]+'" stroke-opacity=".4"/><path d="M48 80h24l-4 8H52z" fill="'+c[2]+'"/><rect x="50" y="74" width="20" height="6" rx="2" fill="'+c[2]+'" opacity=".7"/><g fill="none" stroke="'+c[1]+'" stroke-width="1.6" stroke-linecap="round" opacity=".7"><path class="sm" d="M56 70c-6-8 6-12 0-20"/><path class="sm" style="animation-delay:1.2s" d="M64 70c6-8-6-12 0-20"/></g>'},
 rest:function(c){return '<rect x="0" y="20" width="120" height="76" fill="'+c[2]+'"/><circle cx="84" cy="58" r="20" fill="#fff"/><circle cx="84" cy="58" r="14" fill="'+c[1]+'" opacity=".85"/><g fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"><path class="sm" d="M80 34c-3-4 3-6 0-10"/><path class="sm" style="animation-delay:1s" d="M88 34c3-4-3-6 0-10"/></g><rect x="12" y="34" width="40" height="7" rx="3" fill="'+c[1]+'"/><rect x="12" y="48" width="34" height="4" rx="2" fill="'+c[1]+'" opacity=".6"/><rect x="12" y="57" width="30" height="4" rx="2" fill="'+c[1]+'" opacity=".6"/><rect x="12" y="66" width="36" height="4" rx="2" fill="'+c[1]+'" opacity=".6"/><rect class="a1" x="12" y="78" width="30" height="10" rx="5" fill="'+c[1]+'"/>'},
 ig:function(c){var g='';for(var r=0;r<2;r++)for(var k=0;k<3;k++)g+='<rect x="'+(12+k*33)+'" y="'+(58+r*20)+'" width="30" height="18" rx="2" fill="'+c[3]+'"/>';
   return '<g class="sp"><circle cx="60" cy="38" r="14" fill="none" stroke="url(#e166ig)" stroke-width="3" stroke-dasharray="10 4"/></g><circle cx="60" cy="38" r="10" fill="'+c[2]+'"/><rect x="44" y="18" width="0" height="0"/>'+g},
 candy:function(c){return '<circle cx="34" cy="50" r="16" fill="'+c[2]+'" opacity=".2"/><circle cx="90" cy="70" r="12" fill="#7c3aed" opacity=".18"/><circle cx="58" cy="58" r="20" fill="'+c[3]+'"/><text x="58" y="66" text-anchor="middle" font-size="22">🍩</text><g class="a1"><path d="M92 30l4 6 7-2-3 7 6 4-7 2 1 7-6-4-5 5-1-7-7-1 5-5-3-6 7 1z" fill="'+c[2]+'"/><text x="94" y="45" text-anchor="middle" font-size="7" fill="#fff" font-weight="700">%</text></g>'},
 bout:function(c){return '<rect x="20" y="40" width="80" height="54" fill="'+c[3]+'" stroke="'+c[2]+'" stroke-width="1.2"/><path d="M16 40h88l-6-12H22z" fill="'+c[2]+'"/><g fill="#fff" opacity=".6"><path d="M28 28h8l-2 12h-4z"/><path d="M48 28h8l-2 12h-4z"/><path d="M68 28h8l-2 12h-4z"/><path d="M88 28h6l-2 12h-4z"/></g><rect x="52" y="64" width="16" height="30" rx="8" fill="'+c[2]+'" opacity=".5"/><circle class="a1" cx="34" cy="64" r="7" fill="#c98b8f"/><circle class="a1" style="animation-delay:.8s" cx="86" cy="64" r="7" fill="#c98b8f"/>'},
 bake:function(c){return '<rect x="0" y="20" width="120" height="76" fill="'+c[1]+'"/><ellipse cx="54" cy="70" rx="28" ry="14" fill="#c98a4b"/><path d="M36 66q6-8 12 0M50 64q6-8 12 0M64 66q6-8 12 0" fill="none" stroke="#f3d3a3" stroke-width="2" stroke-linecap="round"/><g fill="none" stroke="#f6ecdf" stroke-width="1.6" stroke-linecap="round" opacity=".7"><path class="sm" d="M48 52c-3-4 3-6 0-10"/><path class="sm" style="animation-delay:1s" d="M58 50c3-4-3-6 0-10"/></g><rect x="84" y="30" width="24" height="26" rx="4" fill="#f6ecdf"/><rect x="84" y="30" width="24" height="8" rx="4" fill="'+c[2]+'"/><text x="96" y="52" text-anchor="middle" font-size="10" font-weight="700" fill="'+c[1]+'">15</text>'},
 photo:function(c){return '<g class="kb"><rect x="0" y="20" width="120" height="76" fill="#3a332b"/><circle cx="40" cy="52" r="18" fill="#e6cfa7" opacity=".55"/><circle cx="78" cy="62" r="24" fill="#c9a77e" opacity=".45"/><circle cx="62" cy="40" r="10" fill="#f3e9d8" opacity=".5"/></g><rect x="0" y="70" width="120" height="26" fill="url(#e166pf)"/><rect x="12" y="80" width="42" height="6" rx="3" fill="'+c[1]+'"/>'},
 print3d:function(c){return '<g stroke="'+c[2]+'" stroke-width="2" fill="none"><path d="M18 92V26h84v66"/><path d="M18 34h84"/></g><rect class="a2" x="40" y="30" width="14" height="10" rx="2" fill="#55d4ff"/><rect class="a2" x="46" y="40" width="2" height="6" fill="#55d4ff"/><g class="gr"><rect x="44" y="60" width="32" height="26" rx="16" fill="#55d4ff" opacity=".25"/><rect x="44" y="60" width="32" height="26" rx="16" fill="none" stroke="#55d4ff"/></g><rect x="30" y="86" width="60" height="4" rx="2" fill="'+c[2]+'"/>'},
 cmyk:function(c){var e='';for(var i=0;i<6;i++)e+='<ellipse cx="60" cy="58" rx="'+(6+i*5)+'" ry="'+(8+i*6)+'" fill="none" stroke-width="1.6" stroke-dasharray="'+(18+i*6)+' 4"/>';
   return '<g class="c1" stroke="#00a3e0" opacity=".8">'+e+'</g><g class="c2" stroke="#e5007d" opacity=".8">'+e+'</g><g class="c3" stroke="#f5c400" opacity=".8">'+e+'</g><g class="c4" stroke="'+c[1]+'" opacity=".85">'+e+'</g><g transform="translate(36 92)"><rect width="10" height="4" fill="#00a3e0"/><rect x="12" width="10" height="4" fill="#e5007d"/><rect x="24" width="10" height="4" fill="#f5c400"/><rect x="36" width="10" height="4" fill="'+c[1]+'"/></g>'},
 sticker:function(c){return '<rect x="22" y="26" width="58" height="64" rx="6" fill="#fffdf8" stroke="#eadfcc" transform="rotate(-4 51 58)"/><circle cx="46" cy="56" r="15" fill="none" stroke="#d8cbb7" stroke-dasharray="3 2"/><g class="pl"><circle cx="46" cy="56" r="15" fill="#fff" stroke="#fff" stroke-width="3"/><circle cx="46" cy="56" r="11" fill="'+c[2]+'"/></g><path d="M88 60h22l-3 32H91z" fill="#fff" stroke="#e2dacd"/><rect x="86" y="55" width="26" height="6" rx="3" fill="'+c[2]+'"/><rect x="91" y="70" width="16" height="9" fill="#c9a27a"/><text x="30" y="36" font-size="9">⭐</text><text x="60" y="86" font-size="8">🌸</text>'},
 moon:function(c){return '<g fill="#fff"><circle class="tw" cx="16" cy="28" r="1"/><circle class="tw" style="animation-delay:.6s" cx="100" cy="30" r="1.2"/><circle class="tw" style="animation-delay:1.2s" cx="28" cy="78" r="1"/><circle class="tw" style="animation-delay:.3s" cx="96" cy="84" r="1"/><circle class="tw" style="animation-delay:1.6s" cx="80" cy="24" r=".8"/></g><defs><mask id="e166mb"><rect width="120" height="160" fill="#fff"/><circle class="bc" cx="104" cy="50" r="26" fill="#000"/></mask></defs><g mask="url(#e166mb)"><circle cx="60" cy="56" r="27" fill="#d6a35a"/><g fill="#4a2e1c"><ellipse cx="50" cy="46" rx="4" ry="3"/><ellipse cx="66" cy="42" rx="3" ry="2.4"/><ellipse cx="70" cy="62" rx="4" ry="3"/><ellipse cx="52" cy="66" rx="3.4" ry="2.6"/></g></g><rect x="40" y="88" width="40" height="6" rx="3" fill="'+c[2]+'"/>'},
 calm:function(c){return '<rect x="0" y="20" width="120" height="76" fill="#f4e8d8"/><path d="M34 94V50a26 26 0 0 1 52 0v44z" fill="#c79f78" stroke="#fff" stroke-width="3"/><rect x="44" y="72" width="32" height="16" rx="3" fill="#7a4a2c" opacity=".55"/><g class="a3" fill="#5a4030" opacity=".18"><path d="M100 18c-12 8-16 20-10 30 8-8 12-18 10-30z"/><path d="M12 30c10 4 16 14 12 24-8-6-12-14-12-24z"/><path d="M88 50c10-2 18 4 20 12-10 2-18-4-20-12z"/></g><rect x="12" y="28" width="30" height="6" rx="3" fill="'+c[1]+'"/>'}};
function svg(k,c){var m=M[k];return '<svg viewBox="0 0 120 144" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="e166ig" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f58529"/><stop offset=".5" stop-color="#dd2a7b"/><stop offset="1" stop-color="#8134af"/></linearGradient><linearGradient id="e166pf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f0e0d" stop-opacity="0"/><stop offset="1" stop-color="#0f0e0d"/></linearGradient></defs>'+
  '<rect width="120" height="144" fill="'+c[0]+'"/>'+top(c)+(m?m(c):'<rect x="10" y="22" width="100" height="68" rx="10" fill="'+c[2]+'" opacity=".9"/><circle cx="60" cy="50" r="12" fill="'+c[1]+'" opacity=".9"/><rect class="a1" x="40" y="70" width="40" height="9" rx="4.5" fill="'+c[1]+'"/>')+tiles(c,98)+'</svg>'}
window.EMD166th=function(k,cols,classic){var c=P[k]||[cols[0],cols[2]||'#222',cols[1],'rgba(127,127,127,.18)'];
  if(classic)c=[cols[0],cols[2],cols[1],'rgba(127,127,127,.16)'];
  return '<span class="e166t">'+(LIVE[k]?'<span class="e166k">✨ تفاعلي</span>':'')+svg(classic?'':k,c)+'</span><em class="e166ok">✓</em>'};
})();

/* ===== EMD-V150-design ===== */

(function(){
'use strict';
var SK=[['night','ليل ذهبي',['#0b0b0c','#d4af37','#f3ead7']],['ivory','عاجي أتيليه',['#f6f2e9','#1d2b22','#e9e2d3']],['marble','رخام وردي',['#f3efec','#b76e79','#2a2326']],
 ['emerald','زمرد ملكي',['#06281f','#d6b25e','#f1ead6']],['navy','كحلي EMD',['#0a1430','#e9c98b','#eef1f8']],['plum','ليلك ومخمل',['#24101d','#f2b8c6','#f6e9ef']]];
var LX=[
 ['royal','أزرق ملكي','للعطور: أقواس زرقاء ونفحات العطر',['#0b1f6e','#1a47c9','#f2f5fc']],
 ['champ','شمبانيا ذهبية','للعطور: لوحة ذهبية و«مستوحى من»',['#f7efe6','#b8873f','#4a3424']],
 ['oud','عود وبخور','للعود والبخور: داكن بإطار ذهبي',['#15100c','#d4a94f','#3a2c20']],
 ['rest','مطعم','قائمة طعام وأوقات العمل',['#f2c230','#8b1a1a','#fbf3df']],
 ['ig','ملف إنستغرام','يناسب الجميع: مثل حسابك',['#fbf8f3','#a8834f','#1c1813']],
 ['candy','حلويات مرحة','للحلويات: ألوان وملصقات سعر',['#f06292','#d63c78','#fff6f8']],
 ['bout','بوتيك مرسوم','للعناية والتجميل والأعمال اليدوية',['#f6f0e4','#4f6450','#c98b8f']],
 ['bake','مخبز دافئ','للطلب المسبق ويوم الاستلام',['#3a2318','#8a4b22','#f6ecdf']],
 ['photo','صور أولًا','للباقات والأقمشة: صور كبيرة',['#0f0e0d','#e6cfa7','#2c2925']],
 ['print3d','طابعة ثلاثية الأبعاد','للطباعة والمجسّمات والتوزيعات: تطبع شعارك مع التمرير',['#060b20','#3b6bff','#55d4ff']],
 ['cmyk','بصمة الطباعة','للمطابع والهدايا: شعارك ينفصل إلى ألوان الطباعة ثم يُطبع',['#fbfcfe','#17306b','#e5007d']],
 ['sticker','عالم الملصقات','للملصقات والبطاقات والتوزيعات: شعارك ملصق يُقشَّر ويلتصق',['#fbf6ee','#4f5fd0','#e9709a']],
 ['moon','قمر الليل','للحلويات والكوكيز: قمر يُقضم مع التمرير تحت سماء ليلية',['#121a15','#e2b765','#22362a']],
 ['calm','هادئ','للمقاهي: ظلال أوراق وتحية واقتراحات حسب وقت اليوم',['#f7f0e6','#7a4a2c','#c79f78']],
 ['laser','نقش بالليزر','للديكور والهدايا الخشبية: الليزر يحفر اسمك ثم يقصّ القطعة',['#2b1d12','#a1743f','#c9a06a']],
 ['stamp','ختم الطباعة','للتصميم والطباعة: ختم يطبع شعارك على حقيبة وبطاقة وملصق',['#f2b58f','#7d5a9e','#ffffff']],
 ['factory','خط الإنتاج','للمصانع والتغليف: منتجك يُطبع ويتشكّل ويتكدّس أمامك',['#1c2420','#2f7d3b','#f1b33a']],
 ['capsule','آلة المفاجآت','للتوزيعات والهدايا: لفّ المقبض فتخرج كبسولة فيها منتجك',['#f3f6ff','#1f3fae','#ff6b8b']],
 ['bite','قضمة الكوكيز','للكوكيز والمخبوزات: الشعار يُقضم والمنتجات تتدحرج على رف التبريد',['#f7f1e8','#5a3a2e','#d99a4e']],
 ['story','قصص المنتجات','للحلويات والمنتجات المصوّرة: منتجاتك قصص تُسحب، وضغطتان تضيف إلى السلة',['#1d130e','#d99a4e','#fff6ec']],
 ['crumble','لحظة الكسر','للحلويات الفاخرة: قطعة تنكسر مع التمرير وتسيل حشوتها',['#183a2b','#c9a45c','#f4ecdf']],
 ['cbox','علبة الكوكيز','للكوكيز والمخبوزات: علبة تُفتح وتظهر القطع، وكل منتج علبة',['#f3efe4','#5d7356','#d9a35b']],
 ['jelly','حلوى مغلّفة','للحلويات والتوزيعات: حلوى تطفو، و«املأ كيسك» بلمسة، ومنتجات مغلّفة',['#f6f8ff','#4f6fd6','#f59ab8']],
 ['arch','رواق الأقواس','للمقاهي: تمشي بين الأقواس مع التمرير وتمرّ منتجاتك بجانبك',['#1a0f08','#c8915a','#e8c391']],
 ['awning','المظلة الإيطالية','للمقاهي والمطاعم: مظلة تنفتح وبتلات تتساقط، ولوح اليوم بالطباشير',['#6e1424','#f6ede0','#c8a165']],
 ['tray','صينية الضيافة','للحلويات والضيافة: صينية تعرض أشهى قطعك، وضغطة تضيف إلى السلة',['#0a1430','#c9a24a','#fbf6ea']],
 ['mihmas','دفتر المحمصة','للقهوة والمشروبات: قائمة منظَّمة تتسع لمئات الأصناف',['#0a1430','#b98a2f','#efe6d4']],
 ['vitrine','خزانة العطور','للعطور والبخور: منتجاتك في محاريب مضيئة على رفوف ذهبية',['#070d22','#d4af5e','#101a38']],
 ['rack','حامل الأزياء','للملابس والعباءات: قطعك معلّقة على حامل ذهبي بصور طولية',['#f8f5ee','#c9a24a','#0a1430']],
 ['wrap','الشريط الذهبي','للهدايا والتوزيعات: علبة تُفتح، وكل منتج بشريطه الذهبي',['#0a1430','#c9a24a','#f7f3ea']],
 ['luban','دخان اللبان','للبان وزيته: مبخرة يتصاعد منها الدخان، ومنتجات بشكل قطرة',['#0a1026','#d9a441','#141c3a']],
 ['dune','كثبان ظفار','للبان ومنتجاته: شروق وشجرة لبان، وبطاقات بختم الشمع',['#0a1430','#c9992f','#f4e8cf']],
 ['oven','فوهة الفرن','للمخبوزات: باب الفرن يُفتح وتخرج المنتجات ساخنة',['#0a1430','#d29c34','#faf1e2']],
 ['dough','عجين الصباح','للخبز والمعجنات: نشّابة تفرد العجين فيظهر اسمك',['#0a1430','#c9a24a','#f8f4ea']],
 ['bloom','تفتّح الباقة','للزهور والنباتات: زهرة تتفتح حول شعارك وبتلات تتساقط',['#0a1430','#e78ea3','#fbf5f1']],
 ['vase','مزهرية الزجاج','للزهور: سيقان تنمو من المزهرية، ومنتجات في أوانٍ زجاجية',['#0a1430','#7fae83','#f2f5f6']],
 ['conserv','البيت الزجاجي','للمشاتل والنباتات: باب زجاجي ينفتح على حديقة متفتحة',['#0a1430','#c9a24a','#eef1e7']],
 ['herbar','دفتر النبات','للزهور: رسم نباتي يخطّ نفسه، وبطاقات تتلوّن عند الظهور',['#f7f2e4','#0a1430','#a9c6a1']],
 ['copier','ماسح المستندات','للطباعة والتصوير: ضوء الماسح يكشف اسمك والمنتجات',['#0a1430','#c9a24a','#eef0f4']],
 ['fold','الورقة المطوية','للطباعة: ورقة تنفرد عن اسمك، وطائرة ورقية تحلّق',['#0a1430','#c9a24a','#f0f3fa']],
 ['ink','قطرة الحبر','للطباعة: قطرة تنتشر فيظهر اسمك، والعميل يترك أثر الحبر بلمسة',['#f7f6f1','#0a1430','#c9a24a']],
 ['typeset','صفّ الحروف','للطباعة: حروف معدنية تُصفّ، ثم مكبس يطبع اسمك',['#0a1430','#c9a24a','#f5f0e4']],
 ['stack','طبقات الساندويتش','للسندويشات: طبقات تتساقط، وساندويتش يكبر مع كل إضافة',['#0a1430','#e0a926','#6da547']],
 ['truck','عربة الطعام','للسندويشات والوجبات: عربة تصل وتفتح نافذتها، ومنتجات كتذاكر طلب',['#0a1430','#e0a926','#f5efe2']],
 ['grill','مكبس الشواء','للسندويشات المشوية: مكبس يهبط ويترك علامات الشواء',['#0d1022','#e49a2c','#171b33']],
 ['deli','ورق المطعم','للسندويشات: ورق يتفتح عن الساندويتش، وعود يثبت علمك',['#f8f3e7','#0a1430','#d6a12d']],
 ['balloon','سماء البالونات','لمنظمي الحفلات: بالونات ترفع اسمك، والعميل يفرقعها بلمسة',['#0a1430','#d7a93f','#e78ea3']],
 ['curtain','ستارة الحفل','لمنظمي الحفلات: ستارة مسرح تنفتح عن اسمك وبقعة ضوء تتبع الإصبع',['#0a1026','#d4af5e','#27304e']],
 ['invite','بطاقة الدعوة','للأفراح والمناسبات: ظرف يُفتح وتخرج منه بطاقة باسمك',['#0a1430','#c9a24a','#f6f1e7']],
 ['firework','الألعاب النارية','لمنظمي الحفلات: سماء تتفجر ألوانًا، والعميل يطلقها بلمسة',['#070b1d','#e1b94f','#10162e']],
 ['oilfest','ليالي مطرح','لمنظمي الحفلات: لوحة زيتية تُرسم أمام العميل ويرسم عليها',['#0c1228','#d9ae4d','#285494']],
 ['dawn','مطبخ الفجر','للبسكويت والمخبوزات: لوحة مائية لنافذة عند الفجر',['#fbf7ec','#0a1430','#f0b9a8']],
 ['mosaic','نجمة الفسيفساء','للبسكويت: قطع فسيفساء تتجمع نجمة، والعميل يذهّبها بلمسة',['#0a1430','#c9a24a','#27707a']],
 ['engrave','نقش الجبل','للبسكويت: نقش بخطوط الحبر لمدرجات الجبل الأخضر',['#f4edda','#0a1430','#bf9536']],
 ['cutout','قصاصات الورق','للبسكويت والتوزيعات: لوحة من قصاصات ملونة تتساقط',['#0a1430','#d8a932','#e15c48']],
 ['plan','مخطط البسكويت','للبسكويت: مخطط هندسي يُرسم ثم يتحول إلى قطعة حقيقية',['#17386f','#eaf3ff','#d59b4d']],
 ['falaj','فلج النخيل','للتمور: فلج ينقل الماء إلى النخيل، وبوابة يغيّرها العميل',['#0a1430','#5cc0e0','#2e6b47']],
 ['fort','حصن التمور','للتمور: حصن يُبنى حجرًا حجرًا، وأقسام المتجر غرف في مخطط',['#0a1430','#d4bd8d','#b9892a']],
 ['souq','السوق المسقوف','للتمور: يمشي العميل بين أقواس السوق ثلاثية الأبعاد',['#17110c','#e0ad4e','#a37e50']],
 ['gearworks','معصرة الدبس','للدبس والتمور: تروس بحسابات حقيقية تعصر وتملأ البرطمان',['#0a1430','#c9a24a','#8e9ab2']],
 ['ripen','موسم الرطب','للتمور: عذق ينضج أمام العميل، ويقطف التمرة بلمسة',['#f7c65b','#5b2f12','#3a8450']],
 ['majlis','المجلس','للتمور والضيافة: باب عُماني ينفتح على مجلس ودلة تصب القهوة',['#6d4524','#7c1f27','#e3c77d']],
 ['iftar','مائدة الإفطار','للتمور ومناسبات رمضان: الشمس تغرب والفوانيس تضيء',['#141633','#e4b755','#b1645d']],
 ['crew','طاقم المطبخ','للوجبات السريعة: طاهٍ وصرّاف وسائق، ومنتجات كبطاقات عمل',['#e7edf6','#0a1430','#e0a926']],
 ['marble','الرخام الأسود','للوجبات الراقية: رخام بعروق ذهبية، وعرض أنيق هادئ',['#0b0d16','#d3b16a','#f4efe3']],
 ['harbor','ميناء الوقت','للمطاعم: لوحة ميناء تتغير حسب وقت العميل الآن',['#32487a','#f59256','#d3a23a']],
 ['rainy','زجاج المطر','للمطاعم والمقاهي: يمسح العميل البخار ليرى المطعم',['#0d1427','#e6b85b','#b4c6de']],
 ['combo','وجبتك الكاملة','للوجبات السريعة: طبق وجانبي ومشروب بضغطة واحدة',['#0a1430','#b24f2d','#e4a81d']],
 ['fries','لعبة البطاطس','للوجبات السريعة: لعبة قصيرة تلتقط فيها البطاطس',['#0a1430','#efb821','#d94e32']],
 ['jukebox','صندوق الموسيقى','للمطاعم: أسطوانة وموسيقى تعمل بضغطة، والأضواء تتبعها',['#10142e','#e9b949','#b9344a']],
 ['premiere','العرض الأول','لتنظيم الحفلات: عدّ تنازلي سينمائي ولافتة مضيئة وسجادة حمراء',['#0b0e20','#e6b949','#a81f2e']],
 ['epic','ملحمة الصحراء','للولائم: مشهد ملحمي عريض وقافلة تعبر الشروق',['#0d0a08','#d9a650','#df6634']],
 ['series','موسم المسلسل','للباقات الكثيرة: واجهة مثل تطبيقات المسلسلات وترتيب الأكثر طلبًا',['#0a0d1c','#d9b35c','#f1f2f7']],
 ['silent','الفيلم الصامت','للحفلات الكلاسيكية: لوحات عنوان وأبيض وأسود يتحول إلى ألوان',['#141310','#e4dcc4','#3d392e']],
 ['shopfront','واجهة المحل','للمحلات: مصراع يرتفع ولافتة وواجهة ورفوف بأسعار معلقة',['#dfcdaa','#7c1f27','#0a1430']],
 ['constell','سماء النجوم','لتنظيم الحفلات والولائم: نجوم يصلها العميل بلمسة فوق خيمة ليلية',["#070b1f", "#e7c56d", "#25305e"]],
 ['henna','نقش الحناء','للأعراس: نقش حناء يخطّ نفسه على كف، وبطاقات بزخرفة الحناء',["#f7ead8", "#6d2f19", "#c9a24a"]],
 ['tiers','طوابق الكيكة','للكيك: طوابق تُبنى وكريمة تسيل، ورشّات بلمسة العميل',["#0a1430", "#f7d9de", "#c9a24a"]],
 ['patisserie','واجهة الحلواني','للكيك الراقي: واجهة زجاجية وعلب مخططة وملقط يختار القطع',["#f8f3ea", "#0a1430", "#c9a24a"]],
 ['wish','شمعة الأمنية','لكيك المناسبات: يطفئ العميل الشموع بلمسة فتظلم الصفحة ثم تنبعث الأضواء',["#0b0d20", "#ffb84d", "#d9627f"]],
 ['hive','خلية العسل','للكيك والعسل: منتجات في خلايا سداسية، ونحل يتبع الإصبع',["#f6b92d", "#0a1430", "#fff4c9"]],
 ['globe','كرة الثلج','لكيك الشتاء: كرة ثلج يهزها العميل بلمسة فيتطاير الثلج',["#0a1430", "#cfe7f4", "#c9a24a"]],
 ['lab','مختبر الحلويات','للوصفات المبتكرة: دوارق تتفاعل وفقاعات وبطاقات كتجارب علمية',["#0c1c2c", "#5fe0c2", "#d9b35c"]],
 ['tale','كتاب الحكايات','لكيك الأطفال: كتاب ثلاثي الأبعاد ينفتح وتنبثق منه القلعة',["#25366e", "#f6d36b", "#e78ea3"]],
 ['enso','دائرة الفرشاة','للكيك الفاخر: بساطة يابانية، دائرة بالحبر ومساحات واسعة',["#f6f3ec", "#0a1430", "#b7402f"]],
 ['hotel','الفندق الوردي','لكيك الهدايا: فندق متناظر كمشهد سينمائي، وعربة جبلية وعلب بأرقام غرف',["#f3c1c7", "#4a1f3a", "#c9a24a"]],
 ['loom','النول','للعبايات المنسوجة: نول ينسج القماش صفًا بعد صف أمام العميل',["#f3ecdf", "#0a1430", "#b08a3a"]],
 ['silk','موج الحرير','لعبايات السهرة: حرير يتموج ويستجيب للمس العميل',["#141019", "#c9a24a", "#7a2e45"]],
 ['runway','منصة العرض','للمجموعات: منصة عرض تقترب منها العارضة تحت أضواء متحركة',["#0d0d14", "#e8e2d4", "#c9a24a"]],
 ['fitting','غرفة القياس','للمقاسات: ستارة تنفتح عن مرآة، وشريط قياس يلتف حول كل بطاقة',["#ead9c6", "#3a2418", "#c9a24a"]],
 ['khareef','ضباب الخريف','من مناخ ظفار: ضباب يمسحه العميل بإصبعه فتظهر الجبال الخضراء',["#dfe9e4", "#1f4d3c", "#c9a24a"]],
 ['lattice','ظل المشربية','من البيوت القديمة: ظل نافذة يتحرك ويتغير لونه حسب ساعة العميل',["#f4e6cf", "#4a2c17", "#c98a2c"]],
 ['vogue','غلاف المجلة','لمتاجر الموضة: صفحات مجلة بعناوين ضخمة وصور بأحجام متبدلة',["#f7f5f0", "#111111", "#c4304c"]],
 ['dunes','كثبان الرمال','من رمال الشرقية: كثبان متحركة بطبقات ورمل تحمله الريح',["#f2c98d", "#7a3f1a", "#0a1430"]],
 ['zari','خيط الزري','من حرفة التطريز: إبرة تطرز الاسم بخيط ذهبي والبطاقات تُخاط حولها',["#0a1430", "#e7c56d", "#7a2e45"]],
 ['unbox','صندوق المفاجأة','يفتح العميل الصندوق بلمسة فتنطلق الأشرطة والقصاصات',["#7a2e45", "#f6d36b", "#fff4e6"]],
 ['post','مكتب البريد','طرود وطوابع: الختم يهبط على كل بطاقة مع رقم شحنة',["#e9dcc3", "#a2332c", "#26406f"]],
 ['origami','طيّ الورق','طائر ورق ينطوي أمام العميل وبطاقات مطوية الزوايا',["#f7f6f1", "#d65a4a", "#2d6f7c"]],
 ['airship','المنطاد','مناطيد تحمل الهدايا وترتفع مع التمرير فوق المدينة',["#a9dcea", "#e8743b", "#fff4d8"]],
 ['musicbox','علبة الموسيقى','راقصة تدور فوق علبة، وكل لمسة تعزف نغمة حقيقية',["#2c1538", "#e7c56d", "#e99ab0"]],
 ['memories','حبل الذكريات','صور فورية معلقة بمشابك تتأرجح مع اللمس كذكريات البيت',["#f5efe3", "#2b2b33", "#c94a5c"]],
 ['umbrella','شارع المظلات','مظلات ملونة تسبح فوق شارع حقيقي الطابع، وظلال متحركة تتبعها',["#fbf3e5", "#d94f5c", "#2c8ca0"]],
 ['train','قطار الهدايا','قطار لعبة يعبر الشاشة بعربات هدايا، وصافرته تعمل باللمس',["#cfeadf", "#1f3f66", "#e04d4d"]],
 ['skylantern','فوانيس السماء','كل لمسة تطلق فانوسًا إلى السماء الليلية يحمل أمنية',["#0c1433", "#ffb65c", "#f6d36b"]],
 ['comic','القصة المصورة','لوحات قصة مصورة ونقاط طباعة وفقاعات كلام تقفز',["#ffe24a", "#111111", "#e0283c"]],
 ['vending','آلة البيع','آلة بيع مضيئة: رموز للخانات وأكياس تسقط عند اللمس',["#1a2a5e", "#ff5d3b", "#ffe27a"]],
 ['popcorn','فشار السينما','من صالات السينما: شريط فيلم وفشار يقفز مع كل لمسة',["#7c1020", "#ffd24a", "#fff4d8"]],
 ['heat','مقياس الحرارة','للمنتجات الحارة: مقياس يرتفع ولهب، ومستوى حرارة في كل بطاقة',["#1b0a06", "#ff6a1f", "#ffd24a"]],
 ['grandma','مطبخ الجدة','من البيوت: قدر يغلي وغطاء يهتز وبطاقات وصفات مكتوبة',["#f7ecd8", "#2c6b5c", "#c9463f"]],
 ['scale','ميزان السوق','ميزان قديم تميل كفته فعلًا مع كل منتج يضيفه العميل',["#f1e4c8", "#4a3219", "#b8862f"]],
 ['cornfield','حقل الذرة','من الطبيعة: سنابل تتمايل مع إصبع العميل وطيور تعبر الحقل',["#fbe6a6", "#3f7a3a", "#e0872e"]],
 ['foodvan','شاحنة الطعام','من الشارع: شاحنة تصل وتفتح نافذتها وتبدأ البيع',["#ffd34d", "#d73f2e", "#1c3b5a"]],
 ['wonderworks','المصنع العجيب','خيال الأفلام: تروس وسير يحمل الأكياس وذراع تختمها',["#2a1b4a", "#ff7ab6", "#7cf0d0"]],
 ['fishboat','قارب الصياد','من ساحل عمان: قارب يتمايل فوق موج بطبقات، ونوارس',["#bfe7ef", "#0d4c6c", "#f06a3b"]],
 ['camp','ليلة المخيم','نار مخيم حية وشرر يتطاير مع كل لمسة ونجوم',["#101a2e", "#ff9a2c", "#d9c29b"]],
 ['dukkan','دكان الحارة','دكان قديم: مظلة وأرفف ولمبة تتأرجح وجرس باب يرن باللمس',["#f3e2bf", "#5b3216", "#2f6f62"]],
 ['spicesouk','سوق البهارات','من مطرح: أهرامات بهارات ينفجر منها غبار ملون عند اللمس',["#2a1109", "#e0872e", "#c4304c"]],
 ['orbit','وجبات المدار','خيال علمي: أكياس تطفو حول كوكب ورائد يتبع إصبع العميل',["#060a1e", "#7fd0ff", "#ffb65c"]],
 ['backstage','كواليس الأزياء','غرفة ملابس مسرحية: مرآة تضيء لمباتها واحدة تلو الأخرى',["#1b1216", "#ffd98a", "#b5324b"]],
 ['rail','سكة المغسلة','من محلات التنظيف: ملابس تدور على سكة بأرقام وتتوقف باللمس',["#e6f0f2", "#16485a", "#e8743b"]],
 ['cloak','قسيمة الأمانات','من غرف الأمانات: قسائم مرقمة تنفصل عند الضغط وتتعلق على شماعات',["#f2e6cf", "#2b1c3f", "#b5324b"]],
 ['redcarpet','السجادة الحمراء','سجادة تنفرد مع التمرير ووميض كاميرات عند كل إضافة',["#120a0d", "#b5142c", "#e7c56d"]],
 ['mandoos','المندوس','من البيوت العمانية: مندوس بمسامير نحاس ينفتح عن أقمشة مطوية',["#efe0c6", "#5a2c14", "#c9973c"]],
 ['almanac','تقويم المناسبة','تقويم حائط ورقي يتمزق ليكشف تاريخ اليوم الحقيقي',["#fbf6ea", "#23324f", "#c4304c"]],
 ['ballroom','قاعة الثريا','قاعة قصر بثريا كريستال تتأرجح وأضواء تتراقص على الأرض',["#241433", "#f3d58a", "#e9b6cf"]],
 ['paperdoll','دمية الورق','لعبة تلبيس: يبدل العميل لون الفستان وطرازه على دمية ورقية',["#fdeef0", "#3a2a55", "#e6a13a"]],
 ['fireflies','حديقة اليراعات','حفل حديقة ليلي: يراعات تتجمع حول إصبع العميل وأضواء معلقة',["#07191a", "#c8f06a", "#e9b6cf"]],
 ['photobooth','كشك الصور','شريط صور بأربع لقطات ووميض عد تنازلي عند اللمس',["#f4ecdc", "#111111", "#d6304a"]],
 ['boutique','بوتيك الليل','واجهة متجر حقيقية الطابع ليلًا: عارضات تضيء ولافتة نيون وانعكاس على الشارع',["#0d1020", "#ff5c9a", "#f7e7c1"]],
 ['midnight','منتصف الليل','ساعة قصر بالوقت الحقيقي وحذاء زجاجي وعربة تتلألأ',["#121a44", "#bfe3ff", "#e7c56d"]],
 ['wardrobe','دولاب البيت','دولاب خشبي ينفتح باللمس عن فساتين معلقة تتمايل',["#e7d3b4", "#4c2d14", "#b5324b"]],
 ['ripple','قطرة العطر','سطح ماء حي: كل لمسة تصنع تموجًا كقطرة عطر',["#071a2e", "#8fd8e8", "#e7c56d"]],
 ['pyramid','هرم العطر','هرم بثلاث طبقات للمقدمة والقلب والقاعدة يضيء ويشرح العطر',["#f7f1e5", "#2e2340", "#c9973c"]],
 ['roseterrace','مدرجات الورد','من الجبل الأخضر: مدرجات ورد وبتلات تتساقط وقنينة تقطر',["#fbe7e6", "#a02a4d", "#4a7a4a"]],
 ['smoke','دخان القارورة','دخان حي يتصاعد من قارورة وينحني مع حركة الإصبع',["#0b0a10", "#d9c8a6", "#7a2e45"]],
 ['prism','منشور الضوء','قارورة كريستال يمر بها شعاع فيتحلل إلى ألوان تتبع الإصبع',["#0b0d18", "#ffffff", "#7fd0ff"]],
 ['apothecary','خزانة العطار','خزانة أدراج خشبية بملصقات، تنفتح باللمس وتكشف قوارير',["#efe2c8", "#4a2d16", "#2f6f62"]],
 ['letter','الرسالة المعطرة','ظرف بختم شمع ينكسر بلمسة فتخرج رسالة باسم المتجر',["#f5ebdd", "#7a1f35", "#b58a3a"]],
 ['pearl','غواص اللؤلؤ','من تراث الغوص: محارة تنفتح في قاع البحر عن لؤلؤة وفقاعات',["#06253a", "#8ff0e0", "#f5ead8"]],
 ['peacock','ذيل الطاووس','ذيل طاووس ينبسط ريشة ريشة ويلمع مع الحركة',["#07222b", "#26a69a", "#e7c56d"]],
 ['jasmine','ياسمين الغروب','أغصان ياسمين تتفتح زهرة زهرة، واللمس يفتح زهورًا جديدة',["#2a2748", "#fff8ec", "#f5b86b"]],
 ['passport','جواز العطور','جواز سفر تُختم صفحاته بمدن، وطائرة ترسم مسارها',["#10394a", "#e7c56d", "#c4304c"]],
 ['khatt','الخط العربي','قلم يكشف الاسم بالحبر ونقاط تتساقط، بوقار خطاط',["#f6efe0", "#14121b", "#a0752f"]],
 ['bauhaus','الملصق الهندسي','ملصق حديث: دوائر ومثلثات ضخمة تتحرك بإيقاع وتتفاعل مع التمرير',["#f2ead8", "#14213d", "#e4572e"]],
 ['moonphase','طور القمر','قمر يعرض طوره الحقيقي الليلة فوق بحر يعكس ضوءه',["#060b1f", "#f5ecd2", "#8aa6d8"]],
 ['salon','كرسي الصالون','صالون حقيقي الطابع: عمود دوّار وكرسي ومرآة بأضواء ومجفف ينفخ',["#f6ece4", "#26304f", "#d8596f"]],
 ['lipstick','أحمر الشفاه','قلم أحمر شفاه ضخم يصعد مع التمرير، وأثر قبلة عند كل إضافة',["#2a0a14", "#d0163c", "#e7c56d"]],
 ['herbarium','كراسة الأعشاب','أوراق نبات مضغوطة مرسومة بقلم عالم، للعناية الطبيعية',["#f3efdf", "#2f5a3b", "#a06a2c"]],
 ['serum','قطّارة السيروم','قطّارة تسقط منها قطرات ذهبية لزجة في حوض يتموج',["#f3ece0", "#b8862f", "#2d3c47"]],
 ['hair','موج الشعر','خصلات شعر حية تتموج وتنفرج حول إصبع العميل',["#1c120f", "#a65b2e", "#f0d4b4"]],
 ['palette','لوحة الظلال','لوحة ظلال تنفتح، واختيار لون يغير خلفية الواجهة فورًا',["#f4eae6", "#2a1a22", "#c47a6a"]],
 ['foam','حمام الرغوة','فقاعات صابون تطفو وتنفجر باللمس على سطح حمام',["#dff4f6", "#2d7f94", "#f6a6b8"]],
 ['hammam','الحمام المغربي','زليج وأقواس وبخار يتصاعد بهدوء، من طقوس الحمام',["#134a4d", "#e9d8b4", "#c9673c"]],
 ['beforeafter','قبل وبعد','شريط يسحبه العميل ليقارن شعرًا جافًا بشعر ناعم',["#f7f1ea", "#1f2b3a", "#d9806a"]],
 ['scissors','مقص الحلاق','مقص ضخم يقص شريطًا مع التمرير فتنكشف الواجهة',["#111318", "#e4e7ec", "#e7c56d"]],
 ['skinlayers','طبقات البشرة','رسم مقطع طبقات بأسلوب العيادات، مع قطرة تنساب ببطء',["#fbf4f1", "#a35c6b", "#2e6f8a"]],
 ['kohl','المكحلة','مكحلة تراثية وعين تُرسم بالكحل ثم ترمش وتتبع الإصبع',["#efe4d2", "#1a1410", "#b98a3a"]],
 ['aloe','ورق الصبار','نبتة صبار تنمو ويسيل منها جل شفاف عند اللمس',["#edf7e8", "#3f8a54", "#c9e87a"]],
 ['stones','حجارة السبا','حجارة ناعمة تتراص فوق بعضها وتموج ماء عند سقوطها',["#e8e4da", "#3e4b45", "#a89a84"]],
 ['ringlight','حلقة الضوء','حلقة إضاءة استوديو تكبر شدتها بشريط يحركه العميل',["#17151c", "#fff2d6", "#ff7aa2"]],
 ['sewing','ماكينة الخياطة','ماكينة قديمة تتحرك إبرتها بسرعة وتخيط غرزًا مع التمرير',["#f3e6d6", "#1e1b22", "#c9973c"]],
 ['pattern','الباترون','ورقة باترون يُرسم عليها الفستان بالطباشير وعلى البطاقات قياسات',["#dce7ee", "#123a57", "#e4572e"]],
 ['buttons','علبة الأزرار','أزرار ملونة تتساقط وتتراكم وتقفز عند اللمس',["#f8ecd6", "#7a2e45", "#2f6f62"]],
 ['dressform','المانيكان','مانيكان ينسدل عليه القماش طبقة بعد طبقة ويتغير لونه',["#ece1d6", "#3a2a22", "#a3435b"]],
 ['bolts','لفّات القماش','رف محل أقمشة: كل لفة تنفرد باللمس عبر الشاشة',["#efe4cf", "#4b2f1a", "#b5324b"]],
 ['pincushion','وسادة الدبابيس','وسادة طماطم حمراء، كل لمسة تغرس فيها دبوسًا ملونًا',["#fbeee3", "#c4304c", "#2f6f62"]],
 ['sizecard','بطاقة المقاسات','بطاقة تكتب فيها العميلة مقاساتها وتنسخها لترسلها مع طلبها',["#fdf5ea", "#3e2c5e", "#d9627f"]],
 ['bridal','أتيليه العروس','فستان عروس بطرحة تتمايل وبتلات تتساقط، بهدوء فاخر',["#fbf7f2", "#6a5a4a", "#d9b98a"]],
 ['crossstitch','الغرزة المتصالبة','تطريز يملأ قماش الإطار غرزة غرزة حتى تكتمل الزخرفة',["#f3eddd", "#a0263f", "#1f5b52"]],
 ['tailorstreet','شارع الخياطين','زقاق محلات خياطة بلافتات تتأرجح ومظلات وخياط يعمل',["#f5d9a8", "#573216", "#2c6b7c"]],
 ['cuttable','طاولة القص','طاولة خشبية وقماش ومقص يتبع خط الطباشير ويقص الشكل',["#d7c0a0", "#2d2520", "#b5324b"]],
 ['paperchain','سلسلة الصغيرات','لتفصيل الأطفال: سلسلة بنات ورقية تنفرد ولكل واحدة فستانها',["#fff3df", "#d9627f", "#3fa6a0"]],
 ['generations','أجيال الأناقة','خط زمني لأزياء الأجيال، يتبدل بين الجدة والأم والابنة',["#efe6d7", "#2f2a3d", "#b58a3a"]],
 ['nightlamp','مصباح الليل','غرفة خياطة في الليل: اللمس يشعل المصباح فيظهر القماش بألوانه',["#100f18", "#ffd98a", "#a3435b"]],
 ['spools','بكرات الخيوط','بكرات تدور وخيوطها تنسج شبكة ملونة عبر الشاشة',["#f6eee0", "#33283e", "#e8743b"]],
 ['mabkhara','مبخرة ظفار','مبخرة طين ملونة، جمرها يتوهج ودخانها ينحني مع الإصبع',["#1a1312", "#e8743b", "#e9d8b4"]],
 ['frankincense','شجرة اللبان','من وادي دوكة: شجرة لبان، كل لمسة على جذعها تُخرج دمعة لبان',["#f2e5c9", "#6b4a28", "#e0b96a"]],
 ['incenseroute','طريق البخور','خريطة قديمة ترسم طريق القوافل من ظفار، وجمل يسير عليها',["#ecd9b0", "#5a3a1a", "#a0263f"]],
 ['hafah','سوق الحافة','دكاكين سوق شعبي بأكياس وأوان وفوانيس معلقة تتأرجح',["#2a1a14", "#ffc56b", "#c4304c"]],
 ['ember','الجمرة','جمرات تتنفس وتتوهج، والنفخ باللمس يزيدها اشتعالًا',["#090606", "#ff5a1f", "#ffd24a"]],
 ['mortar','هاون البخور','هاون يطحن باللمس فتتراكم البودرة ويتطاير غبارها',["#ece0c9", "#4e3a26", "#b58a3a"]],
 ['majlis2','طواف المبخرة','من عادة الضيافة: مبخرة تطوف بين الضيوف ويتبعها الدخان',["#2b1a2a", "#e7c56d", "#b5324b"]],
 ['blend','خلطتي','تبني العميلة خلطتها طبقات داخل برطمان ثم تنسخ وصفتها',["#f3eadb", "#33261b", "#a0523a"]],
 ['qamariya','قمرية الجص','نافذة جص بزجاج ملون يسقط ضوؤها في دخان الغرفة',["#231c1a", "#f0e2c4", "#d8574a"]],
 ['excavate','تنقيب سمهرم','بفرشاة الأثري يمسح العميل الرمل ليكشف قطعة أثرية واسم المتجر',["#d8b57a", "#4a2e14", "#8c3b2e"]],
 ['coil','لفّة البخور','لفة بخور تحترق ببطء مع التمرير ورمادها يتساقط',["#181615", "#ff7a2c", "#c9bfae"]],
 ['oudlog','قطعة العود','مقطع خشب عود تنمو حلقاته، واللمس يكشف عروق الراتنج',["#2a1a10", "#d9a441", "#6e3f1b"]],
 ['filigree','الفضة العمانية','زخرفة فضية تُرسم خطًا خطًا ويلمع عليها الضوء مع الإصبع',["#0f1820", "#e6e9ee", "#b0793a"]],
 ['jars','مخزن الجرار','قبو جرار فخار، كل غطاء يُرفع باللمس فتخرج رائحته دخانًا',["#1f1712", "#c58a54", "#e7c56d"]],
 ['smartburner','المبخرة الحديثة','تصميم بسيط حديث: قرص حرارة يتحكم بكثافة البخار',["#f1f1ee", "#1a1a1a", "#e4572e"]],
 ['pcb','اللوحة الأم','لوحة دوائر مذهبة، ولمسة منك تُطلق تيارًا يسري نحو اسم المتجر',["#06231c", "#e8b84a", "#0d2f27"]],
 ['scope','راسم الإشارة','شاشة قياس حية: يغيّر العميل التردد والسعة، وكل إضافة للسلة تُحدث نبضة',["#0b0f0d", "#5dff9b", "#171d1a"]],
 ['battery','البطارية','بطارية تُشحن خلية خلية، وبالضغط المستمر يتسارع الشحن',["#f2f5ee", "#12b76a", "#0f1712"]],
 ['teardown','الجهاز المفكك','هاتف تتفرق طبقاته في الفضاء مع التمرير، وكل طبقة تعرّف بنفسها',["#f4f5f7", "#ff5a1f", "#14181f"]],
 ['crt','التلفاز القديم','تلفاز كلاسيكي بمقبض حقيقي: أدره لتنتقل بين القنوات وسط التشويش',["#2a1c12", "#e8732c", "#f3e3c4"]],
 ['arcade','صالة الألعاب','جهاز ألعاب قديم يعمل حقًا: يلتقط العميل العملات بتحريك إصبعه',["#160a2c", "#ffd23f", "#ff3d81"]],
 ['lens','عدسة الكاميرا','فتحة عدسة تنفتح شفراتها عن اسم المتجر، ويتحكم بها العميل',["#0c0d10", "#d8362a", "#e9e7e1"]],
 ['smarthome','البيت الذكي','بيت في الليل: يلمس العميل كل غرفة فيضيئها، وبإضاءتها كلها يسطع البيت',["#101a38", "#ffc857", "#eef2fa"]],
 ['washer','الغسالة','غسالة أمامية تدور بالماء والفقاعات، ويغيّر العميل سرعتها بالمقبض',["#eaf3f8", "#0a84c6", "#10242f"]],
 ['elevator','مصعد الأقسام','مركز تسوق بمصعد حقيقي: كل زر طابق يفتح قسمًا من منتجات المتجر',["#1b1e24", "#c9a24a", "#f1eee6"]]];
var FONTS=[['','الافتراضي'],['ruqaa','رقعة'],['messiri','المسيري'],['kufi','كوفي'],['amiri','أميري'],['tajawal','تجوال'],['baloo','دائري'],['lalezar','عريض']];
var SHAPES=[['','الافتراضي'],['arch','مقوّس'],['round','حواف دائرية'],['square','مربع']];
var COLS=[['','الافتراضي'],['2','عمودان'],['3','ثلاثة أعمدة']];
var SECS=[['cats','الأقسام'],['info','معلومات المتجر'],['reviews','آراء الزبائن'],['feats','المزايا'],['seal','ختم السعر']];
var ACC=['#1a47c9','#b8873f','#d4a94f','#8b1a1a','#d63c78','#4f6450','#0f766e','#7c3aed','#111827'];
var PERF={royal:1,champ:1,oud:1};
function St(){return window.EMDStoreV411&&window.EMDStoreV411.state()}
function esc(t){return String(t==null?'':t).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function get(o,p){p=p.split('.');for(var i=0;i<p.length;i++){if(o==null)return '';o=o[p[i]]}return o==null?'':o}
function set(o,p,v){p=p.split('.');for(var i=0;i<p.length-1;i++){var k=p[i];if(o[k]==null||typeof o[k]!=='object')o[k]=/^\d+$/.test(p[i+1])?[]:{};o=o[k]}o[p[p.length-1]]=v}
function inp(p,l,ph,max,type){var S=St();return '<label class="f2">'+l+'<input data-e150="'+p+'" type="'+(type||'text')+'" maxlength="'+(max||80)+'" placeholder="'+esc(ph||'')+'" value="'+esc(get(S,p))+'"></label>'}
function area(p,l,max){return '<label class="f2">'+l+'<textarea data-e150="'+p+'" maxlength="'+(max||300)+'">'+esc(get(St(),p))+'</textarea></label>'}
function chips(p,L){var v=String(get(St(),p)||'');return '<div class="e150-ch">'+L.map(function(o){return '<button type="button" data-e150c="'+p+'" data-v="'+o[0]+'" aria-pressed="'+(v===o[0])+'">'+o[1]+'</button>'}).join('')+'</div>'}
function lvl(p,l){var v=+get(St(),p)||0;return '<label class="f2">'+l+'<select data-e150="'+p+'">'+['—','ضعيف','مقبول','جيد','قوي','قوي جدًا'].map(function(t,i){return '<option value="'+i+'"'+(i===v?' selected':'')+'>'+t+'</option>'}).join('')+'</select></label>'}
/* أسماء المنتجات المفعّلة في المتجر، مجمّعة بالاسم قبل « - » */
function cats(){var S=St(),d={};try{d=EMDH.db()||JSON.parse(JSON.stringify(EMDH.db())||'{}')}catch(e){}
  var L=Array.isArray(d.products)?d.products:[],out=[],seen={};
  L.forEach(function(p,i){var k=String(p.id||p.sku||p.name||('p'+i)),o=S.prod&&S.prod[k];if(!o||!o.on)return;var c=String(p.category||p.cat||'').trim();if(c&&!seen[c]){seen[c]=1;out.push(c)}});
  var O=Array.isArray(S.cato)?S.cato:[];out.sort(function(a,b){var x=O.indexOf(a),y=O.indexOf(b);return (x<0?999:x)-(y<0?999:y)});return out}
function ck(c){return String(c).replace(/\./g,'·')}
function catName(c){var S=St();c=String(c||'').trim();if(!c)return '';var n=S&&S.catn&&S.catn[ck(c)];return String(n||'').trim()||c}
function catsBox(){var C=cats();if(!C.length)return '';
  return '<details'+(window.__e154o?' open':'')+' class="e154"><summary>أسماء الأصناف وترتيبها في المتجر</summary><p class="hint">غيّر اسم الصنف كما يظهر للزبون، ورتّبه بالأسهم. لا يتغير اسم الصنف في التطبيق.</p>'+
    C.map(function(c,i){return '<div class="e154r"><div class="e154n"><input data-e150="catn.'+esc(ck(c))+'" maxlength="30" placeholder="'+esc(c)+'" value="'+esc(get(St(),'catn.'+ck(c)))+'" aria-label="اسم '+esc(c)+' في المتجر"><small>في التطبيق: '+esc(c)+'</small></div>'+
     '<button type="button" data-e154="'+i+':-1"'+(i?'':' disabled')+' aria-label="أعلى">↑</button><button type="button" data-e154="'+i+':1"'+(i<C.length-1?'':' disabled')+' aria-label="أسفل">↓</button></div>'}).join('')+'</details>'}
function bases(){var S=St(),d={};try{d=EMDH.db()||JSON.parse(JSON.stringify(EMDH.db())||'{}')}catch(e){}
  var L=Array.isArray(d.products)?d.products:[],out=[],seen={};
  L.forEach(function(p,i){var k=String(p.id||p.sku||p.name||('p'+i)),o=S.prod&&S.prod[k];if(!o||!o.on)return;var n=String(p.name||p.productName||'').trim();var j=n.indexOf(' - ');var b=j>0?n.slice(0,j).trim():n;if(b&&!seen[b]){seen[b]=1;out.push(b)}});return out}
function list(key,fields,max,addLabel){var S=St(),A=Array.isArray(S[key])?S[key]:[];
  return A.map(function(x,i){return '<div class="row">'+fields.map(function(f){return f[2]==='area'?area(key+'.'+i+'.'+f[0],f[1],400):inp(key+'.'+i+'.'+f[0],f[1],f[3]||'',f[4]||80)}).join('')+'<button type="button" class="del" data-e150del="'+key+'.'+i+'">حذف</button></div>'}).join('')+
   (A.length<max?'<button type="button" class="add" data-e150add="'+key+'" style="margin-top:8px">+ '+addLabel+'</button>':'')}
function tab(){var S=St(),lx=S.layout||'',h='<div class="e150">';
  h+='<h4>شكل المتجر</h4><p class="hint">اختر التصميم الأقرب لنشاطك. يتغير شكل المتجر كله، وتبقى منتجاتك وطلباتك كما هي.</p><div class="e150-lx">'+
    SK.map(function(x){return '<button type="button" data-e150k="'+x[0]+'" aria-pressed="'+(!lx&&(S.skin||'night')===x[0])+'">'+EMD166th(x[0],x[2],1)+'<b>'+x[1]+'</b><small>كلاسيكي: يناسب كل الأنشطة</small></button>'}).join('')+
    LX.map(function(x){return '<button type="button" data-e150c="layout" data-v="'+x[0]+'" aria-pressed="'+(lx===x[0])+'">'+EMD166th(x[0],x[3])+'<b>'+x[1]+'</b><small>'+x[2]+'</small></button>'}).join('')+'</div>';
  h+='<div class="pvrow"><button type="button" class="emd414-pvb" data-a="pv"><span class="ic">👁️</span><span class="tx"><b>معاينة المتجر</b><small>شاهد التصميم كما يراه الزبون قبل النشر</small></span><span class="ar" aria-hidden="true">‹</span></button></div>';
  h+=catsBox();
  {
   h+='<h4>اللون الرئيسي</h4><div class="e150-sw"><button type="button" data-e150c="accent" data-v="" aria-pressed="'+(!S.accent)+'" title="لون التصميم الأصلي" style="background:conic-gradient(#e2e8f0 0 25%,#fff 0 50%,#e2e8f0 0 75%,#fff 0)"></button>'+ACC.map(function(c){return '<button type="button" data-e150c="accent" data-v="'+c+'" aria-pressed="'+(S.accent===c)+'" style="background:'+c+'" aria-label="'+c+'"></button>'}).join('')+'</div>';
   h+='<h4>خط العناوين</h4>'+chips('font',FONTS)+'<h4>شكل صور المنتجات</h4>'+chips('shape',SHAPES)+'<h4>عدد الأعمدة</h4>'+chips('cols',COLS);
   var hide=Array.isArray(S.hide)?S.hide:[];
   h+='<h4>الأقسام الظاهرة</h4><div class="e150-ch">'+SECS.filter(function(x){return lx||x[0]==='info'||x[0]==='reviews'||x[0]==='feats'}).map(function(x){var on=hide.indexOf(x[0])<0;return '<button type="button" data-e150h="'+x[0]+'" aria-pressed="'+on+'">'+(on?'✓ ':'')+x[1]+'</button>'}).join('')+'</div>';
   h+='<details'+(S.notice||S.lead||S.cover?' open':'')+'><summary>'+(lx?'تنويه وطلب مسبق وغلاف':'تنويه وطلب مسبق')+'</summary>'+
     inp('notice','شريط تنويه أعلى المتجر','مثال: يُجهَّز طلبك خلال 2–3 أيام',90)+
     '<div class="row">'+inp('lead','الطلب المسبق (بالساعات، 0 = بلا)','48',3,'number')+'</div>'+
     '<p class="hint" style="margin-top:6px">عند تحديد ساعات، يختار الزبون يوم الاستلام، ويظهر في ملاحظة الطلب.</p>'+
     (lx?'<label class="f2" style="margin-top:6px">صورة الغلاف (تظهر في «بوتيك مرسوم»)</label><div class="cv">'+(S.cover?'<img alt="" src="'+esc(S.cover)+'"><button type="button" data-e150x="cover">إزالة</button>':'')+'<button type="button" data-e150f="cover">'+(S.cover?'تغيير الصورة':'رفع صورة')+'</button></div>':'')+'</details>';
   if(lx==='champ'||lx==='royal'||!lx)h+='<details'+(lx||(S.feats||[]).length?' open':'')+'><summary>المزايا'+(lx==='champ'?' وختم السعر':'')+'</summary>'+
     (lx==='champ'?'<div class="row">'+inp('seal.top','أعلى الختم','50 مل',12)+inp('seal.big','الرقم الكبير','2',6)+inp('seal.bot','أسفل الختم','ريال فقط',14)+'</div>'+inp('l1','العنوان الكبير','أحمد المغربي',30)+inp('eye','سطر فوق العنوان','العطور المستوحاة من',40):'')+
     list('feats',[['i','رمز','','💧',4],['t','الميزة','','تركيز عالٍ',24]],3,'إضافة ميزة')+'</details>';
   if(lx==='rest')h+='<details open><summary>أوقات العمل والموقع</summary><div class="row">'+inp('hours.from','يفتح الساعة','11:00',5)+inp('hours.to','يغلق الساعة','23:30',5)+'</div>'+inp('map','رابط الموقع على الخريطة','https://maps.app.goo.gl/…',300)+'</details>';
   h+='<details'+((S.info||[]).length?' open':'')+'><summary>معلومات المتجر (الأسئلة الشائعة، الشحن…)</summary>'+list('info',[['t','العنوان','','الشحن والطلب',30],['b','النص','area']],5,'إضافة معلومة')+'</details>';
   h+='<details'+((S.reviews||[]).length?' open':'')+'><summary>آراء الزبائن</summary>'+list('reviews',[['n','الاسم','','زبونة من مسقط',30],['t','الرأي','area']],6,'إضافة رأي')+'</details>';
   if(lx){var MO=S.mods||{},OC=Array.isArray(S.occ)?S.occ:[],on=function(k){return '<button type="button" data-e171m="'+k+'" aria-pressed="'+!!MO[k]+'">'+(MO[k]?'✓ مفعّلة':'تفعيل')+'</button>'};
    h+='<details'+(MO.studio||MO.occ||MO.table?' open':'')+'><summary>أدوات إضافية للمتجر</summary><p class="hint">أدوات اختيارية تظهر في متجرك فقط عند تفعيلها. ما يكتبه الزبون يصلك في ملاحظة الطلب.</p>'+
     '<div class="e171-t"><div><b>✍️ استوديو التخصيص</b><small>يكتب الزبون اسمًا أو عبارة ويختار لونها، ويراها فوق صورة المنتج قبل الطلب.</small></div><div class="e150-ch">'+on('studio')+'</div></div>'+
     (MO.studio?inp('studio.l','العبارة الإرشادية للزبون','اكتب الاسم الذي نطبعه لك',40):'')+
     '<div class="e171-t"><div><b>📅 تقويم المناسبات</b><small>يعرض المناسبات القادمة مع عدٍّ تنازلي، ليطلب الزبون قبل الزحمة.</small></div><div class="e150-ch">'+on('occ')+'</div></div>'+
     (MO.occ?OC.map(function(x,i){return '<div class="row">'+inp('occ.'+i+'.t','المناسبة','العيد الوطني',30)+inp('occ.'+i+'.d','التاريخ','',10,'date')+'<button type="button" class="del" data-e150del="occ.'+i+'">حذف</button></div>'}).join('')+(OC.length<6?'<button type="button" class="add" data-e150add="occ" style="margin-top:8px">+ إضافة مناسبة</button>':''):'')+
     '<div class="e171-t"><div><b>🍽️ حجز الطاولات</b><small>يختار الزبون اليوم والوقت وعدد الضيوف، ويصلك الحجز عبر واتساب.</small></div><div class="e150-ch">'+on('table')+'</div></div>'+
     (MO.table?'<div class="row">'+inp('table.from','يبدأ الحجز الساعة','16:00',5)+inp('table.to','آخر موعد','23:00',5)+inp('table.max','أقصى عدد للضيوف','8',2)+'</div>':'')+
     '</details>'}
   if(PERF[lx]||lx==='rest'){var B=bases();
    h+='<h4>'+(lx==='rest'?'تفاصيل الأطباق':'تفاصيل العطور')+'</h4><p class="hint">'+(B.length?'تظهر في صفحة كل منتج. اترك الخانة فارغة لإخفائها.':'فعّل منتجاتك أولًا من تبويب «المنتجات».')+'</p>'+
     B.map(function(b){var p='px.'+b.replace(/\./g,'·'),x=(S.px||{})[b.replace(/\./g,'·')]||{},fill=x.en||x.insp||x.serves||x.notes;
      return '<details'+(fill?'':'')+'><summary>'+esc(b)+(fill?' ✓':'')+'</summary>'+(lx==='rest'?'<div class="row">'+inp(p+'.serves','يكفي','4 أشخاص',20)+'</div>':
       '<div class="row">'+inp(p+'.en','الاسم بالإنجليزية','Royal Blue',40)+inp(p+'.insp','مستوحى من','',40)+inp(p+'.ml','الحجم','50 مل',12)+'</div>'+
       '<div class="row">'+inp(p+'.notes.t','النفحات العليا (افصل بفاصلة)','ليمون، برغموت',80)+inp(p+'.notes.h','نفحات القلب','ورد، هيل',80)+inp(p+'.notes.b','نفحات القاعدة','عود، مسك',80)+'</div>'+
       '<div class="row">'+lvl(p+'.lon','الثبات')+lvl(p+'.proj','الفوحان')+'</div>')+'</details>'}).join('');
   }
  }
  return h+'</div>'}
/* ما يُرسل مع المتجر */
function arr(s){return String(s||'').split(/[،,]/).map(function(x){return x.trim()}).filter(Boolean).slice(0,8)}
function extra(S,cover){var e={layout:S.layout||'',font:S.font||'',shape:S.shape||'',cols:S.cols||'',hide:Array.isArray(S.hide)?S.hide:[],notice:S.notice||'',lead:Math.max(0,Math.min(336,+S.lead||0))};
  e.info=(S.info||[]).filter(function(x){return x&&(x.t||x.b)});e.reviews=(S.reviews||[]).filter(function(x){return x&&x.t});e.feats=(S.feats||[]).filter(function(x){return x&&x.t});
  var co=cats().map(catName).filter(Boolean);if(co.length>1)e.co=co;
  if(!e.layout)return e;
  e.cover=cover||'';
  var mo=S.mods||{},m7={};['studio','occ','table'].forEach(function(k){if(mo[k])m7[k]=1});if(Object.keys(m7).length)e.mods=m7;
  if(m7.studio&&S.studio&&S.studio.l)e.studio={l:String(S.studio.l).slice(0,40)};
  if(m7.occ){var oc=(Array.isArray(S.occ)?S.occ:[]).filter(function(x){return x&&x.t&&/^\d{4}-\d{2}-\d{2}$/.test(x.d||'')}).slice(0,6).map(function(x){return {t:String(x.t).slice(0,30),d:x.d}});if(oc.length)e.occ=oc}
  if(m7.table){var tb={},hm=/^([01]?\d|2[0-3]):[0-5]\d$/,T=S.table||{};if(hm.test(T.from||''))tb.from=T.from;if(hm.test(T.to||''))tb.to=T.to;if(+T.max>0)tb.max=Math.min(30,Math.round(+T.max));e.table=tb}
  if(S.seal&&S.seal.big)e.seal=S.seal;if(S.hours&&S.hours.from&&S.hours.to)e.hours=S.hours;if(/^https:\/\//i.test(S.map||''))e.map=S.map;
  var px={},B=bases();B.forEach(function(b){var x=(S.px||{})[b.replace(/\./g,'·')];if(!x)return;var o={};
    ['en','insp','ml','serves'].forEach(function(k){if(x[k])o[k]=String(x[k]).slice(0,60)});
    if(x.notes&&(x.notes.t||x.notes.h||x.notes.b))o.notes={t:arr(x.notes.t),h:arr(x.notes.h),b:arr(x.notes.b)};
    if(+x.lon)o.lon=+x.lon;if(+x.proj)o.proj=+x.proj;if(Object.keys(o).length)px[b]=o});
  if(Object.keys(px).length)e.px=px;return e}
function rer(){var X=window.EMDStoreV411;if(X&&X.paint)X.paint()}
function sv(){var X=window.EMDStoreV411;if(X&&X.save)X.save()}
function shrink(file,cb){var r=new FileReader();r.onload=function(){var im=new Image();im.onload=function(){var M=1200,k=Math.min(1,M/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);cb(c.toDataURL('image/jpeg',.8))};im.src=r.result};r.readAsDataURL(file)}
document.addEventListener('click',function(e){var w=document.getElementById('emd411Store');if(!w||!w.contains(e.target))return;var S=St();if(!S)return;var b;
  if(b=e.target.closest('[data-e150k]')){S.layout='';S.skin=b.getAttribute('data-e150k');sv();rer();return}
  if(b=e.target.closest('[data-e154]')){var q=b.getAttribute('data-e154').split(':'),C=cats(),i=+q[0],j=i+(+q[1]);if(j<0||j>=C.length)return;var t=C[i];C[i]=C[j];C[j]=t;S.cato=C;window.__e154o=1;sv();rer();return}
  if(b=e.target.closest('[data-e171m]')){var mk=b.getAttribute('data-e171m'),mo=S.mods&&typeof S.mods==='object'?S.mods:{};mo[mk]=mo[mk]?0:1;S.mods=mo;sv();rer();return}
  if(b=e.target.closest('[data-e150c]')){S[b.getAttribute('data-e150c')]=b.getAttribute('data-v');sv();rer();return}
  if(b=e.target.closest('[data-e150h]')){var k=b.getAttribute('data-e150h'),h=Array.isArray(S.hide)?S.hide.slice():[],i=h.indexOf(k);if(i<0)h.push(k);else h.splice(i,1);S.hide=h;sv();rer();return}
  if(b=e.target.closest('[data-e150add]')){var a=b.getAttribute('data-e150add');if(!Array.isArray(S[a]))S[a]=[];S[a].push({});sv();rer();return}
  if(b=e.target.closest('[data-e150del]')){var p=b.getAttribute('data-e150del').split('.');S[p[0]].splice(+p[1],1);sv();rer();return}
  if(b=e.target.closest('[data-e150x]')){S[b.getAttribute('data-e150x')]='';sv();rer();return}
  if(b=e.target.closest('[data-e150f]')){var key=b.getAttribute('data-e150f'),f=document.createElement('input');f.type='file';f.accept='image/*';f.onchange=function(){var x=f.files&&f.files[0];if(!x)return;if(!/^image\//.test(x.type))return;shrink(x,function(d){S[key]=d;sv();rer()})};f.click();return}
},true);
document.addEventListener('input',function(e){var t=e.target,p=t.getAttribute&&t.getAttribute('data-e150');if(!p)return;var S=St();if(!S)return;set(S,p,t.type==='number'?Math.max(0,+t.value||0):t.value);sv()},true);
document.addEventListener('change',function(e){var t=e.target,p=t.getAttribute&&t.getAttribute('data-e150');if(!p||t.tagName!=='SELECT')return;var S=St();if(!S)return;set(S,p,+t.value||0);sv()},true);
document.addEventListener('toggle',function(e){if(e.target.classList&&e.target.classList.contains('e154'))window.__e154o=e.target.open},true);
window.EMD150={tab:tab,extra:extra,cat:catName};
})();

/* ===== EMD-V182-season ===== */
(function(){var n=0;function h(){var X=window.EMD150;if(!X){return}if(X.__s182)return;X.__s182=1;var ex=X.extra,tb=X.tab;X.extra=function(S,c){var e=ex(S,c);e.season=S.season==='auto'?'auto':'';return e};X.tab=function(){var H=tb.apply(this,arguments),S=window.EMD411?null:null;try{S=window.EMDStoreV411.state()}catch(e){}var v=S&&S.season==='auto'?'auto':'';var box='<h4>مناسبات المتجر</h4><p class="hint">عند التفعيل يتزين متجرك تلقائيًا في رمضان والعيدين والعيد الوطني، دون تغيير تصميمك. تعمل مع التصاميم الجديدة.</p><div class="e150-ch"><button type="button" data-e150c="season" data-v="" aria-pressed="'+(v==='')+'">معطلة</button><button type="button" data-e150c="season" data-v="auto" aria-pressed="'+(v==='auto')+'">تلقائية</button></div>';var i=H.lastIndexOf('</div>');return i>0?H.slice(0,i)+box+H.slice(i):H+box}}h()})();
/* ===== EMD-V156-zones ===== */

(function(){
'use strict';
var GOV=['مسقط','شمال الباطنة','جنوب الباطنة','الداخلية','الظاهرة','البريمي','شمال الشرقية','جنوب الشرقية','الوسطى','ظفار','مسندم'];
function St(){return window.EMDStoreV411&&window.EMDStoreV411.state()}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function Z(S){return Array.isArray(S.zones)?S.zones:(S.zones=[])}
function valid(S){var seen={};return Z(S).map(function(z){return {n:String(z&&z.n||'').trim().slice(0,40),f:Math.max(0,Math.round((+(z&&z.f)||0)*1000)/1000)}}).filter(function(z){if(!z.n||seen[z.n])return false;seen[z.n]=1;return true}).slice(0,40)}
window.EMD156Z=function(){var S=St();if(!S)return '';var A=Z(S);
  return '<details class="e156"'+(A.length||window.__e156o?' open':'')+'><summary>🚚 رسوم التوصيل حسب المنطقة</summary>'+
   '<p class="hint">اكتب المناطق التي توصل إليها ورسوم كل منها. يختار الزبون منطقته عند الطلب، وتأخذ المناطق غير المذكورة الرسوم العامة أعلاه. التوصيل المجاني فوق المبلغ المحدد يبقى ساريًا.</p>'+
   A.map(function(z,i){return '<div class="e156r"><input class="n" data-z156="'+i+'.n" maxlength="40" placeholder="اسم المنطقة" value="'+esc(z.n)+'" aria-label="اسم المنطقة"><input class="f" data-z156="'+i+'.f" type="number" min="0" step="0.5" inputmode="decimal" placeholder="ر.ع" value="'+esc(z.f)+'" aria-label="الرسوم"><button type="button" data-z156del="'+i+'">حذف</button></div>'}).join('')+
   '<div class="e156b">'+(A.length<40?'<button type="button" data-z156add>+ إضافة منطقة</button>':'')+(A.length?'':'<button type="button" data-z156gov>إضافة محافظات سلطنة عُمان</button>')+'</div></details>'};
function rer(){var X=window.EMDStoreV411;if(X){X.save();var w=document.getElementById('emd411Store'),bd=w&&w.querySelector('.bd'),y=bd?bd.scrollTop:0;X.paint();bd=w&&w.querySelector('.bd');if(bd)bd.scrollTop=y}}
document.addEventListener('click',function(e){var w=document.getElementById('emd411Store');if(!w||!w.contains(e.target))return;var S=St();if(!S)return;var b;
  if(b=e.target.closest('[data-z156add]')){Z(S).push({n:'',f:''});window.__e156o=1;rer();return}
  if(b=e.target.closest('[data-z156gov]')){var f=+S.ship||0;S.zones=GOV.map(function(n){return {n:n,f:f}});window.__e156o=1;rer();return}
  if(b=e.target.closest('[data-z156del]')){Z(S).splice(+b.getAttribute('data-z156del'),1);rer();return}},true);
document.addEventListener('input',function(e){var t=e.target,p=t.getAttribute&&t.getAttribute('data-z156');if(!p)return;var S=St();if(!S)return;p=p.split('.');var z=Z(S)[+p[0]];if(!z)return;z[p[1]]=t.value;window.EMDStoreV411.save()},true);
document.addEventListener('toggle',function(e){if(e.target.classList&&e.target.classList.contains('e156'))window.__e156o=e.target.open},true);
function hook(){var X=window.EMD150;if(!X||X.__z156)return !!X;var ex=X.extra;X.extra=function(S,c){var e=ex(S,c);var z=valid(S);if(z.length)e.zones=z;return e};X.__z156=1;return true}
if(!hook())document.addEventListener('DOMContentLoaded',hook);
})();

/* ===== EMD-V208-picker ===== */
(function(){var PG={"arcade":3,"lens":3,"smarthome":3,"washer":3,"elevator":3,"pcb":3,"scope":3,"battery":3,"teardown":3,"crt":3,"royal":2,"champ":2,"oud":2,"rest":1,"ig":3,"candy":1,"bout":2,"bake":1,"photo":3,"print3d":3,"cmyk":3,"sticker":3,"moon":2,"calm":2,"laser":3,"stamp":3,"factory":3,"capsule":2,"bite":1,"story":3,"crumble":1,"cbox":1,"jelly":1,"arch":2,"awning":1,"tray":1,"mihmas":1,"vitrine":2,"rack":2,"wrap":3,"luban":2,"dune":2,"oven":1,"dough":1,"bloom":3,"vase":3,"conserv":3,"herbar":3,"copier":3,"fold":3,"ink":3,"typeset":3,"stack":1,"truck":1,"grill":1,"deli":1,"balloon":3,"curtain":3,"invite":3,"firework":3,"oilfest":3,"dawn":1,"mosaic":1,"engrave":1,"cutout":1,"plan":1,"falaj":1,"fort":1,"souq":1,"gearworks":1,"ripen":1,"majlis":1,"iftar":1,"crew":1,"marble":1,"harbor":1,"rainy":1,"combo":1,"fries":1,"jukebox":1,"premiere":3,"epic":3,"series":3,"silent":3,"shopfront":3,"constell":3,"henna":3,"tiers":1,"patisserie":1,"wish":1,"hive":1,"globe":1,"lab":1,"tale":1,"enso":1,"hotel":1,"loom":2,"silk":2,"runway":2,"fitting":2,"khareef":2,"lattice":2,"vogue":2,"dunes":2,"zari":2,"unbox":3,"post":3,"origami":3,"airship":3,"musicbox":3,"memories":3,"umbrella":3,"train":3,"skylantern":3,"comic":3,"vending":1,"popcorn":1,"heat":1,"grandma":1,"scale":1,"cornfield":1,"foodvan":1,"wonderworks":1,"fishboat":1,"camp":1,"dukkan":1,"spicesouk":1,"orbit":1,"backstage":2,"rail":2,"cloak":2,"redcarpet":2,"mandoos":2,"almanac":2,"ballroom":2,"paperdoll":2,"fireflies":2,"photobooth":2,"boutique":2,"midnight":2,"wardrobe":2,"ripple":2,"pyramid":2,"roseterrace":2,"smoke":2,"prism":2,"apothecary":2,"letter":2,"pearl":2,"peacock":2,"jasmine":2,"passport":2,"khatt":2,"bauhaus":2,"moonphase":2,"salon":2,"lipstick":2,"herbarium":2,"serum":2,"hair":2,"palette":2,"foam":2,"hammam":2,"beforeafter":2,"scissors":2,"skinlayers":2,"kohl":2,"aloe":2,"stones":2,"ringlight":2,"sewing":2,"pattern":2,"buttons":2,"dressform":2,"bolts":2,"pincushion":2,"sizecard":2,"bridal":2,"crossstitch":2,"tailorstreet":2,"cuttable":2,"paperchain":2,"generations":2,"nightlamp":2,"spools":2,"mabkhara":2,"frankincense":2,"incenseroute":2,"hafah":2,"ember":2,"mortar":2,"majlis2":2,"blend":2,"qamariya":2,"excavate":2,"coil":2,"oudlog":2,"filigree":2,"jars":2,"smartburner":2},N=['الطعام والحلويات','الأزياء والجمال والعطور','الهدايا والخدمات'],cur=0,items=[],base;try{base=new URL('../t/',location.href).href}catch(e){base='t/'}var n=0;function esc(s){return String(s).replace(/"/g,'&quot;')}function draw(g,bar){var l=items.filter(function(x){return x.p===cur});g.innerHTML=l.map(function(x){return x.h}).join('');[].forEach.call(bar.children,function(b,i){b.setAttribute('aria-pressed',i+1===cur)})}function conv(H){var d=document.createElement('div');d.innerHTML=H;var g=d.querySelector('.e150-lx');if(!g)return H;items=[];var sel=0;[].forEach.call(g.children,function(b){var k=b.getAttribute('data-v'),isLx=b.getAttribute('data-e150c')==='layout',p=isLx?(PG[k]||3):3;if(isLx){var old=b.querySelector('.e166t');var c=(k||'').replace(/\W/g,'');var name=(b.querySelector('b')||{}).textContent||'';var im='<span class="e208t" style="background:#e2e8f0"><img src="'+esc(base+c+'.jpg')+'" alt="'+esc(name)+'" loading="lazy" decoding="async"></span>';if(old)old.outerHTML=im;else b.insertAdjacentHTML('afterbegin',im)}if(b.getAttribute('aria-pressed')==='true')sel=p;items.push({p:p,h:b.outerHTML,cl:isLx?0:1})});items.sort(function(x,y){return x.cl-y.cl});if(!cur)cur=sel||1;var c=[0,0,0,0];items.forEach(function(x){c[x.p]++});var bar='<div class="e208p" role="group" aria-label="صفحات التصاميم">'+N.map(function(t,i){return '<button type="button" data-e208p="'+(i+1)+'" aria-pressed="'+(i+1===cur)+'">'+t+'<small>'+c[i+1]+' تصميم</small></button>'}).join('')+'</div>';g.innerHTML=items.filter(function(x){return x.p===cur}).map(function(x){return x.h}).join('');g.insertAdjacentHTML('beforebegin',bar);return d.innerHTML}function h(){var X=window.EMD150;if(!X){if(n++<60)setTimeout(h,250);return}if(X.__t208)return;X.__t208=1;var tb=X.tab;X.tab=function(){return conv(tb.apply(this,arguments))}}h();document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-e208p]');if(!b)return;e.stopPropagation();cur=+b.getAttribute('data-e208p');var bar=b.parentNode,g=bar.nextElementSibling;if(g)draw(g,bar);bar.scrollIntoView({block:'nearest'})},true)})();
/* ===== EMD-V215-receipt ===== */

(function(){'use strict';
var FN='https://pfkstppvnebagbdckgbu.supabase.co/functions/v1/store-receipt',KEY='sb_publishable__tfVZiyph-xyB87GzmHrkQ_9DVpPHJ0',C={},Q=[],busy=false,asked={},OCR='https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js',OCR_SRI='sha384-GJqSu7vueQ9qN0E9yLPb3Wtpd7OrgK8KmYzC8T1IysG1bcvxvIO4qtYR/D3A991F';
/* V215: استخراج رقم الحوالة والمبلغ من نص الإيصال */
function e215ext(text,total){var A='٠١٢٣٤٥٦٧٨٩',P='۰۱۲۳۴۵۶۷۸۹',s=String(text||'').replace(/[٠-٩۰-۹]/g,function(c){var i=A.indexOf(c);return String(i>-1?i:P.indexOf(c))}).replace(/[٫]/g,'.'),L=s.split(/\r?\n/).map(function(x){return x.trim()}).filter(Boolean);
  var LB=/(reference|\bref\b|txn|transaction|\btrn\b|\butr\b|رقم\s*المرجع|الرقم\s*المرجعي|المرجع|مرجع|رقم\s*العملية|رقم\s*الحوالة|رقم\s*التحويل|رقم\s*المعاملة)/i,TK=/[A-Za-z0-9][A-Za-z0-9\-\/]{4,}[A-Za-z0-9]/g,ref='',how='';
  function ok(t){return /\d/.test(t)&&(t.match(/\d/g)||[]).length>=5&&!/^OM\d/i.test(t)&&!/^(00968|968)?[79]\d{7}$/.test(t)&&!/^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}$/.test(t)&&!/^20\d{2}[\/\-]\d{1,2}/.test(t)}
  for(var i=0;i<L.length&&!ref;i++){if(!LB.test(L[i]))continue;var c=(L[i].match(TK)||[]).filter(ok);if(!c.length&&L[i+1])c=(L[i+1].match(TK)||[]).filter(ok);if(!c.length&&L[i-1])c=(L[i-1].match(TK)||[]).filter(ok);if(c.length){ref=c.sort(function(a,b){return b.length-a.length})[0];how='label'}}
  if(!ref){var all=(s.match(TK)||[]).filter(ok).filter(function(t){return t.replace(/\D/g,'').length>=8&&!/^(\+?968)?[79]\d{7}$/.test(t)});var U=all.filter(function(t,i){return all.indexOf(t)===i});if(U.length){ref=U.sort(function(a,b){return b.length-a.length})[0];how=U.length===1?'label':'guess'}}
  var am=null,T=+total;if(T>0){var N=(s.replace(/\b\d{1,4}[\/\-]\d{1,2}[\/\-]\d{1,4}\b/g,' ').replace(/\b\d{1,2}:\d{2}(?::\d{2})?\b(?!\d)/g,' ').replace(/(\d):(\d{3})\b/g,'$1.$2').replace(/,/g,'').match(/\d+(?:\.\d{1,3})?/g)||[]).map(Number);am=N.some(function(n){return Math.abs(n-T)<.0011})}
  return {ref:ref.replace(/[^A-Za-z0-9]/g,'').toUpperCase(),how:how,amount:am}}

/* V218: تاريخ الإيصال والمستفيد */
function e215date(text,orderAt){var A='٠١٢٣٤٥٦٧٨٩',P='۰۱۲۳۴۵۶۷۸۹',s=String(text||'').replace(/[٠-٩۰-۹]/g,function(c){var i=A.indexOf(c);return String(i>-1?i:P.indexOf(c))}),F=[],M={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12,'يناير':1,'فبراير':2,'مارس':3,'أبريل':4,'ابريل':4,'مايو':5,'يونيو':6,'يوليو':7,'أغسطس':8,'اغسطس':8,'سبتمبر':9,'أكتوبر':10,'اكتوبر':10,'نوفمبر':11,'ديسمبر':12},now=Date.now();
  function add(y,m,d){y=+y;if(y<100)y+=2000;m=+m;d=+d;if(m<1||m>12||d<1||d>31)return false;var t=Date.UTC(y,m-1,d);if(new Date(t).getUTCDate()!==d||t>now+864e5*2||t<now-864e5*1500)return false;F.push(t);return true}
  s.replace(/\b(20\d{2})[\/.\-](\d{1,2})[\/.\-](\d{1,2})\b/g,function(a,y,m,d){add(y,m,d);return ''}).replace(/\b(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{2,4})\b/g,function(a,d,m,y){if(!add(y,m,d))add(y,d,m);return ''});
  s.replace(/(\d{1,2})\s*[-\s]\s*([A-Za-z]{3,9}|[ء-ي]{3,8})\s*[-,\s]\s*(20\d{2})/g,function(a,d,m,y){var k=M[m]||M[m.slice(0,3).toLowerCase()];if(k)add(y,k,d);return ''});
  if(!F.length)return {state:'none',date:''};var t=Math.max.apply(null,F),o=new Date(orderAt||now),od=Date.UTC(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate());return {state:t<od-864e5?'old':'ok',date:new Date(t).toISOString().slice(0,10)}}
function e215who(text,list,hasRef){var V=String(list||'').split(/[,،\n]/).map(function(v){return v.trim()}).filter(Boolean);if(!V.length)return 'off';var A='٠١٢٣٤٥٦٧٨٩',s=String(text||'').replace(/[٠-٩]/g,function(c){return String(A.indexOf(c))}).toUpperCase(),dg=s.replace(/\D/g,''),al=s.replace(/[^A-Z0-9ء-ي]/g,'');
  var ok=V.some(function(v){var d=v.replace(/\D/g,'');if(d.length>=4&&d.length>=v.replace(/\s/g,'').length-1)return dg.indexOf(d.slice(-8))>-1;var W=v.toUpperCase().split(/\s+/).map(function(w){return w.replace(/[^A-Z0-9ء-ي]/g,'')}).filter(function(w){return w.length>=2});if(!W.length)return false;return al.indexOf(W[0])>-1&&al.indexOf(W[W.length-1])>-1});
  return ok?'ok':hasRef?'no':'none'}

function esc(x){return String(x==null?'':x).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function call(action,b){if(action!=='list'&&!EMDH.canWrite())return Promise.reject(new Error('sandbox'));var c=EMDH.cloud;if(!c)return Promise.reject(new Error('auth'));b=b||{};b.action=action;return c.token().then(function(t){return fetch(FN,{method:'POST',headers:{apikey:KEY,'Content-Type':'application/json','x-emd-token':t},body:JSON.stringify(b)})}).then(function(r){return r.json().then(function(j){if(!r.ok||!j.ok)throw new Error(j.error||('HTTP '+r.status));return j})})}
function verdict(x){if(x.img_dup>0)return ['r','🔴 مشكوك فيه: الصورة نفسها استُخدمت من قبل','عند الاعتماد لن يُسجَّل مدفوعًا.'];if(x.ref_dup>0)return ['r','🔴 مشكوك فيه: رقم الحوالة استُخدم من قبل','الرقم المنتهي بـ '+x.ref_last+'. عند الاعتماد لن يُسجَّل مدفوعًا.'];if(x.date_state==='old')return ['r','🔴 مشكوك فيه: الإيصال أقدم من الطلب','تاريخ الإيصال '+x.rc_date+'. عند الاعتماد لن يُسجَّل مدفوعًا.'];if(x.who_state==='no')return ['r','🔴 مشكوك فيه: لم نجد الاسم أو الرقم الذي حددته','عند الاعتماد لن يُسجَّل مدفوعًا.'];if(x.reading)return ['y','⏳ جارٍ قراءة الإيصال…','قد يستغرق ذلك دقيقة في أول مرة.'];if(!x.ref_last)return ['y','🟡 يحتاج مراجعة: لم نقرأ رقم الحوالة','اكتب الرقم من الصورة لفحص تكراره'+(x.failed?'، أو أعد القراءة.':'.')];if(x.amount_ok===false)return ['y','🟡 يحتاج مراجعة: لم نجد مبلغ الطلب في الإيصال','رقم الحوالة ينتهي بـ '+x.ref_last+'، ولم يُستخدم من قبل.'];if(x.who_state==='none')return ['y','🟡 يحتاج مراجعة: لم نتأكد من الاسم أو الرقم المحدد','قراءة الإيصال غير كافية.'];if(x.date_state==='none')return ['y','🟡 يحتاج مراجعة: لم نقرأ تاريخ الإيصال','تأكد بنفسك أنه ليس إيصالًا قديمًا.'];if(x.ref_how==='guess')return ['y','🟡 يحتاج مراجعة: تأكد من رقم الحوالة','قرأنا رقمًا ينتهي بـ '+x.ref_last+'، ولم يُستخدم من قبل.'];return ['g','🟢 مطابق ظاهريًا','رقم الحوالة ينتهي بـ '+x.ref_last+'، ولم يُستخدم من قبل.']}
function draw(id){var e=document.querySelector('.e215r[data-rid="'+id+'"]'),x=C[id];if(!e)return;if(x===0){e.innerHTML='<span class="e215b y">🧾 لم يُرفق الزبون إيصالًا</span>';return}if(!x)return;var v=verdict(x),typed=e.querySelector('input'),val=typed?typed.value:'';
  e.innerHTML='<div class="e215t"><img alt="إيصال الدفع" src="'+esc(x.url)+'" data-e215z="1"><div><span class="e215b '+v[0]+'">'+esc(v[1])+'</span>'+(v[2]?'<span class="e215s">'+esc(v[2])+'</span>':'')+'<span class="e215s">هذا الفحص لا يثبت وصول المال. تأكد من حسابك البنكي قبل الاعتماد.</span></div></div><div class="e215m"><input inputmode="text" placeholder="رقم الحوالة (إن لم يُقرأ)" value="'+esc(val)+'" aria-label="رقم الحوالة"><button type="button" data-e215s="'+id+'">فحص</button>'+(x.reading||x.ref_last?'':'<button type="button" data-e215o="'+id+'">🔄 قراءة</button>')+'</div>'}
/* القراءة تجري داخل إطار معزول: لا يصل إلى بيانات التطبيق ولا جلسة التاجر حتى لو اختُرقت المكتبة الخارجية */
function sand(imgs){return new Promise(function(ok,no){var f=document.createElement('iframe'),T=setTimeout(function(){fin(new Error('timeout'))},240000);f.setAttribute('sandbox','allow-scripts');f.setAttribute('aria-hidden','true');f.style.cssText='position:fixed;width:1px;height:1px;left:0;top:0;opacity:0;pointer-events:none;border:0;z-index:-1';
  function fin(e,v){clearTimeout(T);removeEventListener('message',on);try{f.remove()}catch(x){}if(e)no(e);else ok(v)}
  function on(e){if(e.source!==f.contentWindow)return;var d=e.data||{};if(d.t==='ready')f.contentWindow.postMessage({t:'go',imgs:imgs},'*');else if(d.t==='done')fin(null,String(d.text||''));else if(d.t==='err')fin(new Error('ocr'))}
  addEventListener('message',on);
  f.srcdoc='<!doctype html><meta charset="utf-8"><script src="'+OCR+'" integrity="'+OCR_SRI+'" crossorigin="anonymous"><\/script><script>addEventListener("message",function(e){if(!e.data||e.data.t!=="go")return;var I=e.data.imgs,o="";(function n(i){if(i>=I.length){parent.postMessage({t:"done",text:o},"*");return}Tesseract.recognize(I[i],"ara+eng",{cacheMethod:"none"}).then(function(r){o+=(r.data&&r.data.text||"")+"\\n";n(i+1)}).catch(function(){parent.postMessage({t:"err"},"*")})})(0)});parent.postMessage(window.Tesseract?{t:"ready"}:{t:"err"},"*");<\/script>';
  document.body.appendChild(f)})}
function shot(src,M){return new Promise(function(ok,no){var im=new Image();im.onload=function(){if(im.naturalWidth>6000||im.naturalHeight>6000){no(new Error('big'));return}var k=Math.min(1,M/Math.max(im.naturalWidth,im.naturalHeight)),c=document.createElement('canvas');c.width=Math.round(im.naturalWidth*k);c.height=Math.round(im.naturalHeight*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);ok(c.toDataURL('image/jpeg',.92))};im.onerror=function(){no(new Error('img'))};im.src=src})}
function readAll(url){return fetch(url).then(function(r){if(!r.ok)throw new Error('img');return r.blob()}).then(function(b){var u=URL.createObjectURL(b);return shot(u,1600).then(function(a){URL.revokeObjectURL(u);return sand([a]).then(function(t1){if(e215ext(t1,0).ref)return t1;return new Promise(function(ok){setTimeout(ok,50)}).then(function(){return prep(a)}).then(function(c){return sand([c.toDataURL?c.toDataURL('image/jpeg',.9):a]).then(function(t2){return t1+'\n'+t2})})})},function(e){URL.revokeObjectURL(u);throw e})})}
/* تهيئة الصورة: يبرز النص أيًّا كان لونه وخلفيته، حتى في الإيصالات الداكنة */
function prep(url){return new Promise(function(ok){var im=new Image();im.crossOrigin='anonymous';im.onload=function(){try{var k=Math.min(2,2400/Math.max(im.width,im.height)),W=Math.round(im.width*k),H=Math.round(im.height*k),c=document.createElement('canvas');c.width=W;c.height=H;var g=c.getContext('2d',{willReadFrequently:true});g.imageSmoothingQuality='high';g.drawImage(im,0,0,W,H);var D=g.getImageData(0,0,W,H),d=D.data,W1=W+1,I=new Float64Array(W1*(H+1)),G=new Float32Array(W*H),x,y,i;for(y=0;y<H;y++){var row=0;for(x=0;x<W;x++){i=(y*W+x)*4;var v=.299*d[i]+.587*d[i+1]+.114*d[i+2];G[y*W+x]=v;row+=v;I[(y+1)*W1+x+1]=I[y*W1+x+1]+row}}var R=40,mx=1,O=new Float32Array(W*H);for(y=0;y<H;y++){var y0=Math.max(0,y-R),y1=Math.min(H,y+R+1);for(x=0;x<W;x++){var x0=Math.max(0,x-R),x1=Math.min(W,x+R+1),m=(I[y1*W1+x1]-I[y0*W1+x1]-I[y1*W1+x0]+I[y0*W1+x0])/((x1-x0)*(y1-y0)),a=Math.abs(G[y*W+x]-m);O[y*W+x]=a;if(a>mx)mx=a}}for(i=0;i<O.length;i++){var o=255-Math.min(255,O[i]*255/mx);d[i*4]=d[i*4+1]=d[i*4+2]=o;d[i*4+3]=255}g.putImageData(D,0,0);ok(c)}catch(e){ok(url)}};im.onerror=function(){ok(url)};im.src=url})}
function ord(id){var o=[];try{o=window.EMDStoreV411.orders()||[]}catch(e){}if(!Array.isArray(o))o=[];for(var i=0;i<o.length;i++)if(String(o[i].id)===String(id))return o[i];return null}
function total(id){var o=ord(id);if(!o)return 0;return String(o.customer&&o.customer.note||'').indexOf('رسوم التوصيل للمندوب')>-1?+o.subtotal:+o.total}
function rcWho(){try{return (JSON.parse(localStorage.getItem(EMDH.lk('emd173_quick'))||'{}')||{}).rcWho||''}catch(e){return ''}}
function next(){if(busy||!Q.length)return;var id=Q.shift(),x=C[id];if(!x)return next();busy=true;x.reading=true;draw(id);x.failed=false;Promise.resolve().then(function(){return readAll(x.url)}).then(function(txt){var o=e215ext(txt,total(id)),od=ord(id),dt=e215date(txt,od&&od.created_at),wh=e215who(txt,rcWho(),!!o.ref);return call('ref',{id:id,ref:o.ref,how:o.how,amount_ok:o.amount,rc_date:dt.date,date_state:dt.state,who_state:wh}).then(function(j){x.ref_last=j.ref_last||'';x.ref_dup=j.ref_dup||0;x.ref_how=o.how;x.amount_ok=o.amount;x.tried=true;x.rc_date=dt.date;x.date_state=dt.state;x.who_state=wh})}).catch(function(){x.tried=true;x.failed=true}).then(function(){x.reading=false;busy=false;draw(id);next()})}
function scan(){var E=document.querySelectorAll('.e215r[data-rid]'),need=[];[].forEach.call(E,function(e){var id=e.getAttribute('data-rid');if(C[id]!==undefined)draw(id);else if(!asked[id]){asked[id]=1;need.push(+id)}});if(!need.length)return;call('list',{ids:need}).then(function(j){need.forEach(function(id){var r=(j.rows||[]).filter(function(x){return +x.id===id})[0];C[id]=r||0;draw(id);if(r&&!r.ref_last&&((function(){var m={};try{m=JSON.parse(localStorage.getItem(EMDH.lk('emd225_rc'))||'{}')||{}}catch(e){}var n=m[id]||0;if(n>=2)return false;m[id]=n+1;try{localStorage.setItem(EMDH.lk('emd225_rc'),JSON.stringify(m))}catch(e){}return true})()))Q.push(id)});next()}).catch(function(){need.forEach(function(id){delete asked[id]})})}
document.addEventListener('click',function(e){var t=e.target;if(!t.closest)return;var z=t.closest('[data-e215z]');if(z){var d=document.createElement('div');d.id='e215Z';d.innerHTML='<img alt="إيصال الدفع" src="'+esc(z.src)+'">';d.onclick=function(){d.remove()};document.body.appendChild(d);return}var rd=t.closest('[data-e215o]');if(rd){Q.push(+rd.getAttribute('data-e215o'));next();return}var b=t.closest('[data-e215s]');if(b){var id=+b.getAttribute('data-e215s'),inp=b.parentNode.querySelector('input'),v=String(inp.value||'').replace(/[^A-Za-z0-9]/g,'').toUpperCase();if(v.length<5)return;b.disabled=true;call('ref',{id:id,ref:v,how:'manual'}).then(function(j){var x=C[id];x.ref_last=j.ref_last;x.ref_dup=j.ref_dup;x.ref_how='manual';x.tried=true;inp.value='';draw(id)}).catch(function(){b.disabled=false})}});
function pay(id){var x=C[id];if(!x)return null;var red=x.img_dup>0||x.ref_dup>0||x.date_state==='old'||x.who_state==='no';return {ok:!red,red:red,last:x.ref_last||''}}
window.E215={scan:scan,ext:e215ext,prep:prep,pay:pay};
/* V221: الزبون الموثوق؛ يحدده التاجر ويصل إشعار للمالك من الخادم */
var GFN='https://pfkstppvnebagbdckgbu.supabase.co/functions/v1/store-guard',TR=null,TRq=false;
function gcall(b){if(b&&b.action!=='mine'&&!EMDH.canWrite())return Promise.reject(new Error('🧪 في التجربة لا يُرسل شيء إلى متجرك الحقيقي.'));var c=EMDH.cloud;if(!c)return Promise.reject(new Error('auth'));return c.token().then(function(t){return fetch(GFN,{method:'POST',headers:{apikey:KEY,'Content-Type':'application/json','x-emd-token':t},body:JSON.stringify(b)})}).then(function(r){return r.json().then(function(j){if(!r.ok||!j.ok)throw new Error(j.error||'x');return j})})}
function trDraw(){[].forEach.call(document.querySelectorAll('[data-e221t]'),function(b){var on=TR&&TR.indexOf(String(b.getAttribute('data-e221t')).replace(/\D/g,''))>-1;b.textContent=on?'⭐ موثوق':'☆ زبون موثوق';b.setAttribute('aria-pressed',on?'true':'false')})}
function trScan(){if(TR){trDraw();return}trDraw();if(TRq)return;TRq=true;gcall({action:'mine'}).then(function(j){TR=j.phones||[];trDraw()}).catch(function(){TRq=false})}
var _sc=scan;scan=function(){_sc();trScan()};window.E215.scan=scan;
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-e221t]');if(!b)return;var ph=String(b.getAttribute('data-e221t')).replace(/\D/g,''),on=TR&&TR.indexOf(ph)>-1;b.disabled=true;gcall({action:on?'untrust':'trust',phone:ph}).then(function(){TR=TR||[];if(on)TR=TR.filter(function(x){return x!==ph});else TR.push(ph);b.disabled=false;trDraw()}).catch(function(){b.disabled=false;b.textContent='تعذّر الحفظ، أعد المحاولة'})});
})();

/* ===== EMD-V173-quick ===== */

(function(){'use strict';
var URL0='https://emd-business.github.io/store/?s=',KEY=EMDH.quickKey,PK='استلام من المحل',ZF='توصيل برسوم يحددها المحل';
function $(i){return document.getElementById(i)}
function esc(t){return String(t==null?'':t).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function num(v){v=parseFloat(String(v==null?'':v).replace(/[^\d.\-]/g,''));return isFinite(v)?v:0}
function omr(v){return num(v).toFixed(3)+' ر.ع'}
function toast(t){var e=$('e173Toast');if(!e){e=document.createElement('div');e.id='e173Toast';document.body.appendChild(e)}e.textContent=t;e.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(function(){e.classList.remove('show')},2400)}
function Q(){var o={};try{o=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){}
  return Object.assign({fee:true,feeTo:'with',ad:1,nt:true,co:0,coList:'',mc:true,mo:false,rcWho:'',cod:null,bank:null,zf:false,only:false,off:false,pk:false,x:false,exp:'0',max:20,msg:'',recent:[],pubSig:''},o)}
function setQ(o){try{localStorage.setItem(KEY,JSON.stringify(o))}catch(e){}}
function ST(){return window.EMDStoreV411?window.EMDStoreV411.state():null}
function C(){return EMDH.cloud}
function logged(){var c=C();try{return !!(c&&c.uid())}catch(e){return false}}
function slugOk(s){return /^[a-z0-9][a-z0-9-]{1,28}[a-z0-9]$/.test(s||'')}
function db(){try{return EMDH.db()||JSON.parse(JSON.stringify(EMDH.db())||'{}')}catch(e){return {}}}
function bizName(){var S=ST()||{},d=db(),c=d.settings||d.cfg||{};return S.name||c.storeName||c.businessName||c.name||d.storeName||d.businessName||''}
function catOf(c){c=String(c||'');return (window.EMD150?window.EMD150.cat(c):c)||''}
function products(){var d=db(),L=Array.isArray(d.products)?d.products:[];return L.map(function(p,i){
  return {k:String(p.id||p.sku||p.name||('p'+i)),name:String(p.name||p.productName||'منتج بدون اسم'),price:num(p.salePrice!=null?p.salePrice:p.unitPrice!=null?p.unitPrice:p.price),
    stock:EMDH.storeQty(p),cat:catOf(p.category||p.cat||''),img:p.image?String(p.image):''}}).filter(function(p){return p.name.trim()})}
function pubd(k){var S=ST();return !!(S&&S.pubAt&&S.snap&&S.snap[k])}
function flags(q){return JSON.stringify([!!q.only,!!q.off,!!q.pk,!!q.zf,+q.ad,q.nt,+q.co,q.coList||'',q.mc,q.mo,q.feeTo||''])}
function pays(q){var S=ST()||{};return {c:q.cod==null?S.cod!==false:!!q.cod,b:q.bank==null?!!S.bank:!!q.bank}}

/* يضيف إعدادات الروابط إلى بيانات المتجر عند كل نشر (بعد طبقة V156 حتى لا تُستبدل المناطق) */
function hook(){var X=window.EMD150;if(!X||X.__q173)return;var ex=X.extra;
  X.extra=function(S,c){var e=ex(S,c)||{},q=Q();if(q.only)e.qonly=1;if(q.off)e.qoff=1;var qf={};if(q.ad!=null&&+q.ad!==1)qf.ad=+q.ad;if(q.nt===false)qf.nt=0;if(+q.co)qf.co=+q.co;var cl=String(q.coList||'').split(/[,،\n]/).map(function(x){return x.trim()}).filter(Boolean).slice(0,20);if(cl.length&&+q.co)qf.cl=cl;if(q.mc===false)qf.mc=0;if(q.mo)qf.mo=1;if(q.feeTo==='courier')qf.ft='c';if(Object.keys(qf).length)e.qf=qf;
    if(q.pk){var z=Array.isArray(e.zones)?e.zones.slice():[];if(!z.some(function(x){return x&&String(x.n).trim()===PK}))z.push({n:PK,f:0});e.zones=z}
    if(q.zf){var z2=Array.isArray(e.zones)?e.zones.slice():[];if(!z2.some(function(x){return x&&String(x.n).trim()===ZF}))z2.push({n:ZF,f:0});e.zones=z2}
    return e};X.__q173=1}
hook();document.addEventListener('DOMContentLoaded',hook);

/* الحالة */
var V={mode:'free',sel:{},qty:{},q:'',cat:'',catLink:false,label:'',res:null,busy:false,err:'',cq:'',showQr:false,slug:'',full:false,step:'make'};
function qh173(s){s=String(s);var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return ('0000'+(h>>>0).toString(36)).slice(-5)}
function b64u(o){return btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function today(){return Math.floor(Date.now()/864e5)}

function build(){if($('e173'))return;var w=document.createElement('div');w.id='e173';
  w.innerHTML='<div class="w" role="dialog" aria-modal="true" aria-labelledby="e173T"><div class="hd"><div style="flex:1"><h2 id="e173T">⚡ رابط طلب سريع</h2><small>رابط ترسله للعميل، فيختار ويؤكد، ويصلك الطلب هنا.</small></div><button type="button" data-a="close">إغلاق ✕</button></div><div class="bd"></div><div class="ft"></div></div>';
  w.addEventListener('click',onClick);w.addEventListener('input',onInput);w.addEventListener('change',onChange);
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&w.classList.contains('show'))close()});
  document.body.appendChild(w)}
function open(){hook();build();V.step='make';V.res=null;V.err='';V.showQr=false;$('e173').classList.add('show');document.documentElement.style.overflow='hidden';paint()}
function close(){var w=$('e173');if(w)w.classList.remove('show');document.documentElement.style.overflow=''}
window.EMDQuickV173={open:open,close:close};

function cats(L){var m={},A=[];L.forEach(function(p){if(p.cat&&!m[p.cat]){m[p.cat]=1;A.push(p.cat)}});return A}
function shown(L){var s=V.q.trim().toLowerCase();return L.filter(function(p){return (!V.cat||p.cat===V.cat)&&(!s||p.name.toLowerCase().indexOf(s)>-1)})}
function selKeys(){return Object.keys(V.sel).filter(function(k){return V.sel[k]})}

function viewMake(){var S=ST(),q=Q(),L=products(),h='';
  if(!S)return '<div class="bad">تعذّر تحميل إعدادات المتجر. حدّث الصفحة ثم حاول مرة أخرى.</div>';
  if(!logged())return '<div class="note">🔐 تحتاج الروابط إلى حسابك السحابي حتى تصلك الطلبات. سجّل الدخول أولًا من «🛍️ متجري ← الرابط».</div><button type="button" class="go" data-a="login">فتح «متجري» لتسجيل الدخول</button>';
  if(!L.length)return '<div class="note">أضف منتجاتك في التطبيق أولًا، ثم أنشئ الرابط.</div>';
  if(q.off)h+='<label class="kill on"><input type="checkbox" data-o="off" checked><span><b>الروابط السريعة متوقفة الآن.</b> أزل العلامة لإعادة تشغيلها.</span></label>';
  if(!S.pubAt){V.slug=V.slug||(slugOk(S.slug)?S.slug:'shop-'+Math.random().toString(36).slice(2,7));
    h+='<div class="bx"><h3>تجهيز لمرة واحدة</h3><p style="margin:0 0 8px;color:#4b5563;font-size:14px">لتعمل الروابط نرفع المنتجات التي تختارها وأسعارها إلى السحابة. ولا يُرفع أبدًا: التكلفة وطلباتك وعملاؤك.</p>'+
     '<label style="font-weight:700;font-size:14px">اسم رابط محلك (حروف إنجليزية صغيرة وأرقام و -)<input class="in" data-v="slug" dir="ltr" maxlength="30" value="'+esc(V.slug)+'" style="margin-top:6px"></label>'+
     (slugOk(V.slug)?'':'<p style="color:#b91c1c;font-size:13px;margin:6px 0 0">من 3 إلى 30 حرفًا: a-z و 0-9 و - فقط.</p>')+
     '<label class="op" style="border:0;padding-bottom:0"><span>عرض المتجر الكامل أيضًا<small>إن لم تفعّله، من يفتح رابط محلك العام يرى رسالة تطلب منه التواصل معك.</small></span><input type="checkbox" data-v="full"'+(V.full?' checked':'')+'></label></div>'}
  h+='<div class="bx"><h3>١. نوع الرابط</h3><div class="typ">'+
   '<button type="button" data-a="mode" data-m="free" aria-pressed="'+(V.mode==='free')+'"><b>🛒 اختيار حر</b><small>تختار المنتجات، والعميل يحدد الكمية.</small></button>'+
   '<button type="button" data-a="mode" data-m="ready" aria-pressed="'+(V.mode==='ready')+'"><b>✅ طلب جاهز للتأكيد</b><small>تحدد المنتجات والكميات، والعميل يكمل بياناته ويؤكد.</small></button></div></div>';
  var C2=cats(L),R=shown(L),n=selKeys().length;
  h+='<div class="bx"><h3>٢. المنتجات</h3><input class="in" type="search" data-v="q" placeholder="🔎 ابحث باسم المنتج" value="'+esc(V.q)+'">'+
   (C2.length?'<div class="chips"><button type="button" data-a="cat" data-c="" aria-pressed="'+(!V.cat)+'">الكل</button>'+C2.map(function(c){return '<button type="button" data-a="cat" data-c="'+esc(c)+'" aria-pressed="'+(V.cat===c)+'">'+esc(c)+'</button>'}).join('')+'</div>':'')+
   (V.cat&&V.mode==='free'?'<label class="catm"><input type="checkbox" data-v="catLink"'+(V.catLink?' checked':'')+'><span><b>رابط للقسم «'+esc(V.cat)+'» كله</b><br>أي منتج تضيفه لهذا القسم لاحقًا يظهر في الرابط تلقائيًا.</span></label>':'')+
   (V.catLink&&V.cat&&V.mode==='free'?'':'<div class="cnt"><span>المحدد: <b>'+n+'</b>'+(n>30?' · الحد الأقصى 30':'')+'</span><span><button type="button" data-a="all">تحديد الظاهر</button><button type="button" data-a="none">إلغاء</button></span></div>'+
   '<div class="lst">'+(R.length?R.map(function(p){var on=!!V.sel[p.k],out=p.stock<=0,qn=V.qty[p.k]||1;
     return '<div class="pr'+(on?' sel':'')+(out?' off':'')+'" data-a="pick" data-k="'+esc(p.k)+'"><span class="ck">'+(on?'✓':'')+'</span><span class="im"'+(p.img?' style="background-image:url(\''+esc(p.img).replace(/'/g,'%27')+'\')"':'')+'>'+(p.img?'':'📦')+'</span>'+
      '<span class="nm"><b>'+esc(p.name)+'</b><small'+(out?' class="r"':pubd(p.k)?'':' class="n"')+'>'+omr(p.price)+(out?' · نفدت الكمية':pubd(p.k)?'':' · يُرفع عند الإنشاء')+'</small></span>'+
      (on&&V.mode==='ready'?'<span class="qty"><button type="button" data-a="qd" data-k="'+esc(p.k)+'">−</button><span>'+qn+'</span><button type="button" data-a="qu" data-k="'+esc(p.k)+'">+</button></span>':'')+'</div>'}).join(''):'<p style="text-align:center;color:#6b7280">لا يوجد منتج بهذا الاسم.</p>')+'</div>')+'</div>';
  h+='<div class="bx"><h3>٣. اسم الرابط (اختياري)</h3><input class="in" data-v="label" maxlength="30" placeholder="مثال: عرض العيد، عميل إنستغرام" value="'+esc(V.label)+'"><p style="margin:6px 0 0;color:#6b7280;font-size:12.5px">يظهر لك في ملاحظة الطلب لتعرف من أي رابط جاء.</p></div>';
  var py=pays(q);
  h+='<details'+(V.optOpen?' open':'')+'><summary>⚙️ الخصائص: ما يظهر للعميل<small style="display:block;color:#6b7280;font-weight:400;font-size:12.5px;margin-top:2px">التوصيل: '+(q.fee?'يظهر':'مخفي')+' · الدفع: '+[py.c?'عند الاستلام':'',py.b?'تحويل بنكي':''].filter(Boolean).join(' و')+'</small></summary>'+
   '<label class="op"><span>🚚 رسوم التوصيل<small>'+(q.fee?'تظهر للعميل وتُحسب في الطلب حسب منطقته.':'مطفأة: لا تُحسب رسوم في الطلب، وتحددها أنت للعميل عند التواصل.')+'</small></span><input type="checkbox" data-o="fee"'+(q.fee?' checked':'')+'></label>'+
   '<label class="op"><span>💵 الدفع عند الاستلام</span><input type="checkbox" data-o="cod"'+(py.c?' checked':'')+'></label>'+
   '<label class="op"><span>🏦 التحويل البنكي'+(py.b&&!String(S.bankInfo||'').trim()?'<small style="color:#b45309">لم تكتب بيانات التحويل في «متجري ← التوصيل والدفع»، فسيرى العميل أنك سترسلها له.</small>':'')+'</span><input type="checkbox" data-o="bank"'+(py.b?' checked':'')+'></label>'+
   (py.b?'<label class="op"><span>🚚 رسوم التوصيل عند التحويل<small>إذا كانت تُدفع للمندوب، فلن تدخل في مبلغ التحويل ولا يبقى منها شيء على الطلب.</small></span><select data-o="feeTo"><option value="with"'+(q.feeTo!=='courier'?' selected':'')+'>تُحوَّل مع المنتجات</option><option value="courier"'+(q.feeTo==='courier'?' selected':'')+'>تُدفع للمندوب أو الشركة</option></select></label><label class="op" style="display:block"><span>🧾 الاسم أو الرقم الذي يجب أن يظهر في الإيصال<small>اكتبه كما يظهر في إيصال البنك، مثل IMAD WAHI أو رقم الهاتف. للبدائل افصل بفاصلة. إذا تركته فارغًا فلن يُفحص.</small></span><input class="in" data-o="rcWho" dir="ltr" style="margin-top:6px" value="'+esc(q.rcWho||'')+'"></label>':'')+'<div class="op" style="display:block"><b>خانات صفحة العميل</b><small style="display:block;color:#6b7280">الاسم والهاتف ثابتان لأن الطلب لا يصل بدونهما.</small></div><label class="op"><span>📍 العنوان</span><select data-o="ad"><option value="1"'+(+q.ad===1?' selected':'')+'>إلزامي</option><option value="2"'+(+q.ad===2?' selected':'')+'>اختياري</option><option value="0"'+(+q.ad===0?' selected':'')+'>مخفي</option></select></label><label class="op"><span>📝 الملاحظة</span><input type="checkbox" data-o="nt"'+(q.nt!==false?' checked':'')+'></label><label class="op"><span>🚚 التوصيل بمندوب</span><input type="checkbox" data-o="mc"'+(q.mc!==false?' checked':'')+'></label><label class="op"><span>🏢 الاستلام من مكتب شركة التوصيل</span><input type="checkbox" data-o="mo"'+(q.mo?' checked':'')+'></label><label class="op"><span>🏷️ خانة شركة التوصيل</span><select data-o="co"><option value="0"'+(+q.co===0?' selected':'')+'>مخفية</option><option value="1"'+(+q.co===1?' selected':'')+'>اختيارية</option><option value="2"'+(+q.co===2?' selected':'')+'>إلزامية</option></select></label>'+(+q.co?'<label class="op" style="display:block"><span>الشركات التي تتعامل معها<small>افصل بينها بفاصلة ليختار العميل منها. إذا تركتها فارغة فسيكتب العميل اسم الشركة.</small></span><input class="in" data-o="coList" style="margin-top:6px" value="'+esc(q.coList||'')+'"></label>':'')+'<label class="op"><span>السماح للعميل بإضافة منتجات أخرى<small>يظهر له زر للبحث في بقية منتجاتك.</small></span><input type="checkbox" data-o="x"'+(q.x?' checked':'')+'></label>'+
   '<label class="op"><span>الاستلام من المحل<small>يظهر للعميل خيار «استلام من المحل» بلا رسوم توصيل.</small></span><input type="checkbox" data-o="pk"'+(q.pk?' checked':'')+'></label>'+
   '<label class="op"><span>صلاحية الرابط</span><select data-o="exp"><option value="0"'+(q.exp==='0'?' selected':'')+'>دائم</option><option value="1"'+(q.exp==='1'?' selected':'')+'>يوم واحد</option><option value="7"'+(q.exp==='7'?' selected':'')+'>أسبوع</option><option value="30"'+(q.exp==='30'?' selected':'')+'>شهر</option></select></label>'+
   '<label class="op"><span>أقصى كمية لكل منتج</span><input type="number" min="1" max="50" data-o="max" value="'+(+q.max||20)+'"></label>'+
   '<label class="op" style="display:block"><span>رسالة الواتساب</span><textarea class="in" data-o="msg" rows="2" style="margin-top:6px">'+esc(q.msg||defMsg())+'</textarea></label>'+
   (S.pubAt&&!q.off?'<label class="op"><span>إيقاف كل الروابط السريعة<small>للطوارئ: تتوقف كل الروابط التي أرسلتها حتى تعيد تشغيلها.</small></span><input type="checkbox" data-o="off"></label>':'')+
   (S.pubAt?'<label class="op"><span>عرض المتجر الكامل لمن يفتح رابط محلك العام</span><input type="checkbox" data-o="full"'+(q.only?'':' checked')+'></label>':'')+'</details>';
  h+=recent();
  if(V.err)h='<div class="bad">'+esc(V.err)+'</div>'+h;
  return h}
function defMsg(){return 'أهلًا بك، يمكنك طلب ما تريد من «'+(bizName()||'محلنا')+'» بسهولة عبر هذا الرابط:'}
function recent(){var R=Q().recent||[];if(!R.length)return '';
  return '<div class="bx"><h3>🕘 روابطي الأخيرة</h3>'+R.map(function(r,i){return '<div class="rc"><span><b>'+esc(r.l||(r.n+' منتج'))+'</b><small>'+esc(r.at)+(r.l?' · '+esc(r.n)+' منتج':'')+'</small></span><button type="button" data-a="rwa" data-i="'+i+'">واتساب</button><button type="button" data-a="rcp" data-i="'+i+'">نسخ</button></div>'}).join('')+'</div>'}
function footMake(){var n=selKeys().length,ok=(V.catLink&&V.cat&&V.mode==='free')||(n>0&&n<=30);
  return '<button type="button" class="go" data-a="make"'+(ok&&!V.busy?'':' disabled')+'>'+(V.busy?'⏳ '+esc(V.busy):'⚡ إنشاء الرابط')+'</button>'}
function viewRes(){var r=V.res,q=Q(),h='<div class="okk"><div>✅</div><b>رابطك جاهز</b><small style="color:#6b7280">'+esc(r.sum)+'</small></div><div class="url">'+esc(r.url)+'</div>'+
  '<div class="sh"><a class="wa" target="_blank" rel="noopener" href="https://wa.me/?text='+encodeURIComponent((q.msg||defMsg())+'\n'+r.url)+'">💬 إرسال عبر واتساب</a>'+
  '<button type="button" data-a="copy">📋 نسخ الرابط</button><button type="button" data-a="qr">🔳 رمز QR</button><button type="button" data-a="prev" style="grid-column:1/-1;background:#fff;color:#0f1f3d;border:1.5px solid #d9dde5">👁️ معاينة ما سيراه العميل</button></div>';
  if(V.showQr)h+='<div class="bx qr" style="margin-top:12px">'+qrImg(r.url)+'</div>';
  var cs=custs();if(cs.length){h+='<div class="bx" style="margin-top:12px"><h3>📤 إرسال مباشر لعميل</h3><input class="in" type="search" data-v="cq" placeholder="🔎 اسم العميل أو رقمه" value="'+esc(V.cq)+'"><div id="e173C">'+custList()+'</div></div>'}
  return h}
function custs(){var d=db();return (Array.isArray(d.customers)?d.customers:[]).filter(function(c){return c&&String(c.phone||'').replace(/\D/g,'').length>=8})}
function custList(){var s=V.cq.trim().toLowerCase(),L=custs().filter(function(c){return !s||String(c.name||'').toLowerCase().indexOf(s)>-1||String(c.phone||'').indexOf(s)>-1}).slice(0,6);
  return L.map(function(c){return '<button type="button" class="cu" data-a="cwa" data-p="'+esc(String(c.phone).replace(/\D/g,''))+'"><span>'+esc(c.name||'عميل')+'</span><span dir="ltr" style="color:#6b7280">'+esc(c.phone)+'</span></button>'}).join('')||'<p style="color:#6b7280;margin:8px 0 0">لا يوجد عميل بهذا الاسم.</p>'}
function waNum(s){s=String(s||'').replace(/\D/g,'');return s.length===8?'968'+s:s}
function qrImg(u){try{var g=window.EMDqr418(0,'L');g.addData(u);g.make();var d=g.createDataURL(5,3);return '<img alt="رمز QR للرابط" src="'+d+'"><p style="margin:8px 0 0"><a href="'+d+'" download="'+esc((V.res.l||'quick-order').replace(/\s+/g,'-'))+'-qr.gif" style="color:#0f1f3d;font-weight:800">⬇️ حفظ الصورة</a></p><p style="color:#6b7280;font-size:12.5px;margin:4px 0 0">اطبعه على الفاتورة أو ضعه في المحل.</p>'}catch(e){return '<p>تعذّر إنشاء الرمز لطول الرابط. استخدم رابط القسم بدل تحديد منتجات كثيرة.</p>'}}
function paint(){var w=$('e173');if(!w)return;var b=w.querySelector('.bd'),f=w.querySelector('.ft'),y=b.scrollTop,ls=b.querySelector('.lst'),ly=ls?ls.scrollTop:0;
  if(V.step==='res'){b.innerHTML=viewRes();f.innerHTML='<button type="button" class="go2" data-a="new" style="margin:0">＋ إنشاء رابط آخر</button>'}
  else{b.innerHTML=viewMake();f.innerHTML=logged()&&products().length&&ST()?footMake():''}
  b.scrollTop=y;ls=b.querySelector('.lst');if(ls)ls.scrollTop=ly}
function soft(){var w=$('e173');if(!w)return;var f=w.querySelector('.ft');if(V.step==='make'&&f.innerHTML)f.innerHTML=footMake()}

function onClick(e){var t=e.target.closest('[data-a]');if(!t)return;var a=t.getAttribute('data-a'),k=t.getAttribute('data-k');
  if(a==='close'){close();return}
  if(a==='login'){close();if(window.EMDStoreV411)window.EMDStoreV411.open('pub');return}
  if(a==='mode'){V.mode=t.getAttribute('data-m');if(V.mode==='ready')V.catLink=false;paint();return}
  if(a==='cat'){V.cat=t.getAttribute('data-c');if(!V.cat)V.catLink=false;paint();return}
  if(a==='pick'){if(e.target.closest('.qty'))return;var p=products().filter(function(x){return x.k===k})[0];if(p&&p.stock<=0&&!V.sel[k]){toast('هذا المنتج نفدت كميته');return}V.sel[k]=!V.sel[k];paint();return}
  if(a==='qu'){V.qty[k]=Math.min(50,(V.qty[k]||1)+1);paint();return}
  if(a==='qd'){V.qty[k]=Math.max(1,(V.qty[k]||1)-1);paint();return}
  if(a==='all'){shown(products()).forEach(function(p){if(p.stock>0)V.sel[p.k]=true});paint();return}
  if(a==='none'){V.sel={};paint();return}
  if(a==='make'){make();return}
  if(a==='new'){V.step='make';V.res=null;V.showQr=false;V.sel={};V.qty={};V.label='';V.catLink=false;paint();$('e173').querySelector('.bd').scrollTop=0;return}
  if(a==='copy'){copy(V.res.url);return}
  if(a==='qr'){V.showQr=!V.showQr;paint();return}
  if(a==='prev'){window.open(V.res.url,'_blank');return}
  if(a==='cwa'){window.open('https://wa.me/'+waNum(t.getAttribute('data-p'))+'?text='+encodeURIComponent((Q().msg||defMsg())+'\n'+V.res.url),'_blank');return}
  if(a==='rwa'||a==='rcp'){var r=(Q().recent||[])[+t.getAttribute('data-i')];if(!r)return;if(a==='rcp')copy(r.u);else window.open('https://wa.me/?text='+encodeURIComponent((Q().msg||defMsg())+'\n'+r.u),'_blank');return}}
function copy(u){try{navigator.clipboard.writeText(u).then(function(){toast('✓ تم نسخ الرابط')},function(){prompt('انسخ الرابط:',u)})}catch(x){prompt('انسخ الرابط:',u)}}
function onInput(e){var v=e.target.getAttribute('data-v'),o=e.target.getAttribute('data-o');
  if(v==='q'){V.q=e.target.value;var s=e.target.selectionStart;paint();var f=$('e173').querySelector('[data-v="q"]');if(f){f.focus();try{f.setSelectionRange(s,s)}catch(x){}}return}
  if(v==='label'){V.label=e.target.value;return}
  if(v==='slug'){V.slug=e.target.value.toLowerCase().replace(/\s+/g,'-');soft();return}
  if(v==='cq'){V.cq=e.target.value;var c=$('e173C');if(c)c.innerHTML=custList();return}
  if(o==='msg'){var q=Q();q.msg=e.target.value;setQ(q);return}
  if(o==='rcWho'||o==='coList'){var q3=Q();q3[o]=e.target.value;setQ(q3);return}
  if(o==='max'){var q2=Q();q2.max=Math.max(1,Math.min(50,Math.floor(num(e.target.value))||20));setQ(q2);return}}
function onChange(e){var v=e.target.getAttribute('data-v'),o=e.target.getAttribute('data-o');
  if(v==='catLink'){V.catLink=e.target.checked;paint();return}
  if(v==='full'){V.full=e.target.checked;return}
  if(v==='slug'){paint();return}
  if(o){var q=Q();V.optOpen=true;
    if(o==='x'||o==='pk'||o==='fee')q[o]=e.target.checked;
    else if(o==='cod'||o==='bank'){var py=pays(q);py[o==='cod'?'c':'b']=e.target.checked;if(!py.c&&!py.b){e.target.checked=true;toast('يجب إبقاء طريقة دفع واحدة على الأقل');return}q.cod=py.c;q.bank=py.b}
    else if(o==='exp')q.exp=e.target.value;
    else if(o==='rcWho'||o==='coList'){setQ(q);return}
    else if(o==='nt'||o==='mc'||o==='mo')q[o]=e.target.checked;
    else if(o==='feeTo'||o==='ad'||o==='co')q[o]=e.target.value;
    else if(o==='full'){q.only=!e.target.checked;setQ(q);applyFlags('✓ تم تحديث إعداد المتجر العام');return}
    else if(o==='off'){q.off=e.target.checked;setQ(q);applyFlags(q.off?'⏸️ أُوقفت كل الروابط السريعة':'▶️ عادت الروابط السريعة للعمل');return}
    setQ(q);paint();return}}

/* النشر: يستعمل زر النشر الموجود في «متجري» وينتظر نتيجته */
function publishWait(){var S=ST(),before=S.pubRows;return new Promise(function(ok,no){
  S.pubErr='';window.EMDStoreV411.publish();var n=0,iv=setInterval(function(){n++;
    if(S.pubRows&&S.pubRows!==before){clearInterval(iv);ok()}else if(S.pubErr){clearInterval(iv);no(new Error(S.pubErr))}else if(n>300){clearInterval(iv);no(new Error('استغرق النشر وقتًا طويلًا. تحقق من الاتصال وأعد المحاولة.'))}},400)})}
function applyFlags(msg){var S=ST();if(!S||!S.pubAt||!logged()){paint();return}
  V.busy='جارٍ التحديث…';paint();publishWait().then(function(){var q=Q();q.pubSig=flags(q);setQ(q);V.busy=false;paint();toast(msg)},function(e){V.busy=false;V.err=e.message;paint()})}
function make(){if(V.busy)return;var S=ST(),q=Q(),L=products(),K=selKeys(),catMode=V.catLink&&V.cat&&V.mode==='free';V.err='';
  if(!S.pubAt){if(!slugOk(V.slug)){V.err='اكتب اسم رابط صحيحًا لمحلك أولًا.';paint();return}S.slug=V.slug;q.only=!V.full;setQ(q)}
  var need=catMode?L.filter(function(p){return p.cat===V.cat}).map(function(p){return p.k}):K;
  if(!need.length){V.err='لا توجد منتجات في هذا القسم.';paint();return}
  if(!q.fee&&!q.zf){q.zf=true;setQ(q)}
  var miss=need.filter(function(k){return !pubd(k)}),flg=flags(q)!==q.pubSig&&(q.pk||q.only||q.off||q.zf||q.pubSig);
  var go=function(){var u={},l=V.label.trim();
    if(catMode)u.c=V.cat;else{u.k=K;if(V.mode==='ready')u.r=K.map(function(k){return V.qty[k]||1})}
    if(q.x)u.x=1;if(q.pk)u.p=1;if(!q.fee)u.d=0;var py=pays(q),S0=ST()||{};if(py.c!==(S0.cod!==false)||py.b!==!!S0.bank)u.y=(py.c?'c':'')+(py.b?'b':'');if(+q.exp>0)u.e=today()+(+q.exp);if(+q.max&&+q.max!==20)u.m=+q.max;if(l)u.l=l;
    var hs=L.map(function(p){return qh173(p.k)}),uniq=hs.every(function(h,i){return hs.indexOf(h)===i}),qs;
    if(uniq){qs=(catMode?'~'+qh173(V.cat):K.map(function(k,i){var r=u.r&&u.r[i];return qh173(k)+(r?'*'+r:'')}).join('.'));
      var f=[];if(u.x)f.push('x');if(u.p)f.push('p');if(u.d===0)f.push('d0');if(u.y)f.push('y'+u.y);if(u.e)f.push('e'+u.e);if(u.m)f.push('m'+u.m);if(f.length)qs+='!'+f.join('.');
      qs=qs+(l?'&l='+l.replace(/[&#%?+=\/]/g,'').trim().replace(/\s+/g,'_'):'')}else qs=b64u(u);
    var url=URL0+encodeURIComponent(S.pubSlug||S.slug)+'&q='+qs,cnt=catMode?need.length:K.length;
    var sum=(V.mode==='ready'?'طلب جاهز':'اختيار حر')+' · '+(catMode?'القسم «'+V.cat+'»':cnt+' منتج')+(+q.exp>0?' · صالح '+({1:'يومًا',7:'أسبوعًا',30:'شهرًا'})[q.exp]:'');
    V.res={url:url,sum:sum,l:l};V.step='res';V.busy=false;
    var R=q.recent||[];var d=new Date();R.unshift({u:url,l:l,n:cnt,at:d.getDate()+'/'+(d.getMonth()+1)+' · '+(V.mode==='ready'?'طلب جاهز':'اختيار حر')});q.recent=R.slice(0,10);setQ(q);paint();$('e173').querySelector('.bd').scrollTop=0};
  if(!miss.length&&!flg&&S.pubAt){go();return}
  miss.forEach(function(k){var o=S.prod[k]||(S.prod[k]={on:false,desc:'',old:''});o.on=true});window.EMDStoreV411.save();
  V.busy=miss.length?'جارٍ رفع '+miss.length+' منتج إلى السحابة…':'جارٍ تجهيز الرابط…';paint();
  publishWait().then(function(){var q2=Q();q2.pubSig=flags(q2);setQ(q2);q=q2;go()},function(e){V.busy=false;V.err=e.message;paint()})}

})();

})();
