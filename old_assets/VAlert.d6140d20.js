import{c as D}from"./VAvatar.daa638d4.js";import{a as I,h as L,b as R,i as p,c as w,d as z,k as E,u as F,l as O,f as j,n as M,g as N,p as Q,V as u}from"./router.9ec7c70f.js";import{a as X,c as Y}from"./position.551d7c7c.js";import{Q as Z,an as q,X as G,Y as H,a9 as J,A as o,Z as K,ai as U,a0 as W,at as ee,p as a,V as te}from"./index.4b7a73ae.js";import{V as ae}from"./VBtn.617b168f.js";const le=D("v-alert-title"),se=["success","info","warning","error"],ue=Z({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:q,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>se.includes(e)},...I(),...L(),...R(),...p(),...X(),...w(),...G(),...H(),...z({variant:"flat"})},emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const n=J(e,"modelValue"),s=o(()=>{var l;if(e.icon!==!1)return e.type?(l=e.icon)!=null?l:`$${e.type}`:e.icon}),v=o(()=>{var l;return{color:(l=e.color)!=null?l:e.type,variant:e.variant}}),{themeClasses:m}=K(e),{colorClasses:f,colorStyles:y,variantClasses:b}=E(v),{densityClasses:V}=F(e),{dimensionStyles:k}=O(e),{elevationClasses:C}=j(e),{locationStyles:P}=M(e),{positionClasses:x}=Y(e),{roundedClasses:g}=N(e),{textColorClasses:S,textColorStyles:_}=U(W(e,"borderColor")),{t:h}=ee(),r=o(()=>({"aria-label":h(e.closeLabel),onClick(l){n.value=!1}}));return()=>{var l,i;const T=!!(t.prepend||s.value),$=!!(t.title||e.title),B=!!(e.text||t.text),A=!!(t.close||e.closable);return n.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},m.value,f.value,V.value,C.value,x.value,g.value,b.value],style:[y.value,k.value,P.value],role:"alert"},{default:()=>[Q(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",S.value],style:_.value},null),T&&a(u,{key:"prepend",defaults:{VIcon:{density:e.density,icon:s.value,size:e.prominent?44:28}}},{default:()=>[a("div",{class:"v-alert__prepend"},[t.prepend?t.prepend():s.value&&a(te,null,null)])]}),a("div",{class:"v-alert__content"},[$&&a(le,{key:"title"},{default:()=>[t.title?t.title():e.title]}),B&&(t.text?t.text():e.text),(l=t.default)==null?void 0:l.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),A&&a(u,{key:"close",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var c;return[a("div",{class:"v-alert__close"},[(c=(i=t.close)==null?void 0:i.call(t,{props:r.value}))!=null?c:a(ae,r.value,null)])]}})]})}}});export{ue as V,le as a};
