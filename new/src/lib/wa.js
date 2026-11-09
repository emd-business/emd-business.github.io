function waText(o){
  var s=status(o),n=cname(o),num=onum(o);
  var hi='مرحبًا'+(n?' '+n:'')+'،\n';
  var body={new:'استلمنا طلبك '+num+' وسنبدأ في تجهيزه قريبًا.',waiting:'طلبك '+num+' بانتظار توفر بعض المنتجات، وسنبلغك فور توفرها.',ready:'طلبك '+num+' مؤكد وجاهز للتجهيز.',packing:'نعمل الآن على تجهيز طلبك '+num+'.',shipped:'تم شحن طلبك '+num+(o.company?' مع '+o.company:'')+'.',received:'نتمنى أن يكون طلبك '+num+' قد نال رضاك. شكرًا لثقتك.',cancelled:'تم إلغاء طلبك '+num+'.'}[s];
  var lines=items(o).map(function(x){return '• '+iname(x)+' × '+qty(x)}).join('\n');
  var tot=total(o),rem=remaining(o);
  return hi+body+'\n\n'+lines+'\n\nالإجمالي: '+money(tot)+' '+CUR+(rem>0&&rem<tot?'\nالمتبقي: '+money(rem)+' '+CUR:'');
}
function waOpen(o,plain){var p=digits(cphone(o)).replace(/\D/g,'');if(p.indexOf('00')===0)p=p.slice(2);if(p.length===8)p='968'+p;window.open('https://wa.me/'+p+'?text='+encodeURIComponent(plain?('مرحبًا'+(cname(o)?' '+cname(o):'')+'،\n'):waText(o)),'_blank')}
