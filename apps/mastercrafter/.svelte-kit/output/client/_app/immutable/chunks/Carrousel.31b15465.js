import{S as p,i as I,s as w,k as C,l as S,n as f,Z as b,b as M,C as q,h as _,M as u,a as k,m as V,c as N,N as D,O,Q as h,R as d,T as m,g,d as v}from"./index.46b61105.js";import"./VideoBg.svelte_svelte_type_style_lang.bb56eb74.js";function P(n){let s,l;return{c(){s=C("img"),this.h()},l(i){s=S(i,"IMG",{alt:!0,src:!0}),this.h()},h(){f(s,"alt","Placeholder"),b(s.src,l=n[0])||f(s,"src",l)},m(i,e){M(i,s,e)},p(i,[e]){e&1&&!b(s.src,l=i[0])&&f(s,"src",l)},i:q,o:q,d(i){i&&_(s)}}}function Q(n,s,l){let{width:i=600}=s,{height:e=400}=s,{src:t=`https://via.placeholder.com/${i}x${e}?text=IMG`}=s;return n.$$set=r=>{"width"in r&&l(1,i=r.width),"height"in r&&l(2,e=r.height),"src"in r&&l(0,t=r.src)},[t,i,e]}class F extends p{constructor(s){super(),I(this,s,Q,P,w,{width:1,height:2,src:0})}}const R=n=>({}),E=n=>({}),T=n=>({}),G=n=>({});function Z(n){let s,l,i;const e=n[2].first,t=u(e,n,n[1],G),r=n[2].second,o=u(r,n,n[1],E);return{c(){s=C("div"),t&&t.c(),l=k(),o&&o.c(),this.h()},l(a){s=S(a,"DIV",{class:!0});var c=V(s);t&&t.l(c),l=N(c),o&&o.l(c),c.forEach(_),this.h()},h(){f(s,"class","hns-split"),D(s,"hns-split-rev",n[0])},m(a,c){M(a,s,c),t&&t.m(s,null),O(s,l),o&&o.m(s,null),i=!0},p(a,[c]){t&&t.p&&(!i||c&2)&&h(t,e,a,a[1],i?m(e,a[1],c,T):d(a[1]),G),o&&o.p&&(!i||c&2)&&h(o,r,a,a[1],i?m(r,a[1],c,R):d(a[1]),E),(!i||c&1)&&D(s,"hns-split-rev",a[0])},i(a){i||(g(t,a),g(o,a),i=!0)},o(a){v(t,a),v(o,a),i=!1},d(a){a&&_(s),t&&t.d(a),o&&o.d(a)}}}function j(n,s,l){let{$$slots:i={},$$scope:e}=s,{rev:t=!1}=s;return n.$$set=r=>{"rev"in r&&l(0,t=r.rev),"$$scope"in r&&l(1,e=r.$$scope)},[t,e,i]}class H extends p{constructor(s){super(),I(this,s,j,Z,w,{rev:0})}}function y(n){let s,l;const i=n[1].default,e=u(i,n,n[0],null);return{c(){s=C("div"),e&&e.c(),this.h()},l(t){s=S(t,"DIV",{class:!0});var r=V(s);e&&e.l(r),r.forEach(_),this.h()},h(){f(s,"class","hns-carrousel svelte-1gnpw4e")},m(t,r){M(t,s,r),e&&e.m(s,null),l=!0},p(t,[r]){e&&e.p&&(!l||r&1)&&h(e,i,t,t[0],l?m(i,t[0],r,null):d(t[0]),null)},i(t){l||(g(e,t),l=!0)},o(t){v(e,t),l=!1},d(t){t&&_(s),e&&e.d(t)}}}function z(n,s,l){let{$$slots:i={},$$scope:e}=s;return n.$$set=t=>{"$$scope"in t&&l(0,e=t.$$scope)},[e,i]}class J extends p{constructor(s){super(),I(this,s,z,y,w,{})}}export{J as C,F as I,H as S};
