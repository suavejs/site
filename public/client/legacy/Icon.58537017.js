import{_ as a,a as i,b as n,c as e,i as s,s as t,d as r,S as c,e as d,f as o,t as m,g as h,h as v,k as f,j as l,m as u,r as k,q as z,u as g,n as p}from"./index.edd899e0.js";function I(a){var i,n,e,s,t;return{c:function(){i=d("link"),n=o(),e=d("i"),s=m(a.name),this.h()},l:function(t){i=h(t,"LINK",{href:!0,rel:!0},!1),v(i).forEach(f),n=l(t,"\r\n\r\n\r\n\r\n"),e=h(t,"I",{class:!0,"aria-hidden":!0},!1);var r=v(e);s=l(r,a.name),r.forEach(f),this.h()},h:function(){u(i,"href","https://fonts.googleapis.com/icon?family=Material+Icons"),u(i,"rel","stylesheet"),u(e,"class",t="material-icons md-"+(a.dark?"dark":"light")+" "+(a.inactive?"md-inactive":"")+" md-"+a.sizes[a.size]),u(e,"aria-hidden","true")},m:function(a,t){k(document.head,i),z(a,n,t),z(a,e,t),k(e,s)},p:function(a,i){a.name&&g(s,i.name),(a.dark||a.inactive||a.size)&&t!==(t="material-icons md-"+(i.dark?"dark":"light")+" "+(i.inactive?"md-inactive":"")+" md-"+i.sizes[i.size])&&u(e,"class",t)},i:p,o:p,d:function(a){f(i),a&&(f(n),f(e))}}}function x(a,i,n){var e=i.name,s=void 0===e?"home":e,t=i.inactive,r=void 0!==t&&t,c=i.dark,d=void 0!==c&&c,o=i.size,m=void 0===o?"md":o;return a.$set=function(a){"name"in a&&n("name",s=a.name),"inactive"in a&&n("inactive",r=a.inactive),"dark"in a&&n("dark",d=a.dark),"size"in a&&n("size",m=a.size)},{name:s,inactive:r,dark:d,size:m,sizes:{sm:18,md:24,lg:36,xl:48}}}var j=function(d){function o(a){var c;return i(this,o),c=n(this,e(o).call(this)),s(r(c),a,x,I,t,["name","inactive","dark","size"]),c}return a(o,c),o}();export{j as I};
