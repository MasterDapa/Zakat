import{S as N,i as U,s as V,e as j,c as I,a as W,d as T,b as s,ac as S,f as z,D as A,ad as D,E as v,ae as F,af as G,P as E,J as K,ag as L}from"./vendor-cee19796.js";import{m as M}from"./Button-a7787d19.js";function O(t){let l,e,r,u,o,c;return{c(){l=j("div"),e=j("input"),this.h()},l(n){l=I(n,"DIV",{class:!0});var i=W(l);e=I(i,"INPUT",{"aria-label":!0,type:!0,class:!0,placeholder:!0,maxlength:!0}),i.forEach(T),this.h()},h(){s(e,"aria-label",t[2]),s(e,"type","text"),s(e,"class",r=""+(S(t[7])+" svelte-1i4ktej")),s(e,"placeholder",t[1]),e.disabled=t[3],s(e,"maxlength",t[6]),s(l,"class","relative group")},m(n,i){z(n,l,i),A(l,e),D(e,t[0]),o||(c=[v(e,"input",t[19]),F(u=t[4].call(null,e,t[5])),v(e,"input",t[18]),v(e,"blur",t[8])],o=!0)},p(n,[i]){i&4&&s(e,"aria-label",n[2]),i&128&&r!==(r=""+(S(n[7])+" svelte-1i4ktej"))&&s(e,"class",r),i&2&&s(e,"placeholder",n[1]),i&8&&(e.disabled=n[3]),i&64&&s(e,"maxlength",n[6]),i&1&&e.value!==n[0]&&D(e,n[0]),u&&G(u.update)&&i&32&&u.update.call(null,n[5])},i:E,o:E,d(n){n&&T(l),o=!1,K(c)}}}function Q(t,l,e){let r,{kind:u=""}=l,{placeholder:o}=l,{label:c}=l,{disabled:n}=l,{value:i=""}=l,{use:C=function(a){}}=l,{useProps:k}=l,{basic:h="h-full w-full border group outline-none focus:outline-none ease-linear transition-all duration-150 text-sm"}=l,{spacing:b="p-2"}=l,{radius:g="rounded"}=l,{position:m="flex items-center justify-center"}=l,d,f;function q(a){const P=a.target.value;P.endsWith(" ")&&e(0,i=P.slice(0,-1))}function B(){switch(u){case"primary-outlined":e(16,d="bg-white border-primary text-primary font-bold"),e(17,f="hover:bg-primary active:bg-primary focus:bg-primary hover:text-white active:text-white focus:text-white group-hover:border-primary");break;case"accent-outlined":e(16,d="bg-white border-gray-300"),e(17,f="hover:border-accent active:border-accent focus:border-accent group-hover:border-accent");break;case"disabled":e(16,d="bg-gray-300 border-gray-400 cursor-not-allowed opacity-50");break;default:e(17,f="hover:bg-gray-50 active:bg-gray-50 focus:bg-gray-50;")}}let{addClass:_=""}=l,{removeClass:y=""}=l,{length:w="100"}=l;function H(a){L.call(this,t,a)}function J(){i=this.value,e(0,i)}return t.$$set=a=>{"kind"in a&&e(9,u=a.kind),"placeholder"in a&&e(1,o=a.placeholder),"label"in a&&e(2,c=a.label),"disabled"in a&&e(3,n=a.disabled),"value"in a&&e(0,i=a.value),"use"in a&&e(4,C=a.use),"useProps"in a&&e(5,k=a.useProps),"basic"in a&&e(10,h=a.basic),"spacing"in a&&e(11,b=a.spacing),"radius"in a&&e(12,g=a.radius),"position"in a&&e(13,m=a.position),"addClass"in a&&e(14,_=a.addClass),"removeClass"in a&&e(15,y=a.removeClass),"length"in a&&e(6,w=a.length)},t.$$.update=()=>{t.$$.dirty&512&&u!==null&&B(),t.$$.dirty&261120&&e(7,r=M([h,b,g,m,d,f],{addClass:_,removeClass:y}))},[i,o,c,n,C,k,w,r,q,u,h,b,g,m,_,y,d,f,H,J]}class Y extends N{constructor(l){super();U(this,l,Q,O,V,{kind:9,placeholder:1,label:2,disabled:3,value:0,use:4,useProps:5,basic:10,spacing:11,radius:12,position:13,addClass:14,removeClass:15,length:6})}}export{Y as I};