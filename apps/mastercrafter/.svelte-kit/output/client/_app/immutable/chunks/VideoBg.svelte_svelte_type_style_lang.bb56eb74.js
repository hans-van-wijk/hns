import{S as ne,i as se,s as O,e as D,b as M,C as ge,h as S,a0 as R,E as Te,k as oe,q as Xe,l as re,m as ie,r as Ye,$ as H,O as Ze,u as $e,H as Ee,M as Pe,n as et,N as w,Q as Oe,R as Me,T as Fe,g as le,d as ce}from"./index.46b61105.js";function V(e){let t,s,r,n,o=[{class:r=R(`hns-heading hns-scale-${e[2]}}`)+" svelte-tpbhs0"},{style:n=`--hns-heading-max: ${e[3]()}`}],i={};for(let c=0;c<o.length;c+=1)i=Te(i,o[c]);return{c(){t=oe(e[0]),s=Xe(e[1]),this.h()},l(c){t=re(c,(e[0]||"null").toUpperCase(),{class:!0,style:!0});var l=ie(t);s=Ye(l,e[1]),l.forEach(S),this.h()},h(){H(e[0])(t,i)},m(c,l){M(c,t,l),Ze(t,s)},p(c,l){l&2&&$e(s,c[1]),H(c[0])(t,i=Ee(o,[l&4&&r!==(r=R(`hns-heading hns-scale-${c[2]}}`)+" svelte-tpbhs0")&&{class:r},{style:n}]))},d(c){c&&S(t)}}}function tt(e){let t=e[0],s,r=e[0]&&V(e);return{c(){r&&r.c(),s=D()},l(n){r&&r.l(n),s=D()},m(n,o){r&&r.m(n,o),M(n,s,o)},p(n,[o]){n[0]?t?O(t,n[0])?(r.d(1),r=V(n),t=n[0],r.c(),r.m(s.parentNode,s)):r.p(n,o):(r=V(n),t=n[0],r.c(),r.m(s.parentNode,s)):t&&(r.d(1),r=null,t=n[0])},i:ge,o:ge,d(n){n&&S(s),r&&r.d(n)}}}function nt(e,t,s){let{el:r="p"}=t,{text:n=""}=t,{scale:o=3}=t,{ratio:i=1.333}=t;const c=()=>{let l=o;if(o>1){l--;for(var a=1;a<o;a++)console.log(a),l=l*i}return console.log(l),Math.round(l*100)/100+"rem"};return e.$$set=l=>{"el"in l&&s(0,r=l.el),"text"in l&&s(1,n=l.text),"scale"in l&&s(2,o=l.scale),"ratio"in l&&s(4,i=l.ratio)},[r,n,o,c,i]}class cn extends ne{constructor(t){super(),se(this,t,nt,tt,O,{el:0,text:1,scale:2,ratio:4})}}function st(e){let t,s;const r=e[2].default,n=Pe(r,e,e[1],null);return{c(){t=oe("div"),n&&n.c(),this.h()},l(o){t=re(o,"DIV",{class:!0});var i=ie(t);n&&n.l(i),i.forEach(S),this.h()},h(){et(t,"class","hns-container svelte-1lbef3v"),w(t,"hns-container-content",e[0]==="content"),w(t,"hns-container-contained",e[0]==="contained")},m(o,i){M(o,t,i),n&&n.m(t,null),s=!0},p(o,[i]){n&&n.p&&(!s||i&2)&&Oe(n,r,o,o[1],s?Fe(r,o[1],i,null):Me(o[1]),null),(!s||i&1)&&w(t,"hns-container-content",o[0]==="content"),(!s||i&1)&&w(t,"hns-container-contained",o[0]==="contained")},i(o){s||(le(n,o),s=!0)},o(o){ce(n,o),s=!1},d(o){o&&S(t),n&&n.d(o)}}}function ot(e,t,s){let{$$slots:r={},$$scope:n}=t,{type:o=""}=t;return e.$$set=i=>{"type"in i&&s(0,o=i.type),"$$scope"in i&&s(1,n=i.$$scope)},[o,n,r]}class an extends ne{constructor(t){super(),se(this,t,ot,st,O,{type:0})}}function G(e){let t,s,r;const n=e[5].default,o=Pe(n,e,e[4],null);let i=[{class:s=R(`hns-stack hns-stack-spacing-${e[1]} 
  hns-stack-${e[2]}`)+" svelte-e5kdm4"}],c={};for(let l=0;l<i.length;l+=1)c=Te(c,i[l]);return{c(){t=oe(e[0]),o&&o.c(),this.h()},l(l){t=re(l,(e[0]||"null").toUpperCase(),{class:!0});var a=ie(t);o&&o.l(a),a.forEach(S),this.h()},h(){H(e[0])(t,c),w(t,"hns-stack-center",e[3]==="center"),w(t,"hns-stack-spread",e[3]==="spread")},m(l,a){M(l,t,a),o&&o.m(t,null),r=!0},p(l,a){o&&o.p&&(!r||a&16)&&Oe(o,n,l,l[4],r?Fe(n,l[4],a,null):Me(l[4]),null),H(l[0])(t,c=Ee(i,[(!r||a&6&&s!==(s=R(`hns-stack hns-stack-spacing-${l[1]} 
  hns-stack-${l[2]}`)+" svelte-e5kdm4"))&&{class:s}])),w(t,"hns-stack-center",l[3]==="center"),w(t,"hns-stack-spread",l[3]==="spread")},i(l){r||(le(o,l),r=!0)},o(l){ce(o,l),r=!1},d(l){l&&S(t),o&&o.d(l)}}}function rt(e){let t=e[0],s,r,n=e[0]&&G(e);return{c(){n&&n.c(),s=D()},l(o){n&&n.l(o),s=D()},m(o,i){n&&n.m(o,i),M(o,s,i),r=!0},p(o,[i]){o[0]?t?O(t,o[0])?(n.d(1),n=G(o),t=o[0],n.c(),n.m(s.parentNode,s)):n.p(o,i):(n=G(o),t=o[0],n.c(),n.m(s.parentNode,s)):t&&(n.d(1),n=null,t=o[0])},i(o){r||(le(n),r=!0)},o(o){ce(n),r=!1},d(o){o&&S(s),n&&n.d(o)}}}function it(e,t,s){let{$$slots:r={},$$scope:n}=t,{el:o="div"}=t,{spacing:i="gutter"}=t,{layout:c="vertical"}=t,{justify:l=""}=t;return e.$$set=a=>{"el"in a&&s(0,o=a.el),"spacing"in a&&s(1,i=a.spacing),"layout"in a&&s(2,c=a.layout),"justify"in a&&s(3,l=a.justify),"$$scope"in a&&s(4,n=a.$$scope)},[o,i,c,l,n,r]}class fn extends ne{constructor(t){super(),se(this,t,it,rt,O,{el:0,spacing:1,layout:2,justify:3})}}const T=/^[a-z0-9]+(-[a-z0-9]+)*$/,z=(e,t,s,r="")=>{const n=e.split(":");if(e.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;r=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const c=n.pop(),l=n.pop(),a={provider:n.length>0?n[0]:r,prefix:l,name:c};return t&&!A(a)?null:a}const o=n[0],i=o.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return t&&!A(c)?null:c}if(s&&r===""){const c={provider:r,prefix:"",name:o};return t&&!A(c,s)?null:c}return null},A=(e,t)=>e?!!((e.provider===""||e.provider.match(T))&&(t&&e.prefix===""||e.prefix.match(T))&&e.name.match(T)):!1,Le=Object.freeze({left:0,top:0,width:16,height:16}),B=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),q=Object.freeze({...Le,...B}),W=Object.freeze({...q,body:"",hidden:!1});function lt(e,t){const s={};!e.hFlip!=!t.hFlip&&(s.hFlip=!0),!e.vFlip!=!t.vFlip&&(s.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(s.rotate=r),s}function me(e,t){const s=lt(e,t);for(const r in W)r in B?r in e&&!(r in s)&&(s[r]=B[r]):r in t?s[r]=t[r]:r in e&&(s[r]=e[r]);return s}function ct(e,t){const s=e.icons,r=e.aliases||Object.create(null),n=Object.create(null);function o(i){if(s[i])return n[i]=[];if(!(i in n)){n[i]=null;const c=r[i]&&r[i].parent,l=c&&o(c);l&&(n[i]=[c].concat(l))}return n[i]}return(t||Object.keys(s).concat(Object.keys(r))).forEach(o),n}function at(e,t,s){const r=e.icons,n=e.aliases||Object.create(null);let o={};function i(c){o=me(r[c]||n[c],o)}return i(t),s.forEach(i),me(e,o)}function Ae(e,t){const s=[];if(typeof e!="object"||typeof e.icons!="object")return s;e.not_found instanceof Array&&e.not_found.forEach(n=>{t(n,null),s.push(n)});const r=ct(e);for(const n in r){const o=r[n];o&&(t(n,at(e,n,o)),s.push(n))}return s}const ft={provider:"",aliases:{},not_found:{},...Le};function K(e,t){for(const s in t)if(s in e&&typeof e[s]!=typeof t[s])return!1;return!0}function Ne(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!K(e,ft))return null;const s=t.icons;for(const n in s){const o=s[n];if(!n.match(T)||typeof o.body!="string"||!K(o,W))return null}const r=t.aliases||Object.create(null);for(const n in r){const o=r[n],i=o.parent;if(!n.match(T)||typeof i!="string"||!s[i]&&!r[i]||!K(o,W))return null}return t}const ye=Object.create(null);function ut(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function k(e,t){const s=ye[e]||(ye[e]=Object.create(null));return s[t]||(s[t]=ut(e,t))}function ae(e,t){return Ne(t)?Ae(t,(s,r)=>{r?e.icons[s]=r:e.missing.add(s)}):[]}function dt(e,t,s){try{if(typeof s.body=="string")return e.icons[t]={...s},!0}catch{}return!1}let E=!1;function De(e){return typeof e=="boolean"&&(E=e),E}function ht(e){const t=typeof e=="string"?z(e,!0,E):e;if(t){const s=k(t.provider,t.prefix),r=t.name;return s.icons[r]||(s.missing.has(r)?null:void 0)}}function pt(e,t){const s=z(e,!0,E);if(!s)return!1;const r=k(s.provider,s.prefix);return dt(r,s.name,t)}function gt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),E&&!t&&!e.prefix){let n=!1;return Ne(e)&&(e.prefix="",Ae(e,(o,i)=>{i&&pt(o,i)&&(n=!0)})),n}const s=e.prefix;if(!A({provider:t,prefix:s,name:"a"}))return!1;const r=k(t,s);return!!ae(r,e)}const Re=Object.freeze({width:null,height:null}),He=Object.freeze({...Re,...B}),mt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,yt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function _e(e,t,s){if(t===1)return e;if(s=s||100,typeof e=="number")return Math.ceil(e*t*s)/s;if(typeof e!="string")return e;const r=e.split(mt);if(r===null||!r.length)return e;const n=[];let o=r.shift(),i=yt.test(o);for(;;){if(i){const c=parseFloat(o);isNaN(c)?n.push(o):n.push(Math.ceil(c*t*s)/s)}else n.push(o);if(o=r.shift(),o===void 0)return n.join("");i=!i}}const _t=e=>e==="unset"||e==="undefined"||e==="none";function vt(e,t){const s={...q,...e},r={...He,...t},n={left:s.left,top:s.top,width:s.width,height:s.height};let o=s.body;[s,r].forEach(y=>{const m=[],C=y.hFlip,g=y.vFlip;let u=y.rotate;C?g?u+=2:(m.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),m.push("scale(-1 1)"),n.top=n.left=0):g&&(m.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),m.push("scale(1 -1)"),n.top=n.left=0);let _;switch(u<0&&(u-=Math.floor(u/4)*4),u=u%4,u){case 1:_=n.height/2+n.top,m.unshift("rotate(90 "+_.toString()+" "+_.toString()+")");break;case 2:m.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:_=n.width/2+n.left,m.unshift("rotate(-90 "+_.toString()+" "+_.toString()+")");break}u%2===1&&(n.left!==n.top&&(_=n.left,n.left=n.top,n.top=_),n.width!==n.height&&(_=n.width,n.width=n.height,n.height=_)),m.length&&(o='<g transform="'+m.join(" ")+'">'+o+"</g>")});const i=r.width,c=r.height,l=n.width,a=n.height;let f,d;i===null?(d=c===null?"1em":c==="auto"?a:c,f=_e(d,l/a)):(f=i==="auto"?l:i,d=c===null?_e(f,a/l):c==="auto"?a:c);const p={},v=(y,m)=>{_t(m)||(p[y]=m.toString())};return v("width",f),v("height",d),p.viewBox=n.left.toString()+" "+n.top.toString()+" "+l.toString()+" "+a.toString(),{attributes:p,body:o}}const bt=/\sid="(\S+)"/g,wt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let St=0;function It(e,t=wt){const s=[];let r;for(;r=bt.exec(e);)s.push(r[1]);if(!s.length)return e;const n="suffix"+(Math.random()*16777216|Date.now()).toString(16);return s.forEach(o=>{const i=typeof t=="function"?t(o):t+(St++).toString(),c=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+n+"$3")}),e=e.replace(new RegExp(n,"g"),""),e}const X=Object.create(null);function kt(e,t){X[e]=t}function Y(e){return X[e]||X[""]}function fe(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const ue=Object.create(null),j=["https://api.simplesvg.com","https://api.unisvg.com"],N=[];for(;j.length>0;)j.length===1||Math.random()>.5?N.push(j.shift()):N.push(j.pop());ue[""]=fe({resources:["https://api.iconify.design"].concat(N)});function Ct(e,t){const s=fe(t);return s===null?!1:(ue[e]=s,!0)}function de(e){return ue[e]}const xt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ve=xt();function jt(e,t){const s=de(e);if(!s)return 0;let r;if(!s.maxURL)r=0;else{let n=0;s.resources.forEach(i=>{n=Math.max(n,i.length)});const o=t+".json?icons=";r=s.maxURL-n-s.path.length-o.length}return r}function Tt(e){return e===404}const Et=(e,t,s)=>{const r=[],n=jt(e,t),o="icons";let i={type:o,provider:e,prefix:t,icons:[]},c=0;return s.forEach((l,a)=>{c+=l.length+1,c>=n&&a>0&&(r.push(i),i={type:o,provider:e,prefix:t,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function Pt(e){if(typeof e=="string"){const t=de(e);if(t)return t.path}return"/"}const Ot=(e,t,s)=>{if(!ve){s("abort",424);return}let r=Pt(t.provider);switch(t.type){case"icons":{const o=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=o+".json?"+l.toString();break}case"custom":{const o=t.uri;r+=o.slice(0,1)==="/"?o.slice(1):o;break}default:s("abort",400);return}let n=503;ve(e+r).then(o=>{const i=o.status;if(i!==200){setTimeout(()=>{s(Tt(i)?"abort":"next",i)});return}return n=501,o.json()}).then(o=>{if(typeof o!="object"||o===null){setTimeout(()=>{o===404?s("abort",o):s("next",n)});return}setTimeout(()=>{s("success",o)})}).catch(()=>{s("next",n)})},Mt={prepare:Et,send:Ot};function Ft(e){const t={loaded:[],missing:[],pending:[]},s=Object.create(null);e.sort((n,o)=>n.provider!==o.provider?n.provider.localeCompare(o.provider):n.prefix!==o.prefix?n.prefix.localeCompare(o.prefix):n.name.localeCompare(o.name));let r={provider:"",prefix:"",name:""};return e.forEach(n=>{if(r.name===n.name&&r.prefix===n.prefix&&r.provider===n.provider)return;r=n;const o=n.provider,i=n.prefix,c=n.name,l=s[o]||(s[o]=Object.create(null)),a=l[i]||(l[i]=k(o,i));let f;c in a.icons?f=t.loaded:i===""||a.missing.has(c)?f=t.missing:f=t.pending;const d={provider:o,prefix:i,name:c};f.push(d)}),t}function Be(e,t){e.forEach(s=>{const r=s.loaderCallbacks;r&&(s.loaderCallbacks=r.filter(n=>n.id!==t))})}function Lt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let s=!1;const r=e.provider,n=e.prefix;t.forEach(o=>{const i=o.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==n)return!0;const a=l.name;if(e.icons[a])i.loaded.push({provider:r,prefix:n,name:a});else if(e.missing.has(a))i.missing.push({provider:r,prefix:n,name:a});else return s=!0,!0;return!1}),i.pending.length!==c&&(s||Be([e],o.id),o.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),o.abort))})}))}let At=0;function Nt(e,t,s){const r=At++,n=Be.bind(null,s,r);if(!t.pending.length)return n;const o={id:r,icons:t,callback:e,abort:n};return s.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(o)}),n}function Dt(e,t=!0,s=!1){const r=[];return e.forEach(n=>{const o=typeof n=="string"?z(n,t,s):n;o&&r.push(o)}),r}var Rt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Ht(e,t,s,r){const n=e.resources.length,o=e.random?Math.floor(Math.random()*n):e.index;let i;if(e.random){let h=e.resources.slice(0);for(i=[];h.length>1;){const b=Math.floor(Math.random()*h.length);i.push(h[b]),h=h.slice(0,b).concat(h.slice(b+1))}i=i.concat(h)}else i=e.resources.slice(o).concat(e.resources.slice(0,o));const c=Date.now();let l="pending",a=0,f,d=null,p=[],v=[];typeof r=="function"&&v.push(r);function y(){d&&(clearTimeout(d),d=null)}function m(){l==="pending"&&(l="aborted"),y(),p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function C(h,b){b&&(v=[]),typeof h=="function"&&v.push(h)}function g(){return{startTime:c,payload:t,status:l,queriesSent:a,queriesPending:p.length,subscribe:C,abort:m}}function u(){l="failed",v.forEach(h=>{h(void 0,f)})}function _(){p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function We(h,b,x){const F=b!=="success";switch(p=p.filter(I=>I!==h),l){case"pending":break;case"failed":if(F||!e.dataAfterTimeout)return;break;default:return}if(b==="abort"){f=x,u();return}if(F){f=x,p.length||(i.length?U():u());return}if(y(),_(),!e.random){const I=e.resources.indexOf(h.resource);I!==-1&&I!==e.index&&(e.index=I)}l="completed",v.forEach(I=>{I(x)})}function U(){if(l!=="pending")return;y();const h=i.shift();if(h===void 0){if(p.length){d=setTimeout(()=>{y(),l==="pending"&&(_(),u())},e.timeout);return}u();return}const b={status:"pending",resource:h,callback:(x,F)=>{We(b,x,F)}};p.push(b),a++,d=setTimeout(U,e.rotate),s(h,t,b.callback)}return setTimeout(U),g}function ze(e){const t={...Rt,...e};let s=[];function r(){s=s.filter(c=>c().status==="pending")}function n(c,l,a){const f=Ht(t,c,l,(d,p)=>{r(),a&&a(d,p)});return s.push(f),f}function o(c){return s.find(l=>c(l))||null}return{query:n,find:o,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function be(){}const J=Object.create(null);function Bt(e){if(!J[e]){const t=de(e);if(!t)return;const s=ze(t),r={config:t,redundancy:s};J[e]=r}return J[e]}function zt(e,t,s){let r,n;if(typeof e=="string"){const o=Y(e);if(!o)return s(void 0,424),be;n=o.send;const i=Bt(e);i&&(r=i.redundancy)}else{const o=fe(e);if(o){r=ze(o);const i=e.resources?e.resources[0]:"",c=Y(i);c&&(n=c.send)}}return!r||!n?(s(void 0,424),be):r.query(t,n,s)().abort}const we="iconify2",P="iconify",qe=P+"-count",Se=P+"-version",Qe=36e5,qt=168;function Z(e,t){try{return e.getItem(t)}catch{}}function he(e,t,s){try{return e.setItem(t,s),!0}catch{}}function Ie(e,t){try{e.removeItem(t)}catch{}}function $(e,t){return he(e,qe,t.toString())}function ee(e){return parseInt(Z(e,qe))||0}const Q={local:!0,session:!0},Ue={local:new Set,session:new Set};let pe=!1;function Qt(e){pe=e}let L=typeof window>"u"?{}:window;function Ve(e){const t=e+"Storage";try{if(L&&L[t]&&typeof L[t].length=="number")return L[t]}catch{}Q[e]=!1}function Ge(e,t){const s=Ve(e);if(!s)return;const r=Z(s,Se);if(r!==we){if(r){const c=ee(s);for(let l=0;l<c;l++)Ie(s,P+l.toString())}he(s,Se,we),$(s,0);return}const n=Math.floor(Date.now()/Qe)-qt,o=c=>{const l=P+c.toString(),a=Z(s,l);if(typeof a=="string"){try{const f=JSON.parse(a);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>n&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,c))return!0}catch{}Ie(s,l)}};let i=ee(s);for(let c=i-1;c>=0;c--)o(c)||(c===i-1?(i--,$(s,i)):Ue[e].add(c))}function Ke(){if(!pe){Qt(!0);for(const e in Q)Ge(e,t=>{const s=t.data,r=t.provider,n=s.prefix,o=k(r,n);if(!ae(o,s).length)return!1;const i=s.lastModified||-1;return o.lastModifiedCached=o.lastModifiedCached?Math.min(o.lastModifiedCached,i):i,!0})}}function Ut(e,t){const s=e.lastModifiedCached;if(s&&s>=t)return s===t;if(e.lastModifiedCached=t,s)for(const r in Q)Ge(r,n=>{const o=n.data;return n.provider!==e.provider||o.prefix!==e.prefix||o.lastModified===t});return!0}function Vt(e,t){pe||Ke();function s(r){let n;if(!Q[r]||!(n=Ve(r)))return;const o=Ue[r];let i;if(o.size)o.delete(i=Array.from(o).shift());else if(i=ee(n),!$(n,i+1))return;const c={cached:Math.floor(Date.now()/Qe),provider:e.provider,data:t};return he(n,P+i.toString(),JSON.stringify(c))}t.lastModified&&!Ut(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),s("local")||s("session"))}function ke(){}function Gt(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Lt(e)}))}function Kt(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:s,prefix:r}=e,n=e.iconsToLoad;delete e.iconsToLoad;let o;if(!n||!(o=Y(s)))return;o.prepare(s,r,n).forEach(c=>{zt(s,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{e.missing.add(a)});else try{const a=ae(e,l);if(!a.length)return;const f=e.pendingIcons;f&&a.forEach(d=>{f.delete(d)}),Vt(e,l)}catch(a){console.error(a)}Gt(e)})})}))}const Jt=(e,t)=>{const s=Dt(e,!0,De()),r=Ft(s);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,ke)}),()=>{l=!1}}const n=Object.create(null),o=[];let i,c;return r.pending.forEach(l=>{const{provider:a,prefix:f}=l;if(f===c&&a===i)return;i=a,c=f,o.push(k(a,f));const d=n[a]||(n[a]=Object.create(null));d[f]||(d[f]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:f,name:d}=l,p=k(a,f),v=p.pendingIcons||(p.pendingIcons=new Set);v.has(d)||(v.add(d),n[a][f].push(d))}),o.forEach(l=>{const{provider:a,prefix:f}=l;n[a][f].length&&Kt(l,n[a][f])}),t?Nt(t,r,o):ke};function Wt(e,t){const s={...e};for(const r in t){const n=t[r],o=typeof n;r in Re?(n===null||n&&(o==="string"||o==="number"))&&(s[r]=n):o===typeof s[r]&&(s[r]=r==="rotate"?n%4:n)}return s}const Xt=/[\s,]+/;function Yt(e,t){t.split(Xt).forEach(s=>{switch(s.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Zt(e,t=0){const s=e.replace(/^-?[0-9.]*/,"");function r(n){for(;n<0;)n+=4;return n%4}if(s===""){const n=parseInt(e);return isNaN(n)?0:r(n)}else if(s!==e){let n=0;switch(s){case"%":n=25;break;case"deg":n=90}if(n){let o=parseFloat(e.slice(0,e.length-s.length));return isNaN(o)?0:(o=o/n,o%1===0?r(o):0)}}return t}function $t(e,t){let s=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)s+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+s+">"+e+"</svg>"}function en(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function tn(e){return'url("data:image/svg+xml,'+en(e)+'")'}const Ce={...He,inline:!1},nn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},sn={display:"inline-block"},te={"background-color":"currentColor"},Je={"background-color":"transparent"},xe={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},je={"-webkit-mask":te,mask:te,background:Je};for(const e in je){const t=je[e];for(const s in xe)t[e+"-"+s]=xe[s]}function on(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function rn(e,t){const s=Wt(Ce,t),r=t.mode||"svg",n=r==="svg"?{...nn}:{};e.body.indexOf("xlink:")===-1&&delete n["xmlns:xlink"];let o=typeof t.style=="string"?t.style:"";for(let g in t){const u=t[g];if(u!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":s[g]=u===!0||u==="true"||u===1;break;case"flip":typeof u=="string"&&Yt(s,u);break;case"color":o=o+(o.length>0&&o.trim().slice(-1)!==";"?";":"")+"color: "+u+"; ";break;case"rotate":typeof u=="string"?s[g]=Zt(u):typeof u=="number"&&(s[g]=u);break;case"ariaHidden":case"aria-hidden":u!==!0&&u!=="true"&&delete n["aria-hidden"];break;default:if(g.slice(0,3)==="on:")break;Ce[g]===void 0&&(n[g]=u)}}const i=vt(e,s),c=i.attributes;if(s.inline&&(o="vertical-align: -0.125em; "+o),r==="svg"){Object.assign(n,c),o!==""&&(n.style=o);let g=0,u=t.id;return typeof u=="string"&&(u=u.replace(/-/g,"_")),{svg:!0,attributes:n,body:It(i.body,u?()=>u+"ID"+g++:"iconifySvelte")}}const{body:l,width:a,height:f}=e,d=r==="mask"||(r==="bg"?!1:l.indexOf("currentColor")!==-1),p=$t(l,{...c,width:a+"",height:f+""}),y={"--svg":tn(p)},m=g=>{const u=c[g];u&&(y[g]=on(u))};m("width"),m("height"),Object.assign(y,sn,d?te:Je);let C="";for(const g in y)C+=g+": "+y[g]+";";return n.style=C+o,{svg:!1,attributes:n}}De(!0);kt("",Mt);if(typeof document<"u"&&typeof window<"u"){Ke();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,s="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!gt(r))&&console.error(s)}catch{console.error(s)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let s in t){const r="IconifyProviders["+s+"] is invalid.";try{const n=t[s];if(typeof n!="object"||!n||n.resources===void 0)continue;Ct(s,n)||console.error(r)}catch{console.error(r)}}}}function un(e,t,s,r,n){function o(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",o(),{data:{...q,...e}};let i;if(typeof e!="string"||(i=z(e,!1,!0))===null)return o(),null;const c=ht(i);if(!c)return s&&(!t.loading||t.loading.name!==e)&&(o(),t.name="",t.loading={name:e,abort:Jt([i],r)}),null;o(),t.name!==e&&(t.name=e,n&&!t.destroyed&&n(e));const l=["iconify"];return i.prefix!==""&&l.push("iconify--"+i.prefix),i.provider!==""&&l.push("iconify--"+i.provider),{data:c,classes:l}}function dn(e,t){return e?rn({...q,...e},t):null}export{an as C,cn as H,fn as S,un as c,dn as g};
