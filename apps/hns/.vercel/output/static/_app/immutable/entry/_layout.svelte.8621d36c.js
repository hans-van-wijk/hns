import{S as A,i as S,s as y,e as I,b as v,g as d,v as P,d as $,f as Q,h as c,k as L,y as w,l as E,m as C,z as F,n as o,A as M,B as Z,C as T,q as U,a as B,r as X,c as N,D as u,u as Y,E as G,F as J,G as K,H as R,I as _,J as m,K as j}from"../chunks/index.95b2fb94.js";import{C as x,S as e1}from"../chunks/Titlebar.svelte_svelte_type_style_lang.821120dd.js";import{S as O}from"../chunks/Stack.0b680d4d.js";function W(f,s,l){const e=f.slice();return e[2]=s[l].title,e[3]=s[l].href,e}function z(f){let s,l,e;return l=new O({props:{el:"ul",layout:f[0],spacing:"small",$$slots:{default:[t1]},$$scope:{ctx:f}}}),{c(){s=L("nav"),w(l.$$.fragment),this.h()},l(t){s=E(t,"NAV",{class:!0});var a=C(s);F(l.$$.fragment,a),a.forEach(c),this.h()},h(){o(s,"class","hns-nav-list")},m(t,a){v(t,s,a),M(l,s,null),e=!0},p(t,a){const r={};a&1&&(r.layout=t[0]),a&66&&(r.$$scope={dirty:a,ctx:t}),l.$set(r)},i(t){e||(d(l.$$.fragment,t),e=!0)},o(t){$(l.$$.fragment,t),e=!1},d(t){t&&c(s),Z(l)}}}function D(f){let s,l,e=f[2]+"",t,a,r;return{c(){s=L("li"),l=L("a"),t=U(e),r=B(),this.h()},l(n){s=E(n,"LI",{});var i=C(s);l=E(i,"A",{class:!0,href:!0});var h=C(l);t=X(h,e),h.forEach(c),r=N(i),i.forEach(c),this.h()},h(){o(l,"class","hns-box-link"),o(l,"href",a=f[3])},m(n,i){v(n,s,i),u(s,l),u(l,t),u(s,r)},p(n,i){i&2&&e!==(e=n[2]+"")&&Y(t,e),i&2&&a!==(a=n[3])&&o(l,"href",a)},d(n){n&&c(s)}}}function t1(f){let s,l=f[1],e=[];for(let t=0;t<l.length;t+=1)e[t]=D(W(f,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();s=I()},l(t){for(let a=0;a<e.length;a+=1)e[a].l(t);s=I()},m(t,a){for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(t,a);v(t,s,a)},p(t,a){if(a&2){l=t[1];let r;for(r=0;r<l.length;r+=1){const n=W(t,l,r);e[r]?e[r].p(n,a):(e[r]=D(n),e[r].c(),e[r].m(s.parentNode,s))}for(;r<e.length;r+=1)e[r].d(1);e.length=l.length}},d(t){T(e,t),t&&c(s)}}}function l1(f){let s,l,e=f[1].length>0&&z(f);return{c(){e&&e.c(),s=I()},l(t){e&&e.l(t),s=I()},m(t,a){e&&e.m(t,a),v(t,s,a),l=!0},p(t,[a]){t[1].length>0?e?(e.p(t,a),a&2&&d(e,1)):(e=z(t),e.c(),d(e,1),e.m(s.parentNode,s)):e&&(P(),$(e,1,1,()=>{e=null}),Q())},i(t){l||(d(e),l=!0)},o(t){$(e),l=!1},d(t){e&&e.d(t),t&&c(s)}}}function s1(f,s,l){let{layout:e="vertical"}=s,{items:t=[]}=s;return f.$$set=a=>{"layout"in a&&l(0,e=a.layout),"items"in a&&l(1,t=a.items)},[e,t]}class a1 extends A{constructor(s){super(),S(this,s,s1,l1,y,{layout:0,items:1})}}const r1=f=>({}),q=f=>({});function n1(f){let s,l,e,t,a,r,n,i,h,H,V,g;return{c(){s=L("a"),l=_("svg"),e=_("path"),t=_("path"),a=_("path"),r=_("path"),n=_("path"),i=_("path"),h=_("path"),H=_("path"),V=_("path"),g=_("path"),this.h()},l(k){s=E(k,"A",{href:!0});var b=C(s);l=m(b,"svg",{id:!0,width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,class:!0});var p=C(l);e=m(p,"path",{d:!0,class:!0,fill:!0}),C(e).forEach(c),t=m(p,"path",{d:!0,class:!0,fill:!0}),C(t).forEach(c),a=m(p,"path",{d:!0,class:!0,fill:!0}),C(a).forEach(c),r=m(p,"path",{d:!0,class:!0,fill:!0}),C(r).forEach(c),n=m(p,"path",{d:!0,class:!0,fill:!0}),C(n).forEach(c),i=m(p,"path",{d:!0,class:!0,fill:!0}),C(i).forEach(c),h=m(p,"path",{d:!0,class:!0,fill:!0}),C(h).forEach(c),H=m(p,"path",{d:!0,class:!0,fill:!0}),C(H).forEach(c),V=m(p,"path",{d:!0,class:!0,fill:!0}),C(V).forEach(c),g=m(p,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,class:!0,fill:!0}),C(g).forEach(c),p.forEach(c),b.forEach(c),this.h()},h(){o(e,"d","M48.6307 28.7936H60.5827V25.1936H52.8787V11.6336H48.6307V28.7936Z"),o(e,"class","cneutral svelte-h1g2so"),o(e,"fill","#2F234F"),o(t,"d","M67.6639 26.3936C65.9599 26.3936 65.0719 24.9056 65.0719 22.6736C65.0719 20.4416 65.9599 18.9296 67.6639 18.9296C69.3679 18.9296 70.2799 20.4416 70.2799 22.6736C70.2799 24.9056 69.3679 26.3936 67.6639 26.3936ZM67.6879 29.1776C71.6479 29.1776 74.2399 26.3696 74.2399 22.6736C74.2399 18.9776 71.6479 16.1696 67.6879 16.1696C63.7519 16.1696 61.1119 18.9776 61.1119 22.6736C61.1119 26.3696 63.7519 29.1776 67.6879 29.1776Z"),o(t,"class","cneutral svelte-h1g2so"),o(t,"fill","#2F234F"),o(a,"d","M81.0943 33.0416C82.9183 33.0416 84.5263 32.6336 85.6063 31.6736C86.5903 30.7856 87.2383 29.4416 87.2383 27.5936V16.5056H83.4943V17.8256H83.4463C82.7263 16.7936 81.6223 16.1456 79.9903 16.1456C76.9423 16.1456 74.8303 18.6896 74.8303 22.2896C74.8303 26.0576 77.3983 28.1216 80.1583 28.1216C81.6463 28.1216 82.5823 27.5216 83.3023 26.7056H83.3983V27.9296C83.3983 29.4176 82.7023 30.2816 81.0463 30.2816C79.7503 30.2816 79.1023 29.7296 78.8863 29.0816H75.0943C75.4783 31.6496 77.7103 33.0416 81.0943 33.0416ZM81.0703 25.2176C79.6063 25.2176 78.6463 24.0176 78.6463 22.1696C78.6463 20.2976 79.6063 19.0976 81.0703 19.0976C82.7023 19.0976 83.5663 20.4896 83.5663 22.1456C83.5663 23.8736 82.7743 25.2176 81.0703 25.2176Z"),o(a,"class","cneutral svelte-h1g2so"),o(a,"fill","#2F234F"),o(r,"d","M94.9367 26.3936C93.2327 26.3936 92.3447 24.9056 92.3447 22.6736C92.3447 20.4416 93.2327 18.9296 94.9367 18.9296C96.6407 18.9296 97.5527 20.4416 97.5527 22.6736C97.5527 24.9056 96.6407 26.3936 94.9367 26.3936ZM94.9607 29.1776C98.9207 29.1776 101.513 26.3696 101.513 22.6736C101.513 18.9776 98.9207 16.1696 94.9607 16.1696C91.0247 16.1696 88.3847 18.9776 88.3847 22.6736C88.3847 26.3696 91.0247 29.1776 94.9607 29.1776Z"),o(r,"class","cneutral svelte-h1g2so"),o(r,"fill","#2F234F"),o(n,"d","M102.655 28.7936H106.567V16.5056H102.655V28.7936ZM102.655 14.8016H106.567V11.6336H102.655V14.8016Z"),o(n,"class","cneutral svelte-h1g2so"),o(n,"fill","#2F234F"),o(i,"d","M108.264 32.8496H112.176V27.5216H112.224C112.992 28.5536 114.12 29.1776 115.704 29.1776C118.92 29.1776 121.056 26.6336 121.056 22.6496C121.056 18.9536 119.064 16.1456 115.8 16.1456C114.12 16.1456 112.92 16.8896 112.08 17.9936H112.008V16.5056H108.264V32.8496ZM114.696 26.1536C113.016 26.1536 112.056 24.7856 112.056 22.7936C112.056 20.8016 112.92 19.2896 114.624 19.2896C116.304 19.2896 117.096 20.6816 117.096 22.7936C117.096 24.8816 116.184 26.1536 114.696 26.1536Z"),o(i,"class","cneutral svelte-h1g2so"),o(i,"fill","#2F234F"),o(h,"d","M127.426 29.1776C130.642 29.1776 133.018 27.7856 133.018 25.0976C133.018 21.9536 130.474 21.4016 128.314 21.0416C126.754 20.7536 125.362 20.6336 125.362 19.7696C125.362 19.0016 126.106 18.6416 127.066 18.6416C128.146 18.6416 128.89 18.9776 129.034 20.0816H132.634C132.442 17.6576 130.57 16.1456 127.09 16.1456C124.186 16.1456 121.786 17.4896 121.786 20.0816C121.786 22.9616 124.066 23.5376 126.202 23.8976C127.834 24.1856 129.322 24.3056 129.322 25.4096C129.322 26.2016 128.578 26.6336 127.402 26.6336C126.106 26.6336 125.29 26.0336 125.146 24.8096H121.45C121.57 27.5216 123.826 29.1776 127.426 29.1776Z"),o(h,"class","cneutral svelte-h1g2so"),o(h,"fill","#2F234F"),o(H,"d","M138.331 29.1536C140.035 29.1536 141.115 28.4816 142.003 27.2816H142.075V28.7936H145.819V16.5056H141.907V23.3696C141.907 24.8336 141.091 25.8416 139.747 25.8416C138.499 25.8416 137.899 25.0976 137.899 23.7536V16.5056H134.011V24.5696C134.011 27.3056 135.499 29.1536 138.331 29.1536Z"),o(H,"class","cneutral svelte-h1g2so"),o(H,"fill","#2F234F"),o(V,"d","M147.521 28.7936H151.433V21.9056C151.433 20.4416 152.153 19.4096 153.377 19.4096C154.553 19.4096 155.105 20.1776 155.105 21.4976V28.7936H159.017V21.9056C159.017 20.4416 159.713 19.4096 160.961 19.4096C162.137 19.4096 162.689 20.1776 162.689 21.4976V28.7936H166.601V20.8016C166.601 18.0416 165.209 16.1456 162.425 16.1456C160.841 16.1456 159.521 16.8176 158.561 18.3056H158.513C157.889 16.9856 156.665 16.1456 155.057 16.1456C153.281 16.1456 152.105 16.9856 151.337 18.2576H151.265V16.5056H147.521V28.7936Z"),o(V,"class","cneutral svelte-h1g2so"),o(V,"fill","#2F234F"),o(g,"fill-rule","evenodd"),o(g,"clip-rule","evenodd"),o(g,"d","M8.65417 3.89149C7.22351 4.89185 5.92981 6.0746 4.80676 7.40602C9.39606 6.97995 15.2266 7.67567 21.9958 11.0603C29.2244 14.6745 35.0452 14.7967 39.0962 14.0153C38.7286 12.9024 38.2658 11.8328 37.7177 10.816C33.0804 11.3051 27.1354 10.6577 20.207 7.1936C15.8074 4.9938 11.9292 4.08763 8.65417 3.89149ZM35.0088 6.96027C31.3467 2.86862 26.0248 0.293625 20.1014 0.293625C18.3619 0.293625 16.6741 0.515732 15.0651 0.933105C17.2443 1.52771 19.5593 2.39761 21.9958 3.61589C27.0684 6.15215 31.4478 6.96878 35.0088 6.96027ZM39.9623 17.9217C35.0683 18.8881 28.3102 18.6896 20.207 14.638C12.6314 10.8502 6.60187 10.8979 2.53534 11.8016C2.32544 11.8482 2.12048 11.8972 1.92047 11.9482C1.38806 13.1061 0.963074 14.3237 0.658142 15.5881C0.983826 15.5011 1.32037 15.4184 1.6676 15.3412C6.60101 14.2449 13.5715 14.2925 21.9958 18.5047C29.5715 22.2925 35.601 22.2448 39.6676 21.3411C39.8069 21.3102 39.9442 21.2782 40.0792 21.2452C40.094 20.9299 40.1014 20.6126 40.1014 20.2936C40.1014 19.4911 40.0542 18.6996 39.9623 17.9217ZM39.4262 25.4659C34.5797 26.3132 28.0184 25.988 20.207 22.0824C12.6314 18.2946 6.60187 18.3423 2.53534 19.246C1.63269 19.4465 0.820679 19.6908 0.10437 19.9487C0.102417 20.0634 0.10144 20.1784 0.10144 20.2936C0.10144 31.3393 9.05573 40.2936 20.1014 40.2936C29.3585 40.2936 37.1467 34.0045 39.4262 25.4659Z"),o(g,"class","ccustom svelte-h1g2so"),o(g,"fill","#7F57F1"),o(l,"id","logo-51"),o(l,"width","167"),o(l,"height","41"),o(l,"viewBox","0 0 167 41"),o(l,"fill","none"),o(l,"xmlns","http://www.w3.org/2000/svg"),o(l,"class","svelte-h1g2so"),o(s,"href","/")},m(k,b){v(k,s,b),u(s,l),u(l,e),u(l,t),u(l,a),u(l,r),u(l,n),u(l,i),u(l,h),u(l,H),u(l,V),u(l,g)},p:j,d(k){k&&c(s)}}}function o1(f){let s,l,e;const t=f[2].logo,a=G(t,f,f[3],q),r=a||n1();return l=new a1({props:{layout:"horizontal",items:f[0]}}),{c(){r&&r.c(),s=B(),w(l.$$.fragment)},l(n){r&&r.l(n),s=N(n),F(l.$$.fragment,n)},m(n,i){r&&r.m(n,i),v(n,s,i),M(l,n,i),e=!0},p(n,i){a&&a.p&&(!e||i&8)&&J(a,t,n,n[3],e?R(t,n[3],i,r1):K(n[3]),q);const h={};i&1&&(h.items=n[0]),l.$set(h)},i(n){e||(d(r,n),d(l.$$.fragment,n),e=!0)},o(n){$(r,n),$(l.$$.fragment,n),e=!1},d(n){r&&r.d(n),n&&c(s),Z(l,n)}}}function f1(f){let s,l;return s=new O({props:{layout:"horizontal",spread:!0,$$slots:{default:[o1]},$$scope:{ctx:f}}}),{c(){w(s.$$.fragment)},l(e){F(s.$$.fragment,e)},m(e,t){M(s,e,t),l=!0},p(e,t){const a={};t&9&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){l||(d(s.$$.fragment,e),l=!0)},o(e){$(s.$$.fragment,e),l=!1},d(e){Z(s,e)}}}function i1(f){let s,l,e;return l=new x({props:{type:f[1],padded:!0,$$slots:{default:[f1]},$$scope:{ctx:f}}}),{c(){s=L("header"),w(l.$$.fragment),this.h()},l(t){s=E(t,"HEADER",{class:!0});var a=C(s);F(l.$$.fragment,a),a.forEach(c),this.h()},h(){o(s,"class","hns-header svelte-h1g2so")},m(t,a){v(t,s,a),M(l,s,null),e=!0},p(t,[a]){const r={};a&2&&(r.type=t[1]),a&9&&(r.$$scope={dirty:a,ctx:t}),l.$set(r)},i(t){e||(d(l.$$.fragment,t),e=!0)},o(t){$(l.$$.fragment,t),e=!1},d(t){t&&c(s),Z(l)}}}function c1(f,s,l){let{$$slots:e={},$$scope:t}=s,{navItems:a=[]}=s,{containerWidth:r=""}=s;return f.$$set=n=>{"navItems"in n&&l(0,a=n.navItems),"containerWidth"in n&&l(1,r=n.containerWidth),"$$scope"in n&&l(3,t=n.$$scope)},[a,r,e,t]}class C1 extends A{constructor(s){super(),S(this,s,c1,i1,y,{navItems:0,containerWidth:1})}}function u1(f){let s,l,e,t;return{c(){s=L("div"),l=L("a"),e=_("svg"),t=_("path"),this.h()},l(a){s=E(a,"DIV",{slot:!0});var r=C(s);l=E(r,"A",{href:!0});var n=C(l);e=m(n,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var i=C(e);t=m(i,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),C(t).forEach(c),i.forEach(c),n.forEach(c),r.forEach(c),this.h()},h(){o(t,"fill-rule","evenodd"),o(t,"clip-rule","evenodd"),o(t,"d","M3.95596 1.58272C3.72548 0.502469 2.66292 -0.186411 1.58266 0.0440697C0.502408 0.27455 -0.186472 1.33711 0.0440086 2.41737L9.25555 45.5917L9.26259 45.6247L9.27075 45.6574C9.44291 46.3491 9.55075 46.9623 9.63709 47.5011C9.65142 47.5905 9.66601 47.6844 9.68099 47.7807L9.68104 47.781C9.74538 48.1947 9.81676 48.6536 9.90423 49.002C9.95922 49.221 10.0606 49.5748 10.2684 49.9204C10.4945 50.2966 10.957 50.8341 11.7584 51.0076C12.4893 51.1658 13.0858 50.9244 13.3892 50.7686C13.7112 50.6032 13.9883 50.3862 14.2014 50.2031C14.8335 49.6601 15.7584 48.6433 17.0393 47.2351L17.0394 47.235L17.0395 47.2348C17.3513 46.8921 17.6842 46.5261 18.0391 46.1381C19.926 44.0754 22.6062 41.1915 26.4463 37.3336C29.3432 34.4233 31.5954 33.3969 33.3176 33.2356C34.9934 33.0786 36.5673 33.7049 38.2225 35.0306C39.9099 36.3821 41.4963 38.3121 43.1499 40.4558C43.4069 40.7891 43.6667 41.129 43.9288 41.4721L43.93 41.4737L43.9301 41.4738C45.2892 43.2527 46.7138 45.1174 48.1756 46.5855C48.994 47.4073 49.9724 47.9695 51.1099 48.0932C52.2232 48.2142 53.2238 47.8857 54.0487 47.4383C55.595 46.5996 57.073 45.0193 58.3504 43.6446L58.6249 43.349L58.625 43.3489C59.9102 41.9638 61.1461 40.632 62.4775 39.5988C63.8889 38.5034 65.1887 37.9227 66.4808 37.9227C67.9233 37.9227 69.3937 38.4294 70.9391 39.3348C72.4915 40.2444 74.0032 41.4857 75.5235 42.8218C75.881 43.1359 76.2439 43.4601 76.6092 43.7863C77.7354 44.7922 78.8833 45.8175 79.9583 46.6273C81.3338 47.6633 83.0435 48.7163 84.9038 48.7163C86.4724 48.7163 87.7331 47.7601 88.5812 47.0084C89.175 46.4822 89.8341 45.7974 90.4608 45.1463L90.461 45.1461C90.7547 44.8409 91.0413 44.5432 91.3107 44.2726C93.21 42.365 94.9982 41.0066 97.1859 41.0066C98.3722 41.0066 100.03 41.3938 102.042 42.0987C104.015 42.7899 106.153 43.722 108.254 44.6808C108.949 44.9985 109.648 45.3224 110.333 45.6402L110.335 45.6411L110.336 45.6413C111.678 46.2639 112.971 46.8634 114.099 47.3487C114.959 47.7191 115.777 48.047 116.502 48.2851C117.18 48.5077 117.961 48.7163 118.679 48.7163C120.488 48.7163 123.444 48.2156 126.163 47.1372C128.717 46.1244 131.685 44.3534 132.78 41.4045C132.927 41.4028 133.168 41.424 133.515 41.5167C134.586 41.8037 135.913 42.5742 136.837 43.5016C137.292 43.9588 137.561 44.3668 137.682 44.6676C137.739 44.8102 137.752 44.9002 137.754 44.9429C137.755 44.9764 137.751 44.9848 137.75 44.986L137.75 44.9862C137.749 44.9882 137.73 45.0367 137.638 45.1234C137.542 45.2145 137.366 45.3464 137.062 45.4929C136.439 45.7929 135.412 46.0918 133.81 46.2705C132.712 46.3931 131.922 47.3823 132.044 48.48C132.167 49.5778 133.156 50.3684 134.254 50.2459C136.106 50.0392 137.622 49.6635 138.799 49.0961C139.984 48.5248 140.959 47.6892 141.445 46.5189C141.936 45.3337 141.784 44.1477 141.393 43.1754C141.01 42.2234 140.368 41.3785 139.671 40.6793C138.292 39.2938 136.357 38.1369 134.549 37.6529C133.654 37.4131 132.595 37.2857 131.584 37.5565C130.458 37.858 129.487 38.6412 129.063 39.9185C128.631 41.2221 127.08 42.4705 124.688 43.4189C122.398 44.3273 119.941 44.7163 118.679 44.7163L118.679 44.7163C118.674 44.7161 118.597 44.7129 118.424 44.6752C118.251 44.6377 118.028 44.5762 117.75 44.4849C117.192 44.3013 116.499 44.027 115.68 43.6746C114.601 43.2103 113.398 42.6522 112.092 42.0465L112.092 42.0464L112.091 42.0458C111.394 41.7225 110.667 41.3855 109.915 41.042C107.793 40.0735 105.518 39.0781 103.365 38.3237C101.25 37.583 99.0701 37.0066 97.1859 37.0066C93.2326 37.0066 90.415 39.503 88.4762 41.4503C88.081 41.8472 87.7346 42.208 87.4167 42.539L87.4161 42.5397C86.8699 43.1086 86.408 43.5896 85.9282 44.0148C85.2384 44.6261 84.9431 44.7048 84.9054 44.7148C84.9003 44.7162 84.8999 44.7163 84.9038 44.7163C84.4613 44.7163 83.6763 44.42 82.365 43.4323C81.4352 42.7319 80.4705 41.8706 79.3835 40.9001L79.3834 40.9C78.994 40.5523 78.5889 40.1906 78.164 39.8172C76.6138 38.4549 74.863 36.9978 72.9611 35.8835C71.0522 34.7652 68.8764 33.9227 66.4808 33.9227C63.9347 33.9227 61.7802 35.0767 60.0251 36.4387C58.4223 37.6826 56.9707 39.249 55.7344 40.583L55.7344 40.5831C55.6811 40.6406 55.6282 40.6977 55.5757 40.7543C55.5235 40.8106 55.4717 40.8664 55.4203 40.9217C54.0111 42.4381 52.9942 43.4598 52.1417 43.9221C51.7672 44.1252 51.5923 44.122 51.5422 44.1166L51.5415 44.1165C51.5133 44.1135 51.3404 44.0948 51.0102 43.7632C49.7508 42.4984 48.5192 40.8883 47.1565 39.107L47.155 39.105C46.8814 38.7473 46.6025 38.3828 46.3171 38.0127C44.6728 35.881 42.8275 33.5941 40.723 31.9085C38.5862 30.197 36.0078 28.9661 32.9445 29.253C29.9276 29.5356 26.8538 31.2543 23.6114 34.5118C19.7212 38.42 17.001 41.3466 15.0876 43.4383C14.6654 43.8999 14.2895 44.3127 13.954 44.681L13.9532 44.6819C13.721 44.9368 13.5082 45.1705 13.3129 45.3843C13.2675 45.1731 13.217 44.953 13.1606 44.7248L3.95596 1.58272ZM13.7906 48.0536C13.7933 48.063 13.7947 48.0671 13.7947 48.0666C13.7947 48.0664 13.7944 48.0652 13.7937 48.0631C13.7931 48.0609 13.792 48.0577 13.7906 48.0536ZM67.8824 44.7808C68.8274 44.7808 69.5936 44.0146 69.5936 43.0696C69.5936 42.1245 68.8274 41.3583 67.8824 41.3583C66.9373 41.3583 66.1711 42.1245 66.1711 43.0696C66.1711 44.0146 66.9373 44.7808 67.8824 44.7808Z"),o(t,"fill","black"),o(e,"width","142"),o(e,"height","52"),o(e,"viewBox","0 0 142 52"),o(e,"fill","none"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(l,"href","/"),o(s,"slot","logo")},m(a,r){v(a,s,r),u(s,l),u(l,e),u(e,t)},p:j,d(a){a&&c(s)}}}function h1(f){let s;const l=f[1].default,e=G(l,f,f[2],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,a){e&&e.m(t,a),s=!0},p(t,a){e&&e.p&&(!s||a&4)&&J(e,l,t,t[2],s?R(l,t[2],a,null):K(t[2]),null)},i(t){s||(d(e,t),s=!0)},o(t){$(e,t),s=!1},d(t){e&&e.d(t)}}}function _1(f){let s,l,e,t;return s=new C1({props:{navItems:f[0],$$slots:{logo:[u1]},$$scope:{ctx:f}}}),e=new e1({props:{el:"main",class:"hns-main",$$slots:{default:[h1]},$$scope:{ctx:f}}}),{c(){w(s.$$.fragment),l=B(),w(e.$$.fragment)},l(a){F(s.$$.fragment,a),l=N(a),F(e.$$.fragment,a)},m(a,r){M(s,a,r),v(a,l,r),M(e,a,r),t=!0},p(a,[r]){const n={};r&4&&(n.$$scope={dirty:r,ctx:a}),s.$set(n);const i={};r&4&&(i.$$scope={dirty:r,ctx:a}),e.$set(i)},i(a){t||(d(s.$$.fragment,a),d(e.$$.fragment,a),t=!0)},o(a){$(s.$$.fragment,a),$(e.$$.fragment,a),t=!1},d(a){Z(s,a),a&&c(l),Z(e,a)}}}function m1(f,s,l){let{$$slots:e={},$$scope:t}=s;const a=[{title:"About",href:"/about"}];return f.$$set=r=>{"$$scope"in r&&l(2,t=r.$$scope)},[a,e,t]}class g1 extends A{constructor(s){super(),S(this,s,m1,_1,y,{})}}export{g1 as default};
