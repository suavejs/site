import{S as t,i as e,s,e as n,a as r,t as a,c as i,b as o,d as l,f as c,g as m,l as u,h as d,j as p,k as h,n as f,m as g,o as $,p as v,q as w,r as b,u as _,v as E,w as y,x as S,y as x,z as A,A as P,B as j,C as R,D as C,E as L,F as D,G as N,H as W,I as H,J as I,K as O,L as k,M as U}from"./index.18f90a67.js";import{w as q,f as T,c as V}from"./index.54686317.js";import{I as M}from"./index.35dc5c62.js";const B={},J=()=>({});function K(t){var e,s,g,$,v,w;return{c(){e=n("link"),s=r(),g=n("button"),$=a(t.name),this.h()},l(n){e=i(n,"LINK",{href:!0,rel:!0},!1),o(e).forEach(l),s=c(n,"\r\n\r\n\r\n\r\n"),g=i(n,"BUTTON",{class:!0,"aria-label":!0},!1);var r=o(g);$=c(r,t.name),r.forEach(l),this.h()},h(){m(e,"href","https://fonts.googleapis.com/icon?family=Material+Icons"),m(e,"rel","stylesheet"),m(g,"class",v="mdc-icon-button material-icons "+t.classes),m(g,"aria-label",t.label),w=u(g,"click",t.click_handler)},m(t,n){d(document.head,e),p(t,s,n),p(t,g,n),d(g,$)},p(t,e){t.name&&h($,e.name),t.classes&&v!==(v="mdc-icon-button material-icons "+e.classes)&&m(g,"class",v),t.label&&m(g,"aria-label",e.label)},i:f,o:f,d(t){l(e),t&&(l(s),l(g)),w()}}}function z(t,e,s){let{name:n="",label:r="",classes:a=""}=e;return t.$set=(t=>{"name"in t&&s("name",n=t.name),"label"in t&&s("label",r=t.label),"classes"in t&&s("classes",a=t.classes)}),{name:n,label:r,classes:a,click_handler:function(e){g(t,e)}}}class G extends t{constructor(t){super(),e(this,t,z,K,s,["name","label","classes"])}}function F(t){var e,s,u,h,g,_,E,y,S,x,A,P,j,R=new G({props:{name:"menu",classes:"mdc-top-app-bar__navigation-icon--unbounded"}});R.$on("click",t.toggleDrawer);var C=new G({props:{name:"minimize",classes:"mdc-top-app-bar__navigation-icon--unbounded"}});C.$on("click",t.toggleMini);var L=new G({props:{name:"bookmark",label:"Download",classes:"mdc-top-app-bar__action-item--unbounded"}}),D=new G({props:{name:"star",label:"add to favorites",classes:"mdc-top-app-bar__action-item--unbounded"}}),N=new G({props:{name:"more_vert",label:"show more options",classes:"mdc-top-app-bar__action-item--unbounded"}});return{c(){e=n("header"),s=n("div"),u=n("section"),R.$$.fragment.c(),h=r(),C.$$.fragment.c(),g=r(),_=n("span"),E=n("a"),y=a("suavejs"),S=r(),x=n("section"),L.$$.fragment.c(),A=r(),D.$$.fragment.c(),P=r(),N.$$.fragment.c(),this.h()},l(t){e=i(t,"HEADER",{class:!0},!1);var n=o(e);s=i(n,"DIV",{class:!0},!1);var r=o(s);u=i(r,"SECTION",{class:!0},!1);var a=o(u);R.$$.fragment.l(a),h=c(a,"\r\n\t\t\t"),C.$$.fragment.l(a),g=c(a,"\r\n\t\t\t"),_=i(a,"SPAN",{class:!0},!1);var m=o(_);E=i(m,"A",{href:!0,class:!0},!1);var d=o(E);y=c(d,"suavejs"),d.forEach(l),m.forEach(l),a.forEach(l),S=c(r,"\r\n\r\n\t\t"),x=i(r,"SECTION",{class:!0},!1);var p=o(x);L.$$.fragment.l(p),A=c(p,"\r\n\t\t\t"),D.$$.fragment.l(p),P=c(p,"\r\n\t\t\t"),N.$$.fragment.l(p),p.forEach(l),r.forEach(l),n.forEach(l),this.h()},h(){m(E,"href","."),m(E,"class","svelte-130dh7x"),m(_,"class","font-mono mdc-top-app-bar__title"),m(u,"class","mdc-top-app-bar__section mdc-top-app-bar__section--align-start"),m(x,"class","mdc-top-app-bar__section mdc-top-app-bar__section--align-end"),m(s,"class","mdc-top-app-bar__row"),m(e,"class","mdc-elevation--z2 mdc-top-app-bar mdc-top-app-bar--fixed mdc-top-app-bar--dense")},m(t,n){p(t,e,n),d(e,s),d(s,u),$(R,u,null),d(u,h),$(C,u,null),d(u,g),d(u,_),d(_,E),d(E,y),d(s,S),d(s,x),$(L,x,null),d(x,A),$(D,x,null),d(x,P),$(N,x,null),j=!0},p:f,i(t){j||(v(R.$$.fragment,t),v(C.$$.fragment,t),v(L.$$.fragment,t),v(D.$$.fragment,t),v(N.$$.fragment,t),j=!0)},o(t){w(R.$$.fragment,t),w(C.$$.fragment,t),w(L.$$.fragment,t),w(D.$$.fragment,t),w(N.$$.fragment,t),j=!1},d(t){t&&l(e),b(R),b(C),b(L),b(D),b(N)}}}function X(t){let e=_();return{toggleMini:function(){e("toggleMini",{prop:"mini"})},toggleDrawer:function(){e("toggleDrawer",{prop:"drawer"})}}}class Y extends t{constructor(t){super(),e(this,t,X,F,s,[])}}function Q(t){return"[object Date]"===Object.prototype.toString.call(t)}function Z(t,e){if(t===e||t!=t)return()=>t;const s=typeof t;if(s!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const s=e.map((e,s)=>Z(t[s],e));return t=>s.map(e=>e(t))}if("object"===s){if(!t||!e)throw new Error("Object cannot be null");if(Q(t)&&Q(e)){t=t.getTime();const s=(e=e.getTime())-t;return e=>new Date(t+e*s)}const s=Object.keys(e),n={};return s.forEach(s=>{n[s]=Z(t[s],e[s])}),t=>{const e={};return s.forEach(s=>{e[s]=n[s](t)}),e}}if("number"===s){const s=e-t;return e=>t+e*s}throw new Error(`Cannot interpolate ${s} values`)}function tt(t,e={}){const s=q(t);let n,r=t;function a(a,i){r=a;let o=n,l=!1,{delay:c=0,duration:m=400,easing:u=E,interpolate:d=Z}=y(y({},e),i);const p=S()+c;let h;return(n=x(e=>{if(e<p)return!0;l||(h=d(t,a),"function"==typeof m&&(m=m(t,a)),l=!0),o&&(o.abort(),o=null);const n=e-p;return n>m?(s.set(t=a),!1):(s.set(t=h(u(n/m))),!0)})).promise}return{set:a,update:(e,s)=>a(e(r,t),s),subscribe:s.subscribe}}function et(t){var e,s,a,u,h,f,g,_,E,y,S,x,A,L,D,N,W,H,I,O,k,U,q,V,M,B,J,K,z=!t.mini&&st(t),F=new G({props:{name:"account_circle",classes:"mdc-list-item__graphic"}}),X=!t.mini&&nt(),Y=new G({props:{name:"home",classes:"mdc-list-item__graphic"}}),Q=!t.mini&&rt(),Z=new G({props:{name:"help",classes:"mdc-list-item__graphic"}}),tt=!t.mini&&at(),et=new G({props:{name:"book",classes:"mdc-list-item__graphic"}}),ct=!t.mini&&it(),mt=new G({props:{name:"code",classes:"mdc-list-item__graphic"}}),ut=!t.mini&&ot(),dt=new G({props:{name:"beach_access",classes:"mdc-list-item__graphic"}}),pt=!t.mini&&lt();return{c(){z&&z.c(),e=r(),s=n("div"),a=n("nav"),u=n("a"),F.$$.fragment.c(),h=r(),X&&X.c(),g=r(),_=n("a"),Y.$$.fragment.c(),E=r(),Q&&Q.c(),S=r(),x=n("a"),Z.$$.fragment.c(),A=r(),tt&&tt.c(),D=r(),N=n("a"),et.$$.fragment.c(),W=r(),ct&&ct.c(),I=r(),O=n("a"),mt.$$.fragment.c(),k=r(),ut&&ut.c(),q=r(),V=n("a"),dt.$$.fragment.c(),M=r(),pt&&pt.c(),this.h()},l(t){z&&z.l(t),e=c(t,"\n\t\t"),s=i(t,"DIV",{class:!0},!1);var n=o(s);a=i(n,"NAV",{class:!0},!1);var r=o(a);u=i(r,"A",{class:!0,href:!0,"aria-current":!0},!1);var m=o(u);F.$$.fragment.l(m),h=c(m,"\n\t\t\t\t\t\t"),X&&X.l(m),m.forEach(l),g=c(r,"\n\t\t\t\t\t\n\t\t\t\t\t"),_=i(r,"A",{class:!0,href:!0,"aria-current":!0},!1);var d=o(_);Y.$$.fragment.l(d),E=c(d,"\n\t\t\t\t\t\t"),Q&&Q.l(d),d.forEach(l),S=c(r,"\n\n\t\t\t\t\t"),x=i(r,"A",{class:!0,href:!0},!1);var p=o(x);Z.$$.fragment.l(p),A=c(p,"\n\t\t\t\t\t\t"),tt&&tt.l(p),p.forEach(l),D=c(r,"\n\n\t\t\t\t\t"),N=i(r,"A",{rel:!0,class:!0,href:!0},!1);var f=o(N);et.$$.fragment.l(f),W=c(f,"\n\t\t\t\t\t\t"),ct&&ct.l(f),f.forEach(l),I=c(r,"\n\n\t\t\t\t\t"),O=i(r,"A",{class:!0,href:!0},!1);var $=o(O);mt.$$.fragment.l($),k=c($,"\n\t\t\t\t\t\t"),ut&&ut.l($),$.forEach(l),q=c(r,"\n\n\t\t\t\t\t"),V=i(r,"A",{class:!0,href:!0},!1);var v=o(V);dt.$$.fragment.l(v),M=c(v,"\n\t\t\t\t\t\t\t"),pt&&pt.l(v),v.forEach(l),r.forEach(l),n.forEach(l),this.h()},h(){m(u,"class",f="mdc-list-item "+("account"===t.segment?"mdc-list-item--activated":"")+" svelte-1owm58v"),m(u,"href","account"),m(u,"aria-current","page"),m(_,"class",y="mdc-list-item "+(void 0===t.segment?"mdc-list-item--activated":"")+" svelte-1owm58v"),m(_,"href","."),m(_,"aria-current","page"),m(x,"class",L="mdc-list-item "+("about"===t.segment?"mdc-list-item--activated":"")+" svelte-1owm58v"),m(x,"href","about"),m(N,"rel","prefetch"),m(N,"class",H="mdc-list-item "+("blog"===t.segment?"mdc-list-item--activated":"")+" svelte-1owm58v"),m(N,"href","blog"),m(O,"class",U="mdc-list-item "+("playground"===t.segment?"mdc-list-item--activated":"")+" svelte-1owm58v"),m(O,"href","playground"),m(V,"class",B="mdc-list-item "+("components"===t.segment?"mdc-list-item--activated":"")+" svelte-1owm58v"),m(V,"href","components"),m(a,"class","mdc-list"),m(s,"class","mdc-drawer__content")},m(t,n){z&&z.m(t,n),p(t,e,n),p(t,s,n),d(s,a),d(a,u),$(F,u,null),d(u,h),X&&X.m(u,null),d(a,g),d(a,_),$(Y,_,null),d(_,E),Q&&Q.m(_,null),d(a,S),d(a,x),$(Z,x,null),d(x,A),tt&&tt.m(x,null),d(a,D),d(a,N),$(et,N,null),d(N,W),ct&&ct.m(N,null),d(a,I),d(a,O),$(mt,O,null),d(O,k),ut&&ut.m(O,null),d(a,q),d(a,V),$(dt,V,null),d(V,M),pt&&pt.m(V,null),K=!0},p(t,s){s.mini?z&&(R(),w(z,1,1,()=>{z=null}),C()):z?(z.p(t,s),v(z,1)):((z=st(s)).c(),v(z,1),z.m(e.parentNode,e)),s.mini?X&&(X.d(1),X=null):X||((X=nt()).c(),X.m(u,null)),K&&!t.segment||f===(f="mdc-list-item "+("account"===s.segment?"mdc-list-item--activated":"")+" svelte-1owm58v")||m(u,"class",f),s.mini?Q&&(Q.d(1),Q=null):Q||((Q=rt()).c(),Q.m(_,null)),K&&!t.segment||y===(y="mdc-list-item "+(void 0===s.segment?"mdc-list-item--activated":"")+" svelte-1owm58v")||m(_,"class",y),s.mini?tt&&(tt.d(1),tt=null):tt||((tt=at()).c(),tt.m(x,null)),K&&!t.segment||L===(L="mdc-list-item "+("about"===s.segment?"mdc-list-item--activated":"")+" svelte-1owm58v")||m(x,"class",L),s.mini?ct&&(ct.d(1),ct=null):ct||((ct=it()).c(),ct.m(N,null)),K&&!t.segment||H===(H="mdc-list-item "+("blog"===s.segment?"mdc-list-item--activated":"")+" svelte-1owm58v")||m(N,"class",H),s.mini?ut&&(ut.d(1),ut=null):ut||((ut=ot()).c(),ut.m(O,null)),K&&!t.segment||U===(U="mdc-list-item "+("playground"===s.segment?"mdc-list-item--activated":"")+" svelte-1owm58v")||m(O,"class",U),s.mini?pt&&(pt.d(1),pt=null):pt||((pt=lt()).c(),pt.m(V,null)),K&&!t.segment||B===(B="mdc-list-item "+("components"===s.segment?"mdc-list-item--activated":"")+" svelte-1owm58v")||m(V,"class",B)},i(t){K||(v(z),v(F.$$.fragment,t),v(Y.$$.fragment,t),v(Z.$$.fragment,t),v(et.$$.fragment,t),v(mt.$$.fragment,t),v(dt.$$.fragment,t),P(()=>{J||(J=j(s,T,{x:-100,duration:400},!0)),J.run(1)}),K=!0)},o(t){w(z),w(F.$$.fragment,t),w(Y.$$.fragment,t),w(Z.$$.fragment,t),w(et.$$.fragment,t),w(mt.$$.fragment,t),w(dt.$$.fragment,t),J||(J=j(s,T,{x:-100,duration:400},!1)),J.run(0),K=!1},d(t){z&&z.d(t),t&&(l(e),l(s)),b(F),X&&X.d(),b(Y),Q&&Q.d(),b(Z),tt&&tt.d(),b(et),ct&&ct.d(),b(mt),ut&&ut.d(),b(dt),pt&&pt.d(),t&&J&&J.end()}}}function st(t){var e,s,u,h,f,g,$,v;return{c(){e=n("div"),s=n("h3"),u=a("Username"),h=r(),f=n("h6"),g=a("user@suavejs.io"),this.h()},l(t){e=i(t,"DIV",{style:!0,class:!0},!1);var n=o(e);s=i(n,"H3",{class:!0},!1);var r=o(s);u=c(r,"Username"),r.forEach(l),h=c(n,"\n\t\t\t\t\t"),f=i(n,"H6",{class:!0},!1);var a=o(f);g=c(a,"user@suavejs.io"),a.forEach(l),n.forEach(l),this.h()},h(){m(s,"class","mdc-drawer__title"),m(f,"class","mdc-drawer__subtitle"),A(e,"height",t.$headerHeight+"px"),m(e,"class","mdc-drawer__header")},m(t,n){p(t,e,n),d(e,s),d(s,u),d(e,h),d(e,f),d(f,g),v=!0},p(t,s){v&&!t.$headerHeight||A(e,"height",s.$headerHeight+"px")},i(t){v||(P(()=>{$||($=j(e,T,{y:-100,duration:250},!0)),$.run(1)}),v=!0)},o(t){$||($=j(e,T,{y:-100,duration:250},!1)),$.run(0),v=!1},d(t){t&&(l(e),$&&$.end())}}}function nt(t){var e,s;return{c(){e=n("span"),s=a("account"),this.h()},l(t){e=i(t,"SPAN",{class:!0},!1);var n=o(e);s=c(n,"account"),n.forEach(l),this.h()},h(){m(e,"class","mdc-list-item__text")},m(t,n){p(t,e,n),d(e,s)},d(t){t&&l(e)}}}function rt(t){var e,s;return{c(){e=n("span"),s=a("home"),this.h()},l(t){e=i(t,"SPAN",{class:!0},!1);var n=o(e);s=c(n,"home"),n.forEach(l),this.h()},h(){m(e,"class","mdc-list-item__text")},m(t,n){p(t,e,n),d(e,s)},d(t){t&&l(e)}}}function at(t){var e,s;return{c(){e=n("span"),s=a("about"),this.h()},l(t){e=i(t,"SPAN",{class:!0},!1);var n=o(e);s=c(n,"about"),n.forEach(l),this.h()},h(){m(e,"class","mdc-list-item__text")},m(t,n){p(t,e,n),d(e,s)},d(t){t&&l(e)}}}function it(t){var e,s;return{c(){e=n("span"),s=a("blog"),this.h()},l(t){e=i(t,"SPAN",{class:!0},!1);var n=o(e);s=c(n,"blog"),n.forEach(l),this.h()},h(){m(e,"class","mdc-list-item__text")},m(t,n){p(t,e,n),d(e,s)},d(t){t&&l(e)}}}function ot(t){var e,s;return{c(){e=n("span"),s=a("playground"),this.h()},l(t){e=i(t,"SPAN",{class:!0},!1);var n=o(e);s=c(n,"playground"),n.forEach(l),this.h()},h(){m(e,"class","mdc-list-item__text")},m(t,n){p(t,e,n),d(e,s)},d(t){t&&l(e)}}}function lt(t){var e,s;return{c(){e=n("span"),s=a("playground"),this.h()},l(t){e=i(t,"SPAN",{class:!0},!1);var n=o(e);s=c(n,"playground"),n.forEach(l),this.h()},h(){m(e,"class","mdc-list-item__text")},m(t,n){p(t,e,n),d(e,s)},d(t){t&&l(e)}}}function ct(t){var e,s,r=t.show&&et(t);return{c(){e=n("aside"),r&&r.c(),this.h()},l(t){e=i(t,"ASIDE",{style:!0,class:!0},!1);var s=o(e);r&&r.l(s),s.forEach(l),this.h()},h(){A(e,"width",t.$width+"px"),m(e,"class","mdc-elevation--z2 mdc-drawer mdc-top-app-bar--dense-fixed-adjust")},m(t,n){p(t,e,n),r&&r.m(e,null),s=!0},p(t,n){n.show?r?(r.p(t,n),v(r,1)):((r=et(n)).c(),v(r,1),r.m(e,null)):r&&(R(),w(r,1,1,()=>{r=null}),C()),s&&!t.$width||A(e,"width",n.$width+"px")},i(t){s||(v(r),s=!0)},o(t){w(r),s=!1},d(t){t&&l(e),r&&r.d()}}}function mt(t,e,s){let n,r;const a=tt(60,{duration:500,easing:V});L(t,a,t=>{s("$width",n=t)});const i=tt(60,{duration:200,easing:V});L(t,i,t=>{s("$headerHeight",r=t)});let{segment:o,show:l=!0,mini:c=!0}=e,{hideWidth:m=0,miniWidth:u=60,fullWidth:d=200}=e;return t.$set=(t=>{"segment"in t&&s("segment",o=t.segment),"show"in t&&s("show",l=t.show),"mini"in t&&s("mini",c=t.mini),"hideWidth"in t&&s("hideWidth",m=t.hideWidth),"miniWidth"in t&&s("miniWidth",u=t.miniWidth),"fullWidth"in t&&s("fullWidth",d=t.fullWidth)}),t.$$.update=((t={show:1,mini:1,miniWidth:1,fullWidth:1,hideWidth:1})=>{(t.show||t.mini||t.miniWidth||t.fullWidth||t.hideWidth)&&a&&(l?c?a.set(u):a.set(d):a.set(m)),t.mini&&i&&(c?i.set(0):i.set(60))}),{width:a,headerHeight:i,segment:o,show:l,mini:c,hideWidth:m,miniWidth:u,fullWidth:d,$width:n,$headerHeight:r}}class ut extends t{constructor(t){super(),e(this,t,mt,ct,s,["width","headerHeight","segment","show","mini","hideWidth","miniWidth","fullWidth"])}get width(){return this.$$.ctx.width}get headerHeight(){return this.$$.ctx.headerHeight}}function dt(t){var e,s;return{c(){e=n("div"),s=n("div"),this.h()},l(t){e=i(t,"DIV",{class:!0},!1);var n=o(e);s=i(n,"DIV",{class:!0,style:!0},!1),o(s).forEach(l),n.forEach(l),this.h()},h(){m(s,"class","progress svelte-3253v6"),A(s,"width",100*t.p+"%"),m(e,"class","progress-container svelte-3253v6")},m(t,n){p(t,e,n),d(e,s)},p(t,e){t.p&&A(s,"width",100*e.p+"%")},d(t){t&&l(e)}}}function pt(t){var e;return{c(){e=n("div"),this.h()},l(t){e=i(t,"DIV",{class:!0},!1),o(e).forEach(l),this.h()},h(){m(e,"class","fade svelte-3253v6")},m(t,s){p(t,e,s)},d(t){t&&l(e)}}}function ht(t){var e,s,n=t.visible&&dt(t),a=t.p>=.4&&pt();return{c(){n&&n.c(),e=r(),a&&a.c(),s=D()},l(t){n&&n.l(t),e=c(t,"\r\n\r\n"),a&&a.l(t),s=D()},m(t,r){n&&n.m(t,r),p(t,e,r),a&&a.m(t,r),p(t,s,r)},p(t,r){r.visible?n?n.p(t,r):((n=dt(r)).c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),r.p>=.4?a||((a=pt()).c(),a.m(s.parentNode,s)):a&&(a.d(1),a=null)},i:f,o:f,d(t){n&&n.d(t),t&&l(e),a&&a.d(t),t&&l(s)}}}function ft(t,e,s){let n=0,r=!1;return N(()=>{setTimeout(function t(){s("visible",r=!0),s("p",n+=.1);const e=1-n;e>.15&&setTimeout(t,500/e)},250)}),{p:n,visible:r}}class gt extends t{constructor(t){super(),e(this,t,ft,ht,s,[])}}const $t=()=>({}),vt=()=>({class:"main-content mdc-body1 svelte-cgrfg",id:"main-content"});function wt(t){var e,s=new gt({});return{c(){s.$$.fragment.c()},l(t){s.$$.fragment.l(t)},m(t,n){$(s,t,n),e=!0},i(t){e||(v(s.$$.fragment,t),e=!0)},o(t){w(s.$$.fragment,t),e=!1},d(t){b(s,t)}}}function bt(t){var e,s,a,u,h,f,g,_=new M({}),E=t.$preloading&&wt(),y=new Y({});y.$on("toggleMini",t.toggleMini),y.$on("toggleDrawer",t.toggleDrawer);var S=new ut({props:{mini:t.mini,show:t.drawer,segment:t.segment}});const x=t.$$slots.default,A=W(x,t,vt);return{c(){_.$$.fragment.c(),e=r(),E&&E.c(),s=r(),y.$$.fragment.c(),a=r(),S.$$.fragment.c(),u=r(),h=n("main"),f=n("div"),A&&A.c(),this.h()},l(t){_.$$.fragment.l(t),e=c(t,"\n\n"),E&&E.l(t),s=c(t,"\n\n\n\n\t"),y.$$.fragment.l(t),a=c(t,"\n\t"),S.$$.fragment.l(t),u=c(t,"\n\t"),h=i(t,"MAIN",{class:!0},!1);var n=o(h);f=i(n,"DIV",{class:!0,id:!0},!1);var r=o(f);A&&A.l(r),r.forEach(l),n.forEach(l),this.h()},h(){m(f,"class","main-content svelte-cgrfg"),m(f,"id","main-content"),m(h,"class","mdc-drawer-app-content mdc-top-app-bar--dense-fixed-adjust")},m(t,n){$(_,t,n),p(t,e,n),E&&E.m(t,n),p(t,s,n),$(y,t,n),p(t,a,n),$(S,t,n),p(t,u,n),p(t,h,n),d(h,f),A&&A.m(f,null),g=!0},p(t,e){e.$preloading?E?v(E,1):((E=wt()).c(),v(E,1),E.m(s.parentNode,s)):E&&(R(),w(E,1,1,()=>{E=null}),C());var n={};t.mini&&(n.mini=e.mini),t.drawer&&(n.show=e.drawer),t.segment&&(n.segment=e.segment),S.$set(n),A&&A.p&&t.$$scope&&A.p(H(x,e,t,$t),I(x,e,vt))},i(t){g||(v(_.$$.fragment,t),v(E),v(y.$$.fragment,t),v(S.$$.fragment,t),v(A,t),g=!0)},o(t){w(_.$$.fragment,t),w(E),w(y.$$.fragment,t),w(S.$$.fragment,t),w(A,t),g=!1},d(t){b(_,t),t&&l(e),E&&E.d(t),t&&l(s),b(y,t),t&&l(a),b(S,t),t&&(l(u),l(h)),A&&A.d(t)}}}function _t(t,e,s){let n,r;const{page:a,preloading:i,session:o}=pe();L(t,i,t=>{s("$preloading",r=t)}),L(t,o,t=>{s("$session",n=t)});let{layout:l=q({bar:0,bottom:0,footer:0,footerInset:0,left:200,right:0,top:60,drawer:!0,mini:!0})}=e;O("app",{layout:l,login:()=>{const t=window.open(`${window.location.origin}/auth/login`,"login","width=600,height=400");window.addEventListener("message",function e(s){t.close(),window.removeEventListener("message",e),n.user=s.data.user,o.set(n)})},logout:async()=>{(await fetch("/auth/logout",{credentials:"include"})).ok&&(n.user=null,o.set(n))}});let{segment:c}=e,m=!0,u=!0;let{$$slots:d={},$$scope:p}=e;return t.$set=(t=>{"layout"in t&&s("layout",l=t.layout),"segment"in t&&s("segment",c=t.segment),"$$scope"in t&&s("$$scope",p=t.$$scope)}),{preloading:i,session:o,layout:l,segment:c,drawer:m,mini:u,toggleMini:function(){console.log("toggle mini",{mini:u}),s("mini",u=!u)},toggleDrawer:function(){console.log("toggle drawer",{drawer:m}),s("drawer",m=!m)},$preloading:r,$$slots:d,$$scope:p}}class Et extends t{constructor(t){super(),e(this,t,_t,bt,s,["layout","segment"])}}function yt(t){var e,s,r=t.error.stack+"";return{c(){e=n("pre"),s=a(r)},l(t){e=i(t,"PRE",{},!1);var n=o(e);s=c(n,r),n.forEach(l)},m(t,n){p(t,e,n),d(e,s)},p(t,e){t.error&&r!==(r=e.error.stack+"")&&h(s,r)},d(t){t&&l(e)}}}function St(t){var e,s,u,g,$,v,w,b,_,E=t.error.message+"";document.title=e=t.status;var y=t.dev&&t.error.stack&&yt(t);return{c(){s=r(),u=n("h1"),g=a(t.status),$=r(),v=n("p"),w=a(E),b=r(),y&&y.c(),_=D(),this.h()},l(e){s=c(e,"\n\n"),u=i(e,"H1",{class:!0},!1);var n=o(u);g=c(n,t.status),n.forEach(l),$=c(e,"\n\n"),v=i(e,"P",{class:!0},!1);var r=o(v);w=c(r,E),r.forEach(l),b=c(e,"\n\n"),y&&y.l(e),_=D(),this.h()},h(){m(u,"class","svelte-8od9u6"),m(v,"class","svelte-8od9u6")},m(t,e){p(t,s,e),p(t,u,e),d(u,g),p(t,$,e),p(t,v,e),d(v,w),p(t,b,e),y&&y.m(t,e),p(t,_,e)},p(t,s){t.status&&e!==(e=s.status)&&(document.title=e),t.status&&h(g,s.status),t.error&&E!==(E=s.error.message+"")&&h(w,E),s.dev&&s.error.stack?y?y.p(t,s):((y=yt(s)).c(),y.m(_.parentNode,_)):y&&(y.d(1),y=null)},i:f,o:f,d(t){t&&(l(s),l(u),l($),l(v),l(b)),y&&y.d(t),t&&l(_)}}}function xt(t,e,s){let{status:n,error:r}=e;return t.$set=(t=>{"status"in t&&s("status",n=t.status),"error"in t&&s("error",r=t.error)}),{status:n,error:r,dev:!1}}class At extends t{constructor(t){super(),e(this,t,xt,St,s,["status","error"])}}function Pt(t){var e,s,n=[t.level1.props],r=t.level1.component;function a(t){let e={};for(var s=0;s<n.length;s+=1)e=y(e,n[s]);return{props:e}}if(r)var i=new r(a());return{c(){i&&i.$$.fragment.c(),e=D()},l(t){i&&i.$$.fragment.l(t),e=D()},m(t,n){i&&$(i,t,n),p(t,e,n),s=!0},p(t,s){var o=t.level1?k(n,[s.level1.props]):{};if(r!==(r=s.level1.component)){if(i){R();const t=i;w(t.$$.fragment,1,0,()=>{b(t,1)}),C()}r?((i=new r(a())).$$.fragment.c(),v(i.$$.fragment,1),$(i,e.parentNode,e)):i=null}else r&&i.$set(o)},i(t){s||(i&&v(i.$$.fragment,t),s=!0)},o(t){i&&w(i.$$.fragment,t),s=!1},d(t){t&&l(e),i&&b(i,t)}}}function jt(t){var e,s=new At({props:{error:t.error,status:t.status}});return{c(){s.$$.fragment.c()},l(t){s.$$.fragment.l(t)},m(t,n){$(s,t,n),e=!0},p(t,e){var n={};t.error&&(n.error=e.error),t.status&&(n.status=e.status),s.$set(n)},i(t){e||(v(s.$$.fragment,t),e=!0)},o(t){w(s.$$.fragment,t),e=!1},d(t){b(s,t)}}}function Rt(t){var e,s,n,r,a=[jt,Pt],i=[];function o(t){return t.error?0:1}return e=o(t),s=i[e]=a[e](t),{c(){s.c(),n=D()},l(t){s.l(t),n=D()},m(t,s){i[e].m(t,s),p(t,n,s),r=!0},p(t,r){var l=e;(e=o(r))===l?i[e].p(t,r):(R(),w(i[l],1,1,()=>{i[l]=null}),C(),(s=i[e])||(s=i[e]=a[e](r)).c(),v(s,1),s.m(n.parentNode,n))},i(t){r||(v(s),r=!0)},o(t){w(s),r=!1},d(t){i[e].d(t),t&&l(n)}}}function Ct(t){var e,s=[{segment:t.segments[0]},t.level0.props];let n={$$slots:{default:[Rt]},$$scope:{ctx:t}};for(var r=0;r<s.length;r+=1)n=y(n,s[r]);var a=new Et({props:n});return{c(){a.$$.fragment.c()},l(t){a.$$.fragment.l(t)},m(t,s){$(a,t,s),e=!0},p(t,e){var n=t.segments||t.level0?k(s,[t.segments&&{segment:e.segments[0]},t.level0&&e.level0.props]):{};(t.$$scope||t.error||t.status||t.level1)&&(n.$$scope={changed:t,ctx:e}),a.$set(n)},i(t){e||(v(a.$$.fragment,t),e=!0)},o(t){w(a.$$.fragment,t),e=!1},d(t){b(a,t)}}}function Lt(t,e,s){let{stores:n,error:r,status:a,segments:i,level0:o,level1:l=null}=e;return O(B,n),t.$set=(t=>{"stores"in t&&s("stores",n=t.stores),"error"in t&&s("error",r=t.error),"status"in t&&s("status",a=t.status),"segments"in t&&s("segments",i=t.segments),"level0"in t&&s("level0",o=t.level0),"level1"in t&&s("level1",l=t.level1)}),{stores:n,error:r,status:a,segments:i,level0:o,level1:l}}class Dt extends t{constructor(t){super(),e(this,t,Lt,Ct,s,["stores","error","status","segments","level0","level1"])}}const Nt=[/^\/examples.json$/,/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],Wt=[{js:()=>import("./index.617d8b39.js"),css:["index.617d8b39.css","index.35dc5c62.css","ReplWidget.b16fda73.css","Content.1996a647.css"]},{js:()=>import("./index.3a957a2f.js"),css:["index.3a957a2f.css","ReplWidget.b16fda73.css"]},{js:()=>import("./playground.a9454444.js"),css:["ReplWidget.b16fda73.css"]},{js:()=>import("./index.508a94f4.js"),css:[]},{js:()=>import("./account.45fae96f.js"),css:["account.45fae96f.css","Content.1996a647.css"]},{js:()=>import("./about.19d91419.js"),css:["about.19d91419.css","Content.1996a647.css"]},{js:()=>import("./index.b988c0ae.js"),css:["Content.1996a647.css"]},{js:()=>import("./[slug].b52ef05c.js"),css:["Content.1996a647.css"]}],Ht=(t=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/components\/?$/,parts:[{i:1}]},{pattern:/^\/playground\/?$/,parts:[{i:2}]},{pattern:/^\/examples\/?$/,parts:[{i:3}]},{pattern:/^\/account\/?$/,parts:[{i:4}]},{pattern:/^\/about\/?$/,parts:[{i:5}]},{pattern:/^\/blog\/?$/,parts:[{i:6}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:7,params:e=>({slug:t(e[1])})}]}])(decodeURIComponent);const It="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ot,kt,Ut,qt=!1,Tt=[],Vt="{}";const Mt={page:q({}),preloading:q(null),session:q(It&&It.session)};let Bt,Jt;Mt.session.subscribe(async t=>{if(Bt=t,!qt)return;Jt=!0;const e=Zt(new URL(location.href)),s=kt={},{redirect:n,props:r,branch:a}=await ne(e);s===kt&&await se(n,a,r,e.page)});let Kt,zt=null;let Gt,Ft=1;const Xt="undefined"!=typeof history?history:{pushState:(t,e,s)=>{},replaceState:(t,e,s)=>{},scrollRestoration:""},Yt={};function Qt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,s,n=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[s]&&(e[s]=[e[s]]),"object"==typeof e[s]?e[s].push(n):e[s]=n}),e}function Zt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(It.baseUrl))return null;let e=t.pathname.slice(It.baseUrl.length);if(""===e&&(e="/"),!Nt.some(t=>t.test(e)))for(let s=0;s<Ht.length;s+=1){const n=Ht[s],r=n.pattern.exec(e);if(r){const s=Qt(t.search),a=n.parts[n.parts.length-1],i=a.params?a.params(r):{},o={host:location.host,path:e,query:s,params:i};return{href:t.href,route:n,match:r,page:o}}}}function te(){return{x:pageXOffset,y:pageYOffset}}async function ee(t,e,s,n){if(e)Gt=e;else{const t=te();Yt[Gt]=t,e=Gt=++Ft,Yt[Gt]=s?t:{x:0,y:0}}Gt=e,Ot&&Mt.preloading.set(!0);const r=zt&&zt.href===t.href?zt.promise:ne(t);zt=null;const a=kt={},{redirect:i,props:o,branch:l}=await r;if(a===kt&&(await se(i,l,o,t.page),document.activeElement&&document.activeElement.blur(),!s)){let t=Yt[e];if(n){const e=document.getElementById(n.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Yt[Gt]=t,t&&scrollTo(t.x,t.y)}}async function se(t,e,s,n){if(t)return function(t,e={replaceState:!1}){const s=Zt(new URL(t,document.baseURI));return s?(Xt[e.replaceState?"replaceState":"pushState"]({id:Gt},"",t),ee(s,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Mt.page.set(n),Mt.preloading.set(!1),Ot)Ot.$set(s);else{s.stores={page:{subscribe:Mt.page.subscribe},preloading:{subscribe:Mt.preloading.subscribe},session:Mt.session},s.level0={props:await Ut};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)ae(t.nextSibling);ae(t),ae(e)}Ot=new Dt({target:Kt,props:s,hydrate:!0})}Tt=e,Vt=JSON.stringify(n.query),qt=!0,Jt=!1}async function ne(t){const{route:e,page:s}=t,n=s.path.split("/").filter(Boolean);let r=null;const a={error:null,status:200,segments:[n[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{a.error="string"==typeof e?new Error(e):e,a.status=t}};let o;Ut||(Ut=It.preloaded[0]||J.call(i,{host:s.host,path:s.path,query:s.query,params:{}},Bt));let l=1;try{const r=JSON.stringify(s.query),c=e.pattern.exec(s.path);let m=!1;o=await Promise.all(e.parts.map(async(e,o)=>{const u=n[o];if(function(t,e,s,n){if(n!==Vt)return!0;const r=Tt[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(s.slice(1,t+2)))||void 0)}(o,u,c,r)&&(m=!0),a.segments[l]=n[o+1],!e)return{segment:u};const d=l++;if(!Jt&&!m&&Tt[o]&&Tt[o].part===e.i)return Tt[o];m=!1;const{default:p,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(re);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Wt[e.i]);let f;return f=qt||!It.preloaded[o+1]?h?await h.call(i,{host:s.host,path:s.path,query:s.query,params:e.params?e.params(t.match):{}},Bt):{}:It.preloaded[o+1],a[`level${d}`]={component:p,props:f,segment:u,match:c,part:e.i}}))}catch(t){a.error=t,a.status=500,o=[]}return{redirect:r,props:a,branch:o}}function re(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,s)=>{const n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onload=(()=>t()),n.onerror=s,document.head.appendChild(n)})}function ae(t){t.parentNode.removeChild(t)}function ie(t){const e=Zt(new URL(t,document.baseURI));if(e)return zt&&t===zt.href||function(t,e){zt={href:t,promise:e}}(t,ne(e)),zt.promise}let oe;function le(t){clearTimeout(oe),oe=setTimeout(()=>{ce(t)},20)}function ce(t){const e=ue(t.target);e&&"prefetch"===e.rel&&ie(e.href)}function me(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ue(t.target);if(!e)return;if(!e.href)return;const s="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,n=String(s?e.href.baseVal:e.href);if(n===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(s?e.target.baseVal:e.target)return;const r=new URL(n);if(r.pathname===location.pathname&&r.search===location.search)return;const a=Zt(r);if(a){ee(a,null,e.hasAttribute("sapper-noscroll"),r.hash),t.preventDefault(),Xt.pushState({id:Gt},"",r.href)}}function ue(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function de(t){if(Yt[Gt]=te(),t.state){const e=Zt(new URL(location.href));e?ee(e,t.state.id):location.href=location.href}else(function(t){Gt=t})(Ft=Ft+1),Xt.replaceState({id:Gt},"",location.href)}const pe=()=>U(B);!function(t){var e;"scrollRestoration"in Xt&&(Xt.scrollRestoration="manual"),e=t.target,Kt=e,addEventListener("click",me),addEventListener("popstate",de),addEventListener("touchstart",ce),addEventListener("mousemove",le),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Xt.replaceState({id:Ft},"",e);const s=new URL(location.href);if(It.error)return function(t){const{host:e,pathname:s,search:n}=location,{session:r,preloaded:a,status:i,error:o}=It;Ut||(Ut=a&&a[0]),se(null,[],{error:o,status:i,session:r,level0:{props:Ut},level1:{props:{status:i,error:o},component:At},segments:a},{host:e,path:s,query:Qt(n),params:{}})}();const n=Zt(s);return n?ee(n,Ft,!0,t):void 0})}({target:document.body});
