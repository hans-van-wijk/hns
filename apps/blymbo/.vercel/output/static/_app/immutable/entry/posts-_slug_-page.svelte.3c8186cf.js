import{S as I,i as L,s as M,y as v,z as H,A as w,g as S,d as D,B as y,a as A,k as d,q as P,c as C,l as h,m as g,r as b,h as f,n as k,b as _,D as E,u as z}from"../chunks/index.3d305e5e.js";import{C as B}from"../chunks/Titlebar.svelte_svelte_type_style_lang.18768c05.js";import{S as F}from"../chunks/Section.710e1b89.js";import{H as G}from"../chunks/Hero.3812edb5.js";function O(s){let e,r,t,n,i=T(s[0].post.createdAt)+"",u,$,l,p=s[0].post.content+"",c;return e=new G({props:{title:s[0].post.title,type:"contained"}}),{c(){v(e.$$.fragment),r=A(),t=d("hgroup"),n=d("h2"),u=P(i),$=A(),l=d("div"),this.h()},l(a){H(e.$$.fragment,a),r=C(a),t=h(a,"HGROUP",{});var o=g(t);n=h(o,"H2",{});var m=g(n);u=b(m,i),m.forEach(f),o.forEach(f),$=C(a),l=h(a,"DIV",{class:!0});var q=g(l);q.forEach(f),this.h()},h(){k(l,"class","content")},m(a,o){w(e,a,o),_(a,r,o),_(a,t,o),E(t,n),E(n,u),_(a,$,o),_(a,l,o),l.innerHTML=p,c=!0},p(a,o){const m={};o&1&&(m.title=a[0].post.title),e.$set(m),(!c||o&1)&&i!==(i=T(a[0].post.createdAt)+"")&&z(u,i),(!c||o&1)&&p!==(p=a[0].post.content+"")&&(l.innerHTML=p)},i(a){c||(S(e.$$.fragment,a),c=!0)},o(a){D(e.$$.fragment,a),c=!1},d(a){y(e,a),a&&f(r),a&&f(t),a&&f($),a&&f(l)}}}function R(s){let e,r;return e=new B({props:{type:"content",$$slots:{default:[O]},$$scope:{ctx:s}}}),{c(){v(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,n){w(e,t,n),r=!0},p(t,n){const i={};n&3&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){D(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function U(s){let e,r;return e=new F({props:{$$slots:{default:[R]},$$scope:{ctx:s}}}),{c(){v(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,n){w(e,t,n),r=!0},p(t,[n]){const i={};n&3&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){D(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function T(s){return new Intl.DateTimeFormat("en",{dateStyle:"long"}).format(s)}function V(s,e,r){let{data:t}=e;return s.$$set=n=>{"data"in n&&r(0,t=n.data)},[t]}class N extends I{constructor(e){super(),L(this,e,V,U,M,{data:0})}}export{N as default};