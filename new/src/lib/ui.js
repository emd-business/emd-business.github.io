function toast(t){var el=$('toast');el.textContent=t;el.style.display='block';clearTimeout(toast.t);toast.t=setTimeout(function(){el.style.display='none'},2400)}
/* ---------- 5) النوافذ ---------- */
function openSheet(html,cls){
  var d=document.createElement('div');d.className='sheet '+(cls||'');d.innerHTML='<div class="box">'+html+'</div>';
  d.addEventListener('click',function(e){if(e.target===d)closeSheet(d)});
  $('sheets').appendChild(d);document.body.style.overflow='hidden';return d;
}
function closeSheetIfMenu(b){var s=b.closest('.sheet');if(s&&s.querySelector('.list'))closeSheet(s)}
function closeSheet(d){d=d||$('sheets').lastElementChild;if(d)d.remove();if(!$('sheets').children.length)document.body.style.overflow=''}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeSheet()});
