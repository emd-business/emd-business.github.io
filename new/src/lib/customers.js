/* العملاء: من سجل العملاء ومن الطلبات، مجمّعون برقم الهاتف */
var CX=null;
function customersIndex(){
  if(CX&&CX.ix===IX)return CX.list;
  var m={},list=[];
  db.customers.forEach(function(c,ci){var k=phoneKey(c.phone);if(!k)return;if(!m[k]){m[k]={k:k,name:c.name||'',phone:c.phone,place:c.place||'',ci:ci,orders:[],last:0};list.push(m[k])}});
  db.orders.forEach(function(o){var k=phoneKey(cphone(o));if(!k)return;var c=m[k];if(!c){c=m[k]={k:k,name:cname(o),phone:cphone(o),place:cplace(o),ci:-1,orders:[],last:0};list.push(c)}
    c.orders.push(o);var t=odate(o);t=t?t.getTime():0;if(t>=c.last){c.last=t;if(cname(o))c.name=c.name||cname(o);if(cplace(o)&&c.ci<0)c.place=cplace(o)}});
  index();CX={ix:IX,list:list,map:m};return list;
}
function custByKey(k){customersIndex();return CX.map[k]}
