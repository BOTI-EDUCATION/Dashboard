import{k,aO as F,a7 as p,O as U,Q as X,X as z,Y as A,a9 as E,aD as M,Z as D,ai as Q,ap as S,A as n,a1 as Y,p as l,ak as r,T as Z,a2 as _,au as B}from"./index.096e80e5.js";import{c as j,g as q}from"./router.0ecb67ce.js";function G(e){const t=k(),a=k(!1);if(F){const s=new IntersectionObserver(o=>{e==null||e(o,s),a.value=!!o.find(i=>i.isIntersecting)});p(()=>{s.disconnect()}),U(t,(o,i)=>{i&&(s.unobserve(i),a.value=!1),o&&s.observe(o)},{flush:"post"})}return{intersectionRef:t,isIntersecting:a}}const H=X({name:"VProgressLinear",props:{active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...j(),...z(),...A()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const s=E(e,"modelValue"),{isRtl:o}=M(),{themeClasses:i}=D(e),{textColorClasses:P,textColorStyles:x}=Q(e,"color"),{backgroundColorClasses:R,backgroundColorStyles:T}=S(n(()=>e.bgColor||e.color)),{backgroundColorClasses:h,backgroundColorStyles:C}=S(e,"color"),{roundedClasses:I}=q(e),{intersectionRef:v,isIntersecting:O}=G(),g=n(()=>parseInt(e.max,10)),u=n(()=>parseInt(e.height,10)),m=n(()=>parseFloat(e.bufferValue)/g.value*100),f=n(()=>parseFloat(s.value)/g.value*100),c=n(()=>o.value!==e.reverse),V=n(()=>e.indeterminate?"fade-transition":"slide-x-transition"),y=n(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function N(d){if(!v.value)return;const{left:$,right:L,width:b}=v.value.getBoundingClientRect(),w=c.value?b-d.clientX+(L-b):d.clientX-$;s.value=Math.round(w/b*g.value)}return Y(()=>l(e.tag,{ref:v,class:["v-progress-linear",{"v-progress-linear--active":e.active&&O.value,"v-progress-linear--reverse":c.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},I.value,i.value],style:{height:e.active?r(u.value):0,"--v-progress-linear-height":r(u.value)},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:f.value,onClick:e.clickable&&N},{default:()=>[e.stream&&l("div",{key:"stream",class:["v-progress-linear__stream",P.value],style:{...x.value,[c.value?"left":"right"]:r(-u.value),borderTop:`${r(u.value/2)} dotted`,opacity:y.value,top:`calc(50% - ${r(u.value/4)})`,width:r(100-m.value,"%"),"--v-progress-linear-stream-to":r(u.value*(c.value?1:-1))}},null),l("div",{class:["v-progress-linear__background",R.value],style:[T.value,{opacity:y.value,width:r(e.stream?m.value:100,"%")}]},null),l(Z,{name:V.value},{default:()=>[e.indeterminate?l("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(d=>l("div",{key:d,class:["v-progress-linear__indeterminate",d,h.value],style:C.value},null))]):l("div",{class:["v-progress-linear__determinate",h.value],style:[C.value,{width:r(f.value,"%")}]},null)]}),a.default&&l("div",{class:"v-progress-linear__content"},[a.default({value:f.value,buffer:m.value})])]})),{}}}),ee=_({loading:Boolean},"loader");function ae(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{loaderClasses:n(()=>({[`${t}--loading`]:e.loading}))}}function te(e,t){var a;let{slots:s}=t;return l("div",{class:`${e.name}__loader`},[((a=s.default)==null?void 0:a.call(s,{color:e.color,isActive:e.active}))||l(H,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const J=["static","relative","fixed","absolute","sticky"],se=_({position:{type:String,validator:e=>J.includes(e)}},"position");function ne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{positionClasses:n(()=>e.position?`${t}--${e.position}`:void 0)}}export{te as L,H as V,se as a,ae as b,ne as c,ee as m,G as u};
