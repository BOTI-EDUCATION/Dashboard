import{a as b,u as z,c as D,b as k,g as B,f as P,h as R,l as N}from"./router.f40f8152.js";import{Q as v,X as T,Y as j,Z as w,$ as V,a0 as s,A as S,a1 as m,p as t,ak as c,an as $,ag as I,ah as O,ap as h,V as q,k as _,O as E}from"./index.bb11c4a0.js";const Q=v({name:"VTimeline",props:{align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...b(),...T(),...j()},setup(e,d){let{slots:l}=d;const{themeClasses:r}=w(e),{densityClasses:o}=z(e);V({VTimelineDivider:{lineColor:s(e,"lineColor")},VTimelineItem:{density:s(e,"density"),lineInset:s(e,"lineInset")}});const a=S(()=>{const i=e.side?e.side:e.density!=="default"?"end":null;return i&&`v-timeline--side-${i}`}),n=S(()=>{const i=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return i;case"start":return i[0];case"end":return i[1];default:return null}});return m(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,n.value,{"v-timeline--inset-line":!!e.lineInset},r.value,o.value,a.value],style:{"--v-timeline-line-thickness":c(e.lineThickness)}},l)),{}}}),L=v({name:"VTimelineDivider",props:{dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:$,iconColor:String,lineColor:String,...D(),...I(),...k()},setup(e,d){let{slots:l}=d;const{sizeClasses:r,sizeStyles:o}=O(e,"v-timeline-divider__dot"),{backgroundColorStyles:a,backgroundColorClasses:n}=h(s(e,"dotColor")),{roundedClasses:i}=B(e,"v-timeline-divider__dot"),{elevationClasses:u}=P(e),{backgroundColorClasses:f,backgroundColorStyles:y}=h(s(e,"lineColor"));return V({VIcon:{color:s(e,"iconColor"),icon:s(e,"icon"),size:s(e,"size")}}),m(()=>{var g;var C;return t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot}]},[t("div",{class:["v-timeline-divider__before",f.value],style:y.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",u.value,i.value,r.value],style:o.value},[t("div",{class:["v-timeline-divider__inner-dot",n.value,i.value],style:a.value},[(g=(C=l.default)==null?void 0:C.call(l))!=null?g:e.icon?t(q,null,null):void 0])]),t("div",{class:["v-timeline-divider__after",f.value],style:y.value},null)])}),{}}}),U=v({name:"VTimelineItem",props:{density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:$,iconColor:String,lineInset:[Number,String],...D(),...k(),...I(),...T(),...R()},setup(e,d){let{slots:l}=d;const{dimensionStyles:r}=N(e),o=_(0),a=_();return E(a,n=>{var u;var i;!n||(o.value=(u=(i=n.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:i.getBoundingClientRect().width)!=null?u:0)},{flush:"post"}),m(()=>{var n,i;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot}],style:{"--v-timeline-dot-size":c(o.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${c(e.lineInset)})`:c(0)}},[t("div",{class:"v-timeline-item__body",style:r.value},[(n=l.default)==null?void 0:n.call(l)]),t(L,{ref:a,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:l.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((i=l.opposite)==null?void 0:i.call(l))])])}),{}}});export{Q as V,U as a};
