/* مُولَّد بـ tools/port-pos.py من V448 وV419 وV420 وV449 وV451 — لا تعدّل هنا */
(function(){var s=document.createElement("style");s.textContent="\n/* الحاسوب والجهاز اللوحي الأفقي: شاشة البيع بعرض الشاشة والفاتورة ثابتة بجانب المنتجات */\n@media(min-width:900px){\n .emd113-ov{align-items:stretch!important}\n .emd113-sheet{width:100%!important;height:100%!important;max-width:none!important;border-radius:0!important}\n .emd113-cols.e448-pos{grid-template-columns:minmax(0,1fr) 420px!important;column-gap:16px;align-items:start}\n .e448-pos .e448-r{position:sticky;top:0;max-height:calc(100vh - 250px);overflow:auto;border-radius:16px}\n .e448-pos #emd113Pl{max-height:none!important}\n .e448-pos #emd113Pl.e419grid{grid-template-columns:repeat(auto-fill,minmax(132px,1fr))}\n .e448-see{display:none}\n}\n.e448-pos .e448-l,.e448-pos .e448-r{min-width:0}\n/* أزرار الأدوات والتنبيهات العائمة لا تغطي شاشة البيع */\nbody:has(#emd113Ov.show) #emdQuickMenuFinal,body:has(#emd113Ov.show) #emdNotifyBadgeV317{display:none!important}\n.e448-keys{display:none;margin-inline-start:auto;font-size:12px;color:#64748b;white-space:nowrap}\n.e448-keys kbd{border:1px solid #d6dce6;border-bottom-width:2px;border-radius:6px;padding:0 6px;font-family:inherit;background:#fff;color:#18202a;font-size:11.5px}\n@media(min-width:900px) and (hover:hover){.e448-keys{display:inline}}\n/* بيانات العميل تُطوى في سطر صغير حتى يحتاجها البائع */\n.e448-cadd{display:none;width:100%;min-height:44px;border:0;background:transparent;font:inherit;font-size:14px;font-weight:700;color:#1e3a8a;text-align:start;cursor:pointer;padding:0 4px}\n.e448-cadd small{font-weight:400;color:#64748b}\n.e448-cust:not(.open){padding:4px 8px;border-style:dashed}\n.e448-cust:not(.open)>*{display:none}\n.e448-cust:not(.open)>.e448-cadd{display:block}\n/* الشريط السفلي: الضغط على عدد الأصناف ينقل إلى الفاتورة */\n#emd113Ft .t[data-a=\"e448cart\"]{cursor:pointer}\n.e448-see{color:#1e3a8a;font-weight:700;font-size:13px;margin-inline-start:4px}\n/* مفتاح الفواتير: البيع المباشر / الطلبات */\n.e448-seg{display:grid;grid-template-columns:1fr 1fr;gap:4px;background:#e7ebf3;border-radius:12px;padding:4px;margin-bottom:10px}\n.e448-seg button{min-height:42px;border:0;border-radius:9px;background:transparent;font:inherit;font-size:14px;font-weight:700;color:#475569;cursor:pointer}\n.e448-seg button[aria-pressed=\"true\"]{background:#fff;color:#111827;box-shadow:0 1px 4px rgba(15,23,42,.15)}\n.e448-ro{margin:10px 0 4px;font-size:12.5px;color:#475569;background:#eef2fb;border-radius:10px;padding:8px 10px;text-align:center}\n.e448-st{font-size:12px;color:#475569}\n\n\nbody[data-emd416m=\"online\"] .e419only,body:not([data-emd416m]) .e419only{display:none!important}\n.e419-tools{display:flex;gap:8px;align-items:center;margin-top:8px}\n.e419-scan{flex:1;min-height:44px;border:0;border-radius:12px;background:#1e3a8a;color:#fff;font:inherit;font-weight:800;font-size:14.5px;cursor:pointer;box-shadow:inset 0 -3px 0 #f59e0b}\n.e419-vw{display:flex;border:1px solid #dfe3e8;border-radius:12px;overflow:hidden;flex:none}\n.e419-vw button{min-height:44px;padding:0 12px;border:0;background:#fff;font:inherit;font-size:13px;font-weight:700;color:#475569;cursor:pointer}\n.e419-vw button[aria-pressed=\"true\"]{background:#eef2ff;color:#1e3a8a}\n.e419-cats{display:flex;gap:6px;overflow-x:auto;padding:8px 0 2px;scrollbar-width:none}\n.e419-cats button{flex:none;min-height:36px;padding:0 14px;border-radius:999px;border:1px solid #dfe3e8;background:#fff;font:inherit;font-size:13px;font-weight:700;color:#334155;cursor:pointer}\n.e419-cats button[aria-pressed=\"true\"]{background:#1e3a8a;border-color:#1e3a8a;color:#fff}\n#emd113Pl.e419grid{grid-template-columns:repeat(auto-fill,minmax(104px,1fr));max-height:380px}\n#emd113Pl.e419grid .emd113-p{flex-direction:column;align-items:stretch;gap:4px;padding:6px;min-height:0;position:relative;text-align:right}\n#emd113Pl.e419grid .emd113-img{width:100%;height:auto;aspect-ratio:1;border-radius:10px;font-size:30px}\n#emd113Pl.e419grid .emd113-p .n b{font-size:12.5px;white-space:normal;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;min-height:34px}\n#emd113Pl.e419grid .emd113-p .n small{font-size:11px}\n#emd113Pl.e419grid .emd113-p .pr{font-size:13.5px;color:#1e3a8a}\n#emd113Pl.e419grid .emd113-add{position:absolute;top:10px;left:10px;width:30px;height:30px;font-size:18px;border-radius:9px;background:#1e3a8a;box-shadow:0 2px 6px rgba(15,23,42,.25)}\n.e419-tender{margin-top:10px;display:flex;flex-direction:column;gap:6px}\n.e419-tender label{font-size:13px;font-weight:700;color:#334155}\n.e419-tender input,.e419-sr input,.e419-sr select,.e419-in{width:100%;box-sizing:border-box;border:1px solid #dfe3e8;border-radius:12px;padding:10px 12px;font-size:16px;background:#fff;min-height:46px;font-family:inherit}\n.e419-sug{display:flex;gap:6px;flex-wrap:wrap}\n.e419-sug button{min-height:40px;padding:0 12px;border-radius:10px;border:1px solid #c7d2fe;background:#eef2ff;color:#1e3a8a;font:inherit;font-weight:800;font-size:13.5px;cursor:pointer}\n.e419-change{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-radius:12px;background:#172554;color:#fff;box-shadow:inset 0 -3px 0 #f59e0b}\n.e419-change span{font-size:13.5px;font-weight:700}.e419-change b{font-size:24px}\n.e419-change.bad{background:#7f1d1d;box-shadow:none}\n.e419-split{margin-top:10px;display:flex;flex-direction:column;gap:8px}\n.e419-sr{display:grid;grid-template-columns:1.1fr 1fr;gap:8px}\n.e419-fill{min-height:40px;border:1px dashed #94a3b8;border-radius:10px;background:transparent;color:#1e3a8a;font:inherit;font-weight:700;font-size:13px;cursor:pointer}\n.e419-warn{font-size:13px;font-weight:700;color:#b45309}\n.e419-toast{position:fixed;left:50%;top:16px;transform:translateX(-50%);z-index:2147483647;background:#7f1d1d;color:#fff;padding:10px 16px;border-radius:12px;font-size:14px;font-weight:700;max-width:calc(100% - 32px);text-align:center}\n.e419-toast.ok{background:#172554;box-shadow:inset 0 -3px 0 #f59e0b}\n.e419-ov{position:fixed;inset:0;z-index:2147483646;background:rgba(15,23,42,.55);display:flex;align-items:flex-end;justify-content:center;direction:rtl}\n.e419-win{width:min(480px,100%);max-height:85vh;overflow:auto;background:#fff;border-radius:22px 22px 0 0;padding:16px;display:flex;flex-direction:column;gap:10px}\n.e419-win h3{margin:0;font-size:18px}.e419-win p{margin:0;font-size:13.5px;line-height:1.7;color:#475569}\n.e419-ll{display:flex;flex-direction:column;gap:6px;max-height:44vh;overflow:auto}\n.e419-ll button{display:flex;justify-content:space-between;gap:8px;min-height:48px;padding:0 12px;border:1px solid #e5e7ef;border-radius:12px;background:#fff;font:inherit;font-size:14.5px;font-weight:600;cursor:pointer;align-items:center;text-align:right}\n.e419-ll small{color:#64748b}\n.e419-empty{padding:14px;text-align:center;color:#64748b}\n.e419-cancel{min-height:46px;border:1px solid #e5e7ef;border-radius:12px;background:#fff;font:inherit;font-weight:700;cursor:pointer}\n.e419-cam{position:fixed;inset:0;z-index:2147483646;background:#000;display:flex;flex-direction:column}\n.e419-cam video{flex:1;width:100%;object-fit:cover}\n.e419-frame{position:absolute;left:12%;right:12%;top:32%;height:22%;border:3px solid #f59e0b;border-radius:16px;box-shadow:0 0 0 9999px rgba(0,0,0,.35)}\n.e419-cbar{display:flex;align-items:center;gap:10px;padding:14px 16px 22px;background:#0f172a;color:#fff;font-weight:700;direction:rtl}\n.e419-cbar span{flex:1}.e419-cbar button{min-height:46px;padding:0 18px;border:0;border-radius:12px;background:#fff;color:#0f172a;font:inherit;font-weight:800;cursor:pointer}\n.e419-scan:focus-visible,.e419-vw button:focus-visible,.e419-cats button:focus-visible,.e419-sug button:focus-visible,.e419-fill:focus-visible,.e419-ll button:focus-visible{outline:3px solid #f59e0b;outline-offset:2px}\n\n\n.emd113-cols{grid-template-columns:minmax(0,1fr)}.emd113-cols>*{min-width:0}\n@media(min-width:860px){.emd113-cols{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}}\n.e420-cols{display:flex!important;flex-direction:column}\n.e420-card h3{margin:0 0 6px}\n.e420-p{margin:4px 0 8px;font-size:13px;line-height:1.7;color:#5b6475}\n.e420-l{display:flex;flex-direction:column;gap:4px;font-size:13px;font-weight:700;color:#334155;margin-bottom:6px}\n.e420-go{width:100%;min-height:50px;margin-top:10px;border:0;border-radius:14px;background:#1e3a8a;color:#fff;font:inherit;font-weight:800;font-size:15px;cursor:pointer;box-shadow:inset 0 -4px 0 #f59e0b}\n.e420-st{display:flex;align-items:center;gap:8px;margin-bottom:10px}.e420-st .dot,.e420-chip .dot{width:10px;height:10px;border-radius:50%;background:#16a34a;flex:none}.e420-st small{color:#64748b;font-size:12.5px}\n.e420-g{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}\n.e420-g>div{background:#f8fafc;border:1px solid #eceff3;border-radius:12px;padding:8px 10px;display:flex;flex-direction:column;gap:2px}.e420-g span{font-size:11.5px;color:#64748b}.e420-g b{font-size:15px}\n.e420-exp{margin-top:10px;background:#172554;color:#fff;border-radius:14px;padding:12px 14px;display:grid;grid-template-columns:1fr auto;gap:2px 8px;box-shadow:inset 0 -4px 0 #f59e0b}\n.e420-exp span{font-weight:700;font-size:13.5px}.e420-exp b{font-size:20px;grid-row:span 2;align-self:center}.e420-exp small{color:#c7d2fe;font-size:11.5px}\n.e420-diff{margin-top:8px;padding:10px 12px;border-radius:12px;font-weight:800;font-size:15px}.e420-diff.ok{background:#dcfce7;color:#14532d}.e420-diff.up{background:#dbeafe;color:#1e3a8a}.e420-diff.bad{background:#fee2e2;color:#7f1d1d}\n.e420-row{width:100%;display:flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 4px;border:0;border-bottom:1px solid #eef0f5;background:none;font:inherit;cursor:pointer;text-align:right}\n.e420-row span:first-child{display:flex;flex-direction:column;gap:2px}.e420-row small{color:#64748b;font-size:12px}.e420-row .ok{color:#15803d;font-weight:800}.e420-row .bad{color:#b91c1c;font-weight:800}\n.e420-set summary{cursor:pointer;font-weight:800;min-height:28px}\n.e420-ck{display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:700;margin:10px 0}.e420-ck input{width:20px;height:20px;accent-color:#1e3a8a}\n.e420-g2{display:grid;grid-template-columns:1fr 1.4fr;gap:8px}\n.e420-held{display:flex;gap:8px;align-items:center;overflow-x:auto;padding:4px 2px 10px;scrollbar-width:none}\n.e420-held>span:first-child{flex:none;font-weight:800;font-size:13px;color:#b45309}\n.e420-hc{flex:none;display:flex;align-items:stretch;border:2px solid #f59e0b;border-radius:12px;overflow:hidden;background:#fffbeb}\n.e420-hc button{border:0;background:none;font:inherit;cursor:pointer;padding:6px 10px;display:flex;flex-direction:column;align-items:flex-start;gap:1px;min-height:44px}\n.e420-hc b{font-size:13px}.e420-hc small{font-size:11px;color:#78350f}.e420-hc .d{color:#b91c1c;font-size:14px;justify-content:center;border-inline-start:1px solid #fde68a;padding:0 10px}\n.e420-hold{width:100%;min-height:42px;margin:0 0 8px;border:1px dashed #b45309;border-radius:12px;background:#fffbeb;color:#92400e;font:inherit;font-weight:800;font-size:14px;cursor:pointer}\n.e420-chip{display:flex;align-items:center;gap:8px;width:100%;min-height:46px;padding:0 14px;border:1px solid #e5e7ef;border-radius:14px;background:#fff;font:inherit;font-size:13px;color:#334155;cursor:pointer;text-align:right}\n.e420-chip span:nth-child(2){flex:1}.e420-chip b{color:#1e3a8a}.e420-chip.off .dot{background:#94a3b8}\n#e420R{position:fixed;inset:0;z-index:2147483646;display:none;align-items:center;justify-content:center;background:rgba(15,23,42,.55);direction:rtl;padding:12px;box-sizing:border-box}\n#e420R.show{display:flex}\n#e420R .win{width:min(440px,100%);max-height:94vh;overflow:auto;background:#fff;border-radius:22px;padding:16px;display:flex;flex-direction:column;gap:12px}\n#e420R .hd{display:flex;align-items:center;gap:10px}#e420R h2{margin:0;font-size:18px;flex:1}\n#e420R .x{width:40px;height:40px;border-radius:12px;border:1px solid #e5e7ef;background:#fff;font:inherit;cursor:pointer}\n#e420R .pv{background:#eef0f5;border-radius:16px;padding:14px;max-height:56vh;overflow:auto;display:flex;justify-content:center}\n#e420R .pv img{width:min(100%,300px);height:auto;background:#fff;box-shadow:0 4px 14px rgba(15,23,42,.18)}\n#e420R .ft{display:grid;grid-template-columns:1fr 1fr;gap:8px}#e420R .ft button{min-height:48px;border-radius:14px;font:inherit;font-size:14px;font-weight:700;cursor:pointer}\n#e420R .pr{grid-column:1/-1;border:0;color:#fff;background:#1e3a8a;box-shadow:inset 0 -4px 0 #f59e0b}#e420R .sc{border:1px solid #e5e7ef;background:#fff}\n#e420R .hint{margin:0;font-size:12px;color:#64748b}\n#e420Print{display:none}\n.e420-toast{position:fixed;left:50%;top:16px;transform:translateX(-50%);z-index:2147483647;background:#172554;color:#fff;padding:10px 16px;border-radius:12px;font-size:14px;font-weight:700;box-shadow:inset 0 -3px 0 #f59e0b;max-width:calc(100% - 32px);text-align:center}\n.e420-toast.bad{background:#7f1d1d;box-shadow:none}\n.e420-go:focus-visible,.e420-row:focus-visible,.e420-hc button:focus-visible,.e420-hold:focus-visible,.e420-chip:focus-visible,#e420R button:focus-visible{outline:3px solid #f59e0b;outline-offset:2px}\n\n\nbody.e449-nocats #emd113Ov .e419-cats,body.e449-nocam #emd113Ov .e419-scan,body.e449-custhide #emd113Ov .e448-cust,body.e449-nonote #emd113Ov .e449-note,body.e449-nohold #emd113Ov .e420-hold,body.e449-nokeys #emd113Ov .e448-keys,body.e449-noset #emd113Ov .e449-gear{display:none!important}\n#emd113Ov details.e420-set{display:none!important}\n.e449-gear{font-size:17px}\n.e449-link{width:100%;min-height:48px;border:1px dashed #94a3b8;border-radius:14px;background:#fff;color:#1e3a8a;font:inherit;font-weight:800;font-size:14px;cursor:pointer}\n.e449-rs{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}\n.e449-rs button{min-height:38px;padding:0 12px;border:1px solid #d6dce6;border-radius:20px;background:#fff;font:inherit;font-size:13px;font-weight:700;color:#334155;cursor:pointer}\n.e449-rs button[aria-pressed=\"true\"]{background:#1e3a8a;border-color:#1e3a8a;color:#fff}\n.e449-2{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}\n.e449-2 button,.e449-dr{min-height:48px;border-radius:14px;font:inherit;font-weight:800;font-size:14px;cursor:pointer}\n.e449-2 .in{border:0;background:#15803d;color:#fff}.e449-2 .out{border:0;background:#b45309;color:#fff}\n.e449-dr{width:100%;margin-top:10px;border:1px solid #1e3a8a;background:#eef2fb;color:#1e3a8a}\n.e449-ml{margin-top:10px;border-top:1px solid #eef0f5}\n.e449-mr{display:flex;align-items:center;gap:8px;padding:8px 2px;border-bottom:1px solid #f1f3f7;font-size:13px}\n.e449-mr span{flex:1;display:flex;flex-direction:column;gap:1px}.e449-mr small{color:#64748b;font-size:11.5px}\n.e449-mr b.in{color:#15803d}.e449-mr b.out{color:#b45309}\n.e449-mr button{width:36px;height:36px;border:1px solid #e5e7ef;border-radius:10px;background:#fff;color:#b91c1c;font:inherit;cursor:pointer}\n#e449{position:fixed;inset:0;z-index:2147483640;display:none;align-items:flex-end;justify-content:center;background:rgba(15,23,42,.55);direction:rtl;font-family:inherit}\n#e449.show{display:flex}\n#e449 .win{width:min(640px,100%);max-height:94vh;display:flex;flex-direction:column;background:#f5f7fb;border-radius:22px 22px 0 0;overflow:hidden}\n@media(min-width:700px){#e449{align-items:center}#e449 .win{border-radius:22px}}\n#e449 .hd{display:flex;align-items:center;gap:10px;padding:14px 16px;background:#fff;border-bottom:1px solid #e5e7ef}\n#e449 .hd h2{margin:0;flex:1;font-size:18px;color:#172554}\n#e449 .x{width:40px;height:40px;border-radius:12px;border:1px solid #e5e7ef;background:#fff;font:inherit;font-size:16px;cursor:pointer}\n#e449 .bd{overflow:auto;padding:12px 14px 18px;display:flex;flex-direction:column;gap:12px}\n#e449 .intro{margin:0;font-size:13px;color:#475569;line-height:1.7}\n#e449 .c{background:#fff;border:1px solid #e5e7ef;border-radius:16px;padding:6px 14px 10px}\n#e449 .c h3{margin:8px 0 2px;font-size:15px;color:#172554}\n#e449 .row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid #f1f3f7}\n#e449 .row:last-child{border-bottom:0}\n#e449 .row.col{flex-direction:column;align-items:stretch}\n#e449 .row>span{display:flex;flex-direction:column;gap:2px;min-width:0}\n#e449 .row b{font-size:14px;color:#18202a}#e449 .row small{font-size:12px;color:#64748b;line-height:1.5}\n#e449 .sw{position:relative;flex:none;width:50px;height:30px}\n#e449 .sw input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:pointer;z-index:1}\n#e449 .sw i{position:absolute;inset:0;border-radius:20px;background:#cbd5e1;transition:background .15s}\n#e449 .sw i:after{content:'';position:absolute;top:3px;right:3px;width:24px;height:24px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.25);transition:transform .15s}\n#e449 .sw input:checked+i{background:#1e3a8a}#e449 .sw input:checked+i:after{transform:translateX(-20px)}\n#e449 .sw input:focus-visible+i{outline:3px solid #f59e0b;outline-offset:2px}\n#e449 .seg{display:flex;flex-wrap:wrap;gap:6px}\n#e449 .seg button{min-height:40px;padding:0 12px;border:1px solid #d6dce6;border-radius:12px;background:#fff;font:inherit;font-size:13px;font-weight:700;color:#334155;cursor:pointer}\n#e449 .seg button[aria-pressed=\"true\"]{background:#172554;border-color:#172554;color:#fff;box-shadow:inset 0 -3px 0 #c9a227}\n#e449 .seg button:disabled{opacity:.4;cursor:not-allowed}\n#e449 .in2{display:grid;grid-template-columns:1fr 1.4fr;gap:8px;margin-top:8px}\n#e449 label.f{display:flex;flex-direction:column;gap:4px;font-size:12.5px;font-weight:700;color:#334155}\n#e449 input.t{height:44px;border:1px solid #d6dce6;border-radius:12px;padding:0 12px;font:inherit;font-size:14px;background:#fff;box-sizing:border-box;width:100%}\n#e449 .lnk{width:100%;min-height:44px;margin-top:6px;border:1px solid #d6dce6;border-radius:12px;background:#fff;font:inherit;font-size:13.5px;font-weight:700;color:#1e3a8a;cursor:pointer}\n#e449 .rst{min-height:46px;border:1px solid #fecaca;border-radius:14px;background:#fff;color:#b91c1c;font:inherit;font-weight:800;font-size:14px;cursor:pointer}\n#e449 button:focus-visible{outline:3px solid #f59e0b;outline-offset:2px}\n.e449-toast{position:fixed;left:50%;top:16px;transform:translateX(-50%);z-index:2147483647;background:#172554;color:#fff;padding:10px 16px;border-radius:12px;font-size:14px;font-weight:700;box-shadow:inset 0 -3px 0 #f59e0b;max-width:calc(100% - 32px);text-align:center;direction:rtl}\n.e449-toast.bad{background:#7f1d1d;box-shadow:none}\n\n\n.e451-q{display:flex;gap:6px;overflow-x:auto;padding:2px 0 8px;margin-top:8px;scrollbar-width:none}\n.e451-q::-webkit-scrollbar{display:none}\n.e451-q b{flex:none;align-self:center;font-size:12px;color:#64748b;font-weight:700}\n.e451-q button{flex:none;min-height:40px;max-width:170px;padding:0 12px;border:1px solid #f1d58a;border-radius:20px;background:#fffbeb;color:#172554;font:inherit;font-size:13px;font-weight:800;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.e451-q button:active{transform:scale(.97)}\n.e451-cp{display:flex;gap:6px;margin-top:6px;align-items:center}\n.e451-cp input{flex:1;min-width:0;text-transform:uppercase}\n.e451-cp button{flex:none;min-height:44px;padding:0 14px;border:1px solid #1e3a8a;border-radius:12px;background:#eef2fb;color:#1e3a8a;font:inherit;font-weight:800;cursor:pointer}\n.e451-cpok{display:flex;align-items:center;gap:8px;margin-top:6px;padding:8px 10px;border-radius:12px;background:#ecfdf5;border:1px solid #a7f3d0;color:#065f46;font-size:13px;font-weight:700}\n.e451-cpok span{flex:1}.e451-cpok button{border:0;background:none;color:#b91c1c;font:inherit;font-weight:800;cursor:pointer;min-height:32px}\n.e451-cpbad{margin-top:6px;color:#b91c1c;font-size:12.5px;font-weight:700}\n.e451-pinb{font-size:12px;color:#92400e;background:#fffbeb;border:1px solid #fde68a;border-radius:10px;padding:6px 10px;margin-top:6px}\n#e451Pin{position:fixed;inset:0;z-index:2147483646;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,.6);direction:rtl;font-family:inherit;padding:16px}\n#e451Pin .w{width:min(340px,100%);background:#fff;border-radius:20px;padding:18px;display:flex;flex-direction:column;gap:10px;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,.3)}\n#e451Pin h3{margin:0;color:#172554;font-size:17px}#e451Pin p{margin:0;color:#475569;font-size:13px;line-height:1.6}\n#e451Pin input{height:54px;border:1px solid #cbd5e1;border-radius:14px;text-align:center;font-size:26px;letter-spacing:12px;font-family:inherit}\n#e451Pin .er{color:#b91c1c;font-size:13px;font-weight:700;min-height:18px}\n#e451Pin .bt{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n#e451Pin .bt button{min-height:48px;border-radius:14px;font:inherit;font-weight:800;font-size:15px;cursor:pointer}\n#e451Pin .ok{border:0;background:#1e3a8a;color:#fff;box-shadow:inset 0 -3px 0 #c9a227}#e451Pin .no{border:1px solid #d6dce6;background:#fff;color:#334155}\n.e451-day summary{cursor:pointer;font-weight:800;color:#172554;font-size:15px;list-style:none;display:flex;align-items:center;gap:6px}\n.e451-day summary::-webkit-details-marker{display:none}\n.e451-day summary:after{content:'▾';margin-inline-start:auto;color:#64748b}\n.e451-day[open] summary:after{content:'▴'}\n.e451-k{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:10px 0}\n.e451-k div{background:#f5f7fb;border-radius:12px;padding:8px;text-align:center;display:flex;flex-direction:column;gap:2px}\n.e451-k span{font-size:11.5px;color:#64748b}.e451-k b{font-size:15px;color:#172554}\n.e451-h{display:flex;align-items:flex-end;gap:3px;height:120px;padding:6px 2px 0;border-bottom:1px solid #e5e7ef;direction:ltr}\n.e451-h div{flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;gap:2px}\n.e451-h i{display:block;width:100%;max-width:26px;background:#1e3a8a;border-radius:5px 5px 0 0;min-height:2px}\n.e451-h div.top i{background:#c9a227}\n.e451-h small{font-size:10px;color:#64748b}\n.e451-hl{display:flex;gap:3px;direction:ltr}.e451-hl span{flex:1;text-align:center;font-size:10px;color:#64748b;direction:rtl;unicode-bidi:isolate}\n.e451-tl{margin-top:10px}.e451-tl h4{margin:6px 0;font-size:13.5px;color:#334155}\n.e451-tr{display:flex;justify-content:space-between;gap:8px;padding:6px 0;border-bottom:1px solid #f1f3f7;font-size:13px}\n.e451-tr span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.e451-cl .it{display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid #f1f3f7;font-size:13px}\n.e451-cl .it span{flex:1;display:flex;flex-direction:column;gap:1px}.e451-cl .it small{color:#64748b}\n.e451-cl .it.off{opacity:.5}\n.e451-cl .it button{min-height:34px;padding:0 10px;border:1px solid #e5e7ef;border-radius:10px;background:#fff;font:inherit;font-size:12.5px;cursor:pointer}\n.e451-cl .it button.del{color:#b91c1c}\n.e451-cf{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px}\n.e451-cf .full{grid-column:1/-1}\n\n";document.head.appendChild(s)})();
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

})(window);
