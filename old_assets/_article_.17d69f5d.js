import{k as m,O as v,q as t,o as d,b as g,w as a,p as e,m as r,x as n,C as x,c as C,a as w,F as k,V as u,D as b,y as T,bb as B,b6 as D}from"./index.096e80e5.js";import{b as h}from"./route-block.7577f022.js";import{V as A,a as H}from"./VTabs.7f33c4e7.js";import{a as y,V as I}from"./VRow.86930b01.js";import{V as N,a as L}from"./VWindowItem.04eac7a4.js";import{V as R,c as f,a as S,b as j}from"./VCard.02ead318.js";import{V as z}from"./VBtn.bb0efe4e.js";import{V as _}from"./VAvatar.b0b1a1e5.js";import{V as F}from"./VDivider.ecbdc3f7.js";import"./router.0ecb67ce.js";import"./easing.36b781ab.js";import"./VSlideGroup.c7f379a0.js";import"./index.140e4203.js";import"./lazy.5faedddf.js";import"./VImg.489e5981.js";import"./ssrBoot.03a2a4db.js";import"./position.5411af0b.js";const M={class:"text-base mb-3"},W=r("span",null,"Back to help center",-1),q={class:"d-flex justify-space-between flex-wrap mb-2"},E={class:"article-info"},O={class:"text-h6 mb-1"},P=r("p",{class:"mb-1"}," 55 People found this helpful ",-1),U=r("h6",{class:"text-h6"},[b(" Still need help? "),r("a",{href:"javascript:void(0);"},"Contact us?")],-1),G={class:"article-votes d-flex align-center gap-3"},J={__name:"[article]",setup(K){const o=B(),i=m(),l=m(o.params.article),c=m();return v(l,()=>D.get("/pages/help-center/article",{params:{article:l.value,category:o.params.category,subcategory:o.params.subcategory}}).then(p=>{i.value=p.data.activeSubcategory,c.value=p.data.activeArticle}),{immediate:!0}),(p,V)=>t(c)&&t(i)?(d(),g(I,{key:0},{default:a(()=>[e(y,{cols:"12",md:"4"},{default:a(()=>[r("h6",M,n(t(i).title),1),e(A,{modelValue:t(l),"onUpdate:modelValue":V[0]||(V[0]=s=>x(l)?l.value=s:null),direction:"vertical",class:"v-tabs-pill"},{default:a(()=>[(d(!0),C(k,null,w(t(i).articles,s=>(d(),g(H,{key:s.slug,value:s.slug,to:{name:"pages-help-center-category-subcategory-article",params:{category:t(o).params.category,subcategory:t(o).params.subcategory,article:s.slug}}},{default:a(()=>[b(n(s.title),1)]),_:2},1032,["value","to"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(y,{cols:"12",md:"8"},{default:a(()=>[e(N,null,{default:a(()=>[e(L,null,{default:a(()=>[e(R,null,{default:a(()=>[e(f,{class:"pb-0"},{default:a(()=>[e(z,{variant:"tonal",to:{name:"pages-help-center-category-subcategory",params:{category:t(o).params.category,subcategory:t(o).params.subcategory}}},{default:a(()=>[e(u,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),W]),_:1},8,["to"])]),_:1}),e(S,null,{prepend:a(()=>[e(_,{color:"primary",variant:"tonal",rounded:""},{default:a(()=>[e(u,{icon:"tabler-currency-dollar"})]),_:1})]),default:a(()=>[e(j,null,{default:a(()=>[b(n(t(c).title),1)]),_:1})]),_:1}),e(f,{innerHTML:t(c).content},null,8,["innerHTML"]),e(F),e(f,null,{default:a(()=>[r("div",q,[r("div",E,[r("h6",O,n(t(c).title),1),P]),U]),r("div",G,[e(_,{color:"primary",variant:"tonal",rounded:"",size:"30"},{default:a(()=>[e(u,{icon:"tabler-thumb-up"})]),_:1}),e(_,{color:"primary",variant:"tonal",rounded:"",size:"30"},{default:a(()=>[e(u,{icon:"tabler-thumb-down"})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):T("",!0)}};typeof h=="function"&&h(J);export{J as default};
