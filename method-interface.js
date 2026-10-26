(() => {
  const root=document.querySelector('#methodPanel');
  if(!root)return;
  const buttons=[...root.querySelectorAll('.method-step')];
  const panels=[...root.querySelectorAll('.method-stage')];
  function select(index,announce=true){
    buttons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
    panels.forEach((panel,i)=>{panel.hidden=i!==index;});
    if(announce)root.querySelector('#methodAnnouncement').textContent=`Stage ${index+1} of 7: ${buttons[index].textContent}`;
  }
  buttons.forEach((button,index)=>{
    button.addEventListener('click',()=>select(index));
    button.addEventListener('keydown',event=>{
      let next=index;
      if(event.key==='ArrowRight')next=(index+1)%buttons.length;
      else if(event.key==='ArrowLeft')next=(index+buttons.length-1)%buttons.length;
      else if(event.key==='Home')next=0;
      else if(event.key==='End')next=buttons.length-1;
      else return;
      event.preventDefault();select(next);buttons[next].focus();
    });
  });
  select(0,false);
  function followStageLink(){
    if(typeof location==='undefined')return;
    const id=typeof HermesRoutes==='undefined'?location.hash.slice(1):HermesRoutes.current()?.id||'';
    const match=/^(?:method-stage-|stage-title-)([1-7])$/.exec(id);
    if(match)select(Number(match[1])-1,false);
  }
  if(typeof addEventListener==='function')addEventListener('hermes:route',followStageLink);
  followStageLink();
})();
