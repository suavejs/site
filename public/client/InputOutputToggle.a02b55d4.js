import{s as t,n as e,S as a,i as c,e as s,t as n,a as o,c as r,b as i,d as h,f as d,g as p,h as l,j as u,l as g,k as f,m as k}from"./index.09b28092.js";const m=[];function y(a,c=e){let s;const n=[];function o(e){if(t(a,e)&&(a=e,s)){const t=!m.length;for(let t=0;t<n.length;t+=1){const e=n[t];e[1](),m.push(e,a)}if(t){for(let t=0;t<m.length;t+=2)m[t][0](m[t+1]);m.length=0}}}return{set:o,update:function(t){o(t(a))},subscribe:function(t,r=e){const i=[t,r];return n.push(i),1===n.length&&(s=c(o)||e),t(a),()=>{const t=n.indexOf(i);-1!==t&&n.splice(t,1),0===n.length&&(s(),s=null)}}}}function b(t){const e=t-1;return e*e*e+1}function x(t,{delay:e=0,duration:a=400,easing:c=b,x:s=0,y:n=0,opacity:o=0}){const r=getComputedStyle(t),i=+r.opacity,h="none"===r.transform?"":r.transform,d=i*(1-o);return{delay:e,duration:a,easing:c,css:(t,e)=>`\n\t\t\ttransform: ${h} translate(${(1-t)*s}px, ${(1-t)*n}px);\n\t\t\topacity: ${i-d*e}`}}function v(t,{delay:e=0,duration:a=400,easing:c=b}){const s=getComputedStyle(t),n=+s.opacity,o=parseFloat(s.height),r=parseFloat(s.paddingTop),i=parseFloat(s.paddingBottom),h=parseFloat(s.marginTop),d=parseFloat(s.marginBottom),p=parseFloat(s.borderTopWidth),l=parseFloat(s.borderBottomWidth);return{delay:e,duration:a,easing:c,css:t=>"overflow: hidden;"+`opacity: ${Math.min(20*t,1)*n};`+`height: ${t*o}px;`+`padding-top: ${t*r}px;`+`padding-bottom: ${t*i}px;`+`margin-top: ${t*h}px;`+`margin-bottom: ${t*d}px;`+`border-top-width: ${t*p}px;`+`border-bottom-width: ${t*l}px;`}}function $(t){var a,c,m,y,b,x,v,$,F;return{c(){a=s("label"),c=s("span"),m=n("input"),y=o(),b=s("input"),x=o(),v=s("span"),$=n("output"),this.h()},l(t){a=r(t,"LABEL",{class:!0},!1);var e=i(a);c=r(e,"SPAN",{style:!0,class:!0},!1);var s=i(c);m=h(s,"input"),s.forEach(d),y=h(e,"\r\n    "),b=r(e,"INPUT",{type:!0,class:!0},!1),i(b).forEach(d),x=h(e,"\r\n    "),v=r(e,"SPAN",{class:!0},!1);var n=i(v);$=h(n,"output"),n.forEach(d),e.forEach(d),this.h()},h(){p(c,"text-align","right"),l(c,"class","svelte-1byh6h9"),u(c,"active",!t.checked),l(b,"type","checkbox"),l(b,"class","svelte-1byh6h9"),l(v,"class","svelte-1byh6h9"),u(v,"active",t.checked),l(a,"class","input-output-toggle svelte-1byh6h9"),F=g(b,"change",t.input_change_handler)},m(e,s){f(e,a,s),k(a,c),k(c,m),k(a,y),k(a,b),b.checked=t.checked,k(a,x),k(a,v),k(v,$)},p(t,e){t.checked&&u(c,"active",!e.checked),t.checked&&(b.checked=e.checked),t.checked&&u(v,"active",e.checked)},i:e,o:e,d(t){t&&d(a),F()}}}function F(t,e,a){let{checked:c}=e;return t.$set=(t=>{"checked"in t&&a("checked",c=t.checked)}),{checked:c,input_change_handler:function(){c=this.checked,a("checked",c)}}}class E extends a{constructor(e){super(),c(this,e,F,$,t,["checked"])}}export{E as I,b as c,x as f,v as s,y as w};