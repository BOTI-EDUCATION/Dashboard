import{Q as i,A as r,a1 as u,p as n,G as s,H as m}from"./index.4b7a73ae.js";import{a as l}from"./index.7a00345f.js";import{m as c,M as v}from"./VImg.e357ba01.js";const V=i({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...c({transition:{component:l}})},setup(e,o){let{slots:t}=o;const a=r(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return u(()=>n(v,{transition:e.transition},{default:()=>[s(n("div",{class:"v-counter"},[t.default?t.default({counter:a.value,max:e.max,value:e.value}):a.value]),[[m,e.active]])]})),{}}});export{V};
