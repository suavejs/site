import{S as a,i as t,s as e,e as s,a as c,t as n,c as i,b as r,d as l,f as o,g as d,h,j as m,k as v,n as f,P as b,l as u,U as p,V as $,m as g,o as _,p as k,q as z,r as x}from"./index.18f90a67.js";import{C as E}from"./Content.1996a647.js";function j(a){var t,e,b,u,p;return{c(){t=s("link"),e=c(),b=s("i"),u=n(a.name),this.h()},l(s){t=i(s,"LINK",{href:!0,rel:!0},!1),r(t).forEach(l),e=o(s,"\r\n\r\n\r\n\r\n"),b=i(s,"I",{class:!0,"aria-hidden":!0},!1);var c=r(b);u=o(c,a.name),c.forEach(l),this.h()},h(){d(t,"href","https://fonts.googleapis.com/icon?family=Material+Icons"),d(t,"rel","stylesheet"),d(b,"class",p="material-icons md-"+(a.dark?"dark":"light")+" "+(a.inactive?"md-inactive":"")+" md-"+a.sizes[a.size]),d(b,"aria-hidden","true")},m(a,s){h(document.head,t),m(a,e,s),m(a,b,s),h(b,u)},p(a,t){a.name&&v(u,t.name),(a.dark||a.inactive||a.size)&&p!==(p="material-icons md-"+(t.dark?"dark":"light")+" "+(t.inactive?"md-inactive":"")+" md-"+t.sizes[t.size])&&d(b,"class",p)},i:f,o:f,d(a){l(t),a&&(l(e),l(b))}}}function N(a,t,e){let{name:s="home",inactive:c=!1,dark:n=!1,size:i="md"}=t;return a.$set=(a=>{"name"in a&&e("name",s=a.name),"inactive"in a&&e("inactive",c=a.inactive),"dark"in a&&e("dark",n=a.dark),"size"in a&&e("size",i=a.size)}),{name:s,inactive:c,dark:n,size:i,sizes:{sm:18,md:24,lg:36,xl:48}}}class P extends a{constructor(a){super(),t(this,a,N,j,e,["name","inactive","dark","size"])}}function T(a,t,e){const s=Object.create(a);return s.tab=t[e],s.i=e,s}function q(a){var t,e,f,$,g,_,k,z,x,E,j,N,P,T,q,A=a.tab.label+"";function I(){return a.click_handler_1(a)}return{c(){t=s("button"),e=s("span"),f=s("span"),g=c(),_=s("span"),k=n(A),z=c(),x=s("span"),E=s("span"),N=c(),P=s("span"),T=c(),this.h()},l(a){t=i(a,"BUTTON",{class:!0,role:!0,"aria-selected":!0,tabindex:!0},!1);var s=r(t);e=i(s,"SPAN",{class:!0},!1);var c=r(e);f=i(c,"SPAN",{class:!0,"aria-hidden":!0},!1),r(f).forEach(l),g=o(c,"\r\n                  "),_=i(c,"SPAN",{class:!0},!1);var n=r(_);k=o(n,A),n.forEach(l),c.forEach(l),z=o(s,"\r\n                "),x=i(s,"SPAN",{class:!0},!1);var d=r(x);E=i(d,"SPAN",{class:!0},!1),r(E).forEach(l),d.forEach(l),N=o(s,"\r\n                "),P=i(s,"SPAN",{class:!0},!1),r(P).forEach(l),T=o(s,"\r\n            "),s.forEach(l),this.h()},h(){d(f,"class",$="mdc-tab__icon mdi mdi-"+a.tab.icon+" svelte-2zxjiq"),d(f,"aria-hidden","true"),d(_,"class","mdc-tab__text-label svelte-2zxjiq"),d(e,"class","mdc-tab__content"),d(E,"class","mdc-tab-indicator__content mdc-tab-indicator__content--underline"),d(x,"class",j="mdc-tab-indicator "+(a.active===a.tab?"mdc-tab-indicator--active":"")+" svelte-2zxjiq"),d(P,"class","mdc-tab__ripple"),d(t,"class","mdc-tab svelte-2zxjiq"),d(t,"role","tab"),d(t,"aria-selected","true"),d(t,"tabindex",a.i),b(t,"active",a.tab===a.active),q=[u(t,"click",a.click_handler),u(t,"click",I)]},m(a,s){m(a,t,s),h(t,e),h(e,f),h(e,g),h(e,_),h(_,k),h(t,z),h(t,x),h(x,E),h(t,N),h(t,P),h(t,T)},p(e,s){a=s,e.tabs&&$!==($="mdc-tab__icon mdi mdi-"+a.tab.icon+" svelte-2zxjiq")&&d(f,"class",$),e.tabs&&A!==(A=a.tab.label+"")&&v(k,A),(e.active||e.tabs)&&j!==(j="mdc-tab-indicator "+(a.active===a.tab?"mdc-tab-indicator--active":"")+" svelte-2zxjiq")&&d(x,"class",j),(e.tabs||e.active)&&b(t,"active",a.tab===a.active)},d(a){a&&l(t),p(q)}}}function A(a){for(var t,e,c,n,o=a.tabs,v=[],b=0;b<o.length;b+=1)v[b]=q(T(a,o,b));return{c(){t=s("div"),e=s("div"),c=s("div"),n=s("div");for(var a=0;a<v.length;a+=1)v[a].c();this.h()},l(a){t=i(a,"DIV",{class:!0,role:!0},!1);var s=r(t);e=i(s,"DIV",{class:!0},!1);var o=r(e);c=i(o,"DIV",{class:!0},!1);var d=r(c);n=i(d,"DIV",{class:!0},!1);for(var h=r(n),m=0;m<v.length;m+=1)v[m].l(h);h.forEach(l),d.forEach(l),o.forEach(l),s.forEach(l),this.h()},h(){d(n,"class","mdc-tab-scroller__scroll-content"),d(c,"class","mdc-tab-scroller__scroll-area"),d(e,"class","mdc-tab-scroller"),d(t,"class","mdc-tab-bar mdc-elevation--z2"),d(t,"role","tablist")},m(a,s){m(a,t,s),h(t,e),h(e,c),h(c,n);for(var i=0;i<v.length;i+=1)v[i].m(n,null)},p(a,t){if(a.tabs||a.active){o=t.tabs;for(var e=0;e<o.length;e+=1){const s=T(t,o,e);v[e]?v[e].p(a,s):(v[e]=q(s),v[e].c(),v[e].m(n,null))}for(;e<v.length;e+=1)v[e].d(1);v.length=o.length}},i:f,o:f,d(a){a&&l(t),$(v,a)}}}function I(a,t,e){let{tabs:s=[{label:"Tab 1",icon:"home"},{label:"Tab 2",icon:"favorite"}],active:c=s[0]}=t;return a.$set=(a=>{"tabs"in a&&e("tabs",s=a.tabs),"active"in a&&e("active",c=a.active)}),{tabs:s,active:c,click_handler:function(t){g(a,t)},click_handler_1:function({tab:a}){const t=c=a;return e("active",c),t}}}class S extends a{constructor(a){super(),t(this,a,I,A,e,["tabs","active"])}}function V(a){var t,e,v,b,u,p,$,g=new P({props:{dark:"true",name:"home"}});return{c(){t=s("h1"),e=n("Your account"),v=c(),g.$$.fragment.c(),b=c(),u=s("p"),p=n("This is the 'account' page. There's not much here."),this.h()},l(a){t=i(a,"H1",{class:!0},!1);var s=r(t);e=o(s,"Your account"),s.forEach(l),v=o(a,"\n"),g.$$.fragment.l(a),b=o(a,"\n"),u=i(a,"P",{},!1);var c=r(u);p=o(c,"This is the 'account' page. There's not much here."),c.forEach(l),this.h()},h(){d(t,"class","mdc-typography-headline1")},m(a,s){m(a,t,s),h(t,e),m(a,v,s),_(g,a,s),m(a,b,s),m(a,u,s),h(u,p),$=!0},p:f,i(a){$||(k(g.$$.fragment,a),$=!0)},o(a){z(g.$$.fragment,a),$=!1},d(a){a&&(l(t),l(v)),x(g,a),a&&(l(b),l(u))}}}function y(a){var t,e,s,n=new S({}),i=new E({props:{$$slots:{default:[V]},$$scope:{ctx:a}}});return{c(){t=c(),n.$$.fragment.c(),e=c(),i.$$.fragment.c(),this.h()},l(a){t=o(a,"\n\n"),n.$$.fragment.l(a),e=o(a,"\n"),i.$$.fragment.l(a),this.h()},h(){document.title="Account"},m(a,c){m(a,t,c),_(n,a,c),m(a,e,c),_(i,a,c),s=!0},p(a,t){var e={};a.$$scope&&(e.$$scope={changed:a,ctx:t}),i.$set(e)},i(a){s||(k(n.$$.fragment,a),k(i.$$.fragment,a),s=!0)},o(a){z(n.$$.fragment,a),z(i.$$.fragment,a),s=!1},d(a){a&&l(t),x(n,a),a&&l(e),x(i,a)}}}export default class extends a{constructor(a){super(),t(this,a,null,y,e,[])}}
