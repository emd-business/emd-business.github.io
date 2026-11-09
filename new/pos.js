/* مُولَّد بـ tools/port-pos.py من V448 وV419 وV420 وV449 وV451 وV434 وV442 وV443 وV444 وV450 وV439 وV421 — لا تعدّل هنا */
(function(){var s=document.createElement("style");s.textContent="\n/* الحاسوب والجهاز اللوحي الأفقي: شاشة البيع بعرض الشاشة والفاتورة ثابتة بجانب المنتجات */\n@media(min-width:900px){\n .emd113-ov{align-items:stretch!important}\n .emd113-sheet{width:100%!important;height:100%!important;max-width:none!important;border-radius:0!important}\n .emd113-cols.e448-pos{grid-template-columns:minmax(0,1fr) 420px!important;column-gap:16px;align-items:start}\n .e448-pos .e448-r{position:sticky;top:0;max-height:calc(100vh - 250px);overflow:auto;border-radius:16px}\n .e448-pos #emd113Pl{max-height:none!important}\n .e448-pos #emd113Pl.e419grid{grid-template-columns:repeat(auto-fill,minmax(132px,1fr))}\n .e448-see{display:none}\n}\n.e448-pos .e448-l,.e448-pos .e448-r{min-width:0}\n/* أزرار الأدوات والتنبيهات العائمة لا تغطي شاشة البيع */\nbody:has(#emd113Ov.show) #emdQuickMenuFinal,body:has(#emd113Ov.show) #emdNotifyBadgeV317{display:none!important}\n.e448-keys{display:none;margin-inline-start:auto;font-size:12px;color:#64748b;white-space:nowrap}\n.e448-keys kbd{border:1px solid #d6dce6;border-bottom-width:2px;border-radius:6px;padding:0 6px;font-family:inherit;background:#fff;color:#18202a;font-size:11.5px}\n@media(min-width:900px) and (hover:hover){.e448-keys{display:inline}}\n/* بيانات العميل تُطوى في سطر صغير حتى يحتاجها البائع */\n.e448-cadd{display:none;width:100%;min-height:44px;border:0;background:transparent;font:inherit;font-size:14px;font-weight:700;color:#1e3a8a;text-align:start;cursor:pointer;padding:0 4px}\n.e448-cadd small{font-weight:400;color:#64748b}\n.e448-cust:not(.open){padding:4px 8px;border-style:dashed}\n.e448-cust:not(.open)>*{display:none}\n.e448-cust:not(.open)>.e448-cadd{display:block}\n/* الشريط السفلي: الضغط على عدد الأصناف ينقل إلى الفاتورة */\n#emd113Ft .t[data-a=\"e448cart\"]{cursor:pointer}\n.e448-see{color:#1e3a8a;font-weight:700;font-size:13px;margin-inline-start:4px}\n/* مفتاح الفواتير: البيع المباشر / الطلبات */\n.e448-seg{display:grid;grid-template-columns:1fr 1fr;gap:4px;background:#e7ebf3;border-radius:12px;padding:4px;margin-bottom:10px}\n.e448-seg button{min-height:42px;border:0;border-radius:9px;background:transparent;font:inherit;font-size:14px;font-weight:700;color:#475569;cursor:pointer}\n.e448-seg button[aria-pressed=\"true\"]{background:#fff;color:#111827;box-shadow:0 1px 4px rgba(15,23,42,.15)}\n.e448-ro{margin:10px 0 4px;font-size:12.5px;color:#475569;background:#eef2fb;border-radius:10px;padding:8px 10px;text-align:center}\n.e448-st{font-size:12px;color:#475569}\n\n\nbody[data-emd416m=\"online\"] .e419only,body:not([data-emd416m]) .e419only{display:none!important}\n.e419-tools{display:flex;gap:8px;align-items:center;margin-top:8px}\n.e419-scan{flex:1;min-height:44px;border:0;border-radius:12px;background:#1e3a8a;color:#fff;font:inherit;font-weight:800;font-size:14.5px;cursor:pointer;box-shadow:inset 0 -3px 0 #f59e0b}\n.e419-vw{display:flex;border:1px solid #dfe3e8;border-radius:12px;overflow:hidden;flex:none}\n.e419-vw button{min-height:44px;padding:0 12px;border:0;background:#fff;font:inherit;font-size:13px;font-weight:700;color:#475569;cursor:pointer}\n.e419-vw button[aria-pressed=\"true\"]{background:#eef2ff;color:#1e3a8a}\n.e419-cats{display:flex;gap:6px;overflow-x:auto;padding:8px 0 2px;scrollbar-width:none}\n.e419-cats button{flex:none;min-height:36px;padding:0 14px;border-radius:999px;border:1px solid #dfe3e8;background:#fff;font:inherit;font-size:13px;font-weight:700;color:#334155;cursor:pointer}\n.e419-cats button[aria-pressed=\"true\"]{background:#1e3a8a;border-color:#1e3a8a;color:#fff}\n#emd113Pl.e419grid{grid-template-columns:repeat(auto-fill,minmax(104px,1fr));max-height:380px}\n#emd113Pl.e419grid .emd113-p{flex-direction:column;align-items:stretch;gap:4px;padding:6px;min-height:0;position:relative;text-align:right}\n#emd113Pl.e419grid .emd113-img{width:100%;height:auto;aspect-ratio:1;border-radius:10px;font-size:30px}\n#emd113Pl.e419grid .emd113-p .n b{font-size:12.5px;white-space:normal;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;min-height:34px}\n#emd113Pl.e419grid .emd113-p .n small{font-size:11px}\n#emd113Pl.e419grid .emd113-p .pr{font-size:13.5px;color:#1e3a8a}\n#emd113Pl.e419grid .emd113-add{position:absolute;top:10px;left:10px;width:30px;height:30px;font-size:18px;border-radius:9px;background:#1e3a8a;box-shadow:0 2px 6px rgba(15,23,42,.25)}\n.e419-tender{margin-top:10px;display:flex;flex-direction:column;gap:6px}\n.e419-tender label{font-size:13px;font-weight:700;color:#334155}\n.e419-tender input,.e419-sr input,.e419-sr select,.e419-in{width:100%;box-sizing:border-box;border:1px solid #dfe3e8;border-radius:12px;padding:10px 12px;font-size:16px;background:#fff;min-height:46px;font-family:inherit}\n.e419-sug{display:flex;gap:6px;flex-wrap:wrap}\n.e419-sug button{min-height:40px;padding:0 12px;border-radius:10px;border:1px solid #c7d2fe;background:#eef2ff;color:#1e3a8a;font:inherit;font-weight:800;font-size:13.5px;cursor:pointer}\n.e419-change{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-radius:12px;background:#172554;color:#fff;box-shadow:inset 0 -3px 0 #f59e0b}\n.e419-change span{font-size:13.5px;font-weight:700}.e419-change b{font-size:24px}\n.e419-change.bad{background:#7f1d1d;box-shadow:none}\n.e419-split{margin-top:10px;display:flex;flex-direction:column;gap:8px}\n.e419-sr{display:grid;grid-template-columns:1.1fr 1fr;gap:8px}\n.e419-fill{min-height:40px;border:1px dashed #94a3b8;border-radius:10px;background:transparent;color:#1e3a8a;font:inherit;font-weight:700;font-size:13px;cursor:pointer}\n.e419-warn{font-size:13px;font-weight:700;color:#b45309}\n.e419-toast{position:fixed;left:50%;top:16px;transform:translateX(-50%);z-index:2147483647;background:#7f1d1d;color:#fff;padding:10px 16px;border-radius:12px;font-size:14px;font-weight:700;max-width:calc(100% - 32px);text-align:center}\n.e419-toast.ok{background:#172554;box-shadow:inset 0 -3px 0 #f59e0b}\n.e419-ov{position:fixed;inset:0;z-index:2147483646;background:rgba(15,23,42,.55);display:flex;align-items:flex-end;justify-content:center;direction:rtl}\n.e419-win{width:min(480px,100%);max-height:85vh;overflow:auto;background:#fff;border-radius:22px 22px 0 0;padding:16px;display:flex;flex-direction:column;gap:10px}\n.e419-win h3{margin:0;font-size:18px}.e419-win p{margin:0;font-size:13.5px;line-height:1.7;color:#475569}\n.e419-ll{display:flex;flex-direction:column;gap:6px;max-height:44vh;overflow:auto}\n.e419-ll button{display:flex;justify-content:space-between;gap:8px;min-height:48px;padding:0 12px;border:1px solid #e5e7ef;border-radius:12px;background:#fff;font:inherit;font-size:14.5px;font-weight:600;cursor:pointer;align-items:center;text-align:right}\n.e419-ll small{color:#64748b}\n.e419-empty{padding:14px;text-align:center;color:#64748b}\n.e419-cancel{min-height:46px;border:1px solid #e5e7ef;border-radius:12px;background:#fff;font:inherit;font-weight:700;cursor:pointer}\n.e419-cam{position:fixed;inset:0;z-index:2147483646;background:#000;display:flex;flex-direction:column}\n.e419-cam video{flex:1;width:100%;object-fit:cover}\n.e419-frame{position:absolute;left:12%;right:12%;top:32%;height:22%;border:3px solid #f59e0b;border-radius:16px;box-shadow:0 0 0 9999px rgba(0,0,0,.35)}\n.e419-cbar{display:flex;align-items:center;gap:10px;padding:14px 16px 22px;background:#0f172a;color:#fff;font-weight:700;direction:rtl}\n.e419-cbar span{flex:1}.e419-cbar button{min-height:46px;padding:0 18px;border:0;border-radius:12px;background:#fff;color:#0f172a;font:inherit;font-weight:800;cursor:pointer}\n.e419-scan:focus-visible,.e419-vw button:focus-visible,.e419-cats button:focus-visible,.e419-sug button:focus-visible,.e419-fill:focus-visible,.e419-ll button:focus-visible{outline:3px solid #f59e0b;outline-offset:2px}\n\n\n.emd113-cols{grid-template-columns:minmax(0,1fr)}.emd113-cols>*{min-width:0}\n@media(min-width:860px){.emd113-cols{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}}\n.e420-cols{display:flex!important;flex-direction:column}\n.e420-card h3{margin:0 0 6px}\n.e420-p{margin:4px 0 8px;font-size:13px;line-height:1.7;color:#5b6475}\n.e420-l{display:flex;flex-direction:column;gap:4px;font-size:13px;font-weight:700;color:#334155;margin-bottom:6px}\n.e420-go{width:100%;min-height:50px;margin-top:10px;border:0;border-radius:14px;background:#1e3a8a;color:#fff;font:inherit;font-weight:800;font-size:15px;cursor:pointer;box-shadow:inset 0 -4px 0 #f59e0b}\n.e420-st{display:flex;align-items:center;gap:8px;margin-bottom:10px}.e420-st .dot,.e420-chip .dot{width:10px;height:10px;border-radius:50%;background:#16a34a;flex:none}.e420-st small{color:#64748b;font-size:12.5px}\n.e420-g{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}\n.e420-g>div{background:#f8fafc;border:1px solid #eceff3;border-radius:12px;padding:8px 10px;display:flex;flex-direction:column;gap:2px}.e420-g span{font-size:11.5px;color:#64748b}.e420-g b{font-size:15px}\n.e420-exp{margin-top:10px;background:#172554;color:#fff;border-radius:14px;padding:12px 14px;display:grid;grid-template-columns:1fr auto;gap:2px 8px;box-shadow:inset 0 -4px 0 #f59e0b}\n.e420-exp span{font-weight:700;font-size:13.5px}.e420-exp b{font-size:20px;grid-row:span 2;align-self:center}.e420-exp small{color:#c7d2fe;font-size:11.5px}\n.e420-diff{margin-top:8px;padding:10px 12px;border-radius:12px;font-weight:800;font-size:15px}.e420-diff.ok{background:#dcfce7;color:#14532d}.e420-diff.up{background:#dbeafe;color:#1e3a8a}.e420-diff.bad{background:#fee2e2;color:#7f1d1d}\n.e420-row{width:100%;display:flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 4px;border:0;border-bottom:1px solid #eef0f5;background:none;font:inherit;cursor:pointer;text-align:right}\n.e420-row span:first-child{display:flex;flex-direction:column;gap:2px}.e420-row small{color:#64748b;font-size:12px}.e420-row .ok{color:#15803d;font-weight:800}.e420-row .bad{color:#b91c1c;font-weight:800}\n.e420-set summary{cursor:pointer;font-weight:800;min-height:28px}\n.e420-ck{display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:700;margin:10px 0}.e420-ck input{width:20px;height:20px;accent-color:#1e3a8a}\n.e420-g2{display:grid;grid-template-columns:1fr 1.4fr;gap:8px}\n.e420-held{display:flex;gap:8px;align-items:center;overflow-x:auto;padding:4px 2px 10px;scrollbar-width:none}\n.e420-held>span:first-child{flex:none;font-weight:800;font-size:13px;color:#b45309}\n.e420-hc{flex:none;display:flex;align-items:stretch;border:2px solid #f59e0b;border-radius:12px;overflow:hidden;background:#fffbeb}\n.e420-hc button{border:0;background:none;font:inherit;cursor:pointer;padding:6px 10px;display:flex;flex-direction:column;align-items:flex-start;gap:1px;min-height:44px}\n.e420-hc b{font-size:13px}.e420-hc small{font-size:11px;color:#78350f}.e420-hc .d{color:#b91c1c;font-size:14px;justify-content:center;border-inline-start:1px solid #fde68a;padding:0 10px}\n.e420-hold{width:100%;min-height:42px;margin:0 0 8px;border:1px dashed #b45309;border-radius:12px;background:#fffbeb;color:#92400e;font:inherit;font-weight:800;font-size:14px;cursor:pointer}\n.e420-chip{display:flex;align-items:center;gap:8px;width:100%;min-height:46px;padding:0 14px;border:1px solid #e5e7ef;border-radius:14px;background:#fff;font:inherit;font-size:13px;color:#334155;cursor:pointer;text-align:right}\n.e420-chip span:nth-child(2){flex:1}.e420-chip b{color:#1e3a8a}.e420-chip.off .dot{background:#94a3b8}\n#e420R{position:fixed;inset:0;z-index:2147483646;display:none;align-items:center;justify-content:center;background:rgba(15,23,42,.55);direction:rtl;padding:12px;box-sizing:border-box}\n#e420R.show{display:flex}\n#e420R .win{width:min(440px,100%);max-height:94vh;overflow:auto;background:#fff;border-radius:22px;padding:16px;display:flex;flex-direction:column;gap:12px}\n#e420R .hd{display:flex;align-items:center;gap:10px}#e420R h2{margin:0;font-size:18px;flex:1}\n#e420R .x{width:40px;height:40px;border-radius:12px;border:1px solid #e5e7ef;background:#fff;font:inherit;cursor:pointer}\n#e420R .pv{background:#eef0f5;border-radius:16px;padding:14px;max-height:56vh;overflow:auto;display:flex;justify-content:center}\n#e420R .pv img{width:min(100%,300px);height:auto;background:#fff;box-shadow:0 4px 14px rgba(15,23,42,.18)}\n#e420R .ft{display:grid;grid-template-columns:1fr 1fr;gap:8px}#e420R .ft button{min-height:48px;border-radius:14px;font:inherit;font-size:14px;font-weight:700;cursor:pointer}\n#e420R .pr{grid-column:1/-1;border:0;color:#fff;background:#1e3a8a;box-shadow:inset 0 -4px 0 #f59e0b}#e420R .sc{border:1px solid #e5e7ef;background:#fff}\n#e420R .hint{margin:0;font-size:12px;color:#64748b}\n#e420Print{display:none}\n.e420-toast{position:fixed;left:50%;top:16px;transform:translateX(-50%);z-index:2147483647;background:#172554;color:#fff;padding:10px 16px;border-radius:12px;font-size:14px;font-weight:700;box-shadow:inset 0 -3px 0 #f59e0b;max-width:calc(100% - 32px);text-align:center}\n.e420-toast.bad{background:#7f1d1d;box-shadow:none}\n.e420-go:focus-visible,.e420-row:focus-visible,.e420-hc button:focus-visible,.e420-hold:focus-visible,.e420-chip:focus-visible,#e420R button:focus-visible{outline:3px solid #f59e0b;outline-offset:2px}\n\n\nbody.e449-nocats #emd113Ov .e419-cats,body.e449-nocam #emd113Ov .e419-scan,body.e449-custhide #emd113Ov .e448-cust,body.e449-nonote #emd113Ov .e449-note,body.e449-nohold #emd113Ov .e420-hold,body.e449-nokeys #emd113Ov .e448-keys,body.e449-noset #emd113Ov .e449-gear{display:none!important}\n#emd113Ov details.e420-set{display:none!important}\n.e449-gear{font-size:17px}\n.e449-link{width:100%;min-height:48px;border:1px dashed #94a3b8;border-radius:14px;background:#fff;color:#1e3a8a;font:inherit;font-weight:800;font-size:14px;cursor:pointer}\n.e449-rs{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}\n.e449-rs button{min-height:38px;padding:0 12px;border:1px solid #d6dce6;border-radius:20px;background:#fff;font:inherit;font-size:13px;font-weight:700;color:#334155;cursor:pointer}\n.e449-rs button[aria-pressed=\"true\"]{background:#1e3a8a;border-color:#1e3a8a;color:#fff}\n.e449-2{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}\n.e449-2 button,.e449-dr{min-height:48px;border-radius:14px;font:inherit;font-weight:800;font-size:14px;cursor:pointer}\n.e449-2 .in{border:0;background:#15803d;color:#fff}.e449-2 .out{border:0;background:#b45309;color:#fff}\n.e449-dr{width:100%;margin-top:10px;border:1px solid #1e3a8a;background:#eef2fb;color:#1e3a8a}\n.e449-ml{margin-top:10px;border-top:1px solid #eef0f5}\n.e449-mr{display:flex;align-items:center;gap:8px;padding:8px 2px;border-bottom:1px solid #f1f3f7;font-size:13px}\n.e449-mr span{flex:1;display:flex;flex-direction:column;gap:1px}.e449-mr small{color:#64748b;font-size:11.5px}\n.e449-mr b.in{color:#15803d}.e449-mr b.out{color:#b45309}\n.e449-mr button{width:36px;height:36px;border:1px solid #e5e7ef;border-radius:10px;background:#fff;color:#b91c1c;font:inherit;cursor:pointer}\n#e449{position:fixed;inset:0;z-index:2147483640;display:none;align-items:flex-end;justify-content:center;background:rgba(15,23,42,.55);direction:rtl;font-family:inherit}\n#e449.show{display:flex}\n#e449 .win{width:min(640px,100%);max-height:94vh;display:flex;flex-direction:column;background:#f5f7fb;border-radius:22px 22px 0 0;overflow:hidden}\n@media(min-width:700px){#e449{align-items:center}#e449 .win{border-radius:22px}}\n#e449 .hd{display:flex;align-items:center;gap:10px;padding:14px 16px;background:#fff;border-bottom:1px solid #e5e7ef}\n#e449 .hd h2{margin:0;flex:1;font-size:18px;color:#172554}\n#e449 .x{width:40px;height:40px;border-radius:12px;border:1px solid #e5e7ef;background:#fff;font:inherit;font-size:16px;cursor:pointer}\n#e449 .bd{overflow:auto;padding:12px 14px 18px;display:flex;flex-direction:column;gap:12px}\n#e449 .intro{margin:0;font-size:13px;color:#475569;line-height:1.7}\n#e449 .c{background:#fff;border:1px solid #e5e7ef;border-radius:16px;padding:6px 14px 10px}\n#e449 .c h3{margin:8px 0 2px;font-size:15px;color:#172554}\n#e449 .row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid #f1f3f7}\n#e449 .row:last-child{border-bottom:0}\n#e449 .row.col{flex-direction:column;align-items:stretch}\n#e449 .row>span{display:flex;flex-direction:column;gap:2px;min-width:0}\n#e449 .row b{font-size:14px;color:#18202a}#e449 .row small{font-size:12px;color:#64748b;line-height:1.5}\n#e449 .sw{position:relative;flex:none;width:50px;height:30px}\n#e449 .sw input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:pointer;z-index:1}\n#e449 .sw i{position:absolute;inset:0;border-radius:20px;background:#cbd5e1;transition:background .15s}\n#e449 .sw i:after{content:'';position:absolute;top:3px;right:3px;width:24px;height:24px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.25);transition:transform .15s}\n#e449 .sw input:checked+i{background:#1e3a8a}#e449 .sw input:checked+i:after{transform:translateX(-20px)}\n#e449 .sw input:focus-visible+i{outline:3px solid #f59e0b;outline-offset:2px}\n#e449 .seg{display:flex;flex-wrap:wrap;gap:6px}\n#e449 .seg button{min-height:40px;padding:0 12px;border:1px solid #d6dce6;border-radius:12px;background:#fff;font:inherit;font-size:13px;font-weight:700;color:#334155;cursor:pointer}\n#e449 .seg button[aria-pressed=\"true\"]{background:#172554;border-color:#172554;color:#fff;box-shadow:inset 0 -3px 0 #c9a227}\n#e449 .seg button:disabled{opacity:.4;cursor:not-allowed}\n#e449 .in2{display:grid;grid-template-columns:1fr 1.4fr;gap:8px;margin-top:8px}\n#e449 label.f{display:flex;flex-direction:column;gap:4px;font-size:12.5px;font-weight:700;color:#334155}\n#e449 input.t{height:44px;border:1px solid #d6dce6;border-radius:12px;padding:0 12px;font:inherit;font-size:14px;background:#fff;box-sizing:border-box;width:100%}\n#e449 .lnk{width:100%;min-height:44px;margin-top:6px;border:1px solid #d6dce6;border-radius:12px;background:#fff;font:inherit;font-size:13.5px;font-weight:700;color:#1e3a8a;cursor:pointer}\n#e449 .rst{min-height:46px;border:1px solid #fecaca;border-radius:14px;background:#fff;color:#b91c1c;font:inherit;font-weight:800;font-size:14px;cursor:pointer}\n#e449 button:focus-visible{outline:3px solid #f59e0b;outline-offset:2px}\n.e449-toast{position:fixed;left:50%;top:16px;transform:translateX(-50%);z-index:2147483647;background:#172554;color:#fff;padding:10px 16px;border-radius:12px;font-size:14px;font-weight:700;box-shadow:inset 0 -3px 0 #f59e0b;max-width:calc(100% - 32px);text-align:center;direction:rtl}\n.e449-toast.bad{background:#7f1d1d;box-shadow:none}\n\n\n.e451-q{display:flex;gap:6px;overflow-x:auto;padding:2px 0 8px;margin-top:8px;scrollbar-width:none}\n.e451-q::-webkit-scrollbar{display:none}\n.e451-q b{flex:none;align-self:center;font-size:12px;color:#64748b;font-weight:700}\n.e451-q button{flex:none;min-height:40px;max-width:170px;padding:0 12px;border:1px solid #f1d58a;border-radius:20px;background:#fffbeb;color:#172554;font:inherit;font-size:13px;font-weight:800;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.e451-q button:active{transform:scale(.97)}\n.e451-cp{display:flex;gap:6px;margin-top:6px;align-items:center}\n.e451-cp input{flex:1;min-width:0;text-transform:uppercase}\n.e451-cp button{flex:none;min-height:44px;padding:0 14px;border:1px solid #1e3a8a;border-radius:12px;background:#eef2fb;color:#1e3a8a;font:inherit;font-weight:800;cursor:pointer}\n.e451-cpok{display:flex;align-items:center;gap:8px;margin-top:6px;padding:8px 10px;border-radius:12px;background:#ecfdf5;border:1px solid #a7f3d0;color:#065f46;font-size:13px;font-weight:700}\n.e451-cpok span{flex:1}.e451-cpok button{border:0;background:none;color:#b91c1c;font:inherit;font-weight:800;cursor:pointer;min-height:32px}\n.e451-cpbad{margin-top:6px;color:#b91c1c;font-size:12.5px;font-weight:700}\n.e451-pinb{font-size:12px;color:#92400e;background:#fffbeb;border:1px solid #fde68a;border-radius:10px;padding:6px 10px;margin-top:6px}\n#e451Pin{position:fixed;inset:0;z-index:2147483646;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,.6);direction:rtl;font-family:inherit;padding:16px}\n#e451Pin .w{width:min(340px,100%);background:#fff;border-radius:20px;padding:18px;display:flex;flex-direction:column;gap:10px;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,.3)}\n#e451Pin h3{margin:0;color:#172554;font-size:17px}#e451Pin p{margin:0;color:#475569;font-size:13px;line-height:1.6}\n#e451Pin input{height:54px;border:1px solid #cbd5e1;border-radius:14px;text-align:center;font-size:26px;letter-spacing:12px;font-family:inherit}\n#e451Pin .er{color:#b91c1c;font-size:13px;font-weight:700;min-height:18px}\n#e451Pin .bt{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n#e451Pin .bt button{min-height:48px;border-radius:14px;font:inherit;font-weight:800;font-size:15px;cursor:pointer}\n#e451Pin .ok{border:0;background:#1e3a8a;color:#fff;box-shadow:inset 0 -3px 0 #c9a227}#e451Pin .no{border:1px solid #d6dce6;background:#fff;color:#334155}\n.e451-day summary{cursor:pointer;font-weight:800;color:#172554;font-size:15px;list-style:none;display:flex;align-items:center;gap:6px}\n.e451-day summary::-webkit-details-marker{display:none}\n.e451-day summary:after{content:'▾';margin-inline-start:auto;color:#64748b}\n.e451-day[open] summary:after{content:'▴'}\n.e451-k{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:10px 0}\n.e451-k div{background:#f5f7fb;border-radius:12px;padding:8px;text-align:center;display:flex;flex-direction:column;gap:2px}\n.e451-k span{font-size:11.5px;color:#64748b}.e451-k b{font-size:15px;color:#172554}\n.e451-h{display:flex;align-items:flex-end;gap:3px;height:120px;padding:6px 2px 0;border-bottom:1px solid #e5e7ef;direction:ltr}\n.e451-h div{flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;gap:2px}\n.e451-h i{display:block;width:100%;max-width:26px;background:#1e3a8a;border-radius:5px 5px 0 0;min-height:2px}\n.e451-h div.top i{background:#c9a227}\n.e451-h small{font-size:10px;color:#64748b}\n.e451-hl{display:flex;gap:3px;direction:ltr}.e451-hl span{flex:1;text-align:center;font-size:10px;color:#64748b;direction:rtl;unicode-bidi:isolate}\n.e451-tl{margin-top:10px}.e451-tl h4{margin:6px 0;font-size:13.5px;color:#334155}\n.e451-tr{display:flex;justify-content:space-between;gap:8px;padding:6px 0;border-bottom:1px solid #f1f3f7;font-size:13px}\n.e451-tr span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.e451-cl .it{display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid #f1f3f7;font-size:13px}\n.e451-cl .it span{flex:1;display:flex;flex-direction:column;gap:1px}.e451-cl .it small{color:#64748b}\n.e451-cl .it.off{opacity:.5}\n.e451-cl .it button{min-height:34px;padding:0 10px;border:1px solid #e5e7ef;border-radius:10px;background:#fff;font:inherit;font-size:12.5px;cursor:pointer}\n.e451-cl .it button.del{color:#b91c1c}\n.e451-cf{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px}\n.e451-cf .full{grid-column:1/-1}\n\n\n.e434-pb{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;border-radius:12px;padding:8px 10px;font-size:13.5px;margin-top:6px;line-height:1.6}\n.e434-pb.due{background:#fef2f2;color:#991b1b}\n.e434-pb.pts{background:#fffbeb;color:#78350f;border:1px solid #fde68a}\n.e434-pb.on{background:#172554;color:#fde68a}\n.e434-pb button,.e434-sb{border:0;border-radius:10px;padding:8px 12px;font:inherit;font-size:13.5px;font-weight:800;cursor:pointer;min-height:40px}\n.e434-pb button{background:#f59e0b;color:#172554}\n.e434-pb.on button{background:#fff;color:#172554}\n.e434-pb.due button{background:#fff;color:#991b1b;border:1px solid #fecaca}\n.e434-sb{background:#eef0f3;color:#111827}\n.e434-hd{background:linear-gradient(135deg,#172554,#1e3a8a);color:#fff;border-radius:16px;padding:12px 14px;margin-bottom:10px}\n.e434-hd b{font-size:17px}.e434-hd small{display:block;color:#c7d2fe;font-size:12.5px;margin-top:2px}\n.e434-lp{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;background:#fffbeb;border:1px solid #fde68a;border-radius:14px;padding:10px 12px;margin-bottom:10px;font-size:13.5px;color:#78350f}\n.e434-lp.off{background:#f8fafc;border-color:#e2e8f0;color:#475569}\n.e434-tg{display:inline-block;border-radius:8px;padding:2px 8px;font-size:12px;font-weight:800;margin-inline-start:4px;white-space:nowrap}\n.e434-tg.d{background:#fee2e2;color:#991b1b}.e434-tg.g{background:#fef3c7;color:#92400e}.e434-tg.o{background:#dcfce7;color:#166534}.e434-tg.b{background:#e0e7ff;color:#3730a3}\n.e434-f{display:grid;gap:8px}\n.e434-f label{font-size:13px;color:#475569;display:grid;gap:4px}\n.e434-sw{display:flex;align-items:center;gap:8px;font-weight:800;font-size:15px;cursor:pointer}\n.e434-sw input{width:22px;height:22px}\n\n\n#e442{position:fixed;inset:0;z-index:12500;display:none;background:rgba(15,23,42,.55);direction:rtl}\n#e442.show{display:flex;align-items:flex-end;justify-content:center}\n@media(min-width:700px){#e442.show{align-items:center}}\n#e442 .pn{background:#f8fafc;width:100%;max-width:560px;max-height:94vh;display:flex;flex-direction:column;border-radius:20px 20px 0 0;overflow:hidden}\n@media(min-width:700px){#e442 .pn{border-radius:20px}}\n#e442 .hd{background:#172554;color:#fff;padding:14px 16px;display:flex;align-items:center;gap:10px}\n#e442 .hd h3{margin:0;font-size:17px;flex:1}\n#e442 .hd button{border:0;background:rgba(255,255,255,.14);color:#fff;border-radius:10px;min-width:40px;height:40px;font-size:18px;cursor:pointer}\n#e442 .bd{padding:14px;overflow:auto;flex:1}\n#e442 .ft{padding:12px 14px;border-top:1px solid #e2e8f0;background:#fff}\n#e442 .cd{background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:12px;margin-bottom:12px}\n#e442 .cd h4{margin:0 0 8px;font-size:15px;color:#172554}\n#e442 input.in{width:100%;box-sizing:border-box;border:1.5px solid #cbd5e1;border-radius:12px;min-height:46px;padding:0 12px;font:inherit;font-size:15px;background:#fff}\n#e442 input.in:focus{outline:none;border-color:#1e3a8a}\n#e442 .mut{color:#64748b;font-size:13px;line-height:1.7}\n#e442 .inv{display:flex;justify-content:space-between;gap:8px;align-items:center;padding:10px;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:8px;cursor:pointer;background:#fff;width:100%;text-align:right;font:inherit}\n#e442 .inv:hover{border-color:#1e3a8a}\n#e442 .inv small{display:block;color:#64748b;font-size:12.5px;margin-top:2px}\n#e442 .ln{display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px dashed #e2e8f0}\n#e442 .ln:last-child{border-bottom:0}\n#e442 .ln .nm{flex:1;min-width:0}\n#e442 .ln .nm b{display:block;font-size:14px}\n#e442 .ln .nm small{color:#64748b;font-size:12px}\n#e442 .stp{display:flex;align-items:center;gap:4px;flex:none}\n#e442 .stp button{width:38px;height:38px;border:0;border-radius:10px;background:#eef2ff;color:#1e3a8a;font-size:18px;font-weight:800;cursor:pointer}\n#e442 .stp b{min-width:28px;text-align:center;font-variant-numeric:tabular-nums}\n#e442 .dmg{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;color:#b91c1c;margin-top:6px;cursor:pointer}\n#e442 .dmg input{width:18px;height:18px;min-height:0;margin:0;flex:none;accent-color:#b91c1c}\n#e442 .chips{display:flex;gap:6px;flex-wrap:wrap}\n#e442 .chips button{border:1.5px solid #cbd5e1;background:#fff;border-radius:999px;min-height:38px;padding:0 12px;font:inherit;font-size:13.5px;cursor:pointer}\n#e442 .chips button.on{background:#1e3a8a;border-color:#1e3a8a;color:#fff}\n#e442 .b1{width:100%;min-height:52px;border:0;border-radius:14px;background:#1e3a8a;color:#fff;font:inherit;font-weight:800;font-size:16px;cursor:pointer}\n#e442 .b1:disabled{background:#94a3b8;cursor:not-allowed}\n#e442 .b2{border:1.5px dashed #1e3a8a;background:#eef2ff;color:#1e3a8a;border-radius:12px;min-height:44px;width:100%;font:inherit;font-weight:800;cursor:pointer}\n#e442 .b3{border:0;background:#eef0f3;border-radius:10px;min-height:38px;padding:0 12px;font:inherit;cursor:pointer}\n#e442 .sm{display:flex;justify-content:space-between;padding:4px 0;font-size:14px}\n#e442 .tot{margin-top:6px;padding:12px;border-radius:12px;font-weight:800;font-size:16px;display:flex;justify-content:space-between}\n#e442 .tot.pay{background:#fffbeb;color:#92400e;border:1px solid #fde68a}\n#e442 .tot.back{background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0}\n#e442 .tot.zero{background:#f1f5f9;color:#334155}\n#e442 .err{background:#fef2f2;color:#991b1b;border-radius:10px;padding:8px 10px;margin-top:8px;font-size:13.5px}\n#e442 .ok{text-align:center;padding:10px 0}\n#e442 .ok .ic{font-size:44px}\n#e442 .pr{display:flex;justify-content:space-between;gap:8px;align-items:center;padding:8px;border:1px solid #e2e8f0;border-radius:10px;margin-top:6px;background:#fff;width:100%;font:inherit;cursor:pointer;text-align:right}\n.e442-btn{border:0;background:#fff7ed;color:#9a3412;border-radius:12px;min-height:42px;padding:0 14px;font:inherit;font-weight:800;cursor:pointer;margin-bottom:10px;width:100%}\n\n\n.e443-ov{position:fixed;inset:0;z-index:2147483646;background:rgba(15,23,42,.66);display:none;align-items:center;justify-content:center;padding:12px;direction:rtl;font-family:'IBM Plex Sans Arabic',Tahoma,Arial,sans-serif;box-sizing:border-box}\n.e443-ov.show{display:flex}\n.e443-ov *{box-sizing:border-box}\n.e443-box{background:#fff;color:#0f172a;border-radius:22px;width:min(540px,100%);max-height:94vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 24px 70px rgba(0,0,0,.3)}\n.e443-hd{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 16px;background:#172554;color:#fff;border-bottom:3px solid #f59e0b}\n.e443-hd b{font-size:17px}\n.e443-x{border:0;background:rgba(255,255,255,.14);color:#fff;width:36px;height:36px;border-radius:12px;font-size:17px;cursor:pointer}\n.e443-pv{overflow:auto;background:#e2e8f0;padding:10px;flex:1 1 auto;min-height:120px}\n.e443-pv img{display:block;width:100%;border-radius:8px;box-shadow:0 4px 18px rgba(15,23,42,.18);background:#fff}\n.e443-tp{display:flex;gap:6px;padding:10px 12px 0;overflow-x:auto}\n.e443-chip{flex:0 0 auto;border:1.5px solid #cbd5e1;background:#fff;color:#334155;border-radius:999px;padding:7px 13px;font:inherit;font-size:13px;font-weight:700;cursor:pointer}\n.e443-chip.on{border-color:#1e3a8a;background:#1e3a8a;color:#fff}\n.e443-act{padding:10px 12px 12px;display:flex;flex-direction:column;gap:8px}\n.e443-g{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n.e443-b{border:1.5px solid #cbd5e1;background:#fff;color:#0f172a;border-radius:14px;padding:11px 8px;font:inherit;font-size:14px;font-weight:700;cursor:pointer;min-height:46px}\n.e443-b:active{transform:scale(.98)}\n.e443-b.p{background:#16a34a;border-color:#16a34a;color:#fff;font-size:15px}\n.e443-b.n{background:#172554;border-color:#172554;color:#fff}\n.e443-b.l{border:0;background:transparent;color:#1e3a8a;min-height:36px;padding:6px}\n.e443-busy{position:absolute;inset:0;display:none;align-items:center;justify-content:center;background:rgba(255,255,255,.6);font-weight:800}\n/* نافذة التصميم */\n.e443-dbox{width:min(1040px,100%);max-height:95vh}\n.e443-dwrap{display:grid;grid-template-columns:1fr 1fr;min-height:0;flex:1 1 auto;overflow:hidden}\n.e443-dwrap .e443-pv{max-height:none}\n.e443-ctl{overflow:auto;padding:14px 16px 18px}\n.e443-sec{margin-bottom:16px}\n.e443-sec>h4{margin:0 0 8px;font-size:14px;color:#172554}\n.e443-tpls{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n.e443-tpl{border:2px solid #e2e8f0;background:#fff;border-radius:14px;padding:10px;text-align:right;font:inherit;cursor:pointer}\n.e443-tpl b{display:block;font-size:14px}.e443-tpl span{display:block;font-size:12px;color:#64748b;margin-top:3px;line-height:1.5}\n.e443-tpl.on{border-color:#f59e0b;background:#fffbeb}\n.e443-sw{display:flex;gap:8px;flex-wrap:wrap;align-items:center}\n.e443-c{width:34px;height:34px;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 1.5px #cbd5e1;cursor:pointer;padding:0}\n.e443-c.on{box-shadow:0 0 0 3px #f59e0b}\n.e443-c.app{background:conic-gradient(#1e3a8a,#f59e0b,#047857,#9f1239,#1e3a8a)}\n.e443-sw input[type=color]{width:40px;height:36px;border:0;background:none;padding:0;cursor:pointer}\n.e443-seg{display:flex;gap:6px;flex-wrap:wrap}\n.e443-ctl label{display:block;font-size:12.5px;color:#475569;margin:8px 0 4px;font-weight:700}\n.e443-ctl input[type=text],.e443-ctl select,.e443-ctl textarea{width:100%;border:1.5px solid #cbd5e1;border-radius:12px;padding:9px 11px;font:inherit;font-size:14px;background:#fff;color:#0f172a}\n.e443-ctl textarea{min-height:70px;resize:vertical}\n.e443-ck{display:grid;grid-template-columns:1fr 1fr;gap:6px}\n.e443-ck label{display:flex;align-items:center;gap:7px;margin:0;border:1px solid #e2e8f0;border-radius:11px;padding:8px 10px;font-weight:600;color:#0f172a;cursor:pointer}\n.e443-ck input{width:18px;height:18px;accent-color:#1e3a8a}\n.e443-more{display:none}.e443-more.show{display:block}\n.e443-hint{font-size:12px;color:#64748b;line-height:1.6;margin-top:5px}\n.e443-stamp{display:flex;align-items:center;gap:10px}.e443-stamp img{width:64px;height:64px;object-fit:contain;border:1px dashed #cbd5e1;border-radius:10px;background:#fff}\n#e443Print{display:none}\n@media print{body.e443-printing>*:not(#e443Print){display:none!important}body.e443-printing #e443Print{display:block!important}#e443Print img{display:block;width:100%;height:auto;page-break-after:always;break-after:page}#e443Print img:last-child{page-break-after:auto;break-after:auto}}\n@media(max-width:760px){.e443-dwrap{grid-template-columns:1fr;grid-template-rows:auto auto;overflow:auto}.e443-dwrap .e443-pv{height:42vh;max-height:42vh;flex:0 0 auto}.e443-ctl{overflow:visible}.e443-ov{padding:0;align-items:flex-end}.e443-box{border-radius:20px 20px 0 0;max-height:96vh}}\n\n\n.e444-dm{display:flex;align-items:center;gap:6px;margin:0 0 10px}\n.e444-dm>span{font-size:13px;font-weight:800;color:#475569;min-width:54px}\n.e444-dm button{flex:1;border:1px solid #dfe3e8;background:#fff;border-radius:10px;padding:10px 4px;font:inherit;font-weight:800;font-size:13px;cursor:pointer}\n.e444-dm button.on{background:#172554;color:#fff;border-color:#172554}\n#emd418 .e444-lr{flex-shrink:0;display:flex;flex-direction:column;gap:6px;border:1px solid #fde68a;background:#fffbeb;border-radius:14px;padding:9px 10px}\n#emd418 .e444-lr .e444-dm{margin:0}\n#emd418 .e444-lr small{font-size:12px;color:#92400e}\nbody.e444-ship-sys #emd418 .e422{display:none!important}\nbody.e444-bar-sys #e439 [data-k=\"bt\"]{display:none!important}\n#e444{position:fixed;inset:0;z-index:2147483646;background:rgba(15,23,42,.62);display:none;align-items:center;justify-content:center;padding:12px;direction:rtl;font-family:'IBM Plex Sans Arabic',Tahoma,Arial,sans-serif;box-sizing:border-box}\n#e444.show{display:flex}\n#e444 *{box-sizing:border-box}\n#e444 .win{background:#fff;color:#0f172a;border-radius:22px;width:min(620px,100%);max-height:94vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 24px 70px rgba(0,0,0,.3)}\n#e444 .hd{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:#172554;color:#fff;border-bottom:3px solid #f59e0b}\n#e444 .hd b{font-size:17px}\n#e444 .x{border:0;background:rgba(255,255,255,.14);color:#fff;width:36px;height:36px;border-radius:12px;font-size:17px;cursor:pointer}\n#e444 .bd{overflow:auto;padding:14px 16px 18px}\n#e444 h4{margin:4px 0 8px;font-size:14px;color:#172554}\n#e444 .card{border:1px solid #e2e8f0;border-radius:16px;padding:12px;margin-bottom:10px;background:#fff}\n#e444 .card>b{display:block;font-size:15px;margin-bottom:8px}\n#e444 .seg{display:grid;grid-template-columns:1fr 1fr;gap:6px}\n#e444 .seg button{border:1.5px solid #cbd5e1;background:#fff;border-radius:12px;padding:10px 6px;font:inherit;font-size:13px;font-weight:800;cursor:pointer;color:#334155;min-height:44px}\n#e444 .seg button.on{border-color:#172554;background:#172554;color:#fff}\n#e444 label.f{display:block;font-size:12.5px;color:#475569;font-weight:700;margin:9px 0 4px}\n#e444 select{width:100%;border:1.5px solid #cbd5e1;border-radius:12px;padding:9px 10px;font:inherit;font-size:14px;background:#fff;color:#0f172a}\n#e444 .ck{display:flex;align-items:center;gap:8px;margin-top:9px;font-size:13.5px;font-weight:600}\n#e444 .ck input{width:18px;height:18px;accent-color:#172554}\n#e444 .acts{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:8px}\n#e444 .acts button,#e444 .lnk{border:1.5px solid #cbd5e1;background:#fff;border-radius:12px;padding:9px 6px;font:inherit;font-size:13px;font-weight:700;cursor:pointer;color:#172554;min-height:44px}\n#e444 .lnk{width:100%;margin-top:8px}\n#e444 .hint{font-size:12px;color:#64748b;line-height:1.7;margin:8px 0 0}\n#e444 .e422{display:flex;flex-direction:column;gap:8px}\n#e444 .e422-go,#e444 .e422-lnk{display:none!important}\n#e444 .e422-st{display:flex;align-items:center;gap:6px;font-size:14px;color:#475569;font-weight:700}\n#e444 .e422-st .dot{width:10px;height:10px;border-radius:50%;background:#94a3b8}\n#e444 .e422-st.on{color:#047857}#e444 .e422-st.on .dot{background:#10b981;box-shadow:0 0 0 3px #d1fae5}\n#e444 .e422-set{display:flex;flex-direction:column;gap:8px;padding-top:6px;border-top:1px dashed #cbd5e1;margin-top:4px}\n#e444 .e422-set[hidden]{display:none}\n#e444 .e422-set label{display:flex;flex-direction:column;gap:4px;font-size:12.5px;font-weight:700;color:#475569}\n#e444 .e422-set label.ck{flex-direction:row}\n#e444 .e422-set input[type=number]{height:42px;border:1.5px solid #cbd5e1;border-radius:12px;padding:0 10px;font:inherit}\n#e444 .e422-set input[type=range]{accent-color:#172554}\n#e444 .e422-acts{display:grid;grid-template-columns:1fr 1fr;gap:6px}\n#e444 .e422-acts button{height:44px;border-radius:12px;border:1.5px solid #cbd5e1;background:#fff;color:#172554;font:inherit;font-size:13px;font-weight:700;cursor:pointer}\n#e444 .e422 p{margin:0;font-size:12px;color:#64748b;line-height:1.6}\n#e444Print{display:none}\n@media print{body.e444-printing>*:not(#e444Print){display:none!important}body.e444-printing #e444Print{display:block!important}}\n@media(max-width:600px){#e444{padding:0;align-items:flex-end}#e444 .win{border-radius:20px 20px 0 0;max-height:96vh}}\n\n\n.e450-tag{display:inline-block;margin-inline-start:6px;background:#eef2fb;color:#1e3a8a;border-radius:8px;padding:0 7px;font-size:12px;font-weight:700;vertical-align:middle}\n.e450-vb{position:absolute;top:10px;right:10px;background:#172554;color:#fff;border-radius:8px;padding:1px 7px;font-size:11px;font-weight:700;z-index:1}\n.emd113-p.e450-g .n small{color:#475569}\n.e450-open{width:100%;min-height:46px;margin:8px 0 2px;border:1.5px dashed #1e3a8a;border-radius:12px;background:#f8faff;color:#1e3a8a;font:inherit;font-weight:800;font-size:14px;cursor:pointer}\n/* بطاقة المنتج في قائمة المنتجات */\n.e450-gc{display:flex;flex-direction:column;gap:8px;background:#fff;border:1.5px solid #1e3a8a;border-radius:14px;padding:10px 12px;margin:8px 0}\n.e450-gc .h{display:flex;align-items:center;gap:10px}\n.e450-gc .h img,.e450-gc .h .ph{width:54px;height:54px;border-radius:10px;object-fit:cover;flex:none;background:#eef1f6;display:flex;align-items:center;justify-content:center;font-size:22px}\n.e450-gc .h .t{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}\n.e450-gc .h b{font-size:15px}.e450-gc .h small{font-size:12.5px;color:#64748b}\n.e450-gc .h .pr{font-weight:800;white-space:nowrap;text-align:left}\n.e450-mx{display:flex;flex-direction:column;gap:6px;border-top:1px solid #eef1f6;padding-top:8px}\n.e450-mr{display:flex;align-items:flex-start;gap:8px;font-size:12.5px}\n.e450-mr>b{min-width:60px;padding-top:5px}\n.e450-sz{display:flex;gap:4px;flex-wrap:wrap}\n.e450-s{min-width:40px;height:30px;padding:0 6px;border-radius:8px;background:#f1f5f9;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700}\n.e450-s.low{background:#fffbeb;color:#92400e}.e450-s.out{background:#fef2f2;color:#b91c1c;text-decoration:line-through}\n.e450-gc .acts{display:flex;gap:8px;flex-wrap:wrap}\n.e450-gc .acts button{flex:1;min-height:42px;border:1px solid #d6dce6;border-radius:10px;background:#fff;font:inherit;font-weight:700;font-size:13px;color:#1e3a8a;cursor:pointer}\n#productsList .product.e450-hid{display:none!important}\n#productsList.e450-x .product.e450-hid.e450-show{display:flex!important}\n#productsList .product.e450-show{border-inline-start:3px solid #c9a227}\n/* النوافذ */\n#e450E,#e450P{position:fixed;inset:0;z-index:2147483200;display:none;align-items:flex-end;justify-content:center;background:rgba(15,23,42,.55);direction:rtl;font-family:inherit}\n#e450E.show,#e450P.show{display:flex}\n@media(min-width:700px){#e450E,#e450P{align-items:center}}\n#e450E .w,#e450P .w{width:min(620px,100%);max-height:94vh;display:flex;flex-direction:column;background:#fff;border-radius:22px 22px 0 0;overflow:hidden;color:#18202a}\n@media(min-width:700px){#e450E .w,#e450P .w{border-radius:22px}}\n#e450P .w{width:min(460px,100%)}\n.e450-hd{display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid #eef1f6}\n.e450-hd h2{margin:0;flex:1;font-size:17px;color:#172554}\n.e450-hd .x{width:40px;height:40px;border-radius:12px;border:1px solid #e5e7ef;background:#fff;font:inherit;font-size:16px;cursor:pointer}\n.e450-bd{overflow:auto;padding:12px 16px;display:flex;flex-direction:column;gap:12px}\n.e450-ft{padding:12px 16px;border-top:1px solid #eef1f6;display:flex;gap:8px}\n.e450-go{flex:1;min-height:50px;border:0;border-radius:14px;background:#172554;color:#fff;font:inherit;font-weight:800;font-size:15px;cursor:pointer;box-shadow:inset 0 -3px 0 #c9a227}\n.e450-gh{min-height:50px;padding:0 16px;border:1px solid #d6dce6;border-radius:14px;background:#fff;font:inherit;font-weight:700;cursor:pointer}\n.e450-g2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}\n.e450-l{display:flex;flex-direction:column;gap:4px;font-size:12.5px;font-weight:700;color:#334155}\n.e450-in{height:44px;border:1px solid #d6dce6;border-radius:12px;padding:0 12px;font:inherit;font-size:14px;background:#fff;box-sizing:border-box;width:100%;min-width:0}\n.e450-in[readonly]{background:#f1f5f9;color:#475569}\n.e450-st{font-size:12.5px;font-weight:800;color:#b45309;margin-top:2px}\n.e450-ch{display:flex;flex-wrap:wrap;gap:6px}\n.e450-c{min-height:38px;padding:0 12px;border:1px solid #d6dce6;border-radius:19px;background:#fff;font:inherit;font-size:13px;font-weight:700;color:#334155;cursor:pointer;display:inline-flex;align-items:center;gap:6px}\n.e450-c[aria-pressed=\"true\"]{background:#172554;border-color:#172554;color:#fff}\n.e450-c.sug{border-style:dashed;color:#1e3a8a}\n.e450-c i{font-style:normal;opacity:.75}\n.e450-add{display:flex;gap:6px}.e450-add .e450-in{flex:1}\n.e450-add button{min-width:64px;border:0;border-radius:12px;background:#1e3a8a;color:#fff;font:inherit;font-weight:800;cursor:pointer}\n.e450-box{border:1.5px solid #1e3a8a;border-radius:16px;padding:12px;display:flex;flex-direction:column;gap:8px;background:#f8faff}\n.e450-sum{background:#172554;color:#fff;border-radius:12px;padding:10px 12px;font-weight:800;box-shadow:inset 0 -3px 0 #c9a227}\n.e450-note{font-size:12px;color:#64748b;line-height:1.6}\n.e450-warn{background:#fffbeb;border:1px solid #fde68a;color:#78350f;border-radius:12px;padding:10px 12px;font-size:13px;line-height:1.6}\n.e450-bulk{display:flex;gap:6px;flex-wrap:wrap}.e450-bulk .e450-in{width:110px;flex:none}\n.e450-bulk button{min-height:44px;padding:0 12px;border:1px solid #d6dce6;border-radius:12px;background:#fff;font:inherit;font-weight:700;font-size:13px;color:#1e3a8a;cursor:pointer}\n.e450-tb{display:flex;flex-direction:column;gap:2px}\n.e450-th,.e450-tr{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.7fr) minmax(0,.9fr) minmax(0,1.1fr) 36px;gap:6px;align-items:center}\n.e450-th{font-size:11.5px;color:#64748b;font-weight:700;padding:0 2px}\n.e450-tr{padding:3px 0}.e450-tr b{font-size:13px;overflow:hidden;text-overflow:ellipsis}\n.e450-tr .e450-in{height:38px;padding:0 6px;font-size:13px;text-align:center}\n.e450-tr .e450-in.bc{font-size:11.5px;direction:ltr}\n.e450-tr .e450-in.zero{border-color:#fecaca;background:#fef2f2;color:#b91c1c}\n.e450-tr .e450-in.chg{border-color:#c9a227;background:#fffbeb}\n.e450-tr button{width:36px;height:36px;border:1px solid #e5e7ef;border-radius:10px;background:#fff;color:#94a3b8;font:inherit;cursor:pointer}\n.e450-tr.off{opacity:.45}.e450-tr.off b{text-decoration:line-through}\n.e450-tr.off button{color:#15803d}\n/* نافذة الاختيار في البيع */\n#e450P .ph{display:flex;align-items:center;gap:10px}\n#e450P .ph .im{width:48px;height:48px;border-radius:10px;background:#eef1f6 center/cover;flex:none;display:flex;align-items:center;justify-content:center;font-size:20px}\n#e450P .ph b{font-size:16px}#e450P .ph small{display:block;font-size:12px;color:#64748b}\n.e450-lb{font-size:13px;font-weight:800;color:#334155}\n.e450-pk{min-height:46px;padding:0 14px;border:1.5px solid #d6dce6;border-radius:12px;background:#fff;font:inherit;font-size:14px;font-weight:700;color:#18202a;cursor:pointer;display:inline-flex;align-items:center;gap:6px}\n.e450-pk small{font-size:11.5px;opacity:.75;font-weight:600}\n.e450-pk[aria-pressed=\"true\"]{border-color:#172554;background:#172554;color:#fff;box-shadow:inset 0 -3px 0 #c9a227}\n.e450-pk:disabled{color:#94a3b8;background:#f8fafc;text-decoration:line-through;border-style:dashed;cursor:not-allowed}\n.e450-ci{display:flex;flex-direction:column;gap:6px}\n.e450-cib{display:inline-flex;align-items:center;gap:6px;min-height:44px;padding:0 10px 0 6px;border:1px solid #d6dce6;border-radius:12px;background:#fff;font:inherit;font-size:13px;font-weight:700;cursor:pointer}\n.e450-cib .im{width:32px;height:32px;border-radius:8px;background:#eef1f6 center/cover;display:inline-flex;align-items:center;justify-content:center;font-size:15px}\n.e450-ok{background:#ecfdf5;color:#065f46;border-radius:12px;padding:10px 12px;font-size:13.5px;font-weight:700}\n#e450E button:focus-visible,#e450P button:focus-visible,.e450-gc button:focus-visible,.e450-open:focus-visible{outline:3px solid #f59e0b;outline-offset:2px}\n.e450-toast{position:fixed;left:50%;top:16px;transform:translateX(-50%);z-index:2147483647;background:#172554;color:#fff;padding:10px 16px;border-radius:12px;font-size:14px;font-weight:700;box-shadow:inset 0 -3px 0 #f59e0b;max-width:calc(100% - 32px);text-align:center;direction:rtl}\n.e450-toast.bad{background:#7f1d1d;box-shadow:none}\n\n\n#e439{position:fixed;inset:0;z-index:12000;background:rgba(15,23,42,.6);display:none;align-items:flex-end;justify-content:center;direction:rtl;font-family:inherit}\n#e439.show{display:flex}\n#e439 .sh{width:min(860px,100%);height:min(96vh,100%);background:#f6f7f9;border-radius:22px 22px 0 0;display:flex;flex-direction:column;overflow:hidden}\n@media(min-width:760px){#e439{align-items:center}#e439 .sh{border-radius:22px;height:min(92vh,900px)}}\n#e439 .hd{background:linear-gradient(135deg,#172554,#1e3a8a);color:#fff;padding:12px 14px;display:flex;align-items:center;gap:10px;border-bottom:3px solid #f59e0b}\n#e439 .hd h2{margin:0;font-size:18px;flex:1}\n#e439 .x{border:0;background:rgba(255,255,255,.15);color:#fff;border-radius:12px;width:42px;height:42px;font-size:20px;cursor:pointer}\n#e439 .bd{flex:1;overflow:auto;padding:12px}\n#e439 .bx{background:#fff;border:1px solid #e8eaee;border-radius:16px;padding:12px;margin-bottom:12px}\n#e439 .bx h3{margin:0 0 8px;font-size:15px}\n#e439 input,#e439 select{width:100%;box-sizing:border-box;border:1px solid #dfe3e8;border-radius:12px;padding:10px 12px;font-size:16px;min-height:44px;font-family:inherit;background:#fff}\n#e439 .g2{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n#e439 .chips{display:flex;gap:6px;flex-wrap:wrap}\n#e439 .chip{border:1px solid #dfe3e8;background:#fff;border-radius:11px;padding:8px 12px;font:inherit;font-size:14px;cursor:pointer;min-height:40px}\n#e439 .chip.on{background:#172554;border-color:#172554;color:#fde68a;font-weight:800}\n#e439 .pr{display:flex;align-items:center;gap:8px;border-bottom:1px solid #f1f5f9;padding:8px 0}\n#e439 .pr .nm{flex:1;min-width:0}#e439 .pr .nm b{display:block;font-size:14.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#e439 .pr .nm small{color:#64748b;font-size:12px}\n#e439 .pr input[type=checkbox]{width:24px;height:24px;min-height:0;flex:none}\n#e439 .q{display:flex;align-items:center;gap:4px;flex:none}#e439 .q button{border:1px solid #dfe3e8;background:#fff;border-radius:10px;width:36px;height:36px;font-size:18px;cursor:pointer}#e439 .q input{width:52px;text-align:center;padding:6px;min-height:36px}\n#e439 .nob{color:#b45309}\n#e439 .pv{display:flex;justify-content:center;background:#e5e7eb;border-radius:12px;padding:12px}\n#e439 .pv canvas{background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.15);max-width:100%;height:auto}\n#e439 .ft{background:#fff;border-top:1px solid #e8eaee;padding:10px 12px calc(10px + env(safe-area-inset-bottom));display:grid;gap:8px}\n#e439 .go{border:0;border-radius:14px;font:inherit;font-size:16px;font-weight:900;min-height:50px;cursor:pointer;background:#1d4ed8;color:#fff}\n#e439 .go.l{background:#eef0f3;color:#111827;font-size:14px;min-height:44px}\n#e439 .go[disabled]{opacity:.5}\n#e439 .mut{font-size:12.5px;color:#64748b;line-height:1.6}\n#e439 .ed{display:flex;gap:6px;align-items:center;padding:6px 0 10px;flex-wrap:wrap}#e439 .ed input{flex:1;min-width:160px;direction:ltr;text-align:left}#e439 .ed button{border:0;border-radius:10px;min-height:44px;padding:0 12px;font:inherit;font-weight:800;cursor:pointer;background:#eef0f3}#e439 .ed .ok{background:#16a34a;color:#fff}\n#e439 .eb{border:0;background:#eef2ff;color:#1e3a8a;border-radius:10px;min-width:40px;height:40px;cursor:pointer;font-size:16px;flex:none}\n#e439 .lk{border:0;background:none;color:#1e3a8a;font:inherit;font-size:13px;font-weight:800;cursor:pointer;padding:4px}\n\n\n#products .e421-acts{display:flex;gap:8px;flex-wrap:wrap;align-items:center}\n#products .e421-btn{white-space:nowrap}\n#e421{position:fixed;inset:0;z-index:2147483640;display:none;align-items:center;justify-content:center;background:rgba(15,23,42,.55);direction:rtl;padding:12px;box-sizing:border-box;font-family:inherit;color:#0f172a}\n#e421.show{display:flex}\n#e421 *{box-sizing:border-box}\n#e421 .win{position:relative;width:min(620px,100%);max-height:94vh;background:#fff;border-radius:22px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 24px 70px rgba(15,23,42,.3)}\n#e421 .hd{display:flex;align-items:center;gap:10px;padding:14px 16px;background:#172554;color:#fff;box-shadow:inset 0 -3px 0 #f59e0b}\n#e421 h2{margin:0;font-size:17px;flex:1;color:#fff}\n#e421 .x{width:40px;height:40px;border-radius:12px;border:1px solid rgba(255,255,255,.25);background:transparent;color:#fff;font:inherit;font-size:16px;cursor:pointer}\n#e421 .bd{padding:14px 16px;overflow:auto;flex:1;display:flex;flex-direction:column;gap:12px;min-height:0}\n#e421 .ft{display:flex;gap:8px;padding:12px 16px;border-top:1px solid #e5e7ef;background:#f8fafc}\n#e421 .ft button{min-height:48px;border-radius:14px;font:inherit;font-size:15px;font-weight:700;cursor:pointer}\n#e421 .e421-go{flex:1;border:0;background:#1e3a8a;color:#fff;box-shadow:inset 0 -4px 0 #f59e0b}\n#e421 .e421-go[disabled]{background:#94a3b8;box-shadow:none;cursor:not-allowed}\n#e421 .e421-bk{padding:0 18px;border:1px solid #e5e7ef;background:#fff;color:#0f172a}\n#e421 .e421-steps{display:flex;gap:6px;list-style:none;margin:0;padding:10px 16px;background:#eef2ff;font-size:13px;font-weight:700;color:#64748b}\n#e421 .e421-steps li{flex:1;display:flex;align-items:center;gap:6px;justify-content:center}\n#e421 .e421-steps li span{width:24px;height:24px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:#fff;border:1px solid #cbd5e1;font-size:12px}\n#e421 .e421-steps li.cur{color:#1e3a8a}#e421 .e421-steps li.cur span{background:#1e3a8a;border-color:#1e3a8a;color:#fff}\n#e421 .e421-steps li.done{color:#047857}#e421 .e421-steps li.done span{background:#047857;border-color:#047857;color:#fff}\n#e421 .e421-pick{width:100%;display:flex;flex-direction:column;align-items:center;gap:6px;padding:26px 14px;border:2px dashed #93a4c8;border-radius:18px;background:#f8faff;font:inherit;color:#172554;cursor:pointer}\n#e421.drag .e421-pick{border-color:#f59e0b;background:#fffbeb}\n#e421 .e421-pick .ic{font-size:34px}#e421 .e421-pick b{font-size:17px}#e421 .e421-pick small{color:#64748b;font-size:13px}\n#e421 .e421-how{background:#f8fafc;border:1px solid #e5e7ef;border-radius:14px;padding:12px 14px;font-size:14px}\n#e421 .e421-how ol{margin:6px 0 0;padding-inline-start:20px;display:flex;flex-direction:column;gap:4px;color:#334155}\n#e421 .e421-sec{min-height:46px;border-radius:14px;border:1px solid #cbd5e1;background:#fff;color:#172554;font:inherit;font-size:14px;font-weight:700;cursor:pointer;padding:0 14px}\n#e421 .e421-paste summary{cursor:pointer;color:#1e3a8a;font-weight:700;font-size:14px;padding:4px 0}\n#e421 .e421-paste textarea{width:100%;min-height:110px;margin:8px 0;border:1px solid #cbd5e1;border-radius:12px;padding:10px;font:inherit;font-size:13px;resize:vertical}\n#e421 .e421-paste .e421-sec{width:100%}\n#e421 .e421-undo{display:flex;align-items:center;gap:10px;flex-wrap:wrap;background:#fffbeb;border:1px solid #fde68a;border-radius:14px;padding:10px 12px;font-size:13px;color:#78350f}\n#e421 .e421-undo span{flex:1;min-width:160px}\n#e421 .e421-undo button{border:1px solid #f59e0b;background:#fff;color:#92400e;border-radius:10px;min-height:40px;padding:0 12px;font:inherit;font-weight:700;cursor:pointer}\n#e421 .e421-file{display:flex;align-items:center;gap:8px;background:#f8fafc;border:1px solid #e5e7ef;border-radius:12px;padding:10px 12px}\n#e421 .e421-file b{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#e421 .e421-file small{color:#64748b}\n#e421 .e421-l{display:flex;flex-direction:column;gap:5px;font-size:13px;font-weight:700;color:#334155}\n#e421 select{width:100%;min-height:44px;border:1px solid #cbd5e1;border-radius:12px;padding:0 10px;font:inherit;font-size:14px;background:#fff;color:#0f172a}\n#e421 .e421-p{margin:0;font-size:13px;color:#64748b;line-height:1.6}\n#e421 .e421-map{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}\n#e421 .e421-mf{border:1px solid #e5e7ef;border-radius:14px;padding:10px;display:flex;flex-direction:column;gap:6px;min-width:0}\n#e421 .e421-mf.on{border-color:#a7b6dd;background:#f8faff}\n#e421 .e421-mf label{font-size:14px;font-weight:700}#e421 .e421-mf label i{color:#b91c1c;font-style:normal}\n#e421 .e421-mf small{font-size:12px;color:#64748b;min-height:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n#e421 .e421-sum{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}\n#e421 .e421-sum button{border:1px solid #e5e7ef;background:#fff;border-radius:14px;padding:10px 4px;display:flex;flex-direction:column;align-items:center;gap:2px;font:inherit;cursor:pointer;color:#0f172a}\n#e421 .e421-sum b{font-size:22px}#e421 .e421-sum span{font-size:12px;color:#64748b}\n#e421 .e421-sum button:nth-child(1) b{color:#047857}#e421 .e421-sum button:nth-child(2) b{color:#1e3a8a}#e421 .e421-sum button.bad b{color:#b91c1c}\n#e421 .e421-sum button.sel{border-color:#1e3a8a;box-shadow:0 0 0 2px #1e3a8a inset}\n#e421 .e421-opt{border:1px solid #e5e7ef;border-radius:14px;padding:10px 12px}\n#e421 .e421-opt summary{cursor:pointer;font-weight:700;font-size:14px}\n#e421 .e421-opt fieldset{border:0;margin:10px 0 0;padding:0;display:flex;flex-direction:column;gap:6px}\n#e421 .e421-opt legend{font-size:13px;font-weight:700;color:#334155;margin-bottom:4px;padding:0}\n#e421 .e421-opt label{display:flex;gap:8px;align-items:center;font-size:14px;min-height:34px}\n#e421 .e421-opt input{width:18px;height:18px;accent-color:#1e3a8a}\n#e421 .e421-opt .e421-p{margin-top:8px}\n#e421 .e421-clr{align-self:flex-start;border:0;background:#eef2ff;color:#1e3a8a;border-radius:999px;padding:6px 12px;font:inherit;font-size:13px;font-weight:700;cursor:pointer}\n#e421 .e421-list{display:flex;flex-direction:column;gap:8px}\n#e421 .e421-it{border:1px solid #e5e7ef;border-radius:14px;padding:10px 12px;display:flex;flex-direction:column;gap:4px;border-inline-start:4px solid #cbd5e1}\n#e421 .e421-it.new{border-inline-start-color:#047857}#e421 .e421-it.upd{border-inline-start-color:#1e3a8a}#e421 .e421-it.err{border-inline-start-color:#b91c1c;background:#fef2f2}\n#e421 .e421-it .t{display:flex;gap:8px;align-items:center}#e421 .e421-it .t b{flex:1;min-width:0;font-size:15px;overflow-wrap:anywhere}\n#e421 .e421-it .m{color:#64748b;font-size:12px;overflow-wrap:anywhere}\n#e421 .e421-it .er{color:#b91c1c;font-size:13px;font-weight:700}#e421 .e421-it .wr{color:#92400e;font-size:12px}\n#e421 .e421-it .ch{display:flex;flex-wrap:wrap;gap:6px}\n#e421 .e421-it .ch span{font-size:12px;background:#eef2ff;color:#172554;border-radius:8px;padding:3px 8px}\n#e421 .e421-it .ch s{color:#64748b}\n#e421 .e421-b{font-size:11px;font-weight:700;border-radius:999px;padding:3px 9px;white-space:nowrap}\n#e421 .e421-b.new{background:#d1fae5;color:#065f46}#e421 .e421-b.upd{background:#dbeafe;color:#1e3a8a}#e421 .e421-b.same{background:#f1f5f9;color:#475569}#e421 .e421-b.err{background:#fee2e2;color:#991b1b}\n#e421 .e421-empty{text-align:center;color:#64748b;padding:20px;font-size:14px}\n#e421 .e421-ok{text-align:center;padding:16px 4px;display:flex;flex-direction:column;align-items:center;gap:8px}\n#e421 .e421-ok .ic{width:64px;height:64px;border-radius:50%;background:#047857;color:#fff;font-size:32px;display:flex;align-items:center;justify-content:center;box-shadow:inset 0 -4px 0 #f59e0b}\n#e421 .e421-res{display:flex;gap:10px}#e421 .e421-res span{display:flex;flex-direction:column;align-items:center;min-width:110px;border:1px solid #e5e7ef;border-radius:14px;padding:10px;font-size:13px;color:#64748b}#e421 .e421-res b{font-size:24px;color:#0f172a}\n#e421 .e421-ok h3{margin:4px 0 0;font-size:19px}#e421 .e421-ok p{margin:0}\n#e421 .ld{display:none;position:absolute;inset:0;background:rgba(255,255,255,.7);align-items:center;justify-content:center}\n#e421.busy .ld{display:flex}#e421 .ld span{width:40px;height:40px;border-radius:50%;border:4px solid #c7d2fe;border-top-color:#1e3a8a;animation:e421s .8s linear infinite}\n@keyframes e421s{to{transform:rotate(360deg)}}\n#e421 button:focus-visible,#e421 select:focus-visible,#e421 textarea:focus-visible,#e421 input:focus-visible,#e421 summary:focus-visible{outline:3px solid #f59e0b;outline-offset:2px}\n.e421-toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:2147483647;background:#172554;color:#fff;padding:10px 16px;border-radius:12px;font-size:14px;font-weight:700;box-shadow:inset 0 -3px 0 #f59e0b;max-width:calc(100% - 32px);text-align:center;direction:rtl}\n.e421-toast.bad{background:#7f1d1d;box-shadow:none}\n@media (max-width:560px){#e421{padding:0;align-items:stretch}#e421 .win{width:100%;max-height:none;height:100%;border-radius:0}#e421 .e421-map{grid-template-columns:1fr}#e421 .e421-sum b{font-size:19px}}\n\n";document.head.appendChild(s)})();
(function(RW){var PH=RW.EMDPosH,PLS=PH.ls;
var window=new Proxy(RW,{get:function(t,k){if(k==='db')return PH.db();if(k==='localStorage')return PLS;if(PH.alias[k]&&!(k in t))return PH.alias[k];var v=t[k];return typeof v==='function'&&PH.nat(v)?v.bind(t):v},set:function(t,k,v){t[k]=v;return true},has:function(t,k){return k in t||!!PH.alias[k]}});
/* ---- EMD-V448-invoices ---- */

(function(){
'use strict';
if(window.EMD448)return;
var CUR='ر.ع';
var STL={new:'جديد',waiting:'بانتظار المنتج',ready:'جاهز للتجهيز',packing:'قيد التجهيز',preparing:'قيد التجهيز',shipped:'تم الشحن',out_for_delivery:'مع المندوب',received:'تم الاستلام',delivered:'تم الاستلام',returned:'مرتجع',cancelled:'ملغي',canceled:'ملغي'};
function $(i){return document.getElementById(i)}
function D(){return window.db||{}}
function arr(x){return Array.isArray(x)?x:[]}
function S(){try{return window.EMDDirectV113._s()}catch(e){return {}}}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function digits(s){return String(s==null?'':s).replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/[۰-۹]/g,function(d){return '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)})}
function norm(x){return digits(String(x||'')).replace(/[ـ]/g,'').replace(/[أإآ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').trim().toLowerCase().replace(/\s+/g,' ')}
function num(v){var x=parseFloat(digits(v).replace(/[,،\s]/g,''));return isFinite(x)?x:0}
function fmt(x){return (Math.round((num(x)+Number.EPSILON)*1000)/1000).toFixed(3)}
function pad(x){return (x<10?'0':'')+x}
function dkey(t){return t.getFullYear()+'-'+pad(t.getMonth()+1)+'-'+pad(t.getDate())}
function ftime(t){var h=t.getHours();return (h%12||12)+':'+pad(t.getMinutes())+' '+(h>=12?'م':'ص')}
function M(){return window.EMDMoneyV75||null}
function oid(o){return String(o.id!=null?o.id:(o.orderNumber!=null?o.orderNumber:(o.number||'')))}
function shown(id){try{return window.EMDPrefixV129?EMDPrefixV129.fmt(id):id}catch(e){return id}}
function odate(o){var t=new Date(o.orderDate||o.created||o.createdAt||o.date||o.timestamp||0);return isNaN(t)||t.getTime()<=0?null:t}
function isVoid(o){var s=String(o.status||'').toLowerCase();return s==='cancelled'||s==='canceled'||o.cancelled===true}
function total(o){var m=M();return m?m.total(o):num(o.total)}
function paid(o){var m=M();return m?m.paid(o):num(o.paidAmount)}
function rem(o){var m=M();return m?m.remaining(o):Math.max(0,total(o)-paid(o))}
function pstate(o){if(isVoid(o))return 'void';var m=M();return m?m.payState(o):(rem(o)>0.0005?'unpaid':'paid')}
function items(o){return arr(o.products||o.items||o.orderItems)}
/* من يرى فواتير الطلبات: صاحب صلاحية «مشاهدة الأسعار والمبالغ» */
function can(){try{var St=window.EMDStaffV108;if(St&&St.can&&!St.can('prices'))return false}catch(e){}return !!M()}

function seg(){if(!can())return '';var s=S().e448src==='orders';
  return '<div class="e448-seg" role="group" aria-label="نوع الفواتير"><button type="button" data-e448src="direct" aria-pressed="'+(!s)+'">🛒 البيع المباشر</button><button type="button" data-e448src="orders" aria-pressed="'+s+'">📦 الطلبات</button></div>'}

function inRange(t,st){if(st.e448p==='all')return true;if(!t)return false;var k=dkey(t),now=new Date();
  if(st.e448p==='today')return k===dkey(now);
  if(st.e448p==='week'){var a=new Date(now);a.setDate(a.getDate()-6);return k>=dkey(a)&&k<=dkey(now)}
  if(st.e448p==='month')return k.slice(0,7)===dkey(now).slice(0,7);
  if(st.e448p==='range'){var f=st.e448f||'',to=st.e448t||'';if(f&&k<f)return false;if(to&&k>to)return false;return true}
  return true}
function match(o,q){if(!q)return true;var qd=q.replace(/\D/g,''),idd=oid(o).replace(/\D/g,'');
  /* أرقام فقط: رقم الطلب أو الهاتف، وليس أسماء المنتجات */
  if(qd&&qd===q.replace(/[\s#-]/g,'')){if(idd&&String(+idd)===String(+qd))return true;return qd.length>=3&&digits(o.phone||'').replace(/\D/g,'').indexOf(qd)>=0}
  if(norm(shown(oid(o))).indexOf(q)>=0||norm(oid(o)).indexOf(q)>=0)return true;
  if(norm(o.name||o.customerName).indexOf(q)>=0)return true;
  if(qd.length>=3&&digits(o.phone||'').replace(/\D/g,'').indexOf(qd)>=0)return true;
  return items(o).some(function(x){return norm(x&&(x.name||x.product||x.productName)).indexOf(q)>=0})}
function filtered(st){var q=norm(st.e448q||'');
  return arr(D().orders).filter(function(o){if(!o)return false;var ps=pstate(o);
    if(st.e448m==='paid'&&ps!=='paid')return false;
    if(st.e448m==='due'&&(ps==='void'||rem(o)<=0.0005))return false;
    if(st.e448m==='void'&&ps!=='void')return false;
    return inRange(odate(o),st)&&match(o,q)})
   .sort(function(a,b){var x=odate(a),y=odate(b);return (y?y.getTime():0)-(x?x.getTime():0)})}
function chips(cur,key,list){return '<div class="emd113-chips">'+list.map(function(p){return '<button type="button" class="emd113-chip'+(cur===p[0]?' on':'')+'" data-e448k="'+key+'" data-v="'+p[0]+'">'+p[1]+'</button>'}).join('')+'</div>'}

function list(){var st=S();if(st.e448src!=='orders'||!can())return false;
  if(!st.e448p)st.e448p='month';if(!st.e448m)st.e448m='all';
  var b=$('emd113Body');if(!b)return false;
  b.innerHTML=seg()+'<input class="emd113-in" id="e448Q" placeholder="🔎 رقم الطلب أو اسم العميل أو الهاتف أو المنتج" value="'+esc(st.e448q||'')+'" autocomplete="off" inputmode="search">'
   +chips(st.e448p,'p',[['today','اليوم'],['week','آخر 7 أيام'],['month','هذا الشهر'],['range','📅 من تاريخ إلى تاريخ'],['all','الكل']])
   +(st.e448p==='range'?'<div class="emd113-g2" style="margin:6px 0"><label style="font-size:13px;color:#475569">من تاريخ<input class="emd113-in" type="date" id="e448F" value="'+esc(st.e448f||'')+'"></label><label style="font-size:13px;color:#475569">إلى تاريخ<input class="emd113-in" type="date" id="e448T" value="'+esc(st.e448t||'')+'"></label></div>':'')
   +chips(st.e448m,'m',[['all','الكل'],['paid','مدفوعة'],['due','⏳ عليها متبقي'],['void','🚫 ملغاة']])
   +'<div id="e448LB"></div><div class="e448-ro">🔒 للاطلاع والطباعة والإرسال فقط. تعديل الطلبات من قسم الطلبات.</div>';
  body();return true}
function body(){var el=$('e448LB');if(!el)return;var st=S(),L=filtered(st),a={n:0,t:0,c:0};
  L.forEach(function(o){if(isVoid(o))return;a.n++;a.t+=total(o);a.c+=paid(o)});
  var h='<div class="emd113-stats"><div class="emd113-stat"><small>عدد الفواتير</small><b>'+a.n+'</b></div><div class="emd113-stat"><small>الإجمالي</small><b>'+fmt(a.t)+'</b></div><div class="emd113-stat"><small>المبالغ المحصّلة</small><b style="color:#15803d">'+fmt(a.c)+'</b></div><div class="emd113-stat"><small>المتبقي (غير محصّل)</small><b style="color:#b45309">'+fmt(Math.max(0,a.t-a.c))+'</b></div></div>';
  if(!L.length)h+='<div class="emd113-note">لا توجد طلبات مطابقة.</div>';
  h+=L.slice(0,200).map(function(o){var ps=pstate(o),r=rem(o),t=odate(o),id=oid(o),s=String(o.status||'new').toLowerCase();
    var tag=ps==='void'?'<span class="emd113-tag v">ملغاة</span>':ps==='paid'?'<span class="emd113-tag p">مدفوعة</span>':ps==='partial'?'<span class="emd113-tag h">جزئي</span>':'<span class="emd113-tag c">غير مدفوعة</span>';
    return '<div class="emd113-row" role="button" tabindex="0" data-e448o="'+esc(id)+'"><div><b><span dir="ltr">'+esc(shown(id))+'</span>'+tag+'</b><small>'+esc(o.name||o.customerName||'بدون اسم')+(o.phone?' · <span dir="ltr">'+esc(o.phone)+'</span>':'')+'</small><small class="e448-st">'+(t?esc(dkey(t)+' · '+ftime(t))+' · ':'')+'الحالة: '+esc(STL[s]||s)+'</small></div><div style="text-align:left"><b>'+fmt(total(o))+' '+CUR+'</b>'+(r>0.0005&&ps!=='void'?'<small style="color:#b45309">متبقي '+fmt(r)+'</small>':'')+'</div></div>'}).join('');
  if(L.length>200)h+='<div class="emd113-note">تظهر أحدث 200 فاتورة من '+L.length+'. اكتب في البحث لتضييق النتائج.</div>';
  el.innerHTML=h}
function rerender(){try{window.EMDDirectV113._render()}catch(e){}}
function openInv(id){var m=M();if(!m||!m.invoice)return;try{m.invoice(id)}catch(e){console.warn('V448',e)}}

var tq=null;
document.addEventListener('click',function(e){var ov=$('emd113Ov');if(!ov||!ov.contains(e.target))return;var t;
  if((t=e.target.closest('[data-e448src]'))){var st=S();st.e448src=t.getAttribute('data-e448src');st.detail=null;return rerender()}
  if((t=e.target.closest('[data-e448k]'))){var s2=S(),k=t.getAttribute('data-e448k'),v=t.getAttribute('data-v');if(k==='p'){s2.e448p=v;if(v==='range'&&!s2.e448f)s2.e448f=s2.e448t=dkey(new Date())}else s2.e448m=v;return list()}
  if((t=e.target.closest('[data-e448o]')))return openInv(t.getAttribute('data-e448o'));
  if((t=e.target.closest('[data-a="e448cust"]'))){var bx=t.closest('.e448-cust');S().e448c=true;if(bx)bx.classList.add('open');var n=$('emd113CN');if(n)try{n.focus()}catch(x){}return}
  if((t=e.target.closest('[data-a="e448cart"]'))){var c=$('emd113Cart'),box=c&&c.closest('.emd113-box');if(box)box.scrollIntoView({behavior:'smooth',block:'start'});return}
});
document.addEventListener('keydown',function(e){var t=e.target;if(t&&t.getAttribute&&t.getAttribute('data-e448o')&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openInv(t.getAttribute('data-e448o'))}});
document.addEventListener('input',function(e){var t=e.target;if(!t||!t.id)return;var st=S();
  if(t.id==='e448Q'){st.e448q=t.value;clearTimeout(tq);tq=setTimeout(body,250);return}
  if(t.id==='e448F'||t.id==='e448T'){if(t.id==='e448F')st.e448f=t.value;else st.e448t=t.value;body()}});
/* اختصارات الحاسوب: F2 البحث، F9 إتمام البيع (Esc للإغلاق موجود سابقًا) */
document.addEventListener('keydown',function(e){var ov=$('emd113Ov');if(!ov||!ov.classList.contains('show'))return;var st=S();if(st.done)return;
  if(e.key==='F2'){e.preventDefault();if(st.tab!=='new'){st.tab='new';st.detail=null;rerender()}var q=$('emd113Q');if(q){q.focus();try{q.select()}catch(x){}}return}
  if(e.key==='F9'){e.preventDefault();if(st.tab!=='new')return;var g=document.querySelector('#emd113Ft [data-a="go"]');if(g&&!g.disabled)g.click()}});
/* عند تغيّر عرض الشاشة بين الجوال والحاسوب يُعاد ترتيب شاشة البيع */
var wide=innerWidth>=900;
addEventListener('resize',function(){var w=innerWidth>=900;if(w===wide)return;wide=w;var st=S(),ov=$('emd113Ov');if(ov&&ov.classList.contains('show')&&st.tab==='new'&&!st.done&&!(document.activeElement&&/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)))rerender()});
window.EMD448={version:'V448',seg:seg,list:list,can:can};
})();

/* ---- EMD-V419-pos ---- */

(function(){'use strict';if(window.__EMD_V419__)return;window.__EMD_V419__=1;
function $(i){return document.getElementById(i)}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function num(v){v=Number(String(v==null?'':v).replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(',','.'));return isFinite(v)?v:0}
function r3(v){return Math.round(v*1000)/1000}
function ls(k,v){try{if(v===undefined)return PLS.getItem(k);PLS.setItem(k,v)}catch(e){return null}}
function mode(){try{return window.EMDModesV416.mode()}catch(e){return 'online'}}
function on(){return mode()!=='online'}
function API(){return window.EMDDirectV113||{}}
function S(){try{return API()._s()}catch(e){return null}}
function prods(){return (window.db&&Array.isArray(window.db.products))?window.db.products:[]}
function fmt(v){return num(v).toFixed(3)}
var METH={cash:'💵 نقدًا',card:'💳 بطاقة',transfer:'🏦 تحويل',other:'🔁 أخرى'};
function toast(t,ok){var d=document.createElement('div');d.className='e419-toast'+(ok?' ok':'');d.textContent=t;document.body.appendChild(d);setTimeout(function(){d.remove()},2200)}
var ac=null;function beep(ok){try{ac=ac||new (window.AudioContext||window.webkitAudioContext)();var o=ac.createOscillator(),g=ac.createGain();o.frequency.value=ok?1560:320;g.gain.value=0.08;o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+(ok?0.09:0.25))}catch(e){}}

/* ===== أدوات المنتجات داخل البيع المباشر ===== */
function view(){return ls('emd419_view')==='list'?'list':'grid'}
function cats(){var m={},o=[];prods().forEach(function(p){var c=String(p&&p.category||'').trim();if(c&&!m[c]){m[c]=1;o.push(c)}});return o}
function prodTools(s){if(!on())return '';var cs=cats();
  return '<div class="e419-tools"><button type="button" class="e419-scan" data-e419="cam">📷 مسح باركود</button><div class="e419-vw" role="group" aria-label="طريقة العرض"><button type="button" data-e419="grid" aria-pressed="'+(view()==='grid')+'">▦ شبكة</button><button type="button" data-e419="list" aria-pressed="'+(view()==='list')+'">☰ قائمة</button></div></div>'+
   (cs.length?'<div class="e419-cats"><button type="button" data-e419="cat" data-v="" aria-pressed="'+(!s.cat)+'">الكل</button>'+cs.map(function(c){return '<button type="button" data-e419="cat" data-v="'+esc(c)+'" aria-pressed="'+(s.cat===c)+'">'+esc(c)+'</button>'}).join('')+'</div>':'')}
function applyView(){var pl=$('emd113Pl');if(pl)pl.classList.toggle('e419grid',on()&&view()==='grid')}

/* ===== الدفع: حساب الباقي + الدفع المقسّم ===== */
function payBox(s,c){var el=$('emd419Pay');if(!el)return;if(!on()){el.innerHTML='';return}
  var tot=c.total,h='';
  if(s.mode==='split'){var opt=function(sel){return Object.keys(METH).filter(function(k){return !window.EMD449||EMD449.methOk(k)}).map(function(k){return '<option value="'+k+'"'+(sel===k?' selected':'')+'>'+METH[k]+'</option>'}).join('')};
    var rest=r3(tot-num(s.sa)-num(s.sb));
    h='<div class="e419-split"><div class="e419-sr"><select id="e419MA" aria-label="الوسيلة الأولى">'+opt(s.ma||'cash')+'</select><input id="e419SA" inputmode="decimal" placeholder="المبلغ" value="'+esc(s.sa||'')+'" aria-label="مبلغ الوسيلة الأولى"></div>'+
      '<div class="e419-sr"><select id="e419MB" aria-label="الوسيلة الثانية">'+opt(s.mb||'card')+'</select><input id="e419SB" inputmode="decimal" placeholder="المبلغ" value="'+esc(s.sb||'')+'" aria-label="مبلغ الوسيلة الثانية"></div>'+
      '<button type="button" class="e419-fill" data-e419="fill">أكمل الباقي في الوسيلة الثانية ('+fmt(Math.max(0,r3(tot-num(s.sa))))+')</button>'+
      (Math.abs(rest)>0.0005&&(num(s.sa)||num(s.sb))?'<div class="e419-warn">'+(rest>0?'باقي '+fmt(rest)+' لم يُدفع بعد':'المجموع أكبر من الإجمالي بـ '+fmt(-rest))+'</div>':'')+'</div>'}
  else if(s.mode==='full'&&s.method==='cash'&&tot>0&&(!window.EMD449||EMD449.opt('change'))){var t=num(s.tender),ch=r3(t-tot),sug=[tot],steps=[1,5,10,20,50];steps.forEach(function(st){var v=Math.ceil(tot/st)*st;if(v>tot&&sug.indexOf(v)<0&&sug.length<5)sug.push(v)});
    h='<div class="e419-tender"><label for="e419T">المبلغ المستلم من العميل</label><input id="e419T" inputmode="decimal" placeholder="'+fmt(tot)+'" value="'+esc(s.tender||'')+'">'+
      '<div class="e419-sug">'+sug.map(function(v){return '<button type="button" data-e419="tender" data-v="'+v+'">'+(v===tot?'المبلغ بالضبط':fmt(v))+'</button>'}).join('')+'</div>'+
      (t>0?'<div class="e419-change'+(ch<-0.0005?' bad':'')+'"><span>'+(ch<-0.0005?'المبلغ أقل من الإجمالي بـ':'الباقي للعميل')+'</span><b>'+fmt(Math.abs(ch))+'</b></div>':'')+'</div>'}
  if(el.__h!==h){var a=document.activeElement,id=a&&a.id,pos=a&&a.selectionStart;el.innerHTML=h;el.__h=h;if(id&&/^e419/.test(id)){var n=$(id);if(n){n.focus();try{n.setSelectionRange(pos,pos)}catch(e){}}}}}

/* ===== المسح ===== */
function findCode(code){code=String(code||'').trim();if(!code)return null;var L=prods();
  for(var i=0;i<L.length;i++){var p=L[i];if(!p)continue;if(String(p.barcode||'')===code||String(p.code||'')===code||String(p.sku||'')===code)return p}
  return null}
function scan(code){code=String(code||'').trim().replace(/\s+/g,'');if(code.length<3)return false;var s=S();if(!s)return false;
  if(window.EMD451&&EMD451.scale(code)){beep(true);return true}
  var p=findCode(code);
  if(p){try{API()._add(p.name)}catch(e){}beep(true);toast('✓ '+p.name,true);s.q='';var q=$('emd113Q');if(q)q.value='';try{API()._rp()}catch(e){}return true}
  beep(false);linkSheet(code);return true}
/* باركود غير معروف: اربطه بمنتج مرة واحدة */
function linkSheet(code){var o=document.createElement('div');o.className='e419-ov';o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');o.setAttribute('aria-labelledby','e419LT');
  o.innerHTML='<div class="e419-win"><h3 id="e419LT">باركود غير مسجّل</h3><p>الرقم <b dir="ltr">'+esc(code)+'</b> غير مربوط بأي منتج. اختر المنتج ليُربط به، ومن المرة القادمة يُضاف مباشرة.</p><input class="e419-in" id="e419LQ" placeholder="ابحث عن المنتج…" autocomplete="off"><div class="e419-ll" id="e419LL"></div><button type="button" class="e419-cancel" data-k="x">إلغاء</button></div>';
  document.body.appendChild(o);
  function list(q){q=String(q||'').trim();var L=prods().filter(function(p){return p&&p.name&&(!q||String(p.name).indexOf(q)>=0)}).slice(0,40);
    $('e419LL').innerHTML=L.map(function(p,i){return '<button type="button" data-k="p" data-v="'+esc(p.name)+'"><span>'+esc(p.name)+'</span>'+(p.barcode?'<small dir="ltr">'+esc(p.barcode)+'</small>':'')+'</button>'}).join('')||'<div class="e419-empty">لا توجد منتجات بهذا الاسم</div>'}
  list('');setTimeout(function(){var i=$('e419LQ');if(i)i.focus()},50);
  o.addEventListener('input',function(e){if(e.target.id==='e419LQ')list(e.target.value)});
  o.addEventListener('keydown',function(e){if(e.key==='Escape')o.remove()});
  o.addEventListener('click',function(e){if(e.target===o){o.remove();return}var b=e.target.closest('[data-k]');if(!b)return;if(b.getAttribute('data-k')==='x'){o.remove();return}
    var name=b.getAttribute('data-v'),p=prods().find(function(x){return x&&x.name===name});if(!p)return;
    if(p.barcode&&p.barcode!==code&&!confirm('«'+p.name+'» مربوط بباركود آخر ('+p.barcode+'). استبداله؟'))return;
    p.barcode=code;try{API()._save()}catch(err){}
    o.remove();try{API()._add(p.name)}catch(x){}beep(true);toast('تم ربط الباركود بـ «'+p.name+'» وإضافته',true)})}
/* قارئ USB/بلوتوث: يكتب الأرقام بسرعة ثم Enter */
var buf='',bt=0;
document.addEventListener('keydown',function(e){var s=S();if(!s||!s.open||!on()||s.tab!=='new')return;var t=e.target,inQ=t&&t.id==='emd113Q';
  if(e.key==='Enter'){if(inQ){var v=t.value.trim();if(v&&findCode(v)){e.preventDefault();scan(v);return}if(/^\d{6,}$/.test(v)){e.preventDefault();scan(v);return}}
    else if(buf.length>=4&&Date.now()-bt<120){e.preventDefault();var c=buf;buf='';scan(c);return}buf='';return}
  if(t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.tagName==='SELECT'))return;
  if(e.key.length===1){var n=Date.now();if(n-bt>120)buf='';buf+=e.key;bt=n}},true);
/* كاميرا الجوال */
var cam=null;
function camOpen(){if(!('BarcodeDetector' in window)){toast('مسح الكاميرا غير مدعوم في هذا المتصفح. استخدم Chrome على الأندرويد، أو قارئ باركود.');return}
  if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){toast('الكاميرا غير متاحة هنا');return}
  var o=document.createElement('div');o.className='e419-cam';o.setAttribute('role','dialog');o.setAttribute('aria-label','مسح الباركود');
  o.innerHTML='<video playsinline muted></video><div class="e419-frame" aria-hidden="true"></div><div class="e419-cbar"><span id="e419CS">وجّه الكاميرا إلى الباركود</span><button type="button" data-k="x">إغلاق</button></div>';
  document.body.appendChild(o);var v=o.querySelector('video'),stream=null,det=null,stop=false,last='',lastT=0;
  cam={close:function(){stop=true;try{stream&&stream.getTracks().forEach(function(t){t.stop()})}catch(e){}o.remove();cam=null}};
  o.addEventListener('click',function(e){if(e.target.closest('[data-k="x"]'))cam.close()});
  BarcodeDetector.getSupportedFormats().then(function(f){var want=['ean_13','ean_8','upc_a','upc_e','code_128','code_39','qr_code','itf'].filter(function(x){return f.indexOf(x)>=0});det=new BarcodeDetector({formats:want.length?want:undefined})}).catch(function(){det=new BarcodeDetector()}).then(function(){
    return navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'},audio:false})}).then(function(st){stream=st;v.srcObject=st;return v.play()}).then(function(){
    (function loop(){if(stop)return;det.detect(v).then(function(r){if(r&&r.length){var c=r[0].rawValue,n=Date.now();if(c&&(c!==last||n-lastT>1800)){last=c;lastT=n;var ok=!!findCode(c);if(ok){scan(c);$('e419CS').textContent='✓ تمت الإضافة — امسح المنتج التالي'}else{cam.close();scan(c);return}}}setTimeout(loop,180)}).catch(function(){setTimeout(loop,300)})})()})
  .catch(function(){toast('لم نتمكن من فتح الكاميرا. اسمح للتطبيق باستخدامها.');cam&&cam.close()})}

/* ===== الأحداث ===== */
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-e419]');if(!b)return;var s=S();if(!s)return;var k=b.getAttribute('data-e419');
  if(k==='cam')return camOpen();
  if(k==='grid'||k==='list'){ls('emd419_view',k);[].forEach.call(document.querySelectorAll('.e419-vw button'),function(x){x.setAttribute('aria-pressed',String(x.getAttribute('data-e419')===k))});applyView();return}
  if(k==='cat'){s.cat=b.getAttribute('data-v')||'';[].forEach.call(document.querySelectorAll('.e419-cats button'),function(x){x.setAttribute('aria-pressed',String((x.getAttribute('data-v')||'')===s.cat))});try{API()._rp()}catch(x){}return}
  if(k==='tender'){s.tender=b.getAttribute('data-v');try{API()._rc()}catch(x){}return}
  if(k==='fill'){var c=API().calc(API()._draft());s.sb=String(Math.max(0,r3(c.total-num(s.sa))));try{API()._rc()}catch(x){}return}},true);
document.addEventListener('input',function(e){var t=e.target,s=S();if(!s||!t||!t.id||!/^e419(T|SA|SB|MA|MB)$/.test(t.id))return;
  if(t.id==='e419T')s.tender=t.value;else if(t.id==='e419SA')s.sa=t.value;else if(t.id==='e419SB')s.sb=t.value;else if(t.id==='e419MA')s.ma=t.value;else if(t.id==='e419MB')s.mb=t.value;try{API()._rc()}catch(x){}},true);
document.addEventListener('change',function(e){var t=e.target,s=S();if(!s||!t||!/^e419M[AB]$/.test(t.id||''))return;if(t.id==='e419MA')s.ma=t.value;else s.mb=t.value;try{API()._rc()}catch(x){}},true);
window.EMD419={on:on,prodTools:prodTools,payBox:payBox,scan:scan,applyView:applyView};
})();

/* ---- EMD-V420-pos2 ---- */

(function(){'use strict';if(window.__EMD_V420__)return;window.__EMD_V420__=1;
function $(i){return document.getElementById(i)}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function num(v){v=Number(String(v==null?'':v).replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(',','.'));return isFinite(v)?v:0}
function r3(v){return Math.round(v*1000)/1000}
function f3(v){return num(v).toFixed(3)}
function ls(k,v){try{if(v===undefined)return PLS.getItem(k);if(v===null)PLS.removeItem(k);else PLS.setItem(k,v)}catch(e){return null}}
function J(k,d){try{var x=JSON.parse(ls(k)||'null');return x==null?d:x}catch(e){return d}}
function W(k,v){ls(k,JSON.stringify(v))}
function mode(){try{return window.EMDModesV416.mode()}catch(e){return 'online'}}
function on(){return mode()!=='online'}
function API(){return window.EMDDirectV113||{}}
function S(){try{return API()._s()}catch(e){return null}}
function D(){return window.db||{}}
function prof(){return J('emd_business_profile_v333',{})||{}}
function cur(){var c=prof().currency;return (!c||c==='OMR')?'ر.ع':c}
function who(){try{var m=J('emd_manager_profile_v41',null);if(m&&m.name)return m.name}catch(e){}return ''}
function tm(iso){var d=new Date(iso);return isNaN(d)?'':d.toLocaleTimeString('ar-OM',{hour:'numeric',minute:'2-digit'})}
function dn(v){return v&&typeof v==='object'?String(v.name||''):String(v||'')}
function dts(iso){var d=new Date(iso);if(isNaN(d))return '';function z(n){return (n<10?'0':'')+n}return z(d.getDate())+'/'+z(d.getMonth()+1)+'/'+d.getFullYear()+'  '+z(d.getHours())+':'+z(d.getMinutes())}
function dt(iso){var d=new Date(iso);return isNaN(d)?'':d.toLocaleDateString('ar-OM',{day:'numeric',month:'long',year:'numeric'})+' · '+tm(iso)}
var MN={cash:'نقد',card:'بطاقة',transfer:'تحويل',other:'أخرى'};
function toast(t,ok){[].forEach.call(document.querySelectorAll('.e420-toast'),function(x){x.remove()});var d=document.createElement('div');d.className='e420-toast'+(ok===false?' bad':'');d.textContent=t;document.body.appendChild(d);setTimeout(function(){d.remove()},2400)}
/* ===== الإعدادات ===== */
function pos(){var p=J('emd420_pos',{})||{};return {vat:!!p.vat,rate:num(p.rate)||5,vatNo:String(p.vatNo||''),auto:!!p.auto,footer:String(p.footer==null?'شكرًا لزيارتكم':p.footer)}}
function savePos(p){W('emd420_pos',p)}
/* ===== الوردية ===== */
function shift(){var s=J('emd420_shift',null);return s&&s.openAt?s:null}
function shifts(){var a=J('emd420_shifts',[]);return Array.isArray(a)?a:[]}
function calcShift(sh,endIso){var a=new Date(sh.openAt),b=endIso?new Date(endIso):new Date(Date.now()+1000),o={by:{cash:0,card:0,transfer:0,other:0},ref:{cash:0,card:0,transfer:0,other:0},count:0,sales:0,items:0};
  (Array.isArray(D().directSales)?D().directSales:[]).forEach(function(s){if(!s)return;var t=new Date(s.at);
    if(t>=a&&t<b){var st='';try{st=API().statusOf(s)}catch(e){}if(st!=='void'){o.count++;try{o.sales+=num(API().netTotal(s))}catch(e){o.sales+=num(s.total)}(s.items||[]).forEach(function(i){o.items+=num(i.qty)})}}
    (s.payments||[]).forEach(function(p){var d=new Date(p.at);if(d>=a&&d<b&&p.method!=='exchange'){var m=MN[p.method]?p.method:'other';o.by[m]+=num(p.amount)}});
    (s.ops||[]).forEach(function(p){var d=new Date(p.at);if(d>=a&&d<b&&num(p.refund)>0&&p.method!=='exchange'){var m=MN[p.method]?p.method:'other';o.ref[m]+=num(p.refund)}})});
  Object.keys(o.by).forEach(function(k){o.by[k]=r3(o.by[k]);o.ref[k]=r3(o.ref[k])});o.sales=r3(o.sales);
  o.cin=0;o.cout=0;(Array.isArray(sh.moves)?sh.moves:[]).forEach(function(m){if(m&&m.type==='in')o.cin+=num(m.amt);else if(m&&m.type==='out')o.cout+=num(m.amt)});o.cin=r3(o.cin);o.cout=r3(o.cout);o.expected=r3(num(sh.float)+o.by.cash-o.ref.cash+o.cin-o.cout);o.collected=r3(o.by.cash+o.by.card+o.by.transfer+o.by.other);return o}
function openShift(fl){var sh={id:'SH-'+Date.now().toString(36).toUpperCase(),openAt:new Date().toISOString(),float:r3(num(fl)),by:who()};W('emd420_shift',sh);return sh}
function closeShift(counted,note){var sh=shift();if(!sh)return null;var end=new Date().toISOString(),c=calcShift(sh,end);
  var z={id:sh.id,openAt:sh.openAt,closeAt:end,by:sh.by,closedBy:who(),float:sh.float,counted:r3(num(counted)),diff:r3(num(counted)-c.expected),note:String(note||''),calc:c,moves:Array.isArray(sh.moves)?sh.moves:[],opens:Array.isArray(sh.opens)?sh.opens:[]};
  var all=shifts();all.unshift(z);W('emd420_shifts',all.slice(0,200));ls('emd420_shift',null);return z}
/* ===== رسم الإيصال 80 مم (عرض الطباعة 72 مم) ===== */
var FONT="'IBM Plex Sans Arabic','Noto Kufi Arabic',Tahoma,Arial,sans-serif";
var LOGOSVG='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><rect width="1024" height="1024" rx="230" fill="#000"/><g fill="#fff"><rect x="190" y="212" width="644" height="520" rx="150"/><path d="M290 700 L250 846 Q246 862 262 856 L438 740 Z"/></g><g fill="#000"><rect x="366" y="326" width="76" height="316" rx="38"/><rect x="366" y="326" width="292" height="76" rx="38"/><rect x="366" y="566" width="292" height="76" rx="38"/><rect x="366" y="446" width="214" height="76" rx="38"/></g><circle cx="796" cy="236" r="62" fill="#fff" stroke="#000" stroke-width="26"/></svg>';
var logoP=null;function logo(){if(logoP)return logoP;logoP=new Promise(function(res){var src=ls('emd_v89_logo');var fb='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(LOGOSVG);if(!src||!/^data:image|^https?:/.test(src))src=fb;var im=new Image();im.onload=function(){res(im)};im.onerror=function(){var j=new Image();j.onload=function(){res(j)};j.onerror=function(){res(null)};j.src=fb};im.src=src});return logoP}
function paint(spec,lg){var Wd=576,P=14,cv=document.createElement('canvas');cv.width=Wd;cv.height=7000;var x=cv.getContext('2d'),y=P,R=Wd-P,L=P,cw=Wd-2*P;
  x.fillStyle='#fff';x.fillRect(0,0,Wd,cv.height);x.fillStyle='#000';x.textBaseline='top';x.direction='rtl';
  function f(px,b){x.font=(b?'700 ':'500 ')+px+'px '+FONT}
  function wrap(s,px,b,maxW){f(px,b);var w=String(s).split(/\s+/),o=[],c='';w.forEach(function(t){var n=c?c+' '+t:t;if(x.measureText(n).width>maxW&&c){o.push(c);c=t}else c=n});if(c)o.push(c);return o.length?o:['']}
  spec.forEach(function(it){var sz=it.size||24;
    if(it.t==='logo'){if(lg){x.drawImage(lg,(Wd-96)/2,y,96,96);y+=104}}
    else if(it.t==='c'){wrap(it.text,sz,it.b,cw).forEach(function(l){f(sz,it.b);x.textAlign='center';x.fillText(l,Wd/2,y);y+=sz*1.45})}
    else if(it.t==='r'){var rw=it.rv==null?'':String(it.rv);f(sz,it.b);x.direction='ltr';var rwW=x.measureText(rw).width;x.direction='rtl';var ls2=wrap(it.l,sz,it.b,cw-rwW-16);ls2.forEach(function(l,i){f(sz,it.b);x.textAlign='right';x.fillText(l,R,y);if(i===0&&rw){x.textAlign='left';x.direction='ltr';x.fillText(rw,L,y);x.direction='rtl'}y+=sz*1.4})}
    else if(it.t==='item'){wrap(it.name,24,true,cw).forEach(function(l){f(24,true);x.textAlign='right';x.fillText(l,R,y);y+=33});f(22,false);x.textAlign='right';x.direction='ltr';x.fillText(it.q+' × '+it.p,R,y);x.direction='rtl';x.textAlign='left';f(24,true);x.direction='ltr';x.fillText(it.n,L,y);x.direction='rtl';y+=34}
    else if(it.t==='hr'){if(it.dash){for(var i=L;i<R;i+=14)x.fillRect(i,y+6,8,2)}else x.fillRect(L,y+5,cw,it.th||3);y+=18}
    else if(it.t==='big'){x.fillRect(L,y,cw,76);x.fillStyle='#fff';f(26,true);x.textAlign='right';x.fillText(it.l,R-14,y+22);f(36,true);x.textAlign='left';x.direction='ltr';x.fillText(it.rv,L+14,y+17);x.direction='rtl';x.fillStyle='#000';y+=88}
    else if(it.t==='qr'){try{var q=window.EMDqr418(0,'M');q.addData(it.data);q.make();var n=q.getModuleCount(),S2=180,m=S2/n,x0=(Wd-S2)/2;for(var r=0;r<n;r++)for(var k=0;k<n;k++)if(q.isDark(r,k))x.fillRect(Math.floor(x0+k*m),Math.floor(y+r*m),Math.ceil(m),Math.ceil(m));y+=S2+10}catch(e){}}
    else if(it.t==='gap'){y+=it.h||12}});
  y+=P+20;var out=document.createElement('canvas');out.width=Wd;out.height=y;var o2=out.getContext('2d');o2.fillStyle='#fff';o2.fillRect(0,0,Wd,y);o2.drawImage(cv,0,0);return out}
function head(){var p=prof(),c=pos(),a=[{t:'logo'}];if(p.name)a.push({t:'c',text:p.name,size:34,b:true});if(p.location)a.push({t:'c',text:p.location,size:22});if(p.phone)a.push({t:'c',text:'هاتف '+p.phone,size:22});if(c.vat&&c.vatNo)a.push({t:'c',text:'الرقم الضريبي: '+c.vatNo,size:22,b:true});try{if(window.EMDInvV443)EMDInvV443.rcptHead(a,c)}catch(e){}return a}
function receiptSpec(s){var c=pos(),C=cur(),a=head(),tot=0;try{tot=num(API().netTotal(s))}catch(e){tot=num(s.total)}
  a.push({t:'hr'});a.push({t:'c',text:c.vat?'فاتورة ضريبية مبسطة':'فاتورة بيع',size:26,b:true});
  a.push({t:'r',l:'رقم الفاتورة',rv:s.id,size:22});a.push({t:'r',l:'التاريخ',rv:dts(s.at),size:22});
  if(dn(s.by))a.push({t:'r',l:'الكاشير: '+dn(s.by),size:22});if(s.customer&&(s.customer.name||s.customer.phone))a.push({t:'r',l:'العميل: '+(s.customer.name||'')+' '+(s.customer.phone||''),size:22});
  a.push({t:'hr',dash:1});
  (s.items||[]).forEach(function(i){a.push({t:'item',name:(window.EMD450?EMD450.label(i.name):i.name),q:num(i.qty),p:f3(i.price),n:f3(num(i.net)||num(i.qty)*num(i.price))});if(num(i.disc)>0)a.push({t:'r',l:'خصم',rv:'-'+f3(i.disc),size:20})});
  a.push({t:'hr',dash:1});
  if(num(s.discount)>0){a.push({t:'r',l:'المجموع قبل الخصم',rv:f3(s.subtotal),size:23});a.push({t:'r',l:'خصم الفاتورة',rv:'-'+f3(s.discount),size:23})}
  var ret=r3(num(s.total)-tot);if(ret>0.0005)a.push({t:'r',l:'مرتجعات',rv:'-'+f3(ret),size:23});
  if(c.vat){var v=r3(tot*c.rate/(100+c.rate));a.push({t:'r',l:'المبلغ قبل الضريبة',rv:f3(tot-v),size:23});a.push({t:'r',l:'ضريبة القيمة المضافة '+c.rate+'%',rv:f3(v),size:23})}
  a.push({t:'big',l:'الإجمالي '+(c.vat?'شامل الضريبة':''),rv:f3(tot)+' '+C});
  var paid=0;(s.payments||[]).forEach(function(p){paid+=num(p.amount);a.push({t:'r',l:(p.type==='sale'?'مدفوع ':'تحصيل ')+(MN[p.method]||'أخرى'),rv:f3(p.amount),size:23})});
  if(num(s.tendered)>0){a.push({t:'r',l:'المستلم من العميل',rv:f3(s.tendered),size:23});a.push({t:'r',l:'الباقي للعميل',rv:f3(Math.max(0,s.tendered-paid)),size:24,b:true})}
  var rem=r3(tot-paid+ (function(){var r=0;(s.ops||[]).forEach(function(o){r+=num(o.refund)});return r})());if(rem>0.0005)a.push({t:'r',l:'المتبقي على العميل',rv:f3(rem),size:24,b:true});
  a.push({t:'hr'});a.push({t:'qr',data:'EMD|'+(prof().name||'')+'|'+s.id+'|'+f3(tot)+'|'+s.at});try{if(window.EMDInvV443)EMDInvV443.rcptFoot(a)}catch(e){}a.push({t:'c',text:c.footer||'شكرًا لزيارتكم',size:26,b:true});
  return a}
function zSpec(z){var C=cur(),c=z.calc,a=head();a.push({t:'hr'});a.push({t:'c',text:'تقرير إغلاق الوردية',size:28,b:true});a.push({t:'c',text:z.id,size:20});
  a.push({t:'r',l:'بداية الوردية',rv:dts(z.openAt),size:22});a.push({t:'r',l:'نهاية الوردية',rv:dts(z.closeAt),size:22});if(dn(z.by))a.push({t:'r',l:'الكاشير: '+dn(z.by),size:22});if(dn(z.closedBy)&&dn(z.closedBy)!==dn(z.by))a.push({t:'r',l:'أغلقها: '+dn(z.closedBy),size:22});
  a.push({t:'hr',dash:1});a.push({t:'r',l:'عدد الفواتير',rv:String(c.count),size:23});a.push({t:'r',l:'عدد القطع',rv:String(c.items),size:23});a.push({t:'r',l:'صافي المبيعات',rv:f3(c.sales),size:24,b:true});
  a.push({t:'hr',dash:1});a.push({t:'c',text:'المقبوضات',size:24,b:true});['cash','card','transfer','other'].forEach(function(k){if(c.by[k]||k==='cash')a.push({t:'r',l:MN[k],rv:f3(c.by[k]),size:23})});
  var rf=c.ref.cash+c.ref.card+c.ref.transfer+c.ref.other;if(rf>0){a.push({t:'r',l:'مرتجعات مدفوعة',rv:'-'+f3(rf),size:23})}
  a.push({t:'hr',dash:1});a.push({t:'c',text:'درج النقد',size:24,b:true});a.push({t:'r',l:'مبلغ بداية الوردية',rv:f3(z.float),size:23});a.push({t:'r',l:'+ مقبوضات نقدية',rv:f3(c.by.cash),size:23});if(c.ref.cash)a.push({t:'r',l:'− مرتجعات نقدية',rv:f3(c.ref.cash),size:23});if(c.cin)a.push({t:'r',l:'+ إيداع نقدي',rv:f3(c.cin),size:23});if(c.cout)a.push({t:'r',l:'− سحب نقدي',rv:f3(c.cout),size:23});
  a.push({t:'r',l:'المتوقع في الدرج',rv:f3(c.expected),size:24,b:true});a.push({t:'r',l:'الموجود فعليًا',rv:f3(z.counted),size:24,b:true});
  a.push({t:'big',l:Math.abs(z.diff)<0.0005?'الدرج مطابق ✓':(z.diff>0?'زيادة في الدرج':'عجز في الدرج'),rv:(z.diff>0?'+':'')+f3(z.diff)+' '+C});
  if(z.moves&&z.moves.length){a.push({t:'hr',dash:1});a.push({t:'c',text:'الإيداع والسحب',size:24,b:true});z.moves.forEach(function(m){a.push({t:'r',l:(m.type==='in'?'+ ':'− ')+tm(m.at)+' '+(m.reason||'')+(dn(m.by)?' ('+dn(m.by)+')':''),rv:f3(m.amt),size:21})})}if(z.opens&&z.opens.length)a.push({t:'r',l:'مرات فتح الدرج يدويًا',rv:String(z.opens.length),size:22});if(z.note)a.push({t:'r',l:'ملاحظة: '+z.note,size:22});a.push({t:'gap',h:30});a.push({t:'r',l:'توقيع الكاشير: ____________',size:22});a.push({t:'gap',h:10});a.push({t:'r',l:'توقيع المدير: ____________',size:22});return a}
/* ===== نافذة الإيصال ===== */
var rv=null,cvs=null,name='receipt';
function showImg(spec,fname,title){name=fname;logo().then(function(lg){cvs=paint(spec,lg);
  if(!rv){rv=document.createElement('div');rv.id='e420R';rv.setAttribute('role','dialog');rv.setAttribute('aria-modal','true');rv.setAttribute('aria-labelledby','e420RT');document.body.appendChild(rv);
    rv.addEventListener('click',function(e){if(e.target===rv){rv.classList.remove('show');return}var b=e.target.closest('[data-r]');if(!b)return;var k=b.getAttribute('data-r');if(k==='x')rv.classList.remove('show');else if(k==='share')share();else if(k==='print')print();else if(k==='save')save()});
    rv.addEventListener('keydown',function(e){if(e.key==='Escape')rv.classList.remove('show')})}
  rv.innerHTML='<div class="win"><div class="hd"><h2 id="e420RT">'+esc(title)+'</h2><button type="button" class="x" data-r="x" aria-label="إغلاق">✕</button></div><div class="pv"><img alt="'+esc(title)+'" src="'+cvs.toDataURL('image/png')+'"></div><div class="ft"><button type="button" class="pr" data-r="print">🖨️ طباعة</button><button type="button" class="sc" data-r="share">📤 مشاركة لتطبيق الطابعة</button><button type="button" class="sc" data-r="save">💾 حفظ الصورة</button></div><p class="hint">للطابعات الحرارية 80 مم (عرض الطباعة 72 مم).</p></div>';
  rv.classList.add('show');setTimeout(function(){var b=rv.querySelector('[data-r="print"]');if(b)b.focus()},40)})}
function blob(){return new Promise(function(r){cvs.toBlob(function(b){r(new File([b],name+'.png',{type:'image/png'}))},'image/png')})}
function share(){blob().then(function(f){if(navigator.canShare&&navigator.canShare({files:[f]}))navigator.share({files:[f]}).catch(function(){});else{save();toast('المشاركة غير مدعومة هنا، لذا حُفظت الصورة')}})}
function save(){blob().then(function(f){var a=document.createElement('a');a.href=URL.createObjectURL(f);a.download=f.name;document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},1500)})}
function print(){if(window.EMDPrnV444&&EMDPrnV444.receipt(cvs))return;var hmm=Math.ceil(cvs.height/8)+2,box=$('e420Print');if(!box){box=document.createElement('div');box.id='e420Print';document.body.appendChild(box)}box.innerHTML='<img alt="" src="'+cvs.toDataURL('image/png')+'">';
  var st=$('e420PrintCss');if(!st){st=document.createElement('style');st.id='e420PrintCss';document.head.appendChild(st)}
  st.textContent='@media print{@page{size:80mm '+hmm+'mm;margin:0}html,body{margin:0!important;padding:0!important;background:#fff!important}body.e420-printing>*:not(#e420Print){display:none!important}#e420Print{display:block!important;padding:0 4mm}#e420Print img{display:block;width:72mm;height:auto}}';
  document.body.classList.add('e420-printing');setTimeout(function(){window.print();setTimeout(function(){document.body.classList.remove('e420-printing')},500)},60)}
function receipt(id){var s=(D().directSales||[]).find(function(x){return x&&x.id===id});if(!s){toast('الفاتورة غير موجودة',false);return}showImg(receiptSpec(s),'receipt-'+id,'🧾 إيصال '+id)}
function zReport(z){showImg(zSpec(z),'shift-'+z.id,'🧾 تقرير الوردية')}
/* ===== تبويب الوردية داخل البيع المباشر ===== */
function shiftHTML(){var sh=shift(),C=cur(),h='';
  if(!sh){h+='<div class="emd113-box e420-card"><h3>🟢 بداية الوردية</h3><p class="e420-p">اكتب المبلغ النقدي الموجود في الدرج الآن (الفكة). وفي نهاية اليوم يُقارَن المتوقع بالموجود.</p><label class="e420-l" for="e420Float">مبلغ بداية الوردية ('+C+')</label><input class="emd113-in" id="e420Float" inputmode="decimal" placeholder="0.000"><button type="button" class="e420-go" data-e420="open">بدء الوردية</button></div>'}
  else{var c=calcShift(sh);
    h+='<div class="emd113-box e420-card"><div class="e420-st"><span class="dot"></span><b>الوردية مفتوحة</b><small>منذ '+esc(tm(sh.openAt))+(dn(sh.by)?' · '+esc(dn(sh.by)):'')+'</small></div>'+
      '<div class="e420-g"><div><span>الفواتير</span><b>'+c.count+'</b></div><div><span>صافي المبيعات</span><b>'+f3(c.sales)+'</b></div><div><span>نقد</span><b>'+f3(c.by.cash)+'</b></div><div><span>بطاقة</span><b>'+f3(c.by.card)+'</b></div><div><span>تحويل</span><b>'+f3(c.by.transfer)+'</b></div><div><span>مرتجعات</span><b>'+f3(c.ref.cash+c.ref.card+c.ref.transfer+c.ref.other)+'</b></div></div>'+
      '<div class="e420-exp"><span>المتوقع في الدرج</span><b>'+f3(c.expected)+' '+C+'</b><small>بداية '+f3(sh.float)+' + نقد '+f3(c.by.cash)+(c.ref.cash?' − مرتجع '+f3(c.ref.cash):'')+(c.cin?' + إيداع '+f3(c.cin):'')+(c.cout?' − سحب '+f3(c.cout):'')+'</small></div></div>'+(window.EMD449?EMD449.movesCard(sh):'')+
      '<div class="emd113-box e420-card"><h3>🔒 إغلاق الوردية</h3><label class="e420-l" for="e420Count">عُدّ النقد في الدرج واكتبه ('+C+')</label><input class="emd113-in" id="e420Count" inputmode="decimal" placeholder="'+f3(c.expected)+'"><div id="e420Diff" aria-live="polite"></div><input class="emd113-in" id="e420Note" placeholder="ملاحظة (اختياري)" style="margin-top:8px"><button type="button" class="e420-go" data-e420="close">إغلاق الوردية وطباعة التقرير</button></div>'}
  if(window.EMD451)h+=EMD451.today();
  var all=shifts().slice(0,6);if(all.length)h+='<div class="emd113-box"><h3>📋 الورديات السابقة</h3>'+all.map(function(z,i){var d=Math.abs(z.diff)<0.0005?'<span class="ok">مطابق</span>':'<span class="'+(z.diff>0?'ok':'bad')+'">'+(z.diff>0?'+':'')+f3(z.diff)+'</span>';return '<button type="button" class="e420-row" data-e420="z" data-v="'+i+'"><span><b>'+esc(dt(z.closeAt))+'</b><small>'+z.calc.count+' فاتورة · '+f3(z.calc.sales)+' '+C+'</small></span>'+d+'</button>'}).join('')+'</div>';
  var p=pos();h+='<details class="emd113-box e420-set"'+(p.vat?' open':'')+'><summary>⚙️ إعدادات الإيصال والضريبة</summary>'+
   '<label class="e420-ck"><input type="checkbox" id="e420Vat"'+(p.vat?' checked':'')+'> تفعيل ضريبة القيمة المضافة على الإيصال</label>'+
   '<div class="e420-g2"><label class="e420-l">النسبة %<input class="emd113-in" id="e420Rate" inputmode="decimal" value="'+p.rate+'"></label><label class="e420-l">الرقم الضريبي<input class="emd113-in" id="e420VatNo" value="'+esc(p.vatNo)+'" placeholder="OM…"></label></div>'+
   '<p class="e420-p">تُعدّ الأسعار شاملةً للضريبة، ويبيّن الإيصال قيمة الضريبة منها دون تغيير أي سعر أو إجمالي.</p>'+
   '<label class="e420-ck"><input type="checkbox" id="e420Auto"'+(p.auto?' checked':'')+'> فتح الإيصال تلقائيًا بعد كل بيع</label>'+
   '<label class="e420-l">رسالة أسفل الإيصال<input class="emd113-in" id="e420Foot" value="'+esc(p.footer)+'"></label></details>';
  if(window.EMD449)h+=EMD449.shiftLink();return h}
function renderShift(body){if(!body)return;body.innerHTML='<div class="emd113-cols e420-cols">'+shiftHTML()+'</div>'}
function rerender(){var s=S();if(s&&s.open&&s.tab==='shift')renderShift($('emd113Body'))}
function diffLive(){var sh=shift(),el=$('e420Diff'),i=$('e420Count');if(!sh||!el||!i)return;if(i.value===''){el.innerHTML='';return}var c=calcShift(sh),d=r3(num(i.value)-c.expected);
  el.innerHTML='<div class="e420-diff '+(Math.abs(d)<0.0005?'ok':(d>0?'up':'bad'))+'">'+(Math.abs(d)<0.0005?'الدرج مطابق ✓':(d>0?'زيادة ':'عجز ')+f3(Math.abs(d))+' '+cur())+'</div>'}
/* ===== تعليق الفواتير ===== */
function held(){var a=J('emd420_held',[]);return Array.isArray(a)?a:[]}
function heldBar(){if(!on())return '';var a=held();if(!a.length)return '';
  return '<div class="e420-held" role="group" aria-label="فواتير معلّقة"><span>⏸️ معلّقة</span>'+a.map(function(h){return '<span class="e420-hc"><button type="button" data-e420="resume" data-v="'+esc(h.id)+'"><b>'+esc(h.label)+'</b><small>'+esc(tm(h.at))+' · '+f3(h.total)+'</small></button><button type="button" class="d" data-e420="drop" data-v="'+esc(h.id)+'" aria-label="حذف الفاتورة المعلّقة">✕</button></span>'}).join('')+'</div>'}
function holdBtn(c){return on()&&c&&c.lines&&c.lines.length?'<button type="button" class="e420-hold" data-e420="hold">⏸️ تعليق الفاتورة وخدمة عميل آخر</button>':''}
function hold(silent){var s=S();if(!s||!s.cart.length)return false;var c=API().calc(API()._draft()),a=held();var n=a.length+1;
  a.push({id:'H'+Date.now().toString(36),at:new Date().toISOString(),label:(s.custName||'').trim()||('فاتورة '+n),total:c.total,d:{cart:JSON.parse(JSON.stringify(s.cart)),custName:s.custName,custPhone:s.custPhone,note:s.note,discount:s.discount,discMode:s.discMode}});
  W('emd420_held',a.slice(-20));API()._reset();s.tab='new';API()._render();if(!silent)toast('عُلّقت الفاتورة، وتجدها أعلى الشاشة');return true}
function resume(id){var a=held(),i=a.findIndex(function(h){return h.id===id});if(i<0)return;var h=a[i],s=S();if(s.cart.length)hold(true);a=held();i=a.findIndex(function(x){return x.id===id});a.splice(i,1);W('emd420_held',a);
  API()._reset();Object.keys(h.d).forEach(function(k){s[k]=h.d[k]});s.tab='new';API()._render();toast('تمت استعادة الفاتورة «'+h.label+'»')}
/* ===== شريحة الرئيسية ===== */
function homeChip(){if(!on())return '';var sh=shift();
  if(!sh)return '<button type="button" class="e420-chip off" data-e420="shiftopen"><span class="dot"></span><span>لم تبدأ الوردية بعد</span><b>ابدأها</b></button>';
  var c=calcShift(sh);return '<button type="button" class="e420-chip" data-e420="shiftopen"><span class="dot"></span><span>الوردية مفتوحة منذ '+esc(tm(sh.openAt))+'</span><b>الدرج '+f3(c.expected)+'</b></button>'}
/* ===== الأحداث ===== */
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-e420]');if(!b)return;var k=b.getAttribute('data-e420'),v=b.getAttribute('data-v');
  if(k==='open'){openShift(($('e420Float')||{}).value);toast('بدأت الوردية ✓');rerender();return}
  if(k==='close'&&window.EMD451&&EMD451.guard('إغلاق الوردية.',function(){b.click()}))return;
  if(k==='close'){var i=$('e420Count');if(!i||i.value===''){toast('اكتب المبلغ الموجود في الدرج أولًا',false);i&&i.focus();return}var z=closeShift(i.value,($('e420Note')||{}).value);rerender();if(z)zReport(z);return}
  if(k==='z'){var z2=shifts()[+v];if(z2)zReport(z2);return}
  if(k==='rcpt'){receipt(v);return}
  if(k==='hold'){hold();return}
  if(k==='resume'){resume(v);return}
  if(k==='drop'){if(!confirm('حذف هذه الفاتورة المعلّقة؟'))return;W('emd420_held',held().filter(function(h){return h.id!==v}));API()._render();return}
  if(k==='shiftopen'){try{API().open('shift')}catch(x){}return}},true);
document.addEventListener('input',function(e){var t=e.target;if(!t||!t.id)return;if(t.id==='e420Count')return diffLive();
  if(/^e420(Rate|VatNo|Foot)$/.test(t.id)){var p=pos();if(t.id==='e420Rate')p.rate=num(t.value)||5;if(t.id==='e420VatNo')p.vatNo=t.value.trim();if(t.id==='e420Foot')p.footer=t.value;savePos(p)}},true);
document.addEventListener('change',function(e){var t=e.target;if(!t||!t.id)return;if(t.id==='e420Vat'||t.id==='e420Auto'){var p=pos();if(t.id==='e420Vat')p.vat=t.checked;else p.auto=t.checked;savePos(p)}},true);
function afterSale(id){if(window.EMD449&&EMD449.afterSale(id))return;if(on()&&pos().auto)setTimeout(function(){receipt(id)},250)}
function rcptBtn(id){return '<button class="emd113-btn e419only" data-e420="rcpt" data-v="'+esc(id)+'">🧾 إيصال حراري 80 مم</button>'}
function rcptNow(id){var s=(D().directSales||[]).find(function(x){return x&&x.id===id});if(!s)return Promise.resolve(false);return logo().then(function(lg){cvs=paint(receiptSpec(s),lg);name='receipt-'+id;print();return true})}
window.EMD420={rcptNow:rcptNow,pos:pos,savePos:savePos,on:on,renderShift:renderShift,heldBar:heldBar,holdBtn:holdBtn,homeChip:homeChip,afterSale:afterSale,rcptBtn:rcptBtn,receipt:receipt,shift:shift,calcShift:calcShift,openShift:openShift,closeShift:closeShift};
})();

/* ---- EMD-V449-cashier ---- */

(function(){'use strict';if(window.EMD449)return;
var K='emd449_pos';
var D0={cats:1,cam:1,cust:'closed',note:1,hold:1,keys:1,m_cash:1,m_card:1,m_transfer:1,m_other:1,def:'cash',partial:1,credit:1,split:1,change:1,invDisc:1,lineDisc:1,price:1,kick:0,needShift:0,moves:1,after:'preview'};
var MS=[['cash','💵 نقدًا'],['card','💳 بطاقة'],['transfer','🏦 تحويل'],['other','🔁 أخرى']];
var RS=['فكّة','مصروفات','تسليم للمدير','أخرى'];
function $(i){return document.getElementById(i)}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function num(v){v=Number(String(v==null?'':v).replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/٫/g,'.').replace(',','.'));return isFinite(v)?v:0}
function r3(v){return Math.round(v*1000)/1000}
function f3(v){return num(v).toFixed(3)}
function J(k,d){try{var x=JSON.parse(PLS.getItem(k)||'null');return x==null?d:x}catch(e){return d}}
function W(k,v){try{PLS.setItem(k,JSON.stringify(v))}catch(e){}}
function toast(t,ok){[].forEach.call(document.querySelectorAll('.e449-toast'),function(x){x.remove()});var d=document.createElement('div');d.className='e449-toast'+(ok===false?' bad':'');d.setAttribute('role','status');d.textContent=t;document.body.appendChild(d);setTimeout(function(){d.remove()},2600)}
function API(){return window.EMDDirectV113||{}}
function ST(){try{return API()._s()}catch(e){return null}}
function P420(){return window.EMD420||null}
function cur(){var c=(J('emd_business_profile_v333',{})||{}).currency;return (!c||c==='OMR')?'ر.ع':c}
function who(){try{var w=window.EMDStaffV108&&EMDStaffV108.who&&EMDStaffV108.who();if(w)return {id:w.id,name:w.name}}catch(e){}var m=J('emd_manager_profile_v41',null);return {id:'owner',name:(m&&m.name)||'المدير'}}
function can(p){try{var S=window.EMDStaffV108;if(S&&S.can)return !!S.can(p)}catch(e){}return true}
function tm(iso){var d=new Date(iso);return isNaN(d)?'':d.toLocaleTimeString('ar-OM',{hour:'numeric',minute:'2-digit'})}

/* ===== الإعدادات ===== */
function cfg(){var c=J(K,{})||{},o={};Object.keys(D0).forEach(function(k){o[k]=c[k]==null?D0[k]:c[k]});
  if(!MS.some(function(m){return o['m_'+m[0]]}))o.m_cash=1;return o}
function setCfg(k,v){var c=J(K,{})||{};c[k]=v;W(K,c)}
function opt(k){return !!cfg()[k]}
function methOk(k){return !!cfg()['m_'+k]}
function okMeths(){return MS.filter(function(m){return methOk(m[0])}).map(function(m){return m[0]})}
function defMethod(){var c=cfg();return methOk(c.def)?c.def:okMeths()[0]}
function modeOk(m){if(m==='full')return true;if(m==='split')return opt('split')&&okMeths().length>1;return opt(m)}
function rpos(){try{return P420().pos()}catch(e){return J('emd420_pos',{})||{}}}
function after(){var p=rpos();if(!p.auto)return 'none';return cfg().after==='print'?'print':'preview'}
function prn(){try{return window.EMDPrnV444.config()}catch(e){return {rcpt:'sys',rw:80}}}

/* تطبيق الإعدادات على شاشة البيع */
function sync(S){var c=cfg(),b=document.body.classList;
  b.toggle('e449-nocats',!c.cats);b.toggle('e449-nocam',!c.cam);b.toggle('e449-custhide',c.cust==='hide');b.toggle('e449-nonote',!c.note);
  b.toggle('e449-nohold',!c.hold);b.toggle('e449-nokeys',!c.keys);b.toggle('e449-noset',!can('settings'));
  if(S){if(c.cust==='open')S.e448c=true;if(!c.cats)S.cat='';fix(S)}}
function fix(S){if(!S)return;var c=cfg();
  if(!modeOk(S.mode))S.mode='full';
  if(!methOk(S.method))S.method=defMethod();
  var ok=okMeths();if(!methOk(S.ma))S.ma=ok[0];if(!methOk(S.mb)||S.mb===S.ma)S.mb=ok.filter(function(k){return k!==S.ma})[0]||S.ma;
  if(!c.invDisc&&S.discount)S.discount='';
  (S.cart||[]).forEach(function(l){if(!c.lineDisc&&l.disc)l.disc='';
    if(!c.price&&l.price!==''&&l.price!=null){try{var x=API().calc({items:[{name:l.name,qty:1,price:'',disc:''}]}).lines[0];if(x&&x.cat>0)l.price=''}catch(e){}}})}
/* اشتراط بدء الوردية */
function block(){var p=P420();if(!opt('needShift')||!p||!p.on()||p.shift())return false;var S=ST();toast('ابدأ الوردية أولًا، ثم أتمّ البيع.',false);if(S){S.tab='shift';try{API()._render()}catch(e){}}return true}
/* اختصارات لوحة المفاتيح */
window.addEventListener('keydown',function(e){
  if(e.key==='Escape'&&$('e449')&&$('e449').classList.contains('show')){e.preventDefault();e.stopImmediatePropagation();close();return}
  if((e.key==='F2'||e.key==='F9')&&!opt('keys')){var S=ST();if(S&&S.open)e.stopImmediatePropagation()}},true);

/* ===== درج النقد ===== */
var KICK=[27,112,0,25,250];
function kickReady(){var P=window.EMDPrinterV422;return !!(navigator.bluetooth&&P&&P.raw&&prn().rcpt==='bt')}
function kick(auto){if(!kickReady()){if(!auto||!kick.warned){kick.warned=1;toast(prn().rcpt!=='bt'?'لفتح الدرج اختر «🔵 بلوتوث مباشر» لطابعة الإيصال من إعدادات الكاشير.':'فتح الدرج يعمل مع طابعة إيصالات بلوتوث في Chrome على الأندرويد.',false)}return Promise.resolve(false)}
  return window.EMDPrinterV422.raw(KICK).then(function(){if(!auto)toast('💵 فُتح الدرج');return true},function(e){toast('تعذّر فتح الدرج. تأكد أن طابعة الإيصالات متصلة ومشغّلة.',false);return false})}
function manualKick(){var p=P420(),sh=p&&p.shift();kick(false).then(function(ok){if(!ok)return;var s=J('emd420_shift',null);if(s&&s.openAt){s.opens=Array.isArray(s.opens)?s.opens:[];s.opens.push({at:new Date().toISOString(),by:who()});W('emd420_shift',s)}})}

/* ===== بعد إتمام البيع ===== */
function afterSale(id){var p=P420();if(!p||!p.on())return false;
  var s=(API().list?API().list():[]).find(function(x){return x&&x.id===id});if(!s)return false;
  var cash=(s.payments||[]).some(function(x){return x.method==='cash'&&num(x.amount)>0}),a=after();
  var go=opt('kick')&&cash?kick(true):Promise.resolve();
  go.then(function(){setTimeout(function(){if(a==='preview')p.receipt(id);else if(a==='print')p.rcptNow(id)},250)});return true}

/* ===== الإيداع والسحب أثناء الوردية ===== */
var why='';
function movesCard(sh){var c=cfg();if(!sh||(!c.moves&&!c.kick))return '';var h='<div class="emd113-box e420-card"><h3>💵 '+(c.moves?'الإيداع والسحب النقدي':'درج النقد')+'</h3>';
  if(c.moves){var mv=Array.isArray(sh.moves)?sh.moves:[],del=can('closing');
    h+='<p class="e420-p">سجّل كل مبلغ يدخل الدرج أو يخرج منه أثناء الوردية، ليبقى «المتوقع في الدرج» صحيحًا.</p>'
     +'<label class="e420-l" for="e449Amt">المبلغ ('+esc(cur())+')</label><input class="emd113-in" id="e449Amt" inputmode="decimal" placeholder="0.000">'
     +'<div class="e449-rs" role="group" aria-label="السبب">'+RS.map(function(r){return '<button type="button" data-e449="why" data-v="'+esc(r)+'" aria-pressed="'+(why===r)+'">'+esc(r)+'</button>'}).join('')+'</div>'
     +'<input class="emd113-in" id="e449Why" placeholder="تفاصيل (اختياري)">'
     +'<div class="e449-2"><button type="button" class="in" data-e449="in">➕ إيداع في الدرج</button><button type="button" class="out" data-e449="out">➖ سحب من الدرج</button></div>';
    if(mv.length)h+='<div class="e449-ml">'+mv.slice().reverse().map(function(m){return '<div class="e449-mr"><span><b class="'+m.type+'">'+(m.type==='in'?'+ إيداع ':'− سحب ')+f3(m.amt)+'</b><small>'+esc(tm(m.at))+(m.reason?' · '+esc(m.reason):'')+(m.by&&m.by.name?' · '+esc(m.by.name):'')+'</small></span>'+(del?'<button type="button" data-e449="mvdel" data-v="'+esc(m.id)+'" aria-label="حذف الحركة">✕</button>':'')+'</div>'}).join('')+'</div>'}
  if(c.kick)h+='<button type="button" class="e449-dr" data-e449="drawer">💵 فتح الدرج</button>';
  return h+'</div>'}
function addMove(type){var i=$('e449Amt'),a=r3(num(i&&i.value));if(!(a>0)){toast('اكتب المبلغ أولًا',false);if(i)i.focus();return}
  var s=J('emd420_shift',null);if(!s||!s.openAt){toast('لا توجد وردية مفتوحة',false);return}
  if(type==='out'){try{var c=P420().calcShift(s);if(a>c.expected+0.0005&&!confirm('المبلغ أكبر من المتوقع في الدرج ('+f3(c.expected)+'). هل تريد المتابعة؟'))return}catch(e){}}
  var det=String(($('e449Why')||{}).value||'').trim(),reason=[why,det].filter(Boolean).join(' - ');
  s.moves=Array.isArray(s.moves)?s.moves:[];s.moves.push({id:'M'+Date.now().toString(36),at:new Date().toISOString(),type:type,amt:a,reason:reason,by:who()});W('emd420_shift',s);why='';
  toast(type==='in'?'سُجّل إيداع '+f3(a)+' ✓':'سُجّل سحب '+f3(a)+' ✓');rerender()}
function delMove(id){if(!confirm('حذف هذه الحركة؟ سيتغير المتوقع في الدرج.'))return;var s=J('emd420_shift',null);if(!s)return;s.moves=(s.moves||[]).filter(function(m){return m.id!==id});W('emd420_shift',s);rerender()}
function rerender(){var S=ST();if(S&&S.open){try{API()._render()}catch(e){}}}
function shiftLink(){return can('settings')?'<button type="button" class="e449-link" data-e449="set">⚙️ إعدادات الكاشير: الإيصال والضريبة والدفع والدرج</button>':''}

/* ===== لوحة الإعدادات ===== */
function sw(k,t,d,on){return '<div class="row"><span><b id="e449L_'+k+'">'+t+'</b>'+(d?'<small>'+d+'</small>':'')+'</span><span class="sw"><input type="checkbox" role="switch" data-k="'+k+'" aria-labelledby="e449L_'+k+'"'+(on?' checked':'')+'><i></i></span></div>'}
function seg(k,t,d,opts,v,col){return '<div class="row'+(col?' col':'')+'"><span><b>'+t+'</b>'+(d?'<small>'+d+'</small>':'')+'</span><div class="seg" role="group" aria-label="'+esc(t)+'">'+opts.map(function(o){return '<button type="button" data-s="'+k+'" data-v="'+o[0]+'" aria-pressed="'+(String(v)===String(o[0]))+'"'+(o[2]?' disabled':'')+'>'+o[1]+'</button>'}).join('')+'</div></div>'}
function paint(){var c=cfg(),p=rpos(),pr=prn(),view=(function(){try{return PLS.getItem('emd419_view')==='list'?'list':'grid'}catch(e){return 'grid'}})(),ok=okMeths();
  var h='<p class="intro">كل خيار هنا يغيّر شاشة البيع فورًا. الإعدادات الافتراضية تُبقي الكاشير كما هو.</p>'
  +'<section class="c"><h3>🖥️ شاشة البيع</h3>'
   +seg('view','عرض المنتجات','',[['grid','▦ شبكة'],['list','☰ قائمة']],view)
   +sw('cats','تصنيفات المنتجات','أزرار التصنيفات أعلى المنتجات.',c.cats)
   +sw('cam','زر مسح الباركود بالكاميرا','قارئ الباركود الموصول يعمل دائمًا.',c.cam)
   +seg('cust','بيانات العميل','',[['closed','مطوية'],['open','ظاهرة دائمًا'],['hide','مخفية']],c.cust)
   +sw('note','خانة الملاحظات','',c.note)
   +sw('hold','تعليق الفاتورة','خدمة عميل آخر ثم الرجوع للفاتورة.',c.hold)
   +sw('keys','اختصارات لوحة المفاتيح','F2 للبحث وF9 لإتمام البيع على الحاسوب.',c.keys)+'</section>'
  +'<section class="c"><h3>💳 الدفع</h3>'
   +'<div class="row col"><span><b>طرق الدفع المتاحة</b><small>تبقى طريقة واحدة على الأقل.</small></span><div class="seg" role="group" aria-label="طرق الدفع المتاحة">'+MS.map(function(m){return '<button type="button" data-m="'+m[0]+'" aria-pressed="'+methOk(m[0])+'">'+m[1]+'</button>'}).join('')+'</div></div>'
   +seg('def','طريقة الدفع الافتراضية','',MS.map(function(m){return [m[0],m[1],!methOk(m[0])]}),defMethod(),1)
   +sw('partial','الدفع الجزئي','',c.partial)+sw('credit','البيع الآجل','',c.credit)
   +sw('split','الدفع المقسّم','جزء نقدًا وجزء ببطاقة مثلًا. يحتاج طريقتين متاحتين.',c.split)
   +sw('change','حاسبة الباقي والمبالغ المقترحة','عند الدفع النقدي.',c.change)+'</section>'
  +'<section class="c"><h3>🏷️ الخصومات والأسعار</h3>'
   +sw('invDisc','خصم على الفاتورة','',c.invDisc)+sw('lineDisc','خصم على كل صنف','',c.lineDisc)
   +sw('price','تعديل سعر المنتج عند البيع','',c.price)
   +'<div class="row"><small>تظهر هذه الخيارات لمن يملك صلاحية الخصم فقط، وإيقافها يخفيها عن الجميع.</small></div></section>'
  +'<section class="c"><h3>🧾 الإيصال</h3>'
   +seg('after','بعد إتمام البيع','«طباعة مباشرة» ترسل الإيصال إلى الطابعة دون معاينة.',[['none','لا شيء'],['preview','معاينة الإيصال'],['print','طباعة مباشرة']],after(),1)
   +seg('rcpt','طابعة الإيصال','',[['sys','🖨️ طباعة النظام'],['bt','🔵 بلوتوث مباشر']],pr.rcpt)
   +seg('rw','عرض الورق','',[['80','80 مم'],['58','58 مم']],pr.rw)
   +sw('vat','ضريبة القيمة المضافة على الإيصال','الأسعار شاملة الضريبة، والإيصال يبيّن قيمتها.',!!p.vat)
   +(p.vat?'<div class="in2"><label class="f">النسبة %<input class="t" id="e449Rate" inputmode="decimal" value="'+esc(p.rate||5)+'"></label><label class="f">الرقم الضريبي<input class="t" id="e449VatNo" value="'+esc(p.vatNo||'')+'" placeholder="OM…"></label></div>':'')
   +'<div class="row col"><label class="f">رسالة أسفل الإيصال<input class="t" id="e449Foot" value="'+esc(p.footer==null?'شكرًا لزيارتكم':p.footer)+'"></label></div>'
   +(window.EMDPrnV444?'<button type="button" class="lnk" data-g="prn">🖨️ ربط الطابعة وتجربتها</button>':'')+'</section>'
  +'<section class="c"><h3>🗃️ الوردية والدرج</h3>'
   +sw('needShift','بدء الوردية قبل البيع','لا يتم البيع حتى تبدأ الوردية.',c.needShift)
   +sw('moves','الإيداع والسحب أثناء الوردية','تسجيل الفكّة والمصروفات وتسليم المبالغ.',c.moves)
   +sw('kick','فتح درج النقد عند الدفع النقدي','للدرج الموصول بطابعة إيصالات بلوتوث. يظهر أيضًا زر «💵 فتح الدرج» في الوردية.',c.kick)+'</section>'
  +(window.EMDLoyV434?'<section class="c"><h3>👥 العملاء</h3><button type="button" class="lnk" data-g="cust">⭐ نقاط الولاء وقائمة العملاء</button></section>':'')
  +(window.EMD451?EMD451.panel():'')
  +'<button type="button" class="rst" data-g="reset">↺ استعادة الإعدادات الافتراضية</button>';
  var bd=$('e449B'),y=bd?bd.scrollTop:0;bd.innerHTML=h;bd.scrollTop=y}
function ensure(){var ov=$('e449');if(ov)return ov;ov=document.createElement('div');ov.id='e449';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.setAttribute('aria-labelledby','e449T');
  ov.innerHTML='<div class="win"><div class="hd"><h2 id="e449T">⚙️ إعدادات الكاشير</h2><button type="button" class="x" data-g="x" aria-label="إغلاق">✕</button></div><div class="bd" id="e449B"></div></div>';
  document.body.appendChild(ov);ov.addEventListener('click',onPanel);ov.addEventListener('change',onChange);ov.addEventListener('input',onText);return ov}
function open(){if(!can('settings')){toast('إعدادات الكاشير للمدير أو لمن يملك صلاحية الإعدادات.',false);return}var ov=ensure();paint();ov.classList.add('show');setTimeout(function(){var x=ov.querySelector('.x');if(x)x.focus()},40)}
function close(){var ov=$('e449');if(ov)ov.classList.remove('show')}
function changed(){sync(ST());paint();rerender()}
function onPanel(e){var ov=$('e449');if(e.target===ov){close();return}var b=e.target.closest('button');if(!b||b.disabled)return;
  if(b.hasAttribute('data-g')){var g=b.getAttribute('data-g');
    if(g==='x')return close();
    if(g==='prn'){close();try{EMDPrnV444.open()}catch(x){}return}
    if(g==='cust'){close();try{API().open('cust')}catch(x){}return}
    if(g==='reset'){if(!confirm('تعود خيارات شاشة البيع والدفع والخصومات والوردية إلى وضعها الأصلي. لا تتغير بيانات الضريبة ولا الطابعة. هل تريد المتابعة؟'))return;try{PLS.removeItem(K);PLS.removeItem('emd419_view')}catch(x){}changed();toast('استُعيدت الإعدادات الافتراضية ✓');return}}
  if(b.hasAttribute('data-m')){var k=b.getAttribute('data-m');if(methOk(k)&&okMeths().length<2){toast('يجب أن تبقى طريقة دفع واحدة على الأقل.',false);return}setCfg('m_'+k,methOk(k)?0:1);return changed()}
  if(b.hasAttribute('data-s')){var s=b.getAttribute('data-s'),v=b.getAttribute('data-v');
    if(s==='view'){try{PLS.setItem('emd419_view',v)}catch(x){}try{EMD419.applyView()}catch(x){}}
    else if(s==='after'){var p=rpos();p.auto=v!=='none';try{P420().savePos(p)}catch(x){W('emd420_pos',p)}if(v!=='none')setCfg('after',v)}
    else if(s==='rcpt'){try{EMDPrnV444.set({rcpt:v})}catch(x){}}
    else if(s==='rw'){try{EMDPrnV444.set({rw:+v})}catch(x){}}
    else setCfg(s,v);
    return changed()}}
function onChange(e){var t=e.target,k=t&&t.getAttribute('data-k');if(!k)return;
  if(k==='vat'){var p=rpos();p.vat=t.checked;try{P420().savePos(p)}catch(x){W('emd420_pos',p)}}else setCfg(k,t.checked?1:0);
  changed()}
function onText(e){var t=e.target;if(!t||!/^e449(Rate|VatNo|Foot)$/.test(t.id))return;var p=rpos();
  if(t.id==='e449Rate')p.rate=num(t.value)||5;else if(t.id==='e449VatNo')p.vatNo=t.value.trim();else p.footer=t.value;try{P420().savePos(p)}catch(x){W('emd420_pos',p)}}

/* ===== الأحداث داخل الكاشير ===== */
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-e449]');if(!b)return;var k=b.getAttribute('data-e449');
  if(k==='set')return open();
  if((k==='out'||k==='drawer')&&window.EMD451&&EMD451.guard(k==='out'?'سحب مبلغ من الدرج.':'فتح درج النقد.',function(){b.click()}))return;
  if(k==='in'||k==='out')return addMove(k);
  if(k==='mvdel')return delMove(b.getAttribute('data-v'));
  if(k==='drawer')return manualKick();
  if(k==='why'){var v=b.getAttribute('data-v');why=why===v?'':v;[].forEach.call(document.querySelectorAll('[data-e449="why"]'),function(x){x.setAttribute('aria-pressed',String(x.getAttribute('data-v')===why))});return}},true);
setTimeout(function(){sync(null)},0);
window.EMD449={sync:sync,fix:fix,opt:opt,methOk:methOk,modeOk:modeOk,defMethod:defMethod,block:block,afterSale:afterSale,movesCard:movesCard,shiftLink:shiftLink,open:open,close:close,kick:kick,cfg:cfg};
})();

/* ---- EMD-V451-cashier ---- */

(function(){'use strict';if(window.EMD451)return;
var K='emd451_pos',D0={quick:1,pin:0,scale:0,sp:'2',sm:'w',coupons:[]};
function $(i){return document.getElementById(i)}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function num(v){v=Number(String(v==null?'':v).replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/٫/g,'.').replace(',','.'));return isFinite(v)?v:0}
function r3(v){return Math.round((v+Number.EPSILON)*1000)/1000}
function f3(v){return num(v).toFixed(3)}
function J(k,d){try{var x=JSON.parse(PLS.getItem(k)||'null');return x==null?d:x}catch(e){return d}}
function W(k,v){try{PLS.setItem(k,JSON.stringify(v))}catch(e){}}
function norm(x){return String(x||'').replace(/[ـ]/g,'').trim().toLowerCase().replace(/\s+/g,' ')}
function API(){return window.EMDDirectV113||{}}
function ST(){try{return API()._s()}catch(e){return null}}
function toast(t,ok){try{var d=document.createElement('div');d.className='e449-toast'+(ok===false?' bad':'');d.setAttribute('role','status');d.textContent=t;document.body.appendChild(d);setTimeout(function(){d.remove()},2600)}catch(e){}}
function cfg(){var c=J(K,{})||{},o={};Object.keys(D0).forEach(function(k){o[k]=c[k]==null?D0[k]:c[k]});if(!Array.isArray(o.coupons))o.coupons=[];return o}
function setCfg(k,v){var c=J(K,{})||{};c[k]=v;W(K,c)}
function prods(){var d=window.db;return d&&Array.isArray(d.products)?d.products:[]}
function sales(){var d=window.db;return d&&Array.isArray(d.directSales)?d.directSales:[]}
function findP(n){var k=norm(n);return prods().find(function(p){return p&&norm(p.name)===k})}
function rerender(){var S=ST();if(S&&S.open){try{API()._render()}catch(e){}}}

/* ===== ١) أزرار الأكثر مبيعًا ===== */
function quick(S){if(!cfg().quick||!S||S.q)return '';var since=Date.now()-30*864e5,cnt={};
  sales().forEach(function(s){var t=Date.parse(s&&s.at);if(!(t>=since))return;(s.items||[]).forEach(function(i){var p=findP(i.name);if(!p)return;var k=p.vg?'g:'+p.vg:'p:'+p.name;cnt[k]=(cnt[k]||0)+num(i.qty)})});
  var L=Object.keys(cnt).sort(function(a,b){return cnt[b]-cnt[a]}).slice(0,8);if(!L.length)return '';
  return '<div class="e451-q" role="group" aria-label="الأكثر مبيعًا"><b>⭐ الأكثر مبيعًا</b>'+L.map(function(k){var g=k.slice(0,2)==='g:',n=k.slice(2);return '<button type="button" data-e451="q" data-g="'+(g?1:0)+'" data-v="'+esc(n)+'">'+(g?'🎨 ':'')+esc(n)+'</button>'}).join('')+'</div>'}
function qAdd(b){var n=b.getAttribute('data-v');if(b.getAttribute('data-g')==='1'&&window.EMD450){EMD450.pick(n);return}try{API()._add(n)}catch(e){}}

/* ===== ٢) اعتماد المدير برمزه ===== */
var OK=false;
function staffCfg(){return J('emd_v108_staff',{})||{}}
function ownerPin(){var c=staffCfg();return c.enabled&&c.owner&&c.owner.pin?c.owner:null}
function isOwner(){try{var w=window.EMDStaffV108&&EMDStaffV108.who();return !w||!!w.owner}catch(e){return true}}
function pinOn(){return !!cfg().pin&&!!ownerPin()&&!isOwner()}
function hasDisc(dr){try{var c=API().calc(dr);if(c.invDisc-(c.lpVal||0)-(c.cpVal||0)>0.0005)return true;return c.lines.some(function(l){return (l.disc>0&&!l.auto)||(l.cat>0&&Math.abs(l.price-l.cat)>0.0005)})}catch(e){return false}}
function hash(pin,salt){var s=String(salt||'emd')+':'+String(pin);try{return crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)).then(function(b){return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,'0')}).join('')})}catch(e){return Promise.resolve('')}}
function ask(why){return new Promise(function(res){var o=ownerPin();if(!o)return res(true);var old=$('e451Pin');if(old)old.remove();var tries=0;
  var ov=document.createElement('div');ov.id='e451Pin';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.setAttribute('aria-labelledby','e451PT');
  ov.innerHTML='<div class="w"><h3 id="e451PT">🔐 اعتماد المدير</h3><p>'+esc(why)+'<br>يكتب المدير رمزه للموافقة.</p><input id="e451PI" type="password" inputmode="numeric" maxlength="4" autocomplete="off" aria-label="رمز المدير"><div class="er" id="e451PE" role="alert"></div><div class="bt"><button type="button" class="ok">اعتماد</button><button type="button" class="no">إلغاء</button></div></div>';
  document.body.appendChild(ov);var inp=$('e451PI');setTimeout(function(){inp.focus()},30);
  function done(v){ov.remove();res(v)}
  function go(){var p=String(inp.value||'').replace(/\D/g,'');if(p.length!==4){$('e451PE').textContent='الرمز أربعة أرقام.';return}
    hash(p,o.salt).then(function(h){if(h&&h===o.pin){logApproval(why);done(true)}else{tries++;inp.value='';$('e451PE').textContent=tries>=3?'محاولات كثيرة. أُلغي الطلب.':'الرمز غير صحيح.';if(tries>=3)setTimeout(function(){done(false)},900)}})}
  ov.querySelector('.ok').onclick=go;ov.querySelector('.no').onclick=function(){done(false)};
  inp.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();go()}if(e.key==='Escape'){e.preventDefault();e.stopPropagation();done(false)}})})}
function logApproval(why){var a=J('emd451_approvals',[]);var w={};try{w=EMDStaffV108.who()||{}}catch(e){}a.unshift({at:new Date().toISOString(),why:why,staff:w.name||''});W('emd451_approvals',a.slice(0,200))}
/* يُغلّف إجراءً حساسًا: يمرّ مباشرة للمدير، ويطلب رمزه من الموظف */
function guard(why,fn){if(OK||!pinOn())return false;ask(why).then(function(ok){if(ok){OK=true;try{fn()}finally{OK=false}}});return true}
function guardFinish(dr,fn){if(OK||!pinOn()||!hasDisc(dr))return false;return guard('هذه الفاتورة فيها خصم أو تعديل سعر.',fn)}
function ok(){return OK}
function canDisc(){return pinOn()}

/* ===== ٣) كوبونات الخصم ===== */
function today(){var d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function findCp(code){var k=String(code||'').trim().toUpperCase();if(!k)return null;return cfg().coupons.find(function(c){return String(c.code).toUpperCase()===k})||null}
function cpState(c,sub){if(!c)return 'لا يوجد كوبون بهذا الرمز.';if(c.off)return 'هذا الكوبون موقوف.';if(c.exp&&today()>c.exp)return 'انتهت صلاحية هذا الكوبون.';if(c.max>0&&num(c.used)>=c.max)return 'استُخدم هذا الكوبون بالعدد المسموح.';if(c.min>0&&sub<c.min)return 'الحد الأدنى للفاتورة لهذا الكوبون '+f3(c.min)+'.';return ''}
function coupon(dr,sub){var c=findCp(dr&&dr.cp);if(!c||cpState(c,sub))return {v:0,code:''};var v=c.t==='pct'?r3(sub*Math.min(100,num(c.v))/100):r3(num(c.v));if(c.t==='pct'&&c.cap>0)v=Math.min(v,num(c.cap));return {v:Math.max(0,Math.min(v,sub)),code:c.code}}
function active(){return cfg().coupons.some(function(c){return !c.off})}
function cpBox(S){if(!S)return '';if(S.e451cp){var c=findCp(S.e451cp),sub=0;try{var x=API().calc({items:S.cart,discount:S.discount,discMode:S.discMode});sub=x.sub-x.invDisc+(x.lpVal||0)}catch(e){}var st=cpState(c,sub);
    if(!st){var v=coupon({cp:S.e451cp},sub).v;return '<div class="e451-cpok"><span>🎟️ كوبون '+esc(c.code)+' − '+f3(v)+'</span><button type="button" data-e451="cpx">إزالة</button></div>'}
    return '<div class="e451-cpok" style="background:#fef2f2;border-color:#fecaca;color:#991b1b"><span>🎟️ '+esc(S.e451cp)+': '+esc(st)+'</span><button type="button" data-e451="cpx">إزالة</button></div>'}
  if(!active())return '';return '<div class="e451-cp"><input class="emd113-in" id="e451Cp" placeholder="🎟️ رمز كوبون الخصم" autocomplete="off" dir="auto"><button type="button" data-e451="cp">تطبيق</button></div>'}
function cpApply(){var i=$('e451Cp'),S=ST();if(!i||!S)return;var v=String(i.value||'').trim().toUpperCase();if(!v){toast('اكتب رمز الكوبون',false);i.focus();return}
  var c=findCp(v);if(!c){toast('لا يوجد كوبون بهذا الرمز.',false);return}S.e451cp=c.code;try{API()._rc()}catch(e){}rerender()}
function after(sale){if(!sale||!sale.coupon)return;var c=J(K,{})||{};(c.coupons||[]).forEach(function(x){if(String(x.code).toUpperCase()===String(sale.coupon.code).toUpperCase())x.used=num(x.used)+1});W(K,c)}

/* ===== ٤) تقرير اليوم بالساعة ===== */
function netOf(s){var ops=(s.ops||[]).reduce(function(a,x){return a+num(x.value)},0);return r3(num(s.total)-ops)}
function todayCard(){var t0=new Date();t0.setHours(0,0,0,0);var L=sales().filter(function(s){var t=Date.parse(s&&s.at);return t>=t0.getTime()});
  var h='<details class="emd113-box e451-day"'+(L.length?'':'')+'><summary>📊 تقرير اليوم بالساعة</summary>';
  if(!L.length)return h+'<p class="e420-p" style="margin-top:8px">لا توجد مبيعات مباشرة اليوم بعد.</p></details>';
  var tot=0,hrs={},top={},by={};L.forEach(function(s){var v=netOf(s);tot+=v;var hr=new Date(s.at).getHours();hrs[hr]=(hrs[hr]||0)+v;var b=(s.by&&s.by.name)||'غير محدد';by[b]=(by[b]||0)+v;
    (s.items||[]).forEach(function(i){var p=findP(i.name),n=p&&p.vg?p.vg:i.name;top[n]=(top[n]||0)+num(i.qty)})});
  tot=r3(tot);var ks=Object.keys(hrs).map(Number),a=Math.min.apply(null,ks),b=Math.max.apply(null,ks);if(b-a<5){a=Math.max(0,a-2);b=Math.min(23,a+7)}
  var mx=0,best=a;for(var x=a;x<=b;x++){if((hrs[x]||0)>mx){mx=hrs[x];best=x}}
  function hl(x){return (x%12||12)+(x>=12?'م':'ص')}
  h+='<div class="e451-k"><div><span>المبيعات</span><b>'+f3(tot)+'</b></div><div><span>الفواتير</span><b>'+L.length+'</b></div><div><span>متوسط الفاتورة</span><b>'+f3(tot/L.length)+'</b></div></div>';
  var bars='',lbl='';for(x=a;x<=b;x++){var v=hrs[x]||0;bars+='<div'+(x===best&&v>0?' class="top"':'')+' title="'+hl(x)+': '+f3(v)+'"><i style="height:'+(mx>0?Math.max(2,Math.round(v/mx*100)):2)+'%"></i></div>';lbl+='<span>'+hl(x)+'</span>'}
  h+='<div class="e451-h" role="img" aria-label="المبيعات حسب الساعة، أعلاها الساعة '+hl(best)+'">'+bars+'</div><div class="e451-hl">'+lbl+'</div>';
  h+='<p class="e420-p" style="margin:8px 0 0">أنشط ساعة اليوم: <b>'+hl(best)+'</b> بمبيعات '+f3(mx)+'.</p>';
  var tp=Object.keys(top).sort(function(p,q){return top[q]-top[p]}).slice(0,5);
  h+='<div class="e451-tl"><h4>🏆 الأكثر مبيعًا اليوم</h4>'+tp.map(function(n){return '<div class="e451-tr"><span>'+esc(n)+'</span><b>'+r3(top[n])+'</b></div>'}).join('')+'</div>';
  var bk=Object.keys(by);if(bk.length>1)h+='<div class="e451-tl"><h4>👤 حسب البائع</h4>'+bk.map(function(n){return '<div class="e451-tr"><span>'+esc(n)+'</span><b>'+f3(by[n])+'</b></div>'}).join('')+'</div>';
  return h+'</details>'}

/* ===== ٥) باركود الميزان ===== */
function ean(code){if(!/^\d{13}$/.test(code))return false;var s=0;for(var i=0;i<12;i++)s+=+code[i]*(i%2?3:1);return (10-s%10)%10===+code[12]}
function scale(code){var c=cfg();code=String(code||'').trim();if(!c.scale||!ean(code))return false;var pre=String(c.sp||'2');if(code.indexOf(pre)!==0)return false;
  var plu=code.slice(2,7),val=num(code.slice(7,12))/1000,pn=String(+plu);
  var p=prods().find(function(x){if(!x)return false;var a=[x.plu,x.barcode,x.code,x.sku].map(function(y){return String(y==null?'':y).trim()});return a.indexOf(plu)>=0||a.indexOf(pn)>=0});
  if(!p){toast('منتج الميزان رقم '+pn+' غير معروف. اكتب هذا الرقم في خانة «الباركود» للمنتج.',false);return true}
  var S=ST();if(!S)return false;var unit=0;try{unit=API().calc({items:[{name:p.name,qty:1,price:'',disc:''}]}).lines[0].cat}catch(e){}
  var q=c.sm==='p'?(unit>0?r3(val/unit):0):r3(val);if(!(q>0)){toast('تعذّر قراءة '+(c.sm==='p'?'السعر':'الوزن')+' من الباركود.',false);return true}
  var av=0;try{av=API().available(p.name)}catch(e){}var inC=0;S.cart.forEach(function(l){if(norm(l.name)===norm(p.name))inC+=num(l.qty)});
  if(q+inC>av+1e-9){toast('المخزون غير كافٍ لـ «'+p.name+'»: المتوفر '+av,false);return true}
  if(!p.byWeight){p.byWeight=true;try{API()._save()}catch(e){}}
  var ex=S.cart.find(function(l){return norm(l.name)===norm(p.name)});if(ex)ex.qty=r3(num(ex.qty)+q);else S.cart.push({name:p.name,qty:q,price:'',disc:''});
  S.q='';var qi=$('emd113Q');if(qi)qi.value='';try{API()._rp();API()._rc()}catch(e){}toast('⚖️ '+p.name+' · '+q+(c.sm==='p'?'':' كغ'),true);return true}

/* ===== لوحة الإعدادات (داخل ⚙️ إعدادات الكاشير) ===== */
var edit=null;
function sw(k,t,d,on){return '<div class="row"><span><b id="e451L_'+k+'">'+t+'</b>'+(d?'<small>'+d+'</small>':'')+'</span><span class="sw"><input type="checkbox" role="switch" data-e451k="'+k+'" aria-labelledby="e451L_'+k+'"'+(on?' checked':'')+'><i></i></span></div>'}
function sg(k,t,opts,v){return '<div class="row col"><span><b>'+t+'</b></span><div class="seg" role="group" aria-label="'+esc(t)+'">'+opts.map(function(o){return '<button type="button" data-e451="seg" data-k="'+k+'" data-v="'+o[0]+'" aria-pressed="'+(String(v)===o[0])+'">'+o[1]+'</button>'}).join('')+'</div></div>'}
function panel(){var c=cfg(),hasPin=!!ownerPin(),h='';
  h+='<section class="c"><h3>⭐ البيع السريع</h3>'+sw('quick','أزرار الأكثر مبيعًا','تظهر أعلى المنتجات حسب مبيعات آخر ٣٠ يومًا.',c.quick)+'</section>';
  h+='<section class="c"><h3>🔐 اعتماد المدير</h3>'+sw('pin','طلب رمز المدير من الموظفين','للخصم وتعديل السعر والإرجاع وإلغاء الفاتورة والسحب من الدرج وإغلاق الوردية.',c.pin)
    +(c.pin&&!hasPin?'<div class="e451-pinb">لتفعيله شغّل «الموظفين والصلاحيات» واحفظ رمز المدير.</div>':'')
    +(c.pin?'<div class="row"><small>يمكن للموظف طلب الخصم حتى لو لم يملك صلاحيته، ويعتمده المدير برمزه. المدير نفسه لا يُسأل.</small></div>':'')+'</section>';
  h+='<section class="c e451-cl"><h3>🎟️ كوبونات الخصم</h3>';
  c.coupons.forEach(function(x,i){var st=x.off?'موقوف':(x.exp&&today()>x.exp?'منتهي':(x.max>0&&num(x.used)>=x.max?'مكتمل':'فعّال'));
    h+='<div class="it'+(st!=='فعّال'?' off':'')+'"><span><b dir="ltr" style="text-align:right">'+esc(x.code)+'</b><small>'+(x.t==='pct'?num(x.v)+'٪':f3(x.v))+(x.min>0?' · حد أدنى '+f3(x.min):'')+(x.exp?' · حتى '+esc(x.exp):'')+' · استُخدم '+num(x.used)+(x.max>0?' من '+x.max:'')+' · '+st+'</small></span><button type="button" data-e451="cpt" data-i="'+i+'">'+(x.off?'تفعيل':'إيقاف')+'</button><button type="button" class="del" data-e451="cpd" data-i="'+i+'" aria-label="حذف">🗑️</button></div>'});
  if(edit)h+='<div class="e451-cf"><label class="f full">الرمز<input class="t" id="e451C" dir="ltr" placeholder="EID10" value="'+esc(edit.code||'')+'"></label>'
    +'<div class="full">'+'<div class="seg" role="group" aria-label="نوع الخصم"><button type="button" data-e451="ct" data-v="pct" aria-pressed="'+(edit.t==='pct')+'">٪ نسبة</button><button type="button" data-e451="ct" data-v="amt" aria-pressed="'+(edit.t!=='pct')+'">مبلغ ثابت</button></div></div>'
    +'<label class="f">القيمة<input class="t" id="e451V" inputmode="decimal" value="'+esc(edit.v||'')+'"></label><label class="f">الحد الأدنى للفاتورة<input class="t" id="e451M" inputmode="decimal" placeholder="اختياري"></label>'
    +'<label class="f">آخر يوم<input class="t" id="e451E" type="date"></label><label class="f">عدد مرات الاستخدام<input class="t" id="e451X" inputmode="numeric" placeholder="بلا حد"></label>'
    +'<button type="button" class="lnk full" data-e451="csave" style="background:#1e3a8a;color:#fff;border-color:#1e3a8a">💾 حفظ الكوبون</button></div>';
  else h+='<button type="button" class="lnk" data-e451="cnew">➕ إضافة كوبون</button>';
  h+='<div class="row"><small>يكتب الكاشير رمز الكوبون في الفاتورة، ويُطبَّق الخصم دون الحاجة إلى صلاحية الخصم.</small></div></section>';
  h+='<section class="c"><h3>⚖️ باركود الميزان</h3>'+sw('scale','قراءة ملصقات الميزان','باركود ١٣ رقمًا يبدأ برقم الميزان، يليه رقم المنتج (٥ أرقام) ثم الوزن أو السعر.',c.scale);
  if(c.scale)h+=sg('sm','ماذا يحمل الملصق؟',[['w','الوزن (غرام)'],['p','السعر (بيسة)']],c.sm)+'<div class="row col"><label class="f">بداية الباركود<input class="t" id="e451SP" inputmode="numeric" maxlength="2" value="'+esc(c.sp)+'" dir="ltr"></label><small>اكتب رقم المنتج في الميزان داخل خانة «الباركود» للمنتج، ويُباع بالكيلوغرام.</small></div>';
  return h+'</section>'}
function repaint(){try{var bd=$('e449B'),y=bd?bd.scrollTop:0;EMD449.open();bd=$('e449B');if(bd)bd.scrollTop=y}catch(e){}rerender()}
function saveCp(){var code=String(($('e451C')||{}).value||'').trim().toUpperCase().replace(/\s+/g,''),v=num(($('e451V')||{}).value);
  if(!code){toast('اكتب رمز الكوبون',false);return}if(!(v>0)){toast('اكتب قيمة الخصم',false);return}if(edit.t==='pct'&&v>100){toast('النسبة لا تتجاوز ١٠٠',false);return}
  if(findCp(code)){toast('هذا الرمز موجود مسبقًا',false);return}
  var L=cfg().coupons;L.push({code:code,t:edit.t==='pct'?'pct':'amt',v:v,min:num(($('e451M')||{}).value),exp:String(($('e451E')||{}).value||''),max:Math.floor(num(($('e451X')||{}).value)),used:0,at:new Date().toISOString()});setCfg('coupons',L);edit=null;toast('✅ حُفظ الكوبون '+code);repaint()}

document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-e451]');if(!b)return;var k=b.getAttribute('data-e451'),S=ST();
  if(k==='q')return qAdd(b);
  if(k==='cp')return cpApply();
  if(k==='cpx'){if(S){S.e451cp='';try{API()._rc()}catch(x){}rerender()}return}
  if(k==='seg'){setCfg(b.getAttribute('data-k'),b.getAttribute('data-v'));return repaint()}
  if(k==='cnew'){edit={t:'pct'};return repaint()}
  if(k==='ct'){var c=$('e451C'),v=$('e451V');edit={t:b.getAttribute('data-v'),code:c&&c.value,v:v&&v.value};return repaint()}
  if(k==='csave')return saveCp();
  if(k==='cpt'||k==='cpd'){var L=cfg().coupons,i=+b.getAttribute('data-i');if(!L[i])return;if(k==='cpd'){if(!confirm('حذف الكوبون '+L[i].code+'؟'))return;L.splice(i,1)}else L[i].off=!L[i].off;setCfg('coupons',L);return repaint()}},true);
document.addEventListener('change',function(e){var t=e.target,k=t&&t.getAttribute&&t.getAttribute('data-e451k');if(k){setCfg(k,t.checked?1:0);repaint();return}
  if(t&&t.id==='e451SP'){setCfg('sp',String(t.value||'').replace(/\D/g,'').slice(0,2)||'2')}},true);
document.addEventListener('keydown',function(e){if(e.key==='Enter'&&e.target&&e.target.id==='e451Cp'){e.preventDefault();cpApply()}},true);
window.EMD451={cfg:cfg,quick:quick,ask:ask,guard:guard,guardFinish:guardFinish,ok:ok,canDisc:canDisc,pinOn:pinOn,coupon:coupon,cpBox:cpBox,after:after,today:todayCard,scale:scale,panel:panel,ean:ean};
})();

/* ---- emd434-js ---- */

(function(){
if(window.EMDLoyV434)return;
/* V434: حسابات العملاء (كشف حساب وتحصيل الآجل) ونقاط الولاء في البيع المباشر — تعمل محليًا، ومع السحابة تجمع أرصدة كل الفروع */
var LK='emd434_lp',CUR='ر.ع',DEF={on:false,earn:10,per100:0.5,min:100};
var METHODS={cash:'💵 نقدًا',transfer:'🏦 تحويل',card:'💳 بطاقة',other:'🔁 أخرى'};
function DV(){return window.EMDDirectV113}
function D(){return window.db||{}}
function arr(x){return Array.isArray(x)?x:[]}
function digits(s){return String(s==null?'':s).replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/[۰-۹]/g,function(d){return '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)})}
function num(v){var x=parseFloat(digits(v).replace(/٫/g,'.').replace(/[,،\s]/g,''));return isFinite(x)?x:0}
function r3(x){return Math.round((x+Number.EPSILON)*1000)/1000}
function fmt(x){return r3(x||0).toFixed(3)}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function norm(x){return String(x||'').replace(/[ـ]/g,'').trim().toLowerCase().replace(/\s+/g,' ')}
function pk(p){return digits(p).replace(/\D/g,'')}
function p8(p){var k=pk(p);return k.length>=7?k.slice(-8):''}
function fd(iso){var t=new Date(iso);if(isNaN(t))return '';var z=function(n){return (n<10?'0':'')+n};return t.getFullYear()+'-'+z(t.getMonth()+1)+'-'+z(t.getDate())}
function $(id){return document.getElementById(id)}
function toast(t){var e=document.createElement('div');e.className='emd103-toast';e.textContent=t;document.body.appendChild(e);setTimeout(function(){e.style.opacity='0'},2600);setTimeout(function(){e.remove()},3100)}
function storeName(){try{var p=window.EMDBusinessProfileV333&&window.EMDBusinessProfileV333.get();return String(p&&p.name||'').trim()||'متجري'}catch(e){return 'متجري'}}
function CO(){return window.EMDCoV430}
function cloud(){try{return CO()&&CO().cloud?CO().cloud():null}catch(e){return null}}
function perm(p){try{var S=window.EMDStaffV108;if(S&&S.can&&!S.can(p))return false}catch(e){}return true}

/* ---------- الإعداد (مع السحابة: يحدّده المالك ويصل إلى كل الفروع) ---------- */
function cfg(){var x=null;
  try{if(cloud()){var px=CO().state().px;if(px&&px.lp&&typeof px.lp==='object')x=px.lp}}catch(e){}
  if(!x)try{x=JSON.parse(PLS.getItem(LK)||'null')}catch(e){}
  x=Object.assign({},DEF,x||{});x.on=!!x.on;x.earn=Math.max(0,num(x.earn));x.per100=Math.max(0,num(x.per100));x.min=Math.max(0,Math.round(num(x.min)));return x}
function canEdit(){var cl=cloud();if(cl&&!cl.owner)return false;return perm('finance')}
function setCfg(v){try{PLS.setItem(LK,JSON.stringify(v))}catch(e){}var cl=cloud();if(cl&&cl.owner&&CO().pxSet)CO().pxSet('lp',v)}
function ptVal(pts,c){c=c||cfg();return r3(pts*c.per100/100)}

/* ---------- حساب الفاتورة: النقاط تُكسب على المبلغ المدفوع فعلًا ---------- */
function eff(s){var d=DV();if(!s||!d)return {e:0,x:0,due:0,t:0,pd:0,st:''};
  var st=d.statusOf(s),t=d.netTotal(s),pd=d.paidOf(s),lp=s.lp||{},vd=st==='void';
  return {e:vd?0:Math.floor(num(lp.r)*Math.max(0,Math.min(pd,t))+1e-9),x:vd?0:Math.round(num(lp.x)),due:vd?0:Math.max(0,r3(t-pd)),t:vd?0:t,pd:pd,st:st}}
function row(s){if(!s||!s.customer)return null;var k=pk(s.customer.phone);if(k.length<7)return null;var f=eff(s);return {p:k,n:String(s.customer.name||'').slice(0,80),e:f.e,x:f.x}}
function custName(k8){var c=arr(D().customers).find(function(c){return p8(c.phone)===k8});return c&&c.name||''}
function local(k8){var o={e:0,x:0,due:0,t:0,n:0,name:'',list:[]};
  arr(D().directSales).forEach(function(s){if(!s.customer||p8(s.customer.phone)!==k8)return;var f=eff(s);o.e+=f.e;o.x+=f.x;o.due=r3(o.due+f.due);o.t=r3(o.t+f.t);o.n++;if(s.customer.name)o.name=s.customer.name;o.list.push({id:s.id,at:s.at,t:f.t,pd:f.pd,due:f.due,st:f.st,me:1})});
  if(!o.name)o.name=custName(k8);return o}
/* أرصدة الفروع الأخرى (بدون مبيعات هذا الجهاز، فلا يتكرر شيء) */
var RC={},busy={};
function remote(k8,cb){var cl=cloud();if(!cl||!k8||!CO().call)return;var r=RC[k8];if(busy[k8]||(r&&Date.now()-r.at<20000))return;busy[k8]=1;
  CO().call('cust',{phone:k8}).then(function(j){RC[k8]={e:num(j.e),x:num(j.x),due:num(j.due),t:num(j.t),n:num(j.n),name:j.name||'',list:arr(j.list),at:Date.now()};busy[k8]=0;if(cb)cb()}).catch(function(){busy[k8]=0;RC[k8]=RC[k8]||{e:0,x:0,due:0,t:0,n:0,list:[],at:Date.now(),fail:1}})}
function acct(k8){var a=local(k8),r=RC[k8];a.loc=a.due;if(r){a.e+=r.e;a.x+=r.x;a.due=r3(a.due+r.due);a.t=r3(a.t+r.t);a.n+=r.n;if(!a.name)a.name=r.name||'';a.rdue=r.due;r.list.forEach(function(x){a.list.push({id:x.id,at:x.at,t:num(x.t),pd:num(x.pd),due:x.st==='void'?0:Math.max(0,r3(num(x.t)-num(x.pd))),st:x.st,b:x.b||'فرع آخر'})})}
  a.pts=Math.max(0,a.e-a.x);a.list.sort(function(p,q){return String(q.at).localeCompare(String(p.at))});return a}

/* ---------- استبدال النقاط في الفاتورة الحالية ---------- */
var R={};
function redeem(dr,base){var c=cfg();if(!c.on||!R.pts||!dr||R.key!==dr.key||!(c.per100>0))return {pts:0,v:0};var k=p8(dr.custPhone);if(!k||k!==R.p)return {pts:0,v:0};
  var pts=Math.min(R.pts,acct(k).pts);if(pts<=0)return {pts:0,v:0};var v=Math.min(ptVal(pts,c),Math.max(0,base));
  if(v<ptVal(pts,c))pts=Math.min(pts,Math.ceil(v*100/c.per100-1e-9));return {pts:pts,v:r3(v)}}
function stamp(c,cp){var g=cfg();if(!cp)return undefined;if(!g.on&&!(c&&c.lpPts))return undefined;return {r:g.on?g.earn:0,x:(c&&c.lpPts)||0,v:(c&&c.lpVal)||0}}
function waLine(s){var c=cfg();if(!c.on||!s||!s.customer)return '';var k=p8(s.customer.phone);if(!k)return '';var f=eff(s),a=acct(k);return '⭐ نقاط هذه الفاتورة: '+f.e+' · رصيدك الآن: '+a.pts+' نقطة'}
function pos(cu,S,calc){var k=p8(S.custPhone);if(!k)return;var c=cfg();remote(k,function(){var s=DV()._s();if(s.open&&p8(s.custPhone)===k)DV()._rc()});
  var a=acct(k),h='';
  if(a.due>0.0005)h+='<div class="e434-pb due"><span>⏳ مبلغ سابق مستحق على العميل: <b>'+fmt(a.due)+' '+CUR+'</b></span><button type="button" data-l434="acct" data-v="'+k+'">📄 كشف الحساب</button></div>';
  if(c.on){var on=R.key===S.key&&R.p===k&&R.pts>0,cv=calc||DV().calc(DV()._draft());
    if(on&&cv&&cv.lpPts>0)h+='<div class="e434-pb on"><span>⭐ استُبدلت <b>'+cv.lpPts+'</b> نقطة بخصم <b>'+fmt(cv.lpVal)+' '+CUR+'</b></span><button type="button" data-l434="unrd">إلغاء الاستبدال</button></div>';
    else if(a.pts>0&&a.pts>=c.min)h+='<div class="e434-pb pts"><span>⭐ نقاط العميل: <b>'+a.pts+'</b> (تعادل '+fmt(ptVal(a.pts,c))+' '+CUR+')</span><button type="button" data-l434="rd" data-v="'+k+'">استبدال النقاط</button></div>';
    else h+='<div class="e434-pb pts"><span>⭐ نقاط العميل: <b>'+a.pts+'</b>'+(a.pts>0&&c.min>a.pts?' · يمكن الاستبدال من '+c.min+' نقطة':'')+'</span></div>';
    var will=cv?Math.floor(c.earn*Math.max(0,cv.total)+1e-9):0;if(will>0)h+='<div style="font-size:12.5px;color:#92400e;margin-top:4px">يكسب العميل '+will+' نقطة عند سداد هذه الفاتورة.</div>'}
  if(h)cu.insertAdjacentHTML('beforeend',h)}

/* ---------- تبويب «👥 العملاء» في نافذة البيع المباشر ---------- */
var T={q:'',sel:null,cfg:false,rl:null,rat:0,amt:'',m:'cash',err:''};
function remoteList(){var cl=cloud();if(!cl||!CO().call||Date.now()-T.rat<30000)return;T.rat=Date.now();
  CO().call('custs',{}).then(function(j){T.rl=arr(j.list);rer()}).catch(function(){})}
function rer(){var s=DV()&&DV()._s();if(s&&s.open&&s.tab==='cust'){var b=$('emd113Body');if(b)renderTab(b)}}
function allAccts(){var m={},d=DV();
  function g(k){return m[k]||(m[k]={p:k,name:'',due:0,e:0,x:0,n:0,last:''})}
  arr(D().directSales).forEach(function(s){if(!s.customer)return;var k=p8(s.customer.phone);if(!k)return;var o=g(k),f=eff(s);o.due=r3(o.due+f.due);o.e+=f.e;o.x+=f.x;o.n++;if(s.customer.name)o.name=s.customer.name;if(String(s.at)>o.last)o.last=String(s.at)});
  arr(T.rl).forEach(function(r){var k=p8(r.p);if(!k)return;var o=g(k);o.due=r3(o.due+num(r.due));o.e+=num(r.e);o.x+=num(r.x);o.n+=num(r.c);if(!o.name)o.name=r.n||''});
  return Object.keys(m).map(function(k){var o=m[k];if(!o.name)o.name=custName(k);o.pts=Math.max(0,o.e-o.x);return o})}
function lpBar(){var c=cfg(),cl=cloud(),ed=canEdit();
  var h=c.on?'<div class="e434-lp"><span>⭐ <b>نقاط الولاء مفعّلة</b> · '+c.earn+' نقطة لكل 1 '+CUR+' · كل 100 نقطة = '+fmt(c.per100)+' '+CUR+'</span>'
    :'<div class="e434-lp off"><span>⭐ نقاط الولاء غير مفعّلة. فعّلها ليكسب عملاؤك نقاطًا مع كل شراء ويستبدلوها بخصم.</span>';
  h+=ed?'<button type="button" class="e434-sb" data-l434="cfg">'+(T.cfg?'إخفاء الإعداد':(c.on?'⚙️ الإعداد':'تفعيل'))+'</button>':(cl&&!cl.owner?'<small>يحدّدها المالك لكل الفروع</small>':'');
  h+='</div>';
  if(T.cfg&&ed)h+='<div class="emd113-box e434-f"><label class="e434-sw"><input type="checkbox" id="e434on"'+(c.on?' checked':'')+'> تفعيل نقاط الولاء</label>'
    +'<div class="emd113-g2"><label>النقاط لكل 1 '+CUR+'<input class="emd113-in" id="e434earn" inputmode="decimal" value="'+esc(c.earn)+'"></label><label>قيمة كل 100 نقطة ('+CUR+')<input class="emd113-in" id="e434per" inputmode="decimal" value="'+esc(c.per100)+'"></label></div>'
    +'<label>أقل عدد نقاط للاستبدال<input class="emd113-in" id="e434min" inputmode="numeric" value="'+esc(c.min)+'"></label>'
    +'<div class="emd113-note">مثال: '+c.earn+' نقطة لكل 1 '+CUR+' وقيمة 100 نقطة '+fmt(c.per100)+' '+CUR+' تعني أن العميل يسترد نحو '+(c.earn*c.per100).toFixed(1)+'٪ من مشترياته. تُكسب النقاط على المبلغ المدفوع فقط، وتُلغى نقاط الفاتورة الملغاة.'+(cl?' يصل الإعداد إلى جميع الفروع.':'')+'</div>'
    +'<button type="button" class="emd113-btn g" data-l434="save">حفظ الإعداد</button></div>';
  return h}
function renderTab(b){var d=DV();if(!d)return;
  if(T.sel)return renderAcct(b);
  remoteList();
  var c=cfg(),L=allAccts(),q=norm(T.q),qd=pk(T.q);
  var debt=L.filter(function(o){return o.due>0.0005}),tDue=debt.reduce(function(a,o){return a+o.due},0),tPts=L.reduce(function(a,o){return a+o.pts},0);
  var show=L.filter(function(o){if(q)return norm(o.name).indexOf(q)>=0||(qd.length>=3&&o.p.indexOf(qd.slice(-8))>=0);return o.due>0.0005||(c.on&&o.pts>0)});
  show.sort(function(a,b){return (b.due-a.due)||(b.pts-a.pts)||String(b.last).localeCompare(String(a.last))});
  var h=lpBar()+'<div class="emd113-stats"><div class="emd113-stat"><small>المستحق على العملاء</small><b style="color:#b91c1c">'+fmt(tDue)+'</b></div><div class="emd113-stat"><small>عملاء عليهم مبالغ</small><b>'+debt.length+'</b></div>'
    +(c.on?'<div class="emd113-stat"><small>نقاط لدى العملاء</small><b style="color:#92400e">'+tPts+'</b></div><div class="emd113-stat"><small>قيمتها</small><b>'+fmt(ptVal(tPts,c))+'</b></div>':'')+'</div>'
    +'<input class="emd113-in" id="e434q" placeholder="🔎 ابحث باسم العميل أو رقم هاتفه" value="'+esc(T.q)+'" autocomplete="off" style="margin-bottom:8px">'
    +(cloud()?'<div style="font-size:12px;color:#64748b;margin:-2px 0 8px">الأرصدة تشمل جميع الفروع.</div>':'');
  if(!show.length)h+='<div class="emd113-note">'+(q?'لا يوجد عميل بهذا الاسم أو الرقم.':'لا توجد مبالغ مستحقة على العملاء'+(c.on?' ولا نقاط':'')+'. ابحث عن أي عميل لعرض كشف حسابه.')+'</div>';
  h+=show.slice(0,150).map(function(o){return '<div class="emd113-row" data-l434="open" data-v="'+o.p+'"><div><b>'+esc(o.name||'بدون اسم')+'</b><small dir="ltr" style="text-align:right">'+esc(o.p)+'</small></div><div style="text-align:left">'
    +(o.due>0.0005?'<span class="e434-tg d">عليه '+fmt(o.due)+'</span>':'<span class="e434-tg o">لا مستحقات</span>')+(c.on||o.pts?'<span class="e434-tg g">⭐ '+o.pts+'</span>':'')+'<small>'+o.n+' فاتورة</small></div></div>'}).join('');
  var hadQ=document.activeElement&&document.activeElement.id==='e434q',pos0=hadQ?document.activeElement.selectionStart:0;
  b.innerHTML=h;
  if(hadQ){var qi=$('e434q');if(qi){qi.focus();try{qi.setSelectionRange(pos0,pos0)}catch(e){}}}
}
function renderAcct(b){var k=T.sel,c=cfg(),a=acct(k);remote(k,rer);
  var h='<button type="button" class="emd113-btn l" data-l434="back" style="margin-bottom:10px">→ كل العملاء</button>'
    +'<div class="e434-hd"><b>'+esc(a.name||'بدون اسم')+'</b><small dir="ltr" style="text-align:right">'+esc(k)+'</small></div>'
    +'<div class="emd113-stats"><div class="emd113-stat"><small>إجمالي المشتريات</small><b>'+fmt(a.t)+'</b></div><div class="emd113-stat"><small>المتبقي عليه</small><b style="color:'+(a.due>0.0005?'#b91c1c':'#166534')+'">'+fmt(a.due)+'</b></div>'
    +(c.on||a.pts?'<div class="emd113-stat"><small>رصيد النقاط</small><b style="color:#92400e">⭐ '+a.pts+'</b></div><div class="emd113-stat"><small>قيمتها</small><b>'+fmt(ptVal(a.pts,c))+'</b></div>':'')+'</div>';
  if(a.loc>0.0005&&perm('payments')){if(!T.amt)T.amt=fmt(a.loc);
    h+='<div class="emd113-box"><h3>💵 تسجيل تحصيل من العميل</h3><input class="emd113-in" id="e434amt" inputmode="decimal" value="'+esc(T.amt)+'" placeholder="المبلغ ('+CUR+')"><div class="emd113-chips">'
      +Object.keys(METHODS).map(function(m){return '<button type="button" class="emd113-chip'+(T.m===m?' on':'')+'" data-l434="m" data-v="'+m+'">'+METHODS[m]+'</button>'}).join('')+'</div>'
      +'<div style="font-size:12.5px;color:#64748b;margin-bottom:8px">يُوزَّع المبلغ على الفواتير غير المسددة بدءًا من الأقدم، ويظهر في درج النقد والوردية.</div>'
      +(T.err?'<div class="emd113-err">'+esc(T.err)+'</div>':'')+'<button type="button" class="emd113-btn g" data-l434="col" style="width:100%">✅ تسجيل التحصيل</button></div>'}
  if(a.rdue>0.0005)h+='<div class="emd113-note">منها '+fmt(a.rdue)+' '+CUR+' على فواتير في فروع أخرى، وتُحصَّل من الفرع نفسه.</div>';
  h+='<div class="emd113-box"><h3>📄 كشف الحساب</h3>'+(a.list.length?a.list.slice(0,200).map(function(x){var tg=x.st==='void'?'<span class="e434-tg d">ملغاة</span>':x.due>0.0005?'<span class="e434-tg d">متبقٍ '+fmt(x.due)+'</span>':'<span class="e434-tg o">مسددة</span>';
      return '<div class="emd113-it"'+(x.me?' data-l434="inv" data-v="'+esc(x.id)+'" style="cursor:pointer"':'')+'><span><b dir="ltr">'+esc(x.id)+'</b> · '+esc(fd(x.at))+(x.b?' <span class="e434-tg b">'+esc(x.b)+'</span>':'')+'</span><span>'+fmt(x.t)+' '+tg+'</span></div>'}).join(''):'<div class="emd113-note">لا توجد فواتير بيع مباشر لهذا العميل.</div>')+'</div>'
    +'<button type="button" class="emd113-btn w" data-l434="wa" style="width:100%">📤 إرسال كشف الحساب عبر واتساب</button>';
  b.innerHTML=h}
function waPhone(p){var d=pk(p);if(d.indexOf('00')===0)d=d.slice(2);if(d.length===8)d='968'+d;return d}
function waStatement(k){var a=acct(k),c=cfg(),fullPhone=k;
  arr(D().directSales).some(function(s){if(s.customer&&p8(s.customer.phone)===k){fullPhone=s.customer.phone;return true}});
  var L=['📄 كشف حساب — '+storeName(),'العميل: '+(a.name||'')+' '+k,''];
  a.list.filter(function(x){return x.due>0.0005}).slice(0,40).forEach(function(x){L.push('• '+x.id+' · '+fd(x.at)+' · الإجمالي '+fmt(x.t)+' · المتبقي '+fmt(x.due)+' '+CUR)});
  L.push('','إجمالي المشتريات: '+fmt(a.t)+' '+CUR,'المبلغ المتبقي: '+fmt(a.due)+' '+CUR);
  if(c.on)L.push('⭐ رصيد النقاط: '+a.pts+' نقطة (تعادل '+fmt(ptVal(a.pts,c))+' '+CUR+')');
  L.push('','شكرًا لتعاملكم 🌷');
  window.open('https://wa.me/'+waPhone(fullPhone)+'?text='+(window.EMDEncWaV129||encodeURIComponent)(L.join('\n')),'_blank')}
function collectAll(k,amt,m){var d=DV(),left=r3(num(amt));
  var ss=arr(D().directSales).filter(function(s){return s.customer&&p8(s.customer.phone)===k&&d.statusOf(s)!=='void'&&d.remainingOf(s)>0.0005}).sort(function(a,b){return String(a.at).localeCompare(String(b.at))});
  var tot=r3(ss.reduce(function(a,s){return a+d.remainingOf(s)},0));
  if(!(left>0))return {ok:false,error:'اكتب مبلغ التحصيل.'};
  if(left>tot+0.0005)return {ok:false,error:'المبلغ أكبر من المتبقي في هذا الفرع ('+fmt(tot)+' '+CUR+').'};
  var n=0;for(var i=0;i<ss.length&&left>0.0005;i++){var x=r3(Math.min(left,d.remainingOf(ss[i])));var r=d.collect(ss[i].id,x,m,'تحصيل من كشف الحساب');if(!r.ok)return {ok:false,error:r.error+(n?' (سُجّل تحصيل '+n+' فاتورة قبل الخطأ)':'')};left=r3(left-x);n++}
  return {ok:true,n:n}}

document.addEventListener('click',function(e){var t=e.target.closest&&e.target.closest('[data-l434]');if(!t||!t.closest('#emd113Ov'))return;var a=t.getAttribute('data-l434'),v=t.getAttribute('data-v'),S=DV()._s();
  if(a==='rd'){var c=cfg();R={key:S.key,p:v,pts:acct(v).pts};DV()._rc();return}
  if(a==='unrd'){R={};DV()._rc();return}
  if(a==='acct'){T.sel=v;T.amt='';T.err='';S.tab='cust';S.detail=null;DV()._render();return}
  if(a==='cfg'){T.cfg=!T.cfg;return rer()}
  if(a==='save'){var on=$('e434on'),v2={on:!!(on&&on.checked),earn:Math.max(0,num($('e434earn').value)),per100:Math.max(0,num($('e434per').value)),min:Math.max(0,Math.round(num($('e434min').value)))};
    if(v2.on&&!(v2.earn>0&&v2.per100>0)){toast('اكتب عدد النقاط وقيمة كل 100 نقطة.');return}
    setCfg(v2);T.cfg=false;toast(v2.on?'✓ تم تفعيل نقاط الولاء':'✓ تم حفظ الإعداد');return rer()}
  if(a==='open'){T.sel=v;T.amt='';T.err='';return rer()}
  if(a==='back'){T.sel=null;T.err='';return rer()}
  if(a==='m'){T.m=v;var ai=$('e434amt');if(ai)T.amt=ai.value;return rer()}
  if(a==='col'){var ai2=$('e434amt'),r=collectAll(T.sel,ai2?ai2.value:T.amt,T.m);if(!r.ok){T.err=r.error;T.amt=ai2?ai2.value:T.amt;return rer()}T.err='';T.amt='';toast('✓ سُجّل التحصيل على '+r.n+' فاتورة');try{if(CO()&&CO().sync)CO().sync()}catch(e2){}return rer()}
  if(a==='inv'){DV().open('list',v);return}
  if(a==='wa'){waStatement(T.sel);return}
},true);
/* أزرار مربع العميل: نمنع خروج المؤشر من حقل الهاتف حتى لا يُعاد رسم المربع قبل الضغط */
document.addEventListener('mousedown',function(e){var t=e.target.closest&&e.target.closest('#emd113Cust [data-l434]');if(t)e.preventDefault()},true);
document.addEventListener('input',function(e){var t=e.target;if(!t||!t.id)return;if(t.id==='e434q'){T.q=t.value;rer()}else if(t.id==='e434amt'){T.amt=t.value}},true);

window.EMDLoyV434={cfg:cfg,redeem:redeem,stamp:stamp,row:row,waLine:waLine,pos:pos,renderTab:renderTab,acct:acct,
  open:function(phone){var k=p8(phone);T.sel=k||null;DV().open('cust')}};
})();

/* ---- emd442-js ---- */

(function(){
if(window.EMD442)return;
/* V442: المرتجع والاستبدال في نافذة واحدة.
   1) البحث عن الفاتورة برقمها أو هاتف العميل أو باركود المنتج.
   2) اختيار الكميات المرتجعة بأزرار + و −، مع خيار «تالف لا يعود للمخزون».
   3) اختياريًا: منتج بديل، ويُحسب الفرق تلقائيًا (يدفعه العميل أو يُردّ إليه).
   القيد المحاسبي: المرتجع عملية على الفاتورة الأصلية، والبديل فاتورة جديدة يُدفع جزء منها من «رصيد المرتجع» دون أن يمرّ بالدرج. */
function DV(){return window.EMDDirectV113}
function D(){return window.db||{}}
function arr(x){return Array.isArray(x)?x:[]}
function num(v){var x=parseFloat(v);return isFinite(x)?x:0}
function r3(x){return Math.round((x||0)*1000)/1000}
function f3(x){return r3(x).toFixed(3)}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function norm(s){return String(s||'').trim().toLowerCase().replace(/\s+/g,' ')}
function dg(s){return String(s||'').replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/\D/g,'')}
function toast(m){try{window.toast?window.toast(m):alert(m)}catch(e){}}
function fdt(iso){try{var d=new Date(iso);return d.toLocaleDateString('ar-OM-u-nu-latn',{day:'numeric',month:'short'})+' · '+d.toLocaleTimeString('ar-OM-u-nu-latn',{hour:'numeric',minute:'2-digit'})}catch(e){return ''}}
var CUR=' ر.ع',M={cash:'💵 نقدًا',card:'💳 بطاقة',transfer:'🏦 تحويل',other:'🔁 أخرى'};
var REASONS=['المقاس','عيب في المنتج','رغبة العميل','خطأ في الطلب'];
var S=null,ov=null;
function fresh(id){return {step:id?'inv':'find',q:'',id:id||null,rq:{},dmg:{},rep:[],pq:'',showRep:false,method:'cash',credit:false,reason:'',err:'',done:null,busy:false}}
function sale(id){return arr(D().directSales).find(function(x){return x.id===id})}
function retQ(s,name){var k=norm(name),t=0;arr(s.ops).forEach(function(o){arr(o.items).forEach(function(i){if(norm(i.name)===k)t+=num(i.qty)})});return t}
function left(s,i){return r3(num(i.qty)-retQ(s,i.name))}
function prods(){return arr(D().products)}
function prodBy(name){var k=norm(name);return prods().find(function(p){return norm(p&&p.name)===k})}

/* ---------- الحسابات (بالطريقة نفسها التي يحسب بها البيع المباشر المرتجع) ---------- */
function retCalc(s){var d=DV(),sumNet=s.items.reduce(function(a,i){return a+num(i.net)},0),ratio=sumNet>0?num(s.total)/sumNet:1,v=0,n=0,all=true;
  s.items.forEach(function(i){var q=num(S.rq[i.name]);if(q>0){v+=num(i.net)/num(i.qty)*ratio*q;n+=q}if(left(s,i)-q>1e-9)all=false});
  var net0=d.netTotal(s);v=r3(v);if(all||v>net0)v=net0;
  var refund=Math.max(0,r3(d.paidOf(s)-r3(net0-v)));
  return {v:v,n:n,refund:refund,debt:r3(v-refund)}}
function repCalc(){if(!S.rep.length)return {t:0,lines:[]};try{var c=DV().calc({items:S.rep.map(function(x){return {name:x.name,qty:x.qty,price:'',disc:''}}),discount:0});return {t:r3(c.total),lines:c.lines||[]}}catch(e){return {t:0,lines:[]}}}

/* ---------- البحث عن الفاتورة ---------- */
function matches(q){var d=DV(),list=arr(D().directSales).filter(function(s){return d.statusOf(s)!=='void'&&s.items.some(function(i){return left(s,i)>0})});
  q=String(q||'').trim();var since=Date.now()-60*864e5;
  if(!q)return list.filter(function(s){return new Date(s.at).getTime()>=since}).slice(-25).reverse();
  var qd=dg(q),qn=norm(q),bc=prods().filter(function(p){return p.barcode&&String(p.barcode)===q}).map(function(p){return norm(p.name)});
  return list.filter(function(s){var id=String(s.id||'').toLowerCase();
    if(id===qn||id.indexOf(qn)>=0||(qd&&dg(s.id)===qd.replace(/^0+/,'').padStart(4,'0'))||(qd&&String(s.no)===qd.replace(/^0+/,'')))return true;
    var ph=dg(s.customer&&s.customer.phone);if(qd.length>=4&&ph&&ph.indexOf(qd)>=0)return true;
    if(bc.length&&s.items.some(function(i){return bc.indexOf(norm(i.name))>=0}))return true;
    if(qn.length>=2&&(norm(s.customer&&s.customer.name).indexOf(qn)>=0||s.items.some(function(i){return norm(i.name).indexOf(qn)>=0})))return true;
    return false}).reverse().slice(0,30)}
function vFind(){var L=matches(S.q);
  return '<div class="cd"><h4>🔎 ابحث عن الفاتورة</h4><input class="in" id="e442q" autocomplete="off" placeholder="رقم الفاتورة أو هاتف العميل أو باركود المنتج" value="'+esc(S.q)+'" aria-label="بحث عن الفاتورة"><div class="mut" style="margin-top:6px">'+(S.q?'النتائج المطابقة':'آخر الفواتير خلال 60 يومًا')+'</div></div>'+
   (L.length?L.map(function(s){var nm=s.customer&&(s.customer.name||s.customer.phone);return '<button type="button" class="inv" data-k="pick" data-v="'+esc(s.id)+'"><span><b dir="ltr">'+esc(s.id)+'</b>'+(arr(s.ops).length?' <small style="display:inline;color:#b91c1c">· عليها مرتجع</small>':'')+'<small>'+esc(nm||'بدون عميل')+' · '+esc(fdt(s.at))+'</small><small>'+esc(s.items.map(function(i){return i.name}).join('، ').slice(0,70))+'</small></span><b>'+f3(DV().netTotal(s))+'</b></button>'}).join(''):'<div class="cd mut">لا توجد فواتير مطابقة.</div>')}

/* ---------- تفاصيل المرتجع والبديل ---------- */
function vInv(){var s=sale(S.id);if(!s){S.step='find';return vFind()}
  var rc=retCalc(s),rp=repCalc(),h='';
  h+='<div class="cd"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><h4 style="margin:0">↩️ الأصناف المرتجعة من <span dir="ltr">'+esc(s.id)+'</span></h4><button type="button" class="b3" data-k="all">إرجاع الكل</button></div>'+
    '<div class="mut">'+esc((s.customer&&(s.customer.name||s.customer.phone))||'بدون عميل')+' · '+esc(fdt(s.at))+'</div>'+
    s.items.map(function(i,ix){var l=left(s,i),q=num(S.rq[i.name]);if(l<=0)return '<div class="ln"><div class="nm"><b style="color:#94a3b8">'+esc(i.name)+'</b><small>أُرجع بالكامل سابقًا</small></div></div>';
      return '<div class="ln"><div class="nm"><b>'+esc(i.name)+'</b><small>المتاح للإرجاع '+l+' · سعر القطعة '+f3(num(i.net)/num(i.qty))+'</small>'+(q>0?'<label class="dmg"><input type="checkbox" data-k="dmg" data-v="'+ix+'"'+(S.dmg[i.name]?' checked':'')+'> تالف (لا يعود إلى المخزون)</label>':'')+'</div>'+
        '<div class="stp"><button type="button" data-k="rm" data-v="'+ix+'" aria-label="إنقاص">−</button><b>'+q+'</b><button type="button" data-k="ra" data-v="'+ix+'" aria-label="زيادة">+</button></div></div>'}).join('')+'</div>';
  h+='<div class="cd"><h4>📝 سبب الإرجاع (اختياري)</h4><div class="chips">'+REASONS.map(function(r){return '<button type="button" data-k="rs" data-v="'+esc(r)+'" class="'+(S.reason===r?'on':'')+'">'+esc(r)+'</button>'}).join('')+'</div></div>';
  if(!S.showRep)h+='<button type="button" class="b2" data-k="rep" style="margin-bottom:12px">🔁 استبدال بمنتج آخر</button>';
  else{var P=S.pq?prods().filter(function(p){var q=norm(S.pq);return p&&p.name&&(norm(p.name).indexOf(q)>=0||String(p.barcode||'')===S.pq.trim())}).slice(0,6):[];
    h+='<div class="cd"><div style="display:flex;justify-content:space-between;align-items:center"><h4 style="margin:0">🔁 المنتج البديل</h4><button type="button" class="b3" data-k="norep">إلغاء الاستبدال</button></div>'+
      S.rep.map(function(x,ix){var ln=rp.lines.find(function(l){return norm(l.name)===norm(x.name)});return '<div class="ln"><div class="nm"><b>'+esc(x.name)+'</b><small>'+(ln?f3(ln.net):'')+' · المخزون '+num((prodBy(x.name)||{}).stock)+'</small></div><div class="stp"><button type="button" data-k="pm" data-v="'+ix+'" aria-label="إنقاص">−</button><b>'+x.qty+'</b><button type="button" data-k="pa" data-v="'+ix+'" aria-label="زيادة">+</button></div></div>'}).join('')+
      '<input class="in" id="e442p" autocomplete="off" style="margin-top:8px" placeholder="اسم المنتج البديل أو امسح الباركود" value="'+esc(S.pq)+'" aria-label="بحث عن المنتج البديل">'+
      P.map(function(p){return '<button type="button" class="pr" data-k="add" data-v="'+esc(p.name)+'"><span>'+esc(p.name)+' <small style="color:#64748b">· المخزون '+num(p.stock)+'</small></span><b>＋</b></button>'}).join('')+'</div>'}
  /* الملخص */
  var diff=r3(rp.t-rc.refund);
  h+='<div class="cd"><h4>🧮 الملخص</h4><div class="sm"><span>قيمة المرتجع ('+rc.n+' قطعة)</span><b>'+f3(rc.v)+'</b></div>'+
    (rc.debt>0.0005?'<div class="sm" style="color:#92400e"><span>يُخصم من المتبقي على العميل</span><b>'+f3(rc.debt)+'</b></div>':'')+
    (S.rep.length?'<div class="sm"><span>قيمة البديل</span><b>'+f3(rp.t)+'</b></div>':'');
  if(rc.n||S.rep.length){
    if(diff>0.0005)h+='<div class="tot pay"><span>يدفع العميل الفرق</span><span>'+f3(diff)+CUR+'</span></div>';
    else if(diff<-0.0005)h+='<div class="tot back"><span>يُردّ إلى العميل</span><span>'+f3(-diff)+CUR+'</span></div>';
    else h+='<div class="tot zero"><span>لا يوجد فرق</span><span>0.000</span></div>';
    if(Math.abs(diff)>0.0005)h+='<div style="margin-top:10px" class="mut">'+(diff>0?'طريقة الدفع':'طريقة الردّ')+'</div><div class="chips" style="margin-top:6px">'+Object.keys(M).map(function(k){return '<button type="button" data-k="m" data-v="'+k+'" class="'+(!S.credit&&S.method===k?'on':'')+'">'+M[k]+'</button>'}).join('')+
      (diff>0&&s.customer&&dg(s.customer.phone).length>=7?'<button type="button" data-k="cr" class="'+(S.credit?'on':'')+'">⏳ آجل على العميل</button>':'')+'</div>'}
  h+='</div>';
  if(S.err)h+='<div class="err">'+esc(S.err)+'</div>';
  return h}
function vDone(){var x=S.done;
  return '<div class="cd ok"><div class="ic">✅</div><h4 style="font-size:18px">'+(x.newId?'تم الاستبدال':'تم المرتجع')+'</h4><div class="mut">'+esc(x.msg)+'</div></div>'+
    (x.newId?'<button type="button" class="b3" data-k="opennew" style="width:100%;min-height:46px;margin-bottom:8px">🧾 عرض الفاتورة الجديدة <span dir="ltr">'+esc(x.newId)+'</span></button>':'')+
    '<button type="button" class="b3" data-k="openold" style="width:100%;min-height:46px;margin-bottom:8px">📄 عرض الفاتورة الأصلية <span dir="ltr">'+esc(x.id)+'</span></button>'+
    '<button type="button" class="b3" data-k="again" style="width:100%;min-height:46px">↩️ مرتجع آخر</button>'}
function foot(){if(S.step==='find')return '<div class="mut" style="text-align:center">اختر الفاتورة التي اشترى منها العميل.</div>';
  if(S.step==='done')return '<button type="button" class="b1" data-k="close">تم</button>';
  var s=sale(S.id);if(!s)return '';var rc=retCalc(s),can=rc.n>0;
  return '<button type="button" class="b1" data-k="go"'+(can&&!S.busy?'':' disabled')+'>'+(S.busy?'جارٍ التنفيذ…':(S.rep.length?'تنفيذ الاستبدال':'تنفيذ المرتجع'))+'</button>'+(can?'':'<div class="mut" style="text-align:center;margin-top:6px">اختر صنفًا واحدًا على الأقل للإرجاع.</div>')}
function render(keep){if(!ov)return;var fid=keep&&document.activeElement&&document.activeElement.id,pos=fid?document.activeElement.selectionStart:null,bd=ov.querySelector('.bd'),st=bd.scrollTop;
  ov.querySelector('h3').textContent=S.step==='find'?'↩️ مرتجع واستبدال':S.step==='done'?'↩️ مرتجع واستبدال':'↩️ مرتجع واستبدال · '+S.id;
  ov.querySelector('.bk').style.visibility=S.step==='inv'?'visible':'hidden';
  bd.innerHTML=S.step==='find'?vFind():S.step==='done'?vDone():vInv();ov.querySelector('.ft').innerHTML=foot();bd.scrollTop=st;
  if(fid){var el=document.getElementById(fid);if(el){el.focus();try{el.setSelectionRange(pos,pos)}catch(e){}}}}

/* ---------- التنفيذ ---------- */
function run(){var d=DV(),s=sale(S.id);if(!s||S.busy)return;var rc=retCalc(s),rp=repCalc();if(!rc.n){S.err='اختر صنفًا واحدًا على الأقل للإرجاع.';return render()}
  var list=s.items.filter(function(i){return num(S.rq[i.name])>0}).map(function(i){return {name:i.name,qty:num(S.rq[i.name])}});
  var diff=r3(rp.t-rc.refund),useEx=S.rep.length?Math.min(rc.refund,rp.t):0;
  if(S.rep.length){var lack=rp.lines.filter(function(l){var back=num(S.rq[l.name])&&!S.dmg[l.name]?num(S.rq[l.name]):0;return !l.p||num(l.p.stock)+back<l.qty});
    if(lack.length){S.err='الكمية غير متوفرة في المخزون: '+lack.map(function(l){return l.name}).join('، ');return render()}}
  var msg=S.rep.length?'تأكيد الاستبدال؟\nالمرتجع: '+f3(rc.v)+'\nالبديل: '+f3(rp.t)+'\n'+(diff>0.0005?'يدفع العميل: '+f3(diff):diff<-0.0005?'يُردّ إلى العميل: '+f3(-diff):'لا يوجد فرق'):'تأكيد إرجاع '+rc.n+' قطعة بقيمة '+f3(rc.v)+'؟'+(rc.refund>0?'\nيُردّ إلى العميل: '+f3(rc.refund):'');
  if(!confirm(msg))return;
  S.busy=true;S.err='';render();
  var refundM=S.rep.length?(diff<0?S.method:'cash'):S.method;
  var r=d.returnItems(s.id,list,refundM,S.reason+(S.rep.length?(S.reason?' · ':'')+'استبدال':''),false);
  if(!r.ok){S.busy=false;S.err=r.error||'تعذّر تنفيذ المرتجع.';return render()}
  var op=r.op,now=op.at,touched=false;
  /* التالف لا يعود إلى المخزون */
  var dm=list.filter(function(x){return S.dmg[x.name]});
  if(dm.length){dm.forEach(function(x){var p=prodBy(x.name);if(p){p.stock=r3(num(p.stock)-x.qty);p.updatedAt=now}});op.dmg=dm.map(function(x){return {name:x.name,qty:x.qty}});touched=true}
  var newId=null;
  if(S.rep.length){
    /* الجزء المستخدم من رصيد المرتجع لا يمرّ بالدرج: يُسجَّل بطريقة «استبدال» على الفاتورتين */
    if(useEx>0.0005){var cashBack=r3(op.refund-useEx);op.method='exchange';op.refund=useEx;
      if(cashBack>0.0005)s.ops.push({id:'R'+Date.now().toString(36)+'b',type:'refund',at:now,by:op.by,items:[],value:0,refund:cashBack,method:S.method,reason:'فرق الاستبدال'});touched=true}
    var mode=diff>0.0005?(S.credit?'credit':'full'):'full',cust=s.customer||{};
    var c=d.commit({key:'x442-'+Date.now().toString(36),items:S.rep.map(function(x){return {name:x.name,qty:x.qty,price:'',disc:''}}),mode:mode,method:S.method,custName:cust.name||'',custPhone:cust.phone||'',note:'استبدال من الفاتورة '+s.id});
    if(!c.ok){/* المرتجع تمّ؛ يُعاد قيده كردّ نقدي عادي حتى لا يبقى رصيد معلّق */
      if(useEx>0.0005){var bx=s.ops.filter(function(o){return o.type==='refund'&&o.at===now});bx.forEach(function(o){s.ops.splice(s.ops.indexOf(o),1)});op.refund=rc.refund;op.method='cash'}
      try{d._save()}catch(e){}S.busy=false;S.done={id:s.id,msg:'تم المرتجع، لكن تعذّر إنشاء فاتورة البديل: '+(c.error||'')+'\nيُردّ إلى العميل '+f3(rc.refund)+CUR+' نقدًا.'};S.step='done';return render()}
    var ns=c.sale;newId=ns.id;ns.exFrom=s.id;op.exTo=newId;
    if(useEx>0.0005){var rest=r3(num(ns.total)-useEx),pays=[{amount:useEx,method:'exchange',at:ns.at,by:ns.by,type:'exchange',ref:s.id}];
      if(mode==='full'&&rest>0.0005)pays.push({amount:rest,method:S.method,at:ns.at,by:ns.by,type:'sale'});ns.payments=pays}
    touched=true}
  if(touched){try{d._save()}catch(e){}}
  try{window.save&&window.save()}catch(e){}
  S.busy=false;S.step='done';
  var m=S.rep.length?(diff>0.0005?(S.credit?'سُجّل الفرق '+f3(diff)+CUR+' آجلًا على العميل.':'استُلم من العميل '+f3(diff)+CUR+' ('+M[S.method]+').'):diff<-0.0005?'رُدّ إلى العميل '+f3(-diff)+CUR+' ('+M[S.method]+').':'لا يوجد فرق في المبلغ.'):(rc.refund>0?'رُدّ إلى العميل '+f3(rc.refund)+CUR+' ('+M[S.method]+').':'خُصم المرتجع من المتبقي على العميل.');
  if(dm.length)m+=' الأصناف التالفة لم تعد إلى المخزون.';
  S.done={id:s.id,newId:newId,msg:m};render()}

/* ---------- الواجهة ---------- */
function build(){if(ov)return ov;ov=document.createElement('div');ov.id='e442';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.setAttribute('aria-label','مرتجع واستبدال');
  ov.innerHTML='<div class="pn"><div class="hd"><button type="button" class="bk" data-k="back" aria-label="رجوع">→</button><h3>↩️ مرتجع واستبدال</h3><button type="button" data-k="close" aria-label="إغلاق">✕</button></div><div class="bd"></div><div class="ft"></div></div>';
  document.body.appendChild(ov);
  ov.addEventListener('click',function(e){if(e.target===ov)return close();var t=e.target.closest('[data-k]');if(!t)return;var k=t.getAttribute('data-k'),v=t.getAttribute('data-v'),s=sale(S.id);
    if(k==='close')return close();
    if(k==='back'){S=fresh();return render()}
    if(k==='pick'){S=fresh(v);return render()}
    if(k==='again'){S=fresh();return render()}
    if(k==='openold'||k==='opennew'){var id=k==='opennew'?S.done.newId:S.done.id;close();try{DV().open('list',id)}catch(x){}return}
    if(k==='go')return run();
    if(!s)return;S.err='';
    if(k==='ra'||k==='rm'){var it=s.items[+v],l=left(s,it),q=num(S.rq[it.name])+(k==='ra'?1:-1);S.rq[it.name]=Math.max(0,Math.min(l,q));if(!S.rq[it.name])delete S.dmg[it.name];return render()}
    if(k==='all'){var full=s.items.every(function(i){return num(S.rq[i.name])===left(s,i)});s.items.forEach(function(i){S.rq[i.name]=full?0:left(s,i)});return render()}
    if(k==='dmg'){var it2=s.items[+v];S.dmg[it2.name]=t.checked;return render()}
    if(k==='rs'){S.reason=S.reason===v?'':v;return render()}
    if(k==='rep'){S.showRep=true;render();var pi=document.getElementById('e442p');if(pi)pi.focus();return}
    if(k==='norep'){S.showRep=false;S.rep=[];S.pq='';S.credit=false;return render()}
    if(k==='add'){addRep(v);return}
    if(k==='pa'||k==='pm'){var x=S.rep[+v];x.qty+=k==='pa'?1:-1;if(x.qty<=0)S.rep.splice(+v,1);return render()}
    if(k==='m'){S.method=v;S.credit=false;return render()}
    if(k==='cr'){S.credit=!S.credit;return render()}});
  ov.addEventListener('input',function(e){if(e.target.id==='e442q'){S.q=e.target.value;render(true)}else if(e.target.id==='e442p'){S.pq=e.target.value;render(true)}});
  ov.addEventListener('keydown',function(e){if(e.key==='Escape')return close();if(e.key!=='Enter')return;
    if(e.target.id==='e442q'){e.preventDefault();var L=matches(S.q);if(L.length===1){S=fresh(L[0].id);render()}}
    else if(e.target.id==='e442p'){e.preventDefault();var q=S.pq.trim(),p=prods().find(function(x){return x.barcode&&String(x.barcode)===q})||prods().filter(function(x){return x&&x.name&&norm(x.name).indexOf(norm(q))>=0})[0];if(p)addRep(p.name)}});
  return ov}
function addRep(name){var x=S.rep.find(function(r){return norm(r.name)===norm(name)});if(x)x.qty++;else S.rep.push({name:name,qty:1});S.pq='';render();var pi=document.getElementById('e442p');if(pi)pi.focus()}
function open(id){if(!DV())return;build();S=fresh(id&&sale(id)?id:null);ov.classList.add('show');render();setTimeout(function(){var q=document.getElementById('e442q');if(q)q.focus()},60)}
function close(){if(ov)ov.classList.remove('show')}

/* زر «إرجاع أصناف» في تفاصيل الفاتورة يفتح النافذة الجديدة مباشرة على تلك الفاتورة */
document.addEventListener('click',function(e){var t=e.target.closest&&e.target.closest('#emd113Body [data-a="retopen"]');if(!t||!DV())return;e.preventDefault();e.stopPropagation();var st=DV().state();open(st&&st.detail)},true);
/* زر في قائمة المبيعات */
function inject(){var b=document.getElementById('emd113Body');if(!b||!DV())return;var st=DV().state();if(!st||st.tab!=='list'||st.detail){return}
  if(b.querySelector('.e442-btn'))return;var x=document.createElement('button');x.type='button';x.className='e442-btn';x.textContent='↩️ مرتجع واستبدال';x.onclick=function(){open()};b.insertBefore(x,b.firstChild)}
function watch(){var b=document.getElementById('emd113Body');if(!b||b.__e442)return;b.__e442=1;new MutationObserver(inject).observe(b,{childList:true});inject()}
(RW.__posHooks=RW.__posHooks||[]).push(watch);
window.EMD442={open:open,close:close};
})();

/* ---- EMD-V443-invoice-js ---- */

(function(){
'use strict';
if(window.EMDInvV443)return;
var K='emd443_inv',FONT="'IBM Plex Sans Arabic',Tahoma,'Segoe UI',Arial,sans-serif",GOLD='#c9a227';
var DEF={tpl:'classic',color:'',logoPos:'side',title:'فاتورة',addr:'',vat:'',cr:'',email:'',web:'',bank:'',iban:'',terms:'',footer:'شكرًا لتعاملكم معنا',qr:'none',stamp:'',lang:'ar',paper:'a4',
  wa:'مرحبًا {العميل}، مرفقة فاتورتك رقم {رقم} من {المتجر} بإجمالي {الإجمالي}.',
  show:{phone:true,addr:true,method:true,paid:true,sku:false,thumb:false,note:true,cashier:true}};
var TPLS=[['classic','كلاسيك EMD','شريط علوي ملوّن مع الشعار، وهو الشكل المعتاد.'],['elegant','أنيق','خلفية بيضاء وخطوط ذهبية والشعار في الوسط.'],['formal','رسمي للشركات','جدول بحدود، بيانات ضريبية، ختم وتوقيع.'],['compact','مختصر','شكل خفيف يشبه الإيصال، مناسب للمحلات.']];
var COLORS=[['','لون التطبيق'],['#1e3a8a','كحلي EMD'],['#0f172a','فحمي'],['#047857','زمردي'],['#b45309','كهرماني'],['#9f1239','عنابي'],['#6d28d9','بنفسجي'],['#0e7490','فيروزي'],['#be185d','وردي']];
var TITLES=['فاتورة','فاتورة ضريبية','فاتورة مبدئية','عرض سعر'];
var TEN={'فاتورة':'Invoice','فاتورة ضريبية':'Tax Invoice','فاتورة مبدئية':'Proforma Invoice','عرض سعر':'Quotation'};
var T={no:['رقم الفاتورة','Invoice No.'],date:['التاريخ','Date'],cust:['العميل','Bill To'],item:['المنتج','Item'],qty:['الكمية','Qty'],price:['السعر','Price'],amt:['المجموع','Amount'],sub:['المجموع قبل الخصم','Subtotal'],disc:['الخصم','Discount'],total:['الإجمالي','Total'],paid:['المدفوع','Paid'],rem:['المتبقي','Balance Due'],full:['تم الدفع بالكامل','Paid in Full'],method:['طريقة الدفع','Payment'],vat:['الرقم الضريبي','VAT No.'],cr:['السجل التجاري','C.R. No.'],bank:['بيانات التحويل البنكي','Bank Details'],terms:['الشروط والأحكام','Terms & Conditions'],note:['ملاحظات','Notes'],stamp:['الختم','Stamp'],sign:['التوقيع','Signature'],cashier:['الكاشير','Cashier'],seller:['بيانات المنشأة','From'],vatl:['منها ضريبة القيمة المضافة','Incl. VAT'],ret:['المرتجعات','Returns'],voidS:['ملغاة','VOID'],iban:['رقم الحساب / IBAN','IBAN']};

function $(i){return document.getElementById(i)}
function num(x){var n=parseFloat(String(x==null?'':x).replace(/[٠-٩]/g,function(c){return '٠١٢٣٤٥٦٧٨٩'.indexOf(c)}).replace(/,/g,''));return isFinite(n)?n:0}
function f3(x){return (Math.round(num(x)*1000)/1000).toFixed(3)}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function J(k,d){try{var v=JSON.parse(PLS.getItem(k)||'null');return v==null?d:v}catch(e){return d}}
function cfg(){var x=J(K,{})||{},o=JSON.parse(JSON.stringify(DEF));Object.keys(x).forEach(function(k){if(k==='show'){if(x.show&&typeof x.show==='object')Object.keys(x.show).forEach(function(j){o.show[j]=!!x.show[j]})}else if(x[k]!=null&&k in o)o[k]=x[k]});return o}
function setCfg(p){var c=cfg();Object.keys(p).forEach(function(k){if(k==='show')Object.keys(p.show).forEach(function(j){c.show[j]=!!p.show[j]});else c[k]=p[k]});try{PLS.setItem(K,JSON.stringify(c))}catch(e){toast('تعذّر الحفظ: مساحة التخزين ممتلئة')}return c}
function prof(){return J('emd_business_profile_v333',{})||{}}
function sName(){return String(prof().name||'').trim()||'متجري'}
function cur(){var c=prof().currency;return (!c||c==='OMR')?'ر.ع':c}
function pos(){var p=J('emd420_pos',{})||{};return {vat:!!p.vat,rate:num(p.rate)||5,vatNo:String(p.vatNo||'')}}
function db(){var d=window.db;if(d&&typeof d==='object')return d;return J('emd_business_v1',{})||{}}
function toast(t){var el=$('e443Toast');if(!el){el=document.createElement('div');el.id='e443Toast';el.style.cssText='position:fixed;left:50%;bottom:90px;transform:translateX(-50%);background:#0f172a;color:#fff;padding:10px 16px;border-radius:12px;z-index:2147483647;font:700 14px Tahoma,Arial;direction:rtl;display:none;max-width:90vw;text-align:center';document.body.appendChild(el)}el.textContent=t;el.style.display='block';clearTimeout(toast.t);toast.t=setTimeout(function(){el.style.display='none'},2400)}
function accent(c){if(c.color)return c.color;try{var a=window.EMDLookV89&&EMDLookV89.accentHex();if(a&&/^#[0-9a-f]{6}$/i.test(a))return a}catch(e){}return '#1e3a8a'}
function waPhone(p){var d=String(p||'').replace(/[٠-٩]/g,function(c){return '٠١٢٣٤٥٦٧٨٩'.indexOf(c)}).replace(/\D/g,'');if(d.indexOf('00')===0)d=d.slice(2);if(d.length===8)d='968'+d;return d}
function enc(t){return (window.EMDEncWaV129||encodeURIComponent)(t)}
function img(src,ms){return new Promise(function(res){if(!src)return res(null);var im=new Image(),done=false;function fin(v){if(!done){done=true;res(v)}}im.onload=function(){fin(im)};im.onerror=function(){fin(null)};setTimeout(function(){fin(null)},ms||2500);im.src=src})}
function logo(){var lk=null;try{lk=window.EMDLookV89&&EMDLookV89.logoImg()}catch(e){}if(lk&&lk.width)return Promise.resolve(lk);var s=PLS.getItem('emd_v89_logo');return /^data:image/.test(s||'')?img(s):Promise.resolve(null)}
function fontsReady(){try{if(!document.fonts||!document.fonts.load)return Promise.resolve();return Promise.race([Promise.all([document.fonts.load('700 30px "IBM Plex Sans Arabic"'),document.fonts.load('400 30px "IBM Plex Sans Arabic"')]),new Promise(function(r){setTimeout(r,900)})]).catch(function(){})}catch(e){return Promise.resolve()}}
function pIndex(){var m={};(db().products||[]).forEach(function(p){if(!p)return;var n=String(p.name||p.productName||'').trim();if(n)m[n]=p});return m}

/* ---------- عيّنة للمعاينة ---------- */
function sample(){var its=[{name:'عطر فاخر 100 مل',qty:2,price:12.5},{name:'علبة هدايا مع بطاقة إهداء',qty:1,price:3},{name:'مبخرة خشبية',qty:1,price:8.75}];its.forEach(function(i){i.net=i.qty*i.price;i.sku='EMD-'+(1000+Math.round(i.price*10))});
  return {kind:'order',sample:true,id:'INV-1024',date:new Date(),cust:{name:'أحمد بن سالم',phone:'99123456',addr:'مسقط · السيب'},items:its,subtotal:36.75,discount:1.75,total:35,paid:20,remaining:15,method:'تحويل بنكي',pays:[],ops:[],note:'التوصيل مساءً',cashier:'',status:''}}

/* ---------- الرسم ---------- */
function render(N,over){
  var c=cfg();if(over)Object.keys(over).forEach(function(k){c[k]=over[k]});
  return Promise.all([logo(),fontsReady(),thumbs(N,c),img(c.stamp)]).then(function(r){return draw(N,c,r[0],r[2],r[3])})}
function thumbs(N,c){if(!c.show.thumb)return Promise.resolve({});var pi=pIndex(),out={},ps=[];N.items.forEach(function(i){var p=pi[String(i.name).trim()],s=p&&(p.image||p.img||p.photo);if(s&&/^data:image/.test(s)&&!out[i.name]){out[i.name]=1;ps.push(img(s,1500).then(function(im){out[i.name]=im}))}});return Promise.all(ps).then(function(){return out})}
function draw(N,c,lg,th,stampImg){
  var tpl=c.tpl,bi=c.lang==='bi',acc=accent(c),C=cur(),P=prof(),pv=pos(),pi=pIndex();
  var W=tpl==='compact'?820:1240,M=tpl==='compact'?44:70,R=W-M,L=M,CW=W-2*M;
  var Hmax=Math.min(16000,3200+N.items.length*240+(N.pays.length+N.ops.length)*70+(c.terms.length/2|0));
  var cv=document.createElement('canvas');cv.width=W;cv.height=Hmax;var x=cv.getContext('2d');
  x.fillStyle='#fff';x.fillRect(0,0,W,Hmax);x.textBaseline='top';x.direction='rtl';
  var brk=[],y=0;
  function F(px,b){x.font=(b?'700 ':'400 ')+px+'px '+FONT}
  function tx(s,X,Y,px,b,col,al){F(px,b);x.fillStyle=col||'#0f172a';x.textAlign=al||'right';x.fillText(String(s==null?'':s),X,Y)}
  function tw(s,px,b){F(px,b);return x.measureText(String(s)).width}
  function wrap(s,px,b,mw,max){F(px,b);var ws=String(s==null?'':s).split(/\s+/),o=[],cl='';ws.forEach(function(w){var n=cl?cl+' '+w:w;if(x.measureText(n).width>mw&&cl){o.push(cl);cl=w}else cl=n});if(cl)o.push(cl);if(!o.length)o=[''];if(max&&o.length>max){o=o.slice(0,max);o[max-1]=o[max-1].replace(/\s*\S*$/,'')+'…'}return o}
  function box(X,Y,w,h,col){x.fillStyle=col;x.fillRect(X,Y,w,h)}
  function rr(X,Y,w,h,r,fill,stroke,lw){x.beginPath();if(x.roundRect)x.roundRect(X,Y,w,h,r);else x.rect(X,Y,w,h);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw||2;x.stroke()}}
  function hl(X1,X2,Y,col,th){box(Math.min(X1,X2),Y,Math.abs(X2-X1),th||2,col)}
  function dash(Y){x.fillStyle='#94a3b8';for(var i=L;i<R;i+=16)x.fillRect(i,Y,9,2)}
  function lb(k){return bi?T[k][0]+' | '+T[k][1]:T[k][0]}
  function logoAt(X,Y,s,round){if(!lg)return;try{x.save();rr(X,Y,s,s,round==null?s*.18:round,'#fff');x.clip();var sc=Math.min(s/lg.width,s/lg.height),iw=lg.width*sc,ih=lg.height*sc;x.drawImage(lg,X+(s-iw)/2,Y+(s-ih)/2,iw,ih);x.restore()}catch(e){x.restore()}}
  var title=c.title||'فاتورة',titleEn=TEN[title]||'Invoice';
  var contact=[P.whatsapp||P.phone,P.location].filter(Boolean).join('  ·  ');
  var extra=[c.email,c.web].filter(Boolean).join('  ·  ');
  var taxL=[c.vat?lb('vat')+': '+c.vat:'',c.cr?lb('cr')+': '+c.cr:''].filter(Boolean).join('     ');
  var dt=N.date instanceof Date&&!isNaN(N.date)?N.date:new Date();
  var dS=dt.toLocaleDateString('ar-OM',{year:'numeric',month:'long',day:'numeric'});
  var custLines=[];if(N.cust.name)custLines.push([N.cust.name,1]);if(c.show.phone&&N.cust.phone)custLines.push([N.cust.phone,0]);if(c.show.addr&&N.cust.addr)custLines.push([N.cust.addr,0]);
  if(!custLines.length)custLines.push([N.kind==='sale'?'عميل نقدي':'—',1]);

  /* ===== الرأس ===== */
  if(tpl==='classic'){
    var center=c.logoPos==='center'&&lg,bh=center?330:250;
    box(0,0,W,bh,acc);box(0,bh,W,8,GOLD);
    if(center){logoAt(W/2-60,26,120);tx(sName(),W/2,160,48,1,'#fff','center');if(contact)tx(contact,W/2,222,24,0,'rgba(255,255,255,.82)','center');if(c.addr||extra)tx([c.addr,extra].filter(Boolean).join('  ·  '),W/2,260,22,0,'rgba(255,255,255,.7)','center');
      tx(bi?title+' | '+titleEn:title,R,bh+36,40,1,acc);tx(N.id,L,bh+40,30,1,'#334155','left');y=bh+100}
    else{var nx=R;if(lg){logoAt(R-150,40,150,28);nx=R-180}
      tx(sName(),nx,52,52,1,'#fff');var yy=124;if(contact){tx(contact,nx,yy,25,0,'rgba(255,255,255,.85)');yy+=38}if(c.addr){tx(c.addr,nx,yy,22,0,'rgba(255,255,255,.75)');yy+=32}if(extra){tx(extra,nx,yy,22,0,'rgba(255,255,255,.75)')}
      tx(title,L,52,48,1,'#fff','left');if(bi)tx(titleEn,L,110,26,0,'rgba(255,255,255,.8)','left');tx(N.id,L,bi?148:118,30,0,'#e2e8f0','left');y=bh+44}
    if(taxL){tx(taxL,R,y,23,1,'#334155');y+=46}
  }else if(tpl==='elegant'){
    box(0,0,W,10,GOLD);y=50;if(lg){logoAt(W/2-65,y,130,65);y+=150}
    tx(sName(),W/2,y,50,1,acc,'center');y+=70;
    if(contact){tx(contact,W/2,y,24,0,'#64748b','center');y+=36}if(c.addr||extra){tx([c.addr,extra].filter(Boolean).join('  ·  '),W/2,y,22,0,'#64748b','center');y+=34}
    if(taxL){tx(taxL,W/2,y,22,1,'#475569','center');y+=34}
    y+=14;hl(W/2-140,W/2+140,y,GOLD,3);y+=28;
    tx(bi?title+'  ·  '+titleEn:title,W/2,y,40,1,'#8a6d12','center');y+=62;
    tx(lb('no')+': '+N.id+'      '+lb('date')+': '+dS,W/2,y,24,0,'#334155','center');y+=60;
  }else if(tpl==='formal'){
    y=56;var fx=R;if(lg){logoAt(R-140,y,140,16);fx=R-165}
    tx(sName(),fx,y+4,44,1,acc);var fy=y+66;[contact,c.addr,extra].filter(Boolean).forEach(function(s){tx(s,fx,fy,22,0,'#475569');fy+=34});
    var tbw=440,tbx=L,tby=y;box(tbx,tby,tbw,64,acc);tx(bi?title+' | '+titleEn:title,tbx+tbw/2,tby+14,32,1,'#fff','center');
    var rows=[[lb('no'),N.id],[lb('date'),dS]];if(c.show.method&&N.method)rows.push([lb('method'),N.method]);
    rows.forEach(function(r,i){var ry=tby+64+i*52;rr(tbx,ry,tbw,52,0,null,'#cbd5e1',2);tx(r[0],tbx+tbw-14,ry+13,21,1,'#475569');tx(r[1],tbx+14,ry+12,23,1,'#0f172a','left')});
    y=Math.max(fy,lg?y+150:0,tby+64+rows.length*52)+30;box(L,y,CW,4,acc);y+=30;
  }else{/* compact */
    y=34;if(lg){logoAt(W/2-50,y,100,22);y+=114}
    tx(sName(),W/2,y,40,1,acc,'center');y+=56;[contact,c.addr,extra,taxL].filter(Boolean).forEach(function(s){wrap(s,21,0,CW).forEach(function(l){tx(l,W/2,y,21,0,'#475569','center');y+=30})});
    y+=10;dash(y);y+=22;tx(bi?title+' · '+titleEn:title,W/2,y,32,1,'#0f172a','center');y+=52;
    tx(lb('no'),R,y,22,0,'#475569');tx(N.id,L,y,22,1,'#0f172a','left');y+=36;tx(lb('date'),R,y,22,0,'#475569');tx(dS,L,y,22,0,'#0f172a','left');y+=36;
    if(c.show.cashier&&N.cashier){tx(lb('cashier'),R,y,22,0,'#475569');tx(N.cashier,L,y,22,0,'#0f172a','left');y+=36}
    if(N.cust.name||N.cust.phone){tx(lb('cust'),R,y,22,0,'#475569');tx(custLines.map(function(l){return l[0]}).join(' · '),L,y,22,0,'#0f172a','left');y+=36}
    y+=4;dash(y);y+=20;
  }
  /* ===== العميل ===== */
  if(tpl==='classic'){
    tx(lb('cust'),R,y,23,0,'#64748b');tx(lb('date'),L+330,y,23,0,'#64748b','left');y+=38;
    custLines.forEach(function(l,i){tx(l[0],R,y,l[1]?33:26,!!l[1],l[1]?'#0f172a':'#475569');if(i===0){tx(dS,L+330,y,28,0,'#0f172a','left')}y+=l[1]?48:38});
    if(custLines.length<2)y+=8;
    var meta=[];if(c.show.method&&N.method)meta.push(lb('method')+': '+N.method);if(c.show.cashier&&N.cashier)meta.push(lb('cashier')+': '+N.cashier);
    if(meta.length){tx(meta.join('     '),R,y,22,0,'#64748b');y+=40}y+=18;
  }else if(tpl==='elegant'){
    var ch=40+custLines.length*42;rr(L,y,CW,ch,18,'#fffdf5',GOLD,2);tx(lb('cust'),R-24,y+20,22,1,'#8a6d12');var cy=y+20;
    custLines.forEach(function(l){tx(l[0],R-200,cy,l[1]?28:24,!!l[1],l[1]?'#0f172a':'#475569');cy+=42});
    var meta2=[];if(c.show.method&&N.method)meta2.push(N.method);if(c.show.cashier&&N.cashier)meta2.push(N.cashier);meta2.forEach(function(s,i){tx(s,L+24,y+20+i*42,23,0,'#475569','left')});
    y+=ch+36;
  }else if(tpl==='formal'){
    var hasSeller=!!(c.vat||c.cr),bw=hasSeller?(CW-24)/2:CW,bh2=58+Math.max(custLines.length,(c.vat?1:0)+(c.cr?1:0))*40;
    rr(R-bw,y,bw,bh2,10,'#f8fafc','#cbd5e1',2);box(R-bw,y,bw,44,'#e2e8f0');tx(lb('cust'),R-16,y+9,22,1,'#334155');
    custLines.forEach(function(l,i){tx(l[0],R-16,y+56+i*40,l[1]?26:22,!!l[1],l[1]?'#0f172a':'#475569')});
    if(hasSeller){rr(L,y,bw,bh2,10,'#f8fafc','#cbd5e1',2);box(L,y,bw,44,'#e2e8f0');tx(lb('seller'),L+bw-16,y+9,22,1,'#334155');var sy=y+56;if(c.vat){tx(lb('vat')+': '+c.vat,L+bw-16,sy,22,0,'#0f172a');sy+=40}if(c.cr){tx(lb('cr')+': '+c.cr,L+bw-16,sy,22,0,'#0f172a')}}
    y+=bh2+30;
  }
  brk.push(y);
  /* ===== الجدول ===== */
  var showT=c.show.thumb&&th&&Object.keys(th).length,cols;
  if(tpl==='compact'){
    N.items.forEach(function(i){var ls=wrap(i.name,25,1,CW,3);ls.forEach(function(l){tx(l,R,y,25,1);y+=34});
      if(c.show.sku&&i.sku){tx(i.sku,R,y,19,0,'#64748b');y+=28}
      x.direction='ltr';tx(i.qty+' × '+f3(i.price),R,y,22,0,'#475569','right');x.direction='rtl';tx(f3(i.net),L,y,23,1,'#0f172a','left');y+=34;
      if(i.ret>0){tx(lb('ret')+': '+i.ret,R,y,20,0,'#b91c1c');y+=30}y+=8;brk.push(y)});
    dash(y);y+=22;
  }else{
    var hasNo=tpl==='formal',wNo=hasNo?70:0,wQ=140,wP=200,wT=220,wTh=showT?96:0,wN=CW-wNo-wQ-wP-wT;
    var xNo=R,xN=R-wNo,xQ=L+wT+wP,xP=L+wT,xT=L; /* حواف الأعمدة من اليمين */
    var hh=bi?78:62;
    if(tpl==='formal')box(L,y,CW,hh,acc);else if(tpl==='classic')rr(L,y,CW,hh,12,'#f1f5f9');
    var hc=tpl==='formal'?'#fff':(tpl==='elegant'?'#8a6d12':'#334155');
    function hcell(k,cx,al){var X=al==='center'?cx:(al==='left'?cx+14:cx-14);tx(T[k][0],X,y+(bi?10:17),23,1,hc,al);if(bi)tx(T[k][1],X,y+44,17,0,hc,al)}
    if(hasNo)tx('#',xNo-wNo/2,y+17,23,1,hc,'center');
    hcell('item',xN,'right');hcell('qty',xQ+wQ/2,'center');hcell('price',xP+wP/2,'center');hcell('amt',xT,'left');
    y+=hh;if(tpl==='elegant'){hl(L,R,y,GOLD,3);y+=3}
    N.items.forEach(function(i,ix){
      var nmW=wN-28-(showT?wTh:0),ls=wrap(i.name,27,0,nmW,3),h=Math.max(76,ls.length*38+30+(c.show.sku&&i.sku?30:0)+(i.ret>0?30:0),showT?104:0);
      if(y+h>Hmax-1600)return;
      if(tpl==='formal'){if(ix%2)box(L,y,CW,h,'#f8fafc');x.strokeStyle='#cbd5e1';x.lineWidth=2;[R,xN,xQ+wQ,xP+wP,xT+wT,L].forEach(function(X){x.beginPath();x.moveTo(X,y);x.lineTo(X,y+h);x.stroke()});hl(L,R,y+h-2,'#cbd5e1',2);tx(ix+1,xNo-wNo/2,y+h/2-14,24,0,'#475569','center')}
      var ny=y+16,nx2=xN-14;
      if(showT){var ti=th[i.name];rr(nx2-84,y+10,84,84,12,'#f1f5f9');if(ti&&ti.width){try{x.save();rr(nx2-84,y+10,84,84,12);x.clip();var s2=Math.max(84/ti.width,84/ti.height);x.drawImage(ti,nx2-84+(84-ti.width*s2)/2,y+10+(84-ti.height*s2)/2,ti.width*s2,ti.height*s2);x.restore()}catch(e){x.restore()}}nx2-=wTh}
      ls.forEach(function(l){tx(l,nx2,ny,27,0,'#0f172a');ny+=38});
      if(c.show.sku&&i.sku){tx(i.sku,nx2,ny,19,0,'#64748b');ny+=30}
      if(i.ret>0){tx(lb('ret')+': '+i.ret,nx2,ny,20,1,'#b91c1c')}
      var my=y+h/2-15;tx(i.qty,xQ+wQ/2,my,27,0,'#0f172a','center');tx(i.price?f3(i.price):'—',xP+wP/2,my,27,0,'#0f172a','center');tx(i.price?f3(i.net):'—',xT+14,my,27,1,'#0f172a','left');
      y+=h;if(tpl!=='formal')hl(L,R,y-2,tpl==='elegant'?'#efe6c8':'#e2e8f0',2);brk.push(y)});
    y+=30;
  }
  /* ===== الإجماليات ===== */
  var tl=[],retV=0;N.ops.forEach(function(o){retV+=num(o.amt)});
  if(N.discount>0.0005){tl.push([lb('sub'),f3(N.subtotal)+' '+C]);tl.push([lb('disc'),'− '+f3(N.discount)+' '+C,'#b91c1c'])}
  if(pv.vat&&N.total>0){var v=N.total*pv.rate/(100+pv.rate);tl.push([lb('vatl')+' '+pv.rate+'%',f3(v)+' '+C])}
  var tot=N.total;
  var payRows=[];N.pays.forEach(function(p){payRows.push([p.l+' · '+p.at,f3(p.amt)+' '+C,'#15803d'])});N.ops.forEach(function(o){payRows.push([o.l+' · '+o.at,'− '+f3(o.amt)+' '+C,'#b91c1c'])});
  var y0=y,tw2=tpl==='compact'?CW:560,tx0=L,rx=L+tw2;
  function trow(l,v,col,big){if(tpl==='compact'){tx(l,R,y,big?28:23,!!big,'#334155');tx(v,L,y,big?30:24,!!big,col||'#0f172a','left');y+=big?46:38;return}tx(l,rx-16,y,big?28:23,!!big,'#475569');tx(v,tx0+16,y,big?30:24,!!big,col||'#0f172a','left');y+=big?50:42}
  tl.forEach(function(r){trow(r[0],r[1],r[2])});
  if(c.show.paid&&payRows.length&&tpl!=='formal')payRows.forEach(function(r){F(19,0);trow(r[0],r[1],r[2])});
  /* الإجمالي في شريط */
  var tbh=tpl==='compact'?70:78;
  if(tpl==='elegant'){rr(tx0,y,tw2,tbh,14,null,GOLD,3);tx(lb('total'),rx-20,y+20,28,1,'#8a6d12');tx(f3(tot)+' '+C,tx0+20,y+16,36,1,acc,'left')}
  else{rr(tx0,y,tw2,tbh,tpl==='formal'?0:14,acc);tx(lb('total'),rx-20,y+(tbh-30)/2,28,1,'#fff');tx(f3(tot)+' '+C,tx0+20,y+(tbh-38)/2,36,1,'#fff','left')}
  y+=tbh+14;
  if(c.show.paid){var rem=N.remaining;
    if(N.paid>0.0005&&rem>0.0005)trow(lb('paid'),f3(N.paid)+' '+C,'#15803d');
    if(rem>0.0005){rr(tx0,y-4,tw2,58,12,'#fef3c7');tx(lb('rem'),rx-16,y+9,25,1,'#92400e');tx(f3(rem)+' '+C,tx0+16,y+7,28,1,'#92400e','left');y+=64}
    else if(N.status!=='void'&&tot>0){rr(tx0,y-4,tw2,58,12,'#dcfce7');tx('✓ '+lb('full'),rx-16,y+9,25,1,'#166534');y+=64}}
  var yT=y;
  /* العمود الأيمن بجانب الإجماليات: الطريقة والملاحظة و QR */
  var qrData='';if(c.qr==='wa'){var wp=waPhone(P.whatsapp||P.phone);if(wp)qrData='https://wa.me/'+wp}else if(c.qr==='track'){qrData=N.track||'';if(!qrData){var wp2=waPhone(P.whatsapp||P.phone);if(wp2)qrData='https://wa.me/'+wp2}}else if(c.qr==='info'){qrData=[sName(),c.vat,N.id,f3(tot),dt.toISOString()].join('|')}
  if(tpl==='compact'){
    if(c.show.method&&N.method){tx(lb('method')+': '+N.method,R,y,22,0,'#475569');y+=36}
    if(c.show.note&&N.note){wrap(lb('note')+': '+N.note,21,0,CW).forEach(function(l){tx(l,R,y,21,0,'#475569');y+=30})}
    if(qrData){y+=8;qr(x,qrData,W/2-90,y,180);y+=196}
  }else{
    var ry2=y0,rw=CW-tw2-40,rX=R;
    if(tpl==='formal'&&c.show.paid&&payRows.length){payRows.forEach(function(r){tx(r[0],rX,ry2,20,0,'#475569');tx(r[1],rX-rw,ry2,20,1,r[2],'left');ry2+=34});ry2+=10}
    if(c.show.method&&N.method&&tpl!=='formal'&&tpl!=='classic'&&tpl!=='elegant'){tx(lb('method')+': '+N.method,rX,ry2,23,0,'#475569');ry2+=40}
    if(c.show.note&&N.note){tx(lb('note'),rX,ry2,22,1,'#334155');ry2+=36;wrap(N.note,22,0,rw,4).forEach(function(l){tx(l,rX,ry2,22,0,'#475569');ry2+=32});ry2+=12}
    if(qrData){qr(x,qrData,rX-170,ry2,170);ry2+=186}
    y=Math.max(yT,ry2)+20;
  }
  brk.push(y);
  /* ===== التحويل البنكي والشروط ===== */
  if((c.bank||c.iban)&&N.remaining>0.0005){var bl=[c.bank,c.iban?lb('iban')+': '+c.iban:''].filter(Boolean),bh3=56+bl.length*36;
    rr(L,y,CW,bh3,14,'#eff6ff','#bfdbfe',2);tx('🏦 '+lb('bank'),R-18,y+14,23,1,'#1e3a8a');bl.forEach(function(s,i){x.direction='rtl';tx(s,R-18,y+52+i*36,22,0,'#0f172a')});y+=bh3+20;brk.push(y)}
  if(c.terms){var tls=wrap(c.terms,20,0,CW-36,12);var th2=50+tls.length*30;rr(L,y,CW,th2,14,'#f8fafc','#e2e8f0',2);tx(lb('terms'),R-18,y+12,21,1,'#334155');tls.forEach(function(l,i){tx(l,R-18,y+44+i*30,20,0,'#475569')});y+=th2+20;brk.push(y)}
  /* ===== الختم والتوقيع (رسمي) ===== */
  if(tpl==='formal'){y+=10;var sw=300;
    tx(lb('stamp'),R-sw/2,y,22,1,'#475569','center');tx(lb('sign'),L+sw/2,y,22,1,'#475569','center');
    rr(R-sw,y+36,sw,170,12,null,'#cbd5e1',2);hl(L,L+sw,y+180,'#94a3b8',2);
    if(stampImg&&stampImg.width){var ss=Math.min(150/stampImg.width,150/stampImg.height);x.globalAlpha=.9;x.drawImage(stampImg,R-sw/2-stampImg.width*ss/2,y+46,stampImg.width*ss,stampImg.height*ss);x.globalAlpha=1}
    y+=230;brk.push(y)}
  /* ===== التذييل ===== */
  if(c.footer){y+=10;if(tpl!=='compact')hl(W/2-120,W/2+120,y,GOLD,2);y+=24;wrap(c.footer,28,1,CW).forEach(function(l){tx(l,W/2,y,28,1,tpl==='elegant'?'#8a6d12':acc,'center');y+=40})}
  y+=40;if(tpl==='formal')y=Math.max(y,Math.round(W*1.4142));
  if(tpl==='elegant'){box(0,y-10,W,10,GOLD)}
  /* ختم «ملغاة» */
  if(N.status==='void'){x.save();x.translate(W/2,Math.min(y/2,700));x.rotate(-0.3);x.globalAlpha=.22;F(150,1);x.fillStyle='#b91c1c';x.textAlign='center';x.fillText(lb('voidS'),0,-70);x.globalAlpha=1;x.restore()}
  var out=document.createElement('canvas');out.width=W;out.height=Math.min(y,Hmax);var o2=out.getContext('2d');o2.fillStyle='#fff';o2.fillRect(0,0,W,out.height);o2.drawImage(cv,0,0);
  brk.push(out.height);return {canvas:out,brk:brk}
}
function qr(x,data,X,Y,S){try{var q=window.EMDqr418(0,'M');q.addData(data);q.make();var n=q.getModuleCount(),m=S/n;x.fillStyle='#fff';x.fillRect(X-8,Y-8,S+16,S+16);x.fillStyle='#0f172a';for(var r=0;r<n;r++)for(var k=0;k<n;k++)if(q.isDark(r,k))x.fillRect(Math.floor(X+k*m),Math.floor(Y+r*m),Math.ceil(m),Math.ceil(m))}catch(e){}}

/* ---------- الصفحات وPDF ---------- */
var PAPER={a4:[595.28,841.89],a5:[419.53,595.28]};
function pages(res,paper){var cv=res.canvas,W=cv.width,H=cv.height;
  if(paper==='80')return [cv];
  var ph=Math.round(W*PAPER[paper][1]/PAPER[paper][0]),out=[],st=0,top=0;
  while(st<H-4){var avail=ph-top,end=st+avail;
    if(end<H){var best=0;res.brk.forEach(function(b){if(b>st+avail*.4&&b<=end&&b>best)best=b});if(best)end=best}else end=H;
    var pc=document.createElement('canvas');pc.width=W;pc.height=ph;var g=pc.getContext('2d');g.fillStyle='#fff';g.fillRect(0,0,W,ph);g.drawImage(cv,0,st,W,end-st,0,top,W,end-st);
    out.push(pc);st=end;top=60}
  return out}
function b64bytes(d){var s=atob(d.split(',')[1]),a=new Uint8Array(s.length);for(var i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return a}
function makePdf(pcs,paper){
  var en=new TextEncoder(),ch=[],off=0,offs=[];
  function put(v){var b=typeof v==='string'?en.encode(v):v;ch.push(b);off+=b.length}
  var n=pcs.length,objN=2+n*3;
  put('%PDF-1.4\n%âãÏÓ\n');
  function ob(i,body){offs[i]=off;put(i+' 0 obj\n'+body+'\nendobj\n')}
  ob(1,'<< /Type /Catalog /Pages 2 0 R >>');
  var kids=[];for(var i=0;i<n;i++)kids.push((3+i*3)+' 0 R');
  ob(2,'<< /Type /Pages /Kids ['+kids.join(' ')+'] /Count '+n+' >>');
  pcs.forEach(function(pc,i){
    var pw,ph;if(paper==='80'){pw=226.77;ph=+(pc.height*pw/pc.width).toFixed(2)}else{pw=PAPER[paper][0];ph=PAPER[paper][1]}
    var pn=3+i*3,cn=pn+1,im=pn+2,cs='q '+pw+' 0 0 '+ph+' 0 0 cm /Im0 Do Q';
    ob(pn,'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 '+pw+' '+ph+'] /Resources << /XObject << /Im0 '+im+' 0 R >> >> /Contents '+cn+' 0 R >>');
    ob(cn,'<< /Length '+cs.length+' >>\nstream\n'+cs+'\nendstream');
    var jb=b64bytes(pc.toDataURL('image/jpeg',.9));offs[im]=off;
    put(im+' 0 obj\n<< /Type /XObject /Subtype /Image /Width '+pc.width+' /Height '+pc.height+' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length '+jb.length+' >>\nstream\n');put(jb);put('\nendstream\nendobj\n')});
  var xo=off,s='xref\n0 '+(objN+1)+'\n0000000000 65535 f \n';for(var k=1;k<=objN;k++)s+=('0000000000'+offs[k]).slice(-10)+' 00000 n \n';
  put(s+'trailer\n<< /Size '+(objN+1)+' /Root 1 0 R >>\nstartxref\n'+xo+'\n%%EOF');
  return new Blob(ch,{type:'application/pdf'})}
function printPages(pcs,paper){var box=$('e443Print');if(!box){box=document.createElement('div');box.id='e443Print';document.body.appendChild(box)}
  box.innerHTML=pcs.map(function(p){return '<img alt="" src="'+p.toDataURL('image/png')+'">'}).join('');
  var st=$('e443PrintCss');if(!st){st=document.createElement('style');st.id='e443PrintCss';document.head.appendChild(st)}
  var sz=paper==='80'?'80mm '+(Math.ceil(pcs[0].height/pcs[0].width*72)+4)+'mm':(paper==='a5'?'A5':'A4');
  st.textContent='@media print{@page{size:'+sz+';margin:0}html,body{margin:0!important;padding:0!important;background:#fff!important}'+(paper==='80'?'#e443Print{padding:0 4mm}#e443Print img{width:72mm!important}':'')+'}';
  document.body.classList.add('e443-printing');setTimeout(function(){try{window.print()}catch(e){toast('تعذّرت الطباعة من هذا المتصفح')}setTimeout(function(){document.body.classList.remove('e443-printing')},600)},120)}
function fname(N,ext){return 'فاتورة-'+String(N.id).replace(/[^\w؀-ۿ-]/g,'')+'.'+ext}
function dl(blob,name){var u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=name;document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(u);a.remove()},2000)}
function shareFile(file,text){try{if(navigator.canShare&&navigator.canShare({files:[file]})){return navigator.share({files:[file],title:file.name,text:text}).then(function(){return true},function(){return true})}}catch(e){}return Promise.resolve(false)}

/* ---------- النصوص ---------- */
function fill(t,N){var C=cur();return String(t||'').replace(/\{العميل\}/g,N.cust.name||'عميلنا العزيز').replace(/\{رقم\}/g,N.id).replace(/\{الإجمالي\}/g,f3(N.total)+' '+C).replace(/\{المتبقي\}/g,f3(N.remaining)+' '+C).replace(/\{المتجر\}/g,sName())}
function summary(N){var C=cur(),c=cfg(),Ls=['🧾 '+(c.title||'فاتورة')+' '+N.id+' — '+sName(),(N.date instanceof Date?N.date:new Date()).toLocaleDateString('ar-OM'),''];
  N.items.forEach(function(i){Ls.push('• '+i.name+' × '+i.qty+' = '+f3(i.net)+' '+C)});
  if(N.discount>0.0005)Ls.push('الخصم: '+f3(N.discount)+' '+C);
  Ls.push('','الإجمالي: '+f3(N.total)+' '+C);if(N.paid>0.0005)Ls.push('المدفوع: '+f3(N.paid)+' '+C);if(N.remaining>0.0005)Ls.push('المتبقي: '+f3(N.remaining)+' '+C);
  if(N.remaining>0.0005&&(c.bank||c.iban))Ls.push('','🏦 '+[c.bank,c.iban].filter(Boolean).join(' — '));
  if(c.footer)Ls.push('',c.footer);return Ls.join('\n')}
function copy(t){function fb(){var a=document.createElement('textarea');a.value=t;a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(e){}a.remove()}
  try{if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).catch(fb);else fb()}catch(e){fb()}toast('📋 نُسخ ملخص الفاتورة')}

/* ---------- نافذة الإرسال ---------- */
var cur443=null,last=null;
function sheet(){var ov=$('e443S');if(ov)return ov;ov=document.createElement('div');ov.id='e443S';ov.className='e443-ov';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');
  ov.innerHTML='<div class="e443-box" style="position:relative"><div class="e443-hd"><b id="e443ST">🧾 الفاتورة</b><button type="button" class="e443-x" data-k="x" aria-label="إغلاق">✕</button></div>'
   +'<div class="e443-pv"><img id="e443SImg" alt="معاينة الفاتورة"></div>'
   +'<div class="e443-tp" id="e443STp"></div>'
   +'<div class="e443-act"><button type="button" class="e443-b p" data-k="img" id="e443SImgBtn">📤 إرسال صورة الفاتورة (واتساب)</button>'
   +'<div class="e443-g"><button type="button" class="e443-b" data-k="pdf">📄 ملف PDF</button><button type="button" class="e443-b" data-k="print">🖨️ طباعة</button><button type="button" class="e443-b" data-k="copy">📋 نسخ ملخص نصي</button><button type="button" class="e443-b" data-k="wa">💬 رسالة واتساب للعميل</button></div>'
   +'<button type="button" class="e443-b l" data-k="des">🎨 تخصيص شكل الفاتورة</button></div><div class="e443-busy" id="e443SBusy">جارٍ التجهيز…</div></div>';
  document.body.appendChild(ov);
  ov.addEventListener('click',function(e){if(e.target===ov){hideS();return}var b=e.target.closest('[data-k],[data-t]');if(!b)return;
    if(b.hasAttribute('data-t')){setCfg({tpl:b.getAttribute('data-t')});refreshS();return}
    act(b.getAttribute('data-k'))});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&ov.classList.contains('show'))hideS()});
  return ov}
function hideS(){var ov=$('e443S');if(ov)ov.classList.remove('show')}
function busy(on){var b=$('e443SBusy');if(b)b.style.display=on?'flex':'none'}
function refreshS(){var N=cur443;if(!N)return;var c=cfg();
  $('e443STp').innerHTML=TPLS.map(function(t){return '<button type="button" class="e443-chip'+(c.tpl===t[0]?' on':'')+'" data-t="'+t[0]+'">'+t[1]+'</button>'}).join('');
  busy(true);return render(N).then(function(r){last=r;$('e443SImg').src=r.canvas.toDataURL('image/jpeg',.88);busy(false)}).catch(function(e){busy(false);console.warn('V443',e);toast('تعذّر إنشاء الفاتورة')})}
function open(N){cur443=N;var ov=sheet();$('e443ST').textContent='🧾 '+(cfg().title||'فاتورة')+' '+N.id;
  var can=false;try{can=!!(navigator.canShare&&navigator.canShare({files:[new File([new Blob(['x'])],'t.png',{type:'image/png'})]}))}catch(e){}
  $('e443SImgBtn').textContent=can?'📤 إرسال صورة الفاتورة (واتساب)':'📤 حفظ الصورة وفتح محادثة العميل';
  ov.classList.add('show');return refreshS()}
function act(k){var N=cur443,c=cfg();if(!N)return;
  if(k==='x'){hideS();return}
  if(k==='des'){designer(N);return}
  if(k==='copy'){copy(summary(N));return}
  if(k==='wa'){window.open('https://wa.me/'+waPhone(N.cust.phone)+'?text='+enc(fill(c.wa,N)+'\n\n'+summary(N)),'_blank');return}
  var go=last?Promise.resolve(last):render(N);busy(true);
  go.then(function(r){
    if(k==='img'){return new Promise(function(res){r.canvas.toBlob(res,'image/png')}).then(function(b){var f=new File([b],fname(N,'png'),{type:'image/png'});return shareFile(f,fill(c.wa,N)).then(function(ok){if(!ok){dl(b,f.name);window.open('https://wa.me/'+waPhone(N.cust.phone)+'?text='+enc(fill(c.wa,N)+'\n(أرفقتُ لك صورة الفاتورة)'),'_blank')}})})}
    if(k==='pdf'){var paper=c.paper==='80'?'80':c.paper,pcs=pages(paper==='80'?r:r,paper==='80'?'80':paper);if(paper==='80'&&c.tpl!=='compact'){return render(N,{tpl:'compact'}).then(function(r2){return pdfOut(N,[r2.canvas],'80',c)})}return pdfOut(N,pcs,paper,c)}
    if(k==='print'){if(c.paper==='80'&&c.tpl!=='compact')return render(N,{tpl:'compact'}).then(function(r2){printPages([r2.canvas],'80')});printPages(pages(r,c.paper==='80'?'80':c.paper),c.paper==='80'?'80':c.paper)}
  }).then(function(){busy(false)},function(e){busy(false);console.warn('V443',e);toast('تعذّرت العملية')})}
function pdfOut(N,pcs,paper,c){var b=makePdf(pcs,paper),f=new File([b],fname(N,'pdf'),{type:'application/pdf'});return shareFile(f,fill(c.wa,N)).then(function(ok){if(!ok){dl(b,f.name);toast('⬇️ حُفظ ملف PDF')}})}
function print(N){var c=cfg();var over=c.paper==='80'&&c.tpl!=='compact'?{tpl:'compact'}:null;return render(N,over).then(function(r){printPages(c.paper==='80'?[r.canvas]:pages(r,c.paper),c.paper)})}

/* ---------- نافذة التصميم ---------- */
var dN=null,dT=null;
function designer(N){dN=N&&!N.sample?N:sample();var ov=$('e443D');
  if(!ov){ov=document.createElement('div');ov.id='e443D';ov.className='e443-ov';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');document.body.appendChild(ov);
    ov.addEventListener('click',dClick);ov.addEventListener('input',dInput);ov.addEventListener('change',dInput)}
  paintD();ov.classList.add('show')}
function paintD(){var c=cfg(),ov=$('e443D'),moreOn=ov.getAttribute('data-more')==='1';
  function inp(f,ph){return '<input type="text" data-f="'+f+'" value="'+esc(c[f])+'" placeholder="'+esc(ph||'')+'">'}
  function ck(k,t){return '<label><input type="checkbox" data-s="'+k+'"'+(c.show[k]?' checked':'')+'>'+t+'</label>'}
  var custom=TITLES.indexOf(c.title)<0;
  ov.innerHTML='<div class="e443-box e443-dbox"><div class="e443-hd"><b>🧾 تصميم الفاتورة</b><button type="button" class="e443-x" data-d="x" aria-label="إغلاق">✕</button></div>'
  +'<div class="e443-dwrap"><div class="e443-pv"><img id="e443DImg" alt="معاينة الفاتورة"></div><div class="e443-ctl">'
  +'<div class="e443-sec"><h4>القالب</h4><div class="e443-tpls">'+TPLS.map(function(t){return '<button type="button" class="e443-tpl'+(c.tpl===t[0]?' on':'')+'" data-tpl="'+t[0]+'"><b>'+t[1]+'</b><span>'+t[2]+'</span></button>'}).join('')+'</div></div>'
  +'<div class="e443-sec"><h4>اللون</h4><div class="e443-sw">'+COLORS.map(function(k){return '<button type="button" class="e443-c'+(k[0]?'':' app')+(c.color===k[0]?' on':'')+'" data-col="'+k[0]+'" title="'+k[1]+'" aria-label="'+k[1]+'" style="'+(k[0]?'background:'+k[0]:'')+'"></button>'}).join('')+'<input type="color" data-f="color" value="'+(c.color||accent(c))+'" aria-label="لون آخر"></div></div>'
  +'<div class="e443-sec"><h4>الشعار</h4><div class="e443-seg"><button type="button" class="e443-chip'+(c.logoPos!=='center'?' on':'')+'" data-lp="side">بجانب الاسم</button><button type="button" class="e443-chip'+(c.logoPos==='center'?' on':'')+'" data-lp="center">في الوسط</button></div><div class="e443-hint">يُؤخذ الشعار من «المظهر والهوية»، والاسم من «بيانات النشاط». وضع الشعار يخص القالب الكلاسيكي، أما بقية القوالب فلها وضع ثابت.</div></div>'
  +'<div class="e443-sec"><h4>عنوان الفاتورة</h4><select data-title>'+TITLES.map(function(t){return '<option'+(c.title===t?' selected':'')+'>'+t+'</option>'}).join('')+'<option value="__c"'+(custom?' selected':'')+'>نص آخر…</option></select>'+(custom?'<input type="text" data-f="title" value="'+esc(c.title)+'" style="margin-top:6px">':'')+'</div>'
  +'<button type="button" class="e443-b" data-d="more" style="width:100%">'+(moreOn?'▲ إخفاء الخيارات الإضافية':'⚙️ إظهار خيارات أكثر')+'</button>'
  +'<div class="e443-more'+(moreOn?' show':'')+'" style="margin-top:14px">'
   +'<div class="e443-sec"><h4>بيانات المنشأة</h4><label>العنوان</label>'+inp('addr','مثال: مسقط، الخوير، شارع 18 نوفمبر')+'<label>الرقم الضريبي</label>'+inp('vat','OM1100XXXXXX')+'<label>السجل التجاري</label>'+inp('cr','')+'<label>البريد الإلكتروني</label>'+inp('email','')+'<label>الموقع الإلكتروني</label>'+inp('web','')+'</div>'
   +'<div class="e443-sec"><h4>ما يظهر في الفاتورة</h4><div class="e443-ck">'+ck('phone','هاتف العميل')+ck('addr','عنوان العميل')+ck('method','طريقة الدفع')+ck('paid','المدفوع والمتبقي')+ck('sku','رمز المنتج')+ck('thumb','صورة المنتج')+ck('note','الملاحظات')+ck('cashier','اسم الكاشير')+'</div></div>'
   +'<div class="e443-sec"><h4>التحويل البنكي</h4><label>اسم البنك وصاحب الحساب</label>'+inp('bank','بنك مسقط — مؤسسة …')+'<label>رقم الحساب / IBAN</label>'+inp('iban','')+'<div class="e443-hint">تظهر هذه البيانات في الفاتورة غير المدفوعة بالكامل فقط.</div></div>'
   +'<div class="e443-sec"><h4>الشروط والتذييل</h4><label>الشروط والأحكام</label><textarea data-f="terms" placeholder="مثال: يُقبل الاستبدال خلال 7 أيام مع الفاتورة.">'+esc(c.terms)+'</textarea><label>نص التذييل</label>'+inp('footer','شكرًا لتعاملكم معنا')+'</div>'
   +'<div class="e443-sec"><h4>رمز QR</h4><select data-f="qr"><option value="none"'+(c.qr==='none'?' selected':'')+'>بدون</option><option value="wa"'+(c.qr==='wa'?' selected':'')+'>رقم واتساب المتجر</option><option value="track"'+(c.qr==='track'?' selected':'')+'>رابط تتبع الطلب (إن وُجد)</option><option value="info"'+(c.qr==='info'?' selected':'')+'>بيانات الفاتورة</option></select></div>'
   +'<div class="e443-sec"><h4>الختم (القالب الرسمي)</h4><div class="e443-stamp">'+(c.stamp?'<img src="'+c.stamp+'" alt="الختم">':'')+'<label class="e443-b" style="margin:0;display:inline-flex;align-items:center;cursor:pointer">📎 '+(c.stamp?'تغيير الختم':'رفع صورة الختم')+'<input type="file" accept="image/*" data-stamp style="display:none"></label>'+(c.stamp?'<button type="button" class="e443-b" data-d="nostamp">حذف</button>':'')+'</div></div>'
   +'<div class="e443-sec"><h4>اللغة ومقاس الطباعة</h4><label>لغة الفاتورة</label><select data-f="lang"><option value="ar"'+(c.lang!=='bi'?' selected':'')+'>العربية</option><option value="bi"'+(c.lang==='bi'?' selected':'')+'>العربية والإنجليزية</option></select><label>مقاس الورق للطباعة وPDF</label><select data-f="paper"><option value="a4"'+(c.paper==='a4'?' selected':'')+'>A4</option><option value="a5"'+(c.paper==='a5'?' selected':'')+'>A5</option><option value="80"'+(c.paper==='80'?' selected':'')+'>طابعة إيصالات 80 مم</option></select></div>'
   +'<div class="e443-sec"><h4>رسالة واتساب</h4><textarea data-f="wa">'+esc(c.wa)+'</textarea><div class="e443-hint">تُستبدل تلقائيًا: {العميل} {رقم} {الإجمالي} {المتبقي} {المتجر}</div></div>'
   +'<button type="button" class="e443-b" data-d="reset" style="width:100%">↺ استعادة الشكل الافتراضي</button>'
  +'</div></div></div></div>';
  prevD()}
function prevD(){clearTimeout(dT);dT=setTimeout(function(){render(dN).then(function(r){var i=$('e443DImg');if(i)i.src=r.canvas.toDataURL('image/jpeg',.85)}).catch(function(e){console.warn('V443',e)})},180)}
function dClick(e){var ov=$('e443D');if(e.target===ov){closeD();return}var b=e.target.closest('[data-d],[data-tpl],[data-col],[data-lp]');if(!b)return;
  if(b.hasAttribute('data-tpl')){setCfg({tpl:b.getAttribute('data-tpl')});paintD();return}
  if(b.hasAttribute('data-col')){setCfg({color:b.getAttribute('data-col')});paintD();return}
  if(b.hasAttribute('data-lp')){setCfg({logoPos:b.getAttribute('data-lp')});paintD();return}
  var k=b.getAttribute('data-d');
  if(k==='x'){closeD();return}
  if(k==='more'){ov.setAttribute('data-more',ov.getAttribute('data-more')==='1'?'0':'1');var sc=ov.querySelector('.e443-ctl'),st=sc?sc.scrollTop:0;paintD();sc=ov.querySelector('.e443-ctl');if(sc)sc.scrollTop=st;return}
  if(k==='nostamp'){setCfg({stamp:''});paintD();return}
  if(k==='reset'){if(window.confirm('استعادة الشكل الافتراضي للفاتورة؟ ستبقى بيانات المنشأة والبنك كما هي.')){var c=cfg();setCfg({tpl:DEF.tpl,color:'',logoPos:'side',title:DEF.title,footer:DEF.footer,qr:'none',lang:'ar',paper:'a4',wa:DEF.wa,show:DEF.show});paintD();toast('↺ عاد الشكل الافتراضي')}return}}
function dInput(e){var t=e.target;
  if(t.hasAttribute('data-stamp')){if(e.type!=='change')return;var f=t.files&&t.files[0];if(!f)return;var rd=new FileReader();rd.onload=function(){img(rd.result,4000).then(function(im){if(!im){toast('تعذّرت قراءة الصورة');return}var s=Math.min(1,320/Math.max(im.width,im.height)),cv=document.createElement('canvas');cv.width=Math.round(im.width*s);cv.height=Math.round(im.height*s);cv.getContext('2d').drawImage(im,0,0,cv.width,cv.height);setCfg({stamp:cv.toDataURL('image/png')});paintD()})};rd.readAsDataURL(f);return}
  if(t.hasAttribute('data-title')){if(t.value==='__c'){setCfg({title:''});paintD();var i=$('e443D').querySelector('[data-f="title"]');if(i)i.focus()}else{setCfg({title:t.value});paintD()}return}
  if(t.hasAttribute('data-s')){var o={};o[t.getAttribute('data-s')]=t.checked;setCfg({show:o});prevD();return}
  var f2=t.getAttribute('data-f');if(!f2)return;var p={};p[f2]=t.value;setCfg(p);
  if(f2==='color'&&e.type==='change'){paintD();return}prevD()}
function closeD(){var ov=$('e443D');if(ov)ov.classList.remove('show');if($('e443S')&&$('e443S').classList.contains('show'))refreshS()}

/* ---------- الإيصال الحراري ---------- */
function rcptHead(a,pc){var c=cfg();if(c.addr)a.push({t:'c',text:c.addr,size:21});if(c.cr)a.push({t:'c',text:'السجل التجاري: '+c.cr,size:21});if(c.vat&&!(pc&&pc.vat&&pc.vatNo))a.push({t:'c',text:'الرقم الضريبي: '+c.vat,size:21,b:true})}
function rcptFoot(a){var c=cfg();if(c.terms)a.push({t:'c',text:c.terms,size:19})}

/* ---------- بطاقة الإعدادات ---------- */
function inject(){var g=$('emd327SystemGrid');if(!g||$('e443Item'))return;var b=document.createElement('button');b.type='button';b.className='emd327-item';b.id='e443Item';b.setAttribute('data-emd108-skip','1');
  b.innerHTML='<b>🧾 تصميم الفاتورة</b><span>القالب واللون والحقول وطريقة الإرسال.</span>';b.addEventListener('click',function(){designer(null)});g.appendChild(b)}


window.EMDInvV443={version:'V443',open:open,print:print,designer:designer,render:render,config:cfg,set:setCfg,rcptHead:rcptHead,rcptFoot:rcptFoot,_pdf:makePdf,_pages:pages,sample:sample,summary:summary};
})();

/* ---- EMD-V444-js ---- */

(function(){
'use strict';
if(window.EMDPrnV444)return;
var K='emd444_prn';
var SHIP=[[100,150,'100×150 مم'],[100,100,'100×100 مم'],[80,50,'80×50 مم'],[50,80,'50×80 مم'],[50,50,'50×50 مم'],[50,30,'50×30 مم']];
var BAR=[[50,30,'50×30 مم'],[40,30,'40×30 مم'],[50,25,'50×25 مم'],[60,40,'60×40 مم'],[40,20,'40×20 مم'],[30,20,'30×20 مم']];
function $(i){return document.getElementById(i)}
function J(k,d){try{var v=JSON.parse(PLS.getItem(k)||'null');return v==null?d:v}catch(e){return d}}
function W(k,v){try{PLS.setItem(k,JSON.stringify(v))}catch(e){}}
function num(x){var n=parseFloat(x);return isFinite(n)?n:0}
function toast(t){var el=$('e444Toast');if(!el){el=document.createElement('div');el.id='e444Toast';el.style.cssText='position:fixed;left:50%;bottom:90px;transform:translateX(-50%);background:#172554;color:#fff;padding:10px 16px;border-radius:12px;z-index:2147483647;font:700 14px Tahoma,Arial;direction:rtl;display:none;max-width:90vw;text-align:center;box-shadow:inset 0 -3px 0 #f59e0b';document.body.appendChild(el)}el.textContent=t;el.style.display='block';clearTimeout(toast.t);toast.t=setTimeout(function(){el.style.display='none'},2400)}
function cfg(){var c=J(K,{})||{};return {ship:c.ship==='sys'?'sys':'bt',bar:c.bar==='sys'?'sys':'bt',rcpt:c.rcpt==='bt'?'bt':'sys',rw:c.rw===58?58:80}}
function set(p){var c=cfg();Object.keys(p).forEach(function(k){c[k]=p[k]});W(K,c);body();return c}
function body(){var c=cfg();document.body.classList.toggle('e444-ship-sys',c.ship==='sys');document.body.classList.toggle('e444-bar-sys',c.bar==='sys')}
function via(k){return cfg()[k]}
function P(){return window.EMDPrinterV422}
function save(){try{if(typeof window.save==='function')window.save();else if(window.db)PLS.setItem('emd_business_v1',JSON.stringify(window.db))}catch(e){}}
function orders(){var d=window.db;return d&&Array.isArray(d.orders)?d.orders:[]}
function orderOf(id){id=String(id||'').trim();var L=orders();for(var i=0;i<L.length;i++){var o=L[i];if(String(o.id)===id||String(o.orderNumber)===id||String(o.number)===id)return o}return null}

/* ---------- مكتب / منزل ---------- */
function dmOf(o){var m=String(o.method||o.deliveryMethod||o.delivery_method||'');if(/مكتب/.test(m))return 'office';if(/منزل|البيت|توصيل|مندوب/.test(m))return 'home';return ''}
function setDm(o,v){var val=v==='office'?'مكتب':'توصيل للمنزل';o.deliveryMethod=val;if(o.method!=null&&o.method!=='')o.method=val;if(o.delivery_method!=null)o.delivery_method=val}
function dmRow(o){var d=dmOf(o);return '<div class="e444-dm"><span>التوصيل</span><button type="button" data-o="dm" data-v="office" class="'+(d==='office'?'on':'')+'">🏢 مكتب</button><button type="button" data-o="dm" data-v="home" class="'+(d==='home'?'on':'')+'">🏠 منزل</button></div>'}
function mny(){return window.EMDMoneyV75}
function payOf(o){try{return mny().payState(o)}catch(e){return String(o.paymentStatus||'')==='paid'?'paid':'unpaid'}}
function labelRow(id){var o=orderOf(id);if(!o)return '';var d=dmOf(o),p=payOf(o);
  return '<div class="e444-lr" data-id="'+String(id).replace(/["<>&]/g,'')+'"><div class="e444-dm"><span>الدفع</span><button type="button" data-e444l="paid" class="'+(p==='paid'?'on':'')+'">✓ مدفوع</button><button type="button" data-e444l="unpaid" class="'+(p!=='paid'?'on':'')+'">غير مدفوع'+(p==='partial'?' (جزئي)':'')+'</button></div>'
   +'<div class="e444-dm"><span>التوصيل</span><button type="button" data-e444l="office" class="'+(d==='office'?'on':'')+'">🏢 مكتب</button><button type="button" data-e444l="home" class="'+(d==='home'?'on':'')+'">🏠 منزل</button></div>'
   +(d?'':'<small>لم تُحدَّد طريقة التوصيل في الطلب، فاختر «مكتب» أو «منزل».</small>')+'</div>'}
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-e444l]');if(!b)return;var lb=window.EMDLabelV418;if(!lb)return;
  var id=b.closest('.e444-lr').getAttribute('data-id'),o=orderOf(id);if(!o)return;
  var k=b.getAttribute('data-e444l'),M=mny(),tot=0;try{tot=M.total(o)}catch(x){tot=num(o.total)}
  if(k==='paid'){o.paymentStatus='paid';o.paidAmount=tot;o.paidAt=new Date().toISOString();if(o.remaining!=null&&o.remaining!=='')o.remaining=0}
  else if(k==='unpaid'){if(payOf(o)==='paid'){o.paymentStatus='unpaid';o.paidAmount=0;if(o.remaining!=null&&o.remaining!=='')o.remaining=tot}}
  else setDm(o,k);
  save();lb.open([id]);toast('💾 حُفظ في الطلب وتحدّث الملصق')},true);

/* ---------- الطباعة عبر النظام لصور جاهزة ---------- */
function sysPrint(cvs,wMm,hMm,padMm){var box=$('e444Print');if(!box){box=document.createElement('div');box.id='e444Print';document.body.appendChild(box)}
  var iw=wMm-2*(padMm||0);box.innerHTML=cvs.map(function(c){return '<img alt="" src="'+c.toDataURL('image/png')+'" style="display:block;width:'+iw+'mm;'+(hMm?'height:'+hMm+'mm;':'height:auto;')+'margin:0 '+(padMm||0)+'mm;page-break-after:always;break-after:page">'}).join('');
  var hh=hMm||Math.ceil(cvs[0].height/cvs[0].width*iw)+4;
  var st=$('e444PrintCss');if(!st){st=document.createElement('style');st.id='e444PrintCss';document.head.appendChild(st)}
  st.textContent='@media print{@page{size:'+wMm+'mm '+hh+'mm;margin:0}html,body{margin:0!important;padding:0!important;background:#fff!important}}';
  document.body.classList.add('e444-printing');setTimeout(function(){try{window.print()}catch(e){}setTimeout(function(){document.body.classList.remove('e444-printing')},600)},80)}

/* ---------- الإيصال: بلوتوث أو 58 مم ---------- */
function receipt(cv){var c=cfg();
  if(c.rcpt==='bt'){var p=P();if(!p||!navigator.bluetooth){toast('الطباعة عبر البلوتوث تعمل في Chrome على الأندرويد، لذا ستُستخدم طباعة النظام.');return false}
    var raw=PLS.getItem('emd422_printer'),k=J('emd422_printer',{})||{};k.lang='esc';k.head=c.rw===58?384:576;W('emd422_printer',k);
    function back(){try{if(raw==null)PLS.removeItem('emd422_printer');else PLS.setItem('emd422_printer',raw)}catch(e){}}
    toast('🧾 جارٍ طباعة الإيصال عبر البلوتوث…');Promise.resolve(p.print([{cv:cv,wMm:c.rw,hMm:Math.ceil(cv.height/cv.width*c.rw)}])).then(back,back);return true}
  if(c.rw===58){sysPrint([cv],58,0,5);return true}
  return false}

/* ---------- نافذة الطابعات ---------- */
var more=false;
function ensure(){var ov=$('e444');if(ov)return ov;ov=document.createElement('div');ov.id='e444';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.setAttribute('aria-label','الطابعات');document.body.appendChild(ov);
  ov.addEventListener('click',onClick);ov.addEventListener('change',onChange);document.addEventListener('keydown',function(e){if(e.key==='Escape'&&ov.classList.contains('show'))close()});return ov}
function close(){var ov=$('e444');if(ov)ov.classList.remove('show')}
function open(){var ov=ensure();paint();ov.classList.add('show')}
function seg(job,a,b,cur){return '<div class="seg"><button type="button" data-j="'+job+'" data-v="'+a[0]+'" class="'+(cur===a[0]?'on':'')+'">'+a[1]+'</button><button type="button" data-j="'+job+'" data-v="'+b[0]+'" class="'+(cur===b[0]?'on':'')+'">'+b[1]+'</button></div>'}
function sizeSel(id,list,w,h){var pre=list.some(function(s){return s[0]===w&&s[1]===h});return '<select id="'+id+'">'+(pre?'':'<option selected>'+w+'×'+h+' مم (حالي)</option>')+list.map(function(s){return '<option value="'+s[0]+'x'+s[1]+'"'+(s[0]===w&&s[1]===h?' selected':'')+'>'+s[2]+'</option>'}).join('')+'</select>'}
function paint(){var c=cfg(),p=P(),lab=J('emd418_label',{})||{},bar=J('emd439_cfg',{})||{},pos=J('emd420_pos',{})||{},inv=window.EMDInvV443?EMDInvV443.config():{paper:'a4'};
  var BT='🔵 بلوتوث مباشر',SYS='🖨️ طباعة النظام';
  var panel='';try{panel=p&&p.panel?p.panel():''}catch(e){}
  $('e444').innerHTML='<div class="win"><div class="hd"><b>🖨️ الطابعات</b><button type="button" class="x" data-a="x" aria-label="إغلاق">✕</button></div><div class="bd">'
  +'<h4>طابعة البلوتوث</h4><div class="card">'+(panel||'<p class="hint">الطباعة عبر البلوتوث غير متاحة في هذه النسخة.</p>')
  +'<div class="acts"><button type="button" data-a="con">🔗 اتصال</button><button type="button" data-a="dis">✂️ قطع الاتصال</button><button type="button" data-a="test">🧪 طباعة تجريبية</button></div>'
  +'<button type="button" class="lnk" data-a="more">'+(more?'▲ إخفاء الخيارات الإضافية':'⚙️ إظهار خيارات أكثر')+'</button>'
  +'<p class="hint">يتصل المتصفح بطابعة بلوتوث واحدة في الوقت نفسه. أما «طباعة النظام» فتستخدم أي طابعة معرّفة على الجهاز (Wi‑Fi أو USB)، ويمكن منها الحفظ PDF.</p></div>'
  +'<h4>الطابعة لكل عمل</h4>'
  +'<div class="card"><b>🏷️ ملصق الشحن</b>'+seg('ship',['bt',BT],['sys',SYS],c.ship)+'<label class="f">المقاس</label>'+sizeSel('e444Ship',SHIP,num(lab.w)||100,num(lab.h)||150)+'</div>'
  +'<div class="card"><b>🔖 ملصق الباركود والسعر</b>'+seg('bar',['bt',BT],['sys',SYS],c.bar)+'<label class="f">المقاس</label>'+sizeSel('e444Bar',BAR,num(bar.w)||50,num(bar.h)||30)+'</div>'
  +'<div class="card"><b>🧾 إيصال نقطة البيع</b>'+seg('rcpt',['sys',SYS],['bt',BT],c.rcpt)+'<label class="f">عرض الورق</label>'+seg('rw',['80','80 مم'],['58','58 مم'],String(c.rw))
  +'<label class="ck"><input type="checkbox" id="e444Auto"'+(pos.auto?' checked':'')+'> اطبع الإيصال تلقائيًا بعد كل بيع</label></div>'
  +'<div class="card"><b>📄 الفاتورة</b><label class="f">مقاس الورق (طباعة النظام وPDF)</label><select id="e444Inv"><option value="a4"'+(inv.paper==='a4'?' selected':'')+'>A4</option><option value="a5"'+(inv.paper==='a5'?' selected':'')+'>A5</option><option value="80"'+(inv.paper==='80'?' selected':'')+'>طابعة إيصالات 80 مم</option></select>'
  +(window.EMDInvV443?'<button type="button" class="lnk" data-a="inv">🎨 تصميم الفاتورة</button>':'')+'</div>'
  +'</div></div>';
  var s=$('e444').querySelector('.e422-set');if(s)s.hidden=!more;
  try{if(p&&p.status)p.status()}catch(e){}}
function onClick(e){var ov=$('e444');if(e.target===ov){close();return}var b=e.target.closest('[data-a],[data-j]');if(!b)return;
  if(b.hasAttribute('data-j')){var j=b.getAttribute('data-j'),v=b.getAttribute('data-v'),o={};o[j]=j==='rw'?+v:v;set(o);paint();toast('✓ حُفظ');return}
  var a=b.getAttribute('data-a'),p=P();
  if(a==='x'){close();return}
  if(a==='more'){more=!more;paint();return}
  if(a==='inv'){close();EMDInvV443.designer(null);return}
  if(!p||!navigator.bluetooth||!navigator.bluetooth.requestDevice){toast('الطباعة عبر البلوتوث تعمل في متصفح Chrome على الأندرويد.');return}
  if(a==='con'){p.connect().then(function(){toast('رُبطت الطابعة ✓');paint()}).catch(function(er){if(er&&er.name!=='NotFoundError')toast('تعذّر الاتصال: '+(er.message||''))});return}
  if(a==='dis'){try{p.disconnect()}catch(er){}toast('قُطع الاتصال بالطابعة');paint();return}
  if(a==='test'){p.print(p.testLabel());return}}
function onChange(e){var t=e.target;
  if(t.id==='e444Ship'||t.id==='e444Bar'){var v=String(t.value).split('x');if(v.length!==2)return;var key=t.id==='e444Ship'?'emd418_label':'emd439_cfg',c=J(key,{})||{};c.w=+v[0];c.h=+v[1];W(key,c);toast('✓ حُفظ المقاس');return}
  if(t.id==='e444Auto'){var ps=J('emd420_pos',{})||{};ps.auto=t.checked;W('emd420_pos',ps);toast('✓ حُفظ');return}
  if(t.id==='e444Inv'&&window.EMDInvV443){EMDInvV443.set({paper:t.value});toast('✓ حُفظ');return}}

/* ---------- بطاقة الإعدادات ---------- */
function inject(){var g=$('emd327SystemGrid');if(!g||$('e444Item'))return;var b=document.createElement('button');b.type='button';b.className='emd327-item';b.id='e444Item';b.setAttribute('data-emd108-skip','1');
  b.innerHTML='<b>🖨️ الطابعات</b><span>الاتصال بالطابعة، وتحديد طابعة كل عمل ومقاسه.</span>';b.addEventListener('click',open);var inv=$('e443Item');if(inv&&inv.parentNode===g)g.insertBefore(b,inv);else g.appendChild(b)}
body();

window.EMDPrnV444={version:'V444',open:open,via:via,config:cfg,set:set,dmRow:dmRow,setDm:setDm,dmOf:dmOf,labelRow:labelRow,receipt:receipt,sysPrint:sysPrint};
})();

/* ---- EMD-V450-variants ---- */

(function(){'use strict';if(window.EMD450)return;
var MAXV=100,MAXA=2;
var PRE=['اللون','المقاس','الحجم','النوع'];
var SUG={'اللون':['أبيض','أسود','كحلي','رمادي','بيج','أحمر','أخضر','بني','وردي','أزرق'],'المقاس':['S','M','L','XL','XXL'],'الحجم':['50 مل','100 مل','صغير','وسط','كبير'],'النوع':[]};
var SHOES=['36','37','38','39','40','41','42','43','44','45'];
var CLR={'أبيض':'#ffffff','أسود':'#111827','كحلي':'#1e3a8a','رمادي':'#9ca3af','بيج':'#e7d8bf','أحمر':'#dc2626','أخضر':'#16a34a','بني':'#7c4a21','وردي':'#f9a8d4','أزرق':'#3b82f6'};
function $(i){return document.getElementById(i)}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function num(v){v=Number(String(v==null?'':v).replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/٫/g,'.').replace(',','.'));return isFinite(v)?v:0}
function cnt(n){return n===1?'خيار واحد':n===2?'خياران':(n>=3&&n<=10?n+' خيارات':n+' خيارًا')}
function f3(v){return num(v).toFixed(3)}
function norm(x){return String(x||'').replace(/[ـ]/g,'').trim().toLowerCase().replace(/\s+/g,' ')}
function toast(t,ok){[].forEach.call(document.querySelectorAll('.e450-toast'),function(x){x.remove()});var d=document.createElement('div');d.className='e450-toast'+(ok===false?' bad':'');d.setAttribute('role','status');d.textContent=t;document.body.appendChild(d);setTimeout(function(){d.remove()},2600)}
function D(){return window.db||{}}
function P(){var d=D();if(!Array.isArray(d.products))d.products=[];return d.products}
function API(){return window.EMDDirectV113||{}}
function ST(){try{return API()._s()}catch(e){return null}}
function cur(){try{var c=(JSON.parse(PLS.getItem('emd_business_profile_v333')||'{}')||{}).currency;return (!c||c==='OMR')?'ر.ع':c}catch(e){return 'ر.ع'}}
function persist(){try{if(typeof window.save==='function')window.save();else PLS.setItem('emd_business_v1',JSON.stringify(D()))}catch(e){try{PLS.setItem('emd_business_v1',JSON.stringify(D()))}catch(x){}}
  try{if(typeof window.renderProducts==='function')window.renderProducts()}catch(e){}setTimeout(listPass,60)}
function priceOf(p){var v=num(p&&(p.salePrice!=null?p.salePrice:(p.unitPrice!=null?p.unitPrice:(p.price!=null?p.price:p.defaultPrice))));return v>0?v:0}
function costOf(p){var v=num(p&&(p.costPrice!=null?p.costPrice:p.purchasePrice));return v>0?v:0}
function setPrice(p,v){v=num(v);if(v>0){p.salePrice=v;p.unitPrice=v;p.price=v;p.defaultPrice=v}else{delete p.salePrice;delete p.unitPrice;delete p.price;delete p.defaultPrice}}
function setCost(p,v){v=num(v);if(v>0){p.costPrice=v;p.purchasePrice=v}}
function byName(n){var k=norm(n);return P().find(function(p){return p&&norm(p.name)===k})||null}
function isV(p){return !!(p&&p.vg&&p.vo&&typeof p.vo==='object')}
function members(vg){var k=norm(vg);return P().filter(function(p){return isV(p)&&norm(p.vg)===k})}
function attrsOf(list){var a=[];list.forEach(function(p){(Array.isArray(p.va)?p.va:Object.keys(p.vo||{})).forEach(function(x){if(a.indexOf(x)<0)a.push(x)})});return a.slice(0,MAXA)}
function valsOf(list,a){var o=[];list.forEach(function(p){var v=p.vo&&p.vo[a];if(v!=null&&v!==''&&o.indexOf(String(v))<0)o.push(String(v))});return o}
function tag(p){if(!isV(p))return '';var va=Array.isArray(p.va)?p.va:Object.keys(p.vo);return va.map(function(a){return p.vo[a]}).filter(Boolean).join(' · ')}
function label(n){var p=byName(n);if(!isV(p))return n;return p.vg+' - '+tag(p).split(' · ').join(' - ')}
function lineName(n){var p=byName(n);if(!isV(p))return esc(n);return esc(p.vg)+'<span class="e450-tag">'+esc(tag(p))+'</span>'}
function avail(p){try{return num(API().available(p.name))}catch(e){return num(p.stock)}}
function inCart(name){if(PK.cb)return 0;var S=ST(),k=norm(name),t=0;if(S&&S.cart)S.cart.forEach(function(c){if(norm(c.name)===k)t+=num(c.qty)});return t}
function imgOf(list){for(var i=0;i<list.length;i++)if(list[i].image)return list[i].image;return ''}
function cssImg(u){return "background-image:url('"+String(u).replace(/['"\\()\s]/g,function(c){return encodeURIComponent(c)})+"')"}
function priceRange(list){var a=list.map(priceOf).filter(function(v){return v>0});if(!a.length)return {min:0,max:0};return {min:Math.min.apply(null,a),max:Math.max.apply(null,a)}}
function dot(v){var c=CLR[v];return c?'<span style="display:inline-block;width:12px;height:12px;border-radius:50%;border:1px solid #cbd5e1;background:'+c+'"></span>':''}


/* قراءة الخيار من رسالة الطلب: «قميص قطني اسود ميديم» ← «قميص قطني - أسود - M» */
function tn(x){return ' '+String(x||'').toLowerCase().replace(/[أإآٱ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').replace(/[ًٌٍَُِّْـ]/g,'')
  .replace(/دبل اكس لارج|xxl|2xl/g,' xxl ').replace(/اكس ?لارج|اكسترا لارج/g,' xl ').replace(/ميدي?و?م|مديم/g,' m ').replace(/لارج/g,' l ').replace(/سمول|سمال/g,' s ')
  .replace(/[^a-z0-9ء-ي]+/g,' ').replace(/\s+/g,' ')+' '}
function hasT(t,v){var x=tn(v).trim();return !!x&&t.indexOf(' '+x+' ')>=0}
function matchText(raw){var t=tn(raw),gs={},hit=null;P().forEach(function(p){if(isV(p))gs[norm(p.vg)]=p.vg});
  Object.keys(gs).forEach(function(k){var g=gs[k];if(!hasT(t,g))return;if(!hit||g.length>hit.length)hit=g});
  if(!hit)return null;var c=members(hit).filter(function(p){var va=Array.isArray(p.va)?p.va:Object.keys(p.vo);return va.every(function(a){return hasT(t,p.vo[a])})});
  return c.length===1?c[0].name:''}
/* ===== شاشة البيع: بطاقة واحدة لكل منتج له خيارات ===== */
function collapse(ps,q){q=norm(q);var seen={},out=[];
  ps.forEach(function(p){if(!isV(p)){out.push(p);return}var k=norm(p.vg);
    if(q&&norm(p.vg).indexOf(q)<0){out.push(p);return}
    if(seen[k])return;seen[k]=1;out.push({__grp:p.vg})});return out}
function card(g){var L=members(g.__grp);if(!L.length)return '';var a=0,r=priceRange(L),im=imgOf(L);L.forEach(function(p){a+=Math.max(0,avail(p)-inCart(p.name))});
  return '<div class="emd113-p e450-g'+(a<=0?' out':'')+'" data-e450g="'+esc(g.__grp)+'" role="button" tabindex="0"><span class="e450-vb">🎨 '+L.length+'</span><div class="emd113-img" '+(im?'style="'+cssImg(im)+'"':'')+'>'+(im?'':'🎨')+'</div><div class="n"><b>'+esc(g.__grp)+'</b><small>المتاح: <b style="display:inline;color:'+(a<=0?'#b91c1c':'#166534')+'">'+a+'</b> · '+cnt(L.length)+'</small></div><div class="pr">'+(r.max?(r.min!==r.max?'من '+f3(r.min):f3(r.min)):'<small>بلا سعر</small>')+'</div><button class="emd113-add" aria-label="اختيار" tabindex="-1">+</button></div>'}
var PK={g:'',a0:''};
function pick(vg,cb){PK.cb=typeof cb==='function'?cb:null;PK.g=vg;PK.a0='';PK.msg='';var ov=$('e450P');if(!ov){ov=document.createElement('div');ov.id='e450P';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.setAttribute('aria-labelledby','e450PT');document.body.appendChild(ov);
    ov.addEventListener('click',function(e){if(e.target===ov)return closeP();var b=e.target.closest('button');if(!b||b.disabled)return;var k=b.getAttribute('data-k');
      if(k==='x')return closeP();if(k==='a0'){PK.a0=b.getAttribute('data-v');PK.msg='';return paintP()}
      if(k==='v'){var n=b.getAttribute('data-v'),p=byName(n);if(!p)return;if(PK.cb){var f=PK.cb;closeP();f(p.name);return}try{API()._add(p.name)}catch(x){}PK.msg='✓ أُضيف «'+tag(p)+'» إلى الفاتورة. اختر خيارًا آخر أو اضغط «تم».';return paintP()}})}
  paintP();ov.classList.add('show');setTimeout(function(){var b=ov.querySelector('.e450-pk:not(:disabled)');if(b)b.focus()},40)}
function closeP(){var ov=$('e450P');if(ov)ov.classList.remove('show')}
function vbtn(p,txt){var a=p?avail(p)-inCart(p.name):0;return '<button type="button" class="e450-pk" data-k="v" data-v="'+esc(p?p.name:'')+'"'+(a<=0&&!PK.cb?' disabled':'')+'>'+txt+' <small>'+(a<=0?'نفد':a)+'</small></button>'}
function paintP(){var L=members(PK.g),A=attrsOf(L),im=imgOf(L),h='';if(A.length>1&&PK.a0){var ci=imgOf(L.filter(function(p){return p.vo[A[0]]===PK.a0}));if(ci)im=ci}
  h+='<div class="ph"><span class="im" '+(im?'style="'+cssImg(im)+'"':'')+'>'+(im?'':'🎨')+'</span><div><b id="e450PT">'+esc(PK.g)+'</b><small>'+(A.length>1?'اختر '+esc(A[0])+' ثم '+esc(A[1]):'اختر '+esc(A[0]||'الخيار'))+'</small></div></div>';
  if(A.length>1){var v0=valsOf(L,A[0]);if(!PK.a0||v0.indexOf(PK.a0)<0)PK.a0=v0.filter(function(v){return L.some(function(p){return p.vo[A[0]]===v&&avail(p)-inCart(p.name)>0})})[0]||v0[0];
    h+='<span class="e450-lb">'+esc(A[0])+'</span><div class="e450-ch">'+v0.map(function(v){var any=L.some(function(p){return p.vo[A[0]]===v&&avail(p)-inCart(p.name)>0});return '<button type="button" class="e450-pk" data-k="a0" data-v="'+esc(v)+'" aria-pressed="'+(PK.a0===v)+'">'+dot(v)+esc(v)+(any?'':' <small>نفد</small>')+'</button>'}).join('')+'</div>';
    h+='<span class="e450-lb">'+esc(A[1])+' ('+esc(PK.a0)+')</span><div class="e450-ch">'+valsOf(L,A[1]).map(function(v){var p=L.filter(function(x){return x.vo[A[0]]===PK.a0&&x.vo[A[1]]===v})[0];return p?vbtn(p,esc(v)):''}).join('')+'</div>'}
  else{h+='<span class="e450-lb">'+esc(A[0]||'الخيار')+'</span><div class="e450-ch">'+L.map(function(p){var v=p.vo[A[0]];return vbtn(p,dot(v)+esc(v))}).join('')+'</div>'}
  if(PK.msg)h+='<div class="e450-ok" role="status">'+esc(PK.msg)+'</div>';
  $('e450P').innerHTML='<div class="w"><div class="e450-hd"><h2>🎨 اختيار الخيار</h2><button type="button" class="x" data-k="x" aria-label="إغلاق">✕</button></div><div class="e450-bd">'+h+'</div>'+(PK.cb?'':'<div class="e450-ft"><button type="button" class="e450-go" data-k="x">تم</button></div>')+'</div>'}

/* ===== قائمة المنتجات: بطاقة واحدة لكل منتج له خيارات ===== */
var OPEN={};
function gcard(vg){var L=members(vg),A=attrsOf(L),im=imgOf(L),tot=0,out=0,r=priceRange(L);L.forEach(function(p){var a=avail(p);tot+=Math.max(0,a);if(a<=0)out++});
  var mx='';if(A.length>1){mx=valsOf(L,A[0]).map(function(v){return '<div class="e450-mr"><b>'+dot(v)+' '+esc(v)+'</b><div class="e450-sz">'+L.filter(function(p){return p.vo[A[0]]===v}).map(function(p){var a=avail(p);return '<span class="e450-s'+(a<=0?' out':(a<=2?' low':''))+'">'+esc(p.vo[A[1]])+' '+a+'</span>'}).join('')+'</div></div>'}).join('')}
  else mx='<div class="e450-sz">'+L.map(function(p){var a=avail(p);return '<span class="e450-s'+(a<=0?' out':(a<=2?' low':''))+'">'+esc(p.vo[A[0]])+' '+a+'</span>'}).join('')+'</div>';
  var d=document.createElement('div');d.className='e450-gc';d.setAttribute('data-e450grp',vg);
  d.innerHTML='<div class="h">'+(im?'<img src="'+esc(im)+'" alt="">':'<span class="ph">🎨</span>')+'<span class="t"><b>'+esc(vg)+'</b><small>🎨 '+cnt(L.length)+' · المتاح '+tot+(out?' · نفد '+out:'')+'</small></span><span class="pr">'+(r.max?f3(r.min)+(r.max!==r.min?'<br><small style="font-weight:400;color:#64748b">إلى '+f3(r.max)+'</small>':''):'')+'</span></div>'
   +'<div class="e450-mx">'+mx+'</div><div class="acts"><button type="button" data-e450l="edit">✏️ تعديل الخيارات</button><button type="button" data-e450l="rows" aria-expanded="'+!!OPEN[norm(vg)]+'">'+(OPEN[norm(vg)]?'▲ إخفاء التفاصيل':'▾ المخزون والطلبات لكل خيار')+'</button></div>';
  return d}
function listPass(){var el=$('productsList');if(!el)return;var rows=[].slice.call(el.querySelectorAll(':scope>.product'));if(!rows.length)return;
  var sig=rows.length+'|'+P().length+'|'+(el.__e450raw||'');if(el.__e450sig===sig&&el.querySelector('.e450-gc'))return;
  [].forEach.call(el.querySelectorAll('.e450-gc'),function(x){x.remove()});var done={};
  rows.forEach(function(r){var b=r.querySelector('b');var p=b?byName(b.textContent):null;r.classList.remove('e450-hid','e450-show');if(!isV(p))return;var k=norm(p.vg);
    r.classList.add('e450-hid');if(OPEN[k])r.classList.add('e450-show');if(!done[k]){done[k]=1;r.parentNode.insertBefore(gcard(p.vg),r)}});
  el.classList.add('e450-x');el.__e450sig=sig}
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-e450l]');if(!b)return;var c=b.closest('.e450-gc'),vg=c&&c.getAttribute('data-e450grp');if(!vg)return;
  if(b.getAttribute('data-e450l')==='edit')return openE({group:vg});
  var k=norm(vg);OPEN[k]=!OPEN[k];var el=$('productsList');if(el)el.__e450sig='';listPass()},true);
function wrapRP(){var o=window.renderProducts;if(typeof o==='function'&&!o.__e450){var w=function(){var r=o.apply(this,arguments);try{listPass()}catch(e){}return r};w.__e450=1;window.renderProducts=w}}


/* ===== نافذة الخيارات: إنشاء وتعديل ===== */
var E=null;
function key(vals){return vals.join('\u0001')}
function combos(){var A=E.attrs.filter(function(a){return a.v.length});if(!A.length)return [];var out=[[]];A.forEach(function(a){var n=[];out.forEach(function(c){a.v.forEach(function(v){n.push(c.concat([v]))})});out=n});return out}
function vname(vals){return E.base+' - '+vals.join(' - ')}
function openE(seed){seed=seed||{};E={cimg:{},base:String(seed.name||'').trim(),price:seed.price||'',cost:seed.cost||'',img:seed.img||'',attrs:[],rows:{},group:null,conv:null,convKey:'',newA:''};
  if(seed.group){var L=members(seed.group);E.group=seed.group;E.base=seed.group;var A=attrsOf(L);E.attrs=A.map(function(a){return {n:a,v:valsOf(L,a)}});
    var pr={};L.forEach(function(p){var v=priceOf(p);pr[v]=(pr[v]||0)+1});E.price=Object.keys(pr).sort(function(a,b){return pr[b]-pr[a]})[0]||'';if(num(E.price)<=0)E.price='';
    E.cost=L.length?(costOf(L[0])||''):'';if(A.length)valsOf(L,A[0]).forEach(function(v){var ci=imgOf(L.filter(function(p){return p.vo[A[0]]===v}));if(ci)E.cimg[v]=ci});L.forEach(function(p){var k=key(A.map(function(a){return String(p.vo[a])}));E.rows[k]={pid:p.name,stock:String(num(p.stock)),price:priceOf(p)&&priceOf(p)!==num(E.price)?String(priceOf(p)):'',bc:String(p.barcode||''),off:false}});combos().forEach(function(c){var k=key(c);if(!E.rows[k])E.rows[k]={stock:'',price:'',bc:'',off:true}})}
  else{E.attrs=[{n:'اللون',v:[]},{n:'المقاس',v:[]}];E.stock=seed.stock||''}
  var ov=$('e450E');if(!ov){ov=document.createElement('div');ov.id='e450E';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.setAttribute('aria-labelledby','e450ET');document.body.appendChild(ov);
    ov.addEventListener('click',onE);ov.addEventListener('input',onEIn);ov.addEventListener('keydown',function(e){if(e.key==='Enter'&&e.target.getAttribute('data-addv')!=null){e.preventDefault();addVal(+e.target.getAttribute('data-addv'))}})}
  checkConv();paintE();ov.classList.add('show')}
function closeE(){var ov=$('e450E');if(ov)ov.classList.remove('show');E=null}
function checkConv(){E.conv=null;if(E.group||!E.base)return;var p=byName(E.base);if(p&&!isV(p))E.conv=p.name}
function paintE(){var ov=$('e450E');if(!ov||!E)return;var C=combos(),ex=!!E.group,h='';
  h+='<div class="e450-g2"><label class="e450-l" style="grid-column:1/-1">اسم المنتج<input class="e450-in" id="e450Base" value="'+esc(E.base)+'"'+(ex?' readonly':'')+' autocomplete="off"></label>'
   +'<label class="e450-l">سعر البيع ('+esc(cur())+')<input class="e450-in" id="e450Price" inputmode="decimal" value="'+esc(E.price)+'" placeholder="اختياري"></label>'
   +'<label class="e450-l">تكلفة الشراء<input class="e450-in" id="e450Cost" inputmode="decimal" value="'+esc(E.cost)+'" placeholder="اختياري"></label></div>';
  if(ex)h+='<p class="e450-note">اسم المنتج وأسماء الخيارات الموجودة لا تتغير حتى تبقى الطلبات والفواتير السابقة مرتبطة بها. يمكنك إضافة قيم جديدة أو إيقاف خيار.</p>';
  h+='<div class="e450-box"><span class="e450-st">١) الخصائص</span><div class="e450-ch">'+PRE.concat(E.attrs.map(function(a){return a.n}).filter(function(n){return PRE.indexOf(n)<0})).map(function(n){var on=E.attrs.some(function(a){return a.n===n});return '<button type="button" class="e450-c" data-k="attr" data-v="'+esc(n)+'" aria-pressed="'+on+'"'+(ex&&on?' disabled':'')+'>'+esc(n)+'</button>'}).join('')+'</div>'
   +(E.attrs.length<MAXA&&!ex?'<div class="e450-add"><input class="e450-in" id="e450NewA" placeholder="خاصية أخرى، مثل: الخامة" value="'+esc(E.newA)+'"><button type="button" data-k="newattr">إضافة</button></div>':'')
   +'<p class="e450-note">خاصيّتان في الحد الأقصى.</p>';
  E.attrs.forEach(function(a,i){var sg=(SUG[a.n]||[]).filter(function(v){return a.v.indexOf(v)<0});
    h+='<span class="e450-st">'+(i===0?'٢) ':'')+'قيم '+esc(a.n)+'</span><div class="e450-ch">'+a.v.map(function(v,j){return '<button type="button" class="e450-c" aria-pressed="true" data-k="delv" data-a="'+i+'" data-j="'+j+'" aria-label="إزالة '+esc(v)+'">'+dot(v)+esc(v)+' <i>✕</i></button>'}).join('')
     +sg.map(function(v){return '<button type="button" class="e450-c sug" data-k="sug" data-a="'+i+'" data-v="'+esc(v)+'">+ '+esc(v)+'</button>'}).join('')
     +(a.n==='المقاس'?'<button type="button" class="e450-c sug" data-k="shoes" data-a="'+i+'">+ مقاسات الأحذية 36–45</button>':'')+'</div>'
     +(i===0&&a.v.length?'<div class="e450-ci"><span class="e450-note">صورة لكل '+esc(a.n)+' (اختياري)</span><div class="e450-ch">'+a.v.map(function(v){var u=E.cimg[v];return '<button type="button" class="e450-cib" data-k="cimg" data-v="'+esc(v)+'" aria-label="صورة '+esc(v)+'">'+(u?'<span class="im" style="'+cssImg(u)+'"></span>':'<span class="im">📷</span>')+esc(v)+'</button>'}).join('')+'</div></div>':'')
     +'<div class="e450-add"><input class="e450-in" data-addv="'+i+'" id="e450V'+i+'" placeholder="اكتب قيمة جديدة"><button type="button" data-k="addv" data-a="'+i+'">إضافة</button></div>'});
  h+='<div class="e450-sum">'+(C.length?cnt(C.length)+(E.attrs.length>1&&E.attrs[0].v.length&&E.attrs[1].v.length?' ('+E.attrs[0].v.length+' × '+E.attrs[1].v.length+')':''):'أضف قيمة واحدة على الأقل')+'</div></div>';
  if(E.conv){var cp=byName(E.conv);h+='<div class="e450-warn">يوجد منتج بالاسم نفسه «'+esc(E.conv)+'» ومخزونه '+num(cp&&cp.stock)+'. سيصبح أحد الخيارات ويحتفظ بمخزونه وطلباته. اختر الخيار:'
     +'<select class="e450-in" id="e450Conv" style="margin-top:6px">'+C.map(function(c){var k=key(c);return '<option value="'+esc(k)+'"'+(E.convKey===k?' selected':'')+'>'+esc(c.join(' · '))+'</option>'}).join('')+'</select></div>';if(C.length&&!E.convKey)E.convKey=key(C[0])}
  if(C.length){h+='<span class="e450-st">٣) المخزون والسعر والباركود لكل خيار</span>'
     +'<div class="e450-bulk"><input class="e450-in" id="e450BS" inputmode="numeric" placeholder="الكمية"><button type="button" data-k="bulkstock">نفس المخزون للكل</button><button type="button" data-k="bulkprice">نفس السعر للكل</button></div>'
     +'<div class="e450-tb"><div class="e450-th"><span>الخيار</span><span>المخزون</span><span>السعر</span><span>الباركود</span><span></span></div>'
     +C.map(function(c){var k=key(c),r=E.rows[k]||(E.rows[k]={stock:E.conv&&E.convKey===k?String(num((byName(E.conv)||{}).stock)):String(E.stock||''),price:'',bc:E.conv&&E.convKey===k?String((byName(E.conv)||{}).barcode||''):'',off:false});
       return '<div class="e450-tr'+(r.off?' off':'')+'" data-key="'+esc(k)+'"><b title="'+esc(c.join(' · '))+'">'+esc(c.join(' · '))+'</b>'
        +'<input class="e450-in'+(r.stock!==''&&num(r.stock)<=0?' zero':'')+'" data-f="stock" inputmode="numeric" value="'+esc(r.stock)+'" placeholder="0" aria-label="مخزون '+esc(c.join(' '))+'">'
        +'<input class="e450-in'+(r.price!==''?' chg':'')+'" data-f="price" inputmode="decimal" value="'+esc(r.price)+'" placeholder="'+(num(E.price)>0?f3(E.price):'السعر')+'" aria-label="سعر '+esc(c.join(' '))+'">'
        +'<input class="e450-in bc" data-f="bc" value="'+esc(r.bc)+'" placeholder="اختياري" aria-label="باركود '+esc(c.join(' '))+'">'
        +'<button type="button" data-k="off" aria-label="'+(r.off?'إرجاع الخيار':'إيقاف الخيار')+'">'+(r.off?'↺':'✕')+'</button></div>'}).join('')+'</div>'
     +'<p class="e450-note">السعر الفارغ يأخذ سعر المنتج، والمعدّل يظهر بإطار ذهبي. ✕ يوقف الخيار فلا يُنشأ'+(ex?'، والخيار الموجود يُحذف بعد التأكيد، ولا تتأثر الفواتير السابقة':'')+'.</p>'}
  var y=ov.querySelector('.e450-bd'),sy=y?y.scrollTop:0,fa=document.activeElement,fid=fa&&ov.contains(fa)?fa.id:'';
  ov.innerHTML='<div class="w"><div class="e450-hd"><h2 id="e450ET">🎨 المقاسات والألوان</h2><button type="button" class="x" data-k="x" aria-label="إغلاق">✕</button></div><div class="e450-bd">'+h+'</div><div class="e450-ft"><button type="button" class="e450-go" data-k="save">💾 حفظ المنتج'+(C.length?' ('+cnt(C.filter(function(c){var r=E.rows[key(c)];return !(r&&r.off)}).length)+')':'')+'</button><button type="button" class="e450-gh" data-k="x">إلغاء</button></div></div>';
  var nb=ov.querySelector('.e450-bd');if(nb)nb.scrollTop=sy;if(fid&&$(fid))try{$(fid).focus()}catch(e){}}
function addVals(i,list){var a=E.attrs[i];if(!a)return;list.forEach(function(v){v=String(v).trim();if(v&&a.v.indexOf(v)<0)a.v.push(v)});if(combos().length>MAXV){toast('الحد الأقصى '+MAXV+' خيار للمنتج الواحد.',false);list.forEach(function(v){var j=a.v.indexOf(String(v).trim());if(j>=0)a.v.splice(j,1)})}paintE()}
function addVal(i){var inp=$('e450V'+i);if(!inp)return;var v=inp.value.split(/[،,]/).map(function(x){return x.trim()}).filter(Boolean);if(!v.length){inp.focus();return}addVals(i,v);setTimeout(function(){var n=$('e450V'+i);if(n)n.focus()},0)}
function onEIn(e){var t=e.target;if(!E)return;
  if(t.id==='e450Base'){E.base=t.value.trim();var was=E.conv;checkConv();if(was!==E.conv)paintE();return}
  if(t.id==='e450Price'){E.price=t.value;return}if(t.id==='e450Cost'){E.cost=t.value;return}if(t.id==='e450NewA'){E.newA=t.value;return}
  if(t.id==='e450Conv'){var old=E.rows[E.convKey];E.convKey=t.value;if(old&&!E.group){old.stock=String(E.stock||'');old.bc=''}var cp=byName(E.conv),r=E.rows[t.value];if(r&&cp){r.stock=String(num(cp.stock));r.bc=String(cp.barcode||'')}paintE();return}
  var f=t.getAttribute('data-f');if(f){var row=t.closest('.e450-tr'),k=row&&row.getAttribute('data-key'),r=E.rows[k];if(!r)return;r[f]=t.value;
    if(f==='stock')t.classList.toggle('zero',t.value!==''&&num(t.value)<=0);if(f==='price')t.classList.toggle('chg',t.value!=='')}}
function onE(e){var ov=$('e450E');if(e.target===ov)return closeE();var b=e.target.closest('button');if(!b||b.disabled||!E)return;var k=b.getAttribute('data-k'),i=+b.getAttribute('data-a');
  if(k==='x')return closeE();
  if(k==='attr'){var n=b.getAttribute('data-v'),j=E.attrs.findIndex(function(a){return a.n===n});if(j>=0){if(E.attrs[j].v.length&&!confirm('إزالة خاصية «'+n+'» وقيمها؟'))return;E.attrs.splice(j,1)}else{if(E.attrs.length>=MAXA){toast('خاصيّتان في الحد الأقصى. أزل واحدة أولًا.',false);return}E.attrs.push({n:n,v:[]})}return paintE()}
  if(k==='newattr'){var na=String(E.newA||'').trim();if(!na)return;if(E.attrs.some(function(a){return a.n===na}))return;if(E.attrs.length>=MAXA){toast('خاصيّتان في الحد الأقصى.',false);return}E.attrs.push({n:na,v:[]});E.newA='';return paintE()}
  if(k==='sug')return addVals(i,[b.getAttribute('data-v')]);
  if(k==='shoes')return addVals(i,SHOES);
  if(k==='addv')return addVal(i);
  if(k==='delv'){var a=E.attrs[i],v=a&&a.v[+b.getAttribute('data-j')];if(!a)return;if(E.group&&members(E.group).some(function(p){return String(p.vo[a.n])===v})){toast('هذه القيمة لها خيارات محفوظة. أوقف خياراتها من الجدول بزر ✕.',false);return}a.v.splice(+b.getAttribute('data-j'),1);return paintE()}
  if(k==='off'){var row=b.closest('.e450-tr'),r=E.rows[row.getAttribute('data-key')];if(r){r.off=!r.off;paintE()}return}
  if(k==='bulkstock'){var s=$('e450BS');if(!s||s.value===''){toast('اكتب الكمية أولًا',false);s&&s.focus();return}combos().forEach(function(c){var r=E.rows[key(c)];if(r&&!r.off)r.stock=String(Math.max(0,Math.round(num(s.value))))});return paintE()}
  if(k==='bulkprice'){combos().forEach(function(c){var r=E.rows[key(c)];if(r)r.price=''});return paintE()}
  if(k==='cimg')return pickImg(b.getAttribute('data-v'));
  if(k==='save')return saveE()}
function pickImg(v){var f=document.createElement('input');f.type='file';f.accept='image/*';f.onchange=function(){var file=f.files&&f.files[0];if(!file)return;var rd=new FileReader();rd.onload=function(){var im=new Image();im.onload=function(){var m=600,w=im.width,h=im.height,s=Math.min(1,m/Math.max(w,h)),c=document.createElement('canvas');c.width=Math.round(w*s);c.height=Math.round(h*s);var x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.drawImage(im,0,0,c.width,c.height);if(E){E.cimg[v]=c.toDataURL('image/jpeg',0.8);paintE()}};im.src=rd.result};rd.readAsDataURL(file)};f.click()}
function saveE(){var C=combos(),base=String(E.base||'').trim(),A=E.attrs.filter(function(a){return a.v.length});
  if(!base){toast('اسم المنتج مطلوب',false);return}if(!C.length){toast('أضف قيمة واحدة على الأقل لخاصية واحدة.',false);return}
  var live=C.filter(function(c){var r=E.rows[key(c)];return !(r&&r.off)});if(!live.length){toast('لا يوجد خيار مفعّل.',false);return}
  E.base=base;var mine=E.group?members(E.group):[],conv=E.conv?byName(E.conv):null,errs=[],bcs={};
  if(!E.group&&!conv&&members(base).length){toast('يوجد منتج له خيارات بهذا الاسم. عدّله من قائمة المنتجات.',false);return}
  live.forEach(function(c){var k=key(c),r=E.rows[k]||{},nm=r.pid||(conv&&E.convKey===k?conv.name:vname(c)),ex=byName(nm);
    if(!r.pid&&!(conv&&E.convKey===k)&&ex)errs.push('يوجد منتج باسم «'+nm+'».');
    var bc=String(r.bc||'').trim();if(bc){if(bcs[bc])errs.push('الباركود '+bc+' مكرر في الجدول.');bcs[bc]=1;
      var o=P().find(function(p){return p&&String(p.barcode||'')===bc});if(o&&o.name!==nm)errs.push('الباركود '+bc+' مستخدم للمنتج «'+o.name+'».')}});
  if(errs.length){toast(errs[0],false);return}
  var drop=C.filter(function(c){var r=E.rows[key(c)];return r&&r.off&&r.pid}).map(function(c){return E.rows[key(c)].pid});
  if(drop.length&&!confirm('سيُحذف '+drop.length+' خيار من المنتجات. الفواتير والطلبات السابقة لا تتأثر. هل تريد المتابعة؟'))return;
  var va=A.map(function(a){return a.n}),list=P(),hasImg=mine.some(function(p){return p.image}),added=0,first=true,cdone={};
  C.forEach(function(c){var k=key(c),r=E.rows[k]||{stock:'',price:'',bc:'',off:false};if(r.off)return;var vo={};va.forEach(function(a,i){vo[a]=c[i]});
    var p=r.pid?byName(r.pid):(conv&&E.convKey===k?conv:null);
    if(!p){p={name:vname(c),stock:0};list.push(p);added++}
    p.vg=base;p.va=va.slice();p.vo=vo;p.stock=Math.max(0,Math.round(num(r.stock)));
    setPrice(p,r.price!==''?r.price:E.price);if(num(E.cost)>0)setCost(p,E.cost);
    var bc=String(r.bc||'').trim();if(bc)p.barcode=bc;else delete p.barcode;
    if(E.img&&!hasImg&&first&&!p.image){p.image=E.img;hasImg=true}first=false;
    var ci=E.cimg[c[0]];if(ci&&!cdone[c[0]]){cdone[c[0]]=1;p.image=ci}});
  if(drop.length){var dk=drop.map(norm);D().products=list.filter(function(p){return !(p&&dk.indexOf(norm(p.name))>=0)})}
  persist();closeE();toast('حُفظ «'+base+'» بـ '+cnt(live.length)+' ✓')}

/* زر في نافذة «إضافة منتج» */
function inject(){var n=$('emd81Name');if(!n)return;var box=n.closest('.emd81-g');if(!box||box.parentNode.querySelector('.e450-open'))return;
  var b=document.createElement('button');b.type='button';b.className='e450-open';b.textContent='🎨 هل لهذا المنتج مقاسات أو ألوان؟';box.parentNode.insertBefore(b,box.nextSibling);
  b.addEventListener('click',function(){var g=function(i){var x=$(i);return x?x.value:''},im=document.querySelector('#emd81Prev img'),seed={name:g('emd81Name'),price:g('emd81Sale'),cost:g('emd81Cost'),stock:g('emd81Stock')==='0'?'':g('emd81Stock'),img:im?im.getAttribute('src'):''};
    var top=b;while(top.parentNode&&top.parentNode!==document.body)top=top.parentNode;if(top.parentNode===document.body)top.remove();openE(seed);setTimeout(function(){var x=$('e450Base');if(x&&!x.value)x.focus()},60)})}
function wrapAP(){var o=window.addProduct;if(typeof o==='function'&&!o.__e450){var w=function(){var r=o.apply(this,arguments);setTimeout(inject,0);return r};w.__e450=1;window.addProduct=w}}


/* الأحداث العامة */
document.addEventListener('click',function(e){var c=e.target.closest&&e.target.closest('[data-e450g]');if(!c)return;e.preventDefault();e.stopPropagation();pick(c.getAttribute('data-e450g'))},true);
document.addEventListener('keydown',function(e){var c=e.target&&e.target.closest&&e.target.closest('[data-e450g]');if(c&&(e.key==='Enter'||e.key===' ')){e.preventDefault();pick(c.getAttribute('data-e450g'))}});
window.addEventListener('keydown',function(e){if(e.key!=='Escape')return;var p=$('e450P'),q=$('e450E');if(p&&p.classList.contains('show')){e.stopImmediatePropagation();closeP()}else if(q&&q.classList.contains('show')){e.stopImmediatePropagation();closeE()}},true);
window.EMD450={matchText:matchText,collapse:collapse,card:card,label:label,lineName:lineName,tag:tag,members:members,open:openE,pick:pick,listPass:listPass};
})();

/* ---- emd439-js ---- */

(function(){
if(window.EMDBarcodeV439)return;
/* V439: ملصقات باركود وسعر للمنتجات — تُطبع على طابعة الملصقات عبر البلوتوث (V422) أو بالطباعة العادية */
var CK='emd439_cfg',CUR='ر.ع';
function $(id){return document.getElementById(id)}
function arr(x){return Array.isArray(x)?x:[]}
function num(v){var x=parseFloat(String(v==null?'':v).replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/[,،\s]/g,''));return isFinite(x)?x:0}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function norm(x){return String(x||'').trim().toLowerCase().replace(/\s+/g,' ')}
function toast(t){var e=document.createElement('div');e.className='emd103-toast';e.textContent=t;e.style.zIndex=13000;document.body.appendChild(e);setTimeout(function(){e.style.opacity='0'},2600);setTimeout(function(){e.remove()},3100)}
function prods(){return arr(window.db&&window.db.products).filter(function(p){return p&&String(p.name||'').trim()})}
function H(){return window.EMDLabelV418&&EMDLabelV418._h}
function store(){try{var p=window.EMDBusinessProfileV333&&EMDBusinessProfileV333.get();return String(p&&p.name||'').trim()}catch(e){return ''}}
function priceOf(p){var v=num(p.salePrice!=null?p.salePrice:(p.unitPrice!=null?p.unitPrice:(p.price!=null?p.price:p.defaultPrice)));if(v>0&&window.EMDPxV433)try{v=EMDPxV433.price(p,v)}catch(e){}return v>0?v:0}
function cfg(){var d={w:50,h:30,store:true,name:true,price:true,code:true};try{var k=JSON.parse(PLS.getItem(CK)||'null');if(k)for(var i in d)if(k[i]!=null)d[i]=k[i]}catch(e){}
  if(!PLS.getItem(CK)){try{var pc=window.EMDPrinterV422&&EMDPrinterV422.config();if(pc&&pc.head)d.w=Math.min(d.w,Math.round(pc.head/8))}catch(e){}}
  d.w=Math.max(20,Math.min(104,num(d.w)||50));d.h=Math.max(15,Math.min(150,num(d.h)||30));return d}
function saveCfg(c){try{PLS.setItem(CK,JSON.stringify(c))}catch(e){}}
function persist(){try{if(typeof window.save==='function')window.save();else PLS.setItem('emd_business_v1',JSON.stringify(window.db))}catch(e){}}

/* باركود داخلي فريد للمنتجات التي بلا باركود: 2 + سبعة أرقام */
function genCode(){var used={};prods().forEach(function(p){if(p.barcode)used[String(p.barcode)]=1});var n=Math.max(1000000,num(PLS.getItem('emd439_seq'))||1000000);
  do{n++}while(used['2'+n]);try{PLS.setItem('emd439_seq',String(n))}catch(e){}return '2'+n}

/* ---------- رسم الملصق ---------- */
/* Code 128: الأرقام تُرمَّز بالمجموعة C (رقمان في الرمز) فتأتي الخطوط أعرض وأسهل مسحًا؛ غير ذلك بالمجموعة B */
var T128=null;function tbl(){if(T128)return T128;var c=H().c128,ch=function(k){return String.fromCharCode(32+k)},T=[];for(var k=0;k<95;k++)T[k]=c(ch(k)).slice(11,22);
  for(var v=95;v<103;v++){out:for(var a=0;a<95;a++)for(var b=0;b<95;b++)if((104+a+2*b)%103===v){T[v]=c(ch(a)+ch(b)).slice(33,44);break out}}T[105]='11010011100';T.stop=c('A').slice(-13);return T128=T}
function bc(code){var h=H();if(!h)return '';if(!/^\d{4,}$/.test(code))return h.c128(code);var T=tbl(),v=[105],n=code.length-(code.length%2);for(var i=0;i<n;i+=2)v.push(+code.substr(i,2));if(code.length%2){v.push(100);v.push(code.charCodeAt(n)-32)}
  var sum=v[0];for(var j=1;j<v.length;j++)sum+=v[j]*j;v.push(sum%103);return v.map(function(x){return T[x]}).join('')+T.stop}

function fit(x,t,maxW,size,weight,min){var s=size;x.font=weight+' '+s+'px '+FONT;while(s>min&&x.measureText(t).width>maxW){s-=1;x.font=weight+' '+s+'px '+FONT}return s}
var FONT="'IBM Plex Sans Arabic','Noto Kufi Arabic',Tahoma,Arial,sans-serif";
function wrap2(x,t,maxW){var w=String(t).split(/\s+/),a='',b='';for(var i=0;i<w.length;i++){var tr=a?a+' '+w[i]:w[i];if(!b&&x.measureText(tr).width<=maxW)a=tr;else b=b?b+' '+w[i]:w[i]}return b?[a,b]:[a]}
function draw(p,c){var u=8,W=c.w*u,Ht=c.h*u,cv=document.createElement('canvas');cv.width=W;cv.height=Ht;var x=cv.getContext('2d');
  x.fillStyle='#fff';x.fillRect(0,0,W,Ht);x.fillStyle='#000';x.textAlign='center';x.textBaseline='top';x.direction='rtl';
  var P=Math.round(1.5*u),cw=W-2*P,y=P,code=String(p.barcode||'').trim(),h=H(),bars=c.code&&code&&h?bc(code):'',small=c.h<25;
  var codeH=bars?Math.max(small?5*u:7*u,Math.round(Ht*(small?0.32:0.36))):0,codeTxt=bars?Math.round(2.6*u):0,free=Ht-2*P-codeH-codeTxt;
  if(c.store&&!small&&store()&&free>5*u){var s0=fit(x,store(),cw,Math.round(2.6*u),600,14);x.fillText(store(),W/2,y);y+=s0+Math.round(0.6*u);free-=s0+0.6*u}
  if(c.name){var ns=Math.min(Math.round(3.6*u),Math.max(18,Math.round(free*(c.price?0.34:0.5))));if(small)ns=Math.min(ns,Math.round(2.4*u));x.font='700 '+ns+'px '+FONT;var L=wrap2(x,p.name,cw);if(small||(L.length>1&&free<ns*2+(c.price?ns*1.2:0))){L=[L.join(' ')]}
    L.forEach(function(t){var s=fit(x,t,cw,ns,700,14);x.fillText(t,W/2,y);y+=s+2})}
  if(c.price){var pr=priceOf(p),t=(pr?pr.toFixed(3):'—')+' '+CUR,room=Ht-P-codeH-codeTxt-y,ps=Math.min(Math.round(4.6*u),room-2);if(ps>=14){var s2=fit(x,t,cw,ps,900,12);x.fillText(t,W/2,y+Math.max(0,(room-s2)/2))}}
  if(bars){var mw=Math.max(1,Math.floor(cw/bars.length)),bw=bars.length*mw,x0=Math.round((W-bw)/2),by=Ht-P-codeTxt-codeH;
    for(var i=0;i<bars.length;i++)if(bars[i]==='1')x.fillRect(x0+i*mw,by,mw,codeH);
    x.font='600 '+Math.round(2.3*u)+'px Arial';x.fillText(code,W/2,by+codeH+2)}
  else if(c.code&&!code){x.font='500 '+Math.round(2*u)+'px '+FONT;x.fillText('بلا باركود',W/2,Ht-P-2.4*u)}
  return {cv:cv,wMm:c.w,hMm:c.h}}

/* ---------- الواجهة ---------- */
var S={q:'',sel:{},onlyNo:false,edit:null,err:''};
function ensure(){var ov=$('e439');if(ov)return ov;ov=document.createElement('div');ov.id='e439';ov.setAttribute('role','dialog');ov.setAttribute('aria-label','ملصقات الباركود');
  ov.innerHTML='<div class="sh"><div class="hd"><h2>🏷️ ملصقات الباركود والسعر</h2><button type="button" class="x" data-k="close" aria-label="إغلاق">✕</button></div><div class="bd" id="e439B"></div><div class="ft" id="e439F"></div></div>';
  document.body.appendChild(ov);ov.addEventListener('click',onClick);ov.addEventListener('keydown',function(e){if(e.target&&e.target.id==='e439bc'&&e.key==='Enter'){e.preventDefault();saveBc(e.target.value)}});ov.addEventListener('input',onInput);ov.addEventListener('change',onInput);return ov}
function list(){var q=norm(S.q);return prods().filter(function(p){if(S.onlyNo&&p.barcode)return false;return !q||norm(p.name).indexOf(q)>=0||String(p.barcode||'').indexOf(S.q.trim())>=0||norm(p.sku||p.code||'').indexOf(q)>=0}).sort(function(a,b){return String(a.name).localeCompare(String(b.name),'ar')})}
function keyOf(p){return String(p.uid||p.id||p.sku||p.name)}
function picked(){var m={};prods().forEach(function(p){m[keyOf(p)]=p});return Object.keys(S.sel).filter(function(k){return m[k]&&S.sel[k]>0}).map(function(k){return {p:m[k],n:S.sel[k]}})}
function render(){var c=cfg(),L=list(),P=picked(),noBc=prods().filter(function(p){return !p.barcode}).length,tot=P.reduce(function(a,x){return a+x.n},0);
  var h='<div class="bx"><h3>📐 المقاس والمحتوى</h3><div class="chips" style="margin-bottom:8px">'+[[50,30],[40,30],[50,25],[30,20]].map(function(s){return '<button type="button" class="chip'+(c.w===s[0]&&c.h===s[1]?' on':'')+'" data-k="size" data-v="'+s[0]+'x'+s[1]+'">'+s[0]+'×'+s[1]+' مم</button>'}).join('')+'</div>'+
    '<div class="g2"><label class="mut">العرض (مم)<input id="e439w" inputmode="numeric" value="'+c.w+'"></label><label class="mut">الارتفاع (مم)<input id="e439h" inputmode="numeric" value="'+c.h+'"></label></div>'+
    '<div class="chips" style="margin-top:8px">'+[['store','اسم المحل'],['name','اسم المنتج'],['price','السعر'],['code','الباركود']].map(function(o){return '<button type="button" class="chip'+(c[o[0]]?' on':'')+'" data-k="tog" data-v="'+o[0]+'">'+(c[o[0]]?'✓ ':'')+o[1]+'</button>'}).join('')+'</div></div>';
  h+='<div class="bx"><h3>👁️ معاينة</h3><div class="pv" id="e439Pv"></div></div>';
  h+='<div class="bx"><h3>📦 اختر المنتجات</h3><input id="e439Q" placeholder="ابحث بالاسم أو الباركود" value="'+esc(S.q)+'" autocomplete="off">'+
    '<div style="display:flex;gap:4px;flex-wrap:wrap;margin:6px 0"><button type="button" class="lk" data-k="all">تحديد الظاهر (1 لكل منتج)</button><button type="button" class="lk" data-k="stock">بعدد المخزون</button><button type="button" class="lk" data-k="none">إلغاء التحديد</button><button type="button" class="lk" data-k="onlyNo">'+(S.onlyNo?'عرض الكل':'بلا باركود فقط ('+noBc+')')+'</button></div>'+
    '<div class="mut" style="margin-bottom:6px">✏️ لإدخال باركود الكرتون: اضغط القلم بجانب المنتج، ثم اكتب الرقم أو امسحه بالقارئ أو بالكاميرا.</div>'+(noBc?'<div class="mut" style="background:#fffbeb;border-radius:10px;padding:8px;margin-bottom:6px">'+noBc+' منتج بلا باركود. <button type="button" class="lk" data-k="gen">إنشاء باركود تلقائي لها</button> ليُمسح في نقطة البيع.</div>':'')+
    (L.length?L.slice(0,300).map(function(p){var k=keyOf(p),n=S.sel[k]||0;return '<div class="pr"><input type="checkbox" data-k="ck" data-v="'+esc(k)+'"'+(n?' checked':'')+' aria-label="تحديد"><div class="nm"><b>'+esc(p.name)+'</b><small>'+(p.barcode?'<span dir="ltr">'+esc(p.barcode)+'</span>':'<span class="nob">بلا باركود</span>')+' · '+(priceOf(p)?priceOf(p).toFixed(3)+' '+CUR:'بلا سعر')+' · المخزون '+num(p.stock)+'</small></div>'+
      '<button type="button" class="eb" data-k="edit" data-v="'+esc(k)+'" aria-label="إدخال أو تعديل الباركود" title="إدخال الباركود">✏️</button>'+(n?'<div class="q"><button type="button" data-k="dec" data-v="'+esc(k)+'" aria-label="إنقاص">−</button><input data-k="qty" data-v="'+esc(k)+'" inputmode="numeric" value="'+n+'"><button type="button" data-k="inc" data-v="'+esc(k)+'" aria-label="زيادة">+</button></div>':'')+'</div>'+(S.edit===k?edHtml(p):'')}).join(''):'<div class="mut">لا توجد منتجات مطابقة.</div>')+'</div>';
  var B=$('e439B'),a=document.activeElement,fid=a&&a.id,pos=fid==='e439Q'&&a.selectionStart;B.innerHTML=h;if(fid==='e439Q'){var qi=$('e439Q');qi.focus();try{qi.setSelectionRange(pos,pos)}catch(e){}}
  var pv=$('e439Pv'),sample=(P[0]&&P[0].p)||L[0]||{name:'اسم المنتج',price:3.5,barcode:'21000001'};pv.appendChild(draw(sample,c).cv);
  $('e439F').innerHTML='<button type="button" class="go" data-k="bt"'+(tot?'':' disabled')+'>🔵 طباعة '+tot+' ملصق عبر البلوتوث</button><button type="button" class="go l" data-k="pr"'+(tot?'':' disabled')+'>🖨️ طباعة عادية / حفظ PDF</button>'}
function edHtml(p){return '<div class="ed"><input id="e439bc" inputmode="numeric" autocomplete="off" placeholder="اكتب رقم الباركود أو امسحه بالقارئ" value="'+esc(p.barcode||'')+'" aria-label="رقم الباركود"><button type="button" data-k="cam" aria-label="مسح بالكاميرا">📷</button><button type="button" class="ok" data-k="savebc">حفظ</button><button type="button" data-k="canbc">إلغاء</button>'+(S.err?'<div style="width:100%;color:#b91c1c;font-size:13px">'+esc(S.err)+'</div>':'')+'</div>'}
function byKey(k){return prods().find(function(p){return keyOf(p)===k})}
function saveBc(v){var p=byKey(S.edit);if(!p)return;v=String(v==null?'':v).trim().replace(/\s+/g,'');
  if(v&&!/^[\x21-\x7e]{3,40}$/.test(v)){S.err='الباركود يجب أن يكون أرقامًا أو حروفًا إنجليزية (من 3 إلى 40 خانة).';return render()}
  var dup=v&&prods().find(function(x){return x!==p&&String(x.barcode||'')===v});if(dup){S.err='هذا الباركود مستخدم للمنتج «'+dup.name+'».';return render()}
  p.barcode=v;p.updatedAt=new Date().toISOString();persist();S.edit=null;S.err='';toast(v?'✓ حُفظ باركود «'+p.name+'»':'✓ حُذف الباركود');render()}
var cam=null;
function camOpen(){if(!('BarcodeDetector' in window)){toast('مسح الكاميرا غير مدعوم في هذا المتصفح. استخدم Chrome على الأندرويد، أو اكتب الرقم.');return}
  if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){toast('الكاميرا غير متاحة هنا');return}
  var o=document.createElement('div');o.className='e419-cam';o.style.zIndex=13000;o.setAttribute('role','dialog');o.setAttribute('aria-label','مسح باركود الكرتون');
  o.innerHTML='<video playsinline muted></video><div class="e419-frame" aria-hidden="true"></div><div class="e419-cbar"><span>وجّه الكاميرا إلى باركود الكرتون</span><button type="button" data-x="1">إغلاق</button></div>';
  document.body.appendChild(o);var v=o.querySelector('video'),stream=null,det=null,stop=false;
  cam={close:function(){stop=true;try{stream&&stream.getTracks().forEach(function(t){t.stop()})}catch(e){}o.remove();cam=null}};
  o.addEventListener('click',function(e){if(e.target.closest('[data-x]'))cam.close()});
  BarcodeDetector.getSupportedFormats().then(function(f){var want=['ean_13','ean_8','upc_a','upc_e','code_128','code_39','itf','qr_code'].filter(function(x){return f.indexOf(x)>=0});det=new BarcodeDetector({formats:want.length?want:undefined})}).catch(function(){det=new BarcodeDetector()}).then(function(){
    return navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'},audio:false})}).then(function(st){stream=st;v.srcObject=st;return v.play()}).then(function(){
    (function loop(){if(stop)return;det.detect(v).then(function(r){if(r&&r.length&&r[0].rawValue){var c=r[0].rawValue;cam.close();var i=$('e439bc');if(i)i.value=c;try{navigator.vibrate&&navigator.vibrate(60)}catch(e){}toast('تمت قراءة الرقم: '+c+' — اضغط «حفظ»');return}setTimeout(loop,180)}).catch(function(){setTimeout(loop,300)})})()})
  .catch(function(){toast('لم نتمكن من فتح الكاميرا. اسمح للتطبيق باستخدامها.');cam&&cam.close()})}
function labels(){var c=cfg(),out=[];picked().forEach(function(x){var one=draw(x.p,c);for(var i=0;i<x.n;i++)out.push(one)});return out}
function onClick(e){var t=e.target.closest('[data-k]');if(!t)return;var k=t.getAttribute('data-k'),v=t.getAttribute('data-v'),c=cfg();
  if(k==='close'){$('e439').classList.remove('show');return}
  if(k==='edit'){S.edit=S.edit===v?null:v;S.err='';render();var i=$('e439bc');if(i){i.focus();try{i.select()}catch(x){}}return}
  if(k==='canbc'){S.edit=null;S.err='';return render()}
  if(k==='savebc'){var bi=$('e439bc');return saveBc(bi?bi.value:'')}
  if(k==='cam'){return camOpen()}
  if(k==='size'){var s=v.split('x');c.w=+s[0];c.h=+s[1];saveCfg(c);return render()}
  if(k==='tog'){c[v]=!c[v];saveCfg(c);return render()}
  if(k==='ck'){if(t.checked)S.sel[v]=S.sel[v]||1;else delete S.sel[v];return render()}
  if(k==='inc'||k==='dec'){S.sel[v]=Math.max(0,(S.sel[v]||0)+(k==='inc'?1:-1));if(!S.sel[v])delete S.sel[v];return render()}
  if(k==='all'){list().forEach(function(p){S.sel[keyOf(p)]=S.sel[keyOf(p)]||1});return render()}
  if(k==='stock'){list().forEach(function(p){var n=Math.max(0,Math.floor(num(p.stock)));if(n)S.sel[keyOf(p)]=Math.min(n,500);else delete S.sel[keyOf(p)]});return render()}
  if(k==='none'){S.sel={};return render()}
  if(k==='onlyNo'){S.onlyNo=!S.onlyNo;return render()}
  if(k==='gen'){var ps=prods().filter(function(p){return !p.barcode});if(!ps.length)return;if(!confirm('سيُضاف باركود داخلي لـ '+ps.length+' منتج بلا باركود. هل تريد المتابعة؟'))return;
    var at=new Date().toISOString();ps.forEach(function(p){p.barcode=genCode();p.updatedAt=at});persist();toast('✓ أُضيف باركود لـ '+ps.length+' منتج');S.onlyNo=false;return render()}
  if(k==='bt'){var L=labels();if(!L.length)return;if(L.length>200&&!confirm('ستُطبع '+L.length+' ملصقًا. هل تريد المتابعة؟'))return;if(!window.EMDPrinterV422){toast('الطباعة عبر البلوتوث غير متاحة في هذه النسخة');return}
    EMDPrinterV422.print(L);return}
  if(k==='pr'){printPlain();return}}
function onInput(e){var t=e.target;if(t.id==='e439Q'){S.q=t.value;render();return}
  if(t.id==='e439w'||t.id==='e439h'){if(e.type!=='change')return;var c=cfg();c[t.id==='e439w'?'w':'h']=num(t.value);saveCfg(c);render();return}
  if(t.getAttribute('data-k')==='qty'&&e.type==='change'){var n=Math.max(0,Math.floor(num(t.value)));var v=t.getAttribute('data-v');if(n)S.sel[v]=Math.min(n,999);else delete S.sel[v];render()}}
function printPlain(){var L=labels();if(!L.length)return;var c=cfg();
  var html='<!doctype html><html dir="rtl"><head><meta charset="utf-8"><title>ملصقات</title><style>@page{size:'+c.w+'mm '+c.h+'mm;margin:0}body{margin:0}img{display:block;width:'+c.w+'mm;height:'+c.h+'mm;page-break-after:always}</style></head><body>'+L.map(function(l){return '<img src="'+l.cv.toDataURL('image/png')+'">'}).join('')+'</body></html>';
  var f=document.createElement('iframe');f.style.cssText='position:fixed;width:0;height:0;border:0;opacity:0';document.body.appendChild(f);var w=f.contentWindow;w.document.open();w.document.write(html);w.document.close();
  setTimeout(function(){try{w.focus();w.print()}catch(e){toast('تعذّرت الطباعة')}setTimeout(function(){f.remove()},60000)},500)}
function open(keys){ensure().classList.add('show');if(keys)arr(keys).forEach(function(k){S.sel[k]=S.sel[k]||1});render()}

/* زر في شاشة المنتجات بجانب «استيراد من Excel» */
function addBtn(){var sec=$('products');if(!sec||sec.querySelector('.e439-btn'))return;var ref=sec.querySelector('.e421-btn');var row=ref?ref.parentNode:sec.querySelector('.row');if(!row)return;
  var b=document.createElement('button');b.type='button';b.className='secondary e439-btn';b.dataset.v47='1';b.textContent='🏷️ ملصقات الباركود';b.addEventListener('click',function(){open()});
  if(ref&&ref.nextSibling)row.insertBefore(b,ref.nextSibling);else row.appendChild(b)}

window.EMDBarcodeV439={open:open,draw:draw,cfg:cfg};
})();

/* ---- EMD-V421-import ---- */

(function(){'use strict';if(window.__EMD_V421__)return;window.__EMD_V421__=1;
function $(i){return document.getElementById(i)}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function ls(k,v){try{if(v===undefined)return PLS.getItem(k);if(v===null)PLS.removeItem(k);else PLS.setItem(k,v)}catch(e){return null}}
function J(k,d){try{var x=JSON.parse(ls(k)||'null');return x==null?d:x}catch(e){return d}}
function D(){return window.db}
function r3(v){return Math.round(v*1000)/1000}
function f3(v){return (Number(v)||0).toFixed(3)}
function n52(s){return String(s==null?'':s).trim().toLowerCase().replace(/\s+/g,' ')}
function digits(s){return String(s==null?'':s).replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/[۰-۹]/g,function(d){return '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)})}
/* رقم من خلية: يقبل الأرقام العربية، الفاصلة العشرية، ورموز العملة. يعيد null إن كانت الخلية فارغة و NaN إن لم تكن رقمًا */
function numCell(v){if(typeof v==='number')return v;var s=digits(v).trim();if(!s)return null;
  s=s.replace(/٫/g,'.').replace(/[٬\s ]/g,'').replace(/ر\.?ع\.?|omr|ريال|ر\.س|sar|aed|\$|﷼/gi,'');
  if(s.indexOf(',')>=0)s=s.indexOf('.')>=0?s.replace(/,/g,''):s.replace(/,/g,'.');
  if(!/^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(s))return NaN;return parseFloat(s)}
/* الباركود نص دائمًا: 6.281E+12 → 6281000000000 */
function codeCell(v){var s=digits(v).trim();if(/^\d+(\.\d+)?e\+?\d+$/i.test(s)){var n=Number(s);if(isFinite(n))try{s=BigInt(Math.round(n)).toString()}catch(e){s=n.toFixed(0)}}else if(/^\d+\.0+$/.test(s))s=s.replace(/\.0+$/,'');return s}
function toast(t,ok){[].forEach.call(document.querySelectorAll('.e421-toast'),function(x){x.remove()});var d=document.createElement('div');d.className='e421-toast'+(ok===false?' bad':'');d.textContent=t;document.body.appendChild(d);setTimeout(function(){d.remove()},2600)}

/* ===== قراءة ملف ZIP (‎.xlsx‎) دون مكتبات خارجية ===== */
function unzip(buf){var u=new Uint8Array(buf),dv=new DataView(buf),e=-1;
  for(var i=u.length-22;i>=Math.max(0,u.length-70000);i--){if(dv.getUint32(i,true)===0x06054b50){e=i;break}}
  if(e<0)throw new Error('zip');var n=dv.getUint16(e+10,true),p=dv.getUint32(e+16,true),td=new TextDecoder('utf-8'),out={};
  for(var k=0;k<n;k++){if(dv.getUint32(p,true)!==0x02014b50)break;var m=dv.getUint16(p+10,true),cs=dv.getUint32(p+20,true),nl=dv.getUint16(p+28,true),xl=dv.getUint16(p+30,true),cl=dv.getUint16(p+32,true),lo=dv.getUint32(p+42,true);
    out[td.decode(u.subarray(p+46,p+46+nl)).replace(/\\/g,'/')]={m:m,cs:cs,lo:lo};p+=46+nl+xl+cl}
  return {names:Object.keys(out),get:function(name){var f=out[name];if(!f){var low=name.toLowerCase();Object.keys(out).some(function(k){if(k.toLowerCase()===low){f=out[k];return true}})}if(!f)return Promise.resolve(null);
    var a=f.lo+30+dv.getUint16(f.lo+26,true)+dv.getUint16(f.lo+28,true),data=u.subarray(a,a+f.cs);
    if(f.m===0)return Promise.resolve(td.decode(data));
    if(f.m!==8)return Promise.reject(new Error('method'));
    if(typeof DecompressionStream==='undefined')return Promise.reject(new Error('nods'));
    return new Response(new Blob([data]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).arrayBuffer().then(function(b){return td.decode(b)})}}}
function xml(s){return new DOMParser().parseFromString(s,'application/xml')}
function tags(n,t){return n?[].slice.call(n.getElementsByTagNameNS('*',t)):[]}
function attr(n,local){if(!n||!n.attributes)return null;for(var i=0;i<n.attributes.length;i++){var a=n.attributes[i];if((a.localName||a.name)===local)return a.value}return null}
function txt(n){return tags(n,'t').map(function(t){return t.textContent}).join('')}
function colIdx(ref){var m=/^([A-Z]+)/i.exec(ref||'');if(!m)return -1;var s=m[1].toUpperCase(),c=0;for(var i=0;i<s.length;i++)c=c*26+(s.charCodeAt(i)-64);return c-1}
function colName(i){var s='';i++;while(i>0){var r=(i-1)%26;s=String.fromCharCode(65+r)+s;i=Math.floor((i-1)/26)}return s}
function readXlsx(buf){var z;try{z=unzip(buf)}catch(e){return Promise.reject(new Error('notzip'))}
  return Promise.all([z.get('xl/workbook.xml'),z.get('xl/_rels/workbook.xml.rels'),z.get('xl/sharedStrings.xml')]).then(function(r){
    var shared=r[2]?tags(xml(r[2]),'si').map(txt):[],rel={},list=[];
    if(r[1])tags(xml(r[1]),'Relationship').forEach(function(x){var t=x.getAttribute('Target')||'';t=t.charAt(0)==='/'?t.slice(1):'xl/'+t.replace(/^\.\//,'');rel[x.getAttribute('Id')]=t});
    if(r[0])tags(xml(r[0]),'sheet').forEach(function(s){var id=attr(s,'id');if(rel[id]&&!/hidden/i.test(s.getAttribute('state')||''))list.push({name:s.getAttribute('name')||'',path:rel[id]})});
    if(!list.length)z.names.filter(function(n){return /^xl\/worksheets\/[^/]+\.xml$/i.test(n)}).sort().forEach(function(n,i){list.push({name:'ورقة '+(i+1),path:n})});
    if(!list.length)throw new Error('nosheet');
    return Promise.all(list.map(function(s){return z.get(s.path).then(function(x){return {name:s.name,rows:x?sheetRows(xml(x),shared):[]}})}))})}
function sheetRows(doc,shared){var rows=[],next=0;
  tags(doc,'row').forEach(function(r){var ri=parseInt(r.getAttribute('r'),10);ri=isFinite(ri)?ri-1:next;next=ri+1;var row=[],ci=0;
    tags(r,'c').forEach(function(c){var ref=c.getAttribute('r'),i=ref?colIdx(ref):ci;ci=i+1;var t=c.getAttribute('t')||'',v=tags(c,'v')[0],val='';
      if(t==='s')val=v?(shared[parseInt(v.textContent,10)]||''):'';else if(t==='inlineStr')val=txt(tags(c,'is')[0]);else if(t==='b')val=v&&v.textContent==='1'?'نعم':'لا';else val=v?v.textContent:'';
      row[i]=val});
    for(var j=0;j<row.length;j++)if(row[j]==null)row[j]='';rows[ri]=row});
  for(var k=0;k<rows.length;k++)if(!rows[k])rows[k]=[];return rows}
/* ===== CSV / نص ملصوق ===== */
function decodeText(buf){var u=new Uint8Array(buf),s;
  if(u[0]===0xFF&&u[1]===0xFE)return new TextDecoder('utf-16le').decode(u.subarray(2));if(u[0]===0xFE&&u[1]===0xFF)return new TextDecoder('utf-16be').decode(u.subarray(2));
  try{s=new TextDecoder('utf-8',{fatal:true}).decode(u)}catch(e){try{s=new TextDecoder('windows-1256').decode(u)}catch(x){s=new TextDecoder('utf-8').decode(u)}}
  return s.replace(/^﻿/,'')}
function parseCSV(s){var first=(s.split(/\r?\n/)[0]||''),cand=['\t',';',',','|'],d=',',best=-1;
  cand.forEach(function(c){var n=first.split(c).length;if(n>best){best=n;d=c}});
  var rows=[],row=[],f='',q=false;for(var i=0;i<s.length;i++){var ch=s[i];
    if(q){if(ch==='"'){if(s[i+1]==='"'){f+='"';i++}else q=false}else f+=ch}
    else if(ch==='"'&&f==='')q=true;else if(ch===d){row.push(f);f=''}else if(ch==='\n'||ch==='\r'){if(ch==='\r'&&s[i+1]==='\n')i++;row.push(f);rows.push(row);row=[];f=''}else f+=ch}
  if(f!==''||row.length){row.push(f);rows.push(row)}return rows}

/* ===== التعرّف على الأعمدة ===== */
var FIELDS=[
  {k:'name',l:'اسم المنتج',req:1},
  {k:'barcode',l:'الباركود'},
  {k:'sku',l:'رمز المنتج (SKU)'},
  {k:'price',l:'سعر البيع'},
  {k:'cost',l:'تكلفة الشراء'},
  {k:'qty',l:'الكمية'},
  {k:'category',l:'التصنيف'},
  {k:'color',l:'اللون'},
  {k:'size',l:'المقاس'}];
/* الترتيب مهم: «سعر الشراء» تكلفة قبل أن تكون سعرًا، و«باركود» قبل «كود» */
var SYN=[['cost',['تكلفه','سعرالشراء','الشراء','شراء','cost','purchase','buyprice']],
  ['color',['لون','color','colour']],
  ['size',['مقاس','حجم','size']],
  ['barcode',['باركود','الرمزالشريطي','barcode','ean','upc','gtin']],
  ['sku',['sku','رمزالمنتج','رقمالصنف','رقمالمنتج','الكود','كود','code','ref','رمز']],
  ['qty',['كميه','مخزون','العدد','الرصيد','رصيد','qty','quantity','stock','onhand','count']],
  ['category',['تصنيف','فئه','القسم','قسم','مجموعه','category','group','type','نوع']],
  ['price',['سعرالبيع','السعر','سعر','بيع','price','sale','retail','selling','mrp']],
  ['name',['اسم','منتج','الصنف','صنف','بيان','وصف','name','product','item','title','description']]];
function hnorm(s){return String(s==null?'':s).toLowerCase().replace(/[ً-ٰٟـ]/g,'').replace(/[أإآٱ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').replace(/[^a-z0-9ء-ي]/g,'')}
function fieldOf(h){var n=hnorm(h);if(!n)return null;for(var i=0;i<SYN.length;i++)for(var j=0;j<SYN[i][1].length;j++)if(n.indexOf(SYN[i][1][j])>=0)return SYN[i][0];return null}
function guessHeader(rows){var best=-1,bi=0;for(var r=0;r<Math.min(rows.length,15);r++){var sc=0;(rows[r]||[]).forEach(function(c){if(fieldOf(c))sc++});if(sc>best){best=sc;bi=r}}return best>0?bi:-1}
function guessMap(head){var map={},used={};(head||[]).forEach(function(h,i){var f=fieldOf(h);if(f&&map[f]==null&&!used[i]){map[f]=i;used[i]=1}});return map}

/* ===== الحالة ===== */
var ST=null;
function reset(){ST={step:1,file:'',sheets:[],si:0,hr:0,map:{},rows:[],plan:null,filter:'all',more:300,exist:'update',qty:'set',done:null}}
function sheet(){return ST.sheets[ST.si]||{rows:[]}}
function ncols(){var n=0;sheet().rows.forEach(function(r){if(r.length>n)n=r.length});return n}
function headers(){var h=ST.hr>=0?(sheet().rows[ST.hr]||[]):[],out=[];for(var i=0;i<ncols();i++){var t=String(h[i]==null?'':h[i]).trim();out.push(t?t:'العمود '+colName(i))}return out}
function dataRows(){return sheet().rows.slice(ST.hr+1)}
function loaded(name,sheets){ST.file=name;ST.sheets=sheets.filter(function(s){return s.rows.some(function(r){return r.some(function(c){return String(c).trim()})})});
  if(!ST.sheets.length){toast('الملف فارغ، فلم يُعثر فيه على بيانات',false);return}
  ST.si=0;var bs=-1;ST.sheets.forEach(function(s,i){var h=guessHeader(s.rows);if(h>=0&&bs<0)bs=i});if(bs>=0)ST.si=bs;autoMap();ST.step=2;draw()}
function autoMap(){ST.hr=guessHeader(sheet().rows);ST.map=ST.hr>=0?guessMap(sheet().rows[ST.hr]):{};if(ST.hr<0&&ncols()>0)ST.map={name:0}}
function readFile(f){if(!f)return;var nm=f.name||'ملف';if(/\.xls$/i.test(nm)&&!/\.xlsx$/i.test(nm)){toast('صيغة ‎.xls‎ القديمة غير مدعومة. افتح الملف في Excel واحفظه بصيغة ‎.xlsx‎ أو ‎.csv‎',false);return}
  if(f.size>15*1024*1024){toast('الملف كبير جدًا (الحد 15 ميغابايت)',false);return}
  busy(true);f.arrayBuffer().then(function(buf){var u=new Uint8Array(buf.slice(0,4));
    if(u[0]===0x50&&u[1]===0x4B)return readXlsx(buf).then(function(sh){loaded(nm,sh)});
    if(u[0]===0xD0&&u[1]===0xCF){throw new Error('xls')}
    loaded(nm,[{name:'ورقة 1',rows:parseCSV(decodeText(buf))}])}).catch(function(e){var m=e&&e.message;
    toast(m==='xls'?'صيغة ‎.xls‎ القديمة غير مدعومة. احفظ الملف من Excel بصيغة ‎.xlsx‎':m==='nods'?'المتصفح قديم ولا يقرأ ملفات ‎.xlsx‎. حدّثه أو احفظ الملف بصيغة ‎.csv‎':'تعذّرت قراءة الملف. تأكد أنه ملف Excel ‎.xlsx‎ أو ‎.csv‎',false)}).then(function(){busy(false)})}
function busy(b){var w=$('e421');if(w)w.classList.toggle('busy',!!b)}

/* ===== خطة الاستيراد ===== */
function products(){var d=D()||{};if(!Array.isArray(d.products))d.products=[];return d.products}
function pPrice(p){return Number(p.salePrice||p.unitPrice||p.price||p.defaultPrice)||0}
function pCost(p){return Number(p.costPrice||p.purchasePrice||p.cost)||0}
function build(){var P=products(),byBar={},bySku={},byName={},m=ST.map,rows=dataRows(),out=[],seen={};
  P.forEach(function(p,i){if(!p)return;if(p.barcode)byBar[String(p.barcode)]=i;var s=p.sku||p.code;if(s)bySku[n52(s)]=i;if(p.name)byName[n52(p.name)]=i});
  function g(r,k){return m[k]==null?'':String(r[m[k]]==null?'':r[m[k]]).trim()}
  rows.forEach(function(r,ix){var line=ST.hr+2+ix;if(!r.some(function(c){return String(c).trim()}))return;
    var it={line:line,name:g(r,'name'),barcode:m.barcode!=null?codeCell(g(r,'barcode')):'',sku:g(r,'sku'),category:g(r,'category'),err:'',warn:'',chg:[]};
    ['price','cost','qty'].forEach(function(k){var raw=g(r,k);if(m[k]==null||raw===''){it[k]=null;return}var v=numCell(raw);if(isNaN(v)||v<0){it.err=it.err||('«'+raw+'» ليس رقمًا صحيحًا في عمود '+FIELDS.filter(function(f){return f.k===k})[0].l);it[k]=null}else it[k]=k==='qty'?r3(v):r3(v)});
    if(!it.name&&!it.err)it.err='اسم المنتج فارغ';
    var vc=g(r,'color'),vs=g(r,'size');if(it.name&&(vc||vs)){it.base=it.name;it.va=[];it.vo={};if(vc){it.va.push('اللون');it.vo['اللون']=vc}if(vs){it.va.push('المقاس');it.vo['المقاس']=vs}it.name=it.base+' - '+[vc,vs].filter(Boolean).join(' - ')}
    var key=it.barcode?'b:'+it.barcode:'n:'+n52(it.name);
    if(!it.err&&seen[key]!=null){out[seen[key]].err='مكرر في الملف (السطر '+line+' هو المعتمد)';out[seen[key]].dup=1}
    if(!it.err)seen[key]=out.length;
    var idx=null;if(it.barcode&&byBar[it.barcode]!=null)idx=byBar[it.barcode];else if(it.sku&&bySku[n52(it.sku)]!=null)idx=bySku[n52(it.sku)];else if(it.name&&byName[n52(it.name)]!=null)idx=byName[n52(it.name)];
    if(idx!=null){var p=P[idx];it.idx=idx;it.st='upd';
      if(it.name&&n52(it.name)!==n52(p.name))it.warn='الاسم في الملف «'+it.name+'»، وسيبقى الاسم الحالي';
      if(it.barcode&&String(p.barcode||'')!==it.barcode){var o=byBar[it.barcode];if(o!=null&&o!==idx)it.err=it.err||'الباركود مستخدم لمنتج آخر: «'+P[o].name+'»';else it.chg.push(['الباركود',p.barcode||'—',it.barcode])}
      if(it.sku&&String(p.sku||p.code||'')!==it.sku)it.chg.push(['الرمز',p.sku||p.code||'—',it.sku]);
      if(it.price!=null&&r3(pPrice(p))!==it.price)it.chg.push(['السعر',f3(pPrice(p)),f3(it.price)]);
      if(it.cost!=null&&r3(pCost(p))!==it.cost)it.chg.push(['التكلفة',f3(pCost(p)),f3(it.cost)]);
      if(it.category&&String(p.category||'')!==it.category)it.chg.push(['التصنيف',p.category||'—',it.category]);
      if(it.qty!=null){var cur=Number(p.stock)||0,nq=ST.qty==='add'?r3(cur+it.qty):it.qty;if(nq!==cur)it.chg.push(['الكمية',String(cur),String(nq)])}
      if(!it.err&&!it.chg.length)it.st='same'}
    else{it.st='new';if(it.barcode&&byBar[it.barcode]!=null)it.err=it.err||'الباركود مستخدم لمنتج آخر'}
    if(it.err)it.st='err';out.push(it)});
  out.forEach(function(i){if(i.err)i.st='err'});
  var c={all:out.length,new:0,upd:0,same:0,err:0};out.forEach(function(i){c[i.st]++});ST.plan={items:out,c:c}}
function apply(){var P=products(),items=ST.plan.items,undo={at:new Date().toISOString(),file:ST.file,added:[],updated:[]},na=0,nu=0;
  var F=['stock','salePrice','unitPrice','price','defaultPrice','costPrice','purchasePrice','category','barcode','sku'];
  items.forEach(function(it){if(it.st==='new'){var p={name:it.name,stock:it.qty!=null?it.qty:0};
      if(it.price!=null&&it.price>0){p.salePrice=it.price;p.unitPrice=it.price;p.price=it.price;p.defaultPrice=it.price}
      if(it.cost!=null&&it.cost>0){p.costPrice=it.cost;p.purchasePrice=it.cost}
      if(it.barcode)p.barcode=it.barcode;if(it.sku)p.sku=it.sku;if(it.category)p.category=it.category;p.importedAt=undo.at;if(it.vo){p.vg=it.base;p.va=it.va;p.vo=it.vo}
      P.push(p);undo.added.push(it.name);na++}
    else if(it.st==='upd'&&ST.exist==='update'){var q=P[it.idx];if(!q)return;var b={};F.forEach(function(k){b[k]=q.hasOwnProperty(k)?q[k]:null});undo.updated.push({name:q.name,before:b});
      if(it.price!=null){q.salePrice=it.price;q.unitPrice=it.price;q.price=it.price;q.defaultPrice=it.price}
      if(it.cost!=null){q.costPrice=it.cost;q.purchasePrice=it.cost}
      if(it.qty!=null)q.stock=ST.qty==='add'?r3((Number(q.stock)||0)+it.qty):it.qty;
      if(it.barcode)q.barcode=it.barcode;if(it.sku)q.sku=it.sku;if(it.category)q.category=it.category;nu++}});
  ls('emd421_undo',JSON.stringify(undo));persist();
  var log=J('emd421_log',[]);if(!Array.isArray(log))log=[];log.unshift({at:undo.at,file:ST.file,added:na,updated:nu});ls('emd421_log',JSON.stringify(log.slice(0,30)));
  ST.done={added:na,updated:nu};ST.step=4;draw()}
function undoLast(){var u=J('emd421_undo',null);if(!u)return;var P=products(),names={};u.added.forEach(function(n){names[n52(n)]=1});
  var d=D();d.products=P.filter(function(p){return !(p&&names[n52(p.name)]&&p.importedAt===u.at)});
  u.updated.forEach(function(x){var q=d.products.find(function(p){return p&&n52(p.name)===n52(x.name)});if(!q)return;Object.keys(x.before).forEach(function(k){if(x.before[k]===null)delete q[k];else q[k]=x.before[k]})});
  ls('emd421_undo',null);persist();toast('أُلغي آخر استيراد، وعادت المنتجات كما كانت ✓');reset();draw()}
function persist(){try{if(typeof window.save==='function')window.save();else PLS.setItem('emd_business_v1',JSON.stringify(D()))}catch(e){}try{if(typeof window.render==='function')window.render()}catch(e){}try{if(typeof window.renderProducts==='function')window.renderProducts()}catch(e){}}

/* ===== النموذج الجاهز (‎.xlsx‎ حقيقي) ===== */
var CRC=null;function crc32(u){if(!CRC){CRC=new Uint32Array(256);for(var n=0;n<256;n++){var c=n;for(var k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;CRC[n]=c>>>0}}var x=0xFFFFFFFF;for(var i=0;i<u.length;i++)x=CRC[(x^u[i])&255]^(x>>>8);return (x^0xFFFFFFFF)>>>0}
function zip(files){var te=new TextEncoder(),parts=[],cd=[],off=0;
  files.forEach(function(f){var nb=te.encode(f[0]),db=te.encode(f[1]),c=crc32(db),h=new DataView(new ArrayBuffer(30));
    h.setUint32(0,0x04034b50,true);h.setUint16(4,20,true);h.setUint16(6,0x0800,true);h.setUint32(14,c,true);h.setUint32(18,db.length,true);h.setUint32(22,db.length,true);h.setUint16(26,nb.length,true);
    var e=new DataView(new ArrayBuffer(46));e.setUint32(0,0x02014b50,true);e.setUint16(4,20,true);e.setUint16(6,20,true);e.setUint16(8,0x0800,true);e.setUint32(16,c,true);e.setUint32(20,db.length,true);e.setUint32(24,db.length,true);e.setUint16(28,nb.length,true);e.setUint32(42,off,true);
    parts.push(new Uint8Array(h.buffer),nb,db);cd.push(new Uint8Array(e.buffer),nb);off+=30+nb.length+db.length});
  var cs=0;cd.forEach(function(p){cs+=p.length});var z=new DataView(new ArrayBuffer(22));z.setUint32(0,0x06054b50,true);z.setUint16(8,files.length,true);z.setUint16(10,files.length,true);z.setUint32(12,cs,true);z.setUint32(16,off,true);
  return new Blob(parts.concat(cd,[new Uint8Array(z.buffer)]),{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})}
function xe(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function template(){var H=['اسم المنتج','الباركود','سعر البيع','تكلفة الشراء','الكمية','التصنيف'],
  R=[['عطر عود ملكي 100 مل','6281000000012',25,14.5,12,'عطور'],['بخور كمبودي فاخر','6281000000029',8.5,4,30,'بخور'],['علبة هدايا صغيرة','',3,1.2,50,'هدايا']];
  function cell(v,ci,ri,s){var ref=colName(ci)+(ri+1);return typeof v==='number'?'<c r="'+ref+'"'+(s?' s="'+s+'"':'')+'><v>'+v+'</v></c>':'<c r="'+ref+'" t="inlineStr"'+(s?' s="'+s+'"':'')+'><is><t>'+xe(v)+'</t></is></c>'}
  var rows='<row r="1">'+H.map(function(h,i){return cell(h,i,0,1)}).join('')+'</row>'+R.map(function(r,ri){return '<row r="'+(ri+2)+'">'+r.map(function(v,ci){return cell(v,ci,ri+1,ci===1?2:0)}).join('')+'</row>'}).join('');
  var ns='http://schemas.openxmlformats.org/spreadsheetml/2006/main',rn='http://schemas.openxmlformats.org/officeDocument/2006/relationships',X='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
  var b=zip([['[Content_Types].xml',X+'<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>'],
    ['_rels/.rels',X+'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="'+rn+'/officeDocument" Target="xl/workbook.xml"/></Relationships>'],
    ['xl/workbook.xml',X+'<workbook xmlns="'+ns+'" xmlns:r="'+rn+'"><sheets><sheet name="المنتجات" sheetId="1" r:id="rId1"/></sheets></workbook>'],
    ['xl/_rels/workbook.xml.rels',X+'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="'+rn+'/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="'+rn+'/styles" Target="styles.xml"/></Relationships>'],
    ['xl/styles.xml',X+'<styleSheet xmlns="'+ns+'"><numFmts count="0"/><fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font></fonts><fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF1E3A8A"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="3"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/><xf numFmtId="49" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/></cellXfs></styleSheet>'],
    ['xl/worksheets/sheet1.xml',X+'<worksheet xmlns="'+ns+'" xmlns:r="'+rn+'"><sheetViews><sheetView rightToLeft="1" workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><cols><col min="1" max="1" width="30" customWidth="1"/><col min="2" max="2" width="18" style="2" customWidth="1"/><col min="3" max="6" width="14" customWidth="1"/></cols><sheetData>'+rows+'</sheetData></worksheet>']]);
  var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='نموذج-منتجات-EMD.xlsx';document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},1500);toast('نُزّل النموذج. املأه ثم ارفعه هنا')}

/* ===== الواجهة ===== */
var STEPS=['الملف','الأعمدة','المعاينة'];
function stepsBar(){return '<ol class="e421-steps">'+STEPS.map(function(s,i){var n=i+1,c=ST.step>n||ST.step===4?'done':ST.step===n?'cur':'';return '<li class="'+c+'"><span>'+(c==='done'?'✓':n)+'</span>'+s+'</li>'}).join('')+'</ol>'}
function s1(){var u=J('emd421_undo',null),h='<div class="e421-drop"><input type="file" id="e421File" accept=".xlsx,.csv,.tsv,.txt,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv" hidden>'+
  '<button type="button" class="e421-pick" data-a="pick"><span class="ic">📄</span><b>اختر ملف Excel أو CSV</b><small>‎.xlsx‎ · ‎.csv‎ — أو اسحب الملف إلى هنا</small></button></div>'+
  '<div class="e421-how"><b>كيف يعمل؟</b><ol><li>ارفع ملف منتجاتك كما هو، ولا يلزم ترتيب معيّن للأعمدة.</li><li>يتعرّف التطبيق على الأعمدة تلقائيًا، ويمكنك تعديلها.</li><li>تراجع المعاينة، ثم تحفظ. ويمكنك التراجع عن الاستيراد بعد ذلك.</li></ol></div>'+
  '<button type="button" class="e421-sec" data-a="tpl">⬇️ تنزيل نموذج Excel جاهز</button>'+
  '<details class="e421-paste"><summary>أو الصق الجدول مباشرة من Excel</summary><textarea id="e421Paste" dir="auto" placeholder="انسخ الخلايا من Excel (مع صف العناوين) والصقها هنا"></textarea><button type="button" class="e421-sec" data-a="paste">متابعة</button></details>';
  if(u)h+='<div class="e421-undo"><span>آخر استيراد: '+esc(new Date(u.at).toLocaleString('ar-OM',{day:'numeric',month:'short',hour:'numeric',minute:'2-digit'}))+' (جديد: '+u.added.length+'، محدَّث: '+u.updated.length+')</span><button type="button" data-a="undo">↩️ التراجع عنه</button></div>';
  return h}
function s2(){var hs=headers(),rows=dataRows(),sample=rows.filter(function(r){return r.some(function(c){return String(c).trim()})})[0]||[],h='';
  h+='<div class="e421-file"><span>📄</span><b>'+esc(ST.file)+'</b><small>عدد الصفوف: '+rows.filter(function(r){return r.some(function(c){return String(c).trim()})}).length+'</small></div>';
  if(ST.sheets.length>1)h+='<label class="e421-l">الورقة<select id="e421Sheet">'+ST.sheets.map(function(s,i){return '<option value="'+i+'"'+(i===ST.si?' selected':'')+'>'+esc(s.name)+'</option>'}).join('')+'</select></label>';
  var hr='<option value="-1"'+(ST.hr<0?' selected':'')+'>لا يوجد صف عناوين</option>';for(var r=0;r<Math.min(sheet().rows.length,15);r++)hr+='<option value="'+r+'"'+(r===ST.hr?' selected':'')+'>الصف '+(r+1)+': '+esc((sheet().rows[r]||[]).filter(function(c){return String(c).trim()}).slice(0,3).join('، ').slice(0,40))+'</option>';
  h+='<label class="e421-l">صف العناوين<select id="e421Hr">'+hr+'</select></label>';
  h+='<p class="e421-p">طابِق كل معلومة بعمودها في ملفك. ما لا يوجد في ملفك اتركه «غير موجود».</p><div class="e421-map">';
  FIELDS.forEach(function(f){var v=ST.map[f.k],opts='<option value="">— غير موجود —</option>'+hs.map(function(x,i){return '<option value="'+i+'"'+(v===i?' selected':'')+'>'+esc(x)+'</option>'}).join('');
    var sv=v!=null?String(sample[v]==null?'':sample[v]).trim():'';
    h+='<div class="e421-mf'+(v!=null?' on':'')+'"><label for="e421M_'+f.k+'">'+f.l+(f.req?' <i>*</i>':'')+'</label><select id="e421M_'+f.k+'" data-f="'+f.k+'">'+opts+'</select><small>'+(v!=null?(sv?'مثال: '+esc(sv.slice(0,40)):'العمود فارغ في أول صف'):'')+'</small></div>'});
  return h+'</div>'}
function badge(st){return {new:'<span class="e421-b new">جديد</span>',upd:'<span class="e421-b upd">تحديث</span>',same:'<span class="e421-b same">بلا تغيير</span>',err:'<span class="e421-b err">يُتخطّى</span>'}[st]}
function s3(){build();var c=ST.plan.c,C='ر.ع',h='';
  h+='<div class="e421-sum"><button type="button" data-a="f" data-v="new" class="'+(ST.filter==='new'?'sel':'')+'"><b>'+c.new+'</b><span>جديد</span></button><button type="button" data-a="f" data-v="upd" class="'+(ST.filter==='upd'?'sel':'')+'"><b>'+c.upd+'</b><span>تحديث</span></button><button type="button" data-a="f" data-v="same" class="'+(ST.filter==='same'?'sel':'')+'"><b>'+c.same+'</b><span>بلا تغيير</span></button><button type="button" data-a="f" data-v="err" class="'+(ST.filter==='err'?'sel':'')+(c.err?' bad':'')+'"><b>'+c.err+'</b><span>يُتخطّى</span></button></div>';
  if(c.upd||c.same||ST.map.qty!=null){h+='<details class="e421-opt"'+(c.upd?' open':'')+'><summary>⚙️ خيارات الاستيراد</summary>';
    if(c.upd)h+='<fieldset><legend>المنتجات الموجودة مسبقًا ('+c.upd+')</legend><label><input type="radio" name="e421Ex" value="update"'+(ST.exist==='update'?' checked':'')+'> تحديث بياناتها من الملف</label><label><input type="radio" name="e421Ex" value="skip"'+(ST.exist==='skip'?' checked':'')+'> تركها كما هي، وإضافة الجديد فقط</label></fieldset>';
    if(ST.map.qty!=null)h+='<fieldset><legend>عمود الكمية</legend><label><input type="radio" name="e421Q" value="set"'+(ST.qty==='set'?' checked':'')+'> الكمية في الملف هي المخزون الحالي</label><label><input type="radio" name="e421Q" value="add"'+(ST.qty==='add'?' checked':'')+'> إضافتها إلى المخزون الحالي (بضاعة واردة)</label></fieldset>';
    h+='<p class="e421-p">الخلايا الفارغة في الملف لا تمسح أي بيانات موجودة، ولا يتغيّر اسم أي منتج موجود.</p></details>'}
  var L=ST.plan.items.filter(function(i){return ST.filter==='all'||i.st===ST.filter});
  if(ST.filter!=='all')h+='<button type="button" class="e421-clr" data-a="f" data-v="all">عرض الكل ('+c.all+') ✕</button>';
  h+='<div class="e421-list">'+(L.length?L.slice(0,ST.more).map(function(i){var meta=[];if(i.barcode)meta.push('<span dir="ltr">'+esc(i.barcode)+'</span>');if(i.category)meta.push(esc(i.category));if(i.price!=null)meta.push('السعر '+f3(i.price));if(i.cost!=null)meta.push('التكلفة '+f3(i.cost));if(i.qty!=null)meta.push('الكمية '+i.qty);
    var st=i.st==='upd'&&ST.exist==='skip'?'same':i.st;
    return '<div class="e421-it '+st+'"><div class="t"><b>'+esc(i.name||'(بلا اسم)')+'</b>'+badge(st)+'</div><small class="m">السطر '+i.line+(meta.length?' · '+meta.join(' · '):'')+'</small>'+
      (i.err?'<small class="er">⚠️ '+esc(i.err)+'</small>':'')+(i.warn&&!i.err?'<small class="wr">'+esc(i.warn)+'</small>':'')+
      (i.st==='upd'&&ST.exist==='update'?'<div class="ch">'+i.chg.map(function(x){return '<span>'+x[0]+': <s>'+esc(x[1])+'</s> ← <b>'+esc(x[2])+'</b></span>'}).join('')+'</div>':'')+'</div>'}).join(''):'<div class="e421-empty">لا توجد صفوف هنا</div>')+'</div>';
  if(L.length>ST.more)h+='<button type="button" class="e421-sec" data-a="more">عرض المزيد ('+(L.length-ST.more)+')</button>';
  return h}
function s4(){var d=ST.done;return '<div class="e421-ok"><div class="ic">✓</div><h3>تم الاستيراد بنجاح</h3><div class="e421-res"><span><b>'+d.added+'</b>منتجات جديدة</span><span><b>'+d.updated+'</b>منتجات محدّثة</span></div><p class="e421-p">إن ظهر خطأ في البيانات يمكنك التراجع عن هذا الاستيراد كاملًا.</p><button type="button" class="e421-sec" data-a="undo">↩️ التراجع عن هذا الاستيراد</button></div>'}
function foot(){if(ST.step===1)return '';if(ST.step===4)return '<button type="button" class="e421-go" data-a="x">تم</button>';
  if(ST.step===2){var ok=ST.map.name!=null;return '<button type="button" class="e421-bk" data-a="back">رجوع</button><button type="button" class="e421-go" data-a="next"'+(ok?'':' disabled')+'>'+(ok?'التالي: المعاينة':'حدّد عمود اسم المنتج')+'</button>'}
  var c=ST.plan.c,n=c.new+(ST.exist==='update'?c.upd:0);return '<button type="button" class="e421-bk" data-a="back">رجوع</button><button type="button" class="e421-go" data-a="save"'+(n?'':' disabled')+'>'+(n?'💾 حفظ المنتجات ('+n+')':'لا يوجد ما يُحفظ')+'</button>'}
var win=null;
function draw(){if(!win)return;var b=ST.step===1?s1():ST.step===2?s2():ST.step===3?s3():s4();
  win.innerHTML='<div class="win"><div class="hd"><h2 id="e421T">📥 استيراد المنتجات من Excel</h2><button type="button" class="x" data-a="x" aria-label="إغلاق">✕</button></div>'+(ST.step<4?stepsBar():'')+'<div class="bd">'+b+'</div>'+(ST.step>1?'<div class="ft">'+foot()+'</div>':'')+'<div class="ld" aria-hidden="true"><span></span></div></div>';
  /* زر قديم (V47) يحوّل كل زر فيه كلمة «استيراد» إلى استيراد الطلبات؛ نستثني أزرارنا */
  [].forEach.call(win.querySelectorAll('button'),function(b){b.dataset.v47='1'})}
function open(){reset();if(!win){win=document.createElement('div');win.id='e421';win.setAttribute('role','dialog');win.setAttribute('aria-modal','true');win.setAttribute('aria-labelledby','e421T');document.body.appendChild(win);bind()}
  draw();win.classList.add('show');document.body.classList.add('e421-open');setTimeout(function(){var b=win.querySelector('[data-a="pick"]');b&&b.focus()},50)}
function close(){if(!win)return;win.classList.remove('show');document.body.classList.remove('e421-open')}
function bind(){
  win.addEventListener('click',function(e){if(e.target===win){close();return}var b=e.target.closest('[data-a]');if(!b||b.disabled)return;var a=b.getAttribute('data-a'),v=b.getAttribute('data-v');
    if(a==='x')close();else if(a==='pick')$('e421File').click();else if(a==='tpl')template();
    else if(a==='paste'){var t=($('e421Paste')||{}).value||'';if(!t.trim()){toast('الصق الجدول أولًا',false);return}loaded('جدول ملصوق',[{name:'ورقة 1',rows:parseCSV(t)}])}
    else if(a==='undo'){if(confirm('سيُحذف ما أُضيف في آخر استيراد، وتعود المنتجات المحدّثة إلى بياناتها السابقة. متابعة؟'))undoLast()}
    else if(a==='back'){ST.step--;ST.filter='all';draw()}
    else if(a==='next'){ST.step=3;ST.filter='all';ST.more=300;draw()}
    else if(a==='f'){ST.filter=ST.filter===v?'all':v;ST.more=300;draw()}
    else if(a==='more'){ST.more+=300;draw()}
    else if(a==='save')apply()});
  win.addEventListener('change',function(e){var t=e.target;
    if(t.id==='e421File'){readFile(t.files&&t.files[0]);t.value='';return}
    if(t.id==='e421Sheet'){ST.si=+t.value;autoMap();draw();return}
    if(t.id==='e421Hr'){ST.hr=+t.value;ST.map=ST.hr>=0?guessMap(sheet().rows[ST.hr]):{name:0};draw();return}
    if(t.getAttribute('data-f')){var f=t.getAttribute('data-f');if(t.value==='')delete ST.map[f];else{var i=+t.value;Object.keys(ST.map).forEach(function(k){if(ST.map[k]===i)delete ST.map[k]});ST.map[f]=i}draw();return}
    if(t.name==='e421Ex'){ST.exist=t.value;draw();return}
    if(t.name==='e421Q'){ST.qty=t.value;draw();return}});
  win.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
  win.addEventListener('dragover',function(e){if(ST.step===1){e.preventDefault();win.classList.add('drag')}});
  win.addEventListener('dragleave',function(e){if(e.target===win||!win.contains(e.relatedTarget))win.classList.remove('drag')});
  win.addEventListener('drop',function(e){win.classList.remove('drag');if(ST.step!==1)return;e.preventDefault();var f=e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files[0];if(f)readFile(f)})}

/* ===== زر الاستيراد في شاشة المنتجات ===== */
function addBtn(){var sec=$('products');if(!sec||sec.querySelector('.e421-btn'))return;var row=sec.querySelector('.row');if(!row)return;var add=row.querySelector('button');
  var b=document.createElement('button');b.type='button';b.className='secondary e421-btn';b.dataset.v47='1';b.textContent='📥 استيراد من Excel';b.addEventListener('click',open);
  var wrap=document.createElement('div');wrap.className='e421-acts';if(add){add.parentNode.insertBefore(wrap,add);wrap.appendChild(b);wrap.appendChild(add)}else row.appendChild(b)}

window.EMDImportV421={open:open,parseCSV:parseCSV,readXlsx:readXlsx,guessMap:guessMap,template:template};
})();

})(window);
