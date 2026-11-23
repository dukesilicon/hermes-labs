(()=>{
 const root=document.documentElement,system=matchMedia('(prefers-color-scheme:dark)');let saved=null;try{saved=localStorage.getItem('hermes-theme');}catch{}
 function apply(theme){root.dataset.theme=theme;document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='dark'?'#101b24':'#fafbf9');}
 apply(saved==='dark'||saved==='light'?saved:system.matches?'dark':'light');
 addEventListener('DOMContentLoaded',()=>{
  const control=document.createElement('button');control.type='button';control.className='neural-theme';control.innerHTML='<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 20 7 7M20 20 33 8M20 20 35 29M20 20 10 34M20 20 19 3M20 20 4 21"/><circle cx="20" cy="20" r="5"/><circle cx="7" cy="7" r="2"/><circle cx="33" cy="8" r="2"/><circle cx="35" cy="29" r="2"/><circle cx="10" cy="34" r="2"/></svg><span></span>';
  function label(){const dark=root.dataset.theme==='dark';control.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');control.dataset.active=String(dark);control.title=dark?'Switch to light mode':'Switch to dark mode';control.querySelector('span').textContent=dark?'Light mode':'Dark mode';}
  let transitioning=false;
  control.addEventListener('click',async()=>{
   if(transitioning)return;
   const rect=control.querySelector('svg').getBoundingClientRect(),x=rect.x+rect.width/2,y=rect.y+rect.height/2;
   const radius=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y))+4;
   saved=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('hermes-theme',saved);}catch{}
   const change=()=>{apply(saved);label();dispatchEvent(new Event('hermes:theme'));dispatchEvent(new CustomEvent('hermes:navigate',{detail:{x,y}}));};
   if(matchMedia('(prefers-reduced-motion:reduce)').matches||!document.startViewTransition){change();return;}
   transitioning=true;control.setAttribute('aria-busy','true');
   const transition=document.startViewTransition(change);
   try{await transition.ready;
    const reveal=root.animate({clipPath:[`circle(0px at ${x}px ${y}px)`,`circle(${radius}px at ${x}px ${y}px)`]}, {duration:950,easing:'cubic-bezier(.22,.65,.3,1)',fill:'both',pseudoElement:'::view-transition-new(root)'});
    await reveal.finished;await transition.finished;
   }catch{transition.skipTransition();}finally{transitioning=false;control.removeAttribute('aria-busy');}
  });
  const host=document.querySelector('.home-utility')||document.querySelector('.project-header');if(host){control.classList.add('theme-in-header');host.prepend(control);}else document.body.append(control);label();dispatchEvent(new Event('hermes:theme'));system.addEventListener('change',()=>{if(saved)return;apply(system.matches?'dark':'light');label();dispatchEvent(new Event('hermes:theme'));});
  document.addEventListener('click',e=>{const button=e.target.closest('.explorer-trigger,[data-stage],summary');if(!button)return;const r=button.getBoundingClientRect();dispatchEvent(new CustomEvent('hermes:navigate',{detail:{x:r.x+r.width/2,y:r.y+r.height/2}}));});
 });
})();
