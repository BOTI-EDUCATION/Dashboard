import{Q as i,be as m,bf as v,a1 as c,p as u,X as f,bg as y,aE as p,k as b,O as V}from"./index.822dd088.js";import{u as L}from"./ssrBoot.e41710e6.js";const g=i({name:"VLayout",props:m(),setup(e,l){let{slots:a}=l;const{layoutClasses:t,layoutStyles:s,getLayoutItem:o,items:n,layoutRef:d}=v(e);return c(()=>{var r;return u("div",{ref:d,class:t.value,style:s.value},[(r=a.default)==null?void 0:r.call(a)])}),{getLayoutItem:o,items:n}}});const k=i({name:"VMain",props:{scrollable:Boolean,...f({tag:"main"})},setup(e,l){let{slots:a}=l;const{mainStyles:t}=y(),{ssrBootStyles:s}=L();return c(()=>{var o,n;return u(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[t.value,s.value]},{default:()=>[e.scrollable?u("div",{class:"v-main__scroller"},[(o=a.default)==null?void 0:o.call(a)]):(n=a.default)==null?void 0:n.call(a)]})}),{}}}),B=(e=void 0)=>{const{mdAndDown:l,name:a}=p(),t=e||l,s=b(!0);return(()=>{s.value=!t.value})(),V(a,()=>{s.value=!t.value}),{isLeftSidebarOpen:s}};export{k as V,g as a,B as u};
