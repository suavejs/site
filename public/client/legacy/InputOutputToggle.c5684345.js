import{s as t,n,_ as a,a as e,b as c,c as o,i as r,d as i,S as s,e as h,t as d,f as u,g as l,h as p,j as f,k as v,l as g,m as y,o as m,p as k,q as b,r as x}from"./index.edd899e0.js";function w(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var a=[],e=!0,c=!1,o=void 0;try{for(var r,i=t[Symbol.iterator]();!(e=(r=i.next()).done)&&(a.push(r.value),!n||a.length!==n);e=!0);}catch(t){c=!0,o=t}finally{try{e||null==i.return||i.return()}finally{if(c)throw o}}return a}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var F=[];function E(a){var e,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,o=[];function r(n){if(t(a,n)&&(a=n,e)){for(var c=!F.length,r=0;r<o.length;r+=1){var i=o[r];i[1](),F.push(i,a)}if(c){for(var s=0;s<F.length;s+=2)F[s][0](F[s+1]);F.length=0}}}return{set:r,update:function(t){r(t(a))},subscribe:function(t){var i=[t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:n];return o.push(i),1===o.length&&(e=c(r)||n),t(a),function(){var t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(e(),e=null)}}}}function S(t){var n=t-1;return n*n*n+1}function _(t,n){var a=n.delay,e=void 0===a?0:a,c=n.duration,o=void 0===c?400:c,r=n.easing,i=void 0===r?S:r,s=n.x,h=void 0===s?0:s,d=n.y,u=void 0===d?0:d,l=n.opacity,p=void 0===l?0:l,f=getComputedStyle(t),v=+f.opacity,g="none"===f.transform?"":f.transform,y=v*(1-p);return{delay:e,duration:o,easing:i,css:function(t,n){return"\n\t\t\ttransform: ".concat(g," translate(").concat((1-t)*h,"px, ").concat((1-t)*u,"px);\n\t\t\topacity: ").concat(v-y*n)}}}function A(t,n){var a=n.delay,e=void 0===a?0:a,c=n.duration,o=void 0===c?400:c,r=n.easing,i=void 0===r?S:r,s=getComputedStyle(t),h=+s.opacity,d=parseFloat(s.height),u=parseFloat(s.paddingTop),l=parseFloat(s.paddingBottom),p=parseFloat(s.marginTop),f=parseFloat(s.marginBottom),v=parseFloat(s.borderTopWidth),g=parseFloat(s.borderBottomWidth);return{delay:e,duration:o,easing:i,css:function(t){return"overflow: hidden;"+"opacity: ".concat(Math.min(20*t,1)*h,";")+"height: ".concat(t*d,"px;")+"padding-top: ".concat(t*u,"px;")+"padding-bottom: ".concat(t*l,"px;")+"margin-top: ".concat(t*p,"px;")+"margin-bottom: ".concat(t*f,"px;")+"border-top-width: ".concat(t*v,"px;")+"border-bottom-width: ".concat(t*g,"px;")}}}function T(t){var a,e,c,o,r,i,s,w,F;return{c:function(){a=h("label"),e=h("span"),c=d("input"),o=u(),r=h("input"),i=u(),s=h("span"),w=d("output"),this.h()},l:function(t){a=l(t,"LABEL",{class:!0},!1);var n=p(a);e=l(n,"SPAN",{style:!0,class:!0},!1);var h=p(e);c=f(h,"input"),h.forEach(v),o=f(n,"\r\n    "),r=l(n,"INPUT",{type:!0,class:!0},!1),p(r).forEach(v),i=f(n,"\r\n    "),s=l(n,"SPAN",{class:!0},!1);var d=p(s);w=f(d,"output"),d.forEach(v),n.forEach(v),this.h()},h:function(){g(e,"text-align","right"),y(e,"class","svelte-1byh6h9"),m(e,"active",!t.checked),y(r,"type","checkbox"),y(r,"class","svelte-1byh6h9"),y(s,"class","svelte-1byh6h9"),m(s,"active",t.checked),y(a,"class","input-output-toggle svelte-1byh6h9"),F=k(r,"change",t.input_change_handler)},m:function(n,h){b(n,a,h),x(a,e),x(e,c),x(a,o),x(a,r),r.checked=t.checked,x(a,i),x(a,s),x(s,w)},p:function(t,n){t.checked&&m(e,"active",!n.checked),t.checked&&(r.checked=n.checked),t.checked&&m(s,"active",n.checked)},i:n,o:n,d:function(t){t&&v(a),F()}}}function B(t,n,a){var e=n.checked;return t.$set=function(t){"checked"in t&&a("checked",e=t.checked)},{checked:e,input_change_handler:function(){e=this.checked,a("checked",e)}}}var I=function(n){function h(n){var a;return e(this,h),a=c(this,o(h).call(this)),r(i(a),n,B,T,t,["checked"]),a}return a(h,s),h}();export{I,w as _,S as c,_ as f,A as s,E as w};
