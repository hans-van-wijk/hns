import{S as R,i as T,s as A,k as S,a as E,l as z,m as V,c as I,h as c,n as m,M,N as q,b as g,D as H,K as P,E as O,O as X,F as U,G as W,H as F,g as h,d as p,P as Y,Q as B,y as d,z as v,A as w,B as k,q as j,r as D,u as N}from"../chunks/index.95b2fb94.js";import{S as K,C as Q}from"../chunks/Titlebar.svelte_svelte_type_style_lang.821120dd.js";import{H as Z}from"../chunks/Hero.fea771fb.js";import{H as y,T as J}from"../chunks/Heading.b954c9c3.js";import{S as L}from"../chunks/Stack.0b680d4d.js";function x(u){let e,s,t,a,l,i,f,r;return{c(){e=S("picture"),s=S("source"),t=E(),a=S("source"),l=E(),i=S("img"),this.h()},l(n){e=z(n,"PICTURE",{class:!0});var $=V(e);s=z($,"SOURCE",{srcset:!0,type:!0}),t=I($),a=z($,"SOURCE",{srcset:!0,type:!0}),l=I($),i=z($,"IMG",{width:!0,class:!0,alt:!0,loading:!0,decoding:!0,src:!0}),$.forEach(c),this.h()},h(){m(s,"srcset",u[1]),m(s,"type","image/webp"),m(a,"srcset",u[1]),m(a,"type","image/jpeg"),m(i,"width","1300"),m(i,"class","lazy hns-image svelte-oe75xs"),m(i,"alt","studio"),m(i,"loading","eager"),m(i,"decoding","async"),M(i.src,f=u[1])||m(i,"src",f),m(e,"class",r=q(`hns-image-container hns-ar-${u[0]}`)+" svelte-oe75xs")},m(n,$){g(n,e,$),H(e,s),H(e,t),H(e,a),H(e,l),H(e,i)},p(n,[$]){$&2&&m(s,"srcset",n[1]),$&2&&m(a,"srcset",n[1]),$&2&&!M(i.src,f=n[1])&&m(i,"src",f),$&1&&r!==(r=q(`hns-image-container hns-ar-${n[0]}`)+" svelte-oe75xs")&&m(e,"class",r)},i:P,o:P,d(n){n&&c(e)}}}function ee(u,e,s){let{width:t=600}=e,{height:a=400}=e,{ratio:l="panoramic"}=e,{src:i=`https://via.placeholder.com/${t}x${a}?text=IMG`}=e;return u.$$set=f=>{"width"in f&&s(2,t=f.width),"height"in f&&s(3,a=f.height),"ratio"in f&&s(0,l=f.ratio),"src"in f&&s(1,i=f.src)},[l,i,t,a]}class te extends R{constructor(e){super(),T(this,e,ee,x,A,{width:2,height:3,ratio:0,src:1})}}function se(u){let e,s,t,a,l;const i=u[3].default,f=O(i,u,u[2],null);return{c(){e=S("a"),f&&f.c(),this.h()},l(r){e=z(r,"A",{href:!0,class:!0});var n=V(e);f&&f.l(n),n.forEach(c),this.h()},h(){m(e,"href","/"),m(e,"class",s="hns-button hns-button-"+u[0]+" hns-button-"+u[1])},m(r,n){g(r,e,n),f&&f.m(e,null),t=!0,a||(l=X(e,"click",u[4]),a=!0)},p(r,[n]){f&&f.p&&(!t||n&4)&&U(f,i,r,r[2],t?F(i,r[2],n,null):W(r[2]),null),(!t||n&3&&s!==(s="hns-button hns-button-"+r[0]+" hns-button-"+r[1]))&&m(e,"class",s)},i(r){t||(h(f,r),t=!0)},o(r){p(f,r),t=!1},d(r){r&&c(e),f&&f.d(r),a=!1,l()}}}function ne(u,e,s){let{$$slots:t={},$$scope:a}=e,{kind:l="neutral"}=e,{size:i="normal"}=e;function f(r){Y.call(this,u,r)}return u.$$set=r=>{"kind"in r&&s(0,l=r.kind),"size"in r&&s(1,i=r.size),"$$scope"in r&&s(2,a=r.$$scope)},[l,i,a,t,f]}class re extends R{constructor(e){super(),T(this,e,ne,se,A,{kind:0,size:1})}}function le(u){let e,s;const t=u[2].default,a=O(t,u,u[1],null);return{c(){e=S("div"),a&&a.c(),this.h()},l(l){e=z(l,"DIV",{class:!0});var i=V(e);a&&a.l(i),i.forEach(c),this.h()},h(){m(e,"class","hns-grid svelte-90j13m"),B(e,"masonry",u[0])},m(l,i){g(l,e,i),a&&a.m(e,null),s=!0},p(l,[i]){a&&a.p&&(!s||i&2)&&U(a,t,l,l[1],s?F(t,l[1],i,null):W(l[1]),null),(!s||i&1)&&B(e,"masonry",l[0])},i(l){s||(h(a,l),s=!0)},o(l){p(a,l),s=!1},d(l){l&&c(e),a&&a.d(l)}}}function ae(u,e,s){let{$$slots:t={},$$scope:a}=e,{masonry:l=!1}=e;return u.$$set=i=>{"masonry"in i&&s(0,l=i.masonry),"$$scope"in i&&s(1,a=i.$$scope)},[l,a,t]}class fe extends R{constructor(e){super(),T(this,e,ae,le,A,{masonry:0})}}function ie(u){let e;return{c(){e=j(u[1])},l(s){e=D(s,u[1])},m(s,t){g(s,e,t)},p(s,t){t&2&&N(e,s[1])},d(s){s&&c(e)}}}function ue(u){let e;return{c(){e=j(u[2])},l(s){e=D(s,u[2])},m(s,t){g(s,e,t)},p(s,t){t&4&&N(e,s[2])},d(s){s&&c(e)}}}function $e(u){let e;return{c(){e=j("Read more")},l(s){e=D(s,"Read more")},m(s,t){g(s,e,t)},d(s){s&&c(e)}}}function oe(u){let e,s,t,a,l,i,f;return e=new y({props:{scale:2.2,level:"1",class:"cover__title",$$slots:{default:[ie]},$$scope:{ctx:u}}}),t=new J({props:{class:"cover__description",$$slots:{default:[ue]},$$scope:{ctx:u}}}),i=new re({props:{$$slots:{default:[$e]},$$scope:{ctx:u}}}),{c(){d(e.$$.fragment),s=E(),d(t.$$.fragment),a=E(),l=S("a"),d(i.$$.fragment),this.h()},l(r){v(e.$$.fragment,r),s=I(r),v(t.$$.fragment,r),a=I(r),l=z(r,"A",{href:!0,class:!0});var n=V(l);v(i.$$.fragment,n),n.forEach(c),this.h()},h(){m(l,"href",u[3]),m(l,"class","link")},m(r,n){w(e,r,n),g(r,s,n),w(t,r,n),g(r,a,n),g(r,l,n),w(i,l,null),f=!0},p(r,n){const $={};n&34&&($.$$scope={dirty:n,ctx:r}),e.$set($);const _={};n&36&&(_.$$scope={dirty:n,ctx:r}),t.$set(_);const b={};n&32&&(b.$$scope={dirty:n,ctx:r}),i.$set(b),(!f||n&8)&&m(l,"href",r[3])},i(r){f||(h(e.$$.fragment,r),h(t.$$.fragment,r),h(i.$$.fragment,r),f=!0)},o(r){p(e.$$.fragment,r),p(t.$$.fragment,r),p(i.$$.fragment,r),f=!1},d(r){k(e,r),r&&c(s),k(t,r),r&&c(a),r&&c(l),k(i)}}}function ce(u){let e,s,t,a,l,i,f,r,n;return t=new L({props:{spacing:"small",$$slots:{default:[oe]},$$scope:{ctx:u}}}),{c(){e=S("div"),s=S("div"),d(t.$$.fragment),a=E(),l=S("div"),i=S("img"),this.h()},l($){e=z($,"DIV",{class:!0,style:!0});var _=V(e);s=z(_,"DIV",{class:!0});var b=V(s);v(t.$$.fragment,b),b.forEach(c),a=I(_),l=z(_,"DIV",{class:!0});var o=V(l);i=z(o,"IMG",{class:!0,src:!0,alt:!0}),o.forEach(c),_.forEach(c),this.h()},h(){m(s,"class","cover__content svelte-11jzdwa"),m(i,"class","cover__media__image svelte-11jzdwa"),M(i.src,f=u[0])||m(i,"src",f),m(i,"alt",u[1]),m(l,"class","cover__media svelte-11jzdwa"),m(e,"class","cover svelte-11jzdwa"),m(e,"style",r=`align-items: ${u[4]} `)},m($,_){g($,e,_),H(e,s),w(t,s,null),H(e,a),H(e,l),H(l,i),n=!0},p($,[_]){const b={};_&46&&(b.$$scope={dirty:_,ctx:$}),t.$set(b),(!n||_&1&&!M(i.src,f=$[0]))&&m(i,"src",f),(!n||_&2)&&m(i,"alt",$[1]),(!n||_&16&&r!==(r=`align-items: ${$[4]} `))&&m(e,"style",r)},i($){n||(h(t.$$.fragment,$),n=!0)},o($){p(t.$$.fragment,$),n=!1},d($){$&&c(e),k(t)}}}function me(u,e,s){let{image:t=""}=e,{title:a=""}=e,{description:l=""}=e,{link:i=""}=e,{position:f="end"}=e;return u.$$set=r=>{"image"in r&&s(0,t=r.image),"title"in r&&s(1,a=r.title),"description"in r&&s(2,l=r.description),"link"in r&&s(3,i=r.link),"position"in r&&s(4,f=r.position)},[t,a,l,i,f]}class _e extends R{constructor(e){super(),T(this,e,me,ce,A,{image:0,title:1,description:2,link:3,position:4})}}function ge(u){let e;return{c(){e=j("Heading")},l(s){e=D(s,"Heading")},m(s,t){g(s,e,t)},d(s){s&&c(e)}}}function he(u){let e;return{c(){e=j("Text")},l(s){e=D(s,"Text")},m(s,t){g(s,e,t)},d(s){s&&c(e)}}}function pe(u){let e,s,t,a,l,i;return e=new te({props:{src:"https://picsum.photos/200/300",ratio:"vertical"}}),t=new y({props:{level:"1",class:"hns-heading",$$slots:{default:[ge]},$$scope:{ctx:u}}}),l=new J({props:{class:"hns-text",$$slots:{default:[he]},$$scope:{ctx:u}}}),{c(){d(e.$$.fragment),s=E(),d(t.$$.fragment),a=E(),d(l.$$.fragment)},l(f){v(e.$$.fragment,f),s=I(f),v(t.$$.fragment,f),a=I(f),v(l.$$.fragment,f)},m(f,r){w(e,f,r),g(f,s,r),w(t,f,r),g(f,a,r),w(l,f,r),i=!0},p(f,r){const n={};r&1&&(n.$$scope={dirty:r,ctx:f}),t.$set(n);const $={};r&1&&($.$$scope={dirty:r,ctx:f}),l.$set($)},i(f){i||(h(e.$$.fragment,f),h(t.$$.fragment,f),h(l.$$.fragment,f),i=!0)},o(f){p(e.$$.fragment,f),p(t.$$.fragment,f),p(l.$$.fragment,f),i=!1},d(f){k(e,f),f&&c(s),k(t,f),f&&c(a),k(l,f)}}}function de(u){let e,s,t;return s=new L({props:{spacing:"small",$$slots:{default:[pe]},$$scope:{ctx:u}}}),{c(){e=S("div"),d(s.$$.fragment),this.h()},l(a){e=z(a,"DIV",{class:!0});var l=V(e);v(s.$$.fragment,l),l.forEach(c),this.h()},h(){m(e,"class","block")},m(a,l){g(a,e,l),w(s,e,null),t=!0},p(a,[l]){const i={};l&1&&(i.$$scope={dirty:l,ctx:a}),s.$set(i)},i(a){t||(h(s.$$.fragment,a),t=!0)},o(a){p(s.$$.fragment,a),t=!1},d(a){a&&c(e),k(s)}}}class G extends R{constructor(e){super(),T(this,e,null,de,A,{})}}function ve(u){let e,s,t,a,l,i,f,r,n,$,_,b;return e=new G({}),t=new G({}),l=new G({}),f=new G({}),n=new G({}),_=new G({}),{c(){d(e.$$.fragment),s=E(),d(t.$$.fragment),a=E(),d(l.$$.fragment),i=E(),d(f.$$.fragment),r=E(),d(n.$$.fragment),$=E(),d(_.$$.fragment)},l(o){v(e.$$.fragment,o),s=I(o),v(t.$$.fragment,o),a=I(o),v(l.$$.fragment,o),i=I(o),v(f.$$.fragment,o),r=I(o),v(n.$$.fragment,o),$=I(o),v(_.$$.fragment,o)},m(o,C){w(e,o,C),g(o,s,C),w(t,o,C),g(o,a,C),w(l,o,C),g(o,i,C),w(f,o,C),g(o,r,C),w(n,o,C),g(o,$,C),w(_,o,C),b=!0},i(o){b||(h(e.$$.fragment,o),h(t.$$.fragment,o),h(l.$$.fragment,o),h(f.$$.fragment,o),h(n.$$.fragment,o),h(_.$$.fragment,o),b=!0)},o(o){p(e.$$.fragment,o),p(t.$$.fragment,o),p(l.$$.fragment,o),p(f.$$.fragment,o),p(n.$$.fragment,o),p(_.$$.fragment,o),b=!1},d(o){k(e,o),o&&c(s),k(t,o),o&&c(a),k(l,o),o&&c(i),k(f,o),o&&c(r),k(n,o),o&&c($),k(_,o)}}}function we(u){let e,s;return e=new fe({props:{$$slots:{default:[ve]},$$scope:{ctx:u}}}),{c(){d(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,a){w(e,t,a),s=!0},p(t,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function ke(u){let e,s;return e=new Q({props:{type:"contained",padded:!0,$$slots:{default:[we]},$$scope:{ctx:u}}}),{c(){d(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,a){w(e,t,a),s=!0},p(t,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function be(u){let e,s,t,a,l,i,f,r;return{c(){e=S("h1"),s=j("Welcome to SvelteKit"),t=E(),a=S("p"),l=j("Visit "),i=S("a"),f=j("kit.svelte.dev"),r=j(" to read the documentation"),this.h()},l(n){e=z(n,"H1",{});var $=V(e);s=D($,"Welcome to SvelteKit"),$.forEach(c),t=I(n),a=z(n,"P",{});var _=V(a);l=D(_,"Visit "),i=z(_,"A",{href:!0});var b=V(i);f=D(b,"kit.svelte.dev"),b.forEach(c),r=D(_," to read the documentation"),_.forEach(c),this.h()},h(){m(i,"href","https://kit.svelte.dev")},m(n,$){g(n,e,$),H(e,s),g(n,t,$),g(n,a,$),H(a,l),H(a,i),H(i,f),H(a,r)},p:P,d(n){n&&c(e),n&&c(t),n&&c(a)}}}function Ee(u){let e,s;return e=new Q({props:{$$slots:{default:[be]},$$scope:{ctx:u}}}),{c(){d(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,a){w(e,t,a),s=!0},p(t,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function Ie(u){let e,s,t,a,l,i,f,r;return e=new _e({props:{title:"Showing lost people a way",description:"We are experts at showing lost people a way. It might not be the right way, but at they will have direction.",link:"https://hans.com",image:"https://picsum.photos/200/300"}}),t=new K({props:{$$slots:{default:[ke]},$$scope:{ctx:u}}}),l=new Z({props:{title:"Hans"}}),f=new K({props:{$$slots:{default:[Ee]},$$scope:{ctx:u}}}),{c(){d(e.$$.fragment),s=E(),d(t.$$.fragment),a=E(),d(l.$$.fragment),i=E(),d(f.$$.fragment)},l(n){v(e.$$.fragment,n),s=I(n),v(t.$$.fragment,n),a=I(n),v(l.$$.fragment,n),i=I(n),v(f.$$.fragment,n)},m(n,$){w(e,n,$),g(n,s,$),w(t,n,$),g(n,a,$),w(l,n,$),g(n,i,$),w(f,n,$),r=!0},p(n,[$]){const _={};$&1&&(_.$$scope={dirty:$,ctx:n}),t.$set(_);const b={};$&1&&(b.$$scope={dirty:$,ctx:n}),f.$set(b)},i(n){r||(h(e.$$.fragment,n),h(t.$$.fragment,n),h(l.$$.fragment,n),h(f.$$.fragment,n),r=!0)},o(n){p(e.$$.fragment,n),p(t.$$.fragment,n),p(l.$$.fragment,n),p(f.$$.fragment,n),r=!1},d(n){k(e,n),n&&c(s),k(t,n),n&&c(a),k(l,n),n&&c(i),k(f,n)}}}class je extends R{constructor(e){super(),T(this,e,null,Ie,A,{})}}export{je as default};