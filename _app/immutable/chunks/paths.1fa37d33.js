import{n as c,s as h}from"./scheduler.081d6d8b.js";const t=[];function d(o,l=c){let n;const i=new Set;function r(e){if(h(o,e)&&(o=e,n)){const b=!t.length;for(const s of i)s[1](),t.push(s,o);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function f(e){r(e(o))}function _(e,b=c){const s=[e,b];return i.add(s),i.size===1&&(n=l(r,f)||c),e(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_h8eo1p)==null?void 0:u.base)??"";var a;const q=((a=globalThis.__sveltekit_h8eo1p)==null?void 0:a.assets)??p;export{q as a,p as b,d as w};
