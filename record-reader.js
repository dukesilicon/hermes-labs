(() => {
 'use strict';
 const cache=new Map();
 async function load(url){
  if(!cache.has(url))cache.set(url,fetch(url).then(r=>{if(!r.ok)throw Error('Download unavailable');return r.text();}).catch(error=>{cache.delete(url);throw error;}));
  return cache.get(url);
 }
 document.querySelectorAll('details[data-source]').forEach(field=>field.addEventListener('toggle',async()=>{
  if(!field.open||field.dataset.loaded||field.dataset.loading)return;
  field.dataset.loading='true';const status=field.querySelector('.data-state');status.textContent='Loading record…';
  try{
   const data=JSON.parse(await load(field.dataset.source));
   const pre=document.createElement('pre'),code=document.createElement('code');pre.tabIndex=0;
   code.textContent=JSON.stringify(data[field.dataset.key],null,2);pre.append(code);field.append(pre);field.dataset.loaded='true';status.textContent='Field loaded from the downloadable record.';
  }catch{status.textContent='Unable to load. Close and reopen to retry, or use the original download.';}
  finally{delete field.dataset.loading;}
 }));
 function parseCSV(text){
  const rows=[];let row=[],cell='',quoted=false;
  for(let i=0;i<text.length;i++){
   const c=text[i];
   if(c==='"'){if(quoted&&text[i+1]==='"'){cell+='"';i++;}else quoted=!quoted;}
   else if(c===','&&!quoted){row.push(cell);cell='';}
   else if(c==='\n'&&!quoted){row.push(cell.replace(/\r$/,''));rows.push(row);row=[];cell='';}
   else cell+=c;
  }
  if(cell||row.length){row.push(cell.replace(/\r$/,''));rows.push(row);}return rows;
 }
 document.querySelectorAll('.csv-reader').forEach(root=>{
  const button=root.querySelector('button'),status=root.querySelector('[role=status]');
  button.addEventListener('click',async()=>{
   button.disabled=true;status.textContent='Loading strategy table…';
   try{
    const [headers,...rows]=parseCSV(await load(root.dataset.source));
    const label=document.createElement('label');label.textContent='Filter rows ';
    const input=document.createElement('input');input.type='search';input.placeholder='World, condition, or value';label.append(input);
    const region=document.createElement('div');region.className='table-scroll';region.tabIndex=0;region.setAttribute('role','region');region.setAttribute('aria-label','Strategy outcomes');
    const table=document.createElement('table'),head=document.createElement('thead'),tr=document.createElement('tr'),body=document.createElement('tbody');
    headers.forEach(value=>{const th=document.createElement('th');th.scope='col';th.textContent=value;tr.append(th);});head.append(tr);table.append(head,body);region.append(table);
    const nav=document.createElement('div');nav.className='reader-pagination';
    const previous=document.createElement('button'),next=document.createElement('button');previous.textContent='Previous rows';next.textContent='Next rows';nav.append(previous,next);
    let page=0;
    function render(){
     const query=input.value.toLowerCase(),filtered=rows.filter(row=>row.join(' ').toLowerCase().includes(query));
     body.replaceChildren();filtered.slice(page*25,page*25+25).forEach(row=>{const tr=document.createElement('tr');row.forEach(value=>{const td=document.createElement('td');td.textContent=value;tr.append(td);});body.append(tr);});
     status.textContent=filtered.length?`Rows ${page*25+1}–${Math.min(page*25+25,filtered.length)} of ${filtered.length} (${rows.length} total).`:'No matching rows.';
     previous.disabled=page===0;next.disabled=(page+1)*25>=filtered.length;
    }
    input.addEventListener('input',()=>{page=0;render();});previous.addEventListener('click',()=>{page--;render();});next.addEventListener('click',()=>{page++;render();});
    root.append(label,region,nav);button.remove();render();input.focus();
   }catch{status.textContent='Unable to load. Retry or use the original CSV download.';button.disabled=false;}
  });
 });
 // Hash links into closed evidence disclosures remain usable.
 document.addEventListener('click',event=>{
  const link=event.target.closest('a[href^="#"]');if(!link)return;
  let id;try{id=decodeURIComponent(link.getAttribute('href').slice(1));}catch{return;}
  let node=document.getElementById(id);while(node){if(node.tagName==='DETAILS')node.open=true;node=node.parentElement;}
 });
 function reveal(){let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}if(!id)return;const target=document.getElementById(id);if(!target)return;let node=target;while(node){if(node.tagName==='DETAILS')node.open=true;node=node.parentElement;}requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));}
 addEventListener('hashchange',reveal);reveal();
})();
