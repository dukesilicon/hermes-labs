import {createHash} from 'node:crypto';
// Values are configured privately in Vercel, never embedded in the website.
const attempts=new Map();
const reply=(status,body)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});
export default {
 async fetch(request){
  const {RESEND_API_KEY,INQUIRY_TO_EMAIL,INQUIRY_FROM_EMAIL,VERCEL_URL}=process.env;
  const available=!!(RESEND_API_KEY&&INQUIRY_TO_EMAIL&&INQUIRY_FROM_EMAIL);
  if(request.method==='GET')return reply(200,{available});
  if(request.method!=='POST')return reply(405,{error:'Method not allowed'});
  const allowed=['https://hermes-labs-five.vercel.app',...(VERCEL_URL?['https://'+VERCEL_URL]:[])];
  if(!allowed.includes(request.headers.get('origin')))return reply(403,{error:'Origin not allowed'});
  if(!available)return reply(503,{error:'Email delivery unavailable'});
  if(!request.headers.get('content-type')?.startsWith('application/json'))return reply(415,{error:'JSON required'});
  const now=Date.now();
  for(const [key,value] of attempts)if(value.until<=now)attempts.delete(key);
  const ip=createHash('sha256').update(request.headers.get('x-forwarded-for')?.split(',')[0]||'unknown').digest('hex');
  const bucket=attempts.get(ip)||{count:0,until:now+600000};
  if(bucket.count>=5||(!attempts.has(ip)&&attempts.size>=2000))return reply(429,{error:'Please try again later'});
  bucket.count++;attempts.set(ip,bucket);
  let body;
  try{const text=await request.text();if(Buffer.byteLength(text)>32768)return reply(413,{error:'Inquiry too large'});body=JSON.parse(text);}catch{return reply(400,{error:'Invalid request'});}
  if(!body||typeof body!=='object')return reply(400,{error:'Invalid inquiry'});
  const {email,message,website,requestId}=body;
  if(typeof email!=='string'||email.length>254||! /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)||/[\r\n]/.test(email)||typeof message!=='string'||message.trim().length<10||message.length>5000||website||typeof requestId!=='string'||! /^[0-9a-f-]{36}$/i.test(requestId))return reply(400,{error:'Check your email and inquiry'});
  const key=createHash('sha256').update(JSON.stringify([requestId,email,message])).digest('hex');
  try{
   const response=await fetch('https://api.resend.com/emails',{
    method:'POST',headers:{Authorization:`Bearer ${RESEND_API_KEY}`,'Content-Type':'application/json','Idempotency-Key':'inquiry/'+key},
    body:JSON.stringify({from:INQUIRY_FROM_EMAIL,to:[INQUIRY_TO_EMAIL],reply_to:email,subject:'Hermes Labs — Research inquiry',text:`Reply email: ${email}\n\n${message.trim()}`}),
    signal:AbortSignal.timeout(8000)
   });
   if(!response.ok)return reply(502,{error:'Email service unavailable'});
   const result=await response.json();if(!result.id)return reply(502,{error:'Email service unavailable'});
   return reply(200,{ok:true});
  }catch{return reply(502,{error:'Email service unavailable'});}
 }
};
