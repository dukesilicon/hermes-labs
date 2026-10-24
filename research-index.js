(() => {
  const controls = [...document.querySelectorAll('.index-trigger')];
  controls.forEach(button => button.addEventListener('click', () => {
    const opening = button.getAttribute('aria-expanded') !== 'true';
    controls.forEach(control => {
      const selected = control === button && opening;
      control.setAttribute('aria-expanded', String(selected));
      document.getElementById(control.getAttribute('aria-controls')).hidden = !selected;
    });
  }));
  document.querySelector('.research-index').addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const open = controls.find(control => control.getAttribute('aria-expanded') === 'true');
    if (open) { open.click(); open.focus(); }
  });

})();
// Restore the index on direct links and browser history navigation.
function restoreIndex(){
 const hash=location.hash.slice(1);
 const target=document.getElementById(hash);
 const panelId=hash==='projectsPanel'?'projectsPanel':(hash==='methodPanel'||target?.closest('#methodPanel')?'methodPanel':null);
 if(!panelId)return;
 const control=document.querySelector('[aria-controls="'+panelId+'"]');
 if(control&&control.getAttribute('aria-expanded')!=='true')control.click();
 const panel=target||document.getElementById(panelId);panel.tabIndex=-1;
 requestAnimationFrame(()=>{panel.scrollIntoView({block:'start'});panel.focus({preventScroll:true});});
}
addEventListener('hashchange',restoreIndex);restoreIndex();
