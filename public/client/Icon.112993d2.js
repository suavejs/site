import{S as a,i,s as e,e as s,a as n,t as r,c as t,b as c,f as d,d as m,h as o,m as h,k as l,o as k,n as v}from"./index.09b28092.js";function z(a){var i,e,z,f,u;return{c(){i=s("link"),e=n(),z=s("i"),f=r(a.name),this.h()},l(s){i=t(s,"LINK",{href:!0,rel:!0},!1),c(i).forEach(d),e=m(s,"\r\n\r\n\r\n\r\n"),z=t(s,"I",{class:!0,"aria-hidden":!0},!1);var n=c(z);f=m(n,a.name),n.forEach(d),this.h()},h(){o(i,"href","https://fonts.googleapis.com/icon?family=Material+Icons"),o(i,"rel","stylesheet"),o(z,"class",u="material-icons md-"+(a.dark?"dark":"light")+" "+(a.inactive?"md-inactive":"")+" md-"+a.sizes[a.size]),o(z,"aria-hidden","true")},m(a,s){h(document.head,i),l(a,e,s),l(a,z,s),h(z,f)},p(a,i){a.name&&k(f,i.name),(a.dark||a.inactive||a.size)&&u!==(u="material-icons md-"+(i.dark?"dark":"light")+" "+(i.inactive?"md-inactive":"")+" md-"+i.sizes[i.size])&&o(z,"class",u)},i:v,o:v,d(a){d(i),a&&(d(e),d(z))}}}function f(a,i,e){let{name:s="home",inactive:n=!1,dark:r=!1,size:t="md"}=i;return a.$set=(a=>{"name"in a&&e("name",s=a.name),"inactive"in a&&e("inactive",n=a.inactive),"dark"in a&&e("dark",r=a.dark),"size"in a&&e("size",t=a.size)}),{name:s,inactive:n,dark:r,size:t,sizes:{sm:18,md:24,lg:36,xl:48}}}class u extends a{constructor(a){super(),i(this,a,f,z,e,["name","inactive","dark","size"])}}export{u as I};
