import{S as U,i as V,s as D,e as b,b as v,g as c,d as r,h as u,a3 as W,P as p,W as k,E as N,a4 as S,k as q,a as Y,l as F,m as G,c as j,a5 as y,$ as g,D as z,v as A,f as B,F as H,G as I,H as P,Y as J,n as K}from"./index.3d305e5e.js";import"./Titlebar.svelte_svelte_type_style_lang.18768c05.js";const L=n=>({}),E=n=>({});function C(n){let l,a;const o=n[5].mediabg,s=N(o,n,n[4],E);return{c(){l=q("div"),s&&s.c(),this.h()},l(e){l=F(e,"DIV",{class:!0});var i=G(l);s&&s.l(i),i.forEach(u),this.h()},h(){K(l,"class","hns-section-mediabg svelte-l3c3mr")},m(e,i){v(e,l,i),s&&s.m(l,null),a=!0},p(e,i){s&&s.p&&(!a||i&16)&&H(s,o,e,e[4],a?P(o,e[4],i,L):I(e[4]),E)},i(e){a||(c(s,e),a=!0)},o(e){r(s,e),a=!1},d(e){e&&u(l),s&&s.d(e)}}}function h(n){let l,a,o,s,e=n[3].mediabg&&C(n);const i=n[5].default,f=N(i,n,n[4],null);let m=[{class:o=S(`hns-section ${n[2].class}`)+" svelte-l3c3mr"}],d={};for(let t=0;t<m.length;t+=1)d=p(d,m[t]);return{c(){l=q(n[0]),e&&e.c(),a=Y(),f&&f.c(),this.h()},l(t){l=F(t,(n[0]||"null").toUpperCase(),{class:!0});var _=G(l);e&&e.l(_),a=j(_),f&&f.l(_),_.forEach(u),this.h()},h(){y(n[0])(l,d),g(l,"hns-section-spacing-page",n[1]==="page"),g(l,"hns-section-spacing-small",n[1]==="small")},m(t,_){v(t,l,_),e&&e.m(l,null),z(l,a),f&&f.m(l,null),s=!0},p(t,_){t[3].mediabg?e?(e.p(t,_),_&8&&c(e,1)):(e=C(t),e.c(),c(e,1),e.m(l,a)):e&&(A(),r(e,1,1,()=>{e=null}),B()),f&&f.p&&(!s||_&16)&&H(f,i,t,t[4],s?P(i,t[4],_,null):I(t[4]),null),y(t[0])(l,d=J(m,[(!s||_&4&&o!==(o=S(`hns-section ${t[2].class}`)+" svelte-l3c3mr"))&&{class:o}])),g(l,"hns-section-spacing-page",t[1]==="page"),g(l,"hns-section-spacing-small",t[1]==="small")},i(t){s||(c(e),c(f,t),s=!0)},o(t){r(e),r(f,t),s=!1},d(t){t&&u(l),e&&e.d(),f&&f.d(t)}}}function M(n){let l=n[0],a,o,s=n[0]&&h(n);return{c(){s&&s.c(),a=b()},l(e){s&&s.l(e),a=b()},m(e,i){s&&s.m(e,i),v(e,a,i),o=!0},p(e,[i]){e[0]?l?D(l,e[0])?(s.d(1),s=h(e),l=e[0],s.c(),s.m(a.parentNode,a)):s.p(e,i):(s=h(e),l=e[0],s.c(),s.m(a.parentNode,a)):l&&(s.d(1),s=null,l=e[0])},i(e){o||(c(s),o=!0)},o(e){r(s),o=!1},d(e){e&&u(a),s&&s.d(e)}}}function O(n,l,a){let{$$slots:o={},$$scope:s}=l;const e=W(o);let{el:i="section"}=l,{spacing:f=""}=l;return n.$$set=m=>{a(2,l=p(p({},l),k(m))),"el"in m&&a(0,i=m.el),"spacing"in m&&a(1,f=m.spacing),"$$scope"in m&&a(4,s=m.$$scope)},l=k(l),[i,f,l,e,s,o]}class T extends U{constructor(l){super(),V(this,l,O,M,D,{el:0,spacing:1})}}export{T as S};
