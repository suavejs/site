import"./typeof.e7ecc59b.js";import{_ as t,a as n,b as a,c as s,i,s as c,d as e,S as r,e as o,g as f,h,k as u,m as l,q as d,n as m,R as g,T as v,f as p,j as $,w as E,x as w,y as x,z as A,t as S,l as b,r as y}from"./index.edd899e0.js";import{C as N}from"./Content.4f331486.js";function _(t){var n;return{c:function(){n=o("canvas"),this.h()},l:function(t){n=f(t,"CANVAS",{width:!0,height:!0,class:!0},!1),h(n).forEach(u),this.h()},h:function(){l(n,"width",32),l(n,"height",32),l(n,"class","svelte-d0bjik")},m:function(a,s){d(a,n,s),t.canvas_1_binding(n)},p:m,i:m,o:m,d:function(a){a&&u(n),t.canvas_1_binding(null)}}}function j(t,n,a){var s;return g(function(){var t,n=s.getContext("2d");return function a(){t=requestAnimationFrame(a);for(var i=n.getImageData(0,0,s.width,s.height),c=0;c<i.data.length;c+=4){var e=c/4,r=e%s.width,o=e/s.height>>>0,f=window.performance.now(),h=64+128*r/s.width+64*Math.sin(f/1e3),u=64+128*o/s.height+64*Math.cos(f/1e3);i.data[c+0]=h,i.data[c+1]=u,i.data[c+2]=128,i.data[c+3]=255}n.putImageData(i,0,0)}(),function(){cancelAnimationFrame(t)}}),{canvas:s,canvas_1_binding:function(t){v[t?"unshift":"push"](function(){a("canvas",s=t)})}}}var P=function(o){function f(t){var r;return n(this,f),r=a(this,s(f).call(this)),i(e(r),t,j,_,c,[]),r}return t(f,r),f}();function C(t){var n,a,s,i,c,e,r,m,g,v,N,_,j,C,D,I,T,G,V,k,q,F,M,O=new P({});return{c:function(){n=o("div"),O.$$.fragment.c(),a=p(),s=o("h1"),i=S("Great success!"),c=p(),e=o("p"),r=o("strong"),m=S("Try editing this file "),g=o("code"),v=S("src/routes/index.svelte"),N=S(" to test live reloading."),_=p(),j=o("div"),C=o("span"),D=p(),I=o("span"),T=p(),G=o("span"),V=p(),k=o("span"),q=p(),F=o("span"),this.h()},l:function(t){n=f(t,"DIV",{style:!0},!1);var o=h(n);O.$$.fragment.l(o),o.forEach(u),a=$(t,"\n"),s=f(t,"H1",{},!1);var l=h(s);i=$(l,"Great success!"),l.forEach(u),c=$(t,"\n"),e=f(t,"P",{class:!0},!1);var d=h(e);r=f(d,"STRONG",{},!1);var p=h(r);m=$(p,"Try editing this file "),g=f(p,"CODE",{},!1);var E=h(g);v=$(E,"src/routes/index.svelte"),E.forEach(u),N=$(p," to test live reloading."),p.forEach(u),d.forEach(u),_=$(t,"\n"),j=f(t,"DIV",{class:!0},!1);var w=h(j);C=f(w,"SPAN",{class:!0},!1),h(C).forEach(u),D=$(w,"\n    "),I=f(w,"SPAN",{class:!0},!1),h(I).forEach(u),T=$(w,"\n    "),G=f(w,"SPAN",{class:!0},!1),h(G).forEach(u),V=$(w,"\n    "),k=f(w,"SPAN",{class:!0},!1),h(k).forEach(u),q=$(w,"\n    "),F=f(w,"SPAN",{class:!0},!1),h(F).forEach(u),w.forEach(u),this.h()},h:function(){b(n,"height","80px"),l(e,"class","mdc-typography--subtitle1"),l(C,"class","mdi-star"),l(I,"class","mdi-star"),l(G,"class","mdi-star"),l(k,"class","mdi-star"),l(F,"class","mdi-star-outline"),l(j,"class","mdi-set")},m:function(t,o){d(t,n,o),E(O,n,null),d(t,a,o),d(t,s,o),y(s,i),d(t,c,o),d(t,e,o),y(e,r),y(r,m),y(r,g),y(g,v),y(r,N),d(t,_,o),d(t,j,o),y(j,C),y(j,D),y(j,I),y(j,T),y(j,G),y(j,V),y(j,k),y(j,q),y(j,F),M=!0},i:function(t){M||(w(O.$$.fragment,t),M=!0)},o:function(t){x(O.$$.fragment,t),M=!1},d:function(t){t&&u(n),A(O),t&&(u(a),u(s),u(c),u(e),u(_),u(j))}}}function D(t){var n,a,s=new N({props:{$$slots:{default:[C]},$$scope:{ctx:t}}});return{c:function(){n=p(),s.$$.fragment.c(),this.h()},l:function(t){n=$(t,"\n\n"),s.$$.fragment.l(t),this.h()},h:function(){document.title="Sapper project template"},m:function(t,i){d(t,n,i),E(s,t,i),a=!0},p:function(t,n){var a={};t.$$scope&&(a.$$scope={changed:t,ctx:n}),s.$set(a)},i:function(t){a||(w(s.$$.fragment,t),a=!0)},o:function(t){x(s.$$.fragment,t),a=!1},d:function(t){t&&u(n),A(s,t)}}}export default(function(o){function f(t){var r;return n(this,f),r=a(this,s(f).call(this)),i(e(r),t,null,D,c,[]),r}return t(f,r),f}());