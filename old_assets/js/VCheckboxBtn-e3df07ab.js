import{m as d,V as m}from"./VSelectionControl-1c78c438.js";import{a2 as f,an as k,Q as b,a9 as o,A as c,a1 as x,p as I,aq as h,az as V}from"./index-5b2e12ce.js";const v=f({indeterminate:Boolean,indeterminateIcon:{type:k,default:"$checkboxIndeterminate"},...d({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),C=b({name:"VCheckboxBtn",props:v(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,i){let{slots:r}=i;const n=o(e,"indeterminate"),t=o(e,"modelValue");function l(a){n.value&&(n.value=!1)}const u=c(()=>e.indeterminate?e.indeterminateIcon:e.falseIcon),s=c(()=>e.indeterminate?e.indeterminateIcon:e.trueIcon);return x(()=>I(m,h(e,{modelValue:t.value,"onUpdate:modelValue":[a=>t.value=a,l],class:"v-checkbox-btn",type:"checkbox",inline:!0,falseIcon:u.value,trueIcon:s.value,"aria-checked":e.indeterminate?"mixed":void 0}),r)),{}}});function P(e){return V(e,Object.keys(C.props))}export{C as V,P as f,v as m};
