import{a as n,u as d}from"./router.f40f8152.js";import{Q as h,X as v,Y as b,Z as m,a1 as u,p as a,ak as f}from"./index.bb11c4a0.js";const x=h({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...n(),...v(),...b()},setup(e,s){let{slots:t}=s;const{themeClasses:i}=m(e),{densityClasses:r}=d(e);return u(()=>{var o,l;return a(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom,"v-table--hover":e.hover},i.value,r.value]},{default:()=>[(o=t.top)==null?void 0:o.call(t),t.default&&a("div",{class:"v-table__wrapper",style:{height:f(e.height)}},[a("table",null,[t.default()])]),(l=t.bottom)==null?void 0:l.call(t)]})}),{}}});export{x as V};
