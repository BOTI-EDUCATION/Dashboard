import{af as y,ar as O,a9 as h,a4 as S,A as o,k as b,a1 as x,p as A,aq as d}from"./index.e6050e69.js";import{u as T}from"./scopeId.cae28892.js";import{f as $}from"./forwardRefs.c003b6b8.js";import{m as w,f as C,a as I}from"./VOverlay.e8cdaaef.js";const B=y()({name:"VTooltip",props:{id:String,text:String,...O(w({closeOnBack:!1,location:"end",locationStrategy:"connected",minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent","eager"])},emits:{"update:modelValue":t=>!0},setup(t,v){let{slots:i}=v;const n=h(t,"modelValue"),{scopeId:f}=T(),m=S(),r=o(()=>t.id||`v-tooltip-${m}`),l=b(),g=o(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=o(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=o(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition");return x(()=>{const[p]=C(t);return A(I,d({ref:l,class:["v-tooltip"],id:r.value},p,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",eager:!0,activatorProps:d({"aria-describedby":r.value},t.activatorProps)},f),{activator:i.activator,default:function(){var c;for(var e,s=arguments.length,u=new Array(s),a=0;a<s;a++)u[a]=arguments[a];return(c=(e=i.default)==null?void 0:e.call(i,...u))!=null?c:t.text}})}),$({},l)}});export{B as V};