(() => {
  const controls = [...document.querySelectorAll('.index-trigger')];
  const signal = document.createElement('div');
  signal.className = 'index-signal';
  signal.hidden = true;
  signal.setAttribute('aria-hidden', 'true');
  signal.innerHTML = '<svg viewBox="0 0 160 72" preserveAspectRatio="none"><path class="signal-fiber" d="M80 0 C80 20 60 24 80 42 S80 60 80 72 M80 42 Q52 38 40 54 M80 42 Q109 38 120 54"/><path class="signal-pulse" pathLength="100" d="M80 0 C80 20 60 24 80 42 S80 60 80 72"/><path class="signal-pulse signal-spread" pathLength="100" d="M80 42 Q52 38 40 54 M80 42 Q109 38 120 54"/></svg>';
  document.querySelector('.index-choices').after(signal);
  const cue = document.createElement('button');
  cue.className = 'index-below';
  cue.hidden = true;
  document.body.append(cue);
  let activePanel = null;
  function positionSignal(button){
    const choices=button.parentElement.getBoundingClientRect(),trigger=button.getBoundingClientRect();
    const x=Math.max(80,Math.min(choices.width-80,trigger.left+trigger.width/2-choices.left));
    signal.style.left=`clamp(80px, ${x}px, calc(100% - 80px))`;
  }
  addEventListener('resize',()=>{const selected=controls.find(control=>control.getAttribute('aria-expanded')==='true');if(selected)positionSignal(selected);});
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.target === activePanel?.querySelector('h2')) {
      cue.hidden = entry.isIntersecting;
    }
  });
  cue.addEventListener('click', () => {
    if (!activePanel) return;
    activePanel.tabIndex = -1;
    activePanel.focus({preventScroll:true});
    activePanel.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  });
  controls.forEach(button => button.addEventListener('click', event => {
    const opening = button.getAttribute('aria-expanded') !== 'true';
    controls.forEach(control => {
      const selected = control === button && opening;
      control.setAttribute('aria-expanded', String(selected));
      document.getElementById(control.getAttribute('aria-controls')).hidden = !selected;
    });
    observer.disconnect();
    activePanel = opening ? document.getElementById(button.getAttribute('aria-controls')) : null;
    signal.hidden = !opening;
    cue.hidden = true;
    if(event.isTrusted)HermesRoutes.push('index.html',opening?activePanel.id:'');
    if (opening) {
      const choices = button.parentElement.getBoundingClientRect();
      const trigger = button.getBoundingClientRect();
      dispatchEvent(new CustomEvent('hermes:navigate', {detail:{x:trigger.left+trigger.width/2,y:trigger.bottom}}));
      positionSignal(button);
      // Restart the finite signal sequence when switching branches.
      signal.getAnimations({subtree:true}).forEach(animation => { animation.currentTime = 0; });
      cue.textContent = button.getAttribute('aria-controls') === 'projectsPanel' ? 'Explore projects below ↓' : 'Explore our method below ↓';
      cue.setAttribute('aria-controls',activePanel.id);
      observer.observe(activePanel.querySelector('h2'));
      // Bring the opened scene into the middle of the viewport.
      // Direct-link restoration owns its own scrolling and must not compete.
      if (event.isTrusted) {
        const distance = Math.max(0, activePanel.getBoundingClientRect().top - innerHeight * .38);
        if (distance > 0) scrollBy({top:distance,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
      }
    }
  }));
  document.querySelector('.research-index').addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const open = controls.find(control => control.getAttribute('aria-expanded') === 'true');
    if (open) { HermesRoutes.push('index.html');open.click(); open.focus(); }
  });

})();
// Restore the index on direct links and browser history navigation.
function restoreIndex(){
 const hash=HermesRoutes.current()?.id||'';
 const target=document.getElementById(hash);
 const panelId=hash==='projectsPanel'?'projectsPanel':(hash==='methodPanel'||target?.closest('#methodPanel')?'methodPanel':null);
 if(!panelId){
  if(!hash)document.querySelectorAll('.index-trigger[aria-expanded="true"]').forEach(control=>control.click());
  return;
 }
 const control=document.querySelector('[aria-controls="'+panelId+'"]');
 if(control&&control.getAttribute('aria-expanded')!=='true')control.click();
 const panel=target||document.getElementById(panelId);panel.tabIndex=-1;
 requestAnimationFrame(()=>{panel.scrollIntoView({block:'start',behavior:'instant'});panel.focus({preventScroll:true});});
}
addEventListener('hermes:route',restoreIndex);restoreIndex();

