import{n as c,s as p}from"./scheduler.081d6d8b.js";const e=[];function d(o,a=c){let n;const i=new Set;function r(t){if(p(o,t)&&(o=t,n)){const b=!e.length;for(const s of i)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(o))}function _(t,b=c){const s=[t,b];return i.add(s),i.size===1&&(n=a(r,f)||c),t(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_tlvkop)==null?void 0:u.base)??"";var l;const k=((l=globalThis.__sveltekit_tlvkop)==null?void 0:l.assets)??h;export{k as a,h as b,d as w};
