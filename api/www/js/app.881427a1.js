(()=>{"use strict";var e={8228:(e,t,r)=>{r.d(t,{Z:()=>u});var o=r(1778),n=r(499),a=r(1675),i=r(6702),s=r(311),l=r(9835);const c=(0,l.aZ)({name:"AppWrapper",setup(e){return(0,l.bv)((()=>{const{proxy:{$q:e}}=(0,l.FN)();void 0!==e.onSSRHydrated&&e.onSSRHydrated()})),()=>(0,l.h)(a.Z,e)}});async function u(e,t,r){const a=e(c);a.use(o.Z,t,r);const l="function"===typeof i.Z?await(0,i.Z)({ssrContext:r}):i.Z;a.use(l),"undefined"!==typeof window&&void 0!==window.__INITIAL_STATE__&&(l.state.value=window.__INITIAL_STATE__,delete window.__INITIAL_STATE__);const u=(0,n.Xl)("function"===typeof s.Z?await(0,s.Z)({ssrContext:r,store:l}):s.Z);return l.use((({store:e})=>{e.router=u})),{app:a,store:l,router:u}}},2374:(e,t,r)=>{r(8964),r(702);var o=r(1957),n=r(8228),a=r(4764);const i="/";async function s({app:e,router:t,store:r},o){let n=!1;const a=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},s=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t)},l=window.location.href.replace(window.location.origin,"");for(let u=0;!1===n&&u<o.length;u++)try{await o[u]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:l,publicPath:i})}catch(c){return c&&c.url?void s(c.url):void console.error("[Quasar] boot error:",c)}!0!==n&&(e.use(t),t.isReady().then((()=>{e.mount("#q-app")})))}(0,n.Z)(o.vr,a.Z).then((e=>Promise.all([Promise.resolve().then(r.bind(r,3153))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));s(e,r)}))))},4764:(e,t,r)=>{r.d(t,{Z:()=>o});const o={config:{}}},7379:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(9835);const n=(0,o.aZ)({name:"App"})},934:(e,t,r)=>{r.d(t,{s:()=>n});var o=r(9835);function n(e,t,r,n,a,i){const s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(s)}},3153:(e,t,r)=>{r.r(t),r.d(t,{api:()=>i,default:()=>s});var o=r(3340),n=r(9981),a=r.n(n);const i=a().create({baseURL:"https://api.example.com"}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},311:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(3340),n=r(8910),a=r(4585);const i=(0,o.BC)((function(){const e=n.PO,t=(0,n.p7)({scrollBehavior:()=>({left:0,top:0}),routes:a.Z,history:e(void 0)});return t}))},4585:(e,t,r)=>{r.d(t,{Z:()=>n});const o=[{path:"/",component:()=>Promise.all([r.e(736),r.e(248)]).then(r.bind(r,2248)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(837)]).then(r.bind(r,8837))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(155)]).then(r.bind(r,5155))}],n=o},6702:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(3340),n=r(9309);const a=(0,o.h)((()=>{const e=(0,n.WB)();return e}))},1675:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(934),n=r(2045),a=r(1639);const i=(0,a.Z)(n.Z,[["render",o.s]]),s=i},2045:(e,t,r)=>{r.d(t,{Z:()=>o.Z});var o=r(7379)}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{155:"8cd6b8ff",248:"b0baf501",837:"e70b9703"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"81e88f7f"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="quasar-ssr-netlify:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[n];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),s=new Error,l=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,s,l]=o,c=0;if(i.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var u=l(r)}for(t&&t(o);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=globalThis["webpackChunkquasar_ssr_netlify"]=globalThis["webpackChunkquasar_ssr_netlify"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(2374)));o=r.O(o)})();