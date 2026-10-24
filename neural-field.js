(() => {
  'use strict';
  // Authored interactive imagery, not a simulation or recorded neural activity.
  const canvas = document.querySelector('#world');
  const ctx = canvas.getContext('2d', {alpha:false});
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const profiling = typeof location !== 'undefined' && location.search.includes('profile=1');
  const baseline = typeof location !== 'undefined' && location.search.includes('baseline=1');
  const costs=[];
  const TAU = Math.PI * 2;
  const random = n => {const x=Math.sin(n*127.1+311.7)*43758.5453;return x-Math.floor(x);};
  let w=0,h=0,dpr=1,last=0,raf=0,idleTimer=0,clock=0,energy=0,fireAt=0,ambientAt=2,topology;
  let cells=[],links=[],pulses=[];
  const pointer={x:-1000,y:-1000,dx:0,dy:0};
  function branch(x,y,a,len,depth,seed,paths){
    const ex=x+Math.cos(a)*len,ey=y+Math.sin(a)*len;
    paths.push([x,y,x+Math.cos(a-.25)*len*.4,y+Math.sin(a-.25)*len*.4,ex-Math.cos(a+.2)*len*.25,ey-Math.sin(a+.2)*len*.25,ex,ey,depth]);
    if(depth){branch(ex,ey,a-.45,len*.56,depth-1,seed+1,paths);branch(ex,ey,a+.4+random(seed)*.25,len*.53,depth-1,seed+3,paths);}
  }
  function build(){
    cells=[];links=[];pulses=[];
    const cols=w<650?4:6,rows=4,scale=Math.min(w/cols,h/rows);
    for(let row=0;row<rows;row++)for(let col=0;col<cols;col++){
      const id=cells.length,paths=[];
      for(let j=0;j<6;j++)branch(0,0,j/6*TAU+random(id)*2,scale*(.19+random(id*31+j)*.15),2,id*19+j,paths);
      const x=(col+.15+random(id+4)*.7)*w/cols,y=(row+.1+random(id+20)*.8)*h/rows;
      cells.push({id,x,y,homeX:x,homeY:y,vx:0,vy:0,a:random(id)*TAU,paths,r:scale*.035,flash:0});
    }
    const seen=new Set();
    for(const c of cells){
      const near=cells.filter(n=>n!==c).sort((a,b)=>Math.hypot(a.x-c.x,a.y-c.y)-Math.hypot(b.x-c.x,b.y-c.y)).slice(0,3);
      for(const n of near){const key=[c.id,n.id].sort((a,b)=>a-b).join(':');if(!seen.has(key)){seen.add(key);links.push({a:c.id,b:n.id,bend:(random(c.id*17+n.id)-.5)*.32});}}
    }
    topology=HermesTopology.create(cells,links);
  }
  function route(edge,t){
    const a=cells[edge.a],b=cells[edge.b],dx=b.x-a.x,dy=b.y-a.y;
    const bend=Math.sin(t*Math.PI)*edge.bend;
    return {x:a.x+dx*t-dy*bend,y:a.y+dy*t+dx*bend};
  }
  function path(edge,start=0,end=1){
    const a=cells[edge.a],b=cells[edge.b],dx=b.x-a.x,dy=b.y-a.y;
    ctx.beginPath();for(let i=0;i<=24;i++){
      const t=start+(end-start)*i/24,bend=Math.sin(t*Math.PI)*edge.bend;
      const x=a.x+dx*t-dy*bend,y=a.y+dy*t+dx*bend;
      if(i)ctx.lineTo(x,y);else ctx.moveTo(x,y);
    }ctx.stroke();
  }
  function excite(cell){
    cell.flash=1;
    const routes=links.filter(e=>!e.retiring&&e.growth===1&&(e.a===cell.id||e.b===cell.id));
    for(const edge of routes.slice(0,3))if(pulses.length<42)pulses.push({edge,t:0,reverse:edge.b===cell.id,speed:.24+random(clock+edge.a)*.16});
  }
  function draw(){
    const started=profiling?performance.now():0;
    ctx.setTransform(dpr,0,0,dpr,0,0);ctx.fillStyle='#fafbf9';ctx.fillRect(0,0,w,h);ctx.lineCap='round';
    for(const edge of links){ctx.lineWidth=.7;ctx.strokeStyle=`rgba(83,105,116,${.16*edge.opacity})`;path(edge,0,edge.growth);}
    for(const c of cells){
      ctx.save();ctx.translate(c.x,c.y);ctx.rotate(c.a);
      for(const p of c.paths){ctx.beginPath();ctx.moveTo(p[0],p[1]);ctx.bezierCurveTo(p[2],p[3],p[4],p[5],p[6],p[7]);ctx.lineWidth=.45+p[8]*.28;ctx.strokeStyle=`rgba(82,105,115,${.10+p[8]*.035+c.flash*.07})`;ctx.stroke();}
      ctx.beginPath();for(let j=0;j<=36;j++){const a=j/36*TAU,r=c.r*(1+.25*Math.sin(a*6));const x=Math.cos(a)*r,y=Math.sin(a)*r;if(j)ctx.lineTo(x,y);else ctx.moveTo(x,y);}
      ctx.fillStyle=`rgba(129,156,166,${.14+c.flash*.18})`;ctx.fill();ctx.strokeStyle='rgba(83,105,116,.23)';ctx.lineWidth=.7;ctx.stroke();
      ctx.restore();
    }
    for(const p of pulses){
      if(p.t<0)continue;
      const t=p.reverse?1-p.t:p.t,tail=p.reverse?Math.min(1,t+.07):Math.max(0,t-.07);
      if(p.navigation){ctx.strokeStyle='rgba(79,133,157,.16)';ctx.lineWidth=9;path(p.edge,Math.min(t,tail),Math.max(t,tail));}
      ctx.strokeStyle=p.navigation?'rgba(49,112,140,.95)':'rgba(79,133,157,.65)';ctx.lineWidth=p.navigation?2.8:1.4;path(p.edge,Math.min(t,tail),Math.max(t,tail));
      const q=route(p.edge,t);ctx.beginPath();ctx.arc(q.x,q.y,p.navigation?3.4:1.8,0,TAU);ctx.fillStyle=p.navigation?'rgba(49,112,140,.95)':'rgba(75,130,155,.65)';ctx.fill();
    }
    if(profiling){costs.push(performance.now()-started);if(costs.length>300)costs.shift();const sorted=[...costs].sort((a,b)=>a-b);canvas.dataset.profile=JSON.stringify({samples:costs.length,medianMs:sorted[Math.floor(sorted.length*.5)],p95Ms:sorted[Math.floor(sorted.length*.95)],dpr,cells:cells.length,frameCap:baseline?40:(w<650?30:40)});}
  }
  function tick(now){
    raf=0;if(document.hidden||reduced.matches)return;
    if(last&&now-last<1000/(baseline?40:(w<650?30:40))-.5){raf=requestAnimationFrame(tick);return;}
    const elapsed=last?Math.max(0,(now-last)/1000):.016;
    const dt=Math.min(elapsed,.05);last=now;clock+=elapsed;
    energy*=Math.exp(-dt*.42);
    for(const c of cells){
      const dx=c.x-pointer.x,dy=c.y-pointer.y,dist=Math.hypot(dx,dy),influence=Math.max(0,1-dist/260);
      c.vx+=(pointer.dx*influence*.23+dx/(dist||1)*influence*energy*38+(c.homeX-c.x)*.07+Math.sin(clock*.3+c.id)*energy*7)*dt;
      c.vy+=(pointer.dy*influence*.23+dy/(dist||1)*influence*energy*38+(c.homeY-c.y)*.07+Math.cos(clock*.25+c.id)*energy*7)*dt;
      c.vx*=Math.exp(-dt*1.1);c.vy*=Math.exp(-dt*1.1);c.x+=c.vx*dt;c.y+=c.vy*dt;c.a+=Math.sin(clock*.2+c.id)*energy*dt*.025;c.flash*=Math.exp(-dt*2);
    }
    pointer.dx*=.8;pointer.dy*=.8;
    for(const p of pulses){p.t+=dt*p.speed;if(p.t>=1)cells[p.reverse?p.edge.a:p.edge.b].flash=.7;}
    pulses=pulses.filter(p=>p.t<1);
    const transformed=topology.update(elapsed,pulses);
    if(clock>=ambientAt){excite(cells[Math.floor(random(ambientAt)*cells.length)]);ambientAt=clock+5.5+random(clock)*2.5;}
    if(energy>.08&&clock>fireAt){const nearest=cells.reduce((a,b)=>Math.hypot(a.x-pointer.x,a.y-pointer.y)<Math.hypot(b.x-pointer.x,b.y-pointer.y)?a:b);excite(nearest);fireAt=clock+.65;}
    const moving=cells.some(c=>Math.abs(c.vx)+Math.abs(c.vy)>.04||c.flash>.005);
    if(energy>.005||pulses.length||moving||transformed)draw();
    if(energy>.005||pulses.length||moving||topology.active)raf=requestAnimationFrame(tick);
    else idleTimer=setTimeout(()=>{idleTimer=0;wake();},500);
  }
  function wake(){clearTimeout(idleTimer);idleTimer=0;if(!raf&&!document.hidden&&!reduced.matches)raf=requestAnimationFrame(tick);}
  function resize(){costs.length=0;w=innerWidth;h=innerHeight;dpr=Math.min(devicePixelRatio||1,baseline?1.6:(w<650?1.25:1.6));canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);build();draw();}
  function interact(e){
    if(reduced.matches)return;
    pointer.dx=Math.max(-120,Math.min(120,e.clientX-pointer.x));pointer.dy=Math.max(-120,Math.min(120,e.clientY-pointer.y));pointer.x=e.clientX;pointer.y=e.clientY;energy=Math.min(1,energy+.28);wake();
  }
  addEventListener('pointermove',interact,{passive:true});
  addEventListener('hermes:navigate',event=>{
    if(reduced.matches||!cells.length)return;
    const {x,y}=event.detail;
    let cell=cells.reduce((a,b)=>Math.hypot(a.x-x,a.y-y)<Math.hypot(b.x-x,b.y-y)?a:b);
    cell.flash=1;
    // A bounded wave recruits neighboring cells, with downward branches visited first.
    pulses=pulses.filter(p=>!p.navigation);
    const visited=new Set([cell.id]),queue=[{cell,depth:0}];
    for(let i=0;i<queue.length&&pulses.length<42;i++){
      const current=queue[i];
      if(current.depth>=3)continue;
      const branches=links.filter(e=>!e.retiring&&e.growth===1&&(e.a===current.cell.id||e.b===current.cell.id))
        .sort((a,b)=>cells[b.a===current.cell.id?b.b:b.a].y-cells[a.a===current.cell.id?a.b:a.a].y);
      let count=0;
      for(const edge of branches){
        const next=cells[edge.a===current.cell.id?edge.b:edge.a];
        if(visited.has(next.id)||count>=3||pulses.length>=42)continue;
        visited.add(next.id);count++;
        pulses.push({edge,t:-current.depth,reverse:edge.b===current.cell.id,speed:.85,navigation:true});
        queue.push({cell:next,depth:current.depth+1});
      }
    }
    energy=Math.max(energy,.2);wake();
  });
  addEventListener('pointerdown',e=>{interact(e);if(!reduced.matches){energy=1;excite(cells.reduce((a,b)=>Math.hypot(a.x-e.clientX,a.y-e.clientY)<Math.hypot(b.x-e.clientX,b.y-e.clientY)?a:b));}},{passive:true});
  document.addEventListener('pointerleave',()=>{pointer.x=-1000;pointer.y=-1000;pointer.dx=pointer.dy=0;});
  document.addEventListener('visibilitychange',()=>{cancelAnimationFrame(raf);clearTimeout(idleTimer);idleTimer=0;raf=0;last=0;if(!document.hidden)wake();});
  reduced.addEventListener('change',()=>{cancelAnimationFrame(raf);clearTimeout(idleTimer);idleTimer=0;raf=0;last=0;energy=0;pulses=[];topology.settle();cells.forEach(c=>{c.vx=c.vy=c.flash=0;});draw();if(!reduced.matches)wake();});
  addEventListener('resize',resize);resize();wake();
})();
