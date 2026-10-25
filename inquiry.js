(() => {
 const dialog=document.querySelector('#collaboration'),form=document.querySelector('#inquiry-form');
 if(!dialog||!form)return;
 const status=document.querySelector('#inquiry-status'),send=form.querySelector('[type=submit]');
 let opener=null,ready=false,busy=false,requestId='';
 async function open(trigger){
  if(dialog.open)return;opener=trigger;dialog.showModal();document.querySelector('#inquiry-email').focus();
  if(busy)return;
  status.textContent='Checking email availability…';send.disabled=true;ready=false;
  try{const response=await fetch('/api/inquiry',{signal:AbortSignal.timeout(10000)});const data=await response.json();ready=response.ok&&data.available===true;}catch{}
  status.textContent=ready?'':'Email delivery is not connected yet. Please check back soon.';send.disabled=!ready;
 }
 document.querySelectorAll('[data-inquiry-open]').forEach(button=>button.addEventListener('click',()=>open(button)));
 dialog.querySelector('.inquiry-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>{if(location.hash==='#collaboration')history.replaceState(null,'',location.pathname+location.search);opener?.focus({preventScroll:true});});
 function followLink(){if(location.hash==='#collaboration')open(document.querySelector('[data-inquiry-open]'));}
 addEventListener('hashchange',followLink);followLink();
 form.addEventListener('input',()=>{if(!busy)requestId='';});
 form.addEventListener('submit',async event=>{
  event.preventDefault();if(busy||!ready||!form.reportValidity())return;
  busy=true;send.disabled=true;send.textContent='Sending…';status.textContent='Sending your inquiry…';
  form.email.readOnly=true;form.message.readOnly=true;
  const payload={email:form.email.value.trim(),message:form.message.value.trim(),website:form.website.value,requestId:requestId||(requestId=crypto.randomUUID())};
  try{
   const response=await fetch('/api/inquiry',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(15000)});
   if(!response.ok)throw Error('send');
   const result=await response.json();if(result.ok!==true)throw Error('send');
   status.textContent='Thank you. Your inquiry has been submitted.';form.reset();requestId='';
  }catch{status.textContent='We could not confirm submission. Your message is still here; please try again.';}
  finally{busy=false;form.email.readOnly=false;form.message.readOnly=false;send.disabled=!ready;send.textContent='Send inquiry';}
 });
})();
