import{S as s,i as t,s as e,a as o,d as r,h as n,m as a,k as l,l as c,f as p,o as h,e as f,t as i,c as u,b as g,g as $,j as m,I as d,V as v}from"./index.6f1e7245.js";import{C as j}from"./Content.65fc22a6.js";function x(s,t,e){const o=Object.create(s);return o.post=t[e],o}function b(s){var t,e,o,a,l=s.post.title+"";return{c(){t=f("li"),e=f("a"),o=i(l),this.h()},l(s){t=u(s,"LI",{class:!0},!1);var n=g(t);e=u(n,"A",{rel:!0,href:!0},!1);var a=g(e);o=r(a,l),a.forEach(p),n.forEach(p),this.h()},h(){$(e,"rel","prefetch"),$(e,"href",a="blog/"+s.post.slug),$(t,"class","list-reset")},m(s,r){n(s,t,r),m(t,e),m(e,o)},p(s,t){s.posts&&l!==(l=t.post.title+"")&&d(o,l),s.posts&&a!==(a="blog/"+t.post.slug)&&$(e,"href",a)},d(s){s&&p(t)}}}function E(s){for(var t,e,a,l,c=s.posts,h=[],$=0;$<c.length;$+=1)h[$]=b(x(s,c,$));return{c(){t=f("h1"),e=i("Recent posts"),a=o(),l=f("ul");for(var s=0;s<h.length;s+=1)h[s].c()},l(s){t=u(s,"H1",{},!1);var o=g(t);e=r(o,"Recent posts"),o.forEach(p),a=r(s,"\n\n"),l=u(s,"UL",{},!1);for(var n=g(l),c=0;c<h.length;c+=1)h[c].l(n);n.forEach(p)},m(s,o){n(s,t,o),m(t,e),n(s,a,o),n(s,l,o);for(var r=0;r<h.length;r+=1)h[r].m(l,null)},p(s,t){if(s.posts){c=t.posts;for(var e=0;e<c.length;e+=1){const o=x(t,c,e);h[e]?h[e].p(s,o):(h[e]=b(o),h[e].c(),h[e].m(l,null))}for(;e<h.length;e+=1)h[e].d(1);h.length=c.length}},d(s){s&&(p(t),p(a),p(l)),v(h,s)}}}function C(s){var t,e,f=new j({props:{$$slots:{default:[E]},$$scope:{ctx:s}}});return{c(){t=o(),f.$$.fragment.c(),this.h()},l(s){t=r(s,"\n\n"),f.$$.fragment.l(s),this.h()},h(){document.title="Blog"},m(s,o){n(s,t,o),a(f,s,o),e=!0},p(s,t){var e={};(s.$$scope||s.posts)&&(e.$$scope={changed:s,ctx:t}),f.$set(e)},i(s){e||(l(f.$$.fragment,s),e=!0)},o(s){c(f.$$.fragment,s),e=!1},d(s){s&&p(t),h(f,s)}}}function I({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function L(s,t,e){let{posts:o}=t;return s.$set=(s=>{"posts"in s&&e("posts",o=s.posts)}),{posts:o}}export default class extends s{constructor(s){super(),t(this,s,L,C,e,["posts"])}}export{I as preload};
